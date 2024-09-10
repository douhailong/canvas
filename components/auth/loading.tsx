import Image from 'next/image';

const Loading = () => (
  <div className='flex h-full items-center justify-center'>
    <Image
      src='/logo.svg'
      alt='loading'
      width={60}
      height={60}
      className='animate-pulse duration-700'
    />
  </div>
);
export default Loading;
