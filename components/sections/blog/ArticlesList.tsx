'use client';

import Link from 'next/link';
import Image from 'next/image';
import type { Article } from '@/types/article';
import { getPrimaryCategorySlug } from '@/lib/blog';
import { slugify } from '@/utils/slug';
import blogData from '@/data/pl/blog.json';

const ui = {
  pl: {
    articlesList: 'Lista artykułów',
    readingTime: 'min czytania',
    publicationDate: 'Data publikacji',
  },
} as const;

interface BlogData {
  articles: Article[];
}

const articles = (blogData as BlogData).articles;

export default function ArticlesList({ filterCategorySlug }: { filterCategorySlug?: string }) {
  const t = ui.pl;
  const items = filterCategorySlug ? articles.filter((a) => (a.category || []).some((c) => slugify(c) === filterCategorySlug)) : articles;

  return (
    <section aria-label={t.articlesList} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((a) => {
        const catSlug = getPrimaryCategorySlug(a);
        const href = `/edukacja/${catSlug}/${a.slug}`;
        return (
          <article key={a.slug} className="overflow-hidden rounded-2xl bg-white shadow-md transition focus-within:shadow-lg hover:shadow-lg">
            <Link href={href} className="block focus:outline-none">
              {a.cover ? (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-black/10">
                  <Image src={a.cover} alt={a.title} fill className="object-cover" sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" />
                </div>
              ) : null}
              <div className="p-4">
                <h3 className="h6">{a.title}</h3>
                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-[#5e5e5e]">
                  {a.readingTime ? <span>{a.readingTime} {t.readingTime}</span> : null}
                  {a.datePublished ? <span aria-label={t.publicationDate}>• {a.datePublished}</span> : null}
                </div>
              </div>
            </Link>
          </article>
        );
      })}
    </section>
  );
}
