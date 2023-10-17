import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import SignIn from '@/components/SignIn';
import { getServerSession } from 'next-auth';
import { getProviders } from 'next-auth/react';
import { redirect } from 'next/navigation';
import React from 'react';

type Props = {
  searchParams: {
    callbackUrl: string;
  };
};

export default async function SignInPage({
  searchParams: { callbackUrl },
}: Props) {
  const session = await getServerSession(authOptions);

  // 세션이 존재하면 로그인 할 필요가 없다.
  if (session) {
    redirect('/');
  }

  const providers = (await getProviders()) ?? {};

  return (
    <section className='mt-[30%] flex justify-center'>
      <SignIn
        providers={providers}
        callbackUrl={callbackUrl ?? '/'}
      />
    </section>
  );
}
