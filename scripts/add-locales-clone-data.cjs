/**
 * Clone tools-ui, pages, and tools content files from EN for new locales.
 * Dictionary files are created separately as JSON.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const DATA = path.join(ROOT, 'data');

const NEW_LOCALES = ['el', 'bg', 'ha', 'yo', 'af'];

const LOCALE_PATHS = {
  el: { basePath: '/el/ergaleia', aboutHref: '/el/sxetika-me-emas', contactHref: '/el/epikoinonia', privacyHref: '/el/politiki-aporritou' },
  bg: { basePath: '/bg/instrumenti', aboutHref: '/bg/za-nas', contactHref: '/bg/kontakt', privacyHref: '/bg/politika-za-poveritelnost' },
  ha: { basePath: '/ha/kayan-aiki', aboutHref: '/ha/game-da-mu', contactHref: '/ha/tuntube-mu', privacyHref: '/ha/manufar-sirri' },
  yo: { basePath: '/yo/awon-irinse', aboutHref: '/yo/nipa-wa', contactHref: '/yo/kan-si-wa', privacyHref: '/yo/ilana-asiri' },
  af: { basePath: '/af/gereedskap', aboutHref: '/af/oor-ons', contactHref: '/af/kontak', privacyHref: '/af/privaatheidsbeleid' },
};

const TOOLS_UI_FILES = [
  'color-palette.json',
  'email-signature.json',
  'favicon.json',
  'image-resize.json',
  'image-resize-editor.json',
  'jpg-png-webp.json',
  'meta-title.json',
  'palette-extractor.json',
  'qr-code.json',
  'wcag-contrast.json',
  'word-count.json',
  'word-count-page-types.json',
];

const PAGE_FILES = ['about.json', 'contact.json', 'privacy.json'];

const TOOL_CONTENT_FILES = [
  'color-palette.json',
  'contrast-checker.json',
  'email-signature.json',
  'favicon.json',
  'image-editor.json',
  'webp-converter.json',
  'meta-counter.json',
  'palette-extractor.json',
  'qr-code.json',
  'word-counter.json',
];

function writeFile(fp, content) {
  fs.mkdirSync(path.dirname(fp), { recursive: true });
  fs.writeFileSync(fp, content, 'utf-8');
}

// 1. Tools UI
console.log('=== Tools UI ===');
for (const loc of NEW_LOCALES) {
  for (const file of TOOLS_UI_FILES) {
    const src = fs.readFileSync(path.join(DATA, 'en', 'tools-ui', file), 'utf-8');
    writeFile(path.join(DATA, loc, 'tools-ui', file), src);
  }
  console.log('  ' + loc + '/tools-ui/ (' + TOOLS_UI_FILES.length + ' files)');
}

// 2. Pages
console.log('=== Pages ===');
for (const loc of NEW_LOCALES) {
  for (const file of PAGE_FILES) {
    const src = fs.readFileSync(path.join(DATA, 'en', 'pages', file), 'utf-8');
    writeFile(path.join(DATA, loc, 'pages', file), src);
  }
  console.log('  ' + loc + '/pages/ (' + PAGE_FILES.length + ' files)');
}

// 3. Tools content (update locale + paths)
console.log('=== Tools content ===');
for (const loc of NEW_LOCALES) {
  const lp = LOCALE_PATHS[loc];
  for (const file of TOOL_CONTENT_FILES) {
    let src = fs.readFileSync(path.join(DATA, 'en', 'tools', file), 'utf-8');
    // Replace locale field
    src = src.replace(/"locale":\s*"en"/, '"locale": "' + loc + '"');
    // Replace paths
    src = src.replace(/\/en\/tools/g, lp.basePath);
    src = src.replace(/\/en\/about/g, lp.aboutHref);
    src = src.replace(/\/en\/contact/g, lp.contactHref);
    src = src.replace(/\/en\/privacy-policy/g, lp.privacyHref);
    writeFile(path.join(DATA, loc, 'tools', file), src);
  }
  console.log('  ' + loc + '/tools/ (' + TOOL_CONTENT_FILES.length + ' files)');
}

console.log('\nDone! All data files cloned for: ' + NEW_LOCALES.join(', '));
