'use client';

import Image from 'next/image';
import Link from 'next/link';

import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';

import { usePathname } from 'next/navigation';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <div className="sticky w-full border-b-1 border-b-gray-200 px-4 md:px-16">
      <section className="flex h-20 items-center justify-between bg-white">
        <div className="flex items-center">
          <Image src="/assets/arteon-logo.png" width={200} height={50} alt="Arteon company logo" />
        </div>

        <nav className="mr-4 ml-4 flex items-center gap-6">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);
            return (
              <li key={label} className={`list-none ${isActivePage ? 'border-b-1' : 'border-b-0'}`}>
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </nav>

        <div>
          <button className="cursor-pointer text-xl text-amber-600">PL</button>
          <span className="text-xl"> / </span>
          <button className="cursor-pointer text-xl">EN</button>
        </div>

        <div className="flex">
          <Link href="/">
            <RiInstagramLine className="h-8 w-8 rounded-full" />
          </Link>

          <Link href="/">
            <RiFacebookFill className="h-8 w-8 rounded-full" />
          </Link>
        </div>
      </section>
    </div>
  );
}
