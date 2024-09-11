import Link from 'next/link';

type BoardCardProps = {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: string;
  imsageUrl: string;
  orgId: string;
  isFavorite: string;
};

const BoardCard: React.FC<BoardCardProps> = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imsageUrl,
  orgId,
  isFavorite
}) => {
  return (
    <Link href={`/board${id}`}>
      <div className='group flex aspect-[100/127] flex-col justify-center overflow-hidden rounded-lg border'>
        <div className='relative flex-1 bg-amber-50'></div>
      </div>
    </Link>
  );
};

export default BoardCard;
