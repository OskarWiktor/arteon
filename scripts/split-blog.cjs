/**
 * Generate _index.json from per-category blog files.
 *
 * Source of truth: data/pl/blog/{category}.json
 * Output:          data/pl/blog/_index.json — ArticlePreview[] (lightweight)
 *
 * Run: node scripts/split-blog.cjs
 * Also runs as prebuild step via package.json
 */
const fs = require('fs');
const path = require('path');

const BLOG_DIR = path.join(__dirname, '..', 'data', 'pl', 'blog');

// Read all category files (everything except _index.json)
const catFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json') && f !== '_index.json');

if (catFiles.length === 0) {
  console.error('[split-blog] No category files found in data/pl/blog/');
  process.exit(1);
}

const allArticles = [];
let totalSize = 0;

for (const f of catFiles.sort()) {
  const filePath = path.join(BLOG_DIR, f);
  const raw = fs.readFileSync(filePath, 'utf8');
  totalSize += Buffer.byteLength(raw);
  const data = JSON.parse(raw);
  const articles = data.articles || [];
  allArticles.push(...articles);
}

if (allArticles.length === 0) {
  console.error('[split-blog] No articles found in category files');
  process.exit(1);
}

// Build _index.json — lightweight preview data for lists and carousels
const index = allArticles.map((a) => ({
  slug: a.slug,
  title: a.title,
  excerpt: a.excerpt,
  cover: a.cover,
  primaryCategory: a.primaryCategory,
  category: a.category,
  tags: a.tags,
  readingTime: a.readingTime,
  datePublished: a.datePublished,
  seo: a.seo,
}));

fs.writeFileSync(path.join(BLOG_DIR, '_index.json'), JSON.stringify(index, null, 2) + '\n', 'utf8');

// Report
const indexSize = Buffer.byteLength(fs.readFileSync(path.join(BLOG_DIR, '_index.json')));
console.log('[split-blog] Categories: ' + catFiles.length + ' (' + (totalSize / 1024).toFixed(1) + ' KB total)');
console.log('[split-blog] Articles: ' + allArticles.length);
console.log('[split-blog] _index.json: ' + (indexSize / 1024).toFixed(1) + ' KB');
for (const f of catFiles.sort()) {
  const filePath = path.join(BLOG_DIR, f);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const count = (data.articles || []).length;
  const size = Buffer.byteLength(fs.readFileSync(filePath));
  console.log('  ' + f + ': ' + (size / 1024).toFixed(1) + ' KB (' + count + ' articles)');
}
