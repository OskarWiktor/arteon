'use client';

import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import { usePathname } from 'next/navigation';
import Wrapper from '../ui/Wrapper';

const offerLinks = [
  { href: '/offer/web', title: 'Strony WWW' },
  { href: '/offer/shop', title: 'Sklepy online' },
  { href: '/offer/blog', title: 'Blogi' },
  { href: '/offer/design', title: 'Design' },
  { href: '/offer/content', title: 'Content' },
  { href: '/offer/marketing', title: 'Marketing' },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projekty' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <div className="border-t border-t-gray-200 py-8 md:px-8 lg:px-16">
      <Wrapper>
        <footer className="flex w-full flex-col gap-8" aria-label="Website Footer">
          <div className="flex flex-col items-center justify-between gap-4 md:hidden">
            <div className="flex w-full items-center justify-between">
              <Image src="/assets/arteon-logo.png" width={140} height={40} alt="Logo firmy Arteon" className="object-contain" />
              <div className="flex flex-col items-end gap-1">
                <div className="flex gap-2">
                  <Link href="https://www.instagram.com/arteon.pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <RiInstagramLine className="h-7 w-7 text-gray-800 transition hover:text-indigo-800" />
                  </Link>
                  <Link href="https://www.facebook.com/arteonpl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                    <RiFacebookFill className="h-7 w-7 text-gray-800 transition hover:text-indigo-800" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
            <nav className="w-full md:w-1/4">
              <ul className="flex flex-col gap-1 text-sm">
                {offerLinks.map(({ href, title }) => (
                  <li key={title}>
                    <Link href={href} className="text-gray-800 hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav className="w-full md:w-1/4">
              <ul className="flex flex-col items-start gap-1 text-sm">
                {navLinks.map(({ href, label }) => {
                  const isActive = pathname === href;
                  return (
                    <li key={label}>
                      <Link
                        href={href}
                        className={`text-gray-800 hover:text-indigo-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${isActive ? 'text-indigo-800' : ''}`}
                      >
                        {label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="flex w-full justify-center md:w-1/4 md:justify-start"></div>

            <div className="hidden w-full justify-center md:flex md:w-1/4 md:flex-col md:items-end md:gap-2">
              <Image src="/assets/arteon-logo.png" width={200} height={80} alt="Logo firmy Arteon" className="mt-2 object-contain" />

              <div className="mt-4 flex gap-2">
                <Link href="https://www.instagram.com/arteon.pl" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <RiInstagramLine className="h-7 w-7 text-gray-800 transition hover:text-indigo-800" />
                </Link>
                <Link href="https://www.facebook.com/arteonpl" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <RiFacebookFill className="h-7 w-7 text-gray-800 transition hover:text-indigo-800" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </Wrapper>
    </div>
  );
}
