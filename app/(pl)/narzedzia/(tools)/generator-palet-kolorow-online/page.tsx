import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Wygeneruj paletę kolorów z jednego koloru',
  description: 'Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online') },
  openGraph: {
    title: 'Wygeneruj paletę kolorów z jednego koloru',
    description: 'Wpisz jeden kolor i wygeneruj kompletne palety barw dla swojej identyfikacji wizualnej. Darmowe narzędzie bez logowania, limitu, reklam i opłat',
    url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Wygeneruj paletę kolorów z jednego koloru',
  alternateName: 'Generator schematów barw HEX i HSL dla brandingu i UI',
  url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online'),
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
    url: siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-color-palette-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Wygeneruj paletę kolorów z jednego koloru"
        description="Podaj kolor bazowy, a narzędzie wygeneruje kompletne palety: monochromatyczną, analogiczną, komplementarną, triadyczną, split-complementary, system akcentów UI, paletę pastelową, ciemną i neutralną. Skopiuj HEX lub HSL i od razu użyj w brandingu, UI i projektach WWW."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/generator-palet-kolorow-online`, label: 'Wygeneruj paletę kolorów z jednego koloru' }}
        includeJsonLd
      />

      <Wrapper>
        <AdSense
          adClient="ca-pub-7845947936813012"
          adSlot="7551147298"
          adFormat="fixed"
          width={728}
          height={90}
          className="my-3"
        />

        <ColorPaletteGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Wygenerowanie palet kolorów to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz kolor bazowy',
              description: 'Wpisz kod HEX w pole tekstowe lub kliknij kolorowy kwadrat, aby otworzyć próbnik kolorów.',
            },
            {
              title: '2. Wygeneruj palety',
              description: 'Kliknij „Zaktualizuj kolor" — narzędzie automatycznie stworzy 9 różnych palet.',
            },
            {
              title: '3. Skopiuj kolory',
              description: 'Kliknij „Kopiuj" przy wybranym kolorze, a kod HEX trafi do schowka.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/generator-palet-kolorow-online/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

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
