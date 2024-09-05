'use client';

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization
} from '@clerk/nextjs';
import React from 'react';
import SearchInput from './search-input';
import InviteButton from './invite-button';

type NavbarProps = {};

const Navbar: React.FC<NavbarProps> = ({}) => {
  const { organization } = useOrganization();

  return (
    <div className='flex items-center space-x-3 p-5'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <div className='block flex-1 lg:hidden'>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                maxWidth: '376px'
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
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
};

export default Navbar;
