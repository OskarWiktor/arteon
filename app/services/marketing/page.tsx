import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import MarketingFeatures from '@/components/sections/features/MarketingFeatures';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import FaqMarketing from '@/components/sections/faqs/FaqMarketing';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';

export async function generateMetadata() {
  return generatePageMetadata('marketing');
}

export default function OfferMarketingPage() {
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

      <MarketingFeatures />

      <Gap />

      <ProjectsOverview title="Wyróżnione realizacje stron" category="strona" subtitle="Portfolio" />

      <Gap />

      <TechSteps />

      <Gap size="sm" />

      <Gap />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Gap size="sm" />

      <FaqMarketing />

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
