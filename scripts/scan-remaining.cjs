const fs = require('node:fs');
const path = require('node:path');
const DATA = path.join(__dirname, '..', 'data');
const LOCALES = ['el', 'hu', 'ro', 'fi'];

const issues = [];

for (const loc of LOCALES) {
  const dir = path.join(DATA, loc, 'tools');
  const files = fs.readdirSync(dir).filter(f => f.startsWith('unit-') && f.endsWith('.json'));
  for (const f of files) {
    const j = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8'));
    for (const b of j.contentBlocks || []) {
      // Check sectionInfo titles in EN
      if (b.type === 'sectionInfo' && b.title) {
        if (/^[A-Za-z\s:?]+$/.test(b.title) && b.title.length > 5) {
          issues.push(`${loc}/${f} INFO-TITLE: ${b.title}`);
        }
      }
      // Check sectionInfo html for EN content
      if (b.type === 'sectionInfo' && b.html) {
        const text = b.html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        const enWords = text.match(/\b(the|and|for|with|from|this|that|are|was|has|have|can|each|most|used|step|than|show|same|both|use)\b/gi);
        if (enWords && enWords.length >= 3) {
          issues.push(`${loc}/${f} INFO-HTML: ${text.substring(0, 80)}...`);
        }
      }
      // Check comparison table feature names and values
      if (b.type === 'sectionFeatureComparison') {
        for (const feat of b.features || []) {
          if (/^[A-Za-z :,\d]+$/.test(feat.name) && feat.name.length > 3) {
            issues.push(`${loc}/${f} FEAT-NAME: ${feat.name}`);
          }
          for (const [k, v] of Object.entries(feat.values || {})) {
            if (/^[A-Za-z ()\-\/,]+$/.test(v) && v.length > 4) {
              issues.push(`${loc}/${f} FEAT-VAL: ${feat.name} -> ${v}`);
            }
          }
        }
      }
      // Check FAQ for DE/EN
      if (b.type === 'faq') {
        for (const item of b.items || []) {
          const q = item.question || '';
          const a = item.answer || '';
          if (/\b(Was |Wie |Ist |Nicht |Warum |wird |sind |werden |durch )\b/.test(q)) {
            issues.push(`${loc}/${f} FAQ-Q-DE: ${q}`);
          }
          if (/\b(Was |Wie |Ist |Nicht |Warum |wird |sind |werden |durch )\b/.test(a)) {
            issues.push(`${loc}/${f} FAQ-A-DE: ${a.substring(0, 80)}...`);
          }
          if (/\b(um |das |die |der |ein |für |bei |von )\b/.test(q) && !/rgb|hsl|cmyk|hex|dpi|ppi/i.test(q)) {
            issues.push(`${loc}/${f} FAQ-Q-MIXED: ${q}`);
          }
        }
      }
    }
  }
}

console.log(issues.join('\n'));
console.log(`\nTOTAL ISSUES: ${issues.length}`);
