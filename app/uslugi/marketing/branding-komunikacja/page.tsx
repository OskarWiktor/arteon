import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiUserHeartLine, RiPencilRuler2Line, RiSpeakLine, RiFileList2Line, RiCheckLine, RiShareForwardLine } from 'react-icons/ri';
import { IoColorPalette } from 'react-icons/io5';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Button from '@/components/ui/Button';
import Script from 'next/script';

export const metadata = {
  title: 'Branding i komunikacja — strategia, język marki i spójny wizerunek | Arteon',
  description: 'Ustalamy kierunek marki: archetyp, obietnicę, język i zasady komunikacji. Tworzymy prosty brandbook i treści, które ułatwiają sprzedaż.',
  keywords: ['branding', 'strategia marki', 'archetyp marki', 'język marki', 'tone of voice', 'brandbook', 'komunikacja marki', 'spójny wizerunek'],
  alternates: { canonical: '/uslugi/marketing/branding-komunikacja' },
  openGraph: {
    title: 'Branding i komunikacja — strategia, język marki i spójny wizerunek | Arteon',
    description: 'Doprecyzowujemy tożsamość marki i upraszczamy komunikację: co mówisz, do kogo i jak. Treści, które przyciągają właściwych klientów.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/branding-komunikacja',
    type: 'website',
  },
} as const;

