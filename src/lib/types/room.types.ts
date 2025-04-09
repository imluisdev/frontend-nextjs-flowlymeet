export interface RoomPageProps {
    params: {
      id: string;
    };
}

export interface Participant {
    id: string;
    hasVideo: boolean;
    hasAudio: boolean;
    isScreenSharing: boolean;
}
  