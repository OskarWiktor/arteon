import Script from 'next/script';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionImageGallery from '@/components/organisms/sections/SectionImageGallery';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title:
    'Optymalizacja prędkości ładowania strony internetowych WordPress - gwarancja wydajności 90+/100 | Arteon',
  description:
    'Dedykowana oferta optymalizacji stron www stworzonych w WordPress z gwarancją wydajności 90+/100 według PageSpeed. Szybsze ładowanie = więcej klientów.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/optymalizacja-strony-wordpress',
  },
  openGraph: {
    title:
      'Optymalizacja prędkości ładowania strony internetowych WordPress - gwarancja wydajności 90+/100 | Arteon',
    description:
      'Dedykowana oferta optymalizacji stron www stworzonych w WordPress z gwarancją wydajności 90+/100 według PageSpeed. Szybsze ładowanie = więcej klientów.',
    url: `${siteUrl}/uslugi/optymalizacja-strony-wordpress`,
    type: 'website',
    siteName: 'Arteon',
    images: [
      {
        url: `${siteUrl}/assets/projects/arteon-baners-camper-albania-mockup.webp`,
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/optymalizacja-strony-wordpress',
    serviceName:
      'Optymalizacja wydajności strony internetowych stworzonych w WordPress',
    description:
      'Dedykowana oferta optymalizacji stron www stworzonych w WordPress z gwarancją wydajności 90+/100 według PageSpeed. Szybsze ładowanie = więcej klientów.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script
      id='schema-service-optymalizacja-wordpress'
      type='application/ld+json'
    >
      {JSON.stringify(json)}
    </Script>
  );
}

/**
 * Renders the "Optymalizacja strony WordPress" marketing and offer page.
 *
 * The page includes hero banner, benefits belt, breadcrumbs, multiple informational
 * sections (features, steps, pricing, testimonials, FAQs), contact form, related
 * services, CTAs, and JSON-LD service schema for SEO.
 *
 * @returns The React element representing the complete WordPress optimization offer page.
 */
export default function OfferOptimizationWordPressPage() {
  return (
    <>
      <HeroBanner
        title='Szybsze ładowanie strony = więcej klientów'
        description={
          <>
            Wynik wydajności witryny jest czynnikiem rankingowym w Google.
            Strona, która ładuje się szybko przekłada się bezpośrednio na więcej
            więcej klientów. Sprawdź nasz sprawdzony proces optymalizacji
            WordPress z gwarancją wyniku 90+/100 według PageSpeed Insights.
          </>
        }
        secondaryCtaLabel='Przyśpiesz swoją stronę'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: '/uslugi/optymalizacja-strony-wordpress',
          label: 'Optymalizacja strony WordPress',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionInfo
          title='Co realnie daje optymalizacja strony WordPress?'
          subtitle='Wydajność, stabilność i gotowość na ruch'
        >
          <p>
            Wolno ładująca się strona internetowa utrudnia pozyskiwanie
            klientów. Nawet jeśli treść na Twojej stronie jest świetna i bardzo
            przydatna dla Twoich klientów, to długi czas ładowania sprawi, że
            wielu z nich wróci do wyszukiwarki i przejdzie do strony konkurencji
            aby szybciej znaleźć potrzebne informacje. W efekcie strona, która
            działa wolno, ogranicza rozwój biznesu i zmniejsza skuteczność
            wszelkich działań marketingowych.
          </p>
          <br />
          <p>
            Testowaliśmy wiele sposobów przyspieszania stron internetowych
            stworzonych w WordPress i wypracowaliśmy proces optymalizacji, który
            pozwala osiągnąć realny wynik 90+/100 w PageSpeed Insights, bez
            zmiany wyglądu witryny czy utraty funkcjonalności. W ramach
            optymalizacji skupiamy się na technicznych aspektach WordPressa,
            które mają największy wpływ na szybkość ładowania strony i
            stabilność działania, dzięki temu wszystkie strony które posiadasz
            obecnie jak i wszystkie przyszłe strony ładują się według
            nowoczesnych standardów.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionImageGallery
          title='Wyniki przed i po naszych optymalizacji oraz stworzonych przez nas stron w WordPress'
          grid='six'
          noWrapper
          images={[
            {
              alt: 'Autokorfu - wynik wydajności witryny przed optymalizacją',
              src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-przed.webp',
            },
            {
              alt: 'Autokorfu - wynik wydajności witryny po optymalizacji',
              src: '/assets/projects/autokorfu/autokorfu-optymalizacja-strony-wynik-po.webp',
            },
            {
              alt: 'Camper Albania - wynik wydajności witryny przed optymalizacją',
              src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-przed.webp',
            },
            {
              alt: 'Camper Albania - wynik wydajności witryny po optymalizacji',
              src: '/assets/projects/camper-albania/camper-albania-optymalizacja-strony-wynik-po.webp',
            },
            {
              alt: 'MSC Psychotherapy - wynik wydajności witryny przed optymalizacją',
              src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-przed.webp',
            },
            {
              alt: 'MSC Psychotherapy - wynik wydajności witryny po optymalizacji',
              src: '/assets/projects/msc/msc-optymalizacja-strony-wynik-po.webp',
            },
            {
              alt: 'Eliza Wrońska - wynik wydajności witryny przed optymalizacją',
              src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-przed.webp',
            },
            {
              alt: 'Eliza Wrońska - wynik wydajności witryny po optymalizacji',
              src: '/assets/projects/eliza-wronska/eliza-wronska-optymalizacja-strony-wynik-po.webp',
            },
            {
              alt: 'NaPilota - wynik wydajności stworzonej przez nas strony WordPress',
              src: '/assets/projects/napilota/napilota-wynik-wydajnosci-witryny.webp',
            },
            {
              alt: 'StepArd - wynik wydajności stworzonej przez nas strony WordPress',
              src: '/assets/projects/stepard/strona/stepard-wynik-wydajnosci-witryny.webp',
            },
            {
              alt: 'Izoluk - wynik wydajności stworzonej przez nas strony WordPress',
              src: '/assets/projects/izoluk/izoluk-optymalizacja-strony-wynik.webp',
            },
            {
              alt: 'Finish Masters - wynik wydajności stworzonej przez nas strony WordPress',
              src: '/assets/projects/finish-masters/strona/finish-masters-optymalizacja-strony-wynik.webp',
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/projects/finish-masters/strona/finish-masters-optymalizacja-strony-wynik.webp'
          imageAlt='Wynik optymalizacji strony WordPress - raport PageSpeed Insights firmy Finish Masters'
          subtitle='Dla kogo'
          title='Kiedy optymalizacja witryny ma największy sens?'
          description='Optymalizacja WordPress jest szczególnie przydatna dla:'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              Firm posiadających stronę internetową z rozbudowaną ofertą lub
              blogiem, które stawiają na pozyskiwanie nowych klientów
              bezpośrednio z Google,
            </li>
            <li>
              Firm, które prowadzą kampanie reklamowe lub działania marketingowe
              i chcą aby zwiększyć skuteczność tych działań poprzez szybszą
              stronę internetową,
            </li>
            <li>
              Firm, które posiadają wiele funkcjonalności na stronie, które
              spowalniają jej ładowanie,
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionSteps
          title='Jak przebiega optymalizacja strony WordPress?'
          items={[
            {
              title: '1. Analiza strony',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Na początku sprawdzamy dokładnie co generuje na Twojej
                    stronie problemy według wyniku w PageSpeed Insights.
                    Następnie prosimy o dostęp administratora do panelu
                    WordPress, aby móc przeprowadzić optymalizację.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Optymalizacja',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Następnie sprawdzamy sposób ładowania stron, potencjalne
                    konflikty lub dublikacje wtyczek, sposób ładowania obrazów
                    oraz wszelkich elementów. Po dokładnym sprawdzeniu,
                    przechodzimy od razu do działania - optymalizujemy grafiki,
                    konfigurujemy cache, sposób ładowania skryptów i
                    porządkujemy wtyczki.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Podsumowanie i rozliczenie',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Na koniec przedstawiamy Ci wynik testów prędkości przed i
                    po, na wybranych podstronach i dopiero po tym, wystawiamy
                    fakturę za wykonane prace. Dzięki temu masz pewność, że
                    optymalizacja przyniosła efekt.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionPrices
          title='Cennik optymalizacji strony WordPress'
          plans={[
            {
              name: 'Optymalizacja dla małej strony',
              price: 'od 650 do 850 zł',
              description:
                'Dla prostych stron firmowych, które mają kilka podstron i nie posiadają rozbudowanych funkcjonalności.',
              features: [
                'Analiza stanu technicznego witryny,',
                'Konfiguracja cache i optymalizacja ładowania skryptów,',
                'Porządkowanie wtyczek,',
                'Optymalizacja grafik,',
                'Raport „przed i po”,',
              ],
            },
            {
              name: 'Optymalizacja dla rozbudowanej witryny',
              price: 'od 900 do 1450 zł',
              description:
                'Dla stron z większą liczbą podstron, które posiadają rozbudowane funkcjonalności i integracje.',
              features: [
                'Wszystko z pakietu dla prostych stron,',
                'Optymalizacja ładowania treści dynamicznych,',
                'Optymalizacja integracji z zewnętrznymi systemami,',
                'Konfiguracja kolejności ładowania,',
              ],
            },
          ]}
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/optymalizacja-strony-wordpress'
          title='Najczęstsze pytania dotyczące optymalizacji stron internetowych w WordPress'
          items={[
            {
              question:
                'Jakie dostępy są potrzebne do optymalizacji strony WordPress?',
              answer:
                'Do przeprowadzenia prac potrzebny jest dostęp do systemu WordPress. Przy głębszych zmianach lub konieczności modyfikacji ustawień serwera wymagany może być także dostęp do hostingu.',
            },
            {
              question:
                'Czy optymalizacja prędkości ładowania sama w sobie poprawi pozycje witryny w Google?',
              answer:
                'Tak, Google wprost przyznaje, że wynik wydajności witryny, w szczególności na telefonach, wpływa na pozycję w Google. Szybsza strona jest wygodniejsza również dla użytkowników i ogranicza potencjalny powrót do wyszukiwarki i Twojej konkurencji. Sama pozycja zależy także od treści, linków i wielu innych czynników, dlatego optymalizacja WordPress często łączona jest z działaniami SEO.',
            },
            {
              question: 'Czy po optymalizacji nowe strony też będą szybsze?',
              answer:
                'Tak, mamy sprawdzony sposób, który pozwala, bez zmian wizualnych i usuwania funkcjonalności, przyśpieszyć ładowanie wszystkich istniejących jak i nowych podstron. Optymalizujemy samo działanie systemu i sposób ładowania wszelkich treści, bez optymalizacji pojedynczych podstron lecz tego, co te podstrony tworzy.',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Sprawdź cenę optymalizacji strony WordPress'
          description='Podaj adres swojej strony WordPress a my przygotujemy wycenę jej optymalizacji.'
          imageSrc='/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-wynik-optymalizacji-witryny-w-pagespeed-dla-urzadzen-mobilnych.webp'
          imageAlt='Wynik optymalizacji strony WordPress w PageSpeed Insights'
          defaultSubject='Optymalizacja strony WordPress'
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Tworzenie stron w WordPress',
              size: 'medium',
              backgroundImage:
                '/assets/projects/izoluk/strona-internetowa-firma-budowlana-ocieplenia-izoluk-mockup-realizacja-arteon.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Audyt SEO',
              size: 'small',
              backgroundImage:
                '/assets/projects/kolorowe-talerze/moskup-strony-kolorowe-talerze.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/audyt-seo',
            },
            {
              title: 'Optymalizacja SEO',
              size: 'small',
              backgroundImage:
                '/assets/projects/arteon-baners-camper-albania-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/optymalizacja-seo',
            },
          ]}
        />
        <Divider line />

        <ArticlesCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Przydatne artykuły dotyczące stron internetowych'
          categorySlug='strony'
          articles={getArticlePreviewsByCategory('strony', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zadbaj o wydajność swojej strony WordPress'
        description='Szybsza, stabilniejsza strona ułatwia pozyskiwanie klientów, wspiera pozycję w Google i pozwala bez obaw zwiększyć ruch na stronie.'
        btnOne='Sprawdź co możemy dla Ciebie zrobić'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
