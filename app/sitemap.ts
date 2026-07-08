import path from 'node:path';
import fg from 'fast-glob';
import type { MetadataRoute } from 'next';
import projectsData from '@/data/pl/projects.json';
import {
  getAllArticlePreviews,
  getPrimaryCategorySlug,
} from '@/lib/blogDataService';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { LOCALE_SITEMAP_META } from '@/lib/i18n/pages/localeSitemapMeta';
import {
  getToolAlternates,
  getToolsIndexAlternates,
} from '@/lib/i18n/pages/toolMeta';
import { TOOL_REGISTRY, getToolHref } from '@/lib/i18n/toolRegistry';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Native Next.js sitemap. Single source of truth: the same registries/data the
// app renders from (TOOL_REGISTRY, LOCALE_CONFIG, projects.json, blog data),
// plus a filesystem scan for the PL-only static pages that have no registry.
// Replaces the old next-sitemap + postbuild-hreflang script pipeline.
// ---------------------------------------------------------------------------

type Entry = MetadataRoute.Sitemap[number];

/** The four pages that exist in every locale, keyed to their LOCALE_CONFIG href. */
const MULTILINGUAL_HREF_KEYS = [
  'aboutHref',
  'contactHref',
  'privacyHref',
  'termsHref',
] as const;

function priorityFor(route: string): number {
  if (route === '/') return 1.0;
  if (isTool(route)) return 0.9;
  if (route.startsWith('/uslugi')) return 0.8;
  if (route.startsWith('/edukacja')) return 0.7;
  if (route.startsWith('/realizacje')) return 0.5;
  return 0.4;
}

function changeFreqFor(route: string): Entry['changeFrequency'] {
  if (route === '/') return 'daily';
  if (isToolIndex(route)) return 'daily';
  if (isTool(route)) return 'weekly';
  if (route.startsWith('/uslugi')) return 'weekly';
  return 'monthly';
}

/** Representative image per key landing page, surfaced as an <image:image>. */
const ROUTE_IMAGE: Record<string, string> = {
  '/': '/assets/arteon-logo-on-mockup.webp',
  '/narzedzia': '/assets/arteon-logo-on-mockup.webp',
  '/uslugi': '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/strony-internetowe-dla-firm':
    '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/optymalizacja-strony-wordpress':
    '/assets/projects/arteon-baners-camper-albania-mockup.webp',
  '/uslugi/sklepy-internetowe': '/assets/projects/arteon-baners-trilllizo.webp',
  '/uslugi/blogi-internetowe': '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/tworzenie-tresci':
    '/assets/blog/czym-jest-content-marketing/czym-jest-content-marketing.webp',
  '/uslugi/marketing': '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/marketing/audyt-seo': '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/marketing/optymalizacja-seo':
    '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/marketing/pozycjonowanie-stron':
    '/assets/projects/arteon-baners-msc.webp',
  '/uslugi/projekty-graficzne':
    '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-logo':
    '/assets/projects/finish-masters/logo-finish-masters-case-study.webp',
  '/uslugi/projekty-graficzne/projekt-wizytowki':
    '/assets/projects/luxnova/wizytowka-dla-kancelari-luxnova-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-ulotki':
    '/assets/projects/simba-group/folder-reklamowy-simba-group-przod.webp',
  '/uslugi/projekty-graficzne/projekt-cennika':
    '/assets/projects/cennik-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-papieru-firmowego':
    '/assets/projects/luxnova/papier-firmowy-dla-kancelarii-luxnova.webp',
  '/uslugi/projekty-graficzne/projekt-teczki-ofertowej':
    '/assets/projects/luxnova/teczka-ofertowa-dla-kancelarii-luxnova-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-menu-restauracji':
    '/assets/projects/nocturna/menu-dla-baru-nocturna-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-kuponu-rabatowego-i-vouchera':
    '/assets/projects/arteon-baner-voucher-gabinet-kosmetyczny-kasia-mockup-2.webp',
  '/uslugi/projekty-graficzne/szablony-postow-media-spolecznosciowe':
    '/assets/projects/arteon-baner-szablon-social-media-msc-mockup.webp',
  '/uslugi/projekty-graficzne/projekt-graficzny-strony':
    '/assets/projects/arteon-baners-msc.webp',
};

const TOOL_INDEX_PATHS = new Set(
  SUPPORTED_LOCALES.map(loc => LOCALE_CONFIG[loc].toolsIndexHref),
);

function isToolIndex(route: string): boolean {
  return TOOL_INDEX_PATHS.has(route);
}

function isTool(route: string): boolean {
  if (isToolIndex(route)) return true;
  for (const base of TOOL_INDEX_PATHS) {
    if (route.startsWith(`${base}/`)) return true;
  }
  return false;
}

