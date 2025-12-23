import Breadcrumbs from '@/components/sections/BreadCrumbs';
import CTABanner from '@/components/sections/CTABanner';
import HeroBanner from '@/components/sections/HeroBanner';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Licznik długości meta title i description',
  description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
  alternates: { canonical: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description') },
  openGraph: {
    title: 'Licznik długości meta title i description',
    description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
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
  '@type': 'WebApplication',
  name: 'Licznik długości meta title i meta description',
  alternateName: 'Licznik meta title i meta description z podglądem Google',
  url: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'),
  applicationCategory: 'SEOApplication',
  operatingSystem: 'Any',
  description:
    'Darmowy licznik długości meta title i meta description po polsku. Sprawdza liczbę znaków, słów, szerokość w pikselach i pokazuje podgląd tytułu oraz opisu w wynikach Google - bez limitów i bez logowania.',
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
        title="Licznik długości meta title i description"
        description="Wpisz tytuł i opis strony, a narzędzie obliczy liczbę znaków, słów, szerokość w pikselach i pokaże, czy długość jest zgodna z zasadami SEO"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Breadcrumbs
        second={{ href: '/narzedzia', label: 'Narzędzie' }}
        third={{ href: `/narzedzia/licznik-dlugosci-meta-title-i-description`, label: 'Licznik długości meta title i description' }}
        includeJsonLd
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionInfo title="Czym są meta title i meta description?">
          <p className="text-mid">
            Meta title i meta description to teksty, które pojawiają się w wynikach wyszukiwania Google. Title to niebieski nagłówek, a description to krótki opis pod nim. Dobre meta tagi zwiększają
            szansę, że ktoś kliknie właśnie w Twój link.
          </p>
          <p className="text-mid mt-3">
            <strong>Dlaczego długość ma znaczenie?</strong> Google obcina zbyt długie tytuły i opisy. Jeśli Twój tekst jest za długi, użytkownik zobaczy tylko jego fragment zakończony wielokropkiem —
            i może nie zrozumieć, o czym jest strona.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <MetaTitleDescriptionTool />

        <Gap size="sm" />

        <SectionSteps
          title="Jak korzystać z licznika?"
          description="Sprawdzenie długości meta tagów zajmuje dosłownie chwilę:"
          grid="four"
          items={[
            {
              title: '1. Wpisz tytuł',
              description: 'Wklej lub wpisz swój meta title. Narzędzie od razu pokaże liczbę znaków i szerokość w pikselach.',
            },
            {
              title: '2. Wpisz opis',
              description: 'Dodaj meta description. Zobaczysz, ile znaków zostało do optymalnego limitu.',
            },
            {
              title: '3. Sprawdź podgląd',
              description: 'Zobacz, jak Twoja strona będzie wyglądać w wynikach Google — dokładnie tak, jak zobaczy ją użytkownik.',
            },
            {
              title: '4. Popraw i skopiuj',
              description: 'Dostosuj tekst do zaleceń i skopiuj gotowe meta tagi do swojej strony.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Jak pisać dobre meta title i meta description?">
          <p className="mb-6">
            Meta title i meta description nie są bezpośrednim czynnikiem rankingowym, ale mocno wpływają na to, ile osób kliknie link do Twojej strony w Google. W praktyce meta title i description
            działają jak krótka, tekstowa reklama Twojej strony. Dobry nagłówek i opis meta pokazuje konkretną wartość, płynącą z odwiedzenia Twojej witryny.
          </p>

          <h3 className="h6 mb-2">Meta title - praktyczne wskazówki:</h3>
          <ul className="mb-6 list-disc pl-5">
            <li>
              celuj w długość ok. <strong>50-60 znaków</strong> i nie przekraczaj <strong>~600 pikseli</strong> szerokości,
            </li>
            <li>umieść najważniejsze słowo kluczowe na początku tytułu,</li>
            <li>dodaj nazwę marki, jeśli masz na to miejsce - szczególnie na stronach ofertowych i sprzedażowych,</li>
            <li>unikaj upychania kilku podobnych fraz jedna po drugiej - użytkownik ma szybko zrozumieć, o co chodzi na stronie.</li>
          </ul>

          <h3 className="h6 mb-2">Meta description - praktyczne wskazówki:</h3>
          <ul className="mb-6 list-disc pl-5">
            <li>traktuj opis jak krótkie zaproszenie: pokaż problem, rozwiązanie i korzyści z wejścia na stronę,</li>
            <li>
              dobrze sprawdza się zakres ok. <strong>120-160 znaków</strong>, czyli 2-3 krótkie zdania,
            </li>
            <li>dodaj naturalnie 1-2 frazy kluczowe - Google podkreśli je w tekście, co dodatkowo przyciągnie uwagę,</li>
            <li>zakończ delikatnym wezwaniem do działania, na przykład „Sprawdź ofertę”, „Umów konsultację” albo „Zobacz szczegóły”,</li>
          </ul>

          <ul className="ml-6 list-disc">
            <li>trzymaj się 50-60 znaków dla title i 140-160 dla description (to orientacyjne widełki),</li>
            <li>dodaj słowo kluczowe i nazwę marki,</li>
            <li>zakończ delikatnym wezwaniem do działania, na przykład „Sprawdź ofertę”, „Umów konsultację” albo „Zobacz szczegóły”,</li>
          </ul>

          <p className="text-light">
            Pamiętaj, że Google może w niektórych sytuacjach zamienić Twój opis na fragment treści ze strony, dlatego ważne informacje powinny pojawić się również w samej zawartości strony.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <ToolsCarousel title="Sprawdź inne narzędzia" />

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Potrzebujesz pełnej optymalizacji SEO dla swojej witryny?"
        description="Możemy zająć się tym za Ciebie. Prześlij nam link do swojej strony, a my powiemy, co zrobić, aby klienci mogli Cię łatwiej znaleźć"
        btnOne="Umów rozmowę o SEO"
        btnOneLink="/kontakt"
        btnTwo="Sprawdź ofertę pozycjonowania"
        btnTwoLink="/uslugi/marketing/pozycjonowanie-stron"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
