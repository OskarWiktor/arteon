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
import Keywords from '@/components/sections/Keywords';
import MarketingSteps from '@/components/sections/steps/MarketingSteps';
import { RiBarChart2Fill, RiCustomerService2Line, RiLightbulbFlashLine, RiShieldCheckLine } from 'react-icons/ri';

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
            <strong>Strategie, które dowożą efekt</strong> i zwiększają sprzedaż.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/contact"
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

      <Gap variant="line" />

      <FaqMarketing />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <Keywords keys="Marketing internetowy, SEO techniczne, SEO on-page, audyt SEO, reklamy Google Ads, reklamy Facebook Ads, reklamy Instagram, kampanie reklamowe, social media marketing, prowadzenie Instagrama, prowadzenie Facebooka, strategie marketingowe, analiza konkurencji, automatyzacja social media, branding emocjonalny, archetyp marki, oferta sprzedażowa Apple Why How What, psychologia marki, marketing online dla firm, strategie komunikacji" />

      <CTABaner
        title="Rozwiń markę dobrą strategią"
        description="Od SEO po reklamy - planujemy i prowadzimy działania, które zwiększają sprzedaż"
        primaryLabel="Skontaktuj się"
        primaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />
    </>
  );
}
