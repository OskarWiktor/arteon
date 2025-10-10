import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FaqContent from '@/components/sections/faqs/FaqContent';
import ContentFeatures from '@/components/sections/features/ContentFeatures';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContentSteps from '@/components/sections/steps/ContentSteps';
import { RiBarChart2Fill, RiBookOpenLine, RiCustomerService2Line, RiBrushLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import Breadcrumbs from '@/components/sections/BreadCrumbs';

export const metadata = {
  title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
  description: 'Klarowne teksty dopasowane do odbiorcy. Artykuły, opisy i treści sprzedażowe, które budują widoczność i zaufanie.',
  keywords: ['teksty na stronę', 'copywriting', 'opisy produktów', 'artykuły eksperckie', 'treści sprzedażowe', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/tworzenie-tresci' },
  openGraph: {
    title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
    description: 'Klarowne teksty dopasowane do odbiorcy. Artykuły, opisy i treści sprzedażowe, które budują widoczność i zaufanie.',
    url: 'https://www.arteonagency.pl/uslugi/tworzenie-tresci',
    type: 'website',
  },
} as const;

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
        buttonAccentLink="/kontakt"
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

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/tworzenie-tresci`, label: 'Tworzenie treści' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <ContentFeatures />

        <Gap variant="line" />

        <ContentSteps />

        <Gap variant="line" />

        <WorkSteps variant="content" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Stwórzmy treści, które sprzedają" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Treści" />

        <Gap variant="line" />

        <FaqContent />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Stwórzmy treści, które działają jak magnez"
        description="Tworzymy treści, które trafiają do ludzi oraz algorytmów, wspierając sprzedaż"
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />
    </>
  );
}
