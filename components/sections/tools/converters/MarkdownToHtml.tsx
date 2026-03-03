'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function MarkdownToHtml() {
  return <TextFormatConverter conversionType="markdownToHtml" sourceLabel="Markdown" targetLabel="HTML" sourcePlaceholder="Wklej tekst Markdown..." />;
}
