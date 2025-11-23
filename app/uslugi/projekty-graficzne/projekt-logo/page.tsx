import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiKey2Line, RiPantoneLine, RiQuillPenLine } from 'react-icons/ri';
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
  title: 'Projekt logo | Arteon',
  description: 'Logo jako fundament identyfikacji wizualnej. Tworzymy czytelny znak z wersjami kolorystycznymi i mini-księgą znaku.',
  keywords: ['projekt logo', 'logo dla firmy', 'tworzenie logo', 'księga znaku', 'identyfikacja wizualna'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-logo' },
  openGraph: {
    title: 'Projekt logo | Arteon',
    description: 'Profesjonalne logo dopasowane do charakteru marki. Wektory, warianty i mini-księga znaku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-logo',
    serviceName: 'Projekt logo',
    description: 'Znak marki z podstawową księgą znaku: warianty, siatka, wersje kolorystyczne. Pliki wektorowe gotowe do użycia.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-logo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt logo"
        description={<>Silny znak porządkuje komunikację i wyróżnia markę. Tworzymy logo z myślą o czytelności i skalowalności - z wersjami kolorystycznymi oraz mini-księgą znaku.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-logo`, label: 'Projekt logo' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt logo?">
          <p>
            <strong>Profesjonalne logo wzmacnia wizerunek i ułatwia sprzedaż.</strong> Spójny branding realnie przekłada się na wynik: firmy utrzymujące konsekwentną identyfikację raportują{' '}
            <strong>~10-20% wyższy wzrost/przychody</strong>{' '}
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-link">
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Profesjonalne logo buduje wiarygodność w ułamku sekundy.</strong> Jakość oprawy wizualnej (logo, układ, estetyka) silnie wpływa na ocenę firmy: aż <strong>~75%</strong> osób
            przypisuje wiarygodność marce na podstawie ich materiałów wizualnych{' '}
            <a href="https://rareformnewmedia.com/credibility-in-web-design/" target="_blank" rel="noopener noreferrer" className="inline-link">
              (źródło)
            </a>
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając logo u nas?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Znak, który prowadzi markę',
              description: <>Tworzymy logo, które jest czytelne, charakterystyczne i łatwe do zapamiętania.</>,
              icon: <RiQuillPenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Warianty i zastosowania',
              description: <>Otrzymujesz wersje kolorystyczne i monochromatyczne, gotowe do użycia w różnych sytuacjach.</>,
              icon: <RiPantoneLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Prosta instrukcja użycia',
              description: <>Dołączamy krótkie wytyczne, które ułatwiają poprawne korzystanie z logo w firmie.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna własność i pliki źródłowe',
              description: <>Po zakończeniu projektu masz komplet materiałów i swobodę ich użycia w przyszłości.</>,
              icon: <RiKey2Line className="h-6 w-6 text-slate-500" />,
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
          title="Zamów projekt logo"
          description="Opisz czym się zajmujesz oraz jaki charakter znaki Ci się podoba. Wrócimy z krótkim briefem, wyceną i harmonogramem."
          defaultSubject="Projekt logo"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-logo"
          items={[
            {
              question: 'Ile kosztuje profesjonalne logo?',
              answer:
                'Cena logo zależy od zakresu pracy: liczby wariantów, wersji kolorystycznych, dodatkowych adaptacji. Zwykle propozycję przedstawiamy po briefie - dostosowaną do Twoich potrzeb i budżetu.',
            },
            {
              question: 'Jak długo trwa realizacja projektu logo?',
              answer: 'Standardowy proces trwa około 7-14 dni roboczych. Terminy ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach otrzymam logo?',
              answer: 'Otrzymasz pliki wektorowe (SVG, EPS, AI) i rastrowe (PNG, JPG), wersje monochromatyczne, wersje na jasne i ciemne tło oraz mini-księgę znaku z wytycznymi.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do logo?',
              answer: 'Tak - w standardowym pakiecie uwzględniamy minimum jedną lub dwie rundy korekt. Razem dopracujemy szczegóły, by efekt finalny odpowiadał Twojej wizji.',
            },
            {
              question: 'Czy pomogacie określić styl i kierunek logo?',
              answer: 'Tak - jeśli nie masz wizji, przygotowujemy moodboardy, przykłady stylowe i warianty kierunków, by wspólnie znaleźć to, co najlepiej pasuje do Twojej marki.',
            },
            {
              question: 'Gdzie mogę używać logo?',
              answer: 'Logo będzie zaprojektowane do użytku online, drukowania, gadżetów, odzieży. Dbamy o skalowalność i czytelność w każdej formie.',
            },
            {
              question: 'Czy dostaję prawa autorskie do logo?',
              answer: 'Tak - po finalizacji projektu przekazujemy Ci pełne prawa autorskie i pliki źródłowe. Możesz swobodnie korzystać z logo w materiałach własnych.',
            },
            {
              question: 'Czy oferujecie szybką realizację logo?',
              answer: 'Tak - dla projektów priorytetowych proponujemy ekspresowy tryb realizacji. Czas i koszt ustalamy indywidualnie przed rozpoczęciem pracy.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Znak, który prowadzi markę"
        description="Stworzymy logo, które porządkuje komunikację i zostaje w pamięci."
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
