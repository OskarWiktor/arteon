import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiImageLine, RiQuillPenLine, RiTShirt2Line } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';

export const metadata = {
  title: 'Projekt odzieży firmowej | Arteon',
  description: 'Projekt nadruków i haftów na odzież firmową. Spójny wygląd zespołu i lepsza rozpoznawalność marki.',
  keywords: ['projekt odzieży firmowej', 'nadruk firmowy', 'haft komputerowy', 'odzież z logo', 'materiały firmowe'],
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej' },
  openGraph: {
    title: 'Projekt odzieży firmowej | Arteon',
    description: 'Nadruki i hafty dopasowane do identyfikacji marki. Pliki przygotowane pod wybraną technikę.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej',
    type: 'website',
  },
} as const;

export default function OfferDesignXxxPage() {
  return (
    <>
      <HeroBanner
        title="Projekt odzieży firmowej"
        description={<>Zespół wygląda spójnie, a marka zyskuje widoczność. Przygotowujemy projekty nadruków i haftów - pod sitodruk, DTF i haft komputerowy - zgodnie z Twoją identyfikacją.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-odziezy-firmowej`, label: 'Projekt odzieży firmowej' }}
        includeJsonLd
      />
      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt odzieży firmowej?">
          <p>
            <strong>Spójny wygląd odzieży Twojego zespołu buduje zaufanie w kilka sekund.</strong> Klient od razu widzi, kto reprezentuje Twoją firmę. Jednolita odzież firmowa buduje wizerunek firmy i
            wzmacnia wiarygodność. Dzięki temu Twoja marka jest widoczna w terenie a to działa jak darmowa reklama mobilna
          </p>

          <br />

          <p>
            <strong>Dobra odzież firmowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica zespół i podnosi rozpoznawalność marki,</li>
            <li>Ułatwia obsługę - klient szybciej trafia do właściwej osoby,</li>
            <li>Wzmacnia wizerunek i buduje autorytet Twojej firmy.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając odzież firmową?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny wygląd zespołu',
              description: <>Projekt buduje rozpoznawalność marki w terenie i podczas wydarzeń.</>,
              icon: <RiTShirt2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wizualizacje i warianty',
              description: <>Przygotowujemy podglądy na koszulkach, bluzach i innych elementach, aby łatwiej było podjąć decyzję.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopasowanie do wybranej technologii',
              description: <>Projekt przygotowujemy tak, aby wyglądał dobrze niezależnie od sposobu naniesienia znaków.</>,
              icon: <RiQuillPenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pliki gotowe do produkcji',
              description: <>Otrzymujesz materiały, które możesz od razu przekazać wykonawcy odzieży.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
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
          title="Zamów projekt odzieży firmowej"
          description="Napisz, jakie elementy chcesz umieścić na odzieży i jak chcesz aby to wyglądało. Przygotujemy wycenę i specyfikację plików."
          defaultSubject="Projekt odzieży firmowej"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-odziezy-firmowej"
          items={[
            {
              question: 'Ile kosztuje projekt odzieży firmowej?',
              answer: 'Cena zależy od liczby projektów (koszulki, bluzy, czapki), techniki druku (sitodruk, haft, DTF) i liczby wariantów. Po briefie przedstawiamy dopasowaną wycenę.',
            },
            {
              question: 'Jak długo trwa projekt odzieży firmowej?',
              answer: 'Standardowy czas realizacji to zwykle 5-10 dni roboczych, w zależności od liczby wersji i techniki nadruku.',
            },
            {
              question: 'W jakich formatach otrzymam projekty?',
              answer: 'Dostarczamy pliki wektorowe (AI, SVG) oraz rastrowe (PNG, JPG) w wysokiej rozdzielczości, z wariantami kolorystycznymi i adaptacjami do różnych elementów odzieży.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer: 'Tak - w projekcie przewidujemy rundy poprawek. Doprecyzowujemy szczegóły, takie jak kolory, umiejscowienie i wielkość projektu, aż zrealizujemy finalną wersję.',
            },
            {
              question: 'Jaką technikę druku wybrać?',
              answer: 'Doradzamy technikę (sitodruk, haft, DTF) uwzględniając materiał, budżet i trwałość. Dobieramy rozwiązanie, które wygląda dobrze i utrzymuje się długo.',
            },
            {
              question: 'Czy projekt będzie prawidłowo skalowalny?',
              answer: 'Tak - projektujemy tak, aby grafika była czytelna i estetyczna zarówno na małych jak i większych elementach odzieży.',
            },
            {
              question: 'Czy projekt odzieży jest gotowy do produkcji?',
              answer: 'Tak - przygotujemy pliki zoptymalizowane pod wybraną technikę: kolory, separacje, warstwy. Gotowe do przekazania do producenta.',
            },
            {
              question: 'Czy mogę zamówić ekspresowy projekt odzieży firmowej?',
              answer: 'Tak - oferujemy opcję przyspieszonego wykonania. Koszt i termin ustalamy indywidualnie przed rozpoczęciem projektu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>
      <CTABaner
        title="Ubierz zespół w tożsamość"
        description="Zaprojektujemy nadruki i hafty, które wyróżniają markę w terenie."
        primaryLabel="Skontaktuj się"
        primaryLink="/kontakt"
        secondaryLabel="Poznaj usługi graficzne"
        secondaryLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/bg/abstract-bg15.webp"
        overlay="black"
      />
    </>
  );
}
