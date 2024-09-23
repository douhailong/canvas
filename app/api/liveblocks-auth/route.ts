import { Liveblocks } from '@liveblocks/node';
import { ConvexClient } from 'convex/browser';
import { auth } from '@clerk/nextjs';

import { api } from '@/convex/_generated/api';

const convex = new ConvexClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

const liveblocks = new Liveblocks({
  secret:
    'sk_prod_fXjSBfuTCtNuO8c4ILehh1HspOhtzr2WTFt_g16APrBX1HPHY72t7NAwXuw9UEWn'
});

export async function POST(req: Request) {}
