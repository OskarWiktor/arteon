/**
 * Split blog script
 * Generates lightweight _index.json from category JSON files
 * Run during prebuild: npm run prebuild
 */

const fs = require('node:fs');
const path = require('node:path');

const BLOG_DIR = path.join(process.cwd(), 'data', 'pl', 'blog');
const INDEX_FILE = path.join(BLOG_DIR, '_index.json');

// Category files to process
const CATEGORY_FILES = [
  'grafika.json',
  'marketing.json',
  'psychologia.json',
  'seo.json',
  'sklepy.json',
  'strony.json',
  'ux.json',
];

function main() {
  const allPreviews = [];

  for (const file of CATEGORY_FILES) {
    const filePath = path.join(BLOG_DIR, file);
    if (!fs.existsSync(filePath)) {
      console.log(`⚠ Skipping missing file: ${file}`);
      continue;
    }

    try {
      const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
      const articles = data.articles || [];

      for (const article of articles) {
        allPreviews.push({
          slug: article.slug,
          title: article.title,
          excerpt: article.excerpt,
          cover: article.cover,
          primaryCategory: article.primaryCategory,
          readingTime: article.readingTime,
          datePublished: article.datePublished,
          seo: article.seo,
        });
      }
    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message);
    }
  }

  // Sort by datePublished descending (newest first)
  allPreviews.sort((a, b) => {
    const dateA = new Date(a.datePublished || '1970-01-01');
    const dateB = new Date(b.datePublished || '1970-01-01');
    return dateB.getTime() - dateA.getTime();
  });

  fs.writeFileSync(INDEX_FILE, JSON.stringify(allPreviews, null, 2), 'utf8');
  console.log(`✓ Generated ${INDEX_FILE} with ${allPreviews.length} articles`);
}

main();
