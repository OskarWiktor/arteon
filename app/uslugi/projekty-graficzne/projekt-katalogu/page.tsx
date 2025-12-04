import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
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
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Projekt katalogu | Arteon',
  description: 'Katalog produktów lub ofert z czytelnym składem DTP. Zdjęcia, typografia i układ, które podnoszą sprzedaż i wizerunek.',
  alternates: { canonical: '/uslugi/projekty-graficzne/projekt-katalogu' },
  openGraph: {
    title: 'Projekt katalogu | Arteon',
    description: 'Estetyczny i czytelny katalog firmowy. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-katalogu',
    serviceName: 'Projekt katalogu',
    description: 'Katalog produktowy/usługowy: układ, typografia, infografiki i zdjęcia. Gotowe pliki do druku oraz PDF online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-katalogu" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignKatalogPage() {
  return (
    <>
      <HeroBanner
        title="Projekt katalogu"
        description={
          <>
            Sprzedaż potrzebuje klarownej prezentacji oferty. Projektujemy katalogi z dopracowanym składem DTP, zdjęciami i typografią - w wersji do druku i online - tak, aby klient szybko zrozumiał
            Twoją ofertę i wiedział, jak zamówić.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/gazetka-mockup.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Oferta poukładana jak dobry landing' },
          { icon: <RiBrushLine />, label: 'Projekt, który podnosi postrzeganą wartość' },
          { icon: <RiBarChart2Fill />, label: 'Materiały, które wspierają sprzedaż handlowców' },
          { icon: <RiLightbulbFlashLine />, label: 'Układ oparty na psychologii decyzji' },
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
            <strong>Katalog porządkuje ofertę i prowadzi do kontaktu.</strong> Klient widzi produkty lub usługi w jasnym układzie: sekcje, zdjęcia, najważniejsze dane i ceny. Znika chaos, a pojawia
            się prosty wybór - „który wariant jest dla mnie”.
          </p>

          <br />

          <p>
            <strong>Katalog działa zarówno online, jak i w druku.</strong> Dostajesz wersję do wysyłki mailem (PDF) i pliki gotowe do druku. Materiały drukowane dłużej zostają w pamięci niż przekaz
            wyłącznie cyfrowy
            <a href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (źródło)
            </a>
            . Dobrze zaprojektowany katalog staje się „fizycznym dowodem” jakości Twojej marki.
          </p>

          <br />

          <p>
            <strong>Dobry katalog robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Prezentuje produkty lub usługi w logicznym porządku, bez „gubienia się” w szczegółach,</li>
            <li>Ułatwia decyzję dzięki czytelnym kartom, cenom i wyróżnionym rekomendacjom,</li>
            <li>Skierowuje do zamówienia: kontaktu z handlowcem, strony www lub sklepu online.</li>
          </ul>

          <br />

          <p>
            Z perspektywy sprzedaży katalog to narzędzie, które można zabrać na spotkanie, targi, event albo po prostu wysłać mailem - za każdym razem pracuje dla Ciebie tak samo, niezależnie od
            nastroju handlowca.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając katalog?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Klarowna prezentacja oferty',
              description: <>Układ, który ułatwia odbiorcy zrozumienie produktów, usług i różnic między pakietami - bez zgadywania i szukania drobnego druku.</>,
              icon: <RiBookletLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dopracowane zdjęcia i typografia',
              description: <>Dbamy o spójność zdjęć, czytelne podpisy i hierarchię nagłówków, aby katalog był lekki w odbiorze, nawet przy dużej liczbie stron.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersja drukowana i cyfrowa',
              description: <>Dostarczamy katalog gotowy do druku oraz wygodną wersję do udostępniania online - idealną do mailingu i oferty PDF.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wspólne dopracowanie szczegółów',
              description: <>W cenie przewidujemy poprawki. Razem ustalamy układ, kolejność sekcji, wyróżniki ofertowe i sposób prezentacji cen.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo szczególnie opłaca się katalog?" subtitle="Kiedy inwestycja zwraca się najszybciej?">
          <p>
            Katalog najlepiej sprawdza się tam, gdzie oferta ma wiele pozycji lub wariantów, a klient potrzebuje ich porównania w jednym miejscu. Im większa złożoność oferty, tym mocniej rośnie
            znaczenie dobrego składu DTP.
          </p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Firmy produktowe - producenci, hurtownie, sklepy z szerokim asortymentem.</li>
            <li>Branże B2B - usługi techniczne, systemy, rozwiązania modułowe, konfiguracje.</li>
            <li>Biura projektowe, deweloperzy, firmy budowlane - portfolio realizacji i pakiety.</li>
            <li>Marki lifestyle, beauty, fashion - kolekcje, linie produktów, zestawy usług.</li>
            <li>Organizatorzy szkoleń i usług doradczych - pakiety, poziomy wsparcia, cenniki w jednym materiale.</li>
          </ul>

          <br />

          <p>Jeśli masz poczucie, że Twoja oferta „nie mieści się na jednej stronie” - katalog jest często najbardziej czytelną formą, jaką możesz pokazać klientowi przed rozmową o szczegółach.</p>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt katalogu - przykładowe zakresy"
          subtitle="Dobieramy zakres do wielkości oferty"
          plans={[
            {
              name: 'Katalog kompaktowy',
              price: 'wycena indywidualna',
              description: 'Dla ofert, które mieszczą się w kilkunastu stronach - idealny materiał na spotkania i wysyłkę mailową.',
              features: [
                'Konsultacja i omówienie struktury katalogu',
                'Projekt kilku kluczowych layoutów (strona tytułowa, rozkładówki, sekcje)',
                'Skład DTP do ustalonej liczby stron',
                'Pliki PDF do druku i wersji online',
              ],
              btnOne: 'Zamów wycenę katalogu kompaktowego',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Katalog rozbudowany',
              price: 'wycena indywidualna',
              description: 'Dla dużych ofert produktowych lub usługowych, w których ważne są porównania, parametry i czytelne tabele.',
              features: [
                'Wszystko z pakietu kompaktowego, a dodatkowo:',
                'Większa liczba wzorcowych layoutów',
                'Możliwość wprowadzenia ikon, wyróżników, ramek z rekomendacjami',
                'Rekomendacje kolejności sekcji pod kątem sprzedaży',
              ],
              btnOne: 'Porozmawiajmy o katalogu rozbudowanym',
              btnOneLink: '#kontakt',
            },
            {
              name: 'System katalogów i folderów',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują spójnej rodziny materiałów: katalog główny + foldery tematyczne lub ofertowe.',
              features: [
                'Spójna linia projektowa dla kilku publikacji',
                'Dopasowanie layoutów do różnych rodzajów treści',
                'Możliwość dalszej rozbudowy o kolejne katalogi',
                'Wsparcie w planowaniu struktury materiałów',
              ],
              btnOne: 'Zbudujmy system katalogów',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby stron, ilości materiałów, języków i poziomu rozbudowania layoutów. Po krótkim briefie przygotujemy konkretną propozycję z zakresem i terminami."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu"
          items={[
            {
              question: 'Ile kosztuje projekt katalogu?',
              answer: 'Cena zależy od liczby stron, ilości zdjęć, stopnia rozbudowania treści oraz języków. Po krótkim briefie otrzymasz szczegółową wycenę dopasowaną do zakresu i celu katalogu.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu katalogu?',
              answer:
                'Standardowy czas realizacji wynosi 7-14 dni roboczych. Projekty rozbudowane (powyżej 20 stron) mogą wymagać dodatkowego czasu - dokładny harmonogram ustalamy indywidualnie przed startem.',
            },
            {
              question: 'W jakich formatach dostanę katalog?',
              answer:
                'Dostarczamy pliki gotowe do druku (PDF ze spadami, odpowiednimi marginesami i profilami kolorów) oraz wersję cyfrową do publikacji online (PDF interaktywny lub materiał pod flipbook).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu katalogu?',
              answer:
                'Tak - każda realizacja obejmuje rundy poprawek. Dopracowujemy układ, zdjęcia, typografię i sposób prezentacji treści, aż katalog będzie spójny z Twoją marką i celami sprzedażowymi.',
            },
            {
              question: 'Czy mogę dostarczyć własne zdjęcia i teksty?',
              answer:
                'Tak - możesz dostarczyć gotowe materiały lub zlecić nam ich opracowanie. W razie potrzeby dobieramy zdjęcia ze stocków i redagujemy treści tak, aby były czytelne i zachęcały do kontaktu.',
            },
            {
              question: 'Czy projekt katalogu jest gotowy do druku?',
              answer: 'Tak - pliki przygotowujemy zgodnie ze standardami drukarni (spady, marginesy, profile ICC, kolory CMYK). Możesz od razu przekazać katalog do druku w wybranej drukarni.',
            },
            {
              question: 'Czy wykonujecie skład DTP większych publikacji?',
              answer: 'Tak - zajmujemy się pełnym składem katalogów, folderów i broszur. Dbamy o hierarchię, odstępy, siatkę i czytelność, także w projektach liczących dziesiątki stron.',
            },
            {
              question: 'Czy mogę zamówić katalog w języku obcym?',
              answer: 'Tak - wykonujemy katalogi jedno- i wielojęzyczne, z zachowaniem spójnej typografii i układu. Możemy też doradzić, jak najlepiej zaprezentować treści w kilku językach.',
            },
          ]}
        />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt katalogu"
          description="Podaj planowaną liczbę stron, rodzaj produktów lub usług, które chcesz pokazać, oraz czy masz już zdjęcia i teksty. Na tej podstawie przygotujemy wycenę, propozycję układu i harmonogram składu."
          defaultSubject="Projekt katalogu"
        />

        <Gap variant="line" />

        <SectionSteps
          title="Z czym najlepiej połączyć katalog?"
          subtitle="Zobacz też"
          description="Katalog działa jeszcze lepiej, gdy jest częścią większego systemu materiałów. Możesz rozszerzyć go o dodatkowe nośniki."
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Folder ofertowy lub prezentacja PDF',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Krótszy folder lub prezentacja streszcza najważniejsze elementy katalogu - idealne na szybkie spotkania i oferty mailowe.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-folderu">
                      Zobacz projekty folderów
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiImageLine className="h-8 w-8" />,
              title: 'Key visual i grafiki do social mediów',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Spójne grafiki do kampanii w social mediach pomagają kierować ruch do katalogu online i strony internetowej.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/szablony-postow-social-media">
                      Zobacz szablony postów
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
        title="Pokaż ofertę z klasą"
        description="Zaprojektujemy katalog, który klarownie prowadzi do decyzji i wzmacnia wizerunek Twojej marki na spotkaniach, targach i w sprzedaży online."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/gazetka-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
