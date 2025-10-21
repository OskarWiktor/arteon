import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
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
import Button from '@/components/ui/Button';
import Script from 'next/script';

export const metadata = {
  title: 'Audyt SEO — plan pozycjonowania Twojej witryny | Arteon',
  description: 'Przeprowadź audyt SEO swojej witryny i sprawdź co możesz zrobić aby wyświetlać się wyżej w wynikach wyszukiwarki Google',
  keywords: ['audyt SEO', 'poprawa szybkości ładowania strony'],
  alternates: { canonical: '/uslugi/marketing/audyt-seo' },
  openGraph: {
    title: 'Audyt SEO — plan pozycjonowania Twojej witryny | Arteon',
    description: 'Przeprowadź audyt SEO swojej witryny i sprawdź co możesz zrobić aby wyświetlać się wyżej w wynikach wyszukiwarki Google',
    url: 'https://www.arteonagency.pl/uslugi/marketing/audyt-seo',
    type: 'website',
  },
} as const;

/* === Service JSON-LD (schema.org) === */
function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Audyt SEO',
    serviceType: 'SEO Audit',
    provider: {
      '@type': 'Organization',
      name: 'Arteon',
      url: `${base}`,
    },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/audyt-seo`,
    description: 'Przeprowadź audyt SEO swojej witryny i sprawdź co możesz zrobić aby wyświetlać się wyżej w wynikach wyszukiwarki Google',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/audyt-seo`,
    },
  };
  return (
    <Script id="schema-service-audyt-seo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferMarketingPage() {
  return (
    <>
      <HeroBanner
        title="Audyt SEO"
        description={<>Przeprowadź audyt SEO swojej witryny i sprawdź co możesz zrobić aby wyświetlać się wyżej w wynikach wyszukiwarki Google.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
          { icon: <RiLightbulbFlashLine />, label: 'Prosty język i konkret' },
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
          imageSrc="/assets/test.jpg"
          imageAlt="Audyt SEO — analiza widoczności i plan działań"
          subtitle="Dla kogo"
          title="Kiedy audyt SEO ma największy sens?"
          description="Gdy strona nie wyświetla się tak wysoko jakbyś chciał, planujesz przebudowę serwisu lub chcesz bezpiecznie zwiększać ruch i ilość zapytań. Kompleksowy audyt SEO jest najlepszy dla:"
          btnOne="Zamów audyt SEO"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Nowych platform, które potrzebują solidnych podstaw zanim ruszą z kampaniami reklamowymi.</li>
            <li>Właścicieli sklepów oraz stron internetowe z problemami widoczności, które nie pozwalają na dostateczną ilość zapytań.</li>
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
              icon: <RiSearchLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Szybkość ładowania i wygodę korzystania',
              description: (
                <>Mierzymy, jak szybko wczytuje się strona i jak wygląda ona od strony technicznej. Wskazujemy proste zmiany, które przyspieszą działanie i poprawią wrażenia użytkowników.</>
              ),
              icon: <RiCheckLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Czy treści są dopasowane do tego, czego szukają klienci',
              description: <>Sprawdzimy, czy Twoje treści odpowiadają na pytania użytkowników i czy nie konkurują ze sobą. Zaproponujemy tematy i układ, który ułatwi zdobywanie wyższych pozycji.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Strukturę strony oraz linki wewnętrzne',
              description: <>Uporządkujemy nawigację i połączenia między podstronami, aby ważne treści były łatwo dostępne dla użytkowników i wyszukiwarki.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
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
                  <p className="mb-3 text-sm">Analizujemy ruch i wyszukiwania, sprawdzamy, jak Google widzi Twoją stronę, i gdzie tracisz szanse na wyświetlenia.</p>
                </div>
              ),
            },
            {
              title: '2. Przygotowujemy raport i priorytety',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Otrzymujesz zrozumiały raport oraz listę działań podzielonych na szybkie poprawki i zadania na 90 dni.</p>
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

        <SectionInfo title="Jak mierzymy efekty pozycjonowania po audycie?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Widoczność i ruch z Google:</strong> ile nowych fraz Google łączy z Twoją stroną i o ile rośnie ruch.
            </li>
            <li>
              <strong>Zapytania i kontakt:</strong> ilość uzupełnionych formularzy, telefonów i wiadomości po wprowadzonych zmianach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/test.jpg"
          imageAlt="Efekty wdrożeń po audycie SEO"
          subtitle="Wyniki wdrożeń"
          title={<>Jakie efekty widzimy najczęściej po przeprowadzeniu audytu SEO i wdrożeniu pozycjonowania?</>}
          btnOne="Porozmawiajmy o audycie"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wejść z Google</strong> już po 2-3 miesiącach dzięki poprawie szybkości i uporządkowaniu treści.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Szybsze działanie strony</strong> dzięki optymalizacji technicznej witryny.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej zapytań z formularza i telefonów</strong> po dopracowaniu nagłówków, opisów i całej oferty.
            </li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Przykładowe pakiety audytu"
          subtitle="Pakiety"
          plans={[
            {
              name: 'Audyt podstawowy',
              price: 'od 800 zł',
              description: 'Dla małych stron i landingów. Diagnoza barier i lista szybkich poprawek.',
              features: ['Sprawdzenie widoczności w Google', 'Prosty raport i priorytety', 'Rekomendacje do wdrożenia od razu'],
              btnOne: 'Zamów audyt',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Audyt pełny',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 400 zł',
              description: 'Dla serwisów firmowych i mniejszych sklepów. Raport + plan działań na 90 dni.',
              features: ['Widoczność i treści dopasowane do zapytań', 'Usprawnienia szybkości i wygody korzystania', 'Struktura i linki wewnętrzne', 'Raport + arkusz priorytetów'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Audyt + wdrożenia',
              price: 'od 2 400 zł',
              description: 'Kompleksowo: audyt i wdrożenie najważniejszych zmian wraz z pomiarem efektów.',
              features: ['Audyt pełny', 'Backlog zadań i staging', 'Testy przed/po i monitoring wyników'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz duży serwis lub e-commerce? Przygotujemy zakres dopasowany do technologii i wielkości strony.</>,
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote="Ceny są orientacyjne. Dokładną wycenę przedstawimy po krótkim zapoznaniu i wglądzie w stronę."
        />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Kolejne kroki po audycie"
          description="Po diagnozie zwykle przechodzimy do wdrożeń i stałej pracy nad widocznością."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wprowadzimy zmiany: przyspieszymy ładowanie, uporządkujemy tytuły i opisy, dodamy dane ułatwiające Google zrozumienie treści.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/optymalizacja-seo">
                      Przejdź do optymalizacji
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
                  <p className="mb-3 text-sm">Stały wzrost widoczności: plan treści, porządek na stronie i bezpieczne pozyskiwanie linków. Raport co miesiąc.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Sprawdź abonament SEO
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <ContactForm title="Zamów audyt SEO" description="Podaj adres strony i cele. Wrócimy z zakresem audytu, terminem i wyceną." defaultSubject="Audyt SEO — zapytanie" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/audyt-seo"
          items={[
            {
              question: 'Dlaczego moja strona nie wyświetla się w Google?',
              answer:
                'Najczęstsze powody to problemy z widocznością podstron w wyszukiwarce, zbyt wolne ładowanie, zduplikowane treści lub nieczytelna struktura. Audyt wskazuje przyczynę i pokazuje, co poprawić najpierw.',
            },
            {
              question: 'Jak sprawdzić, czy strona jest w ogóle widoczna?',
              answer: 'W audycie pokazujemy proste metody weryfikacji i tłumaczymy, co oznaczają wyniki. Dzięki temu łatwo sprawdzisz postępy po wdrożeniach.',
            },
            {
              question: 'Co dostanę po audycie?',
              answer: 'Otrzymasz raport napisany po ludzku, listę priorytetów oraz szybkie poprawki do wdrożenia. Omawiamy wszystko na spotkaniu i odpowiadamy na pytania.',
            },
            {
              question: 'Ile trwa audyt i kiedy widać efekty?',
              answer: 'Standardowo audyt trwa 5-10 dni roboczych. Pierwsze pozytywne zmiany często widać w ciągu kilku tygodni po wdrożeniu najważniejszych poprawek.',
            },
            {
              question: 'Czy możecie wdrożyć rekomendacje?',
              answer: 'Tak. Zajmujemy się wdrożeniem zmian w ramach optymalizacji SEO, a w dłuższej perspektywie prowadzimy stałe pozycjonowanie.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Poznaj prawdziwy stan SEO swojej strony"
        description="Audyt, który kończy się planem działania — nie tylko diagnozą."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
