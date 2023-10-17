'use client';

import { ClientSafeProvider, signIn } from 'next-auth/react';
import React from 'react';
import ColorButton from './ui/ColorButton';

type Props = {
  providers: Record<string, ClientSafeProvider>;
  callbackUrl: string;
};

export default function SignIn({ providers, callbackUrl }: Props) {
  return (
    <>
      {Object.values(providers).map(({ name, id }) => (
        <div key={name}>
          <ColorButton
            text={`sign in with ${name}`}
            size='big'
            onClick={() => {
              signIn(id, { callbackUrl });
            }}
          ></ColorButton>
        </div>
      ))}
    </>
  );
}
