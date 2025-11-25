import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiBarChart2Fill,
  RiBookOpenLine,
  RiCustomerService2Line,
  RiBrushLine,
  RiTeamLine,
  RiArticleLine,
  RiChatQuoteLine,
  RiFileSearchLine,
  RiPencilRuler2Line,
  RiShareForwardLine,
  RiFilePdfLine,
  RiFileTextLine,
  RiPencilLine,
  RiShoppingCartLine,
} from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoSparkles } from 'react-icons/io5';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/tworzenie-tresci',
    serviceName: 'Tworzenie treści',
    description: 'Treści dla stron, sklepów i blogów: oferty, artykuły, opisy produktów i microcopy — pod intencje użytkownika i SEO.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-tworzenie-tresci" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export const metadata = {
  title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
  description: 'Klarowne teksty dopasowane do odbiorcy. Artykuły, opisy i treści sprzedażowe, które budują widoczność i zaufanie.',
  keywords: ['teksty na stronę', 'copywriting', 'opisy produktów', 'artykuły eksperckie', 'treści sprzedażowe', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/tworzenie-tresci' },
  openGraph: {
    title: 'Tworzenie treści - strony, blogi, e-commerce | Arteon',
    description: 'Klarowne teksty dopasowane do odbiorcy. Artykuły, opisy i treści sprzedażowe, które budują widoczność i zaufanie.',
    url: 'https://www.arteonagency.pl/uslugi/tworzenie-tresci',
    type: 'website',
  },
} as const;

export default function OfferContentPage() {
  return (
    <>
      <HeroBanner
        title="Tworzenie treści"
        description={<>Przyciągnij nowych klientów poprzez treści, które trafiają idealnie do wymarzonych odbiorców</>}
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiBarChart2Fill />, label: 'Treści pod sprzedaż' },
          { icon: <RiBookOpenLine />, label: 'Spójny język marki' },
          { icon: <RiBrushLine />, label: 'Perfekcja detalu' },
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
        ]}
      />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/tworzenie-tresci`, label: 'Tworzenie treści' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <FeatureGrid
          title="Co zyskujesz tworząc treści z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Treści pod SEO - widoczność w Google',
              icon: <RiFileSearchLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Redakcja treści sprzedażowych i marketingowych',
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Język marki - spójny ton komunikacji',
              icon: <RiChatQuoteLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Treści budujący emocje i transformację klienta',
              icon: <IoSparkles className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Artykuły i wpisy eksperckie na bloga',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Scenariusze do rolek i social mediów',
              icon: <RiShareForwardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Opisy produktów wspierające SEO',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Treści dopasowane do archetypu i wartości marki',
              icon: <RiTeamLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Oferta Tworzenia treści"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Strony www',
              subtitle: 'od 600 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Piszemy treści, które jasno przedstawiają ofertę</li>
                    <li>Układamy strukturę, by prowadziła odbiorcę krok po kroku</li>
                    <li>Dostosowujemy język do Twojej branży i klientów</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Wyceń treści do strony
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Artykuły eksperckie',
              subtitle: 'od 300 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Przygotowujemy artykuły eksperckie i edukacyjne</li>
                    <li>Optymalizujemy je pod SEO, by wzmacniały widoczność</li>
                    <li>Planujemy publikacje, by utrzymać regularność i wspomóc SEO</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zamów artykuły
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShoppingCartLine className="h-8 w-8" />,
              title: 'E-commerce: opisy',
              subtitle: 'od 40 zł / szt.',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Piszemy opisy produktów pokazujące korzyści</li>
                    <li>Tworzymy krótkie treści do szybkich decyzji zakupowych</li>
                    <li>Przygotowujemy rozbudowane opisy premium dla produktów wyższej klasy</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Wyceń treści do sklepu
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: 'Social media: treści',
              subtitle: 'od 30 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Przygotowujemy posty, które zatrzymują uwagę i reakcje</li>
                    <li>Piszemy scenariusze z jasnym wezwaniem do działania</li>
                    <li>Układamy scenariusze rolek pod większe zasięgi</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Zamów copy do social
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFilePdfLine className="h-8 w-8" />,
              title: 'Oferty i case studies',
              subtitle: 'od 400 zł',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Projektujemy oferty sprzedażowe podkreślające Twoją wartość</li>
                    <li>Opracowujemy case studies pokazujące efekty współpracy</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Poproś o ofertę PDF
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPencilLine className="h-8 w-8" />,
              title: 'Korekta i redakcja',
              subtitle: 'wycena indywidualna',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4 text-sm">
                    <li>Poprawiamy błędy językowe i stylistyczne</li>
                    <li>Ujednolicamy format, ton i układ treści</li>
                    <li>Dostosowujemy teksty pod SEO dla lepszej widoczności</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="#kontakt">
                      Prześlij tekst do korekty
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="content" />

        <Gap size="sm" />

        <ContactForm title="Stwórzmy treści, które sprzedają" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę tworzenia treści" defaultSubject="Treści" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/tworzenie-tresci"
          items={[
            {
              question: 'Ile czasu trwa przygotowanie treści?',
              answer: 'Standardowo od 2 do 10 dni roboczych - zależnie od długości, złożoności i naszej bieżącej dostępności',
            },
            {
              question: 'Czy treści są unikalne i pisane ręcznie?',
              answer: 'Tak, wszystkie treści tworzymy indywidualnie',
            },
            {
              question: 'Czy możemy mieć wpływ na styl i język treści?',
              answer: 'Oczywiście. Na początku wspólnie ustalamy ton komunikacji i dostosowujemy treści do Twojej marki oraz grupy docelowej',
            },
            {
              question: 'Czy oferujecie też korektę i redakcję istniejących treści?',
              answer: 'Tak, poprawiamy i przekształcamy obecne treści tak, aby były bardziej przekonujące, poprawne językowo i dopasowane do celów marketingowych',
            },
            {
              question: 'Czy treści są zoptymalizowane pod SEO?',
              answer: 'Tak, tworzymy je z uwzględnieniem fraz kluczowych, struktury nagłówków i zasad SEO copywritingu - tak, aby dobrze wypadały w Google',
            },
            {
              question: 'Czy mogę zlecić regularne przygotowanie treści (np. co miesiąc)?',
              answer: 'Tak, możliwa jest stała współpraca abonamentowa - np. comiesięczne artykuły, newslettery lub pakiety treści',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Stwórzmy treści, które działają jak magnez"
        description="Tworzymy treści, które trafiają do ludzi oraz algorytmów, wspierając sprzedaż"
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg6.webp"
        overlay="black"
      />
      <ServiceSchema />
    </>
  );
}
