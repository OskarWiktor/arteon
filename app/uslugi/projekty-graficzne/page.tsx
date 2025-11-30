import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoAccessibilityOutline, IoColorPalette } from 'react-icons/io5';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import {
  RiPencilRuler2Line,
  RiBrushLine,
  RiBarChart2Fill,
  RiLightbulbFlashLine,
  RiImageLine,
  RiIdCardLine,
  RiFileList2Line,
  RiFolderOpenLine,
  RiFileTextLine,
  RiTShirt2Line,
  RiQuillPenLine,
  RiBookletLine,
  RiPantoneLine,
  RiLayoutLine,
  RiKey2Line,
  RiLifebuoyLine,
  RiMoneyDollarCircleLine,
  RiCoupon2Line,
  RiPriceTag3Line,
  RiRestaurant2Line,
} from 'react-icons/ri';

import Script from 'next/script';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

const SERVICES = [
  { name: 'Projekt wizytówki', path: '/uslugi/projekty-graficzne/projekt-wizytowki' },
  { name: 'Projekt ulotki', path: '/uslugi/projekty-graficzne/projekt-ulotki' },
  { name: 'Teczka ofertowa', path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej' },
  { name: 'Papier firmowy', path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego' },
  { name: 'Odzież firmowa', path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej' },
  { name: 'Projekt logo', path: '/uslugi/projekty-graficzne/projekt-logo' },
  { name: 'Projekt katalogu', path: '/uslugi/projekty-graficzne/projekt-katalogu' },
  { name: 'Identyfikacja wizualna', path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  { name: 'Projekt graficzny strony', path: '/uslugi/projekty-graficzne/projekt-graficzny-strony' },
  { name: 'Szablony postów na social media', path: '/uslugi/projekty-graficzne/szablony-postow-social-media' },
  { name: 'Kupony rabatowe i vouchery', path: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera' },
  { name: 'Projekt cennika', path: '/uslugi/projekty-graficzne/projekt-cennika' },
  { name: 'Karty lojalnościowe', path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  { name: 'Projekt menu restauracji', path: '/uslugi/projekty-graficzne/projekt-menu-restauracji' },
];

function ItemListSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${base}/#projekty-graficzne-itemlist`,
    name: 'Projekty graficzne - oferta usług',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: SERVICES.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}${s.path}`,
      name: s.name,
    })),
  };

  return (
    <Script id="schema-itemlist-projekty-graficzne" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export const metadata = {
  title: 'Projekty graficzne dla firm: logo, identyfikacja, wizytówki, ulotki, katalogi | Arteon',
  description: 'Kompleksowe projekty graficzne: od logo i identyfikacji po katalogi i layouty stron. Pliki do druku i online, spójność i prestiż.',
  alternates: { canonical: '/uslugi/projekty-graficzne' },
  openGraph: {
    title: 'Projekty graficzne dla firm: logo, identyfikacja, wizytówki, ulotki, katalogi | Arteon',
    description: 'Kompleksowe projekty graficzne: od logo i identyfikacji po katalogi i layouty stron. Pliki do druku i online, spójność i prestiż.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne',
    type: 'website',
  },
} as const;

export default function OfferDesignPage() {
  return (
    <>
      <HeroBanner
        title="Projekty graficzne"
        description={
          <>
            Zbuduj spójny i profesjonalny wizerunek swojej marki. Projektujemy materiały firmowe - od logo i wizytówek po strony i odzież - dopasowane do Twojej branży, kolorystyki i stylu
            komunikacji.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójność marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
        ]}
      />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz dzięki projektom graficznym?">
          <p>
            <strong>Spójna identyfikacja wizualna zwiększa rozpoznawalność marki nawet o 80%</strong>{' '}
            <a href="https://www.lucidpress.com/blog/state-of-brand-consistency" target="_blank" rel="noopener noreferrer" className="inline-link">
              (Lucidpress - raport o spójności marek)
            </a>
            . Profesjonalny projekt graficzny sprawia, że Twoja firma jest łatwiejsza do zapamiętania i budzi większe zaufanie już przy pierwszym kontakcie.
          </p>

          <br />

          <p>
            <strong>Spójny wygląd marki ułatwia sprzedaż.</strong> Firmy utrzymujące jednolity brand notują średnio
            <strong> 10-20% wyższe przychody</strong>{' '}
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-link">
              (Marq - analiza przewagi konkurencyjnej)
            </a>
            . To logo, papier firmowy, katalog i teczka, które mówią jednym językiem - online, w druku i podczas spotkań z klientami.
          </p>

          <br />

          <p>
            <strong>Design buduje wiarygodność.</strong> Aż <strong>~75%</strong> osób ocenia firmę po jakości materiałów wizualnych i strony internetowej. Schludny, spójny projekt podnosi zaufanie i
            wpływa na decyzję o kontakcie{' '}
            <a href="https:/credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link">
              (Stanford - badanie wiarygodności stron)
            </a>{' '}
            <a href="https:/rareformnewmedia.com/credibility-in-web-design/" target="_blank" rel="noopener noreferrer" className="inline-link">
              (Rareform - opracowanie branżowe)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Materiały drukowane nadal działają.</strong> 79% konsumentów deklaruje, że chętniej sięga po ofertę firm, które dostarczają estetyczne broszury, ulotki lub wizytówki{' '}
            <a href="https://www.printpower.eu/insight/consumers-trust-printed-advertising/" target="_blank" rel="noopener noreferrer" className="inline-link">
              (PrintPower - raport o zaufaniu do druku)
            </a>
            . Dobrze zaprojektowane materiały drukowane są uzupełnieniem działań online i realnie zwiększają sprzedaż w sprzedaży.
          </p>

          <br />

          <p>
            <strong>Dobre projekty graficzne robią trzy rzeczy naraz:</strong>
          </p>

          <ul className="ml-5 list-disc">
            <li>Przyciągają uwagę i budują pierwsze wrażenie,</li>
            <li>Porządkują przekaz i ułatwiają zrozumienie oferty,</li>
            <li>Wzmacniają decyzję o kontakcie lub zakupie.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz realizując projekt graficzny z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Pełną własność plików i praw',
              description: <>Po zakończeniu projektu przekazujemy komplet plików źródłowych i użytkowych wraz z licencjami. Masz pełną kontrolę nad materiałami firmowymi - dziś i w przyszłości.</>,
              icon: <RiKey2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki gotowe do druku i wdrożenia online',
              description: <>Dostarczamy pakiet do druku a także warianty do sieci - wszystko zoptymalizowane i gotowe do użycia.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Konsekwentną identyfikację wizualną',
              description: <>Ustalamy system kolorów i typografii oraz reguły stosowania. Dzięki temu wszystkie materiały firmowe mówią jednym językiem i wzmacniają markę przy każdym kontakcie.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Skład DTP z dbałością o detale',
              description: <>Kontrolujemy hierarchię, kerning i siatki. Przy katalogach i ulotkach pilnujemy czytelności, marginesów bezpieczeństwa oraz logiki łamania treści.</>,
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dobór i obróbkę zdjęć',
              description: <>Pomagamy w wyborze zdjęć oraz dostosowujemy kadry, tła i kolory. Pliki przygotowujemy w zgodnych profilach barwnych do druku i na stronę internetową.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dostępność i czytelność',
              description: <>Projektujemy tak, aby materiały były zrozumiałe i czytelne. Kontrast, wielkości fontów i hierarchia informacji wspierają odbiorcę w szybkim podjęciu decyzji.</>,
              icon: <IoAccessibilityOutline className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gwarancję i wsparcie po wdrożeniu',
              description: <>Po finalizacji masz nasze wsparcie przez 2 miesiące. Ewentualne poprawki techniczne wykonujemy w ramach gwarancji, a na życzenie wprowadzamy płatne zmiany.</>,
              icon: <RiLifebuoyLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: <>Otrzymujesz ofertę z zakresem i terminami. Informujemy na bieżąco o ewentualnych kosztach dodatkowych, zanim podejmiemy kolejne kroki.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionSteps
          title="Projekty graficzne dla firm"
          subtitle="Kompleksowa oferta projektowa"
          description="Poznaj pełną ofertę projektów graficznych - od wizytówek i ulotek po identyfikację wizualną oraz układy stron internetowych. Każda usługa ma własną stronę, na której zobaczysz szczegóły, przykłady realizacji i cennik."
          grid="two"
          items={[
            {
              icon: <RiIdCardLine className="h-8 w-8" />,
              title: 'Projekt wizytówki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wizytówka wyjaśnia czym się zajmujesz w kilka sekund. Tworzymy projekty wizytówek, które łączą czytelność, elegancję i profesjonalny układ. Otrzymujesz gotowe pliki źródłowe oraz
                    do druku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-wizytowki">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Projekt ulotki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Ulotka to najprostszy sposób, by dotrzeć lokalnie do nowych klientów. Zaprojektujemy ją tak, by jasno przedstawiała ofertę, przyciągała wzrok i kierowała prosto do zakupu lub
                    kontaktu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-ulotki">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFolderOpenLine className="h-8 w-8" />,
              title: 'Teczka ofertowa',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Teczka ofertowa podnosi prestiż firmy i buduje zaufanie. Projekt teczki dopasowujemy do Twojej identyfikacji wizualnej, tworząc spójny i elegancki materiał firmowy.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-teczki-ofertowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Papier firmowy',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Papier firmowy wzmacnia profesjonalny wizerunek w każdej korespondencji. Przygotowujemy szablony Word i PDF i wersję gotową do druku.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-papieru-firmowego">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiTShirt2Line className="h-8 w-8" />,
              title: 'Odzież firmowa',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Odzież z logo zwiększa rozpoznawalność marki. Projektujemy nadruki i hafty dla zespołów, eventów i punktów sprzedaży - w wersjach pod sitodruk, DTF lub haft komputerowy.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-odziezy-firmowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiQuillPenLine className="h-8 w-8" />,
              title: 'Projekt logo',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Logo to fundament identyfikacji wizualnej. Tworzymy znak, który oddaje charakter marki i pozostaje czytelny w każdym formacie. Otrzymujesz wersje wektorowe, kolorystyczne i
                    mini-księgę znaku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-logo">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiBookletLine className="h-8 w-8" />,
              title: 'Projekt katalogu',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Katalog firmowy to wizualna prezentacja Twojej oferty. Zadbamy o skład, zdjęcia i typografię, dzięki czemu każdy produkt będzie przedstawiony czytelnie i estetycznie - w wersji
                    drukowanej lub online.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-katalogu">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Identyfikacja wizualna',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Kompletny system wizualny marki: logo, kolory, typografia i materiały firmowe. Projektujemy identyfikację, która buduje zaufanie i spójność w każdym punkcie styku z klientem.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Projekt graficzny strony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Makiety i layouty stron internetowych tworzone z myślą o konwersji i doświadczeniu użytkownika. Łączymy estetykę, UX i SEO, aby Twoja witryna wyróżniała się w sieci.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-graficzny-strony">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Szablony postów na social media',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Łatwe w edycji gotowe szablony dla Instagrama, Facebooka czy LinkedIn, ułatwiające regularne publikację, tworząc spójny styl Twojej marki. Otrzymujesz pliki gotowe do edycji i
                    eksportu z czytelną hieratchią treści i miejscem na wezwanie do działania.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/szablony-postow-social-media">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCoupon2Line className="h-8 w-8" />,
              title: 'Kupony rabatowe i vouchery',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Kupony rabatowe i vouchery, które zachęcają Twoich klientów do powrotu i wspierają sprzedaż. Dostarczamy gotowe pliki do druku, spójne z wizerunkiem Twojej marki.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPriceTag3Line className="h-8 w-8" />,
              title: 'Projekt cennika',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Profesjonalne cenniki, które porządkują Twoją ofertę i budują profesjonalny wizerunek. Dostarczamy pliki gotowe do druku oraz dodania na stronę czy media społecznościowe.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-cennika">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCoupon2Line className="h-8 w-8" />,
              title: 'Karty lojalnościowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Tworzymy projekty kart lojalnościowych, które zachęcają do regularnych powrotów Twoich klientów. Projektujemy czytelne układy z miejscem na pieczątki. Otrzymujesz gotowe pliki do
                    druku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiRestaurant2Line className="h-8 w-8" />,
              title: 'Projekt menu restauracji',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Menu dla restauracji, baru czy kawiarni. Tworzymy czytelne układy, ze spójną typografią zgodnie z wizerunkiem Twojej firmy. Otrzymujesz pliki do druku oraz wersję online.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-menu-restauracji">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy wizerunek Twojej firmy" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę projektu graficznego" defaultSubject="Projekty graficzne" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne"
          title="Najczęstsze pytania o projekty graficzne"
          items={[
            {
              question: 'Ile kosztuje projekt graficzny dla firmy?',
              answer:
                'Ceny projektów graficznych zaczynają się od około 180 zł za prosty projekt (np. wizytówkę lub ulotkę). Logo i identyfikacja wizualna kosztują zwykle od 800 zł wzwyż, w zależności od zakresu i ilości materiałów. Każdy projekt wyceniamy indywidualnie po analizie potrzeb.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu graficznego?',
              answer:
                'Czas realizacji zależy od rodzaju projektu. Wizytówki i ulotki wykonujemy w 3-5 dni roboczych, logo i identyfikację wizualną w około 10-15 dni. Przy większych materiałach (np. katalogach) czas ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach otrzymam gotowe pliki graficzne?',
              answer:
                'Dostarczamy komplet plików do druku i internetu: PDF (CMYK), PNG, JPG, SVG oraz pliki źródłowe (AI, PSD lub Figma). Na życzenie przygotowujemy także wersje Pantone lub PDF/X-1a zgodne z drukarniami.',
            },
            {
              question: 'Czy mogę zamówić projekt logo i całej identyfikacji wizualnej?',
              answer:
                'Tak. Oferujemy kompleksowe pakiety identyfikacji wizualnej zawierające logo, kolorystykę, typografię, wzory grafik, szablony do social mediów i materiały drukowane. Każdy system dopasowujemy do archetypu Twojej marki.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu graficznego?',
              answer:
                'Tak, w każdej usłudze przewidujemy minimum jedną rundę poprawek. W przypadku większych projektów (logo, identyfikacja) standardowo wykonujemy dwie rundy korekt, aby dopracować każdy detal do pełnej satysfakcji.',
            },
            {
              question: 'Czy mogę liczyć na doradztwo przy wyborze stylu graficznego?',
              answer:
                'Tak. Pomagamy dobrać styl, kolorystykę i ton komunikacji graficznej do branży i grupy odbiorców. Jeśli nie masz jeszcze wizji, przygotujemy propozycje kierunków estetycznych i przykładowe inspiracje.',
            },
            {
              question: 'Czy mogę zlecić stałą współpracę graficzną?',
              answer:
                'Tak. Oferujemy stałą obsługę graficzną w formie abonamentu miesięcznego. Dzięki temu zyskujesz regularne wsparcie w tworzeniu materiałów - od postów i ulotek po katalogi czy banery reklamowe.',
            },
            {
              question: 'Czy projekty są gotowe do druku?',
              answer:
                'Tak. Wszystkie materiały przygotowujemy w pełni zgodnie ze standardami druku: CMYK, spady, marginesy bezpieczeństwa i profile ICC. Pliki możesz przekazać bezpośrednio do drukarni bez dodatkowej obróbki.',
            },
            {
              question: 'Czy po zakończeniu projektu mam pełne prawa do plików?',
              answer:
                'Tak. Po opłaceniu projektu otrzymujesz pełne prawa autorskie oraz wszystkie pliki źródłowe. Możesz z nich korzystać dowolnie, także w przyszłych realizacjach lub w innych agencjach.',
            },
            {
              question: 'Czy mogę zamówić projekt graficzny online bez spotkania?',
              answer:
                'Tak. Cały proces - od briefu po akceptację - można przeprowadzić zdalnie. Kontaktujemy się mailowo lub przez określony komunikator, a gotowe projekty i pliki przekazujemy w formie cyfrowej.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Nadaj marce wyjątkową tożsamość"
        description="Projektujemy logo, identyfikację i materiały, które zostają w pamięci"
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
      <ItemListSchema />
    </>
  );
}
