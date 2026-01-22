import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Darmowy generator kodów QR online | Kod QR bez rejestracji',
  description:
    'Darmowy generator kodów QR online po polsku. Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr') },
  openGraph: {
    title: 'Darmowy generator kodów QR online | Kod QR bez rejestracji',
    description:
      'Darmowy generator kodów QR online po polsku. Stwórz kod QR do strony, wizytówki vCard, menu restauracji lub ulotki. Eksport PNG i SVG, bez logowania, bez limitu.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp') }],
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
  description:
    'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
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
    'Bez logowania i rejestracji',
    'Bez limitu generowania kodów',
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

export default function Page() {
  return (
    <>
      <Script id="ld-json-qr-generator" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Darmowy generator kodów QR online"
        description="Stwórz kod QR do strony WWW, wizytówki vCard, e-maila, telefonu lub tekstu. Dostosuj kolory, rozmiar i poziom korekcji błędów, a następnie pobierz gotowy plik PNG lub SVG — bez rejestracji i bez limitu."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-kodu-qr.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/darmowy-generator-kodow-qr', label: 'Darmowy generator kodów QR online' }}
        includeJsonLd
      />

      <Wrapper>
        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <QrCodeGenerator />

        <Gap variant="line" />

        <SectionInfo title="Czym jest kod QR i jak działa?">
          <p className="text-mid">
            Kod QR (Quick Response) to dwuwymiarowy kod kreskowy, który można zeskanować aparatem smartfona. W przeciwieństwie do tradycyjnych kodów kreskowych, QR przechowuje dane zarówno w poziomie,
            jak i w pionie, co pozwala zakodować znacznie więcej informacji — do około 3000 znaków alfanumerycznych.
          </p>
          <p className="text-mid mt-3">
            Kod QR został opracowany w 1994 roku przez japońską firmę Denso Wave (część grupy Toyota) do śledzenia części samochodowych. Dziś kody QR są powszechnie stosowane w marketingu, gastronomii,
            logistyce i komunikacji biznesowej. Szczególną popularność zyskały podczas pandemii COVID-19, gdy restauracje zaczęły masowo zastępować papierowe menu kodami QR.
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
              description: 'Wypełnij odpowiednie pola — adres strony, dane kontaktowe lub treść wiadomości.',
            },
            {
              title: '3. Pobierz kod',
              description: 'Dostosuj wygląd (kolory, rozmiar, margines) i pobierz jako PNG lub SVG.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-kodow-qr/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Typy kodów QR — URL, vCard, e-mail, telefon, tekst">
          <p className="text-mid mb-4">Nasz darmowy generator kodów QR online obsługuje pięć typów danych — każdy przydatny w innych sytuacjach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Adres URL</strong> — link do strony internetowej. Po zeskanowaniu telefon otworzy stronę w przeglądarce. Idealne do wizytówek, ulotek i plakatów.
            </li>
            <li>
              <strong>Tekst</strong> — dowolny tekst do 3000 znaków. Po zeskanowaniu telefon wyświetli tekst na ekranie. Przydatne do kuponów rabatowych i krótkich instrukcji.
            </li>
            <li>
              <strong>Wizytówka vCard</strong> — elektroniczna wizytówka z danymi kontaktowymi (imię, nazwisko, firma, telefon, e-mail, adres). Po zeskanowaniu telefon zaproponuje zapisanie kontaktu.
              Generator wizytówki elektronicznej vCard jest idealny do profesjonalnych wizytówek firmowych.
            </li>
            <li>
              <strong>E-mail</strong> — adres e-mail z opcjonalnym tematem i treścią. Po zeskanowaniu telefon otworzy aplikację pocztową z wypełnionym formularzem.
            </li>
            <li>
              <strong>Telefon</strong> — numer telefonu. Po zeskanowaniu telefon zaproponuje wykonanie połączenia. Przydatne do infolinii i kontaktu z obsługą klienta.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Specyfikacja techniczna kodów QR">
          <p className="text-mid mb-4">Znajomość parametrów technicznych pomaga tworzyć kody QR, które będą czytelne w każdych warunkach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Pojemność danych</strong> — kod QR może pomieścić do 7089 cyfr, 4296 znaków alfanumerycznych lub 2953 bajtów danych binarnych. W praktyce dla URL i wizytówek ta pojemność jest więcej
              niż wystarczająca.
            </li>
            <li>
              <strong>Korekcja błędów Reed-Solomon</strong> — algorytm matematyczny pozwalający odczytać kod nawet gdy część jest uszkodzona lub zasłonięta. Poziomy: L (7%), M (15%), Q (25%), H (30%).
            </li>
            <li>
              <strong>Quiet zone (margines)</strong> — biały obszar wokół kodu niezbędny do prawidłowego skanowania. Zalecane minimum to 4 moduły (jednostki kodu).
            </li>
            <li>
              <strong>Minimalny rozmiar do druku</strong> — dla standardowych warunków skanowania kod powinien mieć minimum 2×2 cm. Dla druku na dużych formatach (banery, billboardy) — proporcjonalnie
              więcej.
            </li>
            <li>
              <strong>Kontrast</strong> — współczynnik kontrastu między kodem a tłem powinien wynosić minimum 3:1. Generator automatycznie ostrzega o zbyt niskim kontraście.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Zastosowania kodów QR — wizytówki, ulotki, menu restauracji">
          <p className="text-mid mb-4">Kody QR znajdują zastosowanie w wielu branżach i scenariuszach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Wizytówki firmowe</strong> — kod vCard na wizytówce pozwala odbiorcy zapisać kontakt jednym skanowaniem, bez ręcznego przepisywania danych.
            </li>
            <li>
              <strong>Menu restauracji i kawiarni</strong> — kod QR na stoliku kieruje do cyfrowego menu. Higieniczne rozwiązanie popularne od pandemii COVID-19. Kreator menu QR dla restauracji pozwala
              szybko wygenerować kod do druku.
            </li>
            <li>
              <strong>Ulotki i plakaty</strong> — kod QR z linkiem do strony produktu, formularza rejestracji lub oferty specjalnej.
            </li>
            <li>
              <strong>Opakowania produktów</strong> — link do instrukcji obsługi, karty gwarancyjnej lub strony producenta.
            </li>
            <li>
              <strong>Gabinety lekarskie i przychodnie</strong> — kody QR na kartach pacjenta z linkiem do portalu pacjenta lub systemu rezerwacji wizyt.
            </li>
            <li>
              <strong>Nieruchomości</strong> — kody na banerach „Na sprzedaż" z linkiem do pełnego ogłoszenia z galerią zdjęć i szczegółami.
            </li>
            <li>
              <strong>Magazyny i logistyka</strong> — etykiety z kodami QR do śledzenia partii produktów, lokalizacji w magazynie i historii przesyłki.
            </li>
            <li>
              <strong>E-commerce</strong> — kody na opakowaniach z linkiem do instrukcji zwrotu, opinii klientów lub programu lojalnościowego.
            </li>
            <li>
              <strong>Eventy i konferencje</strong> — bilety z kodem QR do szybkiej weryfikacji przy wejściu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="PNG vs SVG — jaki format wybrać do druku?">
          <p className="text-mid mb-4">Generator kodu QR do druku oferuje eksport w dwóch formatach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>PNG (format rastrowy)</strong> — obraz składa się z pikseli. Idealny do użytku cyfrowego (strony WWW, prezentacje, media społecznościowe) i druku w stałym rozmiarze (ulotki,
              wizytówki). Przy powiększaniu powyżej oryginalnego rozmiaru jakość spada.
            </li>
            <li>
              <strong>SVG (format wektorowy)</strong> — obraz opisany matematycznie, można go skalować bez utraty jakości. Zalecany do druku wielkoformatowego (plakaty, banery, roll-upy) i sytuacji, gdy
              potrzebujesz edytować kod w programie graficznym.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Wskazówka:</strong> Dla materiałów drukowanych o stałym rozmiarze (wizytówki, ulotki A5/A4) PNG w rozmiarze 300-500 px jest wystarczający. Dla dużych formatów zawsze wybieraj SVG.
            Szczegółowe informacje znajdziesz w{' '}
            <Link href="/narzedzia/darmowy-generator-kodow-qr/instrukcja" className="inline-link">
              pełnej instrukcji generatora
            </Link>
            .
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego wybrać nasz darmowy generator kodów QR?">
          <p className="text-mid mb-4">Nasz generator kodów QR wyróżnia się na tle konkurencji:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Całkowicie darmowy, bez limitu</strong> — generuj dowolną liczbę kodów QR bez rejestracji, bez logowania i bez ukrytych opłat. Wiele konkurencyjnych narzędzi ogranicza liczbę kodów
              lub wymaga płatnej subskrypcji.
            </li>
            <li>
              <strong>Prywatność i bezpieczeństwo</strong> — kod QR generowany jest lokalnie w przeglądarce. Dane (np. treść wizytówki vCard) nie są wysyłane na żaden serwer ani nigdzie zapisywane.
            </li>
            <li>
              <strong>5 typów danych</strong> — URL, tekst, wizytówka vCard, e-mail, telefon — wszystko w jednym narzędziu.
            </li>
            <li>
              <strong>Pełna personalizacja</strong> — dostosuj kolory kodu i tła, rozmiar, margines oraz poziom korekcji błędów.
            </li>
            <li>
              <strong>Podgląd na żywo</strong> — widzisz wynik natychmiast po wprowadzeniu danych, bez klikania „Generuj".
            </li>
            <li>
              <strong>Eksport PNG i SVG</strong> — pobierz kod w formacie odpowiednim do swojego zastosowania.
            </li>
            <li>
              <strong>Polski interfejs</strong> — narzędzie w całości po polsku, bez konieczności tłumaczenia obcojęzycznych etykiet.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr')}
          title="Najczęstsze pytania o darmowy generator kodów QR"
          items={[
            {
              question: 'Czy narzędzie jest naprawdę darmowe?',
              answer: 'Tak. Generator jest w pełni darmowy, bez ukrytych opłat, bez limitu użycia i bez rejestracji. Możesz tworzyć dowolną liczbę kodów QR.',
            },
            {
              question: 'Czy moje dane są wysyłane na serwer?',
              answer: 'Nie. Generator działa w całości w przeglądarce. Dane, które wpisujesz, nie są wysyłane na żaden serwer. Wszystkie obliczenia są wykonywane lokalnie na urządzeniu użytkownika.',
            },
            {
              question: 'Czy kod QR wygasa lub przestaje działać?',
              answer:
                'Nie, statyczny kod QR (taki jak generowany w tym narzędziu) nie wygasa. Zawiera zakodowaną treść (np. adres URL) bezpośrednio w sobie. Dopóki docelowa strona istnieje, kod będzie działać.',
            },
            {
              question: 'Jak zmienić adres URL w istniejącym kodzie QR?',
              answer:
                'W przypadku statycznego kodu QR nie można zmienić zakodowanej treści — trzeba wygenerować nowy kod z nowym adresem. Dynamiczne kody QR (z możliwością edycji) wymagają zewnętrznych płatnych serwisów.',
            },
            {
              question: 'Jaka jest maksymalna pojemność kodu QR?',
              answer: 'Kod QR może pomieścić do około 7000 cyfr lub 4000 znaków alfanumerycznych. W praktyce dla adresów URL i wizytówek vCard ta pojemność jest więcej niż wystarczająca.',
            },
            {
              question: 'PNG czy SVG — który format wybrać?',
              answer:
                'PNG sprawdzi się w większości zastosowań: strony internetowe, media społecznościowe, druk do formatu A4. SVG jest wektorowy — możesz go skalować do dowolnego rozmiaru bez utraty jakości, co czyni go idealnym do banerów, billboardów i dużych formatów reklamowych.',
            },
            {
              question: 'Jaki rozmiar kodu QR wybrać do druku?',
              answer:
                'Dla materiałów drukowanych (wizytówki, ulotki) zalecamy kod o wymiarach minimum 3×3 cm. W generatorze odpowiada to rozdzielczości 300 px przy standardowej jakości druku (300 DPI). Dla większych formatów (plakaty, banery) wybierz większy rozmiar lub format SVG.',
            },
            {
              question: 'Czy mogę używać wygenerowanych kodów QR komercyjnie?',
              answer: 'Tak. Wygenerowane kody QR możesz swobodnie używać w dowolnych projektach — komercyjnych i niekomercyjnych, bez żadnych ograniczeń ani opłat.',
            },
            {
              question: 'Czy mogę dodać logo do środka kodu QR?',
              answer:
                'To narzędzie nie obsługuje dodawania logo. Możesz jednak pobrać kod SVG i nałożyć logo w programie graficznym — pamiętaj wtedy o ustawieniu wysokiego poziomu korekcji błędów (H), aby kod pozostał czytelny mimo częściowego zasłonięcia.',
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
