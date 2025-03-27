import { Participant } from './room.types';

export interface Message {
  text: string;
  timestamp: string;
  from: string;
}

export interface RoomState {
  socket: any;
  localStream: MediaStream | null;
  screenStream: MediaStream | null;
  peers: Record<string, RTCPeerConnection>;
  participants: Participant[];
  messages: Message[];
}

export interface MediaToggleOptions {
  type: 'video' | 'audio';
  stream: MediaStream;
  socket: any;
  roomId: string;
}

export interface PeerConnectionConfig {
  userId: string;
  type: 'video' | 'screen' | 'audio';
  stream: MediaStream | null;
  socket: any;
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