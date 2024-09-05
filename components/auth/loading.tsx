import Image from 'next/image';

const Loading = () => (
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
export default Loading;
