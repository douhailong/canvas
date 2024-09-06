import Image from 'next/image';

const EmptyQuery = () => (
  <div className='flex h-full flex-col items-center justify-center'>
    <Image src='/empty-query.svg' alt='empty' width={200} height={200} />
    <h2 className='text-2xl font-semibold'>No results found!</h2>
    <p className='mt-2 text-sm text-muted-foreground'>
      Try searching for something else
    </p>
  </div>
);

export default EmptyQuery;
