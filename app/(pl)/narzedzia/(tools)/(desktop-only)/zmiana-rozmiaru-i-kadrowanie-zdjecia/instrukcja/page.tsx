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
import Link from 'next/link';
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiImageLine, RiCropLine, RiLayoutGridLine, RiFileImageLine, RiAspectRatioLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak zmienić rozmiar zdjęcia online? | Kadrowanie do Instagram i Facebook',
  description: 'Zmień rozmiar zdjęcia i wykadruj do Instagram (1080x1080, 1080x1350), Facebook, LinkedIn i OG image. Darmowe narzędzie online z presetami social media, eksportem do JPG, PNG i WebP.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja') },
  openGraph: {
    title: 'Jak zmienić rozmiar zdjęcia online? | Kadrowanie do Instagram i Facebook',
    description: 'Zmień rozmiar zdjęcia i wykadruj do Instagram (1080x1080, 1080x1350), Facebook, LinkedIn i OG image. Darmowe narzędzie online z presetami social media, eksportem do JPG, PNG i WebP.',
    url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak zmienić rozmiar zdjęcia i wykadrować do social media',
  description: 'Instrukcja zmiany rozmiaru zdjęcia i kadrowania do Instagram (1080x1080, 1080x1350, story), Facebook, LinkedIn i OG image. Presety social media, eksport do JPG, PNG i WebP.',
  url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj zdjęcie',
      text: 'Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać obraz z dysku. Obsługiwane formaty: JPG, PNG, WebP.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz wymiary lub preset',
      text: 'Wpisz docelowe wymiary w pikselach lub wybierz gotowy format (np. Instagram post, Facebook cover, OG image).',
    },
    {
      '@type': 'HowToStep',
      name: 'Dopasuj kadr',
      text: 'Przesuń i przybliż obraz, żeby wybrać najlepszy fragment. Jasny obszar na podglądzie pokazuje dokładnie to, co zostanie zapisane.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz format i pobierz',
      text: 'Wybierz format pliku (JPG, PNG lub WebP), ustaw jakość kompresji i pobierz gotowe zdjęcie.',
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
    question: 'Czy moje zdjęcia są wysyłane na serwer?',
    answer:
      'Nie. Wszystkie operacje są wykonywane lokalnie w przeglądarce. Żadne pliki nie są wysyłane na serwer - narzędzie działa całkowicie offline po załadowaniu strony. Twoje zdjęcia pozostają prywatne.',
  },
  {
    question: 'Jaki format wybrać do eksportu - JPG, PNG czy WebP?',
    answer:
      'JPG to dobry wybór dla zdjęć z wieloma kolorami i gradientami - pliki są małe przy zachowaniu dobrej jakości. PNG zachowuje najwyższą jakość i obsługuje przezroczystość (np. kształt koła). WebP łączy zalety obu formatów - małe pliki z wysoką jakością i obsługą przezroczystości.',
  },
  {
    question: 'Dlaczego przy kształcie koła format JPG jest niedostępny?',
    answer:
      'Format JPG nie obsługuje przezroczystości. Kształt koła wymaga przezroczystego tła poza kręgiem, dlatego narzędzie automatycznie ogranicza wybór do PNG lub WebP - formatów z kanałem alfa.',
  },
  {
    question: 'Co oznaczają proporcje jak 4:5 czy 16:9?',
    answer:
      'Proporcje (aspect ratio) określają stosunek szerokości do wysokości obrazu. Na przykład 4:5 oznacza, że szerokość stanowi 4 części, a wysokość 5 części. Format 16:9 to typowe proporcje filmów i prezentacji. Instagram post pionowy używa proporcji 4:5, natomiast story i reels - 9:16.',
  },
  {
    question: 'Jak działa suwak jakości?',
    answer:
      'Suwak jakości (60-100%) kontroluje stopień kompresji dla formatów JPG i WebP. Wyższa wartość oznacza lepszą jakość obrazu, ale większy rozmiar pliku. Dla większości zastosowań w mediach społecznościowych wartość 70-85% to dobry kompromis między jakością a rozmiarem.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-image-resize-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak zmienić rozmiar zdjęcia i wykadrować do social media"
        description="Zmień rozmiar zdjęcia do Instagram (post, story, reels), Facebook, LinkedIn i OG image. Instrukcja z gotowymi presetami, kadrowanie z siatką 3×3, eksport do JPG, PNG i WebP."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia', label: 'Kadrowanie i zmiana rozmiaru zdjęcia' }}
        fourth={{ href: '/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Jak dodać obraz?">
          <p className="text-mid">Narzędzie przyjmuje obrazy w formatach JPG, PNG i WebP. Możesz dodać zdjęcie na dwa sposoby:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Przeciągnij i upuść</strong> - chwyć plik z folderu na komputerze i upuść go na pole do dodania pliku (pole z przerywaną ramką).
            </li>
            <li>
              <strong>Kliknij i wybierz</strong> - kliknij w pole do dodania pliku, a otworzy się okno wyboru pliku z dysku.
            </li>
          </ul>
          <p className="text-mid mt-3">Po dodaniu obrazu narzędzie automatycznie odczyta jego oryginalne wymiary i wyświetli podgląd. Możesz teraz przejść do ustawień kadru.</p>
          <p className="text-mid mt-3">
            <Link href="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia" className="inline-link">
              Przejdź do narzędzia →
            </Link>
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Dodaj zdjęcie"
          demo={
            <div className="tool-section space-y-4">
              <p className="mb-2 font-semibold uppercase">Dodaj zdjęcie</p>
              <div className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-4 py-6 text-center hover:border-neutral-500 hover:bg-neutral-100">
                <span className="mb-1 text-sm! font-medium">Przeciągnij i upuść zdjęcie tutaj</span>
                <span className="text-light mb-2 text-xs!">lub kliknij, aby wybrać plik z dysku</span>
                <Badge variant="default" size="sm" className="bg-white shadow-sm">
                  Obsługiwane: JPG, PNG, WebP
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">Przeciągnij plik bezpośrednio na pole do dodania pliku lub kliknij, aby otworzyć systemowe okno wyboru pliku.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Ustaw wymiary docelowe"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 rounded-md border bg-slate-800 px-3 py-1.5 text-[14px]! text-white">
                  <span>Wymiary w px</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Gotowe formaty</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="text-[14px]! font-medium">Szerokość (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1080" readOnly />
                  </div>
                  <div>
                    <label className="text-[14px]! font-medium">Wysokość (px)</label>
                    <input type="number" className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" value="1350" readOnly />
                  </div>
                </div>
                <label className="flex items-center gap-2 text-[14px]! font-medium">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span>Zachowaj proporcje (automatyczny drugi wymiar)</span>
                </label>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            W zakładce <strong>Wymiary w px</strong> wpisujesz szerokość i wysokość ręcznie. Opcja <strong>Zachowaj proporcje</strong> automatycznie dostosowuje drugi wymiar.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Presety - który wybrać?"
          description="Każdy preset odpowiada konkretnym wymaganiom platformy lub zastosowania:"
          grid="two"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post kwadrat (1080×1080)',
              description: <p>Standardowy format posta na Instagramie. Proporcje 1:1. Sprawdza się w feedzie i wygląda dobrze zarówno na telefonie, jak i komputerze.</p>,
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post pion (1080×1350)',
              description: <p>Pionowy format posta (proporcje 4:5). Zajmuje więcej miejsca w feedzie niż kwadrat, co może zwiększyć zaangażowanie.</p>,
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - story / reels (1080×1920)',
              description: <p>Pełnoekranowy format pionowy (proporcje 9:16). Używany w relacjach i rolkach. Wypełnia cały ekran telefonu.</p>,
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - post (1200×630)',
              description: <p>Optymalny format dla postów na Facebooku i udostępnianych linków. Proporcje zbliżone do 16:9.</p>,
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - cover strony (820×360)',
              description: <p>Zdjęcie w tle na stronie firmowej Facebook. Szeroki, panoramiczny format - uwaga: na różnych urządzeniach może być przycinane inaczej.</p>,
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - post (1200×1200)',
              description: <p>Kwadratowy format dla postów na LinkedIn. Dobrze prezentuje się w feedzie i na urządzeniach mobilnych.</p>,
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - baner profilu (1584×396)',
              description: <p>Zdjęcie w tle na profilu osobistym lub firmowym LinkedIn. Bardzo szeroki format - centralny element powinien być na środku kadru.</p>,
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'OG image (1200×630)',
              description: <p>Grafika wyświetlana przy udostępnianiu linku w mediach społecznościowych (Open Graph). Standard dla Facebooka, Twittera, LinkedIna i innych platform.</p>,
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Grafika do artykułu (1600×900)',
              description: <p>Szeroki format odpowiedni na nagłówki artykułów blogowych. Proporcje 16:9 dobrze wyglądają na stronach z dużą ilością tekstu.</p>,
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Baner strony (1920×600)',
              description: <p>Bardzo szeroki format do banerów na stronach WWW. Sprawdza się jako tło pod nagłówkiem lub w sekcjach promocyjnych.</p>,
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Miniatura artykułu (800×600)',
              description: <p>Mniejszy format do miniatur na listach artykułów, w karuzeli produktów lub jako podgląd w wynikach wyszukiwania.</p>,
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Hero sekcji (1920×1080)',
              description: <p>Pełnoekranowy format Full HD. Używany jako tło sekcji hero na stronach głównych lub landing page.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Wybierz gotowy format"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Wymiary w px</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border bg-slate-800 px-3 py-1.5 text-[14px]! text-white">
                  <span>Gotowe formaty</span>
                </button>
              </div>
              <div className="space-y-3">
                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="text-[14px]! font-medium">Kategoria</label>
                    <select className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" disabled>
                      <option>Social media</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-[14px]! font-medium">Format</label>
                    <select className="mt-1 w-full! rounded-md border border-neutral-300 bg-white px-3! py-2! text-sm!" disabled>
                      <option>Instagram - post pion (1080x1350)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            W zakładce <strong>Gotowe formaty</strong> wybierasz kategorię (Social media lub WWW) i konkretny preset z listy. Wymiary ustawiają się automatycznie.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jak kadrować obraz?">
          <p className="text-mid">
            Po ustawieniu docelowych wymiarów na podglądzie pojawia się interaktywny obszar kadru. Jasna część obrazu to fragment, który zostanie zapisany - reszta jest przyciemniona.
          </p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">Przeciąganie kadru</p>
              <p className="text-mid mt-1">Chwyć jasny obszar i przeciągnij go w dowolne miejsce obrazu. W ten sposób wybierasz, który fragment zdjęcia zostanie wyeksportowany.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Zmiana rozmiaru przez uchwyty</p>
              <p className="text-mid mt-1">
                W rogach obszaru kadru znajdują się małe kwadraty (uchwyty). Przeciągając je, zmieniasz wielkość kadru - możesz go powiększyć lub zmniejszyć, zachowując wybrane proporcje.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Przybliżenie (zoom)</p>
              <p className="text-mid mt-1">
                W zakładce <strong>Przybliżenie</strong> znajdziesz suwak do regulacji zoomu (100-300%). Wyższa wartość oznacza, że kadr obejmuje mniejszy fragment oryginalnego zdjęcia - przydatne,
                gdy chcesz wyciąć konkretny detal.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Precyzyjne ustawienie pozycji</p>
              <p className="text-mid mt-1">
                W zakładce <strong>Pozycja</strong> możesz ustawić dokładną pozycję kadru w procentach (0-100% dla osi X i Y). Przyciski centrowania pozwalają szybko ustawić kadr na środku obrazu.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Kształty kadru"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Prostokąt
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  Kwadrat
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  Koło
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            W zakładce <strong>Kształty kadru</strong> wybierasz kształt wyeksportowanego obrazu: prostokąt (z wybranymi proporcjami), kwadrat (wymusza 1:1) lub koło (z przezroczystym tłem).
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Eksport - wybierz format pliku"
          demo={
            <div className="tool-section space-y-4">
              <p className="mt-4 mb-2 font-semibold uppercase">Konwertuj i pobierz</p>
              <div className="flex flex-wrap gap-3 text-sm">
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  JPG
                </Badge>
                <Badge as="button" variant="default" size="lg" className="border-black/10 hover:bg-neutral-100">
                  PNG
                </Badge>
                <Badge as="button" variant="selected" size="lg">
                  WEBP
                </Badge>
              </div>
              <div className="mt-4 space-y-1">
                <label className="flex items-center justify-between text-[14px]! font-medium">
                  <span>Jakość (JPG/WEBP)</span>
                  <span>85%</span>
                </label>
                <input type="range" min="60" max="100" value="85" readOnly className="w-full! p-0!" />
                <p className="text-light text-xs!">Niższa jakość = mniejszy plik. Dla sociali często 70-85% to dobry kompromis.</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">Wybierz format wyjściowy (JPG, PNG lub WebP) i ustaw jakość kompresji. Dla formatów JPG i WebP niższa jakość oznacza mniejszy plik.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Siatka 3×3 - do czego służy?">
          <p className="text-mid">
            Na obszarze kadru widoczna jest siatka dzieląca obraz na 9 równych części. To wizualizacja <strong>reguły trójpodziału</strong> - jednej z podstawowych zasad kompozycji fotograficznej.
          </p>
          <p className="text-mid mt-3">
            Reguła mówi, że najważniejsze elementy zdjęcia (twarz, produkt, punkt zainteresowania) powinny znajdować się na przecięciach linii siatki lub wzdłuż nich. Taka kompozycja jest bardziej
            dynamiczna i przyjemna dla oka niż umieszczenie obiektu dokładnie na środku.
          </p>
          <p className="text-mid mt-3">
            W zakładce <strong>Kolor siatki</strong> możesz zmienić kolor linii (zielony, biały, czarny, czerwony, żółty), żeby siatka była dobrze widoczna na różnych zdjęciach.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Narzędzia kadrowania"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Wymiary w px</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Gotowe formaty</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Kształty kadru</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border bg-slate-800 px-3 py-1.5 text-[14px]! text-white">
                  <span>Przybliżenie</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Pozycja</span>
                </button>
                <button className="flex items-center gap-2 rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! hover:bg-neutral-100">
                  <span>Kolor siatki</span>
                </button>
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Przybliżenie kadru (%)</span>
                </div>
                <input type="number" min="100" max="300" className="mt-1 w-20! rounded-md border border-neutral-300 bg-white px-3! py-2! text-xs!" value="100" readOnly />
              </div>
            </div>
          }
        >
          <p className="text-mid">Narzędzia kadrowania pozwalają precyzyjnie ustawić wymiary, wybrać gotowe formaty, zmienić kształt, przybliżyć obraz i ustawić dokładną pozycję kadru.</p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Eksport - jaki format wybrać?">
          <p className="text-mid">Na dole lewego panelu wybierasz format wyjściowy i jakość kompresji:</p>
          <div className="mt-4 space-y-4">
            <div>
              <p className="text-dark font-semibold">JPG</p>
              <p className="text-mid mt-1">
                Najpopularniejszy format dla zdjęć. Dobre kompresowanie przy zachowaniu jakości wizualnej. Nie obsługuje przezroczystości - tło zawsze będzie wypełnione kolorem. Dobry wybór dla zdjęć
                produktowych, portretów i większości grafik na stronę.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">PNG</p>
              <p className="text-mid mt-1">
                Format bezstratny - zachowuje pełną jakość, ale pliki są większe. Obsługuje przezroczystość (wymagany przy kształcie koła). Dobry wybór dla grafik z tekstem, ikon i obrazów
                wymagających ostrych krawędzi.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">WebP</p>
              <p className="text-mid mt-1">
                Nowoczesny format łączący zalety JPG i PNG - małe pliki, dobra jakość, obsługa przezroczystości. Obsługiwany przez wszystkie nowoczesne przeglądarki. Zalecany dla stron WWW - mniejsze
                pliki oznaczają szybsze ładowanie.
              </p>
            </div>
          </div>
          <p className="text-mid mt-4">
            <strong>Suwak jakości (60-100%)</strong> dostępny jest dla formatów JPG i WebP. Wyższa wartość = lepsza jakość, ale większy plik. Dla mediów społecznościowych 70-85% to zazwyczaj optymalny
            kompromis.
          </p>
          <p className="text-mid mt-3">
            Po ustawieniu wszystkich parametrów kliknij przycisk <strong>Zmień rozmiar i pobierz</strong>. Plik zostanie wygenerowany i automatycznie pobrany na dysk.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Proporcje (aspect ratio) - co to znaczy?">
          <p className="text-mid">Proporcje obrazu (aspect ratio) to stosunek jego szerokości do wysokości. Zapisuje się je jako dwie liczby oddzielone dwukropkiem, np. 16:9 lub 4:5.</p>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-dark font-semibold">1:1 (kwadrat)</p>
              <p className="text-mid mt-1">Szerokość równa wysokości. Instagram post kwadrat, zdjęcia profilowe, ikony.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">4:5 (pionowy)</p>
              <p className="text-mid mt-1">Lekko pionowy format. Instagram post pionowy - zajmuje więcej miejsca w feedzie niż kwadrat.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">3:2 (klasyczny)</p>
              <p className="text-mid mt-1">Tradycyjne proporcje fotografii analogowej. Wiele aparatów cyfrowych też używa tego formatu.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">16:9 (panoramiczny)</p>
              <p className="text-mid mt-1">Standardowy format wideo HD, prezentacji i monitorów. YouTube, Facebook video, banery na stronach.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">9:16 (pionowy pełnoekranowy)</p>
              <p className="text-mid mt-1">Odwrócone 16:9 - format pionowy wypełniający cały ekran telefonu. Instagram Stories, TikTok, YouTube Shorts.</p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} />

        <Gap variant="line" />

        <SectionInfo
          title="Wypróbuj narzędzie"
          btnOne="Przejdź do narzędzia kadrowania"
          btnOneLink="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia"
          btnTwo="Zobacz inne narzędzia"
          btnTwoLink="/narzedzia"
        >
          <p className="text-mid">
            Teraz, gdy wiesz jak działa narzędzie, możesz przyciąć swoje zdjęcia do idealnych wymiarów. Po zmianie rozmiaru możesz też{' '}
            <Link href="/narzedzia/jpg-png-na-webp-bez-limitu">przekonwertować obrazy na WebP</Link>, żeby zmniejszyć ich rozmiar. Jeśli potrzebujesz profesjonalnych grafik —{' '}
            <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/projekty-graficzne">projektami graficznymi</Link>.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych grafik na stronę lub do mediów społecznościowych?"
        description="Tworzymy spójne materiały wizualne dopasowane do Twojej marki - od zdjęć produktowych po grafiki reklamowe."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
