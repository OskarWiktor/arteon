import {
  RiPencilRuler2Line,
  RiBookletLine,
  RiFileTextLine,
  RiImageLine,
  RiMoneyDollarCircleLine,
  RiKey2Line,
  RiPriceTag3Line,
  RiSecurePaymentLine,
} from 'react-icons/ri';
import Divider from '@/components/atoms/Divider';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import Breadcrumbs from '@/components/molecules/BreadCrumbs';
import BenefitBelt from '@/components/organisms/BenefitBelt';
import ArticlesCarousel from '@/components/organisms/carousels/ArticlesCarousel';
import ProjectsCarousel from '@/components/organisms/carousels/ProjectsCarousel';
import TestimonialsCarousel from '@/components/organisms/carousels/TestimonialsCarousel';
import CTABanner from '@/components/organisms/CTABanner';
import FeatureGrid from '@/components/organisms/FeatureGrid';
import HeroBanner from '@/components/organisms/HeroBanner';
import SectionBar from '@/components/organisms/sections/SectionBar';
import SectionBasic from '@/components/organisms/sections/SectionBasic';
import SectionBento from '@/components/organisms/sections/SectionBento';
import SectionContactForm from '@/components/organisms/sections/SectionContactForm';
import SectionFaqPanels from '@/components/organisms/sections/SectionFaqPanels';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionPrices from '@/components/organisms/sections/SectionPrices';
import SectionTimeline from '@/components/organisms/sections/SectionTimeline';
import { getArticlePreviewsByCategory } from '@/lib/blogDataService';
import { cn } from '@/lib/clsx';
import { processStepsSections } from '@/lib/processSteps';
import { buildServiceSchema } from '@/lib/seo/serviceSchema';
import { normalIconSizeClasses } from '@/lib/uiClasses';

export const metadata = {
  title: 'Projekt katalogu | Arteon',
  description:
    'Katalog produktów lub usług z profesjonalnym składem DTP. Zdjęcia, typografia, układ i plik gotowy do druku.',
  alternates: {
    canonical:
      'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu',
  },
  openGraph: {
    title: 'Projekt katalogu | Arteon',
    description:
      'Estetyczny i czytelny katalog firmowy. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/projects/restoquality/mockup-gazetka-restoquality.webp',
        width: 1200,
        height: 630,
      },
    ],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-katalogu',
    serviceName: 'Projekt katalogu',
    description:
      'Katalog produktowy/usługowy: układ, typografia, infografiki i zdjęcia. Gotowe pliki do druku oraz PDF online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return <JsonLd id='schema-service-projekt-katalogu' schema={json} />;
}

