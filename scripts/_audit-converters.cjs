/**
 * Comprehensive converter audit across all locales.
 * Checks: images, locale coverage, page existence, JSON data paths.
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const registryPath = path.join(ROOT, 'lib', 'i18n', 'tool-registry.ts');
const registryContent = fs.readFileSync(registryPath, 'utf8');

// ---- 1. Extract all converter tool definitions ----
// Find all tools with section: 'konwertery'
const toolBlocks = [];
const toolRegex = /\{\s*key:\s*'([^']+)',\s*\n\s*section:\s*'konwertery'/g;
let match;
while ((match = toolRegex.exec(registryContent)) !== null) {
  const key = match[1];
  const startIdx = match.index;
  
  // Find the locales block for this tool
  const localesStart = registryContent.indexOf('locales: {', startIdx);
  const nextTool = registryContent.indexOf("\n  {", startIdx + 10);
  
  if (localesStart === -1 || (nextTool !== -1 && localesStart > nextTool)) {
    toolBlocks.push({ key, locales: {}, hasImages: false });
    continue;
  }
  
  // Extract image field
  const imageMatch = registryContent.substring(startIdx, localesStart).match(/image:\s*'([^']+)'/);
  const imagesMatch = registryContent.substring(startIdx, localesStart).match(/images:\s*\{([^}]+)\}/);
  
  const images = {};
  if (imagesMatch) {
    const imgPairs = [...imagesMatch[1].matchAll(/(\w+):\s*'([^']+)'/g)];
    imgPairs.forEach(p => images[p[1]] = p[2]);
  }
  
  // Extract locale entries  
  const locales = {};
  // Find matching closing brace for locales
  let braceCount = 0;
  let localesEnd = localesStart + 10;
  for (let i = localesStart + 10; i < registryContent.length; i++) {
    if (registryContent[i] === '{') braceCount++;
    if (registryContent[i] === '}') {
      if (braceCount === 0) { localesEnd = i; break; }
      braceCount--;
    }
  }
  
  const localesBlock = registryContent.substring(localesStart + 10, localesEnd);
  const localeEntries = [...localesBlock.matchAll(/(\w{2}):\s*\{\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)'|(\w{2}):\s*\{\s*slug:\s*'([^']+)',\s*title:\s*'([^']+)'/g)];
  
  // Better regex for locale entries
  const localeRegex = /(\w{2}):\s*\{\s*slug:\s*'([^']+)'/g;
  let lm;
  while ((lm = localeRegex.exec(localesBlock)) !== null) {
    locales[lm[1]] = lm[2];
  }
  
  toolBlocks.push({ key, locales, defaultImage: imageMatch?.[1], images });
}

console.log(`\n=== CONVERTER AUDIT ===`);
console.log(`Found ${toolBlocks.length} converter tools\n`);

const ALL_LOCALES = ['pl','en','de','es','fr','pt','it','ro','nl','hu','cs','sv','da','no','fi','el'];

// ---- 2. Check locale coverage ----
console.log('--- LOCALE COVERAGE ---');
const missingLocales = [];
for (const tool of toolBlocks) {
  const missing = ALL_LOCALES.filter(l => !tool.locales[l]);
  if (missing.length > 0 && missing.length < ALL_LOCALES.length) {
    missingLocales.push({ key: tool.key, missing });
    console.log(`⚠ ${tool.key}: missing locales: ${missing.join(', ')}`);
  } else if (missing.length === ALL_LOCALES.length) {
    // Tool has no locales at all — likely deprecated
  }
}
if (missingLocales.length === 0) console.log('✅ All converter tools have full locale coverage');

// ---- 3. Check page.tsx existence for each locale/slug combo ----
console.log('\n--- PAGE EXISTENCE ---');
const LOCALE_TOOL_DIRS = {
  pl: '(pl)/narzedzia/(tools)',
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

const missingPages = [];
for (const tool of toolBlocks) {
  for (const [locale, slug] of Object.entries(tool.locales)) {
    const dir = LOCALE_TOOL_DIRS[locale];
    if (!dir) continue;
    const pagePath = path.join(ROOT, 'app', dir, slug, 'page.tsx');
    if (!fs.existsSync(pagePath)) {
      // Check desktop-only variant
      const desktopPath = path.join(ROOT, 'app', dir, '(desktop-only)', slug, 'page.tsx');
      if (!fs.existsSync(desktopPath)) {
        missingPages.push({ key: tool.key, locale, slug, dir });
        console.log(`⚠ MISSING PAGE: ${locale}/${slug} (${tool.key})`);
      }
    }
  }
}
if (missingPages.length === 0) console.log('✅ All converter pages exist');

// ---- 4. Check images ----
console.log('\n--- IMAGE LOCALIZATION ---');
const imageIssues = [];
for (const tool of toolBlocks) {
  if (Object.keys(tool.locales).length === 0) continue; // deprecated
  
  // Check if tool has images map with locale-specific images
  const hasAnyImages = Object.keys(tool.images).length > 0;
  if (!hasAnyImages && !tool.defaultImage) {
    imageIssues.push({ key: tool.key, issue: 'no images at all' });
    console.log(`⚠ ${tool.key}: no images defined`);
  }
}
if (imageIssues.length === 0) console.log('✅ All converter tools have images defined');

// ---- 5. Check JSON data files ----
console.log('\n--- JSON DATA FILES ---');
const jsonIssues = [];
for (const tool of toolBlocks) {
  for (const locale of Object.keys(tool.locales)) {
    // Try to find matching JSON file in data/{locale}/tools/
    const toolsDir = path.join(ROOT, 'data', locale, 'tools');
    if (!fs.existsSync(toolsDir)) continue;
    
    const files = fs.readdirSync(toolsDir).filter(f => f.endsWith('.json'));
    const matchingFile = files.find(f => {
      try {
        const json = JSON.parse(fs.readFileSync(path.join(toolsDir, f), 'utf8'));
        return json.toolKey === tool.key;
      } catch { return false; }
    });
    
    if (matchingFile) {
      const json = JSON.parse(fs.readFileSync(path.join(toolsDir, matchingFile), 'utf8'));
      // Check path matches expected
      const expectedDir = LOCALE_TOOL_DIRS[locale];
      if (expectedDir && json.metadata?.path) {
        const expectedPath = locale === 'pl' 
          ? `/narzedzia/${tool.locales[locale]}`
          : `/${locale}/${expectedDir.split('/').pop()}/${tool.locales[locale]}`;
        // Normalize
        const actualPath = json.metadata.path;
        if (!actualPath.endsWith(tool.locales[locale])) {
          jsonIssues.push({ key: tool.key, locale, file: matchingFile, expected: tool.locales[locale], actual: actualPath });
          console.log(`⚠ ${tool.key} [${locale}] JSON path mismatch: ${actualPath} (expected slug: ${tool.locales[locale]})`);
        }
      }
    }
  }
}
if (jsonIssues.length === 0) console.log('✅ All converter JSON data paths are correct');

// ---- Summary ----
console.log('\n=== SUMMARY ===');
console.log(`Locale coverage issues: ${missingLocales.length}`);
console.log(`Missing pages: ${missingPages.length}`);
console.log(`Image issues: ${imageIssues.length}`);
console.log(`JSON path issues: ${jsonIssues.length}`);
const total = missingLocales.length + missingPages.length + imageIssues.length + jsonIssues.length;
if (total === 0) console.log('\n✅ ALL CHECKS PASSED');
else console.log(`\n⚠ ${total} total issues found`);
