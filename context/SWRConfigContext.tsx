'use client';

import useSWR, { SWRConfig } from 'swr';

type Props = {
  children: React.ReactNode;
};

export default function SWRConfigContext({ children }: Props) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init)
            .then((res) => res.json())
            .then((res) => res[0]),
      }}
    >
      {children}
    </SWRConfig>
  );
}
