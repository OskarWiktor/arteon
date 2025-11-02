import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
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
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiFileTextLine } from 'react-icons/ri';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';

export const metadata = {
  title: 'Kupony rabatowe i vouchery | Arteon',
  description: 'Projektujemy kupony rabatowe i vouchery prezentowe gotowe do druku wraz z wersją online. Zrealizuj z nami swój pomysł.',
  keywords: ['projekt kuponu rabatowego', 'projekt vouchera', 'voucher prezentowy', 'kupony dla klientów', 'projekt do druku voucher'],
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera' },
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
        description={<>Zachęć klientów do powrotu i zbuduj lojalność dzięki estetycznym voucherom i kuponom. Projektujemy materiały promocyjne gotowe do druku.</>}
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
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera`, label: 'Kupony rabatowe i vouchery' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto inwestować w kupony i vouchery?">
          <p>
            <strong>Kupon oraz voucher to drobny projektowy detal, który przynosi duży efekt.</strong> Daje pretekst do kontaktu, zakupów i powrotu klienta. Estetyczny projekt buduje pozytywne emocje,
            wyróżnia markę i buduje profesjonalny wizerunek.
          </p>

          <br />

          <p>
            <strong>Vouchery prezentowe zwiększają sprzedaż.</strong> Odpowiednia grafika i komunikat sprawiają, że klienci sami pokazują voucher innym, dzięki czemu zyskujesz dodatkową promocję.
          </p>

          <br />

          <p>
            <strong>Odpowiednio zaprojektowane kupony robią trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Zwiększają szansę klienta na powrót,</li>
            <li>Wzmacniają więź z klientem,</li>
            <li>Promują markę poprzez estetykę i emocje.</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co otrzymasz w ramach projektu?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójność z identyfikacją marki',
              description: <>Dopasujemy projekt do Twojej kolorystyki, logo i tonu komunikacji, dzięki czemu voucher będzie z Tobą współgrał.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Wersje do druku i online',
              description: <>Otrzymasz gotowe pliki do druku oraz wersję cyfrową do publikacji w social mediach.</>,
              icon: <RiFileTextLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Przykładowe realizacje kuponów i voucherów" category="grafika" subtitle="Portfolio" />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap size="sm" />

        <ContactForm
          title="Zamów projekt voucherów lub kuponów"
          description="Opisz czym się zajmujesz a my przygotujemy propozycję projektu z wyceną i terminem realizacji."
          defaultSubject="Projekt kuponów i voucherów"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera"
          title="Najczęstsze pytania dotyczące kuponów i voucherów"
          items={[
            {
              question: 'W jakich formatach przygotowujecie kupony?',
              answer: 'Najczęściej przygotowujemy je w formacie DL, możemy również dopasować projekt do Twoich indywidualnych potrzeb.',
            },
            {
              question: 'Czy mogę zamówić kupon w wersji cyfrowej?',
              answer: 'Tak, możemy przygotować wersje do mailingu, publikacji w social mediach czy też wersję z kodem QR.',
            },
            {
              question: 'Jak długo trwa realizacja?',
              answer: 'Standardowo realizujemy projekt od 3 do 7 dni roboczych, w zależności od liczby wariantów oraz formatu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zwiększ profesjonalny wizerunek przez estetyczne kupony"
        description="Zaprojektujemy voucher lub kupon, które zachęci klientów do powrotu."
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
