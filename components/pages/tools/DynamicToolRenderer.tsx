'use client';

import dynamic from 'next/dynamic';
import ToolEditorSkeleton from '@/components/pages/skeletons/ToolEditorSkeleton';

const L = () => <ToolEditorSkeleton />;

const STANDALONE = {
  favicon: dynamic(() => import('./FaviconGenerator'), {
    ssr: false,
    loading: L,
  }),
  qrCode: dynamic(() => import('./QrCodeGenerator'), {
    ssr: false,
    loading: L,
  }),
  emailSignature: dynamic(() => import('./EmailSignatureGenerator'), {
    ssr: false,
    loading: L,
  }),
  colorPalette: dynamic(() => import('./ColorPaletteGenerator'), {
    ssr: false,
    loading: L,
  }),
  contrastChecker: dynamic(() => import('./WcagContrastChecker'), {
    ssr: false,
    loading: L,
  }),
  wordCounter: dynamic(() => import('./WordCountTool'), {
    ssr: false,
    loading: L,
  }),
  loremIpsum: dynamic(() => import('./LoremIpsumGenerator'), {
    ssr: false,
    loading: L,
  }),
  metaCounter: dynamic(() => import('./MetaTitleDescriptionTool'), {
    ssr: false,
    loading: L,
  }),
  jpgToWebp: dynamic(() => import('./JpgPngToWebp'), {
    ssr: false,
    loading: L,
  }),
  imageResize: dynamic(() => import('./ImageResizeTool'), {
    ssr: false,
    loading: L,
  }),
  paletteExtractor: dynamic(() => import('./PaletteExtractor'), {
    ssr: false,
    loading: L,
  }),
} as const;

const LazyImageConverter = dynamic(() => import('./ImageFormatConverter'), {
  ssr: false,
  loading: L,
});
const LazyImageToPdf = dynamic(() => import('./ImageToPdfConverter'), {
  ssr: false,
  loading: L,
});
const LazyPdfToImage = dynamic(() => import('./PdfToImageConverter'), {
  ssr: false,
  loading: L,
});
const LazyTextConverter = dynamic(() => import('./TextFormatConverter'), {
  ssr: false,
  loading: L,
});
const LazyBase64 = dynamic(() => import('./Base64Converter'), {
  ssr: false,
  loading: L,
});
const LazyUnit = dynamic(() => import('./UnitConverter'), {
  ssr: false,
  loading: L,
});

interface ImgCfg {
  s: string;
  t: string;
  a: string;
  q?: number;
}
const IMG: Record<string, ImgCfg> = {
  pngToJpg: { s: 'png', t: 'jpg', a: 'image/png', q: 85 },
  jpgToPng: { s: 'jpg', t: 'png', a: 'image/jpeg,image/jpg' },
  webpToJpg: { s: 'webp', t: 'jpg', a: 'image/webp', q: 85 },
  webpToPng: { s: 'webp', t: 'png', a: 'image/webp' },
  svgToPng: { s: 'svg', t: 'png', a: 'image/svg+xml' },
  svgToJpg: { s: 'svg', t: 'jpg', a: 'image/svg+xml', q: 85 },
  bmpToJpg: {
    s: 'bmp',
    t: 'jpg',
    a: 'image/bmp,image/x-ms-bmp,image/x-bmp',
    q: 85,
  },
  bmpToPng: { s: 'bmp', t: 'png', a: 'image/bmp,image/x-ms-bmp,image/x-bmp' },
  gifToPng: { s: 'gif', t: 'png', a: 'image/gif' },
  gifToJpg: { s: 'gif', t: 'jpg', a: 'image/gif', q: 85 },
  jpgToWebpSimple: { s: 'jpg', t: 'webp', a: 'image/jpeg,image/jpg', q: 80 },
  pngToWebpSimple: { s: 'png', t: 'webp', a: 'image/png', q: 80 },
  svgToWebp: { s: 'svg', t: 'webp', a: 'image/svg+xml', q: 80 },
  gifToWebp: { s: 'gif', t: 'webp', a: 'image/gif', q: 80 },
  bmpToWebp: {
    s: 'bmp',
    t: 'webp',
    a: 'image/bmp,image/x-ms-bmp,image/x-bmp',
    q: 80,
  },
  avifToJpg: { s: 'avif', t: 'jpg', a: 'image/avif', q: 85 },
  avifToPng: { s: 'avif', t: 'png', a: 'image/avif' },
  avifToWebp: { s: 'avif', t: 'webp', a: 'image/avif', q: 80 },
  heicToJpg: {
    s: 'heic',
    t: 'jpg',
    a: 'image/heic,image/heif,.heic,.heif',
    q: 85,
  },
  heicToPng: { s: 'heic', t: 'png', a: 'image/heic,image/heif,.heic,.heif' },
  heicToWebp: {
    s: 'heic',
    t: 'webp',
    a: 'image/heic,image/heif,.heic,.heif',
    q: 80,
  },
  tiffToJpg: { s: 'tiff', t: 'jpg', a: 'image/tiff,.tiff,.tif', q: 85 },
  tiffToPng: { s: 'tiff', t: 'png', a: 'image/tiff,.tiff,.tif' },
  tiffToWebp: { s: 'tiff', t: 'webp', a: 'image/tiff,.tiff,.tif', q: 80 },
  jpgToAvif: { s: 'jpg', t: 'avif', a: 'image/jpeg', q: 80 },
  pngToAvif: { s: 'png', t: 'avif', a: 'image/png', q: 80 },
  webpToAvif: { s: 'webp', t: 'avif', a: 'image/webp', q: 80 },
  svgToAvif: { s: 'svg', t: 'avif', a: 'image/svg+xml', q: 80 },
  bmpToAvif: {
    s: 'bmp',
    t: 'avif',
    a: 'image/bmp,image/x-ms-bmp,image/x-bmp',
    q: 80,
  },
  gifToAvif: { s: 'gif', t: 'avif', a: 'image/gif', q: 80 },
  heicToAvif: {
    s: 'heic',
    t: 'avif',
    a: 'image/heic,image/heif,.heic,.heif',
    q: 80,
  },
  tiffToAvif: { s: 'tiff', t: 'avif', a: 'image/tiff,.tiff,.tif', q: 80 },
  jpgToGif: { s: 'jpg', t: 'gif', a: 'image/jpeg' },
  pngToGif: { s: 'png', t: 'gif', a: 'image/png' },
  webpToGif: { s: 'webp', t: 'gif', a: 'image/webp' },
  svgToGif: { s: 'svg', t: 'gif', a: 'image/svg+xml' },
  bmpToGif: { s: 'bmp', t: 'gif', a: 'image/bmp,image/x-ms-bmp,image/x-bmp' },
  jpgToTiff: { s: 'jpg', t: 'tiff', a: 'image/jpeg' },
  pngToTiff: { s: 'png', t: 'tiff', a: 'image/png' },
  webpToTiff: { s: 'webp', t: 'tiff', a: 'image/webp' },
  svgToTiff: { s: 'svg', t: 'tiff', a: 'image/svg+xml' },
  bmpToTiff: { s: 'bmp', t: 'tiff', a: 'image/bmp,image/x-ms-bmp,image/x-bmp' },
  avifToTiff: { s: 'avif', t: 'tiff', a: 'image/avif' },
  heicToTiff: { s: 'heic', t: 'tiff', a: 'image/heic,image/heif,.heic,.heif' },
};

