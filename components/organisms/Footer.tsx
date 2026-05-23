import Wrapper from '../atoms/Wrapper';
import ButtonCookieSettings from '../atoms/buttons/ButtonCookieSettings';
import Image from 'next/image';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';
import { getFooterTools } from '@/lib/i18n/tool-registry';
import { JsonLd } from '@/components/atoms/JsonLd';
import type { Locale, FooterUi, LegalLink } from '@/types/locale';

import InlineLink from '../atoms/InlineLink';
const ORG = {
  name: 'Arteon',
  phoneE164: '+48516466255',
  phoneDisplay: '516 466 255',
  emailPl: 'kontakt@arteonagency.pl',
  emailIntl: 'contact@arteonagency.com',
};

function FooterSchemas() {
  const professionalService = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${siteUrl}#local`,
    name: ORG.name,
    url: siteUrl,
    image: toAbsoluteUrl('/icon-512x512.png'),
    telephone: ORG.phoneE164,
    email: ORG.emailPl,
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
  };

  return <JsonLd schema={professionalService} id='schema-professional-service-footer' />;
}

const offerLinksOne = [
  { href: '/uslugi/tworzenie-stron-wordpress', title: 'Strony WordPress' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
];

const offerLinksTwo = [
  { href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' },
  { href: '/uslugi/marketing/audyt-seo', title: 'Audyt SEO' },
  { href: '/uslugi/marketing/optymalizacja-seo', title: 'Optymalizacja SEO' },
  { href: '/uslugi/marketing/pozycjonowanie-stron', title: 'Pozycjonowanie stron' },
];

const offerLinksThree = [
  { href: '/uslugi/projekty-graficzne/projekt-cennika', title: 'Cenniki' },
  {
    href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    title: 'Identyfikacja wizualna',
  },
  { href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej', title: 'Karty lojalnościowe' },
  { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi' },
  {
    href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
    title: 'Kupony i vouchery',
  },
  {
    href: '/uslugi/projekty-graficzne/projekt-graficzny-strony',
    title: 'Projekt graficzny strony',
  },
  { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo' },
  { href: '/uslugi/projekty-graficzne/projekt-menu-restauracji', title: 'Menu restauracji' },
  { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa' },
  { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy' },
  {
    href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
    title: 'Szablony do mediów społecznościowych',
  },
  { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe' },
  { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki' },
  { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki' },
];

const navLinksPrimary = [
  { href: '/', label: 'Strona główna' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/o-nas/dolacz-do-sieci', label: 'Dołącz do sieci' },
];

const navLinksSecondary = [
  { href: '/edukacja', label: 'Edukacja' },
  { href: '/narzedzia', label: 'Narzędzia' },
  { href: '/o-nas/faq', label: 'FAQ' },
  { href: '/kontakt', label: 'Kontakt' },
];

const PL_LEGAL_LINKS = [
  { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { href: '/regulamin', label: 'Regulamin świadczenia usług' },
  { href: '/mapa-strony', label: 'Mapa strony' },
];

const toolsLinks = [
  {
    href: '/narzedzia/licznik-dlugosci-meta-title-i-description',
    label: 'Licznik meta title i description',
  },
  { href: '/narzedzia/kontrast-i-czytelnosc-kolorow', label: 'Kontrast i czytelność kolorów' },
  { href: '/narzedzia/ekstraktor-kolorow-z-obrazu', label: 'Ekstraktor kolorów z obrazu' },
  { href: '/narzedzia/generator-palet-kolorow', label: 'Generator palet kolorów' },
  { href: '/narzedzia/konwerter-jpg-na-webp', label: 'Konwerter JPG na WebP' },
  { href: '/narzedzia/edytor-zdjec-online', label: 'Kadrowanie i zmiana rozmiaru obrazu' },
  { href: '/narzedzia/darmowy-generator-favicon-ico', label: 'Generator favicon' },
  { href: '/narzedzia/darmowy-generator-stopki-mailowej', label: 'Generator stopki mailowej HTML' },
  { href: '/narzedzia/darmowy-generator-kodow-qr', label: 'Generator kodów QR' },
];

interface FooterProps {
  locale: Locale;
  footerUi: FooterUi;
  legalLinks: LegalLink[];
  toolsIndexHref: string;
}

export default function Footer({ locale, footerUi, legalLinks, toolsIndexHref }: FooterProps) {
  const isPl = locale === 'pl';
  const ft = footerUi;
  const midGfx = Math.ceil(offerLinksThree.length / 2);
  const gfxLeft = offerLinksThree.slice(0, midGfx);
  const gfxRight = offerLinksThree.slice(midGfx);

  // For PL: use hardcoded toolsLinks; for other locales: generate from registry
  const localeToolsLinks = isPl
    ? toolsLinks
    : getFooterTools(locale).map(tool => ({ href: tool.href, label: tool.title }));
  const localeLegalLinks = legalLinks;

  const midTools = Math.ceil(localeToolsLinks.length / 2);
  const toolsLeft = localeToolsLinks.slice(0, midTools);
  const toolsRight = localeToolsLinks.slice(midTools);

  // Non-PL: 4 columns of tools
  const colSize = Math.ceil(localeToolsLinks.length / 4);
  const toolsCol1 = localeToolsLinks.slice(0, colSize);
  const toolsCol2 = localeToolsLinks.slice(colSize, colSize * 2);
  const toolsCol3 = localeToolsLinks.slice(colSize * 2, colSize * 3);
  const toolsCol4 = localeToolsLinks.slice(colSize * 3);

  // Non-PL: simplified footer
  if (!isPl) {
    return (
      <footer
        className='border-t border-neutral-200 bg-white py-4 md:py-7 lg:py-10'
        aria-label='Site footer'
      >
        <Wrapper>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:auto-rows-min lg:grid-cols-6'>
            <section aria-label={ft.companyDataLabel} className='lg:col-start-1 lg:row-start-1'>
              <div className='mb-4'>
                <InlineLink href={toolsIndexHref}>
                  <Image src='/assets/arteon-logo.webp' width={140} height={50} alt='Arteon logo' />
                </InlineLink>
              </div>
              <p className='text-dark text-base'>{ft.description}</p>
            </section>

            <nav aria-label={`${ft.toolsLabel} (1)`} className='lg:col-start-2 lg:row-start-1'>
              <h3 className='h6 mb-3'>{ft.toolsLabel}</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {toolsCol1.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={`${ft.toolsLabel} (2)`} className='lg:col-start-3 lg:row-start-1'>
              <h3 className='sr-only'>{ft.toolsLabel}</h3>
              <ul className='flex flex-col gap-2 text-sm lg:mt-9'>
                {toolsCol2.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={`${ft.toolsLabel} (3)`} className='lg:col-start-4 lg:row-start-1'>
              <h3 className='sr-only'>{ft.toolsLabel}</h3>
              <ul className='flex flex-col gap-2 text-sm lg:mt-9'>
                {toolsCol3.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={`${ft.toolsLabel} (4)`} className='lg:col-start-5 lg:row-start-1'>
              <h3 className='sr-only'>{ft.toolsLabel}</h3>
              <ul className='flex flex-col gap-2 text-sm lg:mt-9'>
                {toolsCol4.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='text-light mt-8 border-t border-neutral-200 pt-4'>
            <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:items-start'>
              <small className='text-center text-sm md:text-left'>
                &copy; <time dateTime='2025'>2025</time> Arteon. {ft.copyright}
              </small>
              {localeLegalLinks.map(link => (
                <p key={link.key}>
                  <InlineLink href={link.href} className='text-sm'>
                    {link.label}
                  </InlineLink>
                </p>
              ))}
              <ButtonCookieSettings label={ft.cookieSettingsLabel} />
              <a
                href='https://nextjs.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-3 cursor-pointer text-xs font-normal'
              >
                #MadeWithNext.js
              </a>
            </div>
          </div>
        </Wrapper>
      </footer>
    );
  }

  // PL: full footer
  return (
    <>
      <footer
        className='border-t border-neutral-200 bg-white py-4 md:py-7 lg:py-10'
        aria-label='Stopka strony'
      >
        <Wrapper>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:auto-rows-min lg:grid-cols-5'>
            {/* 1.1 Dane firmy + Logo + Social */}
            <section
              aria-label='Dane firmy i lokalizacja'
              className='lg:col-start-1 lg:row-start-1'
            >
              <div className='mb-4'>
                <Image src='/assets/arteon-logo.webp' width={140} height={50} alt='Logo Arteon' />
              </div>
              <address className='text-dark mb-4 text-base not-italic'>
                <p>
                  <strong>{ORG.name}</strong>
                </p>
                <p>
                  <a href={`tel:${ORG.phoneE164}`} className='hover-underline'>
                    {ORG.phoneDisplay}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${ORG.emailPl}`} className='hover-underline'>
                    {ORG.emailPl}
                  </a>
                </p>
              </address>
              {/* NAV-001: Tymczasowo ukryte linki do media społecznościowe
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/arteon.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Arteon"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <RiInstagramLine className="h-6 w-6 text-primary" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/people/Arteon/61583260915021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Arteon"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  <RiFacebookFill className="h-6 w-6 text-primary" aria-hidden="true" />
                </a>
              </div>
              */}
            </section>

            <nav
              aria-label='Usługi - Witryny, Treści i Marketing'
              className='lg:col-start-2 lg:row-start-1'
            >
              <h3 className='h6 mb-3'>Witryny</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {offerLinksOne.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label='Treści i Marketing' className='lg:col-start-3 lg:row-start-1'>
              <h3 className='h6 mb-3'>Treści + Marketing</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {offerLinksTwo.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label='Usługi - Projekty graficzne (1)'
              className='lg:col-start-4 lg:row-start-1'
            >
              <h3 className='h6 mb-3'>Projekty graficzne</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {gfxLeft.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label='Usługi - Projekty graficzne (2)'
              className='lg:col-start-5 lg:row-start-1'
            >
              <h3 className='sr-only'>Projekty graficzne</h3>
              <ul className='flex flex-col gap-2 text-sm lg:mt-9'>
                {gfxRight.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label='Główne sekcje' className='lg:col-start-1 lg:row-start-2'>
              <h3 className='h6 mb-3'>Główne strony</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {navLinksPrimary.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label='Nawigacja (cd.)' className='lg:col-start-2 lg:row-start-2'>
              <h3 className='h6 mb-3'>Inne</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {navLinksSecondary.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink className='text-left text-sm' href={href}>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label='Narzędzia (1)' className='lg:col-start-4 lg:row-start-2'>
              <h3 className='h6 mb-3'>Narzędzia</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {toolsLeft.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label='Narzędzia (2)' className='lg:col-start-5 lg:row-start-2'>
              <h3 className='sr-only'>Narzędzia</h3>
              <ul className='flex flex-col gap-2 text-sm lg:mt-9'>
                {toolsRight.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink href={href} className='text-left text-sm'>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className='text-light mt-8 border-t border-neutral-200 pt-4'>
            <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:items-start'>
              <small className='text-center text-sm md:text-left'>
                &copy; <time dateTime='2025'>2025</time> Arteon. Wszelkie prawa zastrzeżone.
              </small>
              {PL_LEGAL_LINKS.map(({ href, label }) => (
                <p key={href}>
                  <InlineLink href={href} className='text-light text-sm'>
                    {label}
                  </InlineLink>
                </p>
              ))}
              <ButtonCookieSettings label='Ustawienia plików cookie' />
              <a
                href='https://nextjs.org/'
                target='_blank'
                rel='noopener noreferrer'
                className='mr-3 cursor-pointer text-sm font-normal'
              >
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
