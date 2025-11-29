import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import SectionInfo from '@/components/ui/sections/SectionInfo';

export const metadata: Metadata = {
  title: 'Darmowy generator favicon online - favicon.ico dla Twojej strony',
  description: 'Skorzystaj z darmowego narzędzia i stwórz favicon.ico oraz zestaw ikon PNG w różnych rozmiarach na swoją stronę. Dodaj obraz i pobierz gotowe pliki.',
  alternates: { canonical: '/narzedzia/darmowy-generator-favicon-ico' },
  openGraph: {
    title: 'Darmowy generator favicon online - favicon.ico dla Twojej strony',
    description: 'Skorzystaj z darmowego narzędzia i stwórz favicon.ico oraz zestaw ikon PNG w różnych rozmiarach na swoją stronę. Dodaj obraz i pobierz gotowe pliki.',
    url: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-favicon-ico',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy generator favicon online',
  alternateName: 'Generator favicon.ico i ikon PNG',
  url: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-favicon-ico',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Darmowy generator favicon online po polsku. Twórz favicon.ico oraz ikony PNG 180x180, 192x192 i 512x512 bez limitów i bez wysyłania plików na serwer.',
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
      <Script id="ld-json-favicon-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator favicon online"
        description="Stwórz favicon.ico oraz zestaw ikon PNG dla swojej strony. Dodaj obraz, wybierz rozmiary i pobierz gotowe pliki."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Wrapper>
        <Gap size="sm" />

        <FaviconGenerator />

        <Gap size="xs" />

        <SectionInfo title="Nowoczesny zestaw favicon - co generuje to narzędzie?">
          <p className="mb-6">
            Generator tworzy zestaw ikon zgodny z aktualnymi wytycznymi (2024-2025): klasyczny plik <strong>favicon.ico</strong> (32x32) oraz ikony PNG o rozmiarach <strong>180x180</strong>,{' '}
            <strong>192x192</strong> i <strong>512x512</strong>. Taki pakiet wystarcza dla kart przeglądarki, ekranów domowych i podstawowych wymagań Lighthouse oraz PWA w Chrome.
          </p>
          <ul className="mb-6 list-disc pl-5">
            <li>
              <strong>favicon.ico</strong> - klasyczna ikona strony widoczna w kartach przeglądarki,
            </li>
            <li>
              <strong>apple-touch-icon 180x180</strong> - ikona dla urządzeń z iOS (Dodaj do ekranu początkowego),
            </li>
            <li>
              <strong>192x192 i 512x512</strong> - ikony używane w manifestach PWA i na urządzeniach z Androidem oraz w Chrome.
            </li>
          </ul>
          <p className="text-[#5e5e5e]">Wszystkie pliki generowane są lokalnie w Twojej przeglądarce - nic nie jest wysyłane na serwer.</p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionInfo
          title="Potrzebujesz dodatkowej pomocy przy tworzeniu swojej strony?"
          description="Prześlij nam link do strony, nad którą pracujesz, a my podpowiemy, co możesz zrobić, aby Twoja strona generowała więcej klientów"
          btnOne="Umów rozmowę o stronie www"
          btnOneLink="/kontakt"
          btnTwo="Sprawdź nasze usługi"
          btnTwoLink="/uslugi"
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
