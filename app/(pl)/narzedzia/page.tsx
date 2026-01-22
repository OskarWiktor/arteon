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
import { RiImageEditLine, RiCropLine, RiAppsLine, RiFileTextLine, RiArticleLine, RiMailLine, RiContrast2Line, RiPaletteLine, RiPantoneLine, RiQrCodeLine, RiShieldCheckLine, RiInfinityFill, RiGlobalLine, RiLockLine } from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';

export const metadata = {
  title: 'Darmowe narzędzia online | Obrazy, SEO, kolory, favicon',
  description:
    '10 darmowych narzędzi online: konwerter WebP, generator favicon, licznik tekstu, ekstraktor kolorów i kody QR. Do strony, mediów społecznościowych i druku. Bez rejestracji.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia') },
  openGraph: {
    title: 'Darmowe narzędzia online | Obrazy, SEO, kolory, favicon',
    description:
      '10 darmowych narzędzi online: konwerter WebP, generator favicon, licznik tekstu, ekstraktor kolorów i kody QR. Do strony, mediów społecznościowych i druku. Bez rejestracji.',
    url: toAbsoluteUrl('/narzedzia'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Darmowe narzędzia online',
  description:
    '10 darmowych narzędzi online: konwerter WebP, generator favicon, licznik tekstu, ekstraktor kolorów i kody QR. Do strony, mediów społecznościowych i druku. Bez rejestracji.',
  url: toAbsoluteUrl('/narzedzia'),
  inLanguage: 'pl-PL',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Optymalizacja obrazów' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Kolory i branding' },
    { '@type': 'Thing', name: 'Generatory online' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'Konwerter JPG i PNG na WebP online',
        description: 'Darmowy konwerter JPG i PNG na WebP online. Zmniejsz wagę zdjęć nawet o 35% bez utraty jakości. Bez rejestracji, bez wysyłania plików na serwer.',
        url: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Edytor zdjęć online',
        description: 'Kadrowanie i zmiana rozmiaru zdjęć pod media społecznościowe i strony WWW. Gotowe presety wymiarów, własne wymiary w pikselach oraz możliwość tworzenia okrągłych avatarów.',
        url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Generator favicon online',
        description: 'Darmowy generator favicon online. Z jednego obrazu tworzy favicon.ico oraz ikony PNG 16x16, 32x32, 180x180, 192x192 i 512x512 — zgodne z wymaganiami przeglądarek i Lighthouse.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Licznik długości meta title i description',
        description: 'Licznik długości meta title i meta description z podglądem wyglądu w Google. Pomaga dopasować liczbę znaków i szerokość w pikselach, aby tytuł i opis nie były ucinane.',
        url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'Generator stopki mailowej HTML',
        description: 'Darmowy generator stopki mailowej HTML. Dodaj dane kontaktowe, link CTA i profile w mediach społecznościowych, a następnie skopiuj gotowy kod podpisu do Gmaila lub Outlooka.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Sprawdź czytelność kolorów online',
        description: 'Sprawdź czy kolory tekstu i tła są czytelne. Narzędzie oblicza współczynnik kontrastu według WCAG i pomoże dobrać odpowiedni kolor za pomocą funkcji automatycznego dopasowania.',
        url: toAbsoluteUrl('/narzedzia/sprawdz-czytelnosc-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Ekstraktor kolorów z obrazu online',
        description: 'Darmowy ekstraktor kolorów z obrazu online. Wgraj zdjęcie lub logo i pobierz paletę do 12 dominujących kolorów z kodami HEX i RGB.',
        url: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Generator palet kolorów online',
        description: 'Generator palet kolorów z jednego koloru bazowego. Schematy monochromatyczne, triadyczne, analogiczne, komplementarne oraz palety pastelowe, ciemne i minimalistyczne.',
        url: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Licznik słów i znaków online',
        description: 'Darmowy licznik słów i znaków z oceną długości tekstu. Sprawdź, czy tekst ma odpowiednią długość dla strony głównej, opisu usługi, artykułu lub opisu produktu.',
        url: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'Generator kodów QR online',
        description: 'Darmowy generator kodów QR online. Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.',
        url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
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
    answer:
      'Nie. Wszystkie narzędzia działają w całości w przeglądarce. Pliki nie opuszczają komputera i nie są nigdzie przechowywane.',
  },
  {
    question: 'Czy potrzebuję konta?',
    answer: 'Nie. Korzystasz od razu, bez logowania i bez zakładania konta.',
  },
  {
    question: 'Czy jest limit użycia?',
    answer: 'Nie. Korzystasz bez ograniczeń — bez dziennych limitów, bez limitu plików, bez limitu konwersji.',
  },
  {
    question: 'Do czego służą te narzędzia?',
    answer:
      'Pomagają przygotować materiały do strony internetowej, mediów społecznościowych i druku: zoptymalizować obrazy, stworzyć favicon, sprawdzić długość tekstu, wygenerować kod QR, dobrać kolory i zweryfikować ich czytelność.',
  },
  {
    question: 'Czy narzędzia działają na telefonie?',
    answer:
      'Tak, ale niektóre (konwerter WebP, generator favicon) działają lepiej na komputerze ze względu na przetwarzanie większych plików.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Darmowe narzędzia online"
        description="Konwerter obrazów, generator favicon, licznik tekstu, narzędzia do kolorów i kody QR. Bez rejestracji, bez limitu — wszystko działa w przeglądarce."
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
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konwerter JPG/PNG na WebP',
              topImageAlt: 'Konwerter JPG/PNG na WebP Arteon',
              topImageSrc: '/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Zmniejsz wagę zdjęć, konwertując je z JPG lub PNG do formatu <strong>WebP</strong>. Pobierz pliki, dodaj na stronę i zoptymalizuj jej prędkość.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/jpg-png-na-webp-bez-limitu">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Edytor zdjęć online',
              topImageAlt: 'Edytor zdjęć online Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Przygotuj idealny kadr ze zdjęcia pod social media lub stronę WWW. Wybierz gotowy format albo wpisz własne wymiary w pikselach i pobierz gotowe zdjęcie w PNG, JPG lub WebP.</p>
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
              title: 'Generator favicon i ikon dla strony',
              topImageAlt: 'Generator favicon i ikon dla strony Arteon',
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp',
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
          title="Tekst i SEO"
          description="Narzędzia do sprawdzania długości tekstu, meta tagów i podglądu strony w wynikach wyszukiwania."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Licznik długości meta title i description',
              topImageAlt: 'Licznik długości meta title i description Arteon',
              topImageSrc: '/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp',
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
              topImageSrc: '/assets/tools/narzedzia-licznik-slow-i-znakow.webp',
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
              topImageSrc: '/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp',
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
              topImageSrc: '/assets/tools/narzedzia-generator-kodu-qr.webp',
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
              title: 'Sprawdź czytelność kolorów',
              topImageAlt: 'Sprawdź czytelność kolorów Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sprawdź czy kolory tekstu i tła są czytelne. Wpisz kody kolorów, zobacz współczynnik kontrastu według <strong>WCAG</strong> i użyj funkcji{' '}
                    <strong>Dopasuj</strong> do automatycznej korekty.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/sprawdz-czytelnosc-kolorow">
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
              topImageSrc: '/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
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
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Wybierz jeden kolor bazowy i wygeneruj 9 palet kolorów: monochromatyczną, komplementarną, triadyczną, pastelową, ciemną i inne. Kopiuj kody HEX jednym kliknięciem.
                  </p>
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
            Zestaw 10 darmowych narzędzi online do przygotowania materiałów na stronę internetową, do mediów społecznościowych i do druku. Konwerter obrazów na WebP, generator favicon, licznik długości
            tekstu, ekstraktor kolorów, generator palet i kody QR.
          </p>
          <p className="mb-4">
            Wszystkie narzędzia działają w przeglądarce — pliki nie są wysyłane na serwer. Korzystasz bez rejestracji i bez limitu.
          </p>
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
              description: 'Wszystkie narzędzia przetwarzają pliki lokalnie w przeglądarce. Nic nie jest wysyłane na serwer — dane znikają po zamknięciu karty.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Bez limitu użycia',
              description: 'Korzystasz bez ograniczeń — bez dziennych limitów, bez limitu plików, bez limitu konwersji. Tyle razy, ile potrzebujesz.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Bez rejestracji',
              description: 'Nie musisz zakładać konta ani się logować. Otwierasz narzędzie, korzystasz i gotowe.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Po polsku',
              description: 'Wszystkie narzędzia są w języku polskim — interfejs, instrukcje i komunikaty. Bez szukania tłumaczeń.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy z projektem?"
        description="Jeśli szukasz kompleksowego wsparcia przy stronie, sklepie lub identyfikacji wizualnej — skontaktuj się z nami. Pomożemy dobrać rozwiązanie dopasowane do potrzeb."
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
