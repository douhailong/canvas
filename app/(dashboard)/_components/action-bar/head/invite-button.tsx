'use client';

import { OrganizationProfile, useOrganization } from '@clerk/nextjs';
import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const InviteButton = () => {
  const { organization } = useOrganization();

  if (!organization) {
    return null;
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <Plus className='mr-2 h-4 w-4' />
          Invite members
        </Button>
      </DialogTrigger>
      <DialogContent className='max-w-[880px] border-none bg-transparent p-0'>
        <OrganizationProfile routing='hash' />
      </DialogContent>
    </Dialog>
  );
};

export default InviteButton;
