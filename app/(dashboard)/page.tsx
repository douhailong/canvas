'use client';

import { useOrganization } from '@clerk/nextjs';

import { OrganizEmpty } from './_components/empty';

type PageProps = {};

const Page: React.FC<PageProps> = ({}) => {
  const { organization } = useOrganization();

  console.log(organization);

  return (
    <div className='h-[calc(100%-80px)] p-6'>
      {organization ? <p>list</p> : <OrganizEmpty />}
    </div>
  );
};

export default Page;
