#!/usr/bin/env node
'use strict';

/**
 * Regionalize converter JSON files for all non-PL locales.
 *
 * For THIN files (no faq block):
 *   - Keeps existing sectionBasic block
 *   - Inserts sectionSteps (how-to), sectionSteps (features), faq
 *   - Preserves contactForm + toolsCarousel
 *   - Fills empty schemas (howTo steps + featureList)
 *
 * For RICH files (already have faq):
 *   - Only fills empty schemas if needed
 *   - Leaves contentBlocks untouched
 */

const fs = require('fs');
const path = require('path');
const T = require('./_converter-locale-templates.cjs');

const QUALITY_TARGETS = new Set(['jpg', 'webp', 'avif']);
const LOSSLESS_TARGETS = new Set(['png', 'tiff']);
const TRANSPARENCY_FMTS = new Set(['png', 'webp', 'avif', 'gif', 'tiff', 'svg']);

const LOCALES = Object.keys(T);

function tt(t) {
  return QUALITY_TARGETS.has(t) ? 'Q' : LOSSLESS_TARGETS.has(t) ? 'L' : 'G';
}
function r(str, s, t) {
  return str.replace(/\{\{S\}\}/g, s.toUpperCase()).replace(/\{\{T\}\}/g, t.toUpperCase());
}
function srcHasTransparency(s) {
  return TRANSPARENCY_FMTS.has(s);
}
function tgtHasTransparency(t) {
  return TRANSPARENCY_FMTS.has(t);
}

function parseFormats(filename) {
  const m = filename.match(/^converter-(\w+)-to-(\w+)\.json$/);
  if (!m) return null;
  return { source: m[1], target: m[2] };
}

function isThin(blocks) {
  return !blocks.some((b) => b.type === 'faq');
}

function buildNewBlocks(loc, s, t, existingBlocks) {
  const L = T[loc];
  const ty = tt(t);
  const blocks = [];

  // 1. Keep only sectionBasic blocks (+ preceding gaps) from existing content
  //    Drop old sectionSteps/sectionInfo to avoid duplicating them
  for (let i = 0; i < existingBlocks.length; i++) {
    const b = existingBlocks[i];
    if (b.type === 'contactForm' || b.type === 'toolsCarousel') break;
    if (b.type === 'sectionBasic') {
      blocks.push(b);
    } else if (b.type === 'gap') {
      // Keep gap only if followed by sectionBasic
      const next = existingBlocks[i + 1];
      if (next && next.type === 'sectionBasic') {
        blocks.push(b);
      }
    }
    // sectionSteps, sectionInfo, faq from old content are dropped
  }

  // 2. sectionSteps grid=three (how-to steps)
  blocks.push({ type: 'gap', variant: 'line' });
  blocks.push({
    type: 'sectionSteps',
    title: `${s.toUpperCase()} → ${t.toUpperCase()}`,
    grid: 'three',
    items: [
      { title: r(L.s1t, s, t), description: r(L.s1d, s, t), icon: 'RiUploadLine' },
      { title: r(L.s2t, s, t), description: r(L[`s2d${ty}`], s, t), icon: ty === 'Q' ? 'RiEqualizerLine' : 'RiLoopLeftLine' },
      { title: r(L.s3t, s, t), description: r(L.s3d, s, t), icon: 'RiDownloadLine' },
    ],
  });

  // 3. sectionSteps grid=two (feature cards)
  blocks.push({ type: 'gap', variant: 'line' });
  blocks.push({
    type: 'sectionSteps',
    title: r(L.featT, s, t),
    grid: 'two',
    items: [
      { icon: 'RiShieldCheckLine', title: r(L.f1t, s, t), description: r(L.f1d, s, t) },
      { icon: 'RiInfinityFill', title: r(L.f2t, s, t), description: r(L.f2d, s, t) },
      { icon: ty === 'Q' ? 'RiSpeedLine' : ty === 'L' ? 'RiImageEditLine' : 'RiPaletteLine', title: r(L[`f3${ty}t`], s, t), description: r(L[`f3${ty}d`], s, t) },
      { icon: 'RiDownloadLine', title: r(L.f4t, s, t), description: r(L.f4d, s, t) },
    ],
  });

  // 4. FAQ (5 items)
  // Transparency answer: source has no transparency → a2NA; target no transparency → a2N; target gif → a2G; else → a2Y
  const a2key = !srcHasTransparency(s) ? (tgtHasTransparency(t) ? 'a2NA' : 'a2N') : !tgtHasTransparency(t) ? 'a2N' : t === 'gif' ? 'a2G' : 'a2Y';
  blocks.push({ type: 'gap', variant: 'line' });
  blocks.push({
    type: 'faq',
    title: r(L.faqT, s, t),
    openByDefault: 1,
    items: [
      { question: r(L.q1, s, t), answer: r(L[`a1${ty}`], s, t) },
      { question: r(L.q2, s, t), answer: r(L[a2key], s, t) },
      { question: r(L.q3, s, t), answer: r(L[`a3${ty}`], s, t) },
      { question: r(L.q4, s, t), answer: r(L.a4, s, t) },
      { question: r(L.q5, s, t), answer: r(L.a5, s, t) },
    ],
  });

  // 5. contactForm (preserved)
  const existingContact = existingBlocks.find((b) => b.type === 'contactForm');
  if (existingContact) {
    blocks.push({ type: 'gap', variant: 'line' });
    blocks.push(existingContact);
  }

  // 6. toolsCarousel (preserved)
  const existingCarousel = existingBlocks.find((b) => b.type === 'toolsCarousel');
  if (existingCarousel) {
    blocks.push({ type: 'gap', variant: 'line' });
    blocks.push(existingCarousel);
  }

  blocks.push({ type: 'gap', size: 'sm' });
  return blocks;
}

