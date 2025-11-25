import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiFileTextLine, RiIdCardLine, RiPantoneLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Projekt identyfikacji wizualnej | Arteon',
  description: 'Kompletny system wizualny marki: logo, kolory, typografia i materiały firmowe. Spójność w każdym punkcie styku.',
  keywords: ['Projekt identyfikacji wizualnej', 'system identyfikacji', 'brandbook', 'wizualna tożsamość marki', 'projekt wizerunku'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  openGraph: {
    title: 'Projekt identyfikacji wizualnej | Arteon',
    description: 'Spójny system identyfikacji wizualnej dla Twojej marki. Od logo po materiały firmowe.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    serviceName: 'Projekt identyfikacji wizualnej',
    description: 'Kompletna identyfikacja: logo, paleta, typografia i wzory. Podstawowa księga znaku i spójność we wszystkich kanałach.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-identyfikacji-wizualnej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt identyfikacji wizualnej"
        description={
          <>Spójny system wizualny zwiększa wiarygodność i rozpoznawalność. Projektujemy identyfikację: logo, kolory, typografia i materiały firmowe - gotowe do wdrożenia w całej firmie.</>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
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
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Ten sam styl działa na stronie, w ofertach, w druku i w social mediach.
          </p>

          <br />

          <p>
            <strong>Jakość oprawy przekłada się na zaufanie.</strong> Nawet <strong>~75%</strong> odbiorców ocenia wiarygodność firmy po wyglądzie materiałów i strony
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Czytelna typografia i porządek wizualny ułatwiają decyzję o kontakcie.
          </p>

          <br />

          <p>
            <strong>Kolor i konsekwencja zwiększają rozpoznawalność.</strong> Zastosowanie spójnych barw potrafi podnieść zapamiętywanie marki nawet o <strong>~80%</strong>
            <a href="https://www.xerox.com/en-us/insights/color" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
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
          title="Co zyskujesz zamawiając identyfikację wizualną?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny system marki',
              description: <>Projektujemy logo, kolory i typografię tak, aby wszystkie materiały działały razem.</>,
              icon: <RiPantoneLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Materiały do codziennej komunikacji',
              description: <>Przygotowujemy podstawowe wzory: wizytówki, papiery firmowe i grafiki do prezentacji marki.</>,
              icon: <RiIdCardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Proste zasady stosowania',
              description: <>Dostajesz krótkie wytyczne, które ułatwiają wdrożenie identyfikacji w całej firmie.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna gotowość do druku i online',
              description: <>Otrzymujesz komplet plików do codziennej pracy i wdrożeń bez dodatkowych przeróbek.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów identyfikację wizualną"
          description="Napisz, jakiego zakresu identyfikacji potrzebujesz (logo, kolory, typografia, materiały) oraz czym się zajmujesz. Otrzymasz wycenę i harmonogram prac."
          defaultSubject="Identyfikacja wizualna"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
          items={[
            {
              question: 'Ile kosztuje identyfikacja wizualna?',
              answer: 'Cena zależy od zakresu prac: logo, paleta kolorów, typografia, materiały firmowe i brandbook. Po briefie otrzymasz indywidualną wycenę dopasowaną do potrzeb Twojej marki.',
            },
            {
              question: 'Jak długo trwa stworzenie identyfikacji wizualnej?',
              answer: 'Standardowo projekt trwa od 10 do 20 dni roboczych, w zależności od liczby elementów. Terminy zawsze ustalamy indywidualnie.',
            },
            {
              question: 'Co zawiera kompletna identyfikacja wizualna?',
              answer: 'Zazwyczaj: logo, kolory, typografię, wzory wizytówek, papierów firmowych, teczek i grafik do social mediów. Możemy też rozszerzyć projekt o brandbook i szablony online.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer: 'Tak - każda identyfikacja obejmuje rundy poprawek. Wspólnie dopracowujemy układ, kolorystykę i styl, aż efekt będzie spójny z wizją marki.',
            },
            {
              question: 'Czy mogę zamówić samo logo bez całego systemu?',
              answer: 'Tak - projekt logo może być osobną usługą. W dowolnym momencie możesz rozszerzyć go o pełną identyfikację wizualną.',
            },
            {
              question: 'Czy dostanę pliki gotowe do druku i internetu?',
              answer: 'Tak - przekazujemy pliki wektorowe i rastrowe, wersje do druku, internetu i mediów społecznościowych oraz mini-księgę znaku z zasadami użycia.',
            },
            {
              question: 'Czy mogę liczyć na doradztwo w wyborze stylu identyfikacji?',
              answer: 'Tak - przedstawiamy propozycje stylistyczne i moodboardy, które pomogą Ci określić kierunek wizualny marki.',
            },
            {
              question: 'Czy mogę zamówić brandbook do identyfikacji?',
              answer: 'Tak - opracowujemy brandbook z wytycznymi: logo, kolory, typografia, siatki, przykłady użycia. To podstawa spójnej komunikacji w firmie.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABanner
        title="Uspójnij obraz marki"
        description="Zbudujemy system, który wzmacnia rozpoznawalność i wiarygodność."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
