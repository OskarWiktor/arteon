import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Zamień zdjęcia JPG i PNG na lżejszy format WebP',
  description: 'Skorzystaj z darmowego narzędzia i zamień JPG/PNG na WebP. Zmniejsz wagę zdjęć i przyspiesz ładowanie strony. Bez logowania, bez abonamentu i bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu') },
  openGraph: {
    title: 'Zamień zdjęcia JPG i PNG na lżejszy format WebP',
    description: 'Skorzystaj z darmowego narzędzia i zamień JPG/PNG na WebP. Zmniejsz wagę zdjęć i przyspiesz ładowanie strony. Bez logowania, bez abonamentu i bez limitu.',
    url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Zamień zdjęcia JPG i PNG na lżejszy format WebP',
  alternateName: 'Konwerter JPG na WebP i PNG na WebP',
  url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy konwerter JPG/PNG na WebP po polsku. Zmniejsz wagę zdjęć, popraw prędkość ładowania strony i wyniki Core Web Vitals. Konwersja odbywa się w całości w przeglądarce - bez wysyłania plików na serwer, bez logowania i bez limitu.',
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
      <Script id="ld-json-webp-converter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Zamień zdjęcia JPG i PNG na lżejszy format WebP"
        description="Zoptymalizuj grafiki dla szybszej prędkości Twojej witryny. Dodaj kilka plików, wybierz poziom jakości i pobierz zdjęcia w formacie WebP. Konwersja odbywa się w całości w Twojej przeglądarce - pliki nie są nigdzie wysyłane."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/jpg-png-na-webp-bez-limitu`, label: 'Zamień zdjęcia JPG i PNG na lżejszy format WebP' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <JpgPngToWebp />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z konwertera?"
          description="Konwersja zdjęć na WebP to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj pliki',
              description: 'Przeciągnij zdjęcia JPG lub PNG na pole do dodania plików albo kliknij, żeby wybrać pliki z dysku.',
            },
            {
              title: '2. Ustaw jakość',
              description: 'Wybierz poziom jakości (domyślnie 80%) — niższa wartość = mniejszy plik.',
            },
            {
              title: '3. Pobierz WebP',
              description: 'Kliknij „Konwertuj" i pobierz pliki pojedynczo lub jako archiwum ZIP.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji swojej strony?"
        description="Mamy sprawdzone sposoby na wyniki +90/100 w PageSpeed. Prześlij link do swojej strony a my przygotujemy dla Ciebie ofertę jej optymalizacji"
        btnOne="Zamów pełną optymalizację"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
