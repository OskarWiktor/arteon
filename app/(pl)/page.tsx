import {
  RiGlobalLine,
  RiIdCardLine,
  RiKey2Line,
  RiLayoutMasonryLine,
  RiLineChartLine,
  RiPaletteLine,
  RiPencilRuler2Line,
  RiPenNibLine,
  RiPriceTag3Line,
  RiQuillPenLine,
  RiSearchEyeLine,
  RiSecurePaymentLine,
  RiStore2Line,
  RiTrophyLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBar from '@/components/organisms/sections/SectionBar';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionHighlights from '@/components/organisms/sections/SectionHighlights';
import SectionNumberSteps from '@/components/organisms/sections/SectionNumberSteps';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import testimonialsPl from '@/data/pl/testimonials.json';
import { getHomepageAlternates } from '@/lib/i18n/pages/toolMeta';
import { homeProcessSteps, processStepsSections } from '@/lib/processSteps';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import type { Testimonial } from '@/types/testimonial';

export const metadata = {
  title: 'Strony internetowe, sklepy, treści i projekty graficzne - Arteon',
  description:
    'Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepu, treści, projekty graficzne oraz aplikacje webowe. Sprawdź naszą ofertę i opinie naszych realizacji.',
  alternates: getHomepageAlternates(),
  openGraph: {
    title: 'Strony internetowe, sklepy, treści i projekty graficzne - Arteon',
    description:
      'Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepu, treści, projekty graficzne oraz aplikacje webowe. Sprawdź naszą ofertę i opinie naszych realizacji.',
    url: 'https://www.arteonagency.pl',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/bg/arteon-hero-baner-z-realizacja-strony-jstax.webp',
      },
    ],
  },
};

