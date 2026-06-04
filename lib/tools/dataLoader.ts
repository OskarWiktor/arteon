import fs from 'node:fs';
import path from 'node:path';
import type { ToolPageData } from '@/types/tool-page';

const DATA_ROOT = path.join(process.cwd(), 'data');

interface SlugMap {
  [slug: string]: { file: string; data: ToolPageData };
}

const cache = new Map<string, SlugMap>();

/** Build slug→data map for a locale (cached per process) */
function getSlugMap(locale: string): SlugMap {
  if (cache.has(locale)) return cache.get(locale)!;

  const dir = path.join(DATA_ROOT, locale, 'tools');
  const map: SlugMap = {};

  if (!fs.existsSync(dir)) {
    cache.set(locale, map);
    return map;
  }

  for (const file of fs.readdirSync(dir)) {
    if (!file.endsWith('.json')) continue;
    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw) as ToolPageData;
    const slug = data.metadata.path.split('/').pop();
    if (slug) {
      map[slug] = { file, data };
    }
  }

  cache.set(locale, map);
  return map;
}

/** Get all tool slugs for a locale (for generateStaticParams) */
export function getAllToolSlugs(locale: string): string[] {
  return Object.keys(getSlugMap(locale));
}

/** Load tool data by URL slug */
export function getToolDataBySlug(
  locale: string,
  slug: string,
): ToolPageData | null {
  const map = getSlugMap(locale);
  return map[slug]?.data ?? null;
}
