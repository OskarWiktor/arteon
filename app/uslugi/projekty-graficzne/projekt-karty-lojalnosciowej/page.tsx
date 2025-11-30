import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiVipCrownLine, RiCoupon2Line } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt karty lojalnościowej | Arteon',
  description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  openGraph: {
    title: 'Projekt karty lojalnościowej | Arteon',
    description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    serviceName: 'Projekt karty lojalnościowej',
    description: 'Projektujemy karty lojalnościowe dla salonów, kawiarni, butików czy siłowni. Estetyka, która zachęca klientów do powrotu.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-karty-lojalnosciowej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignKartaPage() {
  return (
    <>
      <HeroBanner
        title="Projekt karty lojalnościowej"
        description={
          <>
            Zachęć klientów do powrotu dzięki estetycznym i czytelnym kartom lojalnościowym. Projektujemy karty, które wspierają sprzedaż, porządkują zasady programu i budują długotrwałą relację z
            klientem.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiVipCrownLine />, label: 'Program dopasowany do Twojej branży' },
          { icon: <RiBrushLine />, label: 'Projekt, który chce się nosić w portfelu' },
          { icon: <RiBarChart2Fill />, label: 'Wsparcie powtarzalnych zakupów' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia nagród w praktyce' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej`,
          label: 'Projekt karty lojalnościowej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        {/* 1. Dlaczego – value & pain */}
        <SectionInfo title="Dlaczego warto zainwestować w karty lojalnościowe?">
          <p>
            <strong>Karty lojalnościowe realnie zwiększają liczbę powrotów klientów.</strong> To proste narzędzie, które wzmacnia nawyk: „wracam do tej samej firmy, bo tu mam konkretne korzyści”. W
            efekcie zwiększa się częstotliwość wizyt i średnia wartość koszyka.
          </p>

          <br />

          <p>
            <strong>Estetyka ma znaczenie.</strong> Dobrze zaprojektowana karta staje się częścią wizerunku firmy - wygląda profesjonalnie, budzi pozytywne emocje i nie „ginie” w portfelu. Klient
            chętniej ją zachowuje i częściej o niej pamięta.
          </p>

          <br />

          <p>
            <strong>Dobra karta lojalnościowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Motywuje do powrotu poprzez jasne i atrakcyjne nagrody,</li>
            <li>Wzmacnia więź klienta z marką i ułatwia budowanie zaufania,</li>
            <li>Promuje firmę dzięki estetycznej formie, którą klient nosi przy sobie.</li>
          </ul>

          <br />

          <p>
            Z perspektywy biznesu to jeden z najtańszych sposobów na podniesienie przychodów - zamiast ciągle szukać nowych klientów, wyciągasz więcej wartości z osób, które już znają Twoją markę.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        {/* 2. Offer stack – co dokładnie zawiera projekt */}
        <FeatureGrid
          title="Co zawiera projekt karty lojalnościowej?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Układ dopasowany do branży',
              description: (
                <>
                  Tworzymy karty dopasowane do specyfiki działalności - salonów, kawiarni, siłowni, butików i innych punktów usługowych. Zasady programu są czytelne zarówno dla Ciebie, jak i klientów.
                </>
              ),
              icon: <RiVipCrownLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Kolory, typografia i detale dopasowujemy do Twojej identyfikacji wizualnej. Karta naturalnie uzupełnia pozostałe materiały i wzmacnia profesjonalny wizerunek firmy.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gotowość do druku',
              description: (
                <>Dostarczamy pliki w formacie gotowym do druku, z odpowiednimi spadami i specyfikacją dla drukarni. Możesz od razu zamówić nakład bez dodatkowych przeróbek technicznych.</>
              ),
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Numeracje i pola pieczątek',
              description: <>Projektujemy czytelne pola na pieczątki, podpisy lub oznaczenia nagród. Dzięki temu obsługa programu jest prosta dla zespołu i zrozumiała dla klientów.</>,
              icon: <RiCoupon2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        {/* 3. Dla kogo – filtr */}
        <SectionInfo title="Dla kogo jest karta lojalnościowa?" subtitle="Kiedy ten projekt szybko się zwraca?">
          <p>
            Projekt karty lojalnościowej szczególnie opłaca się tam, gdzie kluczowe jest, aby klient wracał regularnie - nawet kilka lub kilkanaście razy w roku. Im częściej ktoś korzysta z Twoich
            usług, tym szybciej karta „spłaca się” w praktyce.
          </p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Salony beauty, fryzjerzy, barberzy - regularne wizyty i łatwe rekomendacje „z ust do ust”.</li>
            <li>Kawiarnie i lokale gastronomiczne - program „zbierz pieczątki, odbierz nagrodę”, który klienci znają i lubią.</li>
            <li>Siłownie, studia treningowe, zajęcia grupowe - wsparcie utrzymania karnetów i dłuższej współpracy.</li>
            <li>Butiki, sklepy stacjonarne, concept story - zniżki dla stałych klientów, premiowanie częstszych zakupów.</li>
            <li>Gabinetowe usługi specjalistyczne - nienachalny sposób na przypomnienie o kolejnych wizytach.</li>
          </ul>

          <br />

          <p>Jeśli masz poczucie, że wiele osób pojawia się u Ciebie „tylko raz”, karta lojalnościowa może stać się prostym mechanizmem, który zamienia jednorazowych klientów w stałych bywalców.</p>
        </SectionInfo>

        <Gap variant="line" />

        {/* 4. Proof – realizacje + opinie */}
        <ProjectsOverview title="Przykładowe projekty graficzne" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        {/* 5. Cennik / pakiety – po proofie */}
        <SectionPrices
          title="Projekt karty lojalnościowej - przykładowe zakresy"
          subtitle="Dobieramy zakres do wielkości programu i liczby lokalizacji"
          plans={[
            {
              name: 'Pojedyncza karta dla jednego lokalu',
              price: 'wycena indywidualna',
              description: 'Dla salonu, kawiarni lub butiku, który chce wprowadzić prosty i czytelny program lojalnościowy w jednym miejscu.',
              features: [
                'Konsultacja założeń programu (liczba pól, rodzaj nagrody)',
                'Projekt karty w formacie wizytówki lub dopasowanym do drukarni',
                'Spójność z Twoim logo i identyfikacją wizualną',
                'Plik gotowy do druku + podgląd do akceptacji',
              ],
              btnOne: 'Zamów wycenę karty dla jednego lokalu',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Karty dla kilku punktów lub sieci',
              price: 'wycena indywidualna',
              description: 'Rozwiązanie dla marek działających w kilku lokalizacjach lub franczyzie, które potrzebują spójnych, ale zróżnicowanych kart.',
              features: [
                'Wszystko z pakietu podstawowego, a dodatkowo:',
                'Warianty kart dla wielu lokalizacji lub podmarek',
                'Możliwość różnicowania nagród i progów lojalności',
                'Przygotowanie specyfikacji zbiorczej dla drukarni',
              ],
              btnOne: 'Porozmawiajmy o kartach dla sieci',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Program lojalnościowy z materiałami dodatkowymi',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą oprócz karty mieć także wsparcie materiałami POS - np. plakaty, stojaczki, grafiki do social mediów.',
              features: [
                'Projekt kart lojalnościowych',
                'Dodatkowe materiały informujące o programie (np. mini-plakat, naklejka, grafika na social media)',
                'Spójna linia wizualna programu',
                'Rekomendacje, jak komunikować zasady programu klientom',
              ],
              btnOne: 'Zbudujmy pełny mini-program lojalnościowy',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby wariantów kart, liczby lokalizacji, oczekiwanych materiałów dodatkowych i stopnia skomplikowania programu. Po krótkim briefie przygotujemy konkretną propozycję zakresu i terminów."
        />

        <Gap variant="line" />

        {/* 6. Proces / ryzyko */}
        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        {/* 7. FAQ – obiekcje */}
        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej"
          title="Najczęstsze pytania o karty lojalnościowe"
          items={[
            {
              question: 'W jakich formatach wykonujecie karty?',
              answer:
                'Najczęściej przygotowujemy karty lojalnościowe w formacie wizytówki (np. 85 × 55 mm). Jeśli potrzebujesz innego formatu - dopasujemy projekt do wymagań Twojej drukarni lub specyfiki branży.',
            },
            {
              question: 'Czy mogę dodać logo i kolory marki na kartę lojalnościową?',
              answer: 'Tak - projekt zawsze opiera się na Twoim wizerunku. Korzystamy z logo, kolorów i stylu identyfikacji wizualnej, aby zachować pełną spójność materiałów.',
            },
            {
              question: 'Jak długo trwa realizacja kart lojalnościowych?',
              answer: 'Standardowo przygotowanie projektu wraz z plikami do druku trwa od 3 do 5 dni roboczych. Przy większej liczbie wariantów lub sieci punktów termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zamówić serię różnych kart lojalnościowych?',
              answer:
                'Tak - możemy przygotować serię spójną wizualnie dla wielu punktów, lokalizacji lub marek partnerskich. Dzięki temu program jest łatwy do zrozumienia, a jednocześnie dopasowany do konkretnych miejsc.',
            },
          ]}
        />

        <Gap variant="line" />

        {/* 8. Kontakt */}
        <ContactForm
          title="Zamów projekt karty lojalnościowej"
          description="Opisz, w jakiej branży działasz, jak chcesz nagradzać swoich klientów oraz ile różnych kart potrzebujesz. Na tej podstawie przygotujemy propozycję układu, wycenę i termin realizacji."
          defaultSubject="Projekt karty lojalnościowej"
        />

        <Gap variant="line" />

        {/* 9. Cross-sell – co dalej / z czym połączyć */}
        <SectionSteps
          title="Z czym warto połączyć karty lojalnościowe?"
          subtitle="Zobacz też"
          description="Karty lojalnościowe działają jeszcze lepiej, gdy klienci widzą je w kilku miejscach: w lokalu, w materiałach promocyjnych i online."
          items={[
            {
              icon: <RiCoupon2Line className="h-8 w-8" />,
              title: 'Kupony rabatowe i vouchery',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Kupony i vouchery świetnie uzupełniają program lojalnościowy - możesz nagradzać klientów dodatkowymi zaproszeniami lub zniżkami na specjalne okazje.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera">
                      Zobacz projekty voucherów
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Plakaty i grafiki informujące o programie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dobrze widoczna informacja przy ladzie, w recepcji lub w social mediach powoduje, że więcej osób pyta o program i zaczyna z niego korzystać.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-plakatu">
                      Sprawdź projekty plakatów
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
        title="Zwiększ lojalność klientów"
        description="Zaprojektujemy karty, które sprawią, że klienci będą wracać częściej - z jasnymi zasadami programu i spójnym wizerunkiem Twojej marki."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
