import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
  description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
  alternates: { canonical: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu' },
  openGraph: {
    title: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
    description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
    url: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Generator palety kolorów z obrazu online',
  alternateName: 'Generator palety kolorów z obrazu - wyciągnij dominujące kolory ze zdjęcia',
  url: 'https://www.arteonagency.pl/narzedzia/generator-palety-kolorow-z-obrazu',
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Wgraj dowolne zdjęcie, a narzędzie pokaże użyte na nim kolory i kody kolorów do skopiowania. Bez logowania, bez limitu, bez abonamentu.',
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
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-palette-extractor" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator palety kolorów z obrazu"
        description="Dodaj obraz, a narzędzie pokaże użyte na nim kolory i stworzy z nich paletę barw. Skopiuj kod koloru jednym kliknięciem i użyj w dowolnym miejscu."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzie' }} third={{ href: `/narzedzia/generator-palety-kolorow-z-obrazu`, label: 'Generator palety kolorów z obrazu' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Do czego służy generator palety kolorów z obrazu?">
          <p className="text-mid">
            To narzędzie analizuje wgrane zdjęcie i wyciąga z niego dominujące kolory. Dzięki temu możesz szybko stworzyć paletę barw na podstawie inspirującego zdjęcia, logo konkurencji czy zdjęcia
            produktu.
          </p>
          <p className="text-mid mt-3">
            <strong>Gdzie to się przydaje?</strong> Przy projektowaniu identyfikacji wizualnej, tworzeniu spójnych grafik, dobieraniu kolorów do strony WWW i wszędzie tam, gdzie potrzebujesz wyciągnąć
            kolory z gotowego obrazu.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <PaletteExtractor />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Wyciągnięcie kolorów ze zdjęcia to dosłownie kilka sekund:"
          grid="four"
          items={[
            {
              title: '1. Dodaj obraz',
              description: 'Przeciągnij zdjęcie na obszar uploadu lub kliknij, żeby wybrać plik z dysku.',
            },
            {
              title: '2. Poczekaj na analizę',
              description: 'Narzędzie automatycznie przeanalizuje obraz i wyciągnie z niego dominujące kolory.',
            },
            {
              title: '3. Przeglądaj paletę',
              description: 'Zobacz wyodrębnione kolory wraz z kodami HEX. Każdy kolor możesz skopiować jednym kliknięciem.',
            },
            {
              title: '4. Użyj w projekcie',
              description: 'Skopiowane kody kolorów wklej bezpośrednio do Figmy, Photoshopa, CSS lub dowolnego narzędzia graficznego.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Zastosowania palety kolorów z obrazu"
          description="Narzędzie przyda się w wielu sytuacjach:"
          grid="two"
          items={[
            {
              title: 'Inspiracja do brandingu',
              description: <p>Wgraj zdjęcie, które oddaje klimat Twojej marki — krajobraz, wnętrze, produkt. Wyciągnij z niego kolory i użyj jako bazy do identyfikacji wizualnej.</p>,
            },
            {
              title: 'Spójne grafiki social media',
              description: <p>Masz zdjęcie produktu i chcesz dobrać do niego tło lub akcenty? Wyciągnij kolory ze zdjęcia i użyj ich w grafice — całość będzie spójna.</p>,
            },
          ]}
        />

        <Gap variant="line" />

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
