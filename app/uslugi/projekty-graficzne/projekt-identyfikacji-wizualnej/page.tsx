import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';

export const metadata = {
  title: 'Identyfikacja wizualna | Arteon',
  description: 'Kompletny system wizualny marki: logo, kolory, typografia i materiały firmowe. Spójność w każdym punkcie styku.',
  keywords: ['identyfikacja wizualna', 'system identyfikacji', 'brandbook', 'wizualna tożsamość marki', 'projekt wizerunku'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  openGraph: {
    title: 'Identyfikacja wizualna | Arteon',
    description: 'Spójny system identyfikacji wizualnej dla Twojej marki. Od logo po materiały firmowe.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="xxx"
        description={<>xxx</>}
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

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`, label: 'Projekt identyfikacji wizualnej' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając identyfikację wizualną?">
          <p>
            <strong>Spójny system wizualny porządkuje każdy kontakt z Twoją marką.</strong> Firmy, które konsekwentnie trzymają identyfikację, notują średnio
            <strong> 10-20% wyższe przychody</strong>
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            . Ten sam styl działa na stronie, w ofertach, w druku i w social mediach.
          </p>

          <br />

          <p>
            <strong>Jakość oprawy przekłada się na zaufanie.</strong> Nawet <strong>~75%</strong> odbiorców ocenia wiarygodność firmy po wyglądzie materiałów i strony
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            . Czytelna typografia i porządek wizualny ułatwiają decyzję o kontakcie.
          </p>

          <br />

          <p>
            <strong>Kolor i konsekwencja zwiększają rozpoznawalność.</strong> Zastosowanie spójnych barw potrafi podnieść zapamiętywanie marki nawet o <strong>~80%</strong>
            <a href="https://www.xerox.com/en-us/insights/color" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (źródło)
            </a>
            . Klient szybciej kojarzy, z kim rozmawia.
          </p>

          <br />

          <p>
            <strong>Dobra identyfikacja wizualna robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica komunikację w całej firmie,</li>
            <li>Przyspiesza tworzenie materiałów i zmniejsza liczbę poprawek,</li>
            <li>Podnosi rozpoznawalność i ułatwia budowanie zaufania,</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz realizując projekt graficzny xxx z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'xxx',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy wizerunek Twojej firmy" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę projektu graficznego" defaultSubject="Projekty graficzne" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
          items={[
            {
              question: 'xxx',
              answer: 'xxx',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner title="xxx" description="xxx" primaryLabel="Skontaktuj się" primaryLink="/kontakt" backgroundImage="/assets/bg/abstract-bg15.webp" overlay="black" />
    </>
  );
}