function buildSchema(loc, s, t, existingSchema) {
  const L = T[loc];
  const ty = tt(t);

  const software = { ...existingSchema.software };
  // Only fill featureList if empty
  if (!software.featureList || software.featureList.length === 0) {
    software.featureList = L[`fl${ty}`].map((f) => r(f, s, t));
  }

  // Only fill howTo if steps are empty
  let howTo = existingSchema.howTo || {};
  if (!howTo.steps || howTo.steps.length === 0) {
    howTo = {
      name: r(L.hn, s, t),
      description: r(L.hd, s, t),
      steps: [
        { name: r(L.h1n, s, t), text: r(L.h1t, s, t) },
        { name: r(L.h2n, s, t), text: r(L[ty === 'Q' ? 'h2tQ' : 'h2tL'], s, t) },
        { name: r(L.h3n, s, t), text: r(L.h3t, s, t) },
      ],
    };
  }

  return { software, howTo };
}

// ─── Main processing ──────────────────────────────────────────────
let totalThin = 0;
let totalSchema = 0;
let totalSkipped = 0;

for (const loc of LOCALES) {
  const dir = path.join(__dirname, '..', 'data', loc, 'tools');
  if (!fs.existsSync(dir)) continue;

  const files = fs.readdirSync(dir).filter((f) => f.startsWith('converter-'));
  let thinCount = 0;
  let schemaCount = 0;
  let skipCount = 0;

  for (const file of files) {
    const fmts = parseFormats(file);
    if (!fmts) continue;

    const filePath = path.join(dir, file);
    const raw = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(raw);
    const { source: s, target: t } = fmts;
    const blocks = data.contentBlocks || [];
    let changed = false;

    if (isThin(blocks)) {
      // Enhance thin file: add sectionSteps + features + FAQ
      data.contentBlocks = buildNewBlocks(loc, s, t, blocks);
      changed = true;
      thinCount++;
    } else {
      skipCount++;
    }

    // Always fill empty schemas regardless of thin/rich
    const oldSchemas = JSON.stringify(data.schemas);
    data.schemas = buildSchema(loc, s, t, data.schemas || { software: {}, howTo: {} });
    if (JSON.stringify(data.schemas) !== oldSchemas) {
      changed = true;
      schemaCount++;
    }

    if (changed) {
      fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf8');
    }
  }

  totalThin += thinCount;
  totalSchema += schemaCount;
  totalSkipped += skipCount;
  console.log(`${loc}: ${thinCount} thin→enriched, ${schemaCount} schemas filled, ${skipCount} rich skipped`);
}

console.log(`\nTotal: ${totalThin} thin files enriched, ${totalSchema} schemas filled, ${totalSkipped} rich files skipped`);
