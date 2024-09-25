'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from 'convex/react';
import { useOrganization } from '@clerk/nextjs';
import { toast } from 'sonner';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';

const BoardEmpty = () => {
  const router = useRouter();
  const { organization } = useOrganization();

  const create = useMutation(api.board.create);

  const onClick = () => {
    if (!organization) return;

    create({
      title: 'Untitled',
      orgId: organization.id
    })
      .then(id => {
        toast.success('Board created');
        router.push(`/board/${id}`);
      })
      .catch(() => toast.error('Failed to create board'));
  };

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h2 className='mt-6 text-2xl font-semibold'>Create your first board</h2>
      <p className='mt-2 text-sm text-muted-foreground'>
        Start by creating a canvas for your group
      </p>
      <Button className='mt-6' size='lg' onClick={onClick}>
        Create board
      </Button>
    </div>
  );
};

export default BoardEmpty;
