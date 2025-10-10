import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import DesignFeatures from '@/components/sections/features/DesignFeatures';
import FaqDesign from '@/components/sections/faqs/FaqDesign';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import DesignSteps from '@/components/sections/steps/DesignSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

export const metadata = {
  title: 'Grafika i branding - logo, identyfikacja, materiały | Arteon',
  description: 'Logo i system identyfikacji. Materiały do druku i online. Spójność i prestiż od pierwszego kontaktu.',
  keywords: ['projektowanie logo', 'identyfikacja wizualna', 'grafika na stronę', 'materiały drukowane', 'brandbook'],
  alternates: { canonical: '/uslugi/grafika' },
  openGraph: {
    title: 'Grafika i branding - logo, identyfikacja, materiały | Arteon',
    description: 'Logo i system identyfikacji. Materiały do druku i online. Spójność i prestiż od pierwszego kontaktu.',
    url: 'https://www.arteonagency.pl/uslugi/grafika',
    type: 'website',
  },
} as const;

export default function OfferDesignPage() {
  return (
    <>
      <HeroBanner
        title="Grafika i branding"
        description={
          <>
            Logo, identyfikacja, social media, materiały drukowane.
            <strong>Spójny design</strong>, który działa w sieci i offline.
          </>
        }
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

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/grafika`, label: 'Grafika' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <DesignFeatures />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <DesignSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy spójny wizerunek" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Grafika" />

        <Gap variant="line" />

        <FaqDesign />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Nadaj marce wyjątkową tożsamość"
        description="Projektujemy logo, identyfikację i materiały, które zostają w pamięci"
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
    </>
  );
}
