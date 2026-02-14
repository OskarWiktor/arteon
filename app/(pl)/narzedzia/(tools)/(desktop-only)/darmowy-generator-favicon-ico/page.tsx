import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import AdSense from '@/components/ui/AdSense';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import {
  RiShieldCheckLine,
  RiDownloadLine,
  RiImageLine,
  RiSmartphoneLine,
  RiUploadLine,
  RiLayoutGridLine,
  RiSettings3Line,
  RiFolderZipLine,
  RiFileDownloadLine,
  RiWordpressLine,
  RiHtml5Line,
  RiReactjsLine,
  RiShapeLine,
  RiAspectRatioLine,
  RiZoomInLine,
  RiContrastLine,
} from 'react-icons/ri';

const LOCALE = 'pl' as const;
const TOOL_KEY = 'favicon' as const;

export const metadata: Metadata = {
  title: 'Generator favicon online | Stwórz ikonę strony za darmo',
  description: 'Darmowy generator favicon online. Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Przetwarzanie odbywa się lokalnie w przeglądarce.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Generator favicon online | Stwórz ikonę strony za darmo',
    description: 'Darmowy generator favicon online. Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Przetwarzanie odbywa się lokalnie w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator favicon online - darmowy kreator ikon dla strony',
  alternateName: 'Generator favicon.ico i ikon PNG',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'IconGenerator',
  operatingSystem: 'Any',
  description:
    'Darmowy generator favicon online po polsku. Twórz favicon.ico oraz ikony PNG 16x16, 32x32, 180x180, 192x192 i 512x512 bez limitów i bez wysyłania plików na serwer. Przetwarzanie odbywa się lokalnie w przeglądarce.',
  featureList: [
    'Generowanie favicon.ico (16x16, 32x32, 48x48 w jednym pliku)',
    'Generowanie ikon PNG 16x16 i 32x32',
    'Generowanie apple-touch-icon 180x180',
    'Generowanie ikon PWA 192x192 i 512x512',
    'Obsługa obrazów PNG, JPG i SVG jako źródło',
    'Konfiguracja koloru tła',
    'Generowanie pliku manifest.json dla PWA',
    'Pobieranie wszystkich plików jako ZIP',
    'Pobieranie pojedynczych plików',
    'Zgodność z wymaganiami Lighthouse',
    'Przetwarzanie w przeglądarce (pliki nie są wysyłane na serwer)',
    'Darmowe narzędzie bez logowania',
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
  name: 'Jak stworzyć favicon dla strony internetowej',
  description: 'Jak wygenerować favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Jakie rozmiary są potrzebne i jak wgrać favicon do WordPress, HTML i Next.js.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj obraz źródłowy',
      text: 'Przeciągnij plik na wyznaczone pole lub wybierz grafikę z dysku. Najlepiej sprawdza się proste logo lub ikona w formacie PNG, JPG lub SVG.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz rozmiary ikon',
      text: 'Zaznacz, które rozmiary ikon potrzebujesz: favicon.ico (32x32), ikony PNG (16x16, 32x32, 180x180, 192x192, 512x512).',
    },
    {
      '@type': 'HowToStep',
      name: 'Skonfiguruj opcje',
      text: 'Ustaw kolor tła (lub pozostaw przezroczyste), zdecyduj czy chcesz wygenerować plik manifest i czy pliki mają się pobrać automatycznie.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wygeneruj i pobierz pliki',
      text: 'Po wygenerowaniu pliki można pobrać jako archiwum ZIP lub każdą ikonę pojedynczo.',
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
    question: 'Jaki rozmiar powinien mieć obraz źródłowy do generowania favicon?',
    answer:
      'Zalecany rozmiar to co najmniej 512×512 pikseli w formacie kwadratowym (1:1). Przy takim źródle ikony we wszystkich rozmiarach będą ostre i czytelne. Jeśli masz logo w formacie SVG - użyj go, bo grafika wektorowa skaluje się bez utraty jakości.',
  },
  {
    question: 'Czy mogę wygenerować tylko favicon.ico bez pozostałych ikon?',
    answer: 'Tak. Przed wygenerowaniem można wybrać dokładnie te rozmiary, które są potrzebne - np. tylko favicon.ico lub tylko wybrane rozmiary PNG.',
  },
  {
    question: 'Jakie formaty obrazów obsługuje generator favicon?',
    answer: 'Generator przyjmuje obrazy w formatach PNG, JPG i SVG. Jako wynik generuje plik favicon.ico oraz ikony PNG w wybranych rozmiarach, gotowe do wgrania na stronę.',
  },
  {
    question: 'Czy favicon wpływa na pozycję strony w Google?',
    answer:
      'Bezpośrednio nie - favicon nie jest czynnikiem rankingowym. Pośrednio wpływa jednak na rozpoznawalność marki: strona z profesjonalną ikoną jest łatwiej identyfikowalna wśród wielu otwartych kart, co może przełożyć się na wyższy współczynnik klikalności w wynikach wyszukiwania.',
  },
  {
    question: 'Które rozmiary ikon są niezbędne dla zwykłej strony internetowej?',
    answer:
      'Dla typowej strony wystarczą trzy pliki: favicon.ico (32×32), ikona PNG 32×32 i apple-touch-icon 180×180. Jeśli strona ma działać jako aplikacja webowa (PWA), potrzebne są dodatkowo ikony 192×192 i 512×512 oraz plik manifest.',
  },
  {
    question: 'Czym jest plik site.webmanifest i kiedy jest potrzebny?',
    answer:
      'To plik konfiguracyjny dla aplikacji webowych (PWA), który zawiera informacje o ikonie, nazwie i kolorach aplikacji. Jest wymagany, gdy strona ma działać jako aplikacja dodawana do ekranu głównego telefonu. Dla zwykłych stron internetowych nie jest konieczny.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-favicon-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-favicon-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Stwórz favicon online - darmowy generator ikon"
        description="Wygeneruj favicon.ico i kompletny zestaw ikon PNG dla swojej strony z jednego obrazu. Całe przetwarzanie odbywa się lokalnie w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/darmowy-generator-favicon-ico`, label: 'Generator favicon' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Co to jest favicon i dlaczego warto go mieć?">
          <p className="text-mid mb-4">
            Favicon to mała ikona, która pojawia się na karcie przeglądarki obok tytułu strony. Widzisz ją też w zakładkach, historii przeglądania i na ekranie głównym telefonu, gdy ktoś doda stronę
            jako skrót.
          </p>
          <p className="text-mid mb-4">
            Ta niepozorna grafika pełni ważną funkcję - pomaga użytkownikom szybko rozpoznać stronę wśród wielu otwartych kart. Gdy ktoś ma kilkanaście kart w przeglądarce, favicon jest często jedynym
            widocznym elementem identyfikującym stronę.
          </p>
          <p className="text-mid">
            Generator tworzy kompletny zestaw ikon: klasyczny plik favicon.ico dla przeglądarek, ikony PNG w różnych rozmiarach oraz apple-touch-icon dla urządzeń Apple. Jeśli tworzysz aplikację
            webową (PWA), możesz też wygenerować ikony 192x192 i 512x512 wraz z plikiem manifest.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Jak stworzyć favicon w 3 krokach"
          description="Generowanie favicon zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij plik na wyznaczone pole lub wybierz grafikę z dysku. Obsługiwane formaty: PNG, JPG, SVG. Zalecany rozmiar: min. 512x512 pikseli.',
            },
            {
              title: '2. Wybierz rozmiary',
              description: 'Zaznacz potrzebne rozmiary ikon. Dla zwykłej strony wystarczą: favicon.ico, 32x32 i 180x180. Dla PWA dodaj też 192x192 i 512x512.',
            },
            {
              title: '3. Pobierz pliki',
              description: 'Po wygenerowaniu pobierz wszystkie pliki jako ZIP lub każdą ikonę osobno. Poniżej narzędzia znajdziesz instrukcję, jak wgrać favicon na stronę.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jakie rozmiary ikon generuje narzędzie?">
          <p className="text-mid mb-6">Każdy rozmiar ma swoje zastosowanie:</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">favicon.ico (32x32)</p>
              <p className="text-mid text-sm">Klasyczny format rozpoznawany przez wszystkie przeglądarki. Wyświetla się na karcie przeglądarki.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">16x16 i 32x32 PNG</p>
              <p className="text-mid text-sm">Standardowe rozmiary dla nowoczesnych przeglądarek. Wyświetlają się na kartach i w zakładkach.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">180x180 PNG (apple-touch-icon)</p>
              <p className="text-mid text-sm">Ikona dla urządzeń Apple (iPhone, iPad). Wyświetla się, gdy ktoś doda stronę do ekranu głównego.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">192x192 i 512x512 PNG</p>
              <p className="text-mid text-sm">Ikony dla aplikacji webowych (PWA). Wymagane przez manifest i używane w sklepach z aplikacjami.</p>
            </div>
          </div>
          <p className="text-light mt-6">Jeśli nie tworzysz PWA, wystarczą Ci: favicon.ico, 32x32 PNG i 180x180 PNG. Te trzy pliki pokryją większość przypadków użycia.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia generator favicon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Prywatność - pliki nie opuszczają komputera',
              description: 'Wszystkie operacje wykonywane są lokalnie w przeglądarce. Obraz nie jest wysyłany na żaden serwer. Po zamknięciu strony nic nie zostaje.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Kompletny zestaw w jednym miejscu',
              description: 'Favicon.ico, ikony PNG, apple-touch-icon, ikony PWA i manifest - wszystko z jednego obrazu, w jednym narzędziu.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Obsługa PNG, JPG i SVG',
              description: 'Możesz użyć logo w dowolnym formacie. Jeśli masz SVG - ikony będą ostre we wszystkich rozmiarach.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Gotowe do użycia na stronie i w PWA',
              description: 'Narzędzie generuje plik manifest.json dla aplikacji webowych. Poniżej znajdziesz instrukcję wgrania ikon na stronę.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak korzystać z generatora favicon?"
          description="Generowanie favicon to kilka prostych kroków:"
          grid="two"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Dodaj obraz źródłowy',
              description: (
                <div>
                  <p className="mb-2">Przeciągnij plik na wyznaczone pole lub wybierz grafikę z dysku.</p>
                  <p className="text-light">Obsługiwane formaty: PNG, JPG, SVG. Najlepiej sprawdza się proste logo lub ikona o wymiarach co najmniej 512x512 pikseli.</p>
                </div>
              ),
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: '2. Wybierz rozmiary ikon',
              description: (
                <div>
                  <p className="mb-2">Zaznacz, które rozmiary ikon potrzebujesz.</p>
                  <p className="text-light">Możesz wybrać wszystkie lub tylko niektóre. Dla zwykłej strony wystarczą: favicon.ico, 32x32 i 180x180.</p>
                </div>
              ),
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '3. Skonfiguruj opcje generowania',
              description: (
                <div>
                  <p className="mb-2">Ustaw dodatkowe opcje:</p>
                  <ul className="text-light list-disc pl-5">
                    <li>
                      <strong>Tło</strong> - przezroczyste lub wybrany kolor
                    </li>
                    <li>
                      <strong>Manifest</strong> - plik konfiguracyjny dla PWA
                    </li>
                    <li>
                      <strong>Automatyczne pobieranie</strong> - pliki pobiorą się od razu po wygenerowaniu
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Wygeneruj i pobierz pliki',
              description: (
                <div>
                  <p className="mb-2">Po uruchomieniu generowania narzędzie przetworzy obraz lokalnie - nic nie jest wysyłane na serwer.</p>
                  <p className="text-light">Pobierz wszystkie pliki jako archiwum ZIP lub pobierz pojedyncze ikony osobno.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Opcje generowania - co robi każda z nich?"
          demo={
            <div className="tool-section space-y-4">
              <div className="tool-info-box">
                <p className="text-light mb-2! text-sm! font-medium tracking-wide uppercase">Rozmiary PNG</p>
                <div className="flex flex-wrap gap-2">
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    16x16
                  </Badge>
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    32x32
                  </Badge>
                  <Badge as="label" variant="default" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    180x180
                  </Badge>
                </div>
              </div>
              <div className="tool-info-box flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span className="text-mid text-sm!">Przezroczyste tło (PNG/ICO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-light text-sm">Kolor tła:</span>
                  <input type="color" defaultValue="#ffffff" disabled className="h-8! w-7! cursor-pointer border-none bg-white p-0!" />
                </div>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <h3 className="h5 mb-2">Tło (przezroczyste lub kolor)</h3>
              <p className="text-mid">Domyślnie generator zachowuje przezroczystość. Możesz też wybrać konkretny kolor tła.</p>
            </div>
            <div>
              <h3 className="h5 mb-2">Generuj manifest (site.webmanifest)</h3>
              <p className="text-mid">Plik JSON dla aplikacji webowych (PWA). Jeśli nie tworzysz PWA, ta opcja nie jest wymagana.</p>
            </div>
          </div>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak pobrać wygenerowane pliki?"
          description="Po wygenerowaniu ikon masz kilka opcji pobierania:"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Pobierz wszystko jako ZIP',
              description: <p>Przycisk „Pobierz wszystko” pakuje wszystkie wygenerowane pliki do jednego archiwum ZIP. To najwygodniejsza opcja, gdy potrzebujesz pełnego zestawu ikon.</p>,
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Pobierz pojedyncze pliki',
              description: (
                <p>
                  Każda wygenerowana ikona ma własny przycisk pobierania - można pobrać pojedynczy plik bez konieczności pobierania całego zestawu. Przydatne, gdy potrzebna jest aktualizacja tylko
                  jednego rozmiaru.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Gdzie i jak wgrać favicon?"
          tabs={[
            {
              title: 'WordPress',
              icon: <RiWordpressLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Większość motywów WordPress ma wbudowaną opcję ustawiania ikony witryny. Znajdziesz ją w panelu administracyjnym:</p>
                  <p className="text-mid mb-3">
                    <strong>Wygląd → Dostosuj → Tożsamość witryny → Ikona witryny</strong>
                  </p>
                  <p className="text-light">
                    Wgraj tam plik 512x512 - WordPress automatycznie wygeneruje mniejsze rozmiary. Jeśli chcesz mieć pełną kontrolę nad ikonami, możesz też wgrać pliki bezpośrednio do katalogu
                    głównego strony przez FTP.
                  </p>
                </div>
              ),
            },
            {
              title: 'HTML',
              icon: <RiHtml5Line className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Umieść wygenerowane pliki w katalogu głównym strony (tam, gdzie jest plik index.html). Następnie dodaj w sekcji &lt;head&gt; odpowiednie tagi:</p>
                  <pre className="bg-primary-light mb-3 overflow-x-auto rounded-lg p-4 text-sm">
                    <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
                  </pre>
                  <p className="text-light">Powyższy kod to przykład - dostosuj ścieżki do struktury swojej strony.</p>
                </div>
              ),
            },
            {
              title: 'Next.js / React',
              icon: <RiReactjsLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    W Next.js (App Router) umieść pliki favicon w katalogu <code>app/</code> lub <code>public/</code>:
                  </p>
                  <ul className="text-light mb-3 list-disc pl-5">
                    <li>
                      <code>app/favicon.ico</code> - automatycznie rozpoznawany przez Next.js
                    </li>
                    <li>
                      <code>app/apple-icon.png</code> - ikona dla Apple
                    </li>
                    <li>
                      <code>public/</code> - pozostałe ikony (192x192, 512x512)
                    </li>
                  </ul>
                  <p className="text-light">
                    Możesz też skonfigurować ikony w pliku <code>layout.tsx</code> przez obiekt <code>metadata.icons</code>.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jaki obraz źródłowy działa najlepiej?"
          description="Favicon to bardzo mała grafika - nawet 16x16 pikseli. Dlatego nie każdy obraz sprawdzi się jako źródło:"
          grid="two"
          items={[
            {
              icon: <RiShapeLine className="h-6 w-6" />,
              title: 'Proste kształty i czytelne symbole',
              description: 'Najlepiej sprawdzają się proste logotypy, pojedyncze litery lub symbole. Unikaj złożonych grafik z wieloma detalami.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Kwadratowy format',
              description: 'Favicon jest kwadratowy. Jeśli źródłowy obraz ma proporcje inne niż 1:1, zostanie przycięty lub rozciągnięty.',
            },
            {
              icon: <RiZoomInLine className="h-6 w-6" />,
              title: 'Wystarczająco duży rozmiar',
              description: 'Zalecamy obraz źródłowy o wymiarach co najmniej 512x512 pikseli. Mniejsze obrazy będą skalowane w górę.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Format SVG jako idealne źródło',
              description: 'SVG skaluje się bez utraty jakości, więc ikony we wszystkich rozmiarach będą ostre.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Kontrastowe kolory',
              description: 'Favicon musi być widoczny na różnych tłach (jasne karty, ciemny tryb). Wybierz kolory, które zachowują czytelność.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Najczęściej zadawane pytania dotyczące generatora favicon"
          items={[
            ...faqItems,
            {
              question: 'Czy favicon wyświetla się tak samo we wszystkich przeglądarkach?',
              answer:
                'Większość nowoczesnych przeglądarek (Chrome, Firefox, Edge, Safari) rozpoznaje plik favicon.ico i ikony PNG. Różnice mogą dotyczyć rozmiaru wyświetlanej ikony - Chrome preferuje PNG 32×32, a Safari na iOS korzysta z apple-touch-icon 180×180. Dlatego warto wygenerować pełny zestaw rozmiarów.',
            },
            {
              question: 'Dlaczego favicon nie zmienia się po wgraniu nowego pliku?',
              answer:
                'Przeglądarki agresywnie buforują favicon. Po wgraniu nowej ikony warto wyczyścić pamięć podręczną przeglądarki lub dodać parametr wersji do ścieżki pliku (np. /favicon.ico?v=2). Zmiana może być widoczna dopiero po kilku godzinach.',
            },
          ]}
          openByDefault={0}
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy przy tworzeniu strony?"
        description="Jeśli masz pytania dotyczące ikon, grafiki lub całej strony internetowej - skontaktuj się z nami. Zajmujemy się tworzeniem stron i identyfikacji wizualnej."
        btnOne="Skontaktuj się z nami"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę stron internetowych"
        btnTwoLink="/uslugi/strony-internetowe"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
