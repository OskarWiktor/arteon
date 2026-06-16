/**
 * Fix BOM (Byte Order Mark) in package.json files that break Turbopack parsing.
 * Called from prebuild/predev/postinstall scripts.
 */
const fs = require('fs');
const path = require('path');

const FILES_TO_CHECK = [
  'node_modules/next/dist/compiled/anser/package.json',
  'node_modules/sharp/package.json',
];

for (const rel of FILES_TO_CHECK) {
  const p = path.join(process.cwd(), rel);
  try {
    if (!fs.existsSync(p)) continue;
    const s = fs.readFileSync(p, 'utf8');
    if (s && s.charCodeAt(0) === 0xfeff) {
      fs.writeFileSync(p, s.slice(1), 'utf8');
      console.log('Fixed BOM:', rel);
    }
  } catch (e) {
    console.error('Error fixing BOM in', rel, e);
  }
}
