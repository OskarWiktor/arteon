import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import SectionBento from '@/components/ui/sections/SectionBento';
import {
  RiArticleLine,
  RiBookOpenLine,
  RiDeviceLine,
  RiMoneyDollarCircleLine,
  RiPencilRuler2Line,
  RiCalendarCheckLine,
  RiKey2Line,
  RiLifebuoyLine,
  RiMessage2Line,
  RiSpeedLine,
  RiBrushLine,
} from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionPrices, { type Note, type SectionPricesPlan } from '@/components/ui/sections/SectionPrices';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import { GoLaw } from 'react-icons/go';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';

export const metadata = {
  title: 'Sklepy internetowe - projekt i realizacja | Arteon',
  description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/sklepy-internetowe' },
  openGraph: {
    title: 'Sklepy internetowe - projekt i realizacja | Arteon',
    description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
    url: 'https://www.arteonagency.pl/uslugi/sklepy-internetowe',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/trilllizo/moskup-strony-trilllizo.webp', width: 1200, height: 630 }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/sklepy-internetowe',
    serviceName: 'Tworzenie sklepów internetowych',
    description: 'Budujemy sklepy online, które konwertują: szybkie karty produktu, prosty koszyk, płatności i wysyłki, analityka sprzedaży oraz SEO.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-sklepy-internetowe" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Sklepy internetowe"
        description={
          <>
            Zwiększ swoją skuteczność, sprzedając produkty we własnym <strong>sklepie internetowym</strong>, bez zbędnych pośredników
          </>
        }
        secondaryCtaLabel="Bezpłatna wycena"
        secondaryCtaLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/trilllizo/moskup-strony-trilllizo.webp"
        overlay="black"
      />

      <BenefitBelt variant="carousel" />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/sklepy-internetowe`, label: 'Sklepy internetowe' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Realizacje sklepów internetowych" category="sklep" />

        <Gap variant="line" />

        <SectionInfo title="Co zyskujesz tworząc sklep internetowy?">
          <p>
            <strong>Własny sklep internetowy daje Twojej firmie realną niezależność.</strong> Sprzedajesz na własnej platformie bez pośredników, więc
            <strong> więcej pieniędzy zostaje u Ciebie</strong>. Platformy sprzedażowe pobierają prowizje rzędu <strong>8-15%+</strong>{' '}
            <a className="inline-link" href="https://sell.amazon.com/pricing" target="_blank" rel="noopener noreferrer">
              (Amazon - fees)
            </a>
            ,<strong> 6,5%+</strong>{' '}
            <a className="inline-link ml-2" href="https://help.etsy.com/hc/en-us/articles/115015663607-Fees-and-Taxes-on-Etsy" target="_blank" rel="noopener noreferrer">
              (Etsy - fees)
            </a>
            , a na Allegro zależnie od kategorii, to zwykle przedział kilkunastu procent
            <a className="inline-link ml-2" href="https://allegro.pl/pomoc/dla-sprzedajacych/oplaty-i-prowizje" target="_blank" rel="noopener noreferrer">
              (Allegro - opłaty)
            </a>
            .
          </p>

          <br />

          <p>
            <strong>Sklep online prowadzi sprzedaż 24/7.</strong> Klienci chętnie kupują produkty w sklepach, na własnych telefonach - dziś to już <strong>ponad połowa</strong> transakcji online (np.
            sezon 2024: <strong>~53%</strong>, prognoza 2025: <strong>~56%</strong> udziału mobile w przychodach e-commerce){' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
              href="https://blog.adobe.com/en/publish/2024/08/21/adobe-analytics-mobile-shopping-expected-drive-53-percent-online-sales-during-2024-holiday-season"
            >
              (źródło 1)
            </a>{' '}
            <a target="_blank" rel="noopener noreferrer" className="inline-link" href="https://business.adobe.com/resources/holiday-shopping-report.html">
              (źródło 2)
            </a>
            . Każda wizyta użytkownika w Twoim sklepie internetowym to dodatkowa szansa na zamówienie.
          </p>

          <br />

          <p>
            <strong>Masz klientów u siebie, nie na cudzej platformie.</strong> Budujesz własną bazę kontaktów i relacje. Kanały direct (np. e-mail) potrafią zwracać nawet <strong>~36:1</strong>{' '}
            <a target="_blank" rel="noopener noreferrer" className="inline-link" href="https://dma.org.uk/uploads/misc/dma-email-benchmarking-report-2023.pdf">
              (źródło 1)
            </a>{' '}
            <a target="_blank" rel="noopener noreferrer" className="inline-link" href="https://www.litmus.com/blog/infographic-the-roi-of-email-marketing">
              (źródło 2)
            </a>
            - rośnie lojalność i liczba zakupów.
          </p>

          <br />

          <p>
            Średni poziom porzuceń koszyka to wciąż <strong>~70% </strong>{' '}
            <a target="_blank" rel="noopener noreferrer" className="inline-link" href="https://baymard.com/lists/cart-abandonment-rate">
              (źródło)
            </a>
            . We własnym sklepie internetowym możesz uprościć ścieżkę zakupu oraz odzyskać te transakcje.
          </p>

          <br />

          <p>
            <strong>Dobra platforma sprzedażowa robi za Ciebie trzy rzeczy naraz:</strong>
          </p>

          <ul className="ml-5 list-disc">
            <li>Przyciąga klientów gotowych do zakupu,</li>
            <li>Wyjaśnia prosto warunki zakupu oraz dostaw,</li>
            <li>Sprzedaje bez Twojego udziału</li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz tworząc sklep internetowy z nami?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Indywidualny projekt graficzny sklepu',
              description: <>Wygląd, który od pierwszych sekund pokazuje profesjonalizm i wyróżnia Twój sklep</>,
              icon: <RiPencilRuler2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Redakcję treści sprzedażowych dla lepszej pozycji w Google',
              description: <>Opisy, które jasno mówią o korzyściach i prowadzą do zakupu</>,
              icon: <RiArticleLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dobór i obróbka zdjęć produktów',
              description: <>Pomagamy wybrać spójne zdjęcia oraz dopasowujemy je do sklepu: kadry, tło, rozmiary, waga.</>,
              icon: <RiBrushLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wsparcie prawne przy politykach i regulaminach',
              description: <>Przeprowadzamy Cię przez wszelkie wymogi prawne</>,
              icon: <GoLaw className="text-primary h-6 w-6" />,
            },
            {
              title: 'Sklep online dostosowany do różnych urządzeń',
              description: <>Czytelność oraz szybkość na każdym urządzeniu</>,
              icon: <RiDeviceLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Szybkość i stabilność',
              description: <>Sklep online który działa szybko, bez awarii</>,
              icon: <RiSpeedLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Pełną własność i dostępy',
              description: <>Przekazujemy Ci wszystkie konta oraz hasła - w trakcie oraz po zakończeniu prac</>,
              icon: <RiKey2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: <>Dostajesz wycenę z jasnym zakresem, informujemy Cię na bieżąco, ile coś kosztuje</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Termin i plan z kamieniami milowymi',
              description: <>Tworzymy harmonogram i trzymamy się go. Wiesz, co będzie gotowe i kiedy</>,
              icon: <RiCalendarCheckLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Transparentna współpraca na bieżąco',
              description: <>Informujemy Cię regularnie o postępach naszych prac nad Twoim sklepem</>,
              icon: <RiMessage2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dedykowane szkolenie PDF z obsługi sklepu',
              description: <>Proste instrukcje, stworzone tak, abyś samodzielnie mógł dodać produkty, ceny i promocje</>,
              icon: <RiBookOpenLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dalsze wsparcie + 2 miesiące gwarancji',
              description: <>Po publikacji pomagamy w dalszym rozwoju i skalowaniu sklepu internetowego. Ewentualne błędy poprawiamy w ramach gwarancji</>,
              icon: <RiLifebuoyLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          id="pricing-shops"
          title="Cennik sklepów internetowych"
          plans={
            [
              {
                name: 'Sklep mały',
                price: '2 000 - 3 000',
                description: 'Bezpieczny start sprzedaży online. Prosty w obsłudze, szybki i przygotowany pod SEO - gotowy, by zacząć sprzedawać od pierwszego dnia.',
                features: [
                  'Do 20 produktów',
                  'Płatności online i dostawy skonfigurowane pod Twój rynek',
                  'SEO techniczne i redakcja treści',
                  'Przejrzyste kategorie i wygodne wyszukiwanie',
                  'Spójna architektura informacji oraz wygląd',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Szkolenie PDF z obsługi sklepu',
                ],
                btnOne: 'Zamów mały sklep',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Sklep średni',
                price: '3 000 - 4 000 zł',
                description: 'Sklep internetowy dla rosnącej marki. Promocje, kody rabatowe i zaplecze marketingowe, które napędza wyniki.',
                features: [
                  'Do 60 produktów',
                  'Zaawansowane filtry i wyszukiwarka produktów',
                  'Zestawy, kupony, promocje i listy życzeń',
                  'Integracje płatności i dostaw dopasowane do branży',
                  'SEO techniczne i redakcja treści',
                  'Spójna architektura informacji oraz wygląd',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Szkolenie PDF z obsługi sklepu',
                ],
                btnOne: 'Zamów średni sklep',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Sklep premium',
                price: '4 000 - 6 000 zł',
                description: 'Wygląd premium i płynne doświadczenie zakupowe. Szybki, elastyczny, gotowy na rozwój międzynarodowy.',
                features: [
                  'Od 60 produktów',
                  'Projekt graficzny premium - więcej możliwości dzięki technologii',
                  'Najwyższy poziom SEO technicznego',
                  'Koszyk, checkout i integracje płatności skonfigurowane pod sprzedaż',
                  'Sekcje kolekcji, bestsellery i rekomendacje produktów',
                  'Blog i treści edukacyjne wspierające ruch organiczny',
                  'WCAG 2.1 AA + Deklaracja Dostępności',
                  'Wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Szkolenie PDF z obsługi sklepu',
                ],
                btnOne: 'Zamów sklep premium',
                btnOneLink: '#kontakt',
                lastPlan: true,
              },
            ] as SectionPricesPlan[]
          }
          note={
            {
              text: (
                <p className="text-light">
                  <strong className="text-dark">Potrzebujesz czegoś więcej? </strong>
                  Tworzymy zaawansowane sklepy i aplikacje w Next.js - rozwiązania szyte na miarę, gotowe na zaawansowane integracje, funkcje oraz duży ruch.
                </p>
              ),
              ctaLabel: 'Porozmawiajmy o Twoim projekcie',
              ctaLink: '#kontakt',
            } as Note
          }
        />

        <Gap />

        <WorkSteps variant="web" />

        <Gap size="sm" />

        <SectionContactForm
          title="Sprawdź koszt realizacji sklepu internetowego"
          description="Napisz jakie produkty chcesz sprzedawać, czy potrzebujesz pomocy z tworzeniem treści oraz czy posiadasz materiały graficzne (logo oraz zdjęcia) i otrzymaj darmową wycenę realizacji."
          imageSrc="/assets/projects/trilllizo/moskup-strony-trilllizo.webp"
          imageAlt="Realizacja sklepu internetowego - Trilllizo mockup"
          defaultSubject="Sklep internetowy"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/sklepy-internetowe"
          title="Najczęstsze pytania dotyczące projektów sklepów internetowych"
          items={[
            {
              question: 'Ile kosztuje stworzenie sklepu internetowego?',
              answer:
                'Cena sklepu internetowego zależy między innymi od liczby produktów, ich wariantów, projektu graficznego oraz integracji (płatności, dostawy, faktury, magazyn). Proste sklepy internetowe tworzymy od 4000 zł.',
            },
            {
              question: 'Jak długo trwa stworzenie sklepu internetowego?',
              answer: 'Zazwyczaj od 10 do 20 dni roboczych, zależnie od liczby produktów, podstron oraz funkcjonalności.',
            },
            {
              question: 'Ile kosztuje roczne utrzymanie sklepu internetowego?',
              answer:
                'Koszt utrzymania sklepu internetowego zależy między innymi od ceny domeny (adresu URL strony) oraz ceny hostingu (wynajmowanego miejsca na serwerze) oraz ewentualnych płatnych integracji. Zwykle od 300 złotych rocznie w górę, zależnie od dostawcy i skali ruchu.',
            },
            {
              question: 'Co powinien zawierać dobry sklep internetowy?',
              answer:
                'Jasną ofertę produktów, sekcje z korzyściami, opinie klientów, prostą ścieżkę zakupową oraz wygodną wersję na telefon. Dodatkowo: podstawy prawne (politykę prywatności, pliki cookie, regulaminy), wysoką prędkość ładowania oraz optymalizację pod wyszukiwarki.',
            },
            {
              question: 'Jakie metody płatności mogę mieć w sklepie internetowym?',
              answer: 'Sklep może być zintegrowany z PayU, Przelewy24, Stripe, Blikiem lub klasycznym przelewem bankowym. Dobieramy metody płatności do Twoich potrzeb i oczekiwań Twoich klientów.',
            },
            {
              question: 'Czy sklep internetowy będzie widoczny w Google?',
              answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania sklepu.',
            },
            {
              question: 'Czy sklep będzie zabezpieczony?',
              answer: 'Tak, do każdego sklepu dołączamy certyfikat SSL, zabezpieczenia przed spamem i nieautoryzowanym dostępem.',
            },
            {
              question: 'Nie jestem pewien jak przygotować regulamin i politykę do sklepu internetowego, czy mogę liczyć na pomoc?',
              answer:
                'Pomagamy w przygotowaniu wszystkich potrzebnych prawnych stron: regulaminy, polityki prywatności, zasady zwrotów i reklamacji. Dopasujemy treści do Twojej branży i form sprzedaży.',
            },
            {
              question: 'Czy po uruchomieniu sklepu internetowego mogę liczyć na pomoc w jego rozwoju?',
              answer: 'Tak, możemy przeanalizować Twoją branżę i przygotować jasny plan rozwoju, który przełoży się na wyższą pozycję w Google oraz większą liczbę klientów.',
            },
            {
              question: 'Czy będę w stanie samodzielnie dodawać produkty w moim sklepie internetowym?',
              answer: 'Tak, po stworzeniu i uruchomieniu sklepu otrzymasz szkolenie w formie PDF z instrukcją obsługi.',
            },
            {
              question: 'Nie znam się na technologii - czy przeprowadzicie mnie przez cały proces?',
              answer: 'Tak, uwielbiamy pomagać i edukować - prowadzimy cały proces w przystępny oraz transparentny sposób, objaśniając wszystkie kroki bez technologicznego żargonu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Strony internetowe',
              size: 'large',
              backgroundImage: '/assets/projects/eliza-wronska/moskup-strony-eliza-wronska.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Pozycjonowanie stron',
              size: 'medium',
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/marketing/pozycjonowanie-stron',
            },
            {
              title: 'Projekt logo',
              size: 'small',
              backgroundImage: '/assets/projects/km2/mockup-logo-km2.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-logo',
            },
            {
              title: 'Szablony media społecznościowe',
              size: 'small',
              backgroundImage: '/assets/projects/msc/mockup-szablon-social-media-msc-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące sklepów internetowych" categorySlug="sklepy" articles={getArticlePreviewsByCategory('sklepy', 6)} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zbudujmy sklep, który rozwija się z Tobą"
        description="Tworzymy dedykowane rozwiązanie, gotowe do rozwoju - szybkie, stabilne i zgodne z przepisami"
        btnOne="Wyceń projekt"
        btnOneLink="#kontakt"
        backgroundImage="/assets/projects/trilllizo/moskup-strony-trilllizo.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
