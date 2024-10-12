'use client';

import { useState } from 'react';

import Info from './info';
import Participants from './participants';
import Toolbar from './toolbar';
import CursorsPresence from './cursors-presence';
import { useHistory, useCanUndo, useCanRedo } from '@/liveblocks.config';
import { type CanvasState, CanvasMode } from '@/types/canvas';

type CanvasProps = {
  boardId: string;
};

const Canvas: React.FC<CanvasProps> = ({ boardId }) => {
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();

  return (
    <main className='relative h-full w-full touch-none bg-neutral-100'>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar
        canvasState={canvasState}
        setCanvasState={setCanvasState}
        undo={history.undo}
        redo={history.redo}
        canUndo={canUndo}
        canRedo={canRedo}
      />
      <svg className='h-screen w-screen'>
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
