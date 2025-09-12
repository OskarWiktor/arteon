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
import Keywords from '@/components/sections/Keywords';

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

      <Gap variant="line" />

      <ProjectsOverview title="Wyróżnione realizacje stron internetowych" category="strona" subtitle="Portfolio" />

      <Gap />

      <TechSteps />

      <Gap />

      <WebPrices />

      <Gap variant="line" />

      <PricingSteps />

      <Gap variant="line" />

      <WorkSteps />

      <Gap variant="line" />

      <FaqWebsite />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <Keywords keys="Strony internetowe, projektowanie stron www, tworzenie stron firmowych, strony wizytówki WordPress, strony premium Webflow, aplikacje webowe Next.js, strony responsywne, strony dostępne WCAG 2.1 AA, SEO on-page, optymalizacja techniczna, migracja WordPress do Webflow, CMS dla stron, nowoczesny design, audyt stron, hosting i domena, strony sprzedażowe, redesign stron, strony dla firm małych i średnich, strony internetowe Kraków, strony internetowe Polska" />

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
