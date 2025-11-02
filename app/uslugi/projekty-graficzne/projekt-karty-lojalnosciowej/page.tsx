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
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiVipCrownLine, RiCoupon2Line } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';

export const metadata = {
  title: 'Projekt karty lojalnościowej | Arteon',
  description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
  keywords: ['projekt karty lojalnościowej', 'karta stałego klienta', 'karta pieczątkowa', 'program lojalnościowy projekt', 'projekt karty do druku'],
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  openGraph: {
    title: 'Projekt karty lojalnościowej | Arteon',
    description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    serviceName: 'Projekt karty lojalnościowej',
    description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-karty-lojalnosciowej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignKartaPage() {
  return (
    <>
      <HeroBanner
        title="Projekt karty lojalnościowej"
        description={<>Zachęć klientów do powrotu, przez estetyczne karty lojalnościowe. Projektujemy czytelne i eleganckie karty, które wspierają sprzedaż i budują relację z klientem.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej`, label: 'Projekt karty lojalnościowej' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto zainwestować w karty lojalnościowe?">
          <p>
            <strong>Karty lojalnościowe są w stanie zwiększyć prawdopodobieństwo powrotu klienta nawet o 40%.</strong> To prosty i skuteczny sposób na utrzymanie kontaktu oraz budowanie zaufania.
          </p>

          <br />

          <p>
            <strong>Estetyka ma znaczenie.</strong> Dobrze zaprojektowana karta staje się elementem wizerunku firmy – wygląda profesjonalnie, budzi pozytywne emocje i zachęca do ponownych wizyt.
          </p>

          <br />

          <p>
            <strong>Dobra karta lojalnościowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Motywuje do powrotu,</li>
            <li>Wzmacnia więź klienta z marką,</li>
            <li>Promuje firmę dzięki estetycznej formie.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zawiera projekt karty lojalnościowej?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Układ dopasowany do branży',
              description: <>Tworzymy karty dopasowane do specyfiki działalności – salonów, kawiarni, siłowni, butików i innych punktów usługowych.</>,
              icon: <RiVipCrownLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Tworzymy karty, które są spójne wizualnie z Twoją marką tak aby wzmocnić Twój profesjonalny wizerunek w oczach odbiorcy.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gotowość do druku',
              description: <>Dostarczamy pliki w formacie gotowym do druku.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Numeracje i pola pieczątek',
              description: <>Dodajemy odpowiednie i czytelne pola na pieczątki czy podpisy.</>,
              icon: <RiCoupon2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Przykładowe projekty graficzne" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt karty lojalnościowej"
          description="Opisz, w jakiej branży działasz i jak chcesz nagradzać swoich klientów. Przygotujemy projekt dopasowany do Twoich potrzeb i stylu marki."
          defaultSubject="Projekt karty lojalnościowej"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej"
          title="Najczęstsze pytania o karty lojalnościowe"
          items={[
            {
              question: 'W jakich formatach wykonujecie karty?',
              answer: 'Najczęściej przygotowujemy karty lojalnościowe w formacie wizytówek. Jeśli chcesz aby miały one inny format, bez problemu się dopasujemy.',
            },
            {
              question: 'Czy mogę dodać logo i kolory marki na kartę lojalnościową?',
              answer: 'Jak najbardziej, projekt zawsze opiera się na Twoim wizurenku, tak aby zachować pełną spójność.',
            },
            {
              question: 'Jak długo trwa realizacja kart lojalnościowych?',
              answer: 'Standardowo realizacja, wraz z przygotowaniem do druku, trwa od 3 do 5 dni roboczych.',
            },
            {
              question: 'Czy mogę zamówić serię różnych kart lojalnościowych?',
              answer: 'Tak – możemy przygotować serię spójną wizualnie dla wielu punktów czy marek partnerskich.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zwiększ lojalność klientów"
        description="Zaprojektujemy karty, które sprawią, że klienci będą wracać częściej."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
