import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import type { Metadata } from 'next';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import Link from 'next/link';
import { RiClipboardLine, RiSettings3Line, RiSaveLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak używać generatora stopki mailowej - instrukcja krok po kroku',
  description: 'Instrukcja generatora stopki mailowej HTML. Dowiedz się, jak wypełnić dane, wybrać układ, dodać CTA i skopiować stopkę do Gmail lub Outlook.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej/instrukcja') },
  openGraph: {
    title: 'Jak używać generatora stopki mailowej - instrukcja krok po kroku',
    description: 'Szczegółowa instrukcja obsługi darmowego generatora stopki mailowej HTML. Dowiedz się, jak wypełnić dane, wybrać układ, dodać CTA i skopiować gotową stopkę do Gmail lub Outlook.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej/instrukcja'),
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
  '@type': 'HowTo',
  name: 'Jak używać generatora stopki mailowej',
  description: 'Instrukcja krok po kroku, jak stworzyć profesjonalną stopkę mailową HTML za pomocą darmowego generatora Arteon.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej/instrukcja'),
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
      text: 'W zakładce Dane wpisz imię i nazwisko, stanowisko, firmę, e-mail, telefon i adres strony internetowej.',
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
      text: 'W zakładce Media społecznościowe wklej adresy URL do swoich profili.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Dostosuj wygląd',
      text: 'W zakładce Wygląd wybierz motyw kolorystyczny, czcionkę i rozmiar tekstu.',
    },
    {
      '@type': 'HowToStep',
      position: 6,
      name: 'Dostosuj odstępy',
      text: 'W zakładce Odstępy ustaw margines wewnętrzny stopki oraz odstępy między poszczególnymi elementami za pomocą przycisków + i -.',
    },
    {
      '@type': 'HowToStep',
      position: 7,
      name: 'Skopiuj stopkę',
      text: 'Kliknij przycisk Kopiuj stopkę (Gmail / Outlook) i wklej kod w ustawieniach swojego klienta pocztowego.',
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
      <Script id="ld-json-email-signature-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak używać generatora stopki mailowej"
        description="Szczegółowa instrukcja krok po kroku. Dowiesz się, jak wypełnić dane, wybrać układ, dodać przycisk CTA, linki do mediów społecznościowych i skopiować gotową stopkę do Gmail lub Outlook."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/darmowy-generator-stopki-mailowej', label: 'Generator stopki mailowej' }}
        fourth={{ href: '/narzedzia/darmowy-generator-stopki-mailowej/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest stopka mailowa i do czego służy?">
          <p className="text-mid">
            Stopka mailowa (nazywana też podpisem e-mail lub sygnaturką) to blok informacji, który pojawia się na końcu każdej wysyłanej przez Ciebie wiadomości. Zawiera dane kontaktowe, stanowisko,
            nazwę firmy i często link do strony internetowej lub kalendarza spotkań.
          </p>
          <p className="text-mid mt-3">
            Profesjonalna stopka ułatwia odbiorcom kontakt z Tobą. Zamiast szukać numeru telefonu w poprzednich e-mailach, odbiorca ma wszystkie dane pod ręką. Stopka pokazuje też, że dbasz o
            szczegóły i profesjonalny wizerunek swojej firmy.
          </p>
          <p className="text-mid mt-3">
            <Link href="/narzedzia/darmowy-generator-stopki-mailowej" className="inline-link">
              Przejdź do generatora stopki mailowej
            </Link>{' '}
            i stwórz własny podpis w kilka minut.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak wypełnić dane w stopce?">
          <p className="text-mid">
            W zakładce <strong>Dane</strong> znajdziesz wszystkie pola, które możesz uzupełnić. Tylko dwa z nich są wymagane: imię i nazwisko oraz adres e-mail. Pozostałe pola są opcjonalne i pojawią
            się w stopce tylko wtedy, gdy je wypełnisz.
          </p>

          <h3 className="h4 mt-6 mb-3">Pola w zakładce Dane</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Linia nad imieniem</strong> — dodatkowy tekst wyświetlany nad imieniem i nazwiskiem. Możesz tu wpisać nazwę firmy, hasło lub slogan.
            </li>
            <li>
              <strong>Avatar / logo (URL obrazu)</strong> — adres URL do zdjęcia profilowego lub logo firmy. Obraz powinien być kwadratowy (min. 120x120 px) i publicznie dostępny w internecie.
            </li>
            <li>
              <strong>Imię i nazwisko</strong> — pole wymagane. Wpisz swoje pełne imię i nazwisko.
            </li>
            <li>
              <strong>Tag przy imieniu</strong> — krótki tekst obok imienia, np. zaimki lub skrócone stanowisko.
            </li>
            <li>
              <strong>Stanowisko</strong> — Twoja rola w firmie, np. Kierownik sprzedaży, Specjalista ds. marketingu.
            </li>
            <li>
              <strong>Nazwa firmy</strong> — nazwa organizacji, którą reprezentujesz.
            </li>
            <li>
              <strong>Dodatkowa linia</strong> — krótki opis tego, czym się zajmujesz lub co oferujesz.
            </li>
            <li>
              <strong>E-mail</strong> — pole wymagane. Wpisz swój służbowy adres e-mail.
            </li>
            <li>
              <strong>Telefon</strong> — numer kontaktowy. Format dowolny, np. +48 600 000 000.
            </li>
            <li>
              <strong>Strona internetowa</strong> — pełny adres URL swojej strony, zaczynający się od https://.
            </li>
            <li>
              <strong>Adres</strong> — fizyczny adres firmy (ulica, miasto, kod pocztowy).
            </li>
            <li>
              <strong>Dane formalne</strong> — NIP, REGON, numer licencji lub inne dane wymagane w Twojej branży.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Układy stopki — który wybrać?"
          demo={
            <div className="space-y-3">
              <p className="text-dark text-sm font-semibold uppercase">Układ stopki</p>
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
              <strong>Standard</strong> — klasyczny układ pionowy, pasuje do większości zastosowań.
            </li>
            <li>
              <strong>Pasek u góry</strong> — poziomy pasek oddziela stopkę od treści.
            </li>
            <li>
              <strong>Etykiety z lewej</strong> — dwie kolumny: etykiety i wartości.
            </li>
            <li>
              <strong>Wyśrodkowany</strong> — formalny charakter, dane na środku.
            </li>
            <li>
              <strong>Kompaktowy</strong> — wszystko w jednej linii, minimalna wysokość.
            </li>
            <li>
              <strong>Dwie kolumny</strong> — dane po lewej, kontakt po prawej.
            </li>
            <li>
              <strong>Minimalistyczny</strong> — tylko najważniejsze informacje.
            </li>
            <li>
              <strong>Pasek na dole</strong> — kolorowy pasek z kontaktem na dole stopki.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać przyciski CTA?">
          <p className="text-mid">
            Przycisk CTA (z ang. call-to-action, czyli wezwanie do działania) to klikalny element, który kieruje odbiorcę do wybranej strony. Może to być link do kalendarza spotkań, formularza
            kontaktowego lub oferty. Generator umożliwia dodanie dwóch przycisków CTA.
          </p>

          <h3 className="h4 mt-6 mb-3">Przycisk główny</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Kliknij zakładkę <strong>Przyciski</strong> w edytorze.
            </li>
            <li>
              W sekcji <strong>Przycisk główny</strong> wpisz tekst, który zobaczy odbiorca, np. Umów bezpłatną konsultację.
            </li>
            <li>
              W polu <strong>Link CTA</strong> wklej pełny adres URL strony. Adres musi zaczynać się od https://.
            </li>
          </ol>

          <h3 className="h4 mt-6 mb-3">Przycisk dodatkowy</h3>
          <p className="text-mid">
            Możesz dodać drugi przycisk CTA w stylu outline (przezroczyste tło z obramowaniem). Wypełnij pola w sekcji <strong>Przycisk dodatkowy</strong> analogicznie jak dla przycisku głównego.
          </p>

          <h3 className="h4 mt-6 mb-3">Zaokrąglenie przycisków</h3>
          <p className="text-mid">
            Na dole zakładki Przyciski znajdziesz opcję <strong>Zaokrąglenie przycisków</strong>. Do wyboru masz trzy warianty: Brak (ostre rogi), Lekkie (delikatnie zaokrąglone) lub Pełne (owalny przycisk).
          </p>

          <p className="text-mid mt-4">
            Jeśli zostawisz oba pola puste, przycisk nie pojawi się w stopce. Jeśli wypełnisz tylko jedno pole, przycisk również nie będzie widoczny — potrzebne są oba: tekst i link.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jak dodać linki do mediów społecznościowych?">
          <p className="text-mid">
            W zakładce <strong>Media społecznościowe</strong> możesz dodać linki do swoich profili. Generator obsługuje sześć platform: LinkedIn, Instagram, Facebook, TikTok, YouTube i X (dawniej
            Twitter).
          </p>

          <h3 className="h4 mt-6 mb-3">Jak to zrobić w naszym narzędziu</h3>
          <ol className="text-mid list-decimal space-y-2 pl-6">
            <li>
              Kliknij zakładkę <strong>Media społecznościowe</strong> w edytorze.
            </li>
            <li>Przy każdej platformie znajdziesz pole na adres URL. Wklej pełny link do swojego profilu, np. https://www.linkedin.com/in/twojprofil.</li>
            <li>Wypełnij tylko te pola, które Cię interesują. Puste pola nie pojawią się w stopce.</li>
          </ol>

          <h3 className="h4 mt-6 mb-3">Ikony mediów społecznościowych</h3>
          <p className="text-mid">
            Na dole zakładki Media społecznościowe znajdziesz opcję <strong>Pokaż ikony obok nazw serwisów</strong>. Po jej włączeniu linki wyświetlą się jako kolorowe ikony SVG zamiast samych nazw.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Rozmiar ikon</strong> — do wyboru: Małe (16 px), Średnie (20 px) lub Duże (24 px).
            </li>
            <li>
              <strong>Kolor ikon</strong> — Kolory platform (domyślne kolory każdej platformy), Kolor akcentu (jednolity kolor akcentu) lub Kolor tekstu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Personalizacja wyglądu">
          <p className="text-mid">
            W zakładce <strong>Wygląd</strong> możesz dostosować kolory, czcionkę i inne elementy wizualne stopki.
          </p>

          <h3 className="h4 mt-6 mb-3">Motywy kolorystyczne</h3>
          <p className="text-mid">
            Na górze zakładki znajdziesz pięć gotowych motywów: Ciemny, Niebieski, Fioletowy, Zielony i Szary. Kliknięcie motywu automatycznie ustawia kolor akcentu i kolor tekstu. To najszybszy
            sposób na spójny wygląd stopki.
          </p>

          <h3 className="h4 mt-6 mb-3">Kolory</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Kolor akcentu</strong> — używany w pasku bocznym/górnym, przycisku CTA i linkach. Możesz wybrać dowolny kolor z palety.
            </li>
            <li>
              <strong>Kolor tekstu</strong> — kolor wszystkich tekstów w stopce (imię, dane kontaktowe, klauzula).
            </li>
            <li>
              <strong>Kolor tła</strong> — kolor tła całej stopki. Domyślnie biały, ale możesz go zmienić.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-3">Czcionka i rozmiar</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Czcionka</strong> — do wyboru: Arial, Verdana, Tahoma, Trebuchet MS i Georgia. Wszystkie są bezpieczne dla e-maili i wyświetlą się poprawnie u odbiorcy.
            </li>
            <li>
              <strong>Rozmiar tekstu</strong> — trzy opcje: Mały (12 px), Standard (14 px) i Większy (16 px).
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-3">Dodatkowe ustawienia</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Ramka stopki</strong> — możesz dodać ramkę do stopki wybierając dowolną kombinację stron (lewa, prawa, góra, dół). Zaznaczenie wszystkich stron automatycznie ustawia pełną ramkę. Ramka przyjmuje kolor akcentu.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Styl tekstu — kolory i rozmiary poszczególnych elementów">
          <p className="text-mid">
            W zakładce <strong>Styl tekstu</strong> możesz indywidualnie dostosować kolor i rozmiar czcionki dla każdego elementu tekstowego w stopce.
          </p>

          <h3 className="h4 mt-6 mb-3">Dostępne elementy</h3>
          <p className="text-mid">
            Widoczne są tylko te elementy, które aktualnie znajdują się w stopce (mają wypełnione dane). Dla każdego elementu możesz ustawić:
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Imię i nazwisko</strong> — domyślnie wyświetlane w kolorze akcentu.
            </li>
            <li>
              <strong>Stanowisko</strong> — rola w firmie.
            </li>
            <li>
              <strong>Firma</strong> — nazwa organizacji.
            </li>
            <li>
              <strong>Dane kontaktowe</strong> — e-mail, telefon, strona (etykiety).
            </li>
            <li>
              <strong>Media społecznościowe</strong> — linki do profili.
            </li>
            <li>
              <strong>Klauzula prawna</strong> — tekst prawny na dole stopki.
            </li>
          </ul>

          <h3 className="h4 mt-6 mb-3">Jak zmienić kolor?</h3>
          <p className="text-mid">
            Przy każdym elemencie znajdziesz rząd opcji kolorów. Kliknij kwadrat z kolorem, aby go wybrać. Możesz też dodać własny kolor klikając kolorowy kwadrat z plusem — wybierz kolor i kliknij Zapisz. Własne kolory (do 8) są współdzielone między wszystkimi elementami.
          </p>
          <p className="text-mid mt-3">
            Przycisk z ikoną resetu przywraca domyślny kolor elementu.
          </p>

          <h3 className="h4 mt-6 mb-3">Jak zmienić rozmiar?</h3>
          <p className="text-mid">
            W drugiej linii znajdziesz kontrolkę rozmiaru z przyciskami - i +. Wartość pokazuje przesunięcie względem bazowego rozmiaru czcionki (ustawionego w zakładce Wygląd). Zakres: od -4 do +4 pikseli.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Odstępy między elementami">
          <p className="text-mid">
            W zakładce <strong>Odstępy</strong> możesz precyzyjnie kontrolować odległości między poszczególnymi elementami stopki.
          </p>

          <h3 className="h4 mt-6 mb-3">Margines wewnętrzny stopki</h3>
          <p className="text-mid">
            Na górze zakładki znajdziesz opcję marginesu wewnętrznego — czyli odstępu między zawartością stopki a jej krawędziami. Do wyboru masz trzy wartości: 8 px (mały), 16 px (średni) i 24 px (duży).
          </p>

          <h3 className="h4 mt-6 mb-3">Odstępy między elementami</h3>
          <p className="text-mid">
            Poniżej marginesu znajdziesz kontrolki dla poszczególnych elementów stopki. Każda kontrolka ma przyciski + i - do zwiększania lub zmniejszania odstępu. Widoczne są tylko opcje dla elementów, które aktualnie znajdują się w stopce.
          </p>
          <ul className="text-mid mt-3 list-disc space-y-2 pl-6">
            <li>
              <strong>Po imieniu i nazwisku</strong> — odstęp pod linią z imieniem.
            </li>
            <li>
              <strong>Po stanowisku / firmie</strong> — odstęp pod linią ze stanowiskiem i nazwą firmy.
            </li>
            <li>
              <strong>Po dodatkowej linii</strong> — odstęp pod opisem (jeśli jest wypełniony).
            </li>
            <li>
              <strong>Po danych kontaktowych</strong> — odstęp pod e-mailem, telefonem i stroną.
            </li>
            <li>
              <strong>Po mediach społecznościowych</strong> — odstęp pod linkami do profili.
            </li>
            <li>
              <strong>Po przycisku CTA</strong> — odstęp pod przyciskiem (jeśli jest włączony).
            </li>
            <li>
              <strong>Przed klauzulą</strong> — odstęp nad tekstem klauzuli prawnej.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Jeśli usuniesz dane z jakiegoś pola (np. wyczyścisz telefon), odpowiednia opcja odstępu automatycznie zniknie z zakładki.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Klauzula prawna / RODO — kiedy dodać?">
          <p className="text-mid">
            W zakładce <strong>Klauzula / RODO</strong> możesz dodać tekst prawny, który pojawi się na dole stopki mniejszą czcionką.
          </p>

          <h3 className="h4 mt-6 mb-3">Kiedy warto dodać klauzulę?</h3>
          <ul className="text-mid list-disc space-y-2 pl-6">
            <li>
              <strong>Korespondencja biznesowa</strong> — informacja o poufności wiadomości i prośba o usunięcie w przypadku błędnego doręczenia.
            </li>
            <li>
              <strong>Wymogi branżowe</strong> — niektóre branże (np. prawnicza, medyczna, finansowa) wymagają określonych informacji w każdej wiadomości.
            </li>
            <li>
              <strong>RODO</strong> — informacja o przetwarzaniu danych osobowych, jeśli Twoja firma jest administratorem danych.
            </li>
          </ul>

          <p className="text-mid mt-4">
            Domyślnie pole jest wypełnione przykładowym tekstem o poufności wiadomości. Możesz go edytować, usunąć lub zastąpić własną klauzulą. Jeśli zostawisz pole puste, klauzula nie pojawi się w
            stopce.
          </p>

          <h3 className="h4 mt-6 mb-3">Linia oddzielająca</h3>
          <p className="text-mid">
            Pod polem tekstowym znajdziesz opcję <strong>Pokaż linię oddzielającą dane od klauzuli</strong>. Włącz ją, aby dodać poziomą linię między danymi kontaktowymi a klauzulą prawną. Linia wizualnie oddziela treść stopki od tekstu prawnego.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatyczny zapis i resetowanie ustawień">
          <p className="text-mid">
            Generator automatycznie zapisuje wszystkie ustawienia w pamięci przeglądarki (localStorage). Po odświeżeniu strony lub ponownym otwarciu narzędzia Twoje dane, układ, kolory i wszystkie inne opcje zostaną przywrócone.
          </p>

          <h3 className="h4 mt-6 mb-3">Jak działa automatyczny zapis?</h3>
          <p className="text-mid">
            Każda zmiana (tekst, kolor, układ, odstępy) jest natychmiast zapisywana w pamięci przeglądarki. Nie musisz klikać żadnego przycisku „Zapisz" — wszystko dzieje się automatycznie w tle.
          </p>

          <h3 className="h4 mt-6 mb-3">Jak zresetować ustawienia?</h3>
          <p className="text-mid">
            Pod podglądem stopki znajdziesz przycisk <strong>Resetuj wygląd</strong>. Po kliknięciu pojawi się okno z prośbą o potwierdzenie. Zatwierdzenie resetu przywróci wszystkie dane i ustawienia do wartości domyślnych (przykładowe dane Jana Kowalskiego). Tej operacji nie można cofnąć.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak skopiować stopkę do Gmail lub Outlook?"
          description="Gdy stopka jest gotowa, wystarczy kilka kroków, żeby dodać ją do swojego klienta pocztowego:"
          grid="three"
          items={[
            {
              icon: <RiClipboardLine className="h-6 w-6" />,
              title: '1. Skopiuj kod',
              description: 'Kliknij przycisk Kopiuj stopkę (Gmail / Outlook) pod podglądem. Stopka zostanie skopiowana do schowka jako sformatowany HTML.',
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

        <FaqPanels
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-stopki-mailowej/instrukcja')}
          title="Najczęstsze pytania o generator stopki mailowej"
          items={[
            {
              question: 'Czy mogę użyć generatora do stworzenia stopek dla całego zespołu?',
              answer:
                'Tak. Generator nie wymaga logowania ani rejestracji. Każda osoba w zespole może otworzyć narzędzie, uzupełnić swoje dane i skopiować gotową stopkę. Aby zachować spójność wizualną, ustalcie wspólne ustawienia: ten sam układ, motyw kolorystyczny i czcionkę.',
            },
            {
              question: 'Czy stopka będzie działać na urządzeniach mobilnych?',
              answer:
                'Tak. Stopki generowane przez nasze narzędzie używają tabel HTML, które poprawnie wyświetlają się zarówno na komputerach, jak i smartfonach. Układ automatycznie dopasowuje się do szerokości ekranu.',
            },
            {
              question: 'Czy mogę dodać własne ikony mediów społecznościowych?',
              answer:
                'Generator oferuje wbudowane ikony SVG dla sześciu platform (LinkedIn, Instagram, Facebook, TikTok, YouTube, X). Włącz opcję Pokaż ikony w zakładce Media społecznościowe. Możesz wybrać rozmiar ikon i ich kolor (kolory platform, kolor akcentu lub kolor tekstu).',
            },
            {
              question: 'Jak często mogę zmieniać stopkę?',
              answer: 'Nie ma żadnych limitów. Możesz wracać do generatora i tworzyć nowe stopki tak często, jak potrzebujesz. Narzędzie jest całkowicie darmowe i nie wymaga rejestracji.',
            },
            {
              question: 'Czy moje dane są zapisywane?',
              answer: 'Nie. Generator działa w całości w Twojej przeglądarce. Dane, które wpisujesz, nie są wysyłane na żaden serwer ani zapisywane. Po zamknięciu strony wszystkie dane znikają.',
            },
            {
              question: 'Przycisk kopiowania jest nieaktywny — dlaczego?',
              answer: 'Aby skopiować stopkę, musisz uzupełnić przynajmniej dwa pola: imię i nazwisko oraz adres e-mail. Sprawdź, czy oba pola są wypełnione.',
            },
            {
              question: 'Avatar lub logo nie wyświetla się — co zrobić?',
              answer:
                'Obraz musi być publicznie dostępny w internecie. Adres URL powinien prowadzić bezpośrednio do pliku graficznego (kończyć się na .jpg, .png lub .webp). Obrazy z Google Drive lub Dropbox wymagają specjalnego linku do udostępniania.',
            },
            {
              question: 'Stopka wygląda inaczej u odbiorcy — dlaczego?',
              answer:
                'Różne klienty pocztowe (Gmail, Outlook, Apple Mail) mogą nieznacznie różnić się w wyświetlaniu HTML. Generator używa bezpiecznych stylów, które działają w większości programów. Jeśli widzisz duże różnice, upewnij się, że wklejasz stopkę używając Ctrl+V, a nie Wklej jako zwykły tekst.',
            },
            {
              question: 'Przycisk CTA nie pojawia się — co zrobić?',
              answer: 'Przycisk wymaga obu pól: tekstu i linku. Sprawdź, czy w zakładce Link oba pola są wypełnione i czy adres URL zaczyna się od https://.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie" btnOne="Przejdź do generatora" btnOneLink="/narzedzia/darmowy-generator-stopki-mailowej" btnTwo="Zobacz inne narzędzia" btnTwoLink="/narzedzia">
          <p className="text-mid">
            Generator stopki mailowej pozwala stworzyć profesjonalny podpis e-mail w kilka minut. Wypełniasz dane, wybierasz układ i kolory, a następnie kopiujesz gotowy kod do Gmail, Outlook lub
            innego klienta pocztowego.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnej identyfikacji mailowej dla firmy?"
        description="Stworzymy spójną identyfikację wizualną — dopasowaną do Twojej marki, strony internetowej i materiałów marketingowych."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi/projekty-graficzne"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
