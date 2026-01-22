import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
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

export const metadata: Metadata = {
  title: 'Sprawdź czytelność kolorów online | Czy tekst dobrze się czyta na tle?',
  description:
    'Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów (HEX, RGB, HSL), zobacz współczynnik kontrastu według WCAG i użyj funkcji Dopasuj do automatycznej korekty. Darmowe narzędzie online.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow') },
  openGraph: {
    title: 'Sprawdź czytelność kolorów online | Czy tekst dobrze się czyta na tle?',
    description:
      'Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów (HEX, RGB, HSL), zobacz współczynnik kontrastu według WCAG i użyj funkcji Dopasuj do automatycznej korekty. Darmowe narzędzie online.',
    url: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp') }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Sprawdź czytelność kolorów online',
  alternateName: [
    'Tester czytelności kolorów',
    'Sprawdzanie kontrastu tekstu i tła',
    'Narzędzie do sprawdzania czytelności',
    'Kalkulator kontrastu kolorów',
    'Tester kontrastu WCAG',
    'Sprawdzanie kolorów dla daltonistów',
    'Czy kolory są czytelne',
  ],
  url: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow'),
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
    'Próbnik kolorów (color picker)',
    'Podgląd tekstu na żywo',
    'Funkcja automatycznego dopasowania koloru',
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

export default function Page() {
  return (
    <>
      <Script id="ld-json-contrast-checker" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Sprawdź czy Twoje kolory są czytelne"
        description="Wpisz kolor tekstu i tła, a narzędzie pokaże, czy kontrast jest wystarczający. Obliczenia opierają się na międzynarodowym standardzie dostępności WCAG 2.1, który określa minimalne wartości kontrastu dla różnych typów treści."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/sprawdz-czytelnosc-kolorow', label: 'Sprawdź czytelność kolorów' }}
        includeJsonLd
      />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />
        
        <WcagContrastChecker />

        <Gap variant="line" />

        <SectionInfo title="Dlaczego czytelność kolorów ma znaczenie?">
          <p className="text-mid">
            Czytelność to różnica jasności między kolorem tekstu a kolorem tła. Im większa ta różnica, tym łatwiej odczytać tekst. Zbyt niski kontrast sprawia, że treść staje się trudna do przeczytania
            — szczególnie dla osób z wadami wzroku, osób starszych lub w trudnych warunkach oświetleniowych (np. na telefonie w pełnym słońcu).
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
            — międzynarodowych wytycznych dostępności cyfrowej. Dzięki temu wiesz obiektywnie, czy kolory są wystarczająco czytelne, niezależnie od tego jak Ty sam je widzisz na swoim monitorze.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak sprawdzić czytelność kolorów?"
          description="Sprawdzenie zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wpisz kolor tekstu',
              description: 'Podaj kolor tekstu jako HEX (np. #333333), RGB lub HSL. Możesz też wybrać kolor z próbnika.',
            },
            {
              title: '2. Wpisz kolor tła',
              description: 'Podaj kolor tła, na którym będzie wyświetlany tekst.',
            },
            {
              title: '3. Sprawdź wynik',
              description: 'Zobacz współczynnik kontrastu i czy spełniasz wymagania dla tekstu zwykłego, dużego i ikon.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/sprawdz-czytelnosc-kolorow/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają wyniki testu czytelności?">
          <p className="text-mid mb-4">Narzędzie pokazuje współczynnik kontrastu w skali od 1:1 (brak kontrastu) do 21:1 (maksymalny kontrast — czarny na białym). Wynik porównywany jest z progami określonymi w standardzie WCAG:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Tekst zwykły</strong> — wymaga kontrastu co najmniej 4.5:1 dla poziomu AA (standard minimalny) lub 7:1 dla poziomu AAA (standard rozszerzony). Dotyczy tekstu o rozmiarze poniżej
              18pt (24px) lub poniżej 14pt (18.5px) pogrubionego.
            </li>
            <li>
              <strong>Tekst duży / pogrubiony</strong> — wymaga kontrastu co najmniej 3:1 dla poziomu AA lub 4.5:1 dla poziomu AAA. Dotyczy tekstu od 18pt (24px) lub od 14pt (18.5px) pogrubionego —
              nagłówki, przyciski, wyróżnienia.
            </li>
            <li>
              <strong>Ikony i elementy graficzne</strong> — wymagają kontrastu co najmniej 3:1 dla poziomu AA. Dotyczy ikon, przycisków, pól formularzy i innych elementów interfejsu, które przekazują
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

        <SectionInfo title="Funkcja Dopasuj — automatyczna korekta koloru">
          <p className="text-mid mb-4">
            Jeśli kontrast jest za niski, nie musisz szukać odpowiedniego koloru metodą prób i błędów. Funkcja <strong>Dopasuj</strong> automatycznie znajdzie wariant koloru tekstu, który spełni wybrany
            próg kontrastu.
          </p>
          <p className="text-mid mb-4">Jak to działa:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Wybierz cel dopasowania z listy (np. AA dla tekstu zwykłego, AAA dla tekstu dużego).</li>
            <li>Kliknij przycisk Dopasuj.</li>
            <li>Narzędzie przeszuka warianty jasności koloru tekstu i zaproponuje najbliższy, który spełnia wymagania.</li>
            <li>Możesz skopiować zaproponowany kolor lub od razu ustawić go jako nowy kolor tekstu.</li>
          </ol>
          <p className="text-mid mt-3">
            Algorytm zachowuje odcień i nasycenie oryginalnego koloru, zmieniając tylko jasność. Dzięki temu proponowany kolor pozostaje spójny z identyfikacją wizualną, ale jest już zgodny ze standardem
            dostępności.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Gdzie warto sprawdzać czytelność kolorów?">
          <p className="text-mid mb-4">Czytelność ma znaczenie wszędzie tam, gdzie ktoś musi przeczytać tekst lub rozpoznać element interfejsu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Strony internetowe</strong> — tekst na stronach, przyciski, linki, formularze. Szczególnie ważne dla{' '}
              <Link href="/uslugi/strony-internetowe" className="inline-link">
                stron firmowych
              </Link>
              , gdzie odwiedzający mają różny wiek i różne możliwości wzrokowe.
            </li>
            <li>
              <strong>Sklepy internetowe</strong> — ceny, przyciski Kup teraz, informacje o produkcie. Niska czytelność może oznaczać utracone zamówienia.
            </li>
            <li>
              <strong>Prezentacje</strong> — slajdy wyświetlane z projektora często mają słabszy kontrast niż na monitorze. Warto sprawdzić kolory przed prezentacją.
            </li>
            <li>
              <strong>Plakaty i ulotki</strong> — materiały drukowane oglądane w różnych warunkach oświetleniowych wymagają wysokiego kontrastu.
            </li>
            <li>
              <strong>Aplikacje mobilne</strong> — telefony są używane w pełnym słońcu, w nocy, przez osoby w różnym wieku.
            </li>
            <li>
              <strong>Menu restauracji</strong> — często drukowane na kolorowym papierze lub z ozdobnymi czcionkami — łatwo o zbyt niski kontrast.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Czytelność kolorów dla osób z daltonizmem">
          <p className="text-mid mb-4">
            Daltonizm (ślepota barw) to zaburzenie widzenia kolorów, które dotyczy około 8% mężczyzn i 0,5% kobiet. Osoby z daltonizmem mogą mieć trudności z rozróżnieniem niektórych par kolorów, nawet
            jeśli kontrast jasności jest wystarczający.
          </p>
          <p className="text-mid mb-4">Najczęstsze typy daltonizmu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deuteranopia</strong> — trudności z rozróżnieniem zieleni i czerwieni (najczęstsza forma)
            </li>
            <li>
              <strong>Protanopia</strong> — trudności z widzeniem czerwieni
            </li>
            <li>
              <strong>Tritanopia</strong> — trudności z widzeniem niebieskiego i żółtego (rzadka)
            </li>
          </ul>
          <p className="text-mid mt-3">
            To narzędzie sprawdza kontrast jasności, który jest ważny dla wszystkich użytkowników. Jednak przy projektowaniu warto dodatkowo unikać problematycznych kombinacji kolorów (np. czerwony tekst
            na zielonym tle) i nie polegać wyłącznie na kolorze do przekazywania informacji — używaj też kształtów, ikon, tekstu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego warto korzystać z tego narzędzia?">
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Obiektywna ocena</strong> — narzędzie oblicza kontrast według wzoru matematycznego, niezależnie od ustawień monitora czy indywidualnego postrzegania kolorów.
            </li>
            <li>
              <strong>Zgodność ze standardem WCAG</strong> — wyniki są zgodne z międzynarodowymi wytycznymi dostępności, które są podstawą przepisów w wielu krajach.
            </li>
            <li>
              <strong>Funkcja automatycznego dopasowania</strong> — nie musisz zgadywać, jaki kolor będzie odpowiedni. Narzędzie znajdzie go za Ciebie.
            </li>
            <li>
              <strong>Obsługa wielu formatów</strong> — HEX, RGB, RGBA, HSL, HSLA — wklej kolor bezpośrednio z programu graficznego.
            </li>
            <li>
              <strong>Podgląd na żywo</strong> — widzisz efekt natychmiast, bez klikania przycisku Sprawdź.
            </li>
            <li>
              <strong>Darmowe, bez logowania</strong> — korzystasz od razu, bez rejestracji i bez limitu sprawdzeń.
            </li>
            <li>
              <strong>Polski interfejs</strong> — wszystkie etykiety i komunikaty po polsku.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow')}
          title="Najczęstsze pytania o czytelność kolorów"
          items={[
            {
              question: 'Jak sprawdzić czy moje kolory są czytelne?',
              answer:
                'Wpisz kolor tekstu i kolor tła w narzędziu powyżej. Narzędzie obliczy współczynnik kontrastu i pokaże, czy spełniasz wymagania dla tekstu zwykłego (4.5:1), tekstu dużego (3:1) i ikon (3:1). Zielony badge oznacza spełniony wymóg, czerwony — wymaga poprawy.',
            },
            {
              question: 'Co to jest współczynnik kontrastu?',
              answer:
                'Współczynnik kontrastu (contrast ratio) to miara różnicy jasności między dwoma kolorami. Skala idzie od 1:1 (brak różnicy — np. biały na białym) do 21:1 (maksymalna różnica — czarny na białym). Im wyższy współczynnik, tym łatwiej odróżnić tekst od tła.',
            },
            {
              question: 'Jaki kontrast jest wystarczający?',
              answer:
                'Dla zwykłego tekstu minimum to 4.5:1 (poziom AA według WCAG). Dla dużego tekstu (nagłówki, przyciski) wystarczy 3:1. Dla ikon i elementów graficznych również 3:1. Te wartości zapewniają czytelność dla większości użytkowników, w tym osób z osłabionym wzrokiem.',
            },
            {
              question: 'Czy moje kolory są dobre dla daltonistów?',
              answer:
                'To narzędzie sprawdza kontrast jasności, który jest ważny dla wszystkich użytkowników, w tym osób z daltonizmem. Jednak daltonizm to zaburzenie rozróżniania kolorów, nie jasności. Dlatego oprócz kontrastu warto unikać problematycznych par (np. czerwony-zielony) i nie polegać wyłącznie na kolorze do przekazywania informacji.',
            },
            {
              question: 'Co zrobić, gdy kontrast jest za niski?',
              answer:
                'Użyj funkcji Dopasuj — narzędzie automatycznie znajdzie wariant koloru tekstu, który spełni wybrany próg kontrastu. Możesz też ręcznie zwiększyć różnicę jasności między kolorami: rozjaśnić tło lub przyciemnić tekst (lub odwrotnie).',
            },
            {
              question: 'Dlaczego mój kolor nie spełnia wymagań, mimo że dobrze go widzę?',
              answer:
                'Osobiste postrzeganie koloru zależy od wielu czynników: ustawień monitora, oświetlenia w pomieszczeniu, indywidualnych możliwości wzrokowych. Standard WCAG opiera się na obiektywnym wzorze matematycznym, który uwzględnia różne zaburzenia widzenia. To, co dla Ciebie jest czytelne, może być nieczytelne dla innych użytkowników.',
            },
            {
              question: 'Czy muszę spełniać poziom AAA?',
              answer:
                'Nie zawsze. Poziom AA (4.5:1 dla tekstu zwykłego) to minimum wymagane przez większość przepisów dotyczących dostępności. Poziom AAA (7:1) zapewnia lepszą czytelność, ale jest trudniejszy do osiągnięcia i nie jest wymagany prawnie. Dla kluczowych treści (np. ostrzeżenia, instrukcje bezpieczeństwa) warto celować w AAA.',
            },
            {
              question: 'Co to jest WCAG?',
              answer:
                'WCAG (Web Content Accessibility Guidelines) to międzynarodowe wytyczne dostępności treści internetowych, opracowane przez organizację W3C. Określają m.in. minimalne wartości kontrastu kolorów, strukturę nagłówków, obsługę z klawiatury i inne wymagania, które sprawiają, że strony są dostępne dla osób z różnymi niepełnosprawnościami.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne darmowe narzędzia online" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz strony zgodnej ze standardami dostępności?"
        description="Tworzymy strony internetowe z myślą o wszystkich użytkownikach — odpowiedni kontrast kolorów, czytelna typografia, logiczna struktura. Skontaktuj się z nami."
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
