/**
 * Generate search index script
 * Creates lightweight search-blog.json and search-projects.json
 * Run during prebuild: npm run prebuild
 */

const fs = require('node:fs');
const path = require('node:path');

const DATA_DIR = path.join(process.cwd(), 'data', 'pl');
const BLOG_INDEX = path.join(DATA_DIR, 'blog', '_index.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const SEARCH_BLOG_FILE = path.join(DATA_DIR, 'search-blog.json');
const SEARCH_PROJECTS_FILE = path.join(DATA_DIR, 'search-projects.json');

function truncate(str, maxLen) {
  if (!str || str.length <= maxLen) return str;
  return str.slice(0, maxLen);
}

function generateSearchBlog() {
  if (!fs.existsSync(BLOG_INDEX)) {
    console.log('⚠ Blog index not found, skipping search-blog.json');
    return;
  }

  const articles = JSON.parse(fs.readFileSync(BLOG_INDEX, 'utf8'));
  const searchItems = articles.map(a => ({
    s: a.slug, // slug
    t: a.title, // title
    e: truncate(a.excerpt, 140), // excerpt (truncated)
    c: a.primaryCategory, // category
    k: a.tags || [], // keywords
  }));

  fs.writeFileSync(SEARCH_BLOG_FILE, JSON.stringify(searchItems), 'utf8');
  console.log(`✓ Generated ${SEARCH_BLOG_FILE} with ${searchItems.length} items`);
}

function generateSearchProjects() {
  if (!fs.existsSync(PROJECTS_FILE)) {
    console.log('⚠ Projects file not found, skipping search-projects.json');
    return;
  }

  const data = JSON.parse(fs.readFileSync(PROJECTS_FILE, 'utf8'));
  const projects = data.projects || [];
  const searchItems = projects.map(p => ({
    s: p.slug, // slug
    t: p.title, // title
    d: truncate(p.short || p.excerpt || '', 140), // description (truncated)
    k: p.tags || p.category || [], // keywords
  }));

  fs.writeFileSync(SEARCH_PROJECTS_FILE, JSON.stringify(searchItems), 'utf8');
  console.log(`✓ Generated ${SEARCH_PROJECTS_FILE} with ${searchItems.length} items`);
}

function main() {
  generateSearchBlog();
  generateSearchProjects();
}

main();
