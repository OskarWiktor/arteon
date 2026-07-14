import Script from 'next/script';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiLockLine,
  RiGlobalLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import InlineLink from '@/components/atoms/InlineLink';
import Wrapper from '@/components/atoms/Wrapper';
import ToolCardFooter from '@/components/molecules/ToolCardFooter';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/toolMeta';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
export const metadata = {
  title:
    'Darmowe narzędzia bez rejestracji, limity użycia z pełnym zabezpieczeniem Twoich danych - Arteon',
  description:
    'Tworzymy i stale rozwijamy kompletny zestaw narzędzi nastawionych na prostotę, minimalizm i pełne bezpieczeństwo danych. Sprawdź nasze darmowe narzędzia, bez limitu i bez rejestracji.',
  alternates: getToolsIndexAlternates('pl'),
  openGraph: {
    title:
      'Darmowe narzędzia bez rejestracji, limity użycia z pełnym zabezpieczeniem Twoich danych - Arteon',
    description:
      'Tworzymy i stale rozwijamy kompletny zestaw narzędzi nastawionych na prostotę, minimalizm i pełne bezpieczeństwo danych. Sprawdź nasze darmowe narzędzia, bez limitu i bez rejestracji.',
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
  name: 'Darmowe narzędzia bez rejestracji, limity użycia z pełnym zabezpieczeniem Twoich danych',
  description:
    'Tworzymy i stale rozwijamy kompletny zestaw narzędzi nastawionych na prostotę, minimalizm i pełne bezpieczeństwo danych. Sprawdź nasze dedykowane narzędzia, które usprawnią edycję plików, poprawią seo, stworzą idealną paletę kolorystyczną i ulepszą Twoją komunikację e-mail',
  url: toAbsoluteUrl('/narzedzia'),
  inLanguage: 'pl-PL',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Konwersja formatów obrazów' },
    {
      '@type': 'Thing',
      name: 'Konwerter JPG PNG WebP SVG BMP GIF HEIC TIFF AVIF',
    },
    { '@type': 'Thing', name: 'Optymalizacja obrazów na stronę WWW' },
    { '@type': 'Thing', name: 'Zmiana formatu zdjęć' },
    { '@type': 'Thing', name: 'SEO - meta title, meta description' },
    { '@type': 'Thing', name: 'Kolory, palety, kontrast WCAG' },
    { '@type': 'Thing', name: 'Generator favicon, QR, stopka e-mail' },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konwerter JPG na WebP - zmniejsz wagę zdjęć',
        description:
          'Darmowy konwerter JPG na WebP. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Konwersja w przeglądarce, bez rejestracji.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Konwerter JPEG do WebP',
          'Zamiana JPG na WebP',
          'JPG to WebP converter',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Konwerter PNG na JPG',
        description:
          'Zamień pliki PNG na JPG. Zmniejsz rozmiar grafik bezstratnych, konwersja w przeglądarce bez limitu plików.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Konwersja PNG do JPG',
          'Zamiana PNG na JPEG',
          'PNG to JPG converter',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Konwerter WebP na JPG ',
        description:
          'Zamień pliki WebP na JPG. Kompatybilność z każdym programem i platformą - konwersja lokalna w przeglądarce.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Konwersja WebP do JPG',
          'Zamiana WebP na JPEG',
          'WebP to JPG converter',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Konwerter PNG na WebP ',
        description:
          'Zamień grafiki PNG na WebP z zachowaniem przezroczystości. Mniejsze pliki, szybsze ładowanie strony.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwersja PNG do WebP', 'PNG to WebP converter'],
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Konwerter JPG na PNG ',
        description:
          'Zamień pliki JPG na bezstratny format PNG. Idealne do dalszej edycji graficznej.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Konwerter WebP na PNG ',
        description:
          'Zamień pliki WebP na bezstratny PNG z zachowaniem przezroczystości.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Konwerter SVG na PNG ',
        description:
          'Zamień grafikę wektorową SVG na rastrowy PNG. Przezroczystość zachowana.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Konwerter SVG na JPG ',
        description:
          'Zamień grafikę wektorową SVG na JPG. Mniejszy plik, pełna kompatybilność.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Konwerter BMP na JPG ',
        description:
          'Zamień nieskompresowane pliki BMP na lekki JPG. Redukcja rozmiaru o 90–97%.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Konwerter BMP na PNG ',
        description: 'Zamień nieskompresowane pliki BMP na bezstratny PNG.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'Konwerter GIF na PNG ',
        description:
          'Wyeksportuj pierwszą klatkę GIF-a jako statyczny obraz PNG z przezroczystością.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'Konwerter GIF na JPG ',
        description:
          'Wyeksportuj pierwszą klatkę GIF-a jako statyczny JPG. Lekki plik, pełna kompatybilność.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'Konwerter SVG na WebP ',
        description:
          'Zamień grafikę wektorową SVG na lekki WebP. Idealne do stron internetowych i mediów społecznościowych.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'Konwerter GIF na WebP ',
        description:
          'Zamień pierwszą klatkę GIF na lekki WebP. Mniejszy plik, szybsze ładowanie.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'Konwerter BMP na WebP ',
        description:
          'Zamień nieskompresowane pliki BMP na lekki WebP. Redukcja rozmiaru nawet o 95%.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'Konwerter AVIF na JPG ',
        description:
          'Zamień pliki AVIF na uniwersalny JPG. Kompatybilność z każdym programem i platformą.',
        url: toAbsoluteUrl('/narzedzia/konwerter-avif-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'Konwerter AVIF na PNG ',
        description:
          'Zamień pliki AVIF na bezstratny PNG. Zachowaj pełną jakość i przezroczystość.',
        url: toAbsoluteUrl('/narzedzia/konwerter-avif-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'Konwerter AVIF na WebP ',
        description:
          'Zamień pliki AVIF na WebP. Szeroka kompatybilność przy zachowaniu małego rozmiaru.',
        url: toAbsoluteUrl('/narzedzia/konwerter-avif-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'Konwerter HEIC na JPG ',
        description:
          'Zamień zdjęcia HEIC z iPhone na uniwersalny JPG. Bez rejestracji, bez wysyłania na serwer.',
        url: toAbsoluteUrl('/narzedzia/konwerter-heic-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Konwerter zdjęć iPhone', 'HEIC to JPG converter'],
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'Konwerter HEIC na PNG ',
        description:
          'Zamień zdjęcia HEIC z iPhone na bezstratny PNG. Pełna jakość i przezroczystość.',
        url: toAbsoluteUrl('/narzedzia/konwerter-heic-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'Konwerter HEIC na WebP ',
        description:
          'Zamień zdjęcia HEIC z iPhone na lekki WebP. Mniejszy rozmiar, szybsze ładowanie.',
        url: toAbsoluteUrl('/narzedzia/konwerter-heic-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'Konwerter TIFF na JPG ',
        description:
          'Zamień pliki TIFF na kompaktowy JPG. Idealne do skanów, dokumentów i archiwów fotograficznych.',
        url: toAbsoluteUrl('/narzedzia/konwerter-tiff-na-jpg'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'Konwerter TIFF na PNG ',
        description:
          'Zamień pliki TIFF na bezstratny PNG. Zachowaj pełną jakość skanów i grafik.',
        url: toAbsoluteUrl('/narzedzia/konwerter-tiff-na-png'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'Konwerter TIFF na WebP ',
        description:
          'Zamień pliki TIFF na lekki WebP. Ogromna redukcja rozmiaru przy zachowaniu jakości.',
        url: toAbsoluteUrl('/narzedzia/konwerter-tiff-na-webp'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'Edytor zdjęć  - kadrowanie i zmiana rozmiaru',
        description:
          'Kadrowanie i zmiana rozmiaru zdjęć pod media społecznościowe i strony WWW. Gotowe presety, własne wymiary w pikselach, okrągłe avatary.',
        url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Przycinanie zdjęć ',
          'Zmiana rozmiaru obrazów',
          'Image editor ',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'Generator favicon ',
        description:
          'Darmowy generator favicon.ico z jednego obrazu. Tworzy ikony 16x16, 32x32, 180x180, 192x192 i 512x512 zgodne z Lighthouse.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: ['Generator ikon favicon', 'Favicon creator'],
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'Licznik długości meta title i description',
        description:
          'Sprawdź długość meta title i meta description z podglądem w Google. Liczba znaków, szerokość w pikselach, podgląd SERP.',
        url: toAbsoluteUrl(
          '/narzedzia/licznik-dlugosci-meta-title-i-description',
        ),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Meta tag checker',
          'SERP preview tool',
          'Sprawdzacz meta tagów',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'Generator stopki mailowej HTML',
        description:
          'Darmowy generator podpisu e-mail HTML. Dane kontaktowe, link CTA, profile social media - gotowy kod do Gmaila i Outlooka.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Generator podpisu e-mail',
          'E-mail signature generator',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'Kontrast i czytelność kolorów - WCAG checker',
        description:
          'Sprawdź kontrast tekstu i tła według WCAG 2.1. Automatyczne dopasowanie koloru do wymaganego poziomu AA lub AAA.',
        url: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Tester kontrastu WCAG',
          'Color contrast checker',
          'Sprawdzacz dostępności kolorów',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'Ekstraktor kolorów z obrazu ',
        description:
          'Wgraj zdjęcie lub logo i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB.',
        url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Color picker z obrazu',
          'Paleta kolorów ze zdjęcia',
          'Image color extractor',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'Generator palet kolorów ',
        description:
          'Generator palet kolorów z jednego koloru bazowego. Schematy monochromatyczne, triadyczne, analogiczne, komplementarne, pastelowe.',
        url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
        alternateName: [
          'Color palette generator',
          'Generator schematów kolorystycznych',
        ],
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'Licznik słów, znaków i czasu czytania',
        description:
          'Darmowy licznik słów i znaków z oceną długości tekstu. Ile słów powinien mieć artykuł, opis usługi, tekst na stronę.',
        url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
        alternateName: ['Word counter', 'Licznik znaków '],
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'Generator kodów QR ',
        description:
          'Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
        alternateName: ['QR code generator', 'Kreator kodów QR'],
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'Zmiana rozmiaru zdjęć ',
        description:
          'Zmień rozmiar zdjęć pod social media, e-commerce i strony WWW. Gotowe formaty i własne wymiary.',
        url: toAbsoluteUrl('/narzedzia/zmiana-rozmiaru-zdjecia'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        alternateName: ['Image resizer', 'Resize zdjęć '],
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'Konwerter JPG na AVIF',
        description:
          'Zamień zdjęcia JPG na nowoczesny AVIF. Kompresja nawet 50% lepsza niż JPG.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'Konwerter PNG na AVIF',
        description:
          'Zamień grafiki PNG na AVIF z zachowaniem przezroczystości.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'Konwerter WebP na AVIF',
        description: 'Zamień pliki WebP na AVIF. Jeszcze lepsza kompresja.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'Konwerter SVG na AVIF',
        description: 'Zamień grafikę wektorową SVG na nowoczesny AVIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'Konwerter BMP na AVIF',
        description:
          'Zamień pliki BMP na nowoczesny AVIF. Ogromna redukcja rozmiaru.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'Konwerter GIF na AVIF',
        description: 'Zamień klatkę GIF na nowoczesny AVIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-gif-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'Konwerter HEIC na AVIF',
        description: 'Zamień zdjęcia HEIC z iPhone na nowoczesny AVIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-heic-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'Konwerter TIFF na AVIF',
        description: 'Zamień pliki TIFF na nowoczesny AVIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-tiff-na-avif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'Konwerter JPG na GIF',
        description: 'Zamień zdjęcia JPG na GIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'Konwerter PNG na GIF',
        description: 'Zamień grafiki PNG na GIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'Konwerter WebP na GIF',
        description: 'Zamień pliki WebP na GIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'Konwerter SVG na GIF',
        description: 'Zamień grafikę wektorową SVG na GIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'Konwerter BMP na GIF',
        description: 'Zamień pliki BMP na GIF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-gif'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'Konwerter JPG na TIFF',
        description:
          'Zamień zdjęcia JPG na bezstratny TIFF. Do druku i archiwizacji.',
        url: toAbsoluteUrl('/narzedzia/konwerter-jpg-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'Konwerter PNG na TIFF',
        description: 'Zamień grafiki PNG na profesjonalny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-png-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'Konwerter WebP na TIFF',
        description: 'Zamień pliki WebP na bezstratny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-webp-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'Konwerter SVG na TIFF',
        description: 'Zamień grafikę wektorową SVG na profesjonalny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-svg-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'Konwerter BMP na TIFF',
        description: 'Zamień pliki BMP na profesjonalny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-bmp-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'Konwerter AVIF na TIFF',
        description: 'Zamień pliki AVIF na bezstratny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-avif-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 54,
        name: 'Konwerter HEIC na TIFF',
        description: 'Zamień zdjęcia HEIC z iPhone na profesjonalny TIFF.',
        url: toAbsoluteUrl('/narzedzia/konwerter-heic-na-tiff'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'Ile kosztują narzędzia?',
    answer:
      'Nic. Wszystkie narzędzia są darmowe, bez abonamentu i bez ukrytych opłat.',
  },
  {
    question: 'Czy moje pliki są wysyłane na serwer?',
    answer:
      'Nie. Wszystkie narzędzia działają w całości w przeglądarce. Pliki nie opuszczają komputera i nie są nigdzie przechowywane.',
  },
  {
    question: 'Czy potrzebuję konta?',
    answer: 'Nie. Korzystasz od razu, bez logowania i bez zakładania konta.',
  },
  {
    question: 'Czy jest limit użycia?',
    answer:
      'Nie. Korzystasz bez ograniczeń - bez dziennych limitów, bez limitu plików, bez limitu konwersji.',
  },
  {
    question: 'Do czego służą te narzędzia?',
    answer:
      'Pomagają przygotować materiały do strony internetowej, mediów społecznościowych i druku: konwertować obrazy między formatami (JPG, PNG, WebP, SVG, BMP, GIF, AVIF, HEIC, TIFF) w tym do nowoczesnego AVIF, GIF i profesjonalnego TIFF, zoptymalizować zdjęcia, stworzyć favicon, sprawdzić długość tekstu, wygenerować kod QR, dobrać kolory i zweryfikować ich czytelność.',
  },
  {
    question: 'Czy narzędzia działają na telefonie?',
    answer:
      'Tak, ale niektóre narzędzia (konwertery WebP, generator favicon) działają lepiej na komputerze ze względu na przetwarzanie większych plików.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Darmowe narzędzia '
        description='Tworzymy i stale rozwijamy kompletny zestaw narzędzi  nastawionych na prostotę, minimalizm i pełne bezpieczeństwo danych. Sprawdź nasze dedykowane narzędzia, które usprawnią edycję plików, poprawią seo, stworzą idealną paletę kolorystyczną i ulepszą Twoją komunikację e-mail'
        backgroundImage='/assets/tools/free-html-email-signature-generator/darmowy-generator-stopki-mailowej-pl.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Wrapper>
        <Divider size='xs' />

        <SectionSteps
          title='Obrazy i favicony'
          description='Narzędzia do przygotowania zdjęć, grafik i ikon pod strony WWW i media społecznościowe.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Edytor zdjęć ',
              topImageAlt: 'Edytor zdjęć  Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/edytor-zdjec-online-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Przygotuj idealny kadr ze zdjęcia pod media społecznościowe
                    lub stronę WWW. Wybierz gotowy format albo wpisz własne
                    wymiary w pikselach i pobierz gotowe zdjęcie w PNG, JPG lub
                    WebP.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/edytor-zdjec-online'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Generator favicon',
              topImageAlt: 'Generator favicon Arteon',
              topImageSrc:
                '/assets/tools/favicon-generator/darmowy-generator-favicon-ico-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Z jednego obrazu wygenerujesz <strong>favicon.ico</strong>{' '}
                    oraz ikony PNG 180x180, 192x192 i 512x512 - zgodne z
                    wymaganiami przeglądarek i Lighthouse.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/darmowy-generator-favicon-ico'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Tekst i SEO'
          description='Narzędzia do sprawdzania długości tekstu, meta tagów i podglądu strony w wynikach wyszukiwania.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Licznik długości meta title i description',
              topImageAlt: 'Licznik długości meta title i description Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/licznik-dlugosci-meta-title-i-description-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sprawdź liczbę znaków, słów i szerokość w pikselach oraz
                    podgląd wyniku w Google. Łatwiej unikniesz uciętych tytułów
                    i opisów i szybciej dopasujesz treści pod SEO.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/licznik-dlugosci-meta-title-i-description'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Licznik słów i znaków',
              topImageAlt: 'Licznik słów i znaków Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/licznik-slow-i-znakow-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sprawdź długość tekstu i oceń, czy jest odpowiednia dla
                    strony głównej, opisu usługi, artykułu blogowego czy opisu
                    produktu. Narzędzie policzy słowa, znaki, akapity i czas
                    czytania.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/licznik-slow-i-znakow'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },

            {
              title: 'Generator Lorem Ipsum',
              topImageAlt: 'Generator Lorem Ipsum Arteon',
              topImageSrc:
                '/assets/tools/lorem-ipsum-generator/generator-lorem-ipsum-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Wygeneruj tekst zastępczy w 8 stylach i 9 trybach. Lorem
                    Ipsum, Hipster, Business, Bacon i więcej. Kopiuj jako tekst
                    lub HTML.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/generator-lorem-ipsum'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='E-mail i komunikacja'
          description='Narzędzia, które pomagają uporządkować komunikację mailową i wizerunek marki.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Darmowy generator stopki mailowej HTML',
              topImageAlt: 'Darmowy generator stopki mailowej HTML Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/darmowy-generator-stopki-mailowej-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz
                    dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila,
                    Outlooka i innych klientów pocztowych.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/darmowy-generator-stopki-mailowej'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Kody QR'
          description='Generator kodów QR do stron, wizytówek, menu i materiałów drukowanych.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Darmowy generator kodów QR',
              topImageAlt: 'Darmowy generator kodów QR Arteon',
              topImageSrc:
                '/assets/tools/qr-code-generator/darmowy-generator-kodow-qr-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Stwórz kod QR do strony, wizytówki vCard, menu restauracji
                    lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/darmowy-generator-kodow-qr'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Kolory i dostępność'
          description='Narzędzia do pracy z kolorami, kontrastem i dostępnością WCAG.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Kontrast i czytelność kolorów',
              topImageAlt: 'Kontrast i czytelność kolorów Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/kontrast-i-czytelnosc-kolorow-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody
                    kolorów, zobacz współczynnik kontrastu według{' '}
                    <strong>WCAG</strong> i użyj funkcji{' '}
                    <strong>Dopasuj</strong> do automatycznej korekty.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/kontrast-i-czytelnosc-kolorow'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Ekstraktor kolorów z obrazu',
              topImageAlt: 'Ekstraktor kolorów z obrazu Arteon',
              topImageSrc:
                '/assets/tools/image-color-extractor/ekstraktor-kolorow-z-obrazu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Wgraj zdjęcie lub logo, a narzędzie wyciągnie dominujące
                    kolory. Skopiuj kody HEX jednym kliknięciem i użyj w
                    dowolnym miejscu.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/ekstraktor-kolorow-z-obrazu'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Generator palet kolorów',
              topImageAlt: 'Generator palet kolorów Arteon',
              topImageSrc:
                '/assets/tools/color-palette-generator/generator-palet-kolorow-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Wybierz jeden kolor bazowy i wygeneruj 9 palet kolorów:
                    monochromatyczną, komplementarną, triadyczną, pastelową,
                    ciemną i inne. Kopiuj kody HEX jednym kliknięciem.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/generator-palet-kolorow'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Konwertery formatów obrazów'
          description='Konwertery obrazów  - zamień format zdjęć między JPG, PNG, WebP, SVG, BMP, GIF, AVIF, HEIC i TIFF. Konwersja w przeglądarce, bez wysyłania plików na serwer.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'Konwerter JPG na WebP',
              topImageAlt: 'Konwerter JPG na WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zmniejsz wagę zdjęć nawet o 35%, konwertując je z JPG do{' '}
                    <strong>WebP</strong>. Format WebP przyspiesza ładowanie
                    strony i poprawia Core Web Vitals.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-jpg-na-webp'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Konwerter PNG na JPG',
              topImageAlt: 'Konwerter PNG na JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień pliki PNG na lekki JPG. Zmniejsz rozmiar grafik i
                    zdjęć do formatu akceptowanego przez każdą platformę.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-png-na-jpg'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Konwerter WebP na JPG',
              topImageAlt: 'Konwerter WebP na JPG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień pliki WebP na JPG - format kompatybilny z każdym
                    programem, platformą sprzedażową i klientem e-mail.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-webp-na-jpg'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Konwerter PNG na WebP',
              topImageAlt: 'Konwerter PNG na WebP Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień grafiki PNG na WebP. Mniejsze pliki przy zachowaniu
                    przezroczystości - idealne do stron WWW.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-png-na-webp'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Konwerter JPG na PNG',
              topImageAlt: 'Konwerter JPG na PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień pliki JPG na bezstratny PNG. Zachowaj pełną jakość
                    obrazu przy konwersji formatu.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-jpg-na-png'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'Konwerter WebP na PNG',
              topImageAlt: 'Konwerter WebP na PNG Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień pliki WebP na bezstratny PNG. Konwersja lokalna w
                    przeglądarce, bez wysyłania na serwer.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-webp-na-png'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Konwertery danych'
          description='Konwertery formatów danych  — zamień między CSV, JSON, XML, YAML, Markdown i HTML. Konwersja w przeglądarce, bez wysyłania danych.'
          grid='three'
          cardVariant='dark'
          items={[
            {
              title: 'CSV na JSON',
              topImageAlt: 'CSV na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień plik CSV na poprawny JSON. Automatyczne wykrywanie
                    separatorów i formatowanie wyniku.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-csv-na-json'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'JSON na CSV',
              topImageAlt: 'JSON na CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień dane JSON na plik CSV. Konwersja w przeglądarce, bez
                    wysyłania danych na serwer.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-json-na-csv'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'XML na JSON',
              topImageAlt: 'XML na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień dane XML na JSON. Konwersja w przeglądarce z
                    walidacją struktury.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-xml-na-json'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'JSON na XML',
              topImageAlt: 'JSON na XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień dane JSON na poprawny XML. Konwersja w przeglądarce z
                    formatowaniem wyniku.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-json-na-xml'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'YAML na JSON',
              topImageAlt: 'YAML na JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień konfigurację YAML na JSON. Walidacja i formatowanie
                    wyniku w przeglądarce.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-yaml-na-json'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
            {
              title: 'JSON na YAML',
              topImageAlt: 'JSON na YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Zamień dane JSON na czytelny YAML. Konwersja w przeglądarce
                    z formatowaniem.
                  </p>
                  <ToolCardFooter
                    href='/narzedzia/konwerter-json-na-yaml'
                    label='Otwórz narzędzie'
                  />
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo title='Czym są narzędzia Arteon?'>
          <p className='mb-4'>
            Zestaw darmowych narzędzi do przygotowania materiałów na stronę
            internetową, do mediów społecznościowych i do druku. Konwertery
            formatów obrazów (JPG, PNG, WebP, SVG, BMP, GIF, AVIF, HEIC, TIFF),
            edytor zdjęć, generator favicon, licznik tekstu, ekstraktor kolorów,
            generator palet i kody QR.
          </p>
          <p className='mb-4'>
            Wszystkie narzędzia działają w przeglądarce - pliki nie są wysyłane
            na serwer. Korzystasz bez rejestracji i bez limitu.
          </p>
          <p>
            Jeśli potrzebujesz pomocy z projektem strony lub identyfikacji
            wizualnej, <InlineLink href='/kontakt'>Skontaktuj się</InlineLink>.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Dlaczego warto korzystać z narzędzi Arteon?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className={normalIconSizeClasses} />,
              title: 'Pełna prywatność',
              description:
                'Wszystkie narzędzia przetwarzają pliki lokalnie w przeglądarce. Nic nie jest wysyłane na serwer - dane znikają po zamknięciu karty.',
            },
            {
              icon: <RiInfinityFill className={normalIconSizeClasses} />,
              title: 'Bez limitu użycia',
              description:
                'Korzystasz bez ograniczeń - bez dziennych limitów, bez limitu plików, bez limitu konwersji. Tyle razy, ile potrzebujesz.',
            },
            {
              icon: <RiLockLine className={normalIconSizeClasses} />,
              title: 'Bez rejestracji',
              description:
                'Nie musisz zakładać konta ani się logować. Otwierasz narzędzie, korzystasz i gotowe.',
            },
            {
              icon: <RiGlobalLine className={normalIconSizeClasses} />,
              title: 'Po polsku',
              description:
                'Wszystkie narzędzia są w języku polskim - interfejs, instrukcje i komunikaty. Bez szukania tłumaczeń.',
            },
          ]}
        />

        <Divider line />

        <SectionFaqPanels
          items={faqItems}
          title='Najczęściej zadawane pytania dotyczące naszych narzędzi'
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Potrzebujesz pomocy z projektem?'
        description='Jeśli szukasz wsparcia przy stronie, sklepie lub identyfikacji wizualnej - Skontaktuj się. Pomożemy dobrać rozwiązanie dopasowane do potrzeb.'
        btnOne='Skontaktuj się'
        btnOneHref='/kontakt'
        btnTwo='Zobacz usługi'
        btnTwoHref='/uslugi'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Script
        id='ld-json-tools'
        type='application/ld+json'
        strategy='afterInteractive'
      >
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
