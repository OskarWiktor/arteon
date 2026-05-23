import HeroBanner from '@/components/organisms/HeroBanner';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import Divider from '@/components/atoms/Divider';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import SectionSteps from '@/components/organisms/sections/SectionSteps';
import FaqPanels from '@/components/molecules/FaqPanels';
import Wrapper from '@/components/atoms/Wrapper';
import Script from 'next/script';
import {
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
  RiLoopLeftLine,
} from 'react-icons/ri';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import { getToolsIndexAlternates } from '@/lib/i18n/pages/tool-meta';

export const metadata = {
  title: 'Free tools | Image converters, SEO, colors, favicon',
  description:
    'Free tools: 24 image converters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon generator, image editor, text counter, color palettes, and QR codes. No signup required.',
  alternates: getToolsIndexAlternates('en'),
  openGraph: {
    title: 'Free tools | Image converters, SEO, colors, favicon',
    description:
      'Free tools: 24 image converters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon generator, image editor, text counter, color palettes, and QR codes. No signup required.',
    url: toAbsoluteUrl('/en/tools'),
    type: 'website',
    images: [
      {
        url: toAbsoluteUrl('/assets/arteon-logo-on-mockup.webp'),
        width: 1200,
        height: 630,
      },
      {
        '@type': 'WebApplication',
        position: 35,
        name: 'JPG to AVIF converter',
        description:
          'Convert JPG photos to modern AVIF. Up to 50% better compression than JPG while maintaining quality.',
        url: toAbsoluteUrl('/en/tools/jpg-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 36,
        name: 'PNG to AVIF converter',
        description:
          'Convert PNG graphics to AVIF with transparency support. Significantly smaller files.',
        url: toAbsoluteUrl('/en/tools/png-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 37,
        name: 'WebP to AVIF converter',
        description: 'Convert WebP files to AVIF. Even better compression in a modern format.',
        url: toAbsoluteUrl('/en/tools/webp-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 38,
        name: 'SVG to AVIF converter',
        description: 'Convert vector SVG graphics to compact AVIF raster format.',
        url: toAbsoluteUrl('/en/tools/svg-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 39,
        name: 'BMP to AVIF converter',
        description: 'Convert uncompressed BMP files to ultra-compact AVIF.',
        url: toAbsoluteUrl('/en/tools/bmp-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 40,
        name: 'GIF to AVIF converter',
        description: 'Convert GIF first frame to static AVIF image with excellent compression.',
        url: toAbsoluteUrl('/en/tools/gif-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 41,
        name: 'HEIC to AVIF converter',
        description: 'Convert iPhone HEIC photos to modern AVIF format.',
        url: toAbsoluteUrl('/en/tools/heic-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 42,
        name: 'TIFF to AVIF converter',
        description: 'Convert TIFF files to modern AVIF. Massive file size reduction.',
        url: toAbsoluteUrl('/en/tools/tiff-to-avif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 43,
        name: 'JPG to GIF converter',
        description: 'Convert JPG photos to GIF format. Perfect for simple graphics and icons.',
        url: toAbsoluteUrl('/en/tools/jpg-to-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 44,
        name: 'PNG to GIF converter',
        description: 'Convert PNG graphics to GIF. Ideal for simple icons and graphics.',
        url: toAbsoluteUrl('/en/tools/png-to-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 45,
        name: 'WebP to GIF converter',
        description: 'Convert WebP images to GIF format for maximum compatibility.',
        url: toAbsoluteUrl('/en/tools/webp-to-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 46,
        name: 'SVG to GIF converter',
        description: 'Convert vector SVG graphics to GIF raster format.',
        url: toAbsoluteUrl('/en/tools/svg-to-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 47,
        name: 'BMP to GIF converter',
        description: 'Convert uncompressed BMP files to lightweight GIF.',
        url: toAbsoluteUrl('/en/tools/bmp-to-gif-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 48,
        name: 'JPG to TIFF converter',
        description: 'Convert JPG photos to lossless TIFF. For printing and archiving.',
        url: toAbsoluteUrl('/en/tools/jpg-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 49,
        name: 'PNG to TIFF converter',
        description: 'Convert PNG graphics to professional TIFF format.',
        url: toAbsoluteUrl('/en/tools/png-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 50,
        name: 'WebP to TIFF converter',
        description: 'Convert WebP images to professional TIFF for printing and archiving.',
        url: toAbsoluteUrl('/en/tools/webp-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 51,
        name: 'SVG to TIFF converter',
        description: 'Convert vector SVG graphics to high-quality TIFF raster.',
        url: toAbsoluteUrl('/en/tools/svg-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 52,
        name: 'BMP to TIFF converter',
        description: 'Convert BMP files to professional TIFF format for printing.',
        url: toAbsoluteUrl('/en/tools/bmp-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 53,
        name: 'HEIC to TIFF converter',
        description: 'Convert iPhone HEIC photos to professional TIFF format.',
        url: toAbsoluteUrl('/en/tools/heic-to-tiff-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
    ],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Free tools - image converters, SEO, colors, favicon',
  description:
    'Free tools: 24 image converters (JPG, PNG, WebP, SVG, BMP,, GIF, AVIF, HEIC, TIFF), favicon generator, image editor, text counter, color palettes, and QR codes. No signup required.',
  url: toAbsoluteUrl('/en/tools'),
  inLanguage: 'en',
  isPartOf: {
    '@type': 'WebSite',
    name: 'Arteon Agency',
    url: siteUrl,
  },
  about: [
    {
      '@type': 'Thing',
      name: 'Image format conversion',
    },
    {
      '@type': 'Thing',
      name: 'JPG PNG WebP SVG BMP GIF AVIF HEIC TIFF converter',
    },
    {
      '@type': 'Thing',
      name: 'Image optimization for websites',
    },
    {
      '@type': 'Thing',
      name: 'SEO',
    },
    {
      '@type': 'Thing',
      name: 'Colors, palettes, WCAG contrast',
    },
    {
      '@type': 'Thing',
      name: 'Favicon, QR, email signature generator',
    },
  ],
  mainEntity: {
    '@type': 'ItemList',

    itemListElement: [
      {
        '@type': 'WebApplication',
        position: 1,
        name: 'JPG and PNG to WebP converter',
        description:
          'Free JPG and PNG to WebP converter. Reduce image file size by up to 35% without losing quality. No registration, no files sent to servers.',
        url: toAbsoluteUrl('/en/tools/jpg-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 2,
        name: 'Online image editor',
        description:
          'Crop and resize images for social media and websites. Ready-made dimension presets, custom pixel sizes, and circular avatar support.',
        url: toAbsoluteUrl('/en/tools/online-image-editor'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 3,
        name: 'Online favicon generator',
        description:
          'Free favicon generator. Create favicon.ico and PNG icons 16x16, 32x32, 180x180, 192x192, and 512x512 from a single image - compliant with browser and Lighthouse requirements.',
        url: toAbsoluteUrl('/en/tools/free-favicon-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 4,
        name: 'Meta title and description length checker',
        description:
          'Meta title and meta description length checker with Google preview. Helps adjust character count and pixel width so titles and descriptions are not truncated.',
        url: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 5,
        name: 'HTML email signature generator',
        description:
          'Free HTML email signature generator. Add contact details, CTA link, and social media profiles, then copy the ready HTML code into Gmail or Outlook.',
        url: toAbsoluteUrl('/en/tools/free-email-signature-generator'),
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 6,
        name: 'Color contrast and readability checker',
        description:
          'Check the contrast and readability of text and background colors. The tool calculates contrast ratio per WCAG and helps you pick the right color with automatic matching.',
        url: toAbsoluteUrl('/en/tools/color-contrast-checker'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 7,
        name: 'Image color extractor',
        description:
          'Free image color extractor. Upload a photo or logo and get a palette of up to 12 dominant colors with HEX and RGB codes.',
        url: toAbsoluteUrl('/en/tools/image-color-extractor'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 8,
        name: 'Color palette generator',
        description:
          'Generate color palettes from a single base color. Monochromatic, triadic, analogous, complementary schemes plus pastel, dark, and minimalist palettes.',
        url: toAbsoluteUrl('/en/tools/color-palette-generator'),
        applicationCategory: 'DesignApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 9,
        name: 'Word and character counter',
        description:
          'Free word and character counter with text length evaluation. Check if your text length is appropriate for a homepage, service description, blog post, or product description.',
        url: toAbsoluteUrl('/en/tools/word-and-character-counter'),
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 10,
        name: 'QR code generator',
        description:
          'Free QR code generator. Create QR codes for websites, vCards, restaurant menus, or flyers. Export to PNG and SVG, no login, no limits.',
        url: toAbsoluteUrl('/en/tools/free-qr-code-generator'),
        applicationCategory: 'UtilityApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 11,
        name: 'JPG to WebP converter',
        description:
          'Convert JPG photos to lightweight WebP. Cut image weight by up to 35% for faster page loads.',
        url: toAbsoluteUrl('/en/tools/jpg-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 12,
        name: 'PNG to JPG converter',
        description:
          'Convert PNG files to JPG in your browser. No file limits, no signup, no server uploads.',
        url: toAbsoluteUrl('/en/tools/png-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 13,
        name: 'WebP to JPG converter',
        description:
          'Convert WebP files to universally compatible JPG. Works in every app and platform.',
        url: toAbsoluteUrl('/en/tools/webp-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 14,
        name: 'PNG to WebP converter',
        description: 'Convert PNG graphics to WebP. Smaller files while preserving transparency.',
        url: toAbsoluteUrl('/en/tools/png-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 15,
        name: 'JPG to PNG converter',
        description:
          'Convert JPG images to lossless PNG. Runs locally in your browser, unlimited files.',
        url: toAbsoluteUrl('/en/tools/jpg-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 16,
        name: 'WebP to PNG converter',
        description:
          'Convert WebP images to lossless PNG. Local conversion, nothing sent to any server.',
        url: toAbsoluteUrl('/en/tools/webp-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 17,
        name: 'SVG to PNG converter',
        description:
          'Convert vector SVG graphics to raster PNG. Ideal for documents and social media.',
        url: toAbsoluteUrl('/en/tools/svg-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 18,
        name: 'SVG to JPG converter',
        description:
          'Convert vector SVG files to compact JPG. Smaller file size, full compatibility.',
        url: toAbsoluteUrl('/en/tools/svg-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 19,
        name: 'BMP to JPG converter',
        description:
          'Convert uncompressed BMP files to lightweight JPG. Reduce file size without quality loss.',
        url: toAbsoluteUrl('/en/tools/bmp-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 20,
        name: 'BMP to PNG converter',
        description: 'Convert BMP images to lossless PNG. Preserve quality at a smaller file size.',
        url: toAbsoluteUrl('/en/tools/bmp-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 21,
        name: 'GIF to PNG converter',
        description: 'Export the first frame of a GIF as a static PNG image. No quality loss.',
        url: toAbsoluteUrl('/en/tools/gif-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 22,
        name: 'GIF to JPG converter',
        description: 'Export the first frame of a GIF as a JPG. Smaller file, faster page loads.',
        url: toAbsoluteUrl('/en/tools/gif-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 23,
        name: 'SVG to WebP converter',
        description: 'Convert vector SVG to lightweight WebP. Ideal for websites and social media.',
        url: toAbsoluteUrl('/en/tools/svg-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 24,
        name: 'GIF to WebP converter',
        description: 'Convert first GIF frame to lightweight WebP. Smaller file, faster loading.',
        url: toAbsoluteUrl('/en/tools/gif-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 25,
        name: 'BMP to WebP converter',
        description: 'Convert uncompressed BMP to lightweight WebP. Up to 95% size reduction.',
        url: toAbsoluteUrl('/en/tools/bmp-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 26,
        name: 'AVIF to JPG converter',
        description: 'Convert AVIF files to universal JPG. Compatible with every app and platform.',
        url: toAbsoluteUrl('/en/tools/avif-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 27,
        name: 'AVIF to PNG converter',
        description: 'Convert AVIF files to lossless PNG. Preserve full quality and transparency.',
        url: toAbsoluteUrl('/en/tools/avif-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 28,
        name: 'AVIF to WebP converter',
        description: 'Convert AVIF files to WebP. Wide compatibility at a small file size.',
        url: toAbsoluteUrl('/en/tools/avif-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 29,
        name: 'HEIC to JPG converter',
        description: 'Convert iPhone HEIC photos to universal JPG. No signup, no server uploads.',
        url: toAbsoluteUrl('/en/tools/heic-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 30,
        name: 'HEIC to PNG converter',
        description: 'Convert iPhone HEIC photos to lossless PNG. Full quality and transparency.',
        url: toAbsoluteUrl('/en/tools/heic-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 31,
        name: 'HEIC to WebP converter',
        description:
          'Convert iPhone HEIC photos to lightweight WebP. Smaller size, faster loading.',
        url: toAbsoluteUrl('/en/tools/heic-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 32,
        name: 'TIFF to JPG converter',
        description: 'Convert TIFF files to compact JPG. Ideal for scans and archives.',
        url: toAbsoluteUrl('/en/tools/tiff-to-jpg-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 33,
        name: 'TIFF to PNG converter',
        description: 'Convert TIFF files to lossless PNG. Preserve full quality of scans.',
        url: toAbsoluteUrl('/en/tools/tiff-to-png-converter'),
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
      },
      {
        '@type': 'WebApplication',
        position: 34,
        name: 'TIFF to WebP converter',
        description: 'Convert TIFF files to lightweight WebP. Massive size reduction.',
        url: toAbsoluteUrl('/en/tools/tiff-to-webp-converter'),
        applicationCategory: 'MultimediaApplication',
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
    answer:
      'No. All tools run entirely in your browser. Files never leave your computer and are not stored anywhere.',
  },
  {
    question: 'Do I need an account?',
    answer: 'No. You can use them right away, without logging in or creating an account.',
  },
  {
    question: 'Is there a usage limit?',
    answer:
      'No. Use them without restrictions - no daily limits, no file limits, no conversion limits.',
  },
  {
    question: 'What are these tools for?',
    answer:
      'They help prepare materials for websites, social media, and print: optimize images, create favicons, check text length, generate QR codes, pick colors, and verify their readability.',
  },
  {
    question: 'Do the tools work on mobile?',
    answer:
      'Yes, but some (WebP converter, favicon generator) work better on desktop due to processing larger files.',
  },
];

export default function ToolsIndexPage() {
  return (
    <>
      <HeroBanner
        title='Free tools'
        description='Image format converters, image editor, favicon generator, text counter, color tools, and QR codes. No registration, no limits - everything runs in your browser.'
        backgroundImage='/assets/arteon-logo-on-mockup.webp'
        overlay='black'
      />

      <Wrapper>
        <Divider size='sm' />

        <SectionSteps
          title='Images & favicons'
          description='Tools for preparing photos, graphics, and icons for websites and social media.'
          grid='three'
          items={[
            {
              icon: <RiCropLine className='h-8 w-8' />,
              title: 'Online image editor',
              topImageAlt: 'Online image editor Arteon',
              topImageSrc:
                '/assets/tools/free-image-editor-crop-resize-and-convert/online-image-editor-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Prepare the perfect crop for social media or your website. Choose a ready-made
                    format or enter custom pixel dimensions and download the image in PNG, JPG, or
                    WebP.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/online-image-editor'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiAppsLine className='h-8 w-8' />,
              title: 'Favicon & icon generator',
              topImageAlt: 'Favicon generator Arteon',
              topImageSrc: '/assets/tools/favicon-generator/free-favicon-generator-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Generate <strong>favicon.ico</strong> and PNG icons 180x180, 192x192, and
                    512x512 from a single image - compliant with browser and Lighthouse
                    requirements.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/free-favicon-generator'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Text & SEO'
          description='Tools for checking text length, meta tags, and previewing your page in search results.'
          grid='three'
          items={[
            {
              icon: <RiFileTextLine className='h-8 w-8' />,
              title: 'Meta title & description checker',
              topImageAlt: 'Meta title and description checker Arteon',
              topImageSrc:
                '/assets/tools/free-meta-title-and-description-checker-pixel-width/meta-title-description-length-checker-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Check character count, word count, pixel width, and preview how your page looks
                    in Google. Avoid truncated titles and descriptions and fine-tune your SEO
                    content.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/meta-title-description-length-checker'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiArticleLine className='h-8 w-8' />,
              title: 'Word & character counter',
              topImageAlt: 'Word and character counter Arteon',
              topImageSrc:
                '/assets/tools/word-and-character-counter-with-text-formatting-tools/word-and-character-counter-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Check text length and evaluate whether it fits a homepage, service description,
                    blog post, or product description. The tool counts words, characters,
                    paragraphs, and reading time.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/word-and-character-counter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },

            {
              icon: <RiFileTextLine className='h-8 w-8' />,
              title: 'Lorem Ipsum Generator',
              topImageAlt: 'Lorem Ipsum Generator Arteon',
              topImageSrc: '/assets/tools/lorem-ipsum-generator/lorem-ipsum-generator-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Generate placeholder text in 8 styles and 9 modes. Lorem Ipsum, Hipster,
                    Business, Bacon and more. Copy as text or HTML.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/lorem-ipsum-generator'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Email & communication'
          description='Tools that help organize email communication and brand image.'
          grid='three'
          items={[
            {
              icon: <RiMailLine className='h-8 w-8' />,
              title: 'Free HTML email signature generator',
              topImageAlt: 'Free HTML email signature generator Arteon',
              topImageSrc:
                '/assets/tools/free-html-email-signature-generator/free-email-signature-generator-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Build a professional email signature in minutes. Enter your details, choose
                    colors, and copy the ready HTML code into Gmail, Outlook, and other email
                    clients.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/free-email-signature-generator'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='QR codes'
          description='QR code generator for websites, business cards, menus, and printed materials.'
          grid='three'
          items={[
            {
              icon: <RiQrCodeLine className='h-8 w-8' />,
              title: 'Free QR code generator',
              topImageAlt: 'Free QR code generator Arteon',
              topImageSrc: '/assets/tools/qr-code-generator/free-qr-code-generator-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Create a QR code for a website, vCard, restaurant menu, or flyer. Export to PNG
                    and SVG, no login, no limits.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/free-qr-code-generator'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Colors & accessibility'
          description='Tools for working with colors, contrast, and WCAG accessibility.'
          grid='three'
          items={[
            {
              icon: <RiContrast2Line className='h-8 w-8' />,
              title: 'Color contrast & readability checker',
              topImageAlt: 'Color contrast checker Arteon',
              topImageSrc:
                '/assets/tools/color-contrast-and-readability-checker/color-contrast-checker-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Check if your text and background colors are readable. Enter color codes, see
                    the contrast ratio per <strong>WCAG</strong>, and use the <strong>Match</strong>{' '}
                    function for automatic correction.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/color-contrast-checker'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPantoneLine className='h-8 w-8' />,
              title: 'Image color extractor',
              topImageAlt: 'Image color extractor Arteon',
              topImageSrc: '/assets/tools/image-color-extractor/image-color-extractor-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Upload a photo or logo and the tool will extract dominant colors. Copy HEX codes
                    with a single click and use them anywhere.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/image-color-extractor'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiPaletteLine className='h-8 w-8' />,
              title: 'Color palette generator',
              topImageAlt: 'Color palette generator Arteon',
              topImageSrc: '/assets/tools/color-palette-generator/color-palette-generator-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Pick one base color and generate 9 color palettes: monochromatic, complementary,
                    triadic, pastel, dark, and more. Copy HEX codes with a single click.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/color-palette-generator'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <SectionSteps
          title='Image format converters'
          description='Online image converters - convert between JPG, PNG, WebP, SVG, BMP, and GIF. Runs in your browser, no files sent to servers.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JPG to WebP converter',
              topImageAlt: 'JPG to WebP converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert JPG photos to lightweight WebP. Cut image weight by up to 35% for faster
                    page loads.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/jpg-to-webp-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'PNG to JPG converter',
              topImageAlt: 'PNG to JPG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert PNG files to JPG in your browser. No file limits, no signup, no server
                    uploads.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/png-to-jpg-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'WebP to JPG converter',
              topImageAlt: 'WebP to JPG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert WebP files to universally compatible JPG. Works in every app and
                    platform.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/webp-to-jpg-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'PNG to WebP converter',
              topImageAlt: 'PNG to WebP converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convert PNG graphics to WebP. Smaller files while preserving transparency.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/png-to-webp-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JPG to PNG converter',
              topImageAlt: 'JPG to PNG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert JPG images to lossless PNG. Runs locally in your browser, unlimited
                    files.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/jpg-to-png-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'WebP to PNG converter',
              topImageAlt: 'WebP to PNG converter Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert WebP images to lossless PNG. Local conversion, nothing sent to any
                    server.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/webp-to-png-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />
        <Divider size='sm' />

        <SectionSteps
          title='Data converters'
          description='Online data format converters — convert between CSV, JSON, XML, YAML, Markdown and HTML. All processing in your browser.'
          grid='three'
          items={[
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'CSV to JSON',
              topImageAlt: 'CSV to JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert CSV to JSON format. Automatic separator detection and result formatting.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/csv-to-json-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON to CSV',
              topImageAlt: 'JSON to CSV Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert JSON data to CSV format. Processing in your browser, no server upload.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/json-to-csv-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'XML to JSON',
              topImageAlt: 'XML to JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert XML data to JSON. Browser-based conversion with structure validation.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/xml-to-json-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON to XML',
              topImageAlt: 'JSON to XML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>Convert JSON data to valid XML. Browser-based conversion with formatting.</p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/json-to-xml-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'YAML to JSON',
              topImageAlt: 'YAML to JSON Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert YAML configuration to JSON. Validation and formatting in the browser.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/yaml-to-json-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
            {
              icon: <RiLoopLeftLine className='h-8 w-8' />,
              title: 'JSON to YAML',
              topImageAlt: 'JSON to YAML Arteon',
              topImageSrc:
                '/assets/tools/jpg-png-to-webp-converter/jpg-png-to-webp-unlimited-en.webp',
              description: (
                <div className='flex h-full flex-col'>
                  <p>
                    Convert JSON data to readable YAML. Browser-based conversion with formatting.
                  </p>
                  <div className='mt-4'>
                    <ButtonLink arrow href='/en/tools/json-to-yaml-converter'>
                      Open tool
                    </ButtonLink>
                  </div>
                </div>
              ),
            },
          ]}
        />

        <Divider size='sm' />

        <Divider line />

        <SectionInfo title='What are Arteon tools?'>
          <p className='mb-4'>
            A set of Free tools for preparing materials for websites, social media, and print.
            Image-to-WebP converter, favicon generator, text length counter, color extractor,
            palette generator, and QR codes.
          </p>
          <p>
            All tools run in your browser - files are never sent to a server. Use them without
            registration and without limits.
          </p>
        </SectionInfo>

        <Divider line />

        <SectionSteps
          title='Why use Arteon tools?'
          grid='two'
          items={[
            {
              icon: <RiShieldCheckLine className='h-6 w-6' />,
              title: 'Full privacy',
              description:
                'All tools process files locally in your browser. Nothing is sent to a server - data disappears when you close the tab.',
            },
            {
              icon: <RiInfinityFill className='h-6 w-6' />,
              title: 'No usage limits',
              description:
                'Use without restrictions - no daily limits, no file limits, no conversion limits. As many times as you need.',
            },
            {
              icon: <RiLockLine className='h-6 w-6' />,
              title: 'No registration',
              description: 'No account needed. Open the tool, use it, and you are done.',
            },
            {
              icon: <RiGlobalLine className='h-6 w-6' />,
              title: 'Available in English',
              description:
                'All tools are available in English - interface, instructions, and messages.',
            },
          ]}
        />

        <Divider line />

        <FaqPanels items={faqItems} title='Frequently asked questions about our tools' />

        <Divider size='sm' />
      </Wrapper>

      <Script id='ld-json-tools-en' type='application/ld+json' strategy='afterInteractive'>
        {JSON.stringify(schema)}
      </Script>
    </>
  );
}
