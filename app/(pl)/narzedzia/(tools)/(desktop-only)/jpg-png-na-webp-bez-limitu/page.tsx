import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Darmowy konwerter JPG/PNG na WebP online bez limitu',
  description: 'Skorzystaj z darmowego narzędzia i zamień JPG/PNG na WebP. Zmniejsz wagę zdjęć i przyspiesz ładowanie strony. Bez logowania, bez abonamentu i bez limitu.',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/jpg-png-na-webp-bez-limitu' },
  openGraph: {
    title: 'Darmowy konwerter JPG/PNG na WebP online bez limitu',
    description: 'Skorzystaj z darmowego narzędzia i zamień JPG/PNG na WebP. Zmniejsz wagę zdjęć i przyspiesz ładowanie strony. Bez logowania, bez abonamentu i bez limitu.',
    url: 'https://www.arteonagency.pl/narzedzia/jpg-png-na-webp-bez-limitu',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy konwerter JPG/PNG na WebP online bez limitu',
  alternateName: 'Konwerter JPG na WebP i PNG na WebP',
  url: 'https://www.arteonagency.pl/narzedzia/jpg-png-na-webp-bez-limitu',
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
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-webp-converter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Konwerter JPG/PNG na WebP"
        description="Zoptymalizuj grafiki dla szybszej prędkości Twojej witryny. Dodaj kilka plików, wybierz poziom jakości i pobierz zdjęcia w formacie WebP. Konwersja odbywa się w całości w Twojej przeglądarce - pliki nie są nigdzie wysyłane."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/jpg-png-na-webp-bez-limitu`, label: 'Konwerter JPG/PNG na WebP' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <JpgPngToWebp />

        <Gap size="xs" />

        <SectionInfo title="Dlaczego WebP jest ważny dla szybkości strony i SEO?">
          <p className="mb-6">
            Format WebP pozwala znacząco zmniejszyć wagę grafik bez widocznej utraty jakości. Lżejsze obrazy to szybsze ładowanie strony, lepsze wyniki w Core Web Vitals i większa szansa, że
            użytkownik zostanie na stronie.
          </p>
          <ul className="ml-6 list-disc">
            <li>mniejsza waga zdjęć,</li>
            <li>szybsze ładowanie strony,</li>
            <li>pośrednie wsparcie dla lepszych pozycji w Google poprzez lepsze UX,</li>
            <li>niższe obciążenie serwera.</li>
          </ul>
          <p className="text-light">Jeśli chcesz, żeby Twoja strona ładowała się tak szybko, jak pliki po konwersji, możesz rozważyć pełną optymalizację WWW (obrazy, kod, hosting, SEO techniczne).</p>
        </SectionInfo>
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
