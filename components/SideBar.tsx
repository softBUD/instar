import { User } from '@/model/user';
import React from 'react';
import Avartar from './Avartar';

type Props = {
  user: User;
};

function SideBar({ user }: Props) {
  const { name, username, image } = user;
  return (
    <>
      <div>{image && <Avartar image={image} />}</div>
      <p>{username}</p>
      <p>{name}</p>
      <p>
        About · Help · Press · API · Jobs · Privacy · Terms · Location ·
        Language
      </p>
      <p>@Copyright PETSTARGRAM from softBUD</p>
    </>
  );
}

export default SideBar;
