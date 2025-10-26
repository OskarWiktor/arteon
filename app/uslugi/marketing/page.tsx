import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiAdvertisementLine,
  RiBarChart2Fill,
  RiBarChart2Line,
  RiCustomerService2Line,
  RiFileList2Line,
  RiLightbulbFlashLine,
  RiLineChartLine,
  RiMegaphoneLine,
  RiSearchEyeLine,
  RiSearchLine,
  RiShareForwardLine,
  RiShieldCheckLine,
  RiUserHeartLine,
} from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoAnalytics } from 'react-icons/io5';
import Button from '@/components/ui/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionBasic from '@/components/ui/sections/SectionBasic';
import Script from 'next/script';

/* === SEO meta === */
export const metadata = {
  title: 'Marketing internetowy — SEO, reklamy i komunikacja, które dowożą wynik | Arteon',
  description:
    'Strategia, wdrożenia i kampanie: audyt SEO, optymalizacja, pozycjonowanie, reklamy online, social media oraz branding i komunikacja. Przyciągamy właściwych klientów i pokazujemy wyniki.',
  keywords: [
    'marketing internetowy',
    'audyt SEO',
    'optymalizacja SEO',
    'pozycjonowanie stron',
    'reklamy online',
    'social media',
    'branding i komunikacja',
    'widoczność w Google',
    'kampanie Google i Meta',
  ],
  alternates: { canonical: '/uslugi/marketing' },
  openGraph: {
    title: 'Marketing internetowy — SEO, reklamy i komunikacja, które dowożą wynik | Arteon',
    description: 'Kompletny marketing: od diagnozy i wdrożeń SEO, przez stałe pozycjonowanie, po kampanie płatne, social media i spójny branding.',
    url: 'https://www.arteonagency.pl/uslugi/marketing',
    type: 'website',
  },
} as const;

