import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import MarketingFeatures from '@/components/sections/features/MarketingFeatures';
import FaqMarketing from '@/components/sections/faqs/FaqMarketing';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import MarketingSteps from '@/components/sections/steps/MarketingSteps';
import { RiBarChart2Fill, RiCustomerService2Line, RiLightbulbFlashLine, RiShieldCheckLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Marketing internetowy - reklamy i widoczność w Google | Arteon',
  description: 'Strategia, kreacje i kampanie. Więcej zapytań i sprzedaży dzięki reklamom i mądrej widoczności.',
  keywords: ['marketing internetowy', 'reklamy Google', 'reklamy Meta', 'kampanie online', 'widoczność w Google', 'strategie marketingowe'],
  alternates: { canonical: '/uslugi/marketing' },
  openGraph: {
    title: 'Marketing, który dowozi wynik - Arteon',
    description: 'Diagnoza, plan, kampanie i pomiar. Prosto i skutecznie.',
    url: 'https://www.arteonagency.pl/uslugi/marketing',
    type: 'website',
  },
} as const;


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

      <Wrapper>
        <Gap size="sm" />

        <MarketingFeatures />

        <Gap variant="line" />

        <MarketingSteps />

        <Gap variant="line" />

        <WorkSteps variant="marketing" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Postaw na skuteczny marketing" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Marketing" />

        <Gap variant="line" />

        <FaqMarketing />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

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
