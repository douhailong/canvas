'use client';

import { memo } from 'react';
import { MousePointer2 } from 'lucide-react';

import { useOther } from '@/liveblocks.config';
import { connectionIdToColor } from '@/lib/utils';

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
      width={500}
      height={500}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <MousePointer2
        className='h-5 w-5'
        style={{
          fill: connectionIdToColor(connectionId),
          color: connectionIdToColor(connectionId)
        }}
      />
      <p
        className='absolute left-5 rounded-md px-1.5 py-0.5 text-xs font-semibold text-white'
        style={{ backgroundColor: connectionIdToColor(connectionId) }}
      >
        {name}
      </p>
    </foreignObject>
  );
});

Cursor.displayName = 'Cursor';

export default Cursor;
