import Wrapper from '../ui/Wrapper';
import CookieSettingsButton from './CookieSettingsButton';
import AppLink from '../ui/Link';

const ui = {
  pl: {
    hours: 'Godziny: pn-pt, 8:00-16:00',
    graphicProjects: 'Projekty graficzne',
    websites: 'Witryny',
    contentCreation: 'Tworzenie treści',
    marketing: 'Marketing',
    other: 'Inne',
    cookieSettings: 'Ustawienia cookies',
    sitemap: 'Mapa strony',
    copyright: 'Wszelkie prawa zastrzeżone.',
    description: 'Realizujemy projekty dla polskich firm na całym świecie - z siedzibą w Małopolsce, w okolicach Krakowa.',
    companyDataLabel: 'Dane firmy i lokalizacja',
    graphicProjectsLabel: 'Usługi - Projekty graficzne',
    websitesContentLabel: 'Usługi - Witryny, Treści i Marketing',
    navigationLabel: 'Nawigacja',
  },
} as const;

const BASE_URL = 'https://www.arteonagency.pl';

const ORG = {
  name: 'Arteon',
  phoneE164: '+48516466255',
  phoneDisplay: '516 466 255',
  email: 'kontakt@arteonagency.pl',
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
    email: 'kontakt@arteonagency.pl',
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
      geoMidpoint: { '@type': 'GeoCoordinates', latitude: 50.0053746, longitude: 19.7094865 },
      geoRadius: 50000,
    },
    areaServed: ORG.servedList,
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

  return <script id="schema-professional-service-footer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }} />;
}

const offerLinksOne = [
  { href: '/uslugi/strony-internetowe', title: 'Strony internetowe' },
  { href: '/uslugi/sklepy-internetowe', title: 'Sklepy internetowe' },
  { href: '/uslugi/blogi-internetowe', title: 'Blogi internetowe' },
];

const offerLinksTwo = [{ href: '/uslugi/tworzenie-tresci', title: 'Tworzenie treści' }];

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
  { href: '/uslugi/projekty-graficzne/szablony-postow-social-media', title: 'Szablony social media' },
  { href: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej', title: 'Teczki ofertowe' },
  { href: '/uslugi/projekty-graficzne/projekt-ulotki', title: 'Ulotki' },
  { href: '/uslugi/projekty-graficzne/projekt-wizytowki', title: 'Wizytówki' },
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
  { href: '/narzedzia', label: 'Narzędzia' },
  { href: '/kontakt', label: 'Kontakt' },
];

const otherLinks = [
  { href: '/polityka-prywatnosci', label: 'Polityka Prywatności' },
  { href: '/regulamin', label: 'Regulamin świadczenia usług' },
];

export default function Footer() {
  const t = ui.pl;
  const mid = Math.ceil(offerLinksThree.length / 2);
  const gfxLeft = offerLinksThree.slice(0, mid);
  const gfxRight = offerLinksThree.slice(mid);

  return (
    <>
      <footer className="border-t border-gray-200 bg-white py-4 md:py-7 lg:py-10" aria-label="Stopka strony">
        <Wrapper>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            <section aria-label={t.companyDataLabel}>
              <address className="text-base text-dark not-italic">
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

              <div className="mt-3">
                <p className="text-sm text-light">{t.hours}</p>
              </div>

              <ul className="mt-4 flex flex-col gap-2 text-sm">
                {navLinks.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href}>{label}</AppLink>
                  </li>
                ))}
              </ul>
            </section>

            <nav aria-label={t.graphicProjectsLabel} className="lg:col-span-2">
              <h3 className="h6 mb-2">{t.graphicProjects}</h3>
              <div className="mt-2 grid grid-cols-2 gap-x-10">
                <ul className="flex flex-col gap-2 text-sm">
                  {gfxLeft.map(({ href, title }) => (
                    <li key={href}>
                      <AppLink href={href} display="inline-block">
                        {title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-col gap-2 text-sm">
                  {gfxRight.map(({ href, title }) => (
                    <li key={href}>
                      <AppLink href={href} display="inline-block">
                        {title}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>

            <nav aria-label={t.websitesContentLabel}>
              <h3 className="h6 mb-2">{t.websites}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {offerLinksOne.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href}>{title}</AppLink>
                  </li>
                ))}
              </ul>

              <h3 className="h6 mt-4">{t.contentCreation}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {offerLinksTwo.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href}>{title}</AppLink>
                  </li>
                ))}
              </ul>

              <h3 className="h6 mt-4">{t.marketing}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {offerLinksFour.map(({ href, title }) => (
                  <li key={href}>
                    <AppLink href={href}>{title}</AppLink>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label={t.navigationLabel}>
              <h3 className="h6 mb-2">{t.other}</h3>
              <ul className="flex flex-col gap-2 text-sm">
                {otherLinks.map(({ href, label }) => (
                  <li key={href}>
                    <AppLink href={href} display="inline-block">
                      {label}
                    </AppLink>
                  </li>
                ))}
                <li>
                  <CookieSettingsButton label={t.cookieSettings} />
                </li>
                <li>
                  <AppLink href="/mapa-strony" display="inline-block">
                    {t.sitemap}
                  </AppLink>
                </li>
              </ul>
            </nav>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-4 text-light">
            <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
              <span className="text-center text-sm md:text-left">
                © <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. {t.copyright}
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
