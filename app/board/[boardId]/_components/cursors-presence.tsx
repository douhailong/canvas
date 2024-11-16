'use client';

import { memo } from 'react';

import { useOthersConnectionIds } from '@/liveblocks.config';
import Cursor from './cursor';

type CursorsPresenceProps = {};

const Cursors = () => {
  const ids = useOthersConnectionIds();

  console.log(ids, 'ids idsv');

  return (
    <>
      {ids.map(connectionId => (
        <Cursor key={connectionId} connectionId={connectionId} />
      ))}
    </>
  );
};

const CursorsPresence: React.FC<CursorsPresenceProps> = memo(({}) => {
  return <Cursors />;
});

CursorsPresence.displayName = 'CursorsPresence';

export default CursorsPresence;
