import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import AdSense from '@/components/ui/AdSense';
import { RiShieldCheckLine, RiDownloadLine, RiImageLine, RiSmartphoneLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Generator favicon online | Stwórz ikonę strony za darmo',
  description:
    'Darmowy generator favicon online. Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Bez rejestracji, bez wysyłania plików na serwer.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico') },
  openGraph: {
    title: 'Generator favicon online | Stwórz ikonę strony za darmo',
    description:
      'Darmowy generator favicon online. Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Bez rejestracji, bez wysyłania plików na serwer.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Generator favicon online — darmowy kreator ikon dla strony',
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
    question: 'Co to jest favicon i do czego służy?',
    answer:
      'Favicon to mała ikona wyświetlana na karcie przeglądarki obok tytułu strony. Pojawia się też w zakładkach, historii przeglądania i na ekranie głównym telefonu, gdy ktoś doda stronę jako skrót. Pomaga użytkownikom szybko rozpoznać stronę wśród wielu otwartych kart.',
  },
  {
    question: 'Czy moje pliki są bezpieczne?',
    answer:
      'Tak. Wszystkie operacje wykonywane są lokalnie w przeglądarce — obraz nie opuszcza komputera i nie jest wysyłany na żaden serwer. Po zamknięciu strony żadne dane nie są przechowywane.',
  },
  {
    question: 'Jaki rozmiar powinien mieć obraz źródłowy?',
    answer:
      'Zalecamy obraz o wymiarach co najmniej 512x512 pikseli w formacie kwadratowym (1:1). Dzięki temu ikony w największych rozmiarach będą ostre. Jeśli masz logo w formacie SVG — użyj go, bo grafika wektorowa skaluje się bez utraty jakości.',
  },
  {
    question: 'Czy mogę wygenerować tylko favicon.ico bez innych ikon?',
    answer:
      'Tak. Przed wygenerowaniem możesz wybrać dokładnie te rozmiary, których potrzebujesz. Możesz wygenerować tylko favicon.ico lub tylko wybrane rozmiary PNG.',
  },
  {
    question: 'Jakie formaty plików obsługuje generator?',
    answer: 'Generator przyjmuje obrazy w formatach PNG, JPG i SVG. Jako wynik otrzymujesz plik favicon.ico oraz ikony PNG w wybranych rozmiarach.',
  },
  {
    question: 'Czy favicon wpływa na SEO?',
    answer:
      'Bezpośrednio nie — favicon nie jest czynnikiem rankingowym Google. Pośrednio jednak wpływa na rozpoznawalność marki i zaufanie użytkowników. Strony z profesjonalnym favicon wyglądają bardziej wiarygodnie, co może zwiększyć współczynnik klikalności w wynikach wyszukiwania.',
  },
  {
    question: 'Czy potrzebuję wszystkich rozmiarów ikon?',
    answer:
      'Dla zwykłej strony internetowej wystarczą: favicon.ico, ikona 32x32 PNG i apple-touch-icon 180x180. Jeśli tworzysz aplikację webową (PWA), potrzebujesz dodatkowo ikon 192x192 i 512x512 oraz pliku manifest.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-favicon-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Stwórz favicon online — darmowy generator ikon"
        description="Wygeneruj favicon.ico i kompletny zestaw ikon PNG dla swojej strony. Bez rejestracji, bez wysyłania plików — wszystko dzieje się w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/darmowy-generator-favicon-ico`, label: 'Generator favicon' }} includeJsonLd />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <FaviconGenerator />

        <Gap variant="line" />

        <SectionInfo title="Co to jest favicon i dlaczego warto go mieć?">
          <p className="mb-4">
            Favicon to mała ikona, która pojawia się na karcie przeglądarki obok tytułu strony. Widzisz ją też w zakładkach, historii przeglądania i na ekranie głównym telefonu, gdy ktoś doda stronę
            jako skrót.
          </p>
          <p className="mb-4">
            Ta niepozorna grafika pełni ważną funkcję — pomaga użytkownikom szybko rozpoznać stronę wśród wielu otwartych kart. Gdy ktoś ma kilkanaście kart w przeglądarce, favicon jest często jedynym
            widocznym elementem identyfikującym stronę.
          </p>
          <p>
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
              description: 'Przeciągnij plik na pole lub kliknij, żeby wybrać grafikę z dysku. Obsługiwane formaty: PNG, JPG, SVG. Zalecany rozmiar: min. 512x512 pikseli.',
            },
            {
              title: '2. Wybierz rozmiary',
              description: 'Zaznacz potrzebne rozmiary ikon. Dla zwykłej strony wystarczą: favicon.ico, 32x32 i 180x180. Dla PWA dodaj też 192x192 i 512x512.',
            },
            {
              title: '3. Pobierz pliki',
              description: 'Kliknij „Generuj favicon" i pobierz wszystkie pliki jako ZIP lub każdą ikonę osobno. Generator podpowie też kod HTML do wklejenia na stronę.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-favicon-ico/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Jakie rozmiary ikon generuje narzędzie?">
          <p className="mb-6">Każdy rozmiar ma swoje zastosowanie:</p>
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
          <p className="text-light mt-6">
            Jeśli nie tworzysz PWA, wystarczą Ci: favicon.ico, 32x32 PNG i 180x180 PNG. Te trzy pliki pokryją większość przypadków użycia.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dlaczego warto używać tego generatora?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Prywatność — pliki nie opuszczają komputera',
              description: 'Wszystkie operacje wykonywane są lokalnie w przeglądarce. Obraz nie jest wysyłany na żaden serwer. Po zamknięciu strony nic nie zostaje.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Kompletny zestaw w jednym miejscu',
              description: 'Favicon.ico, ikony PNG, apple-touch-icon, ikony PWA i manifest — wszystko z jednego obrazu, w jednym narzędziu.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Obsługa PNG, JPG i SVG',
              description: 'Możesz użyć logo w dowolnym formacie. Jeśli masz SVG — ikony będą ostre we wszystkich rozmiarach.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Gotowe do użycia na stronie i w PWA',
              description: 'Generator podpowiada kod HTML do wklejenia i generuje plik manifest.json dla aplikacji webowych.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Gdzie wgrać wygenerowane pliki?">
          <div className="space-y-4">
            <div>
              <p className="mb-1 font-semibold">WordPress</p>
              <p className="text-mid">
                Panel administracyjny → Wygląd → Dostosuj → Tożsamość witryny → Ikona witryny. Wgraj plik 512x512, a WordPress automatycznie utworzy mniejsze rozmiary.
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold">Własna strona HTML</p>
              <p className="text-mid">
                Umieść pliki w katalogu głównym strony i dodaj odpowiednie tagi &lt;link&gt; w sekcji &lt;head&gt;. Generator wyświetla gotowy kod do skopiowania.
              </p>
            </div>
            <div>
              <p className="mb-1 font-semibold">Next.js / React</p>
              <p className="text-mid">
                Umieść favicon.ico w katalogu <code>app/</code>, a pozostałe ikony w <code>public/</code>. Next.js automatycznie rozpozna plik favicon.ico.
              </p>
            </div>
          </div>
          <p className="mt-4">
            <Link href="/narzedzia/darmowy-generator-favicon-ico/instrukcja" className="text-accent hover:underline">
              Szczegółowa instrukcja wgrywania favicon →
            </Link>
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" openByDefault={0} />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy przy tworzeniu strony?"
        description="Jeśli masz pytania dotyczące ikon, grafiki lub całej strony internetowej — skontaktuj się z nami. Zajmujemy się tworzeniem stron i identyfikacji wizualnej."
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
