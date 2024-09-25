const SearchEmpty = () => (
  <div className='flex h-full flex-col items-center justify-center'>
    <h2 className='text-2xl font-semibold'>No results found!</h2>
    <p className='mt-2 text-sm text-muted-foreground'>
      Try searching for something else
    </p>
  </div>
);

export default SearchEmpty;
