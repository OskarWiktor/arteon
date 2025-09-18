import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import MarketingFeatures from '@/components/sections/features/MarketingFeatures';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import FaqMarketing from '@/components/sections/faqs/FaqMarketing';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import MarketingSteps from '@/components/sections/steps/MarketingSteps';
import { RiBarChart2Fill, RiCustomerService2Line, RiLightbulbFlashLine, RiShieldCheckLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';

export async function generateMetadata() {
  return generatePageMetadata('marketing');
}

export default function OfferMarketingPage() {
  return (
    <>
      <HeroBanner
        title="Marketing"
        description={
          <>
            SEO, reklamy, social media.
            <strong> Strategie, które dowożą efekt</strong> i zwiększają sprzedaż.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
          { icon: <RiBarChart2Fill />, label: 'Raporty i kontrola wyników' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczeństwo danych' },
        ]}
      />

      <Gap size="sm" />

      <MarketingFeatures />

      <Gap variant="line" />

      <MarketingSteps />

      <Gap variant="line" />

      <PricingSteps />

      <Gap variant="line" />

      <WorkSteps />

      <Gap size="sm" />

      <ContactForm
        title="Postaw na skuteczny marketing"
        description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę"
        defaultSubject="Marketing"
      />

      <Gap variant="line" />

      <FaqMarketing />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <CTABaner
        title="Rozwiń markę dobrą strategią"
        description="Od SEO po reklamy - planujemy i prowadzimy działania, które zwiększają sprzedaż"
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />
    </>
  );
}
