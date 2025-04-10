"use client"
import { Room } from '@/components/room/Room';
import { RoomPageProps } from '@/lib/types/room.types';
import { notFound } from 'next/navigation';
import { isValidRoomId } from '@/lib/utils/room.validation';

const RoomPage = ({ params }: RoomPageProps) => {
  if (!isValidRoomId(params.id)) {
    notFound();
  }

  return (
    <section className="container mx-auto p-4 space-y-4">
      <Room roomId={params.id} />
    </section>
  );
};

export default RoomPage;