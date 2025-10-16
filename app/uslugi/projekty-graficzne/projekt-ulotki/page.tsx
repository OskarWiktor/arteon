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
  title: 'Projekt ulotki | Arteon',
  description: 'Ulotka, która przyciąga uwagę i kieruje do kontaktu lub zakupu. Projekt dopasowany do Twojej oferty i lokalnych działań.',
  keywords: ['projekt ulotki', 'ulotki reklamowe', 'projekt graficzny ulotki', 'ulotka do druku', 'materiały promocyjne'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-ulotki' },
  openGraph: {
    title: 'Projekt ulotki | Arteon',
    description: 'Skuteczna ulotka z jasnym przekazem i mocnym CTA. Pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt ulotki"
        description={<>Dotarcie lokalne zaczyna się od jasnego przekazu. Tworzymy ulotki, które przyciągają uwagę, wyjaśniają ofertę w kilka sekund i kierują prosto do kontaktu.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-ulotki`, label: 'Projekt ulotki' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt ulotki?">
          <p>
            <strong>Profesjonalna ulotka dociera tam, gdzie reklama cyfrowa znika po sekundzie.</strong> Materiały drukowane są łatwiejsze w odbiorze i dłużej zostają w pamięci - badania pokazują
            niższe obciążenie poznawcze i wyższą zapamiętywalność niż w kanale wyłącznie cyfrowym{' '}
            <a
              href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block underline underline-offset-4"
            >
              (Canada Post - neuromarketing)
            </a>
            . Dobrze zaprojektowana ulotka prowadzi klienta od oferty, przez korzyści, do kontaktu.
          </p>

          <br />

          <p>
            <strong>Wygląd materiałów graficznych firmy, w tym ulotki, wpływa na zaufanie.</strong> Odbiorcy oceniają wiarygodność firmy po jakości oprawy - estetyczny projekt zwiększa szansę na
            pozytywną reakcję (telefon, wejście na stronę)
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="ml-1 inline-block underline underline-offset-4">
              (Stanford - web credibility, wnioski dot. designu)
            </a>
            . Ulotka łączy prosty przekaz z czytelnym wezwaniem do działania.
          </p>

          <br />

          <p>
            <strong>Dobra ulotka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Przedstawia ofertę w czytelny sposób,</li>
            <li>Prowadzi do określonego działania,</li>
            <li>Buduje rozpoznawalność oraz zwiększa zaufanie.</li>
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

        <ContactForm
          title="Zamów projekt ulotki"
          description="Opisz cel ulotki, grupę odbiorców i format druku. Dołącz treści lub szkic - przygotujemy wycenę i wyznaczymy termin realizacji."
          defaultSubject="Projekt ulotki"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki"
          items={[
            {
              question: 'Ile kosztuje projekt ulotki?',
              answer: 'Cena projektu ulotki zależy od formatu (A5, DL, składane), liczby wariantów i objętości grafiki. Po briefie przygotowujemy dopasowaną wycenę.',
            },
            {
              question: 'Jak długo trwa projektowanie ulotki?',
              answer: 'Przy standardowym zakresie czas to 3-7 dni roboczych. Większe projekty z wieloma wersjami mogą wymagać więcej czasu - termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach otrzymam ulotkę?',
              answer: 'Dostarczamy pliki do druku oraz wersje do internetu (PNG, JPG). Pliki możemy dopasować do wymagań drukarni.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do ulotki?',
              answer: 'Tak - w cenie zawarty jest zestaw rund poprawek (zwykle 1-2). Wspólnie dopracowujemy układ, kolory i treść aż do akceptacji.',
            },
            {
              question: 'Jak dobrać format i papier ulotki?',
              answer: 'Pomagamy dobrać optymalny format (np. A5, DL) i grubość papieru w zależności od celu kampanii i budżetu. Zalecamy materiały, które są trwałe i estetyczne.',
            },
            {
              question: 'Czy projekt ulotki będzie czytelny na urządzeniach mobilnych?',
              answer: 'Tak - dostarczamy również wersję cyfrową zoptymalizowaną pod urządzenia mobilne, tak by czytelność i przekaz były zachowane.',
            },
            {
              question: 'Czy projekt ulotki jest gotowy do druku?',
              answer: 'Tak - przygotowujemy pliki z odpowiednimi ustawieniami druku, gotowe do przekazania do drukarni.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt ulotki?',
              answer: 'Tak - oferujemy tryb priorytetowy, który skraca czas realizacji. Koszt ustalamy indywidualnie przed rozpoczęciem projektu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Zamień uwagę w działanie"
        description="Zaprojektujemy ulotkę, która prowadzi prosto do kontaktu."
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
    </>
  );
}
