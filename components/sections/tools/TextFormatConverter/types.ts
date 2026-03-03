export type TextConversionType = 'csvToJson' | 'jsonToCsv' | 'xmlToJson' | 'jsonToXml' | 'yamlToJson' | 'jsonToYaml' | 'markdownToHtml' | 'htmlToMarkdown';

export interface TextFormatConverterProps {
  conversionType: TextConversionType;
  sourceLabel: string;
  targetLabel: string;
  sourcePlaceholder: string;
}
