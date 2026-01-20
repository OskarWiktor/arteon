import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Przygotuj zdjęcie pod Instagram, Facebook i stronę',
  description: 'Darmowe narzędzie do zmiany kadru i rozmiaru zdjęcia. Wybierz gotowy format i przygotuj zdjęcie pod media społecznościowe lub stronę. Bez limitu kreacji.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia') },
  openGraph: {
    title: 'Przygotuj zdjęcie pod Instagram, Facebook i stronę',
    description: 'Darmowe narzędzie do zmiany kadru i rozmiaru zdjęcia. Wybierz gotowy format i przygotuj zdjęcie pod media społecznościowe lub stronę. Bez limitu kreacji.',
    url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Przygotuj zdjęcie pod Instagram, Facebook i stronę',
  alternateName: 'Darmowe narzędzie do zmiany rozmiaru i kadrowania zdjęć online',
  url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia'),
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
    url: siteUrl,
  },
};

export default function ImageResizerPage() {
  return (
    <>
      <Script id="ld-json-image-resizer" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Przygotuj zdjęcie pod Instagram, Facebook i stronę"
        description="Dopasuj zdjęcie do konkretnych wymiarów, proporcji lub gotowych formatów pod social media i WWW. Wszystko dzieje się w Twojej przeglądarce - plik nie jest nigdzie wysyłany."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia`, label: 'Przygotuj zdjęcie pod Instagram, Facebook i stronę' }}
        includeJsonLd
      />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <ImageResizeTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z narzędzia?"
          description="Kadrowanie i zmiana rozmiaru to dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj zdjęcie',
              description: 'Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać zdjęcie z dysku.',
            },
            {
              title: '2. Wybierz format',
              description: 'Wybierz gotowy format (Instagram, Facebook, YouTube) lub ustaw własne wymiary.',
            },
            {
              title: '3. Pobierz',
              description: 'Dopasuj kadr, wybierz format pliku (JPG, PNG, WebP) i pobierz gotowe zdjęcie.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

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
