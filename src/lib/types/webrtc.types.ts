import { Participant } from './room.types';
import { Socket } from 'socket.io-client';
export interface Message {
  text: string;
  timestamp: string;
  from: string;
}

export interface RoomState {
  socket: Socket;
  localStream: MediaStream | null;
  screenStream: MediaStream | null;
  peers: Record<string, RTCPeerConnection>;
  participants: Participant[];
  messages: Message[];
}

export interface MediaToggleOptions {
  type: 'video' | 'audio';
  stream: MediaStream;
  socket: Socket;
  roomId: string;
}

export interface PeerConnectionConfig {
  userId: string;
  type: 'video' | 'screen' | 'audio';
  stream: MediaStream | null;
  socket: Socket;
  roomId: string;
  onTrack?: (stream: MediaStream) => void;
}

export interface SignalData {
  type: string;
  sdp?: string;
  candidate?: RTCIceCandidateInit;
}

export interface SignalPayload {
  from: string;
  signal: SignalData;
  type: 'video' | 'screen' | 'audio';
}