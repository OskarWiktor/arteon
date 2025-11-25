import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiCodeSSlashFill, RiDeviceLine, RiLayoutLine } from 'react-icons/ri';
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

export const metadata = {
  title: 'Projekt graficzny strony | Arteon',
  description: 'Makiety i layouty stron internetowych tworzone z myślą o czytelności i konwersji. Estetyka, UX i SEO w jednym projekcie.',
  keywords: ['projekt graficzny strony', 'layout strony', 'makiety UX', 'projekt www', 'projekt strony firmowej'],
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
        description={<>Wygląd, struktura i komfort użytkownika pracują na sprzedaż. Tworzymy makiety i layouty www zgodne z UX i SEO - estetyczne, czytelne i gotowe do wdrożenia.</>}
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
          { icon: <RiPencilRuler2Line />, label: 'Spójność marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiBarChart2Fill />, label: 'Transparentna współpraca' },
          { icon: <RiLightbulbFlashLine />, label: 'Psychologia w praktyce' },
        ]}
      />
      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-graficzny-strony`, label: 'Projekt graficzny strony' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt graficzny strony?">
          <p>
            <strong>Przejrzysty projekt strony, bloga czy sklepu buduje zaufanie w pierwszych sekundach.</strong> Odbiorcy bardzo mocno oceniają firmę przez wygląd ich strony oraz materiałów - nawet
            <strong> ~75%</strong> wrażeń o wiarygodności wynika z jakości oprawy wizualnej
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Dobrze zaprojektowana strona szybciej prowadzi do kontaktu.
          </p>

          <br />

          <p>
            <strong>Układ, hierarchia i czytelne CTA skracają drogę do decyzji.</strong> Użytkownik bez wysiłku znajduje to, czego szuka: ofertę, referencje i przyciski kontaktu. Spójny design
            porządkuje treść i eliminuje zbędne pytania.
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
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając projekt graficzny strony?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Przemyślany układ i estetyka',
              description: <>Tworzymy layouty, które prowadzą wzrok i ułatwiają podjęcie decyzji na stronie.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Responsywność i czytelność',
              description: <>Projekt działa na komputerze i telefonie, zachowując spójny wygląd i wygodę użycia.</>,
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
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt graficzny strony"
          description="Opisz branżę, zakres podstron i kluczowe funkcje. Na tej podstawie przygotujemy wycenę, termin i rekomendacje UX."
          defaultSubject="Projekt graficzny strony"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-graficzny-strony"
          items={[
            {
              question: 'Ile kosztuje projekt graficzny strony?',
              answer: 'Cena zależy głównie od liczby podstron. Po krótkim zapoznaniu z wymaganiami przedstawimy szczegółową wycenę dopasowaną do Twoich celów.',
            },
            {
              question: 'Jak długo trwa przygotowanie projektu strony?',
              answer: 'Standardowo od 7 do 14 dni roboczych. Czas zależy od liczby podstron i indywidualnych potrzeb UX. Dokładny harmonogram ustalamy przed rozpoczęciem projektu.',
            },
            {
              question: 'Czy projekt graficzny strony obejmuje wersję mobilną?',
              answer: 'Tak - każda realizacja obejmuje wersję na komputer, tablet i telefon. Dbamy o pełną responsywność i czytelność układu.',
            },
            {
              question: 'Czy projekt graficzny uwzględnia SEO i UX?',
              answer: 'Tak - łączymy estetykę z funkcjonalnością. Projekt powstaje z myślą o SEO (hierarchia nagłówków, struktura treści) i UX (intuicyjna nawigacja, kontrasty, CTA).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer: 'Tak - w projekcie przewidujemy rundy poprawek. Dopracowujemy kolory, typografię, układ i elementy wizualne aż do pełnej akceptacji.',
            },
            {
              question: 'W jakim formacie dostanę projekt?',
              answer: 'Dostarczamy pliki w Figmie, gotowe do wdrożenia przez dewelopera. Możesz też zlecić nam realizację strony na podstawie projektu.',
            },
            {
              question: 'Czy projekt graficzny strony mogę wykorzystać w przyszłości?',
              answer: 'Tak - po finalizacji masz pełne prawa do projektu. Możesz wdrożyć go teraz lub w przyszłości.',
            },
            {
              question: 'Czy mogę zamówić tylko jedną podstronę lub landing page?',
              answer: 'Tak - projektujemy również pojedyncze ekrany, strony główne i landing page’e. To dobre rozwiązanie przy testach lub kampaniach sprzedażowych.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABanner
        title="Daj stronie przewagę na starcie"
        description="Stworzymy layout, który prowadzi wzrokiem i zwiększa sprzedaż."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
