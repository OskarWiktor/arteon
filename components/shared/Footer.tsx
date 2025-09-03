import Link from 'next/link';
import Image from 'next/image';
import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
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
  return (
    <footer className="border-t border-gray-200 bg-white py-10 md:py-12" aria-label="Stopka strony">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col items-start gap-4">
            <Image src="/assets/arteon-logo.png" width={200} height={64} alt="Arteon — logo firmy" className="object-contain" />
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
              <a
                href="https://www.facebook.com/arteonpl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-800 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
              >
                <RiFacebookFill className="h-7 w-7 text-[#080808] transition hover:text-indigo-800" aria-hidden="true" />
              </a>
            </div>
          </div>

          <nav aria-label="Oferta" className="md:col-span-1">
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
          <div className="flex flex-col items-start justify-between gap-2 md:flex-row">
            <span>
              © <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. Wszelkie prawa zastrzeżone.
            </span>
            <span className="italic">#MadeWithNext</span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
