import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBarChart2Fill, RiCodeSSlashFill, RiDeviceLine, RiLayoutLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt graficzny strony | Arteon',
  description: 'Makiety i layouty stron internetowych tworzone z myślą o czytelności i konwersji. Estetyka, UX i SEO w jednym projekcie.',
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-graficzny-strony' },
  openGraph: {
    title: 'Projekt graficzny strony | Arteon',
    description: 'Layout www dopasowany do Twojej marki i celów biznesowych. Gotowy do wdrożenia.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-graficzny-strony',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-graficzny-strony',
    serviceName: 'Projekt graficzny strony',
    description: 'Makieta i projekt UI strony: czytelny layout, system komponentów, zgodność z WCAG i przygotowanie pod realizację.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-graficzny-strony" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt graficzny strony"
        description={
          <>
            Wygląd, struktura i komfort użytkownika pracują na sprzedaż. Zaprojektujemy layout Twojej strony tak, aby prowadził wzrok krok po kroku: od pierwszego wrażenia, przez ofertę, aż po kontakt
            lub zakup.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiLayoutLine />, label: 'Czytelny układ strony' },
          { icon: <RiDeviceLine />, label: 'Desktop i mobile w standardzie' },
          { icon: <RiCodeSSlashFill />, label: 'Projekt gotowy do wdrożenia' },
          { icon: <RiBarChart2Fill />, label: 'Layout pod konwersję' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-graficzny-strony`,
          label: 'Projekt graficzny strony',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt graficzny strony?">
          <p>
            <strong>Przejrzysty projekt strony, bloga czy sklepu buduje zaufanie w pierwszych sekundach.</strong>
            Odbiorcy bardzo mocno oceniają firmę przez wygląd ich strony oraz materiałów - nawet
            <strong> ~75%</strong> wrażeń o wiarygodności wynika z jakości oprawy wizualnej
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Dobrze zaprojektowana strona szybciej prowadzi do kontaktu.
          </p>

          <br />

          <p>
            <strong>Układ, hierarchia i czytelne CTA skracają drogę do decyzji.</strong> Użytkownik bez wysiłku znajduje to, czego szuka: ofertę, referencje i przyciski kontaktu. Spójny design
            porządkuje treść, zmniejsza liczbę pytań i ułatwia rozmowę handlową.
          </p>

          <br />

          <p>
            <strong>Dobry projekt graficzny strony robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Przyciąga uwagę i utrzymuje ją na najważniejszych treściach,</li>
            <li>Wyjaśnia ofertę w prostych blokach i przykładach,</li>
            <li>Prowadzi do działania: kontakt, wycena, rezerwacja.</li>
          </ul>

          <br />

          <p>
            Gotowy layout porządkuje też współpracę z deweloperem: zamiast ciągłych zmian „w trakcie kodowania” masz zatwierdzony projekt, do którego wszyscy się odnoszą. Mniej poprawek oznacza
            krótszy czas wdrożenia i niższe koszty.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając projekt graficzny strony?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Przemyślany układ i estetyka',
              description: <>Tworzymy layouty, które prowadzą wzrok i ułatwiają podjęcie decyzji na stronie - od nagłówka po stopkę.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Responsywność i czytelność',
              description: <>Projekt działa na komputerze, tablecie i telefonie, zachowując spójny wygląd i wygodę użycia.</>,
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gotowość do wdrożenia',
              description: <>Dostarczamy pliki i rekomendacje, które przyspieszają pracę dewelopera i skracają czas publikacji.</>,
              icon: <RiCodeSSlashFill className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wspólne dopracowanie szczegółów',
              description: <>Uwzględniamy poprawki i dopracowujemy kolory, typografię oraz elementy nawigacji do pełnej akceptacji.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest projekt graficzny strony?" subtitle="Kiedy ma największy sens?">
          <p>Projekt graficzny strony najbardziej opłaca się wtedy, gdy chcesz świadomie zaplanować każdy ekran, zamiast „składać” stronę z przypadkowych sekcji.</p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Planujesz nową stronę lub redesign i chcesz najpierw zobaczyć gotowy layout, zanim zainwestujesz w wdrożenie.</li>
            <li>Masz rozbudowaną ofertę i potrzebujesz jasnej ścieżki użytkownika: od wejścia na stronę do kontaktu lub zakupu.</li>
            <li>Współpracujesz z deweloperem i chcesz przekazać mu konkretny projekt zamiast ogólnego briefu.</li>
            <li>Chcesz uporządkować aktualną stronę: poprawić czytelność, nagłówki, sekcje i wezwań do działania.</li>
            <li>Przygotowujesz landing page pod kampanie reklamowe i zależy Ci na jak najlepszym wykorzystaniu ruchu.</li>
          </ul>

          <br />

          <p>Jeśli Twoja strona dziś „jakoś działa”, ale czujesz, że nie wykorzystuje potencjału - projekt graficzny jest dobrym krokiem przed kolejną inwestycją w reklamy czy pozycjonowanie.</p>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt graficzny strony - przykładowe zakresy"
          subtitle="Dobieramy zakres projektu do celu i wielkości serwisu"
          plans={[
            {
              name: 'Projekt layoutu landing page',
              price: 'wycena indywidualna',
              description: 'Dla kampanii i pojedynczych ofert, kiedy potrzebujesz jednego, dopracowanego ekranu nastawionego na konwersję.',
              features: [
                'Projekt jednej strony typu landing page (układ sekcji, nagłówki, CTA)',
                'Wersja desktop + mobile w Figmie',
                'Podstawowe rekomendacje UX i kolejności sekcji',
                'Jedna runda korekt po pierwszej prezentacji',
              ],
              btnOne: 'Zamów projekt landing page',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Projekt strony firmowej',
              price: 'wycena indywidualna',
              description: 'Dla stron usługowych, które mają kilka kluczowych podstron i potrzebują spójnego systemu layoutów.',
              features: [
                'Projekt strony głównej i kluczowych podstron (np. oferta, o nas, kontakt, blog)',
                'System nagłówków, przycisków i bloków treści',
                'Widoki desktop i mobile, gotowe do przekazania deweloperowi',
                'Rekomendacje dotyczące treści, sekcji i CTA',
              ],
              btnOne: 'Porozmawiajmy o projekcie strony firmowej',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Projekt rozbudowanego serwisu lub sklepu',
              price: 'wycena indywidualna',
              description: 'Dla serwisów, portali i e-commerce, gdzie ważne są bardziej złożone ścieżki użytkownika i różne typy podstron.',
              features: [
                'System layoutów dla wielu typów podstron (lista, szczegóły, kategorie, blog, koszyk itd.)',
                'Makiety kluczowych ścieżek użytkownika (np. zakup, rezerwacja, zapis na usługę)',
                'Przygotowanie pod wdrożenie w wybranej technologii (np. WordPress, WooCommerce, Next.js)',
                'Opcjonalne konsultacje z zespołem deweloperskim po stronie klienta',
              ],
              btnOne: 'Zbudujmy layout serwisu lub sklepu',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby podstron, poziomu złożoności układu, stanu obecnej identyfikacji wizualnej oraz tego, czy layout ma być powiązany z dodatkowymi usługami (np. wdrożeniem strony, copywritingiem, audytem UX/SEO). Po krótkim briefie przygotujemy konkretną propozycję zakresu i harmonogram prac."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt graficzny strony"
          description="Opisz czym się zajmujesz oraz co chcesz aby było na Twojej stronie. Na tej podstawie przygotujemy wycenę, termin i rekomendacje."
          defaultSubject="Projekt graficzny strony"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-graficzny-strony"
          items={[
            {
              question: 'Ile kosztuje projekt graficzny strony?',
              answer:
                'Cena zależy głównie od liczby podstron i poziomu złożoności projektu. Po krótkim zapoznaniu z wymaganiami przedstawimy szczegółową wycenę dopasowaną do Twoich indywidualnych celów i potrzeb.',
            },
            {
              question: 'Jak długo trwa przygotowanie projektu strony?',
              answer: 'Standardowo od 5 do 10 dni roboczych. Czas zależy od liczby podstron i indywidualnych potrzeb. Dokładny harmonogram ustalamy przed rozpoczęciem projektu.',
            },
            {
              question: 'Czy projekt graficzny strony obejmuje wersję mobilną?',
              answer: 'Tak, każda realizacja obejmuje wersję na komputer, tablet i telefon. Dbamy o pełną responsywność i czytelność układu na różnych ekranach.',
            },
            {
              question: 'Czy projekt graficzny uwzględnia myślenie o późniejszym pozycjonowaniu strony?',
              answer:
                'Tak, łączymy estetykę z funkcjonalnością. Projekt powstaje z myślą o SEO (hierarchia nagłówków, struktura treści) i UX (intuicyjna nawigacja i struktura strony, czytelność, kontrasty zgodne z WCAG 2.1 AA).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer: 'Tak, w projekcie przewidujemy rundy poprawek. Dopracowujemy kolory, typografię, układ i elementy wizualne aż do pełnej akceptacji.',
            },
            {
              question: 'W jakim formacie dostanę projekt?',
              answer: 'Najczęściej pracujemy w Figmie i w tej formie przekazujemy projekt do wdrożenia. Możemy również zająć się realizacją strony, co wpłynie na mniejsze koszta',
            },
            {
              question: 'Czy projekt graficzny strony mogę wykorzystać w przyszłości?',
              answer: 'Tak, po finalizacji masz pełne prawa do projektu. Możesz wdrożyć go odrazu lub w przyszłości, a także rozwijać swoją stronę o kolejne podstrony na bazie dostarczonego projektu',
            },
            {
              question: 'Czy mogę zamówić tylko jedną podstronę?',
              answer: 'Tak, projektujemy również pojedyncze ekrany, strony główne i landing page’e pod pojedyńcze kampanie.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Z czym warto połączyć projekt graficzny strony?"
          subtitle="Zobacz też"
          description="Najlepszy efekt uzyskasz, gdy dopracowany układ strony internetowej odrazu zamienisz na w pełni działającą stronę z treściami dopasowanymi do Twojej grupy odbiorczej."
          items={[
            {
              icon: <RiCodeSSlashFill className="h-8 w-8" />,
              title: 'Wdrożenie strony internetowej',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Projekt możemy od razu przełożyć na działającą stronę - z uwzględnieniem szybkości, SEO i panelem ułatwiającym dalszą edycje treści.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/strony-internetowe">
                      Sprawdź strony internetowe
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiBarChart2Fill className="h-8 w-8" />,
              title: 'Treści dla strony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Dobrze zaprojektowany układ strony potrzebuje treści, która podbije widoczność Twojej strony i zachęci potenjalnych klientów do kontaktu. Pomagamy ułożyć teksty i strukturę z myślą
                    o SEO i wyższej konwersji.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Zobacz usługi tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zbuduj stronę, która wyróżni Cie od konkurencji"
        description="Stworzymy profesjonalny i przejrzysty układ strony, który wzmocni wizerunek Twojej marki online"
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
