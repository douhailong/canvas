'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Poppins } from 'next/font/google';
import { useQuery } from 'convex/react';
import { Menu } from 'lucide-react';

import Actions from '@/components/ui/actions';
import { Button } from '@/components/ui/button';
import { useRenameModal } from '@/store/use-rename-modal';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { cn } from '@/lib/utils';

const font = Poppins({ weight: '600', subsets: ['latin'] });

export const TabSeparator = () => {
  return <div className='mx-1.5 text-neutral-300'>|</div>;
};

type InfoProps = {
  boardId: string;
};

const Info: React.FC<InfoProps> = ({ boardId }) => {
  const data = useQuery(api.board.get, {
    id: boardId as Id<'boards'>
  });

  if (!data) {
    return <InfoSkeleton />;
  }

  return (
    <div className='absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md'>
      <Link href='/'>
        <Image src='/logo.svg' alt='logo' width={34} height={34} />
      </Link>
      <h1
        className={cn('ml-2 text-xl font-semibold text-black', font.className)}
      >
        Canvas
      </h1>
      <TabSeparator />
      <Actions id={data._id} title={data.title} side='bottom' sideOffset={10}>
        <Button variant='ghost' size='icon'>
          <Menu />
        </Button>
      </Actions>
    </div>
  );
};

export const InfoSkeleton = () => {
  return (
    <div className='absolute left-2 top-2 flex h-12 w-[300px] items-center rounded-md bg-white px-1.5 shadow-md' />
  );
};

export default Info;
