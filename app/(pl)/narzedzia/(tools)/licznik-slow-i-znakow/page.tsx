import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Licznik słów i znaków online — sprawdź długość tekstu',
  description: 'Darmowy licznik słów i znaków online. Policz słowa, znaki, akapity i czas czytania. Sprawdź, czy tekst ma odpowiednią długość dla artykułu, opisu produktu czy strony usługi.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow') },
  openGraph: {
    title: 'Licznik słów i znaków online — sprawdź długość tekstu',
    description: 'Darmowy licznik słów i znaków online. Policz słowa, znaki, akapity i czas czytania. Sprawdź, czy tekst ma odpowiednią długość dla artykułu, opisu produktu czy strony usługi.',
    url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
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
  '@type': 'SoftwareApplication',
  name: 'Licznik słów i znaków online',
  alternateName: 'Licznik słów z oceną długości tekstu',
  url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik słów i znaków po polsku. Sprawdza liczbę słów, znaków, akapitów i szacowany czas czytania. Ocenia długość tekstu dla różnych typów stron: opis produktu, strona usługi, strona główna, landing page, artykuł blogowy, poradnik.',
  inLanguage: 'pl-PL',
  isAccessibleForFree: true,
  featureList: [
    'Liczenie słów w tekście',
    'Liczenie znaków ze spacjami i bez spacji',
    'Liczenie akapitów',
    'Szacowanie czasu czytania',
    'Ocena długości tekstu dla różnych typów stron',
    'Zalecenia długości dla: opisu produktu, strony usługi, strony głównej, landing page, artykułu blogowego, poradnika',
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

const faqItems = [
  {
    question: 'Czy długość tekstu wpływa na pozycję w Google?',
    answer:
      'Długość tekstu NIE jest bezpośrednim czynnikiem rankingowym. Google ocenia, czy treść odpowiada na pytanie użytkownika i czy jest wartościowa. Tekst z 800 słowami, który wyczerpuje temat, może pozycjonować się lepiej niż rozwodniony artykuł z 3000 słów. Zakresy w narzędziu to orientacyjne widełki, nie cele do osiągnięcia.',
    answerSchemaText: 'Długość tekstu nie jest bezpośrednim czynnikiem rankingowym. Google ocenia wartość treści dla użytkownika.',
  },
  {
    question: 'Dlaczego zakresy słów są takie szerokie?',
    answer:
      'Bo ten sam typ strony może wymagać różnej długości w zależności od kontekstu. Opis prostego produktu spożywczego to 80-150 słów. Opis złożonego urządzenia elektronicznego — 300-400 słów. Prosta usługa lokalna wymaga 500 słów, złożona usługa B2B z procesem i FAQ — 1500 słów. Szeroki zakres pozwala dopasować długość do rzeczywistych potrzeb.',
    answerSchemaText: 'Szeroki zakres pozwala dopasować długość do kontekstu — prosty produkt wymaga mniej słów niż złożony.',
  },
  {
    question: 'Jak interpretować ocenę "za krótki" lub "za długi"?',
    answer:
      'To sygnał, że tekst jest poza orientacyjnym zakresem — nie wyrok. Jeśli tekst jest "za krótki", ale wyczerpuje temat i odpowiada na pytania czytelnika, może być wystarczający. Jeśli jest "za długi", ale każdy akapit wnosi wartość, długość jest uzasadniona. Traktuj ocenę jako punkt wyjścia do refleksji, nie jako regułę.',
    answerSchemaText: 'Ocena to sygnał, nie wyrok. Jeśli tekst wyczerpuje temat, długość jest odpowiednia niezależnie od wyniku.',
  },
  {
    question: 'Jak licznik oblicza czas czytania?',
    answer:
      'Narzędzie przyjmuje średnią prędkość 200 słów na minutę. To przybliżona wartość — niektórzy czytają szybciej, inni wolniej. Tekst techniczny lub wymagający skupienia będzie czytany wolniej niż lekki artykuł lifestylowy.',
    answerSchemaText: 'Narzędzie przyjmuje średnią prędkość czytania 200 słów na minutę. To wartość orientacyjna dla typowego tekstu.',
  },
  {
    question: 'Skąd pochodzą zalecane zakresy?',
    answer:
      'Zakresy bazują na analizach treści, które dobrze pozycjonują się w Google, oraz na praktykach tworzenia treści. Są celowo szerokie, aby uwzględniać różne konteksty. Pamiętaj: to orientacyjne widełki, nie sztywne normy. Najważniejsza jest wartość treści dla czytelnika i wyczerpanie tematu.',
    answerSchemaText: 'Zakresy opierają się na analizach SEO i praktykach tworzenia treści. To orientacyjne widełki, nie sztywne normy.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-word-count-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Licznik słów i znaków z oceną długości"
        description="Wklej tekst, wybierz typ strony, a narzędzie pokaże liczbę słów, znaków, akapitów i oceni, czy długość jest odpowiednia dla danego rodzaju treści"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/licznik-slow-i-znakow', label: 'Licznik słów i znaków' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Policz słowa i sprawdź długość tekstu">
          <p className="text-mid">
            Piszesz artykuł na bloga, opis produktu albo tekst na stronę usługi? Wklej go tutaj, a narzędzie policzy słowa, znaki i akapity. Zobaczysz też, ile minut zajmie czytanie i czy długość jest odpowiednia dla danego typu strony.
          </p>
          <p className="text-mid mt-3">
            Dlaczego to ważne? Google lepiej ocenia teksty, które wyczerpują temat, ale nie są przesadnie rozwlekłe. Zbyt krótki opis produktu może nie przekonać do zakupu. Zbyt długi artykuł — zniechęcić do czytania. Sprawdź, czy Twój tekst mieści się w zalecanym zakresie.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <WordCountTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika?"
          description="Sprawdzenie długości tekstu zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz typ strony',
              description: 'Wybierz, dla jakiego typu strony piszesz tekst. Każdy typ ma inne zalecenia dotyczące długości.',
            },
            {
              title: '2. Wklej tekst',
              description: 'Wklej lub wpisz tekst. Narzędzie od razu pokaże liczbę słów, znaków, akapitów i czas czytania.',
            },
            {
              title: '3. Sprawdź ocenę',
              description: 'Zobacz kolorowy status (za krótki, dobra długość, za długi) i wskazówki, co zrobić dalej.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/licznik-slow-i-znakow/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Co mierzy licznik?">
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Słowa</strong> — łączna liczba słów. To główny wskaźnik długości tekstu.
            </li>
            <li>
              <strong>Znaki (ze spacjami)</strong> — wszystkie znaki łącznie ze spacjami. Przydatne, gdy system CMS ma limit znaków (np. przy opisach na Allegro czy OLX).
            </li>
            <li>
              <strong>Znaki (bez spacji)</strong> — tylko litery, cyfry i interpunkcja. Czasem wymagane przez drukarnie lub przy rozliczeniach za tekst.
            </li>
            <li>
              <strong>Akapity</strong> — ile masz bloków tekstu oddzielonych pustymi liniami. Pomaga ocenić, czy tekst jest dobrze podzielony.
            </li>
            <li>
              <strong>Czas czytania</strong> — ile minut zajmie przeczytanie tekstu przy średniej prędkości 200 słów na minutę.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Ile słów powinien mieć tekst?" btnOne="Zobacz pełne zalecenia" btnOneLink="/narzedzia/licznik-slow-i-znakow/instrukcja">
          <p className="text-mid mb-4">
            Poniższe zakresy to <strong>orientacyjne widełki</strong>, nie sztywne normy. Długość tekstu nie jest czynnikiem rankingowym w Google — liczy się wartość dla
            czytelnika i wyczerpanie tematu.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Typ strony</th>
                  <th className="py-2 pr-4 font-semibold">Zakres</th>
                  <th className="py-2 font-semibold">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Opis produktu</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Im prostszy produkt, tym krótszy opis. Złożony sprzęt wymaga więcej wyjaśnień.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona usługi</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1500 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Prosta usługa lokalna wymaga mniej słów niż złożona oferta z wieloma etapami.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona główna</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1000 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Mniej tekstu z jasnym przekazem działa lepiej niż dużo tekstu bez struktury.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Strona ofertowa</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2500 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Droższa oferta wymaga więcej wyjaśnień i budowania zaufania.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Artykuł blogowy</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1200–3000 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Krótszy tekst, który wyczerpuje temat, jest lepszy niż dłuższy z wodą.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Poradnik</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2500–6000 słów</td>
                  <td className="py-2 text-sm text-neutral-600">Kompleksowe opracowanie tematu. Długość zależy od zakresu, nie od ambicji.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} pageUrl={toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow')} />

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
