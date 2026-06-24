import Divider from '@/components/atoms/Divider';
import InlineLink from '@/components/atoms/InlineLink';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import LogoCarousel from '@/components/organisms/carousels/LogoCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import WorkSteps from '@/components/organisms/WorkSteps';
import { getAboutAlternates } from '@/lib/i18n/pages/about';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Arteon',
    url: siteUrl,
    foundingDate: '2020',
    knowsAbout: [
      'Web Development',
      'Web Design',
      'Graphic Design',
      'E-commerce',
      'SEO',
      'WordPress',
      'Next.js',
      'Online Marketing',
      'Brand Identity',
      'UI/UX Design',
    ],
  },
  dateCreated: '2024-01-01',
  dateModified: '2025-03-05',
};

export const metadata = {
  title: 'O nas - strategia, kreacja i widoczność - Arteon',
  description:
    'Poznaj Arteon: łączymy strategię, branding, technologię i marketing w jeden proces. Zobacz, jak pracujemy i dlaczego klienci nam ufają.',
  alternates: getAboutAlternates('pl'),
  openGraph: {
    title: 'O nas - strategia, kreacja i widoczność - Arteon',
    description:
      'Poznaj Arteon: łączymy strategię, branding, technologię i marketing w jeden proces. Zobacz, jak pracujemy i dlaczego klienci nam ufają.',
    url: toAbsoluteUrl('/o-nas'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
        alt: 'O nas - Arteon',
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={profilePageJsonLd} id='schema-about-profilepage' />
      <HeroBanner
        title='O nas'
        description='Arteon - strategia, kreacja i widoczność, które przynoszą rezultaty'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Wrapper as='article' itemScope itemType='https://schema.org/AboutPage'>
        <Divider size='sm' />

        <SectionBasic
          imageSrc='/assets/arteon-sygnet-01.webp'
          imageAlt='logo arteon'
          title='Kim jesteśmy'
        >
          <p>
            W Arteon łączymy strategię, design i technologię w jeden proces.
            Wdrażamy doświadczenie z pracy dla globalnych marek w małych i
            średnich biznesach - tak, żeby Twoja marka była spójna, a działania
            przynosiły konkretne rezultaty.
          </p>
          <p className='mt-2'>
            Nie sprzedajemy „samej strony”. Zaczynamy od celu (zapytania,
            sprzedaż, rekrutacja, wizerunek), a dopiero potem dobieramy
            narzędzia: ofertę, identyfikację, treści, wdrożenie i kanały
            dotarcia.
          </p>
          <ul className='mt-4 list-disc space-y-1 pl-6'>
            <li>Strategia i architektura oferty</li>
            <li>Branding i projekty graficzne</li>
            <li>Strony, sklepy i aplikacje webowe</li>
            <li>Treści, SEO i widoczność</li>
            <li>Kampanie, analityka i optymalizacja</li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionInfo
          title='Dlaczego powstaliśmy?'
          description='Widzimy powtarzający się problem: firmy inwestują w pojedyncze elementy (strona, reklamy, logo), ale bez spójnej oferty, treści i planu te działania nie składają się na wynik. Dlatego pracujemy w modelu: diagnoza → plan → realizacja → pomiar → optymalizacja.'
        ></SectionInfo>

        <Divider line />

        <SectionSteps
          title='Co nas wyróżnia?'
          grid='two'
          items={[
            {
              title: 'Komplet usług wokół Twojej oferty i komunikacji',
              description: (
                <p>
                  Jedna odpowiedzialność, jeden plan: strategia, kreacja,
                  wdrożenie i widoczność. Bez rozbijania pracy na kilku
                  wykonawców.
                </p>
              ),
            },
            {
              title: 'Dobór technologii do celu',
              description: (
                <p>
                  Najpierw cel. Potem narzędzia. Dobieramy technologię tak, by
                  szybciej dojść do wyniku, w ramach Twojego budżetu i skali.
                  Tłumaczymy każdą decyzję prosto, bez technicznego żargonu.
                </p>
              ),
            },
            {
              title: 'Widoczność i pomiar od startu',
              description: (
                <p>
                  SEO i analityka od pierwszego dnia: struktura, treści i
                  techniczne podstawy. Po wdrożeniu dostajesz propozycję „co
                  dalej”, żeby rosnąć szybciej.
                </p>
              ),
            },

            {
              title: 'Gwarancja i proste rozliczenia',
              description: (
                <p>
                  Jasne zasady: faktura po realizacji (małe projekty), przy
                  większych niska zaliczka i kamienie milowe. Gwarancja opisana
                  w <InlineLink href='/regulamin'>regulaminie</InlineLink>. Po
                  wdrożeniu dwa miesiące wsparcia w cenie.
                </p>
              ),
            },
          ]}
        />

        <Divider line />

        <WorkSteps />

        <Divider line />

        <ProjectsCarousel title='Wybrane realizacje' projects={[]} />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <LogoCarousel />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zacznijmy od rozmowy'
        description='Jasny plan i odpowiedzialność po naszej stronie. Niezależnie od wymagań znajdziemy najlepszą drogę do osiągnięcia zamierzonych celów.'
        btnOne='Skontaktuj się'
        btnOneHref='/kontakt'
        btnTwo='Poznaj ofertę'
        btnTwoHref='/uslugi'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />
    </>
  );
}
