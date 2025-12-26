import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiCustomerService2Line, RiLightbulbFlashLine, RiShieldCheckLine, RiSearchLine, RiFileList2Line, RiCheckLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/buttons/Button';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import { getAllArticlePreviews } from '@/lib/blog';

const RELATED_ARTICLE_SLUGS = [
  'dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic',
  'czym-jest-linkowanie-wewnetrzne-i-jak-wplywa-na-seo-strony',
  'meta-title-i-description-jak-je-napisac',
  'faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony',
  'jak-mierzyc-skutecznosc-strony-internetowej',
];

export const metadata = {
  title: 'Audyt SEO - plan pozycjonowania Twojej witryny - Arteon',
  description: 'Przeprowadź audyt SEO swojej witryny - przygotujemy plan, który sprawi, że Twoja witryna znajdzie się wyżej w wynikach wyszukiwarki Google.',
  alternates: { canonical: toAbsoluteUrl('/uslugi/marketing/audyt-seo') },
  openGraph: {
    title: 'Audyt SEO - plan pozycjonowania Twojej witryny - Arteon',
    description: 'Przeprowadź audyt SEO swojej witryny - przygotujemy plan, który sprawi, że Twoja witryna znajdzie się wyżej w wynikach wyszukiwarki Google.',
    url: toAbsoluteUrl('/uslugi/marketing/audyt-seo'),
    siteName: 'Arteon',
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/bg/abstract-bg5.webp') }],
    //images: [{ url: `${BASE}/assets/og/audyt-seo.webp`, width: 1200, height: 630, alt: 'Audyt SEO - Arteon' }],
  },
  //twitter: {
  //  card: 'summary_large_image',
  //  title: 'Audyt SEO - plan pozycjonowania Twojej witryny - Arteon',
  //  description:
  //    'Przeprowadź audyt SEO swojej witryny i sprawdź, co zrobić, aby wyświetlać się wyżej w Google.',
  //  images: [`${BASE}/assets/og/audyt-seo.webp`],
  //},
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: siteUrl,
    path: '/uslugi/marketing/audyt-seo',
    serviceName: 'Audyt SEO',
    description: 'Audyt SEO dla stron i sklepów internetowych - analiza techniczna, treściowa i strukturalna strony z rekomendacjami działań.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-audyt-seo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferMarketingPage() {
  const articles = getAllArticlePreviews();

  return (
    <>
      <HeroBanner
        title="Audyt SEO"
        description={<>Przeprowadź audyt SEO swojej witryny i sprawdź, co możesz zrobić, aby wyświetlać się wyżej w wynikach wyszukiwarki Google.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiCustomerService2Line />, label: 'Stabilny rozwój' },
          { icon: <RiLightbulbFlashLine />, label: 'Lepsza widoczność' },
          { icon: <RiBarChart2Fill />, label: 'Raport i priorytety' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczne wdrożenia' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/audyt-seo`, label: 'Audyt SEO' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskasz po audycie SEO?">
          <p>
            <strong>Przeprowadzając audyt SEO swojej strony otrzymujesz pełny raport mocnych i słabych punktów swojej witryny oraz jasny plan poprawy widoczności w wyszukiwarce.</strong> Dowiesz się,
            jak Google widzi Twoją stronę, które podstrony blokują wyniki i jakie elementy wymagają poprawy w pierwszej kolejności.
          </p>
          <br />
          <p>
            <strong>Szybkie poprawki + plan na 90 dni.</strong> Wskażemy zmiany, które da się wdrożyć od razu, a następnie rozpiszemy plan działania na kolejne tygodnie. Dzięki temu Twoja strona
            zacznie zajmować wyższą pozycję w Google, przyciągając odpowiednich klientów.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/offer/audyt-seo/audyt-seo-screen-analityki.webp"
          imageAlt="Audyt SEO - analiza widoczności strony w Google Analytics"
          subtitle="Dla kogo"
          title="Kiedy audyt SEO ma największy sens i dla kogo jest?"
          description="Gdy strona nie wyświetla się tak wysoko, jakbyś chciał, planujesz przebudowę serwisu lub chcesz bezpiecznie zwiększać ruch i ilość zapytań. Kompleksowy audyt SEO jest najlepszy dla:"
          btnOne="Zamów audyt SEO"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Właścicieli nowych platform, które potrzebują solidnych podstaw zanim ruszą z kampaniami reklamowymi.</li>
            <li>Właścicieli sklepów oraz stron internetowych z problemami widoczności, które nie pozwalają na dostateczną ilość zapytań lub klientów.</li>
            <li>Firm usługowych i B2B, którym zależy na stałym dopływie jakościowych zapytań od klientów.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie sprawdzamy podczas audytu?"
          items={[
            {
              title: 'Czy Google może znaleźć i zrozumieć Twoją stronę',
              description: (
                <>Weryfikujemy, czy strona pojawia się w Google, które podstrony są pomijane i dlaczego. Sprawdzimy mapę strony i ustawienia, które potrafią ukryć treści przed wyszukiwarką.</>
              ),
              icon: <RiSearchLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Szybkość ładowania i wygodę korzystania',
              description: (
                <>Mierzymy, jak szybko wczytuje się strona i jak wygląda ona od strony technicznej. Wskazujemy proste zmiany, które przyspieszą działanie i poprawią wrażenia użytkowników.</>
              ),
              icon: <RiCheckLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Czy treści są dopasowane do tego, czego szukają klienci',
              description: <>Sprawdzimy, czy Twoje treści odpowiadają na pytania użytkowników i czy nie konkurują ze sobą. Zaproponujemy tematy i układ, który ułatwi zdobywanie wyższych pozycji.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-700" />,
            },
            {
              title: 'Strukturę strony oraz linki wewnętrzne',
              description: <>Uporządkujemy nawigację i połączenia między podstronami, aby ważne treści były łatwo dostępne dla użytkowników i wyszukiwarki.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-700" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak wygląda audyt SEO witryny?"
          subtitle="Proces"
          items={[
            {
              title: '1. Wdrażamy analitykę i zbieramy dane',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Analizujemy stronę technicznie, następnie patrzymy na ruch i wyszukiwania, sprawdzamy, jak Google widzi Twoją stronę.</p>
                </div>
              ),
            },
            {
              title: '2. Przygotowujemy raport i priorytety',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Tworzymy raport wszelkich błędów i problemów oraz przygotowujemy listę działań podzielonych na szybkie poprawki i zadania na 90 dni.</p>
                </div>
              ),
            },
            {
              title: '3. Omawiamy wnioski i kolejne kroki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Przechodzimy przez dokument wspólnie. Ustalamy, co wdrażamy od razu, a co planujemy na kolejny etap.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Co sprawdzamy w audycie SEO i późniejszej optymalizacji SEO?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Pozycję strony:</strong> sprawdzamy, na której pozycji pokazuje się Twoja strona przy poszczególnych frazach.
            </li>
            <li>
              <strong>Ilość fraz:</strong> patrzymy, ile nowych fraz Google łączy z Twoją witryną i jak wpływa to na ruch oraz pozycję.
            </li>
            <li>
              <strong>Zapytania i ruch:</strong> patrzymy, o ile wzrósł ruch na Twojej stronie oraz o ile wzrosła ilość uzupełnionych formularzy, telefonów i wiadomości po wprowadzonych zmianach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/offer/audyt-seo/audyt-seo-screen-gsc.webp"
          imageAlt="Audyt SEO - analiza widoczności strony w Google Search Console"
          subtitle="Wyniki wdrożeń"
          title={<>Jakie efekty widzimy najczęściej po przeprowadzeniu audytu SEO i wdrożeniu pozycjonowania?</>}
          btnOne="Porozmawiajmy o audycie"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wejść z Google</strong> efekt może być zauważalny już po 2-3 miesiącach.
            </li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Szybsze działanie strony</strong> dzięki optymalizacji technicznej witryny.
            </li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej zapytań z formularza i telefonów</strong> po dopracowaniu nagłówków, opisów i całej oferty.
            </li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Cennik audytu SEO"
          subtitle="Przykładowe zakresy i ceny"
          plans={[
            {
              name: 'Audyt SEO: 1+ strona',
              price: 'od 200 zł',
              description: 'Dla kogo: dla właścicieli prostych stron firmowych i landing pages ( stron z jedną podstroną ).',
              features: [
                'Analiza indeksacji i widoczności w Google',
                'Analiza techniczna - prędkość strony, wersja na telefon',
                'Weryfikacja tytułów, opisów i nagłówków H1-H3',
                'Ocena treści pod kątem słów kluczowych i intencji użytkowników',
                'Rekomendacje optymalizacyjne i plan działań ',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Audyt SEO: 10+ stron',
              price: 'od 600 zł',
              description: 'Dla kogo: dla właścicieli rozbudowanych stron firmowych lub małych sklepów.',
              features: [
                'Wszystko z pakietu dla małych stron, a dodatkowo:',
                'Analiza struktury kategorii i hierarchii adresów URL',
                'Ocena treści pod kątem słów kluczowych i duplikacji',
                'Audyt meta danych, ALT grafik i danych strukturalnych',
                'Analiza widoczności konkurencji i luk tematycznych',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Audyt SEO: 30+ stron',
              price: 'od 1000 zł',
              description: 'Dla kogo: dla właścicieli dużych stron firmowych i sklepów.',
              features: [
                'Wszystko z pakietu dla małych sklepów i rozbudowanych stron, a dodatkowo:',
                'Analiza crawl budgetu i logiki indeksacji dużych zasobów',
                'Audyt duplikacji treści między kategoriami i/lub językami',
                'Analiza pliku robots.txt, sitemap i kanonikalizacji',
                'Analiza konkurencji i widoczności branżowej',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ceny orientacyjne brutto. Dokładna wycena zależy od dokładnej wielkości witryny i indywidualnych czynników zależnych od branży."
        />

        <Gap variant="line" />

        <SectionSteps
          title="Kolejne kroki po audycie"
          subtitle="Zobacz też"
          description="Po diagnozie zwykle przechodzimy do wdrożeń i stałej pracy nad widocznością."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wprowadzamy zmiany: przyspieszamy ładowanie, porządkujemy tytuły i opisy, dodajemy dane ułatwiające Google zrozumienie treści.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/optymalizacja-seo">
                      Przejdź do optymalizacji SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Pozycjonowanie stron (abonament)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Pracujemy nad stałym wzrostem widoczności: tworzymy plan treści, rozbudowujemy ofertę, dodajemy nowe bloki i mierzymy efekt co miesiąc</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Sprawdź abonament na pozycjonowanie stron
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <ContactForm title="Zamów audyt SEO" description="Podaj adres swojej strony a my przygotujemy wycenę audytu SEO" defaultSubject="Audyt SEO" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/uslugi/marketing/audyt-seo')}
          items={[
            {
              question: 'Co dokładnie sprawdza audyt SEO i jakie są najczęstsze blokery?',
              answer: (
                <p>
                  Weryfikujemy indeksację, szybkość i Core Web Vitals, strukturę informacji, meta dane, nagłówki, linkowanie wewnętrzne, dane strukturalne, mapy strony, robots.txt i treści pod
                  intencję wyszukiwania. Częste blokery to: brak indeksacji kluczowych podstron, wolne ładowanie, duplikacja treści, słabe nagłówki i chaotyczna nawigacja. Szerzej opisujemy to w
                  naszym{' '}
                  <a href="/edukacja/seo/dlaczego-strona-internetowa-nie-wyswietla-sie-w-google-i-jak-to-naprawic" className="inline-link">
                    artykule
                  </a>
                  .
                </p>
              ),
              answerSchemaText:
                'Audyt sprawdza indeksację, Core Web Vitals, strukturę, meta, nagłówki, linkowanie, dane strukturalne, sitemap, robots.txt oraz dopasowanie treści do intencji. Typowe blokery: brak indeksacji, wolne ładowanie, duplikacja, słabe nagłówki i nawigacja.',
            },
            {
              question: 'Jakie dostępy są potrzebne do audytu SEO?',
              answer:
                'Wystarczy adres strony. Dla pełnej diagnozy prosimy o dostępy tylko do odczytu: Google Search Console i Google Analytics 4. Dostęp do CMS/hostingu nie jest wymagany na etapie audytu.',
            },
            {
              question: 'Co dostanę po audycie SEO i jak wygląda raport?',
              answer: 'Otrzymasz dokument z listą priorytetów, opisem problemów, rekomendacjami wdrożeń, przykładami i krótkim podsumowaniem.',
            },
            {
              question: 'Ile trwa audyt SEO i od czego zależy wycena?',
              answer: 'Standardowo 5-10 dni roboczych. Czas i cena zależą od wielkości serwisu (liczby podstron), technologii i zakresu analizy (np. e-commerce, wielojęzyczność).',
            },
            {
              question: 'Czy audyt SEO sam w sobie poprawi pozycje w Google?',
              answer: 'Nie. Audyt SEO to diagnoza i plan. Wzrost pozycji pojawia się po wdrożeniu rekomendacji: poprawkach technicznych, uporządkowaniu treści i innym indywidualnym zadaniom.',
            },
            {
              question: 'Czy zajmujecie się realizacją zaleceń po audycie SEO?',
              answer: 'Tak. Po audycie przechodzimy do optymalizacji SEO: poprawiamy prędkość, meta, strukturę i dane strukturalne, porządkujemy treści. Możemy też prowadzić dalsze pozycjonowanie.',
            },
            {
              question: 'Jak często powtarzać audyt SEO?',
              answer: 'Rekomendujemy pełny audyt co 6-12 miesięcy lub przed większą przebudową serwisu. Lżejszy przegląd kwartalny pozwala utrzymać tempo wzrostu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap variant="line" />

        <ArticlesCarousel title="Sprawdź nasze artykuły dotyczące audytu SEO" subtitle="Edukacja" articles={articles} slugs={RELATED_ARTICLE_SLUGS} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Poznaj prawdziwy stan SEO swojej strony"
        description="Audyt, który kończy się planem działania - nie tylko diagnozą."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
