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
import { type CanvasState, CanvasMode, LayerType } from '@/types/canvas';

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
          onClick={() => setCanvasState({ mode: CanvasMode.None })}
          isActive={canvasState.mode === CanvasMode.None}
        />
        <ToolButton
          label='Text'
          icon={Type}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Text
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Text
          }
        />
        <ToolButton
          label='Sticky note'
          icon={StickyNote}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Note
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Note
          }
        />
        <ToolButton
          label='Rectangle'
          icon={Square}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Rectangle
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Rectangle
          }
        />
        <ToolButton
          label='Ellipse'
          icon={Circle}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Inserting,
              layerType: LayerType.Ellipse
            })
          }
          isActive={
            canvasState.mode === CanvasMode.Inserting &&
            canvasState.layerType === LayerType.Ellipse
          }
        />
        <ToolButton
          label='Pencil'
          icon={Pencil}
          onClick={() =>
            setCanvasState({
              mode: CanvasMode.Pencil
            })
          }
          isActive={canvasState.mode === CanvasMode.Pencil}
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
