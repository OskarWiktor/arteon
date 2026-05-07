import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiBarChart2Fill, RiCustomerService2Line, RiFileList2Line, RiLightbulbFlashLine, RiLineChartLine, RiSearchEyeLine, RiSearchLine, RiShieldCheckLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FeatureGrid from '@/components/sections/FeatureGrid';
import { IoAnalytics } from 'react-icons/io5';
import Button from '@/components/ui/buttons/Button';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Script from 'next/script';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import { siteUrl } from '@/utils/absoluteUrl';

export const metadata = {
  title: 'Marketing internetowy - SEO, reklamy i komunikacja | Arteon',
  description: 'Sprawdź naszą rozbudowaną ofertę marketingu internetowego. Przeprowadź audyt swojej obecności w sieci i przyciągnij właściwych klientów',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/marketing' },
  openGraph: {
    title: 'Sprawdź naszą rozbudowaną ofertę marketingu internetowego. Przeprowadź audyt swojej obecności w sieci i przyciągnij właściwych klientów',
    description: 'Kompletny marketing: od diagnozy i wdrożeń SEO, przez stałe pozycjonowanie, po kampanie płatne, media społecznościowe i spójny branding.',
    url: 'https://www.arteonagency.pl/uslugi/marketing',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/msc/moskup-strony-msc-psychotherapy.webp', width: 1200, height: 630 }],
  },
} as const;

function ItemListSchema() {
  const services = [
    { name: 'Audyt SEO', path: '/uslugi/marketing/audyt-seo' },
    { name: 'Optymalizacja SEO', path: '/uslugi/marketing/optymalizacja-seo' },
    { name: 'Pozycjonowanie stron', path: '/uslugi/marketing/pozycjonowanie-stron' },
  ];
  const json = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    '@id': `${siteUrl}/uslugi/marketing#itemlist`,
    name: 'Usługi marketingowe - Arteon',
    itemListOrder: 'https://schema.org/ItemListOrderAscending',
    itemListElement: services.map((s, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      url: `${siteUrl}${s.path}`,
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
        title="Marketing internetowy"
        description={<>Przyciągnij nowych klientów, przemyślanym działaniem marketingowym</>}
        variant="left"
        backgroundImage="/assets/projects/msc/moskup-strony-msc-psychotherapy.webp"
        overlay="black"
      />

      <BenefitBelt variant="carousel" />

      <Breadcrumbs second={{ href: '/uslugi', label: 'Usługi' }} third={{ href: `/uslugi/marketing`, label: 'Marketing' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <FeatureGrid
          title="Co zyskujesz zlecając nam marketing?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Jasną strategię działania',
              description: <>Plan działań oparty na psychologii w biznesie z podziałem na szybkie wygrane i strategiczne działania długoterminowe.</>,
              icon: <RiLightbulbFlashLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Raporty i decyzje oparte na danych',
              description: <>Przed realizacją jakichkolwiek działań, dokładnie badamy Twoją konkurencję, tak, abyś miał pewność, że marketing z nami będzie skuteczny.</>,
              icon: <IoAnalytics className="text-primary h-6 w-6" />,
            },
            {
              title: 'Pełna własność danych i kont',
              description: <>Masz dostęp do wszystkich narzędzi, z których korzystamy, dzięki czemu w dowolnej chwili możesz sprawdzić wyniki naszych działań.</>,
              icon: <RiShieldCheckLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'SEO techniczne + treściowe',
              description: <>Prowadzimy pełne działania pozycjonowania stron, dzięki czemu Twoja witryna ma treść, która odpowiada klientom oraz techniczną strukturę, którą lubią wyszukiwarki</>,
              icon: <RiSearchLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Lokalne lub krajowe SEO',
              description: <>Prowadzimy działania SEO krajowe oraz lokalne, dzięki czemu Twój biznes może rozwijać się w Twoim mieście i jednocześnie za granicą lub w całym kraju</>,
              icon: <RiSearchEyeLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Reklamy Google i Meta',
              description: <>Tworzymy kampanie oparte na realnych problemach klientów. Testujemy kreacje i słowa kluczowe, a budżet kierujemy w to, co działa.</>,
              icon: <RiBarChart2Fill className="text-primary h-6 w-6" />,
            },
            {
              title: 'Zero ukrytych kosztów',
              description: <>Na każdym etapie wiesz, ile i za co płacisz. Budżet, zakres i terminy są rozpisane przed startem działań.</>,
              icon: <RiCustomerService2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wsparcie po wdrożeniu',
              description: <>Stale informujemy Cię o wynikach naszych działań, dajemy Ci jasne podsumowanie w mailu oraz prowadzimy konsultacje online</>,
              icon: <RiShieldCheckLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

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
                    Przeprowadzamy audyt SEO, a następnie ustalamy cele i zakres na trzy najbliższe miesiące: tematy treści, podstrony do dopracowania i działania wspierające Twoją pozycję.
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
                  <p className="mb-3 text-sm">Optymalizujemy prędkość strony i poprawiamy ją od strony technicznej tak, aby Google uznał ją za wartościową i lepszą od Twojej konkurencji.</p>
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
                  <p className="mb-3 text-sm">Budujemy widoczność strategicznym działaniem co miesiąc. Wprowadzamy treści, które odpowiadają na potrzeby Twoich klientów.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Zobacz pozycjonowanie
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

        <WorkSteps variant="marketing" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt usług marketingowych"
          description="Napisz czym zajmuje się Twoja firma, podaj adres strony i opisz jakie cele chcesz osiągnąć - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/offer/pozycjonowanie-stron/pozycjonowanie-stron-napis-seo.webp"
          imageAlt="Pozycjonowanie stron i marketing internetowy"
          defaultSubject="Marketing"
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Strony internetowe',
              size: 'large',
              backgroundImage: '/assets/projects/napilota/mockup-strony-napilota.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Sklepy internetowe',
              size: 'medium',
              backgroundImage: '/assets/projects/trilllizo/moskup-strony-trilllizo.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/sklepy-internetowe',
            },
            {
              title: 'Projekty graficzne',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/mockup-teczka-ofertowa-luxnova.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne',
            },
            {
              title: 'Tworzenie treści',
              size: 'small',
              backgroundImage: '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/tworzenie-tresci',
            },
          ]}
        />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Rozwiń markę mądrą strategią"
        description="Od audytu i wdrożeń po kampanie i treści - planujemy i prowadzimy działania, które zwiększają sprzedaż"
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        backgroundImage="/assets/projects/msc/moskup-strony-msc-psychotherapy.webp"
        overlay="black"
      />

      <ItemListSchema />
    </>
  );
}
