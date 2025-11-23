import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiLayoutLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Szablony postów social media | Arteon',
  description: 'Projektujemy spójne szablony postów do social mediów. Gotowe, edytowalne pliki ułatwiające regularną publikację.',
  keywords: ['szablony postów social media', 'szablony postów instagram', 'grafiki do social media', 'projekt szablonów facebook', 'szablony do reels i stories'],
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media' },
  openGraph: {
    title: 'Szablony postów social media | Arteon',
    description: 'Projektujemy spójne szablony postów do social mediów. Gotowe, edytowalne pliki ułatwiające regularną publikację.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/szablony-postow-social-media',
    serviceName: 'Szablony postów social media',
    description: 'Szablony postów do social mediów: spójne z marką, łatwe do edycji, przygotowane pod wybrane media społecznościowe. Gotowe zestawy + instrukcja użycia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-szablony-postow-social-media" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignSzablonyPostowPage() {
  return (
    <>
      <HeroBanner
        title="Szablony postów social media"
        description={
          <>
            Przyspiesz publikacje zachowując spójny i profesjonalny styl swojej marki. Projektujemy edytowalne szablony postów do Instagrama, Facebooka, LinkedIna i TikToka – gotowe do szybkiej edycji
            i użycia.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/projects/arteon-baner-szablon-social-media-msc-mockup.png"
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
        fourth={{
          href: `/uslugi/projekty-graficzne/szablony-postow-social-media`,
          label: 'Szablony postów social media',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz dzięki szablonom postów?">
          <p>
            <strong>Stały, rozpoznawalny styl</strong> – Szablony pomagają utrzymać wspólny wygląd całej Twojej komunikacji, dzięki czemu odbiorca łatwiej zapamięta Twoją markę, a profil zyska
            profesjonalny wygląd.
          </p>

          <br />

          <p>
            <strong>Oszczędność czasu</strong> – edytowalne pliki pozwalają przygotować serię postów w kilkanaście minut. Otrzymujesz gotowe układy z czytelną hierarchię treści.
          </p>

          <br />

          <p>
            <strong>Szablony robią trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Podnoszą zaufanie,</li>
            <li>Przyspieszają przygotowanie treści,</li>
            <li>Wzmacniają rozpoznawalność marki.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dostajesz w ramach usługi?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójność',
              description: <>Dopasowujemy kolory, typografię i styl do Twojej marki lub tworzymy styl od zera, zgodnie z Twoją grupą odbiorczą.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Edytowalne pliki',
              description: <>Otrzymujesz pliki, które z łatwością możesz edytować wraz z instrukcją jak to zrobić.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'System stylistyczny',
              description: <>Projektujemy cały system pod różne typy publikacji między innymi pod: post informacyjny, oferte, opinie, poradnik, cytat czy okładkę wideo.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
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

        <ContactForm title="Zamów szablony postów" description="Napisz czym się zajmujesz a my stworzymy wycenę" defaultSubject="Szablony postów social media" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/szablony-postow-social-media"
          title="Najczęstsze pytania o szablony postów"
          items={[
            {
              question: 'W jakich programach dostanę szablony postów?',
              answer: 'Standardowo przekazujemy pliki w Figmie lub Canvie, są to wygodne i proste narzędzia dzięki, którym z łatwością edytujesz tekst czy wymienisz zdjęcia.',
            },
            {
              question: 'Czy dostanę instrukcję użycia?',
              answer: 'Tak. Dołączamy krótką instrukcję i przykłady układów, aby ułatwić produkcję treści w zespole.',
            },
            {
              question: 'Jak szybko powstają szablony?',
              answer: 'Zwykle 3–7 dni roboczych w zależności od ilości wariantów.',
            },
            {
              question: 'Czy szablony będą spójne z moją stroną?',
              answer: 'Tak, jeśli posiadasz już swój styl, dopasujemy posty tak aby wszystko było spójne.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Stwórz spójną komunikację w mediach społecznościowych"
        description="Dostarczymy szablony, dzięki którym publikacje będą szybsze i łatwiejsze."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj inne usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/arteon-baner-szablon-social-media-msc-mockup.png"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
