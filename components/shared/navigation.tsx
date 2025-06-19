'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { RiInstagramLine, RiFacebookFill, RiMenuLine, RiCloseLine } from 'react-icons/ri';

const navigationItems = [
  { href: '/', label: 'Home', exact: true },
  { href: '/projects', label: 'Projekty' },
  { href: '/offer', label: 'Oferta' },
  { href: '/about-us', label: 'O nas' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="sticky top-0 z-50 w-full border-b border-b-gray-200 bg-white px-4 md:px-8 lg:px-16">
      <section className="flex h-16 lg:h-20 items-center justify-between">
        <div className="flex items-center">
          <Image src="/assets/arteon-logo.png" width={200} height={50} alt="Arteon company logo" />
        </div>

        <nav className="hidden gap-6 md:flex">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);
            return (
              <li key={label} className={`list-none ${isActivePage ? 'border-b-2 border-black' : ''}`}>
                <Link href={href}>{label}</Link>
              </li>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div>
            <button className="cursor-pointer text-xl text-amber-600">PL</button>
            <span className="text-xl"> / </span>
            <button className="cursor-pointer text-xl">EN</button>
          </div>
          <Link href="/">
            <RiInstagramLine className="h-6 w-6" />
          </Link>
          <Link href="/">
            <RiFacebookFill className="h-6 w-6" />
          </Link>
        </div>

        <button onClick={toggleMenu} className="block md:hidden">
          {isOpen ? <RiCloseLine size={28} /> : <RiMenuLine size={28} />}
        </button>
      </section>

      <div
        className={`absolute top-16 left-0 z-50 w-full bg-white px-4 pt-2 pb-6 transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-3">
          {navigationItems.map(({ href, label, exact }) => {
            const isActivePage = exact ? pathname === href : pathname.startsWith(href);
            return (
              <Link key={label} href={href} onClick={() => setIsOpen(false)} className={`text-lg ${isActivePage ? 'font-semibold underline' : ''}`}>
                {label}
              </Link>
            );
          })}
          <div className="flex justify-between border-t border-gray-200 pt-4">
            <div>
              <button className="cursor-pointer text-amber-600">PL</button>
              <span className="text-gray-600"> / </span>
              <button className='cursor-pointer'>EN</button>
            </div>
            <div className="flex gap-4">
              <Link href="/">
                <RiInstagramLine className="h-6 w-6" />
              </Link>
              <Link href="/">
                <RiFacebookFill className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
