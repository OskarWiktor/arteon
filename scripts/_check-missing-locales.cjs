const fs = require('fs');
const code = fs.readFileSync('lib/i18n/tool-registry.ts', 'utf8');
const keys = [
  'jpgToAvif','pngToAvif','webpToAvif','svgToAvif','bmpToAvif',
  'gifToAvif','heicToAvif','tiffToAvif',
  'jpgToGif','pngToGif','webpToGif','svgToGif','bmpToGif',
  'jpgToTiff','pngToTiff','webpToTiff','svgToTiff','bmpToTiff','heicToTiff',
];
for (const loc of ['fr','nl','it','el']) {
  const miss = [];
  for (const k of keys) {
    const i = code.indexOf("key: '" + k + "'");
    if (i === -1) { miss.push(k + ' (no key)'); continue; }
    const area = code.slice(i, i + 3000);
    if (!area.includes(loc + ': {')) miss.push(k);
  }
  console.log(loc + ': missing=' + miss.join(', '));
}
