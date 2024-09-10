import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { EmptyCanvas, EmptyFavorites, EmptyQuery } from './empty';

type CanvasListProps = {
  orgId: string;
  query: {
    query?: string;
    favorites?: string;
  };
};

const CanvasList: React.FC<CanvasListProps> = ({ orgId, query }) => {
  const data = useQuery(api.boards.get, { orgId });

  console.log(data, '000');

  if (data === undefined) {
    return <div>Loading...</div>;
  }

  if (!data.length && query.query) {
    return <EmptyQuery />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyCanvas />;
  }

  return (
    <div>
      <h2 className='text-3xl'>
        {query.favorites ? 'Favorite board' : 'Team board'}
      </h2>
      <ul className='mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        {data.map(board => (
          <div key={board._id}>11</div>
        ))}
      </ul>
    </div>
  );
};

export default CanvasList;
