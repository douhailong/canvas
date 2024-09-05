import React from 'react';
import Empty from './_components/empty';

type PageProps = {};

const Page: React.FC<PageProps> = ({}) => {
  return (
    <div className='h-[calc(100%-80px)] p-6'>
      <Empty />
    </div>
  );
};

export default Page;
