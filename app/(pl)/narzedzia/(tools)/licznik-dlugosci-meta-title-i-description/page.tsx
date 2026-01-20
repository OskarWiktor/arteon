import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';
import type { Metadata } from 'next';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import CTABanner from '@/components/sections/CTABanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Darmowy licznik meta title i description online - sprawdź długość w pikselach',
  description: 'Darmowy licznik meta title i meta description online po polsku. Sprawdź długość w znakach i pikselach, zobacz podgląd snippet w Google. Bez rejestracji i bez limitu.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description') },
  openGraph: {
    title: 'Darmowy licznik meta title i description online - sprawdź długość w pikselach',
    description: 'Darmowy licznik meta title i meta description online po polsku. Sprawdź długość w znakach i pikselach, zobacz podgląd snippet w Google. Bez rejestracji i bez limitu.',
    url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy licznik meta title i description online',
  alternateName: [
    'Licznik meta title i meta description z podglądem Google',
    'SERP preview tool po polsku',
    'Sprawdź długość tytułu SEO w pikselach',
    'Meta tag length checker',
    'Podgląd snippet Google online',
    'Ile znaków meta description',
    'Optymalna długość title i description',
    'Narzędzie SEO do sprawdzania meta tagów',
  ],
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik długości meta title i meta description po polsku. Sprawdza liczbę znaków, słów, szerokość w pikselach i pokazuje podgląd tytułu oraz opisu w wynikach Google - bez limitów i bez logowania.',
  featureList: [
    'Licznik znaków dla meta title',
    'Licznik znaków dla meta description',
    'Pomiar szerokości w pikselach (zgodny z Google)',
    'Licznik słów w tytule i opisie',
    'Podgląd wyglądu w wynikach wyszukiwania Google',
    'Kolorowa ocena długości (za krótki / optymalny / za długi)',
    'Ostrzeżenie przed ucięciem tytułu lub opisu',
    'Zalecenia dotyczące optymalnej długości',
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
      <Script id="ld-json-meta-length-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Sprawdź długość tytułu i opisu strony w Google"
        description="Wpisz tytuł i opis strony, a narzędzie obliczy liczbę znaków, słów, szerokość w pikselach i pokaże, czy długość jest zgodna z zasadami SEO"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/licznik-dlugosci-meta-title-i-description`, label: 'Sprawdź długość tytułu i opisu strony w Google' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Czym są meta title i meta description?">
          <p className="text-mid">
            Meta title i meta description to dwa krótkie teksty, które opisują zawartość strony internetowej. Nie widać ich bezpośrednio na stronie, ale pojawiają się w wynikach wyszukiwania Google
            jako tytuł (niebieski link) i opis (szary tekst pod tytułem) - razem tworzą tzw. snippet.
          </p>
          <p className="text-mid mt-3">
            Dobrze napisane meta tagi działają jak reklama strony w wynikach wyszukiwania - przyciągają uwagę i zwiększają szansę, że użytkownik kliknie właśnie w Twój link. Źle napisane lub obcięte
            przez Google mogą zniechęcić, nawet jeśli strona jest świetna.
          </p>
        </SectionInfo>

        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <MetaTitleDescriptionTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika meta title i description?"
          description="Sprawdzenie długości meta tagów zajmuje kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Wpisz meta title',
              description: 'Wklej lub wpisz tytuł strony. Narzędzie pokaże liczbę znaków, słów i szerokość w pikselach.',
            },
            {
              title: '2. Wpisz meta description',
              description: 'Wklej lub wpisz opis strony. Zobaczysz kolorowy status (za krótki, optymalny, za długi).',
            },
            {
              title: '3. Sprawdź podgląd snippet',
              description: 'Zobacz, jak tytuł i opis wyglądają w wynikach wyszukiwania Google.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Ile znaków powinien mieć meta title i description?">
          <p className="text-mid mb-4">
            Google obcina tytuły i opisy, które są zbyt długie. Poniżej znajdziesz zalecane zakresy, które zmniejszają ryzyko obcięcia tekstu w wynikach wyszukiwania.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Element</th>
                  <th className="py-2 pr-4 font-semibold">Znaki</th>
                  <th className="py-2 pr-4 font-semibold">Piksele</th>
                  <th className="py-2 font-semibold">Uwagi</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50-60 znaków</td>
                  <td className="py-2 pr-4 whitespace-nowrap">do ~580 px</td>
                  <td className="py-2 text-sm text-neutral-600">Najważniejsze słowa umieść na początku. Nazwa marki na końcu.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120-160 znaków</td>
                  <td className="py-2 pr-4 whitespace-nowrap">do ~920 px</td>
                  <td className="py-2 text-sm text-neutral-600">Zmieścisz 2-3 krótkie zdania. Zakończ wezwaniem do działania.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">
            To wartości orientacyjne - Google nie publikuje ścisłych limitów i może je zmieniać w zależności od urządzenia i kontekstu zapytania.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego szerokość w pikselach jest ważniejsza niż liczba znaków?">
          <p className="text-mid">
            Różne litery mają różną szerokość. Porównaj &quot;iiii&quot; i &quot;WWWW&quot; - obie mają 4 znaki, ale szerokość wizualna jest zupełnie inna. Google mierzy szerokość tekstu w pikselach, nie
            w znakach.
          </p>
          <p className="text-mid mt-3">
            Dlatego tytuł z wieloma wąskimi literami (i, l, t, f) może być dłuższy niż tytuł z szerokimi literami (W, M, O), mimo tej samej liczby znaków. Narzędzie pokazuje obie wartości: liczbę znaków
            (łatwiejszą do ogarnięcia) i szerokość w pikselach (dokładniejszą dla Google).
          </p>
          <p className="text-mid mt-3">
            Szczegółowe informacje o pomiarze szerokości i interpretacji wyników znajdziesz w{' '}
            <Link href="/narzedzia/licznik-dlugosci-meta-title-i-description/instrukcja" className="inline-link">
              pełnej instrukcji licznika
            </Link>
            .
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dla kogo jest licznik meta tagów SEO?">
          <p className="text-mid mb-4">Licznik meta tagów przydaje się każdemu, kto tworzy treści na strony internetowe:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Właściciele stron i sklepów</strong> - sprawdzają, czy tytuły i opisy nie są obcinane w wynikach Google przed publikacją nowej strony lub produktu.
            </li>
            <li>
              <strong>Specjaliści SEO</strong> - optymalizują meta tagi dla klientów, testują różne warianty tytułów i sprawdzają podgląd w wynikach wyszukiwania.
            </li>
            <li>
              <strong>Copywriterzy</strong> - piszą tytuły i opisy, które mieszczą się w limitach i zachęcają do kliknięcia.
            </li>
            <li>
              <strong>Marketerzy</strong> - tworzą meta tagi dla kampanii i landing page, optymalizując CTR w wynikach organicznych.
            </li>
            <li>
              <strong>Deweloperzy</strong> - weryfikują meta tagi przed wdrożeniem strony na produkcję.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Dlaczego wybrać nasz licznik meta title i description?">
          <p className="text-mid mb-4">Nasz licznik meta tagów wyróżnia się na tle konkurencji:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Pomiar w pikselach</strong> - nie tylko zliczamy znaki, ale mierzymy rzeczywistą szerokość tekstu tak, jak robi to Google.
            </li>
            <li>
              <strong>Podgląd w Google</strong> - widzisz, jak tytuł i opis wyglądają w wynikach wyszukiwania, zanim opublikujesz stronę.
            </li>
            <li>
              <strong>Kolorowa ocena</strong> - od razu wiesz, czy tekst jest za krótki, optymalny czy za długi.
            </li>
            <li>
              <strong>Po polsku</strong> - cały interfejs w języku polskim. Nie musisz tłumaczyć opcji z angielskiego.
            </li>
            <li>
              <strong>Darmowy i bez limitu</strong> - korzystasz bez opłat i bez ograniczeń liczby sprawdzeń.
            </li>
            <li>
              <strong>Bez rejestracji</strong> - nie musisz zakładać konta. Otwierasz stronę i od razu testujesz.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description')}
          title="Najczęstsze pytania o meta tagi i ich długość"
          items={[
            {
              question: 'Dlaczego narzędzie pokazuje szerokość w pikselach, a nie tylko liczbę znaków?',
              answer:
                'Różne litery mają różną szerokość. Litera "i" zajmuje znacznie mniej miejsca niż "m" czy "W". Google obcina tytuły i opisy na podstawie szerokości w pikselach, a nie liczby znaków. Dlatego tekst z wieloma wąskimi literami może być dłuższy niż tekst z szerokimi literami, mimo tej samej liczby znaków.',
            },
            {
              question: 'Czy Google zawsze pokazuje mój meta title i description?',
              answer:
                'Nie zawsze. Google może zmienić wyświetlany tytuł lub opis, jeśli uzna, że lepiej pasują do zapytania użytkownika. Często pobiera fragmenty z treści strony. Dobrze napisane meta tagi zwiększają szansę, że Google użyje właśnie ich, ale nie ma 100% gwarancji.',
            },
            {
              question: 'Jaka jest optymalna długość meta title i meta description?',
              answer:
                'Meta title powinien mieć około 50-60 znaków (do ~580 pikseli szerokości). Meta description najlepiej sprawdza się w zakresie 120-160 znaków (do ~920 pikseli). To wartości orientacyjne - Google nie podaje ścisłych limitów i może je zmieniać.',
            },
            {
              question: 'Czy meta description wpływa na pozycję strony w Google?',
              answer:
                'Meta description nie jest bezpośrednim czynnikiem rankingowym. Google nie bierze go pod uwagę przy ustalaniu pozycji strony. Jednak dobry opis zwiększa klikalność (CTR) w wynikach wyszukiwania, a wyższy CTR może pośrednio wpłynąć na pozycję.',
            },
            {
              question: 'Co zrobić, gdy mój tytuł jest za długi?',
              answer:
                'Skróć tytuł, zachowując najważniejsze słowa na początku. Usuń zbędne słowa (np. "najlepszy", "profesjonalny") i skup się na konkretnej wartości dla użytkownika. Jeśli dodajesz nazwę marki, umieść ją na końcu po separatorze.',
            },
          ]}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz kompleksowej optymalizacji meta tagów i SEO?"
        description="Meta tagi to początek. Zajmujemy się pełną optymalizacją SEO - od meta tagów, przez treści, po strukturę strony i widoczność w Google."
        btnOne="Umów rozmowę o SEO"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę optymalizacji SEO"
        btnTwoLink="/uslugi/marketing/optymalizacja-seo"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
