import { IoColorPalette } from 'react-icons/io5';
import {
  RiFileTextLine,
  RiIdCardLine,
  RiKey2Line,
  RiMoneyDollarCircleLine,
  RiPencilRuler2Line,
  RiPriceTag3Line,
  RiSecurePaymentLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBar from '@/components/organisms/sections/SectionBar';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { processStepsSections } from '@/lib/processSteps';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Projekt wizytówki | Arteon',
  description:
    'Projekt wizytówki firmowej z danymi kontaktowymi i ofertą. Pliki źródłowe (AI/PDF) oraz wersje gotowe do druku.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
  },
  openGraph: {
    title: 'Projekt wizytówki | Arteon',
    description:
      'Profesjonalny projekt wizytówki: czytelność, elegancja i pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/luxnova/wizytowki/mockup-wizytowki-lux-nova.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-wizytowki',
    serviceName: 'Projekt wizytówki',
    description:
      'Czytelne, eleganckie wizytówki spójne z identyfikacją marki. Pliki do druku + wersje do użycia w sieci.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return <JsonLd id='schema-service-projekt-wizytowki' schema={json} />;
}

export default function OfferDesignBusinessCardPage() {
  return (
    <>
      <HeroBanner
        title='Projekt wizytówki'
        description={
          <>
            Projektujemy wizytówki dopasowane do Twojej marki - czytelne,
            eleganckie, gotowe do druku. Pliki źródłowe i wersje do druku.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/luxnova/wizytowki/mockup-wizytowki-lux-nova.webp'
        overlay='black'
        reputation
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: `/uslugi/projekty-graficzne`,
          label: 'Projekty graficzne',
        }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-wizytowki`,
          label: 'Projekt wizytówki',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Nasze realizacje projektów wizytówek'
          category='wizytówki'
        />

        <Divider line />
        <SectionBasic
          title='Co zyskujesz zamawiając projekt wizytówki?'
          imageSrc='/assets/projects/finish-masters/wizytowki/mockup-wizytowki-finish-masters.webp'
          imageAlt='Realizacja wizytówek dla producenta schodów StepArd - mockup Arteon'
        >
          <p>
            <strong>Profesjonalnie zaprojektowana wizytówka</strong> łączy
            schludny układ, czytelne dane i spójny styl, co ułatwia zapamiętanie
            firmy oraz szybki powrót do kontaktu po spotkaniu. Wizytówka staje
            się fizycznym śladem rozmowy, który może zamienić się w telefon lub
            wiadomość po kilku dniach czy tygodniach.
          </p>

          <br />

          <p>
            <strong>
              Estetyka materiałów realnie wpływa na ocenę wiarygodności marki.
            </strong>{' '}
            Jakość oprawy wizualnej - także na małym formacie - podnosi zaufanie
            do firmy i ułatwia decyzję o współpracy.
          </p>

          <br />

          <p>
            <strong>Dobra wizytówka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Ułatwia zapamiętanie Twojej marki i osoby,</li>
            <li>Ułatwia późniejszy kontakt,</li>
            <li>Podnosi zaufanie i buduje profesjonalny wizerunek.</li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając wizytówkę?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Czytelny układ i profesjonalny wygląd',
              description: (
                <p>
                  Projektujemy wizytówki, które w kilka sekund wyjaśniają, czym
                  się zajmujesz.
                </p>
              ),
              icon: (
                <RiIdCardLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Pliki gotowe do druku',
              description: (
                <p>
                  Otrzymujesz pliki przygotowane do druku w standardzie CMYK ze
                  spadami.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: (
                <p>
                  Dopasowujemy kolory, typografię i styl do Twojej marki, aby
                  zachować spójność wizerunku.
                </p>
              ),
              icon: (
                <IoColorPalette
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
          title='Dla kogo projekt wizytówki ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla specjalistów</strong> - prawników, terapeutów,
              doradców, trenerów - którzy często spotykają się z klientami i
              chcą ułatwić im ponowny kontakt.
            </li>
            <li>
              <strong>Dla właścicieli firm lokalnych</strong> - salonów,
              gabinetów, restauracji, serwisów - gdzie wizytówka jest często
              pierwszym kontaktem z marką.
            </li>
            <li>
              <strong>Dla osób budujących markę osobistą,</strong> które
              występują na wydarzeniach, konferencjach i szkoleniach, a po
              prezentacji rozdają swoje dane kontaktowe.
            </li>
            <li>
              <strong>Dla firm z zespołem,</strong> które chcą zadbać o spójne
              wizytówki dla kilku lub kilkunastu osób w organizacji.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionBar title='Jasne gwarancje, jasne zasady' />

        <div>
          <FeatureGrid
            variant='bare'
            columns={4}
            items={[
              {
                icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
                title: 'Indywidualne projekty',
                description:
                  'Wszystko projektujemy od zera - nie używamy gotowych szablonów, dzięki czemu Twoja strona, sklep czy projekt graficzny jest w pełni unikalny i dopasowany do Twojej firmy oraz grupy docelowej.',
              },
              {
                icon: <RiSecurePaymentLine className={normalIconSizeClasses} />,
                title: 'Brak zaliczek',
                description:
                  'Nie pobieramy zaliczek dla projektów do 5 tysięcy złotych brutto. Fakturę wystawiamy tylko po zakończeniu prac lub po zakończeniu poszczególnych etapów w przypadku większych projektów.',
              },
              {
                icon: <RiPriceTag3Line className={normalIconSizeClasses} />,
                title: 'Brak opłat abonamentowych',
                description:
                  'Nie pobieramy comiesięcznych opłat za stworzone witryny. Płacisz jednorazowo, za samą realizację a w przypadku dłuższych współprac, prace zawsze rozliczamy zadaniowo. Cenimy transparencję.',
              },
              {
                icon: <RiKey2Line className={normalIconSizeClasses} />,
                title: 'Pełna własność',
                description:
                  'Wszystko co stworzymy staje się Twoją własnością. Otrzymujesz stronę, dostępy do wszelkich zintegrowanych platform oraz pliki źródłowe. Możemy również przygotować umowę, która dodatkowo zabezpiecza Twoje prawa.',
              },
            ]}
          />
        </div>

        <Divider line />

        <SectionPrices
          title='Projekt wizytówki - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - jedna wizytówka',
              price: 'wycena indywidualna',
              description:
                'Dla jednoosobowych działalności i specjalistów, którzy potrzebują jednej, dopracowanej wizytówki w spójnym stylu.',
              features: [
                'Krótki brief o marce i ofercie',
                'Projekt wizytówki (przód + tył) w jednym wariancie',
                'Dopasowanie kolorów i typografii do istniejącej identyfikacji (lub prosty kierunek od zera)',
                'Pliki gotowe do druku (PDF ze spadami) + wersje PNG/JPG',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - kilka wersji i stanowisk',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują spójnych wizytówek dla kilku osób lub w dwóch wariantach (np. językowych lub funkcji).',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Warianty wizytówek dla kilku stanowisk lub języków',
                'Dopasowanie układu do różnych długości imion i funkcji',
                'Propozycja drobnych różnic (np. wyróżnienie osób kluczowych)',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - zestaw dla zespołu i marki',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą oprzeć wszystkie materiały drukowane na jednym, spójnym systemie i przygotować wizytówki dla większego zespołu.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt siatki pod wizytówki dla większej liczby osób',
                'Rekomendacje papieru, uszlachetnień i technik druku',
                'Podstawowe wytyczne stosowania wizytówek w identyfikacji marki',
                'Wsparcie przy przygotowaniu plików zbiorczych dla drukarni',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Zakres i liczbę wariantów dopasowujemy indywidualnie - po briefie otrzymasz konkretną wycenę i harmonogram prac.'
        />

        <Divider line />

        <SectionTimeline {...processStepsSections.design} />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-wizytowki'
          title='Najczęstsze pytania dotyczące projektów wizytówek'
          items={[
            {
              question: 'Ile trwa realizacja projektu wizytówki?',
              answer:
                'Standardowo projekt przygotowujemy w około 2-4 dni roboczych od momentu zebrania materiałów. W przypadku większej liczby wariantów lub dodatkowych korekt termin ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę wizytówkę?',
              answer:
                'Otrzymasz plik PDF do druku ze spadami, wersje PNG/JPG do wykorzystania w sieci oraz pliki źródłowe.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu wizytówki?',
              answer:
                'Tak, w cenie każdego projektu przewidujemy rundy poprawek - dopracowujemy układ, kolory i teksty tak długo, aż projekt będzie spójny z Twoją marką i wygodny w użyciu.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt wizytówki?',
              answer:
                'Tak, realizujemy projekty w trybie przyspieszonym za dodatkową opłatą. Termin i koszt trybu ekspresowego ustalamy przed rozpoczęciem prac.',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji wizytówki'
          description='Napisz jakie dane mają znaleźć się na wizytówce, czy potrzebujesz jednego czy kilku wariantów oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/luxnova/wizytowki/mockup-wizytowki-lux-nova.webp'
          imageAlt='Realizacja projektu wizytówki - kancelaria Luxnova'
          defaultSubject='Projekt wizytówki'
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
              title: 'Projekt logo',
              size: 'medium',
              backgroundImage: '/assets/projects/km2/mockup-logo-km2.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Sklepy internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
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
        title='Zachęć klientów do ponownego kontaktu'
        description='Stworzymy wizytówkę, która wzmocni Twój wizerunek i ułatwi kontakt.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/luxnova/wizytowki/mockup-wizytowki-lux-nova.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
