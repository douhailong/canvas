import Room from '@/components/ui/room';
import Canvas from './_components/canvas';
import Loading from './_components/loading';

type PageProps = {
  params: {
    boardId: string;
  };
};

const Page: React.FC<PageProps> = ({ params }) => {
  return (
    <Room roomId={params.boardId} fallback={<Loading />}>
      <Canvas boardId={params.boardId} />
    </Room>
  );
};

export default Page;
