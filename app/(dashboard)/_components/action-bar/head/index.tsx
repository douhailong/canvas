import { OrganizationSwitcher, UserButton } from '@clerk/nextjs';

import SearchInput from './search-input';
import InviteButton from './invite-button';

const rootBox = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  maxWidth: '376px'
};
const organizationSwitcherTrigger = {
  padding: '6px',
  width: '100%',
  borderRadius: '8px',
  border: '1px solid #e5e7eb',
  justifyContent: 'space-between',
  backgroundColor: 'white'
};

const HeadBar = () => {
  return (
    <header className='flex items-center space-x-3 p-5'>
      <div className='hidden lg:flex lg:flex-1'>
        <SearchInput />
      </div>
      <div className='block flex-1 lg:hidden'>
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox,
              organizationSwitcherTrigger
            }
          }}
        />
      </div>
      <InviteButton />
      <UserButton />
    </header>
  );
};

export default HeadBar;
