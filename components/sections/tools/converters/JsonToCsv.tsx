import TextFormatConverter from '@/components/sections/tools/TextFormatConverter/TextFormatConverter';

export default function JsonToCsv() {
  return <TextFormatConverter conversionType="jsonToCsv" sourceLabel="JSON" targetLabel="CSV" />;
}
