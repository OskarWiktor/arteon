import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Stwórz favicon i ikony dla swojej strony',
  description: 'Skorzystaj z darmowego narzędzia i stwórz favicon.ico oraz zestaw ikon PNG w różnych rozmiarach na swoją stronę. Dodaj obraz i pobierz gotowe pliki.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico') },
  openGraph: {
    title: 'Stwórz favicon i ikony dla swojej strony',
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
  '@type': 'SoftwareApplication',
  name: 'Stwórz favicon i ikony dla swojej strony',
  alternateName: 'Generator favicon.ico i ikon PNG',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'IconGenerator',
  operatingSystem: 'Any',
  description: 'Darmowy generator favicon online po polsku. Twórz favicon.ico oraz ikony PNG 16x16, 32x32, 180x180, 192x192 i 512x512 bez limitów i bez wysyłania plików na serwer.',
  featureList: [
    'Generowanie favicon.ico (16x16, 32x32, 48x48 w jednym pliku)',
    'Generowanie ikon PNG 16x16 i 32x32',
    'Generowanie apple-touch-icon 180x180',
    'Generowanie ikon PWA 192x192 i 512x512',
    'Obsługa obrazów PNG, JPG i SVG jako źródło',
    'Konfiguracja koloru tła',
    'Generowanie pliku manifest.json dla PWA',
    'Pobieranie wszystkich plików jako ZIP',
    'Pobieranie pojedynczych plików',
    'Zgodność z wymaganiami Lighthouse',
    'Przetwarzanie w przeglądarce (pliki nie są wysyłane na serwer)',
    'Bez logowania i rejestracji',
  ],
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
        title="Stwórz favicon i ikony dla swojej strony"
        description="Stwórz favicon.ico oraz zestaw ikon PNG dla swojej strony. Dodaj obraz, wybierz rozmiary i pobierz gotowe pliki."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/darmowy-generator-favicon-ico`, label: 'Stwórz favicon i ikony dla swojej strony' }} includeJsonLd />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <FaviconGenerator />

        <Gap size="xs" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Stworzenie favicon to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać grafikę z dysku (PNG, JPG, SVG).',
            },
            {
              title: '2. Wybierz rozmiary',
              description: 'Zaznacz potrzebne rozmiary ikon i skonfiguruj opcje (tło, manifest).',
            },
            {
              title: '3. Pobierz pliki',
              description: 'Kliknij „Generuj favicon" i pobierz pliki jako archiwum ZIP lub pojedynczo.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-favicon-ico/instrukcja"
          btnOneVariant="accent"
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
