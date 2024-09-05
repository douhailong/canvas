import React from 'react';
import NewButton from './new-button';
import OrgList from './org-list';

type SideBarProps = {};

const SideBar: React.FC<SideBarProps> = ({}) => {
  return (
    <aside className='fixed left-0 z-10 flex h-full w-[60px] flex-col space-y-4 bg-blue-950 p-3 text-white'>
      <OrgList />
      <NewButton />
    </aside>
  );
};

export default SideBar;
