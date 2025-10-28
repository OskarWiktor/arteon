'use client';

import Link from 'next/link';
import Wrapper from '../ui/Wrapper';

const offerLinksOne = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
];

const offerLinksTwo = [{ href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' }];

const offerLinksThree = [
  { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Projekt graficzny strony' },
  { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Projekt identyfikacji wizualnej' },
  { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Projekt katalogu' },
  { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Projekt logo' },
  { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Projekt odzieży firmowej' },
  { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Projekt papieru firmowego' },
  { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Projekt teczki ofertowej' },
  { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Projekt ulotki' },
  { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Projekt wizytówki' },
];

const offerLinksFour = [
  { href: '/uslugi/marketing/audyt-seo', title: 'Audyt SEO' },
  { href: '/uslugi/marketing/optymalizacja-seo', title: 'Optymalizacja SEO' },
  { href: '/uslugi/marketing/pozycjonowanie-stron', title: 'Pozycjonowanie stron' },
];

const navLinks = [
  { href: '/', label: 'Strona Główna' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/o-nas', label: 'O Nas' },
  { href: '/edukacja', label: 'Edukacja' },
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <nav aria-label="Usługi" className="md:col-span-1">
            <h3 className="h6">Witryny</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {offerLinksOne.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="h6 mt-4">Tworzenie treści</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {offerLinksTwo.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Usługi" className="md:col-span-1">
            <h3 className="h6">Grafika</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {offerLinksThree.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Usługi" className="md:col-span-1">
            <h3 className="h6">Marketing</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {offerLinksFour.map(({ href, title }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="h6 mt-4">Inne</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {otherLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="hover-underline rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li>
                <button onClick={() => (window as any).ArteonConsent?.open()} className="hover-underline cursor-pointer text-base" aria-haspopup="dialog">
                  Ustawienia cookies
                </button>
              </li>
              <li>
                <Link
                  href="/mapa-strony"
                  className="hover-underline inline-block rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  Mapa strony
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex w-full flex-row items-center justify-between gap-4 md:flex-col md:items-start md:justify-start">
            <div aria-label="Informacja o współpracy międzynarodowej"></div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 pt-4 text-[#5e5e5e]">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
            <span className="text-center md:text-left">
              © <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. Wszelkie prawa zastrzeżone.
            </span>
            <h3 className="p text-sm">Realizujemy projekty na całym świecie dla polskich firm i osób prywatnych</h3>
            <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer font-normal">
              #MadeWithNext.js
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
