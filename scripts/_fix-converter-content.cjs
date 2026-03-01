/**
 * Fix converter content across all locales.
 * Reads existing JSON files, preserves metadata/hero/breadcrumbs/schemas,
 * and replaces thin contentBlocks with rich, locale-specific content.
 *
 * Usage: node scripts/_fix-converter-content.cjs [--dry-run] [--locale=en] [--converter=jpg-to-webp]
 */
const fs = require('fs');
const path = require('path');

const { FORMATS, TITLES, REGIONAL } = require('./_converter-data.cjs');
const { generateIntroHtml } = require('./_converter-content-gen.cjs');
const { HOW_TO_STEPS, FEATURE_ITEMS, getUseCaseItems } = require('./_converter-features.cjs');
const { generateFaq, generateComparisonHtml, generateRegionalHtml } = require('./_converter-faq.cjs');

// ============================================================
// CLI ARGS
// ============================================================
const args = process.argv.slice(2);
const DRY_RUN = args.includes('--dry-run');
const LOCALE_FILTER = (args.find((a) => a.startsWith('--locale=')) || '').split('=')[1] || '';
const CONV_FILTER = (args.find((a) => a.startsWith('--converter=')) || '').split('=')[1] || '';

const DATA_DIR = path.join(__dirname, '..', 'data');
const MIN_HTML_THRESHOLD = 2000; // files with >= this much HTML are skipped (already good)
const ALL_LOCALES = ['en', 'pl', 'de', 'fr', 'es', 'it', 'pt', 'cs', 'da', 'el', 'fi', 'hu', 'nl', 'no', 'ro', 'sv'];

// ============================================================
// HELPERS
// ============================================================
function parseConverterName(filename) {
  // converter-jpg-to-webp.json -> { src: 'jpg', tgt: 'webp' }
  const m = filename.match(/^converter-(\w+)-to-(\w+)\.json$/);
  if (!m) return null;
  return { src: m[1], tgt: m[2] };
}

function measureHtml(contentBlocks) {
  let total = 0;
  for (const b of contentBlocks) {
    if (b.html) total += b.html.length;
    if (b.items) {
      for (const item of b.items) {
        if (item.description) total += item.description.length;
        if (item.answer) total += item.answer.length;
      }
    }
  }
  return total;
}

function getExistingContactForm(contentBlocks) {
  return contentBlocks.find((b) => b.type === 'contactForm') || null;
}

function getExistingCarousel(contentBlocks) {
  return contentBlocks.find((b) => b.type === 'toolsCarousel') || null;
}

// ============================================================
// CONTENT BLOCK BUILDER
// ============================================================
function buildContentBlocks(srcKey, tgtKey, locale, existingBlocks, ogImage) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  if (!src || !tgt) return null;

  const S = src.name;
  const T = tgt.name;
  const t = TITLES[locale] || TITLES.en;
  const R = REGIONAL[locale] || REGIONAL.en;
  const toolImage = ogImage || '/assets/bg/abstract-bg1.webp';

  const blocks = [];
  const gap = () => ({ type: 'gap', variant: 'line' });

  // 1. sectionBasic - Why convert
  blocks.push({
    type: 'sectionBasic',
    title: t.why(S, T),
    html: generateIntroHtml(srcKey, tgtKey, locale),
    imageSrc: toolImage,
    imageAlt: `${S} to ${T} conversion`,
    variant: 'right',
  });
  blocks.push(gap());

  // 2. sectionSteps - How to convert (3 steps)
  const stepsGen = HOW_TO_STEPS[locale] || HOW_TO_STEPS.en;
  blocks.push({
    type: 'sectionSteps',
    title: t.how(S, T),
    grid: 'three',
    items: stepsGen(S, T),
  });
  blocks.push(gap());

  // 3. sectionInfo - Comparison table
  blocks.push({
    type: 'sectionInfo',
    title: t.comparison(S, T),
    html: generateComparisonHtml(srcKey, tgtKey, locale),
  });
  blocks.push(gap());

  // 4. sectionSteps - When to convert (4 use cases)
  blocks.push({
    type: 'sectionSteps',
    title: t.when(S, T),
    grid: 'two',
    items: getUseCaseItems(srcKey, tgtKey, locale),
  });
  blocks.push(gap());

  // 5. sectionSteps - Features (4 items)
  const featGen = FEATURE_ITEMS[locale] || FEATURE_ITEMS.en;
  blocks.push({
    type: 'sectionSteps',
    title: t.features(S, T),
    grid: 'two',
    items: featGen(S, T),
  });
  blocks.push(gap());

  // 6. sectionInfo - Regional/practical content
  blocks.push({
    type: 'sectionInfo',
    title: t.regional(S, T),
    html: generateRegionalHtml(srcKey, tgtKey, locale),
  });
  blocks.push(gap());

  // 7. EN gets an extra section (tips)
  if (locale === 'en') {
    const tipsHtml = generateTipsHtml(srcKey, tgtKey);
    blocks.push({
      type: 'sectionInfo',
      title: t.tips(S, T),
      html: tipsHtml,
    });
    blocks.push(gap());
  }

  // 8. FAQ
  blocks.push({
    type: 'faq',
    title: t.faq(S, T),
    openByDefault: 0,
    items: generateFaq(srcKey, tgtKey, locale),
  });
  blocks.push(gap());

  // 9. Contact form (preserve existing or create default)
  const existingContact = getExistingContactForm(existingBlocks);
  if (existingContact) {
    blocks.push(existingContact);
  } else {
    blocks.push({
      type: 'contactForm',
      title: t.contact,
      description: t.contactDesc,
      imageSrc: toolImage,
      imageAlt: 'Contact',
      defaultSubject: `${S} to ${T} converter`,
    });
  }
  blocks.push(gap());

  // 10. Tools carousel (preserve existing or create default)
  const existingCarousel = getExistingCarousel(existingBlocks);
  if (existingCarousel) {
    blocks.push(existingCarousel);
  } else {
    blocks.push({
      type: 'toolsCarousel',
      title: t.carousel,
    });
  }

  return blocks;
}

