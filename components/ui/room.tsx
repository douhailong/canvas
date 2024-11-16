'use client';

import {
  LiveblocksProvider,
  ClientSideSuspense
} from '@liveblocks/react/suspense';
import { type LiveObject, LiveMap, LiveList } from '@liveblocks/client';

import type { Layer } from '@/types/canvas';
import { RoomProvider } from '@/liveblocks.config';

type RoomProps = {
  roomId: string;
  children: React.ReactNode;
  fallback: React.ReactNode | null;
};

const Room: React.FC<RoomProps> = ({ children, roomId, fallback }) => {
  return (
    <LiveblocksProvider publicApiKey='pk_prod_vRf2piZtsEZvR-Hjy6BawczWw2mKhasllxZd6bhGGh88j3eJ4sr2P_sbndbAfTqd'>
      <RoomProvider
        id={roomId}
        initialPresence={{ cursor: null, selection: [] }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([])
        }}
      >
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
};

export default Room;
