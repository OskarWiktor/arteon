/**
 * Migration script: Fix duplicate comparison tables in converter tool JSON files.
 *
 * For each converter across all 16 locales:
 * 1. Remove duplicate sectionInfo blocks containing HTML <table> (keep sectionFeatureComparison)
 * 2. Replace boolean "browser support" values with specific text (version strings)
 * 3. Add "color depth" feature row for image converters
 * 4. Add featureLabel property (locale-aware column header)
 * 5. Remove orphaned gap blocks adjacent to removed sections
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');

// ═══════════════════════════════════════════════════════════════════
//  FACTUAL FORMAT DATABASE (verified browser support & color depth)
// ═══════════════════════════════════════════════════════════════════

// Browser support strings — universal (no locale translation needed for version numbers)
const BROWSER_SUPPORT = {
  avif: 'Chrome 85+, Firefox 93+, Edge 85+, Safari 16.4+',
  webp: 'Chrome 32+, Firefox 65+, Edge 18+, Safari 14+',
  jpg: '__ALL__',
  png: '__ALL__',
  gif: '__ALL__',
  bmp: '__ALL__',
  svg: '__ALL__',
  tiff: '__SAFARI__',
  heic: 'Safari 13+ (macOS / iOS)',
  pdf: '__BUILTIN__',
};

// Color depth per format — mostly universal technical notation
const COLOR_DEPTH = {
  avif: '8/10/12-bit, HDR',
  webp: '8-bit (16.7M)',
  jpg: '8-bit (16.7M)',
  png: '8/16-bit',
  gif: '8-bit (256)',
  bmp: '1/4/8/24/32-bit',
  svg: '__VECTOR__',
  tiff: '8/16/32-bit',
  heic: '8/10-bit, HDR',
  pdf: null, // skip for PDF
};

// ═══════════════════════════════════════════════════════════════════
//  LOCALE TRANSLATIONS
// ═══════════════════════════════════════════════════════════════════

const FEATURE_LABEL = {
  cs: 'Funkce',
  da: 'Funktion',
  de: 'Funktion',
  el: 'Χαρακτηριστικό',
  en: 'Feature',
  es: 'Característica',
  fi: 'Ominaisuus',
  fr: 'Fonctionnalité',
  hu: 'Funkció',
  it: 'Funzionalità',
  nl: 'Functie',
  no: 'Funksjon',
  pl: 'Funkcja',
  pt: 'Funcionalidade',
  ro: 'Funcționalitate',
  sv: 'Funktion',
};

const ALL_BROWSERS_TEXT = {
  cs: 'Všechny prohlížeče',
  da: 'Alle browsere',
  de: 'Alle Browser',
  el: 'Όλοι οι περιηγητές',
  en: 'All browsers',
  es: 'Todos los navegadores',
  fi: 'Kaikki selaimet',
  fr: 'Tous les navigateurs',
  hu: 'Minden böngésző',
  it: 'Tutti i browser',
  nl: 'Alle browsers',
  no: 'Alle nettlesere',
  pl: 'Wszystkie przeglądarki',
  pt: 'Todos os navegadores',
  ro: 'Toate browserele',
  sv: 'Alla webbläsare',
};

const SAFARI_ONLY_TEXT = {
  cs: 'Pouze Safari',
  da: 'Kun Safari',
  de: 'Nur Safari',
  el: 'Μόνο Safari',
  en: 'Safari only',
  es: 'Solo Safari',
  fi: 'Vain Safari',
  fr: 'Safari uniquement',
  hu: 'Csak Safari',
  it: 'Solo Safari',
  nl: 'Alleen Safari',
  no: 'Kun Safari',
  pl: 'Tylko Safari',
  pt: 'Apenas Safari',
  ro: 'Doar Safari',
  sv: 'Endast Safari',
};

const BUILTIN_VIEWER_TEXT = {
  cs: 'Vestavěný prohlížeč PDF',
  da: 'Indbygget PDF-fremviser',
  de: 'Integrierter PDF-Viewer',
  el: 'Ενσωματωμένη προβολή PDF',
  en: 'Built-in PDF viewer',
  es: 'Visor PDF integrado',
  fi: 'Sisäänrakennettu PDF-katselin',
  fr: 'Visionneuse PDF intégrée',
  hu: 'Beépített PDF-megjelenítő',
  it: 'Visualizzatore PDF integrato',
  nl: 'Ingebouwde PDF-viewer',
  no: 'Innebygd PDF-visning',
  pl: 'Wbudowana przeglądarka PDF',
  pt: 'Visualizador PDF integrado',
  ro: 'Vizualizator PDF integrat',
  sv: 'Inbyggd PDF-visare',
};

const VECTOR_TEXT = {
  cs: 'N/A (vektor)',
  da: 'N/A (vektor)',
  de: 'N/A (Vektor)',
  el: 'N/A (διάνυσμα)',
  en: 'N/A (vector)',
  es: 'N/A (vector)',
  fi: 'N/A (vektori)',
  fr: 'N/A (vecteur)',
  hu: 'N/A (vektor)',
  it: 'N/A (vettore)',
  nl: 'N/A (vector)',
  no: 'N/A (vektor)',
  pl: 'N/A (wektor)',
  pt: 'N/A (vetor)',
  ro: 'N/A (vector)',
  sv: 'N/A (vektor)',
};

// Color depth feature name translations
const COLOR_DEPTH_NAME = {
  cs: 'Hloubka barev',
  da: 'Farvedybde',
  de: 'Farbtiefe',
  el: 'Βάθος χρώματος',
  en: 'Color depth',
  es: 'Profundidad de color',
  fi: 'Värisyvyys',
  fr: 'Profondeur de couleur',
  hu: 'Színmélység',
  it: 'Profondità colore',
  nl: 'Kleurdiepte',
  no: 'Fargedybde',
  pl: 'Głębia kolorów',
  pt: 'Profundidade de cor',
  ro: 'Adâncime de culoare',
  sv: 'Färgdjup',
};

// Browser support feature names per locale (for matching existing rows)
const BROWSER_SUPPORT_NAMES = new Set([
  'Podpora webových prohlížečů',
  'Webbrowserunderstøttelse',
  'Webbrowser-Unterstützung',
  'Υποστήριξη περιηγητών',
  'Web browser support',
  'Compatibilidad con navegadores',
  'Selaintuki',
  'Prise en charge des navigateurs',
  'Böngészőtámogatás',
  'Supporto browser',
  'Webbrowserondersteuning',
  'Nettleserstøtte',
  'Obsługa w przeglądarkach',
  'Suporte em navegadores',
  'Suport în browsere',
  'Webbläsarstöd',
  // Some alternate spellings that may exist
  'Browser support',
  'Browserunterstützung',
  'Podpora prohlížečů',
]);

// Data format converters (skip color depth + browser support for these)
const DATA_FORMATS = new Set(['csv', 'json', 'xml', 'yaml', 'html', 'markdown', 'base64', 'image']);

// ═══════════════════════════════════════════════════════════════════
//  HELPERS
// ═══════════════════════════════════════════════════════════════════

function parseFormatPair(filename) {
  // converter-avif-to-webp.json → ['avif', 'webp']
  const m = filename.match(/^converter-(.+?)-to-(.+?)\.json$/);
  if (!m) return null;
  return [m[1], m[2]];
}

function isImageConverter(src, tgt) {
  return !DATA_FORMATS.has(src) && !DATA_FORMATS.has(tgt);
}

function getBrowserSupportText(format, locale) {
  const raw = BROWSER_SUPPORT[format];
  if (!raw) return null;
  if (raw === '__ALL__') return ALL_BROWSERS_TEXT[locale] || ALL_BROWSERS_TEXT.en;
  if (raw === '__SAFARI__') return SAFARI_ONLY_TEXT[locale] || SAFARI_ONLY_TEXT.en;
  if (raw === '__BUILTIN__') return BUILTIN_VIEWER_TEXT[locale] || BUILTIN_VIEWER_TEXT.en;
  return raw; // direct string like 'Chrome 85+, Firefox 93+, ...'
}

function getColorDepthText(format, locale) {
  const raw = COLOR_DEPTH[format];
  if (!raw) return null;
  if (raw === '__VECTOR__') return VECTOR_TEXT[locale] || VECTOR_TEXT.en;
  return raw; // universal technical notation
}

// ═══════════════════════════════════════════════════════════════════
//  MAIN MIGRATION
// ═══════════════════════════════════════════════════════════════════

const locales = fs.readdirSync(DATA_DIR).filter((d) => {
  return fs.statSync(path.join(DATA_DIR, d)).isDirectory() && fs.existsSync(path.join(DATA_DIR, d, 'tools'));
});

let stats = { processed: 0, htmlRemoved: 0, browserEnriched: 0, colorAdded: 0, featureLabelAdded: 0, skipped: 0 };

for (const locale of locales) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-') && f.endsWith('.json'));

  for (const file of files) {
    const filePath = path.join(toolsDir, file);
    const pair = parseFormatPair(file);
    if (!pair) {
      stats.skipped++;
      continue;
    }

    const [srcFmt, tgtFmt] = pair;
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const blocks = data.contentBlocks;
    if (!blocks) {
      stats.skipped++;
      continue;
    }

    let changed = false;

    // ── 1. Remove duplicate HTML tables (sectionInfo with <table>) ──
    const indicesToRemove = new Set();
    for (let i = 0; i < blocks.length; i++) {
      const b = blocks[i];
      if (b.type === 'sectionInfo' && b.html && b.html.includes('<table')) {
        indicesToRemove.add(i);
        // Also remove adjacent gap (prefer the one after, fall back to before)
        if (i + 1 < blocks.length && blocks[i + 1].type === 'gap') {
          indicesToRemove.add(i + 1);
        } else if (i - 1 >= 0 && blocks[i - 1].type === 'gap') {
          indicesToRemove.add(i - 1);
        }
      }
    }

    if (indicesToRemove.size > 0) {
      data.contentBlocks = blocks.filter((_, i) => !indicesToRemove.has(i));
      stats.htmlRemoved += indicesToRemove.size;
      changed = true;
    }

    // ── 2. Enrich sectionFeatureComparison ──
    for (const block of data.contentBlocks) {
      if (block.type !== 'sectionFeatureComparison') continue;

      // Add featureLabel
      if (!block.featureLabel) {
        block.featureLabel = FEATURE_LABEL[locale] || FEATURE_LABEL.en;
        stats.featureLabelAdded++;
        changed = true;
      }

      // Get plan IDs (format keys like 'avif', 'webp')
      const planIds = block.plans.map((p) => p.id);
      if (planIds.length !== 2) continue;

      const isImage = isImageConverter(srcFmt, tgtFmt);

      // ── 2a. Replace browser support boolean → text ──
      if (isImage) {
        for (const feature of block.features) {
          if (BROWSER_SUPPORT_NAMES.has(feature.name)) {
            const oldVals = feature.values;
            let didChange = false;
            for (const pid of planIds) {
              if (typeof oldVals[pid] === 'boolean') {
                const text = getBrowserSupportText(pid, locale);
                if (text) {
                  feature.values[pid] = text;
                  didChange = true;
                }
              }
            }
            if (didChange) {
              stats.browserEnriched++;
              changed = true;
            }
          }
        }

        // ── 2b. Add color depth row if not present ──
        const colorDepthLabel = COLOR_DEPTH_NAME[locale] || COLOR_DEPTH_NAME.en;
        const hasColorDepth = block.features.some((f) => f.name === colorDepthLabel);

        if (!hasColorDepth) {
          const val1 = getColorDepthText(planIds[0], locale);
          const val2 = getColorDepthText(planIds[1], locale);

          if (val1 && val2) {
            // Insert after browser support row, or at end
            const browserIdx = block.features.findIndex((f) => BROWSER_SUPPORT_NAMES.has(f.name));
            const insertAt = browserIdx >= 0 ? browserIdx + 1 : block.features.length;

            block.features.splice(insertAt, 0, {
              name: colorDepthLabel,
              values: { [planIds[0]]: val1, [planIds[1]]: val2 },
            });

            stats.colorAdded++;
            changed = true;
          }
        }
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
      stats.processed++;
    }
  }
}

console.log('\n=== MIGRATION COMPLETE ===\n');
console.log(`Locales processed: ${locales.length}`);
console.log(`Files modified: ${stats.processed}`);
console.log(`HTML table blocks removed: ${stats.htmlRemoved}`);
console.log(`Browser support enriched: ${stats.browserEnriched}`);
console.log(`Color depth rows added: ${stats.colorAdded}`);
console.log(`Feature labels added: ${stats.featureLabelAdded}`);
console.log(`Files skipped: ${stats.skipped}`);
