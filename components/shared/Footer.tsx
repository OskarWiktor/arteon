import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine } from 'react-icons/ri';
import Wrapper from '../ui/Wrapper';

const offerLinks = [
  { href: '/services/websites', title: 'Strony internetowe' },
  { href: '/services/online-stores', title: 'Sklepy online' },
  { href: '/services/online-blogs', title: 'Blogi' },
  { href: '/services/design', title: 'Grafika' },
  { href: '/services/content', title: 'Content' },
  { href: '/services/marketing', title: 'Marketing' },
];

const navLinks = [
  { href: '/', label: 'Strona Główna' },
  { href: '/projects', label: 'Realizacje' },
  { href: '/contact', label: 'Kontakt' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-10 md:py-12" aria-label="Stopka strony">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex w-full flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-start">
            <Image src="/assets/arteon-logo.png" width={160} height={42} alt="Arteon — logo firmy" className="object-contain" />
            <div className="flex items-center gap-2" role="group" aria-label="Social media">
              <a
                href="https://www.instagram.com/arteon.pl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <RiInstagramLine className="h-7 w-7 text-[#080808] transition hover:text-indigo-800" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Usługi" className="md:col-span-1">
            <ul className="flex flex-col gap-1 text-sm">
              {offerLinks.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded text-[#080808] hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nawigacja" className="md:col-span-1">
            <ul className="flex flex-col gap-1 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded text-[#080808] hover:text-indigo-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-1" />
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-[#5e5e5e]">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
            <span>
              © <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. Wszelkie prawa zastrzeżone.
            </span>
            <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer text-sm font-normal text-[#5e5e5e]">
              #MadeWithNext.js
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
