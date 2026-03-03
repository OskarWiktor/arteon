/**
 * One-time script: fix converter images across the project
 *
 * 1. tool-registry.ts — expand `images` for 20 converters that only have `pl`
 * 2. data/<locale>/tools/converter-*.json — replace PL imageSrc with locale-correct
 *    images in sectionBasic, contactForm, hero.backgroundImage, metadata.ogImage
 */
const fs = require('fs');
const path = require('path');

// ── Image map: locale → image filename in jpg-png-to-webp-converter/ ──
const IMG_DIR = '/assets/tools/jpg-png-to-webp-converter';
const IMG_MAP = {
  pl: 'jpg-png-na-webp-bez-limitu-pl.webp',
  en: 'jpg-png-to-webp-unlimited-en.webp',
  es: 'convertidor-jpg-png-a-webp-es.webp',
  fr: 'convertisseur-jpg-png-en-webp-fr.webp',
  de: 'jpg-png-zu-webp-konverter-de.webp',
  pt: 'conversor-jpg-png-para-webp-pt.webp',
  it: 'convertitore-jpg-png-in-webp-it.webp',
  ro: 'convertor-jpg-png-in-webp-ro.webp',
  nl: 'jpg-png-naar-webp-converter-nl.webp',
  hu: 'jpg-png-webp-konverter-hu.webp',
  cs: 'konvertor-jpg-png-na-webp-cs.webp',
  sv: 'jpg-png-till-webp-konverterare-sv.webp',
  da: 'jpg-png-til-webp-konverter-da.webp',
  no: 'jpg-png-til-webp-konverterer-no.webp',
  fi: 'jpg-png-webp-muunnin-fi.webp',
  el: 'metatropeas-jpg-png-se-webp-el.webp',
};

const PL_IMG = `${IMG_DIR}/${IMG_MAP.pl}`;

function imgForLocale(locale) {
  return `${IMG_DIR}/${IMG_MAP[locale] || IMG_MAP.pl}`;
}

// ── PART 1: Fix tool-registry.ts ──────────────────────────────────────
function fixRegistry() {
  const file = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
  let content = fs.readFileSync(file, 'utf8');

  // Build the full images block (indented with 6 spaces as in existing entries)
  const fullImagesBlock = Object.entries(IMG_MAP)
    .map(([loc, fname]) => `      ${loc}: '${IMG_DIR}/${fname}',`)
    .join('\n');

  // Replace single-locale images blocks:
  //   images: {
  //     pl: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
  //   },
  const singlePl = `images: {\n      pl: '${PL_IMG}',\n    },`;
  const fullBlock = `images: {\n${fullImagesBlock}\n    },`;

  const count = (content.match(new RegExp(singlePl.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
  content = content.split(singlePl).join(fullBlock);

  fs.writeFileSync(file, content, 'utf8');
  console.log(`[registry] Expanded ${count} images blocks to all 16 locales`);
}

// ── PART 2: Fix JSON data files ───────────────────────────────────────
function fixJsonFiles() {
  const dataDir = path.join(__dirname, '..', 'data');
  const locales = Object.keys(IMG_MAP).filter(l => l !== 'pl');
  let filesFixed = 0;
  let blocksFixed = 0;

  for (const locale of locales) {
    const toolsDir = path.join(dataDir, locale, 'tools');
    if (!fs.existsSync(toolsDir)) continue;

    const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('converter-') && f.endsWith('.json'));

    for (const file of files) {
      const filePath = path.join(toolsDir, file);
      const raw = fs.readFileSync(filePath, 'utf8');
      const correctImg = imgForLocale(locale);
      let modified = false;

      // Simple string replace: swap PL image path with locale-correct one
      if (raw.includes(PL_IMG)) {
        const updated = raw.split(PL_IMG).join(correctImg);
        fs.writeFileSync(filePath, updated, 'utf8');
        const replacements = (raw.match(new RegExp(PL_IMG.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
        blocksFixed += replacements;
        modified = true;
      }

      if (modified) filesFixed++;
    }
  }

  console.log(`[json] Fixed ${blocksFixed} image references across ${filesFixed} files`);
}

// ── Run ───────────────────────────────────────────────────────────────
fixRegistry();
fixJsonFiles();
console.log('Done!');
