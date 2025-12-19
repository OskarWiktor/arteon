import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
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

        <SectionInfo title="Do czego służy narzędzie do kadrowania i zmiany rozmiaru?">
          <p className="text-mid">
            Kadrowanie pozwala wyciąć wybrany fragment zdjęcia i dopasować go do konkretnych wymiarów. Zmiana rozmiaru z kolei zmniejsza lub powiększa całą grafikę. Dzięki temu możesz przygotować
            jedno zdjęcie pod różne formaty — post na Instagram, baner na stronę czy miniaturkę na YouTube.
          </p>
          <p className="text-mid mt-3">
            <strong>Gdzie to się przydaje?</strong> Przy tworzeniu grafik na social media, przygotowywaniu zdjęć na stronę WWW, dopasowywaniu obrazów do szablonów i wszędzie tam, gdzie obraz musi mieć
            konkretne wymiary.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ImageResizeTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z narzędzia?"
          description="Kadrowanie i zmiana rozmiaru zdjęcia to kilka prostych kroków:"
          grid="four"
          items={[
            {
              title: '1. Dodaj zdjęcie',
              description: 'Przeciągnij plik na obszar uploadu lub kliknij, żeby wybrać obraz z dysku.',
            },
            {
              title: '2. Wybierz proporcje',
              description: 'Wybierz gotowy format (np. Instagram, Facebook, YouTube) lub ustaw własne wymiary.',
            },
            {
              title: '3. Dopasuj kadr',
              description: 'Przesuń i przybliż obraz, żeby wybrać najlepszy fragment. Podgląd pokazuje dokładnie to, co zostanie wyeksportowane.',
            },
            {
              title: '4. Pobierz',
              description: 'Wybierz format pliku (JPG, PNG lub WebP) i pobierz gotowe zdjęcie.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Popularne zastosowania"
          description="Narzędzie przyda się w wielu sytuacjach:"
          grid="two"
          items={[
            {
              title: 'Grafiki na social media',
              description: (
                <p>
                  Każda platforma ma swoje wymagania: Instagram post (1:1), Instagram story (9:16), Facebook cover (820×312), LinkedIn banner. Zamiast tworzyć osobne pliki, przytnij jedno zdjęcie do
                  różnych formatów.
                </p>
              ),
            },
            {
              title: 'Zdjęcia na stronę WWW',
              description: (
                <p>Dopasuj zdjęcia produktów, banerów i miniatur do wymiarów wymaganych przez Twój sklep lub CMS. Mniejsze, dopasowane pliki to szybsze ładowanie i lepsza jakość wyświetlania.</p>
              ),
            },
          ]}
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
