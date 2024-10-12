'use client';

import { memo } from 'react';
import { MousePointer2 } from 'lucide-react';

import { useOther } from '@/liveblocks.config';

type CursorProps = {
  connectionId: number;
};

const Cursor: React.FC<CursorProps> = memo(({ connectionId }) => {
  const { info, presence } = useOther(connectionId, user => user);

  const name = info.name || 'Teammate';
  const cursor = presence.cursor;

  if (!cursor) {
    return null;
  }

  const { x, y } = cursor;

  return (
    <foreignObject
      className='relative drop-shadow-md'
      width={50}
      hanging={50}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <MousePointer2 className='h-5 w-5' />
    </foreignObject>
  );
});

Cursor.displayName = 'Cursor';

export default Cursor;
