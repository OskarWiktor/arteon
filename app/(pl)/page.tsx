import BenefitBelt from '@/components/sections/BenefitBelt';
import LazyArticlesCarousel from '@/components/sections/blog/LazyArticlesCarousel';
import CTABanner from '@/components/sections/CTABanner';
import FeatureGrid from '@/components/sections/FeatureGrid';
import HeroBanner from '@/components/sections/HeroBanner';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import WorkSteps from '@/components/sections/steps/WorkSteps';
import TechStack from '@/components/sections/TechStack';
import LazyTestimonialsCarousel from '@/components/sections/LazyTestimonialsCarousel';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { GoLaw } from 'react-icons/go';
import { MdSupportAgent } from 'react-icons/md';
import { RiCodeSSlashFill, RiShoppingCartLine, RiArticleLine, RiPaletteLine, RiFileTextLine, RiMegaphoneLine, RiBarChart2Line, RiBookOpenLine, RiBrushLine } from 'react-icons/ri';
import { getHomepageAlternates } from '@/lib/i18n/pages/tool-meta';
import testimonialsPl from '@/data/pl/testimonials.json';
import type { Testimonial } from '@/types/testimonial';
import { getAllArticlePreviews } from '@/lib/blogDataService';
import LazyToolsCarousel from '@/components/sections/tools/LazyToolsCarousel';

export const metadata = {
  title: 'Strony, sklepy, treści i marketing | Arteon',
  description: 'Projekt i realizacja stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google. Gwarancja i jasne zasady.',
  alternates: getHomepageAlternates(),
  openGraph: {
    title: 'Strony, sklepy, treści i marketing | Arteon',
    description: 'Projekt i realizacja stron oraz sklepów. Treści i kampanie, które przyciągają klientów. Widoczność w Google. Gwarancja i jasne zasady.',
    url: 'https://www.arteonagency.pl/',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

function HomePageSchemas() {
  const testimonials = testimonialsPl as Testimonial[];
  const allRatings = testimonials.map((t) => t.rating);
  const avgRating = allRatings.length > 0 ? allRatings.reduce((a, b) => a + b, 0) / allRatings.length : 5;
  const reviewCount = testimonials.length;

  const aggregateRating = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.arteonagency.pl#organization',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toFixed(1),
      reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: t.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: t.rating,
        bestRating: '5',
        worstRating: '1',
      },
      reviewBody: t.quote,
      ...(t.link ? { url: t.link } : {}),
    })),
  };

  const howTo = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'Jak pracujemy - proces współpracy z Arteon',
    description: 'Czteroetapowy proces współpracy: rozmowa, plan, realizacja, publikacja i wsparcie.',
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Rozmowa',
        text: 'Ustalamy cele, odbiorców i priorytety. Zbieramy wszelkie informację, żeby stworzyć efekt, na którym Ci zależy.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Plan',
        text: 'Tworzymy dokładny plan: ustalamy zakres, termin i tworzymy dedykowaną wycenę.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Realizacja',
        text: 'Tworzymy to, czego potrzebujesz: stronę, grafiki, treści lub kampanie. Dbamy o widoczność w Google i dostępność (WCAG).',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Publikacja i wsparcie',
        text: 'Uruchamiamy i dostarczamy pliki. Tworzymy darmową listę kroków „co dalej”, by Twoja firma rosła szybciej.',
      },
    ],
  };

  return (
    <>
      <script id="schema-aggregate-rating" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRating) }} />
      <script id="schema-howto-process" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }} />
    </>
  );
}

export default function HomePage() {
  const articlePreviews = getAllArticlePreviews();

  return (
    <>
      <HomePageSchemas />
      <HeroBanner
        title="Rozwiń swoją markę z nami"
        description="Międzynarodowy standard jakości dla małych i średnich przedsiębiorstw"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
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

        <ProjectsCarousel title="Najnowsze realizacje" />

        <Gap variant="line" />

        <SectionSteps
          subtitle="Cztery filary jakości"
          title="Elastyczny partner dla Twojej marki"
          description="Działamy w czterech kluczowych obszarach, dzięki czemu masz wszystko w jednym miejscu. Niezależnie od branży i celów znajdziemy najlepszy sposób, aby rozwinąć Twój biznes i przyciągnąć właściwych klientów."
          items={[
            {
              topImageAlt: 'Papier firmowy dla kancelarii Lux Nova - mockup',
              topImageSrc: '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
              imageSrc: '/assets/woda.webp',
              imageAlt: 'Woda - symbol grafiki i designu',
              title: 'Projekty graficzne',
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
              topImageAlt: 'Strona internetowa Camper Albania - mockup',
              topImageSrc: '/assets/projects/arteon-baners-camper-albania-mockup.webp',
              imageSrc: '/assets/ziemia.webp',
              imageAlt: 'Ziemia - symbol witryn internetowych',
              title: 'Strony',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Tworzymy strony internetowe, sklepy, blogi oraz aplikacje webowe, dopasowując technologię, która w Twoim przypadku będzie najlepsza. Tworzymy witryny zgodne z krajowymi i
                    międzynarodowymi wymogami prawnymi (m.in. RODO, WCAG 2.1 AA), oferując przy tym bezpłatne wsparcie. Każdy proces pracy tłumaczymy jak najprostszym językiem, dzięki czemu nie musisz
                    się martwić, jeśli nie posiadasz wiedzy technicznej.
                  </p>
                  <div className="mt-auto flex gap-4">
                    <Button arrow link="/uslugi/tworzenie-stron-wordpress">
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
              topImageAlt: 'Szablony media społecznościowe dla MSC Psychotherapy - mockup',
              topImageSrc: '/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp',
              imageSrc: '/assets/ogien.webp',
              imageAlt: 'Ogień - symbol marketingu',
              title: 'Marketing',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Specjalizujemy się w pełnym pozycjonowaniu witryn oraz pełnym marketingu firm w Google i nie tylko. Z nami zyskasz widoczność dokładnie tam, gdzie szukają Cię klienci. Zajmujemy
                    się również tworzeniem kampanii reklamowych oraz prowadzeniem mediów społecznościowych. Przeprowadzamy dokładną analizę Twojej branży oraz konkurencji, aby móc zaproponować
                    działania, które trafiają dokładnie w Twoją grupę odbiorców.
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
              topImageAlt: 'Treści dla MSC Psychotherapy - baner',
              topImageSrc: '/assets/projects/arteon-baners-msc.webp',
              imageSrc: '/assets/powietrze.webp',
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
              icon: <RiArticleLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Spójne projekty graficzne online oraz offline',
              icon: <RiBrushLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wsparcie prawne - polityki, regulaminy, WCAG 2.1 AA',
              icon: <GoLaw className="text-primary h-6 w-6" />,
            },
            {
              title: 'Strategie marketingowe odpowiadające na problemy Twoich odbiorców',
              icon: <RiBarChart2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dedykowane szkolenia i instrukcje',
              icon: <RiBookOpenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wsparcie w dalszym rozwoju po realizacji',
              icon: <MdSupportAgent className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <LazyToolsCarousel />

        <Gap variant="line" />

        <LazyTestimonialsCarousel />

        <Gap variant="line" />

        <WorkSteps />

        <Gap variant="line" />

        <TechStack />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <LazyArticlesCarousel title="Nasze artykuły i poradniki" articles={articlePreviews} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zacznijmy od rozmowy"
        description="Opisz swoją wizję rozwoju, a przygotujemy propozycję dopasowaną do Twoich celów."
        btnOne="Skontaktuj się z nami"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź pełną ofertę usług"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
