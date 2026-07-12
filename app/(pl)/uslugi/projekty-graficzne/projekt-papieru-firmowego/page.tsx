import Script from 'next/script';
import {
  RiPencilRuler2Line,
  RiBookOpenLine,
  RiFileTextLine,
  RiMessage2Line,
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
  title: 'Projekt papieru firmowego | Arteon',
  description:
    'Papier firmowy z nagłówkiem i stopką. Szablony edytowalne (Word/PDF) oraz pliki do druku.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
  },
  openGraph: {
    title: 'Projekt papieru firmowego | Arteon',
    description:
      'Profesjonalny papier firmowy: szablony i pliki drukarskie zgodne z identyfikacją.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego',
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
    path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
    serviceName: 'Projekt papieru firmowego',
    description:
      'Papier firmowy i szablony korespondencji: układ zgodny z identyfikacją, wersje do druku i PDF/DOC.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script
      id='schema-service-projekt-papieru-firmowego'
      type='application/ld+json'
    >
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLetterheadPage() {
  return (
    <>
      <HeroBanner
        title='Projekt papieru firmowego'
        description={
          <>
            Projektujemy papier firmowy z szablonami Word/PDF i plikami do druku
            - czytelny i spójny z identyfikacją wizualną.
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
          href: `/uslugi/projekty-graficzne/projekt-papieru-firmowego`,
          label: 'Projekt papieru firmowego',
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
          title='Co zyskujesz zamawiając projekt papieru firmowego?'
          imageSrc='/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp'
          imageAlt='Realizacja papieru firmowego dla kancelarii adwokackiej LUX NOVA - mockup Arteon'
        >
          <p>
            <strong>
              Własny projekt papieru firmowego sprawia, że dokumenty wyglądają
              profesjonalnie od pierwszej sekundy.
            </strong>{' '}
            Oferty, umowy i pisma mają jeden, spójny wzór - logo, układ, dane
            kontaktowe - dzięki czemu autorytet Twojej marki wzrasta. Estetyczna
            oprawa zwiększa postrzeganą wiarygodność marki już w pierwszych
            sekundach
            <a
              href='https://credibility.stanford.edu/guidelines/index.html'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link ml-1'
            >
              (Stanford - web credibility)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry papier firmowy robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Ujednolica korespondencję i porządkuje dane,</li>
            <li>Uspójnia wygląd ofert i umów w całej firmie,</li>
            <li>Podnosi zaufanie i ułatwia kontakt z Twoją marką.</li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co dokładnie dostajesz w ramach projektu papieru firmowego?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Spójny wygląd korespondencji',
              description: (
                <p>
                  Projekt wzmacnia profesjonalny obraz firmy w każdym piśmie i
                  wiadomości.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Szablony do codziennej pracy',
              description: (
                <p>
                  Otrzymujesz gotowe do użycia pliki w wersji do druku oraz
                  praktyczne szablony elektroniczne.
                </p>
              ),
              icon: (
                <RiBookOpenLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Dopasowanie danych i układu',
              description: (
                <p>
                  Dbamy o czytelność, hierarchię informacji i zgodność z
                  pozostałymi materiałami marki.
                </p>
              ),
              icon: (
                <RiPencilRuler2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Szybka realizacja i poprawki',
              description: (
                <p>
                  Ustalamy termin, dostarczamy projekt i wspólnie dopracowujemy
                  szczegóły.
                </p>
              ),
              icon: (
                <RiMessage2Line
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
          title='Dla kogo projekt papieru firmowego ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla kancelarii, biur rachunkowych i doradców,</strong>{' '}
              którzy wysyłają umowy, pisma i opinie w formie drukowanej lub PDF.
            </li>
            <li>
              <strong>Dla firm B2B,</strong> które regularnie przygotowują
              oferty, specyfikacje, protokoły i chcą, aby każdy dokument
              wyglądał spójnie.
            </li>
            <li>
              <strong>Dla organizacji, instytucji i NGO,</strong> które
              komunikują się oficjalnie z partnerami, urzędami i beneficjentami.
            </li>
            <li>
              <strong>
                Dla marek budujących prestiż również w dokumentach,
              </strong>{' '}
              a nie tylko na stronie www czy w mediach społecznościowych.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Jakie efekty możesz zobaczyć po wdrożeniu papieru firmowego?'
          subtitle='Efekty po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Spójniejsze doświadczenie marki,</strong> bo każdy
              dokument - od krótkiego pisma po wielostronicową ofertę - wygląda
              tak, jak reszta komunikacji.
            </li>
            <li>
              <strong>Mniej chaosu wśród pracowników,</strong> dzięki gotowym
              szablonom Word/PDF, z których korzysta cały zespół.
            </li>
            <li>
              <strong>Wyższy poziom zaufania u klientów i partnerów,</strong>{' '}
              gdy dokumenty od początku wyglądają jasno, profesjonalnie i są
              dobrze podpisane.
            </li>
            <li>
              <strong>Łatwiejsza praca z drukarnią,</strong> bo pliki są już
              przygotowane zgodnie ze standardami druku i nie wymagają
              dodatkowego składu.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt papieru firmowego - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - papier firmowy do druku',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują jednego, czytelnego wzoru papieru firmowego w wersji drukowanej i PDF.',
              features: [
                'Krótki brief o marce i typach dokumentów (oferty, pisma, umowy)',
                'Projekt papieru firmowego w formacie A4 dopasowany do identyfikacji wizualnej',
                'Układ logo, danych kontaktowych i miejsca na treść zgodny z dobrymi praktykami',
                'Pliki gotowe do druku (PDF ze spadami) oraz wersja PDF do wysyłki mailowej',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - papier + szablony elektroniczne',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą ujednolicić korespondencję drukowaną i elektroniczną dla całego zespołu.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Szablon dokumentu w programie Word lub Google Docs',
                'Dopasowanie pól nagłówka i stopki do sposobu pracy zespołu',
                'Dodatkowy wariant językowy lub drugi wzór (np. dla innego działu)',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system korespondencji firmowej',
              price: 'wycena indywidualna',
              description:
                'Dla marek, które chcą pełnego systemu: papier firmowy, szablony pism i spójność z innymi materiałami.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzenie o dodatkowe typy dokumentów (np. protokoły, zaświadczenia, proste raporty)',
                'Dopasowanie papieru firmowego do pozostałych materiałów (wizytówki, teczki, ulotki)',
                'Rekomendacje dotyczące druku (rodzaj papieru, wykończenie - realizacja po stronie drukarni)',
                'Wsparcie przy wdrożeniu szablonów w zespole (proste instrukcje użycia)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Zakres projektu i liczba wariantów są dobierane indywidualnie. Po briefie otrzymasz dopasowaną wycenę oraz harmonogram prac.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji papieru firmowego'
          description='Napisz co powinno znajdować się na papierze firmowym oraz czy posiadasz logo i identyfikację wizualną - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp'
          imageAlt='Realizacja papieru firmowego - kancelaria Luxnova'
          defaultSubject='Projekt papieru firmowego'
        />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-papieru-firmowego'
          title='Najczęstsze pytania dotyczące projektów papieru firmowego'
          items={[
            {
              question: 'Ile kosztuje projekt papieru firmowego?',
              answer:
                'Cena zależy od liczby wariantów (np. osobny wzór dla różnych działów), zakresu szablonów elektronicznych i ewentualnych wersji językowych. Po krótkim zapoznaniu z Twoimi potrzebami przygotujemy wycenę dopasowaną do Twoich potrzeb.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu papieru firmowego?',
              answer:
                'Standardowo projekt zajmuje około od 2 do 4 dni roboczych. Przy projektach z wieloma wersjami termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę projekt papieru firmowego?',
              answer:
                'Otrzymasz pliki PDF do druku z odpowiednimi spadami, wersje PDF do korespondencji elektronicznej oraz - w razie potrzeby - szablony dokumentów w Word lub Google Docs.',
            },
            {
              question: 'Czy mogę zgłosić poprawki?',
              answer:
                'Tak, w każdym projekcie przewidujemy rundy poprawek. Wspólnie dopracowujemy układ, hierarchię informacji i detale wizualne, aż efekt będzie spójny z wizerunkiem Twojej marki.',
            },
            {
              question:
                'Czy papier firmowy będzie prawidłowo przygotowany do druku?',
              answer:
                'Tak, pliki przygotowujemy z zachowaniem spadów, marginesów bezpieczeństwa i odpowiednich ustawień kolorów. Materiały są gotowe do przekazania do drukarni.',
            },
            {
              question:
                'Czy mogę zamówić ekspresowy projekt papieru firmowego?',
              answer:
                'Tak, oferujemy opcję realizacji w trybie przyspieszonym za dodatkową opłatą. Przed startem ustalamy możliwy termin oraz dodatkowy koszt.',
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
              backgroundImage:
                '/assets/projects/finish-masters/logo/mockup-logo-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Projekt wizytówki',
              size: 'medium',
              backgroundImage:
                '/assets/projects/talia/mockup-wizytowki-talia.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Projekt teczki ofertowej',
              size: 'small',
              backgroundImage:
                '/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
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
        title='Profesjonalny wygląd dokumentów'
        description='Stworzymy papier firmowy, który zwiększa zaufanie i profesjonalny wizerunek Twojej firmy.'
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
