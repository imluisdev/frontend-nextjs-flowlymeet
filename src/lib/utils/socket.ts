import { Socket } from 'socket.io-client';
import { Participant } from '../types/room.types';
import { Message, SignalPayload } from '../types/webrtc.types';

export interface SocketEventHandlers {
  onUserJoined: (userId: string, participants: Participant[]) => void;
  onUserDisconnected: (userId: string) => void;
  onMessage: (message: Message) => void;
  onMediaStateChange: (userId: string, hasVideo: boolean, hasAudio: boolean) => void;
  onScreenShareStart: (userId: string) => void;
  onScreenShareStop: (userId: string) => void;
  onSignal: (payload: SignalPayload) => void;
}

export const setupSocketEvents = (socket: Socket, handlers: SocketEventHandlers) => {
  socket.on('user-joined', ({ userId, participants }) => {
    handlers.onUserJoined(userId, participants);
  });

  socket.on('user-disconnected', ({ userId }) => {
    handlers.onUserDisconnected(userId);
  });

  socket.on('message', ({ from, message, timestamp }) => {
    handlers.onMessage({ text: message, timestamp, from });
  });

  socket.on('participant-media-change', ({ userId, hasVideo, hasAudio }) => {
    handlers.onMediaStateChange(userId, hasVideo, hasAudio);
  });

  socket.on('screen-share-started', ({ userId }) => {
    handlers.onScreenShareStart(userId);
  });

  socket.on('screen-share-stopped', ({ userId }) => {
    handlers.onScreenShareStop(userId);
  });

  socket.on('signal', (payload: SignalPayload) => {
    handlers.onSignal(payload);
  });
};

export const emitJoinRoom = (socket: Socket, roomId: string) => {
  socket.emit('join-room', { room: roomId });
};

export const emitLeaveRoom = (socket: Socket, roomId: string) => {
  socket.emit('leave-room', { room: roomId });
};

export const emitMediaStateChange = (
  socket: Socket,
  roomId: string,
  hasVideo: boolean,
  hasAudio: boolean
) => {
  socket.emit('media-state-change', {
    room: roomId,
    hasVideo,
    hasAudio
  });
};

export const emitScreenShareStart = (socket: Socket, roomId: string) => {
  socket.emit('start-screen-share', { room: roomId });
};

export const emitScreenShareStop = (socket: Socket, roomId: string) => {
  socket.emit('stop-screen-share', { room: roomId });
};

export const emitMessage = (socket: Socket, roomId: string, message: string) => {
  socket.emit('broadcast-message', {
    room: roomId,
    message
  });
};