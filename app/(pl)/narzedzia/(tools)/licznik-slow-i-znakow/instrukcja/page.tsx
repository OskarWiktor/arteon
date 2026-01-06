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
  description:
    'Sprawdź, ile słów powinien mieć tekst na stronę główną, opis usługi czy artykuł blogowy. Instrukcja licznika z oceną długości i wskazówkami SEO.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja') },
  openGraph: {
    title: 'Jak używać licznika słów i znaków? | Instrukcja online',
    description:
      'Sprawdź, ile słów powinien mieć tekst na stronę główną, opis usługi czy artykuł blogowy. Instrukcja licznika z oceną długości i wskazówkami SEO.',
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
    question: 'Ile słów powinien mieć artykuł blogowy?',
    answer:
      'Artykuł blogowy powinien mieć od 2500 do 4000 słów. To pozwala wyczerpująco omówić temat i odpowiedzieć na pytania czytelnika. Krótsze artykuły (poniżej 2000 słów) rzadko pozycjonują się dobrze w konkurencyjnych frazach. Dłuższe artykuły (powyżej 4000 słów) warto rozważyć jako kompleksowe poradniki lub podzielić na serię powiązanych artykułów.',
    answerSchemaText:
      'Artykuł blogowy powinien mieć od 2500 do 4000 słów. To pozwala wyczerpująco omówić temat i odpowiedzieć na pytania czytelnika.',
  },
  {
    question: 'Czy dłuższy tekst zawsze jest lepszy dla SEO?',
    answer:
      'Nie zawsze. Długość tekstu powinna być dopasowana do tematu i intencji użytkownika. Opis produktu w sklepie nie musi mieć 2000 słów - wystarczy 100-300 słów z konkretnymi informacjami. Artykuł odpowiadający na złożone pytanie powinien być dłuższy. Najważniejsza jest wartość dla czytelnika, nie sama liczba słów.',
    answerSchemaText:
      'Nie zawsze. Długość tekstu powinna być dopasowana do tematu i intencji użytkownika. Najważniejsza jest wartość dla czytelnika.',
  },
  {
    question: 'Jak licznik oblicza czas czytania?',
    answer:
      'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna - niektórzy czytają szybciej, inni wolniej. Tekst techniczny lub wymagający skupienia będzie czytany wolniej niż lekki artykuł. Wynik zaokrąglamy w górę, więc 150 słów to 1 minuta.',
    answerSchemaText:
      'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna dla typowego tekstu.',
  },
  {
    question: 'Skąd pochodzą zalecane zakresy długości?',
    answer:
      'Zakresy opierają się na analizach SEO i praktykach tworzenia treści. Artykuły pozycjonujące się wysoko w Google mają zwykle od 1500 do 2500 słów. Opisy produktów skuteczne w e-commerce to 100-300 słów. Landing page z pełną argumentacją sprzedażową wymaga 800-1500 słów. To orientacyjne wartości, które sprawdzają się w większości przypadków.',
    answerSchemaText:
      'Zakresy opierają się na analizach SEO i praktykach tworzenia treści. To orientacyjne wartości sprawdzające się w większości przypadków.',
  },
  {
    question: 'Czy mogę skopiować raport ze statystykami?',
    answer:
      'Tak. Po wklejeniu tekstu kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie z liczbą słów, znaków, akapitów, czasem czytania i oceną długości. Możesz wkleić raport do dokumentu, e-maila lub narzędzia do zarządzania projektem.',
    answerSchemaText:
      'Tak. Kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie ze wszystkimi metrykami i oceną.',
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
            Długość tekstu ma znaczenie dla pozycjonowania w Google i dla czytelnika. Zbyt krótki tekst może nie wyczerpywać tematu. Zbyt długi
            może zniechęcać do czytania. Optymalny zakres zależy od typu strony.
          </p>
          <p className="text-mid mt-3">
            Opis produktu w sklepie internetowym nie musi być rozbudowany - wystarczy 100-300 słów z konkretnymi informacjami. Artykuł blogowy,
            który ma się pozycjonować w Google, powinien mieć 1500-2500 słów, aby wyczerpująco odpowiedzieć na pytanie czytelnika.
          </p>
          <p className="text-mid mt-3">
            Narzędzie pokazuje, czy tekst mieści się w zalecanym zakresie dla danego typu strony. Wklej tekst, wybierz rodzaj strony i natychmiast zobacz wynik.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Typy stron i zalecane długości">
          <p className="text-mid mb-4">
            Każdy typ strony ma inny cel i wymaga innej ilości treści. Poniżej znajdziesz orientacyjne zakresy, które sprawdzają się w praktyce:
          </p>

          <h3 className="h4 mt-6 mb-2">Opis produktu w sklepie (100-300 słów)</h3>
          <p className="text-mid">
            Krótki, konkretny tekst z najważniejszymi informacjami: co to jest, dla kogo, jakie ma cechy, dlaczego warto kupić. Zbyt długi opis
            może zniechęcić - klient chce szybko podjąć decyzję.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona usługi (800-1500 słów)</h3>
          <p className="text-mid">
            Opis usługi z korzyściami dla klienta, procesem realizacji i odpowiedziami na typowe pytania. Tekst powinien przekonać, że
            rozwiązujesz konkretny problem.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona główna (800-1500 słów)</h3>
          <p className="text-mid">
            Prezentacja firmy, najważniejsze usługi, dowody społeczne (opinie, realizacje) i zachęta do dalszego poznania oferty. Strona główna
            to wizytówka - powinna być treściwa, ale nie przytłaczająca.
          </p>

          <h3 className="h4 mt-6 mb-2">Landing page (1500-3000 słów)</h3>
          <p className="text-mid">
            Strona sprzedażowa z pełną argumentacją: problem, rozwiązanie, korzyści, dowody, cena, wezwanie do działania. Dłuższy tekst pozwala
            rozwiać wątpliwości i przekonać do zakupu lub kontaktu.
          </p>

          <h3 className="h4 mt-6 mb-2">Artykuł blogowy (2500-4000 słów)</h3>
          <p className="text-mid">
            Wnikliwy materiał odpowiadający na konkretne pytanie. Artykuły tej długości dobrze pozycjonują się w Google, bo wyczerpują temat.
            Powinny edukować, budować autorytet i naturalnie prowadzić do oferty.
          </p>

          <h3 className="h4 mt-6 mb-2">Poradnik / przewodnik (4000-7000 słów)</h3>
          <p className="text-mid">
            Kompleksowy materiał omawiający temat dogłębnie, często z podziałem na rozdziały. Poradniki to świetne zasoby linkowania - inne
            strony chętnie do nich odsyłają.
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
              description:
                'Wybierz z listy rozwijalnej, dla jakiego typu strony piszesz tekst. Każdy typ ma inne zalecenia dotyczące minimalnej i maksymalnej liczby słów.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Wklej tekst',
              description:
                'Wklej lub wpisz tekst w duże pole po prawej stronie. Narzędzie od razu policzy słowa, znaki (ze spacjami i bez), akapity oraz oszacuje czas czytania.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: '3. Sprawdź ocenę',
              description:
                'Zobacz kolorowy pasek postępu i status oceny. Zielony oznacza dobrą długość, żółty za krótki tekst, czerwony za długi. Pod spodem znajdziesz wskazówkę.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Skopiuj raport',
              description:
                'Kliknij Kopiuj raport, aby skopiować podsumowanie ze statystykami i oceną. Możesz wkleić je do dokumentu lub wysłać współpracownikom.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak interpretować wyniki?">
          <h3 className="h4 mb-2">Statystyki tekstu</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Słowa</strong> - łączna liczba słów w tekście. To główna metryka oceny długości.
            </li>
            <li>
              <strong>Znaki (ze spacjami)</strong> - wszystkie znaki, łącznie ze spacjami. Przydatne przy limitach znaków (np. w systemach CMS).
            </li>
            <li>
              <strong>Znaki (bez spacji)</strong> - tylko litery, cyfry i znaki interpunkcyjne. Czasem wymagane przez drukarnie lub systemy.
            </li>
            <li>
              <strong>Akapity</strong> - liczba bloków tekstu oddzielonych pustymi liniami. Pokazuje strukturę tekstu.
            </li>
            <li>
              <strong>Czas czytania</strong> - szacowany czas w minutach przy średniej prędkości 200 słów/minutę.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-2">Statusy oceny</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-emerald-700">Dobra długość</strong> (zielony) - tekst mieści się w zalecanym zakresie dla wybranego typu
              strony.
            </li>
            <li>
              <strong className="text-amber-700">Za krótki</strong> (żółty) - tekst jest poniżej minimum. Rozważ dodanie treści.
            </li>
            <li>
              <strong className="text-red-700">Za długi</strong> (czerwony) - tekst przekracza zalecany zakres. Rozważ skrócenie lub podział na
              części.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie"
          btnOne="Przejdź do licznika słów"
          btnOneLink="/narzedzia/licznik-slow-i-znakow"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak działa licznik, możesz sprawdzić długość swoich tekstów. Jeśli potrzebujesz pomocy z tworzeniem treści na
            stronę, blog czy sklep — <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się{' '}
            <Link href="/uslugi/tworzenie-tresci">profesjonalnym tworzeniem treści</Link>, które pozycjonują się w Google i przekonują do
            działania.
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
