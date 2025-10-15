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
  title: 'Projekt logo | Arteon',
  description: 'Logo jako fundament identyfikacji wizualnej. Tworzymy czytelny znak z wersjami kolorystycznymi i mini-księgą znaku.',
  keywords: ['projekt logo', 'logo dla firmy', 'tworzenie logo', 'księga znaku', 'identyfikacja wizualna'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-logo' },
  openGraph: {
    title: 'Projekt logo | Arteon',
    description: 'Profesjonalne logo dopasowane do charakteru marki. Wektory, warianty i mini-księga znaku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt logo"
        description={<>Silny znak porządkuje komunikację i wyróżnia markę. Tworzymy logo z myślą o czytelności i skalowalności - z wersjami kolorystycznymi oraz mini-księgą znaku.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-logo`, label: 'Projekt logo' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt logo?">
          <p>
            <strong>Profesjonalne logo wzmacnia wizerunek i ułatwia sprzedaż.</strong> Spójny branding realnie przekłada się na wynik: firmy utrzymujące konsekwentną identyfikację raportują{' '}
            <strong>~10-20% wyższy wzrost/przychody</strong>{' '}
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Profesjonalne logo buduje wiarygodność w ułamku sekundy.</strong> Jakość oprawy wizualnej (logo, układ, estetyka) silnie wpływa na ocenę firmy: aż <strong>~75%</strong> osób
            przypisuje wiarygodność marce na podstawie ich materiałów wizualnych{' '}
            <a href="https://rareformnewmedia.com/credibility-in-web-design/" target="_blank" rel="noopener noreferrer" className="inline-block underline underline-offset-4">
              (źródło)
            </a>
          </p>
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
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo"
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
