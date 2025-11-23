import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import HeroBaner from '@/components/sections/HeroBaner';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { GoLaw } from 'react-icons/go';
import { MdSupportAgent } from 'react-icons/md';
import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiBarChart2Line, RiBookOpenLine, RiBrushLine } from 'react-icons/ri';

export const metadata = {
  title: 'Strony, sklepy, treści i marketing | Arteon',
  description: 'Projekt i realizacja stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google od startu. Gwarancja i jasne zasady.',
  keywords: ['strony internetowe Kraków', 'sklepy internetowe', 'tworzenie stron', 'branding', 'treści na stronę', 'marketing internetowy', 'widoczność w Google'],
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Strony, sklepy, treści i marketing | Arteon',
    description: 'Projekt i realizacja stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google od startu. Gwarancja i jasne zasady.',
    url: 'https://www.arteonagency.pl/',
    type: 'website',
  },
} as const;

export default function HomePage() {
  return (
    <>
      <HeroBaner
        title="Rozwiń swoją markę z nami"
        description="Witaj w Arteon - miejscu, które pomoże Ci rozwinąć Twój biznes online oraz offline"
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
          description="Prowadzimy kompleksowe działania rozwojowe w czterech kluczowych obszarach, dzięki czemu pracując z nami masz wszystko w jednym miejscu. Nie zależnie od Twojej branży oraz celów, znajdziemy najlepszy sposób aby rozwinąć Twój biznes, przyciągając właściwych odbiorców i klientów"
          items={[
            {
              topImageAlt: 'test',
              topImageSrc: '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.png',
              imageSrc: '/assets/woda.png',
              imageAlt: 'Woda - symbol grafiki i designu',
              title: 'Grafika',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy rozmaite projekty graficzne. Od projektów do druku, jak wizytówki czy ulotki, przez projekty do mediów społecznościowych oraz stron, po pełne identyfikacje wizualne i
                    projekty nadruków na odzież. Opieramy się na psychologii, dzięki czemu nasze projekty trafiają do odpowiednich grup odbiorczych, tworząc dla Ciebie idealne środowisko do
                    pozyskiwania najlepszych klientów
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
              topImageAlt: 'test',
              topImageSrc: '/assets/projects/arteon-baners-camper-albania-mockup.png',
              imageSrc: '/assets/ziemia.png',
              imageAlt: 'Ziemia - symbol witryn internetowych',
              title: 'Strony',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy strony internetowe, sklepy, blogi oraz aplikacje webowe, dopasowując technologię, która w Twoim przypadku będzie najlepsza. Tworzymy witryny zgodne z krajowymi i
                    międzynarodowymi wymogami prawnymi (m.in RODO, WCAG 2.1 AA), oferując przy tym bezpłatne wsparcie. Każdy proces pracy tłumaczymy jak najprostszym językiem, dzięki czemu nie musisz
                    się martwić jeśli nie posiadasz wiedzy technicznej.
                  </p>
                  <div className="mt-auto flex gap-4">
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
              topImageAlt: 'test',
              topImageSrc: '/assets/projects/arteon-baner-szablon-social-media-msc-mockup.png',
              imageSrc: '/assets/ogien.png',
              imageAlt: 'Ogień - symbol marketingu',
              title: 'Marketing',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Specjalizujemy się w pełnym pozycjonowaniu witryn jak i całościowo firm w Google i nie tylko. Z nami zyskasz widoczność dokładnie tam gdzie szukają Cię klienci. Zajmujemy się
                    również tworzeniem kampanii reklamowych jak i prowadzeniem mediów społecznościowych. Przeprowadzamy dokładną analizę Twojej branży oraz konkurencji, aby móc zaproponować działania,
                    które trafiają dokładnie w Twoją grupę odbiorców.
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
              topImageAlt: 'test',
              topImageSrc: '/assets/projects/arteon-baners-msc.webp',
              imageSrc: '/assets/powietrze.png',
              imageAlt: 'Powietrze - symbol języka',
              title: 'Treści',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy treści sprzedażowe, promocyjne oraz edukacyjne na witryny internetowe oraz platformy społecznościowe, które w jasny sposób pokazują Twoją ofertą i Twoje kompetencje.
                    Wszystko to w oparciu o rozwiązywanie realnych problemów Twoich klientów.
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
          btnOne="Sprawdź wszystkie nasze usługi"
          btnOneLink="/uslugi"
        />

        <Gap variant="line" />

        <FeatureGrid
          title="Co możemy wnieść do Twojej marki?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Treści dopasowane do Twojego wymarzonego klienta',
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójne projekty graficzne online oraz offline',
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne - polityki, regulaminy, WCAG 2.1 AA',
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Strategie marketingowe odpowiadające na problemy Twoich odbiorców',
              icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dedykowane szkolenia i instrukcje',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wsparcie w dalszym rozwoju po realizacji',
              icon: <MdSupportAgent className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Nasze realizacje" category="strona" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <FeesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zacznijmy od rozmowy"
        description="Z chęcią porozmawiamy o Twoim pomyśle, przejdź do strony kontaktu i opisz swoją wizję rozwoju"
        primaryLabel="Kontakt"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj ofertę"
        secondaryLink="/uslugi"
        backgroundImage="/assets/bg/abstract-bg2.webp"
        overlay="black"
      />
    </>
  );
}
