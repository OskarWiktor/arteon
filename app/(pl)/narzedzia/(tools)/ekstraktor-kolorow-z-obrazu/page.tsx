import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import FaqPanels from '@/components/ui/FaqPanels';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiPaletteLine,
  RiFileImageLine,
  RiGlobalLine,
  RiImageLine,
  RiCropLine,
  RiContrastLine,
  RiEraserLine,
  RiZoomInLine,
  RiGroupLine,
  RiStarLine,
  RiAlertLine,
  RiSearchEyeLine,
  RiErrorWarningLine,
  RiFileWarningLine,
  RiBrushLine,
  RiLayoutMasonryLine,
  RiPaintBrushLine,
  RiBarChartLine,
} from 'react-icons/ri';

const LOCALE = 'pl' as const;
const TOOL_KEY = 'paletteExtractor' as const;

export const metadata: Metadata = {
  title: 'Ekstraktor kolorów z obrazu online | Pobierz paletę ze zdjęcia',
  description:
    'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie, logo lub grafikę i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Analiza odbywa się lokalnie w przeglądarce.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Ekstraktor kolorów z obrazu online | Pobierz paletę ze zdjęcia',
    description:
      'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie, logo lub grafikę i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Analiza odbywa się lokalnie w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Ekstraktor kolorów z obrazu online - darmowy generator palety',
  alternateName: 'Pobierz paletę kolorów ze zdjęcia lub logo',
  url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorExtractor',
  operatingSystem: 'Any',
  description:
    'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie, logo lub grafikę i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB. Przetwarzanie odbywa się w przeglądarce - pliki nie są wysyłane na serwer.',
  featureList: [
    'Automatyczna ekstrakcja do 12 dominujących kolorów',
    'Analiza zdjęć, logo i grafik wektorowych',
    'Kody kolorów w formacie HEX i RGB',
    'Kopiowanie kodu koloru do schowka',
    'Obsługa plików PNG, JPG i SVG',
    'Ignorowanie przezroczystych pikseli w plikach PNG',
    'Przetwarzanie lokalne w przeglądarce – obraz nie jest wysyłany na serwer',
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

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak wyciągnąć kolory ze zdjęcia lub obrazu',
  description: 'Jak wyciągnąć dominujące kolory ze zdjęcia lub logo. Wgraj obraz w formacie PNG, JPG lub SVG, a narzędzie wygeneruje paletę do 12 kolorów z kodami HEX.',
  url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj obraz',
      text: 'Przeciągnij plik na wyznaczone pole lub wybierz obraz z dysku. Obsługiwane formaty to PNG, JPG i SVG.',
    },
    {
      '@type': 'HowToStep',
      name: 'Poczekaj na analizę',
      text: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie z niego dominujące kolory.',
    },
    {
      '@type': 'HowToStep',
      name: 'Skopiuj kolory',
      text: 'Przy każdym kolorze znajdziesz przycisk kopiowania – kod HEX trafi do schowka systemowego.',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: 'Czy ekstraktor kolorów z obrazu wymaga logowania?',
    answer:
      'Nie. Narzędzie jest w pełni darmowe i nie wymaga logowania ani rejestracji. Obraz analizowany jest lokalnie w przeglądarce - nie jest wysyłany na żaden serwer. Po zamknięciu strony dane znikają.',
  },
  {
    question: 'Czym różni się ekstraktor kolorów od generatora palet?',
    answer:
      'Ekstraktor wyciąga kolory z istniejącego obrazu - analizuje zdjęcie i pokazuje barwy, które na nim dominują. Generator palet kolorów działa odwrotnie: podajesz jeden kolor bazowy, a narzędzie tworzy harmonijne zestawy na podstawie teorii koloru. Oba narzędzia uzupełniają się - możesz wyciągnąć kolor z obrazu, a potem użyć go jako bazowego w generatorze palet.',
  },
  {
    question: 'Ile kolorów wyciąga ekstraktor z jednego obrazu?',
    answer:
      'Narzędzie wyciąga do 12 dominujących kolorów. Dokładna liczba zależy od zawartości obrazu - jeśli grafika ma tylko dwa kolory (np. proste logo), wynik będzie zawierał mniej pozycji. Kolory są posortowane od najczęściej występującego.',
  },
  {
    question: 'Jakie formaty obrazów obsługuje ekstraktor kolorów?',
    answer:
      'Obsługiwane formaty to PNG, JPG (JPEG) i SVG. Pliki PNG z przezroczystym tłem dają lepsze wyniki, ponieważ przezroczyste piksele są pomijane w analizie - narzędzie skupia się na kolorach samego obiektu.',
  },
  {
    question: 'W jakim formacie otrzymam kody wyciągniętych kolorów?',
    answer:
      'Każdy kolor wyświetlany jest z kodem HEX (np. #2C5F2D) i wartością RGB (np. rgb(44, 95, 45)). Kod można skopiować do schowka i wkleić bezpośrednio do CSS, Figmy, Photoshopa lub innego programu graficznego.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-palette-extractor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-palette-extractor-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Ekstraktor kolorów z obrazu online"
        description="Wgraj zdjęcie, logo lub grafikę, a narzędzie wyciągnie do 12 dominujących kolorów z kodami HEX i RGB. Analiza odbywa się lokalnie w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/ekstraktor-kolorow-z-obrazu`, label: 'Ekstraktor kolorów z obrazu' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <PaletteExtractor />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Po co wyciągać kolory z obrazu?">
          <p className="text-mid mb-4">
            Każde zdjęcie, logo czy grafika zawiera barwy, które można wykorzystać jako gotową paletę kolorów. Ekstraktor analizuje obraz i pokazuje, które kolory na nim dominują - wraz z kodami HEX i
            wartościami RGB gotowymi do wklejenia w projekt.
          </p>
          <p className="text-mid mb-4">
            W praktyce oznacza to, że zamiast ręcznie próbkować kolory w programie graficznym (pixel po pikselu), wgrywasz jedno zdjęcie i dostajesz uporządkowaną listę do 12 barw. To przydaje się
            przy dobieraniu kolorów do strony internetowej, tworzeniu spójnych grafik do mediów społecznościowych lub budowaniu identyfikacji wizualnej na podstawie istniejącego materiału.
          </p>
          <p className="text-mid">Cała analiza odbywa się lokalnie w przeglądarce - obraz nie jest wysyłany na żaden serwer.</p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Jak korzystać z ekstraktora kolorów z obrazu?"
          description="Cały proces zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wgraj obraz',
              description: 'Przeciągnij plik na wyznaczone pole lub wybierz go z dysku. Obsługiwane formaty to PNG, JPG i SVG.',
            },
            {
              title: '2. Poczekaj na analizę',
              description: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie z niego do 12 dominujących kolorów.',
            },
            {
              title: '3. Skopiuj potrzebne kolory',
              description: 'Przy każdym kolorze znajduje się przycisk kopiowania - kod HEX lub RGB trafia do schowka i można go od razu wkleić w projekt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Jak wygląda paleta kolorów z obrazu?"
          demo={
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {['#2C5F2D', '#97BC62', '#DAA520', '#4169E1', '#8B4513', '#DC143C', '#2F4F4F', '#FF6347'].map((color) => (
                  <div key={color} className="flex flex-col items-center gap-1">
                    <div className="h-10 w-full rounded-lg border border-neutral-200" style={{ backgroundColor: color }} />
                    <span className="text-mid text-xs!">{color}</span>
                  </div>
                ))}
              </div>
              <p className="text-light text-xs!">Przykładowe kolory wyciągnięte z obrazu natury</p>
            </div>
          }
        >
          <p className="text-mid mb-4">
            Po wgraniu obrazu ekstraktor wyświetla listę dominujących barw posortowanych od najczęściej występującej. Przy każdym kolorze widoczny jest kod HEX i wartość RGB - gotowe do wklejenia w
            CSS, Figmę lub dowolny program graficzny.
          </p>
          <p className="text-mid">
            Liczba wyciągniętych kolorów zależy od zawartości obrazu. Zdjęcie krajobrazowe da bogatszą paletę (8–12 barw), a proste logo w dwóch kolorach - odpowiednio mniej pozycji.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Jakie obrazy dają najlepsze wyniki w ekstraktorze kolorów?"
          description="Jakość wyciągniętej palety zależy od rodzaju wgranego obrazu:"
          grid="two"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Logo i grafiki z ograniczoną paletą',
              description: 'Obrazy z kilkoma wyraźnie oddzielonymi kolorami dają najbardziej precyzyjne wyniki - ekstraktor trafnie rozpoznaje każdą barwę.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Zdjęcia z wyraźnym motywem',
              description: 'Zdjęcia produktów, wnętrz czy krajobrazów również dają użyteczne palety, ale zawierają więcej odcieni - w tym kolory cieni i refleksów światła.',
            },
            {
              icon: <RiEraserLine className="h-6 w-6" />,
              title: 'Pliki PNG z przezroczystym tłem',
              description: 'Przezroczyste piksele są automatycznie pomijane w analizie. Jeśli chcesz wyciągnąć kolory wyłącznie z obiektu (np. logo), użyj pliku PNG bez tła.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Obrazy bez dużego jednokolorowego tła',
              description: 'Gdy tło zajmuje większość powierzchni obrazu, jego barwa dominuje w wynikach. Przed wgraniem warto przyciąć obraz do interesującego fragmentu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTimeline
          title="Jak działa ekstrakcja kolorów z obrazu?"
          description="Po wgraniu pliku narzędzie wykonuje kilka kroków w tle - cała analiza odbywa się lokalnie w przeglądarce:"
          items={[
            {
              icon: <RiZoomInLine className="h-5 w-5" />,
              title: 'Skalowanie obrazu',
              description: 'Obraz jest zmniejszany do ok. 240 pikseli szerokości. To przyspiesza analizę nawet bardzo dużych zdjęć, bez wpływu na dokładność wykrywania kolorów.',
            },
            {
              icon: <RiGroupLine className="h-5 w-5" />,
              title: 'Grupowanie podobnych barw',
              description: 'Każdy piksel jest analizowany, a zbliżone odcienie łączone w grupy. Dwa prawie identyczne niebieskie stają się jednym kolorem w palecie.',
            },
            {
              icon: <RiStarLine className="h-5 w-5" />,
              title: 'Wybór dominujących kolorów',
              description: 'Algorytm wybiera barwy, które zajmują największą powierzchnię obrazu. Wynik to lista do 12 kolorów posortowanych od najczęściej występującego.',
            },
            {
              icon: <RiContrastLine className="h-5 w-5" />,
              title: 'Pomijanie przezroczystych pikseli',
              description: 'W plikach PNG z przezroczystym tłem te obszary nie są brane pod uwagę - ekstraktor analizuje wyłącznie widoczne barwy. Cały proces trwa zazwyczaj poniżej sekundy.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Rozwiązywanie problemów z ekstraktorem kolorów"
          grid="two"
          items={[
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Ekstraktor wyciągnął mniej kolorów niż 12',
              description:
                'Liczba wyciągniętych barw zależy od zawartości obrazu. Proste logo w dwóch kolorach da 2–3 wyniki - to prawidłowe działanie. Narzędzie nie dodaje sztucznych kolorów, wyciąga tylko te, które faktycznie występują na obrazie.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'W palecie pojawiły się nieoczekiwane kolory',
              description:
                'Mogą to być barwy cieni, gradientów lub refleksów światła - piksele w tych obszarach mają inne kolory niż widoczny na pierwszy rzut oka obiekt. Użycie obrazu z bardziej jednolitymi barwami lub przycięcie ciemnych fragmentów poprawi wyniki.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Kolor tła dominuje w wynikach',
              description:
                'Gdy tło zajmuje większą powierzchnię niż sam obiekt, jego barwa pojawi się jako pierwsza na liście. Rozwiązanie: użyj pliku PNG z przezroczystym tłem lub przytnij obraz tak, aby obiekt zajmował większą część.',
            },
            {
              icon: <RiFileWarningLine className="h-6 w-6" />,
              title: 'Plik nie jest akceptowany przez ekstraktor',
              description: 'Narzędzie obsługuje wyłącznie formaty PNG, JPG i SVG. Pliki w innych formatach (GIF, TIFF, HEIC, PDF) wymagają wcześniejszej konwersji.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia ekstraktor kolorów z obrazu?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Analiza lokalna - obraz nie opuszcza komputera',
              description: 'Cała ekstrakcja kolorów odbywa się w przeglądarce. Obraz nie jest wysyłany na żaden serwer, a po zamknięciu strony dane są usuwane z pamięci.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Do 12 dominujących barw z jednego obrazu',
              description: 'Narzędzie wyciąga do 12 kolorów posortowanych od najczęściej występującego - wystarczy do zbudowania pełnej palety kolorystycznej projektu.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Trzy popularne formaty obrazów',
              description: 'Obsługiwane formaty to PNG, JPG i SVG. Pliki PNG z przezroczystym tłem dają najlepsze wyniki, bo przezroczyste piksele są automatycznie pomijane.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Gotowe kody HEX i RGB do wklejenia',
              description: 'Każdy wyciągnięty kolor ma podany kod HEX (np. #2C5F2D) i wartość RGB. Kod można skopiować do schowka i wkleić bezpośrednio do CSS, Figmy lub Photoshopa.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Gdzie wykorzystać kolory wyciągnięte z obrazu?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Budowanie identyfikacji wizualnej',
              description: 'Wgraj zdjęcie, które oddaje klimat marki - krajobraz, wnętrze restauracji, zdjęcie produktu - i wyciągnij z niego kolory jako punkt wyjścia do palety brandingowej.',
            },
            {
              icon: <RiLayoutMasonryLine className="h-6 w-6" />,
              title: 'Grafiki do mediów społecznościowych',
              description: 'Wyciągnij kolory ze zdjęcia produktu i użyj ich jako tła lub akcentów w grafice. Posty oparte na kolorach z tego samego źródła wyglądają spójnie na profilu.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Dobieranie kolorów do strony internetowej',
              description: 'Wyciągnij barwy z logo i użyj ich jako palety kolorystycznej całej strony - kolor główny, kolor akcentu, odcienie tła. Kody HEX wkleisz prosto do CSS.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Rozbudowa istniejącej palety',
              description: (
                <p>
                  Wyciągnięty kolor bazowy możesz wykorzystać w <Link href="/narzedzia/generator-palet-kolorow">generatorze palet kolorów</Link>, aby stworzyć pełny zestaw harmonijnych barw na
                  podstawie teorii koloru.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          items={[
            ...faqItems,
            {
              question: 'Czy mogę skopiować wszystkie kolory z palety naraz?',
              answer:
                'Obecnie narzędzie pozwala kopiować kolory pojedynczo - przy każdym kolorze znajduje się przycisk, który kopiuje kod HEX do schowka. Skopiowany kod można od razu wkleić do Figmy, Photoshopa, CSS lub innego programu.',
            },
          ]}
          title="Najczęściej zadawane pytania dotyczące ekstraktora kolorów z obrazu"
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji wizualnej?"
        description="Projektujemy logo, dobieramy paletę kolorów i przygotowujemy system wizualny - od wizytówek po szablony grafik do mediów społecznościowych."
        btnOne="Skontaktuj się z nami"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę projektów graficznych"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
