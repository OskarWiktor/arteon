import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
  description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu' },
  openGraph: {
    title: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
    description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
    url: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Generator palety kolorów z obrazu online',
  alternateName: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
  url: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu',
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
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-palette-extractor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator palety kolorów z obrazu"
        description="Dodaj obraz, a narzędzie pokaże użyte na nim kolory i stworzy z nich paletę barw. Skopiuj kod koloru jednym kliknięciem i użyj w dowolnym miejscu."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/generator-palety-kolorow-z-obrazu`, label: 'Generator palety kolorów z obrazu' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <PaletteExtractor />

        <Gap size="xs" />

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
