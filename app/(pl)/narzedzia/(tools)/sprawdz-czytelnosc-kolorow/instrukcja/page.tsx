import Script from 'next/script';
import Link from 'next/link';
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
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import { RiPaletteLine, RiPaintBrushLine, RiCheckboxCircleLine, RiEqualizerLine } from 'react-icons/ri';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';

export const metadata: Metadata = {
  title: 'Jak sprawdzić czytelność kolorów? | Instrukcja narzędzia online',
  description:
    'Instrukcja sprawdzania czytelności kolorów tekstu i tła. Dowiedz się, jak wpisać kolory HEX/RGB/HSL, jak interpretować wyniki i jak użyć funkcji Dopasuj do automatycznej korekty.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja') },
  openGraph: {
    title: 'Jak sprawdzić czytelność kolorów? | Instrukcja narzędzia online',
    description:
      'Instrukcja sprawdzania czytelności kolorów tekstu i tła. Dowiedz się, jak wpisać kolory HEX/RGB/HSL, jak interpretować wyniki i jak użyć funkcji Dopasuj do automatycznej korekty.',
    url: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp') }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak sprawdzić czytelność kolorów online',
  description: 'Instrukcja sprawdzania czytelności kolorów tekstu i tła według standardu WCAG. Wpisz kolory, sprawdź współczynnik kontrastu, użyj funkcji Dopasuj.',
  url: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tekstu',
      text: 'Wpisz kod koloru tekstu (np. #333333) lub użyj próbnika kolorów.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tła',
      text: 'Wpisz kod koloru tła, na którym będzie wyświetlany tekst.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sprawdź wynik',
      text: 'Narzędzie pokaże współczynnik kontrastu i czy spełniasz wymagania AA/AAA.',
    },
    {
      '@type': 'HowToStep',
      name: 'Dostosuj kolory',
      text: 'Jeśli kontrast jest za niski, użyj funkcji Dopasuj do automatycznej korekty.',
    },
  ],
  tool: {
    '@type': 'HowToTool',
    name: 'Narzędzie do sprawdzania czytelności kolorów',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

export default function InstrukcjaPage() {
  return (
    <>
      <Script id="ld-json-contrast-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak sprawdzić czytelność kolorów?"
        description="Instrukcja korzystania z narzędzia do sprawdzania czytelności kolorów. Dowiesz się, jak wpisać kolory, jak interpretować wyniki i jak użyć funkcji Dopasuj do automatycznej korekty."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/sprawdz-czytelnosc-kolorow', label: 'Sprawdź czytelność kolorów' }}
        fourth={{ href: '/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Jak sprawdzić czytelność kolorów?"
          description="Sprawdzenie zajmuje kilka sekund:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Wpisz kolor tekstu',
              description: 'Wpisz kod koloru (np. #333333) w pole tekstowe lub kliknij próbnik kolorów i wybierz kolor wizualnie.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Wpisz kolor tła',
              description: 'Analogicznie wprowadź kolor tła. Może to być kolor sekcji, bloku lub całej strony.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Sprawdź wynik',
              description: 'Narzędzie obliczy współczynnik kontrastu i pokaże, czy spełniasz wymagania dla tekstu zwykłego, dużego i ikon.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Dostosuj kolory',
              description: 'Jeśli kontrast jest za niski — użyj funkcji Dopasuj, żeby narzędzie zaproponowało poprawiony kolor.',
            },
          ]}
        />

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

        <SectionDemo
          title="Jak interpretować wyniki testu czytelności?"
          demo={
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-dark text-sm font-medium uppercase">Współczynnik kontrastu</p>
                <p className="text-dark text-xl font-semibold">8.59:1</p>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm font-semibold uppercase">Tekst zwykły</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (min. 4.5:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (min. 7:1)
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-2" style={{ color: '#1a1a1a', backgroundColor: '#ffffff' }}>
                  <p className="text-sm">Przykładowy tekst zwykły</p>
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm font-semibold uppercase">Tekst duży</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (min. 3:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (min. 4.5:1)
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Po wprowadzeniu kolorów narzędzie wyświetla wyniki w trzech sekcjach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Tekst zwykły</strong> — wymaga kontrastu 4.5:1 (AA) lub 7:1 (AAA). Dotyczy tekstu poniżej 18pt (24px) lub poniżej 14pt pogrubionego.
            </li>
            <li>
              <strong>Tekst duży / pogrubiony</strong> — wymaga kontrastu 3:1 (AA) lub 4.5:1 (AAA). Dotyczy nagłówków, przycisków, wyróżnień.
            </li>
            <li>
              <strong>Ikona</strong> — wymaga kontrastu 3:1 (AA). Dotyczy ikon i elementów graficznych interfejsu.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Zielony badge</strong> oznacza spełniony wymóg. <strong>Czerwony badge</strong> oznacza, że kontrast jest za niski i wymaga poprawy.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jak działa funkcja Dopasuj?">
          <p className="text-mid mb-4">
            Funkcja <strong>Dopasuj</strong> automatycznie szuka wariantu koloru tekstu, który spełni wybrany próg kontrastu:
          </p>
          <ol className="text-mid mb-4 list-decimal space-y-2 pl-5">
            <li>
              <strong>Wybierz cel dopasowania</strong> — z listy rozwijanej wybierz, jaki poziom kontrastu chcesz osiągnąć (np. AA dla tekstu zwykłego wymaga 4.5:1, AAA dla tekstu dużego wymaga 4.5:1).
            </li>
            <li>
              <strong>Kliknij przycisk Dopasuj</strong> — narzędzie przeszuka warianty jasności koloru tekstu.
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
            <strong>Uwaga:</strong> Nie zawsze możliwe jest znalezienie odpowiedniego wariantu — np. gdy tło jest bardzo jasne, a kolor tekstu również jasny w tym samym odcieniu, może nie istnieć
            wariant spełniający wymagania bez zmiany odcienia.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają poziomy AA i AAA w standardzie WCAG?">
          <p className="text-mid mb-4">WCAG (Web Content Accessibility Guidelines) definiuje dwa główne poziomy zgodności dla kontrastu kolorów:</p>

          <h3 className="h4 mb-2">Poziom AA — standard minimalny</h3>
          <p className="text-mid mb-4">
            Poziom AA jest uznawany za minimalny akceptowalny standard dostępności. Większość przepisów prawnych dotyczących dostępności (np.{' '}
            <a href="https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              dyrektywa UE o dostępności stron internetowych
            </a>
            ) wymaga właśnie tego poziomu.
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
          <p className="text-mid mb-4">Poziom AAA zapewnia lepszą czytelność dla osób z poważniejszymi wadami wzroku. Nie jest wymagany prawnie, ale zalecany dla kluczowych treści.</p>
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

        <SectionInfo title="Najczęstsze problemy i rozwiązania">
          <h3 className="h4 mb-2">Widzę komunikat o błędzie formatu koloru</h3>
          <p className="text-mid mb-4">
            Sprawdź format koloru. Kod HEX powinien zaczynać się od <code className="rounded bg-black/5 px-1">#</code> i zawierać 3 lub 6 znaków (np. <code className="rounded bg-black/5 px-1">#fff</code>{' '}
            lub <code className="rounded bg-black/5 px-1">#ffffff</code>). Dla formatu RGB sprawdź, czy wartości są oddzielone przecinkami i mieszczą się w zakresie 0-255.
          </p>

          <h3 className="h4 mb-2">Funkcja Dopasuj nie znajduje odpowiedniego koloru</h3>
          <p className="text-mid mb-4">
            Gdy tło i tekst mają zbliżoną jasność w tym samym odcieniu, algorytm może nie znaleźć wariantu spełniającego wymagania bez zmiany odcienia. W takim przypadku rozważ zmianę koloru tła lub
            wybór zupełnie innego koloru tekstu.
          </p>

          <h3 className="h4 mb-2">Kolor w próbniku nie odpowiada wpisanemu kodowi</h3>
          <p className="text-mid mb-4">
            Próbnik kolorów w przeglądarce obsługuje tylko format HEX bez przezroczystości. Jeśli wpiszesz kolor w formacie RGBA lub HSLA z przezroczystością, próbnik pokaże tylko część kolorową (bez
            alpha). Obliczenia kontrastu nadal uwzględniają przezroczystość.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          title="Najczęstsze pytania o sprawdzanie czytelności kolorów"
          items={[
            {
              question: 'Jak sprawdzić czy kolory na mojej stronie są czytelne?',
              answer:
                'Otwórz narzędzie do sprawdzania czytelności kolorów, wpisz kolor tekstu i kolor tła ze swojej strony. Narzędzie pokaże współczynnik kontrastu i czy spełniasz wymagania. Możesz sprawdzić kolory z różnych sekcji strony — nagłówków, przycisków, tekstu na banerach.',
            },
            {
              question: 'Skąd wziąć kody kolorów ze swojej strony?',
              answer:
                'W przeglądarce (Chrome, Firefox, Edge) kliknij prawym przyciskiem myszy na element i wybierz Zbadaj (Inspect). W zakładce Styles zobaczysz kolory używane na stronie. Możesz też użyć rozszerzenia do przeglądarki typu ColorZilla, które pozwala pobrać kolor dowolnego elementu.',
            },
            {
              question: 'Czy muszę sprawdzać każdą parę kolorów na stronie?',
              answer:
                'Najważniejsze do sprawdzenia: tekst na tle głównym, tekst na banerach/sekcjach kolorowych, przyciski (tekst i tło przycisku vs tło strony), linki, ikony. Szczególną uwagę zwróć na elementy, które pojawiają się na różnych tłach.',
            },
            {
              question: 'Jak poprawić czytelność kolorów bez zmiany identyfikacji wizualnej?',
              answer:
                'Użyj funkcji Dopasuj — narzędzie zaproponuje wariant koloru o tej samej barwie (odcieniu), ale z inną jasnością. Możesz też zwiększyć rozmiar tekstu (duży tekst ma niższe wymagania kontrastu) lub dodać cień/obramowanie, które zwiększy czytelność.',
            },
            {
              question: 'Czy tekst biały na zdjęciu zawsze będzie nieczytelny?',
              answer:
                'Nie zawsze, ale to zależy od zdjęcia. Jeśli tekst jest na ciemnej części zdjęcia, może być czytelny. Bezpieczniejsze rozwiązanie to dodanie półprzezroczystej nakładki (overlay) między zdjęciem a tekstem — wtedy kontrast jest kontrolowany niezależnie od zdjęcia.',
            },
            {
              question: 'Czy narzędzie sprawdza kolory dla daltonistów?',
              answer:
                'Narzędzie sprawdza kontrast jasności, który jest ważny dla wszystkich użytkowników, w tym osób z daltonizmem. Jednak daltonizm to zaburzenie rozróżniania kolorów, nie jasności. Dlatego oprócz kontrastu warto unikać problematycznych par kolorów (np. czerwony-zielony) i nie polegać wyłącznie na kolorze do przekazywania informacji.',
            },
          ]}
          generateSchema
        />

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie do sprawdzania czytelności kolorów"
          btnOne="Przejdź do narzędzia"
          btnOneLink="/narzedzia/sprawdz-czytelnosc-kolorow"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak korzystać z narzędzia, możesz sprawdzić kolory na swojej stronie. Jeśli potrzebujesz pomocy z dostępnością i optymalizacją strony —{' '}
            <Link href="/kontakt" className="inline-link">
              skontaktuj się z nami
            </Link>
            . Zajmujemy się{' '}
            <Link href="/uslugi/strony-internetowe" className="inline-link">
              tworzeniem stron internetowych
            </Link>{' '}
            zgodnych ze standardami dostępności.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne darmowe narzędzia online" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz strony zgodnej ze standardami dostępności?"
        description="Sprawdzimy czytelność kolorów, hierarchię treści i inne elementy dostępności na Twojej stronie. Tworzymy strony, które są czytelne dla wszystkich użytkowników."
        btnOne="Sprawdź ofertę stron internetowych"
        btnOneLink="/uslugi/strony-internetowe"
        btnTwo="Skontaktuj się z nami"
        btnTwoLink="/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
