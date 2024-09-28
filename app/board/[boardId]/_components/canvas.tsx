
import Info from './info';
import Participants from './participants';
import Toolbar from './toolbar';

type CanvasProps = {
  boardId: string;
};

const Canvas: React.FC<CanvasProps> = ({ boardId }) => {
  return (
    <main className='relative h-full w-full touch-none bg-neutral-100'>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  );
};

export default Canvas;
