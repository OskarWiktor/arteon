/**
 * Generates lightweight search index JSON files from full blog and projects data.
 * Run before build to keep the client-side search bundle small.
 *
 * Input:  data/pl/blog.json (~883KB), data/pl/projects.json (~89KB)
 * Output: data/pl/search-blog.json (~5KB), data/pl/search-projects.json (~2KB)
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data', 'pl');

// --- Blog ---
const blogPath = path.join(DATA_DIR, 'blog.json');
const blog = JSON.parse(fs.readFileSync(blogPath, 'utf8'));

const searchBlog = blog.articles.map((a) => ({
  s: a.slug,
  t: a.title,
  e: a.excerpt.length > 140 ? a.excerpt.substring(0, 140) : a.excerpt,
  c: a.primaryCategory,
  k: a.tags,
}));

fs.writeFileSync(path.join(DATA_DIR, 'search-blog.json'), JSON.stringify(searchBlog), 'utf8');

// --- Projects ---
const projectsPath = path.join(DATA_DIR, 'projects.json');
const projects = JSON.parse(fs.readFileSync(projectsPath, 'utf8'));

const searchProjects = projects.projects.map((p) => ({
  s: p.slug,
  t: p.title,
  d: p.short,
  k: p.category,
}));

fs.writeFileSync(path.join(DATA_DIR, 'search-projects.json'), JSON.stringify(searchProjects), 'utf8');

const blogSize = Buffer.byteLength(JSON.stringify(searchBlog));
const projSize = Buffer.byteLength(JSON.stringify(searchProjects));
console.log(`[search-index] Generated search-blog.json (${(blogSize / 1024).toFixed(1)}KB) and search-projects.json (${(projSize / 1024).toFixed(1)}KB)`);
