import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import Link from 'next/link';
import {
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Darmowe narzędzia online | Konwertery obrazów, SEO, kolory, favicon',
  description: '22 darmowe narzędzia online: 12 konwerterów obrazów (JPG, PNG, WebP, SVG, BMP, GIF), generator favicon, edytor zdjęć, licznik tekstu, palety kolorów i kody QR. Bez rejestracji.',
  alternates: getToolsIndexAlternates('pl'),
  openGraph: {
    title: 'Darmowe narzędzia online | Konwertery obrazów, SEO, kolory, favicon',
    description: '22 darmowe narzędzia online: 12 konwerterów obrazów (JPG, PNG, WebP, SVG, BMP, GIF), generator favicon, edytor zdjęć, licznik tekstu, palety kolorów i kody QR. Bez rejestracji.',
    url: toAbsoluteUrl('/narzedzia'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Darmowe narzędzia online — konwertery obrazów, SEO, kolory, favicon',
  description:
    '22 darmowe narzędzia online: 12 konwerterów obrazów (JPG, PNG, WebP, SVG, BMP, GIF), generator favicon, edytor zdjęć, licznik tekstu, palety kolorów i kody QR. Bez rejestracji, bez limitu.',
  url: toAbsoluteUrl('/narzedzia'),
  inLanguage: 'pl-PL',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Konwersja formatów obrazów' },
    { '@type': 'Thing', name: 'Konwerter JPG PNG WebP SVG BMP GIF' },
    { '@type': 'Thing', name: 'Optymalizacja obrazów na stronę WWW' },
    { '@type': 'Thing', name: 'Zmiana formatu zdjęć online' },
    { '@type': 'Thing', name: 'SEO — meta title, meta description' },
    { '@type': 'Thing', name: 'Kolory, palety, kontrast WCAG' },
    { '@type': 'Thing', name: 'Generator favicon, QR, stopka e-mail' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 22,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konwerter JPG na WebP — zmniejsz wagę zdjęć',
        description: 'Darmowy konwerter JPG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Konwersja w przeglądarce, bez rejestracji.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwerter JPEG do WebP', 'Zamiana JPG na WebP online', 'JPG to WebP converter'],
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Konwerter PNG na JPG online',
        description: 'Zamień pliki PNG na JPG. Zmniejsz rozmiar grafik bezstratnych, konwersja w przeglądarce bez limitu plików.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwersja PNG do JPG', 'Zamiana PNG na JPEG', 'PNG to JPG converter'],
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Konwerter WebP na JPG online',
        description: 'Zamień pliki WebP na JPG. Kompatybilność z każdym programem i platformą — konwersja lokalna w przeglądarce.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwersja WebP do JPG', 'Zamiana WebP na JPEG', 'WebP to JPG converter'],
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Konwerter PNG na WebP online',
        description: 'Zamień grafiki PNG na WebP z zachowaniem przezroczystości. Mniejsze pliki, szybsze ładowanie strony.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwersja PNG do WebP', 'PNG to WebP converter'],
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Konwerter JPG na PNG online',
        description: 'Zamień pliki JPG na bezstratny format PNG. Idealne do dalszej edycji graficznej.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Konwerter WebP na PNG online',
        description: 'Zamień pliki WebP na bezstratny PNG z zachowaniem przezroczystości.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Konwerter SVG na PNG online',
        description: 'Zamień grafikę wektorową SVG na rastrowy PNG. Przezroczystość zachowana.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Konwerter SVG na JPG online',
        description: 'Zamień grafikę wektorową SVG na JPG. Mniejszy plik, pełna kompatybilność.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Konwerter BMP na JPG online',
        description: 'Zamień nieskompresowane pliki BMP na lekki JPG. Redukcja rozmiaru o 90–97%.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Konwerter BMP na PNG online',
        description: 'Zamień nieskompresowane pliki BMP na bezstratny PNG.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Konwerter GIF na PNG online',
        description: 'Wyeksportuj pierwszą klatkę GIF-a jako statyczny obraz PNG z przezroczystością.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Konwerter GIF na JPG online',
        description: 'Wyeksportuj pierwszą klatkę GIF-a jako statyczny JPG. Lekki plik, pełna kompatybilność.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Edytor zdjęć online — kadrowanie i zmiana rozmiaru',
        description: 'Kadrowanie i zmiana rozmiaru zdjęć pod media społecznościowe i strony WWW. Gotowe presety, własne wymiary w pikselach, okrągłe avatary.',
        url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Przycinanie zdjęć online', 'Zmiana rozmiaru obrazów', 'Image editor online'],
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Generator favicon online',
        description: 'Darmowy generator favicon.ico z jednego obrazu. Tworzy ikony 16x16, 32x32, 180x180, 192x192 i 512x512 zgodne z Lighthouse.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: ['Generator ikon favicon', 'Favicon creator'],
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Licznik długości meta title i description',
        description: 'Sprawdź długość meta title i meta description z podglądem w Google. Liczba znaków, szerokość w pikselach, podgląd SERP.',
        url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        alternateName: ['Meta tag checker', 'SERP preview tool', 'Sprawdzacz meta tagów'],
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Generator stopki mailowej HTML',
        description: 'Darmowy generator podpisu e-mail HTML. Dane kontaktowe, link CTA, profile social media — gotowy kod do Gmaila i Outlooka.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        alternateName: ['Generator podpisu e-mail', 'Email signature generator'],
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Kontrast i czytelność kolorów — WCAG checker',
        description: 'Sprawdź kontrast tekstu i tła według WCAG 2.1. Automatyczne dopasowanie koloru do wymaganego poziomu AA lub AAA.',
        url: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: ['Tester kontrastu WCAG', 'Color contrast checker', 'Sprawdzacz dostępności kolorów'],
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Ekstraktor kolorów z obrazu online',
        description: 'Wgraj zdjęcie lub logo i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB.',
        url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: ['Color picker z obrazu', 'Paleta kolorów ze zdjęcia', 'Image color extractor'],
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Generator palet kolorów online',
        description: 'Generator palet kolorów z jednego koloru bazowego. Schematy monochromatyczne, triadyczne, analogiczne, komplementarne, pastelowe.',
        url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: ['Color palette generator', 'Generator schematów kolorystycznych'],
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Licznik słów, znaków i czasu czytania',
        description: 'Darmowy licznik słów i znaków z oceną długości tekstu. Ile słów powinien mieć artykuł, opis usługi, tekst na stronę.',
        url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        alternateName: ['Word counter', 'Licznik znaków online'],
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Generator kodów QR online',
        description: 'Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        alternateName: ['QR code generator', 'Kreator kodów QR'],
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Zmiana rozmiaru zdjęć online',
        description: 'Zmień rozmiar zdjęć pod social media, e-commerce i strony WWW. Gotowe formaty i własne wymiary.',
        url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-zdjecia'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Image resizer', 'Resize zdjęć online'],
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Ile kosztują narzędzia?',
    answer: 'Nic. Wszystkie narzędzia są darmowe, bez abonamentu i bez ukrytych opłat.',
  },
  {
    question: 'Czy moje pliki są wysyłane na serwer?',
    answer: 'Nie. Wszystkie narzędzia działają w całości w przeglądarce. Pliki nie opuszczają komputera i nie są nigdzie przechowywane.',
  },
  {
    question: 'Czy potrzebuję konta?',
    answer: 'Nie. Korzystasz od razu, bez logowania i bez zakładania konta.',
  },
  {
    question: 'Czy jest limit użycia?',
    answer: 'Nie. Korzystasz bez ograniczeń - bez dziennych limitów, bez limitu plików, bez limitu konwersji.',
  },
  {
    question: 'Do czego służą te narzędzia?',
    answer:
      'Pomagają przygotować materiały do strony internetowej, mediów społecznościowych i druku: konwertować obrazy między formatami (JPG, PNG, WebP, SVG, BMP, GIF), zoptymalizować zdjęcia, stworzyć favicon, sprawdzić długość tekstu, wygenerować kod QR, dobrać kolory i zweryfikować ich czytelność.',
  },
  {
    question: 'Czy narzędzia działają na telefonie?',
    answer: 'Tak, ale niektóre narzędzia (konwertery WebP, generator favicon) działają lepiej na komputerze ze względu na przetwarzanie większych plików.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Darmowe narzędzia online"
        description="12 konwerterów obrazów, edytor zdjęć, generator favicon, licznik tekstu, narzędzia do kolorów i kody QR. Bez rejestracji, bez limitu — wszystko działa w przeglądarce."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Obrazy i favicony"
          description="Narzędzia do przygotowania zdjęć, grafik i ikon pod strony WWW i media społecznościowe."
          grid="three"
          items={[
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Edytor zdjęć online',
              topImageAlt: 'Edytor zdjęć online Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/edytor-zdjec-online-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Przygotuj idealny kadr ze zdjęcia pod media społecznościowe lub stronę WWW. Wybierz gotowy format albo wpisz własne wymiary w pikselach i pobierz gotowe zdjęcie w PNG, JPG lub
                    WebP.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/edytor-zdjec-online">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Generator favicon',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc: '/assets/tools/favicon-generator/darmowy-generator-favicon-ico-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Z jednego obrazu wygenerujesz <strong>favicon.ico</strong> oraz ikony PNG 180x180, 192x192 i 512x512 - zgodne z wymaganiami przeglądarek i Lighthouse.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/darmowy-generator-favicon-ico">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Konwertery formatów obrazów"
          description="12 konwerterów obrazów online — zamień format zdjęć między JPG, PNG, WebP, SVG, BMP i GIF. Konwersja w przeglądarce, bez wysyłania plików na serwer."
          grid="three"
          items={[
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter JPG na WebP',
              topImageAlt: 'Konwerter JPG na WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Zmniejsz wagę zdjęć nawet o 35%, konwertując je z JPG do <strong>WebP</strong>. Format WebP przyspiesza ładowanie strony i poprawia Core Web Vitals.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-jpg-na-webp">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter PNG na JPG',
              topImageAlt: 'Konwerter PNG na JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień pliki PNG na lekki JPG. Zmniejsz rozmiar grafik i zdjęć do formatu akceptowanego przez każdą platformę.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-png-na-jpg">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter WebP na JPG',
              topImageAlt: 'Konwerter WebP na JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień pliki WebP na JPG — format kompatybilny z każdym programem, platformą sprzedażową i klientem e-mail.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-webp-na-jpg">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter PNG na WebP',
              topImageAlt: 'Konwerter PNG na WebP Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień grafiki PNG na WebP. Mniejsze pliki przy zachowaniu przezroczystości — idealne do stron WWW.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-png-na-webp">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter JPG na PNG',
              topImageAlt: 'Konwerter JPG na PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień pliki JPG na bezstratny PNG. Zachowaj pełną jakość obrazu przy konwersji formatu.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-jpg-na-png">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter WebP na PNG',
              topImageAlt: 'Konwerter WebP na PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień pliki WebP na bezstratny PNG. Konwersja lokalna w przeglądarce, bez wysyłania na serwer.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-webp-na-png">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter SVG na PNG',
              topImageAlt: 'Konwerter SVG na PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień grafikę wektorową SVG na rastrowy PNG. Idealne do dokumentów i mediów społecznościowych.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-svg-na-png">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter SVG na JPG',
              topImageAlt: 'Konwerter SVG na JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień grafikę wektorową SVG na JPG. Mniejszy plik, pełna kompatybilność z każdą platformą.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-svg-na-jpg">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter BMP na JPG',
              topImageAlt: 'Konwerter BMP na JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień nieskompresowane pliki BMP na lekki JPG. Redukcja rozmiaru bez widocznej utraty jakości.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-bmp-na-jpg">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter BMP na PNG',
              topImageAlt: 'Konwerter BMP na PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zamień pliki BMP na bezstratny PNG. Zachowaj jakość obrazu przy mniejszym rozmiarze pliku.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-bmp-na-png">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter GIF na PNG',
              topImageAlt: 'Konwerter GIF na PNG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Wyeksportuj pierwszą klatkę GIF-a jako statyczny obraz PNG. Bez utraty jakości.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-gif-na-png">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className="h-8 w-8" />,
              title: 'Konwerter GIF na JPG',
              topImageAlt: 'Konwerter GIF na JPG Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Wyeksportuj pierwszą klatkę GIF-a jako JPG. Mniejszy plik, szybsze ładowanie strony.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/konwerter-gif-na-jpg">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Tekst i SEO"
          description="Narzędzia do sprawdzania długości tekstu, meta tagów i podglądu strony w wynikach wyszukiwania."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Licznik długości meta title i description',
              topImageAlt: 'Licznik długości meta title i description Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/licznik-dlugosci-meta-title-i-description-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sprawdź liczbę znaków, słów i szerokość w pikselach oraz podgląd wyniku w Google. Łatwiej unikniesz uciętych tytułów i opisów i szybciej dopasujesz treści pod SEO.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/licznik-dlugosci-meta-title-i-description">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Licznik słów i znaków',
              topImageAlt: 'Licznik słów i znaków Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/licznik-slow-i-znakow-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sprawdź długość tekstu i oceń, czy jest odpowiednia dla strony głównej, opisu usługi, artykułu blogowego czy opisu produktu. Narzędzie policzy słowa, znaki, akapity i czas
                    czytania.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/licznik-slow-i-znakow">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail i komunikacja"
          description="Narzędzia, które pomagają uporządkować komunikację mailową i wizerunek marki."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Darmowy generator stopki mailowej HTML',
              topImageAlt: 'Darmowy generator stopki mailowej HTML Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/darmowy-generator-stopki-mailowej-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila, Outlooka i innych klientów pocztowych.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/darmowy-generator-stopki-mailowej">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kody QR"
          description="Generator kodów QR do stron, wizytówek, menu i materiałów drukowanych."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Darmowy generator kodów QR',
              topImageAlt: 'Darmowy generator kodów QR Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/darmowy-generator-kodow-qr-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/darmowy-generator-kodow-qr">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Kolory i dostępność"
          description="Narzędzia do pracy z kolorami, kontrastem i dostępnością WCAG."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Kontrast i czytelność kolorów',
              topImageAlt: 'Kontrast i czytelność kolorów Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/kontrast-i-czytelnosc-kolorow-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów, zobacz współczynnik kontrastu według <strong>WCAG</strong> i użyj funkcji <strong>Dopasuj</strong> do automatycznej
                    korekty.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/kontrast-i-czytelnosc-kolorow">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Ekstraktor kolorów z obrazu',
              topImageAlt: 'Ekstraktor kolorów z obrazu Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/ekstraktor-kolorow-z-obrazu-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące kolory. Skopiuj kody HEX jednym kliknięciem i użyj w dowolnym miejscu.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/ekstraktor-kolorow-z-obrazu">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator palet kolorów',
              topImageAlt: 'Generator palet kolorów Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/generator-palet-kolorow-pl.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Wybierz jeden kolor bazowy i wygeneruj 9 palet kolorów: monochromatyczną, komplementarną, triadyczną, pastelową, ciemną i inne. Kopiuj kody HEX jednym kliknięciem.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/generator-palet-kolorow">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Czym są narzędzia Arteon?">
          <p className="mb-4">
            Zestaw 22 darmowych narzędzi online do przygotowania materiałów na stronę internetową, do mediów społecznościowych i do druku. 12 konwerterów formatów obrazów (JPG, PNG, WebP, SVG, BMP,
            GIF), edytor zdjęć, generator favicon, licznik tekstu, ekstraktor kolorów, generator palet i kody QR.
          </p>
          <p className="mb-4">Wszystkie narzędzia działają w przeglądarce — pliki nie są wysyłane na serwer. Korzystasz bez rejestracji i bez limitu.</p>
          <p>
            Jeśli potrzebujesz pomocy z projektem strony lub identyfikacji wizualnej, <Link href="/kontakt">skontaktuj się z nami</Link>.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dlaczego warto korzystać z narzędzi Arteon?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Pełna prywatność',
              description: 'Wszystkie narzędzia przetwarzają pliki lokalnie w przeglądarce. Nic nie jest wysyłane na serwer - dane znikają po zamknięciu karty.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez limitu użycia',
              description: 'Korzystasz bez ograniczeń - bez dziennych limitów, bez limitu plików, bez limitu konwersji. Tyle razy, ile potrzebujesz.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Bez rejestracji',
              description: 'Nie musisz zakładać konta ani się logować. Otwierasz narzędzie, korzystasz i gotowe.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Po polsku',
              description: 'Wszystkie narzędzia są w języku polskim - interfejs, instrukcje i komunikaty. Bez szukania tłumaczeń.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania dotyczące naszych narzędzi" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy z projektem?"
        description="Jeśli szukasz wsparcia przy stronie, sklepie lub identyfikacji wizualnej - skontaktuj się z nami. Pomożemy dobrać rozwiązanie dopasowane do potrzeb."
        btnOne="Skontaktuj się"
        btnOneLink="/kontakt"
        btnTwo="Zobacz usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Script id="ld-json-tools" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
