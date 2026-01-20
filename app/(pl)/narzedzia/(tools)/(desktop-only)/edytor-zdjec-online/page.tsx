import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import ImageResizeTool from '@/components/sections/tools/ImageResizeTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import FaqPanels from '@/components/ui/FaqPanels';
import AdSense from '@/components/ui/AdSense';

export const metadata: Metadata = {
  title: 'Darmowy edytor zdjęć online - zmiana rozmiaru, kadrowanie, konwersja',
  description:
    'Zmień rozmiar zdjęcia online za darmo. Kadruj do Instagram, Facebook, LinkedIn. Konwertuj JPG na WebP. Twórz okrągłe avatary. Przetwarzanie lokalne w przeglądarce.',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/edytor-zdjec-online') },
  openGraph: {
    title: 'Darmowy edytor zdjęć online - zmiana rozmiaru, kadrowanie, konwersja',
    description:
      'Zmień rozmiar zdjęcia online za darmo. Kadruj do Instagram, Facebook, LinkedIn. Konwertuj JPG na WebP. Twórz okrągłe avatary. Przetwarzanie lokalne w przeglądarce.',
    url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/tools/narzedzia-zmiana-rozmiaru-i-kadrowanie-zdjecia.webp'),
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Darmowy edytor zdjęć online',
  alternateName: [
    'Zmiana rozmiaru zdjęcia online',
    'Kadrowanie zdjęć online',
    'Przycinanie zdjęć online',
    'Rozmiar zdjęcia Instagram',
    'Rozmiar zdjęcia Facebook',
    'Konwerter JPG na WebP',
    'Okrągłe zdjęcie profilowe online',
    'Kompresja zdjęć online',
  ],
  url: toAbsoluteUrl('/narzedzia/edytor-zdjec-online'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageEditor',
  operatingSystem: 'Any',
  description:
    'Darmowy edytor zdjęć online do zmiany rozmiaru, kadrowania i konwersji formatów. Gotowe presety dla Instagram, Facebook i LinkedIn. Tworzenie okrągłych avatarów. Eksport do JPG, PNG i WebP z kontrolą jakości. Przetwarzanie lokalne w przeglądarce.',
  featureList: [
    'Zmiana rozmiaru zdjęcia do dowolnych wymiarów',
    'Kadrowanie z interaktywnym wyborem obszaru',
    'Gotowe formaty dla Instagram (post kwadrat, post pion, story, reels)',
    'Gotowe formaty dla Facebook (post, okładka strony)',
    'Gotowe formaty dla LinkedIn (post, baner profilu)',
    'Gotowe formaty dla WWW (OG image, hero, baner, miniatura)',
    'Kształty kadru: prostokąt, kwadrat, koło (okrągły avatar)',
    'Siatka 3×3 (reguła trójpodziału) z wyborem koloru',
    'Zoom kadru 100-300%',
    'Precyzyjna pozycja kadru (X, Y) z centrowaniem',
    'Konwersja formatów: JPG, PNG, WebP',
    'Kontrola jakości kompresji 60-100%',
    'Przetwarzanie lokalne w przeglądarce',
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

const faqItems = [
  {
    question: 'Czy moje zdjęcia są wysyłane na serwer?',
    answer:
      'Nie. Wszystkie operacje są wykonywane lokalnie w przeglądarce. Żadne pliki nie są wysyłane na serwer - narzędzie działa całkowicie offline po załadowaniu strony. Twoje zdjęcia pozostają prywatne.',
    answerSchemaText: 'Nie. Wszystkie operacje są wykonywane lokalnie w przeglądarce. Pliki nie są wysyłane na serwer.',
  },
  {
    question: 'Jaki format wybrać do eksportu - JPG, PNG czy WebP?',
    answer:
      'JPG to dobry wybór dla zdjęć z wieloma kolorami i gradientami - pliki są małe przy zachowaniu dobrej jakości. PNG zachowuje najwyższą jakość i obsługuje przezroczystość (np. okrągły avatar). WebP łączy zalety obu formatów - małe pliki z wysoką jakością i obsługą przezroczystości.',
    answerSchemaText: 'JPG dla zdjęć, PNG dla przezroczystości, WebP łączy małe pliki z wysoką jakością.',
  },
  {
    question: 'Jak utworzyć okrągłe zdjęcie profilowe?',
    answer:
      'W zakładce Kształty kadru wybierz opcję Koło. Narzędzie automatycznie przełączy format na PNG lub WebP (JPG nie obsługuje przezroczystości). Obszar poza kołem będzie przezroczysty.',
    answerSchemaText: 'Wybierz kształt Koło w zakładce Kształty kadru. Obszar poza kołem będzie przezroczysty.',
  },
  {
    question: 'Jakie są wymiary zdjęcia na Instagram?',
    answer:
      'Instagram obsługuje trzy główne formaty: post kwadratowy (1080×1080 px, proporcje 1:1), post pionowy (1080×1350 px, proporcje 4:5) oraz story/reels (1080×1920 px, proporcje 9:16). Narzędzie ma gotowe presety dla każdego z tych formatów.',
    answerSchemaText: 'Post kwadrat: 1080×1080 px, post pion: 1080×1350 px, story/reels: 1080×1920 px.',
  },
  {
    question: 'Jak działa suwak jakości?',
    answer:
      'Suwak jakości (60-100%) kontroluje stopień kompresji dla formatów JPG i WebP. Wyższa wartość oznacza lepszą jakość obrazu, ale większy rozmiar pliku. Dla większości zastosowań w mediach społecznościowych wartość 70-85% to dobry kompromis między jakością a rozmiarem.',
    answerSchemaText: 'Suwak kontroluje kompresję JPG i WebP. Dla social media optymalna wartość to 70-85%.',
  },
];

export default function ImageEditorPage() {
  return (
    <>
      <Script id="ld-json-image-editor" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Darmowy edytor zdjęć online"
        description="Zmień rozmiar, wykadruj i konwertuj zdjęcia do Instagram, Facebook i LinkedIn. Gotowe presety, okrągłe avatary, eksport do JPG, PNG i WebP. Przetwarzanie lokalne w przeglądarce."
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzia' }}
        third={{ href: '/narzedzia/edytor-zdjec-online', label: 'Darmowy edytor zdjęć online' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="xs" />

        <SectionInfo title="Zmień rozmiar zdjęcia online - kadrowanie, konwersja i kompresja w jednym narzędziu">
          <p className="text-mid">
            Narzędzie do edycji zdjęć online pozwala szybko dopasować obrazy do konkretnych wymiarów. Możesz zmienić rozmiar zdjęcia do dowolnych wymiarów w pikselach, wybrać gotowy format dla mediów
            społecznościowych lub przyciąć fragment obrazu z precyzyjnym kadrowaniem.
          </p>
          <p className="text-mid mt-3">
            Oprócz zmiany rozmiaru narzędzie oferuje konwersję formatów (JPG, PNG, WebP), tworzenie okrągłych avatarów i kontrolę jakości kompresji.
          </p>
        </SectionInfo>

        <AdSense adClient="ca-pub-7845947936813012" adSlot="7551147298" adFormat="fixed" width={728} height={90} className="my-3" />

        <ImageResizeTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak zmienić rozmiar zdjęcia online?"
          description="Edycja zdjęcia zajmuje dosłownie kilka sekund:"
          grid="three"
          items={[
            {
              title: '1. Dodaj zdjęcie',
              description: 'Przeciągnij plik na pole lub kliknij, żeby wybrać zdjęcie z dysku. Obsługiwane formaty: JPG, PNG, WebP.',
            },
            {
              title: '2. Ustaw wymiary',
              description: 'Wpisz wymiary w pikselach lub wybierz gotowy format (Instagram, Facebook, YouTube, LinkedIn, OG image).',
            },
            {
              title: '3. Pobierz',
              description: 'Dopasuj kadr, wybierz format pliku (JPG, PNG, WebP), ustaw jakość i pobierz gotowe zdjęcie.',
            },
          ]}
          btnOne="Zobacz pełną instrukcję"
          btnOneLink="/narzedzia/edytor-zdjec-online/instrukcja"
          btnOneVariant="accent"
        />

        <Gap variant="line" />

        <SectionInfo title="Wymiary zdjęć do Instagram, Facebook i LinkedIn">
          <p className="text-mid mb-4">Narzędzie zawiera gotowe presety z optymalnymi wymiarami dla najpopularniejszych platform:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left text-sm">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Platforma</th>
                  <th className="py-2 pr-4 font-semibold">Format</th>
                  <th className="py-2 pr-4 font-semibold">Wymiary (px)</th>
                  <th className="py-2 font-semibold">Proporcje</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post kwadrat</td>
                  <td className="py-2 pr-4">1080 × 1080</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Post pion</td>
                  <td className="py-2 pr-4">1080 × 1350</td>
                  <td className="py-2">4:5</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Instagram</td>
                  <td className="py-2 pr-4">Story / Reels</td>
                  <td className="py-2 pr-4">1080 × 1920</td>
                  <td className="py-2">9:16</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 × 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Facebook</td>
                  <td className="py-2 pr-4">Okładka strony</td>
                  <td className="py-2 pr-4">820 × 360</td>
                  <td className="py-2">~2.3:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Post</td>
                  <td className="py-2 pr-4">1200 × 1200</td>
                  <td className="py-2">1:1</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">LinkedIn</td>
                  <td className="py-2 pr-4">Baner profilu</td>
                  <td className="py-2 pr-4">1584 × 396</td>
                  <td className="py-2">4:1</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">OG image</td>
                  <td className="py-2 pr-4">Udostępnianie linków</td>
                  <td className="py-2 pr-4">1200 × 630</td>
                  <td className="py-2">~1.9:1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">
            Wymiary w tabeli to zalecane rozmiary dla każdej platformy. Narzędzie automatycznie ustawia te wymiary po wybraniu odpowiedniego presetu.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Konwersja formatów - JPG, PNG czy WebP?">
          <p className="text-mid mb-4">Narzędzie pozwala eksportować zdjęcia w trzech formatach. Każdy ma swoje zastosowanie:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>JPG</strong> - najlepszy dla zdjęć z wieloma kolorami i gradientami. Małe pliki przy zachowaniu dobrej jakości. Nie obsługuje przezroczystości.
            </li>
            <li>
              <strong>PNG</strong> - format bezstratny, zachowuje pełną jakość. Obsługuje przezroczystość (wymagany dla okrągłych avatarów). Większe pliki niż JPG.
            </li>
            <li>
              <strong>WebP</strong> - nowoczesny format łączący zalety JPG i PNG. Małe pliki, dobra jakość, obsługa przezroczystości. Zalecany dla stron WWW.
            </li>
          </ul>
          <p className="text-mid mt-4">
            Dla mediów społecznościowych JPG jest wystarczający. Dla okrągłych avatarów wybierz PNG lub WebP. Dla stron internetowych WebP zapewnia najlepszy stosunek jakości do rozmiaru pliku.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Okrągłe zdjęcie profilowe - jak utworzyć?">
          <p className="text-mid">
            Narzędzie pozwala tworzyć okrągłe avatary z przezroczystym tłem. W zakładce <strong>Kształty kadru</strong> wybierz opcję <strong>Koło</strong>. Narzędzie automatycznie przełączy format na
            PNG lub WebP, ponieważ JPG nie obsługuje przezroczystości.
          </p>
          <p className="text-mid mt-3">
            Na podglądzie zobaczysz okrągły obszar kadru. Możesz przesuwać go po zdjęciu, żeby wybrać najlepszy fragment (np. twarz). Po pobraniu plik będzie miał przezroczyste tło poza okręgiem.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Co oferuje edytor zdjęć online?">
          <p className="text-mid mb-4">Narzędzie łączy kilka funkcji w jednym miejscu:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Gotowe presety wymiarów</strong> - Instagram (post, story, reels), Facebook (post, okładka), LinkedIn (post, baner), OG image i formaty WWW.
            </li>
            <li>
              <strong>Dowolne wymiary w pikselach</strong> - możesz wpisać własne wartości z opcją zachowania proporcji.
            </li>
            <li>
              <strong>Okrągłe avatary</strong> - kształt koła z przezroczystym tłem (eksport do PNG lub WebP).
            </li>
            <li>
              <strong>Konwersja formatów</strong> - eksport do JPG, PNG lub WebP z regulacją jakości kompresji (60-100%).
            </li>
            <li>
              <strong>Siatka trójpodziału</strong> - pomaga ustawić kompozycję kadru zgodnie z regułą 3×3.
            </li>
            <li>
              <strong>Zoom i pozycja kadru</strong> - precyzyjna kontrola nad wycinanym fragmentem zdjęcia.
            </li>
            <li>
              <strong>Przetwarzanie lokalne</strong> - operacje wykonywane są w przeglądarce, bez przesyłania plików.
            </li>
          </ul>
        </SectionInfo>

        <Gap variant="line" />

        <FaqPanels
          title="Najczęstsze pytania o edytor zdjęć online"
          items={faqItems}
          openByDefault={1}
          pageUrl={toAbsoluteUrl('/narzedzia/edytor-zdjec-online')}
        />

        <Gap size="sm" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz profesjonalnych grafik do mediów społecznościowych?"
        description="Tworzymy spójne materiały wizualne dopasowane do Twojej marki - od zdjęć produktowych po szablony postów na Instagram i Facebook."
        btnOne="Umów rozmowę"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź szablony postów"
        btnTwoLink="/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
