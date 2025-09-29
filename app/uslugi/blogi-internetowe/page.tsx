import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import BlogFeatures from '@/components/sections/features/BlogFeatures';
import FaqBlog from '@/components/sections/faqs/FaqBlog';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import BlogPrices from '@/components/sections/prices/BlogPrices';
import { RiArticleLine, RiSearchLine, RiShieldCheckLine, RiCustomerService2Line } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Blogi internetowe - projekt i wdrożenie | Arteon',
  description: 'Blogi firmowe i eksperckie. Prosty CMS, czytelny układ i treści, które przyciągają klientów.',
  keywords: ['blog firmowy', 'tworzenie bloga', 'projekt bloga', 'treści eksperckie', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/blogi-internetowe' },
  openGraph: {
    title: 'Blog, który pracuje na markę - Arteon',
    description: 'Strategia tematów, projekt i wdrożenie. Publikacja bez tarcia.',
    url: 'https://www.arteonagency.pl/uslugi/blogi-internetowe',
    type: 'website',
  },
} as const;


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
        buttonAccentLink="/kontakt"
        buttonSecond="Nasze realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg7.webp"
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

      <Wrapper>
        <Gap size="sm" />

        <BlogFeatures />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje blogów" category="blog" subtitle="Portfolio" />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <BlogPrices />

        <Gap variant="line" />

        <WorkSteps variant="web" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy Twój blog" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Blog" />

        <Gap variant="line" />

        <FaqBlog />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Czas na blog, który buduje Twoją pozycję"
        description="Wzmacniamy Twój autorytet w branży i wspieramy SEO prostymi narzędziami"
        primaryLabel="Wyceń projekt"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg7.webp"
        overlay="black"
      />
    </>
  );
}
