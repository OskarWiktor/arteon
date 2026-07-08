import Script from 'next/script';
import { IoColorPalette } from 'react-icons/io5';
import {
  RiFileTextLine,
  RiTableLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import WorkSteps from '@/components/organisms/WorkSteps';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Projekt cennika | Arteon',
  description:
    'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika',
  },
  openGraph: {
    title: 'Projekt cennika | Arteon',
    description:
      'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-cennika',
    serviceName: 'Projekt cennika',
    description:
      'Przejrzysty projekt cennika firmowego. Estetyczny układ, typografia, kolory wraz z przygotowaniem do druku oraz wersją online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-projekt-cennika' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignPriceListPage() {
  return (
    <>
      <HeroBanner
        title='Projekt cennika'
        description={
          <>
            Zaprojektujemy cennik, który porządkuje Twoją ofertę i prowadzi
            klienta do wyboru właściwej opcji. W kilka dni otrzymasz gotowy plik
            do druku oraz wersję cyfrową do wykorzystania na stronie i w mediach
            społecznościowych.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: `/uslugi/projekty-graficzne`,
          label: 'Projekty graficzne',
        }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-cennika`,
          label: 'Projekt cennika',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          title='Przykładowe realizacje projektów graficznych'
          category='projekty graficzne'
        />

        <Divider line />

        <SectionInfo title='Dlaczego warto mieć profesjonalny projekt cennika?'>
          <p>
            Dobrze zaprojektowany układ cennika porządkuje ofertę, ułatwia
            porównanie, zachęca do wyboru droższych opcji oraz buduje
            profesjonalny wizerunek Twojej firmy. Klient widzi jasną i
            estetyczną strukturę, co dodatkowo wzbudza zaufanie.
          </p>

          <br />

          <p>
            <strong>Wygląd ma wpływ na decyzje zakupowe.</strong> Sposób
            prezentacji cen może realnie zwiększyć sprzedaż: odpowiednia
            hierarchia, wyróżnione pakiety oraz czytelne nazwy sprawiają, że
            rozmowa o cenie jest prostsza i mniej konfliktowa.
          </p>

          <br />

          <p>
            <strong>Dobry cennik robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Porządkuje informacje i buduje profesjonalny wizerunek,</li>
            <li>Ułatwia porównanie i podejmowanie decyzji,</li>
            <li>Wzmacnia zaufanie i zwiększa sprzedaż.</li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając cennik?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Przejrzysty układ i hierarchia',
              description: (
                <p>
                  Projektujemy logiczne sekcje, wyróżniamy kluczowe usługi i
                  podkreślamy rekomendowane opcje, aby ułatwić wybór klientowi,
                  ułatwiając przy tym rozmowę o cenach.
                </p>
              ),
              icon: (
                <RiTableLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: (
                <p>
                  Kolory, czcionki i ikony dopasowujemy do stylu Twojej marki
                  oraz branży. Cennik staje się integralną częścią Twojej
                  komunikacji.
                </p>
              ),
              icon: (
                <IoColorPalette
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wersje do druku i online',
              description: (
                <p>
                  Otrzymasz plik PDF gotowy do druku oraz wersję cyfrową do
                  publikacji na stronie czy mediach społecznościowych. Dostajesz
                  gotową paczkę plików.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Faktura po realizacji',
              description: (
                <p>
                  Płacisz dopiero po otrzymaniu gotowego projektu w finalnej
                  formie.
                </p>
              ),
              icon: (
                <RiMoneyDollarCircleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo jest projekt cennika?'
          subtitle='Kiedy ma największy sens?'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              Masz kilka lub kilkanaście usług / pakietów i klienci dopytują,
              czym dokładnie się różnią.
            </li>
            <li>Obecny cennik nie pasuje do reszty identyfikacji.</li>
            <li>
              Chcesz podnieść ceny, ale potrzebujesz lepszej argumentacji
              wizualnej i logicznej struktury oferty.
            </li>
            <li>
              Planujesz wprowadzić pakiety (Standard / Premium / VIP) i chcesz,
              aby klient naturalnie wybierał właściwą opcję.
            </li>
            <li>
              Chcesz mieć jeden spójny wizualnie cennik dla punktu
              stacjonarnego, strony www i mediów społecznościowych.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt cennika - przykładowe zakresy'
          plans={[
            {
              name: 'Cennik jednostronicowy',
              price: '200 zł',
              description: 'Dla firm z kilkunastoma usługami / produktami',
              features: [
                'Układ jednej strony cennika (np. A4) z logicznym podziałem na sekcje',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
                'Realizacja w 2-3 dni',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Cennik dwustronicowy',
              price: '300 zł',
              description: 'Dla firm, które mają bardziej rozbudowaną ofertę',
              features: [
                'Projekt cennika z sekcjami / kategoriami różnych usług i/lub pakietami',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '2 kierunki i dwie rundy korekt po pierwszej prezentacji',
                'Realizacja w 3-4 dni',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Cennik rozbudowany',
              price: 'od 400 zł',
              description:
                'Dla restauracji, gabinetów i firm z dużą liczbą pozycji, gdy cennik ma więcej niż 2 strony',
              features: [
                'Projekt cennika wielostronicowego z podziałem na kategorie usług / produktów',
                'Pliki gotowe do druku i wersja cennika do wykorzystania na stronie i mediach społecznościowych',
                '3 kierunki wyglądu i dwie rundy korekt po pierwszej prezentacji',
                'Realizacja w 5-7 dni',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Podane kwoty są kwotami końcowymi, podanymi na fakturze. Ostateczna wycena zależy od liczby pozycji w cenniku, liczby wersji, języków oraz indywidualnych potrzeb.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji cennika'
          description='Napisz jak wygląda oferta, ile pozycji ma zawierać cennik oraz czy posiadasz logo i zdjęcia - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp'
          imageAlt='Papier firmowy dla kancelarii LUX NOVA - przykład materiału drukowanego'
          defaultSubject='Projekt cennika'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-cennika'
          title='Najczęstsze pytania o projekt cennika'
          items={[
            {
              question: 'W jakim formacie przygotujecie cennik?',
              answer:
                'Najczęściej tworzymy cenniki w formacie A4 oraz A5. Na życzenie możemy przygotować cennik w innym formacie.',
            },
            {
              question: 'Czy mogę dodać zdjęcia lub ikony do cennika?',
              answer:
                'Tak, możemy wzbogacić projekt o grafiki, zdjęcia produktów lub ikony ilustrujące usługi.',
            },
            {
              question: 'Czy mogę później edytować cennik?',
              answer:
                'Tak, na życzenie możemy dostarczyć pliki źródłowe oraz prostą instrukcję edycji, dzięki której będziesz w stanie samodzielnie zaktualizować ceny.',
            },
            {
              question: 'Jak długo trwa realizacja?',
              answer:
                'Zazwyczaj od 3 do 5 dni roboczych. Dla cenników z dużą liczbą pozycji ( wieloma stronami ) termin ustalamy indywidualnie.',
            },
            {
              question:
                'Czy możliwe jest zrealizowanie cennika, który ma wiele stron?',
              answer:
                'Tak, możemy zaprojektować katalog cenowy, menu lub broszurę z cennikiem w formie wielostronicowej.',
            },
          ]}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Identyfikacja wizualna',
              size: 'large',
              backgroundImage: '/assets/projects/km2/mockup-logo-km2.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Strony internetowe',
              size: 'medium',
              backgroundImage:
                '/assets/projects/kolorowe-talerze/moskup-strony-kolorowe-talerze.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Projekt wizytówki',
              size: 'small',
              backgroundImage:
                '/assets/projects/finish-masters/wizytowki/mockup-wizytowki-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt katalogu',
              size: 'small',
              backgroundImage:
                '/assets/projects/restoquality/mockup-gazetka-restoquality.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-katalogu',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące projektów graficznych'
          categorySlug='grafika'
          articles={getArticlePreviewsByCategory('grafika', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Wzmocnij swój wizerunek'
        description='Zaprojektujemy przejrzysty cennik, który wzmocni wizerunek Twojej firmy.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
