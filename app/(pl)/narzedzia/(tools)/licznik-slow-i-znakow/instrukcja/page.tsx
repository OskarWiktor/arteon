import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Link from 'next/link';
import { RiListCheck2, RiFileTextLine, RiBarChartLine, RiFileCopyLine } from 'react-icons/ri';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jak używać licznika słów i znaków? | Instrukcja online',
  description: 'Sprawdź, ile słów powinien mieć tekst na stronę główną, opis usługi czy artykuł blogowy. Instrukcja licznika z oceną długości i wskazówkami SEO.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja') },
  openGraph: {
    title: 'Jak używać licznika słów i znaków? | Instrukcja online',
    description: 'Sprawdź, ile słów powinien mieć tekst na stronę główną, opis usługi czy artykuł blogowy. Instrukcja licznika z oceną długości i wskazówkami SEO.',
    url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać licznika słów i znaków',
  description:
    'Instrukcja krok po kroku: sprawdź długość tekstu i oceń, czy jest odpowiednia dla danego typu strony. Dowiedz się, ile słów powinien mieć opis produktu, strona usługi, artykuł blogowy czy poradnik.',
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja'),
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz typ strony',
      text: 'Wybierz z listy, dla jakiego typu strony piszesz tekst: opis produktu, strona usługi, strona główna, landing page, artykuł blogowy lub poradnik.',
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
      text: 'Kliknij przycisk Kopiuj raport, aby skopiować podsumowanie ze statystykami i oceną do schowka.',
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
      'Długość tekstu NIE jest bezpośrednim czynnikiem rankingowym. Google ocenia, czy treść odpowiada na pytanie użytkownika i czy jest wartościowa. Tekst z 800 słowami, który wyczerpuje temat, może pozycjonować się lepiej niż rozwodniony artykuł z 3000 słów.',
    answerSchemaText: 'Długość tekstu nie jest bezpośrednim czynnikiem rankingowym. Google ocenia wartość treści dla użytkownika.',
  },
  {
    question: 'Dlaczego zakresy słów są takie szerokie?',
    answer:
      'Bo ten sam typ strony może wymagać różnej długości w zależności od kontekstu. Opis prostego produktu to 80-150 słów, złożonej elektroniki — 300-400 słów. Prosta usługa lokalna wymaga 500 słów, złożona B2B z FAQ — 1500 słów. Szeroki zakres pozwala dopasować długość do rzeczywistych potrzeb.',
    answerSchemaText: 'Szeroki zakres pozwala dopasować długość do kontekstu — prosty produkt wymaga mniej słów niż złożony.',
  },
  {
    question: 'Jak interpretować ocenę "za krótki" lub "za długi"?',
    answer:
      'To sygnał, że tekst jest poza orientacyjnym zakresem — nie wyrok. Jeśli tekst "za krótki" wyczerpuje temat, może być wystarczający. Jeśli "za długi" każdy akapit wnosi wartość, długość jest uzasadniona. Traktuj ocenę jako punkt wyjścia do refleksji.',
    answerSchemaText: 'Ocena to sygnał, nie wyrok. Jeśli tekst wyczerpuje temat, długość jest odpowiednia niezależnie od wyniku.',
  },
  {
    question: 'Jak licznik oblicza czas czytania?',
    answer:
      'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna — niektórzy czytają szybciej, inni wolniej. Tekst techniczny będzie czytany wolniej niż lekki artykuł.',
    answerSchemaText: 'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna dla typowego tekstu.',
  },
  {
    question: 'Czy mogę skopiować raport ze statystykami?',
    answer:
      'Tak. Po wklejeniu tekstu kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie z liczbą słów, znaków, akapitów, czasem czytania i oceną długości.',
    answerSchemaText: 'Tak. Kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie ze wszystkimi metrykami i oceną.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-word-count-instruction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Jak używać licznika słów i znaków"
        description="Ile słów powinien mieć tekst na stronę? Jak ocenić, czy długość jest odpowiednia? Instrukcja licznika z oceną i wskazówkami."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/licznik-slow-i-znakow', label: 'Licznik słów i znaków' }}
        fourth={{ href: '/narzedzia/licznik-slow-i-znakow/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Po co liczyć słowa na stronie?">
          <p className="text-mid">
            <strong>Długość tekstu nie jest czynnikiem rankingowym w Google.</strong> Liczy się wartość treści dla czytelnika i wyczerpanie tematu. Narzędzie pomaga ocenić, czy tekst mieści się w
            typowym zakresie dla danego typu strony.
          </p>
          <p className="text-mid mt-3">
            Zakresy słów to <strong>orientacyjne widełki</strong>, nie sztywne normy. Opis produktu może mieć 80 słów (prosty produkt) lub 400 słów (złożony sprzęt). Artykuł blogowy może mieć 1200
            słów (prosty temat) lub 3000 słów (kompleksowe zagadnienie).
          </p>
          <p className="text-mid mt-3">Traktuj wynik jako punkt wyjścia do refleksji, nie jako regułę. Jeśli tekst wyczerpuje temat i odpowiada na pytania czytelnika — długość jest odpowiednia.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Typy stron i orientacyjne zakresy">
          <p className="text-mid mb-4">
            Poniższe zakresy to <strong>widełki, nie normy</strong>. Długość zależy od kontekstu — ten sam typ strony może wymagać różnej ilości słów.
          </p>

          <h3 className="h4 mt-6 mb-2">Opis produktu (80–400 słów)</h3>
          <p className="text-mid">
            <strong>Prosty produkt</strong> (np. spożywczy): 80-150 słów. <strong>Złożony produkt</strong> (elektronika, sprzęt): 250-400 słów z specyfikacją i zastosowaniami. Długość powinna
            odpowiadać złożoności produktu i pytaniom kupującego.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona usługi (500–1500 słów)</h3>
          <p className="text-mid">
            <strong>Prosta usługa lokalna</strong>: 500-700 słów. <strong>Złożona usługa B2B</strong> z procesem, FAQ i case studies: do 1500 słów. Celem jest odpowiedź na pytania klienta, nie
            osiągnięcie konkretnej liczby.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona główna (400–1000 słów)</h3>
          <p className="text-mid">
            Nowoczesne strony główne są wizualne. Tekst ma jasno komunikować wartość, nie zasypać informacjami. Mniej tekstu z wyraźnym przekazem &gt; więcej tekstu bez jasnej struktury.
          </p>

          <h3 className="h4 mt-6 mb-2">Landing page (600–2500 słów)</h3>
          <p className="text-mid">
            <strong>Krótki LP</strong> dla prostej oferty: 600-1000 słów. <strong>Long-form LP</strong> dla drogich produktów/usług wymagających edukacji: 1500-2500 słów. Długość zależy od złożoności
            decyzji zakupowej.
          </p>

          <h3 className="h4 mt-6 mb-2">Artykuł blogowy (1200–3000 słów)</h3>
          <p className="text-mid">
            Długość powinna wynikać z tematu, nie z ambicji SEO. Krótszy artykuł wyczerpujący temat jest lepszy niż dłuższy rozwodniony. Proste pytanie: 1200-1800 słów. Złożone zagadnienie: 2000-3000
            słów.
          </p>

          <h3 className="h4 mt-6 mb-2">Poradnik / przewodnik (2500–6000 słów)</h3>
          <p className="text-mid">
            Kompleksowe opracowanie tematu. Nie każdy poradnik wymaga 5000 słów — długość zależy od zakresu. Wąski temat: 2500-3500 słów. Szeroki temat z wieloma aspektami: 4000-6000 słów.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak korzystać z narzędzia?"
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
              description: 'Kliknij Kopiuj raport, aby skopiować podsumowanie ze statystykami i oceną. Możesz wkleić je do dokumentu lub wysłać współpracownikom.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak interpretować wyniki?">
          <h3 className="h4 mb-2">Statystyki tekstu</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Słowa</strong> — łączna liczba słów. To główny wskaźnik długości tekstu.
            </li>
            <li>
              <strong>Znaki (ze spacjami)</strong> — wszystkie znaki. Przydatne przy limitach w CMS (np. Allegro, OLX).
            </li>
            <li>
              <strong>Znaki (bez spacji)</strong> — tylko litery, cyfry i interpunkcja. Czasem wymagane przez drukarnie.
            </li>
            <li>
              <strong>Akapity</strong> — ile bloków tekstu oddzielonych pustymi liniami. Pokazuje strukturę.
            </li>
            <li>
              <strong>Czas czytania</strong> — szacowany czas przy 200 słów/minutę.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-2">Statusy oceny — sygnały, nie wyroki</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-emerald-700">Dobra długość</strong> (zielony) — tekst mieści się w orientacyjnym zakresie.
            </li>
            <li>
              <strong className="text-amber-700">Poniżej zakresu</strong> (żółty) — tekst jest krótszy niż typowy. Jeśli wyczerpuje temat, może być wystarczający.
            </li>
            <li>
              <strong className="text-red-700">Powyżej zakresu</strong> (czerwony) — tekst jest dłuższy niż typowy. Jeśli każdy akapit wnosi wartość, długość jest uzasadniona.
            </li>
          </ul>
          <p className="text-mid mt-4">
            <strong>Pamiętaj:</strong> zakresy to orientacyjne widełki, nie sztywne normy. Najważniejsza jest wartość treści dla czytelnika.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie" btnOne="Przejdź do licznika słów" btnOneLink="/narzedzia/licznik-slow-i-znakow" btnTwo="Zobacz inne narzędzia" btnTwoLink="/narzedzia">
          <p className="text-mid">
            Teraz, gdy wiesz jak działa licznik, możesz sprawdzić długość swoich tekstów. Jeśli potrzebujesz pomocy z tworzeniem treści na stronę, blog czy sklep —{' '}
            <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/tworzenie-tresci">profesjonalnym tworzeniem treści</Link>, które pozycjonują się w Google i przekonują
            do działania.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap variant="line" />

        <FaqPanels items={faqItems} pageUrl={toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja')} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych treści?"
        description="Licznik pokazuje długość, ale jakość treści to coś więcej. Tworzymy teksty, które pozycjonują się i przekonują do działania"
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
