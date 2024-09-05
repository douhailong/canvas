import React from 'react';
import Image from 'next/image';
import { CreateOrganization } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { DialogContent } from '@/components/ui/dialog';

type EmptyProps = {};

const Empty: React.FC<EmptyProps> = ({}) => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <Image src='/empty.svg' alt='empty' width={200} height={200} />
      <h2 className='mt-6 text-2xl font-semibold'>Welcome to Canvas</h2>
      <p className='mt-2 text-sm text-muted-foreground'>
        Create an organization to get started
      </p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>Create Organization</Button>
          </DialogTrigger>
          <DialogContent className='max-w-[432px] border-none bg-transparent p-0'>
            <CreateOrganization routing='hash' />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default Empty;
