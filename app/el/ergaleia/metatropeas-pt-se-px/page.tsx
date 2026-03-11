import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/el/tools/unit-pt-to-px.json';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

export const dynamic = 'force-static';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} />;
}
