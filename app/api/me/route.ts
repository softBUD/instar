import { getServerSession } from 'next-auth';
import { NextResponse } from 'next/server';
import { authOptions } from '../auth/[...nextauth]/route';
import { getUserByUsername } from '@/service/user';

export async function GET(request: Request) {
  // 사용자가 보낸 reqeust 안에 있는 헤더를 파싱해서 기본적인 세션(user)에 관한 정보를 가져옴
  // 기본적인 세션에 관한 정보는 next Auth 가 알아서 해독하고 세팅해줌

  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response('Authentication Error!', { status: 401 });
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
}
