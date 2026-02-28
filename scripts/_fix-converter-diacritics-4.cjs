/**
 * Fix remaining SV diacritic issues + verify (pass 4).
 * Targets specific tool SV descriptions.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(filePath, 'utf8');
let fixCount = 0;

// Find all SV description lines and check for "an " / "for " issues
const lines = content.split('\n');

const svIssueTools = ['pngToJpg','gifToPng','gifToJpg','svgToWebp','gifToWebp','tiffToJpg','gifToAvif','pngToGif'];

for (const toolKey of svIssueTools) {
  // Find the tool block
  const keyIdx = content.indexOf("key: '" + toolKey + "'");
  if (keyIdx === -1) continue;
  
  // Find the sv: line within this tool's locales block
  const nextToolIdx = content.indexOf("\n  {", keyIdx + 10);
  const toolBlock = content.substring(keyIdx, nextToolIdx > 0 ? nextToolIdx : keyIdx + 3000);
  
  const svMatch = toolBlock.match(/sv:\s*\{[^}]+\}/);
  if (!svMatch) continue;
  
  const svLine = svMatch[0];
  const descMatch = svLine.match(/description:\s*'([^']*)'/);
  if (!descMatch) continue;
  
  const desc = descMatch[1];
  let newDesc = desc;
  
  // In Swedish converter descriptions:
  // "an" meaning "than" should be "än"
  // "for" meaning "for" should be "för" 
  // But we need context - "an" alone is not always wrong
  
  // Fix " an " → " än " when preceded by comparative (bättre, mer, mindre, etc.)
  // Actually in converter context " an JPG" means "than JPG" so fix that
  newDesc = newDesc.replace(/ an ([A-Z])/g, ' än $1'); // " an JPG" → " än JPG"
  
  // Fix "for " when it means "for" (Swedish "för")
  // In these descriptions: "Idealiskt for", "Perfekt for", etc.
  newDesc = newDesc.replace(/Idealiskt for /g, 'Idealiskt för ');
  newDesc = newDesc.replace(/Perfekt for /g, 'Perfekt för ');
  newDesc = newDesc.replace(/Ideal for /g, 'Ideal för ');
  newDesc = newDesc.replace(/ for webbplatser/g, ' för webbplatser');
  newDesc = newDesc.replace(/ for skanningar/g, ' för skanningar');
  newDesc = newDesc.replace(/ for enkla/g, ' för enkla');
  newDesc = newDesc.replace(/ for maximal/g, ' för maximal');
  newDesc = newDesc.replace(/ for utskrift/g, ' för utskrift');
  
  if (newDesc !== desc) {
    content = content.replace(svLine, svLine.replace(desc, newDesc));
    fixCount++;
    console.log(`✓ ${toolKey} [sv]: "${desc}" → "${newDesc}"`);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log(`\n✅ Fixed ${fixCount} SV diacritic issues`);
