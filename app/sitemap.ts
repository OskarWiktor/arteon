import type { MetadataRoute } from 'next';
import projectsData from '@/data/pl/projects.json' assert { type: 'json' };

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths = [
    '/',
    '/uslugi/strony-internetowe',
    '/uslugi/sklepy-internetowe',
    '/uslugi/blogi-internetowe',
    '/uslugi/grafika',
    '/uslugi/tworzenie-tresci',
    '/uslugi/marketing',
    '/realizacje',
    '/kontakt',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));

  const projects = (projectsData as any).projects ?? [];
  const projectEntries: MetadataRoute.Sitemap = projects.map((p: { slug: string; updatedAt?: string }) => ({
    url: `${BASE_URL}/realizacje/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.4,
  }));

  return [...staticEntries, ...projectEntries];
}
