import Image from 'next/image';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';

import Overlay from './overlay';
import Footer from './footer';
import { useAuth } from '@clerk/nextjs';
import { Skeleton } from '@/components/ui/skeleton';
import Actions from '@/components/ui/actions';
import { MoreHorizontal } from 'lucide-react';

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

const BoardCard = ({
  id,
  title,
  authorName,
  authorId,
  createdAt,
  imageUrl,
  orgId,
  isFavorite
}: BoardCardProps) => {
  const { userId } = useAuth();

  const authorLabel = authorId === userId ? 'You' : authorName;
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true });

  return (
    <Link href={`/board/${id}`}>
      <div className='group flex aspect-[100/127] flex-col justify-center overflow-hidden rounded-lg border'>
        <div className='relative flex-1 bg-amber-50'>
          <Image src={imageUrl} fill alt={title} className='object-fill' />
          <Overlay />
          <Actions id={id} title={title} side='right'>
            <button className='absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100'>
              <MoreHorizontal className='text-white opacity-75 transition-opacity hover:opacity-100' />
            </button>
          </Actions>
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

BoardCard.Skeleton = function BoadrCardSkeleton() {
  return (
    <div className='aspect-[100/127] overflow-hidden rounded-lg'>
      <Skeleton className='h-full w-full' />
    </div>
  );
};

export default BoardCard;
