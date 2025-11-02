import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiLayoutLine, RiBookOpenLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';

export const metadata = {
  title: 'Projekt menu restauracji | Arteon',
  description: 'Projektujemy menu dla restauracji, kawiarni ui barów – eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
  keywords: ['projekt menu restauracji', 'projekt karty dań', 'menu restauracyjne projekt', 'menu do druku', 'projekt graficzny menu'],
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji' },
  openGraph: {
    title: 'Projekt menu restauracji | Arteon',
    description: 'Projektujemy menu dla restauracji, kawiarni i barów – eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
    serviceName: 'Projekt menu restauracji',
    description: 'Projekt graficzny menu dla restauracji, kawiarni i barów – eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-menu-restauracji" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignMenuPage() {
  return (
    <>
      <HeroBanner
        title="Projekt menu restauracji"
        description={<>Stworzymy dla Ciebie estetyczne i czytelne menu restauracji, kawiarni lub baru – spójne z klimatem lokalu i Twoją marką.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Portfolio"
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

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-menu-restauracji`, label: 'Projekt menu restauracji' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto zainwestować w profesjonalne menu?">
          <p>
            <strong>Menu to najważniejszy materiał sprzedażowy w gastronomii.</strong> Dobrze zaprojektowana karta zapada w pamięci odbiorcy i ułatwia podjęcie decyzji.
          </p>

          <br />

          <p>
            <strong>Układ graficzny ma wpływ na apetyt i decyzję.</strong> Estetyka, kolorystyka i układ sekcji potrafią zwiększyć średni rachunek nawet o kilkanaście procent.
          </p>

          <br />

          <p>
            <strong>Dobre menu robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje ofertę i ułatwia wybór,</li>
            <li>Wzmacnia klimat i tożsamość lokalu,</li>
            <li>Zwiększa sprzedaż kluczowych dań i napojów.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zawiera projekt menu restauracji?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Układ dopasowany do oferty',
              description: <>Projektujemy logiczne sekcje: przystawki, dania główne, napoje, desery z czytelną hierarchią, ułatwiającą podjęcie decyzji.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z klimatem lokalu',
              description: <>Kolory, czcionki i styl graficzny dopasowujemy do wnętrza i charakteru restauracji – nowoczesnego, klasycznego czy rustykalnego.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gotowe pliki do druku i online',
              description: <>Dostarczamy gotowe pliki do druku oraz wersję online, którą bez problemu dodasz na stronę czy media społecznościowe.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Możliwość samodzielnej aktualizacji',
              description: <>Na życzenie przygotowujemy łatwe w edycji pliki źródłowe, dzięki czemu samodzielnie będziesz w stanie aktualizować menu w przyszłości.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt menu dla swojego lokalu"
          description="Opisz rodzaj swojego lokalu a my przygotujemy projekt, który zachwyci Twoich gości."
          defaultSubject="Projekt menu restauracji"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji"
          title="Najczęstsze pytania dotyczące projektów menu restauracyjnego"
          items={[
            {
              question: 'W jakich formatach projektujecie menu?',
              answer: 'Najczęściej A4, DL lub format składany (A3 na pół). Możemy dostosować projekt do wymiarów kart menu w lokalu.',
            },
            {
              question: 'Czy mogę otrzymać wersję do publikacji online?',
              answer: 'Tak – przygotowujemy wersje cyfrowe (PDF, PNG, JPG) do publikacji na stronie lub w mediach społecznościowych.',
            },
            {
              question: 'Czy możliwe jest przygotowanie wersji wielojęzycznej menu?',
              answer: 'Tak – możemy zaprojektować menu w dwóch wersjach lub w jednej z tłumaczeniem w kilku językach.',
            },
            {
              question: 'Jak długo trwa realizacja projektu?',
              answer: 'Zazwyczaj 3–5 dni roboczych. Przy dużych kartach z wieloma pozycjami termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zlecić późniejszą aktualizację menu?',
              answer: 'Tak – oferujemy aktualizacje sezonowe i modyfikacje. Na życzenie możemy również przygotować pliki żródłowe, które będziesz mógł łatwo edytować.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zaprojektuj menu, które zapamiętają Twoi klienci"
        description="Profesjonalny projekt menu restauracyjnego – estetyka, czytelność i emocje, które zwiększają sprzedaż."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj inne usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
