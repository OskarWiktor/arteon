/**
 * Add localized images to converter tools that only have a default PL image.
 * All converters should use locale-specific versions of the old WebP converter image.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(filePath, 'utf8');

const IMAGES_BLOCK = `images: {
      pl: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',
      en: '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
      es: '/assets/tools/jpg-png-to-webp-converter/convertidor-jpg-png-a-webp-es.webp',
      fr: '/assets/tools/jpg-png-to-webp-converter/convertisseur-jpg-png-en-webp-fr.webp',
      de: '/assets/tools/jpg-png-to-webp-converter/jpg-png-zu-webp-konverter-de.webp',
      pt: '/assets/tools/jpg-png-to-webp-converter/conversor-jpg-png-para-webp-pt.webp',
      it: '/assets/tools/jpg-png-to-webp-converter/convertitore-jpg-png-in-webp-it.webp',
      ro: '/assets/tools/jpg-png-to-webp-converter/convertor-jpg-png-in-webp-ro.webp',
      nl: '/assets/tools/jpg-png-to-webp-converter/jpg-png-naar-webp-converter-nl.webp',
      hu: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-konverter-hu.webp',
      cs: '/assets/tools/jpg-png-to-webp-converter/konvertor-jpg-png-na-webp-cs.webp',
      sv: '/assets/tools/jpg-png-to-webp-converter/jpg-png-till-webp-konverterare-sv.webp',
      da: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverter-da.webp',
      no: '/assets/tools/jpg-png-to-webp-converter/jpg-png-til-webp-konverterer-no.webp',
      fi: '/assets/tools/jpg-png-to-webp-converter/jpg-png-webp-muunnin-fi.webp',
      el: '/assets/tools/jpg-png-to-webp-converter/metatropeas-jpg-png-se-webp-el.webp',
    },`;

// Find all converter tool blocks that have section: 'konwertery'
// and have image: but NOT images:
const toolBlockRegex = /\{\s*\n\s*key:\s*'([^']+)',\s*\n\s*section:\s*'konwertery',\s*\n\s*icon:\s*\w+,\s*\n\s*image:\s*'([^']+)',\s*\n\s*desktopOnly:/g;

let fixCount = 0;
let match;
const fixes = [];

while ((match = toolBlockRegex.exec(content)) !== null) {
  const key = match[1];
  const imageLine = match[0];
  
  // Check if this tool already has images: {} (look at what comes after image line)
  const afterIdx = match.index + imageLine.length;
  const nextChunk = content.substring(match.index, match.index + 200);
  
  if (nextChunk.includes('images:')) {
    continue; // Already has images block
  }
  
  fixes.push({ key, index: match.index, fullMatch: match[0] });
}

// Apply fixes in reverse order to preserve indices
fixes.reverse();
for (const fix of fixes) {
  const oldLine = `image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',\n    desktopOnly:`;
  const newLine = `image: '/assets/tools/jpg-png-to-webp-converter/jpg-png-na-webp-bez-limitu-pl.webp',\n    ${IMAGES_BLOCK}\n    desktopOnly:`;
  
  // Find exact position of the image line in this tool block
  const blockStart = fix.index;
  const blockEnd = content.indexOf('\n  },', blockStart) + 5;
  const block = content.substring(blockStart, blockEnd);
  
  if (block.includes(oldLine)) {
    const newBlock = block.replace(oldLine, newLine);
    content = content.substring(0, blockStart) + newBlock + content.substring(blockEnd);
    fixCount++;
    console.log(`✓ Added images to: ${fix.key}`);
  } else {
    console.log(`⚠ Could not find exact pattern in: ${fix.key}`);
  }
}

if (fixCount > 0) {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`\n✅ Added localized images to ${fixCount} converter tools`);
} else {
  console.log('\n✅ All converter tools already have localized images');
}
