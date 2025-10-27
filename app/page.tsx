import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
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
        title="Agencja kreatywno-technologiczna"
        description="Witaj w Arteon - agencji, która pomoże Ci rozwinąć Twój biznes online oraz offline"
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
        variant="center"
      />

      <BenefitBelt
        items={[
          { icon: <RiCodeSSlashFill />, label: 'Strony' },
          { icon: <RiShoppingCartLine />, label: 'Sklepy' },
          { icon: <RiArticleLine />, label: 'Blogi' },
          { icon: <RiPaletteLine />, label: 'Projekty graficzne' },
          { icon: <RiFileTextLine />, label: 'Treści' },
          { icon: <RiMegaphoneLine />, label: 'Marketing' },
        ]}
      />
      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          subtitle="Cztery filary jakości"
          title="Elastyczny partner dla Twojej marki"
          description="Prowadzimy kompleksowe działania w czterech kluczowych obszarach, dzięki czemu pracując z nami masz wszystko w jednym miejscu"
          items={[
            {
              imageSrc: '/assets/woda.png',
              imageAlt: 'Woda - symbol grafiki i designu',
              title: 'Grafika',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy rozmaite projekty graficzne, przez projekty do drugu jak wizytówki czy ulotki, po projekty stron internetowych jak i całych identyfikacji wizualnych. Opieramy się na
                    psychologii, dzięki czemu nasze projekty trafiają do odpowiednich grup odbiorczych, tworząc dla Ciebie idealne środowisko do pozyskiwania najlepszych klientów
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/uslugi/projekty-graficzne">
                      Przejdź do projektów graficznych
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              imageSrc: '/assets/ziemia.png',
              imageAlt: 'Ziemia - symbol witryn internetowych',
              title: 'Strony',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy strony internetowe, sklepy oraz blogi dopasowując odpowiednią technologię, która w Twoim przypadku będzie najlepsza. Tworzymy witryny, które są zgodne z RODO, WCAG 2.1 i
                    oferujemy pomoc we wszelkich kwestiach prawnych, dzięki czemu nie musisz się o nic martwić.
                  </p>
                  <div className="mt-auto gap-4 flex">
                    <Button arrow link="/uslugi/strony-internetowe">
                      Strony
                    </Button>
                    <Button arrow link="/uslugi/blogi-internetowe">
                      Blogi
                    </Button>
                    <Button arrow link="/uslugi/sklepy-internetowe">
                      Sklepy
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              imageSrc: '/assets/ogien.png',
              imageAlt: 'Ogień - symbol marketingu',
              title: 'Marketing',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Specjalizujemy się w pozycjonowaniu stron oraz sklepów, z nami zyskasz widoczność w Google i nie tylko. Zajmujemy się również tworzeniem kampanii reklamowych dla Google jak i
                    social mediów. Analizujemy twoje grono odbiorców i proponujemy działania, które trafiają dokładnie tam gdzie szukają cie klienci.
                  </p>
                    <div className="mt-4">
                    <Button arrow link="/uslugi/marketing">
                      Sprawdź ofertę marketingu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              imageSrc: '/assets/powietrze.png',
              imageAlt: 'Powietrze - symbol języka',
              title: 'Treści',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy treści, które w jasny sposób pokazują Twoją ofertą i zachęcają do skorzystania z niej. Tworzymy treści do social mediów, na strony internetowe, sklepy czy blogi. Wszystko
                    to w oparciu o realne rozwiązywanie problemów Twoich klientów. Z nami, jesteś widoczny dokładnie tam gdzie są Twoi klienci.
                  </p>
                    <div className="mt-4">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Sprawdź ofertę tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <FeatureGrid
          title="Co dostajesz współpracując z nami?"
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
