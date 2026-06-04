import Script from 'next/script';
import { IoAnalytics } from 'react-icons/io5';
import {
  RiBarChart2Fill,
  RiCustomerService2Line,
  RiFileList2Line,
  RiLightbulbFlashLine,
  RiLineChartLine,
  RiSearchEyeLine,
  RiSearchLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import CTABanner from '@/components/organisms/CTABanner';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import WorkSteps from '@/components/organisms/WorkSteps';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Marketing internetowy - SEO, reklamy i komunikacja | Arteon',
  description:
    'Sprawdź naszą rozbudowaną ofertę marketingu internetowego. Przeprowadź audyt swojej obecności w sieci i przyciągnij właściwych klientów',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/marketing' },
  openGraph: {
    title:
      'Sprawdź naszą rozbudowaną ofertę marketingu internetowego. Przeprowadź audyt swojej obecności w sieci i przyciągnij właściwych klientów',
    description:
      'Kompletny marketing: od diagnozy i wdrożeń SEO, przez stałe pozycjonowanie, po kampanie płatne, media społecznościowe i spójny branding.',
    url: 'https://www.arteonagency.pl/uslugi/marketing',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/msc/moskup-strony-msc-psychotherapy.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ItemListSchema() {
  const services = [
    { name: 'Audyt SEO', path: '/uslugi/marketing/audyt-seo' },
    { name: 'Optymalizacja SEO', path: '/uslugi/marketing/optymalizacja-seo' },
    { name: 'Pozycjonowanie stron', path: '/uslugi/marketing/pozycjonowanie-stron' },
  ];
  const json = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/uslugi/marketing#itemlist`,
    name: 'Usługi marketingowe - Arteon',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}${s.path}`,
      name: s.name,
    })),
  };
  return (
    <Script id='schema-itemlist-marketing' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferMarketingHubPage() {
  return (
    <>
      <HeroBanner
        title='Marketing internetowy'
        description={<>Przyciągnij nowych klientów, przemyślanym działaniem marketingowym</>}
        variant='left'
        backgroundImage='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <FeatureGrid
          title='Co zyskujesz zlecając nam marketing?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Jasną strategię działania',
              description: (
                <>
                  Plan działań oparty na psychologii w biznesie z podziałem na szybkie wygrane i
                  strategiczne działania długoterminowe.
                </>
              ),
              icon: <RiLightbulbFlashLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Raporty i decyzje oparte na danych',
              description: (
                <>
                  Przed realizacją jakichkolwiek działań, dokładnie badamy Twoją konkurencję, tak,
                  abyś miał pewność, że marketing z nami będzie skuteczny.
                </>
              ),
              icon: <IoAnalytics className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Pełna własność danych i kont',
              description: (
                <>
                  Masz dostęp do wszystkich narzędzi, z których korzystamy, dzięki czemu w dowolnej
                  chwili możesz sprawdzić wyniki naszych działań.
                </>
              ),
              icon: <RiShieldCheckLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'SEO techniczne + treściowe',
              description: (
                <>
                  Prowadzimy pełne działania pozycjonowania stron, dzięki czemu Twoja witryna ma
                  treść, która odpowiada klientom oraz techniczną strukturę, którą lubią
                  wyszukiwarki
                </>
              ),
              icon: <RiSearchLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Lokalne lub krajowe SEO',
              description: (
                <>
                  Prowadzimy działania SEO krajowe oraz lokalne, dzięki czemu Twój biznes może
                  rozwijać się w Twoim mieście i jednocześnie za granicą lub w całym kraju
                </>
              ),
              icon: <RiSearchEyeLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Reklamy Google i Meta',
              description: (
                <>
                  Tworzymy kampanie oparte na realnych problemach klientów. Testujemy kreacje i
                  słowa kluczowe, a budżet kierujemy w to, co działa.
                </>
              ),
              icon: <RiBarChart2Fill className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: (
                <>
                  Na każdym etapie wiesz, ile i za co płacisz. Budżet, zakres i terminy są rozpisane
                  przed startem działań.
                </>
              ),
              icon: (
                <RiCustomerService2Line className={cn('text-primary', normalIconSizeClasses)} />
              ),
            },
            {
              title: 'Wsparcie po wdrożeniu',
              description: (
                <>
                  Stale informujemy Cię o wynikach naszych działań, dajemy Ci jasne podsumowanie w
                  mailu oraz prowadzimy konsultacje
                </>
              ),
              icon: <RiShieldCheckLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
          ]}
        />

        <Divider line />

        <SectionSteps
          title='Oferta marketingu'
          subtitle='Skutecznie i przejrzyście'
          description='Każda usługa ma własną stronę z detalami, przykładami i cennikiem. Zaczynamy od diagnozy, kończymy na skalowaniu tego, co działa.'
          grid='two'
          items={[
            {
              icon: <RiFileList2Line className={largeIconSizeClasses} />,
              title: 'Audyt SEO',
              subtitle: 'Diagnoza i priorytety działań',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Przeprowadzamy audyt SEO, a następnie ustalamy cele i zakres na trzy najbliższe
                    miesiące: tematy treści, podstrony do dopracowania i działania wspierające Twoją
                    pozycję.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='/uslugi/marketing/audyt-seo'>
                      Zobacz audyt SEO
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiSearchEyeLine className={largeIconSizeClasses} />,
              title: 'Optymalizacja SEO',
              subtitle: 'Wdrożenia po audycie',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Optymalizujemy prędkość strony i poprawiamy ją od strony technicznej tak, aby
                    Google uznał ją za wartościową i lepszą od Twojej konkurencji.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='/uslugi/marketing/optymalizacja-seo'>
                      Przejdź do optymalizacji
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLineChartLine className={largeIconSizeClasses} />,
              title: 'Pozycjonowanie stron',
              subtitle: 'Stały wzrost widoczności',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Budujemy widoczność strategicznym działaniem co miesiąc. Wprowadzamy treści,
                    które odpowiadają na potrzeby Twoich klientów.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='/uslugi/marketing/pozycjonowanie-stron'>
                      Zobacz pozycjonowanie
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

        <WorkSteps variant='marketing' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt usług marketingowych'
          description='Napisz czym zajmuje się Twoja firma, podaj adres strony i opisz jakie cele chcesz osiągnąć - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp'
          imageAlt='Pozycjonowanie stron i marketing internetowy'
          defaultSubject='Marketing'
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Strony internetowe',
              size: 'large',
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Sklepy internetowe',
              size: 'medium',
              backgroundImage: '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Projekty graficzne',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne',
            },
            {
              title: 'Tworzenie treści',
              size: 'small',
              backgroundImage:
                '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
          ]}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Rozwiń markę mądrą strategią'
        description='Od audytu i wdrożeń po kampanie i treści - planujemy i prowadzimy działania, które zwiększają sprzedaż'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/msc/moskup-strony-msc-psychotherapy.webp'
        overlay='black'
      />

      <ItemListSchema />
    </>
  );
}
