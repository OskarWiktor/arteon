import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import { toAbsoluteUrl } from '@/lib/url';
import {
  RiFileList2Line,
  RiSearchEyeLine,
  RiLineChartLine,
  RiBookletLine,
  RiFileTextLine,
  RiFolderOpenLine,
  RiIdCardLine,
  RiLayoutLine,
  RiPantoneLine,
  RiQuillPenLine,
  RiTShirt2Line,
  RiArticleLine,
  RiFilePdfLine,
  RiPencilLine,
  RiShareForwardLine,
  RiShoppingCartLine,
  RiCoupon2Line,
  RiPriceTag3Line,
  RiRestaurant2Line,
} from 'react-icons/ri';

const SERVICES = [
  { name: 'Strony internetowe', path: '/uslugi/strony-internetowe' },
  { name: 'Sklepy internetowe', path: '/uslugi/sklepy-internetowe' },
  { name: 'Blogi internetowe', path: '/uslugi/blogi-internetowe' },
  { name: 'Projekt wizytówki', path: '/uslugi/projekty-graficzne/projekt-wizytowki' },
  { name: 'Projekt ulotki', path: '/uslugi/projekty-graficzne/projekt-ulotki' },
  { name: 'Teczka ofertowa', path: '/uslugi/projekty-graficzne/projekt-teczki-ofertowej' },
  { name: 'Papier firmowy', path: '/uslugi/projekty-graficzne/projekt-papieru-firmowego' },
  { name: 'Odzież firmowa', path: '/uslugi/projekty-graficzne/projekt-odziezy-firmowej' },
  { name: 'Projekt logo', path: '/uslugi/projekty-graficzne/projekt-logo' },
  { name: 'Projekt katalogu', path: '/uslugi/projekty-graficzne/projekt-katalogu' },
  { name: 'Identyfikacja wizualna', path: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej' },
  { name: 'Projekt graficzny strony', path: '/uslugi/projekty-graficzne/projekt-graficzny-strony' },
  { name: 'Szablony postów na social media', path: '/uslugi/projekty-graficzne/szablony-postow-social-media' },
  { name: 'Kupony rabatowe i vouchery', path: '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera' },
  { name: 'Projekt cennika', path: '/uslugi/projekty-graficzne/projekt-cennika' },
  { name: 'Karty lojalnościowe', path: '/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej' },
  { name: 'Projekt menu restauracji', path: '/uslugi/projekty-graficzne/projekt-menu-restauracji' },
  { name: 'Audyt SEO', path: '/uslugi/marketing/audyt-seo' },
  { name: 'Optymalizacja SEO', path: '/uslugi/marketing/optymalizacja-seo' },
  { name: 'Pozycjonowanie stron', path: '/uslugi/marketing/pozycjonowanie-stron' },
  { name: 'Tworzenie treści', path: '/uslugi/tworzenie-tresci' },
] as const;

export const metadata = {
  title: 'Usługi - strony, sklepy, grafika i marketing - Arteon',
  description: 'Kompleksowa oferta usług: strony, sklepy, blogi, projekty graficzne, treści i marketing. Wszystko w jednym miejscu.',
  alternates: { canonical: toAbsoluteUrl('/uslugi') },
  openGraph: {
    title: 'Usługi - strony, sklepy, grafika i marketing - Arteon',
    description: 'Kompleksowa oferta usług: strony, sklepy, blogi, projekty graficzne, treści i marketing. Wszystko w jednym miejscu.',
    url: toAbsoluteUrl('/uslugi'),
    type: 'website',
    // TODO: Add unique OpenGraph image for services page: /assets/og/uslugi.webp (1200x630px)
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp') }],
  },
} as const;

export default function OfferPage() {
  return (
    <>
      <HeroBanner backgroundImage="/assets/bg/abstract-bg12.webp" overlay="black" title="Nasze usługi" variant="center" />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Witryny internetowe"
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Strony internetowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3">
                    Tworzymy nowoczesne strony internetowe w oparciu o sprawdzone technologie. Tworzymy dedykowany wygląd oraz treści dopasowane do Twoich potrzeb i Twoich klientów.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/strony-internetowe">
                      Przejdź do stron
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiSearchEyeLine className="h-8 w-8" />,
              title: 'Sklepy internetowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3">Tworzymy dedykowane platformy sprzedażowe nastawione na szybkie działanie, przepisy unijne i widoczność w wynikach wyszukiwarki Google.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/sklepy-internetowe">
                      Przejdź do sklepów
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLineChartLine className="h-8 w-8" />,
              title: 'Blogi internetowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3">
                    Tworzymy blogi internetowe, na których z łatwością dodasz swoje treści. Stawiamy na optymalizację techniczną tak, aby zwiększyć widoczność każdego Twojego wpisu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/blogi-internetowe">
                      Przejdź do blogów
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Projekty graficzne"
          subtitle="Kompleksowa oferta projektowa"
          description="Poznaj pełną ofertę projektów graficznych - od wizytówek i ulotek po identyfikację wizualną oraz układy stron internetowych. Każda usługa ma własną stronę, na której zobaczysz szczegóły, przykłady realizacji i cennik."
          grid="two"
          items={[
            {
              icon: <RiIdCardLine className="h-8 w-8" />,
              title: 'Projekt wizytówki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Wizytówka wyjaśnia czym się zajmujesz w kilka sekund. Tworzymy projekty wizytówek, które łączą czytelność, elegancję i profesjonalny układ. Otrzymujesz gotowe pliki źródłowe oraz
                    do druku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-wizytowki">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Projekt ulotki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Ulotka to najprostszy sposób, by dotrzeć lokalnie do nowych klientów. Zaprojektujemy ją tak, by jasno przedstawiała ofertę, przyciągała wzrok i kierowała prosto do zakupu lub
                    kontaktu.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-ulotki">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFolderOpenLine className="h-8 w-8" />,
              title: 'Teczka ofertowa',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Teczka ofertowa podnosi prestiż firmy i buduje zaufanie. Projekt teczki dopasowujemy do Twojej identyfikacji wizualnej, tworząc spójny i elegancki materiał firmowy.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-teczki-ofertowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Papier firmowy',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">Papier firmowy wzmacnia profesjonalny wizerunek w każdej korespondencji. Przygotowujemy szablony Word i PDF i wersję gotową do druku.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-papieru-firmowego">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiTShirt2Line className="h-8 w-8" />,
              title: 'Odzież firmowa',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Odzież z logo zwiększa rozpoznawalność marki. Projektujemy nadruki i hafty dla zespołów, eventów i punktów sprzedaży - w wersjach pod sitodruk, DTF lub haft komputerowy.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-odziezy-firmowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiQuillPenLine className="h-8 w-8" />,
              title: 'Projekt logo',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Logo to fundament identyfikacji wizualnej. Tworzymy znak, który oddaje charakter marki i pozostaje czytelny w każdym formacie. Otrzymujesz wersje wektorowe, kolorystyczne i
                    mini-księgę znaku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-logo">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiBookletLine className="h-8 w-8" />,
              title: 'Projekt katalogu',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Katalog firmowy to wizualna prezentacja Twojej oferty. Zadbamy o skład, zdjęcia i typografię, dzięki czemu każdy produkt będzie przedstawiony czytelnie i estetycznie - w wersji
                    drukowanej lub online.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-katalogu">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Identyfikacja wizualna',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Kompletny system wizualny marki: logo, kolory, typografia i materiały firmowe. Projektujemy identyfikację, która buduje zaufanie i spójność w każdym punkcie styku z klientem.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Projekt graficzny strony',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Makiety i layouty stron internetowych tworzone z myślą o konwersji i doświadczeniu użytkownika. Łączymy estetykę, UX i SEO, aby Twoja witryna wyróżniała się w sieci.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-graficzny-strony">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLayoutLine className="h-8 w-8" />,
              title: 'Szablony postów na social media',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Łatwe w edycji gotowe szablony dla Instagrama, Facebooka czy LinkedIn, ułatwiające regularne publikowanie i pomagające utrzymać spójny styl Twojej marki. Otrzymujesz pliki gotowe
                    do edycji i eksportu z czytelną hierarchią treści i miejscem na wezwanie do działania.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/szablony-postow-social-media">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCoupon2Line className="h-8 w-8" />,
              title: 'Kupony rabatowe i vouchery',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Kupony rabatowe i vouchery, które zachęcają Twoich klientów do powrotu i wspierają sprzedaż. Dostarczamy gotowe pliki do druku, spójne z wizerunkiem Twojej marki.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPriceTag3Line className="h-8 w-8" />,
              title: 'Projekt cennika',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Profesjonalne cenniki, które porządkują Twoją ofertę i budują profesjonalny wizerunek. Dostarczamy pliki gotowe do druku oraz dodania na stronę czy media społecznościowe.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-cennika">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCoupon2Line className="h-8 w-8" />,
              title: 'Karty lojalnościowe',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Tworzymy projekty kart lojalnościowych, które zachęcają do regularnych powrotów Twoich klientów. Projektujemy czytelne układy z miejscem na pieczątki. Otrzymujesz gotowe pliki do
                    druku.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-karty-lojalnosciowej">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiRestaurant2Line className="h-8 w-8" />,
              title: 'Projekt menu restauracji',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3 text-sm">
                    Menu dla restauracji, baru czy kawiarni. Tworzymy czytelne układy, ze spójną typografią zgodnie z wizerunkiem Twojej firmy. Otrzymujesz pliki do druku oraz wersję online.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/projekty-graficzne/projekt-menu-restauracji">
                      Przejdź do oferty
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Marketing"
          items={[
            {
              icon: <RiFileList2Line className="h-8 w-8" />,
              title: 'Audyt SEO',
              subtitle: 'Diagnoza i priorytety działań',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3">
                    Przeprowadzamy audyt SEO, a następnie ustalamy cele i zakres na trzy najbliższe miesiące: tematy treści, podstrony do dopracowania i działania wspierające Twoją pozycję.
                  </p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/audyt-seo">
                      Przejdź do audytu SEO
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
                  <p className="mb-3">Optymalizujemy prędkość strony i poprawiamy ją od strony technicznej tak, aby Google uznał ją za wartościową i lepszą od Twojej konkurencji.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/optymalizacja-seo">
                      Przejdź do optymalizacji SEO
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
                  <p className="mb-3">Budujemy widoczność strategicznym działaniem co miesiąc. Wprowadzamy treści, które odpowiadają na potrzeby Twoich klientów.</p>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/marketing/pozycjonowanie-stron">
                      Przejdź do pozycjonowania stron
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Tworzenie treści"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Strony www',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Piszemy treści, które jasno przedstawiają ofertę</li>
                    <li>Układamy strukturę, by prowadziła odbiorcę krok po kroku</li>
                    <li>Dostosowujemy język do Twojej branży i klientów</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Artykuły eksperckie',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Przygotowujemy artykuły eksperckie i edukacyjne</li>
                    <li>Optymalizujemy je pod SEO, by wzmacniały widoczność</li>
                    <li>Planujemy publikacje, by utrzymać regularność i wspomóc SEO</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShoppingCartLine className="h-8 w-8" />,
              title: 'E-commerce: opisy',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Piszemy opisy produktów pokazujące korzyści</li>
                    <li>Tworzymy krótkie treści do szybkich decyzji zakupowych</li>
                    <li>Przygotowujemy rozbudowane opisy premium dla produktów wyższej klasy</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiShareForwardLine className="h-8 w-8" />,
              title: 'Social media: treści',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Przygotowujemy posty, które zatrzymują uwagę i reakcje</li>
                    <li>Piszemy scenariusze z jasnym wezwaniem do działania</li>
                    <li>Układamy scenariusze rolek pod większe zasięgi</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiFilePdfLine className="h-8 w-8" />,
              title: 'Oferty i case studies',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Projektujemy oferty sprzedażowe podkreślające Twoją wartość</li>
                    <li>Opracowujemy case studies pokazujące efekty współpracy</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPencilLine className="h-8 w-8" />,
              title: 'Korekta i redakcja',
              description: (
                <div className="flex h-full flex-col">
                  <ul className="mb-3 list-disc space-y-1 pl-4">
                    <li>Poprawiamy błędy językowe i stylistyczne</li>
                    <li>Ujednolicamy format, ton i układ treści</li>
                    <li>Dostosowujemy teksty pod SEO dla lepszej widoczności</li>
                  </ul>
                  <div className="mt-auto">
                    <Button arrow link="/uslugi/tworzenie-tresci">
                      Przejdź do oferty tworzenia treści
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />
      </Wrapper>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            '@id': `${toAbsoluteUrl('/uslugi')}#collection`,
            name: 'Usługi - witryny, projekty graficzne i marketing - Arteon',
            description: 'Komplet usług wokół Twojej firmy: projekty graficzne, witryny internetowe, tworzenie treści i marketing. Sprawdź nasze usługi',
            url: toAbsoluteUrl('/uslugi'),
            mainEntity: {
              '@type': 'ItemList',
              '@id': `${toAbsoluteUrl('/uslugi')}#itemlist`,
              itemListOrder: 'https://schema.org/ItemListOrderAscending',
              itemListElement: SERVICES.map((s, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                url: toAbsoluteUrl(s.path),
                name: s.name,
              })),
            },
          }),
        }}
      />
    </>
  );
}
