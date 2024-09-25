'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, Star } from 'lucide-react';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const rootBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%'
};
const organizationSwitcherTrigger = {
  padding: '6px',
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  justifyContent: 'space-between',
  backgroundColor: 'white'
};

const ToolBar = () => {
  const searchParams = useSearchParams();

  const favorites = searchParams.get('favorites');

  return (
    <>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox,
            organizationSwitcherTrigger
          }
        }}
      />
      <div className='sapce-y-1'>
        <Link
          href='/'
          className={cn(
            'w-full justify-start px-2 font-normal',
            buttonVariants({
              variant: favorites ? 'ghost' : 'secondary',
              size: 'lg'
            })
          )}
        >
          <LayoutDashboard className='mr-2 h-4 w-4' />
          Team board
        </Link>
        <Link
          href={{
            pathname: '/',
            query: {
              favorites: true
            }
          }}
          className={cn(
            'w-full justify-start px-2 font-normal',
            buttonVariants({
              variant: favorites ? 'secondary' : 'ghost',
              size: 'lg'
            })
          )}
        >
          <Star className='mr-2 h-4 w-4' />
          Favorite board
        </Link>
      </div>
    </>
  );
};

export default ToolBar;
