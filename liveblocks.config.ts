import { createClient } from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

const client = createClient({
  authEndpoint: '/api/liveblocks-auth'
});

type Presence = {
  cursor: { x: number; y: number } | null;
};
type Storage = {};
type UserMeta = {
  id?: string;
  info: {
    name?: string;
    picture?: string;
  };
};
type RoomEvent = {};
type ThreadMetadata = {};

export const {
  suspense: {
    RoomProvider,
    useMyPresence,
    useStorage,
    useSelf,
    useOthers,
    useOther,
    useHistory,
    useCanRedo,
    useCanUndo,
    useOthersConnectionIds
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);
