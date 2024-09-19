import Info from './info';

type CanvasProps = {};

const Canvas: React.FC<CanvasProps> = ({}) => {
  return (
    <main className='relative h-full w-full touch-none bg-neutral-100'>
      Canvas
      <Info />
    </main>
  );
};

export default Canvas;
