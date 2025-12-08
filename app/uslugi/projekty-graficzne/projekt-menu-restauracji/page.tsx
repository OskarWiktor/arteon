import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiLayoutLine, RiBookOpenLine, RiArticleLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt menu restauracji | Arteon',
  description: 'Projektujemy menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji',
  },
  openGraph: {
    title: 'Projekt menu restauracji | Arteon',
    description: 'Projektujemy menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-menu-restauracji',
    serviceName: 'Projekt menu restauracji',
    description: 'Projekt graficzny menu dla restauracji, kawiarni i barów - eleganckie, czytelne i dopasowane do charakteru lokalu. Wersje do druku i online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-menu-restauracji" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignMenuPage() {
  return (
    <>
      <HeroBanner
        title="Projekt menu restauracji"
        description={
          <>Stworzymy dla Ciebie estetyczne i czytelne menu restauracji, kawiarni lub baru - spójne z klimatem lokalu i Twoją marką. Karta, która pomaga gościom wybrać, a Tobie sprzedawać.</>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Menu dopasowane do klimatu lokalu' },
          { icon: <RiBrushLine />, label: 'Estetyka, która podnosi apetyt' },
          { icon: <RiBarChart2Fill />, label: 'Układ, który wspiera sprzedaż' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia wyboru dań' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-menu-restauracji`,
          label: 'Projekt menu restauracji',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto zainwestować w profesjonalne menu?">
          <p>
            <strong>Menu to najważniejszy materiał sprzedażowy w gastronomii.</strong> Dobrze zaprojektowana karta dań prowadzi gościa krok po kroku - od pierwszego spojrzenia po finalne zamówienie.
            Estetyczna, czytelna formа ułatwia wybór i ogranicza „paraliż decyzyjny”.
          </p>

          <br />

          <p>
            <strong>Układ graficzny ma realny wpływ na apetyt i decyzję.</strong> Sposób ułożenia sekcji, wyróżników i cen może zwiększyć średni rachunek nawet o kilkanaście procent, jeśli odpowiednie
            pozycje są pokazane we właściwym miejscu i w odpowiedniej formie.
          </p>

          <br />

          <p>
            <strong>Dobre menu robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Porządkuje ofertę i ułatwia wybór,</li>
            <li>Wzmacnia klimat i tożsamość lokalu,</li>
            <li>Zwiększa sprzedaż kluczowych dań i napojów.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zawiera projekt menu restauracji?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Układ dopasowany do oferty',
              description: <>Projektujemy logiczne sekcje - przystawki, dania główne, napoje, desery - z czytelną hierarchią, która ułatwia podjęcie decyzji i kieruje wzrok na kluczowe pozycje.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Spójność z klimatem lokalu',
              description: <>Kolory, czcionki i styl graficzny dopasowujemy do wnętrza i charakteru restauracji - nowoczesnego, klasycznego, rustykalnego czy street foodowego.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Gotowe pliki do druku i online',
              description: <>Dostarczamy pliki przygotowane do druku oraz wersje online, które bez problemu dodasz na stronę, do social mediów lub do kodu QR.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Możliwość samodzielnej aktualizacji',
              description: <>Na życzenie przygotowujemy łatwe w edycji pliki źródłowe, dzięki czemu samodzielnie zaktualizujesz sezonowe dania, ceny czy nowe pozycje.</>,
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt menu restauracji ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla restauracji i bistro,</strong> które chcą, aby karta współgrała z wnętrzem i poziomem serwisu.
            </li>
            <li>
              <strong>Dla kawiarni i cukierni,</strong> które potrzebują czytelnych kart napojów, ciast i zestawów śniadaniowych.
            </li>
            <li>
              <strong>Dla barów i koktajlbarów,</strong> gdzie właściwa prezentacja drinków realnie wpływa na sprzedaż pozycji premium.
            </li>
            <li>
              <strong>Dla food trucków i konceptów sezonowych,</strong> które chcą prostego, ale charakterystycznego menu do druku i online.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu profesjonalnego menu?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Bardziej zdecydowani goście,</strong> którzy szybciej wybierają dania i rzadziej proszą o „chwilę na zastanowienie”.
            </li>
            <li>
              <strong>Wyższa sprzedaż pozycji priorytetowych,</strong> dzięki świadomie zaprojektowanym wyróżnieniom i sekcjom specjalnym.
            </li>
            <li>
              <strong>Mniej pytań o podstawowe informacje,</strong> ponieważ karta rozwiewa większość wątpliwości dotyczących dań, dodatków i cen.
            </li>
            <li>
              <strong>Spójny wizerunek online i offline,</strong> gdy ta sama estetyka pojawia się na kartach, stronie i w social mediach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt menu restauracji - przykładowe pakiety"
          subtitle="Zakres dopasowany do wielkości lokalu i karty"
          plans={[
            {
              name: 'Pakiet Start - pojedyncza karta menu',
              price: 'wycena indywidualna',
              description: 'Dla lokali, które potrzebują jednej, dopracowanej karty dań lub napojów w formacie A4 lub DL.',
              features: [
                'Krótki brief o lokalu, klimacie i ofercie',
                'Projekt jednostronicowego menu (np. karta dań lub karta napojów)',
                'Dopasowanie kolorystyki i typografii do wnętrza lokalu',
                'Plik gotowy do druku oraz wersja PDF do online',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - pełna karta dań i napojów',
              price: 'wycena indywidualna',
              description: 'Dla restauracji, które chcą spójnej karty dań, napojów i deserów - np. w formie składanej.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Projekt wielostronicowej lub składanej karty (np. A3 składane na pół)',
                'Wyraźny podział na sekcje: przystawki, dania główne, desery, napoje',
                'Wyróżnienia dla dań specjalnych, sezonowych lub polecanych przez szefa kuchni',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system menu i kart sezonowych',
              price: 'wycena indywidualna',
              description: 'Dla konceptów gastronomicznych, które potrzebują stałej karty plus dodatków sezonowych, lunch menu lub specjalnych wkładek.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt dodatkowych wkładek sezonowych / lunchowych',
                'Ustalenie zasad dla przyszłych aktualizacji (styl, układ, wyróżnienia)',
                'Przygotowanie plików źródłowych do dalszej edycji',
                'Wsparcie przy wdrożeniu wersji online (PDF, grafiki do social mediów)',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy od liczby stron, języków, wariantów menu i stopnia rozbudowania oferty. Po krótkim briefie przygotujemy dopasowaną propozycję."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt menu dla swojego lokalu"
          description="Opisz jakie dania są dostępne w Twojej restauracji oraz jaki masz pomysł na swoje menu. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Projekt menu restauracji"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-menu-restauracji"
          title="Najczęstsze pytania dotyczące projektów menu restauracyjnego"
          items={[
            {
              question: 'W jakich formatach najczęściej projektujecie menu?',
              answer: 'Najczęściej pracujemy w formatach A5, A4 i DL lub formatach składanych (np. A3 na pół), ale możemy dostosować projekt do wymiarów kart używanych w Twoim lokalu.',
            },
            {
              question: 'Czy mogę otrzymać wersję do publikacji online?',
              answer: 'Tak, przygotowujemy wersje cyfrowe (PDF, PNG, JPG) do publikacji na stronie internetowej oraz mediach społecznościowych.',
            },
            {
              question: 'Czy możliwe jest przygotowanie wersji wielojęzycznej menu?',
              answer: 'Tak, możemy zaprojektować menu w kilku wersjach językowych lub umieścić kilka języków w jednej karcie, przy zachowaniu pełnej czytelności.',
            },
            {
              question: 'Jak długo trwa realizacja projektu menu?',
              answer: 'Zazwyczaj realizacja menu trwa od 3 do 5 dni roboczych. Przy rozbudowanych menu z wieloma pozycjami i językami termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zlecić późniejszą aktualizację menu?',
              answer: 'Tak, oferujemy aktualizacje sezonowe oraz modyfikacje cen czy składów. Na życzenie przygotowujemy także pliki źródłowe, które umożliwiają samodzielną edycję.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Jak jeszcze możesz wzmocnić wizerunek swojego lokalu?"
          subtitle="Zobacz też"
          description="Menu to centrum komunikacji firm gastronomicznych. Jeszcze lepiej działa, gdy otacza je spójny system materiałów - od ulotek po media społecznościowe i stronę internetową."
          items={[
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Projekt ulotk',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dodaj do menu ulotkę z ofertą sezonową. Goście z chęcią sprawdzą Twoją ofertę sezonową lub promocyjną.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-ulotki">
                      Zobacz projekt ulotki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Szablony postów do social mediów',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Pokaż swoje menu w mediach społecznościowych w spójnej formie. Szablony przyspieszą publikacje i wzmocnią wizerunek Twojej firmy.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/szablony-postow-social-media">
                      Zobacz szablony postów
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Strony internetowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Twoje menu może zawierać kod QR, który odsyła klientów na stronę, na której możesz zamieszczać nowe pozycje w menu czy też wprowadzić system składania zamówień.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-graficzny-strony">
                      Zobacz ofertę stworzenia strony internetowej
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="three"
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zaprojektuj menu, które zapamiętają Twoi klienci"
        description="Profesjonalny projekt menu restauracyjnego - estetyka, czytelność i emocje, które zwiększają sprzedaż."
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
