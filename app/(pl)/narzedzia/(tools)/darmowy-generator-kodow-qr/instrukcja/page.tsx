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

export const metadata: Metadata = {
  title: 'Jak używać generatora kodów QR | Instrukcja krok po kroku',
  description:
    'Instrukcja darmowego generatora kodów QR. Dowiedz się, jak zakodować URL, wizytówkę vCard, e-mail, jak dostosować wygląd kodu i pobrać go do druku w formacie PNG lub SVG.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr/instrukcja') },
  openGraph: {
    title: 'Jak używać generatora kodów QR | Instrukcja krok po kroku',
    description:
      'Szczegółowa instrukcja obsługi darmowego generatora kodów QR. Dowiedz się, jak zakodować adres URL, wizytówkę vCard czy e-mail, jak dostosować wygląd kodu i jak go pobrać do druku.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr/instrukcja'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-kodu-qr.webp') }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak używać darmowego generatora kodów QR',
  description: 'Szczegółowa instrukcja obsługi generatora kodów QR — od wyboru typu danych po pobranie gotowego pliku do druku.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr/instrukcja'),
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

export default function Page() {
  return (
    <>
      <Script id="ld-json-qr-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak używać generatora kodów QR"
        description="Szczegółowa instrukcja obsługi darmowego generatora kodów QR. Dowiesz się, jak zakodować różne typy danych, dostosować wygląd kodu i pobrać go w formacie PNG lub SVG."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/darmowy-generator-kodow-qr/instrukcja', label: 'Instrukcja generatora kodów QR' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionSteps
          title="Generowanie kodu QR w 4 krokach"
          description="Stworzenie kodu QR zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wybierz typ danych',
              description: 'W polu „Typ danych" wybierz, co chcesz zakodować: adres URL, zwykły tekst, wizytówkę vCard, e-mail lub numer telefonu.',
            },
            {
              title: '2. Wpisz treść',
              description: 'Wypełnij pola odpowiednie dla wybranego typu. Dla URL wpisz pełny adres strony (np. https://twoja-strona.pl).',
            },
            {
              title: '3. Dostosuj wygląd',
              description: 'Wybierz rozmiar w pikselach, margines (quiet zone), kolory kodu i tła oraz poziom korekcji błędów.',
            },
            {
              title: '4. Pobierz kod',
              description: 'Kliknij „Pobierz PNG" (do użytku cyfrowego i standardowego druku) lub „Pobierz SVG" (do druku wielkoformatowego).',
            },
          ]}
          btnOne="Przejdź do generatora"
          btnOneLink="/narzedzia/darmowy-generator-kodow-qr"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Typy danych do zakodowania">
          <p className="text-mid mb-4">Generator obsługuje pięć typów danych. Każdy typ ma dedykowane pola i generuje kod w odpowiednim formacie:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Adres URL</strong> — wpisz pełny adres strony WWW (z https://). Po zeskanowaniu telefon otworzy stronę w przeglądarce.
            </li>
            <li>
              <strong>Zwykły tekst</strong> — dowolna treść tekstowa, np. hasło Wi-Fi, kod promocyjny lub krótka informacja.
            </li>
            <li>
              <strong>Wizytówka vCard</strong> — pola na imię, nazwisko, firmę, stanowisko, telefon, e-mail, stronę WWW i adres. Po zeskanowaniu użytkownik może zapisać kontakt w telefonie.
            </li>
            <li>
              <strong>E-mail</strong> — adres e-mail, temat i treść wiadomości. Po zeskanowaniu telefon otworzy aplikację pocztową z wypełnionymi polami.
            </li>
            <li>
              <strong>Numer telefonu</strong> — numer w formacie międzynarodowym (np. +48 123 456 789). Po zeskanowaniu telefon zaproponuje połączenie.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Generowanie kodu QR do adresu URL">
          <p className="text-mid mb-4">Najczęściej używany typ kodu QR — link do strony internetowej:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>W polu „Typ danych" wybierz opcję „Adres URL".</li>
            <li>W polu „Adres URL" wpisz pełny adres strony, np. https://www.twoja-firma.pl/oferta. Pamiętaj o przedrostku https:// lub http://.</li>
            <li>Dostosuj wygląd (opcjonalnie) — zmień rozmiar, kolory lub poziom korekcji błędów według potrzeb.</li>
            <li>Kliknij „Pobierz PNG" lub „Pobierz SVG".</li>
          </ol>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Generowanie wizytówki vCard">
          <p className="text-mid mb-4">Wizytówka elektroniczna pozwala zapisać kontakt jednym skanowaniem:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>W polu „Typ danych" wybierz opcję „Wizytówka (vCard)".</li>
            <li>Pola „Imię" i „Nazwisko" są wymagane. Pozostałe (firma, stanowisko, telefon, e-mail, strona WWW, adres) są opcjonalne — wypełnij te, które chcesz udostępnić.</li>
            <li>Sprawdź podgląd — upewnij się, że kod wygenerował się poprawnie. Możesz go przetestować własnym telefonem.</li>
            <li>Kliknij „Pobierz PNG" do druku na wizytówce lub „Pobierz SVG" do edycji w programie graficznym.</li>
          </ol>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Personalizacja wyglądu kodu QR">
          <p className="text-mid mb-4">Generator pozwala dostosować kilka parametrów wpływających na wygląd i czytelność kodu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Rozmiar (px)</strong> — wymiar kodu w pikselach. Dla druku standardowego (ulotki, wizytówki) wybierz 300-500 px. Dla użytku cyfrowego wystarczy 150-200 px.
            </li>
            <li>
              <strong>Margines (quiet zone)</strong> — biały obszar wokół kodu niezbędny do prawidłowego skanowania. Zalecana wartość to 2-4. Wartość 0 może utrudnić skanowanie przy ciemnym tle.
            </li>
            <li>
              <strong>Kolor kodu QR</strong> — domyślnie czarny (#000000). Możesz zmienić na dowolny ciemny kolor pasujący do identyfikacji wizualnej.
            </li>
            <li>
              <strong>Kolor tła</strong> — domyślnie biały (#ffffff). Możesz zmienić na dowolny jasny kolor. Generator ostrzeże, jeśli kontrast będzie zbyt niski.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Wskazówka:</strong> Zachowaj wysoki kontrast między kodem a tłem (minimum 3:1). Ciemny kod na jasnym tle skanuje się najłatwiej.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Poziomy korekcji błędów — L, M, Q, H">
          <p className="text-mid mb-4">
            Korekcja błędów to mechanizm pozwalający odczytać kod QR nawet gdy część jest uszkodzona, zabrudzona lub zasłonięta. Generator wykorzystuje algorytm Reed-Solomon, standard w kodach QR.
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>L (Low / Niski) — 7%</strong> — najmniejsza nadmiarowość, kod jest najbardziej kompaktowy. Wybierz, gdy kod będzie używany w idealnych warunkach (ekran, druk wysokiej jakości).
            </li>
            <li>
              <strong>M (Medium / Średni) — 15%</strong> — domyślna wartość, dobry kompromis między pojemnością a odpornością. Odpowiedni dla większości zastosowań.
            </li>
            <li>
              <strong>Q (Quartile / Wysoki) — 25%</strong> — większa odporność na uszkodzenia. Wybierz dla kodów drukowanych na materiałach narażonych na zabrudzenie.
            </li>
            <li>
              <strong>H (High / Maksymalny) — 30%</strong> — najwyższa odporność. Zalecany do druku na materiałach zewnętrznych, opakowaniach i sytuacji, gdzie kod może być częściowo zasłonięty (np. logo
              w środku).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Uwaga:</strong> Wyższy poziom korekcji = większy, bardziej złożony kod. Przy dużej ilości danych i poziomie H kod może stać się bardzo gęsty.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Pobieranie kodu QR — PNG vs SVG">
          <p className="text-mid mb-4">Generator oferuje dwa formaty eksportu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>PNG (Portable Network Graphics)</strong> — format rastrowy (pikselowy). Plik ma stały rozmiar określony w ustawieniach. Idealny do użytku cyfrowego (strony WWW, prezentacje, media
              społecznościowe) i druku w stałym rozmiarze (wizytówki, ulotki, naklejki).
            </li>
            <li>
              <strong>SVG (Scalable Vector Graphics)</strong> — format wektorowy opisany matematycznie. Można go skalować bez utraty jakości. Idealny do druku wielkoformatowego (plakaty, banery, roll-upy)
              i edycji w programach graficznych (Illustrator, Figma, Inkscape).
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Praktyczna wskazówka:</strong> Dla wizytówek i ulotek A5/A4 wystarczy PNG w rozmiarze 300-500 px. Dla wszystkiego większego (plakaty A2+, banery) zawsze wybieraj SVG.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Wskazówki dotyczące druku kodów QR">
          <p className="text-mid mb-4">Aby kod QR był czytelny po wydrukowaniu, przestrzegaj kilku zasad:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Minimalny rozmiar</strong> — kod powinien mieć minimum 2×2 cm do skanowania z bliskiej odległości. Im większa odległość skanowania, tym większy musi być kod.
            </li>
            <li>
              <strong>Kontrast</strong> — ciemny kod na jasnym tle. Unikaj pastelowych kolorów i niskiego kontrastu.
            </li>
            <li>
              <strong>Margines (quiet zone)</strong> — zachowaj pusty obszar wokół kodu. Nie umieszczaj innych elementów graficznych zbyt blisko.
            </li>
            <li>
              <strong>Testowanie</strong> — przed masowym drukiem przetestuj kod na różnych telefonach i w różnych warunkach oświetleniowych.
            </li>
            <li>
              <strong>Poziom korekcji</strong> — dla druku zewnętrznego i materiałów narażonych na uszkodzenie wybierz poziom Q lub H.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/darmowy-generator-kodow-qr/instrukcja')}
          title="Najczęstsze pytania o generator kodów QR"
          items={[
            {
              question: 'Czy kod QR wygasa lub przestaje działać?',
              answer:
                'Nie, statyczny kod QR (taki jak generowany w tym narzędziu) nie wygasa. Zawiera zakodowaną treść bezpośrednio w sobie. Dopóki docelowa strona istnieje i jest dostępna, kod będzie działać.',
            },
            {
              question: 'Jak zmienić adres URL w istniejącym kodzie QR?',
              answer:
                'W przypadku statycznego kodu QR nie można zmienić zakodowanej treści — trzeba wygenerować nowy kod z nowym adresem i wymienić go na materiałach. Dynamiczne kody QR (z możliwością edycji) wymagają zewnętrznych płatnych serwisów.',
            },
            {
              question: 'Jaka jest maksymalna pojemność kodu QR?',
              answer:
                'Kod QR może pomieścić do 7089 cyfr, 4296 znaków alfanumerycznych lub 2953 bajtów danych binarnych. W praktyce dla URL i wizytówek ta pojemność jest więcej niż wystarczająca.',
            },
            {
              question: 'Czy mogę dodać logo do środka kodu QR?',
              answer:
                'To narzędzie nie obsługuje dodawania logo. Możesz jednak pobrać kod SVG i nałożyć logo w programie graficznym — pamiętaj o ustawieniu wysokiego poziomu korekcji błędów (H), aby kod pozostał czytelny.',
            },
            {
              question: 'Dlaczego mój kod nie skanuje się?',
              answer:
                'Najczęstsze przyczyny: zbyt niski kontrast między kodem a tłem, zbyt mały rozmiar kodu, brak marginesu (quiet zone) wokół kodu, uszkodzenie lub zabrudzenie wydruku. Spróbuj zwiększyć rozmiar, kontrast i poziom korekcji błędów.',
            },
            {
              question: 'Czy moje dane są bezpieczne?',
              answer:
                'Tak. Kod QR generowany jest lokalnie w przeglądarce — Twoje dane (np. treść wizytówki vCard) nie są wysyłane na żaden serwer ani nigdzie zapisywane.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne darmowe narzędzia online" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych materiałów firmowych?"
        description="Tworzymy spójną identyfikację wizualną — od logo i wizytówek po kompletne zestawy brandingowe. Skontaktuj się z nami."
        btnOne="Identyfikacja wizualna"
        btnOneLink="/uslugi/identyfikacja-wizualna"
        btnTwo="Skontaktuj się z nami"
        btnTwoLink="/kontakt"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
