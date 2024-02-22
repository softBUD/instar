'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import Avartar from './Avartar';
import Scrollbar from './ui/Scrollbar';

function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // 1. 클라이언트 컴포넌트에서 백엔드의 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서 사용자의 상세 정보를 sanity에서 가지고옴
  // 3. 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  const users = data?.following && [
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
    ...data?.following,
  ];

  return (
    <section className='w-full flex justify-center items-center p-4 shadow-sm shadow-neutral-300 mb-4 rounded-lg min-h-[90px] overflow-x-auto'>
      {loading ? (
        <FadeLoader color='purple' />
      ) : (
        !users || (users.length === 0 && <p>{`You don't have following`}</p>)
      )}
      {users && users.length > 0 && (
        <Scrollbar>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link
                className='flex flex-col items-center content-center text-center'
                href={`/user/${username}`}
              />
              <Avartar
                image={image}
                highlight
              />
              <p className='w-full text-sm text-center text-ellipsis'>
                {username}
              </p>
            </li>
          ))}
        </Scrollbar>
      )}
    </section>
  );
}

export default FollowingBar;
