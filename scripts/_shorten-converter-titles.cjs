/**
 * One-time script: shorten converter titles in tool-registry.ts
 * "Konwerter X na Y" → "X na Y" (and equivalent for all 16 locales)
 *
 * Only modifies `title: '...'` fields — slugs & descriptions are untouched.
 */
const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(file, 'utf8');
const original = content;

// ---------- PREFIX removals (word at start of title) ----------

// PL: "Konwerter X na Y" → "X na Y"
content = content.replace(/title: 'Konwerter /g, "title: '");

// ES: "Convertidor X a Y" → "X a Y"
content = content.replace(/title: 'Convertidor /g, "title: '");

// FR: "Convertisseur X en Y" → "X en Y"
content = content.replace(/title: 'Convertisseur /g, "title: '");

// PT: "Conversor X para Y" → "X para Y"
content = content.replace(/title: 'Conversor /g, "title: '");

// IT: "Convertitore X in Y" → "X in Y"
content = content.replace(/title: 'Convertitore /g, "title: '");

// RO: "Convertor X în Y" → "X în Y"
content = content.replace(/title: 'Convertor /g, "title: '");

// CS: "Převodník X na Y" → "X na Y"
content = content.replace(/title: 'Převodník /g, "title: '");

// EL: "Μετατροπέας X σε Y" → "X σε Y"
content = content.replace(/title: 'Μετατροπέας /g, "title: '");

// ---------- SUFFIX removals (word at end of title) ----------

// EN + NL: "X to Y converter" / "X naar Y converter" → "X to Y" / "X naar Y"
content = content.replace(/(title: '[^']*) converter'/g, "$1'");

// DE: "X zu Y Konverter" (spaces) or "X-zu-Y-Konverter" (hyphens)
content = content.replace(/(title: '[^']*) Konverter'/g, "$1'");
content = content.replace(/(title: '[^']*)-Konverter'/g, "$1'");

// HU: "X Y konverter" → "X Y"
content = content.replace(/(title: '[^']*) konverter'/g, "$1'");

// SV: "X till Y-konverterare" → "X till Y"
content = content.replace(/(title: '[^']*)-konverterare'/g, "$1'");

// DA: "X til Y-konverter" → "X til Y"
content = content.replace(/(title: '[^']*)-konverter'/g, "$1'");

// NO: "X til Y-konverterer" → "X til Y"
content = content.replace(/(title: '[^']*)-konverterer'/g, "$1'");

// FI: "X Y -muunnin" → "X Y"
content = content.replace(/(title: '[^']*) -muunnin'/g, "$1'");

// ---------- Write & report ----------
if (content === original) {
  console.log('No changes made.');
  process.exit(0);
}

fs.writeFileSync(file, content, 'utf8');

// Count changed lines
const origLines = original.split('\n');
const newLines = content.split('\n');
let changed = 0;
for (let i = 0; i < origLines.length; i++) {
  if (origLines[i] !== newLines[i]) changed++;
}
console.log(`Done — ${changed} lines changed in tool-registry.ts`);
