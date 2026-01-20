import Wrapper from '../ui/Wrapper';
import CookieSettingsButton from './CookieSettingsButton';
import AppLink from '../ui/Link';
import Image from 'next/image';
// NAV-001: Tymczasowo zakomentowane - do przywrócenia gdy profile social media będą gotowe
// import { RiInstagramLine, RiFacebookFill } from 'react-icons/ri';
import { siteUrl, toAbsoluteUrl } from '@/lib/absoluteUrl';

const ui = {
  pl: {
    hours: 'Godziny: pn-pt, 8:00-16:00',
    graphicProjects: 'Projekty graficzne',
    websites: 'Witryny',
    content: 'Treści',
    marketing: 'Marketing',
    other: 'Główne strony',
    otherSecondary: 'Inne',
    cookieSettings: 'Ustawienia plików cookie',
    sitemap: 'Mapa strony',
    copyright: 'Wszelkie prawa zastrzeżone.',
    description: 'Realizujemy projekty dla polskich firm na całym świecie - z siedzibą w Małopolsce, w okolicach Krakowa.',
    companyDataLabel: 'Dane firmy i lokalizacja',
    graphicProjectsLabel: 'Usługi - Projekty graficzne',
    websitesContentLabel: 'Usługi - Witryny, Treści i Marketing',
    navigationLabel: 'Nawigacja',
    navigationSecondaryLabel: 'Nawigacja (cd.)',
    contactLabel: 'Kontakt',
    mainNavigationLabel: 'Główne sekcje',
    legalNavigationLabel: 'Dokumenty i ustawienia',
  },
} as const;

const ORG = {
  name: 'Arteon',
  phoneE164: '+48516466255',
  phoneDisplay: '516 466 255',
  email: 'kontakt@arteonagency.pl',
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
    email: 'kontakt@arteonagency.pl',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '16:00',
      },
    ],
  };

  return <script id="schema-professional-service-footer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />;
}

