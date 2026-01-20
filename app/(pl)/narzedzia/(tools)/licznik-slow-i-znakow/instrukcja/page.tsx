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
  description: 'Sprawdź długość tekstu i oceń, czy jest odpowiednia dla danego typu strony. Dowiedz się, ile słów powinien mieć opis produktu, strona usługi, artykuł blogowy czy poradnik.',
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow/instrukcja'),
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
      'Długość tekstu sama w sobie nie jest czynnikiem rankingowym. Google ocenia, czy treść odpowiada na pytanie użytkownika i czy jest dla niego wartościowa. Artykuł z 800 słowami, który wyczerpująco odpowiada na pytanie, może pozycjonować się lepiej niż artykuł z 3000 słów, który nie trafia w sedno. Zakresy w narzędziu opierają się na analizach treści, które dobrze się pozycjonują.',
    answerSchemaText: 'Długość tekstu nie jest bezpośrednim czynnikiem rankingowym. Google ocenia wartość treści dla użytkownika.',
  },
  {
    question: 'Dlaczego zakresy słów są takie szerokie?',
    answer:
      'Ten sam typ strony może wymagać różnej długości w zależności od złożoności tematu. Opis prostego produktu (np. kubek) to 80-150 słów - wystarczy podać materiał, pojemność i przeznaczenie. Opis laptopa to 300-400 słów, bo kupujący pyta o procesor, pamięć, ekran, baterię. Podobnie z usługami: lokalna usługa hydraulika to 500-700 słów, a kompleksowa usługa wdrożenia systemu B2B to 1200-1500 słów.',
    answerSchemaText: 'Szeroki zakres pozwala dopasować długość do kontekstu - prosty produkt wymaga mniej słów niż złożony.',
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
    question: 'Czy mogę skopiować raport ze statystykami?',
    answer:
      'Tak. Po wklejeniu tekstu kliknij przycisk Kopiuj raport pod statystykami. Do schowka trafi podsumowanie z liczbą słów, znaków, akapitów, czasem czytania i oceną długości. Możesz wkleić je do dokumentu lub wysłać współpracownikom.',
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
            Licznik słów pomaga zorientować się, gdzie znajduje się tekst względem typowych treści danego typu. Każdy typ strony ma inny cel i inną strukturę - opis produktu odpowiada na pytania
            kupującego, artykuł blogowy wyczerpuje temat, a strona usługi wyjaśnia, co klient otrzyma.
          </p>
          <p className="text-mid mt-3">
            Długość tekstu sama w sobie nie wpływa na pozycję w Google. Wyszukiwarka ocenia, czy treść odpowiada na pytanie użytkownika i czy jest dla niego wartościowa. Zakresy w narzędziu opierają
            się na analizach treści, które dobrze się pozycjonują.
          </p>
          <p className="text-mid mt-3">Jeśli tekst odpowiada na pytania czytelnika i każdy akapit wnosi wartość, długość jest odpowiednia niezależnie od wyniku w liczniku.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Typy stron i zakresy słów">
          <p className="text-mid mb-4">Zakresy opierają się na analizach SEO i praktykach tworzenia treści. Długość zależy od złożoności tematu i pytań, na które tekst ma odpowiedzieć.</p>

          <h3 className="h4 mt-6 mb-2">Opis produktu (80–400 słów)</h3>
          <p className="text-mid">
            Prosty produkt (np. kubek, długopis) wymaga 80-150 słów - wystarczy podać materiał, wymiary i przeznaczenie. Złożony produkt (np. laptop, sprzęt AGD) wymaga 300-400 słów, bo kupujący ma
            więcej pytań: o specyfikację, kompatybilność, gwarancję, porównanie z innymi modelami.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona usługi (500–1500 słów)</h3>
          <p className="text-mid">
            Lokalna usługa (np. hydraulik, fryzjer) wymaga 500-700 słów - zakres prac, cennik orientacyjny, obszar działania. Usługa B2B z procesem (np. wdrożenie systemu, audyt) wymaga 1200-1500
            słów, bo klient chce znać etapy, terminy, co dostanie na każdym kroku.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona główna (400–1000 słów)</h3>
          <p className="text-mid">
            Cel strony głównej to przekazanie głównej wartości i pokierowanie dalej do podstron. Tekst ma wspierać nawigację, nie zastępować podstron usług czy ofert. 400-600 słów wystarcza dla
            prostej firmy, 800-1000 słów dla firmy z wieloma usługami i sekcjami.
          </p>

          <h3 className="h4 mt-6 mb-2">Strona ofertowa (600–2500 słów)</h3>
          <p className="text-mid">
            Prosta oferta (np. jeden produkt, jasna cena) wymaga 600-1000 słów. Oferta wymagająca wyjaśnienia procesu, wariantów, odpowiedzi na obiekcje i budowania zaufania wymaga 1500-2500 słów. Im
            większa decyzja zakupowa, tym więcej pytań ma potencjalny klient.
          </p>

          <h3 className="h4 mt-6 mb-2">Artykuł blogowy (1200–3000 słów)</h3>
          <p className="text-mid">
            Odpowiedź na proste pytanie (np. "Czym jest X?") wymaga 1200-1800 słów - definicja, wyjaśnienie, przykłady. Kompleksowe zagadnienie z wieloma aspektami (np. "Jak wybrać X? Porównanie
            opcji") wymaga 2000-3000 słów, bo temat ma więcej warstw.
          </p>

          <h3 className="h4 mt-6 mb-2">Poradnik / przewodnik (2500–6000 słów)</h3>
          <p className="text-mid">
            Wąski temat (np. "Jak skonfigurować X") wymaga 2500-3500 słów - kroki, przykłady, typowe problemy. Szeroki temat z wieloma krokami i wariantami (np. "Kompletny przewodnik po X") wymaga
            4000-6000 słów, bo każdy aspekt wymaga osobnego omówienia.
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
              <strong>Słowa</strong> - łączna liczba słów w tekście. To główny wskaźnik długości, na którym opiera się ocena.
            </li>
            <li>
              <strong>Znaki (ze spacjami)</strong> - wszystkie znaki łącznie ze spacjami. Przydatne przy limitach w CMS (np. opis produktu na Allegro ma limit 4000 znaków).
            </li>
            <li>
              <strong>Znaki (bez spacji)</strong> - tylko litery, cyfry i interpunkcja. Czasem wymagane przez drukarnie lub przy rozliczeniach za tekst.
            </li>
            <li>
              <strong>Akapity</strong> - ile bloków tekstu oddzielonych pustymi liniami. Pomaga ocenić, czy tekst jest dobrze podzielony na sekcje.
            </li>
            <li>
              <strong>Czas czytania</strong> - szacowany czas przy 200 słów na minutę. Pomaga zorientować się, ile czasu czytelnik spędzi z tekstem.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-2">Statusy oceny</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-emerald-700">Dobra długość</strong> (zielony) - tekst mieści się w orientacyjnym zakresie dla wybranego typu strony.
            </li>
            <li>
              <strong className="text-amber-700">Poniżej zakresu</strong> (żółty) - tekst jest krótszy niż typowy dla tego typu strony. Jeśli odpowiada na pytania czytelnika, długość może być
              odpowiednia.
            </li>
            <li>
              <strong className="text-red-700">Powyżej zakresu</strong> (czerwony) - tekst jest dłuższy niż typowy. Jeśli każdy akapit wnosi nową informację, długość jest uzasadniona.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Zakresy opierają się na analizach treści, które dobrze pozycjonują się w wyszukiwarkach. Jeśli tekst odpowiada na pytania czytelnika, długość jest odpowiednia.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie" btnOne="Przejdź do licznika słów" btnOneLink="/narzedzia/licznik-slow-i-znakow" btnTwo="Zobacz inne narzędzia" btnTwoLink="/narzedzia">
          <p className="text-mid">
            Teraz, gdy wiesz jak działa licznik, możesz sprawdzić długość swoich tekstów. Jeśli potrzebujesz pomocy z tworzeniem treści na stronę, blog czy sklep -{' '}
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
