import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';

export const metadata = {
  title: 'Projekt papieru firmowego | Arteon',
  description: 'Papier firmowy, który wzmacnia wizerunek w korespondencji. Szablony Word/PDF oraz wersje gotowe do druku.',
  keywords: ['projekt papieru firmowego', 'papier firmowy', 'szablon firmowy', 'projekt do druku', 'materiały firmowe'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-papieru-firmowego' },
  openGraph: {
    title: 'Projekt papieru firmowego | Arteon',
    description: 'Profesjonalny papier firmowy: szablony i pliki drukarskie zgodne z identyfikacją.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt papieru firmowego"
        description={<>Każda korespondencja może wzmacniać markę. Projektujemy papier firmowy z prawidłowymi szablonami Word/PDF i plikami do druku - czytelny, spójny i profesjonalny.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-papieru-firmowego`, label: 'Projekt papieru firmowego' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt papieru firmowego?">
          <p>
            <strong>Własny projekt papieru firmowego sprawia, że dokumenty wyglądają profesjonalnie od pierwszej sekundy.</strong> Oferty, umowy i pisma mają jeden, spójny wzór - logo, układ, dane
            kontaktowe - dzięki czemu autorytet Twojej marki wzrasta. Estetyczna oprawa zwiększa postrzeganą wiarygodność marki już w pierwszych sekundach
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry papier firmowy robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica korespondencję i porządkuje dane,</li>
            <li>Uspójnia wygląd ofert i umów w całej firmie,</li>
            <li>Podnosi zaufanie i ułatwia kontakt.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz realizując projekt graficzny xxx z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'xxx',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
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

        <ContactForm title="Zbudujmy wizerunek Twojej firmy" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę projektu graficznego" defaultSubject="Projekty graficzne" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego"
          items={[
            {
              question: 'xxx',
              answer: 'xxx',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner title="xxx" description="xxx" primaryLabel="Skontaktuj się" primaryLink="/kontakt" backgroundImage="/assets/bg/abstract-bg15.webp" overlay="black" />
    </>
  );
}
