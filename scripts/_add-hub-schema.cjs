/**
 * Add schema entries for 19 new converters to 15 non-PL hub pages.
 * Inserts new WebApplication entries into the itemListElement array.
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const registryCode = fs.readFileSync(registryPath, 'utf8');

const hubs = [
  { locale: 'en', path: 'en/tools/page.tsx', base: '/en/tools' },
  { locale: 'de', path: 'de/werkzeuge/page.tsx', base: '/de/werkzeuge' },
  { locale: 'es', path: 'es/herramientas/page.tsx', base: '/es/herramientas' },
  { locale: 'fr', path: 'fr/outils/page.tsx', base: '/fr/outils' },
  { locale: 'pt', path: 'pt/ferramentas/page.tsx', base: '/pt/ferramentas' },
  { locale: 'it', path: 'it/strumenti/page.tsx', base: '/it/strumenti' },
  { locale: 'ro', path: 'ro/instrumente/page.tsx', base: '/ro/instrumente' },
  { locale: 'nl', path: 'nl/tools/page.tsx', base: '/nl/tools' },
  { locale: 'hu', path: 'hu/eszkozok/page.tsx', base: '/hu/eszkozok' },
  { locale: 'cs', path: 'cs/nastroje/page.tsx', base: '/cs/nastroje' },
  { locale: 'sv', path: 'sv/verktyg/page.tsx', base: '/sv/verktyg' },
  { locale: 'da', path: 'da/vaerktojer/page.tsx', base: '/da/vaerktojer' },
  { locale: 'no', path: 'no/verktoy/page.tsx', base: '/no/verktoy' },
  { locale: 'fi', path: 'fi/tyokalut/page.tsx', base: '/fi/tyokalut' },
  { locale: 'el', path: 'el/ergaleia/page.tsx', base: '/el/ergaleia' },
];

const converterKeys = [
  'jpgToAvif', 'pngToAvif', 'webpToAvif', 'svgToAvif', 'bmpToAvif',
  'gifToAvif', 'heicToAvif', 'tiffToAvif',
  'jpgToGif', 'pngToGif', 'webpToGif', 'svgToGif', 'bmpToGif',
  'jpgToTiff', 'pngToTiff', 'webpToTiff', 'svgToTiff', 'bmpToTiff', 'heicToTiff',
];

function getRegistryLocale(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const pattern = new RegExp(`${locale}: \\{ slug: '([^']+)', title: '([^']+)', description: '([^']+)' \\}`);
  const area = registryCode.slice(keyIdx, keyIdx + 3000);
  const m = area.match(pattern);
  if (!m) return null;
  return { slug: m[1], title: m[2], description: m[3] };
}

for (const hub of hubs) {
  const filePath = path.join(appDir, hub.path);
  if (!fs.existsSync(filePath)) { console.log('SKIP:', hub.locale); continue; }

  let code = fs.readFileSync(filePath, 'utf8');

  // Find the last position number in schema
  const positionMatches = [...code.matchAll(/position:\s*(\d+)/g)];
  if (!positionMatches.length) { console.log('⚠', hub.locale, '— no position found'); continue; }
  const lastPosition = Math.max(...positionMatches.map(m => parseInt(m[1])));

  // Find the closing of itemListElement array: `    ],\n  },\n};`
  // Look for the pattern `],\n  },\n};` which ends the schema
  const closingPattern = /\n(\s+)\],\s*\n\s*\},\s*\n\};/;
  const closingMatch = code.match(closingPattern);
  if (!closingMatch) {
    console.log('⚠', hub.locale, '— closing pattern not found');
    continue;
  }

  const insertIdx = code.indexOf(closingMatch[0]);
  const indent = closingMatch[1];

  // Build new entries
  let newEntries = '';
  let pos = lastPosition + 1;

  for (const key of converterKeys) {
    const reg = getRegistryLocale(key, hub.locale);
    if (!reg) continue;

    // Check if this converter already exists in schema
    if (code.includes(`'${hub.base}/${reg.slug}'`)) continue;

    const desc = reg.description.replace(/'/g, "\\'");
    newEntries += `\n${indent}{
${indent}  '@type': 'WebApplication',
${indent}  position: ${pos},
${indent}  name: '${reg.title.replace(/'/g, "\\'")}',
${indent}  description: '${desc}',
${indent}  url: toAbsoluteUrl('${hub.base}/${reg.slug}'),
${indent}  applicationCategory: 'MultimediaApplication',
${indent}  operatingSystem: 'Any',
${indent}},`;
    pos++;
  }

  if (!newEntries) {
    console.log('✓', hub.locale, '(no new entries needed)');
    continue;
  }

  // Insert before the closing
  code = code.slice(0, insertIdx) + newEntries + code.slice(insertIdx);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('✓', hub.locale, `(added ${pos - lastPosition - 1} entries, positions ${lastPosition + 1}-${pos - 1})`);
}

console.log('\n✅ Done');
