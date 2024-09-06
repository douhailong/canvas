import { EmptyCanvas, EmptyFavorites, EmptyQuery } from './empty';

type CanvasListProps = {
  orgId: string;
  query: {
    query?: string;
    favorites?: string;
  };
};

const CanvasList: React.FC<CanvasListProps> = ({ orgId, query }) => {
  const data = [];

  if (!data.length && query.query) {
    return <EmptyQuery />;
  }

  if (!data.length && query.favorites) {
    return <EmptyFavorites />;
  }

  if (!data.length) {
    return <EmptyCanvas />;
  }

  return <div>{JSON.stringify(query)}</div>;
};

export default CanvasList;
