import {
  getAllArticlePreviews,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';
import ArrowIcon from '../atoms/ArrowIcon';
import InlineLink from '../atoms/InlineLink';
import CarouselCardShell from '../molecules/carousels/CarouselCardShell';

const articles = getAllArticlePreviews();

/**
 * Render a responsive grid of article cards, optionally filtered by a category slug.
 *
 * @param filterCategorySlug - Optional slug used to show only articles whose primary category matches this slug
 * @returns A section element containing a responsive grid of article cards. Each card links to the article using its primary category slug and article slug, and displays an optional cover image, title, excerpt, reading time, and publication date.
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
      className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
    >
      {items.map(article => {
        const catSlug = getPrimaryCategorySlug(article);
        const href = `/edukacja/${catSlug}/${article.slug}`;
        return (
          <CarouselCardShell
            href={href}
            image={article.cover}
            title={article.title}
          >
            {article.readingTime && article.datePublished && (
              <span className='inline-flex pt-2 text-sm text-light'>
                {article.readingTime} min. czytania • {article.datePublished}
              </span>
            )}
            {article.excerpt && (
              <p className='line-clamp-3 pt-4 text-light'>{article.excerpt}</p>
            )}
            <div
              className='mt-4 mb-2 h-px w-full bg-neutral-200'
              aria-hidden='true'
            />
            <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
              <InlineLink
                href={href}
                aria-label={`Przeczytaj artykuł: ${article.title}`}
                className="inline-flex rounded-lg transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
              >
                Przeczytaj artykuł
                <ArrowIcon />
              </InlineLink>
            </div>
          </CarouselCardShell>
        );
      })}
    </section>
  );
}
