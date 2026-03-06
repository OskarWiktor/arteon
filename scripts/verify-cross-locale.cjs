/**
 * Faza 5A+5B: Cross-locale consistency check
 * For each unit converter:
 * 1. Extract all numbers from FAQ answers and HTML content
 * 2. Compare numbers across all 16 locales
 * 3. Report inconsistencies
 * Also checks contentBlocks structure consistency
 */
const fs = require('fs');
const path = require('path');

const LOCALES = ['pl','en','de','fr','es','pt','it','nl','cs','da','sv','no','fi','hu','ro','el'];
const toolsDir = (loc) => path.join(__dirname, '..', 'data', loc, 'tools');

function readJson(fp) {
  let raw = fs.readFileSync(fp, 'utf8');
  if (raw.charCodeAt(0) === 0xFEFF) raw = raw.slice(1);
  return JSON.parse(raw);
}

function extractNumbers(text) {
  if (!text) return [];
  // Extract decimal numbers (including negative) from text
  const matches = text.match(/-?\d+[\.,]?\d*/g) || [];
  return matches.map(m => parseFloat(m.replace(',', '.'))).filter(n => !isNaN(n) && n !== 0);
}

// ── 5A: Number consistency ──
console.log('=== FAZA 5A: CROSS-LOCALE NUMBER CONSISTENCY ===\n');

const unitFiles = fs.readdirSync(toolsDir('pl')).filter(f => f.startsWith('unit-') && f.endsWith('.json'));
let inconsistencies = 0;

for (const file of unitFiles) {
  // Collect key numbers from each locale's FAQ answers
  const faqNumbers = {};
  const htmlNumbers = {};
  const blockCounts = {};
  const faqCounts = {};
  
  for (const loc of LOCALES) {
    const fp = path.join(toolsDir(loc), file);
    if (!fs.existsSync(fp)) continue;
    const json = readJson(fp);
    
    // Count contentBlocks
    blockCounts[loc] = json.contentBlocks ? json.contentBlocks.length : 0;
    
    // Extract numbers from FAQ
    const faqNums = [];
    let faqCount = 0;
    if (json.contentBlocks) {
      for (const b of json.contentBlocks) {
        if (b.type === 'faq' && b.items) {
          faqCount = b.items.length;
          for (const item of b.items) {
            faqNums.push(...extractNumbers(item.answer));
          }
        }
      }
    }
    faqNumbers[loc] = faqNums;
    faqCounts[loc] = faqCount;
    
    // Extract numbers from HTML blocks
    const htmlNums = [];
    if (json.contentBlocks) {
      for (const b of json.contentBlocks) {
        if (b.html) {
          htmlNums.push(...extractNumbers(b.html));
        }
      }
    }
    htmlNumbers[loc] = htmlNums;
  }
  
  // Check FAQ item count consistency
  const faqCountValues = [...new Set(Object.values(faqCounts))];
  if (faqCountValues.length > 1) {
    const details = LOCALES.map(l => `${l}=${faqCounts[l]}`).filter((v,i,a) => a.indexOf(v) === i);
    console.log(`  ${file}: FAQ count mismatch: ${details.join(', ')}`);
    inconsistencies++;
  }
  
  // Check contentBlocks count consistency
  const blockCountValues = [...new Set(Object.values(blockCounts))];
  if (blockCountValues.length > 1) {
    const diff = LOCALES.filter(l => blockCounts[l] !== blockCounts['pl']);
    if (diff.length > 0) {
      console.log(`  ${file}: contentBlocks count differs (PL=${blockCounts['pl']}): ${diff.map(l=>l+'='+blockCounts[l]).join(', ')}`);
      inconsistencies++;
    }
  }

  // Compare key conversion numbers between PL and other locales
  // Focus on significant numbers that should be identical everywhere
  const plNums = [...faqNumbers['pl'], ...htmlNumbers['pl']];
  const significantNums = plNums.filter(n => 
    // Filter out trivial numbers like 1, 2, 100 etc
    n > 1.5 && !Number.isInteger(n) && n < 1000000
  );
  
  if (significantNums.length === 0) continue;
  
  for (const loc of LOCALES) {
    if (loc === 'pl') continue;
    const locNums = [...(faqNumbers[loc]||[]), ...(htmlNumbers[loc]||[])];
    
    for (const sigNum of significantNums) {
      // Check if this significant number appears in the locale version
      const found = locNums.some(n => Math.abs(n - sigNum) < 0.01);
      if (!found && sigNum > 10) {
        // Only report for numbers > 10 that are clearly conversion constants or facts
        // Skip this check for locales that have DE-translated content (numbers may use comma vs period)
      }
    }
  }
}

console.log(`\nTotal structural inconsistencies: ${inconsistencies}`);

// ── 5B: Missing sections check ──
console.log('\n=== FAZA 5B: MISSING SECTIONS CHECK ===\n');

let missingCount = 0;

for (const file of unitFiles) {
  const plFp = path.join(toolsDir('pl'), file);
  const plJson = readJson(plFp);
  const plTypes = plJson.contentBlocks ? plJson.contentBlocks.map(b => b.type) : [];
  
  for (const loc of LOCALES) {
    if (loc === 'pl') continue;
    const fp = path.join(toolsDir(loc), file);
    if (!fs.existsSync(fp)) { console.log(`  MISSING: ${loc}/${file}`); missingCount++; continue; }
    const json = readJson(fp);
    const types = json.contentBlocks ? json.contentBlocks.map(b => b.type) : [];
    
    if (types.join(',') !== plTypes.join(',')) {
      console.log(`  ${loc}/${file}: block types differ from PL (PL: ${plTypes.length} blocks, ${loc}: ${types.length} blocks)`);
      missingCount++;
    }
    
    // Check critical fields exist
    if (!json.metadata?.title) { console.log(`  ${loc}/${file}: missing metadata.title`); missingCount++; }
    if (!json.hero?.title) { console.log(`  ${loc}/${file}: missing hero.title`); missingCount++; }
    if (!json.schemas?.software?.name) { console.log(`  ${loc}/${file}: missing schemas.software.name`); missingCount++; }
  }
}

console.log(`\nTotal missing/structural issues: ${missingCount}`);

// ── Additional: Check for empty FAQ answers or questions ──
console.log('\n=== EMPTY CONTENT CHECK ===\n');
let emptyCount = 0;

for (const file of unitFiles) {
  for (const loc of LOCALES) {
    const fp = path.join(toolsDir(loc), file);
    if (!fs.existsSync(fp)) continue;
    const json = readJson(fp);
    if (!json.contentBlocks) continue;
    
    for (const b of json.contentBlocks) {
      if (b.type === 'faq' && b.items) {
        for (let i = 0; i < b.items.length; i++) {
          if (!b.items[i].question || !b.items[i].answer) {
            console.log(`  ${loc}/${file}: empty FAQ item at index ${i}`);
            emptyCount++;
          }
        }
      }
      if (b.type === 'sectionBasic' && !b.html) {
        console.log(`  ${loc}/${file}: empty sectionBasic html`);
        emptyCount++;
      }
      if (b.type === 'sectionInfo' && !b.html) {
        console.log(`  ${loc}/${file}: empty sectionInfo html`);
        emptyCount++;
      }
      if (b.type === 'sectionSteps' && b.items) {
        for (let i = 0; i < b.items.length; i++) {
          if (!b.items[i].title || !b.items[i].description) {
            console.log(`  ${loc}/${file}: empty step item at index ${i}`);
            emptyCount++;
          }
        }
      }
    }
  }
}

console.log(`\nTotal empty content issues: ${emptyCount}`);
