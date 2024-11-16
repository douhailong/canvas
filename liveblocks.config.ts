import {
  type LiveMap,
  type LiveObject,
  type LiveList,
  createClient
} from '@liveblocks/client';
import { createRoomContext } from '@liveblocks/react';

import type { Layer, Color } from '@/types/canvas';

const client = createClient({
  throttle: 16,
  authEndpoint: '/api/liveblocks-auth'
});

type Presence = {
  cursor: { x: number; y: number } | null;
  selection: string[];
};

type Storage = {
  layers: LiveMap<string, LiveObject<Layer>>;
  layerIds: LiveList<string>;
};

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
    useOthersConnectionIds,
    useMutation
  }
} = createRoomContext<Presence, Storage, UserMeta, RoomEvent, ThreadMetadata>(
  client
);
