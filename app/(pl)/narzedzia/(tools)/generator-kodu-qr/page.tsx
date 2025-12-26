import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import SectionSteps from '@/components/ui/sections/SectionSteps';

export const metadata: Metadata = {
  title: 'Darmowy generator kodu QR online - Arteon',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-kodu-qr') },
  openGraph: {
    title: 'Darmowy generator kodu QR online - Arteon',
    description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
    url: toAbsoluteUrl('/narzedzia/generator-kodu-qr'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp') }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy generator kodu QR online',
  alternateName: 'Generator kodu QR dla firm i materiałów drukowanych',
  url: toAbsoluteUrl('/narzedzia/generator-kodu-qr'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
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
      <Script id="ld-json-qr-generator" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator kodu QR online"
        description="Stwórz kod QR w kilka sekund. Wpisz adres strony, dane kontaktowe lub treść e-maila, a narzędzie wygeneruje gotowy kod do pobrania w PNG lub SVG."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/generator-kodu-qr', label: 'Generator kodu QR' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <QrCodeGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Stworzenie kodu QR to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz typ',
              description: 'Wybierz typ danych: URL, tekst, wizytówka (vCard), e-mail lub telefon.',
            },
            {
              title: '2. Wpisz dane',
              description: 'Wypełnij odpowiednie pola — np. adres strony, dane kontaktowe.',
            },
            {
              title: '3. Pobierz kod',
              description: 'Dostosuj wygląd (kolory, rozmiar) i pobierz jako PNG lub SVG.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/generator-kodu-qr/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych materiałów drukowanych?"
        description="Zaprojektujemy wizytówki, ulotki, katalogi i inne materiały z kodem QR, które wyróżnią Twoją firmę."
        btnOne="Sprawdź projekty graficzne"
        btnOneLink="/uslugi/projekty-graficzne"
        btnTwo="Napisz do nas"
        btnTwoLink="/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
