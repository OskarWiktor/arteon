/**
 * Generate page.tsx + loading.tsx for all 21 PL-only converters across all 16 locales.
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const registryCode = fs.readFileSync(registryPath, 'utf8');

// NOTE: PL excluded — PL pages already exist under (pl)/narzedzia/(tools)/
const localeToolsDirs = {
  en: 'en/tools',
  de: 'de/werkzeuge',
  es: 'es/herramientas',
  fr: 'fr/outils',
  pt: 'pt/ferramentas',
  it: 'it/strumenti',
  ro: 'ro/instrumente',
  nl: 'nl/tools',
  hu: 'hu/eszkozok',
  cs: 'cs/nastroje',
  sv: 'sv/verktyg',
  da: 'da/vaerktojer',
  no: 'no/verktoy',
  fi: 'fi/tyokalut',
  el: 'el/ergaleia',
};

const converters = [
  { key: 'avifToTiff', from: 'avif', to: 'tiff' },
  { key: 'jpgToPdf', from: 'jpg', to: 'pdf' },
  { key: 'pngToPdf', from: 'png', to: 'pdf' },
  { key: 'webpToPdf', from: 'webp', to: 'pdf' },
  { key: 'heicToPdf', from: 'heic', to: 'pdf' },
  { key: 'bmpToPdf', from: 'bmp', to: 'pdf' },
  { key: 'tiffToPdf', from: 'tiff', to: 'pdf' },
  { key: 'svgToPdf', from: 'svg', to: 'pdf' },
  { key: 'pdfToJpg', from: 'pdf', to: 'jpg' },
  { key: 'pdfToPng', from: 'pdf', to: 'png' },
  { key: 'pdfToWebp', from: 'pdf', to: 'webp' },
  { key: 'csvToJson', from: 'csv', to: 'json' },
  { key: 'jsonToCsv', from: 'json', to: 'csv' },
  { key: 'jsonToXml', from: 'json', to: 'xml' },
  { key: 'xmlToJson', from: 'xml', to: 'json' },
  { key: 'yamlToJson', from: 'yaml', to: 'json' },
  { key: 'jsonToYaml', from: 'json', to: 'yaml' },
  { key: 'markdownToHtml', from: 'markdown', to: 'html' },
  { key: 'htmlToMarkdown', from: 'html', to: 'markdown' },
  { key: 'imageToBase64', from: 'image', to: 'base64' },
  { key: 'base64ToImage', from: 'base64', to: 'image' },
];

function getSlug(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const pattern = new RegExp(`${locale}: \\{ slug: '([^']+)'`);
  const area = registryCode.slice(keyIdx, keyIdx + 5000);
  const m = area.match(pattern);
  return m ? m[1] : null;
}

const LOADING = `import ToolPageSkeleton from '@/components/ui/skeletons/ToolPageSkeleton';

export default function Loading() {
  return <ToolPageSkeleton variant="upload-tool" />;
}
`;

let pagesCreated = 0,
  loadingCreated = 0,
  skipped = 0;

for (const conv of converters) {
  for (const [locale, toolsDir] of Object.entries(localeToolsDirs)) {
    const slug = getSlug(conv.key, locale);
    if (!slug) {
      skipped++;
      continue;
    }

    let jsonFile;
    if (conv.key === 'imageToBase64') jsonFile = 'converter-image-to-base64.json';
    else if (conv.key === 'base64ToImage') jsonFile = 'converter-base64-to-image.json';
    else jsonFile = `converter-${conv.from}-to-${conv.to}.json`;

    const pageDir = path.join(appDir, toolsDir, slug);
    const pagePath = path.join(pageDir, 'page.tsx');
    const loadingPath = path.join(pageDir, 'loading.tsx');

    fs.mkdirSync(pageDir, { recursive: true });

    if (!fs.existsSync(pagePath)) {
      const content = `import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/${locale}/tools/${jsonFile}';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} />;
}
`;
      fs.writeFileSync(pagePath, content, 'utf8');
      pagesCreated++;
    } else {
      skipped++;
    }

    if (!fs.existsSync(loadingPath)) {
      fs.writeFileSync(loadingPath, LOADING, 'utf8');
      loadingCreated++;
    }
  }
}

console.log(`Done: ${pagesCreated} page.tsx, ${loadingCreated} loading.tsx created, ${skipped} skipped`);
