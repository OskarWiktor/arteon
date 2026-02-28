/**
 * Fix missing diacritics/accents in converter descriptions across all locales.
 * Applies find-and-replace to the tool-registry.ts file.
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

// ---- GERMAN (de) ----
replace("Qualitat'", "Qualität'");
replace("Qualitat.", "Qualität.");
replace('Transparenzunterstutzung', 'Transparenzunterstützung');
replace("fur einfache", "für einfache");
replace("fur Druck", "für Druck");
replace("fur maximale", "für maximale");
replace("fur den Druck", "für den Druck");
replace("fur hochste", "für höchste");

// ---- SPANISH (es) ----
replace('Compresion hasta', 'Compresión hasta');
replace('Compresion aun', 'Compresión aún');
replace('mas pequenos', 'más pequeños');
replace('sin perdida', 'sin pérdida');
replace('impresion y archivado', 'impresión y archivado');
replace('impresion.', 'impresión.');
replace('archivacion', 'archivación');

// ---- FRENCH (fr) ----
replace("jusqu'a 50%", "jusqu'à 50%");
replace("premiere image", "première image");

// ---- PORTUGUESE (pt) ----
replace('Compressao ate', 'Compressão até');
replace('suporte a transparencia', 'suporte a transparência');
replace('nao comprimidos', 'não comprimidos');
replace('Para impressao', 'Para impressão');
replace('impressao e arquivamento', 'impressão e arquivamento');

// ---- ITALIAN (it) ----
replace("qualita'", "qualità'");
replace("qualita.", "qualità.");
replace('piu piccoli', 'più piccoli');
replace('compatibilita', 'compatibilità');

// ---- ROMANIAN (ro) ----
replace('Converteste ', 'Convertește ');
replace('fara pierderi', 'fără pierderi');
replace('fara limita', 'fără limită');

// ---- HUNGARIAN (hu) ----
replace('konvertalasa', 'konvertálása');
replace('tomoritest', 'tömörítést');
replace('Akar 50%', 'Akár 50%');
replace('formatumra', 'formátumra');
replace('formatumban', 'formátumban');
replace('Tokeletes', 'Tökéletes');
replace('egyszeru', 'egyszerű');
replace('Nyomtatashoz', 'Nyomtatáshoz');
replace('archivalashoz', 'archiváláshoz');
replace('fotok ', 'fotók ');
replace('grafikakhoz', 'grafikákhoz');
replace('professzionalis', 'professzionális');

// ---- CZECH (cs) ----
replace('Prevedte fotky', 'Převeďte fotky');
replace('Prevedte soubory', 'Převeďte soubory');
replace('Prevedte grafiku', 'Převeďte grafiku');
replace('Prevedte prvni', 'Převeďte první');
replace('na moderni AVIF', 'na moderní AVIF');
replace('na moderni format', 'na moderní formát');
replace('lepsi komprese', 'lepší komprese');
replace('nez JPG', 'než JPG');
replace('zachovani kvality', 'zachování kvality');
replace('bezztratovy', 'bezztrátový');
replace('Idealni pro', 'Ideální pro');
replace('prvni snimek', 'první snímek');

// ---- SWEDISH (sv) ----
replace('battre komprimering', 'bättre komprimering');
replace("an JPG", "än JPG");
replace("for enkel", "för enkel");
replace("for maximal", "för maximal");
replace("for utskrift", "för utskrift");
replace('forlustfritt', 'förlustfritt');
replace('forlustfri', 'förlustfri');

// ---- GREEK (el) ----
replace('Μετατρεψτε', 'Μετατρέψτε');
replace('φωτογραφιες', 'φωτογραφίες');
replace('συγχρονο', 'σύγχρονο');
replace('καλυτερη', 'καλύτερη');
replace('συμπιεση', 'συμπίεση');
replace('γραφικα', 'γραφικά');
replace('διαφανεια', 'διαφάνεια');
replace('μικροτερα', 'μικρότερα');
replace('ακομη', 'ακόμη');
replace('εικονες', 'εικόνες');
replace('εξαιρετικη', 'εξαιρετική');
replace('μορφη', 'μορφή');
replace('ασυμπιεστα', 'ασυμπίεστα');
replace('μεγιστη', 'μέγιστη');
replace('συμβατοτητα', 'συμβατότητα');
replace('εκτυπωση', 'εκτύπωση');
replace('αρχειοθετηση', 'αρχειοθέτηση');
replace('επαγγελματικη', 'επαγγελματική');
replace('υψηλης', 'υψηλής');
replace('ποιοτητας', 'ποιότητας');

fs.writeFileSync(filePath, content, 'utf8');
console.log(`✅ Applied ${fixCount} diacritic fixes to tool-registry.ts`);
