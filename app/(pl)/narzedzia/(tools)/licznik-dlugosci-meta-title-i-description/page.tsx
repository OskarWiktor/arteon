import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import {
  RiPencilLine,
  RiFileTextLine,
  RiEyeLine,
  RiToolsLine,
  RiRulerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiEditLine,
  RiMegaphoneLine,
  RiCodeLine,
  RiRuler2Line,
  RiCheckboxCircleLine,
  RiTranslate2,
  RiInfinityLine,
  RiUserLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Darmowy licznik meta title i description online - sprawdź długość w pikselach',
  description: 'Darmowy licznik meta title i meta description online po polsku. Sprawdź długość w znakach i pikselach, zobacz podgląd wyniku w Google. Przetwarzanie lokalne w przeglądarce.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description') },
  openGraph: {
    title: 'Darmowy licznik meta title i description online - sprawdź długość w pikselach',
    description: 'Darmowy licznik meta title i meta description online po polsku. Sprawdź długość w znakach i pikselach, zobacz podgląd wyniku w Google. Przetwarzanie lokalne w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy licznik meta title i description online',
  alternateName: [
    'Licznik meta title i meta description z podglądem Google',
    'Podgląd wyniku w Google po polsku',
    'Sprawdź długość tytułu SEO w pikselach',
    'Narzędzie do sprawdzania długości meta tagów',
    'Podgląd snippet Google online',
    'Ile znaków meta description',
    'Optymalna długość title i description',
    'Narzędzie SEO do sprawdzania meta tagów',
  ],
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik długości meta title i meta description po polsku. Sprawdza liczbę znaków, słów i szerokość w pikselach. Pokazuje podgląd tytułu oraz opisu w wynikach wyszukiwania Google.',
  featureList: [
    'Licznik znaków dla meta title',
    'Licznik znaków dla meta description',
    'Pomiar szerokości w pikselach (zgodny z Google)',
    'Licznik słów w tytule i opisie',
    'Podgląd wyglądu w wynikach wyszukiwania Google',
    'Kolorowa ocena długości (za krótki / optymalny / za długi)',
    'Ostrzeżenie przed ucięciem tytułu lub opisu',
    'Zalecenia dotyczące optymalnej długości',
    'Przetwarzanie lokalne w przeglądarce',
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
  name: 'Jak sprawdzić długość meta title i description',
  description: 'Sprawdź długość meta title i description w pikselach i znakach. Dowiedz się, ile znaków powinien mieć tytuł (50-60) i opis (120-160) oraz jak uniknąć obcinania w Google.',
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
  totalTime: 'PT3M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wpisz meta title',
      text: 'Wklej lub wpisz tytuł strony w pole Meta title. Narzędzie automatycznie obliczy liczbę znaków, słów i szerokość w pikselach.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wpisz meta description',
      text: 'Dodaj opis strony w pole Meta description. Zobaczysz metryki długości oraz ocenę, czy opis mieści się w zalecanym zakresie.',
    },
    {
      '@type': 'HowToStep',
      name: 'Sprawdź podgląd w Google',
      text: 'Zobacz, jak tytuł i opis wyglądają w symulacji wyników wyszukiwania Google. Podgląd automatycznie obcina tekst tak, jak zrobi to wyszukiwarka.',
    },
    {
      '@type': 'HowToStep',
      name: 'Popraw tekst według wskazówek',
      text: 'Jeśli status pokazuje Za krótki lub Za długi, dostosuj tekst i obserwuj zmiany w czasie rzeczywistym.',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-meta-length-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-length-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Sprawdź długość tytułu i opisu strony w Google"
        description="Wpisz tytuł i opis strony, a narzędzie obliczy liczbę znaków, słów, szerokość w pikselach i pokaże, czy długość jest zgodna z zasadami SEO"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/licznik-dlugosci-meta-title-i-description`, label: 'Sprawdź długość tytułu i opisu strony w Google' }}
        includeJsonLd
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Czym są meta title i meta description?">
          <p className="text-mid">
            Meta title i meta description to dwa krótkie teksty, które opisują zawartość strony internetowej. Nie widać ich bezpośrednio na stronie, ale pojawiają się w wynikach wyszukiwania Google
            jako tytuł (niebieski link) i opis (szary tekst pod tytułem).
          </p>
          <p className="text-mid mt-3">
            Dobrze napisane meta tagi działają jak reklama strony w wynikach wyszukiwania - przyciągają uwagę i zwiększają szansę na kliknięcie. Źle napisane lub obcięte przez Google mogą zniechęcić,
            nawet jeśli sama strona jest wartościowa.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika meta title i description?"
          description="Sprawdzenie długości meta tagów zajmuje około minuty:"
          grid="four"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Wpisz tytuł strony',
              description:
                'Wklej lub wpisz meta title w pierwsze pole tekstowe. Narzędzie od razu pokaże trzy metryki: liczbę znaków, liczbę słów i szerokość w pikselach. Obok pojawi się kolorowy status.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Wpisz opis strony',
              description: 'Dodaj meta description w drugie pole. Zobaczysz te same metryki dla opisu. Pole jest większe, bo opisy są dłuższe niż tytuły - możesz wpisać 2-3 krótkie zdania.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Sprawdź podgląd',
              description:
                'Po prawej stronie (na komputerze) lub poniżej (na telefonie) zobaczysz podgląd. Pokazuje, jak tytuł i opis wyglądają w wynikach Google. Tekst jest automatycznie obcinany tak, jak zrobi to wyszukiwarka.',
            },
            {
              icon: <RiToolsLine className="h-6 w-6" />,
              title: '4. Popraw według wskazówek',
              description: 'Jeśli status pokazuje Za krótki lub Za długi, dostosuj tekst. Zmiany widać od razu - możesz eksperymentować, aż uzyskasz optymalną długość i treść.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Ile znaków powinien mieć meta title i description?">
          <p className="text-mid mb-4">Google obcina tytuły i opisy, które są zbyt długie. Poniżej znajdziesz zalecane zakresy, które zmniejszają ryzyko obcięcia tekstu w wynikach wyszukiwania.</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Element</th>
                  <th className="py-2 pr-4 font-semibold">Znaki</th>
                  <th className="py-2 pr-4 font-semibold">Piksele</th>
                  <th className="py-2 font-semibold">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50-60 znaków</td>
                  <td className="py-2 pr-4 whitespace-nowrap">do ~580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Najważniejsze słowa umieść na początku. Nazwa marki na końcu.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120-160 znaków</td>
                  <td className="py-2 pr-4 whitespace-nowrap">do ~920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Zmieścisz 2-3 krótkie zdania. Zakończ wezwaniem do działania.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">To wartości orientacyjne - Google nie publikuje ścisłych limitów i może je zmieniać w zależności od urządzenia i kontekstu zapytania.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Jak interpretować wyniki?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta title</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Znaki: <strong>52</strong>
                  </span>
                  <span className="text-mid">
                    Słowa: <strong>7</strong>
                  </span>
                  <span className="text-mid">
                    Piksele: <strong>456px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Dobra długość
                </Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta description</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Znaki: <strong>142</strong>
                  </span>
                  <span className="text-mid">
                    Słowa: <strong>21</strong>
                  </span>
                  <span className="text-mid">
                    Piksele: <strong>812px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Dobra długość
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Narzędzie pokazuje trzy metryki dla każdego pola oraz kolorowy status oceny długości:</p>

          <h3 className="h5 mt-6 mb-2">Metryki</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Znaki</strong> - łączna liczba znaków w tekście (łącznie ze spacjami). Łatwa do zrozumienia, ale mniej precyzyjna niż piksele.
            </li>
            <li>
              <strong>Słowa</strong> - liczba słów w tekście. Przydatna do szybkiej oceny objętości.
            </li>
            <li>
              <strong>Szerokość (px)</strong> - szerokość tekstu w pikselach. To wartość, którą faktycznie mierzy Google przy obcinaniu.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Statusy oceny</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Dobra długość</strong> (zielony) - tekst mieści się w zalecanym zakresie. Google powinien wyświetlić go w całości.
            </li>
            <li>
              <strong className="text-warning-text">Za krótki</strong> (żółty) - tekst jest bardzo krótki. Masz miejsce na więcej informacji, które mogą zachęcić do kliknięcia.
            </li>
            <li>
              <strong className="text-error-text">Za długi</strong> (czerwony) - tekst przekracza zalecany zakres. Google prawdopodobnie go obetnie. Rozważ skrócenie.
            </li>
            <li>
              <strong className="text-light">Brak danych</strong> (szary) - pole jest puste. Wpisz tekst, aby zobaczyć analizę.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Zalecane zakresy</h3>
          <p className="text-mid">
            <strong>Meta title:</strong> 35-65 znaków lub 350-580 pikseli szerokości. Najważniejsze słowa umieść na początku.
          </p>
          <p className="text-mid mt-2">
            <strong>Meta description:</strong> 100-165 znaków lub 430-920 pikseli szerokości. Zmieścisz w tym 2-3 krótkie zdania.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Dlaczego szerokość w pikselach jest ważniejsza niż liczba znaków?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">iiiiiiiiiiiiiiii (16 znaków)</p>
                <div className="bg-success-icon mt-1 h-3 w-1/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~64px szerokości</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">WWWWWWWWWWWWWWWW (16 znaków)</p>
                <div className="bg-error-icon mt-1 h-3 w-3/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~256px szerokości</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Różne litery mają różną szerokość. Porównaj &quot;iiii&quot; i &quot;WWWW&quot; - obie mają 4 znaki, ale szerokość wizualna jest zupełnie inna. Google mierzy szerokość tekstu w pikselach,
            nie w znakach.
          </p>
          <p className="text-mid mt-3">
            Dlatego tytuł z wieloma wąskimi literami (i, l, t, f) może być dłuższy niż tytuł z szerokimi literami (W, M, O), mimo tej samej liczby znaków. Narzędzie pokazuje obie wartości: liczbę
            znaków (łatwiejszą do ogarnięcia) i szerokość w pikselach (dokładniejszą dla Google).
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Podgląd snippet - co pokazuje?">
          <p className="text-mid">
            Podgląd (snippet preview) symuluje, jak tytuł i opis strony wyglądają w wynikach wyszukiwania Google. To orientacyjna wizualizacja - rzeczywisty wygląd może się nieznacznie różnić w
            zależności od urządzenia i przeglądarki.
          </p>

          <h3 className="h5 mt-6 mb-2">Elementy podglądu</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>URL</strong> - adres strony wyświetlany nad tytułem. Możesz go wpisać w opcjonalnym polu, żeby podgląd był bardziej realistyczny.
            </li>
            <li>
              <strong>Tytuł</strong> - niebieski nagłówek. Jeśli jest za długi, narzędzie automatycznie go obcina i dodaje wielokropek.
            </li>
            <li>
              <strong>Opis</strong> - szary tekst pod tytułem. Również jest obcinany, jeśli przekracza limit.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Czego podgląd nie pokazuje</h3>
          <p className="text-mid">
            Podgląd nie uwzględnia wszystkich elementów, które Google może dodać do wyniku: dat, ocen gwiazdkowych, linków do podstron ani fragmentów rozszerzonych. To uproszczona wersja skupiona na
            długości tekstu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Najczęstsze problemy i rozwiązania"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Tytuł jest za długi',
              description: (
                <p>
                  Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń przymiotniki typu &quot;najlepszy&quot;, &quot;profesjonalny&quot; - rzadko dodają wartości. Nazwa firmy na końcu po
                  separatorze.
                </p>
              ),
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Opis jest za krótki',
              description: <p>Dodaj więcej informacji: co użytkownik znajdzie na stronie, jaką korzyść otrzyma, co wyróżnia ofertę. Zakończ wezwaniem do działania.</p>,
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Szerokość w pikselach jest inna niż oczekiwana',
              description: <p>Narzędzie mierzy szerokość za pomocą standardowej czcionki zbliżonej do tej, którą używa Google. Wynik może się nieznacznie różnić w zależności od przeglądarki.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Dla kogo jest licznik meta tagów SEO?"
          description="Licznik meta tagów przydaje się każdemu, kto tworzy treści na strony internetowe:"
          grid="two"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Właściciele stron i sklepów',
              description: 'Sprawdzają, czy tytuły i opisy nie są obcinane w wynikach Google przed publikacją nowej strony lub produktu.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'Specjaliści SEO',
              description: 'Testują różne warianty tytułów i opisów, sprawdzają podgląd w wynikach wyszukiwania i weryfikują zgodność z zaleceniami.',
            },
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Copywriterzy',
              description: 'Piszą tytuły i opisy, które mieszczą się w limitach i zachęcają do kliknięcia.',
            },
            {
              icon: <RiMegaphoneLine className="h-6 w-6" />,
              title: 'Marketerzy',
              description: 'Tworzą meta tagi dla kampanii i stron docelowych, optymalizując współczynnik klikalności w wynikach organicznych.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Deweloperzy',
              description: 'Weryfikują meta tagi przed wdrożeniem strony na produkcję.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia licznik meta title i description?"
          grid="two"
          items={[
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Pomiar w pikselach',
              description: 'Nie tylko zliczamy znaki, ale mierzymy rzeczywistą szerokość tekstu tak, jak robi to Google.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Podgląd w Google',
              description: 'Widzisz, jak tytuł i opis wyglądają w wynikach wyszukiwania, zanim opublikujesz stronę.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Kolorowa ocena',
              description: 'Od razu wiesz, czy tekst jest za krótki, optymalny czy za długi.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Po polsku',
              description: 'Cały interfejs w języku polskim. Nie musisz tłumaczyć opcji z angielskiego.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Pomiar w pikselach i znakach jednocześnie',
              description: 'Narzędzie pokazuje obie wartości naraz - można porównać, czy tytuł mieści się zarówno w limicie znakowym, jak i pikselowym.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Analiza dla tytułu i opisu w jednym widoku',
              description: 'Title i description można sprawdzić jednocześnie, bez przełączania między zakładkami.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description')}
          title="Najczęstsze pytania dotyczące licznika długości tytułu i opisu meta tagów"
          openByDefault={1}
          items={[
            {
              question: 'Dlaczego narzędzie pokazuje szerokość w pikselach, a nie tylko liczbę znaków?',
              answer:
                'Różne litery mają różną szerokość. Litera "i" zajmuje znacznie mniej miejsca niż "m" czy "W". Google obcina tytuły i opisy na podstawie szerokości w pikselach, a nie liczby znaków. Dlatego tekst z wieloma wąskimi literami może być dłuższy niż tekst z szerokimi literami, mimo tej samej liczby znaków.',
            },
            {
              question: 'Czy Google zawsze pokazuje mój meta title i description?',
              answer:
                'Nie zawsze. Google może zmienić wyświetlany tytuł lub opis, jeśli uzna, że lepiej pasują do zapytania użytkownika. Często pobiera fragmenty z treści strony. Dobrze napisane meta tagi zwiększają szansę, że Google użyje właśnie ich, ale nie ma 100% gwarancji.',
            },
            {
              question: 'Jaka jest optymalna długość meta title i meta description?',
              answer:
                'Meta title powinien mieć około 50-60 znaków (do ~580 pikseli szerokości). Meta description najlepiej sprawdza się w zakresie 120-160 znaków (do ~920 pikseli). To wartości orientacyjne - Google nie podaje ścisłych limitów i może je zmieniać.',
            },
            {
              question: 'Czy meta description wpływa na pozycję strony w Google?',
              answer:
                'Meta description nie jest bezpośrednim czynnikiem rankingowym - Google nie bierze go pod uwagę przy ustalaniu pozycji strony. Jednak dobry opis zwiększa współczynnik klikalności w wynikach wyszukiwania, a wyższa klikalność może pośrednio wpłynąć na pozycję.',
            },
            {
              question: 'Co zrobić, gdy mój tytuł jest za długi?',
              answer:
                'Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń zbędne słowa (np. "najlepszy", "profesjonalny") i skup się na konkretnej wartości dla użytkownika. Jeśli dodajesz nazwę marki, umieść ją na końcu po separatorze.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji meta tagów i SEO?"
        description="Meta tagi to początek. Zajmujemy się pełną optymalizacją SEO - od meta tagów, przez treści, po strukturę strony i widoczność w Google."
        btnOne="Umów rozmowę o SEO"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę optymalizacji SEO"
        btnTwoLink="/uslugi/marketing/optymalizacja-seo"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
