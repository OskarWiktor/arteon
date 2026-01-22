import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Darmowy generator palet kolorów - 9 schematów z jednego koloru',
  description:
    'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczna, komplementarna, triadyczna, pastelowa i inne. Kopiuj kody HEX jednym kliknięciem. Darmowe narzędzie.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-palet-kolorow') },
  openGraph: {
    title: 'Darmowy generator palet kolorów - 9 schematów z jednego koloru',
    description:
      'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczna, komplementarna, triadyczna, pastelowa i inne. Kopiuj kody HEX jednym kliknięciem. Darmowe narzędzie.',
    url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'),
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
    'Darmowy generator palet kolorów. Wpisz jeden kolor HEX i wygeneruj 9 schematów: monochromatyczny, analogiczny, komplementarny, triadyczny, split-complementary, pastelowy, ciemny, tonalny i minimalistyczny. Kopiowanie kodów HEX jednym kliknięciem.',
  featureList: [
    'Schemat monochromatyczny (odcienie jednego koloru)',
    'Schemat analogiczny (kolory sąsiadujące na kole barw)',
    'Schemat komplementarny (kolory przeciwstawne)',
    'Schemat triadyczny (3 kolory w równych odstępach)',
    'Schemat split-complementary (kolor + 2 sąsiednie do przeciwstawnego)',
    'Paleta pastelowa (jasne, stonowane odcienie)',
    'Paleta ciemna (dark mode)',
    'Paleta tonalna (inspirowana Material Design)',
    'Paleta minimalistyczna (inspirowana Apple)',
    'Kolor bazowy w formacie HEX',
    'Wybór koloru z palety (color picker)',
    'Losowy kolor startowy',
    'Kopiowanie kodów HEX jednym kliknięciem',
    'Wyświetlanie wartości HSL',
    'Przetwarzanie lokalne w przeglądarce',
    'Bez logowania i rejestracji',
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
    question: 'Jakie formaty kolorów obsługuje generator?',
    answer:
      'Generator przyjmuje kolory w formacie HEX - zarówno skróconym (#RGB), jak i pełnym (#RRGGBB). Możesz wpisać kolor ręcznie lub użyć próbnika kolorów. Wygenerowane palety pokazują zarówno kody HEX, jak i wartości HSL.',
    answerSchemaText: 'Generator przyjmuje kolory w formacie HEX (#RGB lub #RRGGBB). Pokazuje kody HEX i wartości HSL.',
  },
  {
    question: 'Ile kolorów zawiera każda paleta?',
    answer:
      'Każda paleta zawiera od 4 do 6 kolorów, w zależności od typu. Palety monochromatyczne i tonalne mają więcej odcieni (różne poziomy jasności), podczas gdy palety komplementarne i triadyczne skupiają się na kontrastujących barwach.',
    answerSchemaText: 'Każda paleta zawiera od 4 do 6 kolorów, w zależności od typu schematu.',
  },
  {
    question: 'Jak wybrać odpowiednią paletę do projektu?',
    answer:
      'Paleta monochromatyczna sprawdzi się w minimalistycznych projektach. Komplementarna i triadyczna są idealne do projektów wymagających silnych akcentów (np. przyciski CTA). Pastelowa i minimalistyczna pasują do delikatnych, eleganckich interfejsów. Ciemna i tonalna są przydatne przy projektowaniu trybu ciemnego.',
    answerSchemaText: 'Monochromatyczna dla minimalizmu, komplementarna dla akcentów, pastelowa dla elegancji, ciemna dla dark mode.',
  },
  {
    question: 'Czym różni się paleta komplementarna od split-complementary?',
    answer:
      'Paleta komplementarna używa dwóch kolorów przeciwstawnych na kole barw (przesunięcie o 180°), co daje silny kontrast. Split-complementary to łagodniejsza wersja - zamiast jednego przeciwnego koloru używa dwóch kolorów przesuniętych o ±30° od dopełnienia, co zmniejsza napięcie wizualne.',
    answerSchemaText: 'Komplementarna: 2 przeciwstawne kolory (180°). Split-complementary: kolor + 2 sąsiednie do przeciwnego (łagodniejszy kontrast).',
  },
  {
    question: 'Czy mogę używać wygenerowanych palet komercyjnie?',
    answer: 'Tak. Wygenerowane palety kolorów możesz swobodnie używać w dowolnych projektach - komercyjnych i niekomercyjnych, bez żadnych ograniczeń.',
    answerSchemaText: 'Tak, wygenerowane palety można używać bez ograniczeń w projektach komercyjnych i niekomercyjnych.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-color-palette-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator palet kolorów"
        description="Wpisz jeden kolor bazowy i wygeneruj 9 harmonijnych palet: monochromatyczną, komplementarną, triadyczną, pastelową i inne. Kopiuj kody HEX jednym kliknięciem."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/generator-palet-kolorow`, label: 'Generator palet kolorów' }} includeJsonLd />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <ColorPaletteGenerator />

        <Gap variant="line" />

        <SectionInfo title="Dobierz kolory do strony, logo lub projektu graficznego">
          <p className="text-mid">
            Generator tworzy palety automatycznie na podstawie jednego koloru bazowego. Podajesz kolor główny (np. kolor logo lub brandingu), a narzędzie generuje 9 różnych zestawów kolorów opartych
            na teorii koloru - od monochromatycznych odcieni po kontrastujące kombinacje.
          </p>
          <p className="text-mid mt-3">
            Każda paleta zawiera od 4 do 6 kolorów z kodami HEX i wartościami HSL. Możesz skopiować dowolny kolor jednym kliknięciem i użyć go w CSS, Figmie, Canvie lub dowolnym programie graficznym.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak wygenerować paletę kolorów?"
          description="Tworzenie palet zajmuje dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz kolor bazowy',
              description: 'Wpisz kod HEX w pole tekstowe lub kliknij kolorowy kwadrat, aby otworzyć próbnik kolorów.',
            },
            {
              title: '2. Wygeneruj palety',
              description: 'Kliknij „Zaktualizuj kolor" - narzędzie automatycznie stworzy 9 różnych palet.',
            },
            {
              title: '3. Skopiuj kolory',
              description: 'Kliknij „Kopiuj" przy wybranym kolorze, a kod HEX trafi do schowka.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/generator-palet-kolorow/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="9 typów palet kolorów - który wybrać?">
          <p className="text-mid mb-4">Generator tworzy 9 różnych schematów opartych na klasycznej teorii koloru:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Paleta</th>
                  <th className="py-2 pr-4 font-semibold">Opis</th>
                  <th className="py-2 font-semibold">Zastosowanie</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Monochromatyczna</td>
                  <td className="py-2 pr-4">Odcienie jednego koloru (różna jasność)</td>
                  <td className="py-2">Minimalistyczne projekty, eleganckie interfejsy</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Analogiczna</td>
                  <td className="py-2 pr-4">Kolory sąsiadujące na kole barw (±30°)</td>
                  <td className="py-2">Harmonijne ilustracje, ciepłe/chłodne klimaty</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Komplementarna</td>
                  <td className="py-2 pr-4">Kolor + przeciwny na kole barw (180°)</td>
                  <td className="py-2">Przyciski CTA, silne akcenty</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Triadyczna</td>
                  <td className="py-2 pr-4">3 kolory co 120° na kole barw</td>
                  <td className="py-2">Branding, materiały reklamowe</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Split-complementary</td>
                  <td className="py-2 pr-4">Kolor + 2 sąsiednie do przeciwnego</td>
                  <td className="py-2">Kontrast bez napięcia wizualnego</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Pastelowa</td>
                  <td className="py-2 pr-4">Niskie nasycenie, wysoka jasność</td>
                  <td className="py-2">Lifestyle, kosmetyki, projekty dla dzieci</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Ciemna</td>
                  <td className="py-2 pr-4">Wysokie nasycenie, niska jasność</td>
                  <td className="py-2">Dark mode, luksusowe marki</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Tonalna (Material)</td>
                  <td className="py-2 pr-4">Skala jasności 50-900</td>
                  <td className="py-2">Systemy designu, stany UI (hover, active)</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Minimalistyczna (Apple)</td>
                  <td className="py-2 pr-4">Akcent + jasne neutrale</td>
                  <td className="py-2">Nowoczesne interfejsy, czyste layouty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Koło barw i teoria koloru">
          <p className="text-mid">
            Generator opiera się na klasycznym kole barw (koło Ittena) i przestrzeni kolorów HSL (Hue, Saturation, Lightness). Każda paleta powstaje przez matematyczne przekształcenia koloru bazowego -
            zmianę odcienia (H), nasycenia (S) lub jasności (L).
          </p>
          <p className="text-mid mt-3">
            Palety komplementarna, triadyczna i split-complementary bazują na geometrii koła barw - kolory są równomiernie rozłożone, co zapewnia wizualną równowagę. Palety monochromatyczna, pastelowa
            i ciemna modyfikują tylko jasność i nasycenie, zachowując ten sam odcień.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Zastosowania generatora palet kolorów">
          <p className="text-mid mb-4">Narzędzie przydaje się przy różnych projektach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Branding i identyfikacja wizualna</strong> - dobór kolorów do logo, materiałów firmowych i prezentacji.
            </li>
            <li>
              <strong>Projektowanie stron WWW</strong> - kolory dla przycisków, nagłówków, tła i akcentów.
            </li>
            <li>
              <strong>Interfejsy aplikacji (UI)</strong> - palety tonalne do stanów (hover, active, disabled) i trybu ciemnego.
            </li>
            <li>
              <strong>Grafika do mediów społecznościowych</strong> - spójne kolory postów, stories i okładek.
            </li>
            <li>
              <strong>Prezentacje i dokumenty</strong> - harmonijne zestawy kolorów dla slajdów i wykresów.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels title="Najczęstsze pytania o generator palet" items={faqItems} openByDefault={1} pageUrl={toAbsoluteUrl('/narzedzia/generator-palet-kolorow')} />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji wizualnej dla swojej marki?"
        description="Projektujemy logo, system kolorów i materiały firmowe tak, aby Twoja marka wyglądała profesjonalnie i budowała zaufanie."
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
