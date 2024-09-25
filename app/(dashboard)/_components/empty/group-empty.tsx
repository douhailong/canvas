'use client';

import { CreateOrganization } from '@clerk/nextjs';

import { Button } from '@/components/ui/button';
import { DialogContent, Dialog, DialogTrigger } from '@/components/ui/dialog';

const GroupEmpty = () => {
  return (
    <div className='flex h-full flex-col items-center justify-center'>
      <h2 className='mt-6 text-2xl font-semibold'>Welcome to Canvas</h2>
      <p className='mt-2 text-sm text-muted-foreground'>
        Create an group to get started
      </p>
      <div className='mt-6'>
        <Dialog>
          <DialogTrigger asChild>
            <Button size='lg'>Create group</Button>
          </DialogTrigger>
          <DialogContent className='max-w-[432px] border-none bg-transparent p-0'>
            <CreateOrganization routing='hash' />
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default GroupEmpty;
