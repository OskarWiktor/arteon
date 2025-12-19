import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import QrCodeGenerator from '@/components/sections/tools/QrCodeGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

const BASE_URL = 'https://www.arteonagency.pl';
const PAGE_URL = `${BASE_URL}/narzedzia/generator-kodu-qr`;
const OG_IMAGE = `${BASE_URL}/assets/tools/narzedzia-generator-kodu-qr.webp`;

export const metadata: Metadata = {
  title: 'Darmowy generator kodu QR online - dla firm i materiałów drukowanych',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Darmowy generator kodu QR online - dla firm i materiałów drukowanych',
    description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
    url: PAGE_URL,
    type: 'website',
    images: [{ url: OG_IMAGE }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Darmowy generator kodu QR online',
  alternateName: 'Generator kodu QR dla firm i materiałów drukowanych',
  url: PAGE_URL,
  applicationCategory: 'UtilityApplication',
  operatingSystem: 'Any',
  description: 'Stwórz kod QR do strony, wizytówki, menu lub ulotki. Wybierz typ, kolor i rozmiar, a następnie pobierz gotowy plik PNG lub SVG. Bez logowania i bez limitu.',
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
    url: BASE_URL,
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-qr-generator" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Generator kodu QR online"
        description="Stwórz kod QR w kilka sekund. Wpisz adres strony, dane kontaktowe lub treść e-maila, a narzędzie wygeneruje gotowy kod do pobrania w PNG lub SVG."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs second={{ href: '/narzedzia', label: 'Narzędzia' }} third={{ href: '/narzedzia/generator-kodu-qr', label: 'Generator kodu QR' }} includeJsonLd />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Czym jest kod QR i do czego służy?">
          <p className="text-mid">
            Kod QR (od angielskiego <em>Quick Response</em> – szybka odpowiedź) to dwuwymiarowy kod kreskowy, który można zeskanować aparatem w telefonie. Po zeskanowaniu telefon automatycznie otworzy
            stronę internetową, zapisze kontakt, połączy się z Wi-Fi lub wykona inną akcję – zależnie od tego, co zakodowałeś.
          </p>
          <p className="text-mid mt-3">
            <strong>Gdzie stosować kody QR?</strong> Na wizytówkach, ulotkach, plakatach, menu restauracji, opakowaniach produktów, banerach reklamowych i wszędzie tam, gdzie chcesz szybko
            przekierować klienta do konkretnej treści bez wpisywania adresu ręcznie.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <QrCodeGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Generowanie kodu QR zajmuje dosłownie kilka sekund. Oto jak to zrobić:"
          grid="four"
          items={[
            {
              title: '1. Wybierz typ danych',
              description: 'Zdecyduj, co ma zawierać kod: adres URL, tekst, wizytówkę (vCard), e-mail lub numer telefonu.',
            },
            {
              title: '2. Wpisz dane',
              description: 'Wypełnij odpowiednie pola. Dla URL wpisz adres strony, dla vCard podaj dane kontaktowe itd.',
            },
            {
              title: '3. Dostosuj wygląd',
              description: 'Wybierz rozmiar, margines, kolory kodu i tła. Dla materiałów drukowanych ustaw min. 300px i poziom korekcji H.',
            },
            {
              title: '4. Pobierz kod',
              description: 'Kliknij „Pobierz PNG” lub „Pobierz SVG”. PNG sprawdzi się w większości zastosowań, SVG jest idealny do druku w dużych formatach.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Zastosowania kodów QR w firmie"
          description="Kody QR mają wiele praktycznych zastosowań w codziennej działalności:"
          grid="two"
          items={[
            {
              title: 'Materiały drukowane',
              description: (
                <p>
                  Dodaj kod QR do wizytówki, ulotki, katalogu lub plakatu. Klient zeskanuje go telefonem i od razu trafi na Twoją stronę, formularz kontaktowy lub ofertę – bez przepisywania długiego
                  adresu.
                </p>
              ),
            },
            {
              title: 'Wizytówki z vCard',
              description: (
                <p>
                  Kod QR z wizytówką elektroniczną (vCard) pozwala zapisać Twoje dane kontaktowe bezpośrednio w telefonie klienta – imię, nazwisko, firmę, telefon, e-mail i adres jednym skanowaniem.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wskazówki do druku">
          <p className="text-mid">
            <strong>Rozmiar:</strong> Dla materiałów drukowanych (wizytówki, ulotki) zalecamy kod o wymiarach minimum 2×2 cm. W generatorze odpowiada to rozdzielczości 300 px przy standardowej jakości
            druku.
          </p>
          <p className="text-mid mt-3">
            <strong>Poziom korekcji błędów:</strong> Wybierz poziom H (maksymalny, 30%) jeśli kod będzie drukowany na powierzchniach, które mogą być częściowo zasłonięte lub uszkodzone. Dla materiałów
            cyfrowych wystarczy poziom M (15%).
          </p>
          <p className="text-mid mt-3">
            <strong>Kontrast kolorów:</strong> Narzędzie ostrzega, gdy kontrast między kolorami kodu i tła jest zbyt niski. Dla pewności skanowania zachowaj kontrast minimum 3:1 – najlepiej ciemny kod
            na jasnym tle.
          </p>
          <p className="text-mid mt-3">
            <strong>Format pliku:</strong> PNG sprawdzi się w większości zastosowań (web, social media, druk do A4). SVG jest wektorowy – możesz go skalować do dowolnego rozmiaru bez utraty jakości,
            idealny do banerów i billboardów.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />
        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych materiałów drukowanych?"
        description="Zaprojektujemy wizytówki, ulotki, katalogi i inne materiały z kodem QR, które wyróżnią Twoją firmę."
        btnOne="Sprawdź projekty graficzne"
        btnOneLink="/uslugi/projekty-graficzne"
        btnTwo="Napisz do nas"
        btnTwoLink="/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
