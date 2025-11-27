import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

import { RiSpeedFill, RiToolsLine, RiShieldCheckLine, RiDeviceLine, RiBarChart2Fill, RiFileList2Line } from 'react-icons/ri';

import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

export const metadata = {
  title: 'Optymalizacja strony WordPress — szybsza i stabilniejsza witryna | Arteon',
  description: 'Przyspieszamy strony WordPress, porządkujemy wtyczki i poprawiamy wersję mobilną. Lepsze wyniki Lighthouse, wygodniejsze korzystanie i stabilne fundamenty pod SEO.',
  alternates: { canonical: `${BASE}/uslugi/strony-internetowe/optymalizacja-strony-wordpress` },
  openGraph: {
    title: 'Optymalizacja strony WordPress — szybsza i stabilniejsza witryna | Arteon',
    description: 'Przyspieszamy strony WordPress, porządkujemy wtyczki i poprawiamy wersję mobilną. Lepsze wyniki Lighthouse, wygodniejsze korzystanie i stabilne fundamenty pod SEO.',
    url: `${BASE}/uslugi/strony-internetowe/optymalizacja-strony-wordpress`,
    type: 'website',
    siteName: 'Arteon',
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/strony-internetowe/optymalizacja-strony-wordpress',
    serviceName: 'Optymalizacja strony WordPress',
    description: 'Optymalizacja stron WordPress: poprawa szybkości ładowania, porządki we wtyczkach, wersja mobilna i techniczne fundamenty pod SEO.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-optymalizacja-wordpress" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferOptimizationWordPressPage() {
  return (
    <>
      <HeroBanner
        title="Optymalizacja strony WordPress"
        description={
          <>Przyspieszamy strony WordPress, porządkujemy wtyczki i poprawiamy wersję mobilną. Strona zaczyna działać płynnie, a użytkownicy bez problemu docierają do oferty - również na telefonach.</>
        }
        buttonAccent="Sprawdź, co da się poprawić"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg12.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiSpeedFill />, label: 'Szybsze ładowanie' },
          { icon: <RiShieldCheckLine />, label: 'Stabilny WordPress' },
          { icon: <RiDeviceLine />, label: 'Lepsza wersja mobilna' },
          { icon: <RiBarChart2Fill />, label: 'Testy przed i po' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: '/uslugi/strony-internetowe', label: 'Strony internetowe' }}
        fourth={{
          href: '/uslugi/strony-internetowe/optymalizacja-strony-wordpress',
          label: 'Optymalizacja strony WordPress',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co daje optymalizacja strony WordPress?">
          <p>
            Wolna lub niestabilna strona stworzona w WordPress potrafi skutecznie zniechęcić klientów. Długi czas ładowania, rozsypujący się układ na telefonie czy przeładowanie wtyczkami powodują, że
            użytkownicy szybciej zamykają kartę, a Google niechętnie promuje witrynę w wynikach wyszukiwania.
          </p>

          <br />

          <p>
            Optymalizacja strony WordPress to uporządkowanie technologii i wyglądu tak, aby strona działała lekko, była czytelna na różnych urządzeniach i stanowiła solidny fundament pod SEO oraz
            kampanie reklamowe. Efekt: wygodniejsza ścieżka dla użytkownika i większa gotowość do kierowania ruchu na stronę.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/offer/optymalizacja-wordpress/optymalizacja-wordpress-raport.jpg"
          imageAlt="Optymalizacja strony WordPress — ekran z raportem szybkości"
          subtitle="Dla kogo"
          title="Kiedy optymalizacja WordPress ma największy sens?"
          description="Gdy strona już istnieje, ale jej szybkość, wersja mobilna lub ilość wtyczek zaczyna utrudniać rozwój. Optymalizacja jest szczególnie przydatna dla:"
          btnOne="Zamów wycenę optymalizacji"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>firm posiadających stronę WordPress, która działa wolno lub niestabilnie,</li>
            <li>biznesów przygotowujących się do pozycjonowania lub kampanii reklamowych,</li>
            <li>marek, które przez lata rozbudowywały witrynę i potrzebują uporządkować wtyczki oraz układ.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie optymalizujemy na stronie WordPress?"
          subtitle="Kluczowe obszary i efekty"
          items={[
            {
              title: 'Szybkość ładowania i lekkie zasoby',
              description: <>Konfigurujemy cache, porządkujemy ładowanie skryptów i stylów, ograniczamy zbędne elementy. Efekt: krótszy czas ładowania i lepsze wyniki w testach szybkości.</>,
              icon: <RiSpeedFill className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Porządki we wtyczkach i motywie',
              description: <>Analizujemy wtyczki, usuwamy duplikaty funkcji i zbędne dodatki, a ciężkie rozwiązania zastępujemy lżejszymi. Efekt: stabilniejsza strona i mniejsze ryzyko konfliktów.</>,
              icon: <RiToolsLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Obrazy dopasowane do urządzeń',
              description: <>Dostosowujemy rozmiary zdjęć, wdrażamy kompresję i odpowiednie formaty. Efekt: mniejsza waga strony przy zachowaniu jakości wizualnej.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersja mobilna i wygoda korzystania',
              description: <>Korygujemy marginesy, czcionki i przyciski na telefonach. Efekt: strona jest czytelna, łatwa w obsłudze i gotowa na ruch mobilny.</>,
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty mierzymy po optymalizacji WordPress?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Wyniki testów szybkości:</strong> sprawdzamy, jak zmieniły się parametry szybkości oraz komfort korzystania ze strony.
            </li>
            <li>
              <strong>Zachowanie użytkowników:</strong> obserwujemy, czy po optymalizacji użytkownikom łatwiej jest dotrzeć do oferty i kontaktu.
            </li>
            <li>
              <strong>Stabilność i wygoda dalszego rozwoju:</strong> po porządkach we wtyczkach i motywie łatwiej jest rozbudowywać stronę bez dodatkowego obciążania systemu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak wygląda optymalizacja strony WordPress?"
          subtitle="Proces krok po kroku"
          items={[
            {
              title: '1. Krótkie rozpoznanie i dostęp do strony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Ustalamy, co najbardziej przeszkadza w obecnej wersji (szybkość, wygląd na telefonie, błędy) i prosimy o dostęp do panelu WordPress oraz, w razie potrzeby, do hostingu.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Audyt techniczny WordPress',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Sprawdzamy wtyczki, motyw, sposób ładowania zasobów i zachowanie strony na urządzeniach mobilnych. Identyfikujemy elementy spowalniające i niestabilne.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Wdrożenie zmian i testy',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wprowadzamy uzgodnione zmiany, konfigurujemy cache i optymalizujemy grafiki. Następnie testujemy zachowanie strony oraz wyniki w narzędziach do pomiaru szybkości.
                  </p>
                </div>
              ),
            },
            {
              title: '4. Podsumowanie i rekomendacje',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Przygotowujemy krótkie podsumowanie „przed i po” oraz rekomendacje dalszych kroków: np. działania SEO, rozbudowę treści lub kolejne etapy prac technicznych.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/offer/optymalizacja-wordpress/optymalizacja-wordpress-mobile.jpg"
          imageAlt="Optymalizacja WordPress — widok strony na telefonie"
          subtitle="Typowe rezultaty"
          title="Jakie zmiany najczęściej widać po optymalizacji strony WordPress?"
          description="Efekty zależą od punktu startowego i technologii hostingu, ale najczęściej po optymalizacji widoczne są:"
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Wyraźnie szybsze ładowanie strony — szczególnie na urządzeniach mobilnych.</li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Stabilniejsza praca WordPressa dzięki mniejszej liczbie konfliktów między wtyczkami.</li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Czytelniejsza wersja mobilna i łatwiejsza ścieżka do kontaktu lub rezerwacji.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Cennik optymalizacji strony WordPress"
          subtitle="Przykładowe zakresy i wyceny"
          plans={[
            {
              name: 'Optymalizacja WordPress: mała strona',
              price: 'wycena indywidualna',
              description: 'Dla prostych stron firmowych i landing page, które wymagają przyspieszenia i uporządkowania wtyczek.',
              features: [
                'Analiza stanu technicznego WordPressa',
                'Konfiguracja cache i podstawowa optymalizacja zasobów',
                'Porządki we wtyczkach (usunięcie zbędnych dodatków)',
                'Optymalizacja wybranych grafik',
                'Podsumowanie „przed i po” w formie krótkiego raportu',
              ],
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja WordPress: strona rozbudowana',
              price: 'wycena indywidualna',
              description: 'Dla stron z wieloma podstronami lub rozbudowaną strukturą, gdzie ważna jest szybkość, wersja mobilna i dalszy rozwój.',
              features: [
                'Wszystko z pakietu dla małych stron, a dodatkowo:',
                'Optymalizacja większej liczby podstron i szablonów',
                'Szersze porządki we wtyczkach i integracjach',
                'Dopasowanie wersji mobilnej kluczowych podstron',
                'Rekomendacje pod dalsze działania SEO i rozwój witryny',
              ],
              btnOne: 'Zamów szczegółową wycenę',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ceny ustalane są indywidualnie w zależności od wielkości strony, hostingu oraz stanu wyjściowego WordPressa. Przed rozpoczęciem prac zawsze przedstawiamy jasny zakres i budżet."
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Usługi powiązane"
          description="Optymalizacja WordPress często łączy się z działaniami SEO oraz stałą opieką nad stroną."
          items={[
            {
              icon: <RiBarChart2Fill className="h-8 w-8" />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Po uporządkowaniu WordPressa można przejść do wdrożeń SEO: dopracowania tytułów, opisów i struktury treści.</p>
                  <div className="mt-auto">
                    <a href="/uslugi/marketing/optymalizacja-seo" className="inline-link text-sm">
                      Przejdź do optymalizacji SEO
                    </a>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShieldCheckLine className="h-8 w-8" />,
              title: 'Audyt SEO',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Kompleksowa diagnoza widoczności strony w Google oraz plan działań na kolejne miesiące rozwoju.</p>
                  <div className="mt-auto">
                    <a href="/uslugi/marketing/audyt-seo" className="inline-link text-sm">
                      Zobacz audyt SEO
                    </a>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap size="sm" />

        <ContactForm
          title="Zamów optymalizację strony WordPress"
          description="Podaj adres swojej strony i krótko opisz, co najbardziej przeszkadza w jej działaniu. Przygotujemy propozycję zakresu prac oraz wycenę."
          defaultSubject="Optymalizacja strony WordPress"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/strony-internetowe/optymalizacja-strony-wordpress"
          title="Najczęstsze pytania o optymalizację WordPress"
          items={[
            {
              question: 'Czy optymalizacja WordPress wymaga przebudowy całej strony?',
              answer:
                'Nie zawsze. W wielu przypadkach wystarczy uporządkować wtyczki, poprawić konfigurację cache, zoptymalizować grafiki i dopracować wersję mobilną. Przy większych problemach rekomendujemy ewentualne zmiany w motywie lub strukturze, ale to zawsze poprzedzone jest analizą.',
            },
            {
              question: 'Czy optymalizacja WordPress poprawi pozycje w Google?',
              answer:
                'Optymalizacja techniczna wspiera SEO, ponieważ poprawia szybkość działania strony i komfort korzystania z niej. Same pozycje zależą jednak również od treści, linków i wielu innych czynników. Dlatego często łączymy optymalizację WordPress z działaniami SEO.',
            },
            {
              question: 'Jakie dostępy są potrzebne do optymalizacji strony WordPress?',
              answer: 'Do przeprowadzenia prac potrzebny jest dostęp administratora do panelu WordPress. Przy głębszych zmianach lub problemach z serwerem prosimy również o dostęp do hostingu.',
            },
            {
              question: 'Czy po optymalizacji będzie można samodzielnie rozwijać stronę?',
              answer: 'Tak. Po zakończeniu prac strona pozostaje w pełni edytowalna. Porządkujemy system tak, aby dalsza rozbudowa była wygodniejsza i mniej obciążała WordPressa.',
            },
            {
              question: 'Na jak długo wystarcza optymalizacja WordPress?',
              answer:
                'Efekt utrzymuje się, jeśli strona jest rozwijana w uporządkowany sposób: bez nadmiernej ilości nowych wtyczek, z dbałością o grafiki i treści. W razie potrzeby można okresowo wrócić do dodatkowych prac optymalizacyjnych.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zróbmy porządek z Twoją stroną WordPress"
        description="Przyspieszymy stronę, uporządkujemy wtyczki i przygotujemy fundamenty pod dalszy rozwój."
        primaryLabel="Poproś o wycenę"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg12.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
