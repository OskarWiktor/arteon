'use client';

import Link from 'next/link';
import Image from 'next/image';
import Wrapper from '../ui/Wrapper';

const offerLinks = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
  { href: '/uslugi/grafika', title: 'Grafika' },
  { href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' },
  { href: '/uslugi/marketing', title: 'Marketing' },
];

const navLinks = [
  { href: '/', label: 'Strona Główna' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/o-nas', label: 'O Nas' },
  { href: '/kontakt', label: 'Kontakt' },
];

const otherLinks = [
  { href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
  { href: '/regulamin', label: 'Regulamin świadczenia usług' },
];

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-4 md:py-7 lg:py-10" aria-label="Stopka strony">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex w-full flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-start">
            <Image src="/assets/arteon-logo.png" width={160} height={42} alt="Arteon - logo firmy" className="object-contain" />
            {/*
            <div className="flex items-center gap-2" role="group" aria-label="Social media">
              <a
                href="https://www.instagram.com/arteon.pl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                  <RiInstagramLine className="h-7 w-7 text-[#080808] transition hover:text-slate-500" aria-hidden="true" />
              </a>
            </div>
            */}
          </div>

          <nav aria-label="Usługi" className="md:col-span-1">
            <ul className="flex flex-col gap-2 text-sm">
              {offerLinks.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded text-[#080808] hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Nawigacja" className="md:col-span-1">
            <ul className="flex flex-col gap-2 text-sm">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded text-[#080808] hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Polityka" className="md:col-span-1">
            <ul className="flex flex-col gap-2 text-sm">
              {otherLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="rounded text-[#080808] hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={() => (window as any).ArteonConsent?.open()} className="cursor-pointer hover:text-slate-500" aria-haspopup="dialog">
                  Ustawienia cookies
                </button>
              </li>
              <li>
                <Link
                  href="/mapa-strony"
                  className="mt-4 inline-block rounded text-[#080808] hover:text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Mapa strony
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-sm text-[#5e5e5e]">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
            <span className="text-center md:text-left">
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
