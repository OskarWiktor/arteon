import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiSearchLine, RiFileList2Line, RiToolsLine, RiCheckLine } from 'react-icons/ri';
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
  title: 'Optymalizacja SEO — szybsza strona i lepsza widoczność w Google | Arteon',
  description: 'Wdrażamy poprawki po audycie: przyspieszamy stronę, porządkujemy treści i ułatwiamy Google ich zrozumienie. Testy przed i po, jasne raporty i stabilny wzrost.',
  keywords: ['optymalizacja SEO', 'poprawa szybkości strony', 'widoczność w Google', 'optymalizacja treści', 'dane ułatwiające Google zrozumienie strony', 'wdrożenia SEO'],
  alternates: { canonical: '/uslugi/marketing/optymalizacja-seo' },
  openGraph: {
    title: 'Optymalizacja SEO — szybsza strona i lepsza widoczność w Google | Arteon',
    description: 'Praktyczne wdrożenia po audycie: szybka strona, uporządkowane treści i lepsze wyniki w Google. Wszystko z testami i raportami.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo',
    type: 'website',
  },
} as const;

function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Optymalizacja SEO',
    serviceType: 'SEO Implementation',
    provider: {
      '@type': 'Organization',
      name: 'Arteon',
      url: `${base}`,
    },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/optymalizacja-seo`,
    description: 'Wdrożenia po audycie: poprawa szybkości strony, porządek w treściach i dodatkowe dane, które pomagają Google lepiej zrozumieć witrynę. Testy przed i po, mierzalne wyniki.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/optymalizacja-seo`,
    },
  };
  return (
    <Script id="schema-service-optymalizacja-seo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferOptimizationSEO() {
  return (
    <>
      <HeroBanner
        title="Optymalizacja SEO"
        description={
          <>Wprowadzimy zmiany, które realnie poprawią wyniki: przyspieszymy stronę, uporządkujemy treści i ułatwimy Google ich zrozumienie. Każde wdrożenie mierzymy — zobaczysz efekt przed i po.</>
        }
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiToolsLine />, label: 'Bezpieczne wdrożenia' },
          { icon: <RiLightbulbFlashLine />, label: 'Poprawa pozycji i ruchu' },
          { icon: <RiBarChart2Fill />, label: 'Testy przed i po' },
          { icon: <RiShieldCheckLine />, label: 'Stabilność i jakość' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/optymalizacja-seo`, label: 'Optymalizacja SEO' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Na czym polega optymalizacja SEO i dlaczego działa?">
          <p>
            <strong>Optymalizacja to praktyczny etap po audycie SEO.</strong> Zamiast teoretycznych zaleceń — wdrażamy konkretne zmiany, które skracają czas ładowania, porządkują treści i sprawiają,
            że Google łatwiej rozumie najważniejsze podstrony. Dzięki temu strona rośnie w widoczności, a użytkownik szybciej znajduje to, czego potrzebuje.
          </p>
          <br />
          <p>
            <strong>Mierzymy efekty każdej zmiany.</strong> Przed wdrożeniem zapisujemy stan bieżący, a po publikacji sprawdzamy, jak poprawił się czas ładowania, pozycje i wejścia z Google. Wiesz
            dokładnie, co zadziałało.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/opt-seo-01.webp"
          imageAlt="Optymalizacja SEO — wdrożenia, które widać w wynikach"
          subtitle="Dla kogo"
          title={<>Kiedy warto wejść w optymalizację SEO?</>}
          description="Gdy masz już diagnozę (audyt) i chcesz przejść do wdrożeń, które najszybciej poprawią wyniki."
          btnOne="Zamów wdrożenia"
          btnOneLink="#kontakt"
          btnTwo="Zapytaj o zakres"
          btnTwoLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Nowe strony, które potrzebują solidnych fundamentów przed skalowaniem treści i reklam.</li>
            <li>Sklepy internetowe, którym zależy na szybkiej stronie i lepszej widoczności produktów.</li>
            <li>Firmy B2B i usługowe, które chcą stabilnie zwiększać liczbę zapytań z Google.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie wdrażamy w ramach optymalizacji (po ludzku)?"
          subtitle="Kluczowe obszary i efekty"
          items={[
            {
              title: 'Szybkość ładowania',
              description: <>Skracamy czas wczytywania strony, porządkujemy grafiki i skrypty. Efekt: strona działa szybciej, a użytkownicy rzadziej rezygnują z przeglądania.</>,
              icon: <RiSearchLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Tytuły i opisy widoczne w Google',
              description: <>Poprawiamy tytuły i opisy, by lepiej pasowały do zapytań użytkowników. Efekt: wyższy CTR i więcej wejść z wyników wyszukiwania.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Struktura treści i nawigacja',
              description: <>Uporządkujemy nagłówki i menu, dodajemy logiczne połączenia między podstronami. Efekt: łatwiejsza nawigacja i lepsze rozumienie strony przez Google.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dodatkowe dane dla Google',
              description: (
                <>Wprowadzamy dodatkowe informacje (np. sekcje pytań i odpowiedzi czy opisy artykułów), które pomagają Google lepiej zrozumieć zawartość i poprawiają sposób prezentacji wyników.</>
              ),
              icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak mierzymy efekt wdrożeń?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Szybsza strona:</strong> krótszy czas ładowania i płynne działanie na telefonach.
            </li>
            <li>
              <strong>Lepsza widoczność w Google:</strong> wzrost liczby fraz w Top10/Top3 i więcej wejść z wyszukiwarki.
            </li>
            <li>
              <strong>Więcej zapytań:</strong> więcej kontaktów z formularza i telefonu dzięki lepiej opisanym podstronom.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak przebiega optymalizacja — krok po kroku"
          subtitle="Proces"
          description="Wdrożenia robimy bezpiecznie i transparentnie. Zawsze wiesz, na jakim etapie jesteśmy i jaki będzie kolejny krok."
          items={[
            {
              icon: <RiToolsLine className="h-8 w-8" />,
              title: '1. Ustalamy priorytety z audytu',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wybieramy zmiany, które dadzą najszybszy efekt: szybkość, treści, struktura.</p>
                </div>
              ),
            },
            {
              icon: <RiCheckLine className="h-8 w-8" />,
              title: '2. Wdrażamy i testujemy zmiany',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Najpierw środowisko testowe, później produkcja. Mierzymy wynik przed i po.</p>
                </div>
              ),
            },
            {
              icon: <RiBarChart2Fill className="h-8 w-8" />,
              title: '3. Raport i rekomendacje na kolejne tygodnie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dostajesz krótki raport z efektami i listę następnych działań.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/opt-seo-02.webp"
          imageAlt="Efekty optymalizacji SEO — przykłady"
          subtitle="Wyniki wdrożeń"
          title={<>Jakie efekty widzimy najczęściej po optymalizacji?</>}
          description="Poniżej kilka typowych rezultatów po 2-8 tygodniach od wdrożeń. Rzeczywiste wyniki zależą od branży i skali zmian."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Wyraźnie szybsze ładowanie strony</strong>, szczególnie na telefonach.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wejść z Google</strong> dzięki lepszym tytułom i opisom oraz porządnej strukturze treści.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Wzrost liczby zapytań</strong> po dopracowaniu opisów oferty i nawigacji.
            </li>
          </ul>
          <div className="mt-6">
            <Button arrow link="#kontakt">
              Porozmawiajmy o Twojej stronie
            </Button>
          </div>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Przykładowe pakiety optymalizacji"
          subtitle="Pakiety"
          plans={[
            {
              name: 'Optymalizacja podstawowa',
              price: 'od 600 zł',
              description: 'Dla małych stron. Szybsze ładowanie i lepsze tytuły w Google.',
              features: ['Poprawa prędkości', 'Porządek w tytułach i opisach', 'Krótki raport zmian'],
              btnOne: 'Zamów optymalizację',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja pełna',
              badgeLabel: 'Najczęściej wybierana',
              price: 'od 1 200 zł',
              description: 'Kompleksowe wdrożenia po audycie. Dla serwisów firmowych i mniejszych e-commerce.',
              features: ['Szybkość + struktura treści', 'Dodatkowe dane dla Google', 'Raport: wynik przed/po'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja z opieką',
              price: 'od 1 900 zł',
              description: 'Wdrożenia + 4-tygodniowa opieka i monitorowanie wyników.',
              features: ['Kompleksowe zmiany', 'Monitoring i poprawki', 'Rekomendacje na kolejny miesiąc'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz duży sklep lub portal? Przygotujemy zakres dopasowany do technologii i wielkości serwisu.</>,
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
          subtitle="Logiczne kolejne kroki"
          description="Optymalizacja najczęściej poprzedzona jest audytem, a po wdrożeniach przechodzimy do stałego pozycjonowania."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'Audyt SEO (diagnostyka)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Sprawdzimy, dlaczego strona nie rośnie w Google i wskażemy, co poprawić w pierwszej kolejności.</p>
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
              title: 'Pozycjonowanie stron (abonament)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Stała praca nad widocznością: plan treści, porządek na stronie i bezpieczne pozyskiwanie linków.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Przejdź do pozycjonowania
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap size="sm" />

        <ContactForm title="Zamów optymalizację SEO" description="Podaj adres strony i cele. Wrócimy z zakresem wdrożeń, terminem i wyceną." defaultSubject="Optymalizacja SEO" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo"
          items={[
            {
              question: 'Czy mogę zrobić optymalizację bez audytu?',
              answer: 'Teoretycznie tak, ale nie polecamy. Audyt pokazuje, które zmiany dają największy efekt i w jakiej kolejności je wdrażać. Dzięki temu nie tracisz czasu ani budżetu.',
            },
            {
              question: 'Kiedy zobaczę efekty optymalizacji?',
              answer: 'Część efektów (np. szybsze ładowanie) widać od razu. Zmiany w widoczności zwykle pojawiają się w ciągu 2-8 tygodni, w zależności od skali prac i konkurencyjności branży.',
            },
            {
              question: 'Czy wdrożenia są bezpieczne dla sklepu/strony?',
              answer: 'Tak. Najpierw testujemy na kopii lub w środowisku testowym, a potem publikujemy zmiany. Prowadzimy pomiary przed i po, aby mieć kontrolę nad efektem.',
            },
            {
              question: 'Czy zajmujecie się też treściami?',
              answer: 'Tak. Poza technicznymi wdrożeniami przygotowujemy lub poprawiamy treści, tytuły i opisy tak, aby lepiej odpowiadały na pytania użytkowników.',
            },
            {
              question: 'Co dostanę po zakończeniu prac?',
              answer: 'Krótki raport z listą wdrożonych zmian, wyniki testów oraz rekomendacje na kolejny etap (np. rozwój treści lub pozycjonowanie w abonamencie).',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Poprawmy Twoją widoczność w Google"
        description="Szybsza strona, lepsze opisy i porządek w strukturze — wszystko, co potrzebne do wzrostu."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
