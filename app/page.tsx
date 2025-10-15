import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import Mission from '@/components/sections/steps/Mission';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import { GoLaw } from 'react-icons/go';
import { IoAccessibility } from 'react-icons/io5';
import { MdSupportAgent } from 'react-icons/md';
import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiBarChart2Line, RiBookOpenLine, RiBrushLine, RiDatabase2Line } from 'react-icons/ri';

export const metadata = {
  title: 'Strony, sklepy, treści i marketing | Arteon',
  description: 'Projekt i wdrożenie stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google od startu. Gwarancja i jasne zasady.',
  keywords: ['strony internetowe Kraków', 'sklepy internetowe', 'tworzenie stron', 'branding', 'treści na stronę', 'marketing internetowy', 'widoczność w Google'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Strony, sklepy, treści i marketing | Arteon',
    description: 'Projekt i wdrożenie stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google od startu. Gwarancja i jasne zasady.',
    url: 'https://www.arteonagency.pl/',
    type: 'website',
  },
} as const;

export default function HomePage() {
  return (
    <>
      <HeroBaner
        title="Zbuduj markę, która rośnie i sprzedaje"
        subtitle="Know-how globalnych marek"
        description="Arteon - sprawdzone praktyki wielkich marek dla Twojej firmy. Od strategii, przez strony, po marketing."
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
        variant="center"
      />

      <BenefitBelt
        items={[
          { icon: <RiCodeSSlashFill />, label: 'Strony' },
          { icon: <RiShoppingCartLine />, label: 'Sklepy' },
          { icon: <RiArticleLine />, label: 'Blogi' },
          { icon: <RiPaletteLine />, label: 'Projektowanie graficzne' },
          { icon: <RiFileTextLine />, label: 'Treści' },
          { icon: <RiMegaphoneLine />, label: 'Marketing' },
        ]}
      />
      <Wrapper>
        <Gap size="sm" />

        <Mission />

        <Gap variant="line" />

        <FeatureGrid
          title="Co dostajesz"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Treści dopasowane do marki',
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Projekt graficzny spójny online i offline',
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Responsywność i dostępność (WCAG 2.1 AA)',
              icon: <IoAccessibility className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne - polityki, regulaminy',
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Strategie marketingowe oparte na emocjach',
              icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Łatwe zarządzanie treściami i produktami',
              icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dedykowane szkolenia i instrukcje',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Stałe wsparcie po wdrożeniu',
              icon: <MdSupportAgent className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Nasze realizacje" category="strona" />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zacznijmy od rozmowy"
        description="Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań - znajdziemy najlepszą drogę do efektu."
        primaryLabel="Umów konsultację"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj ofertę"
        secondaryLink="/uslugi"
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
      />
    </>
  );
}
