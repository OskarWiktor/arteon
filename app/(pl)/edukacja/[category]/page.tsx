import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';
import { toAbsoluteUrl, siteUrl } from '@/lib/url';

const DEFAULT_META_DESCRIPTION = (label: string) => `Artykuły i poradniki: ${label}.`;

const DEFAULT_OPEN_GRAPH_DESCRIPTION = (label: string) => `Artykuły: ${label}.`;

const DEFAULT_HERO_DESCRIPTION = (label: string) => `Artykuły i poradniki: ${label}.`;

const CATEGORY_CONTENT_BY_SLUG: Record<
  string,
  {
    heroDescription: string;
    metaDescription: string;
    openGraphDescription: string;
    heroImage: string;
  }
> = {
  seo: {
    heroDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
    metaDescription: 'Dowiedz się, jak poprawić widoczność strony w Google. Praktyczne artykuły o SEO, pozycjonowaniu i optymalizacji .',
    openGraphDescription: 'Praktyczne artykuły o SEO, pozycjonowaniu i optymalizacji stron w Google.',
    heroImage: '/assets/blog/meta-title-i-description-jak-je-napisac/meta-title-i-description-jak-je-napisac.webp',
  },
  widocznosc: {
    heroDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    metaDescription: 'Sprawdź, jak zwiększyć widoczność firmy w internecie. Artykuły o Google Moja Firma, katalogach i obecności marki online  .',
    openGraphDescription: 'Artykuły o widoczności firmy w internecie — Google Moja Firma, katalogi i obecność online.',
    heroImage: '/assets/blog/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma.webp',
  },
  tresci: {
    heroDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    metaDescription: 'Zobacz, jak pisać treści, które przyciągają klientów i wspierają SEO. Poradniki o copywritingu, nagłówkach i strukturze tekstów na stronę.',
    openGraphDescription: 'Poradniki o copywritingu, nagłówkach i strukturze tekstów na stronę internetową.',
    heroImage: '/assets/blog/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony.webp',
  },
  grafika: {
    heroDescription: 'Poradniki o grafice i projektach wizualnych.',
    metaDescription: 'Dowiedz się, jak dobierać kolory, tworzyć spójne projekty i przygotowywać grafiki dla firmy. Praktyczne poradniki o grafice i designie.',
    openGraphDescription: 'Praktyczne poradniki o grafice, kolorach i projektach wizualnych dla firm.',
    heroImage: '/assets/blog/jak-dobrac-kolory-do-strony-internetowej/jak-dobrac-kolory-do-strony-internetowej.webp',
  },
  branding: {
    heroDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    metaDescription: 'Sprawdź, jak budować rozpoznawalną markę. Artykuły o logo, identyfikacji wizualnej i spójnym wizerunku firmy .',
    openGraphDescription: 'Artykuły o logo, identyfikacji wizualnej i budowaniu rozpoznawalnej marki.',
    heroImage: '/assets/blog/jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy/jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy.webp',
  },
  zdjecia: {
    heroDescription: 'Poradniki o zdjęciach i grafikach.',
    metaDescription: 'Zobacz, jak optymalizować zdjęcia na stronę, dobierać formaty i przygotowywać grafiki. Praktyczne poradniki o obrazach w internecie.',
    openGraphDescription: 'Praktyczne poradniki o optymalizacji zdjęć i grafik na stronę internetową.',
    heroImage: '/assets/blog/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp.webp',
  },
  psychologia: {
    heroDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    metaDescription: 'Dowiedz się, jak kolory, układ strony i treści wpływają na decyzje klientów. Artykuły o psychologii sprzedaży i zachowaniach użytkowników.',
    openGraphDescription: 'Artykuły o psychologii sprzedaży, decyzjach zakupowych i zachowaniach użytkowników.',
    heroImage: '/assets/blog/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow.webp',
  },
  strony: {
    heroDescription: 'Artykuły o stronach internetowych, ich tworzeniu i optymalizacji.',
    metaDescription: 'Sprawdź, co powinna zawierać dobra strona internetowa. Artykuły o tworzeniu, optymalizacji i utrzymaniu stron .',
    openGraphDescription: 'Artykuły o tworzeniu, optymalizacji i utrzymaniu stron internetowych.',
    heroImage: '/assets/blog/co-sprawdzic-przed-uruchomieniem-strony/co-sprawdzic-przed-uruchomieniem-strony.webp',
  },
  sklepy: {
    heroDescription: 'Artykuły o sklepach internetowych i e-commerce.',
    metaDescription: 'Dowiedz się, jak prowadzić skuteczny sklep internetowy. Artykuły o e-commerce, płatnościach, dostawach i optymalizacji sprzedaży online.',
    openGraphDescription: 'Artykuły o e-commerce, płatnościach i optymalizacji sklepów internetowych.',
    heroImage: '/assets/blog/jak-przygotowac-sklep-internetowy-do-pozycjonowania/jak-przygotowac-sklep-internetowy-do-pozycjonowania.webp',
  },
  ux: {
    heroDescription: 'Artykuły o użyteczności i doświadczeniach użytkowników.',
    metaDescription: 'Sprawdź, jak projektować strony wygodne dla użytkowników. Artykuły o UX, responsywności i dobrych praktykach projektowania interfejsów.',
    openGraphDescription: 'Artykuły o UX, responsywności i projektowaniu wygodnych interfejsów.',
    heroImage: '/assets/blog/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie.webp',
  },
  bezpieczenstwo: {
    heroDescription: 'Artykuły o bezpieczeństwie stron i danych w internecie.',
    metaDescription: 'Dowiedz się, jak chronić stronę przed atakami i wyciekiem danych. Artykuły o SSL, aktualizacjach i bezpieczeństwie stron internetowych.',
    openGraphDescription: 'Artykuły o SSL, aktualizacjach i bezpieczeństwie stron internetowych.',
    heroImage: '/assets/blog/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje.webp',
  },
  druk: {
    heroDescription: 'Artykuły o materiałach drukowanych i poligrafii.',
    metaDescription: 'Sprawdź, jakie materiały drukowane przydadzą się Twojej firmie. Artykuły o wizytówkach, ulotkach, katalogach i przygotowaniu do druku.',
    openGraphDescription: 'Artykuły o wizytówkach, ulotkach, katalogach i przygotowaniu materiałów do druku.',
    heroImage: '/assets/blog/materialy-drukowane-dla-firmy-ktore-zamowic/materialy-drukowane-dla-firmy-ktore-zamowic.webp',
  },
  marketing: {
    heroDescription: 'Artykuły o marketingu i promocji firmy.',
    metaDescription: 'Dowiedz się, jak skutecznie promować firmę w internecie. Artykuły o marketingu, reklamie i strategiach pozyskiwania klientów online.',
    openGraphDescription: 'Artykuły o marketingu, reklamie i strategiach pozyskiwania klientów online.',
    heroImage: '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
  },
  dostepnosc: {
    heroDescription: 'Artykuły i poradniki o dostępności stron internetowych.',
    metaDescription: 'Sprawdź, jak tworzyć strony dostępne dla wszystkich użytkowników. Artykuły o WCAG, kontrastach, nawigacji klawiaturą i dostępności cyfrowej.',
    openGraphDescription: 'Artykuły o WCAG, kontrastach i dostępności stron internetowych dla wszystkich.',
    heroImage: '/assets/blog/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie.webp',
  },
};

