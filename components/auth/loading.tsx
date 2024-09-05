import Image from 'next/image';
import React from 'react';

type LoadingProps = {};

const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <div className='flex h-full items-center justify-center'>
      <Image
        src='/next.svg'
        alt='loading'
        width={100}
        height={100}
        className='animate-pulse duration-700'
      />
    </div>
  );
};

export default Loading;
