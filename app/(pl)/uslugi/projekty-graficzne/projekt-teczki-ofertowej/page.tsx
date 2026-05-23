import WorkSteps from '@/components/organisms/WorkSteps';
import HeroBanner from '@/components/organisms/HeroBanner';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import CTABanner from '@/components/organisms/CTABanner';
import Divider from '@/components/atoms/Divider';
import SectionBento from '@/components/organisms/sections/SectionBento';
import {
  RiBrushLine,
  RiFileTextLine,
  RiFolderOpenLine,
  RiMoneyDollarCircleLine,
} from 'react-icons/ri';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import Wrapper from '@/components/atoms/Wrapper';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import FaqPanels from '@/components/molecules/FaqPanels';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt teczki ofertowej | Arteon',
  description:
    'Teczka ofertowa na dokumenty i materiały sprzedażowe. Projekt spójny z identyfikacją wizualną, pliki do druku.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
  },
  openGraph: {
    title: 'Projekt teczki ofertowej | Arteon',
    description:
      'Elegancka teczka ofertowa dopasowana do identyfikacji marki. Pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej',
    serviceName: 'Projekt teczki ofertowej',
    description:
      'Teczka firmowa spójna z identyfikacją: estetyka i funkcja, poprawne spady oraz makiety pod druk.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-projekt-teczki-ofertowej' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignPresentationFolderPage() {
  return (
    <>
      <HeroBanner
        title='Projekt teczki ofertowej'
        description={
          <>
            Spotkania sprzedażowe wymagają porządku i klasy. Projektujemy teczki ofertowe spójne z
            identyfikacją - trwałe, eleganckie i funkcjonalne na prezentacje, dokumenty i umowy.
          </>
        }
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-teczki-ofertowej`,
          label: 'Projekt teczki ofertowej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel title='Realizacje projektów graficznych' category='grafika' />

        <Divider line />

        <SectionInfo title='Co zyskujesz zamawiając projekt teczki ofertowej?'>
          <p>
            <strong>
              Własna firmowa teczka porządkuje dokumenty i utrzymuje spójność materiałów.
            </strong>{' '}
            Klient dostaje Twoje materiały w jednej, eleganckiej formie - to ułatwia zapamiętanie
            marki oraz buduje jej autorytet. Materiały drukowane zostają w pamięci dłużej niż
            przekaz cyfrowy - mniejsze obciążenie poznawcze i wyższa zapamiętywalność (badanie
            Temple University / Canada Post, 2015).
          </p>

          <br />

          <p>
            <strong>Profesjonalna teczka ofertowa wzmacnia wiarygodność w kilka sekund.</strong>{' '}
            Estetyka i czytelność oprawy silnie wpływają na ocenę firmy - odbiorcy przypisują
            zaufanie na podstawie jakości materiałów
            <a
              href='https://credibility.stanford.edu/guidelines/index.html'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link ml-1'
            >
              (Stanford - web credibility)
            </a>
            . Spójna estetyka, kolory i typografia wzmacniają rozpoznawalność w każdym kontakcie z
            Twoją marką.
          </p>

          <br />

          <p>
            <strong>Estetyczna teczka ofertowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Porządkuje dokumenty i ułatwia proces spotkania,</li>
            <li>Podkreśla profesjonalizm w trakcie prezentacji i po wyjściu klienta,</li>
            <li>Zostawia fizyczny ślad - klient łatwiej wraca do Twojej firmy i oferty.</li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co dokładnie dostajesz w ramach projektu teczki ofertowej?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Prestiż na każdym spotkaniu',
              description: (
                <>
                  Projekt teczki podkreśla profesjonalizm Twojej firmy - już samo wręczenie
                  materiałów robi dobre wrażenie.
                </>
              ),
              icon: <RiFolderOpenLine className='text-primary h-6 w-6' />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: (
                <>
                  Kolory, typografia i detale nawiązują do Twojej identyfikacji wizualnej, aby
                  wszystkie materiały mówiły jednym językiem.
                </>
              ),
              icon: <IoColorPalette className='text-primary h-6 w-6' />,
            },
            {
              title: 'Przemyślane rozwiązania konstrukcyjne',
              description: (
                <>
                  Proponujemy układ kieszeni, bigów i skrzydełek tak, aby teczka była trwała,
                  wygodna i funkcjonalna w codziennym użyciu.
                </>
              ),
              icon: <RiBrushLine className='text-primary h-6 w-6' />,
            },
            {
              title: 'Pliki gotowe do druku',
              description: (
                <>
                  Dostarczamy finalne pliki z poprawnymi spadami i makietami pod drukarnię - możesz
                  od razu przekazać je do produkcji.
                </>
              ),
              icon: <RiFileTextLine className='text-primary h-6 w-6' />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className='text-primary h-6 w-6' />,
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo projekt teczki ofertowej ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla kancelarii, doradców i firm usługowych,</strong> które wręczają oferty,
              umowy lub raporty podczas spotkań z klientami.
            </li>
            <li>
              <strong>Dla firm B2B,</strong> które prezentują oferty wielostronicowe i chcą, aby
              wszystkie dokumenty były uporządkowane w jednym miejscu.
            </li>
            <li>
              <strong>Dla szkół, uczelni, instytucji i organizatorów szkoleń,</strong> którzy
              przekazują materiały edukacyjne i informacje o programach.
            </li>
            <li>
              <strong>Dla marek budujących prestiż offline,</strong> które chcą, aby doświadczenie
              klienta „na żywo” było równie dopracowane, jak strona internetowa czy profil w mediach
              społecznościowych.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Jakie efekty możesz zobaczyć po wdrożeniu teczek ofertowych?'
          subtitle='Efekty po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Bardziej uporządkowane spotkania,</strong> bo wszystkie materiały - oferta,
              umowa, wizytówka - trafiają do jednej, spójnej teczki.
            </li>
            <li>
              <strong>Wyższy poziom zaufania i postrzeganego profesjonalizmu,</strong> szczególnie
              przy pierwszym kontakcie i prezentacjach dla nowych klientów.
            </li>
            <li>
              <strong>Lepsza zapamiętywalność marki,</strong> ponieważ klient wychodzi ze spotkania
              z fizycznym nośnikiem, który przypomina o Twojej firmie nawet po kilku dniach.
            </li>
            <li>
              <strong>Silniejsza spójność materiałów offline i online,</strong> gdy teczka jest
              dopasowana do strony, wizytówek i innych elementów identyfikacji.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt teczki ofertowej - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - klasyczna teczka firmowa',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują jednej dopracowanej teczki na spotkania z klientami i przekazanie oferty w eleganckiej formie.',
              features: [
                'Krótki brief o marce, grupie docelowej i rodzaju dokumentów w teczce',
                'Projekt jednej wersji teczki w standardowym formacie (np. A4 z kieszeniami)',
                'Dopasowanie kolorystyki i typografii do istniejącej identyfikacji wizualnej',
                'Pliki gotowe do druku (PDF ze spadami i makietą dla drukarni)',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - teczka + warianty',
              price: 'wycena indywidualna',
              description:
                'Dla marek, które potrzebują kilku wersji teczek (np. różne działy, języki lub linie usług), zachowując spójny styl.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Możliwość przygotowania dwóch wersji teczki (np. dwie linie usług/szczeble oferty)',
                'Rekomendacje dotyczące wykończenia (np. rodzaj papieru, foliowanie, lakier wybiórczy - po stronie drukarni)',
                'Rozplanowanie logotypów, hasła i pól na dane kontaktowe',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - teczka w systemie materiałów',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą, aby teczka była elementem większego systemu: wraz z wizytówkami, ofertą PDF i innymi materiałami.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt teczki spójny z wizytówkami, ulotkami lub katalogiem',
                'Propozycje układu dokumentów w teczce (np. gdzie trafia oferta, umowa, karta usług)',
                'Rekomendacje integracji z prezentacją online (np. kod QR do oferty w PDF lub strony www)',
                'Wsparcie przy dopasowaniu projektu do specyfikacji wybranej drukarni',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Zakres, typ teczki i liczbę wersji dopasowujemy indywidualnie - po briefie otrzymasz konkretną wycenę i harmonogram prac.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji teczki ofertowej'
          description='Napisz jakie informacje chcesz umieścić na teczce, czy posiadasz logo oraz materiały graficzne i czy potrzebujesz pomocy z treścią - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp'
          imageAlt='Realizacja teczki ofertowej - kancelaria Luxnova'
          defaultSubject='Projekt teczki ofertowej'
        />

        <Divider line />

        <FaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-teczki-ofertowej'
          title='Najczęstsze pytania dotyczące projektów teczek ofertowych'
          items={[
            {
              question: 'Jak długo trwa realizacja teczki ofertowej?',
              answer:
                'Standardowo realizacja projektu teczki ofertowej trwa od 5 do 8 dni roboczych - w zależności od liczby wersji, stopnia skomplikowania czy tempa akceptacji. Przy pilnych zleceniach ustalamy tryb ekspresowy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę pliki teczki?',
              answer:
                'Dostarczamy pliki do druku (PDF ze spadami i oznaczeniami) oraz - na życzenie - pliki źródłowe. Pliki możemy dopasować do specyfikacji konkretnej drukarni.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer:
                'Tak, w ramach każdego projektu przewidujemy rundy poprawek. Wspólnie dopracowujemy układ, kolory i detale aż do pełnej akceptacji.',
            },
            {
              question: 'Czy projekt teczki jest gotowy do druku?',
              answer:
                'Tak, przygotowujemy pliki zgodnie z wymaganiami druku: odpowiedni format, spady, marginesy bezpieczeństwa oraz ustawienia kolorów, tak, aby można je było od razu przekazać do drukarni.',
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
                '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Projekt wizytówki',
              size: 'medium',
              backgroundImage: '/assets/projects/stepard/wizytowki/mockup-wizytówki-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/finish-masters/strona/moskup-strony-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Projekt ulotki',
              size: 'small',
              backgroundImage:
                '/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-ulotki',
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
        title='Dodaj klasę każdemu spotkaniu'
        description='Przygotujemy teczkę, która podkreśla prestiż Twojej marki.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
