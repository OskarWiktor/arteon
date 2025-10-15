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
  title: 'Projekt odzieży firmowej | Arteon',
  description: 'Projekt nadruków i haftów na odzież firmową. Spójny wygląd zespołu i lepsza rozpoznawalność marki.',
  keywords: ['projekt odzieży firmowej', 'nadruk firmowy', 'haft komputerowy', 'odzież z logo', 'materiały firmowe'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej' },
  openGraph: {
    title: 'Projekt odzieży firmowej | Arteon',
    description: 'Nadruki i hafty dopasowane do identyfikacji marki. Pliki przygotowane pod wybraną technikę.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt odzieży firmowej"
        description={<>Zespół wygląda spójnie, a marka zyskuje widoczność. Przygotowujemy projekty nadruków i haftów - pod sitodruk, DTF i haft komputerowy - zgodnie z Twoją identyfikacją.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-odziezy-firmowej`, label: 'Projekt odzieży firmowej' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt odzieży firmowej?">
          <p>
            <strong>Spójny wygląd odzieży Twojego zespołu buduje zaufanie w kilka sekund.</strong> Klient od razu widzi, kto reprezentuje Twoją firmę. Jednolita odzież firmowa buduje wizerunek firmy i
            wzmacnia wiarygodność. Dzięki temu Twoja marka jest widoczna w terenie a to działa jak darmowa reklama mobilna
          </p>

          <br />

          <p>
            <strong>Dobra odzież firmowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica zespół i podnosi rozpoznawalność marki,</li>
            <li>Ułatwia obsługę - klient szybciej trafia do właściwej osoby,</li>
            <li>Wzmacnia wizerunek i buduje autorytet Twojej firmy.</li>
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
          title="Zamów projekt odzieży firmowej"
          description="Napisz, jakie elementy chcesz umieścić na odzieży i jak chcesz aby to wyglądało. Przygotujemy wycenę i specyfikację plików."
          defaultSubject="Projekt odzieży firmowej"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej"
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
