import { Star } from 'lucide-react';

import { cn } from '@/lib/utils';

type FooterProps = {
  title: string;
  authorLabel: string;
  createdAtLabel: string;
  isFavorite: boolean;
  onClick: () => void;
  disabled: boolean;
};

const Footer: React.FC<FooterProps> = ({
  title,
  authorLabel,
  createdAtLabel,
  isFavorite,
  onClick,
  disabled
}) => {
  return (
    <div className='relative bg-white p-3'>
      <p className='max-w-[calc(100%-20px)] truncate text-[13px]'>{title}</p>
      <p className='truncate text-[11px] text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100'>
        {authorLabel}, {createdAtLabel}
      </p>
      <button
        className={cn(
          'absolute right-3 top-3 text-muted-foreground opacity-0 transition-opacity hover:text-blue-600 group-hover:opacity-100',
          disabled && 'cursor-not-allowed opacity-75'
        )}
        onClick={(e)=>{
          e.stopPropagation()
          e.preventDefault()
          onClick()
        }}
      >
        <Star
          className={cn('h-4 w-4', isFavorite && 'fill-blue-600 text-blue-600')}
        />
      </button>
    </div>
  );
};

export default Footer;
