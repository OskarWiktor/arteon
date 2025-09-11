import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/PricingSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import ShopFeatures from '@/components/sections/features/ShopFeatures';
import ShopPrices from '@/components/sections/prices/ShopPrices';
import FaqShop from '@/components/sections/faqs/FaqShop';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';

export async function generateMetadata() {
  return generatePageMetadata('ecommerce');
}

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Sklepy internetowe"
        description="Rozwiązania dużych marek dostosowane do Twojego biznesu - szybkie, intuicyjne i gotowe na rozwój"
        buttonAccent="Wyceń projekt"
        buttonAccentLink="/contact"
        buttonSecond="Nasze realizacje"
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

      <ShopFeatures />

      <Gap />

      <ProjectsOverview title="Wyróżnione realizacje sklepów internetowych" category="sklep" subtitle="Portfolio" />

      <Gap />

      <TechSteps />

      <Gap size="sm" />

      <ShopPrices />

      <Gap />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Gap size="sm" />

      <FaqShop />

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
