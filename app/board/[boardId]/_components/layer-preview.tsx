'use client';

import { memo } from 'react';

import { useStorage } from '@/liveblocks.config';

type LayerPreviewProps = {
  id: string;
  onLayerPointerDown: (e: React.PointerEvent, layerId: string) => void;
  selectedColor?: string;
};

const LayerPreview: React.FC<LayerPreviewProps> = ({
  id,
  onLayerPointerDown,
  selectedColor
}) => {
  const layer = useStorage(root => root.layers.get(id));

  if (!layer) {
    return null;
  }

  return <div>LayerPreview</div>;
};

LayerPreview.displayName = 'LayerPreview';

export default memo(LayerPreview);
