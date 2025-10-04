import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import ShopFeatures from '@/components/sections/features/ShopFeatures';
import ShopPrices from '@/components/sections/prices/ShopPrices';
import FaqShop from '@/components/sections/faqs/FaqShop';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiShieldCheckLine, RiBarChart2Fill, RiCustomerService2Line, RiSpeedFill } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';

export const metadata = {
  title: 'Sklepy internetowe - projekt i wdrożenie | Arteon',
  description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
  keywords: ['sklepy internetowe', 'tworzenie sklepów online', 'e-commerce', 'wdrożenie sklepu', 'opisy produktów', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/sklepy-internetowe' },
  openGraph: {
    title: 'Sklepy internetowe - projekt i wdrożenie | Arteon',
    description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
    url: 'https://www.arteonagency.pl/uslugi/sklepy-internetowe',
    type: 'website',
  },
} as const;

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Sklepy internetowe"
        description={
          <>
            Projektujemy sklepy online, które sprzedają szybciej i skuteczniej.
            <strong>Płatności, dostawy i marketing</strong> w jednym systemie.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
        buttonSecond="Nasze realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiSpeedFill />, label: 'Szybkość i stabilność' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczieństwo' },
          { icon: <RiBarChart2Fill />, label: 'Stała kontrola wyników' },
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
        ]}
      />

      <Wrapper>
        <Gap size="sm" />

        <ShopFeatures />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje sklepów internetowych" category="sklep" subtitle="Portfolio" />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <ShopPrices />

        <Gap variant="line" />

        <WorkSteps variant="web" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy Twój sklep online" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Sklep internetowy" />

        <Gap variant="line" />

        <FaqShop />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zbudujmy sklep, który rozwija się z Tobą"
        description="Tworzymy dedykowane rozwiązanie, gotowe do rozwoju - szybkie, stabilne i zgodne z przepisami"
        primaryLabel="Wyceń projekt"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />
    </>
  );
}
