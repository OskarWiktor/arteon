/**
 * Audit internal links: check that every href in JSON data files, hub pages,
 * and navigation data points to an existing route (page.tsx).
 */
const fs = require('fs');
const path = require('path');

const appDir = path.join(__dirname, '..', 'app');
const dataDir = path.join(__dirname, '..', 'data');

// Build set of all valid routes from page.tsx files
function collectRoutes(dir, prefix = '') {
  const routes = new Set();
  if (!fs.existsSync(dir)) return routes;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === 'node_modules' || e.name === '.git') continue;
    const fullPath = path.join(dir, e.name);
    if (e.isDirectory()) {
      // Route group: strip parentheses
      let segment = e.name;
      if (segment.startsWith('(') && segment.endsWith(')')) {
        // route group - don't add segment
        for (const r of collectRoutes(fullPath, prefix)) routes.add(r);
      } else if (segment.startsWith('[') && segment.endsWith(']')) {
        // dynamic route - skip (can't validate)
        continue;
      } else {
        for (const r of collectRoutes(fullPath, prefix + '/' + segment)) routes.add(r);
      }
    } else if (e.name === 'page.tsx' || e.name === 'page.ts') {
      routes.add(prefix || '/');
    }
  }
  return routes;
}

const routes = collectRoutes(appDir);
console.log(`Found ${routes.size} valid routes\n`);

// Collect all internal hrefs from JSON files
const broken = [];

function scanJsonFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const json = JSON.parse(content);
    findHrefs(json, filePath);
  } catch (e) {
    /* skip non-JSON */
  }
}

function findHrefs(obj, filePath, keyPath = '') {
  if (!obj || typeof obj !== 'object') return;
  if (Array.isArray(obj)) {
    obj.forEach((item, i) => findHrefs(item, filePath, `${keyPath}[${i}]`));
    return;
  }
  for (const [key, value] of Object.entries(obj)) {
    if (typeof value === 'string' && (key === 'href' || key === 'url' || key === 'path') && value.startsWith('/') && !value.includes('.')) {
      // Internal link - check if route exists
      const cleanPath = value.split('?')[0].split('#')[0];
      if (!routes.has(cleanPath)) {
        broken.push({ file: path.relative(path.join(__dirname, '..'), filePath), key: `${keyPath}.${key}`, href: cleanPath });
      }
    }
    findHrefs(value, filePath, `${keyPath}.${key}`);
  }
}

// Scan all locale data JSON files
const locales = fs.readdirSync(dataDir).filter((d) => {
  const stat = fs.statSync(path.join(dataDir, d));
  return stat.isDirectory() && d !== 'pl'; // PL has blog data, handle separately
});

// Add PL
locales.unshift('pl');

for (const locale of locales) {
  const localeDir = path.join(dataDir, locale);
  // Scan pages/ and tools/ JSON
  for (const subdir of ['pages', 'tools', 'tools-ui']) {
    const dir = path.join(localeDir, subdir);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir).filter((f) => f.endsWith('.json'))) {
      scanJsonFile(path.join(dir, file));
    }
  }
  // Scan dictionary
  const dictPath = path.join(localeDir, 'dictionary.json');
  if (fs.existsSync(dictPath)) scanJsonFile(dictPath);
}

// Scan navigation data files
const navDir = path.join(__dirname, '..', 'components', 'shared', 'navigation-data');
if (fs.existsSync(navDir)) {
  for (const file of fs.readdirSync(navDir).filter((f) => f.endsWith('.ts'))) {
    const content = fs.readFileSync(path.join(navDir, file), 'utf8');
    const hrefMatches = content.matchAll(/href:\s*['"]([^'"]+)['"]/g);
    for (const m of hrefMatches) {
      const href = m[1];
      if (href.startsWith('/') && !href.includes('.')) {
        if (!routes.has(href)) {
          broken.push({ file: `navigation-data/${file}`, key: 'href', href });
        }
      }
    }
  }
}

if (broken.length === 0) {
  console.log('✅ No broken internal links found!');
} else {
  console.log(`⚠ Found ${broken.length} broken internal links:\n`);
  // Group by href for readability
  const byHref = {};
  for (const b of broken) {
    if (!byHref[b.href]) byHref[b.href] = [];
    byHref[b.href].push(`${b.file} (${b.key})`);
  }
  for (const [href, files] of Object.entries(byHref).sort()) {
    console.log(`  ${href}`);
    for (const f of files.slice(0, 3)) console.log(`    ← ${f}`);
    if (files.length > 3) console.log(`    ← ... and ${files.length - 3} more`);
  }
}
