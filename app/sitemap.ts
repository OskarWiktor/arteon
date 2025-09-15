import type { MetadataRoute } from 'next'
import projectsData from '@/data/pl/projects.json' assert { type: 'json' }

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.arteonagency.pl'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticPaths = [
    '/',
    '/services/websites',
    '/services/online-stores',
    '/services/online-blogs',
    '/services/design',
    '/services/content',
    '/services/marketing',
    '/projects',
    '/contact',
  ]

  const staticEntries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }))

  const projects = (projectsData as any).projects ?? []
  const projectEntries: MetadataRoute.Sitemap = projects.map((p: { slug: string; updatedAt?: string }) => ({
    url: `${BASE_URL}/projects/${p.slug}`,
    lastModified: p.updatedAt ? new Date(p.updatedAt) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [...staticEntries, ...projectEntries]
}
