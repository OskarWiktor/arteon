import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import PricingSteps from '@/components/sections/steps/FeesSteps';
import { generatePageMetadata } from '@/lib/generatePageMetadata';
import FaqContent from '@/components/sections/faqs/FaqContent';
import ContentFeatures from '@/components/sections/features/ContentFeatures';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import Keywords from '@/components/sections/Keywords';
import ContentSteps from '@/components/sections/steps/ContentSteps';
import { RiBarChart2Fill, RiBookOpenLine, RiCustomerService2Line, RiBrushLine } from 'react-icons/ri';

export async function generateMetadata() {
  return generatePageMetadata('content');
}

export default function OfferContentPage() {
  return (
    <>
      <HeroBanner
        title="Tworzenie treści"
        description={
          <>
            Teksty, które <strong>pozycjonują i sprzedają</strong>. Od stron i blogów, po e-commerce i social media.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/contact"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiBarChart2Fill />, label: 'Treści pod sprzedaż' },
          { icon: <RiBookOpenLine />, label: 'Spójny język marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
        ]}
      />

      <Gap size="sm" />

      <ContentFeatures />

      <Gap variant="line" />

      <ContentSteps />

      <Gap variant="line" />

      <PricingSteps />

      <Gap variant="line" />

      <WorkSteps />

      <Gap variant="line" />

      <FaqContent />

      <Gap variant="line" />

      <ServicesSteps />

      <Gap size="sm" />

      <Keywords keys="Treści marketingowe, copywriting SEO, artykuły eksperckie, treści na strony www, treści sprzedażowe, storytelling marki, redakcja treści pod konwersję, scenariusze do rolek, opisy produktów e-commerce, opisy kategorii SEO, treści do social media, oferty sprzedażowe PDF, case studies, prezentacje sprzedażowe, blog firmowy, język marki, CTA psychologiczne, korekta treści, treści wizerunkowe, pakiety artykułów, treści dopasowane do archetypu" />

      <CTABaner
        title="Stwórzmy treści, które działają jak magnez"
        description="Tworzymy treści, które trafiają do ludzi oraz algorytmów, wspierając sprzedaż"
        primaryLabel="Skontaktuj się"
        primaryLink="/contact"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />
    </>
  );
}
