import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiIdCardLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { buildServiceSchema } from '@/lib/serviceShema';
import Script from 'next/script';

export const metadata = {
  title: 'Projekt wizytówki | Arteon',
  description: 'Projekt wizytówki firmowej, która wyjaśnia ofertę w kilka sekund i buduje zaufanie od pierwszego spojrzenia. Pliki źródłowe i gotowe do druku.',
  keywords: ['projekt wizytówki', 'wizytówki firmowe', 'projekt wizytówek', 'przygotowanie do druku wizytówki', 'wizytówka projekt'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-wizytowki' },
  openGraph: {
    title: 'Projekt wizytówki | Arteon',
    description: 'Profesjonalny projekt wizytówki: czytelność, elegancja i pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-wizytowki',
    serviceName: 'Projekt wizytówki',
    description: 'Czytelne, eleganckie wizytówki spójne z identyfikacją marki. Pliki do druku + wersje do użycia w sieci.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-wizytowki" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt wizytówki"
        description={<>Zadbaj o pierwsze wrażenie, które buduje zaufanie. Projektujemy wizytówki dopasowane do Twojej marki - czytelne, eleganckie i gotowe do druku oraz użycia online.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-wizytowki`, label: 'Projekt wizytówki' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt wizytówki?">
          <p>
            <strong>Profesjonalny projekt wizytówki wyjaśnia czym się zajmujesz w kilka sekund.</strong> Schludny układ, czytelne dane oraz spójny styl ułatwia, zapamiętanie firmy i szybki kontakt. To
            konkretny, fizyczny ślad po rozmowie, który wraca do Ciebie w formie telefonu lub wiadomości.
          </p>

          <br />

          <p>
            <strong>Dobra oraz estetyczna wizytówka podnosi status Twojej marki.</strong>
            Estetyka materiałów realnie wpływa na ocenę wiarygodności marki, jakość oprawy wizualnej przekłada się na większe zaufanie
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobra wizytówka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ułatwia zapamiętanie Twojej marki,</li>
            <li>Usprawnia działanie i przejście do kontaktu,</li>
            <li>Podnosi zaufanie i buduje wiarygodność</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając projekt wizytówki u nas?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Czytelny układ i prestiżowy wygląd',
              description: <>Projektujemy wizytówki, które w kilka sekund wyjaśniają, czym się zajmujesz i budują zaufanie przy pierwszym kontakcie.</>,
              icon: <RiIdCardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki do druku i online',
              description: <>Otrzymujesz gotowe pliki do drukarni oraz wersję cyfrową do wysyłki lub prezentacji w sieci.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasowujemy kolory i typografię do Twojej marki, aby każdy materiał mówił jednym językiem.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Szybka realizacja i poprawki w cenie',
              description: <>Dostarczamy projekt w krótkim terminie i dopracowujemy go wspólnie do pełnej akceptacji.</>,
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

        <ContactForm
          title="Zamów projekt wizytówki"
          description="Napisz, czym się zajmujesz, jakie dane mają się znaleźć na wizytówce oraz jakie masz preferencje stylistyczne. Otrzymasz bezpłatną wycenę i proponowany termin realizacji."
          defaultSubject="Projekt wizytówki"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki"
          items={[
            {
              question: 'Ile kosztuje projekt wizytówki?',
              answer: 'Cena zależy od liczby wariantów, ilości informacji oraz wersji kolorystycznych. Po briefie przedstawiamy dopasowaną wycenę.',
            },
            {
              question: 'Jak długo trwa projekt wizytówki?',
              answer: 'Czas realizacji wynosi zwykle 2-5 dni roboczych. W przypadku dodatkowych wariantów lub korekt termin ustalamy wspólnie.',
            },
            {
              question: 'W jakich formatach dostanę wizytówkę?',
              answer: 'Otrzymujesz plik PDF do druku z odpowiednimi spadami, wersje PNG/JPG oraz pliki źródłowe (AI, Figma).',
            },
            {
              question: 'Czy mogę zgłosić poprawki?',
              answer: 'Tak - zwykle przewidujemy 1-2 rundy poprawek w ramach projektu. Poprawiamy układ, kolory i treść do finalnej akceptacji.',
            },
            {
              question: 'Czy wizytówka będzie czytelna?',
              answer: 'Dbamy o kontrast, rozmiar czcionek i hierarchię - nawet mała wizytówka będzie czytelna i estetyczna.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt wizytówki?',
              answer: 'Tak - oferujemy tryb ekspresowy z szybszym terminem realizacji. Koszt i czas ustalamy przed startem projektu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Zrób mocne pierwsze wrażenie"
        description="Stworzymy wizytówkę, która mówi jasno i buduje zaufanie."
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
