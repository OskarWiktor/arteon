/**
 * Fix two issues across all converter JSON files:
 * 1. Missing leading gap (between tool widget and first content section)
 * 2. Untranslated EN text in non-EN locales (imageAlt, "universal", defaultSubject, contactForm imageAlt)
 *
 * Usage: node scripts/_fix-converter-gaps-en.cjs [--dry-run]
 */
const fs = require('fs');
const path = require('path');

const DRY_RUN = process.argv.includes('--dry-run');
const DATA_DIR = path.join(__dirname, '..', 'data');
const ALL_LOCALES = ['en', 'pl', 'de', 'fr', 'es', 'it', 'pt', 'cs', 'da', 'el', 'fi', 'hu', 'nl', 'no', 'ro', 'sv'];

// ============================================================
// TRANSLATION MAPS
// ============================================================

// "SRC to TGT conversion" -> locale pattern
const IMAGE_ALT_PATTERN = {
  en: (S, T) => `${S} to ${T} conversion`,
  pl: (S, T) => `Konwersja ${S} na ${T}`,
  de: (S, T) => `${S}-zu-${T}-Konvertierung`,
  fr: (S, T) => `Conversion ${S} en ${T}`,
  es: (S, T) => `Conversi\u00f3n de ${S} a ${T}`,
  it: (S, T) => `Conversione ${S} in ${T}`,
  pt: (S, T) => `Convers\u00e3o de ${S} para ${T}`,
  cs: (S, T) => `P\u0159evod ${S} na ${T}`,
  da: (S, T) => `${S} til ${T} konvertering`,
  el: (S, T) => `\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ae ${S} \u03c3\u03b5 ${T}`,
  fi: (S, T) => `${S}-${T}-muunnos`,
  hu: (S, T) => `${S} konvert\u00e1l\u00e1s ${T} form\u00e1tumba`,
  nl: (S, T) => `${S} naar ${T} conversie`,
  no: (S, T) => `${S} til ${T} konvertering`,
  ro: (S, T) => `Conversie ${S} \u00een ${T}`,
  sv: (S, T) => `${S} till ${T} konvertering`,
};

// "SRC to TGT converter" defaultSubject -> locale pattern
const SUBJECT_PATTERN = {
  en: (S, T) => `${S} to ${T} converter`,
  pl: (S, T) => `Konwerter ${S} na ${T}`,
  de: (S, T) => `${S}-zu-${T}-Konverter`,
  fr: (S, T) => `Convertisseur ${S} en ${T}`,
  es: (S, T) => `Convertidor ${S} a ${T}`,
  it: (S, T) => `Convertitore ${S} in ${T}`,
  pt: (S, T) => `Conversor ${S} para ${T}`,
  cs: (S, T) => `P\u0159evodn\u00edk ${S} na ${T}`,
  da: (S, T) => `${S} til ${T} konverter`,
  el: (S, T) => `\u039c\u03b5\u03c4\u03b1\u03c4\u03c1\u03bf\u03c0\u03ad\u03b1\u03c2 ${S} \u03c3\u03b5 ${T}`,
  fi: (S, T) => `${S}-${T}-muunnin`,
  hu: (S, T) => `${S}-${T} konverter`,
  nl: (S, T) => `${S} naar ${T} converter`,
  no: (S, T) => `${S} til ${T} konverterer`,
  ro: (S, T) => `Convertor ${S} \u00een ${T}`,
  sv: (S, T) => `${S} till ${T} konverterare`,
};

// "Contact" imageAlt -> locale
const CONTACT_ALT = {
  en: 'Contact',
  pl: 'Kontakt',
  de: 'Kontakt',
  fr: 'Contact',
  es: 'Contacto',
  it: 'Contatto',
  pt: 'Contacto',
  cs: 'Kontakt',
  da: 'Kontakt',
  el: '\u0395\u03c0\u03b9\u03ba\u03bf\u03b9\u03bd\u03c9\u03bd\u03af\u03b1',
  fi: 'Yhteystiedot',
  hu: 'Kapcsolat',
  nl: 'Contact',
  no: 'Kontakt',
  ro: 'Contact',
  sv: 'Kontakt',
};

