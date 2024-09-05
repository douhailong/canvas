import type { PropsWithChildren } from 'react';

import { SideBar, OrganizSideBar } from './_components/sidebar';
import Navbar from './_components/navbar';

const Layout = ({ children }: PropsWithChildren) => (
  <main className='h-full'>
    <SideBar />
    <div className='flex h-full pl-[60px]'>
      <OrganizSideBar />
      <div className='h-full flex-1'>
        <Navbar />
        {children}
      </div>
    </div>
  </main>
);

export default Layout;
