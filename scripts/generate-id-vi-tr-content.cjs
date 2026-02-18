/**
 * Generate ID/VI/TR content JSON files from EN templates.
 * Adjusts locale, metadata.path, breadcrumbs, and schema URLs.
 * Content text stays in EN as placeholder — to be translated later.
 */
const fs = require('fs');
const path = require('path');

const TOOL_SLUGS = {
  // toolKey → { en slug, id slug, vi slug, tr slug }
  jpgToWebp: {
    file: 'webp-converter.json',
    en: 'jpg-png-to-webp-unlimited',
    id: 'konverter-jpg-png-ke-webp',
    vi: 'chuyen-doi-jpg-png-sang-webp',
    tr: 'jpg-png-webp-donusturucu',
  },
  imageResize: {
    file: 'image-editor.json',
    en: 'online-image-editor',
    id: 'editor-gambar',
    vi: 'chinh-sua-hinh-anh',
    tr: 'gorsel-duzenleyici',
  },
  favicon: {
    file: 'favicon.json',
    en: 'free-favicon-generator',
    id: 'generator-favicon-gratis',
    vi: 'tao-favicon-mien-phi',
    tr: 'ucretsiz-favicon-olusturucu',
  },
  metaCounter: {
    file: 'meta-counter.json',
    en: 'meta-title-description-length-checker',
    id: 'pemeriksa-meta-judul-dan-deskripsi',
    vi: 'kiem-tra-meta-title-va-description',
    tr: 'meta-baslik-ve-aciklama-kontrol',
  },
  wordCounter: {
    file: 'word-counter.json',
    en: 'word-and-character-counter',
    id: 'penghitung-kata-dan-karakter',
    vi: 'dem-tu-va-ky-tu',
    tr: 'kelime-ve-karakter-sayaci',
  },
  emailSignature: {
    file: 'email-signature.json',
    en: 'free-email-signature-generator',
    id: 'generator-tanda-tangan-email-gratis',
    vi: 'tao-chu-ky-email-mien-phi',
    tr: 'ucretsiz-e-posta-imza-olusturucu',
  },
  contrastChecker: {
    file: 'contrast-checker.json',
    en: 'color-contrast-checker',
    id: 'pemeriksa-kontras-warna',
    vi: 'kiem-tra-do-tuong-phan-mau',
    tr: 'renk-kontrast-kontrolu',
  },
  paletteExtractor: {
    file: 'palette-extractor.json',
    en: 'image-color-extractor',
    id: 'ekstraktor-warna-dari-gambar',
    vi: 'trich-xuat-mau-tu-hinh-anh',
    tr: 'gorsel-renk-cikarici',
  },
  colorPalette: {
    file: 'color-palette.json',
    en: 'color-palette-generator',
    id: 'generator-palet-warna',
    vi: 'tao-bang-mau',
    tr: 'renk-paleti-olusturucu',
  },
  qrCode: {
    file: 'qr-code.json',
    en: 'free-qr-code-generator',
    id: 'generator-kode-qr-gratis',
    vi: 'tao-ma-qr-mien-phi',
    tr: 'ucretsiz-qr-kod-olusturucu',
  },
};

const LOCALE_CONFIG = {
  id: {
    toolsBase: '/id/alat',
    toolsLabel: 'Alat',
    currency: 'IDR',
  },
  vi: {
    toolsBase: '/vi/cong-cu',
    toolsLabel: 'Cong cu',
    currency: 'VND',
  },
  tr: {
    toolsBase: '/tr/araclar',
    toolsLabel: 'Araclar',
    currency: 'TRY',
  },
};

function deepReplace(obj, enSlug, newSlug, enLocale, newLocale, enToolsBase, newToolsBase) {
  if (typeof obj === 'string') {
    let s = obj;
    // Replace locale path references
    s = s.replace(new RegExp(`/${enLocale}/tools/${enSlug}`, 'g'), `${newToolsBase}/${newSlug}`);
    s = s.replace(new RegExp(`/${enLocale}/tools`, 'g'), newToolsBase);
    // Replace currency references (USD → target)
    s = s.replace(/\bUSD\b/g, LOCALE_CONFIG[newLocale].currency);
    return s;
  }
  if (Array.isArray(obj)) {
    return obj.map((item) => deepReplace(item, enSlug, newSlug, enLocale, newLocale, enToolsBase, newToolsBase));
  }
  if (obj && typeof obj === 'object') {
    const result = {};
    for (const [k, v] of Object.entries(obj)) {
      result[k] = deepReplace(v, enSlug, newSlug, enLocale, newLocale, enToolsBase, newToolsBase);
    }
    return result;
  }
  return obj;
}

let created = 0;
let skipped = 0;

for (const [toolKey, slugs] of Object.entries(TOOL_SLUGS)) {
  const enPath = path.resolve('data/en/tools', slugs.file);
  if (!fs.existsSync(enPath)) {
    console.log(`SKIP (EN not found): ${slugs.file}`);
    skipped++;
    continue;
  }

  const enData = JSON.parse(fs.readFileSync(enPath, 'utf8'));

  for (const locale of ['id', 'vi', 'tr']) {
    const config = LOCALE_CONFIG[locale];
    const targetDir = path.resolve(`data/${locale}/tools`);
    const targetPath = path.join(targetDir, slugs.file);

    if (fs.existsSync(targetPath)) {
      console.log(`SKIP (exists): ${locale}/${slugs.file}`);
      skipped++;
      continue;
    }

    // Deep clone and replace paths
    let data = JSON.parse(JSON.stringify(enData));
    data = deepReplace(data, slugs.en, slugs[locale], 'en', locale, '/en/tools', config.toolsBase);

    // Fix top-level fields
    data.locale = locale;
    data.metadata.path = `${config.toolsBase}/${slugs[locale]}`;

    // Fix breadcrumbs
    if (data.breadcrumbs) {
      data.breadcrumbs.second = {
        href: config.toolsBase,
        label: config.toolsLabel,
      };
      data.breadcrumbs.third = {
        href: `${config.toolsBase}/${slugs[locale]}`,
        label: data.breadcrumbs.third.label, // Keep EN label as placeholder
      };
    }

    // Fix schema URLs
    if (data.schemas?.software?.url) {
      data.schemas.software.url = `https://www.arteonagency.pl${config.toolsBase}/${slugs[locale]}`;
    }

    // Fix generatedBy in schemas
    const jsonStr = JSON.stringify(data, null, 2);
    const fixed = jsonStr.replace(/arteonagency\.pl\/en\/tools\//g, `arteonagency.pl${config.toolsBase.slice(1)}/${slugs[locale]}`);

    fs.mkdirSync(targetDir, { recursive: true });
    fs.writeFileSync(targetPath, fixed + '\n', 'utf8');
    created++;
    console.log(`CREATED: data/${locale}/tools/${slugs.file}`);
  }
}

console.log(`\nDone. Created: ${created}, Skipped: ${skipped}`);
