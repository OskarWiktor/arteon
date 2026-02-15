/**
 * Split blog.json into per-category files + lightweight _index.json
 *
 * Source: data/pl/blog.json (single source of truth)
 * Output:
 *   data/pl/blog/_index.json     — ArticlePreview[] (slug, title, excerpt, cover, etc.)
 *   data/pl/blog/{cat-slug}.json — { articles: Article[] } per primaryCategory
 *
 * Run: node scripts/split-blog.cjs
 * Also runs as prebuild step via package.json
 */
const fs = require('fs');
const path = require('path');

function slugify(input) {
  return String(input)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

const DATA_DIR = path.join(__dirname, '..', 'data', 'pl');
const BLOG_DIR = path.join(DATA_DIR, 'blog');
const SOURCE = path.join(DATA_DIR, 'blog.json');

// Read source
const blog = JSON.parse(fs.readFileSync(SOURCE, 'utf8'));
const articles = blog.articles;

if (!Array.isArray(articles) || articles.length === 0) {
  console.error('No articles found in blog.json');
  process.exit(1);
}

// Ensure output directory
if (!fs.existsSync(BLOG_DIR)) {
  fs.mkdirSync(BLOG_DIR, { recursive: true });
}

// Clean old generated files (except _index.json which we'll overwrite)
const existingFiles = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith('.json'));
for (const f of existingFiles) {
  fs.unlinkSync(path.join(BLOG_DIR, f));
}

// Build _index.json — lightweight preview data for lists and carousels
const index = articles.map((a) => ({
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

// Build per-category files
const byCategory = new Map();
for (const a of articles) {
  const catSlug = slugify(a.primaryCategory || (a.category && a.category[0]) || 'inne');
  if (!byCategory.has(catSlug)) {
    byCategory.set(catSlug, []);
  }
  byCategory.get(catSlug).push(a);
}

for (const [catSlug, catArticles] of byCategory.entries()) {
  const filePath = path.join(BLOG_DIR, catSlug + '.json');
  fs.writeFileSync(filePath, JSON.stringify({ articles: catArticles }, null, 2) + '\n', 'utf8');
}

// Report
const indexSize = Buffer.byteLength(fs.readFileSync(path.join(BLOG_DIR, '_index.json')));
const sourceSize = Buffer.byteLength(fs.readFileSync(SOURCE));
console.log('[split-blog] Source: ' + (sourceSize / 1024).toFixed(1) + ' KB (' + articles.length + ' articles)');
console.log('[split-blog] _index.json: ' + (indexSize / 1024).toFixed(1) + ' KB');
console.log('[split-blog] Categories: ' + byCategory.size);
for (const [catSlug, catArticles] of byCategory.entries()) {
  const catSize = Buffer.byteLength(fs.readFileSync(path.join(BLOG_DIR, catSlug + '.json')));
  console.log('  ' + catSlug + '.json: ' + (catSize / 1024).toFixed(1) + ' KB (' + catArticles.length + ' articles)');
}
