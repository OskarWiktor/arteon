import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Ekstraktor kolorów z obrazu - pobierz paletę ze zdjęcia',
  description: 'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory i stworzy paletę z kodami HEX. Darmowe narzędzie bez logowania i bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu') },
  openGraph: {
    title: 'Ekstraktor kolorów z obrazu - pobierz paletę ze zdjęcia',
    description: 'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory i stworzy paletę z kodami HEX. Darmowe narzędzie bez logowania i bez limitu.',
    url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Ekstraktor kolorów z obrazu',
  alternateName: 'Pobierz paletę kolorów ze zdjęcia lub logo',
  url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory i stworzy paletę z kodami HEX. Darmowe narzędzie bez logowania i bez limitu.',
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
      <Script id="ld-json-palette-extractor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Wyciągnij dominujące kolory z obrazu"
        description="Wgraj zdjęcie, logo lub grafikę, a narzędzie automatycznie wyciągnie z niego dominujące kolory. Skopiuj kody HEX jednym kliknięciem."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/ekstraktor-kolorow-z-obrazu`, label: 'Ekstraktor kolorów z obrazu' }} includeJsonLd />

      <Wrapper>
        <AdSense
          adClient="ca-pub-7845947936813012"
          adSlot="7551147298"
          adFormat="fixed"
          width={728}
          height={90}
          className="my-3"
        />

        <PaletteExtractor />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z ekstraktora?"
          description="Wyciągnięcie kolorów ze zdjęcia to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij zdjęcie na pole do dodania pliku lub kliknij, żeby wybrać plik z dysku (PNG, JPG, SVG).',
            },
            {
              title: '2. Poczekaj na analizę',
              description: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie z niego dominujące kolory.',
            },
            {
              title: '3. Skopiuj kolory',
              description: 'Kliknij ikonę kopiowania przy wybranym kolorze, a kod HEX trafi do schowka.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnego systemu dla swojej marki?"
        description="Zaprojektujemy dla Ciebie spójny system identyfikacji wizualnej, który wyróżni Cię na tle konkurencji."
        btnOne="Sprawdź ofertę identyfikacji"
        btnOneLink="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
        btnTwo="Sprawdź wszystkie usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
