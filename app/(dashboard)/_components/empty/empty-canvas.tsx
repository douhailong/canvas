'use client';

import Image from 'next/image';
import { useMutation } from 'convex/react';

import { api } from '@/convex/_generated/api';
import { Button } from '@/components/ui/button';
import { useOrganization } from '@clerk/nextjs';
import { useApiMutation } from '@/hooks/use-api-mutation';
import { toast } from 'sonner';

const EmptyCanvas = () => {
  const { organization } = useOrganization();
  const create = useMutation(api.board.create);
  // const { mutate, pending } = useApiMutation(api.board.create);

  // console.log(pending, '----------------');

  const onClick = () => {
    if (!organization) return;

    create({
      title: 'Untitled',
      orgId: organization.id
    })
      .then(() => toast.success('Board created'))
      .catch(() => toast.error('Board created'));
  };

  return (
    <div className='flex h-full flex-col items-center justify-center'>
      {/* <Image src='/empty-canvas.svg' alt='empty' width={180} height={180} /> */}
      <h2 className='mt-6 text-2xl font-semibold'>Create your first canvas!</h2>
      <p className='mt-2 text-sm text-muted-foreground'>
        Start by creating a cavas for your organization.
      </p>
      <Button className='mt-6' size='lg' onClick={onClick}>
        Create canvas
      </Button>
    </div>
  );
};

export default EmptyCanvas;
