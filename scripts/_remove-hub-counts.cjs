/**
 * Remove hardcoded tool counts from all 16 hub pages.
 * Targets: metadata, schema, HeroBanner, SectionSteps description, SectionInfo
 */
const fs = require('fs');
const path = require('path');
const appDir = path.join(__dirname, '..', 'app');

const hubs = [
  { locale: 'pl', dir: '(pl)/narzedzia', file: 'page.tsx' },
  { locale: 'en', dir: 'en/tools', file: 'page.tsx' },
  { locale: 'de', dir: 'de/werkzeuge', file: 'page.tsx' },
  { locale: 'es', dir: 'es/herramientas', file: 'page.tsx' },
  { locale: 'fr', dir: 'fr/outils', file: 'page.tsx' },
  { locale: 'pt', dir: 'pt/ferramentas', file: 'page.tsx' },
  { locale: 'it', dir: 'it/strumenti', file: 'page.tsx' },
  { locale: 'ro', dir: 'ro/instrumente', file: 'page.tsx' },
  { locale: 'nl', dir: 'nl/tools', file: 'page.tsx' },
  { locale: 'hu', dir: 'hu/eszkozok', file: 'page.tsx' },
  { locale: 'cs', dir: 'cs/nastroje', file: 'page.tsx' },
  { locale: 'sv', dir: 'sv/verktyg', file: 'page.tsx' },
  { locale: 'da', dir: 'da/vaerktojer', file: 'page.tsx' },
  { locale: 'no', dir: 'no/verktoy', file: 'page.tsx' },
  { locale: 'fi', dir: 'fi/tyokalut', file: 'page.tsx' },
  { locale: 'el', dir: 'el/ergaleia', file: 'page.tsx' },
];

// Patterns to replace (most specific first)
const patterns = [
  // PL (54/44)
  [/54 darmowe narzędzia online/g, 'Darmowe narzędzia online'],
  [/54 darmowe narzędzia/g, 'Darmowe narzędzia'],
  [/44 konwertery obrazów online/g, 'Konwertery obrazów online'],
  [/44 konwertery obrazów/g, 'Konwertery obrazów'],
  [/44 konwert/g, 'Konwert'],
  [/Zestaw 34 darmowych narzędzi online/g, 'Zestaw darmowych narzędzi online'],
  [/24 konwertery formatów obrazów/g, 'Konwertery formatów obrazów'],
  [/numberOfItems: 54,/g, ''],
  [/numberOfItems: 34,/g, ''],

  // EN
  [/34 free online tools/g, 'Free online tools'],
  [/A set of 34 free online tools/g, 'A set of free online tools'],
  [/24 image format converters/g, 'Image format converters'],
  [/24 online image converters/g, 'Online image converters'],

  // DE
  [/34 kostenlose Online-Tools/g, 'Kostenlose Online-Tools'],
  [/24 Bildkonverter/g, 'Bildkonverter'],
  [/24 Online-Bildkonverter/g, 'Online-Bildkonverter'],

  // ES
  [/34 herramientas gratuitas/g, 'Herramientas gratuitas'],
  [/Un conjunto de 34 herramientas/g, 'Un conjunto de herramientas'],
  [/24 convertidores de imágenes online/g, 'Convertidores de imágenes online'],
  [/24 convertidores de imágenes/g, 'Convertidores de imágenes'],
  [/24 convertidores de formatos de imagen/g, 'Convertidores de formatos de imagen'],

  // FR
  [/34 outils gratuits/g, 'Outils gratuits'],
  [/Un ensemble de 34 outils/g, "Un ensemble d'outils"],
  [/24 convertisseurs d'images/g, "Convertisseurs d'images"],
  [/24 convertisseurs d\\u2019images/g, "Convertisseurs d'images"],
  [/24 convertisseurs de formats d'image/g, "Convertisseurs de formats d'image"],

  // PT
  [/34 ferramentas gratuitas/g, 'Ferramentas gratuitas'],
  [/Um conjunto de 34 ferramentas/g, 'Um conjunto de ferramentas'],
  [/24 conversores de imagens/g, 'Conversores de imagens'],
  [/24 conversores de formatos de imagem/g, 'Conversores de formatos de imagem'],

  // IT
  [/34 strumenti gratuiti/g, 'Strumenti gratuiti'],
  [/Un set di 34 strumenti/g, 'Un set di strumenti'],
  [/24 convertitori di immagini/g, 'Convertitori di immagini'],
  [/24 convertitori di formati immagine/g, 'Convertitori di formati immagine'],

  // RO
  [/34 instrumente gratuite/g, 'Instrumente gratuite'],
  [/Un set de 34 instrumente/g, 'Un set de instrumente'],
  [/24 convertoare de imagini/g, 'Convertoare de imagini'],
  [/24 convertoare de formate imagine/g, 'Convertoare de formate imagine'],

  // NL
  [/34 gratis online tools/g, 'Gratis online tools'],
  [/Een set van 34 gratis/g, 'Een set van gratis'],
  [/24 online beeldconverters/g, 'Online beeldconverters'],
  [/24 afbeeldingsconverters/g, 'Afbeeldingsconverters'],

  // HU
  [/34 ingyenes online eszköz/g, 'Ingyenes online eszközök'],
  [/24 képkonverter/g, 'Képkonverterek'],
  [/24 online képkonverter/g, 'Online képkonverterek'],

  // CS
  [/34 bezplatných online nástrojů/g, 'Bezplatné online nástroje'],
  [/24 online převodníků/g, 'Online převodníky'],
  [/24 převodníků obrázků/g, 'Převodníky obrázků'],

  // SV
  [/34 gratis onlineverktyg/g, 'Gratis onlineverktyg'],
  [/24 online bildkonverterare/g, 'Online bildkonverterare'],
  [/24 bildformatkonverterare/g, 'Bildformatkonverterare'],

  // DA
  [/34 gratis onlineværktøjer/g, 'Gratis onlineværktøjer'],
  [/24 online billedkonvertere/g, 'Online billedkonvertere'],
  [/24 billedformatkonvertere/g, 'Billedformatkonvertere'],

  // NO
  [/34 gratis nettverktøy/g, 'Gratis nettverktøy'],
  [/24 online bildkonverterere/g, 'Online bildkonverterere'],
  [/24 bildformatkonverterere/g, 'Bildformatkonverterere'],

  // FI
  [/34 ilmaista verkkotyökalua/g, 'Ilmaiset verkkotyökalut'],
  [/24 online-kuvamuunninta/g, 'Online-kuvamuuntimet'],
  [/24 kuvaformaattimuunninta/g, 'Kuvaformaattimuuntimet'],

  // EL
  [/34 dorean diadiktyaka ergaleia/g, 'Dorean diadiktyaka ergaleia'],
  [/24 online metatropeis eikonon/g, 'Online metatropeis eikonon'],
];

let totalChanged = 0;
for (const hub of hubs) {
  const p = path.join(appDir, hub.dir, hub.file);
  if (!fs.existsSync(p)) {
    console.log('SKIP:', hub.locale);
    continue;
  }
  let raw = fs.readFileSync(p, 'utf8');
  const original = raw;

  for (const [pattern, replacement] of patterns) {
    raw = raw.replace(pattern, replacement);
  }

  // Clean up empty numberOfItems lines
  raw = raw.replace(/\n\s*\n/g, '\n\n');

  if (raw !== original) {
    fs.writeFileSync(p, raw, 'utf8');
    totalChanged++;
    console.log('✓', hub.locale);
  } else {
    console.log('~', hub.locale, '(no changes)');
  }
}
console.log(`\n✅ Updated ${totalChanged} hub pages`);
