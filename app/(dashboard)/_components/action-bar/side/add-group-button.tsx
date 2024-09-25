'use client';

import { CreateOrganization } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import Hint from '@/components/ui/hint';

const AddGroupButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='aspect-square'>
          <Hint label='创建组织' side='right' align='center' sideOffset={18}>
            <button className='flex h-full w-full items-center justify-center rounded-md bg-white/25 opacity-60 transition hover:opacity-100'>
              <Plus className='text-white' />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className='max-w-[432px] border-none bg-transparent p-0'>
        <CreateOrganization routing='hash' />
      </DialogContent>
    </Dialog>
  );
};

export default AddGroupButton;
