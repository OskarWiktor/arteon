'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function YamlToJson() {
  return <TextFormatConverter conversionType="yamlToJson" sourceLabel="YAML" targetLabel="JSON" sourcePlaceholder="Wklej konfigurację YAML..." />;
}
