import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiFolderOpenLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Projekt teczki ofertowej | Arteon',
  description: 'Teczka ofertowa podnosi prestiż spotkań i porządkuje dokumenty. Projekt spójny z identyfikacją wizualną Twojej marki.',
  keywords: ['projekt teczki ofertowej', 'teczka firmowa', 'materiały firmowe', 'projekt do druku', 'identyfikacja wizualna'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej' },
  openGraph: {
    title: 'Projekt teczki ofertowej | Arteon',
    description: 'Elegancka teczka ofertowa dopasowana do identyfikacji marki. Pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    serviceName: 'Projekt teczki ofertowej',
    description: 'Teczka firmowa spójna z identyfikacją: estetyka i funkcja, poprawne spady oraz makiety pod druk.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-teczki-ofertowej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt teczki ofertowej"
        description={<>Spotkania sprzedażowe wymagają porządku i klasy. Projektujemy teczki ofertowe spójne z identyfikacją - trwałe, eleganckie i funkcjonalne na prezentacje i dokumenty.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.png"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-teczki-ofertowej`, label: 'Projekt teczki ofertowej' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt teczki ofertowej?">
          <p>
            <strong>Własna firmowa teczka buduje zaufanie i robi ogromne wrażenie na odbiorcy.</strong> Klient dostaje Twoje materiały w jednej, eleganckiej formie - to ułatwia zapamiętanie marki oraz
            buduje jej autorytet. Materiały drukowane zostają w pamięci dłużej niż przekaz cyfrowy (mniejsze obciążenie poznawcze, wyższa zapamiętywalność)
            <a href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Profesjonalna teczka ofertowa buduje wiarygodność w kilka sekund.</strong> Estetyka i czytelność oprawy silnie wpływają na ocenę firmy - odbiorcy przypisują zaufanie na podstawie
            jakości materiałów
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Spójna estetyka, kolory i typografia wzmacniają rozpoznawalność firmy.
          </p>

          <br />

          <p>
            <strong>Estetyczna teczka ofertowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje dokumenty i ułatwia współpracę,</li>
            <li>Podkreśla profesjonalizm na prezentacji i po spotkaniu,</li>
            <li>Zostawia fizyczny ślad - klient łatwiej wraca do Twojej firmy.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając teczkę ofertową?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Prestiż na spotkaniach',
              description: <>Projekt podkreśla profesjonalizm Twojej firmy, dzięki czemu oferta prezentuje się klarownie.</>,
              icon: <RiFolderOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopasowanie do identyfikacji',
              description: <>Kolory, typografia i detale nawiązują do Twojej marki, budując spójny obraz firmy.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Praktyczne rozwiązania konstrukcyjne',
              description: <>Proponujemy układ kieszeni i wykończenia, które są trwałe i wygodne w użyciu.</>,
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki gotowe do druku',
              description: <>Dostarczamy finalne materiały do druku.</>,
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
          title="Zamów projekt teczki ofertowej"
          description="Powiedz czym się zajmujesz oraz opisz co ma się znaleźć na projekcie teczki. Wyślemy wycenę oraz rekomendację materiału."
          defaultSubject="Projekt teczki ofertowej"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej"
          items={[
            {
              question: 'Jak długo trwa realizacja teczki ofertowej?',
              answer: 'Realizacja trwa zwykle 5-10 dni roboczych, w zależności od liczby wersji i stopnia skomplikowania projektu.',
            },
            {
              question: 'W jakich formatach dostanę pliki teczki?',
              answer: 'Dostarczamy pliki do druku oraz pliki źródłowe.',
            },
            {
              question: 'Czy mogę zgłosić poprawki?',
              answer: 'Tak - w ramach projektu przewidziane są rundy poprawek. Doprecyzujemy detale wspólnie, by efekt był satysfakcjonujący.',
            },
            {
              question: 'Czy projekt teczki jest gotowy do druku?',
              answer: 'Tak - pliki będą wyposażone w spady, profile kolorów i standardy drukarskie. Możesz przekazać je bezpośrednio do drukarni.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt teczki?',
              answer: 'Tak - oferujemy opcję szybszej realizacji. Przed startem ustalamy termin i koszt dodatkowy.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Dodaj klasę każdemu spotkaniu"
        description="Przygotujemy teczkę, która porządkuje ofertę i podkreśla prestiż."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.png"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
