import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
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
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import {
  RiClipboardLine,
  RiSettings3Line,
  RiSaveLine,
  RiBriefcaseLine,
  RiTeamLine,
  RiHandCoinLine,
  RiScales3Line,
  RiInfinityLine,
  RiUserLine,
  RiTranslate2,
  RiAppsLine,
  RiPaletteLine,
  RiFileCodeLine,
  RiShieldCheckLine,
  RiMailCheckLine,
  RiEyeLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Darmowy generator stopki mailowej online - stwórz podpis email HTML',
  description:
    'Darmowy generator stopki mailowej po polsku. Stwórz profesjonalny podpis email HTML bez rejestracji. Dodaj dane kontaktowe, logo, media społecznościowe i skopiuj do Gmail lub Outlook.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej') },
  openGraph: {
    title: 'Darmowy generator stopki mailowej online - stwórz podpis email HTML',
    description:
      'Darmowy generator stopki mailowej po polsku. Stwórz profesjonalny podpis email HTML bez rejestracji. Dodaj dane kontaktowe, logo, media społecznościowe i skopiuj do Gmail lub Outlook.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp'),
        width: 1200,
        height: 630,
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
    'Darmowy generator stopki mailowej HTML po polsku. Dodaj dane kontaktowe, link CTA i profile w mediach społecznościowych, a następnie skopiuj gotowy kod podpisu do Gmaila, Outlooka i innych klientów pocztowych.',
  featureList: [
    'Dane kontaktowe (imię, nazwisko, stanowisko, firma)',
    'Telefon, e-mail i adres strony WWW',
    'Logo lub zdjęcie profilowe z wyborem kształtu i rozmiaru',
    'Ikony mediów społecznościowych (12 platform: LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram, Pinterest)',
    'Konfigurowalne kolory (tekst, akcent, tło)',
    'Indywidualny styl tekstu dla każdego elementu stopki',
    'Przycisk CTA z własnym tekstem i linkiem',
    'Stylizacja linii oddzielającej (styl, grubość, kolor)',
    'Podgląd stopki na żywo z przełączaniem tła (jasne, ciemne, szachownica)',
    'Podgląd kodu źródłowego HTML w oknie modalnym',
    'Kopiowanie kodu HTML do schowka',
    'Pobieranie stopki jako plik HTML',
    'Eksport i import konfiguracji stopki jako plik JSON',
    'Kompatybilność z Gmail, Outlook, Apple Mail',
    'Darmowe narzędzie bez logowania',
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
  name: 'Jak używać generatora stopki mailowej',
  description: 'Jak stworzyć profesjonalną stopkę mailową HTML za pomocą darmowego generatora Arteon.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej'),
  inLanguage: 'pl-PL',
  totalTime: 'PT5M',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Wybierz układ stopki',
      text: 'Wybierz jeden z ośmiu dostępnych układów: Standard, Pasek u góry, Etykiety z lewej, Wyśrodkowany, Kompaktowy, Dwie kolumny, Minimalistyczny lub Pasek na dole.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Uzupełnij dane kontaktowe',
      text: 'W zakładce Dane wpisz imię i nazwisko, stanowisko, firmę, e-mail, telefon i adres strony internetowej. Opcjonalnie dodaj avatar lub logo - po podaniu URL obrazu możesz wybrać kształt (okrągły, zaokrąglony, kwadratowy) i rozmiar (40, 56 lub 72 px).',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Dodaj przyciski CTA',
      text: 'W zakładce Przyciski dodaj tekst i adres URL dla głównego przycisku. Opcjonalnie możesz dodać drugi przycisk w stylu outline oraz wybrać zaokrąglenie przycisków.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Dodaj linki do mediów społecznościowych',
      text: 'W zakładce Media społecznościowe wklej adresy URL do swoich profili. Obsługiwane platformy: LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram i Pinterest.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Dostosuj wygląd',
      text: 'W zakładce Wygląd wybierz motyw kolorystyczny, czcionkę i rozmiar tekstu. W zakładce Styl tekstu zmień kolory i rozmiary poszczególnych elementów.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Dodaj klauzulę i dostosuj linię oddzielającą',
      text: 'W zakładce Klauzula / RODO wpisz tekst prawny i skonfiguruj linię oddzielającą - wybierz styl (ciągła, kreskowana, kropkowana), grubość (1-3 px) i kolor.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Sprawdź podgląd i skopiuj stopkę',
      text: 'Podgląd stopki dostępny jest na jasnym, ciemnym lub szachownicowym tle. Przycisk Kopiuj stopkę (Gmail / Outlook) przenosi gotowy kod do schowka. Dostępne są też opcje: Kopiuj kod HTML, Pobierz jako HTML, Pokaż kod HTML oraz eksport konfiguracji jako plik JSON.',
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
      <Script id="ld-json-email-signature-tool" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
      <Script id="ld-json-email-signature-howto" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(howToSchema)}
      </Script>

      <HeroBanner
        title="Stwórz profesjonalną stopkę mailową HTML"
        description="Zbuduj profesjonalny podpis e-mail w kilka minut. Wpisz dane, wybierz kolory i skopiuj gotowy kod HTML do Gmaila, Outlooka i innych klientów pocztowych"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-stopki-mailowej.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/darmowy-generator-stopki-mailowej`, label: 'Darmowy generator stopki mailowej HTML' }}
        includeJsonLd
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <EmailSignatureGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Dlaczego warto mieć profesjonalną stopkę mailową?">
          <p className="text-mid">
            Stopka mailowa (nazywana też podpisem e-mail lub sygnaturką) to blok informacji na końcu każdej wysyłanej wiadomości. Zawiera dane kontaktowe, stanowisko, nazwę firmy i często link do
            strony internetowej lub kalendarza spotkań.
          </p>
          <p className="text-mid mt-3">
            Odbiorca nie musi szukać numeru telefonu w poprzednich wiadomościach - wszystkie dane ma pod ręką. Profesjonalny podpis mailowy pokazuje też, że dbasz o szczegóły i spójny wizerunek firmy
            w korespondencji biznesowej.
          </p>
        </SectionInfo>

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
              description: 'Przycisk Kopiuj stopkę przenosi gotowy kod do schowka. Wystarczy wkleić w ustawieniach Gmail, Outlook lub innego klienta.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak wypełnić dane w stopce?">
          <p className="text-mid">
            W zakładce <strong>Dane</strong> znajdziesz wszystkie pola, które możesz uzupełnić. Tylko dwa z nich są wymagane: imię i nazwisko oraz adres e-mail. Pozostałe pola są opcjonalne i pojawią
            się w stopce tylko wtedy, gdy je wypełnisz.
          </p>

          <h3 className="h5 mt-6 mb-3">Pola w zakładce Dane</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Linia nad imieniem</strong> - dodatkowy tekst wyświetlany nad imieniem i nazwiskiem. Możesz tu wpisać nazwę firmy, hasło lub slogan.
            </li>
            <li>
              <strong>Avatar / logo (URL obrazu)</strong> - adres URL do zdjęcia profilowego lub logo firmy. Obraz powinien być kwadratowy (min. 120x120 px) i publicznie dostępny w internecie. Po
              wklejeniu adresu URL pojawią się dodatkowe opcje: <strong>Kształt avatara</strong> (okrągły, zaokrąglony lub kwadratowy) oraz <strong>Rozmiar avatara</strong> (mały - 40 px, średni - 56
              px, duży - 72 px).
            </li>
            <li>
              <strong>Imię i nazwisko</strong> - pole wymagane. Wpisz swoje pełne imię i nazwisko.
            </li>
            <li>
              <strong>Tag przy imieniu</strong> - krótki tekst obok imienia, np. zaimki lub skrócone stanowisko.
            </li>
            <li>
              <strong>Stanowisko</strong> - rola w firmie, np. Kierownik sprzedaży, Specjalista ds. marketingu.
            </li>
            <li>
              <strong>Nazwa firmy</strong> - nazwa organizacji, którą reprezentujesz.
            </li>
            <li>
              <strong>Dodatkowa linia</strong> - krótki opis tego, czym się zajmujesz lub co oferujesz.
            </li>
            <li>
              <strong>E-mail</strong> - pole wymagane. Wpisz swój służbowy adres e-mail.
            </li>
            <li>
              <strong>Telefon</strong> - numer kontaktowy. Format dowolny, np. +48 600 000 000.
            </li>
            <li>
              <strong>Strona internetowa</strong> - pełny adres URL swojej strony, zaczynający się od https://.
            </li>
            <li>
              <strong>Adres</strong> - fizyczny adres firmy (ulica, miasto, kod pocztowy).
            </li>
            <li>
              <strong>Dane formalne</strong> - NIP, REGON, numer licencji lub inne dane wymagane w branży.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Układy stopki - który wybrać?"
          demo={
            <div className="space-y-3">
              <p className="text-dark text-sm! font-medium uppercase">Układ stopki</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="selected" size="sm">
                  Standard
                </Badge>
                <Badge variant="default" size="sm">
                  Pasek akcentu
                </Badge>
                <Badge variant="default" size="sm">
                  Pasek u góry
                </Badge>
                <Badge variant="default" size="sm">
                  Etykiety z lewej
                </Badge>
                <Badge variant="default" size="sm">
                  Wyśrodkowany
                </Badge>
              </div>
              <div className="mt-4 rounded-lg border border-neutral-200 bg-white p-4">
                <p className="text-dark font-semibold">Jan Kowalski</p>
                <p className="text-mid text-sm">Web Developer</p>
                <p className="text-mid text-sm">Arteon Agency</p>
                <div className="mt-2 text-sm">
                  <p className="text-mid">jan@example.com</p>
                  <p className="text-mid">+48 600 000 000</p>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">Generator oferuje osiem gotowych układów. Każdy prezentuje te same dane w inny sposób.</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Standard</strong> - klasyczny układ pionowy, pasuje do większości zastosowań.
            </li>
            <li>
              <strong>Pasek u góry</strong> - poziomy pasek oddziela stopkę od treści.
            </li>
            <li>
              <strong>Etykiety z lewej</strong> - dwie kolumny: etykiety i wartości.
            </li>
            <li>
              <strong>Wyśrodkowany</strong> - formalny charakter, dane na środku.
            </li>
            <li>
              <strong>Kompaktowy</strong> - wszystko w jednej linii, minimalna wysokość.
            </li>
            <li>
              <strong>Dwie kolumny</strong> - dane po lewej, kontakt po prawej.
            </li>
            <li>
              <strong>Minimalistyczny</strong> - tylko najważniejsze informacje.
            </li>
            <li>
              <strong>Pasek na dole</strong> - kolorowy pasek z kontaktem na dole stopki.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać przyciski CTA?">
          <p className="text-mid">
            Przycisk CTA (z ang. call-to-action, czyli wezwanie do działania) to klikalny element, który kieruje odbiorcę do wybranej strony. Może to być link do kalendarza spotkań, formularza
            kontaktowego lub oferty. Generator umożliwia dodanie dwóch przycisków CTA.
          </p>

          <h3 className="h5 mt-6 mb-3">Przycisk główny</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Otwórz zakładkę <strong>Przyciski</strong> w edytorze.
            </li>
            <li>
              W sekcji <strong>Przycisk główny</strong> wpisz tekst, który zobaczy odbiorca, np. Umów bezpłatną konsultację.
            </li>
            <li>
              W polu <strong>Link CTA</strong> wklej pełny adres URL strony. Adres musi zaczynać się od https://.
            </li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Przycisk dodatkowy</h3>
          <p className="text-mid">
            Możesz dodać drugi przycisk CTA w stylu outline (przezroczyste tło z obramowaniem). Wypełnij pola w sekcji <strong>Przycisk dodatkowy</strong> analogicznie jak dla przycisku głównego.
          </p>

          <h3 className="h5 mt-6 mb-3">Zaokrąglenie przycisków</h3>
          <p className="text-mid">
            Na dole zakładki Przyciski znajdziesz opcję <strong>Zaokrąglenie przycisków</strong>. Do wyboru masz trzy warianty: Brak (ostre rogi), Lekkie (delikatnie zaokrąglone) lub Pełne (owalny
            przycisk).
          </p>

          <p className="text-mid mt-4">
            Jeśli zostawisz oba pola puste, przycisk nie pojawi się w stopce. Jeśli wypełnisz tylko jedno pole, przycisk również nie będzie widoczny - potrzebne są oba: tekst i link.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać linki do mediów społecznościowych?">
          <p className="text-mid">
            W zakładce <strong>Media społecznościowe</strong> możesz dodać linki do swoich profili. Generator obsługuje dwanaście platform: LinkedIn, Instagram, Facebook, TikTok, YouTube, X (dawniej
            Twitter), GitHub, Dribbble, Behance, WhatsApp, Telegram i Pinterest.
          </p>

          <h3 className="h5 mt-6 mb-3">Jak to zrobić</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Otwórz zakładkę <strong>Media społecznościowe</strong> w edytorze.
            </li>
            <li>Przy każdej platformie znajdziesz pole na adres URL. Wklej pełny link do swojego profilu, np. https://www.linkedin.com/in/twojprofil.</li>
            <li>Wypełnij tylko te pola, które Cię interesują. Puste pola nie pojawią się w stopce.</li>
          </ol>

          <h3 className="h5 mt-6 mb-3">Ikony mediów społecznościowych</h3>
          <p className="text-mid">
            Na dole zakładki Media społecznościowe znajdziesz opcję <strong>Pokaż ikony obok nazw serwisów</strong>. Po jej włączeniu linki wyświetlą się jako kolorowe ikony SVG zamiast samych nazw.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Rozmiar ikon</strong> - do wyboru: Małe (16 px), Średnie (20 px) lub Duże (24 px).
            </li>
            <li>
              <strong>Kolor ikon</strong> - Kolory platform (domyślne kolory każdej platformy), Kolor akcentu (jednolity kolor akcentu) lub Kolor tekstu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Personalizacja wyglądu">
          <p className="text-mid">
            W zakładce <strong>Wygląd</strong> możesz dostosować kolory, czcionkę i inne elementy wizualne stopki.
          </p>

          <h3 className="h5 mt-6 mb-3">Motywy kolorystyczne</h3>
          <p className="text-mid">
            Na górze zakładki znajdziesz pięć gotowych motywów: Ciemny, Niebieski, Fioletowy, Zielony i Szary. Kliknięcie motywu automatycznie ustawia kolor akcentu i kolor tekstu. To najszybszy
            sposób na spójny wygląd stopki.
          </p>

          <h3 className="h5 mt-6 mb-3">Kolory</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Kolor akcentu</strong> - używany w pasku bocznym/górnym, przycisku CTA i linkach. Możesz wybrać dowolny kolor z palety.
            </li>
            <li>
              <strong>Kolor tekstu</strong> - kolor wszystkich tekstów w stopce (imię, dane kontaktowe, klauzula).
            </li>
            <li>
              <strong>Kolor tła</strong> - kolor tła całej stopki. Domyślnie biały, ale możesz go zmienić.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Czcionka i rozmiar</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Czcionka</strong> - do wyboru: Arial, Verdana, Tahoma, Trebuchet MS i Georgia. Wszystkie są bezpieczne dla e-maili i wyświetlą się poprawnie u odbiorcy.
            </li>
            <li>
              <strong>Rozmiar tekstu</strong> - trzy opcje: Mały (12 px), Standard (14 px) i Większy (16 px).
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Dodatkowe ustawienia</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Ramka stopki</strong> - możesz dodać ramkę do stopki wybierając dowolną kombinację stron (lewa, prawa, góra, dół). Zaznaczenie wszystkich stron automatycznie ustawia pełną ramkę.
              Ramka przyjmuje kolor akcentu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Styl tekstu - kolory i rozmiary poszczególnych elementów">
          <p className="text-mid">
            W zakładce <strong>Styl tekstu</strong> możesz indywidualnie dostosować kolor i rozmiar czcionki dla każdego elementu tekstowego w stopce.
          </p>

          <h3 className="h5 mt-6 mb-3">Dostępne elementy</h3>
          <p className="text-mid">Widoczne są tylko te elementy, które aktualnie znajdują się w stopce (mają wypełnione dane). Dla każdego elementu możesz ustawić:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Imię i nazwisko</strong> - domyślnie wyświetlane w kolorze akcentu.
            </li>
            <li>
              <strong>Stanowisko</strong> - rola w firmie.
            </li>
            <li>
              <strong>Firma</strong> - nazwa organizacji.
            </li>
            <li>
              <strong>Dane kontaktowe</strong> - e-mail, telefon, strona (etykiety).
            </li>
            <li>
              <strong>Media społecznościowe</strong> - linki do profili.
            </li>
            <li>
              <strong>Klauzula prawna</strong> - tekst prawny na dole stopki.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-3">Jak zmienić kolor?</h3>
          <p className="text-mid">
            Przy każdym elemencie znajdziesz rząd opcji kolorów. Kliknij kwadrat z kolorem, aby go wybrać. Możesz też dodać własny kolor klikając kolorowy kwadrat z plusem - wybierz kolor i kliknij
            Zapisz. Własne kolory (do 8) są współdzielone między wszystkimi elementami.
          </p>
          <p className="text-mid mt-3">Przycisk z ikoną resetu przywraca domyślny kolor elementu.</p>

          <h3 className="h5 mt-6 mb-3">Jak zmienić rozmiar?</h3>
          <p className="text-mid">
            W drugiej linii znajdziesz kontrolkę rozmiaru z przyciskami - i +. Wartość pokazuje przesunięcie względem bazowego rozmiaru czcionki (ustawionego w zakładce Wygląd). Zakres: od -4 do +4
            pikseli.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Odstępy między elementami">
          <p className="text-mid">
            W zakładce <strong>Odstępy</strong> możesz precyzyjnie kontrolować odległości między poszczególnymi elementami stopki.
          </p>

          <h3 className="h5 mt-6 mb-3">Margines wewnętrzny stopki</h3>
          <p className="text-mid">
            Na górze zakładki znajdziesz opcję marginesu wewnętrznego - czyli odstępu między zawartością stopki a jej krawędziami. Do wyboru masz trzy wartości: 8 px (mały), 16 px (średni) i 24 px
            (duży).
          </p>

          <h3 className="h5 mt-6 mb-3">Odstępy między elementami</h3>
          <p className="text-mid">
            Poniżej marginesu znajdziesz kontrolki dla poszczególnych elementów stopki. Każda kontrolka ma przyciski + i - do zwiększania lub zmniejszania odstępu. Widoczne są tylko opcje dla
            elementów, które aktualnie znajdują się w stopce.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Po imieniu i nazwisku</strong> - odstęp pod linią z imieniem.
            </li>
            <li>
              <strong>Po stanowisku / firmie</strong> - odstęp pod linią ze stanowiskiem i nazwą firmy.
            </li>
            <li>
              <strong>Po dodatkowej linii</strong> - odstęp pod opisem (jeśli jest wypełniony).
            </li>
            <li>
              <strong>Po danych kontaktowych</strong> - odstęp pod e-mailem, telefonem i stroną.
            </li>
            <li>
              <strong>Po mediach społecznościowych</strong> - odstęp pod linkami do profili.
            </li>
            <li>
              <strong>Po przycisku CTA</strong> - odstęp pod przyciskiem (jeśli jest włączony).
            </li>
            <li>
              <strong>Przed klauzulą</strong> - odstęp nad tekstem klauzuli prawnej.
            </li>
          </ul>
          <p className="text-mid mt-4">Jeśli usuniesz dane z jakiegoś pola (np. wyczyścisz telefon), odpowiednia opcja odstępu automatycznie zniknie z zakładki.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Klauzula prawna / RODO - kiedy dodać?">
          <p className="text-mid">
            W zakładce <strong>Klauzula / RODO</strong> możesz dodać tekst prawny, który pojawi się na dole stopki mniejszą czcionką.
          </p>

          <h3 className="h5 mt-6 mb-3">Kiedy warto dodać klauzulę?</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Korespondencja biznesowa</strong> - informacja o poufności wiadomości i prośba o usunięcie w przypadku błędnego doręczenia.
            </li>
            <li>
              <strong>Wymogi branżowe</strong> - niektóre branże (np. prawnicza, medyczna, finansowa) wymagają określonych informacji w każdej wiadomości.
            </li>
            <li>
              <strong>RODO</strong> - informacja o przetwarzaniu danych osobowych, jeśli firma jest administratorem danych.
            </li>
          </ul>

          <p className="text-mid mt-4">
            Domyślnie pole jest wypełnione przykładowym tekstem o poufności wiadomości. Możesz go edytować, usunąć lub zastąpić własną klauzulą. Jeśli zostawisz pole puste, klauzula nie pojawi się w
            stopce.
          </p>

          <h3 className="h5 mt-6 mb-3">Linia oddzielająca</h3>
          <p className="text-mid">
            Pod polem tekstowym znajdziesz opcję <strong>Pokaż linię oddzielającą dane od klauzuli</strong>. Włącz ją, aby dodać poziomą linię między danymi kontaktowymi a klauzulą prawną.
          </p>
          <p className="text-mid mt-3">Po włączeniu linii pojawią się dodatkowe opcje personalizacji:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Styl linii</strong> - do wyboru: ciągła (solid), kreskowana (dashed) lub kropkowana (dotted).
            </li>
            <li>
              <strong>Grubość linii</strong> - trzy opcje: 1 px, 2 px lub 3 px.
            </li>
            <li>
              <strong>Kolor linii</strong> - domyślnie szary (#e5e7eb). Możesz wybrać dowolny kolor z palety lub przywrócić domyślny klikając przycisk Domyślny.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatyczny zapis i resetowanie ustawień">
          <p className="text-mid">
            Generator automatycznie zapisuje wszystkie ustawienia w pamięci przeglądarki (localStorage). Po odświeżeniu strony lub ponownym otwarciu narzędzia dane, układ, kolory i wszystkie inne
            opcje zostaną przywrócone.
          </p>

          <h3 className="h5 mt-6 mb-3">Jak działa automatyczny zapis?</h3>
          <p className="text-mid">Każda zmiana (tekst, kolor, układ, odstępy) jest natychmiast zapisywana w pamięci przeglądarki. Zapis dzieje się automatycznie w tle - bez klikania przycisków.</p>

          <h3 className="h5 mt-6 mb-3">Jak zresetować ustawienia?</h3>
          <p className="text-mid">
            Pod podglądem stopki znajdziesz przycisk <strong>Resetuj wygląd</strong>. Po kliknięciu pojawi się okno z prośbą o potwierdzenie. Zatwierdzenie resetu przywróci wszystkie dane i ustawienia
            do wartości domyślnych (przykładowe dane Jana Kowalskiego). Tej operacji nie można cofnąć.
          </p>

          <h3 className="h5 mt-6 mb-3">Eksport i import konfiguracji</h3>
          <p className="text-mid">
            Pod podglądem stopki znajdziesz dwa dodatkowe przyciski: <strong>Eksportuj ustawienia</strong> i <strong>Importuj ustawienia</strong>. Eksport zapisuje wszystkie dane, kolory, układ,
            odstępy i style tekstu do pliku JSON. Import pozwala wczytać wcześniej zapisaną konfigurację z pliku.
          </p>
          <p className="text-mid mt-3">
            Ta funkcja jest szczególnie przydatna, gdy chcesz przenieść konfigurację stopki między komputerami, udostępnić ustawienia współpracownikom lub zachować kopię zapasową swoich ustawień przed
            resetem.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak skopiować stopkę do Gmail lub Outlook?"
          description="Gdy stopka jest gotowa, wystarczy kilka kroków, żeby dodać ją do klienta pocztowego:"
          grid="three"
          items={[
            {
              icon: <RiClipboardLine className="h-6 w-6" />,
              title: '1. Skopiuj kod',
              description: 'Przycisk Kopiuj stopkę (Gmail / Outlook) przenosi stopkę do schowka jako sformatowany HTML, gotowy do wklejenia.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '2. Otwórz ustawienia podpisu',
              description: 'W Gmail: Ustawienia → Zobacz wszystkie ustawienia → Podpis. W Outlook: Plik → Opcje → Poczta → Podpisy.',
            },
            {
              icon: <RiSaveLine className="h-6 w-6" />,
              title: '3. Wklej i zapisz',
              description: 'W polu podpisu użyj skrótu Ctrl+V (Windows) lub Cmd+V (Mac). Stopka pojawi się ze wszystkimi kolorami i formatowaniem. Zapisz zmiany.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Podgląd stopki i opcje eksportu">
          <p className="text-mid">
            Panel podglądu wyświetla się po prawej stronie edytora i automatycznie aktualizuje się przy każdej zmianie. Podgląd jest przypięty do ekranu (sticky), więc widoczny nawet podczas
            przewijania opcji edycji.
          </p>

          <h3 className="h5 mt-6 mb-3">Przełączanie tła podglądu</h3>
          <p className="text-mid">
            Nad podglądem znajdziesz trzy przyciski zmiany tła: <strong>Jasne</strong> (domyślne szare tło), <strong>Ciemne</strong> (ciemne tło, przydatne do sprawdzenia czytelności na ciemnym tle) i{' '}
            <strong>Szachownica</strong> (wzór szachownicy, pozwala zobaczyć przezroczystość i krawędzie stopki).
          </p>

          <h3 className="h5 mt-6 mb-3">Przyciski akcji</h3>
          <p className="text-mid">Pod podglądem znajdziesz kilka przycisków:</p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Kopiuj stopkę (Gmail / Outlook)</strong> - kopiuje stopkę jako sformatowany HTML do schowka. Wklej ją bezpośrednio w ustawieniach podpisu.
            </li>
            <li>
              <strong>Kopiuj kod HTML</strong> - kopiuje surowy kod HTML stopki do schowka. Przydatne, gdy chcesz wkleić kod w edytorze HTML lub systemie CMS.
            </li>
            <li>
              <strong>Pobierz jako HTML</strong> - zapisuje kod stopki jako plik .html na dysku. Przydatne do archiwizacji lub przekazania programiście.
            </li>
            <li>
              <strong>Pokaż kod HTML</strong> - otwiera okno modalne z kodem źródłowym stopki. Możesz przejrzeć kod i skopiować go bezpośrednio z okna.
            </li>
            <li>
              <strong>Eksportuj ustawienia</strong> - zapisuje pełną konfigurację stopki (dane, kolory, układ, odstępy, style) do pliku JSON.
            </li>
            <li>
              <strong>Importuj ustawienia</strong> - wczytuje konfigurację z pliku JSON. Wszystkie ustawienia zostaną automatycznie zastosowane.
            </li>
            <li>
              <strong>Resetuj wygląd</strong> - przywraca wszystkie dane i ustawienia do wartości domyślnych (po potwierdzeniu).
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Dla kogo jest kreator podpisu email?"
          description="Narzędzie do tworzenia stopek mailowych przydaje się każdemu, kto wysyła służbowe e-maile:"
          grid="two"
          items={[
            {
              icon: <RiBriefcaseLine className="h-6 w-6" />,
              title: 'Przedsiębiorcy i freelancerzy',
              description: 'Profesjonalna sygnaturka we wszystkich wiadomościach bez zlecania projektowania.',
            },
            {
              icon: <RiTeamLine className="h-6 w-6" />,
              title: 'Zespoły firmowe',
              description: 'Każdy pracownik tworzy własną stopkę w tym samym stylu. Spójna identyfikacja w całej firmie.',
            },
            {
              icon: <RiHandCoinLine className="h-6 w-6" />,
              title: 'Handlowcy i sprzedawcy',
              description: 'Przycisk CTA z linkiem do kalendarza lub oferty zwiększa szanse na umówienie spotkania.',
            },
            {
              icon: <RiScales3Line className="h-6 w-6" />,
              title: 'Prawnicy, księgowi, lekarze',
              description: 'Możliwość dodania klauzuli prawnej, numeru licencji, NIP lub innych danych wymaganych w branży.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Co wyróżnia generator podpisu email HTML?"
          grid="three"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Osiem układów stopki',
              description: 'Standard, pasek u góry, etykiety z lewej, wyśrodkowany, kompaktowy, dwie kolumny, minimalistyczny i pasek na dole.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Automatyczny zapis w przeglądarce',
              description: 'Każda zmiana zapisuje się automatycznie w pamięci przeglądarki. Po odświeżeniu strony stopka pozostaje dostępna.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Eksport i import konfiguracji',
              description: 'Pełna konfiguracja stopki może być wyeksportowana jako plik JSON i udostępniona współpracownikom.',
            },
            {
              icon: <RiAppsLine className="h-6 w-6" />,
              title: '12 platform społecznościowych',
              description: 'LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram i Pinterest.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Zaawansowana personalizacja',
              description: 'Kształt i rozmiar avatara, stylizacja linii, indywidualne kolory i rozmiary tekstu.',
            },
            {
              icon: <RiFileCodeLine className="h-6 w-6" />,
              title: 'Wiele opcji eksportu',
              description: 'Kopiowanie HTML, pobieranie pliku, podgląd kodu źródłowego, eksport/import konfiguracji JSON.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Prywatność',
              description: 'Dane nie są wysyłane na serwer. Generator działa w całości w przeglądarce.',
            },
            {
              icon: <RiMailCheckLine className="h-6 w-6" />,
              title: 'Kompatybilność',
              description: 'Wygenerowany kod HTML działa w Gmail, Outlook, Apple Mail i Thunderbird.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Podgląd na żywo',
              description: 'Każda zmiana widoczna natychmiast na jasnym, ciemnym lub szachownicowym tle.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej')}
          title="Najczęstsze pytania dotyczące generatora stopek mailowych"
          items={[
            {
              question: 'Czy stopka będzie działać w Gmail, Outlook i Apple Mail?',
              answer:
                'Tak. Stopki generowane przez generator używają tabel HTML, które poprawnie wyświetlają się we wszystkich popularnych klientach pocztowych: Gmail, Outlook (desktop i web), Apple Mail, Thunderbird. Układ dopasowuje się do różnych urządzeń, w tym smartfonów.',
            },
            {
              question: 'Czy mogę dodać logo firmy?',
              answer:
                'Tak. W zakładce Dane wklej adres URL do obrazu (logo lub zdjęcie profilowe). Obraz powinien być kwadratowy (min. 120x120 px) i publicznie dostępny w internecie. Po wklejeniu URL pojawią się opcje wyboru kształtu (okrągły, zaokrąglony, kwadratowy) i rozmiaru (40, 56 lub 72 px).',
            },
            {
              question: 'Jak skopiować stopkę do programu pocztowego?',
              answer:
                'Przycisk Kopiuj stopkę (Gmail / Outlook) pod podglądem przenosi stopkę do schowka jako sformatowany HTML. W ustawieniach podpisu w Gmail lub Outlook wystarczy użyć skrótu Ctrl+V (Windows) lub Cmd+V (Mac).',
            },
            {
              question: 'Czy mogę użyć generatora do stworzenia stopek dla całego zespołu?',
              answer:
                'Tak. Generator nie wymaga logowania ani rejestracji. Każda osoba w zespole może otworzyć narzędzie, uzupełnić swoje dane i skopiować gotową stopkę. Aby zachować spójność wizualną, ustalcie wspólne ustawienia: ten sam układ, motyw kolorystyczny i czcionkę. Możesz też wyeksportować konfigurację jako plik JSON i udostępnić go współpracownikom - wystarczy, że zaimportują plik i zmienią tylko swoje dane osobowe.',
            },
            {
              question: 'Czy mogę dodać własne ikony mediów społecznościowych?',
              answer:
                'Generator oferuje wbudowane ikony SVG dla dwunastu platform: LinkedIn, Instagram, Facebook, TikTok, YouTube, X, GitHub, Dribbble, Behance, WhatsApp, Telegram i Pinterest. Włącz opcję Pokaż ikony w zakładce Media społecznościowe. Możesz wybrać rozmiar ikon i ich kolor (kolory platform, kolor akcentu lub kolor tekstu).',
            },
            {
              question: 'Przycisk kopiowania jest nieaktywny - dlaczego?',
              answer: 'Aby skopiować stopkę, uzupełnij przynajmniej dwa pola: imię i nazwisko oraz adres e-mail. Sprawdź, czy oba pola są wypełnione.',
            },
            {
              question: 'Avatar lub logo nie wyświetla się - co zrobić?',
              answer:
                'Obraz musi być publicznie dostępny w internecie. Adres URL powinien prowadzić bezpośrednio do pliku graficznego (kończyć się na .jpg, .png lub .webp). Obrazy z Google Drive lub Dropbox wymagają specjalnego linku do udostępniania.',
            },
            {
              question: 'Stopka wygląda inaczej u odbiorcy - dlaczego?',
              answer:
                'Różne klienty pocztowe (Gmail, Outlook, Apple Mail) mogą nieznacznie różnić się w wyświetlaniu HTML. Generator używa bezpiecznych stylów, które działają w większości programów. Jeśli widzisz duże różnice, upewnij się, że wklejasz stopkę używając Ctrl+V, a nie Wklej jako zwykły tekst.',
            },
            {
              question: 'Przycisk CTA nie pojawia się - co zrobić?',
              answer: 'Przycisk wymaga obu pól: tekstu i linku. Sprawdź, czy w zakładce Przyciski oba pola są wypełnione i czy adres URL zaczyna się od https://.',
            },
            {
              question: 'Jak wyeksportować lub zaimportować ustawienia stopki?',
              answer:
                'Pod podglądem stopki znajdziesz przyciski Eksportuj ustawienia i Importuj ustawienia. Eksport zapisuje pełną konfigurację (dane, kolory, układ, odstępy, style tekstu) do pliku JSON. Import wczytuje konfigurację z pliku i automatycznie zastosowuje wszystkie ustawienia.',
            },
            {
              question: 'Jak podejrzeć kod źródłowy wygenerowanej stopki?',
              answer:
                'Przycisk Pokaż kod HTML pod podglądem stopki otwiera okno modalne z pełnym kodem źródłowym HTML. Można go przejrzeć i skopiować bezpośrednio z okna. Alternatywnie przycisk Kopiuj kod HTML przenosi surowy kod do schowka, a Pobierz jako HTML zapisuje go jako plik.',
            },
            {
              question: 'Czy mogę zmienić kształt i rozmiar avatara?',
              answer:
                'Tak. Po wklejeniu adresu URL obrazu w zakładce Dane pojawią się dodatkowe opcje: Kształt avatara (okrągły, zaokrąglony, kwadratowy) oraz Rozmiar avatara (mały - 40 px, średni - 56 px, duży - 72 px). Ustawienia są stosowane we wszystkich układach stopki.',
            },
            {
              question: 'Jak zmienić styl linii oddzielającej klauzulę?',
              answer:
                'W zakładce Klauzula / RODO włącz opcję Pokaż linię oddzielającą. Pojawią się dodatkowe opcje: styl linii (ciągła, kreskowana, kropkowana), grubość (1-3 px) i kolor (domyślny szary lub dowolny wybrany z palety).',
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
