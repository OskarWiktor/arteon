import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import AdSense from '@/components/ui/AdSense';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Button from '@/components/ui/buttons/Button';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiGlobalLine,
  RiBuilding2Line,
  RiShoppingCartLine,
  RiArticleLine,
  RiCameraLine,
  RiSmartphoneLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Konwerter JPG i PNG na WebP online | Darmowy, bez limitu',
  description: 'Darmowy konwerter JPG i PNG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Konwersja odbywa się lokalnie w przeglądarce, pliki nie są wysyłane na serwer.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu') },
  openGraph: {
    title: 'Konwerter JPG i PNG na WebP online | Darmowy, bez limitu',
    description: 'Darmowy konwerter JPG i PNG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Konwersja odbywa się lokalnie w przeglądarce, pliki nie są wysyłane na serwer.',
    url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Konwerter JPG i PNG na WebP online - darmowy, bez limitu',
  alternateName: 'Konwerter JPG na WebP i PNG na WebP',
  url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Darmowy konwerter JPG i PNG na WebP online po polsku. Zmniejsz wagę zdjęć nawet o 35%, popraw prędkość ładowania strony i wyniki Core Web Vitals. Konwersja odbywa się w przeglądarce - pliki nie są wysyłane na serwer.',
  featureList: [
    'Konwersja JPG do WebP',
    'Konwersja PNG do WebP',
    'Regulacja poziomu jakości (1-100%)',
    'Konwersja wielu plików jednocześnie',
    'Podgląd rozmiaru przed i po konwersji',
    'Pobieranie pojedynczych plików',
    'Pobieranie wszystkich plików jako ZIP',
    'Przetwarzanie lokalne w przeglądarce (pliki nie są wysyłane na serwer)',
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
  name: 'Jak zamienić JPG i PNG na WebP online',
  description: 'Jak przekonwertować obrazy JPG i PNG na format WebP. Ustawienie jakości (60-95%), mechanizm Smart Quality i pobieranie przekonwertowanych plików jako ZIP.',
  url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Dodaj pliki do konwersji',
      text: 'Przeciągnij obrazy JPG lub PNG na wyznaczone pole albo wybierz pliki z dysku. Można dodać wiele plików naraz.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Ustaw poziom jakości',
      text: 'Wybierz jakość wynikowego pliku WebP za pomocą suwaka (60-95%). Domyślna wartość 80% to dobry kompromis między jakością a rozmiarem.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Uruchom konwersję',
      text: 'Po uruchomieniu konwersji narzędzie przetworzy wszystkie pliki w kolejce i automatycznie zastosuje Smart Quality.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pobierz przekonwertowane pliki',
      text: 'Przekonwertowane pliki można pobrać pojedynczo lub wszystkie naraz jako archiwum ZIP.',
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
    question: 'Co to jest WebP i czym różni się od JPG?',
    answer:
      'WebP to format obrazów stworzony przez Google, który łączy zalety JPG (małe pliki fotograficzne) i PNG (przezroczystość). Pliki WebP są średnio o 25-35% mniejsze od JPG przy porównywalnej jakości wizualnej. Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari, Edge) obsługują WebP.',
  },
  {
    question: 'Czy WebP obsługuje przezroczystość tak jak PNG?',
    answer:
      'Tak. Format WebP obsługuje kanał alfa (przezroczystość) - pliki PNG z przezroczystym tłem zostaną przekonwertowane prawidłowo. Oszczędność rozmiaru dla PNG z przezroczystością może być jednak mniejsza niż dla zwykłych zdjęć JPG.',
  },
  {
    question: 'Jaki poziom jakości wybrać?',
    answer:
      'Dla większości zastosowań (strony, sklepy, blogi) jakość 80% daje dobry kompromis między rozmiarem a wyglądem. Dla zdjęć produktowych lub portfolio możesz wybrać 85-90%. Wartości poniżej 70% znacząco zmniejszą rozmiar, ale mogą wprowadzić widoczne artefakty.',
  },
  {
    question: 'Ile miejsca mogę zaoszczędzić?',
    answer:
      'Typowa oszczędność to 25-35% w porównaniu z JPG. Na przykład zdjęcie JPG o rozmiarze 500 KB po konwersji na WebP zajmie około 325-375 KB. Przy PNG oszczędności mogą być jeszcze większe - nawet 50-70%.',
  },
  {
    question: 'Czy mogę konwertować wiele plików naraz?',
    answer: 'Tak. Możesz dodać dowolną liczbę plików jednocześnie - nie ma limitu. Wszystkie zostaną przekonwertowane, a potem możesz pobrać je pojedynczo lub jako archiwum ZIP.',
  },
  {
    question: 'Co to jest Smart Quality?',
    answer:
      'Smart Quality to mechanizm automatycznego dostosowywania jakości. Jeśli plik po konwersji okazałby się większy od oryginału (co może się zdarzyć przy już mocno skompresowanych obrazach), narzędzie automatycznie obniża jakość, aż wynikowy plik będzie mniejszy.',
  },
  {
    question: 'Czy WebP przyspiesza stronę?',
    answer:
      'Tak. Mniejsze pliki graficzne oznaczają szybsze ładowanie strony. Ma to bezpośredni wpływ na wskaźnik LCP (Largest Contentful Paint) w Core Web Vitals - jeden z czynników rankingowych Google. Narzędzia takie jak PageSpeed Insights często zalecają konwersję obrazów na WebP.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-webp-converter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Konwerter JPG i PNG na WebP online"
        description="Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Dodaj pliki, wybierz poziom jakości i pobierz obrazy w formacie WebP. Cała konwersja odbywa się lokalnie w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/jpg-png-na-webp-bez-limitu`, label: 'Konwerter JPG/PNG na WebP' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Co to jest WebP i dlaczego warto konwertować obrazy?">
          <p className="mb-4">
            WebP to format obrazów stworzony przez Google, który pozwala zmniejszyć rozmiar plików graficznych nawet o 25-35% w porównaniu z JPG i PNG - przy zachowaniu porównywalnej jakości
            wizualnej. Mniejsze pliki oznaczają szybsze ładowanie strony, co przekłada się na lepsze doświadczenie użytkowników i wyższe wyniki w{' '}
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
              PageSpeed Insights
            </a>
            .
          </p>
          <p className="mb-4">
            Format WebP jest wspierany przez wszystkie nowoczesne przeglądarki: Chrome, Firefox, Safari (od wersji 14) i Edge. Jeśli prowadzisz stronę internetową, sklep online lub bloga, konwersja
            obrazów do WebP to jeden z najprostszych sposobów na poprawę wydajności witryny.
          </p>
          <p>
            Konwerter obsługuje zarówno zdjęcia JPG, jak i grafiki PNG (w tym te z przezroczystością). Możesz przekonwertować dowolną liczbę plików naraz - wszystkie zostaną przetworzone lokalnie w
            przeglądarce, bez wysyłania na serwer.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Jak przekonwertować zdjęcia na WebP?"
          description="Konwersja na WebP zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj pliki',
              description: 'Przeciągnij zdjęcia JPG lub PNG na wyznaczone pole albo wybierz pliki z dysku. Można dodać dowolną liczbę plików naraz.',
            },
            {
              title: '2. Ustaw jakość',
              description: 'Wybierz poziom jakości (domyślnie 80%). Niższa wartość oznacza mniejszy plik. Dla większości zastosowań 80% to optymalne ustawienie.',
            },
            {
              title: '3. Pobierz WebP',
              description: 'Po konwersji pobierz pliki pojedynczo lub jako archiwum ZIP. Przy każdym pliku widoczna jest informacja o zaoszczędzonym miejscu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak dodać pliki do konwersji?">
          <p className="text-mid">Narzędzie oferuje dwa sposoby dodawania plików:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Przeciągnij i upuść</strong> - chwyć pliki z folderu na komputerze i upuść je na obszar z napisem &quot;Przeciągnij i upuść obrazy tutaj&quot;. Możesz przeciągnąć wiele plików
              naraz.
            </li>
            <li>
              <strong>Wybór z dysku</strong> - po kliknięciu w pole do dodania plików otworzy się okno wyboru. Przytrzymanie Ctrl (lub Cmd na Mac) pozwala wybrać kilka plików jednocześnie.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Narzędzie akceptuje tylko pliki JPG i PNG. Jeśli przypadkowo dodasz plik w innym formacie (np. GIF lub BMP), zostanie on automatycznie pominięty i zobaczysz komunikat informacyjny.
          </p>
          <p className="text-mid mt-3">
            <strong>Prywatność:</strong> Wszystkie pliki są przetwarzane lokalnie w przeglądarce. Nie są nigdzie wysyłane - nie trafiają na żaden serwer. Po zamknięciu karty lub przeglądarki pliki
            zostają usunięte z pamięci.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają statusy plików?">
          <p className="text-mid">Każdy plik w kolejce ma jeden z czterech statusów, które informują o postępie konwersji:</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Oczekuje
              </Badge>
              <p className="text-mid">Plik jest w kolejce i czeka na przetworzenie. Konwersja jeszcze się nie rozpoczęła.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Przetwarzanie…
              </Badge>
              <p className="text-mid">Plik jest w trakcie konwersji. Dla większości obrazów trwa to ułamek sekundy, ale bardzo duże pliki mogą wymagać kilku sekund.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="success" size="md">
                Gotowe
              </Badge>
              <p className="text-mid">Konwersja zakończyła się pomyślnie. Plik WebP jest gotowy do pobrania. Przy statusie zobaczysz też informację o rozmiarze przed i po konwersji.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="error" size="md">
                Błąd
              </Badge>
              <p className="text-mid">
                Coś poszło nie tak podczas konwersji. Może to być uszkodzony plik źródłowy lub problem z pamięcią przeglądarki przy bardzo dużych obrazach. Przycisk &quot;Konwertuj ponownie&quot;
                pozwala powtórzyć próbę.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak działa Smart Quality?">
          <p className="text-mid">
            Smart Quality to automatyczny mechanizm optymalizacji, który zapewnia, że wynikowy plik WebP nigdy nie będzie większy od oryginału. Działa to w następujący sposób:
          </p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>Narzędzie konwertuje obraz z ustawioną przez Ciebie jakością (np. 80%).</li>
            <li>Sprawdza, czy wynikowy plik jest mniejszy od oryginału.</li>
            <li>Jeśli jest większy, automatycznie obniża jakość i próbuje ponownie.</li>
            <li>Proces powtarza się, aż wynikowy plik będzie mniejszy lub jakość spadnie poniżej bezpiecznego minimum.</li>
          </ol>
          <p className="text-mid mt-3">
            Narzędzie automatycznie dobiera optymalne ustawienia. Jeśli masz obraz, który jest już mocno skompresowany (np. JPG o jakości 60%), parametry zostaną automatycznie dostosowane, aby nadal
            osiągnąć oszczędność rozmiaru.
          </p>
          <p className="text-mid mt-3">Przy każdym pliku zobaczysz informację &quot;Użyta jakość WebP&quot; - to faktyczna jakość zastosowana po ewentualnym dostosowaniu przez Smart Quality.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Ustawienia jakości - co wybrać?"
          demo={
            <div className="space-y-4">
              <div>
                <p className="text-dark mb-2 text-sm! font-medium uppercase">Ustaw jakość</p>
                <div className="flex items-center">
                  <input type="range" min={60} max={95} defaultValue={80} className="flex-1" disabled />
                  <span className="text-mid w-12 text-right text-sm!">80%</span>
                </div>
                <span className="text-light mt-1 block text-xs">Wyższa wartość = lepsza jakość, większy plik</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Automatycznie pobierz po konwersji</span>
              </div>
              <div className="ml-6 flex flex-wrap gap-2">
                <Badge variant="selected" size="sm">
                  Pobierz osobno
                </Badge>
                <Badge variant="default" size="sm">
                  Pobierz jako ZIP
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">Suwak jakości pozwala ustawić wartość od 60% do 95%. Wyższa wartość oznacza lepszą jakość obrazu, ale też większy rozmiar pliku.</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>80% (domyślne)</strong> - dobry kompromis dla większości zastosowań.
            </li>
            <li>
              <strong>85-90%</strong> - dla zdjęć produktowych, portfolio fotograficznych.
            </li>
            <li>
              <strong>60-70%</strong> - gdy priorytetem jest minimalizacja rozmiaru.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Jak pobrać przekonwertowane pliki?"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="accent" size="small" disabled>
                  Konwertuj
                </Button>
                <Button size="small" disabled>
                  Pobierz wszystkie
                </Button>
                <Button size="small" disabled>
                  Pobierz jako ZIP
                </Button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Dołącz raport CSV do ZIP</span>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-sm!">
                <p className="text-light">
                  Rozmiar wejściowy: <strong className="text-dark">2.4 MB</strong>
                </p>
                <p className="text-light">
                  Rozmiar po konwersji: <strong className="text-dark">890 KB</strong>
                </p>
                <p className="text-light">
                  Zaoszczędzono: <strong className="text-success-icon">1.5 MB (~63%)</strong>
                </p>
              </div>
            </div>
          }
        >
          <p className="text-mid">Po zakończeniu konwersji masz kilka opcji pobierania:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Pobierz</strong> (przy każdym pliku) - pobiera pojedynczy plik WebP.
            </li>
            <li>
              <strong>Pobierz wszystkie</strong> - pobiera wszystkie pliki jeden po drugim.
            </li>
            <li>
              <strong>Pobierz jako ZIP</strong> - tworzy archiwum ze wszystkimi plikami.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Opcja raportu CSV:</strong> Dołącz raport z podsumowaniem konwersji do archiwum ZIP.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Raport oszczędności - co pokazuje?">
          <p className="text-mid">Pod przyciskami konwersji znajduje się podsumowanie z informacjami o oszczędności:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Łączny rozmiar wejściowy</strong> - suma rozmiarów wszystkich oryginalnych plików.
            </li>
            <li>
              <strong>Łączny rozmiar po konwersji</strong> - suma rozmiarów wszystkich plików WebP.
            </li>
            <li>
              <strong>Zaoszczędzono</strong> - ile miejsca zyskałeś dzięki konwersji (w KB/MB i procentach).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Skopiuj podsumowanie:</strong> Przycisk przenosi raport do schowka w formacie tekstowym. Można go wkleić do notatek, e-maila lub dokumentu - przydatne przy dokumentowaniu
            optymalizacji grafik.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Ile można zaoszczędzić konwertując na WebP?">
          <p className="mb-4">Oszczędności zależą od rodzaju obrazu i jego oryginalnej kompresji. Poniżej przykładowe wyniki dla typowych plików:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Zdjęcie JPG (aparat)</p>
              <p className="text-light text-sm">2.4 MB → 890 KB</p>
              <p className="mt-1 text-sm font-medium text-success-icon">Oszczędność: ~63%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Grafika PNG (logo)</p>
              <p className="text-light text-sm">180 KB → 45 KB</p>
              <p className="mt-1 text-sm font-medium text-success-icon">Oszczędność: ~75%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Zdjęcie produktowe</p>
              <p className="text-light text-sm">500 KB → 185 KB</p>
              <p className="mt-1 text-sm font-medium text-success-icon">Oszczędność: ~63%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            Rzeczywiste oszczędności mogą się różnić. Konwerter pokazuje dokładny rozmiar przed i po konwersji dla każdego pliku, a także podsumowanie łącznych oszczędności.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia konwerter JPG i PNG na WebP?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Pełna prywatność',
              description: 'Pliki nie opuszczają komputera. Konwersja odbywa się w przeglądarce - nic nie jest wysyłane na serwer. Po zamknięciu strony dane są usuwane.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Konwersja wielu plików jednocześnie',
              description: 'Można przekonwertować dowolną liczbę obrazów naraz. Wszystkie pliki są przetwarzane po kolei, a wyniki dostępne są do pobrania pojedynczo lub jako archiwum ZIP.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Smart Quality',
              description: 'Narzędzie automatycznie dostosowuje jakość, żeby wynikowy plik był zawsze mniejszy od oryginału. Nie musisz ręcznie szukać optymalnych ustawień.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Pobieranie jako ZIP',
              description: 'Przekonwertowane pliki możesz pobrać pojedynczo lub wszystkie naraz jako archiwum ZIP. Opcjonalnie możesz dołączyć raport CSV z podsumowaniem.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Na co zwrócić uwagę?"
          description="Kilka wskazówek, które pomogą uniknąć problemów podczas konwersji:"
          grid="two"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Bardzo duże pliki',
              description: (
                <p>
                  Konwersja obrazów o rozdzielczości powyżej 4000x4000 pikseli może być wolniejsza i obciążać przeglądarkę. Jeśli przetwarzasz wiele dużych plików, rozważ dzielenie ich na partie lub
                  użycie <Link href="/narzedzia/edytor-zdjec-online">narzędzia do zmiany rozmiaru</Link> przed konwersją.
                </p>
              ),
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: 'Już skompresowane obrazy',
              description: (
                <p>
                  Jeśli oryginalny JPG był zapisany z bardzo niską jakością, konwersja do WebP może nie przynieść dużych oszczędności. W skrajnych przypadkach plik WebP może być nawet większy - wtedy
                  Smart Quality obniży jakość automatycznie.
                </p>
              ),
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Format PNG z przezroczystością',
              description: (
                <p>
                  WebP obsługuje przezroczystość, więc pliki PNG z kanałem alfa zostaną przekonwertowane prawidłowo. Jednak oszczędność rozmiaru dla PNG z przezroczystością może być mniejsza niż dla
                  zwykłych zdjęć JPG.
                </p>
              ),
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Kompatybilność z przeglądarkami',
              description: (
                <p>
                  Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari 14+, Edge) wspierają WebP. Jeśli strona musi działać na starszych przeglądarkach, można użyć tagu{' '}
                  <code>&lt;picture&gt;</code> z alternatywnym źródłem JPG/PNG.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Kiedy warto konwertować obrazy na WebP?"
          description="Konwersja na WebP przynosi korzyści praktycznie w każdym przypadku, gdy obrazy są wyświetlane w przeglądarce:"
          grid="two"
          items={[
            {
              icon: <RiBuilding2Line className="h-6 w-6" />,
              title: 'Strony firmowe i wizytówki',
              description: 'Szybsze ładowanie poprawia pierwsze wrażenie i zmniejsza współczynnik odrzuceń.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Sklepy internetowe',
              description: 'Zdjęcia produktowe to często największe pliki na stronie; ich optymalizacja przyspiesza cały sklep.',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Blogi i portale',
              description: 'Artykuły z wieloma zdjęciami ładują się znacznie szybciej.',
            },
            {
              icon: <RiCameraLine className="h-6 w-6" />,
              title: 'Portfolio fotograficzne',
              description: 'Przy jakości 85-90% różnica wizualna jest niezauważalna, a pliki są mniejsze.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Aplikacje webowe (PWA)',
              description: 'Mniejsze zasoby oznaczają szybsze działanie, szczególnie na urządzeniach mobilnych.',
            },
          ]}
          btnOne="Jak optymalizować zdjęcia na stronę"
          btnOneLink="/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp"
        />

        <Gap variant="line" />

        <FaqPanels
          items={[
            ...faqItems,
            {
              question: 'Czy mogę konwertować pliki inne niż JPG i PNG?',
              answer:
                'Narzędzie jest zoptymalizowane dla formatów JPG i PNG. Inne formaty (np. GIF, BMP, TIFF) są automatycznie pomijane przy dodawaniu. Jeśli potrzebujesz konwertować inne formaty, <a href="/kontakt">skontaktuj się z nami</a> - pomożemy dobrać odpowiednie rozwiązanie.',
            },
            {
              question: 'Co oznacza komunikat o pliku większym niż oryginał?',
              answer:
                'Jeśli widzisz ostrzeżenie, że plik wynikowy jest większy niż oryginał, oznacza to, że oryginalny obraz był już bardzo mocno skompresowany. W takim przypadku konwersja do WebP nie przyniesie oszczędności - lepiej zostać przy oryginalnym formacie lub spróbować niższej jakości.',
            },
          ]}
          title="Najczęściej zadawane pytania dotyczące konwertera zdjęć na WebP"
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji strony?"
        description="Pomagamy firmom osiągać wyniki +90/100 w PageSpeed. Prześlij link do swojej strony, a przygotujemy ofertę optymalizacji - grafik, kodu i hostingu."
        btnOne="Zamów optymalizację"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
