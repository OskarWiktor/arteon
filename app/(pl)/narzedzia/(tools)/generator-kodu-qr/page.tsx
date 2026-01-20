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
  title: 'Darmowy generator kodów QR online - stwórz kod do strony, wizytówki lub menu',
  description: 'Darmowy generator kodów QR online po polsku. Stwórz kod do strony, wizytówki vCard, menu lub ulotki. Pobierz PNG lub SVG bez rejestracji i bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-kodu-qr') },
  openGraph: {
    title: 'Darmowy generator kodów QR online - stwórz kod do strony, wizytówki lub menu',
    description: 'Darmowy generator kodów QR online po polsku. Stwórz kod do strony, wizytówki vCard, menu lub ulotki. Pobierz PNG lub SVG bez rejestracji i bez limitu.',
    url: toAbsoluteUrl('/narzedzia/generator-kodu-qr'),
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
  ],
  url: toAbsoluteUrl('/narzedzia/generator-kodu-qr'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'QRCodeGenerator',
  operatingSystem: 'Any',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
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
        title="Stwórz kod QR do strony, wizytówki lub menu"
        description="Stwórz kod QR w kilka sekund. Wpisz adres strony, dane kontaktowe lub treść e-maila, a narzędzie wygeneruje gotowy kod do pobrania w PNG lub SVG."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/generator-kodu-qr', label: 'Stwórz kod QR do strony, wizytówki lub menu' }} includeJsonLd />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Czym jest kod QR i do czego służy?">
          <p className="text-mid">
            Kod QR (z angielskiego Quick Response - szybka odpowiedź, nazywany też QR code) to dwuwymiarowy kod kreskowy, który można zeskanować aparatem w telefonie. W odróżnieniu od tradycyjnego
            kodu kreskowego 1D, kod QR przechowuje dane w obu wymiarach, dzięki czemu mieści znacznie więcej informacji.
          </p>
          <p className="text-mid mt-3">
            Po zeskanowaniu telefon automatycznie wykonuje zapisaną akcję: otwiera stronę internetową, zapisuje kontakt w książce adresowej, rozpoczyna połączenie telefoniczne lub tworzy wiadomość
            e-mail. Kody QR są powszechnie stosowane na wizytówkach, ulotkach, plakatach, opakowaniach produktów i w menu restauracji.
          </p>
        </SectionInfo>

        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <QrCodeGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora kodów QR?"
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
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/generator-kodu-qr/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Co możesz wygenerować - typy kodów QR">
          <p className="text-mid mb-4">Nasz kreator kodów QR online obsługuje pięć typów danych - każdy przydatny w innych sytuacjach:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Adres URL</strong> - link do strony internetowej. Po zeskanowaniu telefon otworzy stronę w przeglądarce. Idealne do wizytówek, ulotek i plakatów.
            </li>
            <li>
              <strong>Tekst</strong> - dowolny tekst do 3000 znaków. Po zeskanowaniu telefon wyświetli tekst na ekranie. Przydatne do kuponów rabatowych i krótkich instrukcji.
            </li>
            <li>
              <strong>Wizytówka vCard</strong> - elektroniczna wizytówka z danymi kontaktowymi (imię, nazwisko, firma, telefon, e-mail, adres). Po zeskanowaniu telefon zaproponuje zapisanie kontaktu.
              Generator wizytówki elektronicznej vCard jest idealny do profesjonalnych wizytówek firmowych.
            </li>
            <li>
              <strong>E-mail</strong> - adres e-mail z opcjonalnym tematem i treścią. Po zeskanowaniu telefon otworzy aplikację pocztową z wypełnionym formularzem.
            </li>
            <li>
              <strong>Telefon</strong> - numer telefonu. Po zeskanowaniu telefon zaproponuje wykonanie połączenia. Przydatne do infolinii i kontaktu z obsługą klienta.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Gdzie używać kodów QR - wizytówki, ulotki, menu restauracji?">
          <p className="text-mid mb-4">Narzędzie do tworzenia kodów QR przydaje się w wielu zastosowaniach biznesowych:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Wizytówki firmowe</strong> - kod QR z wizytówką vCard pozwala zapisać kontakt jednym zeskanowaniem. Nie trzeba przepisywać danych ręcznie.
            </li>
            <li>
              <strong>Ulotki i plakaty</strong> - link do strony, formularza kontaktowego lub oferty. Klient zeskanuje kod i od razu trafi we właściwe miejsce.
            </li>
            <li>
              <strong>Menu restauracji</strong> - naklejka na stoliku z kodem prowadzącym do menu online. Kreator menu QR dla restauracji pozwala szybko wygenerować kod do druku. Higieniczne i łatwe
              do aktualizacji - zmiana menu nie wymaga ponownego druku.
            </li>
            <li>
              <strong>Opakowania produktów</strong> - link do instrukcji obsługi, karty produktu lub formularza rejestracji gwarancji.
            </li>
            <li>
              <strong>Identyfikatory na konferencjach</strong> - kod QR z wizytówką vCard ułatwia wymianę kontaktów między uczestnikami.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak przygotować kod QR do druku - PNG czy SVG?">
          <p className="text-mid mb-4">
            Generator kodu QR do druku oferuje eksport w dwóch formatach. Kilka wskazówek, które pomogą przygotować kod do materiałów drukowanych:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Rozmiar</strong> - dla wizytówek i ulotek zalecamy minimum 2x2 cm. W generatorze odpowiada to rozdzielczości 300 px przy standardowej jakości druku (300 DPI).
            </li>
            <li>
              <strong>Format</strong> - PNG sprawdzi się w większości zastosowań. SVG (format wektorowy) pozwala skalować kod do dowolnego rozmiaru bez utraty jakości - idealny do banerów i
              billboardów.
            </li>
            <li>
              <strong>Margines</strong> - biała ramka wokół kodu (tzw. quiet zone) ułatwia skanowanie. Zalecana wartość to 2-4 moduły.
            </li>
            <li>
              <strong>Kontrast</strong> - zachowaj ciemny kod na jasnym tle. Narzędzie ostrzega, gdy kontrast jest zbyt niski.
            </li>
            <li>
              <strong>Test przed drukiem</strong> - zeskanuj kod telefonem przed wysłaniem do druku, żeby upewnić się, że prowadzi we właściwe miejsce.
            </li>
          </ul>
          <p className="text-mid mt-3">
            Szczegółowe informacje o poziomach korekcji błędów, formatach eksportu i opcjach personalizacji znajdziesz w{' '}
            <Link href="/narzedzia/generator-kodu-qr/instrukcja" className="inline-link">
              pełnej instrukcji generatora
            </Link>
            .
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego wybrać nasz darmowy generator kodów QR online?">
          <p className="text-mid mb-4">Nasz generator kodów QR wyróżnia się na tle konkurencji:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Darmowy i bez limitu</strong> - tworzysz dowolną liczbę kodów QR bez opłat. Nie ma ukrytych kosztów ani wersji premium.
            </li>
            <li>
              <strong>Bez rejestracji</strong> - nie musisz zakładać konta ani podawać adresu e-mail. Generator działa od razu po otwarciu strony.
            </li>
            <li>
              <strong>Po polsku</strong> - cały interfejs jest w języku polskim. Nie musisz tłumaczyć opcji z angielskiego.
            </li>
            <li>
              <strong>Prywatność</strong> - dane nie są wysyłane na serwer. Generator działa w całości w przeglądarce.
            </li>
            <li>
              <strong>5 typów danych</strong> - URL, tekst, wizytówka vCard, e-mail, telefon. Pokrywa większość zastosowań biznesowych.
            </li>
            <li>
              <strong>PNG i SVG</strong> - eksport do formatu rastrowego (do internetu i druku) oraz wektorowego (do dużych formatów).
            </li>
            <li>
              <strong>Podgląd na żywo</strong> - każda zmiana jest widoczna natychmiast. Nie musisz klikać przycisku, żeby zobaczyć efekt.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/generator-kodu-qr')}
          title="Najczęstsze pytania o kody QR i generator"
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
              question: 'PNG czy SVG - który format wybrać?',
              answer:
                'PNG sprawdzi się w większości zastosowań: strony internetowe, media społecznościowe, druk do formatu A4. SVG jest wektorowy - możesz go skalować do dowolnego rozmiaru bez utraty jakości, co czyni go idealnym do banerów, billboardów i dużych formatów reklamowych.',
            },
            {
              question: 'Jaki rozmiar kodu QR wybrać do druku?',
              answer:
                'Dla materiałów drukowanych (wizytówki, ulotki) zalecamy kod o wymiarach minimum 2x2 cm. W generatorze odpowiada to rozdzielczości 300 px przy standardowej jakości druku (300 DPI). Dla większych formatów (plakaty, banery) wybierz większy rozmiar lub format SVG.',
            },
            {
              question: 'Czy mogę używać wygenerowanych kodów QR komercyjnie?',
              answer: 'Tak. Wygenerowane kody QR możesz swobodnie używać w dowolnych projektach - komercyjnych i niekomercyjnych, bez żadnych ograniczeń ani opłat.',
            },
            {
              question: 'Czy kod QR będzie działał na wszystkich telefonach?',
              answer:
                'Tak. Większość nowoczesnych smartfonów (iPhone, Android) ma wbudowany skaner QR w aplikacji aparatu. Starsze telefony mogą wymagać zainstalowania dedykowanej aplikacji do skanowania kodów.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

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