interface ImgPdfCfg {
  s: string;
  a: string;
}

const IMG_PDF: Record<string, ImgPdfCfg> = {
  jpgToPdf: { s: 'jpg', a: 'image/jpeg,.jpg,.jpeg' },
  pngToPdf: { s: 'png', a: 'image/png,.png' },
  webpToPdf: { s: 'webp', a: 'image/webp,.webp' },
  heicToPdf: { s: 'heic', a: 'image/heic,image/heif,.heic,.heif' },
  bmpToPdf: { s: 'bmp', a: 'image/bmp,image/x-ms-bmp,image/x-bmp,.bmp' },
  tiffToPdf: { s: 'tiff', a: 'image/tiff,.tiff,.tif' },
  svgToPdf: { s: 'svg', a: 'image/svg+xml,.svg' },
};

const PDF_IMG: Record<string, string> = {
  pdfToJpg: 'jpg',
  pdfToPng: 'png',
  pdfToWebp: 'webp',
};

interface TextCfg {
  c: string;
  s: string;
  t: string;
}
const TEXT: Record<string, TextCfg> = {
  csvToJson: { c: 'csvToJson', s: 'CSV', t: 'JSON' },
  jsonToCsv: { c: 'jsonToCsv', s: 'JSON', t: 'CSV' },
  xmlToJson: { c: 'xmlToJson', s: 'XML', t: 'JSON' },
  jsonToXml: { c: 'jsonToXml', s: 'JSON', t: 'XML' },
  yamlToJson: { c: 'yamlToJson', s: 'YAML', t: 'JSON' },
  jsonToYaml: { c: 'jsonToYaml', s: 'JSON', t: 'YAML' },
  markdownToHtml: { c: 'markdownToHtml', s: 'Markdown', t: 'HTML' },
  htmlToMarkdown: { c: 'htmlToMarkdown', s: 'HTML', t: 'Markdown' },
};

const B64: Record<string, 'encode' | 'decode'> = {
  imageToBase64: 'encode',
  base64ToImage: 'decode',
};

const UNIT_KEYS = new Set([
  'ptToPx',
  'remToPx',
  'emToPx',
  'cmToPxDpi',
  'pxToCmDpi',
  'mmToPxDpi',
  'inchesToPxDpi',
  'dpiToPpi',
  'hexToRgb',
  'rgbToCmyk',
  'bytesConverter',
  'unixTimestamp',
  'decToBin',
  'decToHex',
  'mbpsToMBs',
]);

export default function DynamicToolRenderer({ toolKey }: { toolKey: string }) {
  const key = toolKey === 'e-mailSignature' ? 'emailSignature' : toolKey;

  const Standalone = STANDALONE[key as keyof typeof STANDALONE];
  if (Standalone) return <Standalone />;

  const img = IMG[key];
  if (img)
    return (
      <LazyImageConverter
        sourceFormat={img.s as any}
        targetFormat={img.t as any}
        acceptMime={img.a}
        {...(img.q != null && { defaultQuality: img.q })}
      />
    );

  const imgPdf = IMG_PDF[key];
  if (imgPdf)
    return (
      <LazyImageToPdf sourceFormat={imgPdf.s as any} acceptMime={imgPdf.a} />
    );

  const pdfTarget = PDF_IMG[key];
  if (pdfTarget) return <LazyPdfToImage targetFormat={pdfTarget as any} />;

  const text = TEXT[key];
  if (text)
    return (
      <LazyTextConverter
        conversionType={text.c as any}
        sourceLabel={text.s}
        targetLabel={text.t}
      />
    );

  const b64Mode = B64[key];
  if (b64Mode) return <LazyBase64 mode={b64Mode} />;

  if (UNIT_KEYS.has(key)) return <LazyUnit toolKey={key as any} />;

  return null;
}
