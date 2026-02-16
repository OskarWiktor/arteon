import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/da/tools/meta-counter.json';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} tool={<MetaTitleDescriptionTool />} />;
}
