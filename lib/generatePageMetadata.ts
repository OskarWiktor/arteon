import { headers } from 'next/headers';
import { getPageMetadata } from '@/data/seo';
import type { Metadata } from 'next';
import type { SupportedSlug } from '@/data/seo';

export async function generatePageMetadata(slug: SupportedSlug): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || '';
  const locale = host.endsWith('.pl') ? 'pl' : 'en';

  return getPageMetadata(slug, locale);
}
