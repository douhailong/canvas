import { create } from 'zustand';

const initialValues = { id: '', title: '' };

type UseRenameModal = {
  isOpen: boolean;
  initialValues: typeof initialValues;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
};

export const useRenameModal = create<UseRenameModal>(set => ({
  isOpen: false,
  onOpen: (id, title) => set({ isOpen: true, initialValues: { id, title } }),
  onClose: () => set({ isOpen: false, initialValues }),
  initialValues
}));
