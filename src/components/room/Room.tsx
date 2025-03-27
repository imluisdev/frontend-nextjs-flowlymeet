'use client';

import { useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useRoom } from '@/lib/hooks/useRoom';

interface RoomProps {
  roomId: string;
}

export const Room = ({ roomId }: RoomProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const screenRef = useRef<HTMLVideoElement>(null);
  
  const {
    localStream,
    screenStream,
    participants,
    messages,
    message,
    setMessage,
    toggleMedia,
    toggleScreenShare,
    sendMessage,
    disconnect
  } = useRoom(roomId);

  // Set local stream to video element when it's available
  if (localStream && videoRef.current) {
    videoRef.current.srcObject = localStream;
  }

  // Set screen share stream to video element when it's available
  if (screenStream && screenRef.current) {
    screenRef.current.srcObject = screenStream;
  }

  return (
    <div className="container mx-auto p-4 space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Video Conference Room ({participants.length} participants)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  muted
                  className="w-full rounded-lg"
                />
                <div className="absolute bottom-4 left-4 space-x-2">
                  <Button onClick={() => toggleMedia('video')}>Toggle Video</Button>
                  <Button onClick={() => toggleMedia('audio')}>Toggle Audio</Button>
                  <Button onClick={toggleScreenShare}>
                    {screenStream ? 'Stop Sharing' : 'Share Screen'}
                  </Button>
                </div>
              </div>
              {screenStream && (
                <video
                  ref={screenRef}
                  autoPlay
                  playsInline
                  className="w-full rounded-lg"
                />
              )}
            </div>
            
            <div className="h-40 overflow-y-auto border border-gray-200 rounded-lg p-2 mb-4">
              {messages.map((msg, index) => (
                <div key={index} className="p-2 bg-gray-50 rounded mb-2">
                  <span className="font-semibold">{msg.from}: </span>
                  <span>{msg.text}</span>
                  <span className="text-xs text-gray-500 ml-2">
                    {new Date(msg.timestamp).toLocaleTimeString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              />
              <Button onClick={sendMessage}>Send</Button>
              <Button variant="destructive" onClick={disconnect}>
                Disconnect
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};