export const dynamicParams = false;

export async function generateStaticParams() {
  const cats = getCategoriesWithCount();
  return cats.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: { params: { category: string } }): Promise<Metadata> {
  const cats = getCategoriesWithCount();
  const current = cats.find((c) => c.slug === params.category);
  const label = current?.label || params.category.replace(/-/g, ' ');
  const url = `${siteUrl}/edukacja/${params.category}`;

  const content = CATEGORY_CONTENT_BY_SLUG[params.category];
  const description = content?.metaDescription ?? DEFAULT_META_DESCRIPTION(label);
  const openGraphDescription = content?.openGraphDescription ?? DEFAULT_OPEN_GRAPH_DESCRIPTION(label);
  const ogImage = content?.heroImage ? toAbsoluteUrl(content.heroImage) : toAbsoluteUrl('/assets/ogien.webp');

  return {
    title: `${label} - Arteon`,
    description,
    alternates: { canonical: toAbsoluteUrl(`/edukacja/${params.category}`) },
    openGraph: {
      title: label,
      description: openGraphDescription,
      url,
      type: 'website',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${label} - Arteon`,
        },
      ],
    },
  };
}

export default function EdukacjaCategoryPage({ params }: { params: { category: string } }) {
  const cats = getCategoriesWithCount();
  const hasAny = getAllArticles().some((a) => {
    const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
    return allCats.some((c) => slugify(c) === params.category);
  });

  if (!hasAny) {
    notFound();
  }

  const label = cats.find((c) => c.slug === params.category)?.label ?? params.category.replace(/-/g, ' ');

  const content = CATEGORY_CONTENT_BY_SLUG[params.category];
  const heroDescription = content?.heroDescription ?? DEFAULT_HERO_DESCRIPTION(label);
  const heroImage = content?.heroImage ?? '/assets/bg/abstract-bg13.webp';

  return (
    <>
      <HeroBanner title={label} description={heroDescription} variant="center" backgroundImage={heroImage} overlay="black" />
      <Wrapper>
        <Gap size="sm" />
        <FilterBar cats={cats} active={params.category} />
        <ArticlesList filterCategorySlug={params.category} />
        <Gap size="sm" />
      </Wrapper>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: label,
            mainEntity: {
              '@type': 'ItemList',
              itemListElement: getAllArticles()
                .filter((a) => {
                  const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
                  return allCats.some((c) => slugify(c) === params.category);
                })
                .map((a, i) => ({
                  '@type': 'ListItem',
                  position: i + 1,
                  url: `${siteUrl}/edukacja/${getPrimaryCategorySlug(a)}/${a.slug}`,
                  name: a.title,
                })),
            },
          }),
        }}
      />
    </>
  );
}
