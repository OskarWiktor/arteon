import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill } from 'react-icons/ri';
import FaqWebsite from '@/components/sections/faqs/FaqWebsite';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import WebFeatures from '@/components/sections/features/WebFeatures';
import WebPrices from '@/components/sections/prices/WebPrices';
import Mission from '@/components/sections/steps/Mission';
import Gap from '@/components/ui/Gap';


export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Strony internetowe"
        description="SEO, WCAG, treść, sprawdzona technologia. Indywidualne projekty dla Twoich celów"
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

      <WebFeatures />

      <Gap />

      <Mission />

      <Gap />

      <WorkSteps />

      <Gap />

      <WebPrices />

      <Gap />

      <FaqWebsite />

      <Gap />

      <CTABaner
        title="Zbudujmy stronę, która pracuje na markę"
        description="Minimum formy. Maksimum efektu. Jasny plan i odpowiedzialność po naszej stronie."
        primaryLabel="Wyceń projekt"
        primaryLink="/contact"
        secondaryLabel="Zapytaj o termin"
        secondaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg1.jpg"
        overlay="black"
      />
    </>
  );
}
