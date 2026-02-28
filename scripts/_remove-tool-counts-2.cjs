/**
 * Fix remaining locales (es, fr, pt, it, ro, el, cs) with exact string replacements.
 * Also fix any remaining "10 " patterns in already-patched files.
 */
const fs = require('fs');
const path = require('path');
const dataDir = path.join(__dirname, '..', 'data');

const fixes = [
  // ES
  { file: 'es/pages/about.json', old: '10 herramientas online gratuitas para web', rep: 'Herramientas online gratuitas para web' },
  { file: 'es/pages/about.json', old: '10 herramientas en el navegador', rep: 'Herramientas en el navegador' },
  { file: 'es/pages/about.json', old: '10 herramientas en línea gratuitas — sin', rep: 'Herramientas en línea gratuitas — sin' },
  { file: 'es/pages/contact.json', old: '10 herramientas en línea gratuitas para', rep: 'Herramientas en línea gratuitas para' },
  { file: 'es/pages/terms.json', old: '10 herramientas online gratuitas para', rep: 'Herramientas online gratuitas para' },
  // FR
  { file: 'fr/pages/about.json', old: '10 outils en ligne gratuits pour le', rep: 'Outils en ligne gratuits pour le' },
  { file: 'fr/pages/about.json', old: '10 outils dans le navigateur', rep: 'Outils dans le navigateur' },
  { file: 'fr/pages/about.json', old: '10 outils en ligne gratuits — sans', rep: 'Outils en ligne gratuits — sans' },
  { file: 'fr/pages/contact.json', old: '10 outils en ligne gratuits pour travailler', rep: 'Outils en ligne gratuits pour travailler' },
  { file: 'fr/pages/terms.json', old: '10 outils en ligne gratuits pour travailler', rep: 'Outils en ligne gratuits pour travailler' },
  // PT
  { file: 'pt/pages/about.json', old: '10 ferramentas online gratuitas para web', rep: 'Ferramentas online gratuitas para web' },
  { file: 'pt/pages/about.json', old: '10 ferramentas no navegador', rep: 'Ferramentas no navegador' },
  { file: 'pt/pages/about.json', old: '10 ferramentas online gratuitas — sem', rep: 'Ferramentas online gratuitas — sem' },
  { file: 'pt/pages/contact.json', old: '10 ferramentas online gratuitas para', rep: 'Ferramentas online gratuitas para' },
  { file: 'pt/pages/terms.json', old: '10 ferramentas online gratuitas para', rep: 'Ferramentas online gratuitas para' },
  // IT
  { file: 'it/pages/about.json', old: '10 strumenti online gratuiti per web', rep: 'Strumenti online gratuiti per web' },
  { file: 'it/pages/about.json', old: '10 strumenti nel browser', rep: 'Strumenti nel browser' },
  { file: 'it/pages/about.json', old: '10 strumenti online gratuiti — senza', rep: 'Strumenti online gratuiti — senza' },
  { file: 'it/pages/contact.json', old: '10 strumenti online gratuiti per', rep: 'Strumenti online gratuiti per' },
  { file: 'it/pages/terms.json', old: '10 strumenti online gratuiti per', rep: 'Strumenti online gratuiti per' },
  // RO
  { file: 'ro/pages/about.json', old: '10 instrumente gratuite pentru web', rep: 'Instrumente gratuite pentru web' },
  { file: 'ro/pages/about.json', old: '10 instrumente în browser', rep: 'Instrumente în browser' },
  { file: 'ro/pages/about.json', old: '10 instrumente gratuite — fără', rep: 'Instrumente gratuite — fără' },
  { file: 'ro/pages/contact.json', old: '10 instrumente gratuite pentru', rep: 'Instrumente gratuite pentru' },
  { file: 'ro/pages/terms.json', old: '10 instrumente online gratuite pentru', rep: 'Instrumente online gratuite pentru' },
  // EL (about + contact — terms already done)
  { file: 'el/pages/about.json', old: '10 dorean ergaleia', rep: 'Dorean ergaleia' },
  { file: 'el/pages/contact.json', old: '10 dorean ergaleia', rep: 'Dorean ergaleia' },
  // CS (about — terms already done, contact needs check)
  { file: 'cs/pages/terms.json', old: '10 bezplatnych online nastroju', rep: 'Bezplatne online nastroje' },
  // HU (terms — check)
  { file: 'hu/pages/terms.json', old: '10 ingyenes online eszkoz', rep: 'Ingyenes online eszkozok' },
];

let count = 0;
for (const fix of fixes) {
  const p = path.join(dataDir, fix.file);
  if (!fs.existsSync(p)) { console.log('SKIP:', fix.file); continue; }
  let raw = fs.readFileSync(p, 'utf8');
  if (raw.includes(fix.old)) {
    raw = raw.replace(fix.old, fix.rep);
    fs.writeFileSync(p, raw, 'utf8');
    count++;
    console.log('✓', fix.file, ':', fix.old.substring(0, 40));
  }
}
console.log(`\n✅ Applied ${count} fixes`);
