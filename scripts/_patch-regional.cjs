/**
 * Patch script: replace sentence-fragment use cases and thin regional HTML
 * with full-sentence versions across all converter JSON files.
 *
 * Usage: node scripts/_patch-regional.cjs [--dry-run]
 */
const fs = require('fs');
const path = require('path');
const { FORMATS, TITLES, REGIONAL } = require('./_converter-data.cjs');
const { useCases } = require('./_fix-regional-content.cjs');
const { regionalHtml } = require('./_fix-regional-html.cjs');

const DRY = process.argv.includes('--dry-run');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['en', 'pl', 'de', 'fr', 'es', 'it', 'pt', 'cs', 'da', 'el', 'fi', 'hu', 'nl', 'no', 'ro', 'sv'];

function parseConverterName(filename) {
  const m = filename.match(/^converter-(\w+)-to-(\w+)\.json$/);
  if (!m) return null;
  return { src: m[1], tgt: m[2] };
}

// Detect fragment: description is short AND contains arrow or dash-only pattern or just platform list
function isFragmentDescription(desc) {
  if (!desc || typeof desc !== 'string') return false;
  // Fragment heuristics: contains arrow pattern, OR is just a comma-separated list, OR < 60 chars with no verb
  if (/^\w+ \u2192 \w+ \u2013/.test(desc)) return true; // "BMP → AVIF – WordPress..."
  if (/^\w[\w.\s,]+\.$/.test(desc) && desc.length < 80) return true; // "OLX.ro, eMAG.ro, Amazon, Marketplace."
  if (/^\w+ \u2013 [\w.,\s]+\.$/.test(desc)) return true; // "AVIF – Gmail, Outlook, Yahoo."
  return false;
}

// Check if a sectionInfo html is a thin fallback
function isThinRegionalHtml(html) {
  if (!html || typeof html !== 'string') return false;
  const pCount = (html.match(/<p /g) || []).length;
  if (pCount <= 1) return true;
  // Fallback pattern has 2 <p> tags but total length < 400 (real content has 3 paragraphs, 500+ chars)
  if (pCount <= 2 && html.length < 400) return true;
  return false;
}

let stats = { ucFixed: 0, regFixed: 0, filesModified: 0, filesScanned: 0 };

for (const locale of LOCALES) {
  const toolsDir = path.join(DATA, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-'));

  for (const file of files) {
    const conv = parseConverterName(file);
    if (!conv) continue;
    stats.filesScanned++;

    const filePath = path.join(toolsDir, file);
    let modified = false;

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const blocks = data.contentBlocks;
      if (!blocks || blocks.length === 0) continue;

      const t = TITLES[locale] || TITLES.en;
      const S = (FORMATS[conv.src] || {}).name;
      const T = (FORMATS[conv.tgt] || {}).name;
      if (!S || !T) continue;

      // Compute expected "when" title for this locale to identify use-case block
      const whenTitle = t.when(S, T);
      const regionalTitle = t.regional(S, T);

      // 1. Fix use-case sectionSteps (the "When to use" block)
      for (const b of blocks) {
        if (b.type === 'sectionSteps' && b.title === whenTitle && Array.isArray(b.items)) {
          // Check if any item has fragment description
          const hasFragment = b.items.some((item) => isFragmentDescription(item.description));
          if (hasFragment) {
            const newItems = useCases(conv.src, conv.tgt, locale);
            if (newItems) {
              b.items = newItems;
              modified = true;
              stats.ucFixed++;
            }
          }
        }

        // 2. Fix regional sectionInfo (the "in practice" block)
        if (b.type === 'sectionInfo' && b.title === regionalTitle && b.html) {
          if (isThinRegionalHtml(b.html)) {
            const newHtml = regionalHtml(conv.src, conv.tgt, locale);
            if (newHtml) {
              b.html = newHtml;
              modified = true;
              stats.regFixed++;
            }
          }
        }
      }

      if (modified) {
        stats.filesModified++;
        if (!DRY) {
          fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
        }
      }
    } catch (err) {
      console.error(`ERROR ${locale}/${file}: ${err.message}`);
    }
  }
}

console.log('=== PATCH SUMMARY ===');
console.log(`Files scanned:       ${stats.filesScanned}`);
console.log(`Use-case blocks fixed: ${stats.ucFixed}`);
console.log(`Regional HTML fixed:   ${stats.regFixed}`);
console.log(`Total files modified:  ${stats.filesModified}`);
if (DRY) console.log('(dry run - no files were modified)');
