'use client';

import dynamic from 'next/dynamic';
import ToolEditorSkeleton from '@/components/ui/skeletons/ToolEditorSkeleton';

const TOOL_COMPONENTS: Record<string, ReturnType<typeof dynamic>> = {
  favicon: dynamic(() => import('./FaviconGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  qrCode: dynamic(() => import('./QrCodeGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  emailSignature: dynamic(() => import('./EmailSignatureGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  colorPalette: dynamic(() => import('./ColorPaletteGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  contrastChecker: dynamic(() => import('./WcagContrastChecker'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  wordCounter: dynamic(() => import('./WordCountTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  loremIpsum: dynamic(() => import('./LoremIpsumGenerator'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  metaCounter: dynamic(() => import('./MetaTitleDescriptionTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToWebp: dynamic(() => import('./JpgPngToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  imageResize: dynamic(() => import('./ImageResizeTool'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  paletteExtractor: dynamic(() => import('./PaletteExtractor'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToJpg: dynamic(() => import('./converters/PngToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToPng: dynamic(() => import('./converters/JpgToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToJpg: dynamic(() => import('./converters/WebpToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToPng: dynamic(() => import('./converters/WebpToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToPng: dynamic(() => import('./converters/SvgToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToJpg: dynamic(() => import('./converters/SvgToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToJpg: dynamic(() => import('./converters/BmpToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToPng: dynamic(() => import('./converters/BmpToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToPng: dynamic(() => import('./converters/GifToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToJpg: dynamic(() => import('./converters/GifToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToWebpSimple: dynamic(() => import('./converters/JpgToWebpSimple'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToWebpSimple: dynamic(() => import('./converters/PngToWebpSimple'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToWebp: dynamic(() => import('./converters/SvgToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToWebp: dynamic(() => import('./converters/GifToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToWebp: dynamic(() => import('./converters/BmpToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  avifToJpg: dynamic(() => import('./converters/AvifToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  avifToPng: dynamic(() => import('./converters/AvifToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  avifToWebp: dynamic(() => import('./converters/AvifToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToJpg: dynamic(() => import('./converters/HeicToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToPng: dynamic(() => import('./converters/HeicToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToWebp: dynamic(() => import('./converters/HeicToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  tiffToJpg: dynamic(() => import('./converters/TiffToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  tiffToPng: dynamic(() => import('./converters/TiffToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  tiffToWebp: dynamic(() => import('./converters/TiffToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToAvif: dynamic(() => import('./converters/JpgToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToAvif: dynamic(() => import('./converters/PngToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToAvif: dynamic(() => import('./converters/WebpToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToAvif: dynamic(() => import('./converters/SvgToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToAvif: dynamic(() => import('./converters/BmpToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  gifToAvif: dynamic(() => import('./converters/GifToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToAvif: dynamic(() => import('./converters/HeicToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  tiffToAvif: dynamic(() => import('./converters/TiffToAvif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToGif: dynamic(() => import('./converters/JpgToGif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToGif: dynamic(() => import('./converters/PngToGif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToGif: dynamic(() => import('./converters/WebpToGif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToGif: dynamic(() => import('./converters/SvgToGif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToGif: dynamic(() => import('./converters/BmpToGif'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jpgToTiff: dynamic(() => import('./converters/JpgToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToTiff: dynamic(() => import('./converters/PngToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToTiff: dynamic(() => import('./converters/WebpToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToTiff: dynamic(() => import('./converters/SvgToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToTiff: dynamic(() => import('./converters/BmpToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  avifToTiff: dynamic(() => import('./converters/AvifToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToTiff: dynamic(() => import('./converters/HeicToTiff'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // PDF converters (Image → PDF)
  jpgToPdf: dynamic(() => import('./converters/JpgToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pngToPdf: dynamic(() => import('./converters/PngToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  webpToPdf: dynamic(() => import('./converters/WebpToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  heicToPdf: dynamic(() => import('./converters/HeicToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  bmpToPdf: dynamic(() => import('./converters/BmpToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  tiffToPdf: dynamic(() => import('./converters/TiffToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  svgToPdf: dynamic(() => import('./converters/SvgToPdf'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // PDF converters (PDF → Image)
  pdfToJpg: dynamic(() => import('./converters/PdfToJpg'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pdfToPng: dynamic(() => import('./converters/PdfToPng'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  pdfToWebp: dynamic(() => import('./converters/PdfToWebp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // Data converters
  csvToJson: dynamic(() => import('./converters/CsvToJson'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jsonToCsv: dynamic(() => import('./converters/JsonToCsv'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  xmlToJson: dynamic(() => import('./converters/XmlToJson'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jsonToXml: dynamic(() => import('./converters/JsonToXml'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  yamlToJson: dynamic(() => import('./converters/YamlToJson'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  jsonToYaml: dynamic(() => import('./converters/JsonToYaml'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  markdownToHtml: dynamic(() => import('./converters/MarkdownToHtml'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  htmlToMarkdown: dynamic(() => import('./converters/HtmlToMarkdown'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // Base64 converters
  imageToBase64: dynamic(() => import('./converters/ImageToBase64'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  base64ToImage: dynamic(() => import('./converters/Base64ToImage'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // Unit converters - design/graphics
  ptToPx: dynamic(() => import('./unit-wrappers/PtToPx'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  remToPx: dynamic(() => import('./unit-wrappers/RemToPx'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  emToPx: dynamic(() => import('./unit-wrappers/EmToPx'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  cmToPxDpi: dynamic(() => import('./unit-wrappers/CmToPxDpi'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  mmToPxDpi: dynamic(() => import('./unit-wrappers/MmToPxDpi'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  inchesToPxDpi: dynamic(() => import('./unit-wrappers/InchesToPxDpi'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  dpiToPpi: dynamic(() => import('./unit-wrappers/DpiToPpi'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  hexToRgb: dynamic(() => import('./unit-wrappers/HexToRgb'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  rgbToHsl: dynamic(() => import('./unit-wrappers/RgbToHsl'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  rgbToCmyk: dynamic(() => import('./unit-wrappers/RgbToCmyk'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  // Unit converters - programming/technical
  bytesConverter: dynamic(() => import('./unit-wrappers/BytesConverter'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  unixTimestamp: dynamic(() => import('./unit-wrappers/UnixTimestamp'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  decToBin: dynamic(() => import('./unit-wrappers/DecToBin'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  decToHex: dynamic(() => import('./unit-wrappers/DecToHex'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  mbpsToMBs: dynamic(() => import('./unit-wrappers/MbpsToMBs'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  vwToPx: dynamic(() => import('./unit-wrappers/VwToPx'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
  twToPx: dynamic(() => import('./unit-wrappers/TwToPx'), { ssr: false, loading: () => <ToolEditorSkeleton /> }),
};

export default function DynamicToolRenderer({ toolKey }: { toolKey: string }) {
  // Map toolKey with hyphens to camelCase component keys
  const mappedKey = toolKey === 'e-mailSignature' ? 'emailSignature' : toolKey;

  const Component = TOOL_COMPONENTS[mappedKey];
  if (!Component) {
    return null;
  }
  return <Component />;
}
