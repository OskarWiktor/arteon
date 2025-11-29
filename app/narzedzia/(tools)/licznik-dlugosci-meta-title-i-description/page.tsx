import HeroBanner from '@/components/sections/HeroBanner';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import Wrapper from '@/components/ui/Wrapper';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'Licznik długości meta title i description',
  description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
  alternates: { canonical: '/narzedzia/licznik-dlugosci-meta-title-i-description' },
  openGraph: {
    title: 'Licznik długości meta title i description',
    description: 'Sprawdź liczbę znaków, słów, szerokość w pikselach oraz ocenę długości meta title i meta description dla swojej strony. Darmowy licznik bez limitu',
    url: 'https://www.arteonagency.pl/narzedzia/licznik-dlugosci-meta-title-i-description',
    type: 'website',
    images: [
      {
        url: 'https://www.arteonagency.pl/assets/arteon-logo-on-mockup.webp',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'Licznik długości meta title i meta description',
  alternateName: 'Licznik meta title i meta description z podglądem Google',
  url: 'https://www.arteonagency.pl/narzedzia/licznik-dlugosci-meta-title-i-description',
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
    url: 'https://www.arteonagency.pl',
  },
};

export default function Page() {
  return (
    <>
      <Script id="ld-json-meta-length-tool" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <HeroBanner
        title="Licznik długość meta title i description"
        description="Wpisz tytuł i opis strony, a narzędzie obliczy liczbę znaków, słów, szerokość w pikselach i pokaże, czy długość jest zgodna z zasadami SEO"
        overlay="black"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
      />

      <Wrapper>
        <Gap size="sm" />

        <MetaTitleDescriptionTool />

        <Gap size="xs" />

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

          <p className="text-[#5e5e5e]">
            Pamiętaj, że Google może w niektórych sytuacjach zamienić Twój opis na fragment treści ze strony, dlatego ważne informacje powinny pojawić się również w samej zawartości strony.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionInfo
          title="Potrzebujesz pełnej optymalizacji SEO dla swojej witryny?"
          description="Możemy zająć się tym za Ciebie. Prześlij nam link do swojej strony a my powiemy co zrobić aby klienci mogli Cie łatwiej znaleźć"
          btnOne="Umów rozmowę o SEO"
          btnOneLink="/kontakt"
          btnTwo="Sprawdź ofertę pozycjonowania"
          btnTwoLink="/uslugi/marketing/pozycjonowanie-stron"
        />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
