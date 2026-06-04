import Link from 'next/link';
import Image from 'next/image';
import { getAllArticlePreviews, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';
import Card from '@/components/organisms/Card';

const articles = getAllArticlePreviews();

/**
 * Render a responsive grid of article cards, optionally filtered by a category slug.
 *
 * @param filterCategorySlug - Optional slug used to show only articles whose primary category matches this slug
 * @returns A section element containing a responsive grid of article cards. Each card links to the article using its primary category slug and article slug, and displays an optional cover image, title, excerpt, reading time, and publication date.
 */
export default function ArticlesList({ filterCategorySlug }: { filterCategorySlug?: string }) {
  const items = filterCategorySlug
    ? articles.filter(a => {
        return a.primaryCategory && slugify(a.primaryCategory) === filterCategorySlug;
      })
    : articles;

  return (
    <section aria-label='Lista artykułów' className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
      {items.map(a => {
        const catSlug = getPrimaryCategorySlug(a);
        const href = `/edukacja/${catSlug}/${a.slug}`;
        return (
          <Card key={a.slug} as='article' padding='md'>
            <Link href={href} prefetch={false} className='block'>
              {a.cover && (
                <div className='relative aspect-video w-full overflow-hidden border-b border-neutral-200'>
                  <Image
                    src={a.cover}
                    alt={a.title}
                    fill
                    className='object-cover'
                    sizes='(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw'
                  />
                </div>
              )}
              <div className='p-4'>
                <h3 className='h6'>{a.title}</h3>
                <p className='mt-2 line-clamp-5 text-sm! text-light md:line-clamp-4'>{a.excerpt}</p>
                <div className='mt-3 flex flex-wrap items-center gap-2'>
                  {a.readingTime && (
                    <span className='text-sm text-light'>{a.readingTime} min czytania</span>
                  )}
                  {a.datePublished && (
                    <span className='text-sm text-light' aria-label='Data publikacji'>
                      <span className='mx-1'>• </span>
                      {a.datePublished.split('-').reverse().join('.')}
                    </span>
                  )}
                </div>
              </div>
            </Link>
          </Card>
        );
      })}
    </section>
  );
}
