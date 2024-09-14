'use client';

import { useState, useEffect, FormEventHandler } from 'react';

import { useRenameModal } from '@/store/use-rename-modal';
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogFooter,
  DialogDescription,
  DialogClose
} from '../ui/dialog';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';

const RenameModal = ({}) => {
  const { isOpen, onClose, onOpen, initialValues } = useRenameModal();
  const update = useMutation(api.board.update);

  const [title, setTitle] = useState(initialValues.title);

  useEffect(() => {
    setTitle(initialValues.title);
  }, [initialValues.title]);

  const onSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault();

    update({ id: initialValues.id as Id<'boards'>, title });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edi board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for this board.</DialogDescription>
        <form className='space-y-4' onSubmit={onSubmit}>
          <Input
            required
            maxLength={60}
            value={title}
            onChange={e => setTitle(e.target.value)}
            placeholder='Board title'
          />
          <DialogFooter>
            <DialogClose asChild>
              <Button type='button' variant='outline'>
                Cancel
              </Button>
            </DialogClose>
            <Button type='submit'>Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default RenameModal;
