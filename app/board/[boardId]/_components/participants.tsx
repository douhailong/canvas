'use client';

import { useSelf, useOthers } from '@/liveblocks.config';
import UserAvatar from './user-avatar';

const MAX_NUM = 2;

const Participants = () => {
  const self = useSelf();
  const users = useOthers();
  // const users = [self, self, self, self];

  const hasMoreUsers = users.length > MAX_NUM;

  return (
    <div className='absolute right-2 top-2 flex h-12 items-center rounded-md bg-white p-3 shadow-md'>
      <div className='flex gap-2'>
        {users.slice(0, MAX_NUM).map(({ info, connectionId }) => {
          return (
            <UserAvatar
              key={connectionId}
              src={info.picture}
              name={info.name}
              fallback={info.name?.[0] || 'T'}
            />
          );
        })}
        {self && (
          <UserAvatar
            src={self.info.picture}
            name={`${self.info.name} (You)`}
            fallback={self.info.name?.[0]}
          />
        )}
        {hasMoreUsers && (
          <UserAvatar
            name={`${users.length - MAX_NUM} more`}
            fallback={`+${users.length - MAX_NUM}`}
          />
        )}
      </div>
    </div>
  );
};

export const ParticipantsSkeleton = () => {
  return (
    <div className='absolute right-2 top-2 flex h-12 w-[100px] items-center rounded-md bg-white p-3 shadow-md' />
  );
};

export default Participants;
