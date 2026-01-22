import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiArticleLine, RiFileTextLine, RiLayoutLine, RiMoneyDollarCircleLine, RiPantoneLine, RiComputerLine, RiIdCardLine } from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
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
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/buttons/Button';

export const metadata = {
  title: 'Projekt ulotki | Arteon',
  description: 'Projekt ulotki reklamowej z układem, typografią i grafiką. Pliki do druku (CMYK) oraz wersja cyfrowa.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki',
  },
  openGraph: {
    title: 'Projekt ulotki | Arteon',
    description: 'Skuteczna ulotka z jasnym przekazem i mocnym CTA. Pliki gotowe do druku.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp' }],
  },
} as const;

const BASE = 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/projekty-graficzne/projekt-ulotki',
    serviceName: 'Projekt ulotki',
    description: 'Skuteczne ulotki reklamowe: jasne CTA, czytelna hierarchia, formaty pod druk i wersje cyfrowe.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-ulotki" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignFlyerPage() {
  return (
    <>
      <HeroBanner
        title="Projekt ulotki"
        description={<>Tworzymy ulotki reklamowe z jasnym przekazem i czytelnym układem. Pliki do druku (CMYK) oraz wersja cyfrowa.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp"
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
        third={{
          href: `/uslugi/projekty-graficzne`,
          label: 'Projekty graficzne',
        }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-ulotki`,
          label: 'Projekt ulotki',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co zyskujesz zamawiając projekt ulotki?">
          <p>
            <strong>Profesjonalna ulotka dociera tam, gdzie reklama cyfrowa znika po sekundzie.</strong> Materiały drukowane są łatwiejsze w odbiorze i dłużej zostają w pamięci - badania
            neuromarketingowe pokazują niższe obciążenie poznawcze i wyższą zapamiętywalność niż w kanale wyłącznie cyfrowym{' '}
            <a href="https://www.canadapost-postescanada.ca/cpc/doc/en/landing-pages/infographic-neuroscience-direct-mail-e.pdf" target="_blank" rel="noopener noreferrer" className="inline-link">
              (Canada Post - neuromarketing)
            </a>
            . Dobrze zaprojektowana ulotka prowadzi klienta od nagłówka, przez korzyści, aż do konkretnego działania.
          </p>

          <br />

          <p>
            <strong>Wygląd materiałów graficznych, w tym ulotki, realnie wpływa na zaufanie.</strong> Odbiorcy często oceniają wiarygodność firmy po jakości oprawy. Estetyczny, czytelny projekt
            zwiększa szansę na pozytywną reakcję - wejście na stronę, telefon lub wizytę stacjonarną
            <a href="https://credibility.stanford.edu/guidelines/index.html" target="_blank" rel="noopener noreferrer" className="inline-link ml-1">
              (Stanford - web credibility)
            </a>
            . Ulotka łączy prosty przekaz z jasnym wezwaniem do działania.
          </p>

          <br />

          <p>
            <strong>Dobra ulotka robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Przedstawia ofertę w prosty i zrozumiały sposób,</li>
            <li>Prowadzi do konkretnego działania (telefon, rezerwacja, wejście na stronę),</li>
            <li>Buduje rozpoznawalność marki i zwiększa zaufanie.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając ulotkę?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Jasny przekaz i mocne wezwanie do działania',
              description: <>Tworzymy układy, które przyciągają wzrok, wyjaśniają ofertę i prowadzą prosto do kontaktu lub zakupu.</>,
              icon: <RiArticleLine className="h-6 w-6 text-slate-800" />,
            },
            {
              title: 'Format dopasowany do celu',
              description: <>Dobieramy rozmiar i orientację ulotki tak, aby była poręczna, czytelna i wygodna w dystrybucji.</>,
              icon: <RiLayoutLine className="h-6 w-6 text-slate-800" />,
            },
            {
              title: 'Pliki gotowe do druku i wersja cyfrowa',
              description: <>Otrzymujesz pliki przygotowane pod drukarnię oraz wersję do wykorzystania w internecie lub mailingu.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-800" />,
            },
            {
              title: 'Dopracowanie detali',
              description: <>W cenie przewidujemy poprawki. Wspólnie dopieszczamy treści, układ i wyróżniki Twojej oferty.</>,
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-800" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-800" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo projekt ulotki ma największy sens?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla firm lokalnych,</strong> które chcą poinformować o nowej ofercie, promocji, otwarciu lokalu lub wydarzeniu w konkretnej okolicy.
            </li>
            <li>
              <strong>Dla gabinetów, salonów i punktów usługowych,</strong> które chcą w prosty sposób pokazać zakres usług i zachęcić do rezerwacji wizyty.
            </li>
            <li>
              <strong>Dla organizatorów wydarzeń,</strong> szkoleń i konferencji, którzy potrzebują materiału informacyjnego z kluczowymi danymi: gdzie, kiedy i jak się zapisać.
            </li>
            <li>
              <strong>Dla firm łączących offline z online,</strong> które chcą, aby ulotka kierowała na stronę www, landing page lub profil w mediach społecznościowych (np. QR kod + krótkie CTA).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu ulotki?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Więcej wejść na stronę lub profil,</strong> bo klient otrzymuje jasny adres, QR kod i prostą instrukcję, co zrobić w kolejnym kroku.
            </li>
            <li>
              <strong>Więcej telefonów i zapytań z lokalnego rynku,</strong> szczególnie przy dobrze zaplanowanej dystrybucji w miejscach odwiedzanych przez Twoją grupę docelową.
            </li>
            <li>
              <strong>Większa rozpoznawalność marki offline,</strong> bo logo, kolory i kluczowy komunikat powtarzają się na ulotce, stronie i innych materiałach.
            </li>
            <li>
              <strong>Lepsze wsparcie kampanii online,</strong> gdy ulotka jest przedłużeniem reklamy w Google Ads, Meta Ads lub działań w mediach społecznościowych, a nie osobnym komunikatem.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt ulotki - przykładowe pakiety"
          subtitle="Zakres dopasowany do kampanii i budżetu"
          plans={[
            {
              name: 'Pakiet Start - prosta ulotka jednostronna',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują jednej, czytelnej ulotki z najważniejszą ofertą i kontaktem.',
              features: [
                'Krótki brief o ofercie, celu kampanii i grupie docelowej',
                'Projekt jednostronnej ulotki (np. A5 lub DL)',
                'Dopasowanie nagłówków, treści i CTA do konkretnego działania',
                'Plik gotowy do druku + wersja cyfrowa (PNG/JPG)',
                'Jedna runda poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - ulotka dwustronna lub kilka wersji',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą zmieścić więcej treści, cennik, kilka usług lub przygotować dwie wersje dla różnych odbiorców.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Projekt ulotki dwustronnej (np. oferta + korzyści + dane kontaktowe)',
                'Możliwość przygotowania dwóch wersji (np. różne lokalizacje lub grupy docelowe)',
                'Lepsze rozplanowanie treści z podziałem na sekcje',
                'Dwie rundy poprawek w cenie',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - ulotka w kampanii i systemie materiałów',
              price: 'wycena indywidualna',
              description: 'Dla firm, które traktują ulotkę jako element większej kampanii i chcą, aby spójnie łączyła się z wizytówkami, plakatami i stroną www.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Rekomendacje dotyczące formatu, nakładu i papieru pod konkretną kampanię',
                'Projekt ulotki spójny z pozostałymi materiałami (wizytówki, plakaty, roll-upy)',
                'Propozycja integracji z kampaniami online (np. QR kody, dedykowane landing pages)',
                'Wsparcie przy przygotowaniu plików zgodnie z wymaganiami drukarni',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Zakres, format i liczbę wersji dopasowujemy indywidualnie - po briefie otrzymasz konkretną wycenę i harmonogram prac."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <ContactForm
          title="Zamów projekt ulotki"
          description="Opisz, czym się zajmujesz i co chcesz przedstawić na swojej ulotce. Na tej podstawie przygotujemy wycenę, termin i rekomendacje"
          defaultSubject="Projekt ulotki"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-ulotki"
          title="Najczęstsze pytania o projekt ulotki"
          items={[
            {
              question: 'Ile kosztuje projekt ulotki?',
              answer: 'Cena projektu ulotki zależy od formatu, liczby wersji i objętości treści. Po krótkim zapoznaniu z Twoimi potrzebami i Twoją ofertą, przygotujemy indywidualną wycenę.',
            },
            {
              question: 'Jak długo trwa projektowanie ulotki?',
              answer:
                'Przy standardowym zakresie czas realizacji wynosi zwykle od 3 do 4 dni roboczych. Większe projekty z wieloma wersjami lub szerszym zakresem treści mogą wymagać dłuższego terminu - ustalamy go indywidualnie.',
            },
            {
              question: 'W jakich formatach otrzymam ulotkę?',
              answer:
                'Dostarczamy pliki do druku (PDF ze spadami i odpowiednią rozdzielczością) oraz wersje do internetu (PNG, JPG). W razie potrzeby dopasowujemy pliki do wymagań konkretnej drukarni.',
            },
            {
              question: 'Czy mogę zgłosić poprawki do ulotki?',
              answer:
                'Tak, w cenie każdego projektu przewidujemy rundy poprawek. Wspólnie dopracowujemy układ, kolory i treści tak długo, aż ulotka będzie czytelna, estetyczna i spójna z Twoją marką.',
            },
            {
              question: 'Czy projekt ulotki będzie gotowy do druku?',
              answer: 'Tak, pliki przygotowujemy zgodnie z wymaganiami druku: odpowiednia rozdzielczość, kolory, spady i marginesy bezpieczeństwa. Możesz przekazać je bezpośrednio do drukarni.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Z czym najlepiej połączyć projekt ulotki?"
          subtitle="Zobacz też"
          description="Ulotka jest często jednym z kilku materiałów, które pracują na rozpoznawalność Twojej firmy. Najlepszy efekt osiągniesz, budując spójność wszystkich materiałów."
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Projekt wizytówki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Zadbaj o to, aby osoba, która spotkała się z Tobą osobiście, chętniej skontaktowała się z Tobą ponownie.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-wizytowki">
                      Zobacz projekt wizytówki
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Katalog z ofertą',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Jeśli Twoje usługi są bardziej rozbudowane, warto rozważyć stworzenie katalogu, w którym pokażesz szczegóły, zdjęcia czy też swoje realizacje.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-katalogu">
                      Zobacz projekt katalogu
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj pozostałe usługi Arteon"
          items={[
            {
              icon: <RiPantoneLine className="h-6 w-6" />,
              title: 'Identyfikacja wizualna',
              description: 'Spójna tożsamość marki od A do Z',
              size: 'large',
              backgroundImage: '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              icon: <RiIdCardLine className="h-6 w-6" />,
              title: 'Projekt wizytówki',
              description: 'Elegancka wizytówka dla Twojej firmy',
              size: 'medium',
              backgroundImage: '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              icon: <RiComputerLine className="h-6 w-6" />,
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka w sieci',
              size: 'small',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Sprawdź',
              btnLink: '/uslugi/strony-internetowe',
            },
            {
              icon: <RiArticleLine className="h-6 w-6" />,
              title: 'Projekt katalogu',
              description: 'Rozbudowana prezentacja oferty',
              size: 'small',
              backgroundImage: '/assets/projects/gazetka-mockup.webp',
              btnLabel: 'Sprawdź',
              btnLink: '/uslugi/projekty-graficzne/projekt-katalogu',
            },
          ]}
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Wypromuj swoją ofertę"
        description="Zaprojektujemy ulotkę, która przyciąga wzrok i prowadzi prosto do kontaktu i sprzedaży."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
