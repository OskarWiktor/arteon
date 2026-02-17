'use client';

import dynamic from 'next/dynamic';

const ToolsCarousel = dynamic(() => import('./ToolsCarousel'), { ssr: false });

export default function LazyToolsCarousel({ title }: { title?: string }) {
  return <ToolsCarousel title={title} />;
}
