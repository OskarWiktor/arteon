import Script from 'next/script';
import Link from 'next/link';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import PaletteExtractor from '@/components/sections/tools/PaletteExtractor';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionTimeline from '@/components/ui/sections/SectionTimeline';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiShieldCheckLine,
  RiPaletteLine,
  RiFileImageLine,
  RiGlobalLine,
  RiImageLine,
  RiCropLine,
  RiContrastLine,
  RiEraserLine,
  RiZoomInLine,
  RiGroupLine,
  RiStarLine,
  RiAlertLine,
  RiSearchEyeLine,
  RiErrorWarningLine,
  RiFileWarningLine,
  RiBrushLine,
  RiLayoutMasonryLine,
  RiPaintBrushLine,
  RiBarChartLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free image color extractor online — extract palette from photo',
  description: 'Free online image color extractor. Upload a photo or logo and get a palette of up to 12 dominant colors with HEX and RGB codes. Local processing in the browser. No registration.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/image-color-extractor'),
    languages: { pl: toAbsoluteUrl('/narzedzia/ekstraktor-kolorow-z-obrazu'), en: toAbsoluteUrl('/en/tools/image-color-extractor') },
  },
  openGraph: {
    title: 'Free image color extractor online — extract palette from photo',
    description: 'Free online image color extractor. Upload a photo or logo and get a palette of up to 12 dominant colors with HEX and RGB codes.',
    url: toAbsoluteUrl('/en/tools/image-color-extractor'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Image color extractor online — free palette generator',
  alternateName: 'Extract color palette from a photo or logo',
  url: toAbsoluteUrl('/en/tools/image-color-extractor'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorExtractor',
  operatingSystem: 'Any',
  description:
    'Free online image color extractor. Upload a photo, logo, or graphic and get a palette of up to 12 dominant colors with HEX and RGB codes. Processing happens in the browser — files are not sent to a server.',
  featureList: [
    'Automatic extraction of up to 12 dominant colors',
    'Analysis of photos, logos, and vector graphics',
    'Color codes in HEX and RGB format',
    'Copy color code to clipboard',
    'Support for PNG, JPG, and SVG files',
    'Ignores transparent pixels in PNG files',
    'Local processing in the browser — image is not sent to a server',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to extract colors from a photo or image',
  description: 'How to extract dominant colors from a photo or logo. Upload an image in PNG, JPG, or SVG format, and the tool will generate a palette of up to 12 colors with HEX codes.',
  url: toAbsoluteUrl('/en/tools/image-color-extractor'),
  step: [
    { '@type': 'HowToStep', name: 'Upload an image', text: 'Drag a file onto the designated area or select an image from your device. Supported formats are PNG, JPG, and SVG.' },
    { '@type': 'HowToStep', name: 'Wait for analysis', text: 'The tool will automatically analyze the image and extract dominant colors.' },
    { '@type': 'HowToStep', name: 'Copy colors', text: 'Next to each color you will find a copy button — the HEX code is copied to your system clipboard.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Does the image color extractor require registration?',
    answer:
      'No. The tool is completely free and requires no login or registration. The image is analyzed locally in the browser — it is not sent to any server. After closing the page, all data is removed.',
    answerSchemaText: 'No. The tool is free and does not require registration. The image is analyzed locally in the browser.',
  },
  {
    question: 'How is the color extractor different from a palette generator?',
    answer:
      'The extractor pulls colors from an existing image — it analyzes a photo and shows which colors dominate in it. A color palette generator works the other way: you provide one base color, and the tool creates harmonious sets based on color theory. Both tools complement each other — you can extract a color from an image and then use it as a base in the palette generator.',
    answerSchemaText: 'The extractor pulls colors from an image. The generator creates palettes from a base color. Both tools complement each other.',
  },
  {
    question: 'How many colors does the extractor pull from one image?',
    answer:
      'The tool extracts up to 12 dominant colors. The exact number depends on the image content — if a graphic has only two colors (e.g., a simple logo), the result will contain fewer items. Colors are sorted from most to least prominent.',
    answerSchemaText: 'Up to 12 dominant colors, sorted from the most to least prominent.',
  },
  {
    question: 'What image formats does the color extractor support?',
    answer:
      'Supported formats are PNG, JPG (JPEG), and SVG. PNG files with transparent backgrounds give better results because transparent pixels are skipped during analysis — the tool focuses on the colors of the object itself.',
    answerSchemaText: 'PNG, JPG, and SVG. PNG with transparent background gives the best results.',
  },
  {
    question: 'In what format do I get the extracted color codes?',
    answer:
      'Each color is displayed with its HEX code (e.g., #2C5F2D) and RGB value (e.g., rgb(44, 95, 45)). The code can be copied to the clipboard and pasted directly into CSS, Figma, Photoshop, or any other graphics application.',
    answerSchemaText: 'HEX (e.g., #2C5F2D) and RGB (e.g., rgb(44, 95, 45)). Copyable to clipboard.',
  },
  {
    question: 'Can I copy all palette colors at once?',
    answer:
      'Currently the tool allows copying colors individually — next to each color there is a button that copies the HEX code to the clipboard. The copied code can be immediately pasted into Figma, Photoshop, CSS, or any other application.',
    answerSchemaText: 'Colors are copied individually via the copy button next to each color.',
  },
];

export default function ImageColorExtractorPage() {
  return (
    <>
      <Script id="ld-json-palette-extractor-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-palette-extractor-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Image color extractor online"
        description="Upload a photo, logo, or graphic, and the tool will extract up to 12 dominant colors with HEX and RGB codes. Analysis happens locally in your browser."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palety-kolorow-z-obrazu.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/image-color-extractor', label: 'Image color extractor' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <PaletteExtractor />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Why extract colors from an image?">
          <p className="mb-4">
            Every photo, logo, or graphic contains colors that can serve as a ready-made color palette. The extractor analyzes the image and shows which colors dominate — along with HEX codes and RGB
            values ready to paste into your project.
          </p>
          <p className="mb-4">
            In practice, this means that instead of manually sampling colors in a graphics application (pixel by pixel), you upload one image and get an organized list of up to 12 colors. This is
            useful when selecting colors for a website, creating consistent social media graphics, or building a visual identity from existing material.
          </p>
          <p>All analysis happens locally in the browser — the image is not sent to any server.</p>
        </SectionInfo>

        <Gap size="xs" />

        <SectionSteps
          title="How to use the image color extractor"
          description="The whole process takes just a few seconds:"
          grid="three"
          items={[
            { title: '1. Upload an image', description: 'Drag a file onto the designated area or select it from your device. Supported formats are PNG, JPG, and SVG.' },
            { title: '2. Wait for analysis', description: 'The tool will automatically analyze the image and extract up to 12 dominant colors.' },
            {
              title: '3. Copy the colors you need',
              description: 'Next to each color there is a copy button — the HEX or RGB code goes to the clipboard and can be pasted directly into your project.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="What does an extracted color palette look like?"
          demo={
            <div className="space-y-3">
              <div className="grid grid-cols-4 gap-2">
                {['#2C5F2D', '#97BC62', '#DAA520', '#4169E1', '#8B4513', '#DC143C', '#2F4F4F', '#FF6347'].map((color) => (
                  <div key={color} className="flex flex-col items-center gap-1">
                    <div className="h-10 w-full rounded-lg border border-neutral-200" style={{ backgroundColor: color }} />
                    <span className="text-mid text-xs!">{color}</span>
                  </div>
                ))}
              </div>
              <p className="text-light text-xs!">Example colors extracted from a nature image</p>
            </div>
          }
        >
          <p className="text-mid mb-4">
            After uploading an image, the extractor displays a list of dominant colors sorted from most to least prominent. Each color shows its HEX code and RGB value — ready to paste into CSS,
            Figma, or any graphics application.
          </p>
          <p className="text-mid">
            The number of extracted colors depends on the image content. A landscape photo will produce a richer palette (8–12 colors), while a simple two-color logo will yield correspondingly fewer
            items.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Which images give the best results in the color extractor?"
          description="The quality of the extracted palette depends on the type of uploaded image:"
          grid="two"
          items={[
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Logos and graphics with a limited palette',
              description: 'Images with a few clearly separated colors give the most precise results — the extractor accurately identifies each color.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Photos with a clear subject',
              description: 'Product, interior, or landscape photos also produce useful palettes, but they contain more shades — including shadow colors and light reflections.',
            },
            {
              icon: <RiEraserLine className="h-6 w-6" />,
              title: 'PNG files with transparent backgrounds',
              description: 'Transparent pixels are automatically skipped during analysis. If you want to extract colors only from the object (e.g., a logo), use a PNG file without a background.',
            },
            {
              icon: <RiCropLine className="h-6 w-6" />,
              title: 'Images without a large solid-color background',
              description: 'When the background takes up most of the image area, its color dominates the results. Before uploading, it is worth cropping the image to the area of interest.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionTimeline
          title="How does image color extraction work?"
          description="After uploading a file, the tool performs several steps in the background — all analysis happens locally in the browser:"
          items={[
            {
              icon: <RiZoomInLine className="h-5 w-5" />,
              title: 'Image scaling',
              description: 'The image is resized to about 240 pixels wide. This speeds up analysis even for very large photos, without affecting color detection accuracy.',
            },
            {
              icon: <RiGroupLine className="h-5 w-5" />,
              title: 'Grouping similar colors',
              description: 'Each pixel is analyzed, and similar shades are grouped together. Two nearly identical blues become one color in the palette.',
            },
            {
              icon: <RiStarLine className="h-5 w-5" />,
              title: 'Selecting dominant colors',
              description: 'The algorithm picks colors that cover the largest area of the image. The result is a list of up to 12 colors sorted from most to least prominent.',
            },
            {
              icon: <RiContrastLine className="h-5 w-5" />,
              title: 'Skipping transparent pixels',
              description:
                'In PNG files with transparent backgrounds, those areas are not included in the analysis — the extractor examines only visible colors. The entire process typically takes under a second.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Troubleshooting the color extractor"
          grid="two"
          items={[
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'Extractor returned fewer than 12 colors',
              description:
                'The number of extracted colors depends on the image content. A simple two-color logo will give 2–3 results — this is correct behavior. The tool does not add artificial colors; it only extracts those that actually appear in the image.',
            },
            {
              icon: <RiAlertLine className="h-6 w-6" />,
              title: 'Unexpected colors appeared in the palette',
              description:
                'These may be shadow, gradient, or light reflection colors — pixels in those areas have different colors than the object visible at first glance. Using an image with more uniform colors or cropping dark areas will improve results.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Background color dominates the results',
              description:
                'When the background covers more area than the object itself, its color will appear first on the list. Solution: use a PNG file with a transparent background or crop the image so the object takes up more of the frame.',
            },
            {
              icon: <RiFileWarningLine className="h-6 w-6" />,
              title: 'File is not accepted by the extractor',
              description: 'The tool only supports PNG, JPG, and SVG formats. Files in other formats (GIF, TIFF, HEIC, PDF) require prior conversion.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What makes this image color extractor special?"
          grid="two"
          items={[
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Local analysis — the image never leaves your computer',
              description: 'All color extraction happens in the browser. The image is not sent to any server, and after closing the page, data is removed from memory.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Up to 12 dominant colors from one image',
              description: 'The tool extracts up to 12 colors sorted from most prominent — enough to build a complete project color palette.',
            },
            {
              icon: <RiFileImageLine className="h-6 w-6" />,
              title: 'Three popular image formats',
              description: 'Supported formats are PNG, JPG, and SVG. PNG files with transparent backgrounds give the best results because transparent pixels are automatically skipped.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Ready HEX and RGB codes to paste',
              description: 'Each extracted color comes with its HEX code (e.g., #2C5F2D) and RGB value. The code can be copied to the clipboard and pasted directly into CSS, Figma, or Photoshop.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Where to use colors extracted from an image"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Building visual identity',
              description: 'Upload a photo that captures the mood of the brand — a landscape, a restaurant interior, a product photo — and extract colors as a starting point for a branding palette.',
            },
            {
              icon: <RiLayoutMasonryLine className="h-6 w-6" />,
              title: 'Social media graphics',
              description: 'Extract colors from a product photo and use them as backgrounds or accents in graphics. Posts based on colors from the same source look consistent on the profile.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: 'Matching colors to a website',
              description: 'Extract colors from the logo and use them as the website color palette — primary color, accent color, background shades. HEX codes paste straight into CSS.',
            },
            {
              icon: <RiSearchEyeLine className="h-6 w-6" />,
              title: 'Expanding an existing palette',
              description: (
                <p>
                  An extracted base color can be used in the <Link href="/en/tools/color-palette-generator">color palette generator</Link> to create a full set of harmonious colors based on color
                  theory.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels items={faqItems} title="Frequently asked questions about the image color extractor" openByDefault={1} pageUrl={toAbsoluteUrl('/en/tools/image-color-extractor')} />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />
        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
