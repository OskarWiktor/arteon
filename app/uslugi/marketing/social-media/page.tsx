import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiMegaphoneLine, RiShareForwardLine, RiPlayCircleLine, RiChat1Line, RiImageLine, RiFileList2Line } from 'react-icons/ri';
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
  title: 'Social media — plan, treści i moderacja dla firm | Arteon',
  description: 'Prowadzimy profile firmowe na Facebooku i Instagramie: kalendarz publikacji, reels/wideo, grafiki, moderacja i raporty. Spójny styl i treści, które budują zasięg i zapytania.',
  keywords: ['prowadzenie social media', 'obsługa Facebook', 'obsługa Instagram', 'kalendarz publikacji', 'moderacja wiadomości i komentarzy', 'reels wideo', 'raporty social media'],
  alternates: { canonical: '/uslugi/marketing/social-media' },
  openGraph: {
    title: 'Social media — plan, treści i moderacja dla firm | Arteon',
    description: 'Strategia, kalendarz i regularne publikacje. Przygotowujemy grafiki i krótkie wideo, dbamy o moderację i czytelne raporty.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/social-media',
    type: 'website',
  },
} as const;

/* === Service JSON-LD (schema.org) === */
function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Prowadzenie social media',
    serviceType: 'Social Media Management',
    provider: { '@type': 'Organization', name: 'Arteon', url: `${base}` },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/social-media`,
    description: 'Prowadzenie Facebooka i Instagrama dla firm: strategia, kalendarz publikacji, treści (grafiki, reels/wideo), moderacja i raporty.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/social-media`,
    },
  };
  return (
    <Script id="schema-service-social" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferSocialMediaPage() {
  return (
    <>
      <HeroBanner
        title="Social media"
        description={
          <>Prowadzimy Twoje profile firmowe: plan, regularne treści i moderacja. Przygotujemy grafiki, krótkie wideo i zadbamy o spójny styl — tak, by zasięg przekładał się na zapytania.</>
        }
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiShareForwardLine />, label: 'Facebook & Instagram' },
          { icon: <RiLightbulbFlashLine />, label: 'Strategia i kalendarz' },
          { icon: <RiBarChart2Fill />, label: 'Raporty i KPI' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczna moderacja' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/social-media`, label: 'Social media' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co daje stałe prowadzenie social mediów?">
          <p>
            <strong>Regularność i spójność przekazu.</strong> Zamiast przypadkowych postów dostajesz kalendarz treści, jednolity styl i komunikaty, które budują rozpoznawalność oraz ułatwiają kontakt.
          </p>
          <br />
          <p>
            <strong>Treści, które coś znaczą.</strong> Wykorzystujemy formaty, które dziś działają najlepiej — krótkie wideo (reels), karuzele, relacje i posty edukacyjne. Cel: realny zasięg i
            konwersja do WWW lub wiadomości.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/sm-01.webp"
          imageAlt="Prowadzenie social media dla firm — Facebook i Instagram"
          subtitle="Dla kogo"
          title={<>Kiedy warto oddać social media w nasze ręce?</>}
          description="Gdy chcesz mieć spokojną głowę: publikacje idą zgodnie z planem, a komunikacja jest spójna i profesjonalna."
          btnOne="Porozmawiajmy"
          btnOneLink="#kontakt"
          btnTwo="Zobacz zakres"
          btnTwoLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Firmy usługowe i B2B — edukacja, case studies, budowanie eksperckości.</li>
            <li>Marki, które chcą regularności i lepszej jakości treści bez angażowania zespołu.</li>
            <li>Projekty, które łączą social z kampaniami reklamowymi i stroną WWW.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co robimy w ramach prowadzenia social media (po ludzku)?"
          subtitle="Facebook i Instagram — komplet działań"
          items={[
            {
              title: 'Strategia i kalendarz publikacji',
              description: <>Ustalamy cele, grupy odbiorców i tematy. Układamy miesięczny kalendarz — z jasnymi datami publikacji i typami formatów.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Grafiki, zdjęcia i krótkie wideo (reels)',
              description: <>Projektujemy spójne szablony, przygotowujemy grafiki i nagrywamy/ montujemy krótkie wideo, które podnosi zasięg i zaangażowanie.</>,
              icon: <RiImageLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Publikacje i moderacja',
              description: <>Publikujemy posty zgodnie z planem, odpowiadamy na komentarze i wiadomości, pilnujemy kultury rozmowy i bezpieczeństwa marki.</>,
              icon: <RiChat1Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Integracja z kampaniami i WWW',
              description: <>Łączymy działania z reklamami oraz stroną internetową: testujemy przekazy i kierujemy ruch tam, gdzie najłatwiej o kontakt.</>,
              icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak mierzymy skuteczność działań?" subtitle="KPI i raporty">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Zasięg i wyświetlenia:</strong> czy trafiamy do właściwych odbiorców.
            </li>
            <li>
              <strong>Zaangażowanie:</strong> komentarze, polubienia, udostępnienia, zapisy — czy treści wciągają.
            </li>
            <li>
              <strong>Ruch i zapytania:</strong> kliknięcia do WWW, wiadomości prywatne, telefony — czy social wspiera sprzedaż.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak wygląda współpraca — krok po kroku"
          subtitle="Proces"
          description="Czytelny plan: od strategii i kalendarza do moderacji i comiesięcznych raportów."
          items={[
            {
              icon: <RiLightbulbFlashLine className="h-8 w-8" />,
              title: '1. Strategia i tematy',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ustalamy cele, grupy odbiorców i główne filary treści (edukacja, case, backstage).</p>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: '2. Kalendarz i akceptacja',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Przygotowujemy plan postów na miesiąc. Wygodna akceptacja i uwagi w jednym miejscu.</p>
                </div>
              ),
            },
            {
              icon: <RiPlayCircleLine className="h-8 w-8" />,
              title: '3. Produkcja treści (grafiki, reels, stories)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Tworzymy materiały i publikujemy je zgodnie z harmonogramem.</p>
                </div>
              ),
            },
            {
              icon: <RiChat1Line className="h-8 w-8" />,
              title: '4. Moderacja i raport',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Odpowiadamy na komentarze i wiadomości. Raz w miesiącu raport i wnioski.</p>
                </div>
              ),
            },
          ]}
          grid="four"
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/sm-02.webp"
          imageAlt="Efekty prowadzenia social media — przykłady"
          subtitle="Wyniki naszych Klientów"
          title={<>Jakie efekty widzimy najczęściej?</>}
          description="To typowe rezultaty po 4-8 tygodniach regularnych publikacji. Wyniki zależą od branży i intensywności prac."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Większy zasięg i zaangażowanie</strong> dzięki krótkim wideo i spójnym grafikom.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wejść na WWW i wiadomości</strong> po dodaniu czytelnych wezwań do działania.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Spójny wizerunek marki</strong> — łatwiej rozpoznawalny styl i komunikaty.
            </li>
          </ul>
          <div className="mt-6">
            <Button arrow link="#kontakt">
              Porozmawiajmy o Twoich profilach
            </Button>
          </div>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Przykładowe pakiety prowadzenia social media"
          subtitle="Pakiety"
          plans={[
            {
              name: 'Social Start',
              price: 'od 1 100 zł / mies.',
              description: 'Podstawowy plan dla jednej platformy (Facebook lub Instagram).',
              features: ['Kalendarz na miesiąc', '8-10 publikacji', 'Proste grafiki', 'Moderacja podstawowa', 'Raport miesięczny'],
              btnOne: 'Zamów ofertę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Social Rozwój',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 600 zł / mies.',
              description: 'Dla dwóch platform + krótkie wideo (reels) i rozszerzona moderacja.',
              features: ['Kalendarz i produkcja treści', '12-16 publikacji', 'Reels 2-4/mies.', 'Moderacja rozszerzona', 'Raport + rekomendacje'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Social Plus',
              price: 'od 2 300 zł / mies.',
              description: 'Większa intensywność treści + integracja z kampaniami reklamowymi.',
              features: ['16-20 publikacji', 'Reels 4-6/mies.', 'Współpraca z reklamacjami', 'Raport co 2 tygodnie'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz specyficzny format lub dodatkowe kanały (np. LinkedIn)? Przygotujemy wariant dopasowany.</>,
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote="Ceny są orientacyjne i zależą m.in. od liczby platform, częstotliwości publikacji i zakresu moderacji."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Powiązane usługi"
          description="Social media działają najlepiej razem z kampaniami i dobrą stroną WWW."
          items={[
            {
              icon: <RiMegaphoneLine className="h-8 w-8" />,
              title: 'Reklamy online',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Testy kreacji, remarketing i skalowanie. Przejrzyste KPI i raporty.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/reklamy-online">
                      Zobacz reklamy online
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Pozycjonowanie stron',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Stały wzrost widoczności w Google: plan treści, porządek na stronie i linki.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Przejdź do pozycjonowania
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
          title="Zamów prowadzenie social media"
          description="Napisz, na jakich platformach chcesz publikować i z jaką częstotliwością. Przygotujemy plan i wycenę."
          defaultSubject="Social media"
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/social-media"
          items={[
            {
              question: 'Ile postów publikujecie miesięcznie?',
              answer: 'To zależy od pakietu i platform. Najczęściej 8-20 publikacji miesięcznie + reels/relacje zgodnie z kalendarzem. Liczbę i rytm dopasowujemy do Twojej branży.',
            },
            {
              question: 'Czy nagrywacie i montujecie krótkie wideo (reels)?',
              answer: 'Tak. Przygotowujemy krótkie formy wideo, które zwiększają zasięg i zaangażowanie. Ustalamy scenariusze i materiały, a potem montujemy i publikujemy.',
            },
            {
              question: 'Kto odpowiada na komentarze i wiadomości?',
              answer: 'Prowadzimy moderację i obsługę wiadomości zgodnie z wytycznymi. Na pytania wymagające specjalistycznej wiedzy przygotowujemy odpowiedź do akceptacji.',
            },
            {
              question: 'Czy łączycie działania z reklamami?',
              answer: 'Tak. Social media świetnie współpracują z kampaniami — promujemy kluczowe treści i uruchamiamy remarketing osobom, które były na stronie lub zaangażowały się w treści.',
            },
            {
              question: 'Jak raportujecie wyniki?',
              answer: 'Raz w miesiącu otrzymujesz czytelny raport: zasięg, zaangażowanie, kliknięcia do WWW i wiadomości. Dołączamy wnioski i plan na kolejny miesiąc.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Oddaj social media w dobre ręce"
        description="Strategia, regularne treści i moderacja, które realnie budują zasięg i zapytania."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
