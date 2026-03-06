'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function JsonToXml() {
  return <TextFormatConverter conversionType="jsonToXml" sourceLabel="JSON" targetLabel="XML" />;
}
