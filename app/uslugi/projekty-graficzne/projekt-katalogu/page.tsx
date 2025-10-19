import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookletLine, RiFileTextLine, RiImageLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';

export const metadata = {
  title: 'Projekt katalogu | Arteon',
  description: 'Katalog produktów lub ofert z czytelnym składem DTP. Zdjęcia, typografia i układ, które podnoszą sprzedaż i wizerunek.',
  keywords: ['projekt katalogu', 'katalog firmowy', 'skład DTP', 'katalog produktów', 'materiały do druku'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-katalogu' },
  openGraph: {
    title: 'Projekt katalogu | Arteon',
    description: 'Estetyczny i czytelny katalog firmowy. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt katalogu"
        description={<>Sprzedaż potrzebuje klarownej prezentacji oferty. Projektujemy katalogi z dopracowanym składem DTP, zdjęciami i typografią - w wersji do druku i do udostępniania online.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Portfolio"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-katalogu`, label: 'Projekt katalogu' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt katalogu?">
          <p>
            <strong>Katalog porządkuje ofertę i prowadzi do kontaktu.</strong> Klient widzi produkty w jasnym układzie: sekcje, zdjęcia, najważniejsze dane. Łatwiej porównać warianty i wybrać.
          </p>

          <br />

          <p>
            <strong>Katalog działa online i w druku.</strong> Dostajesz wersję do wysyłki mailem (PDF) i pliki gotowe do druku. Materiały drukowane dłużej zostają w pamięci niż przekaz wyłącznie
            cyfrowy
            <a
              href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 inline-block underline underline-offset-4"
            >
              (źródło)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Dobry katalog robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Prezentuje produkty w logicznym porządku,</li>
            <li>Ułatwia decyzję dzięki czytelnym kartom i cenom,</li>
            <li>Skierowuje do zamówienia: kontakt, strona, sklep.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając katalog?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Klarowna prezentacja oferty',
              description: <>Układ ułatwiający odbiorcy zrozumienie produktów i szybkie porównanie opcji.</>,
              icon: <RiBookletLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopracowane zdjęcia i typografia',
              description: <>Dbamy o spójność zdjęć i czytelne podpisy, aby katalog był lekki w odbiorze.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersja drukowana i cyfrowa',
              description: <>Dostarczamy katalog gotowy do druku oraz wygodną wersję do udostępniania online.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wspólne dopracowanie szczegółów',
              description: <>W cenie przewidujemy poprawki. Razem ustalamy układ, kolejność i wyróżniki ofertowe.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt katalogu"
          description="Podaj planowaną liczbę stron oraz rodzaj treści, którą chcesz umieścić. Jeśli masz zdjęcia lub specyfikację drukarni, dołącz je - przygotujemy wycenę i plan składu."
          defaultSubject="Projekt katalogu"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu"
          items={[
            {
              question: 'Ile kosztuje projekt katalogu?',
              answer: 'Cena zależy od liczby stron, ilości zdjęć oraz tekstów. Po briefie otrzymasz szczegółową wycenę dopasowaną do zakresu.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu katalogu?',
              answer: 'Standardowy czas realizacji wynosi 7-14 dni roboczych. Projekty rozbudowane (powyżej 20 stron) mogą wymagać dodatkowego czasu - terminy ustalamy indywidualnie.',
            },
            {
              question: 'W jakich formatach dostanę katalog?',
              answer: 'Dostarczamy pliki gotowe do druku (PDF z odpowiednimi spadami i profilami kolorów) oraz wersję cyfrową do publikacji online (PDF interaktywny lub flipbook).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu katalogu?',
              answer: 'Tak - każda realizacja obejmuje rundy poprawek. Dopracowujemy układ, zdjęcia, typografię i treści, aż katalog spełni Twoje oczekiwania.',
            },
            {
              question: 'Czy mogę dostarczyć własne zdjęcia i teksty?',
              answer: 'Tak - możesz dostarczyć materiały lub zlecić nam ich opracowanie. W razie potrzeby dobieramy zdjęcia ze stocków i redagujemy treści pod Twoją ofertę.',
            },
            {
              question: 'Czy projekt katalogu jest gotowy do druku?',
              answer: 'Tak - pliki przygotowujemy zgodnie ze standardami drukarni (spady, marginesy, profile ICC, kolory CMYK). Możesz od razu przekazać je do druku.',
            },
            {
              question: 'Czy wykonujecie skład DTP większych publikacji?',
              answer: 'Tak - zajmujemy się pełnym składem katalogów, folderów i broszur. Dbamy o hierarchię, odstępy i czytelność, także w projektach liczących dziesiątki stron.',
            },
            {
              question: 'Czy mogę zamówić katalog w języku obcym?',
              answer: 'Tak - wykonujemy katalogi wielojęzyczne, z zachowaniem spójnej typografii i układu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Pokaż ofertę z klasą"
        description="Zaprojektujemy katalog, który klarownie prowadzi do decyzji."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
    </>
  );
}
