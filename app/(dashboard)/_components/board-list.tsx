import { useQuery } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { EmptyBoard, EmptyFavorites, EmptyQuery } from './empty';
import { BoardCard } from './board-card';
import { create } from '../../../convex/board';
import AddBoardButton from './add-board-button';

type BoardListProps = {
  orgId: string;
  query: {
    query?: string;
    favorites?: string;
  };
};

const BoardList: React.FC<BoardListProps> = ({ orgId, query }) => {
  const data = useQuery(api.boards.get, {
    orgId,
    query: query.query,
    favorites: query.favorites
  });

  if (data === undefined) {
    return (
      <div>
        <h2 className='text-3xl'>
          {query.favorites ? 'Favorite board' : 'Team board'}
        </h2>
        <ul className='mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
          <AddBoardButton orgId={orgId} disabled />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
          <BoardCard.Skeleton />
        </ul>
      </div>
    );
  }

  if (!data.length && query.query) {
    return <EmptyQuery />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyBoard />;
  }

  return (
    <div>
      <h2 className='text-3xl'>
        {query.favorites ? 'Favorite board' : 'Team board'}
      </h2>
      <ul className='mt-8 grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>
        <AddBoardButton orgId={orgId} />
        {data.map(board => (
          <BoardCard
            key={board._id}
            id={board._id}
            title={board.title}
            imageUrl={board.imageUrl}
            authorId={board.authorId}
            authorName={board.authorName}
            createdAt={board._creationTime}
            orgId={orgId}
            isFavorite={board.isFavorite}
          />
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
