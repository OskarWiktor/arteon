import Link from 'next/link';
import Image from 'next/image';
import { getAllArticlePreviews, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';
import Card from '@/components/ui/Card';

const articles = getAllArticlePreviews();

export default function ArticlesList({ filterCategorySlug }: { filterCategorySlug?: string }) {
  const items = filterCategorySlug
    ? articles.filter((a) => {
        return a.primaryCategory && slugify(a.primaryCategory) === filterCategorySlug;
      })
    : articles;

  return (
    <section aria-label="Lista artykułów" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => {
        const catSlug = getPrimaryCategorySlug(a);
        const href = `/edukacja/${catSlug}/${a.slug}`;
        return (
          <Card key={a.slug} as="article" variant="default">
            <Link href={href} prefetch={false} className="block focus:outline-none">
              {a.cover ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
                  <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                </div>
              ) : null}
              <div className="p-4">
                <h3 className="h6">{a.title}</h3>
                <p className="text-light mt-2 line-clamp-5 !text-sm md:line-clamp-4">{a.excerpt}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {a.readingTime ? <span className="text-light text-sm">{a.readingTime} min czytania</span> : null}
                  {a.datePublished ? (
                    <span className="text-light text-sm" aria-label="Data publikacji">
                      <span className="mx-1">• </span>
                      {a.datePublished.split('-').reverse().join('.')}
                    </span>
                  ) : null}
                </div>
              </div>
            </Link>
          </Card>
        );
      })}
    </section>
  );
}
