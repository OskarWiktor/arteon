import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import DesignFeatures from '@/components/sections/features/DesignFeatures';
import FaqDesign from '@/components/sections/faqs/FaqDesign';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';

export async function generateMetadata() {
  return generatePageMetadata('design');
}

export default function OfferDesignPage() {
  return (
    <>
      <HeroBanner
        title="Strony internetowe"
        description="Standard globalnych marek dla Twojego biznesu"
        buttonAccent="Wyceń projekt"
        buttonAccentLink="/contact"
        buttonSecond="Sprawdź realizacje"
        buttonSecondLink="/projects"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg1.jpg"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiShieldCheckLine />, label: 'Zgodność z prawem' },
          { icon: <RiSpeedFill />, label: 'Szybkość i stabilność' },
          { icon: <RiCodeSSlashFill />, label: 'Sprawdzone technologie' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
        ]}
      />

      <Gap size="sm" />

      <DesignFeatures />

      <Gap />

      <TechSteps />

      <Gap size="sm" />

      <Gap />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Gap size="sm" />

      <FaqDesign />

      <Gap />

      <ServicesSteps />

      <Gap />

      <CTABaner
        title="Zbudujmy stronę, która pracuje na Twoją markę"
        description="Jasny plan i odpowiedzialność po naszej stronie"
        primaryLabel="Wyceń projekt"
        primaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg1.jpg"
        overlay="black"
      />
    </>
  );
}
