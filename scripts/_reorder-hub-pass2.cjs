/**
 * Second pass for locales missed in first run (different converter section titles).
 */
const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, '..', 'app');

const hubs = [
  { locale: 'nl', path: 'nl/tools/page.tsx', title: 'Afbeeldingsformaat converters' },
  { locale: 'hu', path: 'hu/eszkozok/page.tsx', title: 'Képformátum konverterek' },
  { locale: 'sv', path: 'sv/verktyg/page.tsx', title: 'Bildformatskonverterare' },
  { locale: 'da', path: 'da/vaerktojer/page.tsx', title: 'Billedformat-konvertere' },
  { locale: 'no', path: 'no/verktoy/page.tsx', title: 'Bildformat-konverterere' },
  { locale: 'el', path: 'el/ergaleia/page.tsx', title: 'Μετατροπείς μορφών εικόνας' },
];

function findSectionSteps(code, title) {
  const titleEscaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const titleRegex = new RegExp(`title=["']${titleEscaped}["']`);
  const titleIdx = code.search(titleRegex);
  if (titleIdx === -1) return null;

  let startIdx = code.lastIndexOf('<SectionSteps', titleIdx);
  if (startIdx === -1) return null;

  const closingRegex = /\]\}\s*\n\s*\/>/g;
  closingRegex.lastIndex = titleIdx;
  let match;
  while ((match = closingRegex.exec(code)) !== null) {
    const segment = code.slice(startIdx, match.index + match[0].length);
    const openBrackets = (segment.match(/\{/g) || []).length;
    const closeBrackets = (segment.match(/\}/g) || []).length;
    if (openBrackets === closeBrackets) {
      return { start: startIdx, end: match.index + match[0].length };
    }
  }
  return null;
}

function countItems(sectionCode) {
  return (sectionCode.match(/icon:\s*<Ri/g) || []).length;
}

function limitTo9Items(sectionCode) {
  const itemsStart = sectionCode.indexOf('items={[');
  if (itemsStart === -1) return sectionCode;

  const afterItems = sectionCode.indexOf('[', itemsStart) + 1;
  let depth = 0;
  let itemCount = 0;
  let cutPoint = -1;

  for (let i = afterItems; i < sectionCode.length; i++) {
    const ch = sectionCode[i];
    if (ch === '{') {
      if (depth === 0) itemCount++;
      depth++;
    } else if (ch === '}') {
      depth--;
      if (depth === 0 && itemCount === 9) {
        let j = i + 1;
        while (j < sectionCode.length && /\s/.test(sectionCode[j])) j++;
        if (sectionCode[j] === ',') j++;
        cutPoint = j;
        break;
      }
    }
  }

  if (cutPoint === -1) return sectionCode;

  const closingBracket = sectionCode.lastIndexOf(']}');
  if (closingBracket === -1) return sectionCode;

  return sectionCode.slice(0, cutPoint) + '\n          ' + sectionCode.slice(closingBracket);
}

for (const hub of hubs) {
  const filePath = path.join(appDir, hub.path);
  if (!fs.existsSync(filePath)) {
    console.log('SKIP:', hub.locale);
    continue;
  }

  let code = fs.readFileSync(filePath, 'utf8');
  const section = findSectionSteps(code, hub.title);

  if (!section) {
    console.log('⚠', hub.locale, '— section not found for title:', hub.title);
    continue;
  }

  let extractStart = section.start;
  const before = code.slice(Math.max(0, extractStart - 100), extractStart);
  const gapMatch = before.match(/<Gap size="sm" \/>\s*\n\s*$/);
  if (gapMatch) {
    extractStart = extractStart - gapMatch[0].length;
  }

  let extractEnd = section.end;
  const after = code.slice(extractEnd, extractEnd + 100);
  const gapAfterMatch = after.match(/^\s*\n\s*<Gap size="sm" \/>/);
  if (gapAfterMatch) {
    extractEnd += gapAfterMatch[0].length;
  }

  const converterBlock = code.slice(extractStart, extractEnd);
  code = code.slice(0, extractStart) + code.slice(extractEnd);

  const lineGapIdx = code.indexOf('<Gap variant="line" />');
  if (lineGapIdx === -1) {
    console.log('⚠', hub.locale, '— <Gap variant="line" /> not found');
    continue;
  }

  let insertAt = lineGapIdx;
  while (insertAt > 0 && code[insertAt - 1] !== '\n') insertAt--;

  let limitedBlock = limitTo9Items(converterBlock);
  const itemsBefore = countItems(converterBlock);
  const itemsAfter = countItems(limitedBlock);

  code = code.slice(0, insertAt) + limitedBlock + '\n\n        ' + code.slice(insertAt);

  fs.writeFileSync(filePath, code, 'utf8');
  console.log('✓', hub.locale, `(${itemsBefore} → ${itemsAfter} items)`);
}

console.log('\n✅ Done');
