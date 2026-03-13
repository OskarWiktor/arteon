import { notFound } from 'next/navigation';
import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import { getAllToolSlugs, getToolDataBySlug } from '@/lib/tools/data-loader';
import type { Metadata } from 'next';

const LOCALE = 'hu';

export async function generateStaticParams() {
  return getAllToolSlugs(LOCALE).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getToolDataBySlug(LOCALE, slug);
  if (!data) return {};
  return generateToolMetadata(data);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getToolDataBySlug(LOCALE, slug);
  if (!data) notFound();
  return <ToolPageRenderer data={data} />;
}
