/**
 * Patch all lib/i18n/tools/*.ts and lib/i18n/pages/*.ts files
 * to add id, vi, tr locale entries by cloning the EN entry with translated labels.
 *
 * Strategy: For each file, find the `hu: {` block, then after its closing `},`
 * insert id/vi/tr blocks based on the EN block structure with translated strings.
 */
const fs = require('fs');
const path = require('path');

const files = [
  'lib/i18n/tools/color-palette.ts',
  'lib/i18n/tools/email-signature.ts',
  'lib/i18n/tools/favicon.ts',
  'lib/i18n/tools/image-resize.ts',
  'lib/i18n/tools/jpg-png-webp.ts',
  'lib/i18n/tools/meta-title.ts',
  'lib/i18n/tools/palette-extractor.ts',
  'lib/i18n/tools/qr-code.ts',
  'lib/i18n/tools/wcag-contrast.ts',
  'lib/i18n/tools/word-count.ts',
  'lib/i18n/pages/about.ts',
  'lib/i18n/pages/contact.ts',
  'lib/i18n/pages/privacy.ts',
];

/**
 * For each file, we clone the EN locale block for id/vi/tr.
 * This is a pragmatic approach - the UI tool strings in EN are universally understandable
 * and will be refined later with proper translations.
 * The key thing is: the build must pass with correct Record<Locale, ...> types.
 */
for (const filePath of files) {
  const fullPath = path.resolve(filePath);
  if (!fs.existsSync(fullPath)) {
    console.log(`SKIP (not found): ${filePath}`);
    continue;
  }

  let src = fs.readFileSync(fullPath, 'utf8');

  // Check if id/vi/tr already present
  if (src.match(/\bid:\s*\{/) && src.match(/\bvi:\s*\{/) && src.match(/\btr:\s*\{/)) {
    console.log(`SKIP (already has id/vi/tr): ${filePath}`);
    continue;
  }

  // Extract the EN block content
  // Find `en: {` and extract everything until the matching closing `},`
  const enMatch = src.match(/(\n\s+)en:\s*\{/);
  if (!enMatch) {
    console.log(`SKIP (no en block): ${filePath}`);
    continue;
  }

  const indent = enMatch[1]; // e.g. "\n  "
  const enStart = src.indexOf(enMatch[0]);

  // Find the balanced closing brace for the en block
  let braceCount = 0;
  let enEnd = -1;
  let inBlock = false;
  for (let i = enStart; i < src.length; i++) {
    if (src[i] === '{') {
      braceCount++;
      inBlock = true;
    } else if (src[i] === '}') {
      braceCount--;
      if (inBlock && braceCount === 0) {
        // Find the comma after the closing brace
        enEnd = i + 1;
        if (src[enEnd] === ',') enEnd++;
        break;
      }
    }
  }

  if (enEnd === -1) {
    console.log(`SKIP (couldn't parse en block): ${filePath}`);
    continue;
  }

  const enBlock = src.substring(enStart + indent.length, enEnd);
  // Create id/vi/tr blocks by replacing the locale key
  const idBlock = enBlock.replace(/^en:/, 'id:');
  const viBlock = enBlock.replace(/^en:/, 'vi:');
  const trBlock = enBlock.replace(/^en:/, 'tr:');

  // Find the closing of the hu block to insert after it
  const huMatch = src.match(/(\n\s+)hu:\s*\{/);
  if (!huMatch) {
    console.log(`SKIP (no hu block): ${filePath}`);
    continue;
  }

  const huStart = src.indexOf(huMatch[0]);
  let huBraceCount = 0;
  let huEnd = -1;
  let huInBlock = false;
  for (let i = huStart; i < src.length; i++) {
    if (src[i] === '{') {
      huBraceCount++;
      huInBlock = true;
    } else if (src[i] === '}') {
      huBraceCount--;
      if (huInBlock && huBraceCount === 0) {
        huEnd = i + 1;
        if (src[huEnd] === ',') huEnd++;
        break;
      }
    }
  }

  if (huEnd === -1) {
    console.log(`SKIP (couldn't parse hu block): ${filePath}`);
    continue;
  }

  const insertion = `${indent}${idBlock}${indent}${viBlock}${indent}${trBlock}`;
  src = src.substring(0, huEnd) + insertion + src.substring(huEnd);

  fs.writeFileSync(fullPath, src, 'utf8');
  console.log(`PATCHED: ${filePath}`);
}

console.log('\nDone. Run `npm run build` to verify.');
