import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBaner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABaner from '@/components/sections/CTABaner';
import Gap from '@/components/ui/Gap';
import FeesSteps from '@/components/sections/steps/FeesSteps';
import TechSteps from '@/components/sections/steps/TechSteps';
import ProjectsOverview from '@/components/sections/projects/ProjectsOverview';
import ServicesSteps from '@/components/sections/steps/ServicesSteps';
import {
  RiShieldCheckLine,
  RiBarChart2Fill,
  RiCustomerService2Line,
  RiSpeedFill,
  RiArticleLine,
  RiBookOpenLine,
  RiBrushLine,
  RiDatabase2Line,
  RiDeviceLine,
  RiGlobalLine,
  RiMoneyDollarCircleLine,
  RiPencilRuler2Line,
  RiShoppingCartLine,
} from 'react-icons/ri';
import ContactForm from '@/components/sections/ContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { GoLaw } from 'react-icons/go';
import { IoAccessibility } from 'react-icons/io5';
import SectionPrices, { SectionPricesPlan, Note } from '@/components/ui/sections/SectionPrices';

export const metadata = {
  title: 'Sklepy internetowe - projekt i wdrożenie | Arteon',
  description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
  keywords: ['sklepy internetowe', 'tworzenie sklepów online', 'e-commerce', 'wdrożenie sklepu', 'opisy produktów', 'widoczność w Google'],
  alternates: { canonical: '/uslugi/sklepy-internetowe' },
  openGraph: {
    title: 'Sklepy internetowe - projekt i wdrożenie | Arteon',
    description: 'Funkcjonalne sklepy, prosta obsługa i czytelny zakup. Treści i widoczność w Google w pakiecie. Gwarancja i wsparcie.',
    url: 'https://www.arteonagency.pl/uslugi/sklepy-internetowe',
    type: 'website',
  },
} as const;

