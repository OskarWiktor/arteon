import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiTicket2Line, RiGiftLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
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
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';

export const metadata = {
  title: 'Kupony rabatowe i vouchery | Arteon',
  description: 'Projektujemy kupony rabatowe i vouchery prezentowe gotowe do druku wraz z wersją online. Zrealizuj z nami swój pomysł.',
  alternates: {
    canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
  },
  openGraph: {
    title: 'Kupony rabatowe i vouchery | Arteon',
    description: 'Projektujemy kupony rabatowe i vouchery prezentowe gotowe do druku wraz z wersją online. Zrealizuj z nami swój pomysł.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp', width: 1200, height: 630 }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
    serviceName: 'Kupony rabatowe i vouchery',
    description: 'Projekt kuponów rabatowych i voucherów prezentowych: elegancka forma, pliki gotowe do druku oraz wersje cyfrowe.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-kupony-rabatowe-vouchery" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignCouponsAndVouchersPage() {
  return (
    <>
      <HeroBanner
        title="Kupony rabatowe i vouchery"
        description={
          <>Zachęć klientów do powrotu i zbuduj lojalność dzięki estetycznym voucherom i kuponom. Projektujemy materiały promocyjne gotowe do druku i wersji online - spójne z Twoją marką.</>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp"
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
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera`,
          label: 'Kupony rabatowe i vouchery',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Przykładowe realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Dlaczego warto inwestować w kupony i vouchery?">
          <p>
            <strong>Kupon oraz voucher to drobny materiał, który potrafi przynieść duży efekt.</strong> Daje pretekst do kontaktu, zakupów i powrotu klienta. Estetyczny projekt buduje pozytywne
            emocje, wyróżnia markę i wzmacnia profesjonalny wizerunek.
          </p>

          <br />

          <p>
            <strong>Vouchery prezentowe zwiększają sprzedaż i zasięg.</strong> Dobrze zaprojektowany voucher staje się eleganckim prezentem - klienci sami wręczają go innym, a Twoja marka pojawia się
            w nowych kręgach.
          </p>

          <br />

          <p>
            <strong>Odpowiednio zaprojektowane kupony i vouchery robią trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Zwiększają szansę na powrót klienta,</li>
            <li>Wzmacniają więź i budują pozytywne skojarzenia z marką,</li>
            <li>Promują firmę poprzez estetykę, emocje i „efekt prezentu”.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co otrzymasz w ramach projektu?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasujemy projekt do Twojej kolorystyki, logo i tonu komunikacji, dzięki czemu voucher będzie spójnym elementem Twojej marki.</>,
              icon: <IoColorPalette className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz gotowe pliki do druku oraz wersje cyfrowe - do mediów społecznościowych, mailingu lub sklepu internetowego.</>,
              icon: <RiFileTextLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Czytelne pola i zasady wykorzystania',
              description: <>Zaprojektujemy odpowiednie pola na datę ważności, kod, podpis czy regulamin tak, aby voucher był piękny i praktyczny.</>,
              icon: <RiTicket2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Warianty na różne okazje',
              description: <>Możemy przygotować serię voucherów: urodzinowe, świąteczne, okazjonalne - z zachowaniem jednego spójnego stylu.</>,
              icon: <RiGiftLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo są kupony rabatowe i vouchery?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla salonów beauty, fryzjerów, SPA,</strong> które chcą zachęcić klientów do kolejnej wizyty lub podarowania kuponu bliskim.
            </li>
            <li>
              <strong>Dla sklepów stacjonarnych i online,</strong> które chcą wręczać bony i kupony rabatowe na zakupy.
            </li>
            <li>
              <strong>Dla restauracji i kawiarni,</strong> które chcą oferować vouchery na degustacje, kolacje lub konkretne zestawy.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu kuponów i voucherów?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Więcej powrotów klientów,</strong> bo mają konkretny powód, by ponownie skorzystać z Twojej usługi.
            </li>
            <li>
              <strong>Więcej poleceń,</strong> dzięki voucherom prezentowym, które Twoi klienci wręczają rodzinie i znajomym.
            </li>
            <li>
              <strong>Spójniejszy wizerunek,</strong> gdy każdy materiał - od wizytówki po voucher - wygląda na część jednego systemu.
            </li>
            <li>
              <strong>Łatwiejsza komunikacja promocji,</strong> bo wszystkie warunki i zasady są czytelnie pokazane na projekcie.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Kupony rabatowe i vouchery - przykładowe pakiety"
          plans={[
            {
              name: 'Kupon rabatowy / voucher dwustronicowy',
              price: '250 zł',
              description: 'Dla firm, które potrzebują jednego, prostego vouchera na konkretną usługę.',
              features: [
                'Projekt vouchera lub kuponu spójny z wizerunkiem marki',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
                'Pliki do druku i wersja cyfrowa (PNG/JPG)',
                'Realizacja w 3-4 dni',
              ],
              btnOne: 'Zamów kupon dwustronicowy',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Kupon rabatowy / voucher otwierany - 4-stronicowy',
              price: '350 zł',
              description: 'Dla firm, które potrzebują kuponu rabatowego na bardziej rozbudowaną usługę',
              features: [
                'Projekt rozkładanego vouchera lub kuponu spójny z wizerunkiem marki',
                '2 kierunki wyglądu i jedna runda korekt po pierwszej prezentacji',
                'Pliki do druku i wersja cyfrowa (PNG/JPG)',
                'Realizacja w 4-5 dni',
              ],
              btnOne: 'Zamów kupon 4-stronicowy',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet kuponów / voucherów',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą spójnych kuponów na różne okazje np. święta, urodziny czy walentynki',
              features: [
                'Kilka wariantów kuponów / voucherów w jednej linii stylistycznej na różne okazje',
                '3 kierunki wyglądu i dwie rundy poprawek po pierwszej prezentacji',
                'Pliki do druku i wersja cyfrowa (PNG/JPG)',
                'Realizacja w 6-10 dni',
              ],
              btnOne: 'Zamów pakiet kuponów',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Podane kwoty są kwotami końcowymi, podanymi na fakturze. Ostateczna wycena zależy m.in. od liczby wariantów, formatu i indywidualnych potrzeb."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji kuponu lub vouchera"
          description="Napisz co chcesz przedstawić na kuponie, ile wariantów potrzebujesz oraz czy posiadasz logo - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp"
          imageAlt="Realizacja projektu kuponu rabatowego"
          defaultSubject="Projekt kuponów i voucherów"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera"
          title="Najczęstsze pytania dotyczące projektów kuponów i voucherów"
          items={[
            {
              question: 'W jakich formatach przygotowujecie kupony rabatowe?',
              answer: 'Najczęściej projektujemy kupony i vouchery w formacie DL lub A6, ale możemy dopasować wymiary do Twoich indywidualnych potrzeb i wymagań.',
            },
            {
              question: 'Jak długo trwa realizacja projektu kuponów lub voucherów?',
              answer: 'Standardowo realizujemy projekt w ciągu 3-6 dni roboczych, w zależności od liczby wariantów oraz formatu. Terminy ustalamy indywidualnie przed startem prac.',
            },
            {
              question: 'Czy mogę zlecić przygotowanie całej akcji promocyjnej?',
              answer: 'Tak, możemy zaprojektować kupony oraz materiały wspierające (posty, grafiki na stronę, media społecznościowe czy ulotki).',
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
              title: 'Karty lojalnościowe',
              description: 'Program lojalności dla stałych klientów',
              size: 'medium',
              backgroundImage: '/assets/blog/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje/czym-jest-social-proof-i-dlaczego-opinie-innych-wplywaja-na-nasze-decyzje.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej',
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
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getArticlePreviewsByCategory('grafika', 6)} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Wzmocnij sprzedaż swoich usług"
        description="Zaprojektujemy vouchery i kupony, które zachęcą klientów do powrotu i poleceń."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
