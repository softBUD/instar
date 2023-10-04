'use client';
import Link from 'next/link';
import React from 'react';
import HomeOutlineIcon from './ui/icons/HomeOutlineIcon';
import HomeFillIcon from './ui/icons/HomeFillIcon';
import SearchIcon from './ui/icons/SearchIcon';
import SearchFillIcon from './ui/icons/SearchFillIcon';
import NewFillIcon from './ui/icons/NewFillIcon';
import NewIcon from './ui/icons/NewIcon';
import { usePathname } from 'next/navigation';
import ColorButton from './ui/ColorButton';

function Navbar() {
  const pathName = usePathname();
  const menu = [
    {
      href: '/',
      icon: <HomeOutlineIcon />,
      clickedIcon: <HomeFillIcon />,
    },
    {
      href: '/search',
      icon: <SearchIcon />,
      clickedIcon: <SearchFillIcon />,
    },
    {
      href: '/new',
      icon: <NewIcon />,
      clickedIcon: <NewFillIcon />,
    },
  ];

  return (
    <div className='flex justify-between items-center px-6'>
      <Link href='/'>
        <h1 className='text-3xl font-bold'>Petsgram</h1>
      </Link>
      <nav>
        <ul className='flex gap-4 items-center p-4'>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
          <ColorButton
            text='Sign in'
            onClick={() => {}}
          />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
