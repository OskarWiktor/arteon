import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiArticleLine,
  RiSearchLine,
  RiShieldCheckLine,
  RiCustomerService2Line,
  RiBarChart2Line,
  RiBookOpenLine,
  RiDatabase2Line,
  RiDeviceLine,
  RiPencilRuler2Line,
  RiShareForwardLine,
} from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { GoLaw } from 'react-icons/go';
import { IoAccessibility } from 'react-icons/io5';
import SectionPrices, { SectionPricesPlan, Note } from '@/components/ui/sections/SectionPrices';

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

        <FeatureGrid
          title="Co dostajesz"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Indywidualny projekt graficzny bloga',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
              icon: <IoAccessibility className="h-5 w-5 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne: polityka prywatności, regulaminy',
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna Responsywność i komfort czytania',
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Łatwe zarządzanie wpisami i kategoriami (CMS)',
              icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Optymalizacja techniczna SEO',
              icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Integracja z social mediami i newsletterem',
              icon: <RiShareForwardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Darmowe, dedykowane szkolenie PDF z obsługi',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje blogów" category="blog" subtitle="Portfolio" />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <SectionPrices
          id="pricing-blogs"
          subtitle="Cennik blogów internetowych"
          title="Przykładowe pakiety"
          plans={
            [
              {
                name: 'Blog mały',
                platform: 'WordPress',
                price: '2 900 - 3 500 zł',
                description: 'Prosty blog firmowy na start. Stabilny, łatwy w obsłudze i przygotowany pod SEO, abyś mógł zacząć publikować i zdobywać klientów od pierwszego dnia.',
                features: [
                  'Do 30 artykułów - idealne na początek',
                  'SEO techniczne - w cenie',
                  'Wybrane integracje (newsletter, formularz)',
                  'Analityka GA4 i Search Console do monitorowania wyników',
                  'Optymalizacja prędkości i zabezpieczenia',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Prosty panel do samodzielnej edycji treści',
                  'Darmowe szkolenie PDF z obsługi bloga',
                ],
                btnOne: 'Zamów mały blog',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Blog średni',
                platform: 'WordPress / Webflow',
                price: '4 900 - 6 000 zł',
                description: 'Rozbudowany blog dla firm, które chcą regularnie publikować i budować wizerunek eksperta. Więcej treści, integracje marketingowe i większe możliwości rozwoju.',
                features: [
                  'Do 100 artykułów',
                  'SEO techniczne i redakcja treści - w pakiecie',
                  'Newsletter i wybrane integracje marketingowe (np. mailing)',
                  'Zaawansowana analityka i monitoring pozycji',
                  'Przejrzysta struktura treści i nawigacji',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do edycji treści - WordPress lub Webflow',
                  'Darmowe szkolenie PDF z obsługi bloga',
                ],
                btnOne: 'Zamów blog średni',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Blog premium',
                platform: 'Webflow CMS',
                price: '7 500 - 9 000 zł',
                description:
                  'Blog premium w technologii Webflow. Design klasy premium, płynne animacje i sekcje polecanych treści. Idealny dla marek, które stawiają na estetykę i pełen komfort edycji.',
                features: [
                  'Do 300 artykułów, rozbudowane kategorie',
                  'SEO techniczne - w cenie',
                  'Newsletter i wybrane integracje marketingowe (np. mailing)',
                  'Zaawansowana analityka i monitoring pozycji',
                  'Przejrzysta struktura treści i nawigacji',
                  'Zaawansowana optymalizacja szybkości i bezpieczeństwa',
                  'WCAG 2.1 AA + Deklaracja Dostępności',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Intuicyjny CMS do samodzielnego zarządzania treścią',
                  'Darmowe szkolenie PDF dla Ciebie i zespołu',
                ],
                btnOne: 'Zamów blog premium',
                btnOneLink: '#kontakt',
                lastPlan: true,
              },
            ] as SectionPricesPlan[]
          }
          note={
            {
              text: (
                <p className="text-[#5e5e5e]">
                  <strong className="text-[#080808]">Masz większe plany? </strong>
                  Tworzymy zaawansowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią najbardziej wymagające cele biznesowe.
                </p>
              ),
              ctaLabel: 'Porozmawiajmy o Twoim blogu',
              ctaLink: '#kontakt',
            } as Note
          }
        />

        <Gap variant="line" />

        <WorkSteps variant="web" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy Twój blog" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Blog" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/blogi-internetowe"
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
