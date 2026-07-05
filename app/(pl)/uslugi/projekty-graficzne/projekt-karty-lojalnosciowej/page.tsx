import Script from 'next/script';
import { IoColorPalette } from 'react-icons/io5';
import {
  RiFileTextLine,
  RiVipCrownLine,
  RiCoupon2Line,
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
  title: 'Projekt karty lojalnościowej | Arteon',
  description:
    'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
  },
  openGraph: {
    title: 'Projekt karty lojalnościowej | Arteon',
    description:
      'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    serviceName: 'Projekt karty lojalnościowej',
    description:
      'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script
      id='schema-service-projekt-karty-lojalnosciowej'
      type='application/ld+json'
    >
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLoyaltyCardPage() {
  return (
    <>
      <HeroBanner
        title='Projekt karty lojalnościowej'
        description={
          <>
            Projektujemy czytelne karty lojalnościowe dla firm usługowych i
            handlowych. Karty wspierają sprzedaż i porządkują zasady programu
            lojalnościowego.
          </>
        }
        secondaryCtaLabel='Bezpłatna wycena'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp'
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
          href: `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej`,
          label: 'Projekt karty lojalnościowej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          title='Przykładowe projekty graficzne'
          category='projekty graficzne'
        />

        <Divider line />

        <SectionInfo title='Dlaczego warto zainwestować w karty lojalnościowe?'>
          <p>
            <strong>
              Karty lojalnościowe realnie zwiększają liczbę powracających
              klientów.
            </strong>{' '}
            Narzędzie marketingowe, które wzmacnia lojalność klientów: „wracam
            do tej firmy, bo dzięki temu mam dodatkowe korzyści". W efekcie
            zwiększa się częstotliwość wizyt oraz średnia wartość zakupu.
          </p>

          <br />

          <p>
            <strong>Estetyka ma znaczenie.</strong> Dobrze zaprojektowana karta
            staje się spójną częścią wizerunku firmy - wygląda profesjonalnie,
            budzi pozytywne emocje i nie „ginie” w portfelu. Klient chętniej ją
            zachowuje i częściej o niej pamięta.
          </p>

          <br />

          <p>
            <strong>Dobra karta lojalnościowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>Motywuje do powrotu poprzez jasne i atrakcyjne nagrody,</li>
            <li>Wzmacnia więź klienta z marką i ułatwia budowanie zaufania,</li>
            <li>
              Promuje firmę dzięki estetycznej formie, którą klient nosi często
              przy sobie.
            </li>
          </ul>

          <br />

          <p>
            Z perspektywy biznesu to jeden z najtańszych sposobów na
            podniesienie przychodów - zamiast szukać nowych klientów,
            zatrzymujesz na dłużej tych, którzy już znają Twoją markę.
          </p>
        </SectionInfo>

        <Divider line />

        <FeatureGrid
          title='Co zawiera projekt karty lojalnościowej?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Układ dopasowany do branży',
              description: (
                <p>
                  Tworzymy karty dopasowane do specyfiki działalności - salonów,
                  kawiarni, siłowni, butików i innych punktów usługowych. Zasady
                  programu są czytelne zarówno dla Ciebie, jak i klientów.
                </p>
              ),
              icon: (
                <RiVipCrownLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: (
                <p>
                  Kolory, typografia i detale dopasowujemy do Twojej
                  identyfikacji wizualnej. Karta naturalnie uzupełnia pozostałe
                  materiały i wzmacnia profesjonalny wizerunek firmy.
                </p>
              ),
              icon: (
                <IoColorPalette
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Gotowość do druku',
              description: (
                <p>
                  Dostarczamy pliki w formacie gotowym do druku, z odpowiednimi
                  spadami i specyfikacją dla drukarni. Możesz od razu zamówić
                  nakład bez dodatkowych przeróbek technicznych.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Numeracje i pola pieczątek',
              description: (
                <p>
                  Projektujemy czytelne pola na pieczątki, podpisy i oznaczenia
                  nagród. Dzięki temu obsługa programu jest prosta dla zespołu i
                  zrozumiała dla klientów.
                </p>
              ),
              icon: (
                <RiCoupon2Line
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
          title='Dla kogo jest karta lojalnościowa?'
          subtitle='Kiedy ten projekt szybko się zwraca?'
        >
          <p>
            Projekt karty lojalnościowej szczególnie opłaca się tam, gdzie
            kluczowe jest, aby klient wracał regularnie - kilka lub kilkanaście
            razy w roku. Oto kilka branż, w których posiadanie karty
            lojalnościowej przynosi najlepsze efekty:
          </p>

          <br />

          <ul className='ml-5 list-disc space-y-2'>
            <li>Salony beauty, fryzjerzy, barberzy</li>
            <li>Kawiarnie i lokale gastronomiczne</li>
            <li>Siłownie, studia treningowe, zajęcia grupowe</li>
            <li>Butiki, sklepy stacjonarne</li>
            <li>Gabinety usług specjalistycznych</li>
          </ul>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionPrices
          title='Projekt karty lojalnościowej - przykładowe zakresy'
          plans={[
            {
              name: 'Karta lojalnościowa w formie wizytówki',
              price: '250 zł',
              description:
                'Dla salonu, kawiarni lub butiku, który chce wprowadzić prosty i czytelny program lojalnościowy',
              features: [
                'Konsultacja założeń programu (liczba pól, rodzaj nagrody)',
                'Projekt karty w formacie wizytówki',
                'Spójność z Twoją identyfikacją wizualną',
                'Plik gotowy do druku',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
              ],
              btnOne: 'Zamów wycenę karty dla jednego lokalu',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Karty dla kilku punktów lub sieci',
              price: 'wycena indywidualna',
              description:
                'Rozwiązanie dla marek działających w kilku lokalizacjach lub franczyzie, które potrzebują spójnych, ale zróżnicowanych kart.',
              features: [
                'Wszystko z pakietu podstawowego, a dodatkowo:',
                'Warianty kart dla wielu lokalizacji lub podmarek',
                'Możliwość różnicowania nagród i progów lojalności',
                'Plik gotowy do druku',
                'Ustalenie kierunku i indywidualnie ustalone rundy korekt',
              ],
              btnOne: 'Porozmawiajmy o kartach dla sieci',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Program lojalnościowy z dodatkowymi materiałami',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które chcą oprócz karty mieć także wsparcie materiałami POS - np. plakaty, stojaczki, grafiki do mediów społecznościowych.',
              features: [
                'Projekt kart lojalnościowych',
                'Dodatkowe materiały informujące o programie (np. plakat, naklejka, grafika do mediów społecznościowych)',
                'Spójna linia wizualna programu',
                'Plik gotowy do druku',
                'Ustalenie kierunku i indywidualnie ustalone rundy korekt',
              ],
              btnOne: 'Zbudujmy pełny program lojalnościowy',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Ostateczna wycena zależy m.in. od liczby wariantów kart, liczby lokalizacji, oczekiwanych materiałów dodatkowych i stopnia skomplikowania programu. Po krótkim briefie przygotujemy konkretną propozycję zakresu i terminów.'
        />

        <Divider line />

        <WorkSteps variant='design' />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji karty lojalnościowej'
          description='Napisz jak chcesz nagradzać klientów, ile wariantów potrzebujesz oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/gabinet-kosmetyczny-kasia/mockup-voucher-gabinet-kasia.webp'
          imageAlt='Realizacja projektu karty lojalnościowej'
          defaultSubject='Projekt karty lojalnościowej'
        />

        <Divider line />

        <SectionFaqPanels
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej'
          title='Najczęstsze pytania dotyczące projektów kart lojalnościowych'
          items={[
            {
              question: 'W jakich formatach wykonujecie karty?',
              answer:
                'Najczęściej przygotowujemy karty lojalnościowe w formacie wizytówki (85 x 55 mm). Jeśli potrzebujesz innego formatu, dopasujemy projekt.',
            },
            {
              question:
                'Czy mogę dodać logo i kolory marki na kartę lojalnościową?',
              answer:
                'Tak, projekt zawsze opiera się na Twoim dotychczasowym wizerunku. Korzystamy z logo, kolorów i stylu identyfikacji wizualnej, aby zachować pełną spójność materiałów.',
            },
            {
              question: 'Jak długo trwa realizacja kart lojalnościowych?',
              answer:
                'Standardowo przygotowanie projektu trwa od 3 do 5 dni roboczych. Przy większej liczbie wariantów termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zamówić serię różnych kart lojalnościowych?',
              answer:
                'Tak, możemy przygotować serię spójną wizualnie dla wielu punktów, lokalizacji lub marek partnerskich - program pozostaje łatwy do zrozumienia, a jednocześnie dopasowany do konkretnych miejsc.',
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
              title: 'Kupony i vouchery',
              size: 'medium',
              backgroundImage:
                '/assets/projects/gabinet-kosmetyczny-kasia/mockup-voucher-gabinet-kasia.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
            },
            {
              title: 'Projekt wizytówki',
              size: 'small',
              backgroundImage:
                '/assets/projects/talia/mockup-wizytowki-talia.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Strony internetowe',
              size: 'small',
              backgroundImage:
                '/assets/projects/jstax/moskup-strony-jstax.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
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
        title='Zwiększ lojalność swoich klientów'
        description='Zaprojektujemy karty, które sprawią, że klienci będą wracać jeszcze częściej.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
