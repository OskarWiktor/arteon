import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import type { Metadata } from 'next';
import EmailSignatureGenerator from '@/components/sections/tools/EmailSignatureGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

export const metadata: Metadata = {
  title: 'Darmowy generator stopki mailowej HTML - bez limitu',
  description: 'Stwórz profesjonalną stopkę mailową HTML w kilka minut. Skorzystaj z naszego darmowego generator podpisu email, stwórz własny podpis i skopiuj gotowy kod',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-stopki-mailowej' },
  openGraph: {
    title: 'Darmowy generator stopki mailowej HTML - bez limitu',
    description: 'Stwórz profesjonalną stopkę mailową HTML w kilka minut. Skorzystaj z naszego darmowego generator podpisu email, stwórz własny podpis i skopiuj gotowy kod',
    url: '/narzedzia/darmowy-generator-stopki-mailowej',
    type: 'website',
    images: [
      {
        url: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy generator stopki mailowej HTML bez limitu',
  alternateName: 'Generator podpisu e-mail w HTML',
  url: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-stopki-mailowej',
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
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-email-signature-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Darmowy generator stopki mailowej HTML"
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
        <Gap size="sm" />

        <EmailSignatureGenerator />

        <Gap size="sm" />

        <SectionInfo title="Profesjonalna stopka mailowa bez grafika i bez kodowania" description="Generator stopki mailowej, który pomoże Ci zbudować profesjonalny wizerunek">
          <p className="mt-4">
            Uzupełnij dane: imię i nazwisko, stanowisko, nazwę firmy, dane kontaktowe, link do kalendarza lub oferty oraz profile w social media. Narzędzie od razu buduje z tego przejrzystą stopkę
            HTML, która dobrze wygląda w Gmailu, Outlooku i większości popularnych klientów pocztowych.
          </p>
          <p className="mt-4">
            Możesz dopasować kolory, czcionkę, dodać przycisk CTA i klauzulę prawną. Na końcu jednym kliknięciem kopiujesz gotowy kod i wklejasz go w ustawieniach swojej skrzynki - bez logowania, bez
            abonamentu i bez limitu użycia.
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Chcesz w pełni profesjonalną identyfikację mailową dla Twojej firmy?"
        description="Wykonamy dla Ciebie profesjonalną identyfikację mailową - dopasowaną do Twojej marki, spójną z Twoją stroną i social mediami."
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
