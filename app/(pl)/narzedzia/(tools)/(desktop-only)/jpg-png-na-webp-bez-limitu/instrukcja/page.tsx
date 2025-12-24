import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import { RiFileImageLine, RiFlashlightLine, RiStackLine, RiGlobalLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Button from '@/components/ui/buttons/Button';

export const metadata: Metadata = {
  title: 'Instrukcja konwertera JPG/PNG na WebP - Arteon',
  description:
    'Instrukcja konwertera JPG/PNG na WebP. Dowiedz się, jak dodawać pliki, ustawiać jakość, korzystać ze Smart Quality i pobierać obrazy.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja') },
  openGraph: {
    title: 'Instrukcja konwertera JPG/PNG na WebP - Arteon',
    description:
      'Szczegółowa instrukcja obsługi darmowego konwertera JPG/PNG na WebP. Dowiedz się jak dodawać pliki, ustawiać jakość, korzystać ze Smart Quality i pobierać przekonwertowane obrazy.',
    url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać konwertera JPG/PNG na WebP',
  description: 'Instrukcja krok po kroku, jak konwertować obrazy JPG i PNG na format WebP za pomocą darmowego narzędzia online.',
  url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Dodaj pliki do konwersji',
      text: 'Przeciągnij obrazy JPG lub PNG na pole do dodania plików albo kliknij, żeby wybrać pliki z dysku. Możesz dodać wiele plików naraz.',
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
      text: 'Kliknij przycisk Konwertuj. Narzędzie przetworzy wszystkie pliki w kolejce i automatycznie zastosuje Smart Quality.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Pobierz przekonwertowane pliki',
      text: 'Pobierz pliki pojedynczo klikając Pobierz przy każdym, lub wszystkie naraz używając Pobierz wszystkie albo Pobierz wszystko (.zip).',
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
    question: 'Czy moje pliki są wysyłane na serwer?',
    answer:
      'Nie. Cała konwersja odbywa się bezpośrednio w Twojej przeglądarce. Pliki nie opuszczają Twojego urządzenia — narzędzie działa całkowicie lokalnie, bez przesyłania danych na zewnętrzne serwery.',
  },
  {
    question: 'Co to jest Smart Quality i jak działa?',
    answer:
      'Smart Quality to mechanizm automatycznego dostosowywania jakości. Jeśli plik po konwersji do WebP okazałby się większy od oryginału (co może się zdarzyć przy już mocno skompresowanych obrazach), narzędzie automatycznie obniża jakość, aż wynikowy plik będzie mniejszy. Dzięki temu nigdy nie otrzymasz pliku większego niż oryginał.',
  },
  {
    question: 'Jaki poziom jakości wybrać?',
    answer:
      'Dla większości zastosowań webowych (strony, sklepy, blogi) jakość 80% daje doskonały kompromis między rozmiarem a wyglądem. Dla zdjęć produktowych lub grafik, gdzie zależy na szczegółach, możesz wybrać 85-90%. Wartości poniżej 70% znacząco zmniejszą rozmiar, ale mogą wprowadzić widoczne artefakty.',
  },
  {
    question: 'Czy mogę konwertować pliki inne niż JPG i PNG?',
    answer:
      'Narzędzie jest zoptymalizowane dla formatów JPG i PNG. Inne formaty (np. GIF, BMP, TIFF) są automatycznie pomijane przy dodawaniu. Jeśli potrzebujesz konwertować inne formaty, <a href="/kontakt">skontaktuj się z nami</a> — pomożemy dobrać odpowiednie rozwiązanie.',
  },
  {
    question: 'Co oznacza komunikat o pliku większym niż oryginał?',
    answer:
      'Jeśli widzisz ostrzeżenie, że plik wynikowy jest większy niż oryginał, oznacza to, że oryginalny obraz był już bardzo mocno skompresowany. W takim przypadku konwersja do WebP nie przyniesie oszczędności — lepiej zostać przy oryginalnym formacie lub spróbować niższej jakości.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-webp-instruction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Jak używać konwertera JPG/PNG na WebP"
        description="Szczegółowa instrukcja obsługi narzędzia do konwersji obrazów na format WebP. Dowiesz się jak dodawać pliki, ustawiać jakość, rozumieć statusy i pobierać przekonwertowane grafiki."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/jpg-png-na-webp-bez-limitu', label: 'Konwerter JPG/PNG na WebP' }}
        fourth={{ href: '/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest WebP i dlaczego warto konwertować obrazy?">
          <p className="text-mid">
            WebP to format obrazów stworzony przez Google, który pozwala zmniejszyć rozmiar plików graficznych nawet o 25-35% w porównaniu z JPG i PNG — przy zachowaniu porównywalnej jakości
            wizualnej. Mniejsze pliki oznaczają szybsze ładowanie strony, co przekłada się na lepsze doświadczenie użytkowników i wyższe wyniki w narzędziach takich jak{' '}
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
              PageSpeed Insights
            </a>
            .
          </p>
          <p className="text-mid mt-3">
            Format WebP jest wspierany przez wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari, Edge). Jeśli prowadzisz stronę internetową, sklep online lub bloga, konwersja obrazów do WebP
            to jeden z najprostszych sposobów na poprawę wydajności witryny. Więcej o optymalizacji grafik znajdziesz w naszym{' '}
            <Link href="/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp">artykule o optymalizacji zdjęć na stronę WWW</Link>.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać pliki do konwersji?">
          <p className="text-mid">Narzędzie oferuje dwa sposoby dodawania plików:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Przeciągnij i upuść</strong> — po prostu chwyć pliki z folderu na komputerze i upuść je na obszar z napisem &quot;Przeciągnij i upuść obrazy tutaj&quot;. Możesz przeciągnąć
              wiele plików naraz.
            </li>
            <li>
              <strong>Kliknij, aby wybrać</strong> — kliknij w pole do dodania plików, a otworzy się okno wyboru plików. Przytrzymaj Ctrl (lub Cmd na Mac), aby wybrać kilka plików jednocześnie.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Narzędzie akceptuje tylko pliki JPG i PNG. Jeśli przypadkowo dodasz plik w innym formacie (np. GIF lub BMP), zostanie on automatycznie pominięty i zobaczysz komunikat informacyjny.
          </p>
          <p className="text-mid mt-3">
            <strong>Prywatność:</strong> Wszystkie pliki są przetwarzane lokalnie w Twojej przeglądarce. Nie są nigdzie wysyłane — nie trafiają na żaden serwer. Po zamknięciu karty lub
            przeglądarki pliki zostają usunięte z pamięci.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co oznaczają statusy plików?">
          <p className="text-mid">Każdy plik w kolejce ma jeden z czterech statusów, które informują o postępie konwersji:</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">Oczekuje</Badge>
              <p className="text-mid">Plik jest w kolejce i czeka na przetworzenie. Konwersja jeszcze się nie rozpoczęła.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">Przetwarzanie…</Badge>
              <p className="text-mid">Plik jest w trakcie konwersji. Dla większości obrazów trwa to ułamek sekundy, ale bardzo duże pliki mogą wymagać kilku sekund.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="success" size="md">Gotowe</Badge>
              <p className="text-mid">Konwersja zakończyła się pomyślnie. Plik WebP jest gotowy do pobrania. Przy statusie zobaczysz też informację o rozmiarze przed i po konwersji.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="error" size="md">Błąd</Badge>
              <p className="text-mid">Coś poszło nie tak podczas konwersji. Może to być uszkodzony plik źródłowy lub problem z pamięcią przeglądarki przy bardzo dużych obrazach. Możesz spróbować ponownie klikając „Konwertuj ponownie”.</p>
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
            Dzięki temu nie musisz ręcznie eksperymentować z ustawieniami. Jeśli masz obraz, który jest już mocno skompresowany (np. JPG o jakości 60%), narzędzie automatycznie dostosuje parametry,
            aby nadal osiągnąć oszczędność rozmiaru.
          </p>
          <p className="text-mid mt-3">
            Przy każdym pliku zobaczysz informację &quot;Użyta jakość WebP&quot; — to faktyczna jakość zastosowana po ewentualnym dostosowaniu przez Smart Quality.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Ustawienia jakości — co wybrać?"
          demo={
            <div className="space-y-4">
              <div>
                <p className="text-dark mb-2 text-sm font-semibold uppercase">Ustaw jakość</p>
                <div className="flex items-center">
                  <input type="range" min={60} max={95} defaultValue={80} className="flex-1" disabled />
                  <span className="text-mid w-12 text-right text-sm">80%</span>
                </div>
                <span className="text-light mt-1 block text-xs">Wyższa wartość = lepsza jakość, większy plik</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm">Automatycznie pobierz po konwersji</span>
              </div>
              <div className="ml-6 flex flex-wrap gap-2">
                <Badge variant="selected" size="sm">Pobierz osobno</Badge>
                <Badge variant="default" size="sm">Pobierz jako ZIP</Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Suwak jakości pozwala ustawić wartość od 60% do 95%. Wyższa wartość oznacza lepszą jakość obrazu, ale też większy rozmiar pliku.
          </p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li><strong>80% (domyślne)</strong> — doskonały kompromis dla większości zastosowań.</li>
            <li><strong>85-90%</strong> — dla zdjęć produktowych, portfolio fotograficznych.</li>
            <li><strong>60-70%</strong> — gdy priorytetem jest minimalizacja rozmiaru.</li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Jak pobrać przekonwertowane pliki?"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="accent" size="small" disabled>Konwertuj</Button>
                <Button size="small" disabled>Pobierz wszystkie</Button>
                <Button size="small" disabled>Pobierz jako ZIP</Button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm">Dołącz raport CSV do ZIP</span>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-sm">
                <p className="text-light">Rozmiar wejściowy: <strong className="text-dark">2.4 MB</strong></p>
                <p className="text-light">Rozmiar po konwersji: <strong className="text-dark">890 KB</strong></p>
                <p className="text-light">Zaoszczędzono: <strong className="text-emerald-600">1.5 MB (~63%)</strong></p>
              </div>
            </div>
          }
        >
          <p className="text-mid">Po zakończeniu konwersji masz kilka opcji pobierania:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li><strong>Pobierz</strong> (przy każdym pliku) — pobiera pojedynczy plik WebP.</li>
            <li><strong>Pobierz wszystkie</strong> — pobiera wszystkie pliki jeden po drugim.</li>
            <li><strong>Pobierz jako ZIP</strong> — tworzy archiwum ze wszystkimi plikami.</li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Opcja raportu CSV:</strong> Dołącz raport z podsumowaniem konwersji do archiwum ZIP.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Raport oszczędności — co pokazuje?">
          <p className="text-mid">Pod przyciskami konwersji znajduje się podsumowanie z informacjami o oszczędności:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Łączny rozmiar wejściowy</strong> — suma rozmiarów wszystkich oryginalnych plików.
            </li>
            <li>
              <strong>Łączny rozmiar po konwersji</strong> — suma rozmiarów wszystkich plików WebP.
            </li>
            <li>
              <strong>Zaoszczędzono</strong> — ile miejsca zyskałeś dzięki konwersji (w KB/MB i procentach).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Skopiuj podsumowanie:</strong> Klikając ten przycisk skopiujesz raport do schowka w formacie tekstowym. Możesz go wkleić do notatek, e-maila lub dokumentu — przydatne, gdy
            musisz udokumentować optymalizację grafik.
          </p>
        </SectionInfo>

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
                  Konwersja obrazów o rozdzielczości powyżej 4000×4000 pikseli może być wolniejsza i obciążać przeglądarkę. Jeśli przetwarzasz wiele dużych plików, rozważ dzielenie ich na partie lub
                  użycie <Link href="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia">narzędzia do zmiany rozmiaru</Link> przed konwersją.
                </p>
              ),
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: 'Już skompresowane obrazy',
              description: (
                <p>
                  Jeśli oryginalny JPG był zapisany z bardzo niską jakością, konwersja do WebP może nie przynieść dużych oszczędności. W skrajnych przypadkach plik WebP może być nawet większy — wtedy
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
                  Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari 14+, Edge) wspierają WebP. Jeśli Twoja strona musi działać na starszych przeglądarkach, rozważ użycie tagu{' '}
                  <code>&lt;picture&gt;</code> z fallbackiem do JPG/PNG.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" generateSchema={false} />

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie"
          btnOne="Przejdź do konwertera"
          btnOneLink="/narzedzia/jpg-png-na-webp-bez-limitu"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak działa konwerter, możesz zacząć optymalizować swoje obrazy. Jeśli potrzebujesz pomocy z kompleksową optymalizacją strony — obrazów, kodu, hostingu i SEO technicznego
            — <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/strony-internetowe">tworzeniem stron internetowych</Link> i{' '}
            <Link href="/uslugi/sklepy-internetowe">sklepów online</Link>, które ładują się błyskawicznie.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji swojej strony?"
        description="Pomagamy firmom osiągać wyniki +90/100 w PageSpeed. Prześlij link do swojej strony, a przygotujemy ofertę optymalizacji."
        btnOne="Zamów pełną optymalizację"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
