/**
 * Fix missing schema entries in hub pages where the regex failed
 * on descriptions containing apostrophes.
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const registryPath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const registryCode = fs.readFileSync(registryPath, 'utf8');

const hubs = [
  { locale: 'fr', path: 'fr/outils/page.tsx', base: '/fr/outils' },
  { locale: 'nl', path: 'nl/tools/page.tsx', base: '/nl/tools' },
  { locale: 'it', path: 'it/strumenti/page.tsx', base: '/it/strumenti' },
  { locale: 'el', path: 'el/ergaleia/page.tsx', base: '/el/ergaleia' },
];

const converterKeys = [
  'jpgToAvif',
  'pngToAvif',
  'webpToAvif',
  'svgToAvif',
  'bmpToAvif',
  'gifToAvif',
  'heicToAvif',
  'tiffToAvif',
  'jpgToGif',
  'pngToGif',
  'webpToGif',
  'svgToGif',
  'bmpToGif',
  'jpgToTiff',
  'pngToTiff',
  'webpToTiff',
  'svgToTiff',
  'bmpToTiff',
  'heicToTiff',
];

// More robust parser that handles apostrophes in values
function getRegistryLocale(key, locale) {
  const keyIdx = registryCode.indexOf(`key: '${key}'`);
  if (keyIdx === -1) return null;
  const area = registryCode.slice(keyIdx, keyIdx + 3000);
  // Find the locale line - match slug, title, description allowing escaped quotes
  const localeIdx = area.indexOf(`${locale}: { slug: '`);
  if (localeIdx === -1) return null;
  const line = area.slice(localeIdx, area.indexOf('\n', localeIdx));
  // Extract slug
  const slugMatch = line.match(/slug: '([^']+)'/);
  const titleMatch = line.match(/title: '([^']+)'/);
  // For description, get everything between description: ' and the closing ' }
  const descStart = line.indexOf("description: '");
  if (!slugMatch || !titleMatch || descStart === -1) return null;
  const descContent = line.slice(descStart + 14);
  // Find the closing ' } or ' },
  const descEnd = descContent.lastIndexOf("'");
  const description = descContent.slice(0, descEnd);
  return { slug: slugMatch[1], title: titleMatch[1], description };
}

for (const hub of hubs) {
  const filePath = path.join(appDir, hub.path);
  let code = fs.readFileSync(filePath, 'utf8');

  // Find the last position
  const posMatches = [...code.matchAll(/position:\s*(\d+)/g)];
  let lastPos = Math.max(...posMatches.map((m) => parseInt(m[1])));

  // Find missing converters
  const missing = [];
  for (const key of converterKeys) {
    const reg = getRegistryLocale(key, hub.locale);
    if (!reg) continue;
    if (code.includes(`'${hub.base}/${reg.slug}'`)) continue;
    missing.push({ key, ...reg });
  }

  if (!missing.length) {
    console.log('✓', hub.locale, '(complete)');
    continue;
  }

  console.log('⚙', hub.locale, `adding ${missing.length} missing entries:`, missing.map((m) => m.key).join(', '));

  // Find insertion point - the closing of the itemListElement
  const closingMatch = code.match(/\n(\s+)\],\s*\n\s*\},\s*\n\};/);
  if (!closingMatch) {
    console.log('⚠', hub.locale, '— closing pattern not found');
    continue;
  }

  const insertIdx = code.indexOf(closingMatch[0]);
  const indent = closingMatch[1];

  let newEntries = '';
  for (const m of missing) {
    lastPos++;
    const escapedName = m.title.replace(/'/g, "\\'");
    const escapedDesc = m.description.replace(/'/g, "\\'");
    newEntries += `\n${indent}{
${indent}  '@type': 'WebApplication',
${indent}  position: ${lastPos},
${indent}  name: '${escapedName}',
${indent}  description: '${escapedDesc}',
${indent}  url: toAbsoluteUrl('${hub.base}/${m.slug}'),
${indent}  applicationCategory: 'MultimediaApplication',
${indent}  operatingSystem: 'Any',
${indent}},`;
  }

  code = code.slice(0, insertIdx) + newEntries + code.slice(insertIdx);
  fs.writeFileSync(filePath, code, 'utf8');
  console.log('✓', hub.locale, `added ${missing.length} entries`);
}

console.log('\n✅ Done');
