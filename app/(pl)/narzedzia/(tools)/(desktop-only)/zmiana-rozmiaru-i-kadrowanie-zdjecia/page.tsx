import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund',
  description: 'Darmowe narzędzie do zmiany kadru i rozmiaru zdjęcia. Wybierz gotowy format i przygotuj zdjęcie pod media społecznościowe lub stronę. Bez limitu kreacji.',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia' },
  openGraph: {
    title: 'Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund',
    description: 'Darmowe narzędzie do zmiany kadru i rozmiaru zdjęcia. Wybierz gotowy format i przygotuj zdjęcie pod media społecznościowe lub stronę. Bez limitu kreacji.',
    url: 'https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund',
  alternateName: 'Darmowe narzędzie do zmiany rozmiaru i kadrowania zdjęć online',
  url: 'https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description:
    'Zaawansowane, darmowe narzędzie do zmiany rozmiaru i kadrowania zdjęć online. Pozwala dopasować grafikę do konkretnych wymiarów, proporcji i gotowych formatów pod social media oraz strony WWW - wszystko w przeglądarce, bez wysyłania plików na serwer i bez limitu użycia.',
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

export default function ImageResizerPage() {
  return (
    <>
      <Script id="ld-json-image-resizer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund"
        description="Dopasuj zdjęcie do konkretnych wymiarów, proporcji lub gotowych formatów pod social media i WWW. Wszystko dzieje się w Twojej przeglądarce - plik nie jest nigdzie wysyłany."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`, label: 'Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <ImageResizeTool />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Masz pomysł na stronę lub projekt graficzny?"
        description="Napisz do nas. Powiemy, jak podejść do projektu i co warto zrobić, żeby od razu działał biznesowo."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
