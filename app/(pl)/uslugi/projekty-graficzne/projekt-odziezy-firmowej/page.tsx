import Script from 'next/script';
import {
  RiFileTextLine,
  RiImageLine,
  RiQuillPenLine,
  RiTShirt2Line,
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
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Projekt odzieży firmowej | Arteon',
  description:
    'Projekt nadruków i haftów na odzież firmową: koszulki, bluzy, czapki. Pliki techniczne dla drukarni i hafciarni.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
  },
  openGraph: {
    title: 'Projekt odzieży firmowej | Arteon',
    description:
      'Projekt nadruków i haftów na odzież firmową: koszulki, bluzy, czapki. Pliki techniczne dla drukarni i hafciarni.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    serviceName: 'Projekt odzieży firmowej',
    description:
      'Nadruki na odzież (T-shirt, bluza, polo) spójne z marką. Pliki produkcyjne dla sitodruku/DTF.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-projekt-odziezy-firmowej' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignCorporateApparelPage() {
  return (
    <>
      <HeroBanner
        title='Projekt odzieży firmowej'
        description={
          <>
            Zespół wygląda spójnie, a marka zyskuje widoczność. Przygotowujemy projekty nadruków i
            haftów - pod sitodruk, DTF i haft komputerowy - zgodnie z identyfikacją wizualną i
            realiami produkcji.
          </>
        }
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-odziezy-firmowej`,
          label: 'Projekt odzieży firmowej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel title='Realizacje projektów graficznych' category='grafika' />

        <Divider line />

        <SectionInfo title='Co zyskujesz zamawiając projekt odzieży firmowej?'>
          <p>
            <strong>Spójny wygląd odzieży zespołu ułatwia identyfikację firmy.</strong> Klient od
            razu widzi, kto reprezentuje Twoją firmę. Jednolita odzież firmowa buduje wizerunek i
            wzmacnia wiarygodność - zarówno w siedzibie, jak i w terenie. Dzięki temu Twoja marka
            jest widoczna wszędzie tam, gdzie pojawia się zespół, a to działa jak darmowa reklama
            mobilna.
          </p>

          <br />

          <p>
            <strong>Dobra odzież firmowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Ujednolica zespół i podnosi rozpoznawalność marki,</li>
            <li>Ułatwia obsługę - klient szybciej trafia do właściwej osoby,</li>
            <li>
              Wzmacnia wizerunek i buduje autorytet Twojej firmy w oczach klientów i partnerów.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co dokładnie dostajesz w ramach projektu odzieży firmowej?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Spójny wygląd zespołu',
              description: (
                <>
                  Projekt buduje rozpoznawalność marki w terenie, na hali, w salonie i podczas
                  wydarzeń.
                </>
              ),
              icon: <RiTShirt2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Wizualizacje i warianty',
              description: (
                <>
                  Przygotowujemy podglądy na koszulkach, bluzach i innych elementach, aby łatwiej
                  było podjąć decyzję.
                </>
              ),
              icon: <RiImageLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Dopasowanie do wybranej technologii',
              description: (
                <>
                  Projekt przygotowujemy tak, aby wyglądał dobrze niezależnie od sposobu naniesienia
                  znaków - sitodruk, haft, DTF.
                </>
              ),
              icon: <RiQuillPenLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Pliki gotowe do produkcji',
              description: (
                <>Otrzymujesz materiały, które możesz od razu przekazać wykonawcy odzieży.</>
              ),
              icon: <RiFileTextLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: (
                <RiMoneyDollarCircleLine className={cn('text-primary', normalIconSizeClasses)} />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo projekt odzieży firmowej ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla firm usługowych i serwisów w terenie</strong> - ekipy montażowe,
              serwisowe, budowlane, które codziennie pracują u klientów.
            </li>
            <li>
              <strong>Dla salonów, kawiarni, restauracji i punktów sprzedaży,</strong> gdzie kontakt
              z klientem opiera się na bezpośredniej obsłudze.
            </li>
            <li>
              <strong>Dla organizatorów wydarzeń, szkół, klubów sportowych,</strong> które chcą
              spójnego wyglądu zespołu na eventach i turniejach.
            </li>
            <li>
              <strong>Dla marek budujących rozpoznawalność lokalnie,</strong> którym zależy na tym,
              by logo i nazwa pojawiały się w przestrzeni miejskiej regularnie.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt odzieży firmowej - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - podstawowy zestaw nadruków',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują prostego, spójnego projektu nadruku na np. koszulki dla małego zespołu.',
              features: [
                'Krótki brief o marce, zastosowaniu odzieży i liczbie pracowników',
                'Projekt nadruku z logo i podstawowymi elementami identyfikacji',
                'Dopasowanie projektu do jednego typu odzieży (np. T-shirt lub bluza)',
                'Pliki gotowe do produkcji w wybranej technice',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - odzież dla całego zespołu',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą dopracowanego systemu nadruków lub haftów na kilka typów odzieży i różne stanowiska.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Warianty dla kilku elementów garderoby (np. T-shirt, bluza, polo)',
                'Dostosowanie projektu do różnych kolorów bazowych odzieży',
                'Wizualizacje na sylwetkach lub mockupach, ułatwiające wybór',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system odzieży dla marki',
              price: 'wycena indywidualna',
              description:
                'Dla marek, które chcą kompleksowego systemu - od ubioru zespołu po odzież na eventy i sprzedaż merchu.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rozszerzenie o odzież eventową lub sprzedażową (np. merch dla klientów)',
                'Przygotowanie zestawu plików dla różnych dostawców/zleceniobiorców',
                'Proste wytyczne dla produkcji (min. wielkości, marginesy bezpieczeństwa, zastosowania)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Zakres projektu zależy od liczby typów odzieży, wariantów i technik nadruku/haftu. Po briefie otrzymasz dopasowaną wycenę i harmonogram.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji odzieży firmowej'
          description='Napisz jakie elementy chcesz umieścić na odzieży, ile rodzajów ubrań potrzebujesz oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp'
          imageAlt='Identyfikacja wizualna i odzież firmowa'
          defaultSubject='Projekt odzieży firmowej'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej'
          title='Najczęstsze pytania dotyczące projektów odzieży firmowej'
          items={[
            {
              question: 'Ile kosztuje projekt odzieży firmowej?',
              answer:
                'Cena zależy od liczby projektów (koszulki, bluzy, czapki) czy techniki druku (sitodruk, haft, DTF). Po dokładnym omówieniu Twojego planu i Twoich potrzeb przygotujemy dedykowaną ofertę.',
            },
            {
              question: 'Jak długo trwa projekt odzieży firmowej?',
              answer: 'Standardowy czas realizacji to zwykle 5-10 dni roboczych.',
            },
            {
              question: 'W jakich formatach otrzymam projekt nadruków?',
              answer:
                'Dostarczamy pliki wektorowe oraz rastrowe w wysokiej rozdzielczości, z wariantami kolorystycznymi i adaptacjami do różnych elementów odzieży.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu nadruku na odzież?',
              answer:
                'Tak, w projekcie przewidujemy rundy poprawek. Doprecyzowujemy kolory, umiejscowienie, skalę i szczegóły, aż otrzymasz finalną wersję zgodną z Twoją wizją.',
            },
            {
              question: 'Jaką technikę druku wybrać?',
              answer:
                'Doradzamy dobór techniki (sitodruk, haft, DTF) z uwzględnieniem materiału odzieży, budżetu i oczekiwanej trwałości. Projekt przygotowujemy pod wybrane rozwiązanie po omówieniu szczegółów.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt odzieży firmowej?',
              answer:
                'Tak, oferujemy opcję przyspieszonej realizacji za dodatkową opłatą. Przed rozpoczęciem projektu ustalamy możliwy termin oraz dodatkowy koszt.',
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
              backgroundImage: '/assets/projects/stepard/logo/mockup-logo-stepard.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Projekt wizytówki',
              size: 'medium',
              backgroundImage:
                '/assets/projects/finish-masters/wizytowki/mockup-wizytówki-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage: '/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Projekt papieru firmowego',
              size: 'small',
              backgroundImage:
                '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-papieru-firmowego',
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
        title='Promuj swoją markę w terenie'
        description='Zaprojektujemy nadruki i hafty, które wyróżnią Twoją firmę i wzmocnią profesjonalny wizerunek.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
