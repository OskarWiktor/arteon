import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import JpgPngToWebp from '@/components/sections/tools/JpgPngToWebp';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/buttons/Button';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiInfinityFill,
  RiSpeedLine,
  RiDownloadLine,
  RiFileImageLine,
  RiFlashlightLine,
  RiStackLine,
  RiGlobalLine,
  RiBuilding2Line,
  RiShoppingCartLine,
  RiArticleLine,
  RiCameraLine,
  RiSmartphoneLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free JPG/PNG to WebP converter online - no limits',
  description: 'Free online JPG and PNG to WebP converter. Reduce image file size by up to 35% without losing quality. Conversion happens locally in the browser, files are not sent to a server.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
    languages: { pl: toAbsoluteUrl('/narzedzia/jpg-png-na-webp-bez-limitu'), en: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'), de: toAbsoluteUrl('/de/tools/jpg-png-zu-webp-konverter') },
  },
  openGraph: {
    title: 'Free JPG/PNG to WebP converter online - no limits',
    description: 'Free online JPG and PNG to WebP converter. Reduce image file size by up to 35% without losing quality. No registration, no limits.',
    url: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'JPG and PNG to WebP converter online - free, no limits',
  alternateName: 'JPG to WebP and PNG to WebP converter',
  url: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
  applicationCategory: 'MultimediaApplication',
  applicationSubCategory: 'ImageConverter',
  operatingSystem: 'Any',
  description:
    'Free online JPG and PNG to WebP converter. Reduce image file size by up to 35%, improve page load speed and Core Web Vitals scores. Conversion happens in the browser - files are not sent to a server.',
  featureList: [
    'JPG to WebP conversion',
    'PNG to WebP conversion',
    'Quality level adjustment (1–100%)',
    'Batch conversion of multiple files',
    'Size preview before and after conversion',
    'Individual file download',
    'Download all files as ZIP',
    'Local processing in the browser (files are not sent to a server)',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to convert JPG and PNG to WebP online',
  description: 'How to convert JPG and PNG images to WebP format. Quality settings (60–95%), Smart Quality mechanism, and downloading converted files as ZIP.',
  url: toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited'),
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Add files for conversion',
      text: 'Drag JPG or PNG images onto the designated area or select files from your device. You can add multiple files at once.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Set quality level',
      text: 'Choose the output WebP file quality using the slider (60–95%). The default value of 80% is a good balance between quality and size.',
    },
    { '@type': 'HowToStep', position: 3, name: 'Start conversion', text: 'After starting conversion, the tool will process all files in the queue and automatically apply Smart Quality.' },
    { '@type': 'HowToStep', position: 4, name: 'Download converted files', text: 'Converted files can be downloaded individually or all at once as a ZIP archive.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'What is WebP and how does it differ from JPG?',
    answer:
      'WebP is an image format created by Google that combines the advantages of JPG (small photo files) and PNG (transparency). WebP files are on average 25–35% smaller than JPG at comparable visual quality. All modern browsers (Chrome, Firefox, Safari, Edge) support WebP.',
    answerSchemaText: 'WebP is a Google image format, 25–35% smaller than JPG. All modern browsers support it.',
  },
  {
    question: 'Does WebP support transparency like PNG?',
    answer:
      'Yes. WebP supports the alpha channel (transparency) - PNG files with transparent backgrounds will be converted correctly. However, size savings for PNGs with transparency may be less than for regular JPG photos.',
    answerSchemaText: 'Yes, WebP supports alpha transparency. PNG files with transparent backgrounds convert correctly.',
  },
  {
    question: 'What quality level should I choose?',
    answer:
      'For most use cases (websites, stores, blogs), 80% quality provides a good balance between file size and appearance. For product photos or portfolios, you can choose 85–90%. Values below 70% will significantly reduce size but may introduce visible artifacts.',
    answerSchemaText: '80% for most uses. 85–90% for product photos. Below 70% for maximum compression.',
  },
  {
    question: 'How much space can I save?',
    answer: 'Typical savings are 25–35% compared to JPG. For example, a 500 KB JPG photo after conversion to WebP will be about 325–375 KB. For PNG, savings can be even greater - up to 50–70%.',
    answerSchemaText: '25–35% for JPG, up to 50–70% for PNG.',
  },
  {
    question: 'Can I convert multiple files at once?',
    answer: 'Yes. You can add any number of files at once - there is no limit. All will be converted, and you can download them individually or as a ZIP archive.',
    answerSchemaText: 'Yes, unlimited batch conversion with ZIP download.',
  },
  {
    question: 'What is Smart Quality?',
    answer:
      'Smart Quality is an automatic quality adjustment mechanism that ensures the output WebP file is never larger than the original. If conversion would result in a larger file (which can happen with already heavily compressed images), the tool automatically lowers quality until the output is smaller.',
    answerSchemaText: 'Automatic quality adjustment ensuring the output file is always smaller than the original.',
  },
  {
    question: 'Does WebP speed up a website?',
    answer:
      "Yes. Smaller image files mean faster page loading. This directly impacts the LCP (Largest Contentful Paint) metric in Core Web Vitals - one of Google's ranking factors. Tools like PageSpeed Insights often recommend converting images to WebP.",
    answerSchemaText: 'Yes, smaller files improve LCP and Core Web Vitals scores.',
  },
];

