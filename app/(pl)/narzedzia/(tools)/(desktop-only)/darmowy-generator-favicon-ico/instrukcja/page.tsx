import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaqPanels from '@/components/ui/FaqPanels';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Link from 'next/link';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import { RiUploadLine, RiLayoutGridLine, RiSettings3Line, RiDownloadLine, RiFolderZipLine, RiFileDownloadLine } from 'react-icons/ri';
import Badge from '@/components/ui/Badge';
import SectionDemo from '@/components/ui/sections/SectionDemo';

export const metadata: Metadata = {
  title: 'Jak stworzyć favicon dla strony? | Generator ikon krok po kroku',
  description: 'Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Dowiedz się, jakie rozmiary ikon są potrzebne na stronę, jak wgrać favicon do WordPress i Next.js.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico/instrukcja') },
  openGraph: {
    title: 'Jak stworzyć favicon dla strony? | Generator ikon krok po kroku',
    description: 'Stwórz favicon.ico i ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Dowiedz się, jakie rozmiary ikon są potrzebne na stronę, jak wgrać favicon do WordPress i Next.js.',
    url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico/instrukcja'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak stworzyć favicon dla strony internetowej',
  description: 'Instrukcja generowania favicon.ico i ikon PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Dowiedz się, jakie rozmiary są potrzebne i jak wgrać favicon do WordPress, HTML i Next.js.',
  url: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico/instrukcja'),
  inLanguage: 'pl-PL',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Dodaj obraz źródłowy',
      text: 'Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać grafikę z dysku. Najlepiej sprawdza się proste logo lub ikona w formacie PNG, JPG lub SVG.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wybierz rozmiary ikon',
      text: 'Zaznacz, które rozmiary ikon potrzebujesz: favicon.ico (32x32), ikony PNG (16x16, 32x32, 180x180, 192x192, 512x512).',
    },
    {
      '@type': 'HowToStep',
      name: 'Skonfiguruj opcje',
      text: 'Ustaw kolor tła (lub pozostaw przezroczyste), zdecyduj czy chcesz wygenerować plik manifest i czy pliki mają się pobrać automatycznie.',
    },
    {
      '@type': 'HowToStep',
      name: 'Wygeneruj i pobierz pliki',
      text: 'Kliknij przycisk generowania. Pobierz wszystkie pliki jako archiwum ZIP lub pojedynczo.',
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
    question: 'Czy mój obraz jest wysyłany na serwer?',
    answer: 'Nie. Wszystkie operacje wykonywane są lokalnie w przeglądarce. Obraz nie opuszcza komputera — narzędzie działa całkowicie offline po załadowaniu strony.',
  },
  {
    question: 'Jaki minimalny rozmiar powinien mieć obraz źródłowy?',
    answer:
      'Zalecamy obraz o wymiarach co najmniej 512x512 pikseli. Dzięki temu ikony w największych rozmiarach (512x512, 192x192) będą ostre i czytelne. Przy mniejszych obrazach źródłowych jakość może być niższa.',
  },
  {
    question: 'Czy mogę wygenerować tylko niektóre rozmiary ikon?',
    answer: 'Tak. Przed wygenerowaniem możesz wybrać, które rozmiary ikon potrzebujesz. Możesz wygenerować tylko wybrane rozmiary — zaznacz te, które będą używane na stronie.',
  },
  {
    question: 'Co to jest plik site.webmanifest i czy go potrzebuję?',
    answer:
      'Plik site.webmanifest to plik konfiguracyjny dla aplikacji webowych (PWA). Zawiera informacje o ikonie, nazwie i kolorach aplikacji. Jeśli planujesz, że strona będzie działać jako aplikacja (np. dodawana do ekranu głównego telefonu), warto go wygenerować. Dla zwykłych stron nie jest wymagany.',
  },
  {
    question: 'Dlaczego warto użyć formatu SVG jako źródła?',
    answer: 'Format SVG to grafika wektorowa, która skaluje się bez utraty jakości. Jeśli masz logo w formacie SVG, użyj go jako źródła — ikony we wszystkich rozmiarach będą ostre i wyraźne.',
  },
];

