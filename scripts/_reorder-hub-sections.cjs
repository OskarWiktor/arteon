/**
 * For each hub page:
 * 1. Move the converter SectionSteps to just before the first <Gap variant="line" />
 * 2. Limit converter cards to 9
 */
const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, '..', 'app');

// Converter section titles per locale (used to find the right SectionSteps)
const converterTitles = {
  pl: 'Konwertery formatów obrazów',
  en: 'Image format converters',
  de: 'Bildformat-Konverter',
  es: 'Convertidores de formatos de imagen',
  fr: "Convertisseurs de formats d'image",
  pt: 'Conversores de formatos de imagem',
  it: 'Convertitori di formati immagine',
  ro: 'Convertoare de formate imagine',
  nl: 'Beeldformaat-converters',
  hu: 'Képformátum-konverterek',
  cs: 'Převodníky obrazových formátů',
  sv: 'Bildformatkonverterare',
  da: 'Billedformatkonvertere',
  no: 'Bildformatkonverterere',
  fi: 'Kuvaformaattimuuntimet',
  el: 'Metatropeis morfis eikonon',
};

const hubs = [
  { locale: 'pl', path: '(pl)/narzedzia/page.tsx' },
  { locale: 'en', path: 'en/tools/page.tsx' },
  { locale: 'de', path: 'de/werkzeuge/page.tsx' },
  { locale: 'es', path: 'es/herramientas/page.tsx' },
  { locale: 'fr', path: 'fr/outils/page.tsx' },
  { locale: 'pt', path: 'pt/ferramentas/page.tsx' },
  { locale: 'it', path: 'it/strumenti/page.tsx' },
  { locale: 'ro', path: 'ro/instrumente/page.tsx' },
  { locale: 'nl', path: 'nl/tools/page.tsx' },
  { locale: 'hu', path: 'hu/eszkozok/page.tsx' },
  { locale: 'cs', path: 'cs/nastroje/page.tsx' },
  { locale: 'sv', path: 'sv/verktyg/page.tsx' },
  { locale: 'da', path: 'da/vaerktojer/page.tsx' },
  { locale: 'no', path: 'no/verktoy/page.tsx' },
  { locale: 'fi', path: 'fi/tyokalut/page.tsx' },
  { locale: 'el', path: 'el/ergaleia/page.tsx' },
];

// 9 most popular converter toolKeys
const top9Keys = ['jpgToWebpSimple', 'pngToJpg', 'webpToJpg', 'pngToWebpSimple', 'jpgToPng', 'webpToPng', 'heicToJpg', 'svgToPng', 'jpgToAvif'];

function findSectionSteps(code, title) {
  // Find the SectionSteps that contains the converter title
  const titleEscaped = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  // Look for the pattern: <SectionSteps\n          title="..." containing converter title
  const titleRegex = new RegExp(`title=["']${titleEscaped}["']`);
  const titleIdx = code.search(titleRegex);
  if (titleIdx === -1) return null;

  // Walk backwards to find the <SectionSteps that contains this title
  let startIdx = code.lastIndexOf('<SectionSteps', titleIdx);
  if (startIdx === -1) return null;

  // Find the closing /> for this SectionSteps - we need to track JSX nesting
  // SectionSteps is self-closing with items prop containing JSX
  // The pattern ends with: ]}  \n        />
  const closePattern = /\n\s*\/>/g;
  let searchFrom = titleIdx;
  // We need to find the matching />. Count < and > isn't reliable in JSX.
  // Instead find `]}` followed by whitespace and `/>`
  const closingRegex = /\]\}\s*\n\s*\/>/g;
  closingRegex.lastIndex = titleIdx;
  let match;
  while ((match = closingRegex.exec(code)) !== null) {
    // Verify this is the right closing by checking bracket balance
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
  // Count items by counting occurrences of icon: <Ri
  return (sectionCode.match(/icon:\s*<Ri/g) || []).length;
}

function limitTo9Items(sectionCode) {
  // Find items={[ ... ]}
  const itemsStart = sectionCode.indexOf('items={[');
  if (itemsStart === -1) return sectionCode;

  // Find each top-level item object { ... },
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
        // Find the comma after this }
        let j = i + 1;
        while (j < sectionCode.length && /\s/.test(sectionCode[j])) j++;
        if (sectionCode[j] === ',') j++;
        cutPoint = j;
        break;
      }
    }
  }

  if (cutPoint === -1) return sectionCode; // ≤9 items, no change

  // Find the closing ]}
  const closingBracket = sectionCode.lastIndexOf(']}');
  if (closingBracket === -1) return sectionCode;

  // Replace everything between cutPoint and closingBracket with newline+spaces
  return sectionCode.slice(0, cutPoint) + '\n          ' + sectionCode.slice(closingBracket);
}

for (const hub of hubs) {
  const filePath = path.join(appDir, hub.path);
  if (!fs.existsSync(filePath)) {
    console.log('SKIP:', hub.locale);
    continue;
  }

  let code = fs.readFileSync(filePath, 'utf8');
  const title = converterTitles[hub.locale];
  const section = findSectionSteps(code, title);

  if (!section) {
    console.log('⚠', hub.locale, '— converter section not found for title:', title);
    continue;
  }

  // Extract the converter section + preceding Gap
  let extractStart = section.start;
  // Check if there's a <Gap size="sm" /> before
  const before = code.slice(Math.max(0, extractStart - 100), extractStart);
  const gapMatch = before.match(/<Gap size="sm" \/>\s*\n\s*$/);
  if (gapMatch) {
    extractStart = extractStart - gapMatch[0].length;
  }

  let extractEnd = section.end;
  // Check if there's a <Gap size="sm" /> after
  const after = code.slice(extractEnd, extractEnd + 100);
  const gapAfterMatch = after.match(/^\s*\n\s*<Gap size="sm" \/>/);
  if (gapAfterMatch) {
    extractEnd += gapAfterMatch[0].length;
  }

  const converterBlock = code.slice(extractStart, extractEnd);

  // Remove from current position
  code = code.slice(0, extractStart) + code.slice(extractEnd);

  // Find insertion point: just before the first <Gap variant="line" />
  const lineGapIdx = code.indexOf('<Gap variant="line" />');
  if (lineGapIdx === -1) {
    console.log('⚠', hub.locale, '— <Gap variant="line" /> not found');
    continue;
  }

  // Find the whitespace before Gap variant="line"
  let insertAt = lineGapIdx;
  // Walk back to find start of line
  while (insertAt > 0 && code[insertAt - 1] !== '\n') insertAt--;

  // Limit to 9 items
  let limitedBlock = limitTo9Items(converterBlock);
  const itemsBefore = countItems(converterBlock);
  const itemsAfter = countItems(limitedBlock);

  // Insert before the <Gap variant="line" />
  code = code.slice(0, insertAt) + limitedBlock + '\n\n        ' + code.slice(insertAt);

  fs.writeFileSync(filePath, code, 'utf8');
  console.log('✓', hub.locale, `(${itemsBefore} → ${itemsAfter} items)`);
}

console.log('\n✅ Done');
