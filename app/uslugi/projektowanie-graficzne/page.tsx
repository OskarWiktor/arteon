import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiImageLine, RiPaletteLine, RiShoppingBag3Line, RiStackLine, RiVideoLine, RiLayoutMasonryLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoColorPalette } from 'react-icons/io5';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projektowanie graficzne - logo, identyfikacja, materiały | Arteon',
  description: 'Logo i system identyfikacji. Materiały do druku i online. Spójność i prestiż od pierwszego kontaktu.',
  keywords: ['projektowanie logo', 'identyfikacja wizualna', 'grafika na stronę', 'materiały drukowane', 'brandbook'],
  alternates: { canonical: '/uslugi/projektowanie-graficzne' },
  openGraph: {
    title: 'Projektowanie graficzne - logo, identyfikacja, materiały | Arteon',
    description: 'Logo i system identyfikacji. Materiały do druku i online. Spójność i prestiż od pierwszego kontaktu.',
    url: 'https://www.arteonagency.pl/uslugi/projektowanie-graficzne',
    type: 'website',
  },
} as const;

export default function OfferDesignPage() {
  return (
    <>
      <HeroBanner
        title="Projektowanie graficzne"
        description={<>Stwórz unikatowy wizerunek swojej firmy, przy pomocy dedykowanej grafiki</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
        buttonSecond="Portfolio"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Spójność marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
        ]}
      />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/projektowanie-graficzne`, label: 'Projektowanie graficzne' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <FeatureGrid
          title="Co zyskujesz realizując projekt graficzny z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Projekt logo dopasowany do archetypu marki',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełny branding: palety kolorów, typografie, style',
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójne szablony do social mediów',
              icon: <RiStackLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Profesjonalna obróbka zdjęć i grafik pod www',
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Materiały video i rolki promocyjne',
              icon: <RiVideoLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Design materiałów drukowanych (wizytówki, ulotki, banery)',
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Grafiki na ubrania i gadżety firmowe',
              icon: <RiShoppingBag3Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Nowoczesne makiety stron w Figmie',
              icon: <RiPaletteLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <SectionSteps
          title="Oferta grafiki"
          subtitle="Przejrzyście i konkretnie"
          description="Wizualny fundament Twojej marki - od logo po ubrania firmowe."
          items={[
            {
              icon: <RiPencilRuler2Line className="h-8 w-8" />,
              title: 'Identyfikacja marki',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Sygnety, loga, kolory i typografie</li>
                    <li>Wizytówki, ulotki, foldery i katalogi</li>
                    <li>Ubrania firmowe oraz gadżety</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Wyceń projekt
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutMasonryLine className="h-8 w-8" />,
              title: 'Strony',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Makiety układu i wyglądu strony</li>
                    <li>Retusz oraz optymalizacje grafik</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zapytaj o wycenę
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiStackLine className="h-8 w-8" />,
              title: 'Social media',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Posty, stories i karuzele</li>
                    <li>Szablony dla spójności marki</li>
                    <li>Montaż filmów</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Wyceń projekt
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy wizerunek Twojej firmy" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę projektu graficznego" defaultSubject="Projektowanie graficzne" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projektowanie-graficzne"
          items={[
            {
              question: 'Czy mogę zamówić cały pakiet identyfikacji wizualnej?',
              answer: 'Tak, oferujemy kompleksowe pakiety zawierające logo, kolorystykę, typografię, wzory grafik i podstawowe zastosowania (social media, druki, www)',
            },
            {
              question: 'Jak długo trwa realizacja projektu graficznego?',
              answer: 'Prosty projekt graficzny (np. wizytówka, post) realizujemy do 5 dni roboczych. Logo i identyfikacja wizualna - do 15 dni roboczych. Konkretne terminy ustalamy indywidualnie',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer: 'Tak, w każdej usłudze graficznej przewidziane są 1-2 rundy poprawek. Dążymy do tego, by efekt końcowy w 100% spełniał Twoje oczekiwania',
            },
            {
              question: 'W jakich formatach otrzymam pliki?',
              answer: 'Dostarczamy pliki wektorowe, rastrowe oraz pliki źródłowe',
            },
            {
              question: 'Czy mogę liczyć na pomoc w wyborze stylu graficznego?',
              answer: 'Tak, wspólnie ustalamy kierunek estetyczny projektu. Jeśli nie masz konkretnej wizji, zaproponujemy spójne i nowoczesne rozwiązania pasujące do Twojej marki',
            },
            {
              question: 'Czy mogę zlecić stałą współpracę graficzną?',
              answer: 'Tak, oferujemy pakiety miesięczne lub długofalową obsługę graficzną marki - idealne rozwiązanie, jeśli potrzebujesz regularnych materiałów',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Nadaj marce wyjątkową tożsamość"
        description="Projektujemy logo, identyfikację i materiały, które zostają w pamięci"
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
    </>
  );
}
