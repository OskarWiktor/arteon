import Link from 'next/link';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import LogoCarousel from '@/components/organisms/carousels/LogoCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getAboutAlternates } from '@/lib/i18n/pages/about';
import { processStepsSections } from '@/lib/processSteps';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
const profilePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  mainEntity: {
    '@type': 'Organization',
    '@id': `${siteUrl}#organization`,
    name: 'Arteon',
    url: siteUrl,
    foundingDate: '2024',
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
  title:
    'Parter dla Twojego biznesu: projekty graficzne, strony www, seo - Arteon',
  description:
    'Poznaj Arteon: łączymy strategię, branding, technologię i marketing w jeden proces. Zobacz, jak pracujemy i dlaczego klienci nam ufają.',
  alternates: getAboutAlternates('pl'),
  openGraph: {
    title:
      'Parter dla Twojego biznesu: projekty graficzne, strony www, seo - Arteon',
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
        title='Arteon - parter dla Twojego biznesu: grafika, technologia i widoczność'
        description='Jesteśmy nowoczesną agencją interaktywną, która pomaga małym i średnim przedsiębiorstwom budować silną i spójną obecność w świecie cyfrowym.'
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
            Jesteśmy agencją interaktywną w której możesz zrealizować zarówno
            mały projekt wizytówki jak i kompleksową aplikację webową. Tworzymy
            rozwiązania, które są nowoczesne, bezpieczne i dopasowane do Twojego
            budżetu.
          </p>
          <p className='mt-2'>
            Dbamy o detale: nasze strony są błyskawiczne (co potwierdzają wyniki
            w PageSpeed Insights), a materiały drukowane idealnie współgrają z
            wizerunkiem online.
          </p>
        </SectionBasic>

        <Divider line />

        <SectionSteps
          title='Co nas wyróżnia?'
          grid='two'
          items={[
            {
              title: 'Wszystko w jednym miejscu',
              description: (
                <p>
                  Od pomysłu, przez logo i stronę WWW, aż po pozycjonowanie w
                  Google. Z nami zrealizujesz wszystko w jednym miejscu
                </p>
              ),
            },
            {
              title: 'Jasna komunikacja',
              description: (
                <p>
                  Wiemy, że nie każdy rozumie techniczne aspekty, dlatego zawsze
                  staramy się mówić jak najprościej i na każdym etapie
                  informujemy Cie o postępach.
                </p>
              ),
            },
            {
              title: 'Nowoczesne standardy',
              description: (
                <p>
                  Nie używamy powielanych szablonów, do każdego podchodzimy
                  indywidualnie i stawiamy na jakość i detale.
                </p>
              ),
            },

            {
              title: 'Gwarancja i proste rozliczenia',
              description: (
                <p>
                  Posiadamy jasne gwarancje i rozliczamy się z Tobą dopiero po
                  realizacji i Twojej pełnej akceptacji powierzonej nam pracy.
                </p>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          title='Czym jeszcze się zajmujemy?'
          variant='left'
          imageSrc='/assets/tools/free-html-email-signature-generator/darmowy-generator-stopki-mailowej-pl.webp'
          imageAlt='Darmowy generator stopki mailowej Arteon - podgląd narzędzia'
        >
          <p>
            Oprócz wszelkich usług związanych z programowaniem, pozycjonowaniem,
            marketingiem czy projektami graficznymi tworzymy w międzyczasie
            międzynarodową{' '}
            <Link href='/narzedzia' className='inline-link'>
              platformę z narzędziami
            </Link>
            . Narzędzia te, są dla nas dodatkowym źródłem pozyskiwania klientów
            oraz pokazem naszych możliwości w tworzeniu dedykowanych rozwiązań i
            funkcjonalności, które są istotne dla każdego biznesu. Dzięki nim
            możemy zaprezentować również nasze umiejętności w pozycjonowaniu -
            nie tylko lokalnym czy krajowym ale tym najtrudniejszym, czyli
            międzynarodowym.
          </p>
          <p className='mt-4'>
            Jakie są to narzędzia? Tworzymy zarówno proste konwertery jednostek
            jak i bardziej zaawansowane narzędzia, które wspierają właścicieli
            firm w budowaniu profesjonalnego wizerunku np. przez budowę{' '}
            <Link
              href='/narzedzia/darmowy-generator-stopki-mailowej'
              className='inline-link'
            >
              firmowych stopek mailowych
            </Link>{' '}
            a także takie które wspierają w pracy nas oraz innych, pracujących
            nad designem czy stronami bazując na własnych doświadczeniach. Z
            naszego{' '}
            <Link
              href='/narzedzia/generator-palet-kolorow'
              className='inline-link'
            >
              generatora palet kolorystycznych
            </Link>{' '}
            czy z{' '}
            <Link
              href='/narzedzia/konwerter-jpg-na-webp'
              className='inline-link'
            >
              konwerterów obrazu do webp
            </Link>{' '}
            korzystamy dosłownie codziennie.
          </p>
          <p className='mt-4'>
            A skąd w ogóle taki pomysł? Widzimy, że znacząca część narzędzi
            internetowych jest okropnie przestarzała - ładują się one bardzo
            wolno, wymagają kliknięcia kilku przycisków aby dokonać prostego
            przeliczenia, mają agresywne reklamy w postaci wyskakujących okien
            czy po prostu wyglądają bardzo nieestetycznie, jak sprzed dekady, bo
            de facto sprzed dekady są. W dobie rozwoju AI uważamy to za co
            najmniej nieporozumienie - tu mamy sztuczną inteligencję a ty
            kalkulator kilometrów na metry, który ładuje się 10 minut i wymaga
            dwóch kliknięć.
          </p>
          <p className='mt-4'>
            Kolejna kwestia jest taka, że większość narzędzi jest rozsiana po
            dziesiątkach domen i ciężko je wszystkie zapamiętać, dlatego też
            chcemy aby nasza platforma miała wszystko w jednym miejscu. I też,
            nie ma co ukrywać, dają nam one dodatkowy pasywny dochód z AdSense,
            który pozwala na większą stabilność całego biznesu.
          </p>
        </SectionBasic>

        <Divider line />

        <SectionTimeline {...processStepsSections.home} />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <LogoCarousel />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Skontaktuj się'
        description='Potrzebujesz strony internetowej, sklepu, projektu graficznego, optymalizacji SEO lub prędkości ładowania witryny? Skontaktuj się z nami, przygotujemy dla Ciebie darmową wycenę i jasny plan działania.'
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