// EN-only tips section
function generateTipsHtml(srcKey, tgtKey) {
  const src = FORMATS[srcKey];
  const tgt = FORMATS[tgtKey];
  const S = src.name;
  const T = tgt.name;

  let html = '<ul class="list-disc pl-6 space-y-2">';

  if (tgt.lossy) {
    html += `<li><strong>Start with quality 85</strong> \u2013 this is typically the sweet spot for ${T} compression, offering significant file size reduction with minimal visible quality loss.</li>`;
  }
  if (src.transparency && !tgt.transparency) {
    html += `<li><strong>Check for transparency</strong> \u2013 ${S} images with transparent areas will get a solid background in ${T}. Choose a background color that works for your use case before converting.</li>`;
  }
  if (src.vector) {
    html += `<li><strong>Choose resolution carefully</strong> \u2013 since ${S} is a vector format, you can export to any resolution. Set the desired dimensions before conversion to avoid quality issues.</li>`;
  }
  html += `<li><strong>Batch convert for efficiency</strong> \u2013 if you have many ${S} files, use the batch conversion feature to process them all at once. This saves considerable time compared to one-by-one conversion.</li>`;
  html += `<li><strong>Compare before downloading</strong> \u2013 use the live preview to compare the original ${S} with the ${T} result. Adjust quality settings until you find the right balance for your specific use case.</li>`;
  html += `<li><strong>Keep your originals</strong> \u2013 always save a copy of your original ${S} files. ${tgt.lossy ? 'Lossy compression is irreversible, so having the originals allows you to re-convert with different settings later.' : 'Even with lossless conversion, it is good practice to keep source files.'}</li>`;
  html += '</ul>';

  return html;
}

// ============================================================
// MAIN PROCESSING
// ============================================================
let totalProcessed = 0;
let totalSkipped = 0;
let totalErrors = 0;

for (const locale of ALL_LOCALES) {
  if (LOCALE_FILTER && locale !== LOCALE_FILTER) continue;

  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) {
    console.log(`SKIP ${locale} - no tools directory`);
    continue;
  }

  const files = fs.readdirSync(toolsDir).filter((f) => f.startsWith('converter-'));
  console.log(`\n=== ${locale.toUpperCase()} === (${files.length} converters)`);

  for (const file of files) {
    const conv = parseConverterName(file);
    if (!conv) continue;
    if (CONV_FILTER && `${conv.src}-to-${conv.tgt}` !== CONV_FILTER) continue;

    const filePath = path.join(toolsDir, file);

    try {
      const raw = fs.readFileSync(filePath, 'utf8');
      const data = JSON.parse(raw);

      // Measure existing content richness
      const existingHtml = measureHtml(data.contentBlocks || []);

      // Skip already-good files
      if (existingHtml >= MIN_HTML_THRESHOLD) {
        console.log(`  SKIP ${file} (${existingHtml} chars - already good)`);
        totalSkipped++;
        continue;
      }

      // Build new content blocks
      const newBlocks = buildContentBlocks(conv.src, conv.tgt, locale, data.contentBlocks || [], data.metadata.ogImage);
      if (!newBlocks) {
        console.log(`  ERROR ${file} - unknown format`);
        totalErrors++;
        continue;
      }

      // Replace contentBlocks
      data.contentBlocks = newBlocks;

      // Measure new content
      const newHtml = measureHtml(newBlocks);

      if (DRY_RUN) {
        console.log(`  DRY ${file}: ${existingHtml} -> ${newHtml} chars`);
      } else {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
        console.log(`  OK  ${file}: ${existingHtml} -> ${newHtml} chars`);
      }
      totalProcessed++;
    } catch (err) {
      console.error(`  ERROR ${file}: ${err.message}`);
      totalErrors++;
    }
  }
}

console.log(`\n=== DONE ===`);
console.log(`Processed: ${totalProcessed}, Skipped: ${totalSkipped}, Errors: ${totalErrors}`);
if (DRY_RUN) console.log('(dry run - no files were modified)');
