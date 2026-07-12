import Script from 'next/script';
import {
  RiPencilRuler2Line,
  RiArticleLine,
  RiFileTextLine,
  RiLayoutLine,
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
  title: 'Projekt ulotki | Arteon',
  description:
    'Projekt ulotki reklamowej z układem, typografią i grafiką. Pliki do druku (CMYK) oraz wersja cyfrowa.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki',
  },
  openGraph: {
    title: 'Projekt ulotki | Arteon',
    description:
      'Skuteczna ulotka z jasnym przekazem i mocnym CTA. Pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-ulotki',
    serviceName: 'Projekt ulotki',
    description:
      'Skuteczne ulotki reklamowe: jasne CTA, czytelna hierarchia, formaty pod druk i wersje cyfrowe.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-projekt-ulotki' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignFlyerPage() {
  return (
    <>
      <HeroBanner
        title='Projekt ulotki'
        description={
          <>
            Tworzymy ulotki reklamowe z jasnym przekazem i czytelnym układem.
            Pliki do druku (CMYK) oraz wersja cyfrowa.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp'
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
          href: `/uslugi/projekty-graficzne/projekt-ulotki`,
          label: 'Projekt ulotki',
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
          title='Co zyskujesz zamawiając projekt ulotki?'
          imageSrc='/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp'
          imageAlt='Realizacja folderu reklamowego dla firmy Simba Group - mockup Arteon'
        >
          <p>
            <strong>
              Profesjonalna ulotka dociera tam, gdzie reklama cyfrowa znika po
              sekundzie.
            </strong>{' '}
            Materiały drukowane są łatwiejsze w odbiorze i dłużej zostają w
            pamięci - badania neuromarketingowe pokazują niższe obciążenie
            poznawcze i wyższą zapamiętywalność niż w kanale wyłącznie cyfrowym
            (badanie Temple University / Canada Post, 2015). Dobrze
            zaprojektowana ulotka prowadzi klienta od nagłówka, przez korzyści,
            aż do konkretnego działania.
          </p>

          <br />

          <p>
            <strong>
              Wygląd materiałów graficznych, w tym ulotki, realnie wpływa na
              zaufanie.
            </strong>{' '}
            Odbiorcy często oceniają wiarygodność firmy po jakości oprawy.
            Estetyczny, czytelny projekt zwiększa szansę na pozytywną reakcję -
            wejście na stronę, telefon lub wizytę stacjonarną
            <a
              href='https://credibility.stanford.edu/guidelines/index.html'
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link ml-1'
            >
              (Stanford - web credibility)
            </a>
            . Ulotka łączy prosty przekaz z jasnym wezwaniem do działania.
          </p>

          <br />

          <p>
            <strong>Dobra ulotka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Przedstawia ofertę w prosty i zrozumiały sposób,</li>
            <li>
              Prowadzi do konkretnego działania (telefon, rezerwacja, wejście na
              stronę),
            </li>
            <li>Buduje rozpoznawalność marki i zwiększa zaufanie.</li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając ulotkę?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Jasny przekaz i mocne wezwanie do działania',
              description: (
                <p>
                  Tworzymy układy, które przyciągają wzrok, wyjaśniają ofertę i
                  prowadzą prosto do kontaktu lub zakupu.
                </p>
              ),
              icon: (
                <RiArticleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Format dopasowany do celu',
              description: (
                <p>
                  Dobieramy rozmiar i orientację ulotki tak, aby była poręczna,
                  czytelna i wygodna w dystrybucji.
                </p>
              ),
              icon: (
                <RiLayoutLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Pliki gotowe do druku i wersja cyfrowa',
              description: (
                <p>
                  Otrzymujesz pliki przygotowane pod drukarnię oraz wersję do
                  wykorzystania w internecie lub mailingu.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Dopracowanie detali',
              description: (
                <p>
                  W cenie przewidujemy poprawki. Wspólnie dopieszczamy treści,
                  układ i wyróżniki Twojej oferty.
                </p>
              ),
              icon: (
                <RiPencilRuler2Line
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
          title='Dla kogo projekt ulotki ma największy sens?'
          subtitle='Dla kogo'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Dla firm lokalnych,</strong> które chcą poinformować o
              nowej ofercie, promocji, otwarciu lokalu lub wydarzeniu w
              konkretnej okolicy.
            </li>
            <li>
              <strong>Dla gabinetów, salonów i punktów usługowych,</strong>{' '}
              które chcą w prosty sposób pokazać zakres usług i zachęcić do
              rezerwacji wizyty.
            </li>
            <li>
              <strong>Dla organizatorów wydarzeń,</strong> szkoleń i
              konferencji, którzy potrzebują materiału informacyjnego z
              kluczowymi danymi: gdzie, kiedy i jak się zapisać.
            </li>
            <li>
              <strong>Dla firm łączących offline z online,</strong> które chcą,
              aby ulotka kierowała na stronę www, landing page lub profil w
              mediach społecznościowych (np. QR kod + krótkie CTA).
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionInfo
          title='Jakie efekty możesz zobaczyć po wdrożeniu ulotki?'
          subtitle='Efekty po wdrożeniu'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Więcej wejść na stronę lub profil,</strong> bo klient
              otrzymuje jasny adres, QR kod i prostą instrukcję, co zrobić w
              kolejnym kroku.
            </li>
            <li>
              <strong>Więcej telefonów i zapytań z lokalnego rynku,</strong>{' '}
              szczególnie przy dobrze zaplanowanej dystrybucji w miejscach
              odwiedzanych przez Twoją grupę docelową.
            </li>
            <li>
              <strong>Większa rozpoznawalność marki offline,</strong> bo logo,
              kolory i kluczowy komunikat powtarzają się na ulotce, stronie i
              innych materiałach.
            </li>
            <li>
              <strong>Lepsze wsparcie kampanii online,</strong> gdy ulotka jest
              przedłużeniem reklamy w Google Ads, Meta Ads lub działań w mediach
              społecznościowych, a nie osobnym komunikatem.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt ulotki - przykładowe pakiety'
          plans={[
            {
              name: 'Pakiet Start - prosta ulotka jednostronna',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują jednej, czytelnej ulotki z najważniejszą ofertą i kontaktem.',
              features: [
                'Krótki brief o ofercie, celu kampanii i grupie docelowej',
                'Projekt jednostronnej ulotki (np. A5 lub DL)',
                'Dopasowanie nagłówków, treści i CTA do konkretnego działania',
                'Plik gotowy do druku + wersja cyfrowa (PNG/JPG)',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Standard - ulotka dwustronna lub kilka wersji',
              price: 'wycena indywidualna',
              description:
                'Dla marek, które chcą zmieścić więcej treści, cennik, kilka usług lub przygotować dwie wersje dla różnych odbiorców.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Projekt ulotki dwustronnej (np. oferta + korzyści + dane kontaktowe)',
                'Możliwość przygotowania dwóch wersji (np. różne lokalizacje lub grupy docelowe)',
                'Lepsze rozplanowanie treści z podziałem na sekcje',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Pakiet Pro - ulotka w kampanii i systemie materiałów',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które traktują ulotkę jako element większej kampanii i chcą, aby spójnie łączyła się z wizytówkami, plakatami i stroną www.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rekomendacje dotyczące formatu, nakładu i papieru pod konkretną kampanię',
                'Projekt ulotki spójny z pozostałymi materiałami (wizytówki, plakaty, roll-upy)',
                'Propozycja integracji z kampaniami online (np. QR kody, dedykowane landing pages)',
                'Wsparcie przy przygotowaniu plików zgodnie z wymaganiami drukarni',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Zakres, format i liczbę wersji dopasowujemy indywidualnie - po briefie otrzymasz konkretną wycenę i harmonogram prac.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji ulotki'
          description='Napisz co chcesz przedstawić na ulotce, czy posiadasz logo oraz zdjęcia i czy potrzebujesz pomocy z treścią - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp'
          imageAlt='Realizacja projektu ulotki reklamowej - Simba Group'
          defaultSubject='Projekt ulotki'
        />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki'
          title='Najczęstsze pytania dotyczące projektów ulotek'
          items={[
            {
              question: 'Ile kosztuje projekt ulotki?',
              answer:
                'Cena projektu ulotki zależy od formatu, liczby wersji i objętości treści. Po krótkim zapoznaniu z Twoimi potrzebami i Twoją ofertą, przygotujemy indywidualną wycenę.',
            },
            {
              question: 'Jak długo trwa projektowanie ulotki?',
              answer:
                'Przy standardowym zakresie czas realizacji wynosi zwykle od 3 do 4 dni roboczych. Większe projekty z wieloma wersjami lub szerszym zakresem treści mogą wymagać dłuższego terminu - ustalamy go indywidualnie.',
            },
            {
              question: 'W jakich formatach otrzymam ulotkę?',
              answer:
                'Dostarczamy pliki do druku (PDF ze spadami i odpowiednią rozdzielczością) oraz wersje do internetu (PNG, JPG). W razie potrzeby dopasowujemy pliki do wymagań konkretnej drukarni.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do ulotki?',
              answer:
                'Tak, w cenie każdego projektu przewidujemy rundy poprawek. Wspólnie dopracowujemy układ, kolory i treści tak długo, aż ulotka będzie czytelna, estetyczna i spójna z Twoją marką.',
            },
            {
              question: 'Czy projekt ulotki będzie gotowy do druku?',
              answer:
                'Tak, pliki przygotowujemy zgodnie z wymaganiami druku: odpowiednia rozdzielczość, kolory, spady i marginesy bezpieczeństwa. Możesz przekazać je bezpośrednio do drukarni.',
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
              title: 'Projekt wizytówki',
              size: 'medium',
              backgroundImage:
                '/assets/projects/restoquality/mockup-wizytowki-restoquality.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/autokorfu/mockup-strony-auto-korfu.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
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
        title='Wypromuj swoją ofertę'
        description='Zaprojektujemy ulotkę, która przyciąga wzrok i prowadzi prosto do kontaktu i sprzedaży.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
