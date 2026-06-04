import Script from 'next/script';
import {
  RiLightbulbFlashLine,
  RiShieldCheckLine,
  RiSearchLine,
  RiFileList2Line,
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
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { largeIconSizeClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

export const metadata = {
  title: 'Optymalizacja SEO - szybsza strona, lepsza widoczność | Arteon',
  description:
    'Optymalizacja witryn internetowych dla lepszej pozycji w wynikach wyszukiwania. Mierzalny efekt przed i po. Zoptymalizuj witrynę już dziś',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo' },
  openGraph: {
    title: 'Optymalizacja SEO - szybsza strona, lepsza widoczność | Arteon',
    description:
      'Optymalizacja witryn internetowych dla lepszej pozycji w wynikach wyszukiwania. Mierzalny efekt przed i po. Zoptymalizuj witrynę już dziś',
    url: 'https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/arteon-baners-camper-albania-mockup.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/marketing/optymalizacja-seo',
    serviceName: 'Optymalizacja SEO',
    description:
      'Wdrożenia po audycie: poprawa szybkości strony, porządek w treściach i dodatkowe dane, które pomagają Google lepiej zrozumieć witrynę. Testy przed i po, mierzalne wyniki.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-optymalizacja-seo' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferOptimizationSEO() {
  return (
    <>
      <HeroBanner
        title='Optymalizacja SEO'
        description={
          <>
            Wprowadzimy zmiany, które poprawią pozycję Twojej strony w Google: przyspieszymy stronę,
            uporządkujemy treści i ułatwimy Google ich zrozumienie.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/optymalizacja-seo`, label: 'Optymalizacja SEO' }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <SectionInfo title='Na czym polega optymalizacja SEO i dlaczego działa?'>
          <p>
            <strong>Optymalizacja SEO to kolejny etap po audycie SEO.</strong> Optymalizacja pozwala
            na wprowadzenie konkretnych zmian na stronie lub sklepie internetowym, które skracają
            czas ładowania, porządkują treści i sprawiają, że Google łatwiej rozumie Twoją ofertę.
            Dzięki temu strona zyskuje wyższą pozycję w Google, a użytkownicy szybciej znajdują to,
            czego potrzebują.
          </p>
          <br />
          <p>
            <strong>Mierzymy efekty każdej zmiany.</strong> Przed realizacją dodajemy na Twojej
            witrynie narzędzia analityczne oraz zapisujemy stan bieżący, a po publikacji sprawdzamy,
            jak poprawił się czas ładowania, pozycje i wejścia z Google. Wiesz dokładnie, co
            zadziałało.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionBasic
          variant='right'
          imageSrc='/assets/offer/optymalizacja-seo/optymalizacja-seo-zblizenie-na-raport.webp'
          imageAlt='Optymalizacja SEO - wyniki raportu'
          subtitle='Dla kogo'
          title='Kiedy warto zrobić optymalizację SEO i dla kogo ona jest?'
          description='Gdy masz już diagnozę (audyt) i chcesz przejść do wdrożeń, które najszybciej poprawią wyniki Twojej strony. Optymalizacja SEO jest najlepsza dla:'
          btnOne='Zamów optymalizację'
          btnOneHref='#kontakt'
        >
          <ul className='mt-4 list-disc space-y-2 pl-5 text-sm'>
            <li>
              Właścicieli nowych stron, które potrzebują solidnych fundamentów przed skalowaniem
              treści i stworzeniem reklam.
            </li>
            <li>
              Właścicieli sklepów internetowych, którym zależy na szybkiej stronie i lepszej
              widoczności produktów.
            </li>
            <li>
              Firm usługowych i B2B, które potrzebują stabilnie zwiększać liczbę zapytań od klientów
              z Google.
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co dokładnie wdrażamy w ramach optymalizacji SEO?'
          subtitle='Kluczowe obszary i efekty'
          items={[
            {
              title: 'Szybkość ładowania',
              description: (
                <>
                  Skracamy czas wczytywania strony, optymalizujemy grafiki i kod strony. Efekt:
                  strona działa szybciej, a użytkownicy rzadziej rezygnują z przeglądania.
                </>
              ),
              icon: <RiSearchLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Tytuły i opisy widoczne w Google',
              description: (
                <>
                  Poprawiamy tytuły i opisy, by lepiej pasowały do zapytań użytkowników. Efekt:
                  więcej trafnych zapytań i więcej wejść z wyników wyszukiwania.
                </>
              ),
              icon: <RiLightbulbFlashLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Struktura treści i nawigacja',
              description: (
                <>
                  Porządkujemy nagłówki i menu, dodajemy logiczne połączenia między podstronami.
                  Efekt: łatwiejsza nawigacja i lepsze rozumienie strony przez Google.
                </>
              ),
              icon: <RiFileList2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Dodatkowe dane dla Google',
              description: (
                <>
                  Wprowadzamy dodatkowe informacje (np. sekcje pytań i odpowiedzi), które pomagają
                  Google lepiej zrozumieć zawartość i to co dokładnie oferujesz.
                </>
              ),
              icon: <RiShieldCheckLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Jaki efekt mierzymy po optymalizacji SEO?'
          subtitle='KPI i raportowanie'
        >
          <ul className='ml-5 list-disc space-y-2'>
            <li>
              <strong>Pozycję strony:</strong> sprawdzamy na której pozycji pokazuje się Twoja
              strona przy poszczególnych frazach.
            </li>
            <li>
              <strong>Ilość fraz:</strong> patrzymy ile nowych fraz Google łączy z Twoją witryną i
              jak wpływa to na ruch oraz pozycję.
            </li>
            <li>
              <strong>Zapytania i ruch:</strong> patrzymy o ile wzrósł ruch na Twojej stronie oraz o
              ile wzrosła ilość uzupełnionych formularzy, telefonów i wiadomości po wprowadzonych
              zmianach.
            </li>
          </ul>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Jak wygląda optymalizacja SEO witryny?'
          subtitle='Proces'
          items={[
            {
              title: '1. Ustalamy priorytety z audytu',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Wybieramy zmiany, które dadzą najszybszy efekt w Twoim przypadku.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Wdrażamy i testujemy zmiany',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Wprowadzamy odpowiednie zmiany na stronie i informujemy o nich Google.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Raport i dalsze działania',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Dostajesz krótki raport z efektami optymalizacji i listę następnych działań.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Divider line />

        <SectionBasic
          variant='left'
          imageSrc='/assets/offer/optymalizacja-seo/optymalizacja-seo-edycja-strony.webp'
          imageAlt='Optymalizacji SEO - ekran edycji strony'
          subtitle='Wyniki wdrożeń'
          title={<>Jakie efekty widzimy najczęściej po optymalizacji SEO?</>}
          description='Poniżej kilka typowych rezultatów po 2-8 tygodniach od wdrożeń. Rzeczywiste wyniki zależą od branży i skali zmian.'
        >
          <ul className='mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3'>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              <strong>Wyraźnie szybsze ładowanie strony</strong>, szczególnie na telefonach.
            </li>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              <strong>Więcej wejść z Google</strong> efekt może być zauważalny już po 2-3
              miesiącach.
            </li>
            <li className='list-none rounded-lg bg-white p-4 ring-1 ring-neutral-200'>
              <strong>Wzrost liczby zapytań</strong> po dopracowaniu opisów oferty i nawigacji.
            </li>
          </ul>
        </SectionBasic>

        <Divider line />

        <SectionPrices
          title='Cennik optymalizacji SEO'
          plans={[
            {
              name: 'Optymalizacja SEO: 1+ stron',
              price: 'od 600 zł',
              description:
                'Dla kogo: dla właścicieli prostych stron firmowych i landing pages ( stron z jedną podstroną ).',
              features: [
                'Poprawa prędkości i czasu ładowania strony (Core Web Vitals)',
                'Uporządkowanie tytułów, opisów i nagłówków H1-H3',
                'Optymalizacja grafik (rozmiar, ALT, format WebP)',
                'Uporządkowanie meta danych i struktury treści',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Optymalizacja SEO: 10+ stron',
              price: 'od 1 200 zł',
              description:
                'Dla kogo: dla właścicieli rozbudowanych stron firmowych lub małych sklepów.',
              features: [
                'Wszystko z pakietu dla małych stron, a dodatkowo:',
                'Uporządkowanie struktury kategorii i adresów URL',
                'Dodanie danych strukturalnych (schema.org, FAQ, artykuły)',
                'Optymalizacja linkowania wewnętrznego i breadcrumbów',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Optymalizacja SEO: 30+ stron',
              price: 'od 2 500 zł',
              description: 'Dla kogo: dla właścicieli dużych stron firmowych i sklepów.',
              features: [
                'Wszystko z pakietu dla rozbudowanych stron, a dodatkowo:',
                'Optymalizacja crawl budgetu i eliminacja duplikacji adresów',
                'Weryfikacja kanonikalizacji, sitemap i pliku robots.txt',
                'Audyt parametrów filtrów i paginacji (e-commerce)',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Ceny orientacyjne. Ostateczna wycena zależy od technologii, wielkości witryny i oczekiwanego tempa wzrostu. Dopasowujemy ofertę do Twojego budżetu.'
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionSteps
          title='Zobacz też'
          description='Optymalizacja najczęściej poprzedzona jest audytem, a po wdrożeniach przechodzimy do stałego pozycjonowania.'
          items={[
            {
              icon: <RiSearchLine className={largeIconSizeClasses} />,
              title: 'Audyt SEO (diagnostyka)',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Analizujemy stan Twojej witryny i tworzymy jasny plan poprawek i rozwoju.
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
              title: 'Pozycjonowanie stron',
              description: (
                <div className='flex h-full flex-col'>
                  <p className='mb-3 text-sm'>
                    Stale pracujemy nad Twoją widocznością dostarczając raporty działań co miesiąc.
                  </p>
                  <div className='mt-auto'>
                    <ButtonLink arrow href='/uslugi/marketing/pozycjonowanie-stron'>
                      Przejdź do pozycjonowania
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
          title='Sprawdź koszt optymalizacji SEO'
          description='Podaj adres swojej strony i napisz co chciałbyś/aś poprawić (szybkość, widoczność, błędy techniczne) - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/offer/optymalizacja-seo/optymalizacja-seo-edycja-strony.webp'
          imageAlt='Optymalizacja SEO - edycja i poprawa widoczności strony'
          defaultSubject='Optymalizacja SEO'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          title='Najczęstsze pytania dotyczące optymalizacji SEO'
          pageUrl='https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo'
          items={[
            {
              question: 'Czy mogę zrobić optymalizację bez audytu?',
              answer: (
                <p>
                  Teoretycznie tak, ale nie polecamy takiego rozwiązania.{' '}
                  <a href='/uslugi/marketing/audyt-seo' className='inline-link'>
                    Audyt SEO
                  </a>{' '}
                  wskazuje dokładne błędy na Twojej witrynie i pozwala opracować efektywny plan
                  działania - inwestujesz w to, co daje najszybszy efekt i nie marnujesz budżetu.
                </p>
              ),
              answerSchemaText:
                'Teoretycznie tak, ale nie polecamy takiego rozwiązania. Audyt SEO wskazuje dokładne błędy na Twojej witrynie i pozwala opracować efektywny plan działania - inwestujesz w to, co daje najszybszy efekt i nie marnujesz budżetu.',
            },
            {
              question: 'Kiedy zobaczę efekty optymalizacji SEO?',
              answer:
                'Część efektów (np. szybsze ładowanie) widać od razu. Pierwsze zmiany w widoczności zwykle pojawiają się w ciągu 2-8 tygodni, w zależności od skali prac i konkurencyjności branży.',
            },
            {
              question: 'Czy zajmujecie się też edycją lub tworzeniem treści?',
              answer:
                'Tak. Poza technicznymi wdrożeniami przygotowujemy lub poprawiamy treści, tytuły i opisy tak, aby lepiej odpowiadały na pytania użytkowników.',
            },
            {
              question: 'Jak wygląda współpraca po optymalizacji?',
              answer: (
                <p>
                  Najczęściej przechodzimy do abonamentu{' '}
                  <a href='/uslugi/marketing/pozycjonowanie-stron' className='inline-link'>
                    pozycjonowania
                  </a>
                  : rozwijamy treści, wzmacniamy strukturę i monitorujemy wyniki miesięcznie.
                </p>
              ),
              answerSchemaText:
                'Po optymalizacji zwykle przechodzimy do pozycjonowania: rozwój treści, prace strukturalne i comiesięczny monitoring.',
            },
          ]}
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Pozycjonowanie stron',
              size: 'large',
              backgroundImage:
                '/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Strony internetowe',
              size: 'medium',
              backgroundImage: '/assets/projects/autokorfu/mockup-strony-auto-korfu.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Sklepy internetowe',
              size: 'small',
              backgroundImage: '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
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
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące SEO'
          categorySlug='seo'
          articles={getArticlePreviewsByCategory('seo', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Poprawmy Twoją widoczność w Google'
        description='Szybsza strona, lepsze opisy i porządek w strukturze - wszystko, co potrzebne do wzrostu.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/arteon-baners-camper-albania-mockup.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
