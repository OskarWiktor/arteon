import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';
import {
  RiGlobalLine,
  RiFileTextLine,
  RiContactsBookLine,
  RiMailLine,
  RiPhoneLine,
  RiRestaurantLine,
  RiPrinterLine,
  RiBuilding2Line,
  RiHospitalLine,
  RiHome4Line,
  RiTruckLine,
  RiShoppingCartLine,
  RiCalendarEventLine,
  RiPaletteLine,
  RiRulerLine,
  RiLayoutGridLine,
  RiContrastLine,
  RiShieldCheckLine,
  RiInfinityLine,
  RiLockLine,
  RiStackLine,
  RiEyeLine,
  RiDownloadLine,
  RiTranslate2,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Darmowy generator kodów QR online | Kod QR bez rejestracji',
  description: 'Darmowy generator kodów QR online po polsku. Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport do PNG i SVG. Personalizacja kolorów i rozmiaru.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr') },
  openGraph: {
    title: 'Darmowy generator kodów QR online | Kod QR bez rejestracji',
    description: 'Darmowy generator kodów QR online po polsku. Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport do PNG i SVG. Personalizacja kolorów i rozmiaru.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy generator kodów QR online',
  alternateName: [
    'Kreator kodów QR online',
    'Generator QR do wizytówki vCard',
    'Darmowy generator QR po polsku',
    'Narzędzie do tworzenia kodów QR',
    'Generator kodu QR do menu restauracji',
    'Kod QR do druku PNG SVG',
    'Generator wizytówki elektronicznej vCard',
    'Kreator menu QR dla restauracji',
    'Generator kodu QR na ulotkę',
    'Generator QR bez rejestracji',
    'Darmowy generator QR bez limitu',
  ],
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'QRCodeGenerator',
  operatingSystem: 'Any',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ danych, dostosuj kolory i rozmiar, a następnie pobierz gotowy plik PNG lub SVG.',
  featureList: [
    'Kod QR do adresu URL (strona WWW)',
    'Kod QR do zwykłego tekstu',
    'Kod QR wizytówka vCard (dane kontaktowe)',
    'Kod QR do e-maila (adres, temat, treść)',
    'Kod QR do numeru telefonu',
    'Konfigurowalne kolory kodu i tła',
    'Wybór rozmiaru kodu w pikselach',
    'Eksport do formatu PNG (raster)',
    'Eksport do formatu SVG (wektor)',
    'Podgląd kodu na żywo',
    'Przetwarzanie lokalne w przeglądarce',
    'Korekcja błędów Reed-Solomon',
  ],
  inLanguage: 'pl-PL',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'PLN',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać darmowego generatora kodów QR',
  description: 'Jak stworzyć kod QR do strony, wizytówki vCard, e-maila lub telefonu - od wyboru typu danych po pobranie gotowego pliku do druku.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Wybierz typ danych',
      text: 'Zdecyduj, co ma zawierać kod QR: adres URL, tekst, wizytówkę (vCard), e-mail lub numer telefonu.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wpisz dane',
      text: 'Wypełnij odpowiednie pola. Dla URL wpisz adres strony, dla vCard podaj dane kontaktowe.',
    },
    {
      '@type': 'HowToStep',
      name: 'Dostosuj wygląd',
      text: 'Wybierz rozmiar, margines, kolory kodu i tła oraz poziom korekcji błędów.',
    },
    {
      '@type': 'HowToStep',
      name: 'Pobierz kod',
      text: 'Gotowy kod QR można pobrać jako plik PNG (do druku i internetu) lub SVG (wektor do skalowania bez utraty jakości).',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-qr-generator" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-qr-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Darmowy generator kodów QR online"
        description="Stwórz kod QR do strony WWW, wizytówki vCard, e-maila, telefonu lub tekstu. Dostosuj kolory, rozmiar i poziom korekcji błędów, a następnie pobierz gotowy plik PNG lub SVG."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/darmowy-generator-kodow-qr', label: 'Darmowy generator kodów QR online' }} includeJsonLd />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <QrCodeGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Czym jest kod QR i jak działa?">
          <p className="text-mid">
            Kod QR (Quick Response) to dwuwymiarowy kod kreskowy, który można zeskanować aparatem smartfona. W przeciwieństwie do tradycyjnych kodów kreskowych, QR przechowuje dane zarówno w poziomie,
            jak i w pionie, co pozwala zakodować znacznie więcej informacji - do około 3000 znaków alfanumerycznych.
          </p>
          <p className="text-mid mt-3">
            Kod QR został opracowany w 1994 roku przez japońską firmę Denso Wave (część grupy Toyota) do śledzenia części samochodowych. Dziś kody QR są powszechnie stosowane w marketingu,
            gastronomii, logistyce i komunikacji biznesowej. Szczególną popularność zyskały podczas pandemii COVID-19, gdy restauracje zaczęły masowo zastępować papierowe menu kodami QR.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z darmowego generatora kodów QR?"
          description="Stworzenie kodu QR zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz typ danych',
              description: 'Wybierz, co chcesz zakodować: adres URL, tekst, wizytówkę vCard, e-mail lub numer telefonu.',
            },
            {
              title: '2. Wpisz dane',
              description: 'Wypełnij odpowiednie pola - adres strony, dane kontaktowe lub treść wiadomości.',
            },
            {
              title: '3. Pobierz kod',
              description: 'Dostosuj wygląd (kolory, rozmiar, margines) i pobierz jako PNG lub SVG.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Typy kodów QR - URL, vCard, e-mail, telefon, tekst"
          description="Nasz darmowy generator kodów QR online obsługuje pięć typów danych - każdy przydatny w innych sytuacjach:"
          grid="two"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Adres URL',
              description: 'Link do strony internetowej. Po zeskanowaniu telefon otworzy stronę w przeglądarce. Idealne do wizytówek, ulotek i plakatów.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Tekst',
              description: 'Dowolny tekst do 3000 znaków. Po zeskanowaniu telefon wyświetli tekst na ekranie. Przydatne do kuponów rabatowych i krótkich instrukcji.',
            },
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'Wizytówka vCard',
              description:
                'Elektroniczna wizytówka z danymi kontaktowymi (imię, nazwisko, firma, telefon, e-mail, adres). Po zeskanowaniu telefon zaproponuje zapisanie kontaktu. Idealny do profesjonalnych wizytówek firmowych.',
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'E-mail',
              description: 'Adres e-mail z opcjonalnym tematem i treścią. Po zeskanowaniu telefon otworzy aplikację pocztową z wypełnionym formularzem.',
            },
            {
              icon: <RiPhoneLine className="h-6 w-6" />,
              title: 'Telefon',
              description: 'Numer telefonu. Po zeskanowaniu telefon zaproponuje wykonanie połączenia. Przydatne do infolinii i kontaktu z obsługą klienta.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Specyfikacja techniczna kodów QR"
          demo={
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Pojemność</span>
                  <span className="text-mid text-sm!">do 4296 znaków</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Korekcja błędów</span>
                  <span className="text-mid text-sm!">7% – 30%</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. rozmiar druku</span>
                  <span className="text-mid text-sm!">2 × 2 cm</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Min. kontrast</span>
                  <span className="text-mid text-sm!">3:1</span>
                </div>
                <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                  <span className="text-dark text-sm! font-medium">Margines</span>
                  <span className="text-mid text-sm!">min. 4 moduły</span>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Znajomość parametrów technicznych pomaga tworzyć kody QR, które będą czytelne w każdych warunkach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Pojemność danych</strong> - kod QR może pomieścić do 7089 cyfr, 4296 znaków alfanumerycznych lub 2953 bajtów danych binarnych. W praktyce dla URL i wizytówek ta pojemność jest
              więcej niż wystarczająca.
            </li>
            <li>
              <strong>Korekcja błędów Reed-Solomon</strong> - algorytm matematyczny pozwalający odczytać kod nawet gdy część jest uszkodzona lub zasłonięta. Poziomy: L (7%), M (15%), Q (25%), H (30%).
            </li>
            <li>
              <strong>Margines</strong> - biały obszar wokół kodu niezbędny do prawidłowego skanowania. Zalecane minimum to 4 moduły (jednostki kodu).
            </li>
            <li>
              <strong>Minimalny rozmiar do druku</strong> - dla standardowych warunków skanowania kod powinien mieć minimum 2x2 cm. Dla druku na dużych formatach (banery, billboardy) - proporcjonalnie
              więcej.
            </li>
            <li>
              <strong>Kontrast</strong> - współczynnik kontrastu między kodem a tłem powinien wynosić minimum 3:1. Generator automatycznie ostrzega o zbyt niskim kontraście.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Zastosowania kodów QR - wizytówki, ulotki, menu restauracji"
          description="Kody QR znajdują zastosowanie w wielu branżach i scenariuszach:"
          grid="three"
          items={[
            {
              icon: <RiContactsBookLine className="h-6 w-6" />,
              title: 'Wizytówki firmowe',
              description: 'Kod vCard na wizytówce pozwala odbiorcy zapisać kontakt jednym skanowaniem, bez ręcznego przepisywania danych.',
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menu restauracji i kawiarni',
              description: 'Kod QR na stoliku kieruje do cyfrowego menu. Higieniczne rozwiązanie popularne od pandemii COVID-19.',
            },
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Ulotki i plakaty',
              description: 'Kod QR z linkiem do strony produktu, formularza rejestracji lub oferty specjalnej.',
            },
            {
              icon: <RiBuilding2Line className="h-6 w-6" />,
              title: 'Opakowania produktów',
              description: 'Link do instrukcji obsługi, karty gwarancyjnej lub strony producenta.',
            },
            {
              icon: <RiHospitalLine className="h-6 w-6" />,
              title: 'Gabinety lekarskie',
              description: 'Kody QR na kartach pacjenta z linkiem do portalu pacjenta lub systemu rezerwacji wizyt.',
            },
            {
              icon: <RiHome4Line className="h-6 w-6" />,
              title: 'Nieruchomości',
              description: 'Kody na banerach z linkiem do pełnego ogłoszenia z galerią zdjęć i szczegółami.',
            },
            {
              icon: <RiTruckLine className="h-6 w-6" />,
              title: 'Magazyny i logistyka',
              description: 'Etykiety z kodami QR do śledzenia partii produktów, lokalizacji w magazynie i historii przesyłki.',
            },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'E-commerce',
              description: 'Kody na opakowaniach z linkiem do instrukcji zwrotu, opinii klientów lub programu lojalnościowego.',
            },
            {
              icon: <RiCalendarEventLine className="h-6 w-6" />,
              title: 'Wydarzenia i konferencje',
              description: 'Bilety z kodem QR do szybkiej weryfikacji przy wejściu.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Personalizacja wyglądu kodu QR"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Rozmiar</span>
                <Badge variant="default" size="sm">
                  300 px
                </Badge>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Margines</span>
                <Badge variant="default" size="sm">
                  4
                </Badge>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Kolor kodu</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#000000' }} />
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <span className="text-dark text-sm! font-medium">Kolor tła</span>
                <span className="inline-block h-6 w-6 rounded border border-neutral-200" style={{ backgroundColor: '#ffffff' }} />
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">Generator pozwala dostosować kilka parametrów wpływających na wygląd i czytelność kodu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Rozmiar (px)</strong> - wymiar kodu w pikselach. Dla druku standardowego (ulotki, wizytówki) wybierz 300-500 px. Dla użytku cyfrowego wystarczy 150-200 px.
            </li>
            <li>
              <strong>Margines</strong> - biały obszar wokół kodu niezbędny do prawidłowego skanowania. Zalecana wartość to 2–4. Wartość 0 może utrudnić skanowanie przy ciemnym tle.
            </li>
            <li>
              <strong>Kolor kodu QR</strong> - domyślnie czarny (#000000). Możesz zmienić na dowolny ciemny kolor pasujący do identyfikacji wizualnej.
            </li>
            <li>
              <strong>Kolor tła</strong> - domyślnie biały (#ffffff). Możesz zmienić na dowolny jasny kolor. Generator ostrzeże, jeśli kontrast będzie zbyt niski.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Wskazówka:</strong> Zachowaj wysoki kontrast między kodem a tłem (minimum 3:1). Ciemny kod na jasnym tle skanuje się najłatwiej.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Poziomy korekcji błędów - L, M, Q, H"
          demo={
            <div className="space-y-2">
              {[
                { level: 'L', pct: '7%', label: 'Low / Niski', width: '7%' },
                { level: 'M', pct: '15%', label: 'Medium / Średni', width: '15%' },
                { level: 'Q', pct: '25%', label: 'Quartile / Wysoki', width: '25%' },
                { level: 'H', pct: '30%', label: 'High / Maksymalny', width: '30%' },
              ].map((item) => (
                <div key={item.level} className="rounded-lg border border-neutral-200 bg-white p-3">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-dark text-sm! font-medium">
                      {item.level} ({item.label})
                    </span>
                    <Badge variant={item.level === 'M' ? 'selected' : 'default'} size="sm">
                      {item.pct}
                    </Badge>
                  </div>
                  <div className="h-2 w-full rounded-full bg-neutral-100">
                    <div className="bg-primary h-2 rounded-full" style={{ width: `${parseInt(item.pct)}%`, minWidth: '12px' }} />
                  </div>
                </div>
              ))}
            </div>
          }
        >
          <p className="text-mid mb-4">
            Korekcja błędów to mechanizm pozwalający odczytać kod QR nawet gdy część jest uszkodzona, zabrudzona lub zasłonięta. Generator wykorzystuje algorytm Reed-Solomon, standard w kodach QR.
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>L (Low / Niski) - 7%</strong> - najmniejsza nadmiarowość, kod jest najbardziej kompaktowy. Wybierz, gdy kod będzie używany w idealnych warunkach (ekran, druk wysokiej jakości).
            </li>
            <li>
              <strong>M (Medium / Średni) - 15%</strong> - domyślna wartość, dobry kompromis między pojemnością a odpornością. Odpowiedni dla większości zastosowań.
            </li>
            <li>
              <strong>Q (Quartile / Wysoki) - 25%</strong> - większa odporność na uszkodzenia. Wybierz dla kodów drukowanych na materiałach narażonych na zabrudzenie.
            </li>
            <li>
              <strong>H (High / Maksymalny) - 30%</strong> - najwyższa odporność. Zalecany do druku na materiałach zewnętrznych, opakowaniach i sytuacji, gdzie kod może być częściowo zasłonięty (np.
              logo w środku).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Uwaga:</strong> Wyższy poziom korekcji oznacza większy i bardziej złożony kod. Przy dużej ilości danych i poziomie H kod może stać się bardzo gęsty.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="PNG vs SVG - jaki format wybrać do druku?"
          plans={[
            { id: 'png', name: 'PNG (rastrowy)' },
            { id: 'svg', name: 'SVG (wektorowy)', highlighted: true },
          ]}
          features={[
            { name: 'Strony WWW i media społecznościowe', values: { png: true, svg: true } },
            { name: 'Ulotki i wizytówki', values: { png: true, svg: true } },
            { name: 'Plakaty i banery (duży format)', values: { png: false, svg: true } },
            { name: 'Skalowanie bez utraty jakości', values: { png: false, svg: true } },
            { name: 'Edycja w programie graficznym', values: { png: false, svg: true } },
            { name: 'Mniejszy rozmiar pliku', values: { png: false, svg: true } },
            { name: 'Prezentacje', values: { png: true, svg: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Wskazówki dotyczące druku kodów QR"
          description="Aby kod QR był czytelny po wydrukowaniu, przestrzegaj kilku zasad:"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Minimalny rozmiar',
              description: 'Kod powinien mieć minimum 2x2 cm do skanowania z bliskiej odległości. Im większa odległość skanowania, tym większy musi być kod.',
            },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'Kontrast',
              description: 'Ciemny kod na jasnym tle. Unikaj pastelowych kolorów i niskiego kontrastu.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Margines wokół kodu',
              description: 'Zachowaj pusty obszar wokół kodu. Nie umieszczaj innych elementów graficznych zbyt blisko - margines jest niezbędny do prawidłowego skanowania.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Testowanie',
              description: 'Przed masowym drukiem przetestuj kod na różnych telefonach i w różnych warunkach oświetleniowych.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Poziom korekcji',
              description: 'Dla druku zewnętrznego i materiałów narażonych na uszkodzenie wybierz poziom Q lub H.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia ten generator kodów QR?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Generowanie lokalne w przeglądarce',
              description: 'Dane wpisywane do generatora nie są wysyłane na żaden serwer - całe przetwarzanie odbywa się lokalnie na urządzeniu.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'Pięć typów danych w jednym narzędziu',
              description: 'URL, tekst, wizytówka vCard, e-mail i telefon - każdy typ generuje kod QR w odpowiednim standardzie.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Personalizacja wyglądu kodu QR',
              description: 'Kolory kodu i tła, rozmiar w pikselach, margines i poziom korekcji błędów - każdy parametr można dostosować.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Cztery poziomy korekcji błędów',
              description: 'Algorytm Reed-Solomon pozwala wybrać odporność kodu na uszkodzenia - od 7% (L) do 30% (H). Wyższy poziom przydaje się przy druku na materiałach narażonych na zabrudzenie.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Podgląd na żywo',
              description: 'Widzisz wynik natychmiast po wprowadzeniu danych, bez klikania „Generuj".',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Eksport PNG i SVG',
              description: 'Pobierz kod w formacie odpowiednim do swojego zastosowania.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Polski interfejs',
              description: 'Narzędzie w całości po polsku, bez konieczności tłumaczenia obcojęzycznych etykiet.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr')}
          title="Najczęstsze pytania dotyczące generatora kodów QR"
          openByDefault={1}
          items={[
            {
              question: 'Czy kod QR wygenerowany w tym narzędziu wygasa?',
              answer:
                'Nie. Statyczny kod QR (taki jak generowany w tym narzędziu) nie wygasa. Treść - np. adres URL lub dane wizytówki - jest zakodowana bezpośrednio w kodzie. Dopóki docelowa strona istnieje, kod będzie działać.',
            },
            {
              question: 'Czy można zmienić adres URL w istniejącym kodzie QR?',
              answer:
                'W przypadku statycznego kodu QR nie można zmienić zakodowanej treści - trzeba wygenerować nowy kod z nowym adresem. Dynamiczne kody QR (z możliwością edycji po wygenerowaniu) wymagają zewnętrznych płatnych serwisów.',
            },
            {
              question: 'PNG czy SVG - który format kodu QR wybrać do druku?',
              answer:
                'PNG sprawdzi się w większości zastosowań: strony internetowe, media społecznościowe, druk do formatu A4. SVG jest wektorowy - można go skalować do dowolnego rozmiaru bez utraty jakości, co czyni go odpowiednim do banerów, billboardów i dużych formatów reklamowych.',
            },
            {
              question: 'Jaki rozmiar kodu QR wybrać do druku na wizytówce?',
              answer:
                'Dla materiałów drukowanych (wizytówki, ulotki) kod powinien mieć minimum 2×2 cm, a optymalnie 3×3 cm. W generatorze odpowiada to rozdzielczości 300 px przy standardowej jakości druku (300 DPI). Dla większych formatów (plakaty, banery) warto wybrać większy rozmiar lub format SVG.',
            },
            {
              question: 'Czy mogę dodać logo do środka kodu QR?',
              answer:
                'To narzędzie nie obsługuje dodawania logo bezpośrednio. Można jednak pobrać kod w formacie SVG i nałożyć logo w programie graficznym - w takim przypadku konieczne jest ustawienie wysokiego poziomu korekcji błędów (H), aby kod pozostał czytelny mimo częściowego zasłonięcia.',
            },
            {
              question: 'Dlaczego kod QR nie skanuje się po wydruku?',
              answer:
                'Najczęstsze przyczyny: zbyt niski kontrast między kodem a tłem, zbyt mały rozmiar kodu, brak marginesu wokół kodu lub uszkodzenie wydruku. Warto zwiększyć rozmiar, poprawić kontrast i podnieść poziom korekcji błędów (Q lub H).',
            },
            {
              question: 'Czy wygenerowane kody QR mogę wykorzystać komercyjnie?',
              answer: 'Tak. Wygenerowane kody QR można swobodnie wykorzystać w dowolnych projektach - komercyjnych i niekomercyjnych, bez ograniczeń licencyjnych.',
            },
            {
              question: 'Czym różni się wizytówka vCard od zwykłego kodu QR z tekstem?',
              answer:
                'Kod QR z wizytówką vCard zawiera dane kontaktowe w ustandaryzowanym formacie (imię, nazwisko, firma, telefon, e-mail, adres). Po zeskanowaniu telefon automatycznie zaproponuje zapisanie kontaktu w książce adresowej. Kod z tekstem wyświetli dane jako zwykły napis - bez możliwości automatycznego zapisu.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne darmowe narzędzia online" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz wizytówek lub ulotek z kodem QR?"
        description="Projektujemy wizytówki, ulotki, katalogi i inne materiały drukowane z kodami QR. Zadbamy o spójną identyfikację wizualną i przygotowanie do druku."
        btnOne="Sprawdź ofertę projektów graficznych"
        btnOneLink="/uslugi/projekty-graficzne"
        btnTwo="Skontaktuj się z nami"
        btnTwoLink="/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
