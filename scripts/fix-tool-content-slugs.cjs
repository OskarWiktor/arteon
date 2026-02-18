/**
 * Fix tool content slugs: replace EN slugs with locale-specific slugs
 * in data/{locale}/tools/*.json for new locales (el, bg, ha, yo, af).
 * Usage: node scripts/fix-tool-content-slugs.cjs
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

const NEW_LOCALES = ['el', 'bg', 'ha', 'yo', 'af'];

// Map: content file name → tool registry key
const FILE_TO_KEY = {
  'webp-converter.json': 'jpgToWebp',
  'image-editor.json': 'imageResize',
  'favicon.json': 'favicon',
  'meta-counter.json': 'metaCounter',
  'word-counter.json': 'wordCounter',
  'email-signature.json': 'emailSignature',
  'contrast-checker.json': 'contrastChecker',
  'palette-extractor.json': 'paletteExtractor',
  'color-palette.json': 'colorPalette',
  'qr-code.json': 'qrCode',
};

// EN slugs (read from en content files)
const EN_SLUGS = {};
for (const [file, key] of Object.entries(FILE_TO_KEY)) {
  const enFile = path.join(ROOT, 'data', 'en', 'tools', file);
  const data = JSON.parse(fs.readFileSync(enFile, 'utf-8'));
  // Extract slug from the path: /en/tools/{slug}
  const parts = data.metadata.path.split('/');
  EN_SLUGS[key] = parts[parts.length - 1];
}

// Locale-specific slugs from tool-registry (hardcoded from what we added)
const LOCALE_SLUGS = {
  el: {
    jpgToWebp: 'metatropeas-jpg-png-se-webp',
    imageResize: 'epexergasia-eikonas',
    favicon: 'dorean-dimiourgia-favicon',
    metaCounter: 'elegkhos-meta-titlou-kai-perigrafis',
    wordCounter: 'metritis-lexeon-kai-charaktiron',
    emailSignature: 'dorean-dimiourgia-ypografis-email',
    contrastChecker: 'elegkhos-kontrast-chromaton',
    paletteExtractor: 'exagogi-chromaton-apo-eikona',
    colorPalette: 'dimiourgia-paletas-chromaton',
    qrCode: 'dorean-dimiourgia-kodikou-qr',
  },
  bg: {
    jpgToWebp: 'konvertor-jpg-png-v-webp',
    imageResize: 'redaktor-na-izobrazhenia',
    favicon: 'bezplaten-generator-na-favicon',
    metaCounter: 'proverka-na-meta-zaglavie-i-opisanie',
    wordCounter: 'broiach-na-dumi-i-simvoli',
    emailSignature: 'bezplaten-generator-na-podpis-za-email',
    contrastChecker: 'proverka-na-kontrast-na-tsvetove',
    paletteExtractor: 'ekstraktor-na-tsvetove-ot-izobrazhenie',
    colorPalette: 'generator-na-tsvetovi-palitri',
    qrCode: 'bezplaten-generator-na-qr-kod',
  },
  ha: {
    jpgToWebp: 'mai-canza-jpg-png-zuwa-webp',
    imageResize: 'editan-hoto',
    favicon: 'samar-da-favicon-kyauta',
    metaCounter: 'tantance-meta-take-da-bayani',
    wordCounter: 'kidaya-kalmomi-da-haruffa',
    emailSignature: 'samar-da-sa-hannu-imel-kyauta',
    contrastChecker: 'tantance-bambancin-launuka',
    paletteExtractor: 'fitar-launuka-daga-hoto',
    colorPalette: 'samar-da-fayafayan-launuka',
    qrCode: 'samar-da-lambar-qr-kyauta',
  },
  yo: {
    jpgToWebp: 'oluyipada-jpg-png-si-webp',
    imageResize: 'olootu-aworan',
    favicon: 'olupilese-favicon-ofe',
    metaCounter: 'atunyewo-meta-akole-ati-apejuwe',
    wordCounter: 'oluka-oro-ati-ohun-kikoo',
    emailSignature: 'olupilese-ibuwolu-imeeli-ofe',
    contrastChecker: 'atunyewo-iyato-awon-awoo',
    paletteExtractor: 'iseduro-awoo-lati-aworan',
    colorPalette: 'olupilese-paleti-awoo',
    qrCode: 'olupilese-koodu-qr-ofe',
  },
  af: {
    jpgToWebp: 'jpg-png-na-webp-omskakelaar',
    imageResize: 'beeldredigeerder',
    favicon: 'gratis-favicon-generator',
    metaCounter: 'meta-titel-en-beskrywing-nagaaier',
    wordCounter: 'woord-en-karakter-teller',
    emailSignature: 'gratis-e-pos-handtekening-generator',
    contrastChecker: 'kleurkontras-nagaaier',
    paletteExtractor: 'kleur-onttrekker-uit-beeld',
    colorPalette: 'kleurpalet-generator',
    qrCode: 'gratis-qr-kode-generator',
  },
};

let fixCount = 0;

for (const locale of NEW_LOCALES) {
  for (const [file, key] of Object.entries(FILE_TO_KEY)) {
    const fp = path.join(ROOT, 'data', locale, 'tools', file);
    let content = fs.readFileSync(fp, 'utf-8');

    const enSlug = EN_SLUGS[key];
    const newSlug = LOCALE_SLUGS[locale][key];

    if (enSlug && newSlug && content.includes(enSlug)) {
      content = content.split(enSlug).join(newSlug);
      fs.writeFileSync(fp, content, 'utf-8');
      fixCount++;
      console.log(`  ${locale}/tools/${file}: ${enSlug} → ${newSlug}`);
    }
  }
}

console.log(`\nDone! Fixed ${fixCount} files.`);
