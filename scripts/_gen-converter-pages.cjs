/**
 * Generate page.tsx files for 19 new converters × 15 non-PL locales.
 * Each page imports ToolPageRenderer and the corresponding content JSON.
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const registryCode = fs.readFileSync(registryPath, 'utf8');

// Locale → tools directory path segment (under app/<locale>/)
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
  { key: 'jpgToAvif', from: 'jpg', to: 'avif' },
  { key: 'pngToAvif', from: 'png', to: 'avif' },
  { key: 'webpToAvif', from: 'webp', to: 'avif' },
  { key: 'svgToAvif', from: 'svg', to: 'avif' },
  { key: 'bmpToAvif', from: 'bmp', to: 'avif' },
  { key: 'gifToAvif', from: 'gif', to: 'avif' },
  { key: 'heicToAvif', from: 'heic', to: 'avif' },
  { key: 'tiffToAvif', from: 'tiff', to: 'avif' },
  { key: 'jpgToGif', from: 'jpg', to: 'gif' },
  { key: 'pngToGif', from: 'png', to: 'gif' },
  { key: 'webpToGif', from: 'webp', to: 'gif' },
  { key: 'svgToGif', from: 'svg', to: 'gif' },
  { key: 'bmpToGif', from: 'bmp', to: 'gif' },
  { key: 'jpgToTiff', from: 'jpg', to: 'tiff' },
  { key: 'pngToTiff', from: 'png', to: 'tiff' },
  { key: 'webpToTiff', from: 'webp', to: 'tiff' },
  { key: 'svgToTiff', from: 'svg', to: 'tiff' },
  { key: 'bmpToTiff', from: 'bmp', to: 'tiff' },
  { key: 'heicToTiff', from: 'heic', to: 'tiff' },
];

function getSlug(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const pattern = new RegExp(`${locale}: \\{ slug: '([^']+)'`);
  const area = registryCode.slice(keyIdx, keyIdx + 3000);
  const m = area.match(pattern);
  return m ? m[1] : null;
}

let created = 0;
let skipped = 0;

for (const conv of converters) {
  for (const [locale, toolsDir] of Object.entries(localeToolsDirs)) {
    const slug = getSlug(conv.key, locale);
    if (!slug) { skipped++; continue; }

    const jsonFile = `converter-${conv.from}-to-${conv.to}.json`;
    const pageDir = path.join(appDir, toolsDir, slug);
    const pagePath = path.join(pageDir, 'page.tsx');

    if (fs.existsSync(pagePath)) { skipped++; continue; }

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

    fs.mkdirSync(pageDir, { recursive: true });
    fs.writeFileSync(pagePath, content, 'utf8');
    created++;
  }
}

console.log(`✅ Created ${created} page.tsx files, skipped ${skipped}`);
