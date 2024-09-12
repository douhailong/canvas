import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

import Overlay from './overlay';
import Footer from './footer';
import { useAuth } from '@clerk/nextjs';

type BoardCardProps = {
  id: string;
  title: string;
  authorName: string;
  authorId: string;
  createdAt: number;
  imageUrl: string;
  orgId: string;
  isFavorite: boolean;
};

const BoardCard: React.FC<BoardCardProps> = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imageUrl,
  orgId,
  isFavorite
}) => {
  const { userId } = useAuth();

  const authorLabel = authorId === userId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board${id}`}>
      <div className='group flex aspect-[100/127] flex-col justify-center overflow-hidden rounded-lg border'>
        <div className='relative flex-1 bg-amber-50'>
          <Image src={imageUrl} fill alt={title} className='object-fill' />
          <Overlay />
        </div>
        <Footer
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          isFavorite={isFavorite}
          title={title}
          disabled={false}
          onClick={() => {}}
        />
      </div>
    </Link>
  );
};

export default BoardCard;
