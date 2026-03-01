/**
 * Fix missing diacritics in tool-registry.ts converter locale entries.
 * Reads the TS file as text and applies the same word-level replacements.
 *
 * Usage: node scripts/_fix-registry-diacritics.cjs [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const DRY = process.argv.includes('--dry-run');
const FILE = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');

// Same replacement maps as _fix-diacritics.cjs but focused on short strings
// that appear in tool-registry locale entries (title + description fields)
const REPLACEMENTS = {
  ro: [
    ['Converteste fisiere', 'Convertește fișiere'],
    ['Converteste fotografii', 'Convertește fotografii'],
    ['Converteste imagini', 'Convertește imagini'],
    ['Converteste grafice', 'Convertește grafice'],
    ["title: 'Convertor BMP in AVIF'", "title: 'Convertor BMP în AVIF'"],
    ["title: 'Convertor GIF in AVIF'", "title: 'Convertor GIF în AVIF'"],
    ["title: 'Convertor HEIC in AVIF'", "title: 'Convertor HEIC în AVIF'"],
    ["title: 'Convertor HEIC in TIFF'", "title: 'Convertor HEIC în TIFF'"],
    ["title: 'Convertor JPG in AVIF'", "title: 'Convertor JPG în AVIF'"],
    ["title: 'Convertor JPG in GIF'", "title: 'Convertor JPG în GIF'"],
    ["title: 'Convertor JPG in TIFF'", "title: 'Convertor JPG în TIFF'"],
    ["title: 'Convertor PNG in AVIF'", "title: 'Convertor PNG în AVIF'"],
    ["title: 'Convertor PNG in GIF'", "title: 'Convertor PNG în GIF'"],
    ["title: 'Convertor PNG in TIFF'", "title: 'Convertor PNG în TIFF'"],
    ["title: 'Convertor SVG in AVIF'", "title: 'Convertor SVG în AVIF'"],
    ["title: 'Convertor SVG in GIF'", "title: 'Convertor SVG în GIF'"],
    ["title: 'Convertor SVG in TIFF'", "title: 'Convertor SVG în TIFF'"],
    ["title: 'Convertor TIFF in AVIF'", "title: 'Convertor TIFF în AVIF'"],
    ["title: 'Convertor WebP in AVIF'", "title: 'Convertor WebP în AVIF'"],
    ["title: 'Convertor WebP in GIF'", "title: 'Convertor WebP în GIF'"],
    ["title: 'Convertor WebP in TIFF'", "title: 'Convertor WebP în TIFF'"],
    ["title: 'Convertor BMP in GIF'", "title: 'Convertor BMP în GIF'"],
    ["title: 'Convertor BMP in TIFF'", "title: 'Convertor BMP în TIFF'"],
    ["title: 'Convertor AVIF in JPG'", "title: 'Convertor AVIF în JPG'"],
    ["title: 'Convertor AVIF in PNG'", "title: 'Convertor AVIF în PNG'"],
    ["title: 'Convertor AVIF in WebP'", "title: 'Convertor AVIF în WebP'"],
    ['Converteste fisiere BMP necomprimate in AVIF ultracompact', 'Convertește fișiere BMP necomprimate în AVIF ultracompact'],
    ['fisiere BMP necomprimate in', 'fișiere BMP necomprimate în'],
    ['fisiere AVIF in JPG universal', 'fișiere AVIF în JPG universal'],
    ['fisiere AVIF in PNG', 'fișiere AVIF în PNG'],
    ['fisiere AVIF in WebP', 'fișiere AVIF în WebP'],
    ['Fisier mai mic, compatibilitàte totală', 'Fișier mai mic, compatibilitate totală'],
    ['CompatibilitÃ\u00a0te', 'compatibilitate'],
    ['compatibilitàte', 'compatibilitate'],
  ],
  cs: [
    ["description: 'Převeďte nekomprimované soubory BMP na ultrakompaktni AVIF'", "description: 'Převeďte nekomprimované soubory BMP na ultrakompaktní AVIF'"],
    ['ultrakompaktni AVIF', 'ultrakompaktní AVIF'],
    ['na profesionalni TIFF', 'na profesionální TIFF'],
    ['profesionalni format TIFF', 'profesionální formát TIFF'],
    ['na univerzalni JPG', 'na univerzální JPG'],
    ['Kompatibilni s kazdym programem', 'Kompatibilní s každým programem'],
  ],
  hu: [
    ['Tomoritetlen BMP fajlok', 'Tömörítetlen BMP fájlok'],
    ['univerzalis JPG-re', 'univerzális JPG-re'],
    ['fajlok konvertálása', 'fájlok konvertálása'],
  ],
  el: [
    ['ασυμπιεστα αρχεια BMP σε υπερσυμπαγες AVIF', 'ασυμπίεστα αρχεία BMP σε υπερσυμπαγές AVIF'],
    ['Μετατρεψτε αρχεια AVIF σε καθολικο JPG', 'Μετατρέψτε αρχεία AVIF σε καθολικό JPG'],
    ['Συμβατο με καθε προγραμμα', 'Συμβατό με κάθε πρόγραμμα'],
  ],
};

let text = fs.readFileSync(FILE, 'utf8');
let changeCount = 0;

for (const [locale, reps] of Object.entries(REPLACEMENTS)) {
  for (const [from, to] of reps) {
    if (from === to) continue;
    if (text.includes(from)) {
      text = text.split(from).join(to);
      changeCount++;
    }
  }
}

console.log(`Applied ${changeCount} replacements to tool-registry.ts`);

if (!DRY) {
  fs.writeFileSync(FILE, text, 'utf8');
  console.log('File saved.');
} else {
  console.log('(dry run - file not modified)');
}
