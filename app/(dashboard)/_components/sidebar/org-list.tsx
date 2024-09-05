'use client';

import React from 'react';
import Image from 'next/image';
import { useOrganizationList, useOrganization } from '@clerk/nextjs';
import { cn } from '@/lib/utils';
import Hint from '@/components/ui/hint';

type ItemProps = {
  id: string;
  name: string;
  imageUrl: string;
};

const Item: React.FC<ItemProps> = ({ id, name, imageUrl }) => {
  const { organization } = useOrganization();
  const { setActive } = useOrganizationList();

  const isActive = organization?.id === id;

  return (
    <Hint label={name} side='right' align='start' sideOffset={18}>
      <li className='relative aspect-square'>
        <Image
          className={cn(
            'cursor-pointer rounded-md opacity-75 transition hover:opacity-100',
            isActive && 'opacity-100'
          )}
          onClick={() => setActive?.({ organization: id })}
          src={imageUrl}
          alt={name}
          fill
        />
      </li>
    </Hint>
  );
};

type OrgListProps = {};

const OrgList: React.FC<OrgListProps> = ({}) => {
  const { userMemberships } = useOrganizationList({
    userMemberships: {
      infinite: true
    }
  });

  if (!userMemberships.data?.length) return null;

  return (
    <ul className='space-y-4'>
      {userMemberships.data.map(member => (
        <Item
          key={member.organization.id}
          id={member.organization.id}
          name={member.organization.name}
          imageUrl={member.organization.imageUrl}
        />
      ))}
    </ul>
  );
};

export default OrgList;