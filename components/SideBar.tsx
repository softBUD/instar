import { User } from '@/model/user';
import React from 'react';
import Avartar from './Avartar';

type Props = {
  user: User;
};

function SideBar({ user }: Props) {
  const { name, username, image } = user;

  return (
    user && (
      <>
        <div className='flex items-center mt-4'>
          {image && <Avartar image={image} />}
          <div className='ml-4'>
            <p className='font-bold'>{username}</p>
            <p className='text-lg text-neutral-500 leading-4'>{name}</p>
          </div>
        </div>

        <p className='text-sm text-neutral-500 mt-8'>
          About · Help · Press · API · Jobs · Privacy · Terms · Location ·
          Language
        </p>
        <p className='font-bold text-sm mt-8 text-neutral-500'>
          @Copyright PETSTARGRAM from softBUD
        </p>
      </>
    )
  );
}

export default SideBar;
