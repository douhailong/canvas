import type { PropsWithChildren } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Poppins } from 'next/font/google';

import { HeadBar, SideBar, ToolBar } from './_components/action-bar';
import { cn } from '@/lib/utils';

const font = Poppins({ weight: '600', subsets: ['latin'] });

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <main className='h-full'>
      <SideBar />
      <div className='flex h-full pl-[60px]'>
        <div className='hidden w-[206px] flex-col space-y-4 pl-5 pt-5 lg:flex'>
          <Link href='/' className='flex items-center gap-x-2'>
            <Image src='/logo.svg' alt='logo' height={30} width={30} />
            <h1 className={cn('text-2xl font-semibold', font.className)}>
              Canvas
            </h1>
          </Link>
          <ToolBar />
        </div>
        <div className='h-full flex-1'>
          <HeadBar />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
