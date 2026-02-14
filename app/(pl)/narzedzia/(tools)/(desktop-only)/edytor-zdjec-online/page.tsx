import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolAlternates } from '@/lib/i18n/pages/tool-meta';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import type { Metadata } from 'next';
import Script from 'next/script';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';
import Link from 'next/link';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import { RiInstagramLine, RiFacebookLine, RiLinkedinLine, RiImageLine, RiCropLine, RiLayoutGridLine, RiFileImageLine, RiAspectRatioLine } from 'react-icons/ri';

const LOCALE = 'pl' as const;
const TOOL_KEY = 'imageResize' as const;

export const metadata: Metadata = {
  title: 'Darmowy edytor zdjęć online - zmiana rozmiaru, kadrowanie, konwersja',
  description: 'Zmień rozmiar zdjęcia online za darmo. Kadruj do Instagram, Facebook, LinkedIn. Konwertuj JPG na WebP. Twórz okrągłe avatary. Przetwarzanie lokalne w przeglądarce.',
  alternates: getToolAlternates(TOOL_KEY, LOCALE),
  openGraph: {
    title: 'Darmowy edytor zdjęć online - zmiana rozmiaru, kadrowanie, konwersja',
    description: 'Zmień rozmiar zdjęcia online za darmo. Kadruj do Instagram, Facebook, LinkedIn. Konwertuj JPG na WebP. Twórz okrągłe avatary. Przetwarzanie lokalne w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy edytor zdjęć online',
  alternateName: [
    'Zmiana rozmiaru zdjęcia online',
    'Kadrowanie zdjęć online',
    'Przycinanie zdjęć online',
    'Rozmiar zdjęcia Instagram',
    'Rozmiar zdjęcia Facebook',
    'Konwerter JPG na WebP',
    'Okrągłe zdjęcie profilowe online',
    'Kompresja zdjęć online',
  ],
  url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description:
    'Darmowy edytor zdjęć online do zmiany rozmiaru, kadrowania i konwersji formatów. Gotowe presety dla Instagram, Facebook i LinkedIn. Tworzenie okrągłych avatarów. Eksport do JPG, PNG i WebP z kontrolą jakości. Przetwarzanie lokalne w przeglądarce.',
  featureList: [
    'Zmiana rozmiaru zdjęcia do dowolnych wymiarów',
    'Kadrowanie z interaktywnym wyborem obszaru',
    'Gotowe formaty dla Instagram (post kwadrat, post pion, story, reels)',
    'Gotowe formaty dla Facebook (post, okładka strony)',
    'Gotowe formaty dla LinkedIn (post, baner profilu)',
    'Gotowe formaty dla WWW (OG image, hero, baner, miniatura)',
    'Kształty kadru: prostokąt, kwadrat, koło (okrągły avatar)',
    'Siatka 3x3 (reguła trójpodziału) z wyborem koloru',
    'Zoom kadru 100-300%',
    'Precyzyjna pozycja kadru (X, Y) z centrowaniem',
    'Konwersja formatów: JPG, PNG, WebP',
    'Kontrola jakości kompresji 60-100%',
    'Przetwarzanie lokalne w przeglądarce',
    'Darmowe narzędzie bez logowania',
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
  name: 'Jak zmienić rozmiar zdjęcia i wykadrować je do mediów społecznościowych',
  description: 'Jak zmienić rozmiar zdjęcia do Instagram (1080x1080, 1080x1350, story), Facebook, LinkedIn i OG image. Konwersja JPG na WebP i tworzenie okrągłych avatarów.',
  url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj zdjęcie',
      text: 'Przeciągnij plik na wyznaczone pole lub wybierz obraz z dysku. Obsługiwane formaty: JPG, PNG, WebP.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz wymiary lub gotowy format',
      text: 'Wpisz docelowe wymiary w pikselach lub wybierz gotowy format (np. Instagram post, okładka Facebook, OG image).',
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
    question: 'Czy edytor obsługuje bardzo duże zdjęcia?',
    answer:
      'Tak, choć przy obrazach o rozdzielczości powyżej 4000×4000 pikseli przetwarzanie może być wolniejsze - zależy to od mocy urządzenia i ilości dostępnej pamięci w przeglądarce. Całe przetwarzanie odbywa się lokalnie, bez wysyłania plików na serwer.',
    answerSchemaText: 'Tak. Przy obrazach powyżej 4000×4000 px przetwarzanie może być wolniejsze. Całe przetwarzanie odbywa się lokalnie.',
  },
  {
    question: 'Jaki format wybrać do eksportu - JPG, PNG czy WebP?',
    answer:
      'JPG to dobry wybór dla zdjęć z wieloma kolorami i gradientami - pliki są małe przy zachowaniu dobrej jakości. PNG zachowuje najwyższą jakość i obsługuje przezroczystość (np. okrągły avatar). WebP łączy zalety obu formatów - małe pliki z wysoką jakością i obsługą przezroczystości.',
    answerSchemaText: 'JPG dla zdjęć, PNG dla przezroczystości, WebP łączy małe pliki z wysoką jakością.',
  },
  {
    question: 'Jak utworzyć okrągłe zdjęcie profilowe?',
    answer: 'W zakładce Kształty kadru wybierz opcję Koło. Narzędzie automatycznie przełączy format na PNG lub WebP (JPG nie obsługuje przezroczystości). Obszar poza kołem będzie przezroczysty.',
    answerSchemaText: 'Wybierz kształt Koło w zakładce Kształty kadru. Obszar poza kołem będzie przezroczysty.',
  },
  {
    question: 'Jakie są wymiary zdjęcia na Instagram?',
    answer:
      'Instagram obsługuje trzy główne formaty: post kwadratowy (1080x1080 px, proporcje 1:1), post pionowy (1080x1350 px, proporcje 4:5) oraz story/reels (1080x1920 px, proporcje 9:16). Narzędzie ma gotowe formaty dla każdego z tych wymiarów.',
    answerSchemaText: 'Post kwadrat: 1080x1080 px, post pion: 1080x1350 px, story/reels: 1080x1920 px.',
  },
  {
    question: 'Jak działa suwak jakości?',
    answer:
      'Suwak jakości (60–100%) kontroluje stopień kompresji dla formatów JPG i WebP. Wyższa wartość oznacza lepszą jakość obrazu, ale większy rozmiar pliku. Dla większości zastosowań w mediach społecznościowych optymalna wartość to 70–85%.',
    answerSchemaText: 'Suwak kontroluje kompresję JPG i WebP. Dla mediów społecznościowych optymalna wartość to 70–85%.',
  },
];

export default function ImageEditorPage() {
  return (
    <>
      <Script id="ld-json-image-editor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-image-editor-howto" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Darmowy edytor zdjęć online"
        description="Zmień rozmiar, wykadruj i konwertuj zdjęcia do Instagram, Facebook i LinkedIn. Gotowe formaty, okrągłe avatary, eksport do JPG, PNG i WebP. Przetwarzanie lokalne w przeglądarce."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/edytor-zdjec-online', label: 'Darmowy edytor zdjęć online' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <ImageResizeTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Zmień rozmiar zdjęcia online - kadrowanie, konwersja i kompresja w jednym narzędziu">
          <p className="text-mid">
            Narzędzie do edycji zdjęć online pozwala szybko dopasować obrazy do konkretnych wymiarów. Możesz zmienić rozmiar zdjęcia do dowolnych wymiarów w pikselach, wybrać gotowy format dla mediów
            społecznościowych lub przyciąć fragment obrazu z precyzyjnym kadrowaniem.
          </p>
          <p className="text-mid mt-3">Oprócz zmiany rozmiaru narzędzie oferuje konwersję formatów (JPG, PNG, WebP), tworzenie okrągłych avatarów i kontrolę jakości kompresji.</p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak zmienić rozmiar zdjęcia online?"
          description="Edycja zdjęcia zajmuje zaledwie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj zdjęcie',
              description: 'Przeciągnij plik na wyznaczone pole lub wybierz zdjęcie z dysku. Obsługiwane formaty: JPG, PNG, WebP.',
            },
            {
              title: '2. Ustaw wymiary',
              description: 'Wpisz wymiary w pikselach lub wybierz gotowy format (Instagram, Facebook, YouTube, LinkedIn, OG image).',
            },
            {
              title: '3. Pobierz',
              description: 'Dopasuj kadr, wybierz format pliku (JPG, PNG, WebP), ustaw jakość i pobierz gotowe zdjęcie.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak dodać obraz?">
          <p className="text-mid">Narzędzie przyjmuje obrazy w formatach JPG, PNG i WebP. Możesz dodać zdjęcie na dwa sposoby:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong>Przeciągnij i upuść</strong> - chwyć plik z folderu na komputerze i upuść go na pole do dodania pliku (pole z przerywaną ramką).
            </li>
            <li>
              <strong>Wybór z dysku</strong> - po kliknięciu w pole do dodania pliku otworzy się okno wyboru pliku z dysku.
            </li>
          </ul>
          <p className="text-mid mt-3">Po dodaniu obrazu narzędzie automatycznie odczyta jego oryginalne wymiary i wyświetli podgląd. Możesz teraz przejść do ustawień kadru.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Ustaw wymiary docelowe"
          demo={
            <div className="tool-section space-y-3">
              <div className="flex flex-wrap gap-2">
                <button className="bg-primary flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! text-white">
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

        <SectionInfo title="Wymiary zdjęć do Instagram, Facebook i LinkedIn">
          <p className="text-mid mb-4">Narzędzie zawiera gotowe formaty z optymalnymi wymiarami dla najpopularniejszych platform:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Platforma</th>
                  <th className="py-2 pr-4 font-semibold">Format</th>
                  <th className="py-2 pr-4 font-semibold">Wymiary (px)</th>
                  <th className="py-2 font-semibold">Proporcje</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post kwadrat</td>
                  <td className="py-2 pr-4">1080 x 1080</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post pion</td>
                  <td className="py-2 pr-4">1080 x 1350</td>
                  <td className="py-2">4:5</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Story / Reels</td>
                  <td className="py-2 pr-4">1080 x 1920</td>
                  <td className="py-2">9:16</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Okładka strony</td>
                  <td className="py-2 pr-4">820 x 360</td>
                  <td className="py-2">~2.3:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 x 1200</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Baner profilu</td>
                  <td className="py-2 pr-4">1584 x 396</td>
                  <td className="py-2">4:1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">OG image</td>
                  <td className="py-2 pr-4">Udostępnianie linków</td>
                  <td className="py-2 pr-4">1200 x 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">Wymiary w tabeli to zalecane rozmiary dla każdej platformy. Narzędzie automatycznie ustawia te wymiary po wybraniu odpowiedniego formatu.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Gotowe formaty - który wybrać?"
          description="Każdy format odpowiada konkretnym wymaganiom platformy lub zastosowania:"
          grid="two"
          items={[
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post kwadrat (1080x1080)',
              description: <p>Standardowy format posta na Instagramie. Proporcje 1:1. Sprawdza się w strumieniu wpisów i wygląda dobrze zarówno na telefonie, jak i komputerze.</p>,
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - post pion (1080x1350)',
              description: <p>Pionowy format posta (proporcje 4:5). Zajmuje więcej miejsca w strumieniu wpisów niż kwadrat, co może zwiększyć zaangażowanie.</p>,
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: 'Instagram - story / reels (1080x1920)',
              description: <p>Pełnoekranowy format pionowy (proporcje 9:16). Używany w relacjach i rolkach. Wypełnia cały ekran telefonu.</p>,
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - post (1200x630)',
              description: <p>Optymalny format dla postów na Facebooku i udostępnianych linków. Proporcje zbliżone do 16:9.</p>,
            },
            {
              icon: <RiFacebookLine className="h-6 w-6" />,
              title: 'Facebook - okładka strony (820x360)',
              description: <p>Zdjęcie w tle na stronie firmowej Facebook. Szeroki, panoramiczny format - na różnych urządzeniach może być przycinane inaczej.</p>,
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - post (1200x1200)',
              description: <p>Kwadratowy format dla postów na LinkedIn. Dobrze prezentuje się w strumieniu wpisów i na urządzeniach mobilnych.</p>,
            },
            {
              icon: <RiLinkedinLine className="h-6 w-6" />,
              title: 'LinkedIn - baner profilu (1584x396)',
              description: <p>Zdjęcie w tle na profilu osobistym lub firmowym LinkedIn. Bardzo szeroki format - centralny element powinien być na środku kadru.</p>,
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'OG image (1200x630)',
              description: <p>Grafika wyświetlana przy udostępnianiu linku w mediach społecznościowych (Open Graph). Standard dla Facebooka, Twittera, LinkedIna i innych platform.</p>,
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Grafika do artykułu (1600x900)',
              description: <p>Szeroki format odpowiedni na nagłówki artykułów blogowych. Proporcje 16:9 dobrze wyglądają na stronach z dużą ilością tekstu.</p>,
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Baner strony (1920x600)',
              description: <p>Bardzo szeroki format do banerów na stronach WWW. Sprawdza się jako tło pod nagłówkiem lub w sekcjach ofertowych.</p>,
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Miniatura artykułu (800x600)',
              description: <p>Mniejszy format do miniatur na listach artykułów, w karuzeli produktów lub jako podgląd w wynikach wyszukiwania.</p>,
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Hero sekcji (1920x1080)',
              description: <p>Pełnoekranowy format Full HD. Używany jako tło głównej sekcji na stronach głównych lub stronach ofertowych.</p>,
            },
          ]}
        />

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
          <p className="text-mid mt-3">
            Kształt koła tworzy okrągły avatar z przezroczystym tłem poza okręgiem. Narzędzie automatycznie przełączy format na PNG lub WebP, ponieważ JPG nie obsługuje przezroczystości.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Siatka 3x3 - do czego służy?">
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

        <SectionTabs
          title="Eksport - jaki format wybrać?"
          tabs={[
            {
              title: 'JPG',
              icon: <RiImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    Najpopularniejszy format dla zdjęć. Dobre kompresowanie przy zachowaniu jakości wizualnej. Nie obsługuje przezroczystości - tło zawsze będzie wypełnione kolorem.
                  </p>
                  <p className="text-mid">Dobry wybór dla zdjęć produktowych, portretów i większości grafik na stronę. Suwak jakości (60–100%) kontroluje kompresję.</p>
                </div>
              ),
            },
            {
              title: 'PNG',
              icon: <RiFileImageLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Format bezstratny - zachowuje pełną jakość, ale pliki są większe. Obsługuje przezroczystość (wymagany przy kształcie koła).</p>
                  <p className="text-mid">Dobry wybór dla grafik z tekstem, ikon i obrazów wymagających ostrych krawędzi.</p>
                </div>
              ),
            },
            {
              title: 'WebP',
              icon: <RiCropLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Nowoczesny format łączący zalety JPG i PNG - małe pliki, dobra jakość, obsługa przezroczystości. Obsługiwany przez wszystkie nowoczesne przeglądarki.</p>
                  <p className="text-mid">
                    Zalecany dla stron WWW - mniejsze pliki oznaczają szybsze ładowanie. Więcej o WebP znajdziesz w naszym{' '}
                    <Link href="/narzedzia/jpg-png-na-webp-bez-limitu">konwerterze JPG/PNG na WebP</Link>.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Proporcje (aspect ratio) - co to znaczy?"
          description="Proporcje obrazu (aspect ratio) to stosunek jego szerokości do wysokości. Zapisuje się je jako dwie liczby oddzielone dwukropkiem:"
          grid="two"
          items={[
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: '1:1 (kwadrat)',
              description: 'Szerokość równa wysokości. Instagram post kwadrat, zdjęcia profilowe, ikony.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: '4:5 (pionowy)',
              description: 'Lekko pionowy format. Instagram post pionowy - zajmuje więcej miejsca w feedzie niż kwadrat.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: '3:2 (klasyczny)',
              description: 'Tradycyjne proporcje fotografii analogowej. Wiele aparatów cyfrowych też używa tego formatu.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: '16:9 (panoramiczny)',
              description: 'Standardowy format wideo HD, prezentacji i monitorów. YouTube, Facebook video, banery na stronach.',
            },
            {
              icon: <RiInstagramLine className="h-6 w-6" />,
              title: '9:16 (pionowy pełnoekranowy)',
              description: 'Odwrócone 16:9 - format pionowy wypełniający cały ekran telefonu. Instagram Stories, TikTok, YouTube Shorts.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Najczęstsze pytania dotyczące edytora zdjęć"
          items={[
            ...faqItems,
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
          ]}
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/narzedzia/edytor-zdjec-online')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych grafik do mediów społecznościowych?"
        description="Tworzymy spójne materiały wizualne dopasowane do Twojej marki - od zdjęć produktowych po szablony postów na Instagram i Facebook."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź szablony postów"
        btnTwoLink="/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
