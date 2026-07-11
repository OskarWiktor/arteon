import Script from 'next/script';
import { IoColorPalette } from 'react-icons/io5';
import { RiFileTextLine, RiLayoutLine, RiBookOpenLine } from 'react-icons/ri';
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
import SectionBasic from '@/components/organisms/sections/SectionBasic';
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
  title: 'Projekt menu restauracji | Arteon',
  description:
    'Projektujemy menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji',
  },
  openGraph: {
    title: 'Projekt menu restauracji | Arteon',
    description:
      'Projektujemy menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/nocturna/nocturna-menu-mockup.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
    serviceName: 'Projekt menu restauracji',
    description:
      'Projekt graficzny menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script
      id='schema-service-projekt-menu-restauracji'
      type='application/ld+json'
    >
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignMenuPage() {
  return (
    <>
      <HeroBanner
        title='Projekt menu restauracji'
        description={
          <>
            Stworzymy dla Ciebie estetyczne i czytelne menu restauracji,
            kawiarni lub baru - spójne z klimatem lokalu i Twoją marką. Karta,
            która pomaga gościom wybrać, a Tobie sprzedawać.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/nocturna/nocturna-menu-mockup.webp'
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
          href: `/uslugi/projekty-graficzne/projekt-menu-restauracji`,
          label: 'Projekt menu restauracji',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Nasze realizacje projektów graficznych'
          category='projekty graficzne'
        />

        <Divider line />

        <SectionBasic
          title='Dlaczego warto zainwestować w profesjonalne menu?'
          imageSrc='/assets/projects/nocturna/nocturna-menu-mockup.webp'
          imageAlt='Realizacja karty koktajli dla baru Nocturna - mockup Arteon'
        >
          <p>
            <strong>
              Menu to najważniejszy materiał sprzedażowy w gastronomii.
            </strong>{' '}
            Dobrze zaprojektowana karta dań prowadzi gościa od pierwszego
            spojrzenia po finalne zamówienie. Estetyczna, czytelna forma ułatwia
            wybór i ogranicza „paraliż decyzyjny”.
          </p>

          <br />

          <p>
            <strong>
              Układ graficzny ma realny wpływ na apetyt i decyzję.
            </strong>{' '}
            Sposób ułożenia sekcji, wyróżników i cen może zwiększyć średni
            rachunek nawet o kilkanaście procent, jeśli odpowiednie pozycje są
            pokazane we właściwym miejscu i w odpowiedniej formie.
          </p>

          <br />

          <p>
            <strong>Dobre menu robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Porządkuje ofertę i ułatwia wybór,</li>
            <li>Wzmacnia klimat i tożsamość lokalu,</li>
            <li>Zwiększa sprzedaż kluczowych dań i napojów.</li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając menu restauracji?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Układ dopasowany do oferty',
              description: (
                <p>
                  Projektujemy logiczne sekcje - przystawki, dania główne,
                  napoje, desery - z czytelną hierarchią, która ułatwia podjęcie
                  decyzji i kieruje wzrok na kluczowe pozycje.
                </p>
              ),
              icon: (
                <RiLayoutLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Spójność z klimatem lokalu',
              description: (
                <p>
                  Kolory, czcionki i styl graficzny dopasowujemy do wnętrza i
                  charakteru restauracji - nowoczesnego, klasycznego,
                  rustykalnego czy street foodowego.
                </p>
              ),
              icon: (
                <IoColorPalette
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Gotowe pliki do druku i online',
              description: (
                <p>
                  Dostarczamy pliki przygotowane do druku oraz wersje online,
                  które bez problemu dodasz na stronę, do mediów
                  społecznościowych lub do kodu QR.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Możliwość samodzielnej aktualizacji',
              description: (
                <p>
                  Na życzenie przygotowujemy łatwe w edycji pliki źródłowe,
                  dzięki czemu samodzielnie zaktualizujesz sezonowe dania, ceny
                  czy nowe pozycje.
                </p>
              ),
              icon: (
                <RiBookOpenLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo projekt menu restauracji ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla restauracji i bistro,</strong> które chcą, aby karta
              współgrała z wnętrzem i poziomem serwisu.
            </li>
            <li>
              <strong>Dla kawiarni i cukierni,</strong> które potrzebują
              czytelnych kart napojów, ciast i zestawów śniadaniowych.
            </li>
            <li>
              <strong>Dla barów i koktajlbarów,</strong> gdzie właściwa
              prezentacja drinków realnie wpływa na sprzedaż pozycji premium.
            </li>
            <li>
              <strong>Dla food trucków i konceptów sezonowych,</strong> które
              chcą prostego, ale charakterystycznego menu do druku i online.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Jakie efekty możesz zobaczyć po wdrożeniu profesjonalnego menu?'
          subtitle='Efekty po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Bardziej zdecydowani goście,</strong> którzy szybciej
              wybierają dania i rzadziej proszą o „chwilę na zastanowienie”.
            </li>
            <li>
              <strong>Wyższa sprzedaż pozycji priorytetowych,</strong> dzięki
              świadomie zaprojektowanym wyróżnieniom i sekcjom specjalnym.
            </li>
            <li>
              <strong>Mniej pytań o podstawowe informacje,</strong> ponieważ
              karta rozwiewa większość wątpliwości dotyczących dań, dodatków i
              cen.
            </li>
            <li>
              <strong>Spójny wizerunek online i offline,</strong> gdy ta sama
              estetyka pojawia się na kartach, stronie i w mediach
              społecznościowych.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych' />

        <Divider line />

        <SectionPrices
          title='Projekt menu restauracji - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - pojedyncza karta menu',
              price: 'wycena indywidualna',
              description:
                'Dla lokali, które potrzebują jednej, dopracowanej karty dań lub napojów w formacie A4 lub DL.',
              features: [
                'Krótki brief o lokalu, klimacie i ofercie',
                'Projekt jednostronicowego menu (np. karta dań lub karta napojów)',
                'Dopasowanie kolorystyki i typografii do wnętrza lokalu',
                'Plik gotowy do druku oraz wersja PDF do online',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - pełna karta dań i napojów',
              price: 'wycena indywidualna',
              description:
                'Dla restauracji, które chcą spójnej karty dań, napojów i deserów - np. w formie składanej.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Projekt wielostronicowej lub składanej karty (np. A3 składane na pół)',
                'Wyraźny podział na sekcje: przystawki, dania główne, desery, napoje',
                'Wyróżnienia dla dań specjalnych, sezonowych lub polecanych przez szefa kuchni',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system menu i kart sezonowych',
              price: 'wycena indywidualna',
              description:
                'Dla konceptów gastronomicznych, które potrzebują stałej karty plus dodatków sezonowych, lunch menu lub specjalnych wkładek.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt dodatkowych wkładek sezonowych / lunchowych',
                'Ustalenie zasad dla przyszłych aktualizacji (styl, układ, wyróżnienia)',
                'Przygotowanie plików źródłowych do dalszej edycji',
                'Wsparcie przy wdrożeniu wersji online (PDF, grafiki do mediów społecznościowych)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Ostateczna wycena zależy od liczby stron, języków, wariantów menu i stopnia rozbudowania oferty. Po krótkim briefie przygotujemy dopasowaną propozycję.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji menu restauracji'
          description='Napisz jakie dania są w ofercie, czy posiadasz logo oraz zdjęcia dań i czy potrzebujesz pomocy z treścią - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/nocturna/nocturna-menu-mockup.webp'
          imageAlt='Realizacja projektu menu - bar Nocturna'
          defaultSubject='Projekt menu restauracji'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji'
          title='Najczęstsze pytania dotyczące projektów menu dla restauracji'
          items={[
            {
              question: 'W jakich formatach najczęściej projektujecie menu?',
              answer:
                'Najczęściej pracujemy w formatach A5, A4 i DL lub formatach składanych (np. A3 na pół), ale możemy dostosować projekt do wymiarów kart używanych w Twoim lokalu.',
            },
            {
              question: 'Czy mogę otrzymać wersję do publikacji online?',
              answer:
                'Tak, przygotowujemy wersje cyfrowe (PDF, PNG, JPG) do publikacji na stronie internetowej oraz mediach społecznościowych.',
            },
            {
              question:
                'Czy możliwe jest przygotowanie wersji wielojęzycznej menu?',
              answer:
                'Tak, możemy zaprojektować menu w kilku wersjach językowych lub umieścić kilka języków w jednej karcie, przy zachowaniu pełnej czytelności.',
            },
            {
              question: 'Jak długo trwa realizacja projektu menu?',
              answer:
                'Zazwyczaj realizacja menu trwa od 3 do 5 dni roboczych. Przy rozbudowanych menu z wieloma pozycjami i językami termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zlecić późniejszą aktualizację menu?',
              answer:
                'Tak, oferujemy aktualizacje sezonowe oraz modyfikacje cen czy składów. Na życzenie przygotowujemy także pliki źródłowe, które umożliwiają samodzielną edycję.',
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
                '/assets/projects/restoquality/mockup-wizytowki-restoquality.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Szablony media społecznościowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Przydatne artykuły dotyczące projektów graficznych'
          categorySlug='grafika'
          articles={getArticlePreviewsByCategory('grafika', 6)}
        />
        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zaprojektujmy menu, które zapamiętają Twoi klienci'
        description='Profesjonalny projekt menu restauracyjnego - estetyka, czytelność i emocje, które zwiększają sprzedaż.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/nocturna/nocturna-menu-mockup.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
