/**
 * Generate Next.js route pages for new locales: el, bg, ha, yo, af.
 * Creates: layout.tsx, tools index loading, about, contact pages,
 * and all 10 individual tool pages per locale.
 * Tools index page and privacy page are NOT generated here (too complex, need manual creation).
 * Usage: node scripts/generate-locale-routes.cjs
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

// ---------------------------------------------------------------------------
// Locale configuration
// ---------------------------------------------------------------------------
const LOCALES = {
  el: {
    toolsDir: 'ergaleia',
    aboutDir: 'sxetika-me-emas',
    contactDir: 'epikoinonia',
    privacyDir: 'politiki-aporritou',
    aboutHref: '/el/sxetika-me-emas',
    contactHref: '/el/epikoinonia',
    privacyHref: '/el/politiki-aporritou',
  },
  bg: {
    toolsDir: 'instrumenti',
    aboutDir: 'za-nas',
    contactDir: 'kontakt',
    privacyDir: 'politika-za-poveritelnost',
    aboutHref: '/bg/za-nas',
    contactHref: '/bg/kontakt',
    privacyHref: '/bg/politika-za-poveritelnost',
  },
  ha: {
    toolsDir: 'kayan-aiki',
    aboutDir: 'game-da-mu',
    contactDir: 'tuntube-mu',
    privacyDir: 'manufar-sirri',
    aboutHref: '/ha/game-da-mu',
    contactHref: '/ha/tuntube-mu',
    privacyHref: '/ha/manufar-sirri',
  },
  yo: {
    toolsDir: 'awon-irinse',
    aboutDir: 'nipa-wa',
    contactDir: 'kan-si-wa',
    privacyDir: 'ilana-asiri',
    aboutHref: '/yo/nipa-wa',
    contactHref: '/yo/kan-si-wa',
    privacyHref: '/yo/ilana-asiri',
  },
  af: {
    toolsDir: 'gereedskap',
    aboutDir: 'oor-ons',
    contactDir: 'kontak',
    privacyDir: 'privaatheidsbeleid',
    aboutHref: '/af/oor-ons',
    contactHref: '/af/kontak',
    privacyHref: '/af/privaatheidsbeleid',
  },
};

// Tool definitions: key, component, data file, desktop-only flag, slug per locale
const TOOLS = [
  {
    component: 'JpgPngToWebp',
    componentPath: '@/components/sections/tools/JpgPngToWebp',
    dataFile: 'webp-converter.json',
    desktopOnly: true,
    slugs: { el: 'metatropeas-jpg-png-se-webp', bg: 'konvertor-jpg-png-v-webp', ha: 'mai-canza-jpg-png-zuwa-webp', yo: 'oluyipada-jpg-png-si-webp', af: 'jpg-png-na-webp-omskakelaar' },
  },
  {
    component: 'ImageResizeTool',
    componentPath: '@/components/sections/tools/ImageResizeTool',
    dataFile: 'image-editor.json',
    desktopOnly: true,
    slugs: { el: 'epexergasia-eikonas', bg: 'redaktor-na-izobrazhenia', ha: 'editan-hoto', yo: 'olootu-aworan', af: 'beeldredigeerder' },
  },
  {
    component: 'FaviconGenerator',
    componentPath: '@/components/sections/tools/FaviconGenerator',
    dataFile: 'favicon.json',
    desktopOnly: true,
    slugs: { el: 'dorean-dimiourgia-favicon', bg: 'bezplaten-generator-na-favicon', ha: 'samar-da-favicon-kyauta', yo: 'olupilese-favicon-ofe', af: 'gratis-favicon-generator' },
  },
  {
    component: 'EmailSignatureGenerator',
    componentPath: '@/components/sections/tools/EmailSignatureGenerator',
    dataFile: 'email-signature.json',
    desktopOnly: true,
    slugs: { el: 'dorean-dimiourgia-ypografis-email', bg: 'bezplaten-generator-na-podpis-za-email', ha: 'samar-da-sa-hannu-imel-kyauta', yo: 'olupilese-ibuwolu-imeeli-ofe', af: 'gratis-e-pos-handtekening-generator' },
  },
  {
    component: 'MetaTitleDescriptionTool',
    componentPath: '@/components/sections/tools/MetaTitleDescriptionTool',
    dataFile: 'meta-counter.json',
    desktopOnly: false,
    slugs: { el: 'elegkhos-meta-titlou-kai-perigrafis', bg: 'proverka-na-meta-zaglavie-i-opisanie', ha: 'tantance-meta-take-da-bayani', yo: 'atunyewo-meta-akole-ati-apejuwe', af: 'meta-titel-en-beskrywing-nagaaier' },
  },
  {
    component: 'WordCountTool',
    componentPath: '@/components/sections/tools/WordCountTool',
    dataFile: 'word-counter.json',
    desktopOnly: false,
    slugs: { el: 'metritis-lexeon-kai-charaktiron', bg: 'broiach-na-dumi-i-simvoli', ha: 'kidaya-kalmomi-da-haruffa', yo: 'oluka-oro-ati-ohun-kikoo', af: 'woord-en-karakter-teller' },
  },
  {
    component: 'WcagContrastChecker',
    componentPath: '@/components/sections/tools/WcagContrastChecker',
    dataFile: 'contrast-checker.json',
    desktopOnly: false,
    slugs: { el: 'elegkhos-kontrast-chromaton', bg: 'proverka-na-kontrast-na-tsvetove', ha: 'tantance-bambancin-launuka', yo: 'atunyewo-iyato-awon-awoo', af: 'kleurkontras-nagaaier' },
  },
  {
    component: 'PaletteExtractor',
    componentPath: '@/components/sections/tools/PaletteExtractor',
    dataFile: 'palette-extractor.json',
    desktopOnly: false,
    slugs: { el: 'exagogi-chromaton-apo-eikona', bg: 'ekstraktor-na-tsvetove-ot-izobrazhenie', ha: 'fitar-launuka-daga-hoto', yo: 'iseduro-awoo-lati-aworan', af: 'kleur-onttrekker-uit-beeld' },
  },
  {
    component: 'ColorPaletteGenerator',
    componentPath: '@/components/sections/tools/ColorPaletteGenerator',
    dataFile: 'color-palette.json',
    desktopOnly: false,
    slugs: { el: 'dimiourgia-paletas-chromaton', bg: 'generator-na-tsvetovi-palitri', ha: 'samar-da-fayafayan-launuka', yo: 'olupilese-paleti-awoo', af: 'kleurpalet-generator' },
  },
  {
    component: 'QrCodeGenerator',
    componentPath: '@/components/sections/tools/QrCodeGenerator',
    dataFile: 'qr-code.json',
    desktopOnly: false,
    slugs: { el: 'dorean-dimiourgia-kodikou-qr', bg: 'bezplaten-generator-na-qr-kod', ha: 'samar-da-lambar-qr-kyauta', yo: 'olupilese-koodu-qr-ofe', af: 'gratis-qr-kode-generator' },
  },
];

function mkdirp(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  mkdirp(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log(`  Created: ${path.relative(ROOT, filePath)}`);
}

let totalFiles = 0;

for (const [locale, cfg] of Object.entries(LOCALES)) {
  console.log(`\n=== ${locale.toUpperCase()} ===`);
  const appDir = path.join(ROOT, 'app', locale);

  // 1. layout.tsx
  writeFile(
    path.join(appDir, 'layout.tsx'),
    `import Footer from '@/components/shared/Footer';
import Navigation from '@/components/shared/Navigation';
import { LocaleProvider } from '@/lib/LocaleContext';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <LocaleProvider value="${locale}">
      <Navigation />

      <main id="main-content" tabIndex={-1}>
        {children}
      </main>

      <Footer />
    </LocaleProvider>
  );
}
`
  );
  totalFiles++;

  // 2. tools loading.tsx
  writeFile(
    path.join(appDir, cfg.toolsDir, 'loading.tsx'),
    `import ToolsIndexSkeleton from '@/components/ui/skeletons/ToolsIndexSkeleton';

export default function Loading() {
  return <ToolsIndexSkeleton />;
}
`
  );
  totalFiles++;

  // 3. About page
  writeFile(
    path.join(appDir, cfg.aboutDir, 'page.tsx'),
    `import AboutPageContent from '@/components/pages/AboutPageContent';
import { getAboutPageData, getAboutAlternates } from '@/lib/i18n/pages/about';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = '${locale}' as const;
const data = getAboutPageData(LOCALE)!;
const alternates = getAboutAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('${cfg.aboutHref}'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function AboutPage() {
  return <AboutPageContent locale={LOCALE} />;
}
`
  );
  totalFiles++;

  // 4. Contact page
  writeFile(
    path.join(appDir, cfg.contactDir, 'page.tsx'),
    `import ContactPageContent from '@/components/pages/ContactPageContent';
import { getContactPageData, getContactAlternates } from '@/lib/i18n/pages/contact';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

const LOCALE = '${locale}' as const;
const data = getContactPageData(LOCALE)!;
const alternates = getContactAlternates(LOCALE);

export const metadata = {
  title: data.metadata.title,
  description: data.metadata.description,
  alternates,
  openGraph: {
    title: data.metadata.title,
    description: data.metadata.description,
    url: toAbsoluteUrl('${cfg.contactHref}'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'), width: 1200, height: 630 }],
  },
};

export default function ContactPage() {
  return <ContactPageContent locale={LOCALE} />;
}
`
  );
  totalFiles++;

  // 5. All 10 tool pages
  for (const tool of TOOLS) {
    const slug = tool.slugs[locale];
    const toolDir = tool.desktopOnly
      ? path.join(appDir, cfg.toolsDir, '(desktop-only)', slug)
      : path.join(appDir, cfg.toolsDir, slug);

    writeFile(
      path.join(toolDir, 'page.tsx'),
      `import ${tool.component} from '${tool.componentPath}';
import ToolPageRenderer, { generateToolMetadata } from '@/components/sections/tools/ToolPageRenderer';
import data from '@/data/${locale}/tools/${tool.dataFile}';
import type { ToolPageData } from '@/types/tool-page';
import type { Metadata } from 'next';

const pageData = data as unknown as ToolPageData;

export const metadata: Metadata = generateToolMetadata(pageData);

export default function Page() {
  return <ToolPageRenderer data={pageData} tool={<${tool.component} />} />;
}
`
    );
    totalFiles++;
  }
}

console.log(`\nDone! Created ${totalFiles} route files.`);
console.log('\nNOTE: Tools index pages and privacy pages must be created manually.');
