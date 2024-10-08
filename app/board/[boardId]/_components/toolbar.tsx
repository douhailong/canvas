'use client';

import {
  Circle,
  MousePointer2,
  Pencil,
  Redo2,
  Square,
  StickyNote,
  Type,
  Undo2
} from 'lucide-react';

import ToolButton from './tool-button';
import { type CanvasState, CanvasMode } from '@/types/canvas';

type ToolbarProps = {
  canvasState: CanvasState;
  setCanvasState: (state: CanvasState) => void;
  undo: () => void;
  redo: () => void;
  canUndo: boolean;
  canRedo: boolean;
};
const Toolbar: React.FC<ToolbarProps> = ({
  canvasState,
  setCanvasState,
  undo,
  redo,
  canUndo,
  canRedo
}) => {
  return (
    <div className='absolute left-2 top-1/2 flex -translate-y-1/2 flex-col gap-y-4'>
      <div className='flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Select'
          icon={MousePointer2}
          onClick={() => {}}
          isActive={canvasState.mode === CanvasMode.None}
        />
        <ToolButton
          label='Text'
          icon={Type}
          onClick={() => {}}
          isActive={canvasState.mode === CanvasMode.Inserting}
        />
        <ToolButton
          label='Sticky note'
          icon={StickyNote}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label='Rectangle'
          icon={Square}
          onClick={() => {}}
          isActive={false}
        />
        <ToolButton
          label='Ellipse'
          icon={Circle}
          onClick={() => {}}
          isActive={true}
        />
        <ToolButton
          label='Pencil'
          icon={Pencil}
          onClick={() => {}}
          isActive={true}
        />
      </div>
      <div className='flex flex-col items-center gap-y-1 rounded-md bg-white p-1.5 shadow-md'>
        <ToolButton
          label='Undo'
          icon={Undo2}
          onClick={undo}
          disabled={!canUndo}
        />
        <ToolButton
          label='Redo'
          icon={Redo2}
          onClick={redo}
          disabled={!canRedo}
        />
      </div>
    </div>
  );
};

export const ToolbarSkeleton = () => {
  return (
    <div className='absolute left-2 top-1/2 flex h-[360px] w-[52px] -translate-y-1/2 flex-col gap-y-4 rounded-md bg-white shadow-md' />
  );
};

export default Toolbar;
