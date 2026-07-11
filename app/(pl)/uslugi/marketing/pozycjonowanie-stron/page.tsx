import Script from 'next/script';
import {
  RiBarChart2Fill,
  RiLightbulbFlashLine,
  RiSearchLine,
  RiFileList2Line,
  RiLinksFill,
} from 'react-icons/ri';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
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
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Pozycjonowanie stron - stały wzrost widoczności i zapytań | Arteon',
  description:
    'Długofalowe pozycjonowanie stron: plan treści, porządek na stronie i bezpieczne linki. Comiesięczny raport i jasne priorytety działań.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/marketing/pozycjonowanie-stron',
  },
  openGraph: {
    title: 'Pozycjonowanie stron - stały wzrost widoczności i zapytań | Arteon',
    description:
      'Budujemy widoczność w Google miesiąc po miesiącu. Strategia treści, uporządkowany on-page i bezpieczne linki. Raport co miesiąc.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/pozycjonowanie-stron',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/marketing/pozycjonowanie-stron',
    serviceName: 'Pozycjonowanie stron',
    description:
      'Stała współpraca SEO dla stron firmowych: strategia treści, uporządkowany on-page i bezpieczne linki. Raport co miesiąc i jasne priorytety.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-pozycjonowanie' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferSeoSubscription() {
  return (
    <>
      <HeroBanner
        title='Pozycjonowanie stron'
        description={
          <>
            Budujemy długofalową widoczność Twojej strony w Google. Co miesiąc
            rozwijamy treści, optymalizujemy serwis i dbamy o jak najwyższą
            pozycję w wynikach wyszukiwania Google
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{
          href: `/uslugi/marketing/pozycjonowanie-stron`,
          label: 'Pozycjonowanie stron',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionInfo title='Na czym polega pozycjonowanie stron i dlaczego działa?'>
          <p>
            <strong>
              Pozycjonowanie SEO stron to praca polegająca na rozwijaniu Twojego
              serwisu w celu uzyskania jak najwyższej pozycji w wyszukiwarce
              Google.
            </strong>{' '}
            Nasza oferta pozycjonowania to spójny system: rozwijamy treści,
            poprawiamy kluczowe podstrony, pozyskujemy linki, które wzmacniają
            wiarygodność domeny oraz stale dodajemy nowe strony abyś miał coraz
            więcej klientów. Dzięki temu Twoja witryna częściej pojawia się tam,
            gdzie szukają Cię klienci.
          </p>
          <br />
          <p>
            <strong>Pracujemy na priorytetach i danych.</strong> Każdy miesiąc
            ma jasny cel: konkretne tematy treści, podstrony do dopracowania i
            zadania wspierające widoczność. Otrzymujesz czytelny raport i plan
            na kolejny etap.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp'
          imageAlt='Pozycjonowanie stron - plan treści i rozwój widoczności'
          subtitle='Dla kogo'
          title={<>Kiedy pozycjonowanie strony ma największy sens?</>}
          description='Gdy chcesz stałego dopływu zapytań z Google i przewagi nad konkurencją. Pozycjonowanie stron jest najlepsze dla:'
          btnOne='Porozmawiajmy'
          btnOneHref='#kontakt'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              Właścicieli stron firmowych, którzy chcą rosnąć w wynikach
              wyszukiwania i pozyskiwać więcej klientów.
            </li>
            <li>
              Branż usługowych i B2B, gdzie liczy się budowa autorytetu i
              regularne publikacje.
            </li>
            <li>
              Marek, które potrzebują stabilnej strategii budowy swojej
              widoczności online.
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co robimy w ramach pozycjonowania stron (co miesiąc)?'
          subtitle='Zakres działań i efekty'
          items={[
            {
              title: 'Strategia treści',
              description: (
                <p>
                  Wybieramy tematy, które odpowiadają na pytania klientów i
                  tworzymy odpowiednie treści, budując Twoją widoczność tam,
                  gdzie szukają Cię klienci.
                </p>
              ),
              icon: (
                <RiLightbulbFlashLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Poprawa kluczowych podstron (on-page)',
              description: (
                <p>
                  Analizujemy Twoją konkurencję i dopracowujemy istniejące
                  podstrony: nagłówki, tytuły, dodatkowe opisy oraz elementy -
                  tak, by strony były lepiej dopasowane do realnych zapytań
                  użytkowników.
                </p>
              ),
              icon: (
                <RiFileList2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Bezpieczne linki z wartościowych miejsc',
              description: (
                <p>
                  Pozyskujemy odnośniki z miejsc, które mają sens dla Twojej
                  branży (np. artykuły branżowe, katalogi) - to wzmacnia
                  autorytet Twojej witryny
                </p>
              ),
              icon: (
                <RiLinksFill
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Monitoring i raport co miesiąc',
              description: (
                <p>
                  Sprawdzamy widoczność, wejścia z Google i zapytania z WWW.
                  Dostajesz prosty raport i rekomendacje na kolejny miesiąc.
                </p>
              ),
              icon: (
                <RiBarChart2Fill
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Jak mierzymy postępy pozycjonowania strony?'
          subtitle='KPI i raportowanie'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Widoczność fraz:</strong> ile zapytań trafia do Top10/Top3
              i jak rośnie Twój zasięg.
            </li>
            <li>
              <strong>Ruch z Google:</strong> liczba wejść na stronę z wyników
              wyszukiwania.
            </li>
            <li>
              <strong>Zapytania:</strong> formularze, telefony i wiadomości -
              ile realnie zgłasza się klientów.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Jak wygląda współpraca przy pozycjonowaniu stron?'
          subtitle='Proces'
          description='Powtarzalny schemat, który porządkuje działania i pozwala rosnąć konsekwentnie.'
          items={[
            {
              title: '1. Audyt SEO + Plan 90 dni',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Przeprowadzamy audyt SEO, a następnie ustalamy cele i zakres
                    na trzy najbliższe miesiące: tematy treści, podstrony do
                    dopracowania i zadania wspierające.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Optymalizacja SEO',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Optymalizujemy prędkość strony i poprawiamy ją od strony
                    technicznej tak, aby Google uznał ją za wartościową.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Produkcja treści i poprawa podstron',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Publikujemy artykuły, rozwijamy sekcje ofert i porządkujemy
                    elementy, które wpływają na widoczność i sprzedaż.
                  </p>
                </div>
              ),
            },
            {
              title: '4. Raport i plan na kolejny miesiąc',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Omawiamy wyniki i rekomendujemy kolejne kroki, żeby praca
                    była przewidywalna i skuteczna.
                  </p>
                </div>
              ),
            },
          ]}
          grid='two'
        />

        <Divider line />

        <SectionPrices
          title='Pakiety pozycjonowania'
          plans={[
            {
              name: 'SEO Start',
              price: 'od 1 000 zł / mies.',
              description:
                'Dla mniejszych stron firmowych. Zaczynamy od uporządkowania oferty i rozwoju kluczowych stron Twojej oferty.',
              features: [
                'Przygotowujemy prosty plan treści i harmonogram działań na kolejne tygodnie.',
                'Co miesiąc rozwijamy lub aktualizujemy wybrane podstrony, aby lepiej odpowiadały na zapytania klientów.',
                'Porządkujemy metadane i nagłówki, aby wyniki w Google były czytelniejsze i bardziej klikalne.',
                'Monitorujemy podstawy techniczne, aby strona działała szybciej i stabilniej.',
                'Poprawiamy linkowanie wewnętrzne, aby ważne podstrony miały większą moc.',
                'Pozyskujemy pierwsze linki z wartościowych, tematycznych miejsc w tempie dopasowanym do branży.',
                'Raz w miesiącu wysyłamy krótki raport i proponujemy priorytety na kolejny okres.',
              ],
              btnOne: 'Otrzymaj plan działań',
              btnOneHref: '#kontakt',
            },
            {
              name: 'SEO Rozwój',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 900 zł / mies.',
              description:
                'Dla firm, które chcą rosnąć szybciej. Systematycznie publikujemy treści i budujemy autorytet domeny.',
              features: [
                'Aktualizujemy strategię słów kluczowych i porównujemy wyniki z konkurencją co kilka tygodni.',
                'Regularnie publikujemy nowe materiały (artykuły, poradniki, opisy) i odnawiamy starsze treści.',
                'Rozbudowujemy strukturę serwisu, aby łatwiej zdobywać pozycje na kolejne tematy.',
                'Wdrażamy dane strukturalne (np. FAQ, artykuły), aby zwiększyć szansę na lepszą ekspozycję w Google.',
                'Utrzymujemy dobrą kondycję techniczną i monitorujemy wskaźniki szybkości.',
                'Pozyskujemy linki z wartościowych źródeł, dopasowując tempo do branży i celu działań.',
                'Na koniec miesiąca omawiamy wyniki i plan na kolejne 30 dni podczas krótkiego spotkania online lub w formie emaila.',
              ],
              lastPlan: true,
              btnOne: 'Skonsultuj zakres',
              btnOneHref: '#kontakt',
            },
            {
              name: 'SEO Plus',
              price: 'od 3 200 zł / mies.',
              description:
                'Dla sklepów i branż o wysokiej konkurencyjności. Skracamy czas do zamierzonych efektów przez większą intensywność prac.',
              features: [
                'Tworzymy rozbudowane cykle treści i klastry tematyczne, które budują widoczność na grupy powiązanych fraz.',
                'Zajmujemy się pełnym procesem: planowaniem, copywritingiem, optymalizacją i publikacją materiałów.',
                'Priorytetowo wdrażamy zmiany na kluczowych podstronach, aby szybciej poprawiać widoczność i konwersje.',
                'Systematycznie rozwijamy linkowanie wewnętrzne i zewnętrzne, dbając o jakość źródeł i naturalny profil.',
                'Na bieżąco porządkujemy kwestie techniczne: indeksację, mapy strony i czytelność struktury adresów.',
                'Wspólnie definiujemy wskaźniki sukcesu i raportujemy postępy w jasny zrozumiały sposób.',
                'Masz zapewniony stały kontakt z dedykowanym specjalistą i szybką reakcję na pilne tematy.',
              ],
              btnOne: 'Zaplanuj wzrost',
              btnOneHref: '#kontakt',
            },
          ]}
          note={{
            text: (
              <>
                Masz rozbudowaną stronę lub działasz w wielu lokalizacjach?
                Dobierzemy tempo publikacji i pozyskiwania linków do realiów
                Twojej branży i celów biznesowych.
              </>
            ),
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote='Ceny orientacyjne. Zakres oraz intensywność działań dopasowujemy do branży, celów i technologii witryny.'
        />

        <Divider line />

        <TestimonialsCarousel secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych' />

        <Divider line />

        <SectionSteps
          title='Zobacz też'
          subtitle='Powiązane usługi'
          description='Najlepsze efekty osiągamy, łącząc strategię treści z solidnym fundamentem technicznym.'
          items={[
            {
              icon: <RiSearchLine className={largeIconSizeClasses} />,
              title: 'Audyt SEO (diagnostyka)',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Jeśli jeszcze nie robiliśmy audytu - zaczniemy od diagnozy i
                    listy priorytetów.
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
              icon: <RiFileList2Line className={largeIconSizeClasses} />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Wprowadzimy zmiany techniczne i treściowe, które poprawią
                    widoczność i wygodę korzystania.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink
                      arrow
                      href='/uslugi/marketing/optymalizacja-seo'
                    >
                      Przejdź do optymalizacji
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
          grid='two'
        />

        <Divider size='sm' />

        <SectionContactForm
          title='Sprawdź koszt pozycjonowania strony'
          description='Podaj adres swojej strony i napisz jakie frazy są dla Ciebie kluczowe - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp'
          imageAlt='Pozycjonowanie stron - widoczność w Google'
          defaultSubject='Pozycjonowanie stron'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          title='Najczęstsze pytania dotyczące pozycjonowania stron'
          pageUrl='https://www.arteonagency.pl/uslugi/marketing/pozycjonowanie-stron'
          items={[
            {
              question: 'Ile trwa pozycjonowanie i kiedy widać efekty?',
              answer:
                'Pozycjonowanie stron to proces. Pierwsze wzrosty zwykle pojawiają się w ciągu 1-3 miesięcy, a stabilna poprawa pojawia się w perspektywie 3-6 miesięcy i dłużej. Tempo zależy od konkurencji i intensywności prac.',
            },
            {
              question: 'Czy tworzycie treści w ramach pozycjonowania stron?',
              answer:
                'Tak. Przygotowujemy i aktualizujemy treści zgodnie z Twoją branżą oraz konkurencją: artykuły, poradniki, rozbudowa podstron oferty.',
            },
            {
              question: 'Czy pozyskujecie linki do strony?',
              answer:
                'Tak. Stawiamy na bezpieczne i jakościowe miejsca, które są powiązane tematycznie z Twoją branżą. Liczy się naturalność i sens, nie sama liczba odnośników.',
            },
            {
              question: 'Jak wygląda raportowanie wyników pozycjonowania SEO?',
              answer:
                'Co miesiąc otrzymujesz prosty raport: widoczność fraz, wejścia z Google i liczba zapytań. Dołączamy rekomendacje i plan na dalszy rozwój.',
            },
            {
              question: 'Czy to usługa również dla sklepów internetowych?',
              answer:
                'Ta oferta jest skoncentrowana na stronach firmowych. Dla e-commerce przygotujemy osobną propozycję w oparciu o specyfikę produktów i potrzeby sklepu.',
            },
          ]}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Strony internetowe',
              size: 'large',
              backgroundImage:
                '/assets/projects/kolorowe-talerze/moskup-strony-kolorowe-talerze.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Sklepy internetowe',
              size: 'medium',
              backgroundImage:
                '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Tworzenie treści',
              size: 'small',
              backgroundImage:
                '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
            {
              title: 'Blogi internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/blogi-internetowe',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Przydatne artykuły dotyczące SEO'
          categorySlug='seo'
          articles={getArticlePreviewsByCategory('seo', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zbudujmy Twoją widoczność'
        description='Strategia treści, porządek na stronie i bezpieczne linki - zestaw, który zwiększa liczbę zapytań.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        backgroundImage='/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
