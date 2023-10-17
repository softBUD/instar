import Image from 'next/image';
import { Open_Sans } from 'next/font/google';

const OpenSans = Open_Sans({ subsets: ['latin'] });

export default function Home() {
  return <h1 className='text-gray-400'>instargram</h1>;
}
