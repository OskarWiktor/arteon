'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function HtmlToMarkdown() {
  return <TextFormatConverter conversionType="htmlToMarkdown" sourceLabel="HTML" targetLabel="Markdown" sourcePlaceholder="Wklej kod HTML..." />;
}
