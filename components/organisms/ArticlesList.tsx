import {
  getAllArticlePreviews,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';
import CarouselCard from './carousels/CarouselCard';

const articles = getAllArticlePreviews();

/**
 * Render a responsive grid of article cards, optionally filtered by a category slug.
 *
 * Uses the shared {@link CarouselCard} `article` variant so the listing on
 * `/edukacja` matches the article cards shown in carousels — one card component,
 * no duplicated markup.
 *
 * @param filterCategorySlug - Optional slug used to show only articles whose primary category matches this slug
 * @returns A section element containing a responsive grid of article cards.
 */
export default function ArticlesList({
  filterCategorySlug,
}: {
  filterCategorySlug?: string;
}) {
  const items = filterCategorySlug
    ? articles.filter(article => {
        return (
          typeof article.primaryCategory === 'string' &&
          slugify(article.primaryCategory) === filterCategorySlug
        );
      })
    : articles;

  return (
    <section
      aria-label='Lista artykułów'
      className='grid auto-rows-max grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'
    >
      {items.map(article => {
        const catSlug = getPrimaryCategorySlug(article);
        const href = `/edukacja/${catSlug}/${article.slug}`;
        return (
          <CarouselCard
            key={article.slug}
            variant='article'
            article={article}
            href={href}
            readingTimeLabel='min czytania'
          />
        );
      })}
    </section>
  );
}
