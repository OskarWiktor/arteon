/**
 * Fix stale canonical URLs in blog data files.
 * Replaces old category paths with new ones in _index.json, blog.json, and category JSONs.
 */
const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, '..', 'data', 'pl', 'blog');

const replacements = [
  ['edukacja/bezpieczenstwo/dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa', 'edukacja/strony/dlaczego-regularne-aktualizacje-wordpressa-sa-kluczowe-dla-bezpieczenstwa'],
  ['edukacja/dostepnosc/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie', 'edukacja/strony/kontrast-kolorow-na-stronie-dlaczego-ma-znaczenie'],
  ['edukacja/bezpieczenstwo/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje', 'edukacja/strony/czym-jest-certyfikat-ssl-i-dlaczego-kazda-strona-go-potrzebuje'],
  ['edukacja/druk/materialy-drukowane-dla-firmy-ktore-zamowic', 'edukacja/grafika/materialy-drukowane-dla-firmy-ktore-zamowic'],
  ['edukacja/branding/jak-przygotowac-profesjonalna-stopke-mailowa', 'edukacja/marketing/jak-przygotowac-profesjonalna-stopke-mailowa'],
  ['edukacja/zdjecia/favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie', 'edukacja/strony/favicon-co-to-za-ikona-jak-ja-stworzyc-i-przygotowac-aby-dzialala-poprawnie'],
  ['edukacja/zdjecia/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp', 'edukacja/strony/jak-zoptymalizowac-zdjecia-na-strone-www-aby-byla-szybsza-rozmiary-formaty-i-webp'],
];

const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.json'));

let totalFixes = 0;

for (const file of files) {
  const filePath = path.join(blogDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let fixes = 0;

  for (const [oldPath, newPath] of replacements) {
    const count = (content.match(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (count > 0) {
      content = content.replaceAll(oldPath, newPath);
      fixes += count;
    }
  }

  if (fixes > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✓ ${file} (${fixes} fixes)`);
    totalFixes += fixes;
  }
}

// Also fix the main blog.json in data/pl/
const mainBlogPath = path.join(__dirname, '..', 'data', 'pl', 'blog.json');
if (fs.existsSync(mainBlogPath)) {
  let content = fs.readFileSync(mainBlogPath, 'utf8');
  let fixes = 0;
  for (const [oldPath, newPath] of replacements) {
    const count = (content.match(new RegExp(oldPath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (count > 0) {
      content = content.replaceAll(oldPath, newPath);
      fixes += count;
    }
  }
  if (fixes > 0) {
    fs.writeFileSync(mainBlogPath, content, 'utf8');
    console.log(`✓ blog.json (${fixes} fixes)`);
    totalFixes += fixes;
  }
}

console.log(`\n✅ Fixed ${totalFixes} stale canonical URLs`);