const offerLinksOne = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
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
  { href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej', title: 'Identyfikacja wizualna' },
  { href: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej', title: 'Karty lojalnościowe' },
  { href: '/uslugi/projekty-graficzne/projekt-katalogu', title: 'Katalogi' },
  { href: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera', title: 'Kupony i vouchery' },
  { href: '/uslugi/projekty-graficzne/projekt-graficzny-strony', title: 'Projekt graficzny strony' },
  { href: '/uslugi/projekty-graficzne/projekt-logo', title: 'Logo' },
  { href: '/uslugi/projekty-graficzne/projekt-menu-restauracji', title: 'Menu restauracji' },
  { href: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej', title: 'Odzież firmowa' },
  { href: '/uslugi/projekty-graficzne/projekt-papieru-firmowego', title: 'Papier firmowy' },
  { href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe', title: 'Szablony do mediów społecznościowych' },
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

const legalLinks = [
  { href: '/polityka-prywatnosci', label: 'Polityka prywatności' },
  { href: '/regulamin', label: 'Regulamin świadczenia usług' },
  { href: '/mapa-strony', label: 'Mapa strony' },
];

const toolsLinks = [
  { href: '/narzedzia/licznik-dlugosci-meta-title-i-description', label: 'Licznik meta title i description' },
  { href: '/narzedzia/tester-kontrastu-kolorow-wcag', label: 'Tester kontrastu kolorów WCAG' },
  { href: '/narzedzia/generator-palety-kolorow-z-obrazu', label: 'Paleta kolorów z obrazu' },
  { href: '/narzedzia/generator-palet-kolorow-online', label: 'Generator palet kolorów' },
  { href: '/narzedzia/jpg-png-na-webp-bez-limitu', label: 'Konwerter JPG/PNG na WebP' },
  { href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia', label: 'Kadrowanie i zmiana rozmiaru obrazu' },
  { href: '/narzedzia/darmowy-generator-favicon-ico', label: 'Generator favicon' },
  { href: '/narzedzia/darmowy-generator-stopki-mailowej', label: 'Generator stopki mailowej HTML' },
  { href: '/narzedzia/generator-kodu-qr', label: 'Generator kodu QR' },
];

export default function Footer() {
  const t = ui.pl;
  const midGfx = Math.ceil(offerLinksThree.length / 2);
  const gfxLeft = offerLinksThree.slice(0, midGfx);
  const gfxRight = offerLinksThree.slice(midGfx);
  const midTools = Math.ceil(toolsLinks.length / 2);
  const toolsLeft = toolsLinks.slice(0, midTools);
  const toolsRight = toolsLinks.slice(midTools);

  return (
    <>
      <footer className="border-t border-gray-200 bg-white py-4 md:py-7 lg:py-10" aria-label="Stopka strony">
        <Wrapper>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:auto-rows-min lg:grid-cols-5">
            {/* 1.1 Dane firmy + Logo + Social */}
            <section aria-label={t.companyDataLabel} className="lg:col-start-1 lg:row-start-1">
              <div className="mb-4">
                <Image src="/assets/arteon-logo.webp" width={140} height={50} alt="Logo Arteon" />
              </div>
              <address className="text-dark mb-4 text-base not-italic">
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
              </address>
              {/* NAV-001: Tymczasowo ukryte linki do social media
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/arteon.pl"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Arteon"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                >
                  <RiInstagramLine className="h-6 w-6 text-slate-800" aria-hidden="true" />
                </a>
                <a
                  href="https://www.facebook.com/people/Arteon/61583260915021/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook Arteon"
                  className="rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-800 focus-visible:ring-offset-2"
                >
                  <RiFacebookFill className="h-6 w-6 text-slate-800" aria-hidden="true" />
                </a>
              </div>
              */}
            </section>

            {/* 1.2 Witryny */}
            <nav aria-label={t.websitesContentLabel} className="lg:col-start-2 lg:row-start-1">
              <h3 className="h6 mb-3">{t.websites}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {offerLinksOne.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href}>{title}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 1.3 Treści + Marketing */}
            <nav aria-label="Treści i Marketing" className="lg:col-start-3 lg:row-start-1">
              <h3 className="h6 mb-3">Treści + Marketing</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {offerLinksTwo.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href}>{title}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 1.4 Projekty graficzne (1) */}
            <nav aria-label={`${t.graphicProjectsLabel} (1)`} className="lg:col-start-4 lg:row-start-1">
              <h3 className="h6 mb-3">{t.graphicProjects}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {gfxLeft.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href} display="inline-block">
                      {title}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 1.5 Projekty graficzne (2) */}
            <nav aria-label={`${t.graphicProjectsLabel} (2)`} className="lg:col-start-5 lg:row-start-1">
              <h3 className="sr-only">{t.graphicProjects}</h3>
              <ul className="flex flex-col gap-2 text-sm lg:mt-9">
                {gfxRight.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href} display="inline-block">
                      {title}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2.1 Główne strony */}
            <nav aria-label={t.mainNavigationLabel} className="lg:col-start-1 lg:row-start-2">
              <h3 className="h6 mb-3">{t.other}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {navLinksPrimary.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href}>{label}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2.2 Inne */}
            <nav aria-label={t.navigationSecondaryLabel} className="lg:col-start-2 lg:row-start-2">
              <h3 className="h6 mb-3">{t.otherSecondary}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {navLinksSecondary.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href}>{label}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2.3 Dokumenty i ustawienia */}
            <nav aria-label={t.legalNavigationLabel} className="lg:col-start-3 lg:row-start-2">
              <h3 className="h6 mb-3">{t.legalNavigationLabel}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {legalLinks.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href} display="inline-block">
                      {label}
                    </AppLink>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton label={t.cookieSettings} />
                </li>
              </ul>
            </nav>

            {/* 2.4 Narzędzia (1) */}
            <nav aria-label="Narzędzia online (1)" className="lg:col-start-4 lg:row-start-2">
              <h3 className="h6 mb-3">Narzędzia</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {toolsLeft.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href} className="text-left">
                      {label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            {/* 2.5 Narzędzia (2) */}
            <nav aria-label="Narzędzia online (2)" className="lg:col-start-5 lg:row-start-2">
              <h3 className="sr-only">Narzędzia</h3>
              <ul className="flex flex-col gap-2 text-sm lg:mt-9">
                {toolsRight.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href} className="text-left">
                      {label}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="text-light mt-8 border-t border-gray-200 pt-4">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
              <span className="text-center text-sm md:text-left">
                &copy; <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. {t.copyright}
              </span>
              <span className="text-sm">{t.description}</span>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="mr-3 cursor-pointer text-sm font-normal">
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
