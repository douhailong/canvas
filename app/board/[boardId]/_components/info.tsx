// 'use client';

const Info = () => {
  return (
    <div className='absolute left-2 top-2 flex h-12 items-center rounded-md bg-white px-1.5 shadow-md'>
      TODO: Board
    </div>
  );
};

export const InfoSkeleton = () => {
  console.log('((((((((((((((((((object))))))))))))))))))');
  return (
    <div className='absolute left-2 top-2 flex h-12 w-[300px] items-center rounded-md bg-white px-1.5 shadow-md' />
  );
};

export default Info;
