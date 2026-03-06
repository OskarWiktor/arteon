'use client';

import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function JsonToYaml() {
  return <TextFormatConverter conversionType="jsonToYaml" sourceLabel="JSON" targetLabel="YAML" />;
}
