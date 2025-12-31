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

const BASE = 'https://www.arteonagency.pl';

export const metadata = {
  title: 'Optymalizacja strony WordPress - wynik 90+/100 lub brak opłaty | Arteon',
  description: 'Optymalizacja stron WordPress z gwarancją wyniku 90+/100 w PageSpeed. Szybsze ładowanie, lepsze Core Web Vitals.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/strony-internetowe/optymalizacja-strony-wordpress',
  },
  openGraph: {
    title: 'Optymalizacja strony WordPress - wynik 90+/100 lub brak opłaty | Arteon',
    description: 'Optymalizacja stron WordPress z gwarancją wyniku 90+/100 w PageSpeed. Szybsze ładowanie, lepsze Core Web Vitals.',
    url: `${BASE}/uslugi/strony-internetowe/optymalizacja-strony-wordpress`,
    type: 'website',
    siteName: 'Arteon',
    images: [{ url: `${BASE}/assets/projects/arteon-baners-camper-albania-mockup.webp` }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/strony-internetowe/optymalizacja-strony-wordpress',
    serviceName: 'Optymalizacja strony WordPress',
    description: 'Optymalizacja stron WordPress z naciskiem na wydajność, stabilność i wersję mobilną. Strona zyskuje lepsze wyniki w testach szybkości i solidne podstawy pod SEO.',
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
        title="Wydajniejsza strona WordPress = więcej klientów"
        description={
          <>
            Strona, która szybko się ładuje i działa stabilnie, daje lepsze wyniki w Google i więcej zapytań od klientów. W ramach tej usługi WordPress zyskuje wynik{' '}
            <strong>90+/100 w PageSpeed</strong> albo nie ponosisz kosztu optymalizacji. Faktura wystawiana jest dopiero po realizacji prac.
          </>
        }
        buttonAccent="Sprawdź swoją stronę za darmo"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/arteon-baners-camper-albania-mockup.webp"
        overlay="black"
        subtitle="Oferta specjalna: optymalizacja WordPress"
      />

      <BenefitBelt
        items={[
          { icon: <RiSpeedFill />, label: 'Wynik 90+/100 w PageSpeed*' },
          { icon: <RiShieldCheckLine />, label: 'Faktura po realizacji' },
          { icon: <RiDeviceLine />, label: 'Lepsza wersja mobilna' },
          { icon: <RiBarChart2Fill />, label: 'Raport „przed i po”' },
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

        <SectionInfo title="Co realnie daje optymalizacja strony WordPress?" subtitle="Wydajność, stabilność i gotowość na ruch">
          <p>
            Wolna lub niestabilna strona WordPress utrudnia pozyskiwanie klientów. Długi czas ładowania, problemy na telefonach i przeładowanie wtyczkami powodują, że użytkownicy szybciej zamykają
            kartę, a systemy reklamowe i Google mniej chętnie kierują na taką witrynę ruch.
          </p>

          <br />

          <p>
            Optymalizacja strony WordPress porządkuje warstwę techniczną tak, aby witryna ładowała się wyraźnie szybciej, była czytelna na urządzeniach mobilnych i stanowiła stabilną bazę pod SEO oraz
            kampanie reklamowe. Efektem jest wygodniejsza ścieżka użytkownika i większa gotowość biznesu na intensywniejszy ruch.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/offer/optymalizacja-wordpress/optymalizacja-wordpress-raport.webp"
          imageAlt="Optymalizacja strony WordPress - ekran z raportem szybkości"
          subtitle="Dla kogo"
          title="Kiedy optymalizacja WordPress ma największy sens?"
          description="Największe korzyści pojawiają się wtedy, gdy strona już działa, ale jej szybkość lub stabilność ogranicza rozwój. Z takiej usługi najczęściej korzystają:"
          btnOne="Sprawdź, czy warto optymalizować"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>firmy posiadające stronę WordPress, która działa wolno lub niestabilnie,</li>
            <li>biznesy planujące działania SEO lub kampanie reklamowe i potrzebujące solidnej bazy technicznej,</li>
            <li>marki, których witryny przez lata rozbudowano o wiele wtyczek, motywów i dodatków.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co robimy w ramach optymalizacji WordPress?"
          subtitle="Zakres działań i efekty"
          items={[
            {
              title: 'Szybsze ładowanie i lepsze Core Web Vitals',
              description: (
                <>
                  Optymalizujemy kod, konfigurację oraz zasoby, aby skrócić czas ładowania strony i poprawić wyniki w PageSpeed Insights. Efekt: lepsze doświadczenie użytkownika i wyższa widoczność w
                  Google, szczególnie na urządzeniach mobilnych.
                </>
              ),
              icon: <RiSpeedFill className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Porządki we wtyczkach i motywie',
              description: (
                <>
                  Usuwamy zbędne wtyczki, porządkujemy konfigurację i wskazujemy elementy, które spowalniają stronę lub powodują konflikty. Efekt: stabilniejsza strona i mniej problemów technicznych
                  przy dalszych aktualizacjach.
                </>
              ),
              icon: <RiToolsLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Obrazy dopasowane do urządzeń',
              description: (
                <>
                  Kompresujemy grafiki, ustawiamy właściwe rozmiary i formaty (np. WebP) oraz wdrażamy poprawne ładowanie. Efekt: mniejsze zużycie transferu i znacznie lepsza
                  szybkość działania witryny.
                </>
              ),
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersja mobilna i wygoda korzystania',
              description: <>Korygowane są marginesy, czcionki i przyciski na telefonach. Efekt: strona jest czytelna, łatwa w obsłudze i lepiej przygotowana na ruch z urządzeń mobilnych.</>,
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty mierzone są po optymalizacji WordPress?" subtitle="KPI i raport po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Wyniki testów szybkości:</strong> porównanie parametrów PageSpeed/Lighthouse oraz odczuwalnego czasu ładowania strony przed i po optymalizacji.
            </li>
            <li>
              <strong>Zachowanie użytkowników:</strong> obserwacja, czy po wprowadzeniu zmian użytkownikom łatwiej jest dotrzeć do oferty, formularza kontaktowego lub koszyka.
            </li>
            <li>
              <strong>Stabilność i wygoda dalszego rozwoju:</strong> po uporządkowaniu wtyczek i motywu łatwiej jest rozbudowywać stronę bez kolejnych spowolnień i konfliktów technicznych.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak przebiega optymalizacja strony WordPress?"
          subtitle="Proces krok po kroku"
          items={[
            {
              title: '1. Krótkie rozpoznanie i dostęp do strony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Na początku ustalane są główne problemy: szybkość, zachowanie strony na telefonach, błędy lub niestabilność. Następnie przekazywany jest dostęp administratora do panelu WordPress
                    oraz, w razie potrzeby, do hostingu.
                  </p>
                </div>
              ),
            },
            {
              title: '2. Audyt techniczny WordPress',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Sprawdzane są wtyczki, motyw, sposób ładowania zasobów i zachowanie strony na różnych urządzeniach. Na tej podstawie powstaje plan zmian, który pozwala osiągnąć docelowy wynik w
                    PageSpeed.
                  </p>
                </div>
              ),
            },
            {
              title: '3. Wdrożenie zmian i testy „przed i po”',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wprowadzane są uzgodnione zmiany, konfiguracja cache oraz optymalizacja grafik. Następnie wykonywane są testy szybkości i stabilności, a wyniki prezentowane są w formie porównania
                    „przed i po”.
                  </p>
                </div>
              ),
            },
            {
              title: '4. Podsumowanie, rekomendacje i rozliczenie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Na koniec przygotowywane jest krótkie podsumowanie prac oraz rekomendacje dalszych działań technicznych lub SEO. Jeśli wynik 90+/100 nie jest możliwy z powodów niezależnych (np.
                    ograniczenia hostingu lub motywu), zasady rozliczenia są omawiane jeszcze przed startem prac.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/offer/optymalizacja-wordpress/optymalizacja-wordpress-mobile.webp"
          imageAlt="Optymalizacja WordPress - widok strony na telefonie"
          subtitle="Typowe rezultaty"
          title="Jakie zmiany najczęściej widać po optymalizacji strony WordPress?"
          description="Zakres efektów zależy od punktu wyjścia i hostingu, ale w większości realizacji po optymalizacji widoczne są:"
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Wyraźnie szybsze ładowanie strony - szczególnie na urządzeniach mobilnych.</li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Stabilniejsza praca WordPressa dzięki mniejszej liczbie konfliktów między wtyczkami i motywami.</li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">Czytelniejsza wersja mobilna i prostsza ścieżka do kontaktu, rezerwacji lub zakupu.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Cennik optymalizacji strony WordPress"
          subtitle="Przykładowe zakresy i widełki cenowe"
          plans={[
            {
              name: 'Optymalizacja WordPress: strona firmowa',
              price: 'od 450 do 650 zł netto',
              description: 'Dla prostych stron firmowych i landing page, gdzie potrzebne jest przyspieszenie ładowania oraz porządki we wtyczkach.',
              features: [
                'Analiza stanu technicznego WordPressa i hostingu',
                'Konfiguracja cache i optymalizacja kluczowych zasobów',
                'Porządki we wtyczkach (usunięcie zbędnych dodatków)',
                'Optymalizacja wybranych grafik i podstawowe poprawki wersji mobilnej',
                'Raport „przed i po” z wynikami testów szybkości',
              ],
              btnOne: 'Poproś o wycenę w tym przedziale',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja WordPress: rozbudowana witryna',
              price: 'od 650 do 850 zł netto',
              description: 'Dla stron z większą liczbą podstron lub rozbudowaną strukturą, gdzie liczy się wydajność, wersja mobilna i dalszy rozwój.',
              features: [
                'Wszystko z pakietu dla stron firmowych, a dodatkowo:',
                'Optymalizacja większej liczby podstron i szablonów',
                'Szersze porządki we wtyczkach i integracjach',
                'Dopasowanie wersji mobilnej kluczowych podstron',
                'Rekomendacje pod kolejne działania SEO i rozwój witryny',
              ],
              btnOne: 'Zamów szczegółową wycenę',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Większość realizacji mieści się w przedziale 450-850 zł netto. Ostateczna wycena zależy od wielkości strony, hostingu oraz stanu wyjściowego WordPressa. Przed rozpoczęciem prac przedstawiany jest jasny zakres działań, szacowany wynik oraz zasady rozliczenia przy braku możliwości osiągnięcia 90+/100."
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Usługi powiązane z optymalizacją WordPress"
          description="Optymalizacja WordPress często łączy się z działaniami SEO oraz stałą opieką techniczną nad stroną."
          items={[
            {
              icon: <RiBarChart2Fill className="h-8 w-8" />,
              title: 'Optymalizacja SEO (wdrożenia)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Po uporządkowaniu WordPressa można przejść do wdrożeń SEO: dopracowania tytułów, opisów i struktury treści, aby lepiej wykorzystać poprawioną wydajność.
                  </p>
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
                  <p className="mb-3 text-sm">Kompleksowa diagnoza widoczności strony w Google oraz plan działań na kolejne miesiące. Dobry krok po optymalizacji technicznej WordPressa.</p>
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
          title="Sprawdź swoją stronę WordPress za darmo"
          description="Podaj adres strony WordPress i krótko opisz, co najbardziej przeszkadza w jej działaniu (szybkość, wersja mobilna, błędy). W odpowiedzi otrzymasz propozycję zakresu prac, widełki cenowe 450-850 zł netto oraz informację, czy przy Twoim hostingu i motywie możliwe jest osiągnięcie wyniku 90+/100."
          defaultSubject="Kampania - optymalizacja strony WordPress"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/strony-internetowe/optymalizacja-strony-wordpress"
          title="Najczęstsze pytania o optymalizację WordPress"
          items={[
            {
              question: 'Czy w każdym przypadku da się osiągnąć wynik 90+/100 w PageSpeed?',
              answer:
                'Nie zawsze jest to możliwe w stu procentach. Wpływ na wynik mają m.in. wybrany motyw, konstrukcja strony i ograniczenia hostingu. Przed rozpoczęciem prac sygnalizujemy, jaki poziom wyniku jest realny do osiągnięcia oraz na jakich zasadach obowiązuje gwarancja braku opłaty.',
            },
            {
              question: 'Co się dzieje, jeśli wynik 90+/100 nie zostanie osiągnięty?',
              answer:
                'Jeżeli mimo wdrożenia optymalizacji wynik nie osiąga założonego poziomu z powodów technicznych niezależnych od prac (np. specyfika motywu lub serwera), sposób rozliczenia ustalany jest jeszcze przed startem. Zasada jest prosta: klient zna warunki i nie ponosi kosztu za obietnicę, której nie da się spełnić.',
            },
            {
              question: 'Jakie dostępy są potrzebne do optymalizacji strony WordPress?',
              answer:
                'Do przeprowadzenia prac potrzebny jest dostęp administratora do panelu WordPress. Przy głębszych zmianach lub konieczności modyfikacji ustawień serwera wymagany może być także dostęp do hostingu.',
            },
            {
              question: 'Czy optymalizacja WordPress sama w sobie poprawi pozycje w Google?',
              answer:
                'Optymalizacja techniczna wspiera SEO, ponieważ poprawia szybkość i komfort korzystania ze strony, co jest jednym z elementów ocenianych przez wyszukiwarkę. Same pozycje zależą jednak także od treści, linków i wielu innych czynników, dlatego optymalizacja WordPress często łączona jest z działaniami SEO.',
            },
            {
              question: 'Czy po optymalizacji będzie można dalej swobodnie rozwijać stronę?',
              answer:
                'Tak. Celem jest uporządkowanie systemu tak, aby dalsza rozbudowa była wygodniejsza i mniej obciążała WordPressa. Po zakończeniu prac strona pozostaje w pełni edytowalna, a dobre praktyki ustalone podczas optymalizacji ułatwiają kolejne kroki.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zadbaj o wydajność swojej strony WordPress"
        description="Szybsza, stabilniejsza strona ułatwia pozyskiwanie klientów, wspiera SEO i pozwala bez obaw kierować większy ruch z kampanii."
        btnOne="Sprawdź, co można poprawić"
        btnOneLink="#kontakt"
        backgroundImage="/assets/projects/arteon-baners-camper-albania-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
