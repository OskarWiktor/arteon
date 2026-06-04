import Script from 'next/script';
import { GoLaw } from 'react-icons/go';
import {
  RiBarChart2Line,
  RiBookOpenLine,
  RiDeviceLine,
  RiPencilRuler2Line,
  RiMoneyDollarCircleLine,
  RiBrushLine,
  RiKey2Line,
  RiLifebuoyLine,
  RiMessage2Line,
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
  title: 'Blogi internetowe - projekt i realizacja | Arteon',
  description:
    'Tworzymy blogi firmowe i eksperckie. Proste zasady, jasna gwarancja i odpowiedzialność po naszej stronie. Wyceń swój projekt już dziś',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/blogi-internetowe' },
  openGraph: {
    title: 'Blogi internetowe - projekt i realizacja | Arteon',
    description:
      'Tworzymy blogi firmowe i eksperckie. Proste zasady, jasna gwarancja i odpowiedzialność po naszej stronie. Wyceń swój projekt już dziś',
    url: 'https://www.arteonagency.pl/uslugi/blogi-internetowe',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/jstax/moskup-strony-jstax.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/blogi-internetowe',
    serviceName: 'Tworzenie blogów internetowych',
    description:
      'Projektujemy i wdrażamy blogi, które przyciągają ruch z Google: przejrzysta struktura, wygodny edytor, kategorie i wsparcie w publikacji.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id='schema-service-blogi-internetowe' type='application/ld+json'>
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferBlogPage() {
  return (
    <>
      <HeroBanner
        title='Blogi internetowe'
        description={<>Zwiększ swoją widoczność, tworząc własny blog internetowy</>}
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        variant='left'
        backgroundImage='/assets/projects/jstax/moskup-strony-jstax.webp'
        overlay='black'
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/blogi-internetowe`, label: 'Blogi internetowe' }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel title='Realizacje stron internetowych i blogów' category='strona' />

        <Divider line />

        <SectionInfo title='Co zyskujesz tworząc blog internetowy?'>
          <p>
            <strong>
              Stworzenie bloga internetowego daje Twojej firmie dodatkowe stałe źródło ruchu i
              zapytań.
            </strong>{' '}
            Artykuły na blogu internetowym potrafią generować dużą, znaczącą ilość wejść na stronę -{' '}
            <strong>ok. 55% więcej odwiedzin</strong> porównując z firmami bez bloga{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link'
              href='https://offers.hubspot.com/lessons-from-marketing-stats'
            >
              (źródło)
            </a>
            . Regularna publikacja artykułów zwiększa widoczność w Google i ściąga nowych klientów.
          </p>

          <br />

          <p>
            <strong>Blog internetowy daje więcej odwiedzin przy niskim koszcie.</strong> Marketing
            skoncentrowany wokół tworzenia treści, generuje ok.
            <strong> 3x więcej odwiedzin</strong> i kosztuje ok. <strong>62% mniej</strong> niż
            działania outbound - płatne reklamy, „zimne” maile i telefony sprzedażowe{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link'
              href='https://www.demandsage.com/business-blogging-statistics'
            >
              (źródło)
            </a>
            . Blog to stabilny kanał pozyskiwania dodatkowych klientów.
          </p>

          <br />

          <p>
            <strong>Klienci wolą pomocne, edukacyjne i eksperckie treści niż reklamy.</strong> Aż{' '}
            <strong>~70%</strong> odbiorców woli poznawać firmę poprzez artykuły, a nie reklamy - to
            prosty sposób na budowanie zaufania i dodatkowe kontakty{' '}
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='inline-link'
              href='https://www.demandsage.com/business-blogging-statistics'
            >
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry blog robi za Ciebie trzy rzeczy naraz:</strong>
          </p>

          <ul className='ml-5 list-disc'>
            <li>Przyciąga właściwy ruch z Google,</li>
            <li>Wyjaśnia Twoją ofertę i buduje rolę lidera poprzez przykłady oraz porady,</li>
            <li>Konwertuje czytelników na zapytania oraz sprzedaż,</li>
          </ul>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz tworząc blog internetowy z nami?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Indywidualny projekt graficzny bloga ',
              description: (
                <>
                  Wygląd, który od pierwszych sekund pokazuje profesjonalizm i zachęca do czytania
                </>
              ),
              icon: <RiPencilRuler2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Dobór i obróbka grafik do wpisów',
              description: (
                <>
                  Pomagamy dobrać spójne grafiki i dopasowujemy je do bloga: kadry, proporcje, waga
                </>
              ),
              icon: <RiBrushLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Wsparcie prawne przy politykach i zgodach',
              description: <>Przeprowadzamy Cię przez wymagania (polityki, pliki cookie, zgody)</>,
              icon: <GoLaw className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Blog dostosowany do różnych urządzeń',
              description: <>Czytelność oraz szybkość na każdym urządzeniu</>,
              icon: <RiDeviceLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Dedykowane szkolenie PDF z obsługi bloga',
              description: <>Proste instrukcje: jak dodać wpis, zdjęcia i linki</>,
              icon: <RiBookOpenLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: (
                <>
                  Dostajesz wycenę z jasnym zakresem, informujemy Cię na bieżąco, ile coś kosztuje
                </>
              ),
              icon: (
                <RiMoneyDollarCircleLine className={cn('text-primary', normalIconSizeClasses)} />
              ),
            },
            {
              title: 'Transparentna współpraca na bieżąco',
              description: <>Informujemy Cię regularnie o postępach prac nad Twoim blogiem</>,
              icon: <RiMessage2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Pełną własność i dostępy',
              description: (
                <>Przekazujemy Ci wszystkie konta oraz hasła - w trakcie oraz po zakończeniu prac</>
              ),
              icon: <RiKey2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Proste raporty wyników',
              description: (
                <>
                  Wdrażamy narzędzia analityczne pokazujące skąd jest ruch i które wpisy pracują
                  najlepiej
                </>
              ),
              icon: <RiBarChart2Line className={cn('text-primary', normalIconSizeClasses)} />,
            },
            {
              title: 'Dalsze wsparcie + 2 miesiące gwarancji',
              description: (
                <>
                  Po publikacji pomagamy w dalszym rozwoju bloga. Ewentualne błędy poprawiamy w
                  ramach gwarancji
                </>
              ),
              icon: <RiLifebuoyLine className={cn('text-primary', normalIconSizeClasses)} />,
            },
          ]}
        />

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          id='pricing-blogs'
          title='Cennik blogów internetowych'
          plans={[
            {
              name: 'Blog mały',
              price: '1 800 - 2 500 zł',
              description:
                'Prosty blog firmowy na start. Stabilny, łatwy w obsłudze i przygotowany pod SEO, abyś mógł zacząć publikować i zdobywać klientów od pierwszego dnia.',
              features: [
                'Do 30 artykułów - idealne na początek',
                'SEO techniczne - w cenie',
                'Wybrane integracje (newsletter, formularz)',
                'Analityka GA4 i Search Console do monitorowania wyników',
                'Optymalizacja prędkości i zabezpieczenia',
                'Wsparcie prawne - polityka prywatności, regulaminy',
                'Prosty panel do samodzielnej edycji treści',
                'Szkolenie PDF z obsługi bloga',
              ],
              btnOne: 'Zamów mały blog',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Blog średni',
              price: '3 200 - 4 000 zł',
              description:
                'Rozbudowany blog dla firm, które chcą regularnie publikować i budować wizerunek eksperta. Więcej treści, integracje marketingowe i większe możliwości rozwoju.',
              features: [
                'Do 100 artykułów',
                'SEO techniczne i redakcja treści - w pakiecie',
                'Newsletter i wybrane integracje marketingowe (np. mailing)',
                'Zaawansowana analityka i monitoring pozycji',
                'Przejrzysta struktura treści i nawigacji',
                'Wsparcie prawne - polityka prywatności, regulaminy',
                'Panel do edycji treści - WordPress lub Webflow',
                'Szkolenie PDF z obsługi bloga',
              ],
              btnOne: 'Zamów blog średni',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Blog premium',
              price: '6 500 - 8 000 zł',
              description:
                'Blog premium w technologii Webflow. Design klasy premium, płynne animacje i sekcje polecanych treści. Idealny dla marek, które stawiają na estetykę i pełen komfort edycji.',
              features: [
                'Do 300 artykułów, rozbudowane kategorie',
                'SEO techniczne - w cenie',
                'Newsletter i wybrane integracje marketingowe (np. mailing)',
                'Zaawansowana analityka i monitoring pozycji',
                'Przejrzysta struktura treści i nawigacji',
                'Zaawansowana optymalizacja szybkości i bezpieczeństwa',
                'WCAG 2.1 AA + Deklaracja Dostępności',
                'Wsparcie prawne - polityka prywatności, regulaminy',
                'Intuicyjny CMS do samodzielnego zarządzania treścią',
                'Darmowe szkolenie PDF dla Ciebie i zespołu',
              ],
              btnOne: 'Zamów blog premium',
              btnOneHref: '#kontakt',
              lastPlan: true,
            },
          ]}
          note={{
            text: (
              <p className='text-light'>
                <strong className='text-dark'>Masz większe plany? </strong>
                Tworzymy zaawansowane strony, aplikacje i sklepy w Next.js - rozwiązania szyte na
                miarę, które spełnią najbardziej wymagające cele biznesowe.
              </p>
            ),
            ctaLabel: 'Porozmawiajmy o Twoim blogu',
            ctaLink: '#kontakt',
          }}
        />

        <Divider />

        <WorkSteps variant='web' />

        <Divider size='sm' />

        <SectionContactForm
          title='Sprawdź koszt realizacji bloga internetowego'
          description='Napisz o czym ma być Twój blog, czy potrzebujesz pomocy z tworzeniem treści oraz czy posiadasz materiały graficzne (logo oraz zdjęcia) i otrzymaj darmową wycenę realizacji.'
          imageSrc='/assets/projects/jstax/moskup-strony-jstax.webp'
          imageAlt='Realizacja strony z blogiem dla biura rachunkowego JSTax'
          defaultSubject='Blog'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          title='Najczęstsze pytania dotyczące blogów internetowych'
          pageUrl='https://www.arteonagency.pl/uslugi/blogi-internetowe'
          items={[
            {
              question: 'Ile trwa stworzenie bloga?',
              answer:
                'Standardowo projekt zajmuje od 7 do 20 dni roboczych, w zależności od złożoności i dostępnych materiałów.',
            },
            {
              question: 'Czy mogę samodzielnie prowadzić bloga po wdrożeniu?',
              answer:
                'Tak, po uruchomieniu bloga otrzymasz szkolenie PDF, dzięki któremu samodzielnie dodasz wpisy, zdjęcia i kategorie.',
            },
            {
              question: 'Czy blog będzie zoptymalizowany pod SEO?',
              answer:
                'Tak, wdrażamy techniczne podstawy SEO (szybkość, responsywność, struktura nagłówków, meta tagi) i stosujemy najlepsze praktyki, aby Twoje treści miały szansę dobrze pozycjonować się w Google.',
            },
            {
              question: 'Czy projektujecie wygląd bloga od zera?',
              answer:
                'Tak, blog może być zaprojektowany indywidualnie, zgodnie z identyfikacją Twojej marki. Możemy też oprzeć go na nowoczesnym, dopracowanym szablonie.',
            },
            {
              question: 'Czy dodajecie pierwsze wpisy na start?',
              answer:
                'Tak, możemy przygotować i dodać kilka startowych wpisów, aby blog wyglądał na aktywny i przyciągał ruch od pierwszego dnia.',
            },
            {
              question: 'Czy mogę liczyć na pomoc w strategii treści?',
              answer:
                'Tak, pomagamy w budowie struktury bloga tak, aby pojawił się wyżej w Google.',
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
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage: '/assets/projects/perly-mocy/mockup-strony-perly-mocy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
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
              title: 'Projekt logo',
              size: 'small',
              backgroundImage:
                '/assets/projects/finish-masters/logo/mockup-logo-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące stron i blogów'
          categorySlug='strony'
          articles={getArticlePreviewsByCategory('strony', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Czas na blog, który buduje Twoją pozycję'
        description='Wzmacniamy Twój autorytet w branży i wspieramy SEO prostymi narzędziami'
        btnOne='Wyceń projekt'
        btnOneHref='#kontakt'
        backgroundImage='/assets/projects/jstax/moskup-strony-jstax.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
