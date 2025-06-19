import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="mt-30 flex h-32 w-full flex-col gap-8 lg:gap-0 lg:flex-row lg:justify-between border-t-1 border-t-gray-200 px-4 pt-4 md:px-8 lg:px-16">
      <div className="flex w-full lg:w-1/4 lg:justify-between">
        <nav className="flex flex-col gap-2">
          <li className="w-fit list-none">
            <Link href="/">Home</Link>
          </li>
          <li className="list-none">
            <Link href="/">Projekty</Link>
          </li>
          <li className="list-none">
            <Link href="/">Oferta</Link>
          </li>
        </nav>
        <nav className="flex flex-col pl-8 gap-2">
          <li className="list-none">
            <Link href="/">O Nas</Link>
          </li>
          <li className="list-none">
            <Link href="/">Kontakt</Link>
          </li>
        </nav>
      </div>

      <div className="flex w-full lg:w-1/4 flex-col">
        <div className="flex justify-start lg:justify-center gap-4">
          <Link href="/">
            <RiInstagramLine className="h-8 w-8 rounded-full" />
          </Link>

          <Link href="/">
            <RiFacebookFill className="h-8 w-8 rounded-full" />
          </Link>
        </div>
      </div>

      <div className="w-full lg:w-1/4">
        <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Arteon company logo" className='flex justify-self-start lg:justify-self-end' />
      </div>
    </footer>
  );
}
