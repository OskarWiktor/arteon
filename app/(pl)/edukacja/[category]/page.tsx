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
    metaDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
    openGraphDescription: 'Artykuły o pozycjonowaniu i widoczności w Google.',
    heroImage: '/assets/blog/meta-title-i-description-jak-je-napisac/meta-title-i-description-jak-je-napisac.webp',
  },
  widocznosc: {
    heroDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    metaDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    openGraphDescription: 'Artykuły o widoczności Twojej marki w sieci.',
    heroImage: '/assets/blog/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma/jak-zalozyc-i-zoptymalizowac-profil-google-moja-firma.webp',
  },
  tresci: {
    heroDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    metaDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    openGraphDescription: 'Artykuły o tworzeniu treści i copywritingu.',
    heroImage: '/assets/blog/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony/faq-na-stronie-jak-pisac-pytania-ktore-wspieraja-pozycje-strony.webp',
  },
  grafika: {
    heroDescription: 'Poradniki o grafice i projektach wizualnych.',
    metaDescription: 'Poradniki o grafice i projektach wizualnych.',
    openGraphDescription: 'Poradniki o grafice i projektach wizualnych.',
    heroImage: '/assets/blog/jak-dobrac-kolory-do-strony-internetowej/jak-dobrac-kolory-do-strony-internetowej.webp',
  },
  branding: {
    heroDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    metaDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    openGraphDescription: 'Artykuły o brandingu i identyfikacji wizualnej.',
    heroImage: '/assets/blog/jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy/jak-przygotowac-profesjonalna-stopke-mailowa-dla-firmy.webp',
  },
  zdjecia: {
    heroDescription: 'Poradniki o zdjęciach i grafikach.',
    metaDescription: 'Poradniki o zdjęciach i grafikach.',
    openGraphDescription: 'Poradniki o zdjęciach i grafikach.',
    heroImage: '/assets/blog/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp.webp',
  },
  psychologia: {
    heroDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    metaDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    openGraphDescription: 'Artykuły o psychologii decyzji i zachowaniach klientów.',
    heroImage: '/assets/blog/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow/jak-kolorystyka-wplywa-na-decyzje-zakupowe-klientow.webp',
  },
  strony: {
    heroDescription: 'Artykuły o stronach internetowych, ich tworzeniu i optymalizacji.',
    metaDescription: 'Artykuły o stronach internetowych, ich tworzeniu i optymalizacji.',
    openGraphDescription: 'Artykuły o stronach internetowych, ich tworzeniu i optymalizacji.',
    heroImage: '/assets/blog/co-sprawdzic-przed-uruchomieniem-strony/co-sprawdzic-przed-uruchomieniem-strony.webp',
  },
  sklepy: {
    heroDescription: 'Artykuły o sklepach internetowych i e-commerce.',
    metaDescription: 'Artykuły o sklepach internetowych i e-commerce.',
    openGraphDescription: 'Artykuły o sklepach internetowych i e-commerce.',
    heroImage: '/assets/blog/jak-przygotowac-sklep-internetowy-do-pozycjonowania/jak-przygotowac-sklep-internetowy-do-pozycjonowania.webp',
  },
  ux: {
    heroDescription: 'Artykuły o użyteczności i doświadczeniach użytkowników.',
    metaDescription: 'Artykuły o użyteczności i doświadczeniach użytkowników.',
    openGraphDescription: 'Artykuły o użyteczności i doświadczeniach użytkowników.',
    heroImage: '/assets/blog/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie/czym-jest-responsywnosc-strony-i-dlaczego-ma-znaczenie.webp',
  },
  bezpieczenstwo: {
    heroDescription: 'Artykuły o bezpieczeństwie stron i danych w internecie.',
    metaDescription: 'Artykuły o bezpieczeństwie stron i danych w internecie.',
    openGraphDescription: 'Artykuły o bezpieczeństwie stron i danych w internecie.',
    heroImage: '/assets/blog/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje.webp',
  },
  druk: {
    heroDescription: 'Artykuły o materiałach drukowanych i poligrafii.',
    metaDescription: 'Artykuły o materiałach drukowanych i poligrafii.',
    openGraphDescription: 'Artykuły o materiałach drukowanych i poligrafii.',
    heroImage: '/assets/blog/materialy-drukowane-dla-firmy-ktore-zamowic/materialy-drukowane-dla-firmy-ktore-zamowic.webp',
  },
  marketing: {
    heroDescription: 'Artykuły o marketingu i promocji firmy.',
    metaDescription: 'Artykuły o marketingu i promocji firmy.',
    openGraphDescription: 'Artykuły o marketingu i promocji firmy.',
    heroImage: '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
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
    title: `${label} | Arteon`,
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
