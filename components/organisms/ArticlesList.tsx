import Image from 'next/image';
import Link from 'next/link';
import Card from '@/components/organisms/Card';
import {
  getAllArticlePreviews,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';

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
          article.primaryCategory &&
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
          <Card key={article.slug} as='article' padding='md'>
            <Link href={href} prefetch={false} className='block'>
              {article.cover && (
                <div className='relative aspect-video w-full overflow-hidden border-b border-neutral-200'>
                  <Image
                    src={article.cover}
                    alt={article.title}
                    fill
                    className='object-cover'
                    sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
                  />
                </div>
              )}
              <div className='p-4'>
                <h3 className='h6'>{article.title}</h3>
                <div className='mt-3 flex flex-wrap items-center gap-2'>
                  {article.readingTime && article.datePublished && (
                    <span className='inline-flex pt-2 text-sm text-light'>
                      {article.readingTime} min czytania •{' '}
                      {article.datePublished}
                    </span>
                  )}
                </div>
                <p className='mt-2 line-clamp-5 text-sm! text-light md:line-clamp-4'>
                  {article.excerpt}
                </p>
              </div>
            </Link>
          </Card>
        );
      })}
    </section>
  );
}
