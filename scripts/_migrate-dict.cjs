/**
 * Migration script: merge dictionaries/{locale}.json + component inline ui
 * → data/{locale}/dictionary.json
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LOCALES = ['pl', 'en', 'de', 'es', 'fr', 'pt', 'it', 'ro', 'nl', 'hu', 'id', 'vi', 'tr', 'tl', 'sw', 'ms', 'cs', 'sv', 'sq', 'da', 'no', 'fi', 'sk', 'hr', 'lt', 'sl'];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract a braced JS object literal starting from `startSearch` index */
function extractBraced(src, startSearch) {
  let depth = 0,
    objStart = -1,
    objEnd = -1;
  for (let i = startSearch; i < src.length; i++) {
    if (src[i] === '{') {
      if (objStart === -1) objStart = i;
      depth++;
    }
    if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        objEnd = i;
        break;
      }
    }
  }
  if (objStart === -1 || objEnd === -1) return null;
  return src.substring(objStart, objEnd + 1);
}

/** Extract a named const object: `const NAME ... = { ... }` */
function extractNamedObject(src, varName) {
  const regex = new RegExp('const\\s+' + varName + '[^=]*=\\s*');
  const match = src.match(regex);
  if (!match) {
    console.error('  ✗ Not found:', varName);
    return null;
  }
  const objStr = extractBraced(src, match.index + match[0].length);
  if (!objStr) {
    console.error('  ✗ No braces for:', varName);
    return null;
  }
  try {
    return eval('(' + objStr + ')');
  } catch (e) {
    console.error('  ✗ Eval failed for', varName, ':', e.message);
    return null;
  }
}

// Mock runtime variables for Navigation.tsx eval
function getToolHref() {
  return '__COMPUTED__';
}
var locale = '__COMPUTED__';

// ---------------------------------------------------------------------------
// Read component sources
// ---------------------------------------------------------------------------
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');

const breadcrumbsSrc = read('components/sections/BreadCrumbs.tsx');
const contactFormSrc = read('components/sections/ContactForm.tsx');
const carouselSrc = read('components/sections/tools/ToolsCarousel.tsx');
const langSwitcherSrc = read('components/shared/LanguageSwitcher.tsx');
const mobileNavSrc = read('components/shared/navigation/MobileNavigation.tsx');
const navigationSrc = read('components/shared/Navigation.tsx');

// ---------------------------------------------------------------------------
// Extract objects
// ---------------------------------------------------------------------------
console.log('Extracting component translations...');

const breadcrumbsUi = extractNamedObject(breadcrumbsSrc, 'ui');
const contactFormUi = extractNamedObject(contactFormSrc, 'formUi');
const carouselUi = extractNamedObject(carouselSrc, 'ui');

// LanguageSwitcher — 6 separate Record<Locale, string> objects
const switchTitle = extractNamedObject(langSwitcherSrc, 'switchTitle');
const toggleLabel = extractNamedObject(langSwitcherSrc, 'toggleLabel');
const chooseLabel = extractNamedObject(langSwitcherSrc, 'chooseLabel');
const popularLabel = extractNamedObject(langSwitcherSrc, 'popularLabel');
const otherLabel = extractNamedObject(langSwitcherSrc, 'otherLabel');
const closeModalLabel = extractNamedObject(langSwitcherSrc, 'closeModalLabel');

// MobileNavigation — 3 Record<Locale, string> objects
const mobileClose = extractNamedObject(mobileNavSrc, 'closeLabel');
const mobileServices = extractNamedObject(mobileNavSrc, 'servicesLabel');
const mobileContact = extractNamedObject(mobileNavSrc, 'contactLabel');

// Navigation infoBanner — embedded in JSX, uses getToolHref (mocked above)
function extractInfoBanner(src) {
  const marker = 'satisfies Record<Locale';
  const idx = src.indexOf(marker);
  if (idx === -1) return null;
  // Find the closing } right before `satisfies`
  let end = -1;
  for (let i = idx - 1; i >= 0; i--) {
    if (src[i] === '}') {
      end = i;
      break;
    }
  }
  if (end === -1) return null;
  // Walk backwards to find matching opening {
  let depth = 0;
  for (let i = end; i >= 0; i--) {
    if (src[i] === '}') depth++;
    if (src[i] === '{') {
      depth--;
      if (depth === 0) {
        const objStr = src.substring(i, end + 1);
        try {
          return eval('(' + objStr + ')');
        } catch (e) {
          console.error('  ✗ infoBanner eval failed:', e.message);
          return null;
        }
      }
    }
  }
  return null;
}
const infoBannerUi = extractInfoBanner(navigationSrc);

// ---------------------------------------------------------------------------
// Verify extractions
// ---------------------------------------------------------------------------
const checks = {
  breadcrumbs: breadcrumbsUi,
  contactForm: contactFormUi,
  carousel: carouselUi,
  switchTitle,
  toggleLabel,
  chooseLabel,
  popularLabel,
  otherLabel,
  closeModalLabel,
  mobileClose,
  mobileServices,
  mobileContact,
  infoBanner: infoBannerUi,
};
let ok = true;
for (const [k, v] of Object.entries(checks)) {
  if (!v) {
    console.error('MISSING:', k);
    ok = false;
  } else console.log('  ✓', k, '—', Object.keys(v).length, 'locales');
}
if (!ok) {
  console.error('Aborting — some extractions failed.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// Merge & write
// ---------------------------------------------------------------------------
let count = 0;
for (const locale of LOCALES) {
  const dictPath = path.join(ROOT, 'dictionaries', locale + '.json');
  const dict = JSON.parse(fs.readFileSync(dictPath, 'utf8'));

  // Carousel: separate urls (will use LOCALE_CONFIG in component)
  const carouselT = carouselUi[locale] || {};
  const { urls: _urls, ...carouselRest } = carouselT;

  // InfoBanner: only text + linkText (linkHref computed at runtime)
  const ib = infoBannerUi[locale] || {};

  const merged = {
    ...dict,
    breadcrumbs: breadcrumbsUi[locale] || {},
    contactForm: contactFormUi[locale] || {},
    toolsCarousel: carouselRest,
    languageSwitcher: {
      switchTitle: switchTitle[locale] || '',
      toggleLabel: toggleLabel[locale] || '',
      chooseLabel: chooseLabel[locale] || '',
      popularLabel: popularLabel[locale] || '',
      otherLabel: otherLabel[locale] || '',
      closeModalLabel: closeModalLabel[locale] || '',
    },
    mobileNav: {
      close: mobileClose[locale] || '',
      services: mobileServices[locale] || '',
      contact: mobileContact[locale] || '',
    },
    infoBanner: {
      text: ib.text || '',
      linkText: ib.linkText || '',
    },
  };

  const outDir = path.join(ROOT, 'data', locale);
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(path.join(outDir, 'dictionary.json'), JSON.stringify(merged, null, 2) + '\n', 'utf8');
  count++;
}

console.log(`\n✓ Created ${count} data/{locale}/dictionary.json files`);
