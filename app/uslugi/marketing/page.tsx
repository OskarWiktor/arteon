import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiAdvertisementLine,
  RiBarChart2Fill,
  RiBarChart2Line,
  RiCustomerService2Line,
  RiFileList2Line,
  RiLightbulbFlashLine,
  RiLightbulbLine,
  RiLineChartLine,
  RiMegaphoneLine,
  RiRocketLine,
  RiSearchEyeLine,
  RiSearchLine,
  RiShareForwardLine,
  RiShieldCheckLine,
  RiUserHeartLine,
} from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoAnalytics } from 'react-icons/io5';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';

export const metadata = {
  title: 'Marketing internetowy - reklamy i widoczność w Google | Arteon',
  description: 'Strategia, kreacje i kampanie. Więcej zapytań i sprzedaży dzięki reklamom i mądrej widoczności.',
  keywords: ['marketing internetowy', 'reklamy Google', 'reklamy Meta', 'kampanie online', 'widoczność w Google', 'strategie marketingowe'],
  alternates: { canonical: '/uslugi/marketing' },
  openGraph: {
    title: 'Marketing internetowy - reklamy i widoczność w Google | Arteon',
    description: 'Strategia, kreacje i kampanie. Więcej zapytań i sprzedaży dzięki reklamom i mądrej widoczności.',
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

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/marketing`, label: 'Marketing' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <FeatureGrid
          title="Co dostajesz"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Kompleksowe SEO strony, sklepu i bloga',
              icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Reklamy Google, Facebook i Instagram',
              icon: <RiAdvertisementLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Audyty techniczne, prawne i WCAG 2.1 AA',
              icon: <RiSearchEyeLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Analiza konkurencji',
              icon: <IoAnalytics className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Automatyzacja prowadzenia social mediów',
              icon: <RiRocketLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Branding budujący emocje i transformację klienta',
              icon: <RiLightbulbLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Oferty sprzedażowe według schematu Why → How → What',
              icon: <RiLineChartLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Oferta marketingu"
          subtitle="Skutecznie i przejrzyście"
          description="SEO, reklamy i social - opisane prostym językiem, oparte na danych i emocjach. Efekt zawsze widoczny."
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'SEO: audyt',
              subtitle: 'od 800 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Analizujemy Twoją stronę i konkurencję</li>
                    <li>Sprawdzamy zgodność z prawem i dostępnością</li>
                    <li>Tworzymy jasny plan poprawy widoczności</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zamów audyt SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'SEO: optymalizacja',
              subtitle: 'od 600 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Sprawdzamy, czy Twoja strona jest łatwa do znalezienia</li>
                    <li>Poprawiamy treści i opisy tak, by przyciągały klientów</li>
                    <li>Poprawiamy technicznie Twoją witrynę</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zamów optymalizację SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiBarChart2Line className="h-8 w-8" />,
              title: 'SEO: rozwój',
              subtitle: 'od 1 200 zł / mies.',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Piszemy i publikujemy treści, które podnoszą pozycję strony</li>
                    <li>Budujemy sieć wartościowych linków</li>
                    <li>Co miesiąc otrzymujesz raport i jasne rekomendacje</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zapytaj o abonament SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiMegaphoneLine className="h-8 w-8" />,
              title: 'Reklamy',
              subtitle: 'od 600 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Konfigurujemy reklamy w Google i Meta</li>
                    <li>Tworzymy zestaw dopasowanych grafik i treści</li>
                    <li>Ustawiamy śledzenie wyników i zdarzeń</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Uruchom kampanię
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: 'Social media: prowadzenie',
              subtitle: 'od 1 100 zł / mies.',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Planujemy i publikujemy posty, stories oraz rolki</li>
                    <li>Przygotowujemy scenariusze i montujemy filmiki</li>
                    <li>Dbamy o regularność i kontakt z odbiorcami</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Poproś o plan publikacji
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiUserHeartLine className="h-8 w-8" />,
              title: 'Branding psychologiczny',
              subtitle: 'od 900 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Określamy archetyp marki i jej osobowość</li>
                    <li>Budujemy język i komunikację, która trafia w emocje</li>
                    <li>Tworzymy oferty z których klienci chcą skorzystać</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Ustal kierunek marki
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <WorkSteps variant="marketing" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Postaw na skuteczny marketing" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Marketing" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing"
          items={[
            {
              question: 'Czy mogę zlecić jednorazową kampanię?',
              answer: 'Tak, możesz zlecić kampanię jednorazową (np. promującą konkretny produkt, usługę lub wydarzenie). Oferujemy też stałą obsługę marketingową',
            },
            {
              question: 'Jak długo trwa pozycjonowanie strony?',
              answer: 'SEO to proces. Pierwsze efekty mogą pojawić się po 1-3 miesiącach, ale stabilne wzrosty zwykle buduje się przez 6-12 miesięcy',
            },
            {
              question: 'Czy zajmujecie się prowadzeniem kampanii w social media?',
              answer: 'Tak, prowadzimy kampanie reklamowe na Facebooku i Instagramie - od przygotowania grafik i tekstów po konfigurację, optymalizację i raportowanie',
            },
            {
              question: 'Czy dostanę raport z wynikami kampanii?',
              answer: 'Tak, po zakończeniu kampanii (lub co miesiąc w przypadku stałej współpracy) otrzymujesz jasny raport: zasięgi, kliknięcia, koszt pozyskania, konwersje',
            },
            {
              question: 'Czy mogę połączyć SEO i kampanie płatne?',
              answer: 'Tak, to najlepsze rozwiązanie. SEO buduje długofalową widoczność, a płatne kampanie zapewniają szybki ruch',
            },
            {
              question: 'Czy prowadzicie marketing dla sklepów internetowych?',
              answer: 'Tak, mamy doświadczenie w promocji e-commerce - prowadzimy kampanie produktowe (Google Merchant), remarketing, kampanie sezonowe i sprzedażowe',
            },
            {
              question: 'Czy mogę liczyć na pomoc? Nie wiem, od czego zacząć.',
              answer: 'Tak, oferujemy bezpłatną konsultację startową - pomożemy określić cele, kanały i optymalną strategię, dopasowaną do Twojej branży i budżetu',
            },
          ]}
        />

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