function HomePageSchemas() {
  const testimonials = testimonialsPl as Testimonial[];
  const allRatings = testimonials.map(t => t.rating);
  const avgRating =
    allRatings.length > 0
      ? allRatings.reduce((a, b) => a + b, 0) / allRatings.length
      : 5;
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
    review: testimonials.map(t => ({
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
    name: 'Jak pracujemy',
    description:
      'Posiadamy jasny proces współpracy, który maksymalizuje indywidualne podejście i końcowy efekt',
    // Same source as the visible timeline (processStepsSections.home) so the
    // structured data matches what the user sees.
    step: homeProcessSteps.map((processStep, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: processStep.name,
      text: processStep.text,
    })),
  };

  return (
    <>
      <JsonLd schema={aggregateRating} id='schema-aggregate-rating' />
      <JsonLd schema={howTo} id='schema-howto-process' />
    </>
  );
}

export default function HomePage() {
  return (
    <>
      <HomePageSchemas />
      <HeroBanner
        subtitle='Agencja interaktywna'
        title='Pomagamy dotrzeć tam, gdzie szukają Cie klienci'
        description='Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepy, treści, projekty graficzne, aplikacje webowe oraz zajmujemy się pozycjonowaniem i promocją Twojej firmy w sieci.'
        backgroundImage='/assets/projects/napilota/mockup-strony-napilota.webp'
        imageAlt='Realizacja strony internetowej NaPilota wykonana przez Arteon - mockup na laptopie'
        primaryCtaLabel='Usługi'
        primaryCtaHref='/uslugi'
        secondaryCtaLabel='Realizacje'
        secondaryCtaHref='/realizacje'
        reputation
      />

      <BenefitBelt variant='carousel' />

      <Wrapper>
        <Divider size='sm' />

        <ProjectsCarousel
          title='Najnowsze realizacje stron internetowych i projektów graficznych'
          secondaryTitle='Od wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
        />

        <Divider line />

        <SectionHighlights
          subtitle='Efekty naszych działań'
          title='Stawiamy na mierzalne efekty wszelkich działań'
          description={
            <>
              <p>
                Najważniejszy dla nas jest efekt i skuteczność wszelkich
                działań. Dlatego zawsze pokazujemy mierzalne efekty i tłumaczymy
                prostym językiem jak dane rozwiązanie wpłynie na Twój biznes -
                mówimy zawsze zarówno o plusach jak i minusach danego
                rozwiązania.
              </p>
              <p>
                Stosujemy nowoczesne technologie i standardy, które pozwalają na
                szybsze dotarcie do potencjalnych klientów i które dają przewagę
                nad konkurencję. Zawsze analizujemy Twoją branżę, Twój rynek
                oraz to co istotne dla Ciebie abyś mógł znaleźć idealnych
                odbiorców.
              </p>
              <p>
                Bazujemy również na własnym doświadczeniu, wszelkie nowości i
                techniki najpierw testujemy na sobie aby dokładnie wiedzieć
                jakie w praktyce są plusy oraz minusy każdego podejścia. To co
                wiemy, że sprawdza się najlepiej zastosujemy u Ciebie.
              </p>
            </>
          }
          btnOne='Kontakt'
          btnOneHref='#kontakt'
          boxes={[
            {
              type: 'stat',
              icon: <RiSearchEyeLine />,
              title: 'Widoczność',
              text: 'Po trzech miesiącach pozycjonowania nasza strona jest widoczna na ponad 900 fraz.',
            },
            {
              type: 'image',
              image:
                '/assets/dane-z-gsc-arteon-efekt-pozycjonowania-witryny-13-07-2026.png',
              alt: 'Wzrost liczby kliknięć i wyświetleń strony Arteon w Google - dane z Google Search Console, 13 lipca 2026',
              imagePosition: 'right',
            },
            {
              type: 'image',
              image: '/assets/ahref-organic-positions-arteon-4-07-2026.png',
              alt: 'Wzrost widoczności w Google strony zbudowanej w technologii Next.js - dane Ahrefs dla arteonagency.pl',
              imagePosition: 'right',
            },
            {
              type: 'stat',
              icon: <RiTrophyLine />,
              title: 'Przewaga',
              text: 'Dzięki najnowszym techniką jesteśmy w Top 3 na ponad 120 zapytań i to w kilku krajach.',
            },
            {
              type: 'stat',
              icon: <RiLineChartLine />,
              title: 'Stabilność',
              text: 'Nasze sposoby gwarantują stabilność wyników i odporność na zmiany algorytmów',
            },
            {
              type: 'image',
              image:
                '/assets/dane-z-gsc-arteon-efekt-pozycjonowania-witryny-osiagniecia-z-klikniec-13-07-2026.png',
              alt: 'Efekty pozycjonowania strony Arteon - osiągnięcia z kliknięć w Google Search Console, 13 lipca 2026',
            },
          ]}
        />

        <Divider line />

        <SectionNumberSteps
          title='Wszystko czego potrzebujesz w jednym miejscu'
          buttonText='Wszystkie usługi'
          buttonHref='/uslugi'
          items={[
            {
              icon: <RiGlobalLine />,
              title: 'Strony www',
              description:
                'Tworzymy indywidualne projekty stron www, dopasowane do Twojej firmy i klientów, stawiając na widoczność w Google.',
              href: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              icon: <RiStore2Line />,
              title: 'Sklepy www',
              description:
                'Tworzymy sklepy, nastawione na intuicyjne zarzadzanie i proste skalowanie, w których zakupy są proste, a produkty łatwo znaleźć.',
              href: '/uslugi/sklepy-internetowe',
            },
            {
              icon: <RiLineChartLine />,
              title: 'Pozycjonowanie stron',
              description:
                'Zajmujemy sie kompleksowym pozycjonowaniem Twojej witryny w sieci, stawiając na to aby znaleźli Cię idealni klienci.',
              href: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              icon: <RiQuillPenLine />,
              title: 'Tworzenie treści',
              description:
                'Piszemy teksty, które podkreślają korzyści Twojego biznesu z nastawieniem na Twoich klientów oraz widoczność.',
              href: '/uslugi/tworzenie-tresci',
            },
            {
              icon: <RiPaletteLine />,
              title: 'Identyfikacje wizualne',
              description:
                'Budujemy systemy wizualne dla firm, dzięki którym Twoja firma przyciągnie odpowiednich odbiorców.',
              href: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              icon: <RiPenNibLine />,
              title: 'Projekty logo',
              description:
                'Projektujemy systemy logo, nastawione na czytelność, łatwość zapamiętania i możliwość zastosowania w każdym miejscu i formacie.',
              href: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              icon: <RiIdCardLine />,
              title: 'Projekty wizytówek',
              description:
                'Projektujemy wizytówki wraz z przygotowaniem do druku, które szybko zapadną w pamięć Twoim klientom.',
              href: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              icon: <RiLayoutMasonryLine />,
              title: 'Szablony do mediów społecznościowych',
              description:
                'Tworzymy spójne i łatwe w edycji szablony do mediów społecznościowych, dzięki którym łatwiej będzie Ci być aktywnym w sieci.',
              href: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
            },
          ]}
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionTimeline {...processStepsSections.home} />

        <Divider line />

        <SectionBar title='Jasne gwarancje, jasne zasady' />

        <div>
          <FeatureGrid
            variant='bare'
            columns={4}
            items={[
              {
                icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
                title: 'Indywidualne projekty',
                description:
                  'Wszystko projektujemy od zera - nie używamy gotowych szablonów, dzięki czemu Twoja strona, sklep czy projekt graficzny jest w pełni unikalny i dopasowany do Twojej firmy oraz grupy docelowej.',
              },
              {
                icon: <RiSecurePaymentLine className={normalIconSizeClasses} />,
                title: 'Brak zaliczek',
                description:
                  'Nie pobieramy zaliczek dla projektów do 5 tysięcy złotych brutto. Fakturę wystawiamy tylko po zakończeniu prac lub po zakończeniu poszczególnych etapów w przypadku większych projektów.',
              },
              {
                icon: <RiPriceTag3Line className={normalIconSizeClasses} />,
                title: 'Brak opłat abonamentowych',
                description:
                  'Nie pobieramy comiesięcznych opłat za stworzone witryny. Płacisz jednorazowo, za samą realizację a w przypadku dłuższych współprac, prace zawsze rozliczamy zadaniowo. Cenimy transparencję.',
              },
              {
                icon: <RiKey2Line className={normalIconSizeClasses} />,
                title: 'Pełna własność',
                description:
                  'Wszystko co stworzymy staje się Twoją własnością. Otrzymujesz stronę, dostępy do wszelkich zintegrowanych platform oraz pliki źródłowe. Możemy również przygotować umowę, która dodatkowo zabezpiecza Twoje prawa.',
              },
            ]}
          />
        </div>

        <Divider line />

        <SectionContactForm
          title='Skontaktuj się'
          description='Skontaktuj się z nami, przygotujemy dla Ciebie darmową wycenę i jasny plan działania.'
          noTopic={true}
          imageSrc='/assets/projects/arteon-baners-camper-albania-mockup.webp'
          imageAlt='Realizacja strony internetowej - Camper Albania mockup'
          defaultSubject='Tworzenie strony internetowej'
          messagePlaceholder='Napisz co chcesz zrealizować'
        />

        <Divider size='sm' />
      </Wrapper>
    </>
  );
}
