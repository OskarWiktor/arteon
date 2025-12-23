import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';

export const metadata: Metadata = {
  title: 'Darmowy generator favicon online - favicon.ico dla Twojej strony',
  description: 'Skorzystaj z darmowego narzędzia i stwórz favicon.ico oraz zestaw ikon PNG w różnych rozmiarach na swoją stronę. Dodaj obraz i pobierz gotowe pliki.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico') },
  openGraph: {
    title: 'Darmowy generator favicon online - favicon.ico dla Twojej strony',
    description: 'Skorzystaj z darmowego narzędzia i stwórz favicon.ico oraz zestaw ikon PNG w różnych rozmiarach na swoją stronę. Dodaj obraz i pobierz gotowe pliki.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy generator favicon online',
  alternateName: 'Generator favicon.ico i ikon PNG',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Darmowy generator favicon online po polsku. Twórz favicon.ico oraz ikony PNG 16x16, 32x32, 180x180, 192x192 i 512x512 bez limitów i bez wysyłania plików na serwer.',
  inLanguage: 'pl-PL',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'PLN',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-favicon-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Darmowy generator favicon online"
        description="Stwórz favicon.ico oraz zestaw ikon PNG dla swojej strony. Dodaj obraz, wybierz rozmiary i pobierz gotowe pliki."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/darmowy-generator-favicon-ico`, label: 'Darmowy generator favicon online' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <FaviconGenerator />

        <Gap size="xs" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Wygenerowanie favicon to dosłownie kilka kliknięć:"
          grid="four"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij plik na obszar uploadu lub kliknij, żeby wybrać grafikę z dysku. Najlepiej sprawdza się proste logo lub ikona.',
            },
            {
              title: '2. Wybierz rozmiary',
              description: 'Zaznacz, które rozmiary ikon potrzebujesz: favicon.ico, ikony PNG (16x16, 32x32, 180x180, 192x192, 512x512).',
            },
            {
              title: '3. Wygeneruj pliki',
              description: 'Kliknij przycisk generowania. Narzędzie przetworzy obraz lokalnie — nic nie jest wysyłane na serwer.',
            },
            {
              title: '4. Pobierz zestaw',
              description: 'Pobierz wszystkie wygenerowane pliki jednym kliknięciem jako archiwum ZIP.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Nowoczesny zestaw favicon - co generuje to narzędzie?">
          <p className="mb-6">
            Generator tworzy zestaw ikon zgodny z aktualnymi wytycznymi (2024-2025): klasyczny plik <strong>favicon.ico</strong> (32x32) oraz ikony PNG o rozmiarach <strong>16x16</strong>,{' '}
            <strong>32x32</strong>, <strong>180x180</strong>, <strong>192x192</strong> i <strong>512x512</strong> (możesz wybrać, które chcesz wygenerować).
          </p>
          <ul className="mb-6 list-disc pl-5">
            <li>
              <strong>favicon.ico</strong> - klasyczna ikona strony widoczna w kartach przeglądarki,
            </li>
            <li>
              <strong>16x16 i 32x32</strong> - klasyczne favicon PNG (często używane w starszych integracjach i do małych ikon w UI przeglądarki).
            </li>
            <li>
              <strong>180x180</strong> - apple-touch-icon dla iOS.
            </li>
            <li>
              <strong>192x192 i 512x512</strong> - ikony używane w manifestach PWA i na urządzeniach z Androidem oraz w Chrome.
            </li>
          </ul>
          <p className="text-light">Wszystkie pliki generowane są lokalnie w Twojej przeglądarce - nic nie jest wysyłane na serwer.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Gdzie wgrać pliki favicon?"
          description="Wygenerowane pliki wystarczy umieścić w odpowiednim miejscu:"
          grid="two"
          items={[
            {
              title: 'WordPress i inne CMS-y',
              description: (
                <p>
                  Większość motywów ma opcję „Ikona witryny” w ustawieniach. Wgraj tam plik 512x512 — WordPress sam wygeneruje mniejsze rozmiary. Dla pełnej kontroli dodaj pliki ręcznie do katalogu
                  głównego.
                </p>
              ),
            },
            {
              title: 'Własna strona (HTML)',
              description: <p>Umieść pliki w katalogu głównym strony i dodaj odpowiednie tagi link w sekcji head. Generator podpowie, jak powinien wyglądać kod HTML.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz dodatkowej pomocy przy tworzeniu swojej strony?"
        description="Prześlij nam link do strony, nad którą pracujesz, a my podpowiemy, co możesz zrobić, aby Twoja strona generowała więcej klientów"
        btnOne="Umów rozmowę o stronie www"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
