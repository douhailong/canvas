'use client';

import { useCallback, useState } from 'react';
import { nanoid } from 'nanoid';
import { LiveObject } from '@liveblocks/client';
import { pointerEventToCanvasPoint } from '@/lib/utils';

import Info from './info';
import Participants from './participants';
import Toolbar from './toolbar';
import CursorsPresence from './cursors-presence';
import {
  useHistory,
  useCanUndo,
  useCanRedo,
  useMutation,
  useStorage
} from '@/liveblocks.config';
import {
  type CanvasState,
  type Camera,
  type Color,
  type Point,
  CanvasMode,
  LayerType
} from '@/types/canvas';

const MAX_LAYERS = 100;

type CanvasProps = {
  boardId: string;
};

const Canvas: React.FC<CanvasProps> = ({ boardId }) => {
  const [camera, setCamera] = useState<Camera>({ x: 0, y: 0 });
  const [canvasState, setCanvasState] = useState<CanvasState>({
    mode: CanvasMode.None
  });
  const [lastUsedColor, setLastUsedColor] = useState<Color>({
    r: 0,
    g: 0,
    b: 0
  });

  const history = useHistory();
  const canUndo = useCanUndo();
  const canRedo = useCanRedo();
  const layerIds = useStorage(root => root.layerIds);

  const insertLayer = useMutation(
    (
      { storage, setMyPresence },
      layerType:
        | LayerType.Ellipse
        | LayerType.Rectangle
        | LayerType.Text
        | LayerType.Note,
      position: Point
    ) => {
      const layers = storage.get('layers');

      if (layers.size >= MAX_LAYERS) {
        return;
      }

      const layerIds = storage.get('layerIds');
      const layerId = nanoid();
      const layer = new LiveObject({
        type: layerType,
        x: position.x,
        y: position.y,
        width: 100,
        height: 100,
        fill: lastUsedColor
      });

      layerIds.push(layerId);
      layers.set(layerId, layer);

      setMyPresence({ selection: [layerId] }, { addToHistory: true });
      setCanvasState({ mode: CanvasMode.None });
    },
    [lastUsedColor]
  );

  const onWheel = useCallback((e: React.WheelEvent) => {
    setCamera(camera => ({
      x: camera.x - e.deltaX,
      y: camera.y - e.deltaY
    }));
  }, []);

  const onPointerMove = useMutation(
    ({ setMyPresence }, e: React.PointerEvent) => {
      e.preventDefault();

      const current = pointerEventToCanvasPoint(e, camera);

      setMyPresence({ cursor: current });
    },
    []
  );

  const onPointerLeave = useMutation(
    ({ setMyPresence }) => setMyPresence({ cursor: null }),
    []
  );

  const onPointerUp = useMutation(({}, e) => {}, []);

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
      <svg
        className='h-screen w-screen'
        onWheel={onWheel}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <g>
          <CursorsPresence />
        </g>
      </svg>
    </main>
  );
};

export default Canvas;
