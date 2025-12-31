import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Link from 'next/link';
import {
  RiLink,
  RiFileTextLine,
  RiContactsLine,
  RiMailLine,
  RiPhoneLine,
  RiFullscreenLine,
  RiLayoutGridLine,
  RiPaletteLine,
  RiPaintBrushLine,
  RiPrinterLine,
  RiBookOpenLine,
  RiRestaurantLine,
  RiVerifiedBadgeLine,
} from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak używać generatora kodów QR | Instrukcja krok po kroku',
  description: 'Instrukcja generatora kodów QR. Dowiedz się, jak zakodować URL, wizytówkę vCard, e-mail, jak dostosować wygląd kodu i pobrać go do druku.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/generator-kodu-qr/instrukcja') },
  openGraph: {
    title: 'Jak używać generatora kodów QR | Instrukcja krok po kroku',
    description: 'Szczegółowa instrukcja obsługi generatora kodów QR. Dowiedz się, jak zakodować adres URL, wizytówkę vCard czy e-mail, jak dostosować wygląd kodu i jak go pobrać do druku.',
    url: toAbsoluteUrl('/narzedzia/generator-kodu-qr/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać generatora kodów QR',
  description: 'Szczegółowa instrukcja obsługi generatora kodów QR - od wyboru typu danych po pobranie gotowego pliku do druku.',
  url: toAbsoluteUrl('/narzedzia/generator-kodu-qr/instrukcja'),
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
      text: 'Kliknij Pobierz PNG lub Pobierz SVG, aby zapisać gotowy kod QR na dysku.',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: 'Ile danych można zakodować w kodzie QR?',
    answer:
      'Pojemność kodu QR zależy od typu danych i poziomu korekcji błędów. Przy poziomie L (7% korekcji) zmieści się około 3000 znaków alfanumerycznych lub 7000 cyfr. Przy poziomie H (30% korekcji) pojemność jest mniejsza - około 1200 znaków. W praktyce, dla adresów URL i wizytówek vCard, limity te są więcej niż wystarczające.',
  },
  {
    question: 'Czy moje dane są wysyłane na serwer?',
    answer:
      'Nie. Wszystkie obliczenia są wykonywane lokalnie w przeglądarce. Żadne dane nie są wysyłane na serwer - narzędzie działa całkowicie offline po załadowaniu strony. Dane wpisane w formularzu pozostają tylko na urządzeniu użytkownika.',
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
    question: 'Co oznaczają poziomy korekcji błędów L, M, Q, H?',
    answer:
      'Poziom korekcji błędów określa, jaka część kodu może być uszkodzona lub zasłonięta, a kod nadal będzie czytelny. L (Low) - 7% kodu może być uszkodzone. M (Medium) - 15%. Q (Quartile) - 25%. H (High) - 30%. Dla materiałów drukowanych, które mogą być częściowo zasłonięte lub uszkodzone, wybierz poziom H.',
  },
  {
    question: 'Czy mogę używać wygenerowanych kodów QR komercyjnie?',
    answer: 'Tak. Wygenerowane kody QR możesz swobodnie używać w dowolnych projektach - komercyjnych i niekomercyjnych, bez żadnych ograniczeń ani opłat.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-qr-generator-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak używać generatora kodów QR"
        description="Szczegółowa instrukcja obsługi narzędzia do generowania kodów QR. Dowiedz się, jak zakodować różne typy danych, jak dostosować wygląd kodu i jak go przygotować do druku."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/generator-kodu-qr', label: 'Generator kodu QR' }}
        fourth={{ href: '/narzedzia/generator-kodu-qr/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest kod QR i jak działa?">
          <p className="text-mid">
            Kod QR (od angielskiego <em>Quick Response</em> - szybka odpowiedź) to dwuwymiarowy kod kreskowy, który można zeskanować aparatem w telefonie. Po zeskanowaniu telefon automatycznie
            wykonuje zapisaną akcję: otwiera stronę internetową, zapisuje kontakt w książce adresowej, rozpoczyna połączenie telefoniczne lub tworzy wiadomość e-mail.
          </p>
          <p className="text-mid mt-3">
            W przeciwieństwie do tradycyjnych kodów kreskowych (które przechowują tylko ciąg cyfr), kody QR mogą zawierać różne typy danych: adresy URL, tekst, wizytówki elektroniczne (vCard), adresy
            e-mail z tematem i treścią, numery telefonów, a nawet dane do połączenia z siecią Wi-Fi.
          </p>
          <p className="text-mid mt-3">
            <Link href="/narzedzia/generator-kodu-qr" className="inline-link">
              Przejdź do generatora kodów QR →
            </Link>
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Co można zakodować w QR?"
          description="Generator obsługuje pięć typów danych, każdy przydatny w innych sytuacjach:"
          grid="two"
          items={[
            {
              icon: <RiLink className="h-6 w-6" />,
              title: 'Adres URL',
              description: (
                <p>
                  Link do strony internetowej. Po zeskanowaniu telefon otworzy stronę w przeglądarce. Przykład: <code className="rounded bg-black/5 px-1">https://www.twoja-firma.pl</code>
                  <br />
                  <strong>Zastosowanie:</strong> wizytówki, ulotki, plakaty, opakowania produktów - wszędzie, gdzie chcesz szybko przekierować klienta na stronę.
                </p>
              ),
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Tekst',
              description: (
                <p>
                  Dowolny tekst do 3000 znaków. Po zeskanowaniu telefon wyświetli tekst na ekranie.
                  <br />
                  <strong>Zastosowanie:</strong> instrukcje obsługi, hasła promocyjne, kupony rabatowe (np. kod zniżkowy), krótkie wiadomości.
                </p>
              ),
            },
            {
              icon: <RiContactsLine className="h-6 w-6" />,
              title: 'Wizytówka (vCard)',
              description: (
                <p>
                  Elektroniczna wizytówka z danymi kontaktowymi: imię, nazwisko, firma, stanowisko, telefon, e-mail, strona WWW, adres. Po zeskanowaniu telefon zaproponuje zapisanie kontaktu w książce
                  adresowej.
                  <br />
                  <strong>Zastosowanie:</strong> wizytówki firmowe, stopki e-mail, identyfikatory na konferencjach.
                </p>
              ),
            },
            {
              icon: <RiMailLine className="h-6 w-6" />,
              title: 'E-mail',
              description: (
                <p>
                  Adres e-mail z opcjonalnym tematem i treścią wiadomości. Po zeskanowaniu telefon otworzy aplikację pocztową z wypełnionym formularzem.
                  <br />
                  <strong>Zastosowanie:</strong> formularze kontaktowe, zgłoszenia reklamacji, zapisy na newsletter.
                </p>
              ),
            },
            {
              icon: <RiPhoneLine className="h-6 w-6" />,
              title: 'Telefon',
              description: (
                <p>
                  Numer telefonu w formacie międzynarodowym (np. <code className="rounded bg-black/5 px-1">+48 123 456 789</code>). Po zeskanowaniu telefon zaproponuje wykonanie połączenia.
                  <br />
                  <strong>Zastosowanie:</strong> infolinie, numery alarmowe, kontakt z obsługą klienta.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak wygenerować kod QR?">
          <p className="text-mid">Generowanie kodu QR zajmuje dosłownie kilka sekund. Oto jak to zrobić:</p>
          <ol className="text-mid mt-3 list-decimal space-y-3 pl-5">
            <li>
              <strong>Wybierz typ danych</strong> - z listy rozwijanej wybierz, co chcesz zakodować: adres URL, tekst, wizytówkę (vCard), e-mail lub telefon.
            </li>
            <li>
              <strong>Wpisz dane</strong> - wypełnij odpowiednie pola. Dla URL wpisz pełny adres strony (z <code className="rounded bg-black/5 px-1">https://</code>). Dla vCard podaj przynajmniej imię
              i nazwisko (pozostałe pola są opcjonalne).
            </li>
            <li>
              <strong>Dostosuj wygląd</strong> - wybierz rozmiar (w pikselach), margines, kolory kodu i tła oraz poziom korekcji błędów.
            </li>
            <li>
              <strong>Poczekaj na podgląd</strong> - kod QR generuje się automatycznie po wpisaniu danych. Podgląd pojawi się po prawej stronie formularza.
            </li>
            <li>
              <strong>Pobierz kod</strong> - kliknij przycisk <strong>Pobierz PNG</strong> lub <strong>Pobierz SVG</strong>, aby zapisać gotowy plik na dysku.
            </li>
          </ol>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Opcje personalizacji"
          description="Generator pozwala dostosować wygląd kodu QR do potrzeb projektu:"
          grid="two"
          items={[
            {
              icon: <RiFullscreenLine className="h-6 w-6" />,
              title: 'Rozmiar (px)',
              description: (
                <p>
                  Wymiary kodu w pikselach (od 150 do 1000 px). Dla materiałów drukowanych zalecamy minimum 300 px, co przy 300 DPI daje kod o wymiarach około 2,5x2,5 cm - wystarczający do wizytówek i
                  ulotek.
                </p>
              ),
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Margines (quiet zone)',
              description: (
                <p>
                  Biała ramka wokół kodu, która ułatwia skanowanie. Zalecana wartość to 2-4 moduły. Bez marginesu (wartość 0) kod może być trudniejszy do zeskanowania, szczególnie gdy sąsiaduje z
                  innymi elementami graficznymi.
                </p>
              ),
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Kolor kodu QR',
              description: (
                <p>
                  Kolor ciemnych modułów (domyślnie czarny). Możesz zmienić na dowolny kolor, pamiętając o zachowaniu kontrastu z tłem. Narzędzie ostrzega, gdy kontrast jest zbyt niski (poniżej 3:1).
                </p>
              ),
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Kolor tła',
              description: (
                <p>
                  Kolor jasnych modułów i marginesu (domyślnie biały). Dla najlepszej czytelności zachowaj jasne tło i ciemny kod. Unikaj odwracania kolorów (jasny kod na ciemnym tle) - niektóre
                  starsze skanery mogą mieć z tym problem.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Poziomy korekcji błędów - który wybrać?"
          demo={
            <div className="space-y-3">
              <p className="text-dark text-sm font-semibold uppercase">Poziom korekcji</p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="default" size="sm">
                  L (7%)
                </Badge>
                <Badge variant="selected" size="sm">
                  M (15%)
                </Badge>
                <Badge variant="default" size="sm">
                  Q (25%)
                </Badge>
                <Badge variant="default" size="sm">
                  H (30%)
                </Badge>
              </div>
              <div className="mt-3 rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-mid text-sm">
                  Poziom <strong>M</strong> — kod może być uszkodzony do 15% i nadal będzie czytelny.
                </p>
                <p className="text-light mt-1 text-xs">Zalecany dla większości zastosowań drukowanych.</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">Poziom korekcji błędów określa, jaka część kodu może być uszkodzona lub zasłonięta, a kod nadal będzie czytelny.</p>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-dark font-semibold">L - Niski (7%)</p>
              <p className="text-mid mt-1">Najmniejszy kod, ale najmniej odporny na uszkodzenia. Dla materiałów cyfrowych.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">M - Średni (15%) - domyślny</p>
              <p className="text-mid mt-1">Dobry kompromis. Sprawdzi się w większości zastosowań drukowanych.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">Q - Wysoki (25%)</p>
              <p className="text-mid mt-1">Większa odporność na uszkodzenia. Wybierz dla materiałów narażonych na częściowe zasłonięcie lub lekkie uszkodzenia.</p>
            </div>
            <div>
              <p className="text-dark font-semibold">H - Maksymalny (30%)</p>
              <p className="text-mid mt-1">
                Największa odporność, ale też największy kod. Zalecany dla materiałów drukowanych na niestandardowych powierzchniach (opakowania, etykiety produktów) lub gdy kod może być częściowo
                zasłonięty.
              </p>
            </div>
          </div>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Jak pobrać kod QR?">
          <p className="text-mid">Po wygenerowaniu kodu masz dwa sposoby pobrania:</p>
          <div className="mt-4 space-y-3">
            <div>
              <p className="text-dark font-semibold">Pobierz PNG</p>
              <p className="text-mid mt-1">
                Format rastrowy (pikselowy). Sprawdzi się w większości zastosowań: strony internetowe, media społecznościowe, druk do formatu A4, prezentacje. Plik ma dokładnie taki rozmiar, jaki
                ustawiono w generatorze.
              </p>
            </div>
            <div>
              <p className="text-dark font-semibold">Pobierz SVG</p>
              <p className="text-mid mt-1">
                Format wektorowy. Możesz go skalować do dowolnego rozmiaru bez utraty jakości. Idealny do dużych formatów (banery, billboardy, pojazdy firmowe) oraz gdy potrzebujesz edytować kod w
                programie graficznym (Illustrator, Inkscape, Figma).
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Gdzie używać kodów QR?"
          description="Kody QR mają wiele praktycznych zastosowań w codziennej działalności:"
          grid="two"
          items={[
            {
              icon: <RiPrinterLine className="h-6 w-6" />,
              title: 'Materiały drukowane',
              description: (
                <p>
                  Wizytówki, ulotki, katalogi, plakaty, banery reklamowe. Klient zeskanuje kod telefonem i od razu trafi na stronę, formularz kontaktowy lub ofertę - bez przepisywania długiego adresu.
                </p>
              ),
            },
            {
              icon: <RiBookOpenLine className="h-6 w-6" />,
              title: 'Opakowania produktów',
              description: (
                <p>
                  Link do instrukcji obsługi, karty produktu, filmu instruktażowego lub formularza rejestracji gwarancji. Oszczędza miejsce na opakowaniu i pozwala aktualizować treści bez zmiany
                  druku.
                </p>
              ),
            },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Menu restauracji',
              description: (
                <p>Naklejki na stolikach z kodem QR prowadzącym do menu online. Higieniczne (bez dotykania wspólnych kart) i łatwe do aktualizacji - zmiana menu nie wymaga ponownego druku.</p>
              ),
            },
            {
              icon: <RiVerifiedBadgeLine className="h-6 w-6" />,
              title: 'Identyfikatory i konferencje',
              description: <p>Kod QR z wizytówką vCard na identyfikatorze. Po zeskanowaniu kontakt zostaje automatycznie zapisany w telefonie rozmówcy - bez wymiany papierowych wizytówek.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak przetestować kod przed drukiem?">
          <p className="text-mid">Zanim wyślesz materiały do druku, sprawdź, czy kod QR działa poprawnie:</p>
          <ol className="text-mid mt-3 list-decimal space-y-2 pl-5">
            <li>
              <strong>Zeskanuj kod telefonem</strong> - użyj aparatu telefonu (większość smartfonów ma wbudowany skaner QR) lub dedykowanej aplikacji do skanowania kodów.
            </li>
            <li>
              <strong>Sprawdź, czy prowadzi we właściwe miejsce</strong> - upewnij się, że po zeskanowaniu otwiera się prawidłowa strona, zapisuje właściwy kontakt lub wykonuje oczekiwaną akcję.
            </li>
            <li>
              <strong>Przetestuj na różnych urządzeniach</strong> - jeśli to możliwe, zeskanuj kod na kilku telefonach (iPhone, Android) i z różnymi aplikacjami, żeby mieć pewność kompatybilności.
            </li>
            <li>
              <strong>Sprawdź czytelność przy zmniejszeniu</strong> - jeśli kod będzie drukowany w małym rozmiarze, zmniejsz podgląd na ekranie i sprawdź, czy nadal jest czytelny.
            </li>
          </ol>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} />

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie" btnOne="Przejdź do generatora kodów QR" btnOneLink="/narzedzia/generator-kodu-qr" btnTwo="Zobacz inne narzędzia" btnTwoLink="/narzedzia">
          <p className="text-mid">
            Teraz, gdy wiesz jak działa generator, możesz stworzyć własny kod QR. Jeśli potrzebujesz profesjonalnych materiałów drukowanych z kodami QR —{' '}
            <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/projekty-graficzne">projektami graficznymi</Link>, w tym wizytówkami, ulotkami i katalogami.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych materiałów drukowanych?"
        description="Zaprojektujemy wizytówki, ulotki, katalogi i inne materiały z kodem QR, które wyróżnią firmę."
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
