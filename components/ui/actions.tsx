'use client';

import type { DropdownMenuContentProps } from '@radix-ui/react-dropdown-menu';
import { Link2, Pencil, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import type { Id } from '@/convex/_generated/dataModel';

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator
} from './dropdown-menu';
import ConfirmModal from './confirm-modal';
import { Button } from './button';
import { useRenameModal } from '@/store/use-rename-modal';

type ActionsProps = {
  children: React.ReactNode;
  side?: DropdownMenuContentProps['side'];
  sideOffset?: DropdownMenuContentProps['sideOffset'];
  id: string;
  title: string;
};

const Actions: React.FC<ActionsProps> = ({
  children,
  side,
  sideOffset,
  id,
  title
}) => {
  const remove = useMutation(api.board.remove);
  const { onOpen } = useRenameModal();

  const onCopyLink = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}/board/${id}`)
      .then(() => toast.success('Link copied'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const onRemove = () => {
    remove({ id: id as Id<'boards'> })
      .then(() => toast.success('Board deleted'))
      .catch(() => toast.error('Failed to delete board'));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        className='W-60'
        onClick={e => e.stopPropagation()}
      >
        <DropdownMenuItem className='cursor-pointe2' onClick={onCopyLink}>
          <Link2 className='ml-1 mr-2 h-4 w-4' />
          Copy board link
        </DropdownMenuItem>
        <ConfirmModal
          header='Delete board?'
          description='This will delete the board and all of its contents.'
          onOk={onRemove}
        >
          <Button
            size='sm'
            variant='ghost'
            className='w-full cursor-pointer justify-start rounded-sm text-sm font-normal'
          >
            <Trash2 className='mr-2 h-4 w-4' />
            Delete
          </Button>
        </ConfirmModal>
        <DropdownMenuItem
          className='cursor-pointe2'
          onClick={() => onOpen(id, title)}
        >
          <Pencil className='ml-1 mr-2 h-4 w-4' />
          Rename
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Actions;
