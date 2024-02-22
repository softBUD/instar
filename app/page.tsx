import Image from 'next/image';
import { Open_Sans } from 'next/font/google';
import FollowingBar from '@/components/FollowingBar';
import PostList from '@/components/PostList';
import SideBar from '@/components/SideBar';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    redirect('/auth/signin');
  }
  // layout file에서 authContext를 적용시켰기때문에 사용자가 페이지 접근 시 마다 getserversession을 실행해서,
  // user가 존재할때만 렌더링한다.(Home 컴포넌트 자체는 SSR)
  return (
    <section className='w-full flex flex-col md:flex-row max-w-[850px] p-4'>
      <div className='w-full basis-3/4 min-w-0'>
        <FollowingBar />
        <PostList />
      </div>
      <div className='basis-1/4 ml-8'>
        <SideBar user={user} />
      </div>
    </section>
  );
}
