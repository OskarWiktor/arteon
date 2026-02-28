/**
 * Extract all converter translations for quality audit.
 * Checks: missing diacritics, common typos, SEO patterns.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
const content = fs.readFileSync(filePath, 'utf8');

const ALL_LOCALES = ['pl','en','de','es','fr','pt','it','ro','nl','hu','cs','sv','da','no','fi','el'];

// Known diacritic issues by locale
const DIACRITIC_CHECKS = {
  de: [
    { wrong: 'Qualitat', correct: 'Qualität' },
    { wrong: 'Transparenzunterstutzung', correct: 'Transparenzunterstützung' },
    { wrong: 'Grosse', correct: 'Größe' },
    { wrong: 'fur ', correct: 'für ' },
    { wrong: 'grossere', correct: 'größere' },
    { wrong: 'Dateigrösse', correct: 'Dateigröße' },
    { wrong: 'hochster', correct: 'höchster' },
  ],
  es: [
    { wrong: 'Compresion ', correct: 'Compresión ' },
    { wrong: 'mas pequenos', correct: 'más pequeños' },
    { wrong: 'perdida', correct: 'pérdida' },
    { wrong: 'impresion', correct: 'impresión' },
    { wrong: 'archivacion', correct: 'archivación' },
  ],
  fr: [
    { wrong: 'jusqu\'a ', correct: "jusqu'à " },
    { wrong: "jusqu'a ", correct: "jusqu'à " },
    { wrong: 'premiere ', correct: 'première ' },
    { wrong: 'l\'impression', correct: "l'impression" }, // this is ok actually
  ],
  pt: [
    { wrong: 'Compressao ', correct: 'Compressão ' },
    { wrong: 'ate ', correct: 'até ' },
    { wrong: 'transparencia', correct: 'transparência' },
    { wrong: 'impressao', correct: 'impressão' },
    { wrong: 'arquivamento', correct: 'arquivamento' }, // ok
    { wrong: 'perda', correct: 'perda' }, // ok
    { wrong: 'nao', correct: 'não' },
  ],
  it: [
    { wrong: 'qualita', correct: 'qualità' },
    { wrong: 'piu ', correct: 'più ' },
    { wrong: 'compatibilita', correct: 'compatibilità' },
  ],
  ro: [
    { wrong: 'Converteste ', correct: 'Convertește ' },
    { wrong: 'pierderi', correct: 'pierderi' }, // ok
    { wrong: 'fara ', correct: 'fără ' },
  ],
  hu: [
    { wrong: 'konvertalasa', correct: 'konvertálása' },
    { wrong: 'tomoritest', correct: 'tömörítést' },
    { wrong: 'Akar ', correct: 'Akár ' },
    { wrong: 'formatumra', correct: 'formátumra' },
    { wrong: 'Tokeletes', correct: 'Tökéletes' },
    { wrong: 'egyszeru', correct: 'egyszerű' },
    { wrong: 'Nyomtatashoz', correct: 'Nyomtatáshoz' },
    { wrong: 'archivalashoz', correct: 'archiváláshoz' },
    { wrong: 'veszteségmentes', correct: 'veszteségmentes' }, // ok actually
    { wrong: 'fotok ', correct: 'fotók ' },
    { wrong: 'grafikakhoz', correct: 'grafikákhoz' },
  ],
  cs: [
    { wrong: 'Prevedte ', correct: 'Převeďte ' },
    { wrong: 'moderni ', correct: 'moderní ' },
    { wrong: 'lepsi ', correct: 'lepší ' },
    { wrong: 'nez ', correct: 'než ' },
    { wrong: 'zachovani ', correct: 'zachování ' },
    { wrong: 'kvality', correct: 'kvality' }, // ok
    { wrong: 'bezztratovy', correct: 'bezztrátový' },
    { wrong: 'Idealni', correct: 'Ideální' },
    { wrong: 'jednoduchou', correct: 'jednoduchou' }, // ok
  ],
  sv: [
    { wrong: 'battre ', correct: 'bättre ' },
    { wrong: 'an ', correct: 'än ' },
    { wrong: 'for ', correct: 'för ' },
    { wrong: 'forlustfritt', correct: 'förlustfritt' },
  ],
  el: [
    { wrong: 'Μετατρεψτε', correct: 'Μετατρέψτε' },
    { wrong: 'φωτογραφιες', correct: 'φωτογραφίες' },
    { wrong: 'συγχρονο', correct: 'σύγχρονο' },
    { wrong: 'καλυτερη', correct: 'καλύτερη' },
    { wrong: 'συμπιεση', correct: 'συμπίεση' },
  ],
};

// Extract all converter locale entries
const converterBlocks = [];
const blockRegex = /key:\s*'([^']+)',\s*\n\s*section:\s*'konwertery'[\s\S]*?locales:\s*\{([\s\S]*?)\n\s*\},?\n\s*\}/g;
let match;

while ((match = blockRegex.exec(content)) !== null) {
  const key = match[1];
  const localesBlock = match[2];
  
  // Extract per-locale slug, title, description
  const localeRegex = /(\w{2}):\s*\{\s*slug:\s*'([^']+)',\s*title:\s*'([^']*?)'|(\w{2}):\s*\{\s*slug:\s*'([^']+)',\s*title:\s*"([^"]*?)"/g;
  let lm;
  const locales = {};
  
  // Better: extract each locale line
  const lineRegex = /(\w{2}):\s*\{[^}]+\}/g;
  let lineMat;
  while ((lineMat = lineRegex.exec(localesBlock)) !== null) {
    const locale = lineMat[1];
    const lineContent = lineMat[0];
    
    const slugM = lineContent.match(/slug:\s*'([^']+)'/);
    const titleM = lineContent.match(/title:\s*'([^']*)'/) || lineContent.match(/title:\s*"([^"]*)"/);
    const descM = lineContent.match(/description:\s*'([^']*)'/) || lineContent.match(/description:\s*"([^"]*)"/);
    
    if (slugM && titleM) {
      locales[locale] = {
        slug: slugM[1],
        title: titleM[1],
        description: descM ? descM[1] : '',
      };
    }
  }
  
  converterBlocks.push({ key, locales });
}

console.log(`\n=== TRANSLATION AUDIT ===`);
console.log(`Analyzing ${converterBlocks.length} converter tools\n`);

let totalIssues = 0;

// Check diacritics
console.log('--- MISSING DIACRITICS / ACCENTS ---');
for (const tool of converterBlocks) {
  for (const [locale, checks] of Object.entries(DIACRITIC_CHECKS)) {
    const entry = tool.locales[locale];
    if (!entry) continue;
    
    const fullText = `${entry.title} ${entry.description}`;
    for (const check of checks) {
      if (check.wrong === check.correct) continue; // skip self-matches
      if (fullText.includes(check.wrong) && !fullText.includes(check.correct)) {
        console.log(`  ${tool.key} [${locale}]: "${check.wrong}" → "${check.correct}"`);
        totalIssues++;
      }
    }
  }
}

if (totalIssues === 0) {
  console.log('  ✅ No obvious diacritic issues found');
}

// Check for empty descriptions
console.log('\n--- EMPTY DESCRIPTIONS ---');
let emptyCount = 0;
for (const tool of converterBlocks) {
  for (const [locale, entry] of Object.entries(tool.locales)) {
    if (!entry.description || entry.description.trim() === '') {
      console.log(`  ${tool.key} [${locale}]: EMPTY description`);
      emptyCount++;
    }
  }
}
if (emptyCount === 0) console.log('  ✅ All descriptions present');

// Check description length for SEO (should be 50-160 chars)
console.log('\n--- DESCRIPTION LENGTH ISSUES ---');
let lengthIssues = 0;
for (const tool of converterBlocks) {
  for (const [locale, entry] of Object.entries(tool.locales)) {
    const len = entry.description.length;
    if (len < 40) {
      console.log(`  ${tool.key} [${locale}]: TOO SHORT (${len} chars) "${entry.description}"`);
      lengthIssues++;
    }
    if (len > 160) {
      console.log(`  ${tool.key} [${locale}]: TOO LONG (${len} chars)`);
      lengthIssues++;
    }
  }
}
if (lengthIssues === 0) console.log('  ✅ All descriptions within SEO range');

console.log(`\n=== TOTAL ISSUES: ${totalIssues + emptyCount + lengthIssues} ===`);
