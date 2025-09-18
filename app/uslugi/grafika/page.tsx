import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import DesignFeatures from '@/components/sections/features/DesignFeatures';
import FaqDesign from '@/components/sections/faqs/FaqDesign';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import DesignSteps from '@/components/sections/steps/DesignSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';

export async function generateMetadata() {
  return generatePageMetadata('design');
}

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

      <Gap size="sm" />

      <DesignFeatures />

      <Gap variant="line" />

      <DesignSteps />

      <Gap variant="line" />

      <PricingSteps />

      <Gap variant="line" />

      <WorkSteps />

      <Gap size="sm" />

      <ContactForm
        title="Zbudujmy spójny wizerunek"
        description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę"
        defaultSubject="Grafika"
      />

      <Gap variant="line" />

      <FaqDesign />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

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
