import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import Link from 'next/link';
import { RiPaletteLine, RiPaintBrushLine, RiCheckboxCircleLine, RiEqualizerLine, RiContrast2Line } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak używać testera kontrastu kolorów WCAG | Instrukcja',
  description:
    'Instrukcja testera kontrastu WCAG. Dowiedz się, jak sprawdzić kontrast, co oznaczają poziomy AA i AAA oraz jak interpretować wyniki.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja') },
  openGraph: {
    title: 'Jak używać testera kontrastu kolorów WCAG | Instrukcja',
    description:
      'Szczegółowa instrukcja testera kontrastu kolorów WCAG. Dowiedz się, jak sprawdzić kontrast, co oznaczają poziomy AA i AAA, jakie formaty kolorów są obsługiwane i jak interpretować wyniki.',
    url: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać testera kontrastu kolorów WCAG',
  description:
    'Instrukcja krok po kroku jak korzystać z testera kontrastu kolorów zgodnego z wytycznymi WCAG 2.1. Sprawdź, czy kolory na swojej stronie spełniają wymagania dostępności.',
  url: toAbsoluteUrl('/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tekstu',
      text: 'Wpisz kod koloru (np. #333333) lub użyj próbnika kolorów, żeby wybrać kolor tekstu.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tła',
      text: 'Analogicznie wybierz kolor tła, na którym będzie wyświetlany tekst.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sprawdź wynik',
      text: 'Narzędzie pokaże współczynnik kontrastu i czy spełniasz poziom AA lub AAA dla różnych typów treści.',
    },
    {
      '@type': 'HowToStep',
      name: 'Dostosuj kolory (opcjonalnie)',
      text: 'Jeśli kontrast jest za niski, użyj funkcji Dopasuj lub ręcznie zmień któryś z kolorów.',
    },
  ],
  tool: {
    '@type': 'HowToTool',
    name: 'Tester kontrastu kolorów WCAG online',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: 'Jaka jest różnica między poziomem AA a AAA?',
    answer:
      'Poziom AA to minimalny standard dostępności wymagany przez większość przepisów (np. ADA w USA, dyrektywy UE). Wymaga kontrastu co najmniej 4.5:1 dla zwykłego tekstu i 3:1 dla dużego tekstu. Poziom AAA to wyższy standard — wymaga kontrastu co najmniej 7:1 dla zwykłego tekstu i 4.5:1 dla dużego tekstu. AAA zapewnia lepszą czytelność dla osób z poważniejszymi wadami wzroku, ale nie zawsze jest praktyczny do osiągnięcia dla wszystkich elementów interfejsu.',
  },
  {
    question: 'Co to jest duży tekst według WCAG?',
    answer:
      'Według wytycznych WCAG 2.1 duży tekst to: zwykły tekst o rozmiarze co najmniej 18pt (24px) lub tekst pogrubiony o rozmiarze co najmniej 14pt (około 18.5px). Duży tekst ma niższe wymagania kontrastu, ponieważ większe litery są łatwiejsze do odczytania nawet przy słabszym kontraście.',
  },
  {
    question: 'Czy muszę sprawdzać kontrast ikon i przycisków?',
    answer:
      'Tak. Wytyczne WCAG 2.1 (kryterium 1.4.11) wymagają minimalnego kontrastu 3:1 dla graficznych elementów interfejsu — ikon, przycisków, pól formularzy i innych elementów, które przekazują informację lub umożliwiają interakcję. To oznacza, że np. ikona koszyka zakupowego musi mieć wystarczający kontrast z tłem, żeby użytkownik mógł ją zauważyć.',
  },
  {
    question: 'Dlaczego mój kolor nie spełnia wymagań, mimo że dobrze go widzę?',
    answer:
      'Osobiste postrzeganie koloru różni się w zależności od warunków oświetlenia, jakości monitora i indywidualnych zdolności wzrokowych. Wytyczne WCAG opierają się na obiektywnym wzorze matematycznym (relative luminance), który uwzględnia różne rodzaje zaburzeń widzenia — w tym daltonizm i osłabienie wzroku związane z wiekiem. Dlatego nawet jeśli Ty dobrze widzisz dany kolor, może być nieczytelny dla części użytkowników.',
  },
  {
    question: 'Jak działa funkcja Dopasuj?',
    answer:
      'Funkcja Dopasuj automatycznie szuka wariantu koloru tekstu, który spełnia wybrany próg kontrastu (np. AA dla tekstu zwykłego). Narzędzie zachowuje odcień (hue) i nasycenie (saturation) oryginalnego koloru, zmieniając tylko jasność (lightness) — tak żeby proponowany kolor był jak najbardziej zbliżony do oryginału, ale już zgodny z WCAG. Jeśli znajdzie odpowiedni wariant, wyświetla go z możliwością skopiowania lub ustawienia jako nowy kolor tekstu.',
  },
  {
    question: 'Widzę komunikat o błędzie formatu koloru — co zrobić?',
    answer:
      'Sprawdź format koloru. Kod HEX powinien zaczynać się od # i zawierać 3 lub 6 znaków (np. #fff lub #ffffff). Dla formatu RGB sprawdź, czy wartości są oddzielone przecinkami i mieszczą się w zakresie 0-255.',
  },
  {
    question: 'Funkcja Dopasuj nie znajduje odpowiedniego koloru — dlaczego?',
    answer:
      'Gdy tło i tekst mają zbliżoną jasność w tym samym odcieniu, algorytm może nie znaleźć wariantu spełniającego wymagania bez zmiany odcienia. W takim przypadku rozważ zmianę koloru tła lub wybór zupełnie innego koloru tekstu.',
  },
  {
    question: 'Kolor w próbniku nie odpowiada wpisanemu kodowi — dlaczego?',
    answer:
      'Próbnik kolorów w przeglądarce obsługuje tylko format HEX bez przezroczystości. Jeśli wpiszesz kolor w formacie RGBA lub HSLA z przezroczystością, próbnik pokaże tylko część kolorową (bez alpha). Obliczenia kontrastu nadal uwzględniają przezroczystość.',
  },
];

