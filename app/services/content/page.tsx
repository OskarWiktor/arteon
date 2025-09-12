import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import FaqContent from '@/components/sections/faqs/FaqContent';
import ContentFeatures from '@/components/sections/features/ContentFeatures';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import Calculator from '@/components/sections/Calculator';

export async function generateMetadata() {
  return generatePageMetadata('content');
}

export default function OfferContentPage() {
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

      <ContentFeatures />

      <Gap />

      <TechSteps />

      <Gap size="sm" />

      <Gap />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Calculator />

      <Gap size="sm" />

      <FaqContent />

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
