/**
 * Fix untranslated English content in FI converter files.
 * All 43 FI converter files have the "What makes this converter different?" section
 * with 4 items in English instead of Finnish.
 *
 * This script replaces those 4 items with Finnish translations,
 * preserving the format-specific file names (JPG, PNG, WebP, etc.).
 */
const fs = require('fs');
const path = require('path');

const FI_TOOLS_DIR = path.join(__dirname, '..', 'data', 'fi', 'tools');

// English titles to find
const EN_TITLES = ['Complete privacy', 'No limits', 'Quality control', 'Instant conversion'];

// Finnish replacements — descriptions use {SOURCE} and {TARGET} placeholders
const FI_REPLACEMENTS = {
  'Complete privacy': {
    title: 'Täysi yksityisyys',
    descTemplate: '{SOURCE}-tiedostosi käsitellään kokonaan selaimessasi. Mitään ei ladata millekään palvelimelle – kuvasi pysyvät laitteellasi koko ajan.',
  },
  'No limits': {
    title: 'Ei rajoituksia',
    descTemplate: 'Muunna niin monta {SOURCE}-tiedostoa {TARGET}-muotoon kuin tarvitset. Ei päivittäisiä rajoituksia, ei tiedostokokorajoituksia, ei vesileimoja.',
  },
  'Quality control': {
    title: 'Laadunhallinta',
    descTemplate: 'Säädä pakkausasetuksia löytääksesi täydellisen tasapainon tiedostokoon ja kuvanlaadun välillä. Esikatsele muutoksia reaaliajassa ennen lataamista.',
  },
  'Instant conversion': {
    title: 'Välitön muunnos',
    descTemplate: 'Kaikki käsittely tapahtuu paikallisesti modernien selainrajapintojen avulla – muunnos on nopea ja toimii jopa ilman internet-yhteyttä sivun latauduttua.',
  },
};

// Extract source and target format from filename
function extractFormats(filename) {
  const match = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  if (!match) return null;
  return {
    source: match[1].toUpperCase(),
    target: match[2].toUpperCase(),
  };
}

let fixedCount = 0;
let skippedCount = 0;

const files = fs.readdirSync(FI_TOOLS_DIR).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(FI_TOOLS_DIR, file);
  const formats = extractFormats(file);
  if (!formats) {
    console.log(`SKIP (no format match): ${file}`);
    skippedCount++;
    continue;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  let changed = false;

  // Find the sectionSteps block with English titles
  for (const block of data.contentBlocks) {
    if (block.type !== 'sectionSteps' || !block.items) continue;

    for (const item of block.items) {
      if (EN_TITLES.includes(item.title)) {
        const replacement = FI_REPLACEMENTS[item.title];
        item.title = replacement.title;
        item.description = replacement.descTemplate.replace(/\{SOURCE\}/g, formats.source).replace(/\{TARGET\}/g, formats.target);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`FIXED: ${file}`);
    fixedCount++;
  } else {
    console.log(`OK (no English found): ${file}`);
    skippedCount++;
  }
}

console.log(`\nDone. Fixed: ${fixedCount}, Skipped: ${skippedCount}`);
