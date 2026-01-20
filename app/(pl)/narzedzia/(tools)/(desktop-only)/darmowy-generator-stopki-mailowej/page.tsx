import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import EmailSignatureGenerator from '@/components/sections/tools/EmailSignatureGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Stwórz profesjonalną stopkę mailową HTML',
  description: 'Stwórz profesjonalną stopkę mailową HTML w kilka minut. Skorzystaj z naszego darmowego generator podpisu email, stwórz własny podpis i skopiuj gotowy kod',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej') },
  openGraph: {
    title: 'Stwórz profesjonalną stopkę mailową HTML',
    description: 'Stwórz profesjonalną stopkę mailową HTML w kilka minut. Skorzystaj z naszego darmowego generator podpisu email, stwórz własny podpis i skopiuj gotowy kod',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Stwórz profesjonalną stopkę mailowej HTML',
  alternateName: 'Generator podpisu e-mail w HTML',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy generator stopki mailowej HTML po polsku. Dodaj dane kontaktowe, link CTA i profile social mediów, a następnie skopiuj gotowy kod podpisu do Gmaila, Outlooka i innych klientów pocztowych.',
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
      <Script id="ld-json-email-signature-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Stwórz profesjonalną stopkę mailową HTML"
        description="Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila, Outlooka i innych klientów pocztowych"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/darmowy-generator-stopki-mailowej`, label: 'Darmowy generator stopki mailowej HTML' }}
        includeJsonLd
      />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <EmailSignatureGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Stworzenie profesjonalnej stopki to dosłownie kilka minut:"
          grid="three"
          items={[
            {
              title: '1. Wpisz dane',
              description: 'Uzupełnij imię, nazwisko, stanowisko, firmę i dane kontaktowe.',
            },
            {
              title: '2. Dostosuj wygląd',
              description: 'Wybierz kolory, dodaj zdjęcie lub logo, skonfiguruj linki do social mediów.',
            },
            {
              title: '3. Skopiuj kod',
              description: 'Kliknij „Kopiuj HTML" i wklej stopkę w ustawieniach Gmail, Outlook lub innego klienta.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-stopki-mailowej/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Chcesz podnieść profesjonalność swojej marki?"
        description="Zajmujemy się stronami, projektami graficznymi, wraz ze składem do druku i marketingiem dla małych i średnich firm. Sprawdź nasze usługi lub napisz do nas - z chęcią pomożemy"
        btnOne="Skontaktuj się"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
