import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import BlogFeatures from '@/components/sections/features/BlogFeatures';
import FaqBlog from '@/components/sections/faqs/FaqBlog';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import Keywords from '@/components/sections/Keywords';
import BlogPrices from '@/components/sections/prices/BlogPrices';
import { RiArticleLine, RiSearchLine, RiShieldCheckLine, RiCustomerService2Line } from 'react-icons/ri';

export async function generateMetadata() {
  return generatePageMetadata('blog');
}

export default function OfferBlogPage() {
  return (
    <>
      <HeroBanner
        title="Blogi internetowe"
        description={
          <>
            Tworzymy blogi, które budują <strong>autorytet marki</strong> i wspierają SEO. Strategia treści i technologia - w jednym miejscu.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/contact"
        buttonSecond="Nasze realizacje"
        buttonSecondLink="/projects"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg7.jpg"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiArticleLine />, label: 'Proste zarządzanie' },
          { icon: <RiSearchLine />, label: 'Optymalizacja' },
          { icon: <RiShieldCheckLine />, label: 'Dostępność' },
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
        ]}
      />

      <Gap size="sm" />

      <BlogFeatures />

      <Gap variant="line" />

      <ProjectsOverview title="Wyróżnione realizacje blogów" category="blog" subtitle="Portfolio" />

      <Gap />

      <TechSteps />

      <Gap />

      <BlogPrices />

      <Gap variant="line" />

      <PricingSteps />

      <Gap variant="line" />

      <WorkSteps />

      <Gap variant="line" />

      <FaqBlog />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <Keywords keys="Blogi internetowe, blog firmowy, blog ekspercki, blog premium Webflow, blog custom Next.js, blog WordPress, artykuły blogowe SEO, integracja newslettera, platformy contentowe, CMS dla bloga, blog responsywny, blog zgodny z WCAG 2.1 AA, redakcja treści blogowych, pakiety artykułów, blog z AI, blogi firmowe Kraków, blogi dla e-commerce, tworzenie treści na bloga, publikacje blogowe, optymalizacja SEO bloga" />

      <CTABaner
        title="Zbudujmy stronę, która pracuje na Twoją markę"
        description="Jasny plan i odpowiedzialność po naszej stronie"
        primaryLabel="Wyceń projekt"
        primaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg7.jpg"
        overlay="black"
      />
    </>
  );
}
