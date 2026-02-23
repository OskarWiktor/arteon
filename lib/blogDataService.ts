import 'server-only';

/**
 * Blog Data Service
 *
 * ZASADY ZERO DOPISAŃ - ZERO NIEPRAWDY (docs/INSTRUCTIONS.md)
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
 *
 * ARCHITEKTURA DANYCH:
 * - data/pl/blog/_index.json  — lekki indeks (~50 KB) z ArticlePreview[]
 * - data/pl/blog/{cat}.json   — pełne artykuły per primaryCategory (lazy load)
 * - data/pl/blog.json         — źródło prawdy (generuje split via scripts/split-blog.cjs)
 */

import { readFileSync } from 'fs';
import { join } from 'path';
import blogIndex from '@/data/pl/blog/_index.json';
import type { Article, ArticlePreview } from '@/types/article';
import { getPrimaryCategorySlug as getPrimaryCategorySlugBase } from '@/utils/blogCategory';
import { slugify } from '@/utils/slugify';

const previews = blogIndex as ArticlePreview[];

const categoryCache = new Map<string, Article[]>();

function loadCategory(categorySlug: string): Article[] {
  if (categoryCache.has(categorySlug)) return categoryCache.get(categorySlug)!;

  const filePath = join(process.cwd(), 'data', 'pl', 'blog', `${categorySlug}.json`);
  const data = JSON.parse(readFileSync(filePath, 'utf8')) as { articles: Article[] };
  categoryCache.set(categorySlug, data.articles);
  return data.articles;
}

export function getAllArticlePreviews(): ArticlePreview[] {
  return previews;
}

export function getCategoriesWithCount() {
  const map = new Map<string, { label: string; slug: string; count: number }>();
  for (const a of previews) {
    // Only use primary category, not secondary categories
    if (a.primaryCategory) {
      const primarySlug = slugify(a.primaryCategory);
      const prev = map.get(primarySlug);
      map.set(primarySlug, { label: a.primaryCategory, slug: primarySlug, count: (prev?.count || 0) + 1 });
    }
  }
  return Array.from(map.values()).sort((a, b) => a.label.localeCompare(b.label));
}

export function getPrimaryCategorySlug(a: ArticlePreview): string {
  return getPrimaryCategorySlugBase(a);
}

export function findArticleBySlug(slug: string): Article | undefined {
  const preview = previews.find((a) => a.slug === slug);
  if (!preview) return undefined;

  const categorySlug = getPrimaryCategorySlugBase(preview);
  const articles = loadCategory(categorySlug);
  return articles.find((a) => a.slug === slug);
}