export default function InstrukcjaPage() {
  return (
    <>
      <Script id="ld-json-wcag-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak używać testera kontrastu kolorów WCAG"
        description="Szczegółowa instrukcja narzędzia do sprawdzania kontrastu kolorów. Dowiesz się, co oznaczają poziomy WCAG, jak interpretować wyniki i jak poprawić kontrast na swojej stronie."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/tester-kontrastu-kolorow-wcag', label: 'Tester kontrastu WCAG' }}
        fourth={{ href: '/narzedzia/tester-kontrastu-kolorow-wcag/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest kontrast kolorów i dlaczego jest ważny?">
          <p className="text-mid">
            Kontrast to różnica jasności między dwoma kolorami — na przykład między kolorem tekstu a kolorem tła. Im wyższa ta różnica, tym łatwiej odróżnić tekst od tła i go przeczytać.
          </p>
          <p className="text-mid mt-3">
            Dlaczego to ma znaczenie? Około 300 milionów ludzi na świecie ma różne formy zaburzeń widzenia kolorów, a kolejne miliony mają osłabiony wzrok z powodu wieku lub chorób oczu. Słaby kontrast
            sprawia, że tekst staje się dla nich nieczytelny.
          </p>
          <p className="text-mid mt-3">
            Ale nie tylko osoby z wadami wzroku korzystają z dobrego kontrastu. Wyobraź sobie przeglądanie strony na telefonie w pełnym słońcu lub na starszym, wyblakłym monitorze — wysoki kontrast
            pomaga w każdej z tych sytuacji.
          </p>
          <p className="text-mid mt-3">
            <strong>WCAG</strong> (Web Content Accessibility Guidelines) to międzynarodowe wytyczne dostępności stron internetowych, które określają minimalne wartości kontrastu. Spełnienie tych
            wytycznych oznacza, że strona jest czytelna dla jak największej liczby użytkowników — i często jest wymagane prawnie w wielu krajach (w tym w Unii Europejskiej).
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają poziomy WCAG AA i AAA?">
          <p className="text-mid mb-4">Wytyczne WCAG definiują dwa główne poziomy zgodności dla kontrastu kolorów:</p>

          <h3 className="h4 mb-2">Poziom AA — standard minimalny</h3>
          <p className="text-mid mb-4">
            Poziom AA jest uznawany za minimalny akceptowalny standard dostępności. Większość przepisów prawnych dotyczących dostępności (np. dyrektywa UE o dostępności stron internetowych) wymaga
            właśnie tego poziomu. Wymagania:
          </p>
          <ul className="text-mid mb-6 list-disc space-y-1 pl-5">
            <li>
              <strong>Tekst zwykły:</strong> kontrast co najmniej 4.5:1
            </li>
            <li>
              <strong>Tekst duży (18pt+ lub 14pt pogrubiony):</strong> kontrast co najmniej 3:1
            </li>
            <li>
              <strong>Elementy graficzne UI (ikony, przyciski):</strong> kontrast co najmniej 3:1
            </li>
          </ul>

          <h3 className="h4 mb-2">Poziom AAA — standard rozszerzony</h3>
          <p className="text-mid mb-4">Poziom AAA zapewnia lepszą czytelność dla osób z poważniejszymi wadami wzroku. Wymagania:</p>
          <ul className="text-mid mb-6 list-disc space-y-1 pl-5">
            <li>
              <strong>Tekst zwykły:</strong> kontrast co najmniej 7:1
            </li>
            <li>
              <strong>Tekst duży:</strong> kontrast co najmniej 4.5:1
            </li>
          </ul>

          <p className="text-mid">
            <strong>Która wartość oznacza lepszy kontrast?</strong> Wyższa. Skala idzie od 1:1 (brak kontrastu — np. biały tekst na białym tle) do 21:1 (maksymalny kontrast — czarny tekst na białym
            tle lub odwrotnie).
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak korzystać z testera?"
          description="Sprawdzenie kontrastu kolorów zajmuje dosłownie kilka sekund:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Wybierz kolor tekstu',
              description: 'Wpisz kod koloru (np. #333333) w pole tekstowe lub kliknij próbnik kolorów i wybierz kolor wizualnie. To będzie kolor pierwszego planu (foreground).',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Wybierz kolor tła',
              description: 'Analogicznie wprowadź kolor tła (background). Może to być kolor sekcji, bloku lub całej strony — zależnie od tego, co testujesz.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Sprawdź wynik',
              description:
                'Narzędzie automatycznie obliczy współczynnik kontrastu i pokaże, czy spełniasz poziomy AA i AAA dla tekstu zwykłego, tekstu dużego oraz elementów graficznych.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Dostosuj kolory',
              description:
                'Jeśli kontrast jest za niski — użyj funkcji Dopasuj, żeby narzędzie zaproponowało poprawiony kolor. Możesz też ręcznie zmienić któryś z kolorów i sprawdzić ponownie.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Jak interpretować wyniki?"
          demo={
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-dark text-sm font-medium uppercase">Współczynnik kontrastu</p>
                <p className="text-dark text-xl font-semibold">8.59:1</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm font-semibold uppercase">Tekst zwykły</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">AA (min. 4.5:1)</Badge>
                    <Badge variant="success" size="sm">AAA (min. 7:1)</Badge>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-2" style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}>
                  <p className="text-sm">Przykładowy tekst zwykły</p>
                </div>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 space-y-2">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm font-semibold uppercase">Ikona</p>
                  <Badge variant="success" size="sm">AA (min. 3:1)</Badge>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-neutral-200" style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}>
                    <RiContrast2Line className="text-2xl" />
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Po wprowadzeniu kolorów narzędzie wyświetla trzy sekcje wyników:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li><strong>Tekst zwykły</strong> — wymagany kontrast 4.5:1 (AA) lub 7:1 (AAA).</li>
            <li><strong>Tekst duży / pogrubiony</strong> — wymagany kontrast 3:1 (AA) lub 4.5:1 (AAA).</li>
            <li><strong>Ikona</strong> — wymagany kontrast 3:1 (AA) dla elementów graficznych.</li>
          </ul>
          <p className="text-mid mt-3">Zielony badge oznacza spełniony wymóg, czerwony — wymaga poprawy.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Funkcja Dopasuj — co robi?">
          <p className="text-mid mb-4">
            Funkcja <strong>Dopasuj</strong> automatycznie szuka wariantu koloru tekstu, który spełni wybrany próg kontrastu. Jak to działa:
          </p>
          <ol className="text-mid mb-4 list-decimal space-y-2 pl-5">
            <li>
              <strong>Wybierz cel dopasowania</strong> — z rozwijanej listy wybierz, jaki poziom kontrastu chcesz osiągnąć (np. AA dla tekstu zwykłego, AAA dla tekstu dużego).
            </li>
            <li>
              <strong>Kliknij Dopasuj</strong> — narzędzie przeszuka warianty jasności koloru tekstu, szukając takiego, który spełnia wymagania.
            </li>
            <li>
              <strong>Sprawdź propozycję</strong> — jeśli narzędzie znajdzie odpowiedni wariant, wyświetli go wraz z obliczonym współczynnikiem kontrastu.
            </li>
            <li>
              <strong>Zastosuj lub skopiuj</strong> — kliknij Ustaw, żeby użyć zaproponowanego koloru jako nowego koloru tekstu, lub skopiuj kod koloru do schowka.
            </li>
          </ol>
          <p className="text-mid">
            Algorytm zachowuje odcień (hue) i nasycenie (saturation) oryginalnego koloru, zmieniając tylko jasność (lightness). Dzięki temu proponowany kolor jest jak najbardziej zbliżony do
            oryginału, ale już zgodny z wybranym poziomem WCAG.
          </p>
          <p className="text-mid mt-3">
            <strong>Uwaga:</strong> Nie zawsze możliwe jest znalezienie odpowiedniego wariantu — np. gdy tło jest bardzo jasne, a kolor tekstu również jasny, może nie istnieć wariant tego samego
            odcienia spełniający wymagania. W takim przypadku narzędzie wyświetli komunikat o błędzie.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie formaty kolorów są obsługiwane?">
          <p className="text-mid mb-4">Narzędzie obsługuje wszystkie popularne formaty zapisu kolorów w CSS:</p>

          <h3 className="h4 mb-2">HEX</h3>
          <p className="text-mid mb-2">
            Format szesnastkowy — najpopularniejszy w projektowaniu stron. Zaczyna się od znaku <code className="rounded bg-black/5 px-1">#</code> i zawiera 3 lub 6 znaków (cyfry 0-9 i litery A-F).
          </p>
          <ul className="text-mid mb-4 list-disc space-y-1 pl-5">
            <li>
              <code className="rounded bg-black/5 px-1">#fff</code> — biały (skrócona forma)
            </li>
            <li>
              <code className="rounded bg-black/5 px-1">#ffffff</code> — biały (pełna forma)
            </li>
            <li>
              <code className="rounded bg-black/5 px-1">#1a73e8</code> — niebieski
            </li>
          </ul>

          <h3 className="h4 mb-2">RGB / RGBA</h3>
          <p className="text-mid mb-2">
            Format oparty na trzech kanałach: czerwony (Red), zielony (Green), niebieski (Blue). Każdy kanał przyjmuje wartość od 0 do 255. Wariant RGBA dodaje czwarty parametr — przezroczystość
            (alpha) od 0 do 1.
          </p>
          <ul className="text-mid mb-4 list-disc space-y-1 pl-5">
            <li>
              <code className="rounded bg-black/5 px-1">rgb(255, 255, 255)</code> — biały
            </li>
            <li>
              <code className="rounded bg-black/5 px-1">rgba(0, 0, 0, 0.8)</code> — czarny z 80% krycia
            </li>
          </ul>

          <h3 className="h4 mb-2">HSL / HSLA</h3>
          <p className="text-mid mb-2">
            Format oparty na odcieniu (Hue, 0-360°), nasyceniu (Saturation, 0-100%) i jasności (Lightness, 0-100%). Wariant HSLA dodaje przezroczystość. Ten format jest przydatny, gdy chcesz
            modyfikować jasność lub nasycenie koloru — każdy parametr jest niezależny.
          </p>
          <ul className="text-mid mb-4 list-disc space-y-1 pl-5">
            <li>
              <code className="rounded bg-black/5 px-1">hsl(0, 0%, 100%)</code> — biały
            </li>
            <li>
              <code className="rounded bg-black/5 px-1">hsla(217, 91%, 60%, 0.9)</code> — niebieski z 90% krycia
            </li>
          </ul>

          <p className="text-mid">
            <strong>Wskazówka:</strong> Jeśli pracujesz w programie graficznym (Figma, Adobe XD, Photoshop), możesz skopiować kolor w dowolnym z tych formatów i wkleić bezpośrednio do narzędzia.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          title="Najczęściej zadawane pytania"
          items={faqItems}
          generateSchema
        />

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie"
          btnOne="Przejdź do testera kontrastu WCAG"
          btnOneLink="/narzedzia/tester-kontrastu-kolorow-wcag"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak działa tester kontrastu, możesz sprawdzić kolory na swojej stronie. Jeśli potrzebujesz pomocy z dostępnością i optymalizacją strony — <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/strony-internetowe">tworzeniem stron internetowych</Link> zgodnych z wytycznymi WCAG.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy z dostępnością strony?"
        description="Sprawdzimy kontrast kolorów, hierarchię treści i inne elementy dostępności na Twojej stronie. Powiem Ci, co konkretnie poprawić, żeby strona była zgodna z WCAG i czytelna dla wszystkich użytkowników."
        btnOne="Zamów audyt dostępności"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
