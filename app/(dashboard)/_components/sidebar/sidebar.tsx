import AddOrganizButton from './add-organiz-button';
import OrganizList from './organiz-list';

const SideBar = () => (
  <aside className='fixed left-0 z-10 flex h-full w-[60px] flex-col space-y-4 bg-blue-950 p-3 text-white'>
    <OrganizList />
    <AddOrganizButton />
  </aside>
);

export default SideBar;
