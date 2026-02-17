import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookOpenLine, RiFileTextLine, RiIdCardLine, RiPantoneLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt identyfikacji wizualnej | Arteon',
  description: 'Kompletny system wizualny marki: logo, kolory, typografia i materiały firmowe. Spójność w każdym punkcie styku.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  openGraph: {
    title: 'Projekt identyfikacji wizualnej | Arteon',
    description: 'Spójny system identyfikacji wizualnej dla Twojej marki. Od logo po materiały firmowe.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    type: 'website',
    images: [
      { url: 'https://www.arteonagency.pl/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp', width: 1200, height: 630 },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
    serviceName: 'Projekt identyfikacji wizualnej',
    description: 'Kompletna identyfikacja: logo, paleta, typografia i wzory. Podstawowa księga znaku i spójność we wszystkich kanałach.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-identyfikacji-wizualnej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignBrandIdentityDesignPage() {
  return (
    <>
      <HeroBanner
        title="Projekt identyfikacji wizualnej"
        description={
          <>
            Spójny system wizualny zwiększa wiarygodność i rozpoznawalność marki. Zaprojektujemy identyfikację: logo, kolory, typografię i materiały firmowe - tak, aby Twoja marka wyglądała
            profesjonalnie w każdym kanale.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPantoneLine />, label: 'Spójny obraz marki w każdym kanale' },
          { icon: <RiBrushLine />, label: 'Projekt dopasowany do charakteru firmy' },
          { icon: <RiBarChart2Fill />, label: 'System, który wspiera sprzedaż' },
          { icon: <RiLightbulbFlashLine />, label: 'Identyfikacja oparta na strategii' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej`,
          label: 'Projekt identyfikacji wizualnej',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Co zyskujesz zamawiając identyfikację wizualną?">
          <p>
            <strong>Spójny system wizualny porządkuje każdy kontakt z Twoją marką.</strong> Firmy, które konsekwentnie trzymają identyfikację, notują średnio
            <strong> 10-20% wyższe przychody</strong>
            <a href="https://www.marq.com/blog/brand-consistency-competitive-advantage" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Ten sam styl działa na stronie, w ofertach, w druku i w mediach społecznościowych.
          </p>

          <br />

          <p>
            <strong>Jakość oprawy przekłada się na zaufanie.</strong> Nawet <strong>~75%</strong> odbiorców ocenia wiarygodność firmy po wyglądzie materiałów i strony
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Czytelna typografia i porządek wizualny ułatwiają decyzję o kontakcie i współpracy.
          </p>

          <br />

          <p>
            <strong>Kolor i konsekwencja zwiększają rozpoznawalność.</strong> Zastosowanie spójnych barw potrafi podnieść zapamiętywanie marki nawet o <strong>~80%</strong>
            <a href="https://www.xerox.com/en-us/insights/color" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Klient szybciej kojarzy, z kim rozmawia i łatwiej wraca do Twojej oferty.
          </p>

          <br />

          <p>
            <strong>Dobra identyfikacja wizualna robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Ujednolica komunikację w całej firmie,</li>
            <li>Przyspiesza tworzenie materiałów i zmniejsza liczbę poprawek,</li>
            <li>Podnosi rozpoznawalność i ułatwia budowanie zaufania.</li>
          </ul>

          <br />

          <p>
            Zamiast za każdym razem wymyślać „jak to ma wyglądać”, korzystasz z gotowego systemu. Dzięki temu oszczędzasz czas swój i zespołu, a marka pozostaje spójna niezależnie od tego, kto
            przygotowuje kolejne materiały.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając identyfikację wizualną?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny system marki',
              description: <>Projektujemy logo, kolory i typografię tak, aby wszystkie materiały - online i offline - działały razem.</>,
              icon: <RiPantoneLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Materiały do codziennej komunikacji',
              description: <>Przygotowujemy podstawowe wzory: wizytówki, papiery firmowe i grafiki do prezentacji marki.</>,
              icon: <RiIdCardLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Proste zasady stosowania',
              description: <>Dostajesz krótkie wytyczne, które ułatwiają wdrożenie identyfikacji w całej firmie - także osobom nietechnicznym.</>,
              icon: <RiBookOpenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Pełna gotowość do druku i online',
              description: <>Otrzymujesz komplet plików do codziennej pracy: wersje do druku, internetu i mediów społecznościowych.</>,
              icon: <RiFileTextLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest identyfikacja wizualna?" subtitle="Kiedy warto w nią zainwestować?">
          <p>Projekt identyfikacji wizualnej szczególnie przydaje się wtedy, gdy chcesz świadomie ułożyć obraz marki na lata, a nie tylko zaprojektować pojedyncze logo czy wizytówkę.</p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Zakładasz firmę i chcesz od początku zbudować spójny, profesjonalny wizerunek.</li>
            <li>Masz już logo, ale materiały „żyją własnym życiem” i brakuje jednego kierunku dla całej komunikacji.</li>
            <li>Planujesz stronę internetową, kampanie reklamowe lub wejście na nowy rynek i potrzebujesz wyraźnego, rozpoznawalnego stylu.</li>
            <li>Twój zespół lub podwykonawcy często pytają „czy mogę użyć tego koloru / fontu?” - chcesz jasnych zasad, zamiast ciągłego ustalania detali.</li>
            <li>Przygotowujesz markę ekspercką (np. gabinet, kancelaria, marka osobista) i zależy Ci na zaufaniu już przy pierwszym kontakcie.</li>
          </ul>

          <br />

          <p>Jeśli masz poczucie, że Twoja marka „jest dobra w środku”, ale na zewnątrz nie wygląda jeszcze tak, jak powinna - identyfikacja wizualna jest naturalnym kolejnym krokiem.</p>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt identyfikacji wizualnej - przykładowe zakresy"
          plans={[
            {
              name: 'Podstawowa identyfikacja dla nowej marki',
              price: 'wycena indywidualna',
              description: 'Dla firm na starcie, które potrzebują solidnych fundamentów wizualnych, ale jeszcze nie pełnego brandbooka.',
              features: [
                'Logo w kilku wariantach (kolor, mono, jasne/ciemne tło)',
                'Podstawowa paleta kolorystyczna i typografia',
                'Proste materiały firmowe (wizytówka, papier firmowy, stopka mailowa)',
                'Mini-księga znaku z zasadami użycia logo i kolorów',
              ],
              btnOne: 'Zamów wycenę podstawowej identyfikacji',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Rozszerzona identyfikacja dla rozwijającej się marki',
              price: 'wycena indywidualna',
              description: 'Dla firm, które rosną, działają w kilku kanałach i potrzebują szerszego zestawu szablonów oraz klarowniejszych wytycznych.',
              features: [
                'Wszystko z pakietu podstawowego, a dodatkowo:',
                'Rozszerzona paleta barw (kolory pomocnicze, akcentowe)',
                'Więcej materiałów - np. teczka ofertowa, grafiki do mediów społecznościowych, slajdy prezentacyjne',
                'Bardziej rozbudowana mini-księga znaku z przykładami zastosowań',
              ],
              btnOne: 'Porozmawiajmy o identyfikacji dla rosnącej marki',
              btnOneLink: '#kontakt',
            },
            {
              name: 'System z brandbookiem dla marki na lata',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą mieć kompletny system na lata - z dokładnymi zasadami i przykładowymi wdrożeniami w wielu kanałach.',
              features: [
                'Kompletny system logo, kolorów, typografii i ikonografii',
                'Rozbudowany zestaw materiałów drukowanych i cyfrowych',
                'Brandbook (PDF) z zasadami, siatkami, przykładami i zakazanymi użyciami',
                'Rekomendacje wdrożenia identyfikacji w stronie www, mediach społecznościowych i materiałach handlowych',
              ],
              btnOne: 'Zbudujmy pełny system identyfikacji',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od zakresu elementów (logo, materiały drukowane, szablony cyfrowe), liczby języków oraz poziomu szczegółowości brandbooka. Po krótkim briefie przygotujemy konkretną propozycję zakresu i harmonogram prac."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji identyfikacji wizualnej"
          description="Napisz czym zajmuje się Twoja firma, jakich materiałów potrzebujesz oraz czy posiadasz już logo - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/finish-masters/logo-prezentacja-finish-masters-kolory_1.webp"
          imageAlt="Realizacja identyfikacji wizualnej - Finish Masters"
          defaultSubject="Identyfikacja wizualna"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          title="Najczęstsze pytania dotyczące projektów identyfikacji wizualnej"
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
          items={[
            {
              question: 'Ile kosztuje identyfikacja wizualna?',
              answer:
                'Cena zależy od zakresu prac, które wchodzą w Twoją identyfikację: logo, paleta kolorów, typografia, materiały firmowe. Po zapoznaniu się z Twoją ofertą i Twoimi celami, wspólnie ustalimy jakie materiały przyniosą Ci największe korzyści.',
            },
            {
              question: 'Jak długo trwa stworzenie identyfikacji wizualnej?',
              answer: 'Standardowo projekt trwa od 5 do 12 dni roboczych, w zależności od liczby elementów i liczby rund poprawek. Dokładny harmonogram ustalamy indywidualnie na początku współpracy.',
            },
            {
              question: 'Co zawiera kompletna identyfikacja wizualna?',
              answer:
                'Zazwyczaj: logo w kilku wariantach, paletę kolorów, typografię, wzory wizytówek, papierów firmowych, teczek oraz grafiki do mediów społecznościowych. Dokładny zakres elementów wchodzących w skład identyfikacji wizualnej ustalamy wspólnie przed rozpoczęciem prac.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu?',
              answer:
                'Tak, każdy element identyfikacji omawiamy, dając Ci pełne pole do naniesienia poprawek, tak, aby projekt odpowiadał dokładnie Twojej wizji i Twoim potrzebom. Wspólnie dopracowujemy układ, kolorystykę i styl.',
            },
            {
              question: 'Czy mogę zamówić samo logo bez całego systemu?',
              answer: 'Tak, sam projekt logo jest osobną usługą. W dowolnym momencie możesz rozszerzyć go o pełną identyfikację wizualną, opartą na już istniejącym znaku.',
            },
            {
              question: 'Czy dostanę pliki gotowe do druku i internetu?',
              answer:
                'Tak, przekazujemy pliki źródłowe, wersje do druku, internetu i mediów społecznościowych, tak, abyś miał pełny dostęp do wszystkich materiałów z możliwością edycji w dowolnym momencie.',
            },
            {
              question: 'Czy mogę liczyć na doradztwo w wyborze stylu identyfikacji?',
              answer:
                'Tak, przed rozpoczęciem pracy, analizujemy Twoją branżę i Twoją ofertę, przygotowujemy propozycje stylistyczne i moodboardy, omawiamy plusy i minusy różnych kierunków, a następnie wspólnie wybieramy kierunek najlepiej dopasowany do Twojej grupy docelowej.',
            },
            {
              question: 'Czy mogę zamówić brandbook do identyfikacji?',
              answer:
                'Tak, opracowujemy brandbook z wytycznymi: logo, kolory, typografia, siatki, przykłady użycia i zakazane zastosowania. To podstawa spójnej komunikacji w firmie i wygodna instrukcja dla podwykonawców.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka Twojej firmy w sieci',
              size: 'large',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Sklepy internetowe',
              description: 'Sprzedawaj produkty we własnym sklepie online',
              size: 'medium',
              backgroundImage: '/assets/projects/arteon-baners-msc.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Projekt wizytówki',
              description: 'Elegancka wizytówka dla Twojej firmy',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt logo',
              description: 'Zbuduj rozpoznawalny znak firmowy',
              size: 'small',
              backgroundImage: '/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/rozne-wersje-logo-firmy.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zbuduj przewagę i wyróżnij się na tle konkurencji"
        description="Zbudujemy system, który wzmacnia rozpoznawalność, ułatwia codzienną pracę i zwiększa zaufanie do Twojej firmy."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/blog/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow/jak-identyfikacja-wizualna-zwieksza-zaufanie-klientow.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
