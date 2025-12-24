import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Link from 'next/link';
import { RiPencilLine, RiFileTextLine, RiEyeLine, RiToolsLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jak używać licznika długości meta title i description?',
  description:
    'Szczegółowa instrukcja obsługi licznika meta title i meta description. Dowiedz się, jak sprawdzić długość tagów SEO, interpretować wyniki i poprawić widoczność strony w Google.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja') },
  openGraph: {
    title: 'Jak używać licznika długości meta title i description?',
    description:
      'Szczegółowa instrukcja obsługi licznika meta title i meta description. Dowiedz się, jak sprawdzić długość tagów SEO, interpretować wyniki i poprawić widoczność strony w Google.',
    url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać licznika długości meta title i description',
  description:
    'Instrukcja krok po kroku, jak sprawdzić długość meta title i meta description za pomocą darmowego narzędzia online. Dowiedz się, jak interpretować wyniki i optymalizować tagi SEO.',
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja'),
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

const faqItems = [
  {
    question: 'Dlaczego narzędzie pokazuje szerokość w pikselach, a nie tylko liczbę znaków?',
    answer:
      'Różne litery mają różną szerokość. Litera "i" zajmuje znacznie mniej miejsca niż "m" czy "W". Google obcina tytuły i opisy na podstawie szerokości w pikselach, a nie liczby znaków. Dlatego tekst z wieloma wąskimi literami może być dłuższy niż tekst z szerokimi literami, mimo tej samej liczby znaków. Narzędzie mierzy obie wartości, żeby dać pełny obraz.',
    answerSchemaText:
      'Różne litery mają różną szerokość. Litera i zajmuje znacznie mniej miejsca niż m czy W. Google obcina tytuły i opisy na podstawie szerokości w pikselach, a nie liczby znaków. Narzędzie mierzy obie wartości, żeby dać pełny obraz.',
  },
  {
    question: 'Czy Google zawsze pokazuje mój meta title i description?',
    answer:
      'Nie zawsze. Google może zmienić wyświetlany tytuł lub opis, jeśli uzna, że lepiej pasują do zapytania użytkownika. Często pobiera fragmenty z treści strony. Dobrze napisane meta tagi zwiększają szansę, że Google użyje właśnie ich, ale nie ma 100% gwarancji.',
    answerSchemaText:
      'Nie zawsze. Google może zmienić wyświetlany tytuł lub opis, jeśli uzna, że lepiej pasują do zapytania użytkownika. Dobrze napisane meta tagi zwiększają szansę, że Google użyje właśnie ich.',
  },
  {
    question: 'Jaka jest optymalna długość meta title i meta description?',
    answer:
      'Meta title powinien mieć około 50-60 znaków (do ~580 pikseli szerokości). Meta description najlepiej sprawdza się w zakresie 120-160 znaków (do ~920 pikseli). To wartości orientacyjne - Google nie podaje ścisłych limitów i może je zmieniać w zależności od urządzenia.',
    answerSchemaText:
      'Meta title powinien mieć około 50-60 znaków (do ~580 pikseli szerokości). Meta description najlepiej sprawdza się w zakresie 120-160 znaków (do ~920 pikseli). To wartości orientacyjne.',
  },
  {
    question: 'Czy meta description wpływa na pozycję strony w Google?',
    answer:
      'Meta description nie jest bezpośrednim czynnikiem rankingowym. Google nie bierze go pod uwagę przy ustalaniu pozycji strony. Jednak dobry opis zwiększa klikalność (CTR) w wynikach wyszukiwania, a wyższy CTR może pośrednio wpłynąć na pozycję. Opis działa jak krótka reklama strony.',
    answerSchemaText:
      'Meta description nie jest bezpośrednim czynnikiem rankingowym. Jednak dobry opis zwiększa klikalność (CTR) w wynikach wyszukiwania, co może pośrednio wpłynąć na pozycję.',
  },
  {
    question: 'Co zrobić, gdy mój tytuł jest za długi?',
    answer:
      'Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń zbędne słowa (np. "najlepszy", "profesjonalny") i skup się na konkretnej wartości dla użytkownika. Jeśli dodajesz nazwę marki, umieść ją na końcu po myślniku lub pionowej kresce.',
    answerSchemaText:
      'Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń zbędne słowa i skup się na konkretnej wartości dla użytkownika. Nazwę marki umieść na końcu.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-meta-instruction" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Jak używać licznika długości meta title i description"
        description="Szczegółowa instrukcja obsługi narzędzia do sprawdzania długości tagów SEO. Dowiedz się, jak interpretować wyniki i pisać skuteczne meta tagi"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/licznik-dlugosci-meta-title-i-description', label: 'Licznik meta title i description' }}
        fourth={{ href: '/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest meta title i meta description?">
          <p className="text-mid">
            Meta title i meta description to dwa krótkie teksty, które opisują zawartość strony internetowej. Nie widać ich bezpośrednio na stronie, ale pojawiają się w wynikach wyszukiwania Google.
          </p>
          <p className="text-mid mt-3">
            <strong>Meta title</strong> (tytuł strony) to niebieski, klikalny nagłówek w wynikach Google. To pierwsza rzecz, którą widzi użytkownik szukający informacji. Dobry tytuł mówi wprost, co
            znajdzie na stronie.
          </p>
          <p className="text-mid mt-3">
            <strong>Meta description</strong> (opis strony) to szary tekst pod tytułem. Rozszerza informację z tytułu i zachęca do kliknięcia. To jak krótkie zaproszenie: wyjaśnia, dlaczego warto
            wejść właśnie na tę stronę.
          </p>
          <p className="text-mid mt-3">
            Oba elementy wpisujesz w kodzie strony (w sekcji &lt;head&gt;) lub w ustawieniach systemu zarządzania treścią (np. WordPress, Shopify). Jeśli ich nie uzupełnisz, Google samo wybierze
            fragmenty tekstu ze strony, co może nie oddać tego, co chcesz przekazać.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego długość meta tagów ma znaczenie?">
          <p className="text-mid">
            Google wyświetla tytuły i opisy w ograniczonej przestrzeni. Jeśli tekst jest za długi, zostanie obcięty i zakończony wielokropkiem (...). Użytkownik zobaczy tylko fragment i może nie
            zrozumieć, o czym jest strona.
          </p>

          <h3 className="h4 mt-6 mb-2">Praktyczny przykład obcinania</h3>
          <p className="text-mid">
            Załóżmy, że tytuł strony brzmi: &quot;Kompleksowe usługi projektowania stron internetowych dla małych i średnich przedsiębiorstw w Krakowie i okolicach&quot;. Ma 106 znaków. W Google
            pojawi się jako: &quot;Kompleksowe usługi projektowania stron internetowych dla małych i średnich...&quot;. Użytkownik nie dowie się, że chodzi o Kraków, ani że to dla MŚP.
          </p>

          <h3 className="h4 mt-6 mb-2">Dlaczego piksele, a nie tylko znaki?</h3>
          <p className="text-mid">
            Litery mają różną szerokość. Porównaj &quot;iiii&quot; i &quot;WWWW&quot; - obie mają 4 znaki, ale szerokość jest zupełnie inna. Google mierzy szerokość w pikselach, nie w znakach.
            Dlatego narzędzie pokazuje obie wartości: liczbę znaków (łatwiejszą do ogarnięcia) i szerokość w pikselach (dokładniejszą dla Google).
          </p>

          <h3 className="h4 mt-6 mb-2">Wpływ na klikalność</h3>
          <p className="text-mid">
            Meta title i description działają jak reklama strony w wynikach wyszukiwania. Dobrze napisane - przyciągają uwagę i zwiększają szansę, że ktoś kliknie. Źle napisane lub obcięte - mogą
            zniechęcić, nawet jeśli strona jest świetna. To nie wpływa bezpośrednio na pozycję w Google, ale wpływa na to, ile osób faktycznie odwiedzi stronę.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak korzystać z narzędzia?"
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
              description:
                'Dodaj meta description w drugie pole. Zobaczysz te same metryki dla opisu. Pole jest większe, bo opisy są dłuższe niż tytuły - możesz wpisać 2-3 krótkie zdania.',
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
              description:
                'Jeśli status pokazuje Za krótki lub Za długi, dostosuj tekst. Zmiany widać od razu - możesz eksperymentować, aż uzyskasz optymalną długość i treść.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Jak interpretować wyniki?"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm font-medium mb-2">Meta title</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="text-mid">Znaki: <strong>52</strong></span>
                  <span className="text-mid">Słowa: <strong>7</strong></span>
                  <span className="text-mid">Piksele: <strong>456px</strong></span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">Dobra długość</Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm font-medium mb-2">Meta description</p>
                <div className="flex flex-wrap gap-2 text-sm">
                  <span className="text-mid">Znaki: <strong>142</strong></span>
                  <span className="text-mid">Słowa: <strong>21</strong></span>
                  <span className="text-mid">Piksele: <strong>812px</strong></span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">Dobra długość</Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Narzędzie pokazuje trzy metryki dla każdego pola oraz kolorowy status oceny długości:</p>

          <h3 className="h4 mt-6 mb-2">Metryki</h3>
          <ul className="list-disc pl-5 space-y-2 text-mid">
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

          <h3 className="h4 mt-6 mb-2">Statusy oceny</h3>
          <ul className="list-disc pl-5 space-y-2 text-mid">
            <li>
              <strong className="text-emerald-700">Dobra długość</strong> (zielony) - tekst mieści się w zalecanym zakresie. Google powinien wyświetlić go w całości.
            </li>
            <li>
              <strong className="text-amber-700">Za krótki</strong> (żółty) - tekst jest bardzo krótki. Masz miejsce na więcej informacji, które mogą zachęcić do kliknięcia.
            </li>
            <li>
              <strong className="text-red-700">Za długi</strong> (czerwony) - tekst przekracza zalecany zakres. Google prawdopodobnie go obetnie. Rozważ skrócenie.
            </li>
            <li>
              <strong className="text-neutral-500">Brak danych</strong> (szary) - pole jest puste. Wpisz tekst, aby zobaczyć analizę.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-2">Zalecane zakresy</h3>
          <p className="text-mid">
            <strong>Meta title:</strong> 35-65 znaków lub 350-580 pikseli szerokości. Najważniejsze słowa umieść na początku.
          </p>
          <p className="text-mid mt-2">
            <strong>Meta description:</strong> 100-165 znaków lub 430-920 pikseli szerokości. Zmieścisz w tym 2-3 krótkie zdania.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Podgląd snippet - co pokazuje?">
          <p className="text-mid">
            Podgląd (snippet preview) symuluje, jak tytuł i opis strony wyglądają w wynikach wyszukiwania Google. To orientacyjna wizualizacja - rzeczywisty wygląd może się nieznacznie różnić w
            zależności od urządzenia i przeglądarki.
          </p>

          <h3 className="h4 mt-6 mb-2">Elementy podglądu</h3>
          <ul className="list-disc pl-5 space-y-2 text-mid">
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

          <h3 className="h4 mt-6 mb-2">Czego podgląd nie pokazuje</h3>
          <p className="text-mid">
            Podgląd nie uwzględnia wszystkich elementów, które Google może dodać do wyniku: dat, ocen gwiazdkowych, linków do podstron (sitelinks) ani fragmentów rozszerzonych (rich snippets). To
            uproszczona wersja skupiona na długości tekstu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Najczęstsze problemy i rozwiązania">
          <h3 className="h4 mb-2">Tytuł jest za długi</h3>
          <p className="text-mid mb-4">
            Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń przymiotniki typu &quot;najlepszy&quot;, &quot;profesjonalny&quot;, &quot;kompleksowy&quot; - rzadko dodają wartości. Jeśli
            dodajesz nazwę firmy, umieść ją na końcu po separatorze (| lub -).
          </p>

          <h3 className="h4 mb-2">Opis jest za krótki</h3>
          <p className="text-mid mb-4">
            Dodaj więcej informacji: co użytkownik znajdzie na stronie, jaką korzyść otrzyma, co wyróżnia ofertę. Zakończ delikatnym wezwaniem do działania (np. &quot;Sprawdź szczegóły&quot;,
            &quot;Zobacz ofertę&quot;).
          </p>

          <h3 className="h4 mb-2">Podgląd pokazuje placeholder zamiast mojego tekstu</h3>
          <p className="text-mid mb-4">Pola tytułu i opisu są puste. Narzędzie wyświetla wtedy przykładowy tekst, żeby pokazać strukturę podglądu. Wpisz swoje meta tagi, a podgląd się zaktualizuje.</p>

          <h3 className="h4 mb-2">Szerokość w pikselach jest inna niż oczekiwana</h3>
          <p className="text-mid">
            Narzędzie mierzy szerokość za pomocą standardowej czcionki systemowej zbliżonej do tej, którą używa Google. Wynik może się nieznacznie różnić w zależności od przeglądarki i systemu
            operacyjnego. Traktuj go jako orientacyjną wartość, nie jako dokładną predykcję.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie"
          btnOne="Przejdź do licznika meta tagów"
          btnOneLink="/narzedzia/licznik-dlugosci-meta-title-i-description"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak działa licznik, możesz zacząć optymalizować swoje meta tagi. Jeśli potrzebujesz pomocy z kompleksową optymalizacją SEO — meta tagów, treści, struktury strony i widoczności w Google — <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/marketing/pozycjonowanie-stron">pozycjonowaniem stron</Link> i <Link href="/uslugi/marketing/optymalizacja-seo">optymalizacją SEO</Link>.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap variant="line" />

        <FaqPanels items={faqItems} pageUrl={toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja')} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji SEO?"
        description="Meta tagi to dopiero początek. Możemy zająć się kompleksową optymalizacją strony, żeby klienci łatwiej znajdowali firmę w Google"
        btnOne="Umów rozmowę o SEO"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę pozycjonowania"
        btnTwoLink="/uslugi/marketing/pozycjonowanie-stron"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
