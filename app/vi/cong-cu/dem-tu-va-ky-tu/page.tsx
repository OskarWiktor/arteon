import WordCountTool from '@/components/sections/tools/WordCountTool';
import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/vi/tools/word-counter.json';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} tool={<WordCountTool />} />;
}
