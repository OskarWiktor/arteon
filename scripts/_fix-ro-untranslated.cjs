/**
 * Fix untranslated English content in RO converter files.
 * 12 RO converter files have English howTo.steps, howTo.name, and featureList.
 *
 * This script:
 * 1. Translates featureList entries to Romanian
 * 2. Translates howTo.name to Romanian
 * 3. Translates howTo.steps to Romanian
 *
 * Only touches files that still have English content (safe to re-run).
 */
const fs = require('fs');
const path = require('path');

const RO_TOOLS_DIR = path.join(__dirname, '..', 'data', 'ro', 'tools');

// Map English featureList items to Romanian
const FEATURE_MAP = {
  'HEIC to JPG conversion': 'Conversie HEIC în JPG',
  'HEIC to PNG conversion': 'Conversie HEIC în PNG',
  'HEIC to WebP conversion': 'Conversie HEIC în WebP',
  'AVIF to JPG conversion': 'Conversie AVIF în JPG',
  'AVIF to PNG conversion': 'Conversie AVIF în PNG',
  'AVIF to WebP conversion': 'Conversie AVIF în WebP',
  'BMP to WebP conversion': 'Conversie BMP în WebP',
  'GIF to WebP conversion': 'Conversie GIF în WebP',
  'SVG to WebP conversion': 'Conversie SVG în WebP',
  'TIFF to JPG conversion': 'Conversie TIFF în JPG',
  'TIFF to PNG conversion': 'Conversie TIFF în PNG',
  'TIFF to WebP conversion': 'Conversie TIFF în WebP',
  'Adjustable quality (60-95%)': 'Calitate reglabilă (60–95%)',
  'Batch conversion': 'Conversie în lot',
  'Local browser processing': 'Procesare locală în browser',
  'No file uploads': 'Fără încărcare de fișiere',
  'JPG quality control': 'Control calitate JPG',
  'PNG quality control': 'Control calitate PNG',
  'WebP quality control': 'Control calitate WebP',
  'WEBP quality control': 'Control calitate WEBP',
};

// Extract source and target from filename
function extractFormats(filename) {
  const match = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  if (!match) return null;
  return { source: match[1].toUpperCase(), target: match[2].toUpperCase() };
}

// Romanian howTo step templates per target format
function getRoSteps(source, target) {
  const targetLower = target.toLowerCase();
  const qualityTargets = ['JPG', 'WEBP', 'AVIF'];
  const hasQuality = qualityTargets.includes(target);

  return [
    {
      name: `Adăugați fișiere ${source}`,
      text: `Trageți fișierele ${source} în zona de încărcare sau faceți clic pentru a le selecta de pe dispozitiv.`,
    },
    hasQuality
      ? {
          name: `Setați calitatea ${target}`,
          text: `Ajustați glisorul de calitate (60–95%). Valoarea implicită este 85%.`,
        }
      : {
          name: `Configurați opțiunile`,
          text: `Alegeți setările de calitate și ieșire preferate pentru conversia în ${target}.`,
        },
    {
      name: `Descărcați ${target}`,
      text: `Descărcați fișierele convertite individual sau pe toate odată.`,
    },
  ];
}

let fixedCount = 0;
let skippedCount = 0;

const files = fs.readdirSync(RO_TOOLS_DIR).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

for (const file of files) {
  const filePath = path.join(RO_TOOLS_DIR, file);
  const formats = extractFormats(file);
  if (!formats) {
    skippedCount++;
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(raw);
  let changed = false;

  // Fix featureList
  if (data.schemas?.software?.featureList) {
    const fl = data.schemas.software.featureList;
    for (let i = 0; i < fl.length; i++) {
      if (FEATURE_MAP[fl[i]]) {
        fl[i] = FEATURE_MAP[fl[i]];
        changed = true;
      }
    }
  }

  // Fix howTo.name (if in English pattern "X to Y")
  if (data.schemas?.howTo?.name) {
    const name = data.schemas.howTo.name;
    if (/^[A-Z]+ to [A-Z]+$/.test(name)) {
      data.schemas.howTo.name = `Cum să convertiți ${formats.source} în ${formats.target}`;
      changed = true;
    }
  }

  // Fix howTo.steps (if first step name starts with "Add")
  if (data.schemas?.howTo?.steps?.length) {
    const firstStep = data.schemas.howTo.steps[0];
    if (firstStep.name && firstStep.name.startsWith('Add ')) {
      data.schemas.howTo.steps = getRoSteps(formats.source, formats.target);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
    console.log(`FIXED: ${file}`);
    fixedCount++;
  } else {
    skippedCount++;
  }
}

console.log(`\nDone. Fixed: ${fixedCount}, Skipped: ${skippedCount}`);
