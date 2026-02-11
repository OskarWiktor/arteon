import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import AdSense from '@/components/ui/AdSense';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import {
  RiPaletteLine,
  RiPaintBrushLine,
  RiCheckboxCircleLine,
  RiEqualizerLine,
  RiGlobalLine,
  RiShoppingCartLine,
  RiSlideshowLine,
  RiPrinterLine,
  RiSmartphoneLine,
  RiRestaurantLine,
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiStackLine,
  RiInfinityLine,
  RiTranslate2,
  RiHashtag,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Kontrast i czytelność kolorów online | Sprawdź czy tekst jest czytelny',
  description:
    'Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów (HEX, RGB, HSL), zobacz współczynnik kontrastu według WCAG i użyj funkcji Dopasuj do automatycznej korekty. Darmowe narzędzie online.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow') },
  openGraph: {
    title: 'Kontrast i czytelność kolorów online | Sprawdź czy tekst jest czytelny',
    description:
      'Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów (HEX, RGB, HSL), zobacz współczynnik kontrastu według WCAG i użyj funkcji Dopasuj do automatycznej korekty. Darmowe narzędzie online.',
    url: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kontrast i czytelność kolorów online',
  alternateName: [
    'Tester czytelności kolorów',
    'Sprawdzanie kontrastu tekstu i tła',
    'Narzędzie do sprawdzania czytelności',
    'Kalkulator kontrastu kolorów',
    'Tester kontrastu WCAG',
    'Sprawdzanie kolorów dla daltonistów',
    'Czy kolory są czytelne',
  ],
  url: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description:
    'Sprawdź czy kolory tekstu i tła są czytelne dla wszystkich użytkowników. Narzędzie oblicza współczynnik kontrastu według standardu WCAG i pokazuje, czy spełniasz wymagania dostępności.',
  featureList: [
    'Obliczanie współczynnika kontrastu (contrast ratio)',
    'Weryfikacja zgodności z WCAG 2.1 poziom AA',
    'Weryfikacja zgodności z WCAG 2.1 poziom AAA',
    'Testowanie dla zwykłego tekstu',
    'Testowanie dla dużego tekstu i nagłówków',
    'Testowanie dla ikon i elementów graficznych',
    'Obsługa kolorów w formacie HEX',
    'Obsługa kolorów w formacie RGB i RGBA',
    'Obsługa kolorów w formacie HSL i HSLA',
    'Próbnik kolorów do wizualnego wyboru barwy',
    'Podgląd tekstu na żywo',
    'Funkcja automatycznego dopasowania koloru',
    'Przetwarzanie lokalne w przeglądarce',
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
  name: 'Jak sprawdzić kontrast i czytelność kolorów online',
  description: 'Jak sprawdzić czytelność kolorów tekstu i tła według standardu WCAG. Podaj kolory, odczytaj współczynnik kontrastu i skorzystaj z funkcji automatycznego dopasowania.',
  url: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tekstu',
      text: 'Podaj kod koloru tekstu (np. #333333) w formacie HEX, RGB lub HSL - albo wybierz barwę z próbnika kolorów.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor tła',
      text: 'Podaj kolor tła, na którym będzie wyświetlany tekst - może to być kolor sekcji, bloku lub całej strony.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sprawdź wynik',
      text: 'Narzędzie pokaże współczynnik kontrastu i czy spełniasz wymagania AA/AAA.',
    },
    {
      '@type': 'HowToStep',
      name: 'Dostosuj kolory',
      text: 'Jeśli kontrast jest za niski, funkcja Dopasuj automatycznie zaproponuje wariant koloru tekstu spełniający wybrany próg WCAG.',
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

export default function Page() {
  return (
    <>
      <Script id="ld-json-contrast-checker" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-contrast-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Kontrast i czytelność kolorów"
        description="Wpisz kolor tekstu i tła, a narzędzie pokaże, czy kontrast jest wystarczający. Obliczenia opierają się na międzynarodowym standardzie dostępności WCAG 2.1, który określa minimalne wartości kontrastu dla różnych typów treści."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/kontrast-i-czytelnosc-kolorow', label: 'Kontrast i czytelność kolorów' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Dlaczego czytelność kolorów ma znaczenie?">
          <p className="text-mid">
            Czytelność to różnica jasności między kolorem tekstu a kolorem tła. Im większa ta różnica, tym łatwiej odczytać tekst. Zbyt niski kontrast sprawia, że treść staje się trudna do
            przeczytania - szczególnie dla osób z wadami wzroku, osób starszych lub w trudnych warunkach oświetleniowych (np. na telefonie w pełnym słońcu).
          </p>
          <p className="text-mid mt-3">
            Według{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noopener noreferrer" className="underline">
              Światowej Organizacji Zdrowia (WHO)
            </a>
            , około 2,2 miliarda ludzi na świecie ma różne formy zaburzeń widzenia. Do tego dochodzą miliony osób z daltonizmem (około 8% mężczyzn i 0,5% kobiet) oraz osoby, których wzrok osłabł z
            wiekiem.
          </p>
          <p className="text-mid mt-3">
            Narzędzie oblicza współczynnik kontrastu według wzoru określonego w standardzie{' '}
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer" className="underline">
              WCAG 2.1 (Web Content Accessibility Guidelines)
            </a>{' '}
            - międzynarodowych wytycznych dostępności cyfrowej. Wynik pozwala obiektywnie ocenić, czy kolory są wystarczająco czytelne, niezależnie od ustawień monitora czy indywidualnego postrzegania
            barw.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z testera kontrastu kolorów?"
          description="Sprawdzenie czytelności zajmuje kilka sekund:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Podaj kolor tekstu',
              description: 'Wpisz kod koloru (np. #333333) w formacie HEX, RGB lub HSL - albo wybierz barwę z próbnika kolorów.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Podaj kolor tła',
              description: 'Wprowadź kolor tła, na którym będzie wyświetlany tekst - może to być kolor sekcji, bloku lub całej strony.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Odczytaj wynik',
              description: 'Narzędzie obliczy współczynnik kontrastu i pokaże, czy kolory spełniają wymagania WCAG dla tekstu zwykłego, dużego i ikon.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Dopasuj kolory',
              description: 'Jeśli kontrast jest za niski, funkcja Dopasuj automatycznie zaproponuje wariant koloru spełniający wybrany próg.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Jakie formaty kolorów są obsługiwane?"
          tabs={[
            {
              title: 'HEX',
              icon: <RiHashtag className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Format szesnastkowy - najpopularniejszy w projektowaniu stron. Zaczyna się od znaku <code className="rounded bg-black/5 px-1">#</code> i zawiera 3 lub 6 znaków (cyfry 0-9 i litery
                    A-F).
                  </p>
                  <ul className="text-mid list-disc space-y-1 pl-5">
                    <li>
                      <code className="rounded bg-black/5 px-1">#fff</code> - biały (skrócona forma)
                    </li>
                    <li>
                      <code className="rounded bg-black/5 px-1">#ffffff</code> - biały (pełna forma)
                    </li>
                    <li>
                      <code className="rounded bg-black/5 px-1">#1a73e8</code> - niebieski
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: 'RGB / RGBA',
              icon: <RiPaletteLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Format oparty na trzech kanałach: czerwony (Red), zielony (Green), niebieski (Blue). Każdy kanał przyjmuje wartość od 0 do 255. Wariant RGBA dodaje czwarty parametr -
                    przezroczystość (alpha) od 0 do 1.
                  </p>
                  <ul className="text-mid list-disc space-y-1 pl-5">
                    <li>
                      <code className="rounded bg-black/5 px-1">rgb(255, 255, 255)</code> - biały
                    </li>
                    <li>
                      <code className="rounded bg-black/5 px-1">rgba(0, 0, 0, 0.8)</code> - czarny z 80% krycia
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              title: 'HSL / HSLA',
              icon: <RiEqualizerLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Format oparty na odcieniu (Hue, 0-360°), nasyceniu (Saturation, 0-100%) i jasności (Lightness, 0-100%). Wariant HSLA dodaje przezroczystość. Ten format jest przydatny, gdy chcesz
                    modyfikować jasność lub nasycenie koloru.
                  </p>
                  <ul className="text-mid list-disc space-y-1 pl-5">
                    <li>
                      <code className="rounded bg-black/5 px-1">hsl(0, 0%, 100%)</code> - biały
                    </li>
                    <li>
                      <code className="rounded bg-black/5 px-1">hsla(217, 91%, 60%, 0.9)</code> - niebieski z 90% krycia
                    </li>
                  </ul>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Jak interpretować wyniki testu czytelności?"
          demo={
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-dark text-sm! font-medium uppercase">Współczynnik kontrastu</p>
                <p className="text-dark text-xl font-semibold">8.59:1</p>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Tekst zwykły</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (min. 4.5:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (min. 7:1)
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-2" style={{ color: 'var(--black3)', backgroundColor: 'var(--white)' }}>
                  <p className="text-sm!">Przykładowy tekst zwykły</p>
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Tekst duży</p>
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
              <strong>Tekst zwykły</strong> - wymaga kontrastu 4.5:1 (AA) lub 7:1 (AAA). Dotyczy tekstu poniżej 18pt (24px) lub poniżej 14pt pogrubionego.
            </li>
            <li>
              <strong>Tekst duży / pogrubiony</strong> - wymaga kontrastu 3:1 (AA) lub 4.5:1 (AAA). Dotyczy nagłówków, przycisków, wyróżnień.
            </li>
            <li>
              <strong>Ikona</strong> - wymaga kontrastu 3:1 (AA). Dotyczy ikon i elementów graficznych interfejsu.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Zielony znacznik</strong> oznacza spełniony wymóg. <strong>Czerwony znacznik</strong> oznacza, że kontrast jest za niski i wymaga poprawy.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają wyniki testu czytelności?">
          <p className="text-mid mb-4">
            Narzędzie pokazuje współczynnik kontrastu w skali od 1:1 (brak kontrastu) do 21:1 (maksymalny kontrast - czarny na białym). Wynik porównywany jest z progami określonymi w standardzie WCAG:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Tekst zwykły</strong> - wymaga kontrastu co najmniej 4.5:1 dla poziomu AA (standard minimalny) lub 7:1 dla poziomu AAA (standard rozszerzony). Dotyczy tekstu o rozmiarze poniżej
              18pt (24px) lub poniżej 14pt (18.5px) pogrubionego.
            </li>
            <li>
              <strong>Tekst duży / pogrubiony</strong> - wymaga kontrastu co najmniej 3:1 dla poziomu AA lub 4.5:1 dla poziomu AAA. Dotyczy tekstu od 18pt (24px) lub od 14pt (18.5px) pogrubionego -
              nagłówki, przyciski, wyróżnienia.
            </li>
            <li>
              <strong>Ikony i elementy graficzne</strong> - wymagają kontrastu co najmniej 3:1 dla poziomu AA. Dotyczy ikon, przycisków, pól formularzy i innych elementów interfejsu, które przekazują
              informację.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Poziom AA</strong> to minimum wymagane przez przepisy dotyczące dostępności cyfrowej w wielu krajach, w tym w{' '}
            <a href="https://eur-lex.europa.eu/legal-content/PL/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              dyrektywie UE o dostępności stron internetowych
            </a>
            . <strong>Poziom AAA</strong> zapewnia lepszą czytelność, ale nie zawsze jest praktyczny do osiągnięcia dla wszystkich elementów.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatyczne dopasowanie koloru do wymagań WCAG">
          <p className="text-mid mb-4">
            Jeśli kontrast jest za niski, nie trzeba szukać odpowiedniego koloru metodą prób i błędów. Funkcja <strong>Dopasuj</strong> automatycznie znajduje wariant koloru tekstu, który spełnia
            wybrany próg kontrastu.
          </p>
          <p className="text-mid mb-4">Jak działa dopasowanie:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Wybierz cel dopasowania z listy - np. AA dla tekstu zwykłego lub AAA dla tekstu dużego.</li>
            <li>Uruchom funkcję przyciskiem Dopasuj.</li>
            <li>Narzędzie przeszuka warianty jasności koloru tekstu i zaproponuje najbliższy spełniający wymagania.</li>
            <li>Zaproponowany kolor można skopiować do schowka lub od razu ustawić jako nowy kolor tekstu.</li>
          </ol>
          <p className="text-mid mt-3">
            Algorytm zachowuje odcień i nasycenie oryginalnego koloru, zmieniając wyłącznie jasność. Proponowana barwa pozostaje więc spójna z identyfikacją wizualną, a jednocześnie spełnia standard
            dostępności.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="Co oznaczają poziomy AA i AAA w standardzie WCAG?"
          plans={[
            { id: 'aa', name: 'Poziom AA (minimalny)', highlighted: true },
            { id: 'aaa', name: 'Poziom AAA (rozszerzony)' },
          ]}
          features={[
            { name: 'Tekst zwykły - min. 4.5:1', values: { aa: true, aaa: true } },
            { name: 'Tekst zwykły - min. 7:1', values: { aa: false, aaa: true } },
            { name: 'Tekst duży / pogrubiony - min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Tekst duży / pogrubiony - min. 4.5:1', values: { aa: false, aaa: true } },
            { name: 'Ikony i elementy interfejsu - min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Wymagany prawnie (dyrektywa UE)', values: { aa: true, aaa: false } },
            { name: 'Zalecany dla kluczowych treści', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Rozwiązywanie problemów z testerem kontrastu kolorów">
          <h3 className="h5 mb-2">Widzę komunikat o błędzie formatu koloru</h3>
          <p className="text-mid mb-4">
            Sprawdź format koloru. Kod HEX powinien zaczynać się od <code className="rounded bg-black/5 px-1">#</code> i zawierać 3 lub 6 znaków (np.{' '}
            <code className="rounded bg-black/5 px-1">#fff</code> lub <code className="rounded bg-black/5 px-1">#ffffff</code>). Dla formatu RGB sprawdź, czy wartości są oddzielone przecinkami i
            mieszczą się w zakresie 0-255.
          </p>

          <h3 className="h5 mb-2">Funkcja Dopasuj nie znajduje odpowiedniego koloru</h3>
          <p className="text-mid mb-4">
            Gdy tło i tekst mają zbliżoną jasność w tym samym odcieniu, algorytm może nie znaleźć wariantu spełniającego wymagania bez zmiany odcienia. W takim przypadku rozważ zmianę koloru tła lub
            wybór zupełnie innego koloru tekstu.
          </p>

          <h3 className="h5 mb-2">Kolor w próbniku nie odpowiada wpisanemu kodowi</h3>
          <p className="text-mid">
            Próbnik kolorów w przeglądarce obsługuje tylko format HEX bez przezroczystości. Jeśli wpiszesz kolor w formacie RGBA lub HSLA z przezroczystością, próbnik pokaże tylko część kolorową (bez
            alpha). Obliczenia kontrastu nadal uwzględniają przezroczystość.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Gdzie warto sprawdzać czytelność kolorów?"
          description="Czytelność ma znaczenie wszędzie tam, gdzie ktoś musi przeczytać tekst lub rozpoznać element interfejsu:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Strony internetowe',
              description: 'Tekst na stronach, przyciski, linki, formularze. Szczególnie ważne dla stron firmowych, gdzie odwiedzający mają różny wiek i różne możliwości wzrokowe.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Sklepy internetowe',
              description: 'Ceny, przyciski Kup teraz, informacje o produkcie. Niska czytelność może oznaczać utracone zamówienia.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Prezentacje',
              description: 'Slajdy wyświetlane z projektora często mają słabszy kontrast niż na monitorze. Warto sprawdzić kolory przed prezentacją.',
            },
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Plakaty i ulotki',
              description: 'Materiały drukowane oglądane w różnych warunkach oświetleniowych wymagają wysokiego kontrastu.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Aplikacje mobilne',
              description: 'Telefony są używane w pełnym słońcu, w nocy, przez osoby w różnym wieku.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menu restauracji',
              description: 'Często drukowane na kolorowym papierze lub z ozdobnymi czcionkami - łatwo o zbyt niski kontrast.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Czytelność kolorów dla osób z daltonizmem">
          <p className="text-mid mb-4">
            Daltonizm (ślepota barw) to zaburzenie widzenia kolorów, które dotyczy około 8% mężczyzn i 0,5% kobiet. Osoby z daltonizmem mogą mieć trudności z rozróżnieniem niektórych par kolorów,
            nawet jeśli kontrast jasności jest wystarczający.
          </p>
          <p className="text-mid mb-4">Najczęstsze typy daltonizmu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deuteranopia</strong> - trudności z rozróżnieniem zieleni i czerwieni (najczęstsza forma)
            </li>
            <li>
              <strong>Protanopia</strong> - trudności z widzeniem czerwieni
            </li>
            <li>
              <strong>Tritanopia</strong> - trudności z widzeniem niebieskiego i żółtego (rzadka)
            </li>
          </ul>
          <p className="text-mid mt-3">
            To narzędzie sprawdza kontrast jasności, który jest ważny dla wszystkich użytkowników. Jednak przy projektowaniu warto dodatkowo unikać problematycznych kombinacji kolorów (np. czerwony
            tekst na zielonym tle) i nie polegać wyłącznie na kolorze do przekazywania informacji - używaj też kształtów, ikon, tekstu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia tester kontrastu i czytelności kolorów?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Obiektywna ocena oparta na wzorze matematycznym',
              description: 'Współczynnik kontrastu obliczany jest według wzoru z wytycznych WCAG - wynik nie zależy od ustawień monitora ani indywidualnego postrzegania barw.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Zgodność z międzynarodowym standardem WCAG',
              description: 'Wyniki odpowiadają wymaganiom WCAG 2.1, które są podstawą przepisów o dostępności cyfrowej w Unii Europejskiej i wielu innych krajach.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Automatyczne dopasowanie koloru do progu',
              description: 'Funkcja Dopasuj znajduje wariant koloru tekstu spełniający wybrany próg kontrastu - zachowuje odcień, zmienia tylko jasność.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Pięć formatów kolorów',
              description: 'Obsługiwane formaty: HEX, RGB, RGBA, HSL i HSLA. Kod koloru można wkleić bezpośrednio z Figmy, Photoshopa lub arkusza stylów CSS.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Trzy typy treści w jednym teście',
              description: 'Jedno sprawdzenie pokazuje wynik dla tekstu zwykłego, tekstu dużego (nagłówki, przyciski) i ikon - nie trzeba testować każdego typu osobno.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Podgląd tekstu na żywo',
              description: 'Zmiana koloru tekstu lub tła natychmiast aktualizuje podgląd - widać, jak tekst wygląda na wybranym tle, jeszcze przed wdrożeniem.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow')}
          title="Najczęstsze pytania dotyczące testera kontrastu i czytelności kolorów"
          openByDefault={1}
          items={[
            {
              question: 'Co to jest współczynnik kontrastu kolorów?',
              answer:
                'Współczynnik kontrastu to miara różnicy jasności między dwoma kolorami. Skala rozciąga się od 1:1 (brak różnicy - np. biały tekst na białym tle) do 21:1 (maksymalna różnica - czarny tekst na białym tle). Im wyższy współczynnik, tym łatwiej odróżnić tekst od tła.',
            },
            {
              question: 'Jaki kontrast kolorów jest wystarczający według WCAG?',
              answer:
                'Dla tekstu zwykłego minimum to 4.5:1 (poziom AA). Dla tekstu dużego - nagłówków od 18pt lub pogrubionego od 14pt - wystarczy 3:1. Dla ikon i elementów interfejsu również 3:1. Te progi zapewniają czytelność dla większości użytkowników, w tym osób z osłabionym wzrokiem.',
            },
            {
              question: 'Czy kontrast kolorów jest ważny dla osób z daltonizmem?',
              answer:
                'Tester sprawdza kontrast jasności, który jest istotny dla wszystkich użytkowników, w tym osób z daltonizmem. Daltonizm to jednak zaburzenie rozróżniania barw, nie jasności - dlatego oprócz kontrastu warto unikać problematycznych par kolorów (np. czerwony tekst na zielonym tle) i nie polegać wyłącznie na kolorze do przekazywania informacji.',
            },
            {
              question: 'Dlaczego kolor nie spełnia wymagań, mimo że dobrze go widzę?',
              answer:
                'Osobiste postrzeganie koloru zależy od ustawień monitora, oświetlenia w pomieszczeniu i indywidualnych możliwości wzrokowych. Standard WCAG opiera się na obiektywnym wzorze matematycznym, który uwzględnia różne zaburzenia widzenia. Kolor czytelny na jednym ekranie może być nieczytelny na innym lub dla innej osoby.',
            },
            {
              question: 'Czy muszę spełniać poziom AAA kontrastu?',
              answer:
                'Nie zawsze. Poziom AA (4.5:1 dla tekstu zwykłego) to minimum wymagane przez przepisy o dostępności w Unii Europejskiej. Poziom AAA (7:1) zapewnia lepszą czytelność, ale jest trudniejszy do osiągnięcia. Dla kluczowych treści - np. ostrzeżeń, instrukcji bezpieczeństwa - warto celować w AAA.',
            },
            {
              question: 'Co to jest standard WCAG?',
              answer:
                'WCAG (Web Content Accessibility Guidelines) to międzynarodowe wytyczne dostępności treści internetowych, opracowane przez organizację W3C. Określają m.in. minimalne wartości kontrastu kolorów, strukturę nagłówków, obsługę z klawiatury i inne wymagania, które sprawiają, że strony są dostępne dla osób z różnymi niepełnosprawnościami.',
            },
            {
              question: 'Skąd wziąć kody kolorów ze swojej strony internetowej?',
              answer:
                'W przeglądarce (Chrome, Firefox, Edge) można otworzyć narzędzia deweloperskie (prawy przycisk myszy → Zbadaj). W zakładce Styles widoczne są kolory użyte na stronie. Alternatywnie rozszerzenia przeglądarki, np. ColorZilla, pozwalają pobrać kolor dowolnego elementu bez wchodzenia w kod.',
            },
            {
              question: 'Które pary kolorów na stronie warto sprawdzić w pierwszej kolejności?',
              answer:
                'Najważniejsze do sprawdzenia: tekst na tle głównym, tekst na banerach i sekcjach kolorowych, przyciski (kolor tekstu i tła przycisku względem tła strony), linki oraz ikony. Szczególną uwagę warto zwrócić na elementy, które pojawiają się na różnych tłach w zależności od sekcji.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne darmowe narzędzia online" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz strony zgodnej ze standardami dostępności?"
        description="Tworzymy strony internetowe z myślą o wszystkich użytkownikach - odpowiedni kontrast kolorów, czytelna typografia, logiczna struktura. Skontaktuj się z nami."
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
