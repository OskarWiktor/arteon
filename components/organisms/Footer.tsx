import Image from 'next/image';
import { LOCALE_SITEMAP_META } from '@/lib/i18n/pages/localeSitemapMeta';
import { getToolsList } from '@/lib/i18n/toolRegistry';
import type { Locale, FooterUi, LegalLink } from '@/types/locale';
import { siteUrl, toAbsoluteUrl } from '@/utils/absoluteUrl';
import ButtonCookieSettings from '../atoms/buttons/ButtonCookieSettings';
import InlineLink from '../atoms/InlineLink';
import { JsonLd } from '../atoms/JsonLd';
import Wrapper from '../atoms/Wrapper';

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

  return (
    <JsonLd
      schema={professionalService}
      id='schema-professional-service-footer'
    />
  );
}

const offerLinksOne = [
  { href: '/uslugi/strony-internetowe-dla-firm', title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
];

const offerLinksTwo = [
  { href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' },
  { href: '/uslugi/marketing/audyt-seo', title: 'Audyt SEO' },
  { href: '/uslugi/marketing/optymalizacja-seo', title: 'Optymalizacja SEO' },
  {
    href: '/uslugi/marketing/pozycjonowanie-stron',
    title: 'Pozycjonowanie stron',
  },
];

const offerLinksThree = [
  { href: '/uslugi/projekty-graficzne/projekt-cennika', title: 'Cenniki' },
  {
    href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    title: 'Identyfikacja wizualna',
  },
  {
    href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    title: 'Karty lojalnościowe',
  },
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
  {
    href: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
    title: 'Menu restauracji',
  },
  {
    href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    title: 'Odzież firmowa',
  },
  {
    href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    title: 'Papier firmowy',
  },
  {
    href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
    title: 'Szablony do mediów społecznościowych',
  },
  {
    href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    title: 'Teczki ofertowe',
  },
  { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki' },
  { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki' },
];

const navLinksPrimary = [
  { href: '/', label: 'Strona główna' },
  { href: '/uslugi', label: 'Usługi' },
  { href: '/realizacje', label: 'Realizacje' },
  { href: '/o-nas', label: 'O nas' },
  { href: '/edukacja', label: 'Edukacja' },
  { href: '/narzedzia', label: 'Narzędzia' },
  { href: '/kontakt', label: 'Kontakt' },
];

const PL_LEGAL_LINKS = [
  { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { href: '/regulamin', label: 'Regulamin świadczenia usług' },
  { href: '/mapa-strony', label: 'Mapa strony' },
];

// PL footer: 4 kolumny narzędzi po 7 linków = 28 podlinkowanych narzędzi
// (dla wewnętrznego linkowania / SEO). Klasy col-start muszą być statyczne,
// żeby Tailwind je wygenerował.
const PL_TOOLS_COUNT = 28;
const PL_TOOL_COLUMNS = 4;
const PL_TOOL_COL_CLASS = [
  'lg:col-start-2 lg:row-start-2',
  'lg:col-start-3 lg:row-start-2',
  'lg:col-start-4 lg:row-start-2',
  'lg:col-start-5 lg:row-start-2',
];

interface FooterProps {
  locale: Locale;
  footerUi: FooterUi;
  legalLinks: LegalLink[];
  toolsIndexHref: string;
}

/**
 * Render the site footer tailored to the provided locale, UI labels, and link collections.
 *
 * Renders a full Polish footer when `locale` is `'pl'`; for other locales it renders a simplified tools-focused footer.
 *
 * @param locale - Locale code used to choose footer variant (e.g., `'pl'` for Polish)
 * @param footerUi - UI labels and text fragments used throughout the footer
 * @param legalLinks - Locale-specific legal links to display in the footer (used for non-PL variant)
 * @param toolsIndexHref - Href for the tools index logo/link in the non-PL footer
 * @returns The footer element (JSX) appropriate for the given locale and props
 */

export default function Footer({
  locale,
  footerUi,
  legalLinks,
  toolsIndexHref,
}: FooterProps) {
  const isPl = locale === 'pl';
  const ft = footerUi;
  const midGfx = Math.ceil(offerLinksThree.length / 2);
  const gfxLeft = offerLinksThree.slice(0, midGfx);
  const gfxRight = offerLinksThree.slice(midGfx);

  const localeToolsLinks = getToolsList(locale).map(tool => ({
    href: tool.href,
    label: tool.title,
  }));

  const localeLegalLinks: LegalLink[] = [
    ...legalLinks,
    {
      key: 'sitemap',
      href: LOCALE_SITEMAP_META[locale].path,
      label: LOCALE_SITEMAP_META[locale].title,
    },
  ];

  const plToolsLinks = getToolsList('pl')
    .slice(0, PL_TOOLS_COUNT)
    .map(tool => ({ href: tool.href, label: tool.title }));
  const plToolColSize = Math.ceil(plToolsLinks.length / PL_TOOL_COLUMNS);
  const plToolColumns = Array.from({ length: PL_TOOL_COLUMNS }, (_, i) =>
    plToolsLinks.slice(i * plToolColSize, (i + 1) * plToolColSize),
  ).filter(column => column.length > 0);

  const FOOTER_TOOL_COLUMNS = 6;
  const LOGO_COLUMN_LINK_OFFSET = 3;
  const firstColumnCount = Math.max(
    1,
    Math.ceil(localeToolsLinks.length / FOOTER_TOOL_COLUMNS) -
      LOGO_COLUMN_LINK_OFFSET,
  );
  const firstToolColumn = localeToolsLinks.slice(0, firstColumnCount);
  const remainingToolLinks = localeToolsLinks.slice(firstColumnCount);
  const otherColumnSize = Math.ceil(
    remainingToolLinks.length / (FOOTER_TOOL_COLUMNS - 1),
  );
  const otherToolColumns = Array.from(
    { length: FOOTER_TOOL_COLUMNS - 1 },
    (_, i) =>
      remainingToolLinks.slice(i * otherColumnSize, (i + 1) * otherColumnSize),
  ).filter(column => column.length > 0);

  if (!isPl) {
    return (
      <footer
        className='border-t border-neutral-200 bg-white py-4 md:py-7 lg:py-10'
        aria-label='Site footer'
      >
        <Wrapper>
          <div className='grid grid-cols-1 items-start gap-8 md:grid-cols-2 lg:grid-cols-6'>
            <div>
              <section aria-label={ft.companyDataLabel} className='mb-8'>
                <div className='mb-4'>
                  <InlineLink href={toolsIndexHref}>
                    <Image
                      src='/assets/arteon-logo.webp'
                      width={140}
                      height={50}
                      alt='Arteon logo'
                    />
                  </InlineLink>
                </div>
                <p className='text-base text-dark'>{ft.description}</p>
              </section>

              <nav aria-label={`${ft.toolsLabel} (1)`}>
                <ul className='flex flex-col gap-2 text-sm'>
                  {firstToolColumn.map(({ href, label }) => (
                    <li key={href}>
                      <InlineLink href={href} className='text-left'>
                        {label}
                      </InlineLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Remaining columns auto-flow into grid columns 2…6. */}
            {otherToolColumns.map((column, columnIndex) => (
              <nav
                key={column[0]?.href ?? columnIndex}
                aria-label={`${ft.toolsLabel} (${columnIndex + 2})`}
              >
                <ul className='flex flex-col gap-2 text-sm'>
                  {column.map(({ href, label }) => (
                    <li key={href}>
                      <InlineLink href={href} className='text-left'>
                        {label}
                      </InlineLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className='mt-8 border-t border-neutral-200 pt-4 text-light'>
            <div className='flex flex-col items-center justify-between gap-2 md:flex-row md:items-start'>
              <small className='text-center text-sm md:text-left'>
                &copy; <time dateTime='2026'>2026</time> Arteon. {ft.copyright}
              </small>
              {localeLegalLinks.map(link => (
                <p key={link.key}>
                  <InlineLink href={link.href}>{link.label}</InlineLink>
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

  return (
    <>
      <footer
        className='border-t border-neutral-200 bg-white py-4 md:py-7 lg:py-10'
        aria-label='Stopka strony'
      >
        <Wrapper>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:auto-rows-min lg:grid-cols-5'>
            <section
              aria-label='Dane firmy i lokalizacja'
              className='lg:col-start-1 lg:row-start-1'
            >
              <div className='mb-4'>
                <Image
                  src='/assets/arteon-logo.webp'
                  width={140}
                  height={50}
                  alt='Logo Arteon'
                  className='dark:invert'
                />
              </div>
              <address className='mb-4 text-base text-dark not-italic'>
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
            </section>

            <nav
              aria-label='Usługi - Witryny, Treści i Marketing'
              className='lg:col-start-2 lg:row-start-1'
            >
              <h3 className='h6 mb-3 font-semibold!'>Witryny</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {offerLinksOne.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='font-regular! text-left' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label='Treści i Marketing'
              className='lg:col-start-3 lg:row-start-1'
            >
              <h3 className='h6 mb-3 font-semibold!'>Treści + Marketing</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {offerLinksTwo.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='font-regular! text-left' href={href}>
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
              <h3 className='h6 mb-3 font-semibold!'>Projekty graficzne</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {gfxLeft.map(({ href, title }) => (
                  <li key={href}>
                    <InlineLink className='font-regular! text-left' href={href}>
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
                    <InlineLink className='font-regular! text-left' href={href}>
                      {title}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav
              aria-label='Główne sekcje'
              className='lg:col-start-1 lg:row-start-2'
            >
              <h3 className='h6 mb-3 font-semibold!'>Główne strony</h3>
              <ul className='flex flex-col gap-2 text-sm'>
                {navLinksPrimary.map(({ href, label }) => (
                  <li key={href}>
                    <InlineLink className='font-regular! text-left' href={href}>
                      {label}
                    </InlineLink>
                  </li>
                ))}
              </ul>
            </nav>

            {plToolColumns.map((column, columnIndex) => (
              <nav
                key={column[0]?.href ?? columnIndex}
                aria-label={`Narzędzia (${columnIndex + 1})`}
                className={PL_TOOL_COL_CLASS[columnIndex]}
              >
                <h3
                  className={
                    columnIndex === 0 ? 'h6 mb-3 font-semibold!' : 'sr-only'
                  }
                >
                  Narzędzia
                </h3>
                <ul
                  className={
                    columnIndex === 0
                      ? 'flex flex-col gap-2 text-sm'
                      : 'flex flex-col gap-2 text-sm lg:mt-9'
                  }
                >
                  {column.map(({ href, label }) => (
                    <li key={href}>
                      <InlineLink
                        href={href}
                        className='font-regular! text-left'
                      >
                        {label}
                      </InlineLink>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          <div className='mt-8 border-t border-neutral-200 text-light'>
            <div className='mt-6 flex flex-col items-center justify-between gap-2 md:flex-row md:items-start'>
              <small className='text-center text-sm md:text-left'>
                &copy; <time dateTime='2026'>2026</time> Arteon. Wszelkie prawa
                zastrzeżone.
              </small>
              {PL_LEGAL_LINKS.map(({ href, label }) => (
                <p key={href}>
                  <InlineLink href={href} className='text-light'>
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
