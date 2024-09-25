'use client';

import { useOrganization } from '@clerk/nextjs';

import { EmptyOrganiz } from './_components/empty';
import BoardList from './_components/board-list';

type PageProps = {
  searchParams: {
    query?: string;
    favorites?: string;
  };
};

const Page: React.FC<PageProps> = ({ searchParams }) => {
  const { organization } = useOrganization();

  return (
    <div className='h-[calc(100%-80px)] p-6'>
      {organization ? (
        <BoardList orgId={organization.id} query={searchParams} />
      ) : (
        <EmptyOrganiz />
      )}
    </div>
  );
};

export default Page;
