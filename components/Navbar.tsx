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
    <div>
      <Link href='/'>
        <h1>Petsgram</h1>
      </Link>
      <nav>
        <ul>
          {menu.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>
                {pathName === item.href ? item.clickedIcon : item.icon}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
