import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import FaviconGenerator from '@/components/sections/tools/FaviconGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTabs from '@/components/ui/sections/SectionTabs';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiDownloadLine,
  RiImageLine,
  RiSmartphoneLine,
  RiUploadLine,
  RiLayoutGridLine,
  RiSettings3Line,
  RiFolderZipLine,
  RiFileDownloadLine,
  RiWordpressLine,
  RiHtml5Line,
  RiReactjsLine,
  RiShapeLine,
  RiAspectRatioLine,
  RiZoomInLine,
  RiContrastLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free favicon generator online — ICO and PNG icons',
  description: 'Free online favicon generator. Create favicon.ico and PNG icons (16x16, 32x32, 180x180, 512x512) from a single image. Processing happens locally in the browser.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/free-favicon-generator'),
    languages: { pl: toAbsoluteUrl('/narzedzia/darmowy-generator-favicon-ico'), en: toAbsoluteUrl('/en/tools/free-favicon-generator') },
  },
  openGraph: {
    title: 'Free favicon generator online — ICO and PNG icons',
    description: 'Free online favicon generator. Create favicon.ico and PNG icons from a single image. Compliant with browser and Lighthouse requirements.',
    url: toAbsoluteUrl('/en/tools/free-favicon-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Favicon generator online — free icon creator for websites',
  alternateName: 'Favicon.ico and PNG icon generator',
  url: toAbsoluteUrl('/en/tools/free-favicon-generator'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'IconGenerator',
  operatingSystem: 'Any',
  description:
    'Free online favicon generator. Create favicon.ico and PNG icons 16x16, 32x32, 180x180, 192x192, and 512x512 without limits and without sending files to a server. Processing happens locally in the browser.',
  featureList: [
    'Generate favicon.ico (16x16, 32x32, 48x48 in one file)',
    'Generate PNG icons 16x16 and 32x32',
    'Generate apple-touch-icon 180x180',
    'Generate PWA icons 192x192 and 512x512',
    'Support for PNG, JPG, and SVG source images',
    'Background color configuration',
    'Generate manifest.json file for PWA',
    'Download all files as ZIP',
    'Download individual files',
    'Lighthouse compliance',
    'Browser-based processing (files are not sent to a server)',
    'Free tool, no login required',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to create a favicon for a website',
  description: 'How to generate favicon.ico and PNG icons (16x16, 32x32, 180x180, 512x512) from a single image. What sizes are needed and how to add favicon to WordPress, HTML, and Next.js.',
  url: toAbsoluteUrl('/en/tools/free-favicon-generator'),
  step: [
    {
      '@type': 'HowToStep',
      name: 'Add a source image',
      text: 'Drag a file onto the designated area or select a graphic from your device. A simple logo or icon in PNG, JPG, or SVG format works best.',
    },
    { '@type': 'HowToStep', name: 'Choose icon sizes', text: 'Select which icon sizes you need: favicon.ico (32x32), PNG icons (16x16, 32x32, 180x180, 192x192, 512x512).' },
    { '@type': 'HowToStep', name: 'Configure options', text: 'Set the background color (or keep transparent), decide whether to generate a manifest file, and whether files should auto-download.' },
    { '@type': 'HowToStep', name: 'Generate and download files', text: 'After generation, files can be downloaded as a ZIP archive or each icon individually.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'What size should the source image be for generating favicons?',
    answer:
      'The recommended size is at least 512×512 pixels in square format (1:1). With such a source, icons in all sizes will be sharp and readable. If you have a logo in SVG format — use it, as vector graphics scale without quality loss.',
    answerSchemaText: 'At least 512×512 px, square (1:1). SVG is ideal as it scales without quality loss.',
  },
  {
    question: 'Can I generate only favicon.ico without the other icons?',
    answer: 'Yes. Before generating, you can select exactly which sizes you need — e.g., only favicon.ico or only selected PNG sizes.',
    answerSchemaText: 'Yes, you can select individual sizes before generating.',
  },
  {
    question: 'What image formats does the favicon generator support?',
    answer: 'The generator accepts images in PNG, JPG, and SVG formats. As output, it generates a favicon.ico file and PNG icons in selected sizes, ready to upload to your website.',
    answerSchemaText: 'Input: PNG, JPG, SVG. Output: favicon.ico and PNG icons.',
  },
  {
    question: 'Does a favicon affect Google search ranking?',
    answer:
      'Not directly — favicon is not a ranking factor. However, it indirectly affects brand recognition: a site with a professional icon is more easily identifiable among many open tabs, which may translate to a higher click-through rate in search results.',
    answerSchemaText: 'Not directly. Indirectly improves brand recognition and click-through rate.',
  },
  {
    question: 'Which icon sizes are essential for a regular website?',
    answer:
      'For a typical website, three files are sufficient: favicon.ico (32×32), a 32×32 PNG icon, and apple-touch-icon 180×180. If the site should work as a web app (PWA), you also need 192×192 and 512×512 icons plus a manifest file.',
    answerSchemaText: 'favicon.ico, 32×32 PNG, and apple-touch-icon 180×180. For PWA add 192×192 and 512×512.',
  },
  {
    question: 'What is a site.webmanifest file and when is it needed?',
    answer:
      'It is a configuration file for web apps (PWA) that contains information about the icon, name, and colors of the application. It is required when the site should work as an app added to the phone home screen. For regular websites, it is not necessary.',
    answerSchemaText: 'PWA configuration file. Required for home screen apps, not needed for regular websites.',
  },
];

export default function FaviconGeneratorPage() {
  return (
    <>
      <Script id="ld-json-favicon-tool-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-favicon-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Create a favicon online — free icon generator"
        description="Generate favicon.ico and a complete set of PNG icons for your website from a single image. All processing happens locally in the browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-darmowy-generator-favicon-ico.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/free-favicon-generator', label: 'Favicon generator' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <FaviconGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="What is a favicon and why should you have one?">
          <p className="mb-4">
            A favicon is a small icon that appears on the browser tab next to the page title. You also see it in bookmarks, browsing history, and on the phone home screen when someone adds the site as
            a shortcut.
          </p>
          <p className="mb-4">
            This small graphic serves an important function — it helps users quickly recognize a site among many open tabs. When someone has a dozen tabs open in the browser, the favicon is often the
            only visible element identifying the site.
          </p>
          <p>
            The generator creates a complete icon set: a classic favicon.ico file for browsers, PNG icons in various sizes, and an apple-touch-icon for Apple devices. If you are building a web app
            (PWA), you can also generate 192x192 and 512x512 icons along with a manifest file.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="How to create a favicon in 3 steps"
          description="Generating a favicon takes just a few seconds:"
          grid="three"
          items={[
            {
              title: '1. Add an image',
              description: 'Drag a file onto the designated area or select a graphic from your device. Supported formats: PNG, JPG, SVG. Recommended size: min. 512×512 pixels.',
            },
            { title: '2. Choose sizes', description: 'Select the icon sizes you need. For a regular website: favicon.ico, 32×32, and 180×180. For PWA, add 192×192 and 512×512.' },
            { title: '3. Download files', description: 'After generating, download all files as a ZIP or each icon individually. The generator also suggests the HTML code to paste into your site.' },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="What icon sizes does the tool generate?">
          <p className="mb-6">Each size has its use:</p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">favicon.ico (32×32)</p>
              <p className="text-mid text-sm">Classic format recognized by all browsers. Displays on the browser tab.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">16×16 and 32×32 PNG</p>
              <p className="text-mid text-sm">Standard sizes for modern browsers. Display on tabs and in bookmarks.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">180×180 PNG (apple-touch-icon)</p>
              <p className="text-mid text-sm">Icon for Apple devices (iPhone, iPad). Displays when someone adds the site to their home screen.</p>
            </div>
            <div className="rounded-lg border border-neutral-200 p-4">
              <p className="mb-2 font-semibold">192×192 and 512×512 PNG</p>
              <p className="text-mid text-sm">Icons for web apps (PWA). Required by the manifest and used in app stores.</p>
            </div>
          </div>
          <p className="text-light mt-6">If you are not building a PWA, you only need: favicon.ico, 32×32 PNG, and 180×180 PNG. These three files cover most use cases.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="What makes the favicon generator special?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Privacy — files never leave your computer',
              description: 'All operations are performed locally in the browser. The image is not sent to any server. After closing the page, nothing remains.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Complete set in one place',
              description: 'Favicon.ico, PNG icons, apple-touch-icon, PWA icons, and manifest — all from one image, in one tool.',
            },
            { icon: <RiImageLine className="h-6 w-6" />, title: 'PNG, JPG, and SVG support', description: 'You can use a logo in any format. If you have SVG — icons will be sharp in all sizes.' },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'Ready for website and PWA use',
              description: 'The generator suggests HTML code to paste and generates a manifest.json file for web apps.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="How to use the favicon generator"
          description="Generating a favicon is a few simple steps:"
          grid="two"
          items={[
            {
              icon: <RiUploadLine className="h-6 w-6" />,
              title: '1. Add source image',
              description: 'Drag a file onto the designated area or select a graphic from your device. Supported formats: PNG, JPG, SVG. A simple logo or icon at least 512×512 pixels works best.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: '2. Choose icon sizes',
              description: 'Select which icon sizes you need. You can select all or only some. For a regular website: favicon.ico, 32×32, and 180×180.',
            },
            {
              icon: <RiSettings3Line className="h-6 w-6" />,
              title: '3. Configure generation options',
              description: 'Set additional options: background (transparent or chosen color), manifest (PWA configuration file), and auto-download.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: '4. Generate and download files',
              description: 'After starting generation, the tool processes the image locally — nothing is sent to a server. Download all files as a ZIP archive or individual icons separately.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="Generation options — what does each one do?"
          demo={
            <div className="tool-section space-y-4">
              <div className="tool-info-box">
                <p className="text-light mb-2! text-sm! font-medium tracking-wide uppercase">PNG sizes</p>
                <div className="flex flex-wrap gap-2">
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    16×16
                  </Badge>
                  <Badge as="label" variant="selected" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" defaultChecked disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    32×32
                  </Badge>
                  <Badge as="label" variant="default" size="lg" className="flex cursor-pointer items-center justify-between">
                    <input type="checkbox" disabled className="mr-1 h-4 w-4! p-0! align-middle" />
                    180×180
                  </Badge>
                </div>
              </div>
              <div className="tool-info-box flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked disabled className="h-4 w-4! rounded border-neutral-300 p-0!" />
                  <span className="text-mid text-sm!">Transparent background (PNG/ICO)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-light text-sm">Background color:</span>
                  <input type="color" defaultValue="#ffffff" disabled className="h-8! w-7! cursor-pointer border-none bg-white p-0!" />
                </div>
              </div>
            </div>
          }
        >
          <div className="space-y-4">
            <div>
              <h3 className="h5 mb-2">Background (transparent or color)</h3>
              <p className="text-mid">By default, the generator preserves transparency. You can also choose a specific background color.</p>
            </div>
            <div>
              <h3 className="h5 mb-2">Generate manifest (site.webmanifest)</h3>
              <p className="text-mid">A JSON file for web apps (PWA). If you are not building a PWA, this option is not required.</p>
            </div>
          </div>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="How to download generated files"
          description="After generating icons, you have several download options:"
          grid="two"
          items={[
            {
              icon: <RiFolderZipLine className="h-6 w-6" />,
              title: 'Download all as ZIP',
              description: 'The "Download all" button packs all generated files into a single ZIP archive. This is the most convenient option when you need the full icon set.',
            },
            {
              icon: <RiFileDownloadLine className="h-6 w-6" />,
              title: 'Download individual files',
              description: 'Each generated icon has its own download button — you can download a single file without downloading the entire set. Useful when only one size needs updating.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTabs
          title="Where and how to add a favicon"
          tabs={[
            {
              title: 'WordPress',
              icon: <RiWordpressLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Most WordPress themes have a built-in option for setting the site icon. You will find it in the admin panel:</p>
                  <p className="text-mid mb-3">
                    <strong>Appearance → Customize → Site Identity → Site Icon</strong>
                  </p>
                  <p className="text-light">
                    Upload the 512×512 file there — WordPress will automatically generate smaller sizes. For full control over icons, you can also upload files directly to the root directory via FTP.
                  </p>
                </div>
              ),
            },
            {
              title: 'HTML',
              icon: <RiHtml5Line className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">Place the generated files in the root directory of your site (where index.html is). Then add the appropriate tags in the &lt;head&gt; section:</p>
                  <pre className="bg-primary-light mb-3 overflow-x-auto rounded-lg p-4 text-sm">
                    <code>{`<link rel="icon" href="/favicon.ico" sizes="32x32">
<link rel="icon" href="/icon-32x32.png" type="image/png" sizes="32x32">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">`}</code>
                  </pre>
                  <p className="text-light">The generator suggests the exact HTML code to copy after generating the icons.</p>
                </div>
              ),
            },
            {
              title: 'Next.js / React',
              icon: <RiReactjsLine className="h-5 w-5" />,
              content: (
                <div>
                  <p className="text-mid mb-3">
                    In Next.js (App Router), place favicon files in the <code>app/</code> or <code>public/</code> directory:
                  </p>
                  <ul className="text-light mb-3 list-disc pl-5">
                    <li>
                      <code>app/favicon.ico</code> — automatically recognized by Next.js
                    </li>
                    <li>
                      <code>app/apple-icon.png</code> — Apple icon
                    </li>
                    <li>
                      <code>public/</code> — remaining icons (192×192, 512×512)
                    </li>
                  </ul>
                  <p className="text-light">
                    You can also configure icons in <code>layout.tsx</code> via the <code>metadata.icons</code> object.
                  </p>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What source image works best?"
          description="A favicon is a very small graphic — as small as 16×16 pixels. That is why not every image works well as a source:"
          grid="two"
          items={[
            {
              icon: <RiShapeLine className="h-6 w-6" />,
              title: 'Simple shapes and readable symbols',
              description: 'Simple logos, single letters, or symbols work best. Avoid complex graphics with many details.',
            },
            {
              icon: <RiAspectRatioLine className="h-6 w-6" />,
              title: 'Square format',
              description: 'A favicon is square. If the source image has a ratio other than 1:1, it will be cropped or stretched.',
            },
            { icon: <RiZoomInLine className="h-6 w-6" />, title: 'Large enough size', description: 'We recommend a source image of at least 512×512 pixels. Smaller images will be scaled up.' },
            { icon: <RiImageLine className="h-6 w-6" />, title: 'SVG format as ideal source', description: 'SVG scales without quality loss, so icons in all sizes will be sharp.' },
            {
              icon: <RiContrastLine className="h-6 w-6" />,
              title: 'High-contrast colors',
              description: 'A favicon must be visible on different backgrounds (light tabs, dark mode). Choose colors that maintain readability.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          title="Frequently asked questions about the favicon generator"
          items={[
            ...faqItems,
            {
              question: 'Does the favicon display the same in all browsers?',
              answer:
                'Most modern browsers (Chrome, Firefox, Edge, Safari) recognize the favicon.ico file and PNG icons. Differences may relate to the displayed icon size — Chrome prefers PNG 32×32, while Safari on iOS uses apple-touch-icon 180×180. That is why it is worth generating the full set of sizes.',
              answerSchemaText: 'Mostly yes. Generate the full set of sizes for best compatibility.',
            },
            {
              question: "Why doesn't the favicon change after uploading a new file?",
              answer:
                'Browsers aggressively cache favicons. After uploading a new icon, it is worth clearing the browser cache or adding a version parameter to the file path (e.g., /favicon.ico?v=2). The change may take several hours to become visible.',
              answerSchemaText: 'Browsers cache favicons aggressively. Clear cache or add a version parameter.',
            },
          ]}
          openByDefault={0}
          pageUrl={toAbsoluteUrl('/en/tools/free-favicon-generator')}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
