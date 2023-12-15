'use client';
import { DetailUser } from '@/model/user';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { FadeLoader } from 'react-spinners';
import useSWR from 'swr';
import Avartar from './Avartar';

function FollowingBar() {
  const { data, isLoading: loading, error } = useSWR<DetailUser>('/api/me');
  // 1. 클라이언트 컴포넌트에서 백엔드의 api/me 사용자의 정보를 얻어옴
  // 2. 백엔드에서는 현재 로그인된 사용자의 세션 정보를 이용해서 사용자의 상세 정보를 sanity에서 가지고옴
  // 3. 클라이언트 컴포넌트에서 followings의 정보를 UI에 보여줌
  const users = data?.following;

  useEffect(() => {
    if (data) {
      console.log(data.following);
    }
  }, [data]);

  return (
    <section>
      {loading ? (
        <FadeLoader color='purple' />
      ) : (
        !users ||
        (users.length === 0 && <p>{`팔로우하고 있는 사람이 없습니다`}</p>)
      )}
      {users && users.length > 0 && (
        <ul>
          {users.map(({ image, username }) => (
            <li key={username}>
              <Link href={`/user/${username}`} />
              <Avartar
                image={image}
                highlight
              />
              <p>{username}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default FollowingBar;
