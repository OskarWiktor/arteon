/**
 * Add el, bg, ha, yo, af imports to all thin wrapper files.
 * Usage: node scripts/add-wrapper-imports.cjs
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const NEW = ['el', 'bg', 'ha', 'yo', 'af'];

// ── tools-ui wrappers (lib/i18n/tools/*.ts) ──
const TOOL_WRAPPERS = [
  { file: 'lib/i18n/tools/color-palette.ts', json: 'color-palette' },
  { file: 'lib/i18n/tools/email-signature.ts', json: 'email-signature' },
  { file: 'lib/i18n/tools/favicon.ts', json: 'favicon' },
  { file: 'lib/i18n/tools/image-resize.ts', json: 'image-resize' },
  { file: 'lib/i18n/tools/jpg-png-webp.ts', json: 'jpg-png-webp' },
  { file: 'lib/i18n/tools/meta-title.ts', json: 'meta-title' },
  { file: 'lib/i18n/tools/palette-extractor.ts', json: 'palette-extractor' },
  { file: 'lib/i18n/tools/qr-code.ts', json: 'qr-code' },
  { file: 'lib/i18n/tools/wcag-contrast.ts', json: 'wcag-contrast' },
  { file: 'lib/i18n/tools/word-count.ts', json: 'word-count' },
];

for (const { file, json } of TOOL_WRAPPERS) {
  const fp = path.join(ROOT, file);
  let src = fs.readFileSync(fp, 'utf-8');

  // Add imports after the last sl import
  const importLines = NEW.map((loc) => `import ${loc} from '@/data/${loc}/tools-ui/${json}.json';`).join('\n');
  src = src.replace(/import sl from '@\/data\/sl\/tools-ui\/[^']+';/, (m) => m + '\n' + importLines);

  // Update the export line: add new locales to the object
  src = src.replace(/lt, sl\s*\}/, 'lt, sl, el, bg, ha, yo, af }');

  fs.writeFileSync(fp, src, 'utf-8');
  console.log('  ' + file);
}

// ── ImageResizeTool/ui.ts ──
{
  const fp = path.join(ROOT, 'components/sections/tools/ImageResizeTool/ui.ts');
  let src = fs.readFileSync(fp, 'utf-8');

  const importLines = NEW.map((loc) => `import ${loc} from '@/data/${loc}/tools-ui/image-resize-editor.json';`).join('\n');
  src = src.replace(/import sl from '@\/data\/sl\/tools-ui\/image-resize-editor\.json';/, (m) => m + '\n' + importLines);

  src = src.replace(/lt, sl\s*\}/, 'lt, sl, el, bg, ha, yo, af }');

  fs.writeFileSync(fp, src, 'utf-8');
  console.log('  ImageResizeTool/ui.ts');
}

// ── Pages wrappers (lib/i18n/pages/*.ts) ──
const PAGE_WRAPPERS = [
  { file: 'lib/i18n/pages/about.ts', json: 'about' },
  { file: 'lib/i18n/pages/contact.ts', json: 'contact' },
  { file: 'lib/i18n/pages/privacy.ts', json: 'privacy' },
];

for (const { file, json } of PAGE_WRAPPERS) {
  const fp = path.join(ROOT, file);
  let src = fs.readFileSync(fp, 'utf-8');

  const importLines = NEW.map((loc) => `import ${loc}Page from '@/data/${loc}/pages/${json}.json';`).join('\n');
  src = src.replace(/import slPage from '@\/data\/sl\/pages\/[^']+';/, (m) => m + '\n' + importLines);

  // Update page data object
  src = src.replace(
    /sl: slPage,?\s*\n(\s*)\}/m,
    (match, indent) => `sl: slPage,\n${indent}el: elPage,\n${indent}bg: bgPage,\n${indent}ha: haPage,\n${indent}yo: yoPage,\n${indent}af: afPage,\n${indent}}`,
  );

  fs.writeFileSync(fp, src, 'utf-8');
  console.log('  ' + file);
}

// ── wordCount.ts (PAGE_TYPES only, uses tools-ui/word-count-page-types.json) ──
{
  const fp = path.join(ROOT, 'lib/tools/text/wordCount.ts');
  let src = fs.readFileSync(fp, 'utf-8');

  const importLines = NEW.map((loc) => `import ${loc}PageTypes from '@/data/${loc}/tools-ui/word-count-page-types.json';`).join('\n');
  src = src.replace(/import slPageTypes from '@\/data\/sl\/tools-ui\/word-count-page-types\.json';/, (m) => m + '\n' + importLines);

  // Update PAGE_TYPES object
  src = src.replace(
    /sl: slPageTypes,?\s*\n(\s*)\}/m,
    (match, indent) => `sl: slPageTypes,\n${indent}el: elPageTypes,\n${indent}bg: bgPageTypes,\n${indent}ha: haPageTypes,\n${indent}yo: yoPageTypes,\n${indent}af: afPageTypes,\n${indent}}`,
  );

  fs.writeFileSync(fp, src, 'utf-8');
  console.log('  lib/tools/text/wordCount.ts (PAGE_TYPES)');
}

// ── get-dictionary.ts ──
{
  const fp = path.join(ROOT, 'lib/i18n/get-dictionary.ts');
  let src = fs.readFileSync(fp, 'utf-8');

  const importLines = NEW.map((loc) => `import ${loc}Dict from '@/data/${loc}/dictionary.json';`).join('\n');
  src = src.replace(/import slDict from '@\/data\/sl\/dictionary\.json';/, (m) => m + '\n' + importLines);

  // Update the dictionaries object
  src = src.replace(
    /sl: async \(\) => slDict,?\s*\n(\s*)\}/m,
    (match, indent) =>
      `sl: async () => slDict,\n${indent}el: async () => elDict,\n${indent}bg: async () => bgDict,\n${indent}ha: async () => haDict,\n${indent}yo: async () => yoDict,\n${indent}af: async () => afDict,\n${indent}}`,
  );

  fs.writeFileSync(fp, src, 'utf-8');
  console.log('  lib/i18n/get-dictionary.ts');
}

console.log('\nDone! All wrapper imports updated.');
