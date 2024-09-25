'use client';

import Info from './info';
import Participants from './participants';
import Toolbar from './toolbar';
import { useSelf } from '@/liveblocks.config';

type CanvasProps = {
  boardId: string;
};

const Canvas: React.FC<CanvasProps> = ({ boardId }) => {
  const info = useSelf(me => me.info);

  console.log(info, 'info------------------info');

  return (
    <main className='relative h-full w-full touch-none bg-neutral-100'>
      <Info />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
