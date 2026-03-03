'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function XmlToJson() {
  return <TextFormatConverter conversionType="xmlToJson" sourceLabel="XML" targetLabel="JSON" sourcePlaceholder="Wklej kod XML..." />;
}
