'use client';

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogHeader,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogDescription,
  AlertDialogAction
} from './alert-dialog';

type ConfirmModalProps = {
  children: React.ReactNode;
  onOk?: () => void;
  onCancle?: () => void;
  header: string;
  disabled?: boolean;
  description: string;
};

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  children,
  onOk,
  onCancle,
  header,
  disabled,
  description
}) => {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{header}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onCancle}>Cancel</AlertDialogCancel>
          <AlertDialogAction disabled={disabled} onClick={onOk}>
            Confirm
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default ConfirmModal;
