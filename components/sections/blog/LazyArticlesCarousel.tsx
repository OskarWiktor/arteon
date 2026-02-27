'use client';

import dynamic from 'next/dynamic';
import type { ArticlePreview } from '@/types/article';

const ArticlesCarousel = dynamic(() => import('./ArticlesCarousel'), { ssr: false });

type Props = {
  articles?: ArticlePreview[];
  max?: number;
  title?: string;
  subtitle?: string;
  categorySlug?: string;
  slugs?: string | string[];
  excludeSlug?: string;
};

export default function LazyArticlesCarousel(props: Props) {
  return <ArticlesCarousel {...props} />;
}
