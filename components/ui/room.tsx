'use client';

import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense
} from '@liveblocks/react/suspense';

type RoomProps = {
  roomId: string;
  children: React.ReactNode;
  fallback: React.ReactNode | null;
};

const Room: React.FC<RoomProps> = ({ children, roomId, fallback }) => {
  return (
    <LiveblocksProvider publicApiKey='pk_prod_vRf2piZtsEZvR-Hjy6BawczWw2mKhasllxZd6bhGGh88j3eJ4sr2P_sbndbAfTqd'>
      <RoomProvider id={roomId}>
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
