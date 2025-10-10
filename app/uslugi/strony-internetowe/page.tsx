import { RiShieldCheckLine, RiSpeedFill, RiBarChart2Fill, RiCodeSSlashFill, RiArticleLine, RiBookOpenLine, RiDatabase2Line, RiDeviceLine, RiPencilRuler2Line } from 'react-icons/ri';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import WebPrices from '@/components/sections/prices/WebPrices';
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
import { IoAccessibility } from 'react-icons/io5';

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

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Strony internetowe"
        description={
          <>
            Tworzymy strony WWW, które łączą estetykę, technologię i psychologię. <strong>Standard globalnych marek</strong> - dla Twojego biznesu.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
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
        <Gap size="sm" />

        <FeatureGrid
          title="Co dostajesz"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Indywidualny projekt graficzny',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Redakcja treści dla lepszej konwersji i SEO',
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
              icon: <IoAccessibility className="h-5 w-5 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne: polityki i regulaminy',
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Bezpieczeństwo i certyfikaty SSL',
              icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna Responsywność na różnych urządzeniach',
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Łatwe zarządzanie treścią (CMS)',
              icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Darmowe, dedykowane szkolenie PDF z obsługi',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje stron internetowych" category="strona" subtitle="Portfolio" />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <WebPrices />

        <Gap variant="line" />

        <WorkSteps variant="web" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />

        <ContactForm title="Zamów stronę internetową" description="Opisz swoją wizję, potrzeby i cele a my przygotujemy bezpłatną wycenę" defaultSubject="Strona internetowa" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/strony-internetowe"
          items={[
            {
              question: 'Ile kosztuje stworzenie strony internetowej?',
              answer:
                'Cena strony internetowej zależy od tego co dokładnie ma się na niej znaleść. Patrzymy na: liczbę podstron, projekt graficzny witryny, treści, zdjęcia oraz dodatkowe funkcje (np. formularze, rezerwacje). Koszt stworzenia prostej, jednostronicowej strony zaczyna się od 1600 zł brutto',
            },
            {
              question: 'Jak długo trwa stworzenie strony internetowej?',
              answer: 'Standardowo stworzenie strony internetowej zajmuje od 5 do 15 dni roboczych, w zależności od ilości podstron oraz wszelkich funkcjonalności',
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
              answer: 'Tak, możemy stworzyć od podstaw treści oraz grafiki lub dopracować Twoje materiały',
            },
            {
              question: 'Czy mogę później samodzielnie edytować treść strony internetowej?',
              answer: 'Tak, gwarantujemy darmowe szkolenie z edycji, w formie PDF po zakończeniu prac',
            },
            {
              question: 'Czy strona internetowa będzie widoczna w Google?',
              answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania witryny',
            },
            {
              question: 'Czy mogę zgłosić poprawki strony internetowej po jej stworzeniu?',
              answer: 'Tak, jeśli cokolwiek na stronie internetowej będzie wadliwe, poprawimy to bez dodatkowych kosztów',
            },
            {
              question: 'Czy po publikacji pomagacie w rozwoju strony internetowe?',
              answer: 'Tak, możemy przeanalizować Twoją branże i przygotować jasny plan rozwoju, który przełoży się na wyższą pozycję w Google oraz większą ilość klientów',
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
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg12.webp"
        overlay="black"
      />
    </>
  );
}
