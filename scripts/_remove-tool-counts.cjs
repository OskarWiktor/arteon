/**
 * Remove hardcoded tool counts from:
 * 1. data/{locale}/pages/about.json — metadata.title, hero.description, cta.description
 * 2. data/{locale}/pages/contact.json — cta.description
 * 3. data/{locale}/pages/terms.json — cta.description
 */
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'data');
const locales = ['en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'cs', 'sv', 'da', 'no', 'fi', 'el'];

// Replacement map: match pattern → replacement (per locale)
// We replace "10 <tools-word>" with just "<tools-word>" (capitalized if needed)
const replacements = {
  en: { num: '10 free online tools', repl: 'Free online tools', numShort: '10 free tools', replShort: 'Free tools' },
  de: { num: '10 kostenlose Online-Tools', repl: 'Kostenlose Online-Tools', numShort: '10 kostenlose Tools', replShort: 'Kostenlose Tools' },
  es: { num: '10 herramientas en línea gratuitas', repl: 'Herramientas en línea gratuitas', numShort: '10 herramientas', replShort: 'Herramientas' },
  fr: { num: '10 outils en ligne gratuits', repl: 'Outils en ligne gratuits', numShort: '10 outils', replShort: 'Outils' },
  pt: { num: '10 ferramentas online gratuitas', repl: 'Ferramentas online gratuitas', numShort: '10 ferramentas', replShort: 'Ferramentas' },
  it: { num: '10 strumenti online gratuiti', repl: 'Strumenti online gratuiti', numShort: '10 strumenti', replShort: 'Strumenti' },
  ro: { num: '10 instrumente gratuite', repl: 'Instrumente gratuite', numShort: '10 instrumente', replShort: 'Instrumente' },
  nl: { num: '10 gratis online tools', repl: 'Gratis online tools', numShort: '10 gratis tools', replShort: 'Gratis tools' },
  hu: { num: '10 ingyenes online eszköz', repl: 'Ingyenes online eszközök', numShort: '10 ingyenes', replShort: 'Ingyenes' },
  cs: { num: '10 bezplatných online nástrojů', repl: 'Bezplatné online nástroje', numShort: '10 bezplatných', replShort: 'Bezplatné' },
  sv: { num: '10 gratis verktyg', repl: 'Gratis verktyg', numShort: '10 gratis', replShort: 'Gratis' },
  da: { num: '10 gratis onlineværktøjer', repl: 'Gratis onlineværktøjer', numShort: '10 gratis', replShort: 'Gratis' },
  no: { num: '10 gratis nettverktøy', repl: 'Gratis nettverktøy', numShort: '10 gratis', replShort: 'Gratis' },
  fi: { num: '10 ilmaista verkkotyökalua', repl: 'Ilmaiset verkkotyökalut', numShort: '10 ilmaista', replShort: 'Ilmaiset' },
  el: { num: '10 dorean diadiktyaka ergaleia', repl: 'Dorean diadiktyaka ergaleia', numShort: '10 dorean', replShort: 'Dorean' },
};

function patchJsonFile(filePath, locale) {
  if (!fs.existsSync(filePath)) return false;
  let raw = fs.readFileSync(filePath, 'utf8');
  const original = raw;

  // Generic: replace all occurrences of "10 <word>" pattern
  // Use a broad regex: replace "10 " followed by locale-specific tool words
  raw = raw.replace(/\b10 (darmowych |darmowe |free |kostenlose |gratuitas |gratuits |gratuiti |gratuite |gratis |ingyenes |bezplatn[ýc]ch |ilmaista |dorean )/gi, (match, after) => {
    // Capitalize first letter of `after`
    return after.charAt(0).toUpperCase() + after.slice(1);
  });

  if (raw !== original) {
    fs.writeFileSync(filePath, raw, 'utf8');
    return true;
  }
  return false;
}

let count = 0;
for (const loc of locales) {
  for (const page of ['about', 'contact', 'terms']) {
    const p = path.join(dataDir, loc, 'pages', `${page}.json`);
    if (patchJsonFile(p, loc)) {
      count++;
      console.log(`✓ ${loc}/pages/${page}.json`);
    }
  }
}
console.log(`\n✅ Patched ${count} JSON files`);
