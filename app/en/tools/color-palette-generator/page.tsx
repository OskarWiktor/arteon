import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import ColorPaletteGenerator from '@/components/sections/tools/ColorPaletteGenerator';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiDropLine,
  RiCursorLine,
  RiLayoutGridLine,
  RiPaletteLine,
  RiFileCopyLine,
  RiSparklingLine,
  RiMoonLine,
  RiStackLine,
  RiContractLeftRightLine,
  RiBrushLine,
  RiGlobalLine,
  RiSmartphoneLine,
  RiImageLine,
  RiSlideshowLine,
  RiRefreshLine,
  RiErrorWarningLine,
  RiCodeLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free color palette generator online - 9 palettes from one color',
  description: 'Free online color palette generator. Pick one base color and generate 9 palettes: monochromatic, complementary, triadic, analogous, pastel, dark, and more. Copy HEX codes instantly.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/color-palette-generator'),
    languages: {
      pl: toAbsoluteUrl('/narzedzia/generator-palet-kolorow'),
      en: toAbsoluteUrl('/en/tools/color-palette-generator'),
      de: toAbsoluteUrl('/de/werkzeuge/farbpaletten-generator'),
      es: toAbsoluteUrl('/es/herramientas/generador-de-paletas-de-colores'),
      fr: toAbsoluteUrl('/fr/outils/generateur-de-palettes-de-couleurs'),
    },
  },
  openGraph: {
    title: 'Free color palette generator online - 9 palettes from one color',
    description: 'Free online color palette generator. Pick one base color and generate 9 palettes: monochromatic, complementary, triadic, and more.',
    url: toAbsoluteUrl('/en/tools/color-palette-generator'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-generator-palet-kolorow-online.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Color palette generator',
  alternateName: ['Color scheme generator', 'Online color generator', 'Color palette creator', 'Color matching tool', 'Color palette online', 'Color harmony generator'],
  url: toAbsoluteUrl('/en/tools/color-palette-generator'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'ColorPaletteGenerator',
  operatingSystem: 'Any',
  description:
    'Free online color palette generator. Enter one HEX color and the tool will generate 9 schemes: monochromatic, analogous, complementary, triadic, split-complementary, pastel, dark, tonal, and minimalist. Each color can be copied with its HEX code and HSL value.',
  featureList: [
    'Monochromatic scheme - shades of one color',
    'Analogous scheme - neighboring colors on the color wheel',
    'Complementary scheme - opposite colors',
    'Triadic scheme - 3 colors at equal intervals',
    'Split-complementary scheme - base color and 2 neighbors of its complement',
    'Pastel palette - light, muted shades',
    'Dark palette - deep colors for dark themes',
    'Tonal palette - lightness scale of one hue',
    'Minimalist palette - strong accent with light neutrals',
    'Base color in HEX format',
    'Color picker for visual selection',
    'Random starting color',
    'Copy HEX code to clipboard',
    'HSL value displayed alongside each color',
    'Local processing in the browser',
  ],
  inLanguage: 'en',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: 0, priceCurrency: 'USD' },
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to generate a color palette from one base color',
  description: 'How to generate 9 color palettes from one base color: monochromatic, complementary, triadic, pastel, and more. Each color can be copied with its HEX code.',
  url: toAbsoluteUrl('/en/tools/color-palette-generator'),
  step: [
    { '@type': 'HowToStep', name: 'Choose a base color', text: 'Enter a HEX code in the text field or use the color picker to select a color visually.' },
    { '@type': 'HowToStep', name: 'Confirm the color', text: 'Confirm the selected color with the Update Color button - the tool will generate palettes based on your chosen base color.' },
    {
      '@type': 'HowToStep',
      name: 'Browse the palettes',
      text: 'The tool will automatically generate 9 different palettes: monochromatic, analogous, complementary, triadic, split-complementary, pastel, dark, tonal, and minimalist.',
    },
    { '@type': 'HowToStep', name: 'Copy colors', text: 'Next to each color you will find a Copy button - the HEX code is copied to your system clipboard.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'What format should the base color be in?',
    answer:
      'The generator accepts colors in HEX format - both short (e.g., #F50) and full (e.g., #FF5500). Next to the text field you will find a color picker that lets you choose a color visually. Generated palettes show the HEX code and HSL value of each color.',
    answerSchemaText: 'The generator accepts HEX colors (#RGB or #RRGGBB). Each generated color has a HEX code and HSL value.',
  },
  {
    question: 'How many colors does each palette contain?',
    answer:
      'Each palette contains 4 to 6 colors. The number depends on the scheme type - monochromatic and tonal palettes generate more shades (a lightness scale of one hue), while complementary and triadic palettes focus on fewer contrasting colors.',
    answerSchemaText: 'Each palette contains 4 to 6 colors, depending on the scheme type.',
  },
  {
    question: 'What is the HSL color space and how to read it?',
    answer:
      'HSL is a way of describing color using three values: H (hue, 0°–360° on the color wheel), S (saturation, 0%–100%), and L (lightness, 0%–100%). The generator displays HSL values alongside each color, making it easier to understand how the colors in the palette differ - e.g., a monochromatic palette changes only lightness (L) while keeping the same hue (H).',
    answerSchemaText: 'HSL describes color via hue (H), saturation (S), and lightness (L). The generator displays these values alongside each color.',
  },
  {
    question: 'Can I use the generated palettes commercially?',
    answer: 'Yes. You can use the generated color palettes in any project - commercial and non-commercial, without licensing restrictions.',
    answerSchemaText: 'Yes, generated palettes can be used without restrictions in commercial and non-commercial projects.',
  },
  {
    question: 'Does the color palette generator require login or payment?',
    answer: 'The generator is completely free and requires no login or registration. Colors are generated locally in the browser - no data is sent to external servers.',
    answerSchemaText: 'The generator is free, requires no login. Colors are generated locally in the browser.',
  },
];

export default function ColorPaletteGeneratorPage() {
  return (
    <>
      <Script id="ld-json-color-palette-tool-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-color-palette-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Color palette generator"
        description="Enter one base color, and the tool will generate 9 harmonious color palettes: monochromatic, complementary, triadic, pastel, and more. Each color can be copied with its HEX code."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-generator-palet-kolorow-online.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/color-palette-generator', label: 'Color palette generator' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <ColorPaletteGenerator />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Why generate a color palette?">
          <p className="text-mid">
            A consistent color palette is the foundation of every visual project - from a website, through a logo, to printed materials. Manually selecting colors that work together requires knowledge
            of color theory. The generator does it automatically: you provide one base color (e.g., your logo color), and the tool creates 9 color sets based on proven color harmony schemes.
          </p>
          <p className="text-mid mt-3">
            Each generated color comes with its HEX code (e.g., #4F6BF5) and HSL value (hue, saturation, lightness). The HEX code can be pasted directly into CSS, Figma, Canva, or any graphics
            application.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to use the color palette generator"
          description="The whole process takes just a few seconds:"
          grid="three"
          items={[
            { title: '1. Enter the base color', description: 'Type a HEX code (e.g., #4F6BF5) in the text field or pick a color from the color picker. You can also use the Random Color button.' },
            { title: '2. Confirm your choice', description: 'After clicking the Update Color button, the tool will automatically generate 9 palettes based on different color harmony schemes.' },
            { title: '3. Copy the colors you need', description: 'Next to each color there is a Copy button - the HEX code goes to the clipboard and can be pasted directly into your project.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What color schemes does the tool generate?"
          description="The generator creates 9 palette types - each based on a different color theory principle:"
          grid="two"
          items={[
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Monochromatic palette',
              description:
                'Several shades of one color - from light to dark. All colors have the same hue on the color wheel and differ only in lightness. Works well in elegant, minimalist designs where consistency matters.',
            },
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: 'Analogous palette',
              description:
                'Neighboring colors on the color wheel (shifted about 30° in both directions from the base). They create harmonious, smooth color transitions. Great for projects that build a warm or cool atmosphere.',
            },
            {
              icon: <RiLayoutGridLine className="h-6 w-6" />,
              title: 'Complementary palette',
              description:
                'The base color and the color opposite on the color wheel (180° shift). Creates strong visual contrast. Useful where an element needs to attract attention - buttons, highlighted headings, promo banners.',
            },
            {
              icon: <RiSparklingLine className="h-6 w-6" />,
              title: 'Triadic palette',
              description:
                'Three colors spaced 120° apart on the color wheel - forming an equilateral triangle. A vibrant, dynamic combination. Works well in creative projects: young brand identity, advertising materials, posters.',
            },
            {
              icon: <RiCursorLine className="h-6 w-6" />,
              title: 'Split-complementary palette',
              description:
                'A softer version of the complementary palette. Instead of one opposite color, it uses two colors shifted about 30° from the complement. Gives clear contrast but without as strong visual tension.',
            },
            {
              icon: <RiDropLine className="h-6 w-6" />,
              title: 'Pastel palette',
              description:
                "The same hue with reduced saturation and increased lightness - soft, gentle colors. Popular in cosmetics, children's fashion, and food industry. Pairs well with a light background and white space.",
            },
            {
              icon: <RiMoonLine className="h-6 w-6" />,
              title: 'Dark palette',
              description:
                'Base color at high saturation and reduced lightness - deep, intense colors. Useful for designing dark themes for websites and apps, as well as materials for premium brands.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Tonal palette',
              description:
                'Several lightness steps of one hue - from very light to dark. Similar to tonal scales used in design systems (e.g., shades from 50 to 900). Useful for building interfaces where the same color needs variants.',
            },
            {
              icon: <RiContractLeftRightLine className="h-6 w-6" />,
              title: 'Minimalist palette',
              description:
                'One bold color accent and several very light, soft neutrals. The rest of the palette stays muted. Works well in modern interfaces with lots of white space - typical product and landing page style.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="What is the color palette generator based on?"
          demo={
            <div className="space-y-4">
              <div
                className="mx-auto h-40 w-40 rounded-full"
                style={{ background: 'conic-gradient(hsl(0,80%,60%), hsl(60,80%,60%), hsl(120,80%,60%), hsl(180,80%,60%), hsl(240,80%,60%), hsl(300,80%,60%), hsl(360,80%,60%))' }}
              />
              <div className="space-y-1">
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">H (hue)</span>
                  <span className="text-mid">0°–360° on the color wheel</span>
                </div>
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">S (saturation)</span>
                  <span className="text-mid">0%–100%</span>
                </div>
                <div className="flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">L (lightness)</span>
                  <span className="text-mid">0%–100%</span>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            All palettes are created by mathematically transforming the base color in HSL color space. HSL describes a color with three values: hue (H) is the position on the color wheel
            (0°–360°), saturation (S) determines color intensity, and lightness (L) - how bright or dark the color is.
          </p>
          <p className="text-mid mt-3">
            The complementary, triadic, and split-complementary palettes are based on color wheel geometry - colors are placed at equal angular intervals, creating visual balance. The monochromatic,
            pastel, and dark palettes change only lightness and saturation while keeping the same hue.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionSteps
          title="Where to use the generated color palettes"
          grid="two"
          items={[
            {
              icon: <RiBrushLine className="h-6 w-6" />,
              title: 'Brand visual identity',
              description: 'Select complementary colors for an existing logo or build a branding palette from scratch - for business cards, stationery, and marketing materials.',
            },
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Websites',
              description: 'Establish the primary color, accent color, and background shades. Copied HEX codes paste straight into CSS stylesheets or theme configuration.',
            },
            {
              icon: <RiSmartphoneLine className="h-6 w-6" />,
              title: 'App interfaces',
              description: 'The tonal palette provides lightness variants of one color - lighter for backgrounds, darker for text, intermediate for borders and interactive states.',
            },
            {
              icon: <RiImageLine className="h-6 w-6" />,
              title: 'Social media graphics',
              description: 'Consistent colors for posts, stories, and profile covers. Analogous or pastel palettes work well when you want a uniform, recognizable style.',
            },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Presentations and documents',
              description: 'Harmonious color sets for slides, charts, and infographics. Monochromatic or minimalist palettes maintain visual order.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Troubleshooting the palette generator"
          grid="two"
          items={[
            {
              icon: <RiRefreshLine className="h-6 w-6" />,
              title: "Palettes don't change after entering a color",
              description:
                'Simply typing a HEX code does not automatically generate palettes - you need to confirm the change with the Update Color button. Only after confirmation does the tool recalculate all 9 schemes.',
            },
            {
              icon: <RiErrorWarningLine className="h-6 w-6" />,
              title: 'Invalid format message',
              description:
                'The generator only accepts HEX format with a # at the beginning, e.g., #FF5500. Formats without # (e.g., FF5500) or in RGB notation (e.g., rgb(255,85,0)) are not supported.',
            },
            {
              icon: <RiCodeLine className="h-6 w-6" />,
              title: 'Short and full HEX format',
              description: 'Both formats are supported: full #RRGGBB (e.g., #FF5500) and short #RGB (e.g., #F50). The generator automatically recognizes both and treats them identically.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels title="Frequently asked questions about the color palette generator" items={faqItems} openByDefault={1} pageUrl={toAbsoluteUrl('/en/tools/color-palette-generator')} />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
