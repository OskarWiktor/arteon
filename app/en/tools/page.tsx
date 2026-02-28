import HeroBanner from '@/components/sections/HeroBanner';
import Button from '@/components/ui/buttons/Button';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import FaqPanels from '@/components/ui/FaqPanels';
import Wrapper from '@/components/ui/Wrapper';
import Script from 'next/script';
import {
  RiImageEditLine,
  RiCropLine,
  RiAppsLine,
  RiFileTextLine,
  RiArticleLine,
  RiMailLine,
  RiContrast2Line,
  RiPaletteLine,
  RiPantoneLine,
  RiQrCodeLine,
  RiShieldCheckLine,
  RiInfinityFill,
  RiGlobalLine,
  RiLockLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Free online tools | Images, SEO, colors, favicon',
  description: '10 free tools: WebP converter, favicon generator, text counter, color extractor, and QR codes. For websites, social media, and print. No signup required.',
  alternates: getToolsIndexAlternates('en'),
  openGraph: {
    title: 'Free online tools | Images, SEO, colors, favicon',
    description: '10 free tools: WebP converter, favicon generator, text counter, color extractor, and QR codes. For websites, social media, and print. No signup required.',
    url: toAbsoluteUrl('/en/tools'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free online tools',
  description: '10 free tools: WebP converter, favicon generator, text counter, color extractor, and QR codes. For websites, social media, and print. No signup required.',
  url: toAbsoluteUrl('/en/tools'),
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    { '@type': 'Thing', name: 'Image optimization' },
    { '@type': 'Thing', name: 'SEO' },
    { '@type': 'Thing', name: 'Colors and branding' },
    { '@type': 'Thing', name: 'Online generators' },
  ],
  mainEntity: {
    '@type': 'ItemList',
    numberOfItems: 10,
    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG and PNG to WebP converter online',
        description: 'Free online JPG and PNG to WebP converter. Reduce image file size by up to 35% without losing quality. No registration, no files sent to servers.',
        url: toAbsoluteUrl('/en/tools/jpg-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online image editor',
        description: 'Crop and resize images for social media and websites. Ready-made dimension presets, custom pixel sizes, and circular avatar support.',
        url: toAbsoluteUrl('/en/tools/online-image-editor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online favicon generator',
        description:
          'Free online favicon generator. Create favicon.ico and PNG icons 16x16, 32x32, 180x180, 192x192, and 512x512 from a single image - compliant with browser and Lighthouse requirements.',
        url: toAbsoluteUrl('/en/tools/free-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta title and description length checker',
        description: 'Meta title and meta description length checker with Google preview. Helps adjust character count and pixel width so titles and descriptions are not truncated.',
        url: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML email signature generator',
        description: 'Free HTML email signature generator. Add contact details, CTA link, and social media profiles, then copy the ready HTML code into Gmail or Outlook.',
        url: toAbsoluteUrl('/en/tools/free-email-signature-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Color contrast and readability checker',
        description: 'Check the contrast and readability of text and background colors. The tool calculates contrast ratio per WCAG and helps you pick the right color with automatic matching.',
        url: toAbsoluteUrl('/en/tools/color-contrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Image color extractor online',
        description: 'Free online image color extractor. Upload a photo or logo and get a palette of up to 12 dominant colors with HEX and RGB codes.',
        url: toAbsoluteUrl('/en/tools/image-color-extractor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Color palette generator online',
        description: 'Generate color palettes from a single base color. Monochromatic, triadic, analogous, complementary schemes plus pastel, dark, and minimalist palettes.',
        url: toAbsoluteUrl('/en/tools/color-palette-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Word and character counter online',
        description: 'Free word and character counter with text length evaluation. Check if your text length is appropriate for a homepage, service description, blog post, or product description.',
        url: toAbsoluteUrl('/en/tools/word-and-character-counter'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR code generator online',
        description: 'Free online QR code generator. Create QR codes for websites, vCards, restaurant menus, or flyers. Export to PNG and SVG, no login, no limits.',
        url: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const faqItems = [
  {
    question: 'How much do the tools cost?',
    answer: 'Nothing. All tools are free, with no subscriptions and no hidden fees.',
  },
  {
    question: 'Are my files sent to a server?',
    answer: 'No. All tools run entirely in your browser. Files never leave your computer and are not stored anywhere.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No. You can use them right away, without logging in or creating an account.',
  },
  {
    question: 'Is there a usage limit?',
    answer: 'No. Use them without restrictions - no daily limits, no file limits, no conversion limits.',
  },
  {
    question: 'What are these tools for?',
    answer: 'They help prepare materials for websites, social media, and print: optimize images, create favicons, check text length, generate QR codes, pick colors, and verify their readability.',
  },
  {
    question: 'Do the tools work on mobile?',
    answer: 'Yes, but some (WebP converter, favicon generator) work better on desktop due to processing larger files.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title="Free online tools"
        description="Image converter, favicon generator, text counter, color tools, and QR codes. No registration, no limits - everything runs in your browser."
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />

      <Wrapper>
        <Gap size="sm" />

        <SectionSteps
          title="Images & favicons"
          description="Tools for preparing photos, graphics, and icons for websites and social media."
          grid="three"
          items={[
            {
              icon: <RiImageEditLine className="h-8 w-8" />,
              title: 'JPG/PNG to WebP converter',
              topImageAlt: 'JPG/PNG to WebP converter Arteon',
              topImageSrc: '/assets/tools/jpg-png-to-webp-converter/jpg-to-webp-converter-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Reduce image file size by converting from JPG or PNG to <strong>WebP</strong> format. Download the files, add them to your website, and improve page speed.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/jpg-to-webp-converter">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiCropLine className="h-8 w-8" />,
              title: 'Online image editor',
              topImageAlt: 'Online image editor Arteon',
              topImageSrc: '/assets/tools/free-image-editor-crop-resize-and-convert/online-image-editor-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Prepare the perfect crop for social media or your website. Choose a ready-made format or enter custom pixel dimensions and download the image in PNG, JPG, or WebP.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/online-image-editor">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className="h-8 w-8" />,
              title: 'Favicon & icon generator',
              topImageAlt: 'Favicon generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/free-favicon-generator-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Generate <strong>favicon.ico</strong> and PNG icons 180x180, 192x192, and 512x512 from a single image - compliant with browser and Lighthouse requirements.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/free-favicon-generator">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Text & SEO"
          description="Tools for checking text length, meta tags, and previewing your page in search results."
          grid="three"
          items={[
            {
              icon: <RiFileTextLine className="h-8 w-8" />,
              title: 'Meta title & description checker',
              topImageAlt: 'Meta title and description checker Arteon',
              topImageSrc: '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-title-description-length-checker-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Check character count, word count, pixel width, and preview how your page looks in Google. Avoid truncated titles and descriptions and fine-tune your SEO content.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/meta-title-description-length-checker">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className="h-8 w-8" />,
              title: 'Word & character counter',
              topImageAlt: 'Word and character counter Arteon',
              topImageSrc: '/assets/tools/word-and-character-counter-with-text-formatting-tools/word-and-character-counter-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Check text length and evaluate whether it fits a homepage, service description, blog post, or product description. The tool counts words, characters, paragraphs, and reading time.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/word-and-character-counter">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Email & communication"
          description="Tools that help organize email communication and brand image."
          grid="three"
          items={[
            {
              icon: <RiMailLine className="h-8 w-8" />,
              title: 'Free HTML email signature generator',
              topImageAlt: 'Free HTML email signature generator Arteon',
              topImageSrc: '/assets/tools/free-html-email-signature-generator/free-email-signature-generator-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Build a professional email signature in minutes. Enter your details, choose colors, and copy the ready HTML code into Gmail, Outlook, and other email clients.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/free-email-signature-generator">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="QR codes"
          description="QR code generator for websites, business cards, menus, and printed materials."
          grid="three"
          items={[
            {
              icon: <RiQrCodeLine className="h-8 w-8" />,
              title: 'Free QR code generator',
              topImageAlt: 'Free QR code generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/free-qr-code-generator-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Create a QR code for a website, vCard, restaurant menu, or flyer. Export to PNG and SVG, no login, no limits.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/free-qr-code-generator">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap size="sm" />

        <SectionSteps
          title="Colors & accessibility"
          description="Tools for working with colors, contrast, and WCAG accessibility."
          grid="three"
          items={[
            {
              icon: <RiContrast2Line className="h-8 w-8" />,
              title: 'Color contrast & readability checker',
              topImageAlt: 'Color contrast checker Arteon',
              topImageSrc: '/assets/tools/color-contrast-and-readability-checker/color-contrast-checker-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>
                    Check if your text and background colors are readable. Enter color codes, see the contrast ratio per <strong>WCAG</strong>, and use the <strong>Match</strong> function for
                    automatic correction.
                  </p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/color-contrast-checker">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className="h-8 w-8" />,
              title: 'Image color extractor',
              topImageAlt: 'Image color extractor Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/image-color-extractor-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Upload a photo or logo and the tool will extract dominant colors. Copy HEX codes with a single click and use them anywhere.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/image-color-extractor">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className="h-8 w-8" />,
              title: 'Color palette generator',
              topImageAlt: 'Color palette generator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/color-palette-generator-en.webp',
              description: (
                <div className="flex h-full flex-col">
                  <p>Pick one base color and generate 9 color palettes: monochromatic, complementary, triadic, pastel, dark, and more. Copy HEX codes with a single click.</p>
                  <div className="mt-4">
                    <Button arrow link="/en/tools/color-palette-generator">
                      Open tool
                    </Button>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="What are Arteon tools?">
          <p className="mb-4">
            A set of 10 free online tools for preparing materials for websites, social media, and print. Image-to-WebP converter, favicon generator, text length counter, color extractor, palette
            generator, and QR codes.
          </p>
          <p>All tools run in your browser - files are never sent to a server. Use them without registration and without limits.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Why use Arteon tools?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Full privacy',
              description: 'All tools process files locally in your browser. Nothing is sent to a server - data disappears when you close the tab.',
            },
            {
              icon: <RiInfinityFill className="h-6 w-6" />,
              title: 'No usage limits',
              description: 'Use without restrictions - no daily limits, no file limits, no conversion limits. As many times as you need.',
            },
            {
              icon: <RiLockLine className="h-6 w-6" />,
              title: 'No registration',
              description: 'No account needed. Open the tool, use it, and you are done.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Available in English',
              description: 'All tools are available in English - interface, instructions, and messages.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Frequently asked questions about our tools" />

        <Gap size="sm" />
      </Wrapper>

      <Script id="ld-json-tools-en" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
