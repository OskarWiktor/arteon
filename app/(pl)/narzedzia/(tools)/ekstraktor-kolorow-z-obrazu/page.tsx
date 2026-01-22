import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import AdSense from '@/components/ui/AdSense';
import { RiShieldCheckLine, RiPaletteLine, RiFileImageLine, RiGlobalLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Ekstraktor kolorów z obrazu online | Pobierz paletę ze zdjęcia',
  description:
    'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie lub logo i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Bez rejestracji, bez wysyłania plików na serwer.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu') },
  openGraph: {
    title: 'Ekstraktor kolorów z obrazu online | Pobierz paletę ze zdjęcia',
    description:
      'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie lub logo i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Bez rejestracji, bez wysyłania plików na serwer.',
    url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ekstraktor kolorów z obrazu online — darmowy generator palety',
  alternateName: 'Pobierz paletę kolorów ze zdjęcia lub logo',
  url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorExtractor',
  operatingSystem: 'Any',
  description:
    'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie, logo lub grafikę i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Przetwarzanie odbywa się w przeglądarce — pliki nie są wysyłane na serwer.',
  featureList: [
    'Automatyczna ekstrakcja dominujących kolorów',
    'Analiza zdjęć, logo i grafik',
    'Generowanie palety kolorów',
    'Kody kolorów w formacie HEX',
    'Kopiowanie koloru jednym kliknięciem',
    'Obsługa plików PNG, JPG i SVG',
    'Wybór liczby kolorów w palecie',
    'Przetwarzanie w przeglądarce (pliki nie są wysyłane na serwer)',
    'Bez logowania i rejestracji',
    'Bez limitu użycia',
  ],
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

const faqItems = [
  {
    question: 'Do czego służy ekstraktor kolorów z obrazu?',
    answer:
      'Ekstraktor analizuje wgrane zdjęcie i wyciąga z niego dominujące kolory. Dzięki temu możesz szybko stworzyć paletę barw na podstawie inspirującego zdjęcia, logo lub grafiki. Przydaje się przy projektowaniu identyfikacji wizualnej, tworzeniu spójnych grafik i dobieraniu kolorów do strony WWW.',
  },
  {
    question: 'Czy moje zdjęcia są wysyłane na serwer?',
    answer:
      'Nie. Cała analiza odbywa się lokalnie w przeglądarce — obraz nie opuszcza komputera i nie jest nigdzie wysyłany ani przechowywany. Po zamknięciu strony dane znikają.',
  },
  {
    question: 'Ile kolorów wyciągnie narzędzie z mojego obrazu?',
    answer:
      'Narzędzie wyciąga do 12 dominujących kolorów. Dokładna liczba zależy od tego, ile wyraźnie różnych kolorów występuje na obrazie. Jeśli obraz jest bardzo jednorodny (np. logo w dwóch kolorach), wynik będzie zawierał mniej pozycji.',
  },
  {
    question: 'Jakie formaty obrazów obsługuje narzędzie?',
    answer: 'Narzędzie obsługuje trzy popularne formaty: PNG, JPG (JPEG) oraz SVG. Możesz wgrać zdjęcie produktu, logo firmy, grafikę z mediów społecznościowych lub dowolny inny obraz w jednym z tych formatów.',
  },
  {
    question: 'Dlaczego narzędzie wyciągnęło inne kolory niż się spodziewałem?',
    answer:
      'Narzędzie analizuje kolory, które faktycznie dominują na obrazie pod względem liczby pikseli. Jeśli tło zajmuje dużą część obrazu, jego kolor może pojawić się jako dominujący. Podobnie z cieniami lub gradientami. Dla lepszych rezultatów użyj obrazu z przezroczystym tłem (PNG) lub przytnij obraz do interesującego fragmentu.',
  },
  {
    question: 'W jakim formacie otrzymam kody kolorów?',
    answer: 'Każdy kolor jest wyświetlany z kodem HEX (np. #2C5F2D) oraz RGB (np. rgb(44, 95, 45)). Możesz skopiować wybrany format jednym kliknięciem i wkleić go bezpośrednio do Figmy, Photoshopa, CSS lub innego narzędzia.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-palette-extractor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Ekstraktor kolorów z obrazu online"
        description="Wgraj zdjęcie, logo lub grafikę i wyciągnij do 12 dominujących kolorów z kodami HEX i RGB. Bez rejestracji, bez wysyłania plików — analiza odbywa się w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/ekstraktor-kolorow-z-obrazu`, label: 'Ekstraktor kolorów z obrazu' }} includeJsonLd />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <PaletteExtractor />

        <Gap variant="line" />

        <SectionInfo title="Do czego służy ekstraktor kolorów?">
          <p className="mb-4">
            Ekstraktor kolorów analizuje wgrane zdjęcie i wyciąga z niego dominujące barwy. Dzięki temu możesz szybko stworzyć paletę kolorów na podstawie inspirującego zdjęcia, logo konkurencji czy
            zdjęcia produktu.
          </p>
          <p className="mb-4">
            Narzędzie przydaje się przy projektowaniu identyfikacji wizualnej, tworzeniu spójnych grafik do mediów społecznościowych i dobieraniu kolorów do strony internetowej. Zamiast ręcznie
            próbkować kolory w programie graficznym, wgrywasz obraz i otrzymujesz gotową paletę z kodami HEX i RGB.
          </p>
          <p>
            Cała analiza odbywa się lokalnie w przeglądarce — obraz nie jest wysyłany na żaden serwer. Po zamknięciu strony dane znikają, więc prywatność jest zachowana.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Jak wyciągnąć kolory w 3 krokach"
          description="Wyciągnięcie kolorów ze zdjęcia zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij zdjęcie na pole albo kliknij, żeby wybrać plik z dysku. Obsługiwane formaty: PNG, JPG, SVG.',
            },
            {
              title: '2. Poczekaj na analizę',
              description: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie do 12 dominujących kolorów.',
            },
            {
              title: '3. Skopiuj kolory',
              description: 'Kliknij przycisk kopiowania przy wybranym kolorze, a kod HEX lub RGB trafi do schowka.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Jakie obrazy dają najlepsze wyniki?">
          <p className="mb-4">Nie każdy obraz da równie czytelną paletę kolorów. Oto kilka wskazówek:</p>
          <ul className="mb-4 ml-6 list-disc space-y-2">
            <li>
              <strong>Logo i grafiki wektorowe</strong> — obrazy z ograniczoną liczbą kolorów dają najbardziej precyzyjne wyniki, bo kolory są wyraźnie oddzielone
            </li>
            <li>
              <strong>Zdjęcia z wyraźnym motywem</strong> — zdjęcia produktów, wnętrz czy krajobrazów również działają dobrze, ale wynik będzie zawierał więcej odcieni
            </li>
            <li>
              <strong>Przezroczyste tło (PNG)</strong> — jeśli chcesz wyciągnąć kolory tylko z obiektu (np. logo), użyj obrazu z przezroczystym tłem — przezroczyste piksele są ignorowane
            </li>
            <li>
              <strong>Unikaj dużego jednokolorowego tła</strong> — jeśli tło zajmuje większość obrazu, jego kolor będzie dominował w wynikach
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dlaczego warto używać tego ekstraktora?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Pełna prywatność',
              description: 'Obraz nie opuszcza komputera. Analiza odbywa się w przeglądarce — nic nie jest wysyłane na serwer. Po zamknięciu strony dane są usuwane.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Do 12 kolorów',
              description: 'Narzędzie wyciąga do 12 dominujących kolorów — więcej niż większość konkurencyjnych rozwiązań, które ograniczają się do 5-6.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Obsługa PNG, JPG i SVG',
              description: 'Możesz wgrać zdjęcie, logo lub grafikę wektorową. Przezroczyste tło (PNG) jest automatycznie ignorowane.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Kody HEX i RGB',
              description: 'Każdy kolor jest wyświetlany z kodem HEX i RGB. Skopiuj jednym kliknięciem i wklej do Figmy, Photoshopa lub CSS.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Gdzie wykorzystać wyciągnięte kolory?">
          <p className="mb-4">Paleta kolorów z obrazu przyda się w wielu sytuacjach:</p>
          <ul className="mb-4 ml-6 list-disc space-y-2">
            <li>
              <strong>Inspiracja do brandingu</strong> — wgraj zdjęcie, które oddaje klimat marki (krajobraz, wnętrze, produkt) i wyciągnij kolory jako bazę do identyfikacji wizualnej
            </li>
            <li>
              <strong>Spójne grafiki do mediów społecznościowych</strong> — masz zdjęcie produktu i chcesz dobrać do niego tło lub akcenty? Wyciągnij kolory ze zdjęcia i użyj ich w grafice
            </li>
            <li>
              <strong>Projektowanie strony internetowej</strong> — wyciągnij kolory z logo klienta i użyj ich jako palety dla całej strony
            </li>
            <li>
              <strong>Analiza konkurencji</strong> — wgraj logo lub grafikę konkurencji, żeby poznać ich paletę kolorów
            </li>
          </ul>
          <p>
            Jeśli potrzebujesz stworzyć harmonijną paletę od zera, skorzystaj z naszego <Link href="/narzedzia/generator-palet-kolorow">generatora palet kolorów</Link>.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnego systemu dla swojej marki?"
        description="Zaprojektujemy dla Ciebie spójny system identyfikacji wizualnej — logo, kolory, typografię i wzorce graficzne, które wyróżnią Cię na tle konkurencji."
        btnOne="Sprawdź ofertę identyfikacji"
        btnOneLink="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
        btnTwo="Sprawdź wszystkie usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
