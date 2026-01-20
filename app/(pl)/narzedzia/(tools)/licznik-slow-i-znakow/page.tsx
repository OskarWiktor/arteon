import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Licznik słów i znaków online — sprawdź długość tekstu',
  description: 'Darmowy licznik słów i znaków z oceną długości tekstu. Sprawdź, czy Twój tekst ma odpowiednią długość dla strony głównej, opisu usługi, artykułu blogowego czy opisu produktu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow') },
  openGraph: {
    title: 'Licznik słów i znaków online — sprawdź długość tekstu',
    description: 'Darmowy licznik słów i znaków z oceną długości tekstu. Sprawdź, czy Twój tekst ma odpowiednią długość dla strony głównej, opisu usługi, artykułu blogowego czy opisu produktu.',
    url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Licznik słów i znaków online',
  alternateName: 'Licznik słów z oceną długości tekstu',
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
  applicationCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik słów i znaków po polsku. Sprawdza liczbę słów, znaków, akapitów i szacowany czas czytania. Ocenia długość tekstu dla różnych typów stron: opis produktu, strona usługi, strona główna, landing page, artykuł blogowy, poradnik.',
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
      <Script id="ld-json-word-count-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Licznik słów i znaków z oceną długości"
        description="Wklej tekst, wybierz typ strony, a narzędzie pokaże liczbę słów, znaków, akapitów i oceni, czy długość jest odpowiednia dla danego rodzaju treści"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/licznik-slow-i-znakow', label: 'Licznik słów i znaków' }} includeJsonLd />

      <Wrapper>
        <AdSense
          adClient="ca-pub-7845947936813012"
          adSlot="7551147298"
          adFormat="fixed"
          width={728}
          height={90}
          className="my-3"
        />

        <WordCountTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika?"
          description="Sprawdzenie długości tekstu zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz typ strony',
              description: 'Wybierz, dla jakiego typu strony piszesz tekst. Każdy typ ma inne zalecenia dotyczące długości.',
            },
            {
              title: '2. Wklej tekst',
              description: 'Wklej lub wpisz tekst. Narzędzie od razu pokaże liczbę słów, znaków, akapitów i czas czytania.',
            },
            {
              title: '3. Sprawdź ocenę',
              description: 'Zobacz kolorowy status (za krótki, dobra długość, za długi) i wskazówki, co zrobić dalej.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/licznik-slow-i-znakow/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych treści na stronę?"
        description="Tworzymy teksty, które pozycjonują się w Google i przekonują do działania. Opisy usług, artykuły blogowe, treści na strony"
        btnOne="Umów rozmowę o treściach"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę tworzenia treści"
        btnTwoLink="/uslugi/tworzenie-tresci"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
