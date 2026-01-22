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
import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import AdSense from '@/components/ui/AdSense';
import { RiShieldCheckLine, RiInfinityFill, RiSpeedLine, RiDownloadLine } from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Konwerter JPG i PNG na WebP online | Darmowy, bez limitu',
  description:
    'Darmowy konwerter JPG i PNG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Bez rejestracji, bez wysyłania plików na serwer — konwersja w przeglądarce.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu') },
  openGraph: {
    title: 'Konwerter JPG i PNG na WebP online | Darmowy, bez limitu',
    description:
      'Darmowy konwerter JPG i PNG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Bez rejestracji, bez wysyłania plików na serwer — konwersja w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
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
  '@type': 'SoftwareApplication',
  name: 'Konwerter JPG i PNG na WebP online — darmowy, bez limitu',
  alternateName: 'Konwerter JPG na WebP i PNG na WebP',
  url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Darmowy konwerter JPG i PNG na WebP online po polsku. Zmniejsz wagę zdjęć nawet o 35%, popraw prędkość ładowania strony i wyniki Core Web Vitals. Konwersja odbywa się w przeglądarce — pliki nie są wysyłane na serwer. Bez logowania, bez limitu plików.',
  featureList: [
    'Konwersja JPG do WebP',
    'Konwersja PNG do WebP',
    'Regulacja poziomu jakości (1-100%)',
    'Konwersja wielu plików jednocześnie (batch)',
    'Podgląd rozmiaru przed i po konwersji',
    'Pobieranie pojedynczych plików',
    'Pobieranie wszystkich plików jako ZIP',
    'Przetwarzanie w przeglądarce (pliki nie są wysyłane na serwer)',
    'Bez logowania i rejestracji',
    'Bez limitu liczby konwersji',
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
    question: 'Co to jest WebP i czym różni się od JPG?',
    answer:
      'WebP to format obrazów stworzony przez Google, który łączy zalety JPG (małe pliki fotograficzne) i PNG (przezroczystość). Pliki WebP są średnio o 25-35% mniejsze od JPG przy porównywalnej jakości wizualnej. Wszystkie nowoczesne przeglądarki (Chrome, Firefox, Safari, Edge) obsługują WebP.',
  },
  {
    question: 'Czy moje pliki są bezpieczne?',
    answer:
      'Tak. Cała konwersja odbywa się lokalnie w przeglądarce — pliki nie są wysyłane na żaden serwer. Po zamknięciu strony żadne dane nie są przechowywane. To oznacza pełną prywatność i zgodność z RODO.',
  },
  {
    question: 'Jaki poziom jakości wybrać?',
    answer:
      'Dla większości zastosowań (strony, sklepy, blogi) jakość 80% daje dobry kompromis między rozmiarem a wyglądem. Dla zdjęć produktowych lub portfolio możesz wybrać 85-90%. Wartości poniżej 70% znacząco zmniejszą rozmiar, ale mogą wprowadzić widoczne artefakty.',
  },
  {
    question: 'Ile miejsca mogę zaoszczędzić?',
    answer:
      'Typowa oszczędność to 25-35% w porównaniu z JPG. Na przykład zdjęcie JPG o rozmiarze 500 KB po konwersji na WebP zajmie około 325-375 KB. Przy PNG oszczędności mogą być jeszcze większe — nawet 50-70%.',
  },
  {
    question: 'Czy mogę konwertować wiele plików naraz?',
    answer:
      'Tak. Możesz dodać dowolną liczbę plików jednocześnie — nie ma limitu. Wszystkie zostaną przekonwertowane, a potem możesz pobrać je pojedynczo lub jako archiwum ZIP.',
  },
  {
    question: 'Co to jest Smart Quality?',
    answer:
      'Smart Quality to mechanizm automatycznego dostosowywania jakości. Jeśli plik po konwersji okazałby się większy od oryginału (co może się zdarzyć przy już mocno skompresowanych obrazach), narzędzie automatycznie obniża jakość, aż wynikowy plik będzie mniejszy.',
  },
  {
    question: 'Czy WebP przyspiesza stronę?',
    answer:
      'Tak. Mniejsze pliki graficzne oznaczają szybsze ładowanie strony. Ma to bezpośredni wpływ na wskaźnik LCP (Largest Contentful Paint) w Core Web Vitals — jeden z czynników rankingowych Google. Narzędzia takie jak PageSpeed Insights często zalecają konwersję obrazów na WebP.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-webp-converter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Konwerter JPG i PNG na WebP online"
        description="Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Dodaj pliki, wybierz poziom jakości i pobierz obrazy w formacie WebP. Bez rejestracji, bez limitu — konwersja odbywa się w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: `/narzedzia/jpg-png-na-webp-bez-limitu`, label: 'Konwerter JPG/PNG na WebP' }} includeJsonLd />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <JpgPngToWebp />

        <Gap variant="line" />

        <SectionInfo title="Co to jest WebP i dlaczego warto konwertować obrazy?">
          <p className="mb-4">
            WebP to format obrazów stworzony przez Google, który pozwala zmniejszyć rozmiar plików graficznych nawet o 25-35% w porównaniu z JPG i PNG — przy zachowaniu porównywalnej jakości wizualnej.
            Mniejsze pliki oznaczają szybsze ładowanie strony, co przekłada się na lepsze doświadczenie użytkowników i wyższe wyniki w{' '}
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
            Konwerter obsługuje zarówno zdjęcia JPG, jak i grafiki PNG (w tym te z przezroczystością). Możesz przekonwertować dowolną liczbę plików naraz — wszystkie zostaną przetworzone lokalnie w
            przeglądarce, bez wysyłania na serwer.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="Jak przekonwertować zdjęcia w 3 krokach"
          description="Konwersja na WebP zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj pliki',
              description: 'Przeciągnij zdjęcia JPG lub PNG na pole albo kliknij, żeby wybrać pliki z dysku. Możesz dodać wiele plików naraz — nie ma limitu.',
            },
            {
              title: '2. Ustaw jakość',
              description: 'Wybierz poziom jakości (domyślnie 80%). Niższa wartość = mniejszy plik. Dla większości zastosowań 80% to dobry kompromis.',
            },
            {
              title: '3. Pobierz WebP',
              description: 'Kliknij „Konwertuj" i pobierz pliki pojedynczo lub jako archiwum ZIP. Przy każdym pliku zobaczysz, ile miejsca zaoszczędziłeś.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/jpg-png-na-webp-bez-limitu/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Ile można zaoszczędzić konwertując na WebP?">
          <p className="mb-4">Oszczędności zależą od rodzaju obrazu i jego oryginalnej kompresji. Poniżej przykładowe wyniki dla typowych plików:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Zdjęcie JPG (aparat)</p>
              <p className="text-light text-sm">2.4 MB → 890 KB</p>
              <p className="mt-1 text-sm font-medium text-emerald-600">Oszczędność: ~63%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Grafika PNG (logo)</p>
              <p className="text-light text-sm">180 KB → 45 KB</p>
              <p className="mt-1 text-sm font-medium text-emerald-600">Oszczędność: ~75%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Zdjęcie produktowe</p>
              <p className="text-light text-sm">500 KB → 185 KB</p>
              <p className="mt-1 text-sm font-medium text-emerald-600">Oszczędność: ~63%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">
            Rzeczywiste oszczędności mogą się różnić. Konwerter pokazuje dokładny rozmiar przed i po konwersji dla każdego pliku, a także podsumowanie łącznych oszczędności.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dlaczego warto używać tego konwertera?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Pełna prywatność',
              description: 'Pliki nie opuszczają komputera. Konwersja odbywa się w przeglądarce — nic nie jest wysyłane na serwer. Po zamknięciu strony dane są usuwane.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez limitu plików',
              description: 'Możesz przekonwertować dowolną liczbę obrazów. Nie ma dziennych limitów, nie trzeba zakładać konta ani płacić za dodatkowe konwersje.',
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

        <SectionInfo title="Kiedy warto konwertować obrazy na WebP?">
          <p className="mb-4">Konwersja na WebP przynosi korzyści praktycznie w każdym przypadku, gdy obrazy są wyświetlane w przeglądarce:</p>
          <ul className="mb-4 ml-6 list-disc space-y-2">
            <li>
              <strong>Strony firmowe i wizytówki</strong> — szybsze ładowanie poprawia pierwsze wrażenie i zmniejsza współczynnik odrzuceń
            </li>
            <li>
              <strong>Sklepy internetowe</strong> — zdjęcia produktowe to często największe pliki na stronie; ich optymalizacja przyspiesza cały sklep
            </li>
            <li>
              <strong>Blogi i portale</strong> — artykuły z wieloma zdjęciami ładują się znacznie szybciej
            </li>
            <li>
              <strong>Portfolio fotograficzne</strong> — przy jakości 85-90% różnica wizualna jest niezauważalna, a pliki są mniejsze
            </li>
            <li>
              <strong>Aplikacje webowe (PWA)</strong> — mniejsze zasoby oznaczają szybsze działanie, szczególnie na urządzeniach mobilnych
            </li>
          </ul>
          <p>
            Więcej o optymalizacji grafik znajdziesz w naszym <Link href="/edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp">artykule o optymalizacji zdjęć na stronę WWW</Link>.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz kompleksowej optymalizacji strony?"
        description="Pomagamy firmom osiągać wyniki +90/100 w PageSpeed. Prześlij link do swojej strony, a przygotujemy ofertę optymalizacji — grafik, kodu i hostingu."
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
