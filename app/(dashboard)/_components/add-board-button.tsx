import { api } from '@/convex/_generated/api';
import { cn } from '@/lib/utils';
import { useMutation } from 'convex/react';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

type AddBoardButtonProps = {
  orgId: string;
  disabled?: boolean;
};

const AddBoardButton: React.FC<AddBoardButtonProps> = ({ orgId, disabled }) => {
  const create = useMutation(api.board.create);

  const onClick = () => {
    create({
      title: 'Untitled',
      orgId: orgId
    })
      .then(() => toast.success('Board created'))
      .catch(() => toast.error('Failed to create board'));
  };

  return (
    <button
      className={cn(
        'col-span-1 flex aspect-[100/127] flex-col items-center justify-center rounded-lg bg-blue-600 py-6 hover:bg-blue-800',
        disabled && 'opacity-75'
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {/* <div /> */}
      <Plus className='h-12 w-12 stroke-1 text-white' />
      <p className='text-sm font-light text-white'>New board</p>
    </button>
  );
};

export default AddBoardButton;