// "universal" -> locale translation for browser support row
const UNIVERSAL_TRANSLATION = {
  en: 'universal',
  pl: 'uniwersalna',
  de: 'universell',
  fr: 'universelle',
  es: 'universal',
  it: 'universale',
  pt: 'universal',
  cs: 'univerz\u00e1ln\u00ed',
  da: 'universel',
  el: '\u03ba\u03b1\u03b8\u03bf\u03bb\u03b9\u03ba\u03ae',
  fi: 'yleinen',
  hu: 'univerz\u00e1lis',
  nl: 'universeel',
  no: 'universell',
  ro: 'universal\u0103',
  sv: 'universell',
};

// ============================================================
// HELPERS
// ============================================================
function parseConverterName(filename) {
  const m = filename.match(/^converter-(\w+)-to-(\w+)\.json$/);
  if (!m) return null;
  return { src: m[1].toUpperCase(), tgt: m[2].toUpperCase() };
}

// ============================================================
// MAIN
// ============================================================
let stats = { gapAdded: 0, altFixed: 0, universalFixed: 0, subjectFixed: 0, contactAltFixed: 0, filesModified: 0 };

for (const locale of ALL_LOCALES) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-'));

  for (const file of files) {
    const conv = parseConverterName(file);
    if (!conv) continue;

    const filePath = path.join(toolsDir, file);
    let modified = false;

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const blocks = data.contentBlocks;
      if (!blocks || blocks.length === 0) continue;

      // 1. Insert leading gap if missing
      if (blocks[0].type !== 'gap') {
        blocks.unshift({ type: 'gap', variant: 'line' });
        modified = true;
        stats.gapAdded++;
      }

      // 2. Fix imageAlt in sectionBasic blocks
      for (const b of blocks) {
        if (b.type === 'sectionBasic' && b.imageAlt) {
          // Check if imageAlt contains EN pattern "X to Y" (case-insensitive)
          if (/\bto\b/i.test(b.imageAlt) && locale !== 'en') {
            const gen = IMAGE_ALT_PATTERN[locale];
            if (gen) {
              b.imageAlt = gen(conv.src, conv.tgt);
              modified = true;
              stats.altFixed++;
            }
          }
        }

        // 3. Fix "universal" in comparison table HTML
        if (b.type === 'sectionInfo' && b.html && b.html.includes('>universal<') && locale !== 'en') {
          const translated = UNIVERSAL_TRANSLATION[locale] || 'universal';
          b.html = b.html.replace(/>universal</g, '>' + translated + '<');
          modified = true;
          stats.universalFixed++;
        }

        // 4. Fix contactForm defaultSubject and imageAlt
        if (b.type === 'contactForm' && locale !== 'en') {
          if (b.defaultSubject && /\bto\b/i.test(b.defaultSubject)) {
            const gen = SUBJECT_PATTERN[locale];
            if (gen) {
              b.defaultSubject = gen(conv.src, conv.tgt);
              modified = true;
              stats.subjectFixed++;
            }
          }
          if (b.imageAlt === 'Contact') {
            b.imageAlt = CONTACT_ALT[locale] || 'Contact';
            modified = true;
            stats.contactAltFixed++;
          }
        }
      }

      if (modified) {
        stats.filesModified++;
        if (!DRY_RUN) {
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
        }
      }
    } catch (err) {
      console.error(`ERROR ${locale}/${file}: ${err.message}`);
    }
  }
}

console.log('=== FIX SUMMARY ===');
console.log(`Leading gaps added:      ${stats.gapAdded}`);
console.log(`imageAlt fixed:          ${stats.altFixed}`);
console.log(`"universal" translated:  ${stats.universalFixed}`);
console.log(`defaultSubject fixed:    ${stats.subjectFixed}`);
console.log(`contactForm alt fixed:   ${stats.contactAltFixed}`);
console.log(`Total files modified:    ${stats.filesModified}`);
if (DRY_RUN) console.log('(dry run - no files were modified)');