function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Branding i komunikacja',
    serviceType: 'Brand Strategy & Communications',
    provider: { '@type': 'Organization', name: 'Arteon', url: `${base}` },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/branding-komunikacja`,
    description: 'Strategia marki, język komunikacji i prosty brandbook. Archetyp, obietnica i zasady, które porządkują przekaz na stronie i w social media.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/branding-komunikacja`,
    },
  };
  return (
    <Script id="schema-service-branding" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferBrandingCommunicationPage() {
  return (
    <>
      <HeroBanner
        title="Branding i komunikacja"
        description={<>Uporządkujemy to, co marka mówi i jak mówi. Ustalimy kierunek, język i proste zasady — tak, by strona, social media i materiały sprzedażowe brzmiały spójnie i przekonująco.</>}
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg7.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiUserHeartLine />, label: 'Wyrazista osobowość marki' },
          { icon: <RiLightbulbFlashLine />, label: 'Prosty język i konkret' },
          { icon: <RiBarChart2Fill />, label: 'Lepsze treści sprzedażowe' },
          { icon: <RiShieldCheckLine />, label: 'Spójność na wszystkich kanałach' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/branding-komunikacja`, label: 'Branding i komunikacja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Po co Ci branding i uporządkowana komunikacja?">
          <p>
            <strong>Żeby klienci od razu rozumieli, kim jesteś i dla kogo jesteś.</strong> Dopracowany branding i język marki sprawiają, że łatwiej tłumaczysz wartość oferty, a strona i social media
            działają jak jeden zespół.
          </p>
          <br />
          <p>
            <strong>To nie „ładne słówka”, tylko sprzedażowa przejrzystość.</strong> Upraszczamy przekaz: najpierw mówisz o problemie klienta, potem o rozwiązaniu i korzyściach. Dzięki temu rośnie
            liczba zapytań.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/branding-01.webp"
          imageAlt="Branding i komunikacja — warsztaty i kierunek marki"
          subtitle="Dla kogo"
          title={<>Kiedy warto zacząć od brandingu i komunikacji?</>}
          description="Gdy chcesz mówić jednym głosem na stronie, w social media i materiałach sprzedażowych — i wreszcie trafić do właściwych klientów."
          btnOne="Porozmawiajmy"
          btnOneLink="#kontakt"
          btnTwo="Zobacz zakres"
          btnTwoLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Firmy usługowe i B2B — potrzebna jest klarowna obietnica i język dopasowany do branży.</li>
            <li>Marki, które zmieniają strategię lub przygotowują nową stronę i materiały.</li>
            <li>Zespoły, którym brakuje spójników: każdy pisze „po swojemu”, a klient gubi się w przekazie.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co robimy w ramach brandingu i komunikacji (po ludzku)?"
          subtitle="Elementy, które porządkują przekaz"
          items={[
            {
              title: 'Archetyp i osobowość marki',
              description: <>Określamy charakter marki i ton rozmowy z klientem. Dzięki temu treści mają styl, a marka — twarz.</>,
              icon: <RiUserHeartLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Obietnica i kluczowe wyróżniki',
              description: <>Wyjaśniamy, jaki problem rozwiązujesz i dlaczego właśnie u Ciebie. Budujemy proste hasła i komunikaty, które wspierają sprzedaż.</>,
              icon: <RiCheckLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Język marki (tone of voice)',
              description: <>Ustalamy słowa, które marka „lubi” i których unika. Dajemy przykłady zdań i gotowe szablony do WWW i social.</>,
              icon: <RiSpeakLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Prosty brandbook',
              description: <>Zasady użycia logo, kolorów i typografii oraz przykłady zastosowań. Materiał, który ułatwia pracę całemu zespołowi.</>,
              icon: <IoColorPalette className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak oceniamy efekty prac nad komunikacją?" subtitle="Praktyczne wskaźniki">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Wyższy współczynnik odpowiedzi na oferty</strong> i krótszy czas decyzji po doprecyzowaniu przekazu.
            </li>
            <li>
              <strong>Więcej zapytań z WWW i social</strong> dzięki jasnym nagłówkom i wezwaniom do działania.
            </li>
            <li>
              <strong>Spójność materiałów</strong> — zespół korzysta z jednego stylu i gotowych szablonów.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak prowadzimy proces — krok po kroku"
          subtitle="Warsztaty i wdrożenie"
          description="Łączymy warsztaty, opracowanie zasad i szybkie wdrożenia w treściach. Efektem jest dokument i gotowe materiały."
          items={[
            {
              icon: <RiLightbulbFlashLine className="h-8 w-8" />,
              title: '1. Krótki research i warsztat',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Poznajemy branżę, konkurencję i Twoje cele. Na warsztacie doprecyzowujemy kierunek.</p>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: '2. Archetyp, obietnica i język',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Opracowujemy osobowość marki, wyróżniki i tone of voice — z przykładami zdań i fraz.</p>
                </div>
              ),
            },
            {
              icon: <RiPencilRuler2Line className="h-8 w-8" />,
              title: '3. Prosty brandbook + szablony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dostarczamy zasady wizualne i wzory treści do WWW, ofert i social media.</p>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: '4. Wdrożenie w kanałach i szkolenie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wdrażamy zasady w praktyce i szkolimy zespół, by utrzymać spójność na co dzień.</p>
                </div>
              ),
            },
          ]}
          grid="four"
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/branding-02.webp"
          imageAlt="Efekty wdrożenia brandingu i komunikacji — przykłady"
          subtitle="Wyniki naszych Klientów"
          title={<>Jakie zmiany najczęściej widać po wdrożeniu?</>}
          description="Typowe rezultaty po 4-8 tygodniach pracy nad przekazem i materiałami. Efekt końcowy zależy od branży i skali wdrożeń."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Czytelniejsze oferty i strona WWW</strong> — klienci szybciej rozumieją, co zyskują.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Spójny styl w social media</strong> — większa rozpoznawalność i zaangażowanie.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Lepsza konwersja zapytań</strong> dzięki uporządkowanemu komunikatowi i jasnym CTA.
            </li>
          </ul>
          <div className="mt-6">
            <Button arrow link="#kontakt">
              Porozmawiajmy o Twojej marce
            </Button>
          </div>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Przykładowe pakiety brandingu i komunikacji"
          subtitle="Pakiety"
          plans={[
            {
              name: 'Kierunek marki (lite)',
              price: 'od 900 zł',
              description: 'Szybkie uporządkowanie przekazu: obietnica, wyróżniki i podstawowy tone of voice.',
              features: ['Warsztat 2h', 'Obietnica + wyróżniki', 'Zasady języka (skrót)', 'Rekomendacje do WWW'],
              btnOne: 'Zamów ofertę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Branding + komunikacja',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 600 zł',
              description: 'Pełny kierunek: archetyp, język, zasady wizualne i prosty brandbook.',
              features: ['Warsztat 3-4h', 'Archetyp + tone of voice', 'Prosty brandbook (PDF)', 'Szablony treści do WWW i social'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Branding + wdrożenie',
              price: 'od 2 400 zł',
              description: 'Strategia + wdrożenie zasad w stronie i social mediach + szkolenie zespołu.',
              features: ['Pełny brandbook', 'Wdrożenie zasad w kanałach', 'Szkolenie 2h', 'Raport i następne kroki'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz rozbudowany zespół lub wiele marek? Przygotujemy zakres i szkolenie dopasowane do potrzeb.</>,
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote="Ceny są orientacyjne. Dokładną wycenę przedstawimy po krótkim briefie i ustaleniu zakresu."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Powiązane usługi"
          description="Najlepszy efekt osiągniesz, łącząc jasny przekaz z dobrą stroną i regularnymi treściami."
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Pozycjonowanie stron',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Stały wzrost widoczności w Google: plan treści, porządek na stronie i bezpieczne linki.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Zobacz pozycjonowanie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: 'Social media: prowadzenie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Kalendarz treści, grafiki i krótkie wideo — spójny styl i moderacja.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/social-media">
                      Zobacz social media
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
          grid="two"
        />

        <Gap size="sm" />

        <ContactForm
          title="Zamów branding i komunikację"
          description="Opisz krótko, jak dziś mówisz o ofercie i do kogo chcesz trafić. Przygotujemy plan i wycenę."
          defaultSubject="Branding i komunikacja"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/branding-komunikacja"
          items={[
            {
              question: 'Czym różni się branding od samego logo?',
              answer: 'Logo to tylko znak graficzny. Branding to całość: osobowość marki, obietnica, język i zasady wizualne, które porządkują każdy punkt kontaktu z klientem.',
            },
            {
              question: 'Czy branding pomoże w sprzedaży?',
              answer: 'Tak — gdy przekaz jest jasny, a korzyści opisane po ludzku, klienci szybciej rozumieją wartość oferty. Dzięki temu rośnie liczba zapytań i łatwiej domykać sprzedaż.',
            },
            {
              question: 'Co dostanę po zakończeniu projektu?',
              answer: 'Dokument z zasadami (brandbook), opis języka marki z przykładami, gotowe szablony treści oraz rekomendacje wdrożenia w WWW i social mediach.',
            },
            {
              question: 'Czy możecie wdrożyć nowe zasady w mojej stronie i social mediach?',
              answer: 'Tak. Po etapie strategicznym wdrażamy zasady w praktyce: dopracowujemy treści na stronie, przygotowujemy grafiki i kalendarz publikacji.',
            },
            {
              question: 'Jak długo trwa proces?',
              answer: 'Standardowo 2-4 tygodnie, w zależności od zakresu i liczby materiałów. Harmonogram ustalamy po krótkim briefie.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zbudujmy spójny wizerunek i prosty przekaz"
        description="Archetyp, język i zasady, dzięki którym Twoja marka mówi jednym głosem — i sprzedaje klarowniej."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg7.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
