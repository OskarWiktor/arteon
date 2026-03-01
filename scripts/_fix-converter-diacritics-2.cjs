/**
 * Fix remaining diacritic issues in converter descriptions (pass 2).
 * Targets specific patterns that pass 1 missed.
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'lib', 'i18n', 'tool-registry.ts');
let content = fs.readFileSync(filePath, 'utf8');
let fixCount = 0;

function replace(old, corrected) {
  if (content.includes(old)) {
    const count = (content.match(new RegExp(old.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    content = content.replaceAll(old, corrected);
    fixCount += count;
  }
}

// ---- Remaining GERMAN (de) ----
// "fur " in various contexts
replace('Verlustfrei fur ', 'Verlustfrei für ');
replace('fur hohe ', 'für hohe ');
replace('Perfekt fur ', 'Perfekt für ');
replace('Format fur ', 'Format für ');
// "Qualitat" in various contexts
replace('bei gleicher Qualitat', 'bei gleicher Qualität');
replace('hoher Qualitat', 'hoher Qualität');
replace('hochster Qualitat', 'höchster Qualität');
// Grosse
replace('Dateigrösse', 'Dateigröße');
replace('Massive Grosse', 'Massive Größe');
replace('Dateien. Grosse', 'Dateien. Größe');
replace('Grosse-Reduktion', 'Größe-Reduktion');
replace('Grossenreduktion', 'Größenreduktion');
replace('Enorme Grossenreduktion', 'Enorme Größenreduktion');
// General context-free replacements in de locale lines
// Need to be more precise - target the actual text

// ---- Remaining SWEDISH (sv) ----
// "an " at word boundary in Swedish descriptions
// These are tricky - "an" is a common Swedish word but in converter context means "than"
// Target specific phrases
replace('komprimering an JPG', 'komprimering än JPG');
replace('Perfekt for enkel', 'Perfekt för enkel');
replace('for maximal kompatibilitet', 'för maximal kompatibilitet');

// ---- Remaining PORTUGUESE (pt) ----
replace('Compressao ate', 'Compressão até');
replace('ate 50%', 'até 50%');
replace('suporte a transparencia', 'suporte a transparência');
replace('Para impressao e', 'Para impressão e');
replace('impressao e arquivamento', 'impressão e arquivamento');
replace('profissional para impressao', 'profissional para impressão');

// ---- Remaining ITALIAN (it) ----
replace('Migliore qualita', 'Migliore qualità');
replace('della qualita', 'della qualità');
replace('alta qualita', 'alta qualità');

// ---- Remaining ROMANIAN (ro) ----
replace('pierderi. Fara', 'pierderi. Fără');

// ---- Remaining HUNGARIAN (hu) ----
replace('Akar 50%', 'Akár 50%');

// ---- Remaining CZECH (cs) ----
// "Prevedte " in various starting contexts
replace('Prevedte grafiky', 'Převeďte grafiky');
replace('Prevedte vektorovou', 'Převeďte vektorovou');
replace('Prevedte nekomprimovane', 'Převeďte nekomprimované');
replace('Prevedte obrazy', 'Převeďte obrazy');
replace('Prevedte soubory', 'Převeďte soubory');
replace('Prevedte fotky', 'Převeďte fotky');
replace('Prevedte prvni', 'Převeďte první');
replace('Prevedte grafiku', 'Převeďte grafiku');

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Applied ${fixCount} additional diacritic fixes`);
