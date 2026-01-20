import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import FaqPanels from '@/components/ui/FaqPanels';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Button from '@/components/ui/buttons/Button';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Jak wyciągnąć kolory ze zdjęcia? | Ekstraktor kolorów z obrazu',
  description: 'Wyciągnij dominujące kolory ze zdjęcia lub logo - do 12 kolorów HEX jednym kliknięciem. Darmowe narzędzie bez wysyłania plików na serwer. Idealne do brandingu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja') },
  openGraph: {
    title: 'Jak wyciągnąć kolory ze zdjęcia? | Ekstraktor kolorów z obrazu',
    description: 'Wyciągnij dominujące kolory ze zdjęcia lub logo - do 12 kolorów HEX jednym kliknięciem. Darmowe narzędzie bez wysyłania plików na serwer. Idealne do brandingu.',
    url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak wyciągnąć kolory ze zdjęcia lub obrazu',
  description: 'Instrukcja wyciągania dominujących kolorów ze zdjęcia lub logo. Wgraj obraz (PNG, JPG, SVG), skopiuj do 12 kolorów HEX. Wszystko lokalnie w przeglądarce.',
  url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj obraz',
      text: 'Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać obraz z dysku. Obsługiwane formaty to PNG, JPG i SVG.',
    },
    {
      '@type': 'HowToStep',
      name: 'Poczekaj na analizę',
      text: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie z niego dominujące kolory.',
    },
    {
      '@type': 'HowToStep',
      name: 'Skopiuj kolory',
      text: 'Kliknij przycisk kopiowania przy wybranym kolorze, żeby skopiować jego kod HEX do schowka.',
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
    question: 'Jakie formaty obrazów mogę wgrać do narzędzia?',
    answer:
      'Narzędzie obsługuje trzy popularne formaty: PNG, JPG (JPEG) oraz SVG. Możesz wgrać zdjęcie produktu, logo firmy, grafikę z mediów społecznościowych lub dowolny inny obraz w jednym z tych formatów.',
  },
  {
    question: 'Ile kolorów wyciągnie narzędzie z mojego obrazu?',
    answer:
      'Narzędzie wyciąga do 12 dominujących kolorów. Dokładna liczba zależy od tego, ile wyraźnie różnych kolorów występuje na obrazie. Jeśli obraz jest bardzo jednorodny (np. logo w dwóch kolorach), wynik będzie zawierał mniej pozycji.',
  },
  {
    question: 'Czy moje zdjęcia są wysyłane na serwer?',
    answer: 'Nie. Cała analiza odbywa się bezpośrednio w przeglądarce, na Twoim urządzeniu. Obraz nie jest nigdzie wysyłany ani przechowywany. Po zamknięciu strony dane znikają.',
  },
  {
    question: 'Dlaczego narzędzie wyciągnęło inne kolory niż się spodziewałem?',
    answer:
      'Narzędzie analizuje kolory, które faktycznie dominują na obrazie pod względem liczby pikseli. Jeśli tło zajmuje dużą część obrazu, jego kolor może pojawić się jako dominujący. Podobnie z cieniami, gradientami lub odbiciami światła. Dla najlepszych rezultatów użyj obrazu z wyraźnymi, kontrastowymi kolorami i jednolitym lub przezroczystym tłem.',
  },
  {
    question: 'Czy mogę skopiować wszystkie kolory naraz?',
    answer:
      'Obecnie narzędzie pozwala kopiować kolory pojedynczo. Kliknij ikonę kopiowania przy wybranym kolorze, a jego kod HEX trafi do schowka. Możesz potem wkleić go bezpośrednio do Figmy, Photoshopa, CSS lub innego narzędzia.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-palette-extractor-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak wyciągnąć kolory ze zdjęcia lub obrazu"
        description="Wgraj zdjęcie lub logo i wyciągnij do 12 dominujących kolorów HEX. Instrukcja z wskazówkami, które obrazy dają najlepsze rezultaty."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/ekstraktor-kolorow-z-obrazu', label: 'Ekstraktor kolorów z obrazu' }}
        fourth={{ href: '/narzedzia/ekstraktor-kolorow-z-obrazu/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Do czego służy ekstraktor kolorów z obrazu?">
          <p className="text-mid">
            To narzędzie analizuje wgrane zdjęcie i wyciąga z niego dominujące kolory. Dzięki temu możesz szybko stworzyć paletę barw na podstawie inspirującego zdjęcia, logo konkurencji czy zdjęcia
            produktu.
          </p>
          <p className="text-mid mt-3">
            <strong>Gdzie to się przydaje?</strong> Przy projektowaniu identyfikacji wizualnej, tworzeniu spójnych grafik, dobieraniu kolorów do strony WWW i wszędzie tam, gdzie potrzebujesz wyciągnąć
            kolory z gotowego obrazu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać obraz?">
          <p className="text-mid">
            Narzędzie oferuje dwa sposoby dodawania obrazu. Pierwszy to <strong>przeciągnięcie pliku</strong> bezpośrednio na wyznaczony obszar (tzw. drag and drop). Wystarczy otworzyć folder z
            obrazem, chwycić plik myszką i upuścić go na pole z napisem zachęcającym do dodania pliku.
          </p>
          <p className="text-mid mt-3">
            Drugi sposób to <strong>kliknięcie w pole do dodania pliku</strong>. Po kliknięciu otworzy się systemowe okno wyboru pliku, w którym możesz wskazać obraz z dowolnego miejsca na dysku.
          </p>
          <p className="text-mid mt-3">
            <strong>Obsługiwane formaty:</strong> PNG, JPG (JPEG) oraz SVG. Jeśli spróbujesz wgrać plik w innym formacie (np. GIF, TIFF, PDF), narzędzie go nie zaakceptuje.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co robi narzędzie z obrazem?">
          <p className="text-mid">Po wgraniu obrazu narzędzie wykonuje kilka kroków w tle - wszystko dzieje się w przeglądarce, bez wysyłania pliku na serwer:</p>
          <ol className="text-mid mt-3 list-inside list-decimal space-y-2">
            <li>
              <strong>Zmniejsza obraz</strong> do mniejszej rozdzielczości (około 240 pikseli). Dzięki temu analiza jest szybka nawet dla dużych zdjęć.
            </li>
            <li>
              <strong>Analizuje każdy piksel</strong> i grupuje podobne kolory razem. Kolory, które różnią się tylko odcieniem (np. dwa prawie identyczne niebieskie), są łączone w jeden.
            </li>
            <li>
              <strong>Wybiera dominujące kolory</strong> - te, które występują najczęściej. Wynik to lista do 12 kolorów posortowanych od najczęstszego.
            </li>
            <li>
              <strong>Ignoruje przezroczyste piksele</strong>. Jeśli obraz ma przezroczyste tło (np. logo w formacie PNG), te obszary nie są brane pod uwagę.
            </li>
          </ol>
          <p className="text-mid mt-3">Cały proces trwa zazwyczaj mniej niż sekundę. Po zakończeniu zobaczysz paletę kolorów z kodami HEX gotowymi do skopiowania.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Dodaj obraz"
          demo={
            <div className="tool-section space-y-4">
              <p className="mb-2 font-semibold uppercase">Dodaj obraz</p>
              <div className="tool-upload-area">
                <span className="mb-1 text-sm font-medium">Przeciągnij i upuść obraz tutaj</span>
                <span className="text-light mb-2 text-xs">lub kliknij, aby wybrać plik z dysku</span>
                <span className="inline-flex items-center rounded-full border border-neutral-200 bg-white px-2.5 py-0.5 text-xs font-medium shadow-sm">Obsługiwane: PNG, JPG/JPEG, SVG</span>
              </div>
            </div>
          }
        >
          <p className="text-mid">Przeciągnij plik bezpośrednio na pole do dodania pliku lub kliknij, aby otworzyć systemowe okno wyboru pliku.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Skopiuj kolory"
          demo={
            <div className="tool-section space-y-4">
              <h2 className="h6">Podgląd i paleta</h2>
              <div className="grid gap-2 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
                  <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: '#2C5F2D' }} />
                  <div className="min-w-0 flex-1">
                    <p className="text-dark text-sm leading-tight font-medium">#2C5F2D</p>
                    <p className="text-light truncate text-[11px]!">rgb(44, 95, 45)</p>
                  </div>
                  <button className="text-dark flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-100">Kopiuj</button>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white px-3 py-2">
                  <div className="h-9 w-9 rounded-lg border border-black/10" style={{ backgroundColor: '#97BC62' }} />
                  <div className="min-w-0 flex-1">
                    <p className="text-dark text-sm leading-tight font-medium">#97BC62</p>
                    <p className="text-light truncate text-[11px]!">rgb(151, 188, 98)</p>
                  </div>
                  <button className="text-dark flex items-center gap-1.5 rounded-md border border-black/10 bg-white px-2.5 py-1.5 text-xs font-medium hover:bg-neutral-100">Kopiuj</button>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">Kliknij przycisk kopiowania przy wybranym kolorze, a kod HEX trafi do schowka. Możesz go wkleić bezpośrednio do Figmy, Photoshopa, CSS lub innego narzędzia.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jakie obrazy dają najlepsze wyniki?">
          <p className="text-mid">Nie każdy obraz da równie czytelną paletę kolorów. Oto kilka wskazówek, które pomogą uzyskać lepsze rezultaty:</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Logo i grafiki wektorowe</p>
              <p className="text-mid">
                Obrazy z ograniczoną liczbą kolorów (np. logo, ikony, ilustracje) dają najbardziej precyzyjne wyniki. Kolory są wyraźnie oddzielone, więc narzędzie łatwo je rozpoznaje.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zdjęcia z wyraźnym motywem</p>
              <p className="text-mid">
                Zdjęcia produktów, wnętrz czy krajobrazów również działają dobrze, ale wynik będzie zawierał więcej odcieni. Jeśli szukasz konkretnego koloru (np. kolor produktu), upewnij się, że
                zajmuje on dużą część obrazu.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Przezroczyste tło</p>
              <p className="text-mid">
                Jeśli chcesz wyciągnąć kolory tylko z obiektu (np. logo), użyj obrazu z przezroczystym tłem (format PNG). Przezroczyste piksele są ignorowane, więc tło nie wpłynie na wynik.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Unikaj obrazów z dużym tłem jednokolorowym</p>
              <p className="text-mid">
                Jeśli tło zajmuje większość obrazu, jego kolor będzie dominował w wynikach. Przed analizą warto przyciąć obraz do interesującego fragmentu lub użyć wersji z przezroczystym tłem.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Najczęstsze problemy i jak je rozwiązać">
          <div className="space-y-4">
            <div>
              <p className="text-dark font-semibold">Narzędzie wyciągnęło mało kolorów</p>
              <p className="text-mid">
                Oznacza to, że obraz zawiera niewiele wyraźnie różnych kolorów. To normalne w przypadku prostych grafik, logo czy obrazów monochromatycznych. Narzędzie wyciąga tylko te kolory, które
                faktycznie występują.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Wyniki zawierają kolory, których nie widzę na obrazie</p>
              <p className="text-mid">
                Mogą to być kolory cieni, gradientów lub odbić światła, które zajmują dużą część pikseli. Ludzkie oko może je ignorować, ale algorytm je wykrywa. Spróbuj użyć obrazu z bardziej
                jednolitymi kolorami lub przyciąć fragmenty z cieniami.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Dominuje kolor tła zamiast głównego obiektu</p>
              <p className="text-mid">
                Jeśli tło zajmuje większą powierzchnię niż obiekt, jego kolor będzie na pierwszym miejscu. Rozwiązanie: użyj obrazu z przezroczystym tłem lub przytnij obraz tak, żeby obiekt zajmował
                większą część.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Plik nie jest akceptowany</p>
              <p className="text-mid">
                Upewnij się, że plik jest w formacie PNG, JPG lub SVG. Inne formaty (np. GIF, TIFF, HEIC, PDF) nie są obsługiwane. Jeśli masz plik w nieobsługiwanym formacie, skonwertuj go przed
                wgraniem.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Często zadawane pytania" />

        <Gap variant="line" />

        <SectionInfo title="Zastosowania palety kolorów z obrazu">
          <p className="text-mid">Narzędzie przyda się w wielu sytuacjach:</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Inspiracja do brandingu</p>
              <p className="text-mid">Wgraj zdjęcie, które oddaje klimat Twojej marki - krajobraz, wnętrze, produkt. Wyciągnij z niego kolory i użyj jako bazy do identyfikacji wizualnej.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Spójne grafiki social media</p>
              <p className="text-mid">Masz zdjęcie produktu i chcesz dobrać do niego tło lub akcenty? Wyciągnij kolory ze zdjęcia i użyj ich w grafice - całość będzie spójna.</p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie">
          <p className="text-mid">Teraz, gdy wiesz jak działa ekstraktor, możesz wyciągnąć kolory ze swojego obrazu.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Button link="/narzedzia/ekstraktor-kolorow-z-obrazu" variant="accent">
              Przejdź do ekstraktora
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
        title="Potrzebujesz spójnego systemu dla swojej marki?"
        description="Zaprojektujemy dla Ciebie spójny system identyfikacji wizualnej, który wyróżni Cię na tle konkurencji."
        btnOne="Sprawdź ofertę identyfikacji"
        btnOneLink="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
        btnTwo="Sprawdź wszystkie usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
