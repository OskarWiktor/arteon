import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import FaqWebsite from '@/components/sections/faqs/FaqWebsite';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import WebFeatures from '@/components/sections/features/WebFeatures';
import WebPrices from '@/components/sections/prices/WebPrices';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';

export async function generateMetadata() {
  return generatePageMetadata('websites');
}

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Strony internetowe"
        description={
          <>
            Tworzymy strony WWW, które łączą estetykę, technologię i skuteczność. <strong>Standard globalnych marek</strong> - dla Twojego biznesu.
          </>
        }
        buttonAccent="Bezpłatna wycena"
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

      <WebFeatures />

      <Gap />

      <ProjectsOverview title="Wyróżnione realizacje stron internetowych" category="strona" subtitle="Portfolio" />

      <Gap />

      <TechSteps />

      <Gap size="sm" />

      <WebPrices />

      <Gap />

      <PricingSteps />

      <Gap size="sm" />

      <WorkSteps />

      <Gap size="sm" />

      <FaqWebsite />

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
