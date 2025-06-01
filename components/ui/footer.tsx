import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer className="mt-12 flex h-32 w-full justify-between border-t-1 border-t-gray-200 pt-4">
      <div className="flex w-1/4 justify-between">
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
        <nav className="flex flex-col gap-2">
          <li className="list-none">
            <Link href="/">O Nas</Link>
          </li>
          <li className="list-none">
            <Link href="/">Kontakt</Link>
          </li>
        </nav>
      </div>
      <div className="w-1/4">
        <Image src="/assets/arteon-logo.png" width={160} height={50} alt="Arteon company logo" />
      </div>
      <div className="flex w-1/4 flex-col">
        <div className="flex">
          <Link href="/">
            <RiInstagramLine className="h-8 w-8 rounded-full" />
          </Link>

          <Link href="/">
            {' '}
            <RiFacebookFill className="h-8 w-8 rounded-full" />
          </Link>
        </div>
        <address className="">
          <Link href="tel:+48516466255">516 466 255</Link>
        </address>
      </div>
    </footer>
  );
}
