import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { RiImageAiLine, RiImageEditLine } from 'react-icons/ri';

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

// Schema.org – lista narzędzi (ItemList)
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
      description: 'Konwerter JPG/PNG na WebP, który zmniejsza wagę zdjęć bez utraty jakości. Działa w całości w przeglądarce – bez wysyłania plików na serwer, bez logowania i bez limitu użycia.',
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
      description: 'Generator favicon online, który z jednego obrazu tworzy favicon.ico oraz ikony PNG 180x180, 192x192 i 512x512 – zgodne z wymaganiami przeglądarek i Lighthouse.',
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
              title: 'Konwerter JPG/PNG na WebP (bez limitu)',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Szybko zmniejsz wagę zdjęć, konwertując je z JPG lub PNG do formatu <strong>WebP</strong>. Narzędzie działa w całości w Twojej przeglądarce, więc pliki nigdzie nie są wysyłane.
                    Idealne i szybkie narzędzie dla poprawienia prędkości w Twojej witrynie internetowej.
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
              icon: <RiImageAiLine className="h-8 w-8" />,
              title: 'Zmiana rozmiaru i kadrowanie zdjęcia',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Przygotuj idealny kadr pod social media lub stronę WWW. Wybierz jeden z gotowych formatów (np. post lub relacja na Instagramie) albo wpisz własne wymiary w pikselach. Możesz też
                    zrobić <strong>okrągły avatar</strong> i eksportować obraz do PNG, JPG lub WebP - bez limitu użycia.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/narzedzia/zmiana-rozmiaru-i-kadrowanie-zdjecia">
                      Otwórz narzędzie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiImageAiLine className="h-8 w-8" />,
              title: 'Generator favicon i ikon dla strony',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Z jednego obrazu przygotujesz kompletny zestaw ikon dla swojej strony: <strong>favicon.ico</strong> oraz pliki PNG 180x180, 192x192 i 512x512. Taki pakiet wystarcza dla kart
                    przeglądarki, ekranów domowych i podstawowych wymagań Lighthouse oraz PWA w Chrome.
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
              icon: <RiImageAiLine className="h-8 w-8" />,
              title: 'Licznik długości meta title i description',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Wpisz swój <strong>meta title</strong> i <strong>meta description</strong>, a narzędzie pokaże liczbę znaków, słów, szerokość w pikselach oraz podgląd, jak treść będzie wyglądać w
                    Google. Dzięki temu łatwiej unikniesz uciętych tytułów i opisów i szybciej przygotujesz wersję gotową do wklejenia na stronę zgodną z dobrymi praktykami SEO
                  </p>
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

        <Gap variant="line" />

        <SectionInfo
          title="Jak korzystać z narzędzi Arteon?"
          description="Narzędzia są tworzone z myślą o właścicielach firm i osobach, które samodzielnie rozwijają swoje platformy i wizerunek w sieci"
        >
          <p className="text-xs text-[#5e5e5e]">
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
