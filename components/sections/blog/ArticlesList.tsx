import Link from 'next/link';
import Image from 'next/image';
import { getAllArticlePreviews, getPrimaryCategorySlug } from '@/lib/blogDataService';
import { slugify } from '@/utils/slugify';

const articles = getAllArticlePreviews();

export default function ArticlesList({ filterCategorySlug }: { filterCategorySlug?: string }) {
  const items = filterCategorySlug
    ? articles.filter((a) => {
        const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
        return allCats.some((c) => slugify(c) === filterCategorySlug);
      })
    : articles;

  return (
    <section aria-label="Lista artykułów" className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => {
        const catSlug = getPrimaryCategorySlug(a);
        const href = `/edukacja/${catSlug}/${a.slug}`;
        return (
          <article key={a.slug} className="surface-card">
            <Link href={href} className="block focus:outline-none">
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
          </article>
        );
      })}
    </section>
  );
}
