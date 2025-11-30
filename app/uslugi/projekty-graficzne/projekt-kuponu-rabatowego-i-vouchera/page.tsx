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
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine, RiTicket2Line, RiGiftLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Kupony rabatowe i vouchery | Arteon',
  description: 'Projektujemy kupony rabatowe i vouchery prezentowe gotowe do druku wraz z wersją online. Zrealizuj z nami swój pomysł.',
  alternates: {
    canonical: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
  },
  openGraph: {
    title: 'Kupony rabatowe i vouchery | Arteon',
    description: 'Projektujemy kupony rabatowe i vouchery prezentowe gotowe do druku wraz z wersją online. Zrealizuj z nami swój pomysł.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
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

export default function OfferDesignVoucheryPage() {
  return (
    <>
      <HeroBanner
        title="Kupony rabatowe i vouchery"
        description={
          <>Zachęć klientów do powrotu i zbuduj lojalność dzięki estetycznym voucherom i kuponom. Projektujemy materiały promocyjne gotowe do druku i wersji online - spójne z Twoją marką.</>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        buttonSecond="Realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.png"
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

        {/* 1. Dlaczego – sens i wartość */}
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
            <strong>Odpowiednio zaprojektowane kupony robią trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Zwiększają szansę na powrót klienta,</li>
            <li>Wzmacniają więź i budują pozytywne skojarzenia z marką,</li>
            <li>Promują firmę poprzez estetykę, emocje i „efekt prezentu”.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        {/* 2. Co dostajesz – standard pracy */}
        <FeatureGrid
          title="Co otrzymasz w ramach projektu?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasujemy projekt do Twojej kolorystyki, logo i tonu komunikacji, dzięki czemu voucher będzie naturalnym przedłużeniem Twojej marki.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz gotowe pliki do druku oraz wersje cyfrowe - do social mediów, mailingu lub sklepów internetowych.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Czytelne pola i zasady wykorzystania',
              description: <>Zaprojektujemy pola na datę ważności, kod, podpis czy regulamin tak, aby voucher był piękny i jednocześnie praktyczny.</>,
              icon: <RiTicket2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Warianty na różne okazje',
              description: <>Możemy przygotować serię voucherów: urodzinowe, świąteczne, okazjonalne - z zachowaniem jednego stylu i rozpoznawalności.</>,
              icon: <RiGiftLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        {/* 3. Dla kogo – filtr i dopasowanie */}
        <SectionInfo title="Dla kogo są kupony rabatowe i vouchery?" subtitle="Dla kogo">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Dla salonów beauty, fryzjerów, SPA,</strong> które chcą zachęcić klientów do kolejnej wizyty lub sprzedaży prezentów bliskim.
            </li>
            <li>
              <strong>Dla gabinetów i specjalistów,</strong> którzy chcą elegancko zapakować usługi w formie bonu prezentowego.
            </li>
            <li>
              <strong>Dla sklepów stacjonarnych i online,</strong> które chcą wręczać bony wartościowe i kupony rabatowe po zakupie.
            </li>
            <li>
              <strong>Dla restauracji i kawiarni,</strong> które chcą oferować vouchery na degustacje, kolacje lub konkretne zestawy.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        {/* 4. Efekty po wdrożeniu */}
        <SectionInfo title="Jakie efekty możesz zobaczyć po wdrożeniu kuponów i voucherów?" subtitle="Efekty po wdrożeniu">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Więcej powrotów klientów,</strong> bo mają konkretny powód, by pojawić się ponownie w Twoim biznesie.
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

        {/* 5. Proof – realizacje + opinie */}
        <ProjectsOverview title="Przykładowe realizacje kuponów i voucherów" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        {/* 6. Pakiety / ceny */}
        <SectionPrices
          title="Kupony rabatowe i vouchery - przykładowe pakiety"
          subtitle="Zakres dopasowany do Twojej oferty"
          plans={[
            {
              name: 'Pakiet Start - pojedynczy voucher',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują jednego, dopracowanego wzoru kuponu lub vouchera na konkretną usługę.',
              features: ['Krótkie konsultacje i brief online', 'Jeden wzór vouchera lub kuponu', 'Dopasowanie do istniejącej identyfikacji', 'Pliki do druku i wersja cyfrowa (PNG/JPG)'],
              btnOne: 'Zamów wycenę pakietu Start',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Standard - seria voucherów',
              price: 'wycena indywidualna',
              description: 'Dla firm, które chcą mieć kilka spójnych wariantów: różne wartości, okazje lub rodzaje usług.',
              features: [
                'Wszystko z pakietu Start, a dodatkowo:',
                'Kilka wariantów kuponów / voucherów w jednej linii stylistycznej',
                'Możliwość różnicowania wartości lub usług',
                'Wersje do social mediów i mailingu',
              ],
              btnOne: 'Zamów wycenę pakietu Standard',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Pakiet Pro - system lojalnościowy',
              price: 'wycena indywidualna',
              description: 'Dla marek, które chcą spójnego systemu: karty stałego klienta, vouchery, kupony okresowe i materiały wspierające.',
              features: [
                'Wszystko z pakietu Standard, a dodatkowo:',
                'Projekt karty stałego klienta lub programu lojalnościowego',
                'Spójny zestaw materiałów (voucher, kupon, karta, mini-plakat)',
                'Rekomendacje, jak komunikować promocje i zasady programu',
              ],
              btnOne: 'Porozmawiajmy o pakiecie Pro',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby wariantów, formatów i tego, czy projekt ma być elementem szerszego systemu materiałów. Po krótkim briefie przygotujemy dopasowaną, klarowną propozycję."
        />

        <Gap variant="line" />

        {/* 7. Proces – jak to wygląda krok po kroku */}
        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        {/* 8. FAQ – obiekcje i szczegóły */}
        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera"
          title="Najczęstsze pytania dotyczące kuponów i voucherów"
          items={[
            {
              question: 'W jakich formatach przygotowujecie kupony?',
              answer: 'Najczęściej projektujemy formaty takie jak DL lub A6, ale możemy dopasować wymiary do Twoich indywidualnych potrzeb i wymagań drukarni.',
            },
            {
              question: 'Czy mogę zamówić kupon w wersji cyfrowej?',
              answer: 'Tak - przygotowujemy wersje do mailingu, social mediów oraz pliki z miejscem na kod rabatowy lub QR, które możesz wykorzystać w systemach sprzedażowych.',
            },
            {
              question: 'Jak długo trwa realizacja projektu kuponów lub voucherów?',
              answer: 'Standardowo realizujemy projekt w ciągu 3-7 dni roboczych, w zależności od liczby wariantów oraz formatu. Terminy ustalamy indywidualnie przed startem prac.',
            },
            {
              question: 'Czy mogę zlecić przygotowanie całej akcji promocyjnej?',
              answer: 'Tak - możemy zaprojektować kupony, vouchery oraz materiały wspierające (posty, grafiki na stronę, ulotki). Dzięki temu promocja będzie spójna i zrozumiała dla klientów.',
            },
          ]}
        />

        <Gap variant="line" />

        {/* 9. Kontakt – główne CTA po rozwianiu wątpliwości */}
        <ContactForm
          title="Zamów projekt voucherów lub kuponów"
          description="Opisz, czym się zajmujesz, na jaki rodzaj usług lub produktów chcesz przygotować kupony i vouchery oraz w jakiej formie będą rozdawane (druk, online, social media). Na tej podstawie przygotujemy propozycję projektu, wycenę i termin realizacji."
          defaultSubject="Projekt kuponów i voucherów"
        />

        <Gap variant="line" />

        {/* 10. Cross-sell – co dalej / z czym połączyć */}
        <SectionSteps
          title="Z czym najlepiej połączyć kupony i vouchery?"
          subtitle="Zobacz też"
          description="Kupony i vouchery działają jeszcze lepiej, gdy są częścią szerszej komunikacji. Możesz od razu połączyć je z innymi materiałami graficznymi."
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Ulotki i plakaty informujące o promocji',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ulotki i plakaty pomagają dotrzeć z informacją o voucherach do większej liczby osób - w lokalu i poza nim.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-ulotki">
                      Zobacz projekty ulotek
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <IoColorPalette className="h-8 w-8" />,
              title: 'Szablony postów do social mediów',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Spójne grafiki na Instagram i Facebook wzmacniają komunikację promocji i zachęcają do wykorzystania vouchera.</p>
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
        title="Zwiększ profesjonalny wizerunek przez estetyczne kupony"
        description="Zaprojektujemy vouchery i kupony, które zachęcą klientów do powrotu i poleceń."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.png"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
