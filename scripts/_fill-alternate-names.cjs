/**
 * Fill empty or missing alternateName arrays in converter tool schemas.
 *
 * Generates 3-4 locale-appropriate search synonyms per converter.
 * Skips files that already have non-empty alternateName arrays.
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const LOCALES = ['en', 'pl', 'cs', 'da', 'de', 'el', 'es', 'fi', 'fr', 'hu', 'it', 'nl', 'no', 'pt', 'ro', 'sv'];

// Locale-specific synonym templates. {S} = source format, {T} = target format
const TEMPLATES = {
  en: ['Convert {S} to {T}', '{S} to {T} conversion', 'Free {S} to {T} converter', 'Change {S} to {T}'],
  pl: ['Zamiana {S} na {T}', 'Konwersja {S} do {T}', 'Darmowy konwerter {S} na {T}'],
  de: ['{S} in {T} umwandeln', '{S} zu {T} konvertieren', 'Kostenloser {S}-zu-{T}-Konverter'],
  fr: ['Convertir {S} en {T}', 'Conversion {S} vers {T}', 'Convertisseur {S} en {T} gratuit'],
  es: ['Convertir {S} a {T}', 'Conversión de {S} a {T}', 'Convertidor {S} a {T} gratis'],
  pt: ['Converter {S} para {T}', 'Conversão de {S} para {T}', 'Conversor {S} para {T} grátis'],
  it: ['Convertire {S} in {T}', 'Conversione {S} in {T}', 'Convertitore {S} in {T} gratuito'],
  nl: ['{S} naar {T} omzetten', '{S} naar {T} conversie', 'Gratis {S} naar {T} converter'],
  cs: ['Převést {S} na {T}', 'Konverze {S} do {T}', 'Převodník {S} na {T} zdarma'],
  da: ['Konvertér {S} til {T}', '{S} til {T} konvertering', 'Gratis {S} til {T} konverter'],
  sv: ['Konvertera {S} till {T}', '{S} till {T} konvertering', 'Gratis {S} till {T} konverterare'],
  no: ['Konverter {S} til {T}', '{S} til {T} konvertering', 'Gratis {S} til {T} konverterer'],
  fi: ['Muunna {S} {T}-muotoon', '{S}:n muunto {T}-muotoon', 'Ilmainen {S}–{T}-muunnin'],
  hu: ['{S} konvertálása {T} formátumba', '{S}–{T} átalakítás', 'Ingyenes {S}–{T} konverter'],
  el: ['Μετατροπή {S} σε {T}', 'Μετατροπέας {S} σε {T}', 'Δωρεάν μετατροπέας {S} σε {T}'],
  ro: ['Conversie {S} în {T}', 'Convertor {S} în {T}', 'Convertor gratuit {S} în {T}'],
};

function extractFormats(filename) {
  const match = filename.match(/converter-(\w+)-to-(\w+)\.json/);
  if (!match) return null;
  return { source: match[1].toUpperCase(), target: match[2].toUpperCase() };
}

function generateNames(locale, source, target) {
  const tpls = TEMPLATES[locale];
  if (!tpls) return [];
  return tpls.map((t) => t.replace(/\{S\}/g, source).replace(/\{T\}/g, target));
}

let filled = 0;
let added = 0;
let skipped = 0;

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

  for (const file of files) {
    const formats = extractFormats(file);
    if (!formats) continue;

    const filePath = path.join(toolsDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    if (!data.schemas?.software) continue;

    const existing = data.schemas.software.alternateName;

    // Skip if already filled
    if (Array.isArray(existing) && existing.length > 0) {
      skipped++;
      continue;
    }

    const names = generateNames(locale, formats.source, formats.target);

    if (!names.length) {
      skipped++;
      continue;
    }

    const hadField = data.schemas.software.hasOwnProperty('alternateName');
    data.schemas.software.alternateName = names;

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');

    if (hadField) filled++;
    else added++;
  }
}

console.log(`Filled empty: ${filled}`);
console.log(`Added missing: ${added}`);
console.log(`Skipped (already filled): ${skipped}`);
console.log(`Total modified: ${filled + added}`);
