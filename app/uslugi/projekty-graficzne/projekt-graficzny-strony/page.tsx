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
  title: 'Projekt graficzny strony | Arteon',
  description: 'xxx',
  keywords: ['xxx', 'xxx'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-graficzny-strony' },
  openGraph: {
    title: 'Projekt graficzny strony | Arteon',
    description: 'xxx',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-graficzny-strony',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="xxx"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-graficzny-strony`, label: 'Projekt graficzny strony' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt graficzny strony?">
          <p>
            <strong>Przejrzysty projekt strony, bloga czy sklepu buduje zaufanie w pierwszych sekundach.</strong> Odbiorcy bardzo mocno oceniają firmę przez wygląd ich strony oraz materiałów - nawet
            <strong> ~75%</strong> wrażeń o wiarygodności wynika z jakości oprawy wizualnej
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            . Dobrze zaprojektowana strona szybciej prowadzi do kontaktu.
          </p>

          <br />

          <p>
            <strong>Układ, hierarchia i czytelne CTA skracają drogę do decyzji.</strong> Użytkownik bez wysiłku znajduje to, czego szuka: ofertę, referencje i przyciski kontaktu. Spójny design
            porządkuje treść i eliminuje zbędne pytania.
          </p>

          <br />

          <p>
            <strong>Dobry projekt graficzny strony robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Przyciąga uwagę i utrzymuje ją na najważniejszych treściach,</li>
            <li>Wyjaśnia ofertę w prostych blokach i przykładach,</li>
            <li>Prowadzi do działania: kontakt, wycena, rezerwacja.</li>
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
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-graficzny-strony"
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
