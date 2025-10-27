import HeroBaner from '@/components/sections/HeroBaner';
import Button from '@/components/ui/Button';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import SectionSteps from '@/components/ui/sections/SectionSteps';
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
} from 'react-icons/ri';

export const metadata = {
  title: 'Usługi - strony, sklepy, treści, projekty graficzne i marketing | Arteon',
  description: 'Komplet usług wokół Twojej strony: projekt, wdrożenie, treści, projekty graficzne i marketing. Jasne pakiety i wsparcie po wdrożeniu.',
  keywords: ['tworzenie stron', 'tworzenie sklepów', 'projektowanie logo', 'treści na stronę', 'marketing internetowy', 'widoczność w Google'],
  alternates: { canonical: '/uslugi' },
  openGraph: {
    title: 'Usługi - strony, sklepy, treści, projekty graficzne i marketing | Arteon',
    description: 'Komplet usług wokół Twojej strony: projekt, wdrożenie, treści, projekty graficzne i marketing. Jasne pakiety i wsparcie po wdrożeniu.',
    url: 'https://www.arteonagency.pl/uslugi',
    type: 'website',
  },
} as const;

export default function OfferPage() {
  return (
    <>
      <HeroBaner backgroundImage="/assets/bg/abstract-bg12.webp" overlay="black" title="Nasze usługi" variant="center" />

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
                  <p className="mb-3">Tworzymy blogi internetowe, na których z łatwością dodasz swoje treści. Stawiamy na optymalizację techniczną tak aby zwiększyć widoczność każdego Twojego wpisu.</p>
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
          items={[
            {
              icon: <RiIdCardLine className="h-8 w-8" />,
              title: 'Projekt wizytówki',
              description: (
                <div className="flex h-full flex-col">
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                  <p className="mb-3">Papier firmowy wzmacnia profesjonalny wizerunek w każdej korespondencji. Przygotowujemy szablony Word i PDF i wersję gotową do druku.</p>
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
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                  <p className="mb-3">
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
                    Przeprowadzamy audyt SEO a następnie ustalamy cele i zakres na trzy najbliższe miesiące: tematy treści, podstrony do dopracowania i działania wspierające Twoją pozycję.
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
                  <p className="mb-3">Optymalizujemy prędkość strony i poprawiamy ją od strony technicznej tak aby Google uznał ją za wartościową i lepszą od Twojej konkurencji.</p>
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
                  <p className="mb-3">Budujemy widoczność strategicznym działaniem co miesiąć. Wprowadzamy treści, które odpowiadają na potrzeby Twoich klientów.</p>
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
                      Wyceń treści do strony
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
                      Zamów artykuły
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
                      Wyceń treści do sklepu
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
                      Zamów copy do social
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
                      Poproś o ofertę PDF
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
                      Prześlij tekst do korekty
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
