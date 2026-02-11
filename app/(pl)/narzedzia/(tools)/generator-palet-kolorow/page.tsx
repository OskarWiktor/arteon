import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';
import {
  RiDropLine,
  RiCursorLine,
  RiLayoutGridLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiSparklingLine,
  RiMoonLine,
  RiStackLine,
  RiContractLeftRightLine,
  RiBrushLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiImageLine,
  RiSlideshowLine,
  RiRefreshLine,
  RiErrorWarningLine,
  RiCodeLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Darmowy generator palet kolorów - 9 schematów z jednego koloru',
  description:
    'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczną, komplementarną, triadyczną, pastelową i inne. Skopiuj kody HEX i użyj ich na stronie, w logo lub projekcie graficznym.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-palet-kolorow') },
  openGraph: {
    title: 'Darmowy generator palet kolorów - 9 schematów z jednego koloru',
    description:
      'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczną, komplementarną, triadyczną, pastelową i inne. Skopiuj kody HEX i użyj ich na stronie, w logo lub projekcie graficznym.',
    url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator palet kolorów',
  alternateName: [
    'Generator schematów kolorów',
    'Generator kolorów online',
    'Kreator palet kolorystycznych',
    'Narzędzie do dobierania kolorów',
    'Paleta kolorów online',
    'Harmonia kolorów generator',
    'Color palette generator',
  ],
  url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorPaletteGenerator',
  operatingSystem: 'Any',
  description:
    'Darmowy generator palet kolorów online. Wpisz jeden kolor HEX, a narzędzie wygeneruje 9 schematów: monochromatyczny, analogiczny, komplementarny, triadyczny, rozłożony komplementarny, pastelowy, ciemny, tonalny i minimalistyczny. Każdy kolor można skopiować wraz z kodem HEX i wartością HSL.',
  featureList: [
    'Schemat monochromatyczny – odcienie jednego koloru',
    'Schemat analogiczny – kolory sąsiadujące na kole barw',
    'Schemat komplementarny – kolory przeciwstawne',
    'Schemat triadyczny – 3 kolory w równych odstępach',
    'Schemat rozłożony komplementarny – kolor bazowy i 2 sąsiednie do przeciwstawnego',
    'Paleta pastelowa – jasne, stonowane odcienie',
    'Paleta ciemna – głębokie kolory do ciemnych motywów',
    'Paleta tonalna – skala jasności jednego odcienia',
    'Paleta minimalistyczna – mocny akcent i jasne neutrale',
    'Kolor bazowy w formacie HEX',
    'Próbnik kolorów do wizualnego wyboru barwy',
    'Losowanie koloru startowego',
    'Kopiowanie kodu HEX do schowka',
    'Wyświetlanie wartości HSL obok każdego koloru',
    'Przetwarzanie lokalne w przeglądarce – pliki nie są wysyłane na serwer',
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
  name: 'Jak wygenerować paletę kolorów z jednego koloru bazowego',
  description: 'Jak wygenerować 9 palet kolorów z jednego koloru bazowego: monochromatyczny, komplementarny, triadyczny, pastelowy i inne. Każdy kolor można skopiować wraz z kodem HEX.',
  url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor bazowy',
      text: 'Wpisz kod HEX w pole tekstowe lub użyj próbnika kolorów, aby wybrać kolor, od którego chcesz zacząć.',
    },
    {
      '@type': 'HowToStep',
      name: 'Zatwierdź kolor',
      text: 'Zatwierdź wybrany kolor przyciskiem Zaktualizuj kolor – narzędzie wygeneruje palety na podstawie podanego koloru bazowego.',
    },
    {
      '@type': 'HowToStep',
      name: 'Przeglądaj palety',
      text: 'Narzędzie automatycznie wygeneruje 9 różnych palet: monochromatyczną, analogiczną, komplementarną, triadyczną, rozłożoną komplementarną, pastelową, ciemną, tonalną i minimalistyczną.',
    },
    {
      '@type': 'HowToStep',
      name: 'Skopiuj kolory',
      text: 'Przy każdym kolorze znajdziesz przycisk Kopiuj – kod HEX trafi do schowka systemowego.',
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
    question: 'W jakim formacie podać kolor bazowy w generatorze palet?',
    answer:
      'Generator przyjmuje kolory w formacie HEX - zarówno w wersji skróconej (np. #F50), jak i pełnej (np. #FF5500). Obok pola tekstowego znajdziesz próbnik kolorów, który pozwala wybrać barwę wizualnie. Wygenerowane palety pokazują kod HEX i wartość HSL każdego koloru.',
    answerSchemaText: 'Generator przyjmuje kolory w formacie HEX (#RGB lub #RRGGBB). Każdy wygenerowany kolor ma podany kod HEX i wartość HSL.',
  },
  {
    question: 'Ile kolorów zawiera każda paleta kolorów?',
    answer:
      'Każda paleta zawiera od 4 do 6 kolorów. Liczba zależy od typu schematu - palety monochromatyczne i tonalne generują więcej odcieni (skala jasności jednej barwy), a palety komplementarne i triadyczne skupiają się na mniejszej liczbie kontrastujących barw.',
    answerSchemaText: 'Każda paleta zawiera od 4 do 6 kolorów, w zależności od typu schematu kolorystycznego.',
  },
  {
    question: 'Czym jest przestrzeń kolorów HSL i jak ją czytać?',
    answer:
      'HSL to sposób zapisu koloru za pomocą trzech wartości: H (odcień, 0°–360° na kole barw), S (nasycenie, 0%–100%) i L (jasność, 0%–100%). Generator wyświetla wartości HSL obok każdego koloru, co ułatwia zrozumienie, jak poszczególne barwy w palecie różnią się od siebie - np. paleta monochromatyczna zmienia tylko jasność (L), zachowując ten sam odcień (H).',
    answerSchemaText: 'HSL to zapis koloru przez odcień (H), nasycenie (S) i jasność (L). Generator wyświetla te wartości obok każdego koloru w palecie.',
  },
  {
    question: 'Czy wygenerowane palety kolorów mogę wykorzystać komercyjnie?',
    answer: 'Tak. Wygenerowane palety kolorów możesz wykorzystać w dowolnych projektach - komercyjnych i niekomercyjnych, bez ograniczeń licencyjnych.',
    answerSchemaText: 'Tak, wygenerowane palety można wykorzystać bez ograniczeń w projektach komercyjnych i niekomercyjnych.',
  },
  {
    question: 'Czy generator palet kolorów wymaga logowania lub opłat?',
    answer: 'Generator jest w pełni darmowy i nie wymaga logowania ani rejestracji. Kolory generowane są lokalnie w przeglądarce - żadne dane nie są wysyłane na zewnętrzne serwery.',
    answerSchemaText: 'Generator jest darmowy, nie wymaga logowania. Kolory generowane są lokalnie w przeglądarce.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-color-palette-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-color-palette-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Generator palet kolorów"
        description="Podaj jeden kolor bazowy, a narzędzie wygeneruje 9 harmonijnych palet kolorów: monochromatyczną, komplementarną, triadyczną, pastelową i inne. Każdy kolor można skopiować z kodem HEX."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/generator-palet-kolorow`, label: 'Generator palet kolorów' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <ColorPaletteGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Po co generować paletę kolorów?">
          <p className="text-mid">
            Spójna paleta kolorów to podstawa każdego projektu wizualnego - od strony internetowej, przez logo, po materiały drukowane. Ręczne dobieranie barw, które do siebie pasują, wymaga
            znajomości teorii koloru. Generator robi to automatycznie: podajesz jeden kolor bazowy (np. kolor swojego logo), a narzędzie tworzy 9 zestawów kolorów opartych na sprawdzonych schematach
            harmonii barw.
          </p>
          <p className="text-mid mt-3">
            Każdy wygenerowany kolor ma podany kod HEX (np. #4F6BF5) i wartość HSL (odcień, nasycenie, jasność). Kod HEX możesz wkleić bezpośrednio do CSS, Figmy, Canvy lub dowolnego programu
            graficznego.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora palet kolorów?"
          description="Cały proces zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Podaj kolor bazowy',
              description: 'Wpisz kod HEX (np. #4F6BF5) w pole tekstowe lub wybierz barwę z próbnika kolorów. Możesz też wylosować kolor przyciskiem Losowy kolor.',
            },
            {
              title: '2. Zatwierdź wybór',
              description: 'Po zatwierdzeniu przyciskiem Zaktualizuj kolor narzędzie automatycznie wygeneruje 9 palet opartych na różnych schematach harmonii barw.',
            },
            {
              title: '3. Skopiuj potrzebne kolory',
              description: 'Przy każdym kolorze znajduje się przycisk Kopiuj - kod HEX trafia do schowka i można go od razu wkleić w projekt.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jakie schematy kolorów generuje narzędzie?"
          description="Generator tworzy 9 typów palet - każda oparta na innej zasadzie teorii koloru:"
          grid="two"
          items={[
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Paleta monochromatyczna',
              description: (
                <p>
                  Kilka odcieni jednego koloru - od jasnego do ciemnego. Wszystkie barwy mają ten sam odcień na kole barw, a różnią się tylko jasnością. Sprawdza się w eleganckich, minimalistycznych
                  projektach, gdzie zależy na spójności bez ryzyka kolizji kolorów.
                </p>
              ),
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Paleta analogiczna',
              description: (
                <p>
                  Kolory sąsiadujące na kole barw (przesunięte o ok. 30° w obie strony od koloru bazowego). Tworzą harmonijne, płynne przejścia barwne. Dobrze pasuje do projektów, które mają budować
                  ciepłą lub chłodną atmosferę - np. ilustracje, grafiki do mediów społecznościowych.
                </p>
              ),
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Paleta komplementarna',
              description: (
                <p>
                  Kolor bazowy i barwa leżąca naprzeciwko na kole barw (przesunięcie o 180°). Daje silny kontrast wizualny. Przydatna tam, gdzie element ma przyciągać wzrok - np. przycisk na stronie,
                  wyróżniony nagłówek, baner promocyjny.
                </p>
              ),
            },
            {
              icon: <RiSparklingLine className="h-6 w-6" />,
              title: 'Paleta triadyczna',
              description: (
                <p>
                  Trzy kolory oddalone o 120° na kole barw - tworzą trójkąt równoboczny. Żywa, dynamiczna kombinacja. Sprawdza się w projektach kreatywnych: identyfikacja wizualna młodych marek,
                  materiały reklamowe, plakaty.
                </p>
              ),
            },
            {
              icon: <RiCursorLine className="h-6 w-6" />,
              title: 'Paleta rozłożona komplementarna',
              description: (
                <p>
                  Łagodniejsza wersja palety komplementarnej. Zamiast jednej barwy przeciwstawnej używa dwóch kolorów przesuniętych o ok. 30° od dopełnienia. Daje wyraźny kontrast, ale bez tak silnego
                  napięcia wizualnego jak klasyczny schemat komplementarny.
                </p>
              ),
            },
            {
              icon: <RiDropLine className="h-6 w-6" />,
              title: 'Paleta pastelowa',
              description: (
                <p>
                  Ten sam odcień z obniżonym nasyceniem i podniesioną jasnością - miękkie, delikatne barwy. Popularna w branżach takich jak kosmetyka, moda dziecięca i gastronomia. Dobrze komponuje
                  się z jasnym tłem i dużą ilością białej przestrzeni.
                </p>
              ),
            },
            {
              icon: <RiMoonLine className="h-6 w-6" />,
              title: 'Paleta ciemna',
              description: (
                <p>
                  Kolor bazowy przy wysokim nasyceniu i obniżonej jasności - głębokie, intensywne barwy. Przydatna przy projektowaniu ciemnych motywów stron i aplikacji, a także materiałów dla marek
                  premium, gdzie mocne kolory na ciemnym tle budują charakter.
                </p>
              ),
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Paleta tonalna',
              description: (
                <p>
                  Kilka kroków jasności jednego odcienia - od bardzo jasnego po ciemny. Przypomina skale tonalne stosowane w systemach projektowych (np. odcienie od 50 do 900). Przydaje się przy
                  budowaniu interfejsów, gdzie ten sam kolor potrzebuje wariantów: jaśniejszy dla tła, ciemniejszy dla tekstu, pośredni dla obramowań.
                </p>
              ),
            },
            {
              icon: <RiContractLeftRightLine className="h-6 w-6" />,
              title: 'Paleta minimalistyczna',
              description: (
                <p>
                  Jeden wyrazisty akcent kolorystyczny i kilka bardzo jasnych, miękkich neutrali. Reszta palety pozostaje stonowana. Sprawdza się w nowoczesnych interfejsach z dużą ilością białej
                  przestrzeni - typowy styl stron produktowych i landing page&apos;y.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Na czym opiera się generator palet kolorów?"
          demo={
            <div className="space-y-4">
              <div
                className="mx-auto h-40 w-40 rounded-full"
                style={{ background: 'conic-gradient(hsl(0,80%,60%), hsl(60,80%,60%), hsl(120,80%,60%), hsl(180,80%,60%), hsl(240,80%,60%), hsl(300,80%,60%), hsl(360,80%,60%))' }}
              />
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">H (odcień)</span>
                  <span className="text-mid">0°–360° na kole barw</span>
                </div>
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">S (nasycenie)</span>
                  <span className="text-mid">0%–100%</span>
                </div>
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">L (jasność)</span>
                  <span className="text-mid">0%–100%</span>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Wszystkie palety powstają z matematycznych przekształceń koloru bazowego w przestrzeni HSL. HSL opisuje kolor trzema wartościami: odcień (H) to pozycja na kole barw (0°–360°), nasycenie
            (S) określa intensywność barwy, a jasność (L) - jak bardzo kolor jest jasny lub ciemny.
          </p>
          <p className="text-mid mt-3">
            Palety komplementarna, triadyczna i rozłożona komplementarna bazują na geometrii koła barw - kolory są rozmieszczone w równych odstępach kątowych, co daje wizualną równowagę. Palety
            monochromatyczna, pastelowa i ciemna zmieniają tylko jasność i nasycenie, zachowując ten sam odcień.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Gdzie wykorzystać wygenerowane palety kolorów?"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Identyfikacja wizualna firmy',
              description: 'Dobierz kolory uzupełniające do istniejącego logo lub stwórz paletę brandingową od podstaw - do wizytówek, papeterii i materiałów reklamowych.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Strony internetowe',
              description: 'Ustal kolor główny, kolor akcentu i odcienie tła. Skopiowane kody HEX wkleisz prosto do arkusza stylów CSS lub konfiguracji motywu.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Interfejsy aplikacji',
              description: 'Paleta tonalna daje warianty jasności jednego koloru - jaśniejszy dla tła, ciemniejszy dla tekstu, pośredni dla obramowań i stanów interaktywnych.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Grafiki do mediów społecznościowych',
              description: 'Spójne kolory postów, relacji i okładek profili. Paleta analogiczna lub pastelowa sprawdza się, gdy zależy na jednolitym, rozpoznawalnym stylu.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Prezentacje i dokumenty',
              description: 'Harmonijne zestawy kolorów dla slajdów, wykresów i infografik. Paleta monochromatyczna lub minimalistyczna utrzymuje porządek wizualny.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Rozwiązywanie problemów z generatorem palet"
          grid="two"
          items={[
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: 'Palety nie zmieniają się po wpisaniu koloru',
              description: (
                <p>
                  Sam wpis kodu HEX nie generuje palet automatycznie - zmianę trzeba zatwierdzić przyciskiem <strong>Zaktualizuj kolor</strong>. Dopiero po zatwierdzeniu narzędzie przelicza wszystkie
                  9 schematów.
                </p>
              ),
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Komunikat o nieprawidłowym formacie',
              description: (
                <p>
                  Generator przyjmuje wyłącznie format HEX z symbolem # na początku, np. <code className="rounded bg-black/5 px-1">#FF5500</code>. Formaty bez # (np.{' '}
                  <code className="rounded bg-black/5 px-1">FF5500</code>) lub w zapisie RGB (np. <code className="rounded bg-black/5 px-1">rgb(255,85,0)</code>) nie są obsługiwane.
                </p>
              ),
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Format skrócony i pełny HEX',
              description: (
                <p>
                  Obsługiwane są oba zapisy: pełny <code className="rounded bg-black/5 px-1">#RRGGBB</code> (np. #FF5500) i skrócony <code className="rounded bg-black/5 px-1">#RGB</code> (np. #F50).
                  Generator automatycznie rozpoznaje oba formaty i traktuje je identycznie.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels title="Najczęstsze pytania dotyczące generatora palet kolorystycznych" items={faqItems} openByDefault={1} pageUrl={toAbsoluteUrl('/narzedzia/generator-palet-kolorow')} />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji wizualnej dla swojej marki?"
        description="Projektujemy logo, dobieramy system kolorów i przygotowujemy materiały firmowe - od wizytówek po szablony do mediów społecznościowych."
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