function ItemListSchema() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';
  const services = [
    { name: 'Audyt SEO', path: '/uslugi/marketing/audyt-seo' },
    { name: 'Optymalizacja SEO', path: '/uslugi/marketing/optymalizacja-seo' },
    { name: 'Pozycjonowanie stron', path: '/uslugi/marketing/pozycjonowanie-stron' },
    { name: 'Reklamy online', path: '/uslugi/marketing/reklamy-online' },
    { name: 'Social media', path: '/uslugi/marketing/social-media' },
  ];
  const json = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${base}/uslugi/marketing#itemlist`,
    name: 'Usługi marketingowe — Arteon',
    itemListOrder: 'http://schema.org/ItemListOrderAscending',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${base}${s.path}`,
      name: s.name,
    })),
  };
  return (
    <Script id="schema-itemlist-marketing" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferMarketingHubPage() {
  return (
    <>
      <HeroBanner
        title="Marketing"
        description={
          <>
            Przyciągniemy właściwych klientów i pokażemy konkretny wynik. Zaczynamy od diagnozy, wdrażamy poprawki, rozwijamy widoczność i uruchamiamy kampanie. Wszystko w jednym, poukładanym
            procesie.
          </>
        }
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
          { icon: <RiLightbulbFlashLine />, label: 'Plan oparty na danych' },
          { icon: <RiBarChart2Fill />, label: 'Raporty zrozumiałe dla biznesu' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczeństwo i stabilność' },
        ]}
      />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/marketing`, label: 'Marketing' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Marketing, który łączy kropki">
          <p>
            <strong>Najpierw rozumiemy, potem działamy.</strong> Sprawdzamy, co realnie hamuje widoczność i sprzedaż — a później wdrażamy proste rozwiązania: szybszą stronę, lepsze treści i kampanie,
            które dowożą kontakt.
          </p>
          <br />
          <p>
            <strong>Pracujemy etapami i pokazujemy efekty.</strong> Każda zmiana ma cel i miarę — od krótszego czasu ładowania, przez wzrost wejść z Google, po niższy koszt pozyskania z reklam.
            Dostajesz krótki raport i plan na kolejny miesiąc.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zlecając nam marketing?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Spójny plan na SEO i reklamy',
              description: <>Nie robimy „wszystkiego naraz”. Ustalamy logiczną kolejność: diagnoza → wdrożenia → rozwój → kampanie. Dzięki temu budżet pracuje tam, gdzie ma największy sens.</>,
              icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Widoczność w Google bez żargonu',
              description: (
                <>Tłumaczymy po ludzku i wdrażamy zmiany, które widać w wynikach: szybsza strona, lepsze tytuły i opisy, logiczna struktura, treści, które odpowiadają na pytania klientów.</>
              ),
              icon: <RiSearchLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Kampanie, które mierzą to, co ważne',
              description: <>Konfigurujemy pomiar konwersji (formularze, telefony, wiadomości). Dzięki temu wiesz, ile kosztuje realny kontakt i co skalować.</>,
              icon: <RiAdvertisementLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Strategia treści + social media',
              description: <>Tworzymy treści na stronę i do social mediów — spójne tematy, regularne publikacje i moderacja. Efekt: zasięg, rozpoznawalność i więcej wejść na WWW.</>,
              icon: <RiShareForwardLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Branding i jasna komunikacja',
              description: <>Uporządkujemy język marki i zasady wizualne. Klient szybciej zrozumie wartość oferty — a Ty otrzymasz gotowe szablony treści i prosty brandbook.</>,
              icon: <RiUserHeartLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Raporty i decyzje oparte na danych',
              description: <>Dostajesz czytelny raport i wnioski. Wspólnie decydujemy, które działania wzmacniać, a które zakończyć — bez pudru i „marketingowej mgły”.</>,
              icon: <IoAnalytics className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak mierzymy sukces?" subtitle="Praktyczne wskaźniki">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Widoczność i wejścia z Google</strong> — więcej fraz w Top10/Top3 i większy ruch organiczny.
            </li>
            <li>
              <strong>Koszt pozyskania kontaktu z reklam</strong> — stabilny i przewidywalny CPA.
            </li>
            <li>
              <strong>Więcej zapytań</strong> — formularze, telefony i wiadomości z WWW oraz social mediów.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Oferta marketingu"
          subtitle="Skutecznie i przejrzyście"
          description="Każda usługa ma własną stronę z detalami, przykładami i cennikiem. Zaczynamy od diagnozy, kończymy na skalowaniu tego, co działa."
          grid="two"
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Audyt SEO',
              subtitle: 'Diagnoza i priorytety działań',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Sprawdzimy, dlaczego strona nie rośnie w Google: szybkość, treści, struktura i „czy Google rozumie Twoją ofertę”. Dostaniesz raport z priorytetami i szybkimi wygranymi.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/audyt-seo">
                      Zobacz audyt SEO
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiSearchEyeLine className="h-8 w-8" />,
              title: 'Optymalizacja SEO',
              subtitle: 'Wdrożenia po audycie',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wprowadzimy zmiany, które realnie podnoszą wyniki: szybsza strona, lepsze tytuły i opisy, porządek w treściach i dodatkowe dane dla Google. Każdą zmianę mierzymy.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/optymalizacja-seo">
                      Przejdź do optymalizacji
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLineChartLine className="h-8 w-8" />,
              title: 'Pozycjonowanie stron',
              subtitle: 'Stały wzrost widoczności',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Budujemy widoczność miesiąc po miesiącu: strategia treści, porządek na stronie i bezpieczne linki. Raport co miesiąc i jasne priorytety.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Zobacz pozycjonowanie
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiMegaphoneLine className="h-8 w-8" />,
              title: 'Reklamy online',
              subtitle: 'Google i Meta nastawione na wynik',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Ustawimy pomiar, zrobimy kreacje i przetestujemy warianty. Skalujemy tylko to, co dowozi najniższy koszt pozyskania kontaktu.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/reklamy-online">
                      Zobacz reklamy online
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: 'Social media',
              subtitle: 'Plan, treści i moderacja',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Kalendarz publikacji, grafiki i krótkie wideo (reels), moderacja oraz integracja z WWW i reklamami.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/social-media">
                      Prowadzenie social media
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/sections/mkt-hub-01.webp"
          imageAlt="Marketing łączący SEO i reklamy"
          subtitle="Dlaczego łączymy SEO i reklamy"
          title={<>Szybki wynik z reklam + trwały efekt z SEO</>}
          description="Reklamy dowożą zapytania od razu, a SEO buduje widoczność, która działa latami. Razem tworzą stabilny system pozyskiwania klientów."
          btnOne="Zapytaj o plan 90 dni"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Najpierw naprawiamy podstawy: strona musi szybko działać i jasno mówić o ofercie.</li>
            <li>Testujemy komunikaty w reklamach — wygrywające przenosimy do treści na WWW.</li>
            <li>SEO przejmuje ciężar w dłuższym okresie, a reklamy domykają sezonowe i szybkie cele.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/sections/mkt-hub-02.webp"
          imageAlt="Raportowanie i decyzje na danych"
          subtitle="Raportowanie i decyzje"
          title={<>Krótkie raporty, konkretne decyzje</>}
          description="Mniej slajdów, więcej wniosków. Pokazujemy, co działa i co wzmacniamy w kolejnym miesiącu. Ty decydujesz o skali."
          btnOne="Chcę prosty raport"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Widoczność i wejścia z Google oraz koszt pozyskania z reklam — bez wodotrysków.</li>
            <li>Propozycje testów: tematy treści, nowe grupy reklam, ulepszenia na stronie.</li>
            <li>Rekomendacje budżetowe: gdzie dokładamy, a co odpuszczamy.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="marketing" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/marketing"
          items={[
            {
              question: 'Od czego zaczniemy współpracę?',
              answer: 'Od krótkiej rozmowy i wglądu w stronę. Często startujemy od audytu SEO (diagnostyka), a potem przechodzimy do wdrożeń i/lub kampanii.',
            },
            {
              question: 'Kiedy zobaczę pierwsze efekty?',
              answer: 'Zmiany techniczne widać od razu (szybsza strona). Kampanie reklamowe zwykle dowożą szybciej, a SEO buduje stabilny wzrost w perspektywie 1–3 miesięcy i dalej.',
            },
            {
              question: 'Jak wyglądają raporty?',
              answer: 'Krótko i po ludzku: co zrobiliśmy, co to dało i co robimy w kolejnym miesiącu. Liczby, wykres i wnioski — żadnych slajdów na 50 stron.',
            },
            {
              question: 'Czy mogę zamówić tylko jedną usługę (np. same reklamy)?',
              answer: 'Tak. Dobieramy zakres do Twoich celów i budżetu. Jeśli będzie potrzeba zmian na stronie, podpowiemy, co zrobić najpierw.',
            },
            {
              question: 'Czy pracujecie dla firm lokalnych i ogólnopolskich?',
              answer: 'Tak. Dla lokalnych działamy na frazach miasto/region i kampaniach „blisko mnie”. Dla ogólnopolskich — na szerszych strategiach treści i skalowaniu kampanii.',
            },
          ]}
        />

        <Gap variant="line" />

        {/* Kontakt */}
        <ContactForm
          title="Stwórzmy skuteczny marketing dla Twojej firmy"
          description="Opisz cele i budżet. Przygotujemy plan na 90 dni: od szybkich wygranych do działań długofalowych."
          defaultSubject="Marketing — zapytanie"
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Rozwiń markę mądrą strategią"
        description="Od audytu i wdrożeń po kampanie i treści — działamy tak, aby wynik był widoczny."
        primaryLabel="Skontaktuj się"
        primaryLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ItemListSchema />
    </>
  );
}
