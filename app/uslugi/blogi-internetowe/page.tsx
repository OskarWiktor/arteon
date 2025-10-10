import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import BlogFeatures from '@/components/sections/features/BlogFeatures';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import BlogPrices from '@/components/sections/prices/BlogPrices';
import { RiArticleLine, RiSearchLine, RiShieldCheckLine, RiCustomerService2Line } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';

export const metadata = {
  title: 'Blogi internetowe - projekt i wdrożenie | Arteon',
  description: 'Blogi firmowe i eksperckie. Prosty CMS, czytelny układ i treści, które przyciągają klientów.',
  keywords: ['blog firmowy', 'tworzenie bloga', 'projekt bloga', 'treści eksperckie', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/blogi-internetowe' },
  openGraph: {
    title: 'Blogi internetowe - projekt i wdrożenie | Arteon',
    description: 'Blogi firmowe i eksperckie. Prosty CMS, czytelny układ i treści, które przyciągają klientów.',
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
      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/blogi-internetowe`, label: 'Blogi internetowe' }} includeJsonLd />

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

        <FaqPanels
          pageUrl='https://www.arteonagency.pl/uslugi/blogi-internetowe'
          items={[
            { question: 'Ile trwa stworzenie bloga?', answer: 'Standardowo projekt zajmuje od 7 do 20 dni roboczych, w zależności od złożoności i dostępnych materiałów' },
            {
              question: 'Czy mogę samodzielnie prowadzić bloga po wdrożeniu?',
              answer: 'Tak, po uruchomieniu bloga otrzymasz szkolenie PDF - abyś mógł/mogła samodzielnie dodawać wpisy, zdjęcia i kategorie',
            },
            {
              question: 'Czy blog będzie zoptymalizowany pod SEO?',
              answer:
                'Tak, wdrażamy techniczne podstawy SEO (szybkość, Responsywność, struktura nagłówków, meta tagi) i stosujemy najlepsze praktyki, by Twoje treści miały szansę dobrze pozycjonować się w Google',
            },
            {
              question: 'Czy projektujecie wygląd bloga od zera?',
              answer: 'Tak, blog może być zaprojektowany indywidualnie - zgodnie z identyfikacją Twojej marki. Możemy też oprzeć go na nowoczesnym, dopracowanym szablonie',
            },
            {
              question: 'Czy dodajecie pierwsze wpisy na start?',
              answer: 'Tak, możemy przygotować i dodać kilka startowych wpisów, aby blog wyglądał na aktywny i przyciągał ruch od pierwszego dnia',
            },
            {
              question: 'Czy mogę liczyć na pomoc w strategii treści?',
              answer: 'Tak, bezpłatnie pomagamy, w budowie struktury bloga, tak aby pojawił się wyżej w Google',
            },
          ]}
        />

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
