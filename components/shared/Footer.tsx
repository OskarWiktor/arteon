'use client';

import Link from 'next/link';
import Script from 'next/script';
import Wrapper from '../ui/Wrapper';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

const ORG = {
  name: 'Arteon',
  phoneE164: '+48516466255',
  phoneDisplay: '516 466 255',
  email: 'contact@arteonagency.pl',
  street: 'ul. Jaśminowa 36',
  locality: 'Zagacie',
  region: 'małopolskie',
  country: 'PL',
  postal: '32-070',
  areaServedLocal: 'Kraków i okolice (małopolskie)',
  servedList: ['Kraków', 'Skawina', 'Czernichów', 'Liszki', 'Zabierzów', 'Wieliczka'],
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Zagacie%2C+ul.+Ja%C5%9Bminowa+36%2C+ma%C5%82opolskie',
};

function FooterSchemas() {
  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${BASE_URL}#local`,
    name: ORG.name,
    url: BASE_URL,
    image: `${BASE_URL}/icon-512x512.png`,
    telephone: ORG.phoneE164,
    email: 'contact@arteonagency.pl',
    address: {
      '@type': 'PostalAddress',
      streetAddress: ORG.street,
      addressLocality: ORG.locality,
      addressRegion: 'małopolskie',
      addressCountry: 'PL',
      postalCode: '32-070',
    },
    parentOrganization: { '@id': `${BASE_URL}#organization` },

    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 50.0053746,
        longitude: 19.7094865,
      },
      geoRadius: 50000,
    },

    areaServed: ['Kraków', 'Skawina', 'Czernichów', 'Liszki', 'Zabierzów', 'Wieliczka'],

    hasMap:
      'https://www.google.com/maps/place/Ja%C5%9Bminowa+36,+32-070+Zagacie/@49.955128,19.7525321,11z/data=!4m6!3m5!1s0x47165fee99b80287:0x35a17883ddf6b10c!8m2!3d50.0053746!4d19.7094865!16s%2Fg%2F11vl3bnz_y',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
  };

  return (
    <Script id="schema-professional-service-footer" type="application/ld+json">
      {JSON.stringify(professionalService)}
    </Script>
  );
}

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
    <>
      <footer className="border-t border-gray-200 bg-white py-4 md:py-7 lg:py-10" aria-label="Stopka strony">
        <Wrapper>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <nav aria-label="Usługi – Witryny" className="md:col-span-1">
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

            <nav aria-label="Usługi – Grafika" className="md:col-span-1">
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

            <nav aria-label="Usługi – Marketing" className="md:col-span-1">
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
                      className="hover-underline inline-block rounded text-base text-[#080808] focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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

            <section aria-label="Dane firmy i lokalizacja" className="md:col-span-1">
              <address className="text-base text-[#080808] not-italic">
                <p>
                  <strong>{ORG.name}</strong>
                </p>
                <p>
                  <a href={`tel:${ORG.phoneE164}`} className="hover-underline">
                    {ORG.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${ORG.email}`} className="hover-underline">
                    {ORG.email}
                  </a>
                </p>
                <p>
                  {ORG.street}, {ORG.locality}
                </p>
                <p>{ORG.region}, Polska</p>
                <p>
                  <a href={ORG.mapUrl} target="_blank" rel="noopener noreferrer" className="hover-underline">
                    Pokaż na mapie
                  </a>
                </p>
              </address>

              <div className="mt-3">
                <p className="mt-1 text-sm text-[#5e5e5e]">Obszar siedziby: {ORG.servedList.join(', ')}</p>
                <p className="text-sm text-[#5e5e5e]">Godziny: pn–pt, 8:00–16:00</p>
              </div>
            </section>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-4 text-[#5e5e5e]">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
              <span className="text-center md:text-left">
                © <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. Wszelkie prawa zastrzeżone.
              </span>
              <p className="text-sm">Tworzymy strony, sklepy i identyfikacje wizualne dla polskich firm na całym świecie — z siedzibą w Małopolsce, w okolicach Krakowa.</p>
              <a href="https://nextjs.org/" target="_blank" className="mr-3 cursor-pointer font-normal">
                #MadeWithNext.js
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
      <FooterSchemas />
    </>
  );
}
