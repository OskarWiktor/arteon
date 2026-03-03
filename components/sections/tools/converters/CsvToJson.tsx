'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function CsvToJson() {
  return <TextFormatConverter conversionType="csvToJson" sourceLabel="CSV" targetLabel="JSON" sourcePlaceholder="Wklej dane CSV (nagłówek + wiersze)..." />;
}
