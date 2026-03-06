import WorkSteps from '@/components/sections/steps/WorkSteps';
import HeroBanner from '@/components/sections/HeroBanner';
import BenefitBelt from '@/components/sections/BenefitBelt';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionBento from '@/components/ui/sections/SectionBento';
import { RiPencilRuler2Line, RiBrushLine, RiBarChart2Fill, RiLightbulbFlashLine, RiBookletLine, RiFileTextLine, RiImageLine, RiMoneyDollarCircleLine } from 'react-icons/ri';
import SectionContactForm from '@/components/sections/SectionContactForm';
import Wrapper from '@/components/ui/Wrapper';
import ProjectsCarousel from '@/components/sections/projects/ProjectsCarousel';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import FeatureGrid from '@/components/sections/FeatureGrid';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Script from 'next/script';
import { buildServiceSchema } from '@/lib/serviceSchema';
import TestimonialsCarousel from '@/components/sections/TestimonialsCarousel';
import SectionPrices from '@/components/ui/sections/SectionPrices';
import ArticlesCarousel from '@/components/sections/blog/ArticlesCarousel';
import { getAllArticlePreviews } from '@/lib/blogDataService';

export const metadata = {
  title: 'Projekt katalogu | Arteon',
  description: 'Katalog produktów lub usług z profesjonalnym składem DTP. Zdjęcia, typografia, układ i plik gotowy do druku.',
  alternates: { canonical: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu' },
  openGraph: {
    title: 'Projekt katalogu | Arteon',
    description: 'Estetyczny i czytelny katalog firmowy. Wersje do druku i online.',
    url: 'https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu',
    type: 'website',
    images: [{ url: 'https://www.arteonagency.pl/assets/projects/gazetka-mockup.webp', width: 1200, height: 630 }],
  },
} as const;

function ServiceSchema() {
  const json = buildServiceSchema({
    path: '/uslugi/projekty-graficzne/projekt-katalogu',
    serviceName: 'Projekt katalogu',
    description: 'Katalog produktowy/usługowy: układ, typografia, infografiki i zdjęcia. Gotowe pliki do druku oraz PDF online.',
    availableLanguages: ['pl'],
    includeServiceChannel: true,
  });

  return (
    <Script id="schema-service-projekt-katalogu" type="application/ld+json">
      {JSON.stringify(json)}
    </Script>
  );
}

export default function OfferDesignCatalogPage() {
  return (
    <>
      <HeroBanner
        title="Projekt katalogu"
        description={
          <>
            Sprzedaż potrzebuje klarownej prezentacji oferty. Projektujemy katalogi z dopracowanym składem DTP, zdjęciami i typografią - w wersji do druku i online - tak, aby klient szybko zrozumiał
            ofertę i wiedział, jak zamówić.
          </>
        }
        buttonAccent="Bezpłatna wycena"
        buttonAccentLink="#kontakt"
        variant="left"
        backgroundImage="/assets/projects/gazetka-mockup.webp"
        overlay="black"
      />

      <BenefitBelt
        items={[
          { icon: <RiPencilRuler2Line />, label: 'Oferta poukładana jak dobry landing' },
          { icon: <RiBrushLine />, label: 'Projekt, który podnosi postrzeganą wartość' },
          { icon: <RiBarChart2Fill />, label: 'Materiały, które wspierają sprzedaż handlowców' },
          { icon: <RiLightbulbFlashLine />, label: 'Układ oparty na psychologii decyzji' },
        ]}
      />

      <Breadcrumbs
        second={{ href: '/uslugi', label: 'Usługi' }}
        third={{ href: `/uslugi/projekty-graficzne`, label: 'Projekty graficzne' }}
        fourth={{ href: `/uslugi/projekty-graficzne/projekt-katalogu`, label: 'Projekt katalogu' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <ProjectsCarousel title="Wyróżnione realizacje projektów graficznych" category="grafika" />

        <Gap variant="line" />

        <SectionInfo title="Co zyskujesz zamawiając projekt katalogu?">
          <p>
            <strong>Katalog porządkuje ofertę i prowadzi do kontaktu.</strong> Klient widzi produkty lub usługi w jasnym układzie: sekcje, zdjęcia, najważniejsze dane i ceny. Znika chaos, a pojawia
            się prosty wybór - „który wariant jest dla mnie”.
          </p>

          <br />

          <p>
            <strong>Katalog działa zarówno online, jak i w druku.</strong> Dostajesz wersję do wysyłki mailem (PDF) i pliki gotowe do druku. Materiały drukowane dłużej zostają w pamięci niż przekaz
            wyłącznie cyfrowy (badanie Temple University / Canada Post, 2015). Dobrze zaprojektowany katalog staje się „fizycznym dowodem” jakości Twojej marki.
          </p>

          <br />

          <p>
            <strong>Dobry katalog robi za Ciebie trzy rzeczy naraz:</strong>
          </p>
          <ul className="ml-5 list-disc">
            <li>Prezentuje produkty lub usługi w logicznym porządku, bez „gubienia się” w szczegółach,</li>
            <li>Ułatwia decyzję dzięki czytelnym kartom, cenom i wyróżnionym rekomendacjom,</li>
            <li>Kieruje do zamówienia: kontaktu z handlowcem, strony www lub sklepu online.</li>
          </ul>

          <br />

          <p>
            Z perspektywy sprzedaży katalog to narzędzie, które można zabrać na spotkanie, targi, event albo po prostu wysłać mailem - za każdym razem pracuje dla Ciebie tak samo, niezależnie od
            nastroju handlowca.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <FeatureGrid
          title="Co zyskujesz zamawiając katalog?"
          subtitle="Nasz standard pracy"
          items={[
            {
              title: 'Klarowna prezentacja oferty',
              description: <>Układ, który ułatwia odbiorcy zrozumienie produktów, usług i różnic między pakietami - bez zgadywania i szukania drobnego druku.</>,
              icon: <RiBookletLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Dopracowane zdjęcia i typografia',
              description: <>Dbamy o spójność zdjęć, czytelne podpisy i hierarchię nagłówków, aby katalog był lekki w odbiorze, nawet przy dużej liczbie stron.</>,
              icon: <RiImageLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wersja drukowana i cyfrowa',
              description: <>Dostarczamy katalog gotowy do druku oraz wygodną wersję do udostępniania online - idealną do mailingu i oferty PDF.</>,
              icon: <RiFileTextLine className="text-primary h-6 w-6" />,
            },
            {
              title: 'Wspólne dopracowanie szczegółów',
              description: <>W cenie przewidujemy poprawki. Razem ustalamy układ, kolejność sekcji, wyróżniki ofertowe i sposób prezentacji cen.</>,
              icon: <RiPencilRuler2Line className="text-primary h-6 w-6" />,
            },
            {
              title: 'Faktura po realizacji',
              description: <>Płacisz dopiero po otrzymaniu gotowego projektu w finalnej formie.</>,
              icon: <RiMoneyDollarCircleLine className="text-primary h-6 w-6" />,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Dla kogo szczególnie opłaca się katalog?" subtitle="Kiedy inwestycja zwraca się najszybciej?">
          <p>
            Katalog najlepiej sprawdza się tam, gdzie oferta ma wiele pozycji lub wariantów, a klient potrzebuje ich porównania w jednym miejscu. Im większa złożoność oferty, tym mocniej rośnie
            znaczenie dobrego składu DTP.
          </p>

          <br />

          <ul className="ml-5 list-disc space-y-2">
            <li>Firmy produktowe - producenci, hurtownie, sklepy z szerokim asortymentem.</li>
            <li>Branże B2B - usługi techniczne, systemy, rozwiązania modułowe, konfiguracje.</li>
            <li>Biura projektowe, deweloperzy, firmy budowlane - portfolio realizacji i pakiety.</li>
            <li>Marki lifestyle, beauty, fashion - kolekcje, linie produktów, zestawy usług.</li>
            <li>Organizatorzy szkoleń i usług doradczych - pakiety, poziomy wsparcia, cenniki w jednym materiale.</li>
          </ul>

          <br />

          <p>Jeśli masz poczucie, że Twoja oferta „nie mieści się na jednej stronie” - katalog jest często najbardziej czytelną formą, jaką możesz pokazać klientowi przed rozmową o szczegółach.</p>
        </SectionInfo>

        <Gap variant="line" />

        <TestimonialsCarousel />

        <Gap variant="line" />

        <SectionPrices
          title="Projekt katalogu - przykładowe zakresy"
          plans={[
            {
              name: 'Katalog kompaktowy',
              price: 'wycena indywidualna',
              description: 'Dla ofert, które mieszczą się w kilkunastu stronach - idealny materiał na spotkania i wysyłkę mailową.',
              features: [
                'Konsultacja i omówienie struktury katalogu',
                'Projekt kilku kluczowych layoutów (strona tytułowa, rozkładówki, sekcje)',
                'Skład DTP do ustalonej liczby stron',
                'Pliki PDF do druku i wersji online',
              ],
              btnOne: 'Zamów wycenę katalogu kompaktowego',
              btnOneLink: '#kontakt',
            },
            {
              name: 'Katalog rozbudowany',
              price: 'wycena indywidualna',
              description: 'Dla dużych ofert produktowych lub usługowych, w których ważne są porównania, parametry i czytelne tabele.',
              features: [
                'Wszystko z pakietu kompaktowego, a dodatkowo:',
                'Większa liczba wzorcowych layoutów',
                'Możliwość wprowadzenia ikon, wyróżników, ramek z rekomendacjami',
                'Rekomendacje kolejności sekcji pod kątem sprzedaży',
              ],
              btnOne: 'Porozmawiajmy o katalogu rozbudowanym',
              btnOneLink: '#kontakt',
            },
            {
              name: 'System katalogów i folderów',
              price: 'wycena indywidualna',
              description: 'Dla firm, które potrzebują spójnej rodziny materiałów: katalog główny + foldery tematyczne lub ofertowe.',
              features: [
                'Spójna linia projektowa dla kilku publikacji',
                'Dopasowanie layoutów do różnych rodzajów treści',
                'Możliwość dalszej rozbudowy o kolejne katalogi',
                'Wsparcie w planowaniu struktury materiałów',
              ],
              btnOne: 'Zbudujmy system katalogów',
              btnOneLink: '#kontakt',
            },
          ]}
          legalNote="Ostateczna wycena zależy m.in. od liczby stron, ilości materiałów, języków i poziomu rozbudowania layoutów. Po krótkim briefie przygotujemy konkretną propozycję z zakresem i terminami."
        />

        <Gap variant="line" />

        <WorkSteps variant="design" />

        <Gap variant="line" />

        <SectionContactForm
          title="Sprawdź koszt realizacji katalogu"
          description="Napisz jaką ofertę chcesz przedstawić, ile stron ma mieć katalog oraz czy posiadasz logo i zdjęcia - otrzymasz darmową wycenę realizacji."
          imageSrc="/assets/projects/gazetka-mockup.webp"
          imageAlt="Realizacja projektu katalogu firmowego"
          defaultSubject="Projekt katalogu"
        />

        <Gap variant="line" />

        <FaqPanels
          openByDefault={1}
          pageUrl="https://www.arteonagency.pl/uslugi/projekty-graficzne/projekt-katalogu"
          title="Najczęstsze pytania dotyczące projektów katalogów"
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
              answer: 'Tak, pliki przygotowujemy zgodnie ze standardami drukarni (spady, marginesy, profile ICC, kolory CMYK). Możesz od razu przekazać katalog do druku w wybranej drukarni.',
            },
            {
              question: 'Czy wykonujecie skład DTP większych publikacji?',
              answer: 'Tak, zajmujemy się pełnym składem katalogów, folderów i broszur. Dbamy o hierarchię, odstępy, siatkę i czytelność, także w projektach liczących dziesiątki stron.',
            },
            {
              question: 'Czy mogę zamówić katalog w języku obcym?',
              answer: 'Tak, wykonujemy katalogi jedno- i wielojęzyczne, z zachowaniem spójnej typografii i układu. Możemy też doradzić, jak najlepiej zaprezentować treści w kilku językach.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionBento
          title="Poznaj inne usługi"
          items={[
            {
              title: 'Identyfikacja wizualna',
              description: 'Spójna tożsamość marki od A do Z',
              size: 'large',
              backgroundImage: '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej',
            },
            {
              title: 'Strony internetowe',
              description: 'Profesjonalna wizytówka Twojej firmy w sieci',
              size: 'medium',
              backgroundImage: '/assets/projects/arteon-baners-pilkanozna-pl.webp',
              btnLabel: 'Zobacz ofertę',
              btnLink: '/uslugi/tworzenie-stron-wordpress',
            },
            {
              title: 'Projekt wizytówki',
              description: 'Elegancka wizytówka dla Twojej firmy',
              size: 'small',
              backgroundImage: '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-wizytowki',
            },
            {
              title: 'Projekt ulotki',
              description: 'Skuteczna promocja Twojej oferty',
              size: 'small',
              backgroundImage: '/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp',
              btnLabel: 'Sprawdź ofertę',
              btnLink: '/uslugi/projekty-graficzne/projekt-ulotki',
            },
          ]}
        />

        <Gap variant="line" />

        <ArticlesCarousel title="Przydatne artykuły dotyczące projektów graficznych" categorySlug="grafika" articles={getAllArticlePreviews()} />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Zaprezentuj swoją ofertę w eleganckiej formie"
        description="Zaprojektujemy katalog, który ułatwi sprzedaż i wzmocni wizerunek Twojej marki."
        btnOne="Skontaktuj się"
        btnOneLink="#kontakt"
        btnTwo="Poznaj inne usługi graficzne"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/projects/gazetka-mockup.webp"
        overlay="black"
      />

      <ServiceSchema />
    </>
  );
}
