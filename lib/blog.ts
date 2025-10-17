import blogData from '@/data/pl/blog.json';
import type { Article } from '@/types/article';
import { slugify } from '@/utils/slug';

const articles = (blogData as any).articles as Article[];

export function getAllArticles(): Article[] {
  return articles;
}

export function getCategoriesWithCount() {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const a of articles) {
    for (const c of a.category || []) {
      const s = slugify(c);
      const prev = map.get(s);
      map.set(s, { label: c, slug: s, count: (prev?.count || 0) + 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
}

// Główna kategoria do URL (możesz kiedyś dodać pole primaryCategory w danych)
export function getPrimaryCategorySlug(a: Article): string {
  const first = (a.category && a.category[0]) || 'inne';
  return slugify(first);
}

export function findArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
