import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { RiImageEditLine, RiCropLine, RiAppsLine, RiFileTextLine, RiMailLine, RiContrast2Line, RiPaletteLine } from 'react-icons/ri';

export const metadata = {
  title: 'Darmowe narzędzia online dla stron i firm online',
  description: 'Darmowe narzędzia online dla stron i firm. Zoptymalizuj zdjęcia, popraw SEO i ulepszą swoją identyfikację. Wszystko bez reklam, logowania i opłat',
  alternates: { canonical: '/narzedzia' },
  openGraph: {
    title: 'Darmowe narzędzia online dla stron i firm online',
    description: 'Darmowe narzędzia online dla stron i firm. Zoptymalizuj zdjęcia, popraw SEO i ulepszą swoją identyfikację. Wszystko bez reklam, logowania i opłat',
    url: 'https://www.arteonagency.pl/narzedzia',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

const toolsJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Darmowe narzędzia online dla stron i firm online',
  description:
    'Zestaw darmowych narzędzi online od Arteon: konwerter JPG/PNG na WebP, zmiana rozmiaru zdjęć, generator favicon, licznik długości meta title i description, tester kontrastu kolorów WCAG oraz generator palet kolorów z jednego koloru bazowego.',
  itemListElement: [
    {
      '@type': 'WebApplication',
      position: 1,
      name: 'Darmowy konwerter JPG/PNG na WebP online bez limitu',
      description: 'Konwerter JPG/PNG na WebP, który zmniejsza wagę zdjęć bez utraty jakości. Działa w całości w przeglądarce - bez wysyłania plików na serwer, bez logowania i bez limitu użycia.',
      url: 'https://www.arteonagency.pl/narzedzia/jpg-png-na-webp-bez-limitu',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 2,
      name: 'Kadrowanie i zmiana rozmiaru zdjęcia w kilka sekund',
      description:
        'Narzędzie do szybkiego kadrowania i zmiany rozmiaru zdjęć pod social media i strony WWW. Gotowe presety wymiarów, własne wymiary w pikselach oraz możliwość tworzenia okrągłych avatarów.',
      url: 'https://www.arteonagency.pl/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 3,
      name: 'Darmowy generator favicon online',
      description: 'Generator favicon online, który z jednego obrazu tworzy favicon.ico oraz ikony PNG 180x180, 192x192 i 512x512 - zgodne z wymaganiami przeglądarek i Lighthouse.',
      url: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-favicon-ico',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 4,
      name: 'Licznik długości meta title i meta description',
      description:
        'Licznik długości meta title i meta description z podglądem wyglądu w Google. Pomaga dopasować liczbę znaków, słów i szerokość w pikselach tak, aby tytuł i opis nie były ucinane w wynikach wyszukiwania.',
      url: 'https://www.arteonagency.pl/narzedzia/licznik-dlugosci-meta-title-i-description',
      applicationCategory: 'SEOApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 5,
      name: 'Darmowy generator stopki mailowej HTML',
      description:
        'Darmowy generator stopki mailowej HTML po polsku. Dodaj dane kontaktowe, link CTA i profile social mediów, a następnie skopiuj gotowy kod podpisu do Gmaila, Outlooka i innych klientów pocztowych.',
      url: 'https://www.arteonagency.pl/narzedzia/darmowy-generator-stopki-mailowej',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 6,
      name: 'Tester kontrastu kolorów WCAG 2.1 AA i AAA',
      description:
        'Tester kontrastu kolorów online zgodny z WCAG 2.1. Oblicza współczynnik kontrastu między dwoma kolorami i pokazuje, czy para spełnia wymagania poziomów AA i AAA dla zwykłego i dużego tekstu oraz elementów UI.',
      url: 'https://www.arteonagency.pl/narzedzia/tester-kontrastu-kolorow-wcag',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
    {
      '@type': 'WebApplication',
      position: 7,
      name: 'Generator palet kolorów online z jednego koloru',
      description:
        'Generator palet kolorów online, który z jednego koloru bazowego buduje klasyczne schematy (monochromatyczne, triadyczne, analogiczne, komplementarne) oraz nowoczesne palety pastelowe, ciemne, tonalne i minimalistyczne inspirowane Material Design i Apple.',
      url: 'https://www.arteonagency.pl/narzedzia/generator-palet-kolorow-online',
      applicationCategory: 'UtilityApplication',
      operatingSystem: 'Any',
    },
  ],
};

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Darmowe narzędzia dla stron i marek online"
        description="W jednym miejscu znajdziesz praktyczne, w pełni darmowe narzędzia do pracy nad stroną: od obrazów, przez favicon i meta tagi, po kontrast i palety kolorów. Bez logowania, bez abonamentu, bez limitów."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Obrazy i favicony"
          description="Narzędzia do przygotowania zdjęć, grafik i ikon pod strony WWW oraz social media."
          grid="two"
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
              title: 'Zmiana rozmiaru i kadrowanie zdjęcia',
              topImageAlt: 'Zmiana rozmiaru i kadrowanie zdjęcia Arteon',
              topImageSrc: '/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Przygotuj idealny kadr ze zdjęcia pod social media lub stronę WWW. Wybierz gotowy format albo wpisz własne wymiary w pikselach i pobierz gotowe zdjęcie w PNG, JPG lub WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia">
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
          title="Meta i SEO"
          description="Narzędzia, które pomagają lepiej dopasować meta tagi i wygląd strony w wynikach wyszukiwania."
          grid="two"
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
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="E-mail i komunikacja"
          description="Narzędzia, które pomagają uporządkować komunikację mailową i wizerunek marki."
          grid="two"
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
          title="Kolory i dostępność"
          description="Narzędzia do pracy z kolorami, kontrastem i dostępnością WCAG."
          grid="two"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Tester kontrastu kolorów WCAG',
              topImageAlt: 'Tester kontrastu kolorów WCAG Arteon',
              topImageSrc: '/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Sprawdź, czy kolory na Twojej stronie spełniają wymagania <strong>WCAG 2.1</strong>. Wpisz kolory tekstu i tła, zobacz współczynnik kontrastu i od razu sprawdź poziomy{' '}
                    <strong>AA</strong> i <strong>AAA</strong> dla tekstu, nagłówków oraz ikon i elementów UI.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/tester-kontrastu-kolorow-wcag">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Generator palet kolorów z jednego koloru',
              topImageAlt: 'Generator palet kolorów z jednego koloru Arteon',
              topImageSrc: '/assets/tools/narzedzia-generator-palet-kolorow-online.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Wybierz jeden kolor bazowy i wygeneruj klasyczne i nowoczesne palety: monochromatyczne, triadyczne, pastelowe, ciemne, tonalne czy minimalistyczne inspirowane Apple i Material
                    Design. Sprawdź, jakie kolory będą idealne dla Twojej marki.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/generator-palet-kolorow-online">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo
          title="Jak korzystać z narzędzi Arteon?"
          description="Narzędzia są tworzone z myślą o właścicielach firm i osobach, które samodzielnie rozwijają swoje platformy i wizerunek w sieci."
        >
          <p className="mt-4 text-xs text-[#5e5e5e]">
            Korzystasz bez logowania, bez zakładania konta i bez abonamentu. Wybierasz narzędzie, dodajesz dane lub pliki i od razu pobierasz gotowy efekt. Z czasem ta sekcja będzie rozbudowywana o
            kolejne moduły: obrazy, SEO, analitykę, wyceny i inne narzędzia ułatwiające pracę nad stroną i marką online.
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsJsonLd) }} />
    </>
  );
}
