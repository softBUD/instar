import React from 'react';

type Props = {
  image?: string | null;
  size?: 'small' | 'normal';
  highlight?: boolean;
};

export default function Avartar({
  image,
  size = 'normal',
  highlight = false,
}: Props) {
  function getContainerStyle(size: string, highlight: boolean): string {
    const base = 'rounded-full flex justify-center items-center text-center';
    const highlightStyle = highlight
      ? 'bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300'
      : '';
    const sizeStyle = size === 'small' ? 'w-9 h-9' : 'w-[67px] h-[67px]';
    return `${base} ${highlightStyle} ${sizeStyle}`;
  }

  function getImageSizeStyle(size: string): string {
    return size === 'small'
      ? 'w-[34px] h-[34px] p-[0.1rem]'
      : 'w-16 h-16 p-[0.1rem]';
  }

  return (
    <div className={getContainerStyle(size, highlight)}>
      <img
        className={`bg-white object-cover rounded-full p-[0.1rem] ${getImageSizeStyle(
          size
        )}`}
        alt='userImage'
        src={image ?? undefined}
        referrerPolicy='no-referrer'
      />
    </div>
  );
}
