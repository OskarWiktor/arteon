import 'server-only';

/**
 * Blog Data Service
 *
 * ZASADY ZERO DOPISAŃ — ZERO NIEPRAWDY (docs/INSTRUCTIONS.md)
 * ----------------------------------------------------------
 * Wszystkie artykuły w blog.json MUSZĄ spełniać następujące wymagania:
 *
 * 1. ŹRÓDŁA: Każda liczba/statystyka musi mieć źródło (nazwa, rok, działający URL)
 * 2. PRAWO: Treści o cenach/promocjach zgodne z Omnibus (30 dni),
 *    treści o prywatności zgodne z RODO/GDPR
 * 3. PRZYKŁADY HIPOTETYCZNE: Muszą być oznaczone jako takie
 * 4. ZAKAZ DOPISYWANIA: Żadnych nieprawdziwych/niesprawdzonych twierdzeń
 *
 * Przed dodaniem nowego artykułu sprawdź checklistę w INSTRUCTIONS.md
 */

import blogData from '@/data/pl/blog.json';
import type { Article, ArticlePreview } from '@/types/article';
import { getPrimaryCategorySlug as getPrimaryCategorySlugBase } from '@/utils/blogCategory';
import { slugify } from '@/utils/slugify';

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
    primaryCategory: a.primaryCategory,
    category: a.category,
    readingTime: a.readingTime,
    datePublished: a.datePublished,
  }));
}

export function getCategoriesWithCount() {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const a of articles) {
    const allCats = [a.primaryCategory, ...(a.category || [])].filter(Boolean) as string[];
    const unique = Array.from(new Set(allCats.map((c) => slugify(c))));
    for (const slug of unique) {
      const label = allCats.find((c) => slugify(c) === slug) || slug;
      const prev = map.get(slug);
      map.set(slug, { label, slug, count: (prev?.count || 0) + 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export function getPrimaryCategorySlug(a: Article): string {
  return getPrimaryCategorySlugBase(a);
}

export function findArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
