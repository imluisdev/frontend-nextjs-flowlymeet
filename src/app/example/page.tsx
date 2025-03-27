'use client';

import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';

export default function VideoChat() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<string[]>([]);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const peerConnection = useRef<RTCPeerConnection | null>(null);

  useEffect(() => {
    const newSocket = io('http://localhost:2000', {
      path: '/socket.io',
      transports: ['websocket', 'polling'],
    });

    newSocket.on('connect', () => {
      console.log('Connected to server');
    });

    newSocket.on('video-offer', async ({ userId, sdpOffer }) => {
      try {
        if (!peerConnection.current) {
          setupPeerConnection();
        }
        await peerConnection.current?.setRemoteDescription(new RTCSessionDescription(sdpOffer));
        const answer = await peerConnection.current?.createAnswer();
        await peerConnection.current?.setLocalDescription(answer);
        
        newSocket.emit('video-answer', {
          room: roomId,
          targetUserId: userId,
          sdpAnswer: answer
        });
      } catch (error) {
        console.error('Error handling video offer:', error);
      }
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const setupPeerConnection = () => {
    peerConnection.current = new RTCPeerConnection({
      iceServers: [{ urls: 'stun:stun.l.google.com:19302' }]
    });

    peerConnection.current.ontrack = (event) => {
      if (remoteVideoRef.current) {
        remoteVideoRef.current.srcObject = event.streams[0];
      }
    };

    peerConnection.current.onicecandidate = (event) => {
      if (event.candidate) {
        socket?.emit('ice-candidate', {
          room: roomId,
          candidate: event.candidate
        });
      }
    };
  };

  const joinRoom = () => {
    if (socket && roomId) {
      socket.emit('join-room', { room: roomId });
    }
  };

  const startVideo = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      setupPeerConnection();
      stream.getTracks().forEach(track => {
        peerConnection.current?.addTrack(track, stream);
      });

      const offer = await peerConnection.current?.createOffer();
      await peerConnection.current?.setLocalDescription(offer);

      socket?.emit('share-video', {
        room: roomId,
        videoEnabled: true,
        sdpOffer: offer
      });
    } catch (error) {
      console.error('Error starting video:', error);
    }
  };

  const sendMessage = () => {
    if (socket && message && roomId) {
      socket.emit('broadcast-message', { room: roomId, message });
      setMessages(prev => [...prev, `Me: ${message}`]);
      setMessage('');
    }
  };

  return (
    <div className="p-4">
      <div className="mb-4">
        <input
          type="text"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
          placeholder="Enter Room ID"
          className="border p-2 mr-2"
        />
        <button onClick={joinRoom} className="bg-blue-500 text-white p-2 rounded">
          Join Room
        </button>
        <button onClick={startVideo} className="bg-green-500 text-white p-2 rounded ml-2">
          Start Video
        </button>
      </div>

      <div className="flex gap-4 mb-4">
        <div>
          <h3>Local Video</h3>
          <video ref={localVideoRef} autoPlay playsInline muted className="border" />
        </div>
        <div>
          <h3>Remote Video</h3>
          <video ref={remoteVideoRef} autoPlay playsInline className="border" />
        </div>
      </div>

      <div className="mb-4">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
          className="border p-2 mr-2"
        />
        <button onClick={sendMessage} className="bg-blue-500 text-white p-2 rounded">
          Send Message
        </button>
      </div>

      <div className="border p-4">
        <h3>Messages:</h3>
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
    </div>
  );
}
