import Hint from '@/components/ui/hint';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type UserAvatarProps = {
  src?: string;
  name?: string;
  fallback?: string;
  borderColor?: string;
};

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  name,
  fallback,
  borderColor
}) => {
  return (
    <Hint label={name || 'Teammeate'} side='bottom' sideOffset={18}>
      <Avatar className='h-8 w-8 border-2' style={{ borderColor }}>
        <AvatarImage src={src} alt={name} />
        <AvatarFallback className='text-xs font-semibold'>
          {fallback}
        </AvatarFallback>
      </Avatar>
    </Hint>
  );
};

export default UserAvatar;
