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

export const metadata: Metadata = {
  title: 'Wyciągnij kolory ze zdjęcia lub logo',
  description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-palety-kolorow-z-obrazu') },
  openGraph: {
    title: 'Wyciągnij kolory ze zdjęcia lub logo',
    description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
    url: toAbsoluteUrl('/narzedzia/generator-palety-kolorow-z-obrazu'),
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
  name: 'Wyciągnij kolory ze zdjęcia lub logo',
  alternateName: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
  url: toAbsoluteUrl('/narzedzia/generator-palety-kolorow-z-obrazu'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
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
        title="Wyciągnij kolory ze zdjęcia lub logo"
        description="Dodaj obraz, a narzędzie pokaże użyte na nim kolory i stworzy z nich paletę barw. Skopiuj kod koloru jednym kliknięciem i użyj w dowolnym miejscu."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/generator-palet-kolorow-online`, label: 'Wyciągnij kolory ze zdjęcia lub logo' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <PaletteExtractor />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
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
          btnOneLink="/narzedzia/generator-palety-kolorow-z-obrazu/instrukcja"
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