export default function JpgPngToWebpPage() {
  return (
    <>
      <Script id="ld-json-webp-converter-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-webp-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="JPG and PNG to WebP converter online"
        description="Reduce image file size by up to 35% without losing quality. Add files, choose quality level, and download images in WebP format. All conversion happens locally in the browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-jpg-png-na-webp-bez-limitu.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/jpg-png-to-webp-unlimited', label: 'JPG/PNG to WebP converter' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <JpgPngToWebp />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="What is WebP and why convert images?">
          <p className="mb-4">
            WebP is an image format created by Google that allows reducing image file sizes by up to 25–35% compared to JPG and PNG - while maintaining comparable visual quality. Smaller files mean
            faster page loading, which translates to better user experience and higher scores in{' '}
            <a href="https://pagespeed.web.dev/" target="_blank" rel="noopener noreferrer">
              PageSpeed Insights
            </a>
            .
          </p>
          <p className="mb-4">
            The WebP format is supported by all modern browsers: Chrome, Firefox, Safari (from version 14), and Edge. If you run a website, online store, or blog, converting images to WebP is one of
            the simplest ways to improve site performance.
          </p>
          <p>
            The converter supports both JPG photos and PNG graphics (including those with transparency). You can convert any number of files at once - all are processed locally in the browser, without
            being sent to a server.
          </p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="How to convert images to WebP"
          description="Converting to WebP takes just a few seconds:"
          grid="three"
          items={[
            { title: '1. Add files', description: 'Drag JPG or PNG images onto the designated area or select files from your device. You can add any number of files at once.' },
            { title: '2. Set quality', description: 'Choose the quality level (default 80%). A lower value means a smaller file. For most use cases, 80% is the optimal setting.' },
            { title: '3. Download WebP', description: 'After conversion, download files individually or as a ZIP archive. Each file shows information about the space saved.' },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="How to add files for conversion">
          <p className="text-mid">The tool offers two ways to add files:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Drag and drop</strong> - grab files from a folder on your computer and drop them onto the area labeled &quot;Drag and drop images here&quot;. You can drag multiple files at once.
            </li>
            <li>
              <strong>Select from device</strong> - clicking the file upload area opens a selection dialog. Holding Ctrl (or Cmd on Mac) lets you select multiple files at once.
            </li>
          </ul>
          <p className="text-mid mt-3">
            The tool only accepts JPG and PNG files. If you accidentally add a file in another format (e.g., GIF or BMP), it will be automatically skipped and you will see an informational message.
          </p>
          <p className="text-mid mt-3">
            <strong>Privacy:</strong> All files are processed locally in the browser. They are not sent anywhere - they do not go to any server. After closing the tab or browser, files are removed
            from memory.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="What do file statuses mean?">
          <p className="text-mid">Each file in the queue has one of four statuses that indicate conversion progress:</p>
          <div className="mt-4 space-y-4">
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Pending
              </Badge>
              <p className="text-mid">The file is in the queue and waiting to be processed. Conversion has not yet started.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="neutral" size="md">
                Processing…
              </Badge>
              <p className="text-mid">The file is being converted. For most images this takes a fraction of a second, but very large files may take several seconds.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="success" size="md">
                Done
              </Badge>
              <p className="text-mid">Conversion completed successfully. The WebP file is ready to download. Next to the status you will also see the size before and after conversion.</p>
            </div>
            <div className="flex items-start gap-3">
              <Badge variant="error" size="md">
                Error
              </Badge>
              <p className="text-mid">
                Something went wrong during conversion. This may be a corrupted source file or a browser memory issue with very large images. The &quot;Retry&quot; button lets you try again.
              </p>
            </div>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="How does Smart Quality work?">
          <p className="text-mid">Smart Quality is an automatic optimization mechanism that ensures the output WebP file is never larger than the original. It works as follows:</p>
          <ol className="text-mid mt-3 ml-6 list-decimal space-y-2">
            <li>The tool converts the image at your set quality (e.g., 80%).</li>
            <li>It checks whether the resulting file is smaller than the original.</li>
            <li>If it is larger, it automatically lowers quality and tries again.</li>
            <li>The process repeats until the output file is smaller or quality drops below a safe minimum.</li>
          </ol>
          <p className="text-mid mt-3">
            The tool automatically selects optimal settings. If you have an image that is already heavily compressed (e.g., a JPG at 60% quality), the parameters will be automatically adjusted to
            still achieve size savings.
          </p>
          <p className="text-mid mt-3">Next to each file you will see &quot;WebP quality used&quot; - this is the actual quality applied after any Smart Quality adjustment.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="Quality settings - what to choose?"
          demo={
            <div className="space-y-4">
              <div>
                <p className="text-dark mb-2 text-sm! font-medium uppercase">Set quality</p>
                <div className="flex items-center">
                  <input type="range" min={60} max={95} defaultValue={80} className="flex-1" disabled />
                  <span className="text-mid w-12 text-right text-sm!">80%</span>
                </div>
                <span className="text-light mt-1 block text-xs">Higher value = better quality, larger file</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Auto-download after conversion</span>
              </div>
              <div className="ml-6 flex flex-wrap gap-2">
                <Badge variant="selected" size="sm">
                  Download individually
                </Badge>
                <Badge variant="default" size="sm">
                  Download as ZIP
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid">The quality slider lets you set a value from 60% to 95%. A higher value means better image quality but also a larger file size.</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>80% (default)</strong> - a good balance for most use cases.
            </li>
            <li>
              <strong>85–90%</strong> - for product photos and photography portfolios.
            </li>
            <li>
              <strong>60–70%</strong> - when minimizing file size is the priority.
            </li>
          </ul>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="How to download converted files"
          variant="left"
          demo={
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                <Button variant="accent" size="small" disabled>
                  Convert
                </Button>
                <Button size="small" disabled>
                  Download all
                </Button>
                <Button size="small" disabled>
                  Download as ZIP
                </Button>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="h-4 w-4 rounded border-neutral-300" disabled />
                <span className="text-mid pl-2 text-sm!">Include CSV report in ZIP</span>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3 text-sm!">
                <p className="text-light">
                  Input size: <strong className="text-dark">2.4 MB</strong>
                </p>
                <p className="text-light">
                  Size after conversion: <strong className="text-dark">890 KB</strong>
                </p>
                <p className="text-light">
                  Saved: <strong className="text-success-icon">1.5 MB (~63%)</strong>
                </p>
              </div>
            </div>
          }
        >
          <p className="text-mid">After conversion is complete, you have several download options:</p>
          <ul className="text-mid mt-3 ml-6 list-disc space-y-2">
            <li>
              <strong>Download</strong> (next to each file) - downloads a single WebP file.
            </li>
            <li>
              <strong>Download all</strong> - downloads all files one by one.
            </li>
            <li>
              <strong>Download as ZIP</strong> - creates an archive with all files.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>CSV report option:</strong> Include a conversion summary report in the ZIP archive.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="How much can you save by converting to WebP?">
          <p className="mb-4">Savings depend on the type of image and its original compression. Below are example results for typical files:</p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">JPG photo (camera)</p>
              <p className="text-light text-sm">2.4 MB → 890 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Savings: ~63%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">PNG graphic (logo)</p>
              <p className="text-light text-sm">180 KB → 45 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Savings: ~75%</p>
            </div>
            <div className="rounded-lg border border-neutral-200 bg-white p-4">
              <p className="text-dark mb-2 font-semibold">Product photo</p>
              <p className="text-light text-sm">500 KB → 185 KB</p>
              <p className="text-success-icon mt-1 text-sm font-medium">Savings: ~63%</p>
            </div>
          </div>
          <p className="text-light mt-4 text-sm">Actual savings may vary. The converter shows the exact size before and after conversion for each file, as well as a summary of total savings.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="What makes this JPG/PNG to WebP converter special?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Full privacy',
              description: 'Files never leave your computer. Conversion happens in the browser - nothing is sent to a server. After closing the page, data is removed.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'Batch conversion of multiple files',
              description: 'Convert any number of images at once. All files are processed sequentially, and results are available for download individually or as a ZIP archive.',
            },
            {
              icon: <RiSpeedLine className="h-6 w-6" />,
              title: 'Smart Quality',
              description: 'The tool automatically adjusts quality so the output file is always smaller than the original. No need to manually search for optimal settings.',
            },
            {
              icon: <RiDownloadLine className="h-6 w-6" />,
              title: 'Download as ZIP',
              description: 'Download converted files individually or all at once as a ZIP archive. Optionally, you can include a CSV report with a summary.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Things to keep in mind"
          description="A few tips to help avoid problems during conversion:"
          grid="two"
          items={[
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Very large files',
              description: 'Converting images above 4000×4000 pixels may be slower and strain the browser. If processing many large files, consider splitting them into batches.',
            },
            {
              icon: <RiFlashlightLine className="h-6 w-6" />,
              title: 'Already compressed images',
              description:
                'If the original JPG was saved at very low quality, converting to WebP may not yield large savings. In extreme cases, the WebP file may be even larger - Smart Quality will then lower quality automatically.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'PNG format with transparency',
              description:
                'WebP supports transparency, so PNG files with an alpha channel will be converted correctly. However, size savings for PNGs with transparency may be less than for regular JPG photos.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Browser compatibility',
              description:
                'All modern browsers (Chrome, Firefox, Safari 14+, Edge) support WebP. If the site must work on older browsers, you can use the <picture> tag with an alternative JPG/PNG source.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="When is it worth converting images to WebP?"
          description="Converting to WebP brings benefits in virtually every case when images are displayed in a browser:"
          grid="two"
          items={[
            { icon: <RiBuilding2Line className="h-6 w-6" />, title: 'Business websites', description: 'Faster loading improves first impressions and reduces bounce rate.' },
            {
              icon: <RiShoppingCartLine className="h-6 w-6" />,
              title: 'Online stores',
              description: 'Product photos are often the largest files on a page; optimizing them speeds up the entire store.',
            },
            { icon: <RiArticleLine className="h-6 w-6" />, title: 'Blogs and portals', description: 'Articles with many photos load significantly faster.' },
            { icon: <RiCameraLine className="h-6 w-6" />, title: 'Photography portfolios', description: 'At 85–90% quality, the visual difference is unnoticeable, and files are smaller.' },
            { icon: <RiSmartphoneLine className="h-6 w-6" />, title: 'Web apps (PWA)', description: 'Smaller assets mean faster performance, especially on mobile devices.' },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Frequently asked questions about the WebP converter" openByDefault={1} pageUrl={toAbsoluteUrl('/en/tools/jpg-png-to-webp-unlimited')} />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />
        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
