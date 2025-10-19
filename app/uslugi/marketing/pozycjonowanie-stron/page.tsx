import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiLineChartLine, RiSearchLine, RiFileList2Line, RiCheckLine, RiLinksFill } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';
import Script from 'next/script';

export const metadata = {
  title: 'Pozycjonowanie stron — stały wzrost widoczności i zapytań | Arteon',
  description: 'Długofalowe pozycjonowanie stron: plan treści, porządek na stronie i bezpieczne linki. Comiesięczny raport i jasne priorytety działań.',
  keywords: ['pozycjonowanie stron', 'SEO abonament', 'pozycjonowanie strony firmowej', 'wzrost widoczności w Google', 'strategia treści', 'miesięczny raport SEO'],
  alternates: { canonical: '/uslugi/marketing/pozycjonowanie-stron' },
  openGraph: {
    title: 'Pozycjonowanie stron — stały wzrost widoczności i zapytań | Arteon',
    description: 'Budujemy widoczność w Google miesiąc po miesiącu. Strategia treści, uporządkowany on-page i bezpieczne linki. Raport co miesiąc.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/pozycjonowanie-stron',
    type: 'website',
  },
} as const;

/* === Service JSON-LD (schema.org) === */
function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Pozycjonowanie stron',
    serviceType: 'SEO Retainer',
    provider: { '@type': 'Organization', name: 'Arteon', url: `${base}` },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/pozycjonowanie-stron`,
    description: 'Stała współpraca SEO dla stron firmowych: strategia treści, uporządkowany on-page i bezpieczne linki. Raport co miesiąc i jasne priorytety.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/pozycjonowanie-stron`,
    },
  };
  return (
    <Script id="schema-service-pozycjonowanie" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferSeoSubscription() {
  return (
    <>
      <HeroBanner
        title="Pozycjonowanie stron"
        description={
          <>Budujemy długofalową widoczność Twojej strony w Google. Co miesiąc rozwijamy treści, porządkujemy serwis i dbamy o bezpieczne linki — tak, aby pojawiały się nowe zapytania z WWW.</>
        }
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiLineChartLine />, label: 'Stały wzrost widoczności' },
          { icon: <RiLightbulbFlashLine />, label: 'Strategia treści' },
          { icon: <RiBarChart2Fill />, label: 'Raport co miesiąc' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczne działania' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/pozycjonowanie-stron`, label: 'Pozycjonowanie stron' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        {/* Wartość i obietnica rezultatu */}
        <SectionInfo title="Na czym polega pozycjonowanie stron i dlaczego działa?">
          <p>
            <strong>Pozycjonowanie to praca etapami, miesiąc po miesiącu.</strong> Zamiast pojedynczych strzałów, budujemy system: rozwijamy treści, poprawiamy kluczowe podstrony i pozyskujemy linki,
            które wzmacniają wiarygodność domeny. Dzięki temu Twoja strona częściej pojawia się tam, gdzie szukają Cię klienci.
          </p>
          <br />
          <p>
            <strong>Pracujemy na priorytetach i danych.</strong> Każdy miesiąc ma jasny cel: konkretne tematy treści, podstrony do dopracowania i zadania wspierające widoczność. Otrzymujesz czytelny
            raport i plan na kolejny etap.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        {/* Dla kogo (z obrazkiem) */}
        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/seo-sub-01.webp"
          imageAlt="Pozycjonowanie stron — plan treści i rozwój widoczności"
          subtitle="Dla kogo"
          title={<>Kiedy abonament SEO ma największy sens?</>}
          description="Gdy chcesz stałego dopływu zapytań z Google i przewagi nad konkurencją — bez jednorazowych skoków."
          btnOne="Porozmawiajmy"
          btnOneLink="#kontakt"
          btnTwo="Zobacz zakres"
          btnTwoLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Strony firmowe, które chcą rosnąć w wynikach wyszukiwania i pozyskiwać więcej zapytań.</li>
            <li>Branże usługowe i B2B, gdzie liczy się ekspertowość i regularne publikacje.</li>
            <li>Marki, które wolą stabilną strategię niż chaotyczne działania bez planu.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        {/* Co robimy co miesiąc — po ludzku */}
        <FeatureGrid
          title="Co robimy w ramach pozycjonowania (co miesiąc)?"
          subtitle="Zakres działań i efekty"
          items={[
            {
              title: 'Strategia treści i kalendarz publikacji',
              description: <>Wybieramy tematy, które odpowiadają na pytania klientów i wzmacniają pozycję strony. Tworzymy kalendarz i dbamy o regularność publikacji.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Poprawa kluczowych podstron (on-page)',
              description: <>Dopracowujemy istniejące podstrony oferty i bloga: nagłówki, tytuły, opisy i układ treści. Dzięki temu są lepiej dopasowane do zapytań użytkowników.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Bezpieczne linki z wartościowych miejsc',
              description: <>Pozyskujemy odnośniki z miejsc, które mają sens dla Twojej branży (np. artykuły branżowe, katalogi jakościowe). Chodzi o jakość i naturalność, nie o ilość.</>,
              icon: <RiLinksFill className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Monitoring i raport co miesiąc',
              description: <>Sprawdzamy widoczność, wejścia z Google i zapytania z WWW. Dostajesz prosty raport i rekomendacje na kolejny miesiąc.</>,
              icon: <RiBarChart2Fill className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        {/* Jak mierzymy efekty */}
        <SectionInfo title="Jak mierzymy postępy?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Widoczność fraz:</strong> ile zapytań trafia do Top10/Top3 i jak rośnie zasięg tematów.
            </li>
            <li>
              <strong>Ruch z Google:</strong> liczba wejść na stronę z wyników wyszukiwania.
            </li>
            <li>
              <strong>Zapytania:</strong> formularze, telefony i wiadomości — ile realnie zgłasza się klientów.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        {/* Proces współpracy */}
        <SectionSteps
          title="Jak wygląda współpraca — krok po kroku"
          subtitle="Proces"
          description="Powtarzalny schemat, który porządkuje działania i pozwala rosnąć konsekwentnie."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: '1. Plan 90 dni: priorytety i tematy',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ustalamy cele i zakres na trzy najbliższe miesiące: tematy treści, podstrony do dopracowania i zadania wspierające.</p>
                </div>
              ),
            },
            {
              icon: <RiCheckLine className="h-8 w-8" />,
              title: '2. Produkcja treści i poprawa kluczowych podstron',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Publikujemy artykuły, rozwijamy sekcje oferty i porządkujemy elementy, które wpływają na widoczność i konwersję.</p>
                </div>
              ),
            },
            {
              icon: <RiLinksFill className="h-8 w-8" />,
              title: '3. Linki i wzmocnienie autorytetu',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Pozyskujemy wartościowe odnośniki, które naturalnie wspierają widoczność domeny.</p>
                </div>
              ),
            },
            {
              icon: <RiBarChart2Fill className="h-8 w-8" />,
              title: '4. Raport i plan na kolejny miesiąc',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Omawiamy wyniki i rekomendujemy kolejne kroki. Dzięki temu praca jest przewidywalna i skuteczna.</p>
                </div>
              ),
            },
          ]}
          grid="four"
        />

        <Gap variant="line" />

        {/* Mini-case (język korzyści) */}
        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/seo-sub-02.webp"
          imageAlt="Efekty pozycjonowania stron — przykłady"
          subtitle="Wyniki naszych Klientów"
          title={<>Jakie rezultaty widzimy najczęściej?</>}
          description="Przykłady z ostatnich wdrożeń. Rzeczywiste wyniki zależą od branży, konkurencji i intensywności prac."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Stały przyrost fraz w Top10</strong> w ciągu 3-6 miesięcy, wraz z większą liczbą wejść z Google.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej zapytań</strong> po dopracowaniu podstron oferty i regularnych publikacjach blogowych.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Lepszy wizerunek eksperta</strong> dzięki treściom, które odpowiadają na realne pytania klientów.
            </li>
          </ul>
          <div className="mt-6">
            <Button arrow link="#kontakt">
              Porozmawiajmy o Twojej stronie
            </Button>
          </div>
        </SectionBasic>

        <Gap variant="line" />

        {/* Pakiety cenowe */}
        <SectionPrices
          title="Pakiety pozycjonowania"
          subtitle="Miesięczne plany"
          plans={[
            {
              name: 'SEO Start',
              price: 'od 1 200 zł / mies.',
              description: 'Dla mniejszych stron firmowych. Podstawowy plan treści i porządek on-page.',
              features: ['Plan treści i harmonogram', 'Poprawa kluczowych podstron', 'Raport miesięczny'],
              btnOne: 'Zamów ofertę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'SEO Rozwój',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 600 zł / mies.',
              description: 'Strategia treści + bezpieczne linki. Dla firm, które chcą rosnąć szybciej.',
              features: ['Publikacje i aktualizacje', 'Linki z wartościowych miejsc', 'Raport KPI + rekomendacje'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'SEO Plus',
              price: 'od 2 400 zł / mies.',
              description: 'Większa intensywność prac i szybciej widoczne efekty.',
              features: ['Rozszerzony plan treści', 'Silniejsze wzmocnienie linkami', 'Priorytetowe wdrożenia'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz rozbudowaną stronę lub wiele lokalizacji? Przygotujemy zakres dopasowany do Twojej sytuacji.</>,
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote="Ceny są orientacyjne. Dokładną wycenę przedstawimy po krótkim briefie i wglądzie w stronę."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Powiązane usługi"
          description="Najlepsze efekty osiągamy, łącząc strategię treści z solidnym fundamentem technicznym."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'Audyt SEO (diagnostyka)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Jeśli jeszcze nie robiliśmy audytu — zaczniemy od diagnozy i listy priorytetów.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/audyt-seo">
                      Zobacz audyt SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wprowadzimy zmiany techniczne i treściowe, które poprawią widoczność i wygodę korzystania.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/optymalizacja-seo">
                      Przejdź do optymalizacji
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap size="sm" />

        <ContactForm
          title="Zamów pozycjonowanie strony"
          description="Podaj adres strony i cele. Przygotujemy plan działań i wycenę dopasowaną do Twojej branży."
          defaultSubject="Pozycjonowanie stron"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/pozycjonowanie-stron"
          items={[
            {
              question: 'Ile trwa pozycjonowanie i kiedy widać efekty?',
              answer:
                'To proces. Pierwsze wzrosty zwykle pojawiają się w ciągu 1-3 miesięcy, a stabilna poprawa buduje się w perspektywie 3-6 miesięcy i dłużej. Tempo zależy od konkurencji i intensywności prac.',
            },
            {
              question: 'Czy tworzycie treści w ramach współpracy?',
              answer: 'Tak. Przygotowujemy i aktualizujemy treści zgodnie z kalendarzem publikacji: artykuły, poradniki, rozbudowę podstron oferty.',
            },
            {
              question: 'Czy pozyskujecie linki do strony?',
              answer: 'Tak. Stawiamy na bezpieczne i jakościowe miejsca, które są powiązane tematycznie z Twoją branżą. Liczy się naturalność i sens, nie sama liczba odnośników.',
            },
            {
              question: 'Jak wygląda raportowanie?',
              answer: 'Co miesiąc otrzymujesz prosty raport: widoczność fraz, wejścia z Google i liczba zapytań. Dołączamy rekomendacje na kolejny etap.',
            },
            {
              question: 'Czy to usługa dla sklepów internetowych?',
              answer: 'Ta oferta jest skoncentrowana na stronach firmowych. Dla e-commerce przygotujemy osobną propozycję w oparciu o kartę produktów i potrzeby sklepu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Budujmy widoczność miesiąc po miesiącu"
        description="Strategia treści, porządek na stronie i bezpieczne linki — zestaw, który realnie zwiększa liczbę zapytań."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />

      {/* JSON-LD Service */}
      <ServiceSchema />
    </>
  );
}