export default function OfferDesignCatalogPage() {
  return (
    <>
      <HeroBanner
        title='Projekt katalogu'
        description={
          <>
            Sprzedaż potrzebuje klarownej prezentacji oferty. Projektujemy
            katalogi z dopracowanym składem DTP, zdjęciami i typografią - w
            wersji do druku i online - tak, aby klient szybko zrozumiał ofertę i
            wiedział, jak zamówić.
          </>
        }
        secondaryCtaLabel='Bezpłatna konsultacja'
        secondaryCtaHref='#kontakt'
        backgroundImage='/assets/projects/restoquality/mockup-gazetka-restoquality.webp'
        overlay='black'
        reputation
      />

      <BenefitBelt variant='carousel' />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{
          href: `/uslugi/projekty-graficzne`,
          label: 'Projekty graficzne',
        }}
        fourth={{
          href: `/uslugi/projekty-graficzne/projekt-katalogu`,
          label: 'Projekt katalogu',
        }}
        includeJsonLd
      />

      <Wrapper>
        <Divider size='xs' />

        <ProjectsCarousel
          secondaryTitle='Od prostych wizytówek, przez rozbudowane strony, do pełnych identyfikacji wizualnych'
          title='Nasze realizacje projektów graficznych'
          category='projekty graficzne'
        />

        <Divider line />

        <SectionBasic
          title='Co zyskujesz zamawiając projekt katalogu?'
          imageSrc='/assets/projects/restoquality/mockup-gazetka-restoquality.webp'
          imageAlt='Realizacja katalogu produktów dla firmy RestoQuality - mockup Arteon'
        >
          <p>
            <strong>Katalog porządkuje ofertę i prowadzi do kontaktu.</strong>{' '}
            Klient widzi produkty lub usługi w jasnym układzie: sekcje, zdjęcia,
            najważniejsze dane i ceny. Znika chaos, a pojawia się prosty wybór -
            „który wariant jest dla mnie”.
          </p>

          <br />

          <p>
            <strong>Katalog działa zarówno online, jak i w druku.</strong>{' '}
            Dostajesz wersję do wysyłki mailem (PDF) i pliki gotowe do druku.
            Materiały drukowane dłużej zostają w pamięci niż przekaz wyłącznie
            cyfrowy (badanie Temple University / Canada Post, 2015). Dobrze
            zaprojektowany katalog staje się „fizycznym dowodem” jakości Twojej
            marki.
          </p>

          <br />

          <p>
            <strong>Dobry katalog robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className='ml-5 list-disc'>
            <li>
              Prezentuje produkty lub usługi w logicznym porządku, bez „gubienia
              się” w szczegółach,
            </li>
            <li>
              Ułatwia decyzję dzięki czytelnym kartom, cenom i wyróżnionym
              rekomendacjom,
            </li>
            <li>
              Kieruje do zamówienia: kontaktu z handlowcem, strony www lub
              sklepu online.
            </li>
          </ul>

          <br />

          <p>
            Z perspektywy sprzedaży katalog to narzędzie, które można zabrać na
            spotkanie, targi, event albo po prostu wysłać mailem - za każdym
            razem pracuje dla Ciebie tak samo, niezależnie od nastroju
            handlowca.
          </p>
        </SectionBasic>

        <Divider line />

        <FeatureGrid
          title='Co zyskujesz zamawiając katalog?'
          subtitle='Nasz standard pracy'
          items={[
            {
              title: 'Klarowna prezentacja oferty',
              description: (
                <p>
                  Układ, który ułatwia odbiorcy zrozumienie produktów, usług i
                  różnic między pakietami - bez zgadywania i szukania drobnego
                  druku.
                </p>
              ),
              icon: (
                <RiBookletLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Dopracowane zdjęcia i typografia',
              description: (
                <p>
                  Dbamy o spójność zdjęć, czytelne podpisy i hierarchię
                  nagłówków, aby katalog był lekki w odbiorze, nawet przy dużej
                  liczbie stron.
                </p>
              ),
              icon: (
                <RiImageLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wersja drukowana i cyfrowa',
              description: (
                <p>
                  Dostarczamy katalog gotowy do druku oraz wygodną wersję do
                  udostępniania online - idealną do mailingu i oferty PDF.
                </p>
              ),
              icon: (
                <RiFileTextLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Wspólne dopracowanie szczegółów',
              description: (
                <p>
                  W cenie przewidujemy poprawki. Razem ustalamy układ, kolejność
                  sekcji, wyróżniki ofertowe i sposób prezentacji cen.
                </p>
              ),
              icon: (
                <RiPencilRuler2Line
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
            {
              title: 'Faktura po realizacji',
              description: (
                <p>
                  Płacisz dopiero po otrzymaniu gotowego projektu w finalnej
                  formie.
                </p>
              ),
              icon: (
                <RiMoneyDollarCircleLine
                  className={cn('text-primary', normalIconSizeClasses)}
                />
              ),
            },
          ]}
        />

        <Divider line />

        <SectionInfo
          title='Dla kogo szczególnie opłaca się katalog?'
          subtitle='Kiedy inwestycja zwraca się najszybciej?'
        >
          <p>
            Katalog najlepiej sprawdza się tam, gdzie oferta ma wiele pozycji
            lub wariantów, a klient potrzebuje ich porównania w jednym miejscu.
            Im większa złożoność oferty, tym mocniej rośnie znaczenie dobrego
            składu DTP.
          </p>

          <br />

          <ul className='ml-5 list-disc space-y-2'>
            <li>
              Firmy produktowe - producenci, hurtownie, sklepy z szerokim
              asortymentem.
            </li>
            <li>
              Branże B2B - usługi techniczne, systemy, rozwiązania modułowe,
              konfiguracje.
            </li>
            <li>
              Biura projektowe, deweloperzy, firmy budowlane - portfolio
              realizacji i pakiety.
            </li>
            <li>
              Marki lifestyle, beauty, fashion - kolekcje, linie produktów,
              zestawy usług.
            </li>
            <li>
              Organizatorzy szkoleń i usług doradczych - pakiety, poziomy
              wsparcia, cenniki w jednym materiale.
            </li>
          </ul>

          <br />

          <p>
            Jeśli masz poczucie, że Twoja oferta „nie mieści się na jednej
            stronie” - katalog jest często najbardziej czytelną formą, jaką
            możesz pokazać klientowi przed rozmową o szczegółach.
          </p>
        </SectionInfo>

        <Divider line />

        <TestimonialsCarousel />

        <Divider line />

        <SectionBar title='Jasne gwarancje, jasne zasady' />

        <div>
          <FeatureGrid
            variant='bare'
            columns={4}
            items={[
              {
                icon: <RiPencilRuler2Line className={normalIconSizeClasses} />,
                title: 'Indywidualne projekty',
                description:
                  'Wszystko projektujemy od zera - nie używamy gotowych szablonów, dzięki czemu Twoja strona, sklep czy projekt graficzny jest w pełni unikalny i dopasowany do Twojej firmy oraz grupy docelowej.',
              },
              {
                icon: <RiSecurePaymentLine className={normalIconSizeClasses} />,
                title: 'Brak zaliczek',
                description:
                  'Nie pobieramy zaliczek dla projektów do 5 tysięcy złotych brutto. Fakturę wystawiamy tylko po zakończeniu prac lub po zakończeniu poszczególnych etapów w przypadku większych projektów.',
              },
              {
                icon: <RiPriceTag3Line className={normalIconSizeClasses} />,
                title: 'Brak opłat abonamentowych',
                description:
                  'Nie pobieramy comiesięcznych opłat za stworzone witryny. Płacisz jednorazowo, za samą realizację a w przypadku dłuższych współprac, prace zawsze rozliczamy zadaniowo. Cenimy transparencję.',
              },
              {
                icon: <RiKey2Line className={normalIconSizeClasses} />,
                title: 'Pełna własność',
                description:
                  'Wszystko co stworzymy staje się Twoją własnością. Otrzymujesz stronę, dostępy do wszelkich zintegrowanych platform oraz pliki źródłowe. Możemy również przygotować umowę, która dodatkowo zabezpiecza Twoje prawa.',
              },
            ]}
          />
        </div>

        <Divider line />

        <SectionPrices
          title='Projekt katalogu - przykładowe zakresy'
          plans={[
            {
              name: 'Katalog kompaktowy',
              price: 'wycena indywidualna',
              description:
                'Dla ofert, które mieszczą się w kilkunastu stronach - idealny materiał na spotkania i wysyłkę mailową.',
              features: [
                'Konsultacja i omówienie struktury katalogu',
                'Projekt kilku kluczowych layoutów (strona tytułowa, rozkładówki, sekcje)',
                'Skład DTP do ustalonej liczby stron',
                'Pliki PDF do druku i wersji online',
              ],
              btnOne: 'Darmowa wycena',
              btnOneHref: '#kontakt',
            },
            {
              name: 'Katalog rozbudowany',
              price: 'wycena indywidualna',
              description:
                'Dla dużych ofert produktowych lub usługowych, w których ważne są porównania, parametry i czytelne tabele.',
              features: [
                'Wszystko z pakietu kompaktowego, a dodatkowo:',
                'Większa liczba wzorcowych layoutów',
                'Możliwość wprowadzenia ikon, wyróżników, ramek z rekomendacjami',
                'Rekomendacje kolejności sekcji pod kątem sprzedaży',
              ],
              btnOne: 'Porozmawiajmy o katalogu rozbudowanym',
              btnOneHref: '#kontakt',
            },
            {
              name: 'System katalogów i folderów',
              price: 'wycena indywidualna',
              description:
                'Dla firm, które potrzebują spójnej rodziny materiałów: katalog główny + foldery tematyczne lub ofertowe.',
              features: [
                'Spójna linia projektowa dla kilku publikacji',
                'Dopasowanie layoutów do różnych rodzajów treści',
                'Możliwość dalszej rozbudowy o kolejne katalogi',
                'Wsparcie w planowaniu struktury materiałów',
              ],
              btnOne: 'Zbudujmy system katalogów',
              btnOneHref: '#kontakt',
            },
          ]}
          legalNote='Ostateczna wycena zależy m.in. od liczby stron, ilości materiałów, języków i poziomu rozbudowania layoutów. Po krótkim briefie przygotujemy konkretną propozycję z zakresem i terminami.'
        />

        <Divider line />

        <SectionTimeline {...processStepsSections.design} />

        <Divider line />

        <SectionFaqPanels
          variant='offer'
          defaultOpenIndex={1}
          pageUrl='https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu'
          title='Najczęstsze pytania dotyczące projektów katalogów'
          items={[
            {
              question: 'Ile kosztuje projekt katalogu?',
              answer:
                'Cena zależy od liczby stron, ilości zdjęć, stopnia rozbudowania treści oraz języków. Po zapoznaniu się z Twoimi potrzebami przygotujemy szczegółową wycenę dopasowaną do zakresu prac i celu katalogu.',
            },
            {
              question: 'Jak długo trwa wykonanie projektu katalogu?',
              answer:
                'Standardowy czas realizacji wynosi 7-10 dni roboczych. Projekty rozbudowane (powyżej 20 stron) mogą wymagać dodatkowego czasu - dokładny harmonogram ustalamy indywidualnie przed startem.',
            },
            {
              question: 'W jakich formatach dostanę katalog?',
              answer:
                'Dostarczamy pliki gotowe do druku (PDF ze spadami, odpowiednimi marginesami i profilami kolorów) oraz wersję cyfrową do publikacji online (PDF interaktywny lub materiał pod flipbook).',
            },
            {
              question: 'Czy mogę zgłosić poprawki do projektu katalogu?',
              answer:
                'Tak, każda realizacja obejmuje rundy poprawek. Dopracowujemy układ, zdjęcia, typografię i sposób prezentacji treści, aż katalog będzie spójny z Twoją wizją, marką i celami sprzedażowymi.',
            },
            {
              question: 'Czy projekt katalogu będzie gotowy do druku?',
              answer:
                'Tak, pliki przygotowujemy zgodnie ze standardami drukarni (spady, marginesy, profile ICC, kolory CMYK). Możesz od razu przekazać katalog do druku w wybranej drukarni.',
            },
            {
              question: 'Czy wykonujecie skład DTP większych publikacji?',
              answer:
                'Tak, zajmujemy się pełnym składem katalogów, folderów i broszur. Dbamy o hierarchię, odstępy, siatkę i czytelność, także w projektach liczących dziesiątki stron.',
            },
            {
              question: 'Czy mogę zamówić katalog w języku obcym?',
              answer:
                'Tak, wykonujemy katalogi jedno- i wielojęzyczne, z zachowaniem spójnej typografii i układu. Możemy też doradzić, jak najlepiej zaprezentować treści w kilku językach.',
            },
          ]}
        />

        <Divider line />

        <SectionContactForm
          title='Sprawdź koszt realizacji katalogu'
          description='Napisz jaką ofertę chcesz przedstawić, ile stron ma mieć katalog oraz czy posiadasz logo i zdjęcia - otrzymasz darmową wycenę realizacji.'
          imageSrc='/assets/projects/restoquality/mockup-gazetka-restoquality.webp'
          imageAlt='Realizacja projektu katalogu firmowego'
          defaultSubject='Projekt katalogu'
        />

        <Divider line />

        <SectionBento
          title='Poznaj inne usługi'
          items={[
            {
              title: 'Identyfikacja wizualna',
              size: 'large',
              backgroundImage:
                '/assets/projects/finish-masters/logo/mockup-logo-finish-masters.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink:
                '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Strony internetowe',
              size: 'medium',
              backgroundImage:
                '/assets/projects/autokorfu/mockup-strony-auto-korfu.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/strony-internetowe-dla-firm',
            },
            {
              title: 'Projekt wizytówki',
              size: 'small',
              backgroundImage:
                '/assets/projects/restoquality/mockup-wizytowki-restoquality.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt ulotki',
              size: 'small',
              backgroundImage:
                '/assets/projects/simba-group/simba-group-folder-reklamowy-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-ulotki',
            },
          ]}
        />

        <Divider line />

        <ArticlesCarousel
          title='Przydatne artykuły dotyczące projektów graficznych'
          categorySlug='grafika'
          articles={getArticlePreviewsByCategory('grafika', 6)}
        />

        <Divider size='sm' />
      </Wrapper>

      <CTABanner
        title='Zaprezentuj swoją ofertę w eleganckiej formie'
        description='Zaprojektujemy katalog, który ułatwi sprzedaż i wzmocni wizerunek Twojej marki.'
        btnOne='Skontaktuj się'
        btnOneHref='#kontakt'
        btnTwo='Poznaj inne usługi graficzne'
        btnTwoHref='/uslugi/projekty-graficzne'
        backgroundImage='/assets/projects/restoquality/mockup-gazetka-restoquality.webp'
        overlay='black'
      />

      <ServiceSchema />
    </>
  );
}
