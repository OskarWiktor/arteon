/**
 * Fix remaining diacritic issues in OLD batch of converters (pass 3).
 * These are precise, line-level replacements for specific tools.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(filePath, 'utf8');
let fixCount = 0;

// Helper: replace exact old text with new in the file
function fix(old, corrected) {
  if (old === corrected) return;
  if (content.includes(old)) {
    content = content.replaceAll(old, corrected);
    fixCount++;
  }
}

// ---- pngToJpg [sv] "an " ----
// The SV descriptions use "an" instead of "än" (meaning "than")
// Need to find the exact SV lines for these old converters

// Let me find all SV descriptions that contain " an " meaning "than"
// Pattern: "...komprimering an JPG..." or similar - but the old converters don't have compression claims
// Let me check what the actual SV descriptions say

// Search approach: find exact description strings with issues
const lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];

  // SV lines with " an " that should be " än "
  if (line.match(/sv:.*description:/) && line.includes(' an ')) {
    // Only fix if it's clearly "than" context (after comparative)
    if (line.match(/(bättre|mer|större|mindre|enklare|lättare) an /)) {
      lines[i] = line.replace(/ an /g, ' än ');
      fixCount++;
    }
  }

  // SV lines with " for " that should be " för "
  if (line.match(/sv:.*description:/) && line.match(/ for (enkel|maximal|utskrift|arkivering|tryck)/)) {
    lines[i] = line.replace(/ for (enkel|maximal|utskrift|arkivering|tryck)/g, ' för $1');
    fixCount++;
  }

  // DE lines with " fur " that should be " für "
  if (line.match(/de:.*description:/) && line.includes(' fur ')) {
    lines[i] = line.replace(/ fur /g, ' für ');
    fixCount++;
  }

  // DE "Qualitat" → "Qualität"
  if (line.match(/de:.*description:/) && line.includes('Qualitat')) {
    lines[i] = line.replace(/Qualitat/g, 'Qualität');
    fixCount++;
  }

  // DE "Grosse" → "Größe" (in description context)
  if (line.match(/de:.*description:/) && line.match(/Grosse/)) {
    lines[i] = line.replace(/Grossenreduktion/g, 'Größenreduktion').replace(/Grosse/g, 'Größe');
    fixCount++;
  }

  // IT "piu " → "più " and "qualita" → "qualità"
  if (line.match(/it:.*description:/)) {
    if (line.includes(' piu ')) {
      lines[i] = line.replace(/ piu /g, ' più ');
      fixCount++;
    }
    if (line.includes('qualita')) {
      lines[i] = line.replace(/qualita/g, 'qualità');
      fixCount++;
    }
  }

  // PT "ate " → "até ", "transparencia" → "transparência", "Compressao" → "Compressão", "impressao" → "impressão"
  if (line.match(/pt:.*description:/)) {
    let changed = false;
    if (line.includes(' ate ') || line.includes(' ate.')) {
      lines[i] = lines[i].replace(/ ate /g, ' até ').replace(/ ate\./g, ' até.');
      changed = true;
    }
    if (lines[i].includes('transparencia')) {
      lines[i] = lines[i].replace(/transparencia/g, 'transparência');
      changed = true;
    }
    if (lines[i].includes('Compressao')) {
      lines[i] = lines[i].replace(/Compressao/g, 'Compressão');
      changed = true;
    }
    if (lines[i].includes('impressao')) {
      lines[i] = lines[i].replace(/impressao/g, 'impressão');
      changed = true;
    }
    if (changed) fixCount++;
  }

  // RO "fara " → "fără "
  if (line.match(/ro:.*description:/) && line.includes('fara ')) {
    lines[i] = line.replace(/fara /g, 'fără ');
    fixCount++;
  }

  // HU "Akar " → "Akár "
  if (line.match(/hu:.*description:/) && line.includes('Akar ')) {
    lines[i] = line.replace(/Akar /g, 'Akár ');
    fixCount++;
  }

  // CS "Prevedte " → "Převeďte "
  if (line.match(/cs:.*description:/) && line.includes('Prevedte ')) {
    lines[i] = line.replace(/Prevedte /g, 'Převeďte ');
    fixCount++;
  }
}

content = lines.join('\n');
fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Applied ${fixCount} line-level diacritic fixes (pass 3)`);
