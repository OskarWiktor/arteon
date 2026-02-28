/**
 * Fix broken schema description lines in hub pages.
 * The _update-hub-converters.cjs script left trailing old text after the new description.
 * Pattern: description: 'NEW TEXT.',  OLD TRAILING TEXT.',
 * Fix:     description: 'NEW TEXT.',
 */
const fs = require('fs');
const path = require('path');

const appRoot = path.resolve(__dirname, '..', 'app');
const HUBS = [
  { locale: 'en', file: path.join(appRoot, 'en', 'tools', 'page.tsx') },
  { locale: 'es', file: path.join(appRoot, 'es', 'herramientas', 'page.tsx') },
  { locale: 'fr', file: path.join(appRoot, 'fr', 'outils', 'page.tsx') },
  { locale: 'de', file: path.join(appRoot, 'de', 'werkzeuge', 'page.tsx') },
  { locale: 'pt', file: path.join(appRoot, 'pt', 'ferramentas', 'page.tsx') },
  { locale: 'it', file: path.join(appRoot, 'it', 'strumenti', 'page.tsx') },
  { locale: 'ro', file: path.join(appRoot, 'ro', 'instrumente', 'page.tsx') },
  { locale: 'nl', file: path.join(appRoot, 'nl', 'tools', 'page.tsx') },
  { locale: 'hu', file: path.join(appRoot, 'hu', 'eszkozok', 'page.tsx') },
  { locale: 'cs', file: path.join(appRoot, 'cs', 'nastroje', 'page.tsx') },
  { locale: 'sv', file: path.join(appRoot, 'sv', 'verktyg', 'page.tsx') },
  { locale: 'da', file: path.join(appRoot, 'da', 'vaerktojer', 'page.tsx') },
  { locale: 'no', file: path.join(appRoot, 'no', 'verktoy', 'page.tsx') },
  { locale: 'fi', file: path.join(appRoot, 'fi', 'tyokalut', 'page.tsx') },
  { locale: 'el', file: path.join(appRoot, 'el', 'ergaleia', 'page.tsx') },
];

let fixed = 0;
for (const { locale, file } of HUBS) {
  if (!fs.existsSync(file)) continue;
  let content = fs.readFileSync(file, 'utf8');
  const original = content;

  // Fix pattern: description: 'NEW.',  OLD TEXT.',
  // The new description ends with a period + single quote + comma
  // But then old text follows until the actual end quote + comma
  // We need to find lines in the schema block that have this double pattern
  // Match: description: '...required/registrering/etc.', TRAILING_JUNK.',
  content = content.replace(
    /^(\s*description: '(?:22|12)[^']*\.'),\s*[^'\n]+\.'\s*,\s*$/gm,
    '$1,'
  );

  // Also handle multiline description that was partially replaced
  // Pattern: description:\n    'NEW.', OLD.',
  content = content.replace(
    /^(\s*description:\s*\n?\s*'(?:22|12)[^']*\.'),\s*[^'\n]+\.'\s*,\s*$/gm,
    '$1,'
  );

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`  Fixed: ${locale}`);
    fixed++;
  } else {
    console.log(`  OK: ${locale}`);
  }
}
console.log(`\nFixed: ${fixed}`);
