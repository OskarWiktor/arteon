import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import { RiBarChart2Fill, RiLightbulbFlashLine, RiShieldCheckLine, RiSearchLine, RiFileList2Line, RiToolsLine } from 'react-icons/ri';
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
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';

export const metadata = {
  title: 'Optymalizacja SEO — szybsza strona i lepsza widoczność w Google | Arteon',
  description: 'Wdrażamy poprawki po audycie: przyspieszamy stronę, porządkujemy treści i ułatwiamy Google ich zrozumienie. Testy przed i po, jasne raporty i stabilny wzrost.',
  alternates: { canonical: '/uslugi/marketing/optymalizacja-seo' },
  openGraph: {
    title: 'Optymalizacja SEO — szybsza strona i lepsza widoczność w Google | Arteon',
    description: 'Wdrażamy poprawki po audycie: przyspieszamy stronę, porządkujemy treści i ułatwiamy Google ich zrozumienie. Testy przed i po, jasne raporty i stabilny wzrost.',
    url: 'https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo',
    type: 'website',
  },
} as const;

const BASE = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

function ServiceSchema() {
  const json = buildServiceSchema({
    baseUrl: BASE,
    path: '/uslugi/marketing/optymalizacja-seo',
    serviceName: 'Optymalizacja SEO',
    description: 'Wdrożenia po audycie: poprawa szybkości strony, porządek w treściach i dodatkowe dane, które pomagają Google lepiej zrozumieć witrynę. Testy przed i po, mierzalne wyniki.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-optymalizacja-seo" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferOptimizationSEO() {
  return (
    <>
      <HeroBanner
        title="Optymalizacja SEO"
        description={<>Wprowadzimy zmiany, które poprawią pozycję Twojej strony w Google: przyspieszymy stronę, uporządkujemy treści i ułatwimy Google ich zrozumienie.</>}
        buttonAccent="Bezpłatna konsultacja"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiToolsLine />, label: 'Bezpieczne wdrożenia' },
          { icon: <RiLightbulbFlashLine />, label: 'Poprawa pozycji i ruchu' },
          { icon: <RiBarChart2Fill />, label: 'Testy przed i po' },
          { icon: <RiShieldCheckLine />, label: 'Stabilność i jakość' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/marketing`, label: 'Marketing' }}
        fourth={{ href: `/uslugi/marketing/optymalizacja-seo`, label: 'Optymalizacja SEO' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Na czym polega optymalizacja SEO i dlaczego działa?">
          <p>
            <strong>Optymalizacja SEO to kolejny etap po audycie SEO.</strong> Optymalizacja pozwala na wprowadzenie konkretnych zmian na stronie lub sklepie internetowym, które skracają czas
            ładowania, porządkują treści i sprawiają, że Google łatwiej rozumie Twoją ofertę. Dzięki temu strona zyskuje wyższą pozycję w Google, a użytkownicy szybciej znajdują to, czego potrzebują.
          </p>
          <br />
          <p>
            <strong>Mierzymy efekty każdej zmiany.</strong> Przed realizacją dodajemy na Twojej witrynie narzędzia analityczne oraz zapisujemy stan bieżący, a po publikacji sprawdzamy, jak poprawił
            się czas ładowania, pozycje i wejścia z Google. Wiesz dokładnie, co zadziałało.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionBasic
          variant="right"
          imageSrc="/assets/offer/optymalizacja-seo/optymalizacja-seo-zblizenie-na-raport.webp"
          imageAlt="Optymalizacja SEO — wyniki raportu"
          subtitle="Dla kogo"
          title="Kiedy warto zrobić optymalizację SEO i dla kogo ona jest?"
          description="Gdy masz już diagnozę (audyt) i chcesz przejść do wdrożeń, które najszybciej poprawią wyniki Twojej strony. Optymalizacja SEO jest najlepsza dla:"
          btnOne="Zamów optymalizację"
          btnOneLink="#kontakt"
        >
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm">
            <li>Właścicieli nowych stron, które potrzebują solidnych fundamentów przed skalowaniem treści i stworzeniem reklam.</li>
            <li>Właścicieli sklepów internetowych, którym zależy na szybkiej stronie i lepszej widoczności produktów.</li>
            <li>Firm usługowych i B2B. które potrzebują stabilnie zwiększać liczbę zapytań od klientów z Google.</li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <FeatureGrid
          title="Co dokładnie wdrażamy w ramach optymalizacji SEO?"
          subtitle="Kluczowe obszary i efekty"
          items={[
            {
              title: 'Szybkość ładowania',
              description: <>Skracamy czas wczytywania strony, optymalizujemy grafiki i kod strony. Efekt: strona działa szybciej, a użytkownicy rzadziej rezygnują z przeglądania.</>,
              icon: <RiSearchLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Tytuły i opisy widoczne w Google',
              description: <>Poprawiamy tytuły i opisy, by lepiej pasowały do zapytań użytkowników. Efekt: więcej trafnych zapytań i więcej wejść z wyników wyszukiwania.</>,
              icon: <RiLightbulbFlashLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Struktura treści i nawigacja',
              description: <>Porządkujemy nagłówki i menu, dodajemy logiczne połączenia między podstronami. Efekt: łatwiejsza nawigacja i lepsze rozumienie strony przez Google.</>,
              icon: <RiFileList2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Dodatkowe dane dla Google',
              description: <>Wprowadzamy dodatkowe informacje (np. sekcje pytań i odpowiedzi), które pomagają Google lepiej zrozumieć zawartość i to co dokładnie oferujesz.</>,
              icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jaki efekt mierzymy po optymalizacji SEO?" subtitle="KPI i raportowanie">
          <ul className="ml-5 list-disc space-y-2">
            <li>
              <strong>Pozycję strony:</strong> sprawdzamy na której pozycji pokazuje się Twoja strona przy poszczególnych frazach.
            </li>
            <li>
              <strong>Ilość fraz:</strong> patrzymy ile nowych fraz Google łączy z Twoją witryną i jak wpływa to na ruch oraz pozycję.
            </li>
            <li>
              <strong>Zapytania i ruch:</strong> patrzymy o ile wzrósł ruch na Twojej stronie oraz o ile wzrosła ilość uzupełnionych formularzy, telefonów i wiadomości po wprowadzonych zmianach.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak wygląda optymalizacja SEO witryny?"
          subtitle="Proces"
          items={[
            {
              title: '1. Ustalamy priorytety z audytu',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wybieramy zmiany, które dadzą najszybszy efekt w Twoim przypadku.</p>
                </div>
              ),
            },
            {
              title: '2. Wdrażamy i testujemy zmiany',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Wprowadzamy odpowiednie zmiany na stronie i informujemy o nich Google.</p>
                </div>
              ),
            },
            {
              title: '3. Raport i dalsze działania',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Dostajesz krótki raport z efektami optymalizację i listę następnych działań.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBasic
          variant="left"
          imageSrc="/assets/offer/optymalizacja-seo/optymalizacja-seo-edycja-strony.webp"
          imageAlt="Optymalizacji SEO — ekran edycji strony"
          subtitle="Wyniki wdrożeń"
          title={<>Jakie efekty widzimy najczęściej po optymalizacji SEO?</>}
          description="Poniżej kilka typowych rezultatów po 2-8 tygodniach od wdrożeń. Rzeczywiste wyniki zależą od branży i skali zmian."
        >
          <ul className="mt-4 grid grid-cols-1 gap-3 pl-0 text-sm md:grid-cols-3">
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Wyraźnie szybsze ładowanie strony</strong>, szczególnie na telefonach.
            </li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Więcej wejść z Google</strong> efekt może być zauważalny już po 2-3 miesiącach.
            </li>
            <li className="list-none rounded-2xl bg-white p-4 ring-1 ring-neutral-200">
              <strong>Wzrost liczby zapytań</strong> po dopracowaniu opisów oferty i nawigacji.
            </li>
          </ul>
        </SectionBasic>

        <Gap variant="line" />

        <SectionPrices
          title="Cennik optymalizacji SEO"
          subtitle="Przykładowe zakresy i ceny"
          plans={[
            {
              name: 'Optymalizacja SEO: 1+ stron',
              price: 'od 600 zł',
              description: 'Dla kogo: dla właścicieli prostych stron firmowych i landing pages ( stron z jedną podstroną ).',
              features: [
                'Poprawa prędkości i czasu ładowania strony (Core Web Vitals)',
                'Uporządkowanie tytułów, opisów i nagłówków H1-H3',
                'Optymalizacja grafik (rozmiar, ALT, format WebP)',
                'Uporządkowanie meta danych i struktury treści',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja SEO: 10+ stron',
              price: 'od 1 200 zł',
              description: 'Dla kogo: dla właścicieli rozbudowanych stron firmowych lub małych sklepów.',
              features: [
                'Wszystko z pakietu dla małych stron, a dodatkowo:',
                'Uporządkowanie struktury kategorii i adresów URL',
                'Dodanie danych strukturalnych (schema.org, FAQ, artykuły)',
                'Optymalizacja linkowania wewnętrznego i breadcrumbów',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Optymalizacja SEO: 30+ stron',
              price: 'od 2 500 zł',
              description: 'Dla kogo: dla właścicieli dużych stron firmowych i sklepów.',
              features: [
                'Wszystko z pakietu dla rozbudowanych stron, a dodatkowo:',
                'Optymalizacja crawl budgetu i eliminacja duplikacji adresów',
                'Weryfikacja kanonikalizacji, sitemap i pliku robots.txt',
                'Audyt parametrów filtrów i paginacji (e-commerce)',
              ],
              btnOne: 'Zamów bezpłatną wycenę',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ceny orientacyjne brutto. Ostateczna wycena zależy od technologii, wielkości witryny i tego w jakim tempie chcesz rosnąć. Dopasowujemy ofertę do Twojego budżetu"
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <SectionSteps
          title="Zobacz też"
          description="Optymalizacja najczęściej poprzedzona jest audytem, a po wdrożeniach przechodzimy do stałego pozycjonowania."
          items={[
            {
              icon: <RiSearchLine className="h-8 w-8" />,
              title: 'Audyt SEO (diagnostyka)',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Analizujemy stan Twojej witryny i tworzymy jasny plan poprawek i rozwoju.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/audyt-seo">
                      Zobacz audyt SEO
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
                  <p className="mb-3 text-sm">Stale pracujemy nad Twoją widocznością dostarczając raporty działań co miesiąc.</p>
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

        <ContactForm title="Zamów optymalizację SEO" description="Podaj adres swojej strony a my przygotujemy wycenę optymalizacji SEO" defaultSubject="Optymalizacja SEO" />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/marketing/optymalizacja-seo"
          items={[
            {
              question: 'Czy mogę zrobić optymalizację bez audytu?',
              answer: (
                <p>
                  Teorytycznie tak, ale nie polecamy takiego rozwiązania.{' '}
                  <a href="/uslugi/marketing/audyt-seo" className="inline-link">
                    Audyt SEO
                  </a>{' '}
                  wskazuje dokładne błędy na Twojej witrynie i pozwala opracować efektywny plan działania. Dzięki temu inwestujesz w to, co daje najszybszy efekt i nie marnujesz budżetu.
                </p>
              ),
              answerSchemaText:
                'Teorytycznie tak, ale nie polecamy takiego rozwiązania. wskazuje dokładne błędy na Twojej witrynie i pozwala opracować efektywny plan działania. Dzięki temu inwestujesz w to, co daje najszybszy efekt i nie marnujesz budżetu.',
            },
            {
              question: 'Kiedy zobaczę efekty optymalizacji SEO?',
              answer:
                'Część efektów (np. szybsze ładowanie) widać od razu. Pierwsze zmiany w widoczności zwykle pojawiają się w ciągu 2-8 tygodni, w zależności od skali prac i konkurencyjności branży.',
            },
            {
              question: 'Czy zajmujecie się też edycją lub tworzeniem treści?',
              answer: 'Tak. Poza technicznymi wdrożeniami przygotowujemy lub poprawiamy treści, tytuły i opisy tak, aby lepiej odpowiadały na pytania użytkowników.',
            },
            {
              question: 'Jak wygląda współpraca po optymalizacji?',
              answer: (
                <p>
                  Najczęściej przechodzimy do abonamentu{' '}
                  <a href="/uslugi/marketing/pozycjonowanie-stron" className="inline-link">
                    pozycjonowania
                  </a>
                  : rozwijamy treści, wzmacniamy strukturę i monitorujemy wyniki miesięcznie.
                </p>
              ),
              answerSchemaText: 'Po optymalizacji zwykle przechodzimy do pozycjonowania: rozwój treści, prace strukturalne i comiesięczny monitoring.',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Poprawmy Twoją widoczność w Google"
        description="Szybsza strona, lepsze opisy i porządek w strukturze — wszystko, co potrzebne do wzrostu."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        backgroundImage="/assets/bg/abstract-bg5.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
