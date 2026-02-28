/**
 * Fix converter image paths in:
 * 1. JSON data files (ogImage + backgroundImage) — use locale-specific old converter image
 * 2. Hub pages (topImageSrc) — fix broken filenames
 */
const fs = require('fs');
const path = require('path');

const BASE = '/assets/tools/jpg-png-to-webp-converter';

// Actual filenames on disk per locale
const LOCALE_IMAGE = {
  pl: `${BASE}/jpg-png-na-webp-bez-limitu-pl.webp`,
  en: `${BASE}/jpg-png-to-webp-unlimited-en.webp`,
  es: `${BASE}/convertidor-jpg-png-a-webp-es.webp`,
  fr: `${BASE}/convertisseur-jpg-png-en-webp-fr.webp`,
  de: `${BASE}/jpg-png-zu-webp-konverter-de.webp`,
  pt: `${BASE}/conversor-jpg-png-para-webp-pt.webp`,
  it: `${BASE}/convertitore-jpg-png-in-webp-it.webp`,
  ro: `${BASE}/convertor-jpg-png-in-webp-ro.webp`,
  nl: `${BASE}/jpg-png-naar-webp-converter-nl.webp`,
  hu: `${BASE}/jpg-png-webp-konverter-hu.webp`,
  cs: `${BASE}/konvertor-jpg-png-na-webp-cs.webp`,
  sv: `${BASE}/jpg-png-till-webp-konverterare-sv.webp`,
  da: `${BASE}/jpg-png-til-webp-konverter-da.webp`,
  no: `${BASE}/jpg-png-til-webp-konverterer-no.webp`,
  fi: `${BASE}/jpg-png-webp-muunnin-fi.webp`,
  el: `${BASE}/metatropeas-jpg-png-se-webp-el.webp`,
};

const LOCALES = Object.keys(LOCALE_IMAGE);
const dataRoot = path.resolve(__dirname, '..', 'data');

// --- Part 1: Fix JSON data files ---
let jsonFixed = 0;
for (const locale of LOCALES) {
  const toolsDir = path.join(dataRoot, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('converter-') && f.endsWith('.json'));
  for (const file of files) {
    const fp = path.join(toolsDir, file);
    let content = fs.readFileSync(fp, 'utf8');
    const correctImage = LOCALE_IMAGE[locale];

    // Replace any jpg-png-to-webp-converter image path with the correct locale one
    const oldPattern = /\/assets\/tools\/jpg-png-to-webp-converter\/[^"]+\.webp/g;
    const newContent = content.replace(oldPattern, correctImage);

    if (newContent !== content) {
      fs.writeFileSync(fp, newContent, 'utf8');
      jsonFixed++;
    }
  }
}
console.log(`JSON data files fixed: ${jsonFixed}`);

// --- Part 2: Fix hub pages topImageSrc ---
// Map of broken filename → correct filename per locale
const HUB_IMAGE_FIXES = {
  pl: { broken: 'konwerter-jpg-na-webp-pl.webp', correct: 'jpg-png-na-webp-bez-limitu-pl.webp' },
  en: { broken: 'jpg-to-webp-converter-en.webp', correct: 'jpg-png-to-webp-unlimited-en.webp' },
  es: { broken: 'convertidor-jpg-a-webp-es.webp', correct: 'convertidor-jpg-png-a-webp-es.webp' },
  fr: { broken: 'convertisseur-jpg-en-webp-fr.webp', correct: 'convertisseur-jpg-png-en-webp-fr.webp' },
  de: { broken: 'jpg-zu-webp-konverter-de.webp', correct: 'jpg-png-zu-webp-konverter-de.webp' },
  pt: { broken: 'conversor-jpg-para-webp-pt.webp', correct: 'conversor-jpg-png-para-webp-pt.webp' },
  it: { broken: 'convertitore-jpg-in-webp-it.webp', correct: 'convertitore-jpg-png-in-webp-it.webp' },
  ro: { broken: 'convertor-jpg-in-webp-ro.webp', correct: 'convertor-jpg-png-in-webp-ro.webp' },
  nl: { broken: 'jpg-naar-webp-converter-nl.webp', correct: 'jpg-png-naar-webp-converter-nl.webp' },
  hu: { broken: 'jpg-webp-konverter-hu.webp', correct: 'jpg-png-webp-konverter-hu.webp' },
  cs: { broken: 'prevodnik-jpg-na-webp-cs.webp', correct: 'konvertor-jpg-png-na-webp-cs.webp' },
  sv: { broken: 'jpg-till-webp-konverterare-sv.webp', correct: 'jpg-png-till-webp-konverterare-sv.webp' },
  da: { broken: 'jpg-til-webp-konverter-da.webp', correct: 'jpg-png-til-webp-konverter-da.webp' },
  no: { broken: 'jpg-til-webp-konverterer-no.webp', correct: 'jpg-png-til-webp-konverterer-no.webp' },
  fi: { broken: 'jpg-webp-muunnin-fi.webp', correct: 'jpg-png-webp-muunnin-fi.webp' },
  el: { broken: 'metatropeas-jpg-se-webp-el.webp', correct: 'metatropeas-jpg-png-se-webp-el.webp' },
};

// Hub page paths
const appRoot = path.resolve(__dirname, '..', 'app');
const HUB_PAGES = [
  { locale: 'pl', file: path.join(appRoot, '(pl)', 'narzedzia', 'page.tsx') },
  { locale: 'en', file: path.join(appRoot, 'en', 'tools', 'page.tsx') },
  { locale: 'es', file: path.join(appRoot, 'es', 'herramientas', 'page.tsx') },
  { locale: 'fr', file: path.join(appRoot, 'fr', 'outils', 'page.tsx') },
  { locale: 'de', file: path.join(appRoot, 'de', 'werkzeuge', 'page.tsx') },
  { locale: 'pt', file: path.join(appRoot, 'pt', 'ferramentas', 'page.tsx') },
  { locale: 'it', file: path.join(appRoot, 'it', 'strumenti', 'page.tsx') },
  { locale: 'ro', file: path.join(appRoot, 'ro', 'instrumente', 'page.tsx') },
  { locale: 'nl', file: path.join(appRoot, 'nl', 'tools', 'page.tsx') },
  { locale: 'hu', file: path.join(appRoot, 'hu', 'eszkozok', 'page.tsx') },
  { locale: 'cs', file: path.join(appRoot, 'cs', 'nastroje', 'page.tsx') },
  { locale: 'sv', file: path.join(appRoot, 'sv', 'verktyg', 'page.tsx') },
  { locale: 'da', file: path.join(appRoot, 'da', 'vaerktojer', 'page.tsx') },
  { locale: 'no', file: path.join(appRoot, 'no', 'verktoy', 'page.tsx') },
  { locale: 'fi', file: path.join(appRoot, 'fi', 'tyokalut', 'page.tsx') },
  { locale: 'el', file: path.join(appRoot, 'el', 'ergaleia', 'page.tsx') },
];

let hubFixed = 0;
for (const { locale, file } of HUB_PAGES) {
  if (!fs.existsSync(file)) { console.log(`  SKIP (not found): ${file}`); continue; }
  const fix = HUB_IMAGE_FIXES[locale];
  if (!fix) continue;

  let content = fs.readFileSync(file, 'utf8');
  const newContent = content.replaceAll(fix.broken, fix.correct);
  if (newContent !== content) {
    fs.writeFileSync(file, newContent, 'utf8');
    hubFixed++;
    console.log(`  Hub fixed: ${locale}`);
  }
}
console.log(`Hub pages fixed: ${hubFixed}`);
