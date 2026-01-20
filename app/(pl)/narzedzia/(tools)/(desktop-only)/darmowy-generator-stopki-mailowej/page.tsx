import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import EmailSignatureGenerator from '@/components/sections/tools/EmailSignatureGenerator';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Darmowy generator stopki mailowej online - stwórz podpis email HTML',
  description: 'Darmowy generator stopki mailowej po polsku. Stwórz profesjonalny podpis email HTML bez rejestracji. Dodaj dane kontaktowe, logo, media społecznościowe i skopiuj do Gmail lub Outlook.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej') },
  openGraph: {
    title: 'Darmowy generator stopki mailowej online - stwórz podpis email HTML',
    description: 'Darmowy generator stopki mailowej po polsku. Stwórz profesjonalny podpis email HTML bez rejestracji. Dodaj dane kontaktowe, logo, media społecznościowe i skopiuj do Gmail lub Outlook.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy generator stopki mailowej online',
  alternateName: ['Generator podpisu e-mail HTML', 'Kreator sygnaturki email', 'Generator stopki email po polsku', 'Kreator podpisu mailowego online'],
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'EmailSignatureGenerator',
  operatingSystem: 'Any',
  description:
    'Darmowy generator stopki mailowej HTML po polsku. Dodaj dane kontaktowe, link CTA i profile social mediów, a następnie skopiuj gotowy kod podpisu do Gmaila, Outlooka i innych klientów pocztowych.',
  featureList: [
    'Dane kontaktowe (imię, nazwisko, stanowisko, firma)',
    'Telefon, e-mail i adres strony WWW',
    'Logo lub zdjęcie profilowe',
    'Ikony mediów społecznościowych (Facebook, Instagram, LinkedIn, X)',
    'Konfigurowalne kolory (tekst, akcent, tło)',
    'Przycisk CTA z własnym tekstem i linkiem',
    'Podgląd stopki na żywo',
    'Kopiowanie kodu HTML jednym kliknięciem',
    'Kompatybilność z Gmail, Outlook, Apple Mail',
    'Bez logowania i rejestracji',
    'Bez limitu użycia',
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
      <Script id="ld-json-email-signature-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Stwórz profesjonalną stopkę mailową HTML"
        description="Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila, Outlooka i innych klientów pocztowych"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/darmowy-generator-stopki-mailowej`, label: 'Darmowy generator stopki mailowej HTML' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Dlaczego warto mieć profesjonalną stopkę mailową?">
          <p className="text-mid">
            Stopka mailowa (nazywana też podpisem e-mail lub sygnaturką) to blok informacji na końcu każdej wysyłanej wiadomości. Zawiera dane kontaktowe, stanowisko, nazwę firmy i często link do
            strony internetowej lub kalendarza spotkań.
          </p>
          <p className="text-mid mt-3">
            Odbiorca nie musi szukać numeru telefonu w poprzednich wiadomościach - wszystkie dane ma pod ręką. Stopka pokazuje też, że dbasz o szczegóły i spójny wizerunek firmy w korespondencji.
          </p>
        </SectionInfo>

        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <EmailSignatureGenerator />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z generatora stopki mailowej?"
          description="Stworzenie profesjonalnego podpisu email to kilka minut:"
          grid="three"
          items={[
            {
              title: '1. Wpisz dane',
              description: 'Uzupełnij imię, nazwisko, stanowisko, firmę i dane kontaktowe.',
            },
            {
              title: '2. Dostosuj wygląd',
              description: 'Wybierz układ, kolory, dodaj logo i linki do mediów społecznościowych.',
            },
            {
              title: '3. Skopiuj kod',
              description: 'Kliknij Kopiuj stopkę i wklej w ustawieniach Gmail, Outlook lub innego klienta.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-stopki-mailowej/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Co możesz skonfigurować w generatorze podpisu email?">
          <p className="text-mid mb-4">Generator oferuje pełną personalizację stopki bez znajomości HTML. Wszystkie ustawienia są widoczne w podglądzie na żywo.</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Dane kontaktowe</strong> - imię i nazwisko, stanowisko, firma, e-mail, telefon, adres strony WWW, adres fizyczny.
            </li>
            <li>
              <strong>Logo lub zdjęcie profilowe</strong> - wklej adres URL obrazu (kwadratowy, min. 120×120 px).
            </li>
            <li>
              <strong>Media społecznościowe</strong> - LinkedIn, Instagram, Facebook, TikTok, YouTube, X. Ikony SVG w trzech rozmiarach i trzech wariantach kolorystycznych.
            </li>
            <li>
              <strong>Przyciski CTA</strong> - do dwóch przycisków z własnym tekstem i linkiem. Przydatne do linkowania kalendarza spotkań lub oferty.
            </li>
            <li>
              <strong>8 gotowych układów</strong> - Standard, Pasek u góry, Etykiety z lewej, Wyśrodkowany, Kompaktowy, Dwie kolumny, Minimalistyczny, Pasek na dole.
            </li>
            <li>
              <strong>Personalizacja wyglądu</strong> - motywy kolorystyczne, własne kolory akcentu i tekstu, wybór czcionki, rozmiar tekstu, ramka stopki.
            </li>
            <li>
              <strong>Styl tekstu</strong> - indywidualny kolor i rozmiar dla każdego elementu (imię, stanowisko, firma, dane kontaktowe, klauzula).
            </li>
            <li>
              <strong>Odstępy</strong> - precyzyjna kontrola marginesów i odstępów między elementami.
            </li>
            <li>
              <strong>Klauzula prawna / RODO</strong> - opcjonalny tekst prawny na dole stopki z linią oddzielającą.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest generator stopki mailowej?">
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Przedsiębiorcy i freelancerzy</strong> - spójna stopka we wszystkich wiadomościach bez zlecania projektowania.
            </li>
            <li>
              <strong>Zespoły firmowe</strong> - każdy pracownik tworzy własną stopkę w tym samym stylu (układ, kolory, czcionka). Spójna identyfikacja w całej firmie.
            </li>
            <li>
              <strong>Handlowcy i sprzedawcy</strong> - przycisk CTA z linkiem do kalendarza lub oferty zwiększa szanse na umówienie spotkania.
            </li>
            <li>
              <strong>Prawnicy, księgowi, lekarze</strong> - możliwość dodania klauzuli prawnej, numeru licencji, NIP lub innych danych wymaganych w branży.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo
          title="Jak wkleić stopkę mailową do Gmail lub Outlook?"
          btnOne="Zobacz szczegółową instrukcję"
          btnOneLink="/narzedzia/darmowy-generator-stopki-mailowej/instrukcja"
        >
          <p className="text-mid">
            Kliknij przycisk <strong>Kopiuj stopkę (Gmail / Outlook)</strong> pod podglądem. Stopka zostanie skopiowana do schowka jako sformatowany HTML.
          </p>
          <p className="text-mid mt-3">
            W <strong>Gmail</strong>: Ustawienia → Zobacz wszystkie ustawienia → Podpis → wklej (Ctrl+V) → Zapisz zmiany.
          </p>
          <p className="text-mid mt-3">
            W <strong>Outlook</strong>: Plik → Opcje → Poczta → Podpisy → Nowy → wklej (Ctrl+V) → OK.
          </p>
          <p className="text-mid mt-3">
            Stopka zachowa wszystkie kolory, czcionki i formatowanie. Szczegółowe instrukcje dla Thunderbird, Apple Mail i innych klientów znajdziesz w{' '}
            <Link href="/narzedzia/darmowy-generator-stopki-mailowej/instrukcja" className="inline-link">
              pełnej instrukcji
            </Link>
            .
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego wybrać nasz generator podpisu email?">
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Darmowy i bez limitu</strong> - tworzysz dowolną liczbę stopek bez opłat. Nie ma ukrytych kosztów ani wersji premium.
            </li>
            <li>
              <strong>Bez rejestracji</strong> - nie musisz zakładać konta ani podawać adresu e-mail. Generator działa od razu po otwarciu strony.
            </li>
            <li>
              <strong>Po polsku</strong> - cały interfejs i wszystkie etykiety są w języku polskim. Nie musisz tłumaczyć opcji z angielskiego.
            </li>
            <li>
              <strong>Prywatność</strong> - dane nie są wysyłane na serwer. Generator działa w całości w przeglądarce, a ustawienia zapisują się lokalnie (localStorage).
            </li>
            <li>
              <strong>Kompatybilność</strong> - wygenerowany kod HTML działa w Gmail, Outlook, Apple Mail, Thunderbird i innych klientach pocztowych.
            </li>
            <li>
              <strong>Podgląd na żywo</strong> - każda zmiana jest widoczna natychmiast. Nie musisz klikac przycisku, żeby zobaczyć efekt.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej')}
          title="Najczęstsze pytania o generator stopki mailowej"
          items={[
            {
              question: 'Czy narzędzie jest naprawdę darmowe?',
              answer:
                'Tak. Generator jest w pełni darmowy, bez ukrytych opłat, bez limitu użycia i bez rejestracji. Możesz tworzyć dowolną liczbę stopek.',
            },
            {
              question: 'Czy muszę się rejestrować?',
              answer:
                'Nie. Generator nie wymaga logowania ani rejestracji. Po prostu otwórz stronę i zacznij tworzyć stopkę.',
            },
            {
              question: 'Czy moje dane są zapisywane na serwerze?',
              answer:
                'Nie. Generator działa w całości w przeglądarce. Dane, które wpisujesz, nie są wysyłane na żaden serwer. Ustawienia zapisują się lokalnie w przeglądarce (localStorage), więc po odświeżeniu strony Twoja stopka będzie nadal dostępna.',
            },
            {
              question: 'Czy stopka będzie działać w Gmail, Outlook i Apple Mail?',
              answer:
                'Tak. Stopki generowane przez nasze narzędzie używają tabel HTML, które poprawnie wyświetlają się we wszystkich popularnych klientach pocztowych: Gmail, Outlook (desktop i web), Apple Mail, Thunderbird.',
            },
            {
              question: 'Czy mogę dodać logo firmy?',
              answer:
                'Tak. W zakładce Dane wklej adres URL do obrazu (logo lub zdjęcie profilowe). Obraz powinien być kwadratowy (min. 120×120 px) i publicznie dostępny w internecie.',
            },
            {
              question: 'Jak skopiować stopkę do programu pocztowego?',
              answer:
                'Kliknij przycisk Kopiuj stopkę (Gmail / Outlook) pod podglądem. Stopka zostanie skopiowana do schowka jako sformatowany HTML. W ustawieniach podpisu w Gmail lub Outlook wklej ją skrótem Ctrl+V (Windows) lub Cmd+V (Mac).',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz spójnej identyfikacji mailowej dla firmy?"
        description="Projektujemy kompletną identyfikację wizualną - od logo, przez materiały firmowe, po stopki mailowe i szablony dokumentów. Wszystko dopasowane do Twojej marki."
        btnOne="Skontaktuj się z nami"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę identyfikacji wizualnej"
        btnTwoLink="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
