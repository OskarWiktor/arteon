'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function JsonToCsv() {
  return <TextFormatConverter conversionType="jsonToCsv" sourceLabel="JSON" targetLabel="CSV" sourcePlaceholder='Wklej tablicę JSON, np. [{"name":"Jan","age":30}]...' />;
}
