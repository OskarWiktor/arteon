import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiListCheck2,
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiSpaceShipLine,
  RiParagraph,
  RiTimeLine,
  RiHashtag,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiUserLine,
  RiTimerLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Darmowy licznik słów i znaków online - sprawdź długość tekstu',
  description:
    'Darmowy licznik słów i znaków online po polsku. Policz słowa, znaki, akapity i czas czytania. Sprawdź optymalną długość tekstu dla SEO - artykuł, opis produktu, strona usługi. Bez rejestracji.',
  alternates: {
    canonical: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
      en: toAbsoluteUrl('/en/tools/word-and-character-counter'),
      de: toAbsoluteUrl('/de/werkzeuge/wort-und-zeichenzaehler'),
      es: toAbsoluteUrl('/es/herramientas/contador-de-palabras-y-caracteres'),
      fr: toAbsoluteUrl('/fr/outils/compteur-de-mots-et-caracteres'),
    },
  },
  openGraph: {
    title: 'Darmowy licznik słów i znaków online - sprawdź długość tekstu',
    description:
      'Darmowy licznik słów i znaków online po polsku. Policz słowa, znaki, akapity i czas czytania. Sprawdź optymalną długość tekstu dla SEO - artykuł, opis produktu, strona usługi. Bez rejestracji.',
    url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy licznik słów i znaków online',
  alternateName: [
    'Licznik słów z oceną długości tekstu',
    'Licznik znaków online po polsku',
    'Narzędzie do liczenia słów dla copywriterów',
    'Kalkulator czasu czytania tekstu',
    'Licznik wyrazów online po polsku',
    'Sprawdź ile słów ma tekst',
    'Licznik słów do SEO',
    'Optymalna długość tekstu dla artykułu',
  ],
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik słów i znaków po polsku. Sprawdza liczbę słów, znaków, akapitów i szacowany czas czytania. Ocenia długość tekstu dla różnych typów stron: opis produktu, strona usługi, strona główna, strona ofertowa, artykuł blogowy, poradnik.',
  inLanguage: 'pl-PL',
  isAccessibleForFree: true,
  featureList: [
    'Liczenie słów w tekście',
    'Liczenie znaków ze spacjami i bez spacji',
    'Liczenie akapitów',
    'Szacowanie czasu czytania',
    'Ocena długości tekstu dla różnych typów stron',
    'Zalecenia długości dla: opisu produktu, strony usługi, strony głównej, strony ofertowej, artykułu blogowego, poradnika',
    'Kopiowanie raportu do schowka',
  ],
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
  name: 'Jak używać licznika słów i znaków',
  description: 'Sprawdź długość tekstu i oceń, czy jest odpowiednia dla danego typu strony. Dowiedz się, ile słów powinien mieć opis produktu, strona usługi, artykuł blogowy czy poradnik.',
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz typ strony',
      text: 'Wybierz z listy, dla jakiego typu strony piszesz tekst: opis produktu, strona usługi, strona główna, strona ofertowa, artykuł blogowy lub poradnik.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wklej tekst',
      text: 'Wklej lub wpisz tekst w pole tekstowe. Narzędzie automatycznie policzy słowa, znaki, akapity i oszacuje czas czytania.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sprawdź ocenę długości',
      text: 'Zobacz kolorowy pasek postępu i status oceny. Zielony oznacza dobrą długość, żółty za krótki tekst, czerwony za długi.',
    },
    {
      '@type': 'HowToStep',
      name: 'Skopiuj raport',
      text: 'Przycisk Kopiuj raport przenosi podsumowanie ze statystykami i oceną do schowka systemowego.',
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
    question: 'Czy długość tekstu wpływa na pozycję w Google?',
    answer:
      'Długość tekstu sama w sobie nie jest czynnikiem rankingowym. Google ocenia, czy treść odpowiada na pytanie użytkownika i czy jest dla niego wartościowa. Krótszy tekst, który wyczerpująco odpowiada na pytanie, może osiągać dobre pozycje - kluczowa jest wartość dla czytelnika. Zakresy w narzędziu opierają się na analizach treści, które dobrze się pozycjonują.',
    answerSchemaText: 'Długość tekstu nie jest bezpośrednim czynnikiem rankingowym. Google ocenia wartość treści dla użytkownika.',
  },
  {
    question: 'Dlaczego zakresy słów są takie szerokie?',
    answer:
      'Ten sam typ strony może wymagać różnej długości w zależności od złożoności tematu. Opis prostego produktu (np. kubek) to 80-150 słów - wystarczy podać materiał, pojemność i przeznaczenie. Opis laptopa to 300-400 słów, bo kupujący pyta o procesor, pamięć, ekran, baterię. Podobnie z usługami: lokalna usługa hydraulika to 500-700 słów, a kompleksowa usługa wdrożenia systemu B2B z procesem, etapami i FAQ to 1200-1500 słów.',
    answerSchemaText: 'Różnica wynika ze złożoności tematu - prosty produkt wymaga mniej słów niż złożony.',
  },
  {
    question: 'Jak interpretować ocenę "za krótki" lub "za długi"?',
    answer:
      'Ocena pokazuje, gdzie tekst znajduje się względem typowych treści danego typu. Jeśli tekst jest oznaczony jako "za krótki", ale odpowiada na wszystkie pytania czytelnika - długość jest odpowiednia. Jeśli jest "za długi", ale każdy akapit wnosi nową informację - długość jest uzasadniona.',
    answerSchemaText: 'Ocena pokazuje pozycję tekstu względem typowych treści. Jeśli tekst odpowiada na pytania czytelnika, długość jest odpowiednia.',
  },
  {
    question: 'Jak licznik oblicza czas czytania?',
    answer:
      'Narzędzie dzieli liczbę słów przez 200 - to średnia prędkość czytania dla typowego tekstu. Tekst techniczny lub wymagający skupienia (np. dokumentacja, regulamin) będzie czytany wolniej. Lekki artykuł lifestylowy - szybciej. Wynik to orientacyjna wartość, która pomaga ocenić, ile czasu czytelnik spędzi z tekstem.',
    answerSchemaText: 'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna dla typowego tekstu.',
  },
  {
    question: 'Skąd pochodzą zalecane zakresy?',
    answer:
      'Zakresy opierają się na analizach treści, które dobrze pozycjonują się w wyszukiwarkach, oraz na praktykach tworzenia treści. Są celowo szerokie, ponieważ ten sam typ strony może wymagać różnej długości w zależności od branży, złożoności tematu i potrzeb czytelnika. Zakresy to punkt wyjścia do oceny, czy tekst mieści się w typowym przedziale dla danego typu strony.',
    answerSchemaText: 'Zakresy opierają się na analizach SEO i praktykach tworzenia treści.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-word-count-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-count-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Licznik słów i znaków z oceną długości"
        description="Wklej tekst, wybierz typ strony, a narzędzie pokaże liczbę słów, znaków, akapitów i oceni, czy długość jest odpowiednia dla danego rodzaju treści"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/licznik-slow-i-znakow', label: 'Licznik słów i znaków' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Darmowy licznik słów online - policz i oceń długość tekstu">
          <p className="text-mid">
            Narzędzie do liczenia słów pozwala szybko sprawdzić długość tekstu. Wklej tekst, a licznik policzy słowa, znaki i akapity. Zobaczysz też, ile minut zajmie czytanie i czy długość pasuje do
            typu strony, który wybierzesz.
          </p>
          <p className="text-mid mt-3">
            Każdy typ strony ma inny cel - opis produktu odpowiada na pytania kupującego, artykuł blogowy wyczerpuje temat, a strona usługi wyjaśnia, co klient otrzyma. Licznik pokazuje zakresy dla
            każdego z tych typów oparte na analizach treści, które dobrze się pozycjonują.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika słów i znaków?"
          description="Sprawdzenie długości tekstu zajmuje mniej niż minutę:"
          grid="four"
          items={[
            {
              icon: <RiListCheck2 className="h-6 w-6" />,
              title: '1. Wybierz typ strony',
              description: 'Wybierz z listy rozwijalnej, dla jakiego typu strony piszesz tekst. Każdy typ ma inne zalecenia dotyczące minimalnej i maksymalnej liczby słów.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Wklej tekst',
              description: 'Wklej lub wpisz tekst w duże pole po prawej stronie. Narzędzie od razu policzy słowa, znaki (ze spacjami i bez), akapity oraz oszacuje czas czytania.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: '3. Sprawdź ocenę',
              description: 'Zobacz kolorowy pasek postępu i status oceny. Zielony oznacza dobrą długość, żółty za krótki tekst, czerwony za długi. Pod spodem znajdziesz wskazówkę.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Skopiuj raport',
              description: 'Przycisk Kopiuj raport przenosi do schowka podsumowanie z liczbą słów, znaków, akapitów, czasem czytania i oceną długości.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Co mierzy licznik - słowa, znaki, czas czytania"
          description="Licznik mierzy pięć kluczowych metryk:"
          grid="two"
          items={[
            {
              icon: <RiText className="h-6 w-6" />,
              title: 'Słowa',
              description: 'Łączna liczba słów (zliczanie słów). To główny wskaźnik długości tekstu.',
            },
            {
              icon: <RiSpaceShipLine className="h-6 w-6" />,
              title: 'Znaki (ze spacjami)',
              description: 'Wszystkie znaki łącznie ze spacjami. Przydatne, gdy system CMS ma limit znaków (np. przy opisach na Allegro czy OLX).',
            },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Znaki (bez spacji)',
              description: 'Tylko litery, cyfry i interpunkcja. Czasem wymagane przez drukarnie lub przy rozliczeniach za tekst.',
            },
            {
              icon: <RiParagraph className="h-6 w-6" />,
              title: 'Akapity',
              description: 'Ile masz bloków tekstu oddzielonych pustymi liniami. Pomaga ocenić, czy tekst jest dobrze podzielony.',
            },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Czas czytania',
              description: 'Kalkulator czasu czytania pokazuje, ile minut zajmie przeczytanie tekstu przy średniej prędkości 200 słów na minutę.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Jak interpretować wyniki?"
          subtitle="Statusy oceny"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Dobra długość
                </Badge>
                <span className="text-mid text-sm!">Tekst mieści się w zakresie</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Poniżej zakresu
                </Badge>
                <span className="text-mid text-sm!">Tekst jest krótszy niż typowy</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Powyżej zakresu
                </Badge>
                <span className="text-mid text-sm!">Tekst jest dłuższy niż typowy</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Postęp</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Kolorowy pasek postępu i status oceny pomagają szybko ocenić długość tekstu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Dobra długość</strong> (zielony) - tekst mieści się w orientacyjnym zakresie dla wybranego typu strony.
            </li>
            <li>
              <strong className="text-warning-text">Poniżej zakresu</strong> (żółty) - tekst jest krótszy niż typowy dla tego typu strony. Jeśli odpowiada na pytania czytelnika, długość może być
              odpowiednia.
            </li>
            <li>
              <strong className="text-error-text">Powyżej zakresu</strong> (czerwony) - tekst jest dłuższy niż typowy. Jeśli każdy akapit wnosi nową informację, długość jest uzasadniona.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Zakresy opierają się na analizach treści, które dobrze pozycjonują się w wyszukiwarkach. Jeśli tekst odpowiada na pytania czytelnika, długość jest odpowiednia niezależnie od wyniku w
            liczniku.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Ile słów powinien mieć tekst - optymalna długość dla SEO">
          <p className="text-mid mb-4">
            Poniższe zakresy opierają się na analizach treści, które dobrze pozycjonują się w wyszukiwarkach. Długość tekstu sama w sobie nie wpływa na pozycję w Google - liczy się to, czy treść
            odpowiada na pytania czytelnika.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Typ strony</th>
                  <th className="py-2 pr-4 font-semibold">Zakres</th>
                  <th className="py-2 font-semibold">Kiedy krótszy, kiedy dłuższy?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Opis produktu</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Prosty produkt (np. kubek) - 80-150 słów. Złożony sprzęt (np. laptop) - 300-400 słów, bo kupujący ma więcej pytań.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona usługi</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1500 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Lokalna usługa (np. hydraulik) - 500-700 słów. Usługa B2B z procesem i FAQ - 1200-1500 słów.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona główna</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1000 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Cel strony głównej to przekazanie głównej wartości i pokierowanie dalej - tekst ma wspierać nawigację, nie zastępować podstrony.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona ofertowa</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2500 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Prosta oferta - 600-1000 słów. Oferta wymagająca wyjaśnienia procesu, wariantów i odpowiedzi na obiekcje - 1500-2500 słów.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Artykuł blogowy</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1200–3000 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Odpowiedź na proste pytanie - 1200-1800 słów. Kompleksowe zagadnienie z wieloma aspektami - 2000-3000 słów.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Poradnik</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2500–6000 słów</td>
                  <td className="text-primary-light0 py-2 text-sm">Wąski temat - 2500-3500 słów. Szeroki temat z wieloma krokami i przykładami - 4000-6000 słów.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dla kogo jest licznik słów online?"
          description="Narzędzie do liczenia słów dla copywriterów i nie tylko - oto kto najczęściej korzysta z licznika:"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Copywriterzy i osoby tworzące treści',
              description: 'Sprawdzają, czy tekst mieści się w zalecanym zakresie dla danego typu strony. Licznik słów do SEO pomaga ocenić, czy artykuł jest wystarczająco rozbudowany.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Blogerzy',
              description: 'Kontrolują długość wpisów, żeby utrzymać spójność publikacji. Sprawdzają czas czytania przed publikacją.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Właściciele sklepów internetowych',
              description: 'Weryfikują opisy produktów pod kątem limitów znaków na platformach sprzedażowych (Allegro, OLX, Amazon).',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Specjaliści SEO',
              description: 'Oceniają, czy treści na stronie mają optymalną długość w porównaniu do konkurencji. Analizują stosunek słów do tematyki.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Studenci i naukowcy',
              description: 'Sprawdzają, czy praca mieści się w wymaganym limicie słów lub znaków.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Tłumacze',
              description: 'Liczą znaki bez spacji do wyceny tłumaczenia (standardowa jednostka rozliczeniowa).',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Limity znaków na popularnych platformach">
          <p className="text-mid mb-4">Licznik znaków przydaje się przy tworzeniu treści dla platform z ograniczeniami długości:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Platforma / Element</th>
                  <th className="py-2 pr-4 font-semibold">Limit znaków</th>
                  <th className="py-2 font-semibold">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - meta title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50-60 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Dłuższe tytuły są obcinane w wynikach wyszukiwania.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google - meta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">150-160 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Opis widoczny pod linkiem w wynikach wyszukiwania.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Allegro - tytuł oferty</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Krótki, konkretny tytuł z najważniejszymi słowami kluczowymi.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Allegro - opis produktu</td>
                  <td className="py-2 pr-4 whitespace-nowrap">4000 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Opis widoczny na karcie produktu.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">OLX - tytuł ogłoszenia</td>
                  <td className="py-2 pr-4 whitespace-nowrap">70 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Tytuł widoczny w wynikach wyszukiwania.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">OLX - opis ogłoszenia</td>
                  <td className="py-2 pr-4 whitespace-nowrap">9000 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Pełny opis oferty.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">X (Twitter) - post</td>
                  <td className="py-2 pr-4 whitespace-nowrap">280 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Standardowy limit dla zwykłych użytkowników.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn - post</td>
                  <td className="py-2 pr-4 whitespace-nowrap">3000 znaków</td>
                  <td className="text-primary-light0 py-2 text-sm">Po ~210 znakach pojawia się "zobacz więcej".</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia ten licznik słów i znaków?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Sześć typów stron z zalecanymi zakresami',
              description: 'Opis produktu, strona usługi, strona główna, strona ofertowa, artykuł blogowy i poradnik - każdy typ ma własne zakresy oparte na analizach.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Przetwarzanie lokalne w przeglądarce',
              description: 'Tekst nie jest wysyłany na żaden serwer - cała analiza odbywa się lokalnie na urządzeniu.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Ocena długości tekstu',
              description: 'Nie tylko liczysz słowa, ale dostajesz informację, czy długość jest odpowiednia dla danego typu strony.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Zakresy oparte na SEO',
              description: 'Zalecane długości bazują na analizach treści, które dobrze pozycjonują się w wyszukiwarkach.',
            },
            {
              icon: <RiTimerLine className="h-6 w-6" />,
              title: 'Czas czytania',
              description: 'Od razu wiesz, ile minut zajmie czytelnikom przeczytanie tekstu.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Kopiowanie raportu',
              description: 'Przycisk Kopiuj raport przenosi do schowka podsumowanie ze wszystkimi statystykami i oceną długości.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Najczęstsze pytania dotyczące licznika słów i znaków"
          openByDefault={1}
          items={[
            ...faqItems,
            {
              question: 'Czy mogę skopiować raport ze statystykami?',
              answer:
                'Tak. Pod statystykami znajduje się przycisk Kopiuj raport - przenosi do schowka podsumowanie z liczbą słów, znaków, akapitów, czasem czytania i oceną długości. Raport można wkleić do dokumentu lub wysłać współpracownikom.',
              answerSchemaText: 'Tak. Kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie ze wszystkimi metrykami i oceną.',
            },
          ]}
          pageUrl={toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych treści na stronę?"
        description="Tworzymy teksty, które pozycjonują się w Google i przekonują do działania. Opisy usług, artykuły blogowe, treści na strony"
        btnOne="Umów rozmowę o treściach"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę tworzenia treści"
        btnTwoLink="/uslugi/tworzenie-tresci"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
