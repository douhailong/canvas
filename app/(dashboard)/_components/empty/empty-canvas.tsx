import Image from 'next/image';

import { Button } from '@/components/ui/button';

const EmptyCanvas = () => (
  <div className='flex h-full flex-col items-center justify-center'>
    <Image src='/empty-canvas.svg' alt='empty' width={180} height={180} />
    <h2 className='mt-6 text-2xl font-semibold'>Create your first canvas!</h2>
    <p className='mt-2 text-sm text-muted-foreground'>
      Start by creating a cavas for your organization
    </p>
    <Button className='mt-6' size='lg'>
      Create canvas
    </Button>
  </div>
);

export default EmptyCanvas;