export default function Page() {
  return (
    <>
      <Script id="ld-json-favicon-instruction" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>

      <HeroBanner
        title="Jak stworzyć favicon dla strony internetowej"
        description="Wygeneruj favicon.ico i wszystkie ikony PNG (16x16, 32x32, 180x180, 512x512) z jednego obrazu. Instrukcja z opisem rozmiaru ikon, kodu HTML i wgrywania do WordPress oraz Next.js."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/darmowy-generator-favicon-ico', label: 'Generator favicon' }}
        fourth={{ href: '/narzedzia/darmowy-generator-favicon-ico/instrukcja', label: 'Instrukcja' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Co to jest favicon i do czego służy?">
          <p className="mb-4">
            Favicon (skrót od <em>favorite icon</em>) to mała ikona, która pojawia się w kilku miejscach: na karcie przeglądarki obok tytułu strony, w zakładkach (ulubionych) oraz na ekranie głównym
            telefonu, gdy ktoś doda stronę jako skrót.
          </p>
          <p className="mb-4">
            Ta niepozorna grafika pełni ważną funkcję — pomaga użytkownikom szybko rozpoznać stronę wśród wielu otwartych kart. Gdy masz kilkanaście kart w przeglądarce, favicon jest często jedynym
            widocznym elementem identyfikującym stronę.
          </p>
          <p>
            Dla aplikacji webowych (PWA — Progressive Web Apps) favicon w odpowiednich rozmiarach jest niezbędny do prawidłowego wyświetlania ikony aplikacji na urządzeniach mobilnych i w sklepach z
            aplikacjami.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jakie rozmiary ikon są potrzebne?">
          <p className="mb-6">Generator tworzy zestaw ikon zgodny z aktualnymi wytycznymi (2024-2025). Każdy rozmiar ma swoje zastosowanie:</p>
          <ul className="mb-6 list-disc space-y-3 pl-5">
            <li>
              <strong>favicon.ico (32x32)</strong> — klasyczny format ikony rozpoznawany przez wszystkie przeglądarki. Wyświetla się na karcie przeglądarki w starszych systemach i jako domyślna ikona
              w przypadku braku innych.
            </li>
            <li>
              <strong>16x16 PNG</strong> — najmniejsza ikona, używana w niektórych przeglądarkach na kartach oraz w interfejsie (np. obok adresu URL).
            </li>
            <li>
              <strong>32x32 PNG</strong> — standardowy rozmiar favicon dla nowoczesnych przeglądarek. Wyświetla się na kartach i w zakładkach.
            </li>
            <li>
              <strong>180x180 PNG (apple-touch-icon)</strong> — ikona dla urządzeń Apple (iPhone, iPad). Wyświetla się, gdy użytkownik doda stronę do ekranu głównego.
            </li>
            <li>
              <strong>192x192 PNG</strong> — ikona dla urządzeń z Androidem i przeglądarki Chrome. Używana w manifestach PWA jako mniejsza ikona aplikacji.
            </li>
            <li>
              <strong>512x512 PNG</strong> — największa ikona, wymagana przez manifesty PWA. Wyświetla się w ekranach startowych aplikacji i jako ikona w sklepach z aplikacjami.
            </li>
          </ul>
          <p className="text-light">
            Jeśli nie planujesz tworzyć PWA, wystarczą Ci: favicon.ico, 32x32 PNG i 180x180 PNG. Te trzy pliki pokryją większość przypadków użycia na stronach internetowych.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak korzystać z generatora?"
          description="Generowanie favicon to kilka prostych kroków:"
          grid="two"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Dodaj obraz źródłowy',
              description: (
                <div>
                  <p className="mb-2">Przeciągnij plik na pole do dodania pliku lub kliknij, żeby wybrać grafikę z dysku.</p>
                  <p className="text-light">Obsługiwane formaty: PNG, JPG, SVG. Najlepiej sprawdza się proste logo lub ikona o wymiarach co najmniej 512x512 pikseli.</p>
                </div>
              ),
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: '2. Wybierz rozmiary ikon',
              description: (
                <div>
                  <p className="mb-2">Zaznacz, które rozmiary ikon potrzebujesz.</p>
                  <p className="text-light">Możesz wybrać wszystkie lub tylko niektóre. Dla zwykłej strony wystarczą: favicon.ico, 32x32 i 180x180.</p>
                </div>
              ),
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '3. Skonfiguruj opcje generowania',
              description: (
                <div>
                  <p className="mb-2">Ustaw dodatkowe opcje:</p>
                  <ul className="text-light list-disc pl-5">
                    <li>
                      <strong>Tło</strong> — przezroczyste lub wybrany kolor
                    </li>
                    <li>
                      <strong>Manifest</strong> — plik konfiguracyjny dla PWA
                    </li>
                    <li>
                      <strong>Auto-download</strong> — automatyczne pobieranie po wygenerowaniu
                    </li>
                  </ul>
                </div>
              ),
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Wygeneruj i pobierz pliki',
              description: (
                <div>
                  <p className="mb-2">Kliknij przycisk generowania. Narzędzie przetworzy obraz lokalnie — nic nie jest wysyłane na serwer.</p>
                  <p className="text-light">Pobierz wszystkie pliki jako archiwum ZIP lub pobierz pojedyncze ikony osobno.</p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Opcje generowania — co robi każda z nich?"
          demo={
            <div className="tool-section space-y-4">
              <div className="tool-info-box">
                <p className="text-light mb-2! text-sm font-semibold tracking-wide uppercase">Rozmiary PNG</p>
                <div className="flex flex-wrap gap-2">
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    16x16
                  </Badge>
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    32x32
                  </Badge>
                  <Badge as="label" variant="default" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    180x180
                  </Badge>
                </div>
              </div>
              <div className="tool-info-box flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span className="text-mid text-sm!">Przezroczyste tło (PNG/ICO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-light text-sm">Kolor tła:</span>
                  <input type="color" defaultValue="#ffffff" disabled className="h-8! w-7! cursor-pointer border-none bg-white p-0!" />
                </div>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <h3 className="h4 mb-2">Tło (przezroczyste lub kolor)</h3>
              <p className="text-mid">Domyślnie generator zachowuje przezroczystość. Możesz też wybrać konkretny kolor tła.</p>
            </div>
            <div>
              <h3 className="h4 mb-2">Generuj manifest (site.webmanifest)</h3>
              <p className="text-mid">Plik JSON dla aplikacji webowych (PWA). Jeśli nie tworzysz PWA, ta opcja nie jest wymagana.</p>
            </div>
          </div>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Jak pobrać wygenerowane pliki?"
          description="Po wygenerowaniu ikon masz kilka opcji pobierania:"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Pobierz wszystko jako ZIP',
              description: (
                <p>Kliknij przycisk „Pobierz wszystko". Wszystkie wygenerowane pliki zostaną spakowane do jednego archiwum ZIP. To najwygodniejsza opcja, gdy potrzebujesz wszystkich ikon.</p>
              ),
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Pobierz pojedyncze pliki',
              description: (
                <p>Każda wygenerowana ikona ma własny przycisk pobierania. Kliknij na konkretny plik, żeby pobrać tylko tę jedną ikonę. Przydatne, gdy chcesz zaktualizować tylko jeden rozmiar.</p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Gdzie i jak wgrać favicon?">
          <p className="mb-6">Lokalizacja plików favicon zależy od technologii, na której oparta jest strona:</p>

          <div className="space-y-6">
            <div>
              <h3 className="h4 mb-2">WordPress i inne CMS-y</h3>
              <p className="mb-2">Większość motywów WordPress ma wbudowaną opcję ustawiania ikony witryny. Znajdziesz ją w panelu administracyjnym:</p>
              <p className="mb-2">
                <strong>Wygląd → Dostosuj → Tożsamość witryny → Ikona witryny</strong>
              </p>
              <p className="text-light">
                Wgraj tam plik 512x512 — WordPress automatycznie wygeneruje mniejsze rozmiary. Jeśli chcesz mieć pełną kontrolę nad ikonami, możesz też wgrać pliki bezpośrednio do katalogu głównego
                strony przez FTP.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-2">Własna strona HTML</h3>
              <p className="mb-2">Umieść wygenerowane pliki w katalogu głównym strony (tam, gdzie jest plik index.html). Następnie dodaj w sekcji &lt;head&gt; odpowiednie tagi:</p>
              <pre className="mb-2 overflow-x-auto rounded-lg bg-slate-100 p-4 text-sm">
                <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
              </pre>
              <p className="text-light">Generator podpowiada dokładny kod HTML do skopiowania po wygenerowaniu ikon.</p>
            </div>

            <div>
              <h3 className="h4 mb-2">Next.js / React</h3>
              <p className="mb-2">
                W Next.js (App Router) umieść pliki favicon w katalogu <code>app/</code> lub <code>public/</code>:
              </p>
              <ul className="text-light mb-2 list-disc pl-5">
                <li>
                  <code>app/favicon.ico</code> — automatycznie rozpoznawany przez Next.js
                </li>
                <li>
                  <code>app/apple-icon.png</code> — ikona dla Apple
                </li>
                <li>
                  <code>public/</code> — pozostałe ikony (192x192, 512x512)
                </li>
              </ul>
              <p className="text-light">
                Możesz też skonfigurować ikony w pliku <code>layout.tsx</code> przez obiekt <code>metadata.icons</code>.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Jaki obraz źródłowy działa najlepiej?">
          <p className="mb-4">Favicon to bardzo mała grafika — nawet 16x16 pikseli. Dlatego nie każdy obraz sprawdzi się jako źródło. Oto kilka wskazówek:</p>

          <div className="space-y-4">
            <div>
              <h3 className="h4 mb-1">Proste kształty i czytelne symbole</h3>
              <p className="text-light">
                Najlepiej sprawdzają się proste logotypy, pojedyncze litery lub symbole. Unikaj złożonych grafik z wieloma detalami — przy małych rozmiarach staną się nieczytelne.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-1">Kwadratowy format</h3>
              <p className="text-light">
                Favicon jest kwadratowy. Jeśli źródłowy obraz ma proporcje inne niż 1:1, zostanie przycięty lub rozciągnięty. Przed generowaniem przytnij grafikę do kwadratu.
              </p>
            </div>

            <div>
              <h3 className="h4 mb-1">Wystarczająco duży rozmiar</h3>
              <p className="text-light">Zalecamy obraz źródłowy o wymiarach co najmniej 512x512 pikseli. Mniejsze obrazy będą skalowane w górę, co może obniżyć jakość większych ikon.</p>
            </div>

            <div>
              <h3 className="h4 mb-1">Format SVG jako idealne źródło</h3>
              <p className="text-light">Jeśli masz logo w formacie SVG (grafika wektorowa), użyj go. SVG skaluje się bez utraty jakości, więc ikony we wszystkich rozmiarach będą ostre.</p>
            </div>

            <div>
              <h3 className="h4 mb-1">Kontrastowe kolory</h3>
              <p className="text-light">Favicon musi być widoczny na różnych tłach (jasne karty, ciemny tryb). Wybierz kolory, które zachowują czytelność w obu przypadkach.</p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Najczęściej zadawane pytania" />

        <Gap variant="line" />

        <SectionInfo title="Wypróbuj narzędzie" btnOne="Przejdź do generatora favicon" btnOneLink="/narzedzia/darmowy-generator-favicon-ico" btnTwo="Zobacz inne narzędzia" btnTwoLink="/narzedzia">
          <p className="text-mid">
            Teraz, gdy wiesz jak działa generator, możesz stworzyć favicon dla swojej strony. Jeśli potrzebujesz pomocy przy tworzeniu strony lub identyfikacji wizualnej —{' '}
            <Link href="/kontakt">skontaktuj się z nami</Link>. Zajmujemy się <Link href="/uslugi/strony-internetowe">tworzeniem stron internetowych</Link> i{' '}
            <Link href="/uslugi/projekty-graficzne/projekt-identyfikacji-wizualnej">projektowaniem identyfikacji wizualnej</Link>.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pomocy przy tworzeniu strony?"
        description="Jeśli masz pytania dotyczące ikon, grafiki lub całej strony internetowej — skontaktuj się z nami. Pomożemy Ci stworzyć spójną identyfikację wizualną."
        btnOne="Skontaktuj się z nami"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź nasze usługi"
        btnTwoLink="/uslugi"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
