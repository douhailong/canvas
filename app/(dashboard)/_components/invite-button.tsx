import React from 'react';
import { Plus } from 'lucide-react';
import { OrganizationProfile } from '@clerk/nextjs';
import { Dialog, DialogContent, DialogTrigger } from '@radix-ui/react-dialog';
import { Button } from '@/components/ui/button';

type InviteButtonProps = {};

const InviteButton: React.FC<InviteButtonProps> = ({}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus className='mr-2 h-4 w-4' />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className='border-none- max-w-[880px] bg-transparent p-0'>
        <OrganizationProfile routing='hash' />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
