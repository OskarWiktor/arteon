import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Generator palet kolorów online - system barw z jednego koloru',
  description: 'Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/generator-palet-kolorow-online' },
  openGraph: {
    title: 'Generator palet kolorów online - system barw z jednego koloru',
    description: 'Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat',
    url: 'https://www.arteonagency.pl/narzedzia/generator-palet-kolorow-online',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Generator palet kolorów online - system barw z jednego koloru',
  alternateName: 'Generator schematów barw HEX i HSL dla brandingu i UI',
  url: 'https://www.arteonagency.pl/narzedzia/generator-palet-kolorow-online',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat',
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
      <Script id="ld-json-color-palette-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator palet kolorów online - system barw z jednego koloru"
        description="Podaj kolor bazowy, a narzędzie wygeneruje kompletne palety: monochromatyczną, analogiczną, komplementarną, triadyczną, split-complementary, system akcentów UI, paletę pastelową, ciemną i neutralną. Skopiuj HEX lub HSL i od razu użyj w brandingu, UI i projektach WWW."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/generator-palet-kolorow-online`, label: 'Generator palet kolorów online - system barw z jednego koloru' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <ColorPaletteGenerator />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji wizualnej dla swojej marki?"
        description="Projektujemy logo, system kolorów i materiały firmowe tak, aby Twoja marka wyglądała profesjonalnie i budowała zaufanie."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
