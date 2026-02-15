import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiVipCrownLine, RiCoupon2Line, RiPencilRuler2Line, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { IoColorPalette } from 'react-icons/io5';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt karty lojalnościowej | Arteon',
  description: 'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  openGraph: {
    title: 'Projekt karty lojalnościowej | Arteon',
    description: 'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
    serviceName: 'Projekt karty lojalnościowej',
    description: 'Projekt karty lojalnościowej dla salonów, kawiarni, butików i siłowni. Plik do druku + szablon cyfrowy.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-karty-lojalnosciowej" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignLoyaltyCardPage() {
  return (
    <>
      <HeroBanner
        title="Projekt karty lojalnościowej"
        description={<>Projektujemy czytelne karty lojalnościowe dla firm usługowych i handlowych. Karty wspierają sprzedaż i porządkują zasady programu lojalnościowego.</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiVipCrownLine />, label: 'Programy dopasowane do branży' },
          { icon: <RiPencilRuler2Line />, label: 'Spójny wizerunek marki' },
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

        <ProjectsCarousel title="Przykładowe projekty graficzne" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Dlaczego warto zainwestować w karty lojalnościowe?">
          <p>
            <strong>Karty lojalnościowe realnie zwiększają liczbę powracających klientów.</strong> Narzędzie marketingowe, które wzmacnia lojalność klientów: „wracam do tej firmy, bo dzięki temu mam
            dodatkowe korzyści". W efekcie zwiększa się częstotliwość wizyt oraz średnia wartość zakupu.
          </p>

          <br />

          <p>
            <strong>Estetyka ma znaczenie.</strong> Dobrze zaprojektowana karta staje się spójną częścią wizerunku firmy - wygląda profesjonalnie, budzi pozytywne emocje i nie „ginie” w portfelu.
            Klient chętniej ją zachowuje i częściej o niej pamięta.
          </p>

          <br />

          <p>
            <strong>Dobra karta lojalnościowa robi trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Motywuje do powrotu poprzez jasne i atrakcyjne nagrody,</li>
            <li>Wzmacnia więź klienta z marką i ułatwia budowanie zaufania,</li>
            <li>Promuje firmę dzięki estetycznej formie, którą klient nosi często przy sobie.</li>
          </ul>

          <br />

          <p>Z perspektywy biznesu to jeden z najtańszych sposobów na podniesienie przychodów - zamiast szukać nowych klientów, zatrzymujesz na dłużej tych, którzy już znają Twoją markę.</p>
        </SectionInfo>

        <Gap variant="line" />

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
              icon: <RiVipCrownLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Kolory, typografia i detale dopasowujemy do Twojej identyfikacji wizualnej. Karta naturalnie uzupełnia pozostałe materiały i wzmacnia profesjonalny wizerunek firmy.</>,
              icon: <IoColorPalette className="text-primary h-6 w-6" />,
            },
            {
              title: 'Gotowość do druku',
              description: (
                <>Dostarczamy pliki w formacie gotowym do druku, z odpowiednimi spadami i specyfikacją dla drukarni. Możesz od razu zamówić nakład bez dodatkowych przeróbek technicznych.</>
              ),
              icon: <RiFileTextLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Numeracje i pola pieczątek',
              description: <>Projektujemy czytelne pola na pieczątki, podpisy i oznaczenia nagród. Dzięki temu obsługa programu jest prosta dla zespołu i zrozumiała dla klientów.</>,
              icon: <RiCoupon2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest karta lojalnościowa?" subtitle="Kiedy ten projekt szybko się zwraca?">
          <p>
            Projekt karty lojalnościowej szczególnie opłaca się tam, gdzie kluczowe jest, aby klient wracał regularnie - kilka lub kilkanaście razy w roku. Oto kilka branż, w których posiadanie karty
            lojalnościowej przynosi najlepsze efekty:
          </p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Salony beauty, fryzjerzy, barberzy</li>
            <li>Kawiarnie i lokale gastronomiczne</li>
            <li>Siłownie, studia treningowe, zajęcia grupowe</li>
            <li>Butiki, sklepy stacjonarne</li>
            <li>Gabinety usług specjalistycznych</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt karty lojalnościowej - przykładowe zakresy"
          plans={[
            {
              name: 'Karta lojalnościowa w formie wizytówki',
              price: '250 zł',
              description: 'Dla salonu, kawiarni lub butiku, który chce wprowadzić prosty i czytelny program lojalnościowy',
              features: [
                'Konsultacja założeń programu (liczba pól, rodzaj nagrody)',
                'Projekt karty w formacie wizytówki',
                'Spójność z Twoją identyfikacją wizualną',
                'Plik gotowy do druku',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
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
                'Plik gotowy do druku',
                'Ustalenie kierunku i indywidualnie ustalone rundy korekt',
              ],
              btnOne: 'Porozmawiajmy o kartach dla sieci',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Program lojalnościowy z dodatkowymi materiałami',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą oprócz karty mieć także wsparcie materiałami POS - np. plakaty, stojaczki, grafiki do mediów społecznościowych.',
              features: [
                'Projekt kart lojalnościowych',
                'Dodatkowe materiały informujące o programie (np. plakat, naklejka, grafika do mediów społecznościowych)',
                'Spójna linia wizualna programu',
                'Plik gotowy do druku',
                'Ustalenie kierunku i indywidualnie ustalone rundy korekt',
              ],
              btnOne: 'Zbudujmy pełny program lojalnościowy',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby wariantów kart, liczby lokalizacji, oczekiwanych materiałów dodatkowych i stopnia skomplikowania programu. Po krótkim briefie przygotujemy konkretną propozycję zakresu i terminów."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji karty lojalnościowej"
          description="Napisz jak chcesz nagradzać klientów, ile wariantów potrzebujesz oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp"
          imageAlt="Realizacja projektu karty lojalnościowej"
          defaultSubject="Projekt karty lojalnościowej"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej"
          title="Najczęstsze pytania dotyczące projektów kart lojalnościowych"
          items={[
            {
              question: 'W jakich formatach wykonujecie karty?',
              answer: 'Najczęściej przygotowujemy karty lojalnościowe w formacie wizytówki (85 x 55 mm). Jeśli potrzebujesz innego formatu, dopasujemy projekt.',
            },
            {
              question: 'Czy mogę dodać logo i kolory marki na kartę lojalnościową?',
              answer: 'Tak, projekt zawsze opiera się na Twoim dotychczasowym wizerunku. Korzystamy z logo, kolorów i stylu identyfikacji wizualnej, aby zachować pełną spójność materiałów.',
            },
            {
              question: 'Jak długo trwa realizacja kart lojalnościowych?',
              answer: 'Standardowo przygotowanie projektu trwa od 3 do 5 dni roboczych. Przy większej liczbie wariantów termin ustalamy indywidualnie.',
            },
            {
              question: 'Czy mogę zamówić serię różnych kart lojalnościowych?',
              answer:
                'Tak, możemy przygotować serię spójną wizualnie dla wielu punktów, lokalizacji lub marek partnerskich - program pozostaje łatwy do zrozumienia, a jednocześnie dopasowany do konkretnych miejsc.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Identyfikacja wizualna',
              description: 'Spójna tożsamość marki od A do Z',
              size: 'large',
              backgroundImage: '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Kupony i vouchery',
              description: 'Nagradzaj lojalnych klientów dodatkowymi bonusami',
              size: 'medium',
              backgroundImage: '/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
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
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka w sieci',
              size: 'small',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zwiększ lojalność swoich klientów"
        description="Zaprojektujemy karty, które sprawią, że klienci będą wracać jeszcze częściej."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
