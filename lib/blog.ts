import 'server-only';

import blogData from '@/data/pl/blog.json';
import type { Article, ArticlePreview } from '@/types/article';
import { slugify } from '@/utils/slug';

interface BlogData {
  articles: Article[];
}

const articles = (blogData as BlogData).articles;

export function getAllArticles(): Article[] {
  return articles;
}

export function getAllArticlePreviews(): ArticlePreview[] {
  return articles.map((a) => ({
    slug: a.slug,
    title: a.title,
    excerpt: a.excerpt,
    cover: a.cover,
    category: a.category,
    readingTime: a.readingTime,
    datePublished: a.datePublished,
  }));
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

export function getPrimaryCategorySlug(a: Article): string {
  const primary = a.primaryCategory || (a.category && a.category[0]) || 'inne';
  return slugify(primary);
}

export function findArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
