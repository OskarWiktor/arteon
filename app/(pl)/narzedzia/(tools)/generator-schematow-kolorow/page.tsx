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
  title: 'Schematy kolorów - palety monochromatyczne, komplementarne i więcej',
  description: 'Wpisz jeden kolor HEX i wygeneruj 9 schematów kolorów: monochromatyczny, komplementarny, triadyczny, pastelowy i inne. Darmowe narzędzie bez logowania.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-schematow-kolorow') },
  openGraph: {
    title: 'Schematy kolorów - palety monochromatyczne, komplementarne i więcej',
    description: 'Wpisz jeden kolor HEX i wygeneruj 9 schematów kolorów: monochromatyczny, komplementarny, triadyczny, pastelowy i inne. Darmowe narzędzie bez logowania.',
    url: toAbsoluteUrl('/narzedzia/generator-schematow-kolorow'),
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
  name: 'Generator schematów kolorów',
  alternateName: 'Schematy kolorów - palety monochromatyczne, komplementarne i więcej',
  url: toAbsoluteUrl('/narzedzia/generator-schematow-kolorow'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Wpisz jeden kolor HEX i wygeneruj 9 schematów kolorów: monochromatyczny, komplementarny, triadyczny, pastelowy i inne. Darmowe narzędzie bez logowania.',
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
        title="Wygeneruj schematy kolorów z jednego koloru bazowego"
        description="Podaj kolor bazowy, a narzędzie wygeneruje 9 schematów kolorów: monochromatyczny, analogiczny, komplementarny, triadyczny, split-complementary, akcenty UI, pastelowy, ciemny i neutralny. Skopiuj kody wygenerowanych kolorów jednym kliknięciem."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/generator-schematow-kolorow`, label: 'Generator schematów kolorów' }}
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
          title="Jak korzystać z generatora schematów?"
          description="Wygenerowanie schematów kolorów to dosłownie kilka sekund:"
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
          btnOneLink="/narzedzia/generator-schematow-kolorow/instrukcja"
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
