import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import HeroBanner from '@/components/sections/HeroBanner';
import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import ArticlesList from '@/components/sections/blog/ArticlesList';
import FilterBar from '@/components/sections/blog/FilterBar';
import { getAllArticles, getCategoriesWithCount, getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';

const siteUrl = 'https://www.arteonagency.pl';

const DEFAULT_META_DESCRIPTION = (label: string) =>
  `Darmowe poradniki i wiedza z zakresu: ${label}. Konkretne wskazówki, przykłady z naszych realizacji i najlepsze praktyki.`;

const DEFAULT_OPEN_GRAPH_DESCRIPTION = (label: string) => `Artykuły: ${label}.`;

const DEFAULT_HERO_DESCRIPTION = (label: string) => `Poradniki i wiedza na temat: ${label}. Sprawdź nasze artykuły`;

const CATEGORY_CONTENT_BY_SLUG: Record<
  string,
  {
    heroDescription: string;
    metaDescription: string;
    openGraphDescription: string;
  }
> = {
  seo: {
    heroDescription:
      'Chcesz, żeby klienci mogli znaleźć Twoją stronę w Google? Tutaj znajdziesz proste poradniki o SEO: od podstaw, przez błędy, po konkretne kroki.',
    metaDescription:
      'Proste poradniki o SEO: jak zwiększyć widoczność strony w Google, jakie błędy naprawić i co zrobić krok po kroku. Praktyczne przykłady i wskazówki.',
    openGraphDescription: 'Poradniki o SEO: widoczność w Google, błędy i konkretne kroki.',
  },
  widocznosc: {
    heroDescription:
      'Widoczność to nie magia. To suma małych rzeczy: techniki, treści i regularności. W tej kategorii zbieramy poradniki, które pomagają rosnąć w Google.',
    metaDescription:
      'Artykuły o widoczności w Google: co realnie wpływa na wyniki, jak planować działania i jak unikać typowych błędów. Prosto, bez żargonu.',
    openGraphDescription: 'Widoczność w Google: co działa, jak planować i czego unikać.',
  },
  tresci: {
    heroDescription:
      'Treści na stronie mają odpowiadać na pytania klienta zanim je zada. Tutaj pokazujemy, jak pisać jasno i tak, żeby tekst wspierał też SEO.',
    metaDescription:
      'Poradniki o treściach na stronę: jak pisać prosto, jak budować strukturę i jak łączyć copy z SEO. Konkretne zasady i przykłady.',
    openGraphDescription: 'Treści na stronę: prosto, konkretnie i z myślą o SEO.',
  },
  design: {
    heroDescription:
      'Design to nie ozdoba. To sposób, w jaki strona prowadzi użytkownika do decyzji. W tych artykułach pokazujemy, jak projektować prosto i czytelnie.',
    metaDescription:
      'Artykuły o web designie: kolory, układ, typografia i UX w prostym języku. Zobacz, jak projekt wpływa na zaufanie i konwersję.',
    openGraphDescription: 'Web design: kolory, typografia i UX, które pomagają sprzedawać.',
  },
  branding: {
    heroDescription:
      'Branding to spójny wygląd firmy: logo, kolory i zasady użycia. W tych poradnikach tłumaczymy, jak budować rozpoznawalność bez korpo-języka.',
    metaDescription:
      'Artykuły o brandingu: identyfikacja wizualna, logo, kolory i spójność marki. Proste wyjaśnienia, przykłady i praktyczne wskazówki.',
    openGraphDescription: 'Branding: spójność marki, logo i kolory bez lania wody.',
  },
  zdjecia: {
    heroDescription:
      'Dobre zdjęcia sprzedają, ale zbyt ciężkie spowalniają stronę. Tutaj znajdziesz poradniki o formatach, kompresji i przygotowaniu grafik.',
    metaDescription:
      'Poradniki o zdjęciach na stronę: formaty (JPG/PNG/WebP), rozmiary i kompresja. Jak mieć ładne grafiki bez spowalniania strony.',
    openGraphDescription: 'Zdjęcia na stronę: formaty, rozmiary i kompresja bez stresu.',
  },
  psychologia: {
    heroDescription:
      'Dlaczego ktoś klika „Kup”, a ktoś wychodzi po 5 sekundach? Tu rozkładamy na czynniki pierwsze psychologię decyzji i to, jak wpływa na stronę.',
    metaDescription:
      'Artykuły o psychologii w marketingu i UX: jak kolory, zaufanie i nawyki użytkownika wpływają na decyzje. Proste przykłady i wskazówki.',
    openGraphDescription: 'Psychologia decyzji: jak UX i komunikacja wpływają na wybory.',
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

  return {
    title: `Edukacja: ${label} | Arteon`,
    description,
    alternates: { canonical: `https://www.arteonagency.pl/edukacja/${params.category}` },
    openGraph: { title: `Edukacja: ${label}`, description: openGraphDescription, url, type: 'website' },
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

  return (
    <>
      <HeroBanner
        title={`Edukacja: ${label}`}
        description={heroDescription}
        variant="center"
        backgroundImage="/assets/bg/abstract-bg13.webp"
        overlay="black"
      />
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
            name: `Edukacja: ${label}`,
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
