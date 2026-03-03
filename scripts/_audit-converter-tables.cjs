/**
 * Audit converter tool JSON files across all locales for duplicate comparison tables.
 * Reports:
 *  - Files with both sectionInfo HTML table AND sectionFeatureComparison
 *  - Files with only one type
 *  - Feature rows that use boolean true/true where text would be more informative
 */
const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const locales = fs.readdirSync(DATA_DIR).filter(d => {
  const stat = fs.statSync(path.join(DATA_DIR, d));
  return stat.isDirectory() && fs.existsSync(path.join(DATA_DIR, d, 'tools'));
});

const results = {
  totalFiles: 0,
  duplicates: [],       // files with BOTH table types
  onlyHtml: [],         // files with only HTML table
  onlyComparison: [],   // files with only sectionFeatureComparison
  noTable: [],          // files with neither
  allBooleanFeatures: new Map(), // feature name → count of all-true rows
};

for (const locale of locales) {
  const toolsDir = path.join(DATA_DIR, locale, 'tools');
  if (!fs.existsSync(toolsDir)) continue;

  const files = fs.readdirSync(toolsDir).filter(f => f.startsWith('converter-') && f.endsWith('.json'));

  for (const file of files) {
    results.totalFiles++;
    const filePath = path.join(toolsDir, file);
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const blocks = data.contentBlocks || [];

    const htmlTables = blocks.filter(b =>
      b.type === 'sectionInfo' && b.html && b.html.includes('<table')
    );
    const featureComparisons = blocks.filter(b =>
      b.type === 'sectionFeatureComparison'
    );

    const key = `${locale}/${file}`;

    if (htmlTables.length > 0 && featureComparisons.length > 0) {
      results.duplicates.push({
        key,
        htmlTableTitles: htmlTables.map(h => h.title),
        comparisonTitles: featureComparisons.map(c => c.title),
        comparisonFeatures: featureComparisons[0]?.features?.map(f => ({
          name: f.name,
          allTrue: Object.values(f.values).every(v => v === true),
          values: f.values,
        })),
      });
    } else if (htmlTables.length > 0) {
      results.onlyHtml.push(key);
    } else if (featureComparisons.length > 0) {
      results.onlyComparison.push(key);
    } else {
      results.noTable.push(key);
    }

    // Track all-boolean-true features
    for (const fc of featureComparisons) {
      for (const f of (fc.features || [])) {
        const allTrue = Object.values(f.values).every(v => v === true);
        if (allTrue) {
          const count = results.allBooleanFeatures.get(f.name) || 0;
          results.allBooleanFeatures.set(f.name, count + 1);
        }
      }
    }
  }
}

console.log('=== CONVERTER TABLE AUDIT ===\n');
console.log(`Total converter files: ${results.totalFiles}`);
console.log(`Locales: ${locales.join(', ')}\n`);

console.log(`--- DUPLICATES (both HTML table + sectionFeatureComparison): ${results.duplicates.length} ---`);
// Group by file name (without locale)
const dupByFile = new Map();
for (const d of results.duplicates) {
  const fname = d.key.split('/')[1];
  if (!dupByFile.has(fname)) dupByFile.set(fname, []);
  dupByFile.get(fname).push(d);
}
for (const [fname, dups] of dupByFile) {
  console.log(`\n  ${fname} (${dups.length} locales)`);
  console.log(`    HTML table titles: ${dups[0].htmlTableTitles.join(', ')}`);
  console.log(`    Comparison titles: ${dups[0].comparisonTitles.join(', ')}`);
  if (dups[0].comparisonFeatures) {
    const allTrueFeatures = dups[0].comparisonFeatures.filter(f => f.allTrue);
    if (allTrueFeatures.length > 0) {
      console.log(`    All-true features (candidates for text): ${allTrueFeatures.map(f => f.name).join(', ')}`);
    }
  }
}

console.log(`\n--- ONLY HTML table (no sectionFeatureComparison): ${results.onlyHtml.length} ---`);
const htmlByFile = new Map();
for (const k of results.onlyHtml) {
  const fname = k.split('/')[1];
  if (!htmlByFile.has(fname)) htmlByFile.set(fname, []);
  htmlByFile.get(fname).push(k);
}
for (const [fname, items] of htmlByFile) {
  console.log(`  ${fname} (${items.length} locales)`);
}

console.log(`\n--- ONLY sectionFeatureComparison (no HTML table): ${results.onlyComparison.length} ---`);
const compByFile = new Map();
for (const k of results.onlyComparison) {
  const fname = k.split('/')[1];
  if (!compByFile.has(fname)) compByFile.set(fname, []);
  compByFile.get(fname).push(k);
}
for (const [fname, items] of compByFile) {
  console.log(`  ${fname} (${items.length} locales)`);
}

console.log(`\n--- NO comparison table at all: ${results.noTable.length} ---`);
const noByFile = new Map();
for (const k of results.noTable) {
  const fname = k.split('/')[1];
  if (!noByFile.has(fname)) noByFile.set(fname, []);
  noByFile.get(fname).push(k);
}
for (const [fname, items] of noByFile) {
  console.log(`  ${fname} (${items.length} locales)`);
}

console.log(`\n--- All-true features (could use text instead of checkmarks) ---`);
const sortedFeatures = [...results.allBooleanFeatures.entries()].sort((a, b) => b[1] - a[1]);
for (const [name, count] of sortedFeatures) {
  console.log(`  "${name}" — ${count} occurrences`);
}
