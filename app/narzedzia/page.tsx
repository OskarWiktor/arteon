import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { RiImageEditLine, RiCropLine, RiAppsLine, RiFileTextLine, RiMailLine } from 'react-icons/ri';

export const metadata = {
  title: 'Darmowe narzędzia online dla właścicieli stron i firm',
  description:
    'Darmowe narzędzia online dla właścicieli stron i marek. Konwertery obrazów, favicon, licznik meta tagów i inne dodatki, które pomagają przyspieszyć witrynę, poprawić SEO i lepiej planować działania marketingowe.',
  keywords: [
    'narzędzia dla stron internetowych',
    'narzędzia SEO online',
    'narzędzia do marketingu internetowego',
    'konwerter obrazów WebP',
    'generator favicon',
    'licznik meta title',
    'optymalizacja strony internetowej',
    'Arteon narzędzia',
  ],
  alternates: { canonical: '/narzedzia' },
  openGraph: {
    title: 'Darmowe narzędzia online dla właścicieli stron i firm',
    description:
      'Darmowe narzędzia online dla właścicieli stron i marek. Konwertery obrazów, favicon, licznik meta tagów i inne dodatki, które pomagają przyspieszyć witrynę, poprawić SEO i lepiej planować działania marketingowe.',
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
  name: 'Darmowe narzędzia online dla właścicieli stron i firm',
  description: 'Zestaw darmowych narzędzi online od Arteon: konwerter JPG/PNG na WebP, zmiana rozmiaru zdjęć, generator favicon oraz licznik długości meta title i description.',
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
  ],
};

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Darmowe narzędzia dla właścicieli stron i marek online"
        description="W jednym miejscu znajdziesz praktyczne, w pełni darmowe narzędzia do pracy nad stroną: od obrazów, przez favicon, po SEO. Bez logowania, bez abonamentu, bez limitów."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Dostępne narzędzia"
          description="Gotowe do użycia od razu, bez logowania"
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'Konwerter JPG/PNG na WebP',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Zmniejsz wagę zdjęć, konwertując je z JPG lub PNG do formatu <strong>WebP</strong>. Pobierz pliki, dodaj na stronę i zoptymalizuj jej prędkość
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
              description: (
                <div className="flex h-full flex-col">
                  <p>Przygotuj idealny kadr ze zdjęcia pod social media lub stronę WWW. Wybierz gotowy format albo wpisz własne wymiary w pikselach i pobierz gotowe zdjęcie w PNG, JPG lub WebP</p>
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
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Z jednego obrazu wygenerujesz <strong>favicon.ico</strong> oraz ikony PNG 180x180, 192x192 i 512x512 - zgodne z wymaganiami przeglądarek i Lighthouse
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/darmowy-generator-favicon-ico">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Licznik długości meta title i description',
              description: (
                <div className="flex h-full flex-col">
                  <p>Sprawdź liczbę znaków, słów i szerokość w pikselach oraz podgląd wyniku w Google. Łatwiej unikniesz uciętych tytułów i opisów i szybciej dopasujesz treści pod SEO</p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/licznik-dlugosci-meta-title-i-description">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Darmowy generator stopki mailowej HTML',
              description: (
                <div className="flex h-full flex-col">
                  <p>Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila, Outlooka i innych klientów pocztowych</p>
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

        <Gap variant="line" />

        <SectionInfo
          title="Jak korzystać z narzędzi Arteon?"
          description="Narzędzia są tworzone z myślą o właścicielach firm i osobach, które samodzielnie rozwijają swoje platformy i wizerunek w sieci"
        >
          <p className="mt-4 text-xs text-[#5e5e5e]">
            Korzystasz bez logowania, bez zakładania konta i bez abonamentu. Wybierasz narzędzie, dodajesz dane lub pliki i od razu pobierasz gotowy efekt. Z czasem ta sekcja będzie rozbudowywana o
            kolejne moduły: obrazy, SEO, analitykę, wyceny i inne narzędzia ułatwiające pracę nad stroną i marką online
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(toolsJsonLd) }} />
    </>
  );
}