/** Map an app/ page file to its route, or null if it must not be in the sitemap. */
function fileToRoute(file: string): string | null {
  const normalized = file.replace(/\\/g, '/');
  // Dynamic routes ([slug], [category], [...slug]) come from data, not the glob.
  if (normalized.includes('[')) return null;
  let route = ('/' + normalized).replace(/\/page\.(tsx|ts|mdx)$/, '');
  route = route.replace(/\/\([^/]+\)/g, ''); // strip route groups like (pl), (tools)
  if (route === '' || route === '/index') route = '/';
  return route;
}

type AddEntry = (route: string, extra: Omit<Entry, 'url'>) => void;

// Tool index (one per locale) + every tool page in every locale, all with hreflang.
function addToolPages(add: AddEntry): void {
  for (const loc of SUPPORTED_LOCALES) {
    add(LOCALE_CONFIG[loc].toolsIndexHref, {
      alternates: { languages: getToolsIndexAlternates(loc).languages },
    });
  }
  for (const tool of TOOL_REGISTRY) {
    for (const loc of SUPPORTED_LOCALES) {
      if (!tool.locales[loc]) continue;
      add(getToolHref(tool.key, loc), {
        alternates: { languages: getToolAlternates(tool.key, loc).languages },
      });
    }
  }
}

// The four pages that exist in every locale (about / contact / privacy / terms).
function addMultilingualPages(add: AddEntry): void {
  for (const hrefKey of MULTILINGUAL_HREF_KEYS) {
    const languages: Record<string, string> = {};
    for (const loc of SUPPORTED_LOCALES) {
      const href = LOCALE_CONFIG[loc][hrefKey];
      if (href) languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(href);
    }
    const enHref = LOCALE_CONFIG.en[hrefKey];
    if (enHref) languages['x-default'] = toAbsoluteUrl(enHref);
    for (const loc of SUPPORTED_LOCALES) {
      const href = LOCALE_CONFIG[loc][hrefKey];
      if (href) add(href, { alternates: { languages } });
    }
  }
}

// Per-locale HTML sitemap pages. Added before the PL glob so /mapa-strony carries
// its sitemap-page hreflang set (the glob's later add() is a no-op via dedupe).
function addLocaleSitemapPages(add: AddEntry): void {
  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    languages[LOCALE_CONFIG[loc].hreflang] = toAbsoluteUrl(
      LOCALE_SITEMAP_META[loc].path,
    );
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_SITEMAP_META.en.path);
  for (const loc of SUPPORTED_LOCALES) {
    add(LOCALE_SITEMAP_META[loc].path, { alternates: { languages } });
  }
}

// PL-only static pages, discovered from the filesystem so none is ever missed.
// Dynamic routes and anything already added are skipped by fileToRoute / dedupe.
function addStaticPlPages(add: AddEntry): void {
  const plFiles = fg.sync('**/page.{tsx,ts,mdx}', {
    cwd: path.join(process.cwd(), 'app', '(pl)'),
  });
  for (const file of plFiles) {
    const route = fileToRoute(file);
    if (route) add(route, {});
  }
}

function addProjects(add: AddEntry): void {
  const { projects } = projectsData as {
    projects: { slug: string; image?: string }[];
  };
  for (const project of projects) {
    add(`/realizacje/${project.slug}`, {
      images: project.image ? [toAbsoluteUrl(project.image)] : undefined,
    });
  }
}

function addArticles(add: AddEntry): void {
  for (const article of getAllArticlePreviews()) {
    const category = getPrimaryCategorySlug(article);
    add(`/edukacja/${category}`, {});
    add(`/edukacja/${category}/${article.slug}`, {
      lastModified: article.datePublished
        ? new Date(article.datePublished)
        : undefined,
      images: article.cover ? [toAbsoluteUrl(article.cover)] : undefined,
    });
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = new Map<string, Entry>();

  const add: AddEntry = (route, extra) => {
    const url = toAbsoluteUrl(route);
    if (entries.has(url)) return; // first definition wins (richest hreflang)
    const routeImage = ROUTE_IMAGE[route];
    entries.set(url, {
      url,
      changeFrequency: changeFreqFor(route),
      priority: priorityFor(route),
      ...(routeImage && !extra.images
        ? { images: [toAbsoluteUrl(routeImage)] }
        : {}),
      ...extra,
    });
  };

  addToolPages(add);
  addMultilingualPages(add);
  addLocaleSitemapPages(add);
  addStaticPlPages(add);
  addProjects(add);
  addArticles(add);

  return [...entries.values()].sort((a, b) => a.url.localeCompare(b.url));
}

export const dynamic = 'force-static';
