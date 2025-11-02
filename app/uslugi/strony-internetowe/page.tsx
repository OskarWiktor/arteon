import {
  RiShieldCheckLine,
  RiSpeedFill,
  RiBarChart2Fill,
  RiCodeSSlashFill,
  RiArticleLine,
  RiBookOpenLine,
  RiDeviceLine,
  RiPencilRuler2Line,
  RiKey2Line,
  RiLifebuoyLine,
  RiMessage2Line,
  RiMoneyDollarCircleLine,
  RiBrushLine,
} from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { GoLaw } from 'react-icons/go';
import SectionPrices, { SectionPricesPlan, Note } from '@/components/ui/sections/SectionPrices';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';

export const metadata = {
  title: 'Strony internetowe - projekt i wdrożenie | Arteon',
  description: 'Szybkie, czytelne i dostępne strony. Widoczność w Google i treści w standardzie. Gwarancja 60 dni i jasne rozliczenia.',
  keywords: ['strony internetowe', 'tworzenie stron', 'projektowanie stron www', 'strona firmowa', 'widoczność w Google', 'WCAG'],
  alternates: { canonical: '/uslugi/strony-internetowe' },
  openGraph: {
    title: 'Strony internetowe - projekt i wdrożenie | Arteon',
    description: 'Szybkie, czytelne i dostępne strony. Widoczność w Google i treści w standardzie. Gwarancja 60 dni i jasne rozliczenia.',
    url: 'https://www.arteonagency.pl/uslugi/strony-internetowe',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/strony-internetowe',
    serviceName: 'Tworzenie stron internetowych',
    description: 'Projektujemy i wdrażamy szybkie, dostępne strony firmowe, które sprzedają. Prosta nawigacja, SEO-ready treści i opieka po wdrożeniu.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-strony-internetowe" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Strony internetowe"
        description={
          <>
            Przyciągnij nowych klientów dzięki własnej <strong>stronie internetowej</strong>. Zbuduj profesjonalny wizerunek w sieci i zwiększą swoją widoczność
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Nasze realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg12.webp"
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

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/strony-internetowe`, label: 'Strony internetowe' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz dzięki stronie internetowej?">
          <p>
            <strong>Własna strona internetowa daje Twojej firmie nowe źródło klientów.</strong> Aż 76% osób, szukających lokalnie usług w Google, trafia do siedziby firmy w przeciągu 24 godzin a 28%
            tych wyszukań, kończy się zakupem{' '}
            <a target="_blank" className="inline-link" href="https://www.thinkwithgoogle.com/consumer-insights/consumer-trends/local-search-conversion-statistics/">
              (źródło)
            </a>
            . Firmowa <strong>strona internetowa pracuje na Twój sukces 24/7</strong>: pokazuje Twoją ofertę, buduje zaufanie, zbiera zapytania - nawet gdy masz wyciszony telefon
          </p>
          <br />
          <p>
            84% konsumentów uważa firmę z własną stroną internetową za bardziej wiarygodną{' '}
            <a target="_blank" className="inline-link" href="https://blog.verisign.com/getting-online/five-reasons-every-small-business-needs-a-website/">
              (źródło)
            </a>{' '}
            ,a aż 56% osób nie ufa firmie, która nie posiada własnej strony{' '}
            <a target="_blank" className="inline-link" href="https://www.verisign.com/assets/Research-small-business-september2013.pdf">
              (źródło)
            </a>
            . <strong>Dobra strona internetowa robi</strong> za Ciebie aż <strong>3 rzeczy naraz</strong>:
          </p>
          <br />
          <ul className="ml-5 list-disc">
            <li>Odnajduje potencjalnych klientów,</li>
            <li>Zapoznaje ich z Twoją ofertą,</li>
            <li>Pokazuje, jak skorzystać z Twojej oferty,</li>
          </ul>
          <br />
          <p>
            Trend rynkowy pokazuje jasno: {'>'}70% małych firm deklaruje wzrost przychodów po uruchomieniu strony internetowej{' '}
            <a target="_blank" className="inline-link" href="https://www.networksolutions.com/blog/small-business-website-statistics/">
              (źródło)
            </a>
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz tworząc stronę internetową z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Indywidualny projekt graficzny strony',
              description: <>Wygląd, który od pierwszych sekund buduje zaufanie i wyróżnia Twoją stronę na tle konkurencji</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Redakcję treści dla lepszej pozycji w Google',
              description: <>Teksty, które jasno wyjaśniają ofertę i prowadzą do kontaktu</>,
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dobór i obróbka zdjęć',
              description: <>Pomagamy wybrać spójne zdjęcia oraz dopasowujemy je do Twojej strony: kadry, tło, rozmiary, waga.</>,
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne przy politykach i regulaminach',
              description: <>Przeprowadzamy Cię przez wszelkie wymogi prawne</>,
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Stronę dostosowana do różnych urządzeń',
              description: <>Czytelność oraz szybkość na każdym urządzeniu</>,
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dedykowane szkolenie PDF z obsługi strony',
              description: <>Proste instrukcje, stworzone tak, abyś samodzielnie mógł edytować stronę</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: <>Dostajesz wycenę z jasnym zakresem, informujemy Cię na bieżąco, ile coś kosztuje</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Transparentna współpraca na bieżąco',
              description: <>Informujemy Cię regularnie o postępach prac nad Twoją stroną</>,
              icon: <RiMessage2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełną własność i dostępy',
              description: <>Przekazujemy Ci wszystkie konta oraz hasła - w trakcie oraz po zakończeniu prac</>,
              icon: <RiKey2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dalsze wsparcie + 2 miesiące gwarancji',
              description: <>Po publikacji pomagamy w dalszym rozwoju strony internetowej. Ewentualne błędy poprawiamy w ramach gwarancji</>,
              icon: <RiLifebuoyLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Nasze wyróżnione realizacje stron internetowych" category="strona" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionPrices
          id="pricing-web"
          subtitle="Przykładowe realizacje"
          title="Cennik stron internetowych"
          plans={
            [
              {
                name: 'Strona wizytówka WordPress',
                price: '1 600 - 2 000 zł',
                description: 'Szybki start. Jednostronicowa witryna z nowoczesnym wyglądem',
                features: [
                  'Jedna strona z klarowną strukturą i sekcjami dopasowanymi do biznesu',
                  'Treści opracowane pod SEO - w cenie',
                  'Wygląd dostosowany do charakteru marki i grupy odbiorczej',
                  'Formularz kontaktowy + wybrane integracje / funkcje',
                  'Optymalizacja prędkości ładowania i bezpieczeństwa',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel umożliwiający samodzielną edycję treści',
                  'Darmowe szkolenie PDF z obsługi strony',
                ],
                btnOne: 'Zamów stronę wizytówkę',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Strona firmowa WordPress',
                price: '3 500 - 5 500 zł',
                description: 'Kompletna strona dla firmy. Zawiera od 6 do 10 podstron. Idealna dla małych i średnich biznesów.',
                features: [
                  '2-6 podstron dopasowanych do oferty i usług',
                  'Strategia treści oraz analiza konkurencji w cenie',
                  'Spójna architektura informacji oraz wygląd',
                  'SEO techniczne i redakcja treści w cenie',
                  'Formularze, mapy, wybrane integracje / funkcje',
                  'Optymalizacja prędkości ładowania i bezpieczeństwa',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel umożliwiający samodzielną edycję treści',
                  'Darmowe szkolenie PDF z obsługi strony',
                ],
                btnOne: 'Zamów stronę firmową',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Strona firmowa Premium',
                platform: 'Webflow',
                price: '5 500 - 8 000 zł',
                description: 'Rozwiązanie premium dla marek, które stawiają na wizerunek. Zgodność z międzynarodowymi przepisami o dostępności',
                features: [
                  '6-14 podstron',
                  'Projekt graficzny strony premium - więcej możliwości dzięki technologii',
                  'SEO techniczne i redakcja treści w cenie',
                  'Zgodność z WCAG 2.1 AA + Deklaracja Dostępności',
                  'Wybrane integracje oraz dedykowane funkcjonalności',
                  'Zaawansowana optymalizacja szybkości i bezpieczeństwa',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Możliwość samodzielnej edycji strony',
                  'Darmowe szkolenie PDF z obsługi strony',
                ],
                btnOne: 'Zamów stronę premium',
                btnOneLink: '#kontakt',
                lastPlan: true,
              },
            ] as SectionPricesPlan[]
          }
          note={
            {
              text: (
                <p className="text-[#5e5e5e]">
                  <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
                  Tworzymy zaawansowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na miarę, które spełnią najbardziej wymagające cele biznesowe.
                </p>
              ),
              ctaLabel: 'Porozmawiajmy o Twoim projekcie',
              ctaLink: '#kontakt',
            } as Note
          }
        />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <WorkSteps variant="web" />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy Twoją stronę internetową" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę strony internetowej" defaultSubject="Strona internetowa" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/strony-internetowe"
          items={[
            {
              question: 'Ile kosztuje stworzenie strony internetowej?',
              answer:
                'Cena strony internetowej zależy od tego, co dokładnie ma się na niej znaleźć. Patrzymy na: liczbę podstron, projekt graficzny, treści, zdjęcia oraz dodatkowe funkcje (np. formularze, rezerwacje). Koszt stworzenia prostej, jednostronicowej strony zaczyna się od 1600 zł brutto',
            },
            {
              question: 'Jak długo trwa stworzenie strony internetowej?',
              answer: 'Standardowo stworzenie strony internetowej zajmuje od 5 do 15 dni roboczych, w zależności od liczby podstron oraz potrzebnych funkcjonalności.',
            },
            {
              question: 'ile kosztuje roczne utrzymanie strony internetowej',
              answer:
                'Koszt utrzymania strony internetowej jest zależy między innymi od ceny domeny ( adresu URL strony ) oraz ceny hostingu ( wynajmowanego miejsca na serwerze ). Przeciętne utrzymanie strony internetowej zaczyna się od 300 zł rocznie',
            },
            {
              question: 'Co powinna zawierać dobra strona internetowa?',
              answer:
                'Jasną ofertę, sekcje z korzyściami, dowody (realizacje, opinie), prosty kontakt oraz wygodną wersję na telefon. Dodatkowo: podstawy prawne (politykę prywatności, cookies, regulaminy), wysoką prędkość ładowania oraz optymalizację pod wyszukiwarki',
            },
            {
              question: 'Czy zajmujecie się tworzeniem treści na strony internetowe?',
              answer: 'Tak. Możemy stworzyć od podstaw treści i grafiki, dopracować Twoje materiały oraz wskazać, jakie treści najlepiej zadziałają w Twojej branży.',
            },
            {
              question: 'Czy mogę później samodzielnie edytować treść strony internetowej?',
              answer:
                'Tak. Gwarantujemy darmowe szkolenie z edycji w formie PDF po zakończeniu prac. Pokażemy, jak dodać nową usługę, wpis na blog i zaktualizować cennik. Oferujemy też stałą współpracę nad rozwojem witryny.',
            },
            {
              question: 'Czy strona internetowa będzie widoczna w Google?',
              answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania witryny',
            },
            {
              question: 'Jak mierzyć skuteczność strony internetowej?',
              answer: 'Podstawą jest GSC (Google Search Console). To narzędzie pozwala śledzić zapytania użytkowników powiązane z Twoją stroną oraz monitorować pozycje i indeksację.',
            },
            {
              question: 'Czy mogę zgłosić poprawki strony internetowej po jej stworzeniu?',
              answer: 'Tak, jeśli cokolwiek na stronie internetowej będzie wadliwe, poprawimy to bez dodatkowych kosztów',
            },
            {
              question: 'Czy po publikacji pomagacie w rozwoju strony internetowe?',
              answer: 'Tak, możemy przeanalizować Twoją branżę i przygotować jasny plan rozwoju, który przełoży się na wyższą pozycję w Google oraz większą liczbę klientów',
            },
            {
              question: 'Nie znam się na technologii, czy mogę liczyć na pomoc?',
              answer: 'Tak, uwielbiamy pomagać i edukować - prowadzimy cały proces w przystępny oraz transparentny sposób, objaśniając wszystkie kroku bez technologicznego żargonu',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zbudujmy stronę, która pracuje na Twoją markę"
        description="Pokaż się w sieci z profesjonalnym wizerunkiem"
        primaryLabel="Wyceń projekt"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg12.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
