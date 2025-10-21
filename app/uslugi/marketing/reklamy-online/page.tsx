import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiMegaphoneLine, RiAdvertisementLine, RiRocketLine, RiPieChart2Line, RiCheckLine, RiFileList2Line } from 'react-icons/ri';
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
  title: 'Reklamy online — Google i Meta nastawione na wynik | Arteon',
  description: 'Kampanie Google Ads i Facebook/Instagram, które realnie dowożą zapytania i sprzedaż. Ustawiamy pomiar, testujemy kreacje i skalujemy to, co działa. Przejrzyste raporty.',
  keywords: ['reklamy online', 'kampanie Google Ads', 'reklamy Facebook', 'reklamy Instagram', 'remarketing', 'śledzenie konwersji', 'ile kosztują reklamy internetowe'],
  alternates: { canonical: '/uslugi/marketing/reklamy-online' },
  openGraph: {
    title: 'Reklamy online — Google i Meta nastawione na wynik | Arteon',
    description: 'Konfigurujemy konwersje, tworzymy kreacje i skalujemy skuteczne kampanie. Raporty zrozumiałe dla biznesu.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/reklamy-online',
    type: 'website',
  },
} as const;

function ServiceSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const json = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Reklamy online',
    serviceType: 'Online Advertising',
    provider: { '@type': 'Organization', name: 'Arteon', url: `${base}` },
    areaServed: { '@type': 'Country', name: 'Polska' },
    url: `${base}/uslugi/marketing/reklamy-online`,
    description: 'Kampanie Google Ads oraz Facebook/Instagram z nastawieniem na wynik. Konfiguracja konwersji, testy kreacji i skalowanie tego, co działa. Jasne KPI i raporty.',
    offers: {
      '@type': 'Offer',
      priceSpecification: { '@type': 'PriceSpecification', priceCurrency: 'PLN' },
      url: `${base}/uslugi/marketing/reklamy-online`,
    },
  };
  return (
    <Script id="schema-service-reklamy-online" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferAdsOnlinePage() {
  return (
    <>
      <HeroBanner
        title="Reklamy online"
        description={<>Uruchomimy kampanie, które dowożą wynik: ustawimy pomiar, przygotujemy kreacje i będziemy skalować to, co działa najlepiej. Otrzymasz jasne raporty i konkretne wnioski.</>}
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiAdvertisementLine />, label: 'Google & Meta' },
          { icon: <RiRocketLine />, label: 'Szybki start kampanii' },
          { icon: <RiBarChart2Fill />, label: 'Czytelne KPI i raporty' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczna konfiguracja' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/reklamy-online`, label: 'Reklamy online' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Co daje dobrze ustawiona kampania reklamowa?">
          <p>
            <strong>Przewidywalny dopływ zapytań i sprzedaży.</strong> Zamiast „wrzucania budżetu w ciemno” ustawiamy pomiar konwersji i uczymy systemy reklamowe, które działania przynoszą klienta — i
            za ile.
          </p>
          <br />
          <p>
            <strong>Pełna przejrzystość kosztów i wyników.</strong> Wiesz, ile płacisz za kontakt, zapytanie lub transakcję. Raporty są krótkie i zrozumiałe: liczby, wnioski i jasne rekomendacje na
            kolejny krok.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/ads-01.webp"
          imageAlt="Reklamy online — Google Ads i Meta Ads"
          subtitle="Dla kogo"
          title={<>Kiedy reklamy online mają największy sens?</>}
          description="Gdy chcesz szybko dotrzeć do osób, które szukają Twojej usługi lub są podobne do obecnych klientów."
          btnOne="Porozmawiajmy"
          btnOneLink="#kontakt"
          btnTwo="Zobacz możliwości"
          btnTwoLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Firmy usługowe i B2B — pozyskiwanie zapytań z formularza i telefonu.</li>
            <li>Marki z gotową ofertą i stroną, które chcą szybko zwiększyć ruch i testować przekazy.</li>
            <li>Projekty, które potrzebują kampanii sezonowej lub „boostu” pod konkretną akcję.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co robimy w ramach reklam online (po ludzku)?"
          subtitle="Google Ads i Facebook/Instagram"
          items={[
            {
              title: 'Ustawiamy pomiar konwersji',
              description: <>Konfigurujemy zdarzenia (np. wysłanie formularza, telefon, klik w e-mail), aby dokładnie wiedzieć, co działa i jaki jest koszt pozyskania kontaktu.</>,
              icon: <RiCheckLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Budujemy strukturę kampanii',
              description: <>Dzielimy kampanie na logiczne grupy: słowa kluczowe, odbiorców i cele. Dzięki temu budżet trafia w najlepsze miejsca, a nie rozlewa się po całym koncie.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Tworzymy kreacje i testujemy warianty',
              description: <>Przygotowujemy zestaw nagłówków, tekstów i grafik/wideo. Testujemy warianty i zostawiamy tylko to, co przynosi najniższy koszt zapytania.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Uruchamiamy remarketing',
              description: <>Docieramy ponownie do osób, które odwiedziły stronę, ale nie zostawiły kontaktu. Przypominamy ofertę i domykamy szanse sprzedażowe.</>,
              icon: <RiMegaphoneLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak mierzymy skuteczność kampanii?" subtitle="KPI i raporty">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Koszt pozyskania kontaktu (CPA)</strong> — ile średnio kosztuje wysłanie formularza czy telefon.
            </li>
            <li>
              <strong>Współczynnik konwersji</strong> — jaki procent osób wykonał pożądaną akcję.
            </li>
            <li>
              <strong>Skalowanie działań</strong> — które grupy reklam i komunikaty warto dofinansować, a które wyłączyć.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak startujemy z kampanią — krok po kroku"
          subtitle="Proces"
          description="Szybki i poukładany start: konfiguracja, kreacje, testy i skalowanie zwycięzców."
          items={[
            {
              icon: <RiAdvertisementLine className="h-8 w-8" />,
              title: '1. Krótki brief i konfiguracja pomiaru',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ustalamy cele kampanii i mierzymy zdarzenia, które są ważne dla biznesu.</p>
                </div>
              ),
            },
            {
              icon: <RiLightbulbFlashLine className="h-8 w-8" />,
              title: '2. Kreacje i struktura kampanii',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Przygotowujemy treści i grafiki/wideo. Ustawiamy przejrzystą strukturę konta.</p>
                </div>
              ),
            },
            {
              icon: <RiPieChart2Line className="h-8 w-8" />,
              title: '3. Testy i optymalizacja',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Testujemy warianty, włączamy zwycięzców, wyłączamy słabe zestawy reklam.</p>
                </div>
              ),
            },
            {
              icon: <RiRocketLine className="h-8 w-8" />,
              title: '4. Skalowanie i raport',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Zwiększamy budżet tam, gdzie koszt pozyskania jest najniższy. Co miesiąc raport i plan działań.</p>
                </div>
              ),
            },
          ]}
          grid="four"
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/ads-02.webp"
          imageAlt="Efekty kampanii reklamowych — przykłady"
          subtitle="Wyniki kampanii"
          title={<>Jakie efekty widzimy najczęściej po uruchomieniu reklam?</>}
          description="To przykłady z ostatnich wdrożeń. Rzeczywiste wyniki zależą od branży, budżetu i jakości strony docelowej."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Stabilny koszt pozyskania kontaktu</strong> już po 2-4 tygodniach od startu.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wartościowych zapytań</strong> po dopracowaniu przekazów i grup odbiorców.
            </li>
            <li className="list-none rounded-xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Skalowanie wydatku</strong> bez utraty jakości — dokładamy budżet tylko do zwycięskich zestawów reklam.
            </li>
          </ul>
          <div className="mt-6">
            <Button arrow link="#kontakt">
              Porozmawiajmy o Twojej kampanii
            </Button>
          </div>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Przykładowe pakiety reklam"
          subtitle="Pakiety"
          plans={[
            {
              name: 'Start',
              price: 'od 600 zł / mies. + budżet',
              description: 'Szybkie uruchomienie kampanii i podstawowa optymalizacja.',
              features: ['Konfiguracja pomiaru', 'Prosta struktura kampanii', '2-3 kreacje do testów', 'Raport miesięczny'],
              btnOne: 'Zamów ofertę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Rozwój',
              badgeLabel: 'Najczęściej wybierany',
              price: 'od 1 100 zł / mies. + budżet',
              description: 'Testy kreacji i skalowanie zwycięzców, remarketing i stała optymalizacja.',
              features: ['A/B testy kreacji', 'Remarketing', 'Optymalizacja tygodniowa', 'Raport + rekomendacje'],
              lastPlan: true,
              btnOne: 'Poproś o wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Skalowanie',
              price: 'od 1 800 zł / mies. + budżet',
              description: 'Większa intensywność prac i rozbudowane testy (kreacje, grupy, copy).',
              features: ['Zaawansowane testy', 'Rozszerzona analityka', 'Skalowanie budżetu', 'Raport co 2 tygodnie'],
              btnOne: 'Zapytaj o termin',
              btnOneLink: '#kontakt',
            },
          ]}
          note={{
            text: <>Masz określony budżet dzienny lub limit CPA? Dopasujemy strukturę kampanii i częstotliwość optymalizacji.</>,
            ctaLabel: 'Skonsultuj potrzeby',
            ctaLink: '#kontakt',
          }}
          legalNote="Ceny są orientacyjne. Wynagrodzenie nie obejmuje budżetów mediowych."
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          subtitle="Powiązane usługi"
          description="Najlepszy wynik dają reklamy połączone z dobrą stroną i spójną komunikacją."
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Pozycjonowanie stron',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Stały wzrost widoczności w Google: treści, porządek na stronie i bezpieczne linki.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Przejdź do pozycjonowania
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiMegaphoneLine className="h-8 w-8" />,
              title: 'Social media: prowadzenie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Regularne treści i moderacja. Budujemy zasięg i wspieramy kampanie płatne.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/social-media">
                      Zobacz prowadzenie social media
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <ContactForm title="Zamów kampanię reklamową" description="Podaj cele i budżet. Przygotujemy plan działań, strukturę kampanii i harmonogram testów." defaultSubject="Reklamy online" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/reklamy-online"
          items={[
            {
              question: 'Ile kosztują reklamy online?',
              answer: 'Koszt składa się z dwóch elementów: budżetów reklamowych (media) oraz obsługi kampanii. Na starcie rekomendujemy budżet dzienny testowy, a po wynikach decydujemy o skalowaniu.',
            },
            {
              question: 'Jak szybko widać efekty?',
              answer: 'Pierwsze wnioski mamy zwykle po 1-2 tygodniach testów. Stabilny koszt pozyskania kontaktu osiągamy zazwyczaj w ciągu kilku tygodni, gdy system „nauczy się” danych.',
            },
            {
              question: 'Czy przygotowujecie grafiki i teksty reklam?',
              answer: 'Tak. Dostajesz zestaw kreacji (grafiki/wideo) i wersje tekstów. Potem testujemy warianty i zostawiamy te, które dowożą najlepszy wynik.',
            },
            {
              question: 'Czy mogę liczyć na remarketing?',
              answer: 'Tak. Ustawiamy remarketing, aby wrócić do osób, które były na stronie, ale nie zostawiły kontaktu. To często najtańsze konwersje.',
            },
            {
              question: 'Jak raportujecie wyniki?',
              answer: 'Raporty są krótkie i zrozumiałe: ile kosztował kontakt, które grupy reklam działają najlepiej i co skalujemy w kolejnym tygodniu/miesiącu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zacznijmy dowozić wynik z reklam"
        description="Ustawimy pomiar, przetestujemy kreacje i dołożymy budżet tam, gdzie koszt pozyskania jest najniższy."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
