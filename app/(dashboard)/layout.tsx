import React from 'react';
import SideBar from './_components/sidebar';
import Navbar from './_components/navbar';
import OrgSidebar from './_components/sidebar/org-sidebar';

type LayoutProps = { children: React.ReactNode };

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main className='h-full'>
      <SideBar />
      <div className='flex h-full pl-[60px]'>
        <OrgSidebar />
        <div className='h-full flex-1'>
          <Navbar />
          {children}
        </div>
      </div>
    </main>
  );
};

export default Layout;
