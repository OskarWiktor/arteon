import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiFileTextLine, RiMessage2Line } from 'react-icons/ri';
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
  title: 'Projekt papieru firmowego | Arteon',
  description: 'Papier firmowy, który wzmacnia wizerunek w korespondencji. Szablony Word/PDF oraz wersje gotowe do druku.',
  keywords: ['projekt papieru firmowego', 'papier firmowy', 'szablon firmowy', 'projekt do druku', 'materiały firmowe'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-papieru-firmowego' },
  openGraph: {
    title: 'Projekt papieru firmowego | Arteon',
    description: 'Profesjonalny papier firmowy: szablony i pliki drukarskie zgodne z identyfikacją.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    serviceName: 'Projekt papieru firmowego',
    description: 'Papier firmowy i szablony korespondencji: układ zgodny z identyfikacją, wersje do druku i PDF/DOC.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-papieru-firmowego" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt papieru firmowego"
        description={<>Każda korespondencja może wzmacniać markę. Projektujemy papier firmowy z prawidłowymi szablonami Word/PDF i plikami do druku - czytelny, spójny i profesjonalny.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-papieru-firmowego`, label: 'Projekt papieru firmowego' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt papieru firmowego?">
          <p>
            <strong>Własny projekt papieru firmowego sprawia, że dokumenty wyglądają profesjonalnie od pierwszej sekundy.</strong> Oferty, umowy i pisma mają jeden, spójny wzór - logo, układ, dane
            kontaktowe - dzięki czemu autorytet Twojej marki wzrasta. Estetyczna oprawa zwiększa postrzeganą wiarygodność marki już w pierwszych sekundach
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry papier firmowy robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica korespondencję i porządkuje dane,</li>
            <li>Uspójnia wygląd ofert i umów w całej firmie,</li>
            <li>Podnosi zaufanie i ułatwia kontakt.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając papier firmowy?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny wygląd korespondencji',
              description: <>Projekt wzmacnia profesjonalny obraz firmy w każdym piśmie i wiadomości.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Szablony do codziennej pracy',
              description: <>Otrzymujesz gotowe do użycia pliki w wersji do druku oraz praktyczne szablony elektroniczne.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopasowanie danych i układu',
              description: <>Dbamy o czytelność, hierarchię informacji i zgodność z pozostałymi materiałami marki.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Szybka realizacja i poprawki',
              description: <>Ustalamy termin, dostarczamy projekt i wspólnie dopracowujemy szczegóły.</>,
              icon: <RiMessage2Line className="h-6 w-6 text-slate-500" />,
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
          title="Zamów projekt papieru firmowego"
          description="Przekaż co ma być umieszczone na papierze oraz preferowany format. Otrzymasz wycenę i termin realizacji."
          defaultSubject="Projekt papieru firmowego"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego"
          items={[
            {
              question: 'Ile kosztuje projekt papieru firmowego?',
              answer: 'Cena zależy od liczby wariantów (listy, koperty, dokumenty) i adaptacji do formatów. Po briefie przedstawimy wycenę odpowiadającą Twoim potrzebom.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu papieru firmowego?',
              answer: 'Zazwyczaj 3-7 dni roboczych, jeśli zakres jest standardowy. Dłuższe projekty z wieloma wariantami mogą wymagać więcej czasu.',
            },
            {
              question: 'W jakich formatach dostanę projekt papieru firmowego?',
              answer: 'Otrzymasz pliki PDF do druku z odpowiednimi spadami, wersje Word/PDF oraz pliki źródłowe.',
            },
            {
              question: 'Czy mogę zgłosić poprawki?',
              answer: 'Tak - w projekcie uwzględniamy rundy poprawek. Wspólnie dopracowujemy układ i szczegóły, aż efekt będzie spójny z Twoją wizją.',
            },
            {
              question: 'Czy papier firmowy będzie prawidłowo przygotowany do druku?',
              answer: 'Tak - pliki zostaną zoptymalizowane: spady, marginesy bezpieczeństwa, profile kolorów. Będą gotowe do przekazania do drukarni.',
            },
            {
              question: 'Czy można używać papieru firmowego cyfrowo?',
              answer: 'Tak - oprócz wersji do druku dostarczamy wersje elektroniczne (PDF), gotowe do wysyłki mailowej lub elektronicznej dokumentacji.',
            },
            {
              question: 'Czy projekt obejmuje koperty firmowe?',
              answer: 'Jeśli uwzględnisz koperty w briefie, do projektu dodamy ich wersję. Dzięki temu identyfikacja pozostaje spójna w całym korespondencyjnym obiegu.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt papieru firmowego?',
              answer: 'Tak - oferujemy opcję szybszej realizacji. Koszt i termin ustalamy indywidualnie przed rozpoczęciem projektu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Niech korespondencja pracuje na markę"
        description="Stworzymy papier firmowy, który wygląda profesjonalnie i czytelnie."
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
