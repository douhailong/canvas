'use client';

import React, { useEffect, useState } from 'react';
import qs from 'query-string';
import { useDebounceValue } from 'usehooks-ts';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

type SearchInputProps = {};

const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const [value, setValue] = useState('');
  const [debounceValue] = useDebounceValue(value, 500);
  const router = useRouter();

  useEffect(() => {
    const url = qs.stringifyUrl(
      {
        url: '/',
        query: { query: debounceValue }
      },
      { skipEmptyString: true, skipNull: true }
    );
    router.push(url);
  }, [router, debounceValue]);

  return (
    <div className='relative w-full'>
      <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground' />
      <Input
        className='w-full max-w-[516px] pl-9'
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
