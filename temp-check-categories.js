const fs = require('fs');
const path = require('path');

// Read blog data
const blogData = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'data', 'pl', 'blog.json'), 'utf8'));
const articles = blogData.articles;

// Get all categories (primary + secondary)
const allCategories = new Set();
const primaryCategories = new Set();

articles.forEach((article) => {
  if (article.primaryCategory) {
    primaryCategories.add(article.primaryCategory);
    allCategories.add(article.primaryCategory);
  }
  if (article.category && Array.isArray(article.category)) {
    article.category.forEach((cat) => allCategories.add(cat));
  }
});

console.log('Primary categories only:');
Array.from(primaryCategories)
  .sort()
  .forEach((cat) => console.log(`- ${cat}`));

console.log('\nAll categories found:');
Array.from(allCategories)
  .sort()
  .forEach((cat) => console.log(`- ${cat}`));

// Find secondary categories (those that are not primary)
const secondaryCategories = Array.from(allCategories).filter((cat) => !primaryCategories.has(cat));
console.log('\nSecondary categories to be removed:');
secondaryCategories.forEach((cat) => console.log(`- ${cat}`));
