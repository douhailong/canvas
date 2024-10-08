'use client';

import type { LucideIcon } from 'lucide-react';

import Hint from '@/components/ui/hint';
import { Button } from '@/components/ui/button';

type ToolButtonProps = {
  label: string;
  icon: LucideIcon;
  onClick: () => void;
  isActive?: boolean;
  disabled?: boolean;
};

const ToolButton: React.FC<ToolButtonProps> = ({
  label,
  icon: Icon,
  onClick,
  isActive,
  disabled
}) => {
  return (
    <Hint label={label} side='right' sideOffset={14}>
      <Button
        disabled={disabled}
        onClick={onClick}
        size='icon'
        variant={isActive ? 'secondary' : 'ghost'}
      >
        <Icon className='text-gray-800' />
      </Button>
    </Hint>
  );
};

export default ToolButton;
