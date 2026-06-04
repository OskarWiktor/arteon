import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ToolPage, { generateToolMetadata } from '@/components/pages/ToolPage';
import { getAllToolSlugs, getToolDataBySlug } from '@/lib/tools/data-loader';

const LOCALE = 'fr';

export async function generateStaticParams() {
  return getAllToolSlugs(LOCALE).map(slug => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = getToolDataBySlug(LOCALE, slug);
  if (!data) return {};
  return generateToolMetadata(data);
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getToolDataBySlug(LOCALE, slug);
  if (!data) notFound();
  return <ToolPage data={data} />;
}