export default function OfferWebPage() {
  return (
    <>
      <HeroBanner
        title="Sklepy internetowe"
        description={
          <>
            Zwiększ swoją skuteczność, sprzedając produkty we własnym <strong>sklepie internetowym</strong>
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="/kontakt"
        buttonSecond="Nasze realizacje"
        buttonSecondLink="/realizacje"
        variant="left"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiSpeedFill />, label: 'Szybkość i stabilność' },
          { icon: <RiShieldCheckLine />, label: 'Bezpieczieństwo' },
          { icon: <RiBarChart2Fill />, label: 'Stała kontrola wyników' },
          { icon: <RiCustomerService2Line />, label: 'Wsparcie rozwoju' },
        ]}
      />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/sklepy-internetowe`, label: 'Sklepy internetowe' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <FeatureGrid
          title="Co dostajesz"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Indywidualny projekt graficzny sklepu',
              icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Redakcja treści pod sprzedaż i SEO',
              icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
              icon: <IoAccessibility className="h-5 w-5 text-slate-500" />,
            },
            {
              title: 'Wsparcie prawne: polityki i regulaminy',
              icon: <GoLaw className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Profesjonalna obróbka zdjęć produktów',
              icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Bezpieczeństwo płatności i certyfikaty SSL',
              icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Pełna Responsywność na urządzeniach mobilnych',
              icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Łatwe zarządzanie produktami i treściami (CMS)',
              icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Integracje płatności i systemów dostaw',
              icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Koszyk i proces zakupowy zoptymalizowany pod konwersję',
              icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Sklep zgodny z przepisami na rynkach międzynarodowych',
              icon: <RiGlobalLine className="h-6 w-6 text-slate-500" />,
            },
            {
              title: 'Darmowe, dedykowane szkolenie PDF z obsługi',
              icon: <RiBookOpenLine className="h-6 w-6 text-slate-500" />,
            },
          ]}
        />

        <Gap variant="line" />

        <ProjectsOverview title="Wyróżnione realizacje sklepów internetowych" category="sklep" subtitle="Portfolio" />

        <Gap />
      </Wrapper>

      <TechSteps />

      <Wrapper>
        <Gap />

        <SectionPrices
          id="pricing-shops"
          subtitle="Przykładowe realizacje"
          title="Cennik sklepów internetowych"
          plans={
            [
              {
                name: 'Sklep mały',
                platform: 'WordPress / WooCommerce',
                price: '4 000 - 6 000 zł',
                description: 'Bezpieczny start sprzedaży online. Prosty w obsłudze, szybki i przygotowany pod SEO - gotowy, by zacząć sprzedawać od pierwszego dnia.',
                features: [
                  'Do 50 produktów',
                  'Płatności online i dostawy skonfigurowane pod Twój rynek',
                  'SEO techniczne i redakcja treści',
                  'Przejrzyste kategorie i wygodne wyszukiwanie',
                  'Spójna architektura informacji oraz wygląd',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Darmowe szkolenie PDF z obsługi sklepu',
                ],
                btnOne: 'Zamów mały sklep',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Sklep średni',
                platform: 'WordPress / WooCommerce',
                price: '10 000 - 13 000 zł',
                description: 'Sklep dla rosnącej marki. Setki produktów, promocje, kody rabatowe i zaplecze marketingowe, które napędza wyniki.',
                features: [
                  'Do 300 produktów',
                  'Zaawansowane filtry i wyszukiwarka produktów',
                  'Zestawy, kupony, promocje i listy życzeń',
                  'Integracje płatności i dostaw dopasowane do branży',
                  'SEO techniczne i redakcja treści',
                  'Spójna architektura informacji oraz wygląd',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Darmowe szkolenie PDF z obsługi sklepu',
                ],
                btnOne: 'Zamów średni sklep',
                btnOneLink: '#kontakt',
              },
              {
                name: 'Sklep premium',
                platform: 'Webflow Ecommerce',
                price: '20 000 - 28 000 zł',
                description: 'Wygląd premium i płynne doświadczenie zakupowe. Szybki, elastyczny, gotowy na rozwój międzynarodowy.',
                features: [
                  'Do 1000 produktów',
                  'Projekt graficzny premium - więcej możliwości dzięki technologii',
                  'Najwyższy poziom SEO technicznego',
                  'Koszyk, checkout i integracje płatności skonfigurowane pod konwersję',
                  'Sekcje kolekcji, bestsellery i rekomendacje produktów',
                  'Blog i treści edukacyjne wspierające ruch organiczny',
                  'WCAG 2.1 AA + Deklaracja Dostępności',
                  'Darmowe wsparcie prawne - polityka prywatności, regulaminy',
                  'Panel do samodzielnej edycji produktów i treści',
                  'Darmowe szkolenie PDF z obsługi sklepu',
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
                <p className="text-[#5e5e5e]">
                  <strong className="text-[#080808]">Potrzebujesz czegoś więcej? </strong>
                  Tworzymy zaawansowane sklepy i aplikacje w Next.js - rozwiązania szyte na miarę, gotowe na zaawansowane integracje, funkcje oraz duży ruch.
                </p>
              ),
              ctaLabel: 'Porozmawiajmy o Twoim projekcie',
              ctaLink: '#kontakt',
            } as Note
          }
        />

        <Gap variant="line" />

        <FeesSteps />

        <Gap variant="line" />

        <WorkSteps variant="web" />

        <Gap size="sm" />

        <ContactForm title="Zbudujmy Twój sklep online" description="Opisz swoją wizję, potrzeby oraz cele i otrzymaj darmową wycenę" defaultSubject="Sklep internetowy" />

        <Gap variant="line" />

        <FaqPanels
          pageUrl="https://www.arteonagency.pl/uslugi/sklepy-internetowe"
          items={[
            {
              question: 'Ile kosztuje stworzenie sklepu internetowego?',
              answer:
                'Cena sklepu internetowego zależy od między innymi liczby produktów, ich wariantów, projektu graficznego oraz integracji (płatności, dostawy, faktury, magazyn). Proste sklepy internetowe tworzymy od 4000 zł brutto',
            },
            {
              question: 'Jak długo trwa stworzenie sklepu internetowego?',
              answer: 'Zazwyczaj od 10 do 20 dni roboczych - zależnie od ilości produktów, podstron oraz wszelkich funkcjonalności',
            },
            {
              question: 'Ile kosztuje roczne utrzymanie sklepu internetowego?',
              answer:
                'Koszt utrzymania sklepu internetowego jest zależy między innymi od ceny domeny ( adresu URL strony ) oraz ceny hostingu ( wynajmowanego miejsca na serwerze ) oraz ewentualnych płatnych integracji. Zwykle od 300 złotych rocznie w górę, zależnie od dostawcy i skali ruchu.',
            },
            {
              question: 'Co powinnien zawierać dobry sklep internetowy?',
              answer:
                'Jasną ofertę produktów, sekcje z korzyściami produktów, opinie, prostą drogę kupna produktu oraz wygodną wersję na telefon. Dodatkowo: podstawy prawne (politykę prywatności, cookies, regulaminy), wysoką prędkość ładowania oraz optymalizację pod wyszukiwarki',
            },
            {
              question: 'Jakie metody płatności mogę mieć w sklepie internetowym?',
              answer: 'Sklep może być zintegrowany z PayU, Przelewy24, Stripe, Blikiem lub klasycznym przelewem bankowym. Dobieramy metody płatności do Twoich potrzeb i Twoich klientów',
            },
            {
              question: 'Czy sklep internetowy będzie widoczny w Google?',
              answer: 'Tak, dbamy o optymalizację SEO: szybkość, mobilność, poprawne nagłówki i meta tagi. Pomagamy w całym procesie pozycjonowania sklepu',
            },
            {
              question: 'Czy sklep będzie zabezpieczony?',
              answer: 'Tak, do każdego sklepu dołączamy certyfikat SSL, zabezpieczenia przed spamem i nieautoryzowanym dostępem',
            },
            {
              question: 'Nie jestem pewien jak przygotować regulamin i politykę do sklepu internetowego, czy mogę liczyć na pomoc?',
              answer:
                'Pomagamy w przygotowaniu wszystkich potrzebnych prawnych stron: regulaminy, polityki prywatności, zasady zwrotów i reklamacji. Dopasujemy treści do Twojej branży i form sprzedaży.',
            },
            {
              question: 'Czy po uruchomieniu sklepu internetowego mogę liczyć na pomoc w jego rozwoju?',
              answer: 'Tak, możemy przeanalizować Twoją branżę i przygotować jasny plan rozwoju, który przełoży się na wyższą pozycję w Google oraz większą liczbę klientów',
            },
            {
              question: 'Czy będe w stanie samodzielnie dodawać produkty w moim sklepie internetowym?',
              answer: 'Tak, po stworzeniu i uruchomieniu Twojego sklepu, otrzymasz szkolenie w formie PDF z obsługi sklepu',
            },
            {
              question: 'Nie znam się na technologii - czy przeprowadzicie mnie przez cały proces?',
              answer: 'Tak, uwielbiamy pomagać i edukować - prowadzimy cały proces w przystępny oraz transparentny sposób, objaśniając wszystkie kroku bez technologicznego żargonu',
            },
          ]}
        />

        <Gap variant="line" />

        <ServicesSteps />

        <Gap size="sm" />
      </Wrapper>

      <CTABaner
        title="Zbudujmy sklep, który rozwija się z Tobą"
        description="Tworzymy dedykowane rozwiązanie, gotowe do rozwoju - szybkie, stabilne i zgodne z przepisami"
        primaryLabel="Wyceń projekt"
        primaryLink="/kontakt"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />
    </>
  );
}
