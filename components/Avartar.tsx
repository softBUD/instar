import React from 'react';

type Props = {
  image: string | null;
};

export default function Avartar({ image }: Props) {
  return (
    <div>
      <img
        className='rounded-full w-[40px] h-[40px]'
        alt='userImage'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
