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
  title: 'Projekt teczki ofertowej | Arteon',
  description: 'xxx',
  keywords: ['xxx', 'xxx'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej' },
  openGraph: {
    title: 'Projekt teczki ofertowej | Arteon',
    description: 'xxx',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt teczki ofertowej"
        description={<>xxx</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-teczki-ofertowej`, label: 'Projekt teczki ofertowej' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt teczki ofertowej?">
          <p>
            <strong>Własna firmowa teczka buduje zaufanie i robi ogromne wrażenie na odbiorcy.</strong> Klient dostaje Twoje materiały w jednej, eleganckiej formie - to ułatwia zapamiętanie marki oraz
            buduje jej autorytet. Materiały drukowane zostają w pamięci dłużej niż przekaz cyfrowy (mniejsze obciążenie poznawcze, wyższa zapamiętywalność)
            <a
              href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-block underline underline-offset-4"
            >
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Profesjonalna teczka ofertowa buduje wiarygodność w kilka sekund.</strong> Estetyka i czytelność oprawy silnie wpływają na ocenę firmy - odbiorcy przypisują zaufanie na podstawie
            jakości materiałów
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            . Spójna estetyka, kolory i typografia wzmacniają rozpoznawalność firmy.
          </p>

          <br />

          <p>
            <strong>Estetyczna teczka ofertowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje dokumenty i ułatwia współpracę,</li>
            <li>Podkreśla profesjonalizm na prezentacji i po spotkaniu,</li>
            <li>Zostawia fizyczny ślad - klient łatwiej wraca do Twojej firmy.</li>
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
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej"
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
