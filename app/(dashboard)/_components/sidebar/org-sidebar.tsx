'use client';
import React from 'react';
import { Poppins } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { OrganizationSwitcher } from '@clerk/nextjs';
import { LayoutDashboard, Star } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { useSearchParams } from 'next/navigation';

const font = Poppins({ weight: '600', subsets: ['latin'] });

type OrgSidebarProps = {};

const OrgSidebar: React.FC<OrgSidebarProps> = ({}) => {
  const searchParams = useSearchParams();
  const favorites = searchParams.get('favorites');

  return (
    <div className='hidden w-[206px] flex-col space-y-6 pl-5 pt-5 lg:flex'>
      <Link href='/' className='flex items-center gap-x-2'>
        <Image src='/next.svg' alt='logo' height={60} width={60} />
        <h1 className={cn('text-2xl font-semibold', font.className)}>Canvas</h1>
      </Link>
      <OrganizationSwitcher
        hidePersonal
        appearance={{
          elements: {
            rootBox: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%'
            },
            organizationSwitcherTrigger: {
              padding: '6px',
              width: '100%',
              borderRadius: '8px',
              border: '1px solid #e5e7eb',
              justifyContent: 'space-between',
              backgroundColor: 'white'
            }
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
          Team boards
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
          Favorite boards
        </Link>
      </div>
    </div>
  );
};

export default OrgSidebar;