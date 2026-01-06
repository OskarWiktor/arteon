import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Button from '@/components/ui/buttons/Button';
import { RiDropLine, RiCursorLine, RiLayoutGridLine, RiPaletteLine, RiFileCopyLine, RiSparklingLine, RiMoonLine, RiStackLine, RiContractLeftRightLine } from 'react-icons/ri';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak wygenerować paletę kolorów? | Generator online z 9 typami palet',
  description: 'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczna, komplementarna, triadyczna, pastelowa i inne. Kopiuj kody HEX jednym kliknięciem. Darmowy generator online.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online/instrukcja') },
  openGraph: {
    title: 'Jak wygenerować paletę kolorów? | Generator online z 9 typami palet',
    description: 'Wygeneruj 9 palet kolorów z jednego koloru bazowego: monochromatyczna, komplementarna, triadyczna, pastelowa i inne. Kopiuj kody HEX jednym kliknięciem. Darmowy generator online.',
    url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak wygenerować paletę kolorów z jednego koloru',
  description: 'Instrukcja generowania 9 palet kolorów z jednego koloru bazowego: monochromatyczna, komplementarna, triadyczna, pastelowa i inne. Kopiowanie kolorów HEX jednym kliknięciem.',
  url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow-online/instrukcja'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz kolor bazowy',
      text: 'Wpisz kod HEX w pole tekstowe lub użyj próbnika kolorów (color picker), aby wybrać kolor, od którego chcesz zacząć.',
    },
    {
      '@type': 'HowToStep',
      name: 'Zatwierdź kolor',
      text: 'Kliknij przycisk Zaktualizuj kolor, aby wygenerować palety na podstawie wybranego koloru bazowego.',
    },
    {
      '@type': 'HowToStep',
      name: 'Przeglądaj palety',
      text: 'Narzędzie automatycznie wygeneruje 9 różnych palet: monochromatyczną, analogiczną, komplementarną, triadyczną, split-complementary, pastelową, ciemną, tonalną i minimalistyczną.',
    },
    {
      '@type': 'HowToStep',
      name: 'Skopiuj kolory',
      text: 'Kliknij przycisk Kopiuj przy dowolnym kolorze, aby skopiować jego kod HEX do schowka.',
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
    question: 'Jakie formaty kolorów obsługuje generator?',
    answer:
      'Generator przyjmuje kolory w formacie HEX - zarówno skróconym (#RGB), jak i pełnym (#RRGGBB). Możesz wpisać kolor ręcznie lub użyć próbnika kolorów. Wygenerowane palety pokazują zarówno kody HEX, jak i wartości HSL.',
  },
  {
    question: 'Czy moje kolory są wysyłane na serwer?',
    answer: 'Nie. Wszystkie obliczenia są wykonywane lokalnie w przeglądarce. Żadne dane nie są wysyłane na serwer - narzędzie działa całkowicie offline po załadowaniu strony.',
  },
  {
    question: 'Ile kolorów zawiera każda paleta?',
    answer:
      'Każda paleta zawiera od 4 do 6 kolorów, w zależności od typu. Palety monochromatyczne i tonalne mają więcej odcieni (różne poziomy jasności), podczas gdy palety komplementarne i triadyczne skupiają się na kontrastujących barwach.',
  },
  {
    question: 'Jak wybrać odpowiednią paletę do mojego projektu?',
    answer:
      'Paleta monochromatyczna sprawdzi się w minimalistycznych projektach. Komplementarna i triadyczna są idealne do projektów wymagających silnych akcentów (np. przyciski CTA). Pastelowa i minimalistyczna pasują do delikatnych, eleganckich interfejsów. Ciemna i tonalna są przydatne przy projektowaniu trybu ciemnego.',
  },
  {
    question: 'Czy mogę używać wygenerowanych palet komercyjnie?',
    answer: 'Tak. Wygenerowane palety kolorów możesz swobodnie używać w dowolnych projektach - komercyjnych i niekomercyjnych, bez żadnych ograniczeń.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-color-palette-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak wygenerować paletę kolorów z jednego koloru bazowego"
        description="Wygeneruj 9 palet kolorów z jednego koloru bazowego (np. z logo). Instrukcja z opisem palet: monochromatyczna, komplementarna, triadyczna, pastelowa, ciemna i minimalistyczna."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/generator-palet-kolorow-online', label: 'Generator palet kolorów' }}
        fourth={{ href: '/narzedzia/generator-palet-kolorow-online/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Czym jest paleta kolorów?">
          <p className="text-mid">
            Paleta kolorów to zestaw barw, które do siebie pasują i tworzą spójną całość. Dobrze dobrana paleta sprawia, że strona, grafika czy marka wygląda profesjonalnie i przyjemnie dla oka.
          </p>
          <p className="text-mid mt-3">
            Generator tworzy palety automatycznie na podstawie jednego koloru bazowego — podajesz jeden kolor (np. kolor Twojego logo), a narzędzie generuje kilka różnych palet: monochromatyczną,
            analogiczną, komplementarną i inne, zgodnie z teorią koloru.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak wybrać kolor bazowy?">
          <p className="text-mid">Kolor bazowy to punkt wyjścia dla wszystkich generowanych palet. Możesz go wprowadzić na dwa sposoby:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Próbnik kolorów (color picker)</strong> - kliknij kolorowy kwadrat po lewej stronie, aby otworzyć systemowy próbnik kolorów. To najszybszy sposób, jeśli szukasz koloru wizualnie.
            </li>
            <li>
              <strong>Pole tekstowe HEX</strong> - wpisz kod koloru w formacie HEX, np. <code className="rounded bg-black/5 px-1">#4F6BF5</code> lub skrócony{' '}
              <code className="rounded bg-black/5 px-1">#F00</code> (czerwony). Użyj tego sposobu, jeśli masz już konkretny kolor z brandingu lub projektu.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Po wpisaniu koloru kliknij przycisk <strong>Zaktualizuj kolor</strong>, aby wygenerować palety. Jeśli nie masz jeszcze koloru, użyj przycisku <strong>Losowy kolor</strong> - narzędzie
            wybierze losowy kolor, od którego możesz zacząć eksperymentować.
          </p>
          <div className="mt-4">
            <Button link="/narzedzia/generator-palet-kolorow-online" variant="accent">
              Przejdź do generatora
            </Button>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak działają poszczególne palety?"
          description="Generator tworzy 9 różnych typów palet, każda oparta na innej zasadzie teorii koloru:"
          grid="two"
          items={[
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Paleta monochromatyczna',
              description: (
                <p>
                  Różne odcienie jednego koloru - od jasnego do ciemnego. Wszystkie kolory mają ten sam odcień (H w przestrzeni HSL), a różnią się jasnością.
                  <br />
                  <strong>Kiedy używać:</strong> Eleganckie, minimalistyczne projekty. Bezpieczny wybór, gdy chcesz spójności bez ryzyka.
                </p>
              ),
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Paleta analogiczna',
              description: (
                <p>
                  Kolory sąsiadujące na kole barw (od -30° do +30° od koloru bazowego). Tworzą harmonijne, płynne przejścia.
                  <br />
                  <strong>Kiedy używać:</strong> Projekty wymagające ciepłej lub chłodnej atmosfery. Dobrze sprawdza się w ilustracjach i grafikach.
                </p>
              ),
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Paleta komplementarna',
              description: (
                <p>
                  Kolor bazowy i jego przeciwieństwo na kole barw (przesunięcie o 180°). Tworzy silny kontrast wizualny.
                  <br />
                  <strong>Kiedy używać:</strong> Przyciski CTA, akcenty, elementy wymagające uwagi. Ostrożnie - zbyt dużo kontrastu może męczyć wzrok.
                </p>
              ),
            },
            {
              icon: <RiSparklingLine className="h-6 w-6" />,
              title: 'Paleta triadyczna',
              description: (
                <p>
                  Trzy kolory oddalone o 120° na kole barw (wierzchołki trójkąta równobocznego). Żywa, dynamiczna paleta.
                  <br />
                  <strong>Kiedy używać:</strong> Projekty kreatywne, branding dla młodych marek, materiały reklamowe wymagające energii.
                </p>
              ),
            },
            {
              icon: <RiCursorLine className="h-6 w-6" />,
              title: 'Paleta split-complementary',
              description: (
                <p>
                  Odmiana komplementarnej - zamiast jednego przeciwnego koloru, używa dwóch kolorów przesunietych o ±30° od dopełnienia.
                  <br />
                  <strong>Kiedy używać:</strong> Gdy potrzebujesz kontrastu, ale chcesz uniknąć napięcia wizualnego typowego dla palety komplementarnej.
                </p>
              ),
            },
            {
              icon: <RiDropLine className="h-6 w-6" />,
              title: 'Paleta pastelowa',
              description: (
                <p>
                  Ten sam odcień z obniżonym nasyceniem i podniesioną jasnością. Miękkie, delikatne kolory.
                  <br />
                  <strong>Kiedy używać:</strong> Projekty dla dzieci, kosmetyki, lifestyle, eleganckie interfejsy z dużą ilością bieli.
                </p>
              ),
            },
            {
              icon: <RiMoonLine className="h-6 w-6" />,
              title: 'Paleta ciemna',
              description: (
                <p>
                  Ta sama barwa przy wysokim nasyceniu i obniżonej jasności. Głębokie, intensywne kolory.
                  <br />
                  <strong>Kiedy używać:</strong> Tryb ciemny (dark mode), luksusowe marki, mocne akcenty na ciemnym tle.
                </p>
              ),
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Paleta tonalna (Material Design)',
              description: (
                <p>
                  Kilka kroków jasności jednego odcienia - inspirowana wytycznymi Material Design (skala 50-900).
                  <br />
                  <strong>Kiedy używać:</strong> Interfejsy aplikacji, systemy designu, gdy potrzebujesz spójnej skali odcieni dla stanów (hover, active, disabled).
                </p>
              ),
            },
            {
              icon: <RiContractLeftRightLine className="h-6 w-6" />,
              title: 'Paleta minimalistyczna (Apple)',
              description: (
                <p>
                  Jeden mocny akcent kolorystyczny i kilka bardzo jasnych, miękkich neutrali.
                  <br />
                  <strong>Kiedy używać:</strong> Nowoczesne interfejsy z dużą ilością bieli i subtelnych cieni. Styl typowy dla produktów Apple.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Wybierz kolor bazowy"
          demo={
            <div className="tool-section">
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-3">
                  <input type="color" defaultValue="#4F6BF5" className="tool-color-picker h-11! w-11!" disabled />
                  <input type="text" defaultValue="#4F6BF5" className="tool-input h-10 w-32" readOnly />
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Button size="small" variant="accent" disabled>
                    Zaktualizuj kolor
                  </Button>
                  <Button size="small" disabled className="items-center gap-1">
                    Losowy kolor
                  </Button>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Kliknij kolorowy kwadrat, aby otworzyć systemowy próbnik kolorów, lub wpisz kod HEX bezpośrednio w pole tekstowe. Następnie kliknij <strong>Zaktualizuj kolor</strong>.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Jak skopiować kolor?"
          demo={
            <div className="tool-info-box space-y-2">
              <div>
                <p className="font-semibold!">Paleta monochromatyczna</p>
                <p className="tool-helper">Wszystkie kolory mają ten sam odcień (H), a różnią się głównie jasnością (L).</p>
              </div>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
                  <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: '#1a3a8f' }} />
                  <div className="min-w-0 flex-1">
                    <p className="text-dark text-sm leading-tight font-medium">#1a3a8f</p>
                    <p className="text-light truncate text-[11px]!">hsl(227, 69%, 33%)</p>
                  </div>
                  <button className="text-dark flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-100">Kopiuj</button>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
                  <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: '#4F6BF5' }} />
                  <div className="min-w-0 flex-1">
                    <p className="text-dark text-sm leading-tight font-medium">#4F6BF5</p>
                    <p className="text-light truncate text-[11px]!">hsl(231, 88%, 64%)</p>
                  </div>
                  <button className="text-dark flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-100">Kopiuj</button>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Każdy kolor w wygenerowanych paletach ma przycisk <strong>Kopiuj</strong>. Po kliknięciu kod HEX zostanie skopiowany do schowka.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Najczęstsze problemy">
          <div className="space-y-4">
            <div>
              <p className="text-dark font-semibold">Kolor nie aktualizuje się po wpisaniu</p>
              <p className="text-mid mt-1">
                Upewnij się, że kliknąłeś przycisk <strong>Zaktualizuj kolor</strong>. Samo wpisanie kodu HEX nie generuje palet automatycznie - potwierdź zmianę przyciskiem.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Komunikat o błędnym formacie koloru</p>
              <p className="text-mid mt-1">
                Generator akceptuje tylko format HEX. Upewnij się, że wpisujesz kolor z hashem na początku, np. <code className="rounded bg-black/5 px-1">#FF5500</code>, a nie{' '}
                <code className="rounded bg-black/5 px-1">FF5500</code> lub <code className="rounded bg-black/5 px-1">rgb(255,85,0)</code>.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Skrócony format HEX (#RGB)</p>
              <p className="text-mid mt-1">
                Możesz używać zarówno pełnego formatu <code className="rounded bg-black/5 px-1">#RRGGBB</code>, jak i skróconego <code className="rounded bg-black/5 px-1">#RGB</code>. Generator
                automatycznie rozpozna oba formaty.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} />

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie">
          <p className="text-mid">Teraz, gdy wiesz jak działają poszczególne palety, możesz stworzyć własny zestaw kolorów.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button link="/narzedzia/generator-palet-kolorow-online" variant="accent">
              Przejdź do generatora
            </Button>
            <Button link="/narzedzia" variant="normal">
              Zobacz inne narzędzia
            </Button>
          </div>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji wizualnej dla swojej marki?"
        description="Projektujemy logo, system kolorów i materiały firmowe tak, aby Twoja marka wyglądała profesjonalnie i budowała zaufanie."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
