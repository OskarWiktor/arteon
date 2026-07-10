import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import WorkSteps from '@/components/organisms/WorkSteps';
import testimonialsPl from '@/data/pl/testimonials.json';
import { getHomepageAlternates } from '@/lib/i18n/pages/toolMeta';
import type { Testimonial } from '@/types/testimonial';

export const metadata = {
  title: 'Strony internetowe, sklepy, treści i projekty graficzne - Arteon',
  description:
    'Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepu, treści oraz wszelkie projekty graficzne. Sprawdź ofertę i dostań bezpłatną wycenę realizacji.',
  alternates: getHomepageAlternates(),
  openGraph: {
    title: 'Strony internetowe, sklepy, treści i projekty graficzne - Arteon',
    description:
      'Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepu, treści oraz wszelkie projekty graficzne. Sprawdź ofertę i dostań bezpłatną wycenę realizacji.',
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
    step: [
      {
        '@type': 'HowToStep',
        position: 1,
        name: 'Rozmowa',
        text: 'Pierwszy etap to zawsze rozmowa na której opowiadasz o tym czym się zajmujesz i co chcesz zrealizować.',
      },
      {
        '@type': 'HowToStep',
        position: 2,
        name: 'Plan',
        text: 'Po wstępnej rozmowie zawsze dostajesz plan, który jest nastawiony na Twoje potrzeby oraz na Twoich obiorców wraz z etapami realizacji oraz wyceną, której zawsze się trzymamy. Każdy plan dopracowujemy abyś dostał dokładnie to czego potrzebujesz.',
      },
      {
        '@type': 'HowToStep',
        position: 3,
        name: 'Realizacja',
        text: 'Po akceptacji planu przechodzimy do realizacji: tworzymy projekt graficzny strony, sklepu czy wybranego projektu do druku. Zawsze dostajesz kilka koncepcji wraz z możliwością naniesienia poprawek i wszelkich uwag. Wszystko dopracowujemy abyś był w pełni zadowolony z projektu.',
      },
      {
        '@type': 'HowToStep',
        position: 4,
        name: 'Publikacja i wsparcie',
        text: 'Gdy efekt jest dla Ciebie w 100% zadowalający publikujemy stronę lub dostarczamy gotowe pliki do druku. Dostajesz pełen dostęp do wszystkiego. Po przekazaniu wystawiamy fakturę za realizację z płatnością do 7 dni roboczych.',
      },
    ],
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
        description='Zajmujemy się kompleksowym wsparciem małych i średnich przedsiębiorstw. Tworzymy strony internetowe, sklepu, treści oraz wszelkie projekty graficzne. Zajmuje się również pozycjonowaniem witryn jak i budową aplikacji webowych. Wszystko zrealizujesz w jednym miejscu.'
        backgroundImage='/assets/bg/arteon-zbior-realizacji.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Wrapper>
        <Divider size='sm' />

        <ProjectsCarousel title='Najnowsze realizacje stron internetowych i projektów graficznych' />

        <Divider line />

        <SectionSteps
          title='Elastyczny partner dla Twojej marki'
          description='Działamy w czterech kluczowych obszarach, dzięki czemu masz wszystko w jednym miejscu. Niezależnie od branży i celów znajdziemy najlepszy sposób, aby rozwinąć Twój biznes i przyciągnąć właściwych klientów.'
          grid='two'
          buttonText='Sprawdź wszystkie nasze usługi'
          buttonHref='/uslugi'
          items={[
            {
              topImageAlt: 'Papier firmowy dla kancelarii Lux Nova - mockup',
              topImageSrc:
                '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
              title: 'Projekty graficzne',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Tworzymy rozmaite projekty graficzne. Od projektów do druku,
                    jak wizytówki czy ulotki, przez projekty do mediów
                    społecznościowych oraz stron, po pełne identyfikacje
                    wizualne i projekty nadruków na odzież. Opieramy się na
                    psychologii, dzięki czemu nasze projekty trafiają do
                    odpowiednich grup odbiorczych, tworząc dla Ciebie idealne
                    środowisko do pozyskiwania najlepszych klientów
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/uslugi/projekty-graficzne'>
                      Przejdź do projektów graficznych
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageAlt: 'Wizualizacja realizacji strony internetowej dla ',
              topImageSrc:
                '/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
              title: 'Strony',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Tworzymy strony internetowe, sklepy, blogi oraz aplikacje
                    webowe, dopasowując technologię, która w Twoim przypadku
                    będzie najlepsza. Tworzymy witryny zgodne z krajowymi i
                    międzynarodowymi wymogami prawnymi (m.in. RODO, WCAG 2.1
                    AA), oferując przy tym bezpłatne wsparcie. Każdy proces
                    pracy tłumaczymy jak najprostszym językiem, dzięki czemu nie
                    musisz się martwić, jeśli nie posiadasz wiedzy technicznej.
                  </p>
                  <div className='mt-auto flex gap-4'>
                    <ButtonLink
                      arrow
                      href='/uslugi/strony-internetowe-dla-firm'
                    >
                      Strony
                    </ButtonLink>
                    <ButtonLink arrow href='/uslugi/blogi-internetowe'>
                      Blogi
                    </ButtonLink>
                    <ButtonLink arrow href='/uslugi/sklepy-internetowe'>
                      Sklepy
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageAlt:
                'Mockup szablonów postów do medi społecznościowych dla MSC Psychotherapy',
              topImageSrc:
                '/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp',
              title: 'Marketing',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Specjalizujemy się w pełnym pozycjonowaniu witryn oraz
                    pełnym marketingu firm w Google i nie tylko. Z nami zyskasz
                    widoczność dokładnie tam, gdzie szukają Cię klienci.
                    Zajmujemy się również tworzeniem kampanii reklamowych oraz
                    prowadzeniem mediów społecznościowych. Przeprowadzamy
                    dokładną analizę Twojej branży oraz konkurencji, aby móc
                    zaproponować działania, które trafiają dokładnie w Twoją
                    grupę odbiorców.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/uslugi/marketing'>
                      Sprawdź ofertę marketingu
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              topImageAlt: 'Mockup realizacji strony internetowej NaPilota ',
              topImageSrc:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              title: 'Treści',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Tworzymy treści sprzedażowe, promocyjne oraz edukacyjne na
                    witryny internetowe oraz platformy społecznościowe, które w
                    jasny sposób pokazują Twoją ofertą i Twoje kompetencje.
                    Wszystko to w oparciu o rozwiązywanie realnych problemów
                    Twoich klientów.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/uslugi/tworzenie-tresci'>
                      Sprawdź ofertę tworzenia treści
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <WorkSteps />

        <Divider line />

        <SectionContactForm
          title='Skontaktuj się przez formularz'
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
