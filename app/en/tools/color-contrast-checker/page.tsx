import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import WcagContrastChecker from '@/components/sections/tools/WcagContrastChecker';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import SectionFeatureComparison from '@/components/ui/sections/SectionFeatureComparison';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/lib/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPaletteLine,
  RiPaintBrushLine,
  RiCheckboxCircleLine,
  RiEqualizerLine,
  RiGlobalLine,
  RiShoppingCartLine,
  RiSlideshowLine,
  RiPrinterLine,
  RiSmartphoneLine,
  RiRestaurantLine,
  RiEyeLine,
  RiShieldCheckLine,
  RiMagicLine,
  RiStackLine,
  RiInfinityLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free color contrast checker online — WCAG compliance',
  description: 'Free online color contrast checker. Test text and background color readability per WCAG 2.1 standards. Auto-match feature helps find accessible color combinations. No registration.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/color-contrast-checker'),
    languages: { pl: toAbsoluteUrl('/narzedzia/kontrast-i-czytelnosc-kolorow'), en: toAbsoluteUrl('/en/tools/color-contrast-checker') },
  },
  openGraph: {
    title: 'Free color contrast checker online — WCAG compliance',
    description: 'Free online color contrast checker. Test text and background color readability per WCAG 2.1 standards. Auto-match feature helps find accessible color combinations.',
    url: toAbsoluteUrl('/en/tools/color-contrast-checker'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Color contrast and readability checker online',
  alternateName: [
    'Color readability tester',
    'Text and background contrast checker',
    'Readability checking tool',
    'Color contrast calculator',
    'WCAG contrast tester',
    'Color accessibility checker',
    'Are my colors readable',
  ],
  url: toAbsoluteUrl('/en/tools/color-contrast-checker'),
  applicationCategory: 'DesignApplication',
  applicationSubCategory: 'AccessibilityTool',
  operatingSystem: 'Any',
  description: 'Check if text and background colors are readable for all users. The tool calculates contrast ratio per WCAG 2.1 and shows whether you meet accessibility requirements.',
  featureList: [
    'Contrast ratio calculation',
    'WCAG 2.1 Level AA compliance check',
    'WCAG 2.1 Level AAA compliance check',
    'Normal text testing',
    'Large text and heading testing',
    'Icon and UI component testing',
    'HEX color format support',
    'RGB and RGBA color format support',
    'HSL and HSLA color format support',
    'Color picker for visual selection',
    'Live text preview',
    'Automatic color matching feature',
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
  name: 'How to check color contrast and readability online',
  description: 'How to check text and background color readability per WCAG standard. Enter colors, read the contrast ratio, and use the automatic matching feature.',
  url: toAbsoluteUrl('/en/tools/color-contrast-checker'),
  step: [
    { '@type': 'HowToStep', name: 'Choose the text color', text: 'Enter a color code (e.g., #333333) in HEX, RGB, or HSL format — or pick a color from the color picker.' },
    { '@type': 'HowToStep', name: 'Choose the background color', text: 'Enter the background color on which the text will be displayed — this can be a section, block, or page background color.' },
    { '@type': 'HowToStep', name: 'Read the result', text: 'The tool will show the contrast ratio and whether the colors meet AA/AAA requirements.' },
    { '@type': 'HowToStep', name: 'Adjust colors', text: 'If contrast is too low, the Match feature automatically suggests a text color variant that meets the selected WCAG threshold.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'What is a color contrast ratio?',
    answer:
      'A contrast ratio is a measure of the luminance difference between two colors. The scale ranges from 1:1 (no difference — e.g., white text on white background) to 21:1 (maximum difference — black text on white background). The higher the ratio, the easier it is to distinguish text from the background.',
    answerSchemaText: 'The contrast ratio measures luminance difference between two colors, ranging from 1:1 to 21:1.',
  },
  {
    question: 'What contrast is sufficient according to WCAG?',
    answer:
      'For normal text, the minimum is 4.5:1 (Level AA). For large text — headings from 18pt or bold text from 14pt — 3:1 is sufficient. For icons and UI components, 3:1 is also required. These thresholds ensure readability for most users, including those with impaired vision.',
    answerSchemaText: 'Normal text: 4.5:1 (AA). Large text: 3:1. Icons: 3:1.',
  },
  {
    question: 'Is color contrast important for color-blind users?',
    answer:
      "The checker tests luminance contrast, which matters for all users, including those with color blindness. However, color blindness is a color perception issue, not a luminance issue — so in addition to contrast, avoid problematic color pairs (e.g., red text on green background) and don't rely solely on color to convey information.",
    answerSchemaText: 'Yes, luminance contrast matters for all users. Also avoid problematic color pairs for color-blind users.',
  },
  {
    question: "Why doesn't my color meet the requirements even though I can see it fine?",
    answer:
      'Personal color perception depends on monitor settings, room lighting, and individual visual abilities. WCAG is based on an objective mathematical formula that accounts for various vision impairments. A color readable on one screen may be unreadable on another or for a different person.',
    answerSchemaText: 'Personal perception depends on monitor, lighting, and vision. WCAG uses an objective formula.',
  },
  {
    question: 'Do I need to meet AAA contrast level?',
    answer:
      'Not always. Level AA (4.5:1 for normal text) is the minimum required by accessibility regulations in the European Union. Level AAA (7:1) provides better readability but is harder to achieve. For critical content — warnings, safety instructions — it is worth aiming for AAA.',
    answerSchemaText: 'AA is the legal minimum. AAA is recommended for critical content.',
  },
  {
    question: 'What is the WCAG standard?',
    answer:
      'WCAG (Web Content Accessibility Guidelines) is an international set of web accessibility guidelines developed by the W3C organization. It defines, among other things, minimum color contrast values, heading structure, keyboard support, and other requirements that make websites accessible to people with various disabilities.',
    answerSchemaText: 'WCAG is an international set of web accessibility guidelines developed by W3C.',
  },
  {
    question: 'Where can I find color codes from my website?',
    answer:
      'In a browser (Chrome, Firefox, Edge) you can open developer tools (right-click → Inspect). In the Styles tab, you can see the colors used on the page. Alternatively, browser extensions like ColorZilla let you pick the color of any element without digging into code.',
    answerSchemaText: 'Use browser developer tools (Inspect → Styles) or extensions like ColorZilla.',
  },
  {
    question: 'Which color pairs on my site should I check first?',
    answer:
      'Most important: text on the main background, text on banners and colored sections, buttons (text color and button background relative to page background), links, and icons. Pay special attention to elements that appear on different backgrounds depending on the section.',
    answerSchemaText: 'Check text on main background, banners, buttons, links, and icons first.',
  },
];

export default function ColorContrastCheckerPage() {
  return (
    <>
      <Script id="ld-json-contrast-checker-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-contrast-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Color contrast and readability checker"
        description="Enter a text and background color, and the tool will show whether contrast is sufficient. Calculations are based on the international accessibility standard WCAG 2.1, which defines minimum contrast values for different content types."
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-tester-kontrastu-kolorow-wcag.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/color-contrast-checker', label: 'Color contrast checker' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <WcagContrastChecker />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Why does color readability matter?">
          <p className="text-mid">
            Readability is the luminance difference between the text color and the background color. The greater the difference, the easier it is to read the text. Too low contrast makes content hard
            to read — especially for people with vision impairments, older adults, or in difficult lighting conditions (e.g., on a phone in direct sunlight).
          </p>
          <p className="text-mid mt-3">
            According to the{' '}
            <a href="https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" target="_blank" rel="noopener noreferrer" className="underline">
              World Health Organization (WHO)
            </a>
            , approximately 2.2 billion people worldwide have some form of vision impairment. In addition, millions have color blindness (about 8% of men and 0.5% of women), and many more experience
            age-related vision decline.
          </p>
          <p className="text-mid mt-3">
            The tool calculates the contrast ratio using the formula specified in the{' '}
            <a href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html" target="_blank" rel="noopener noreferrer" className="underline">
              WCAG 2.1 (Web Content Accessibility Guidelines)
            </a>{' '}
            — international digital accessibility guidelines. The result allows an objective assessment of whether colors are readable enough, regardless of monitor settings or individual color
            perception.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to use the color contrast checker"
          description="Checking readability takes just a few seconds:"
          grid="four"
          items={[
            {
              icon: <RiPaletteLine className="h-6 w-6" />,
              title: '1. Enter the text color',
              description: 'Type a color code (e.g., #333333) in HEX, RGB, or HSL format — or pick a color from the color picker.',
            },
            {
              icon: <RiPaintBrushLine className="h-6 w-6" />,
              title: '2. Enter the background color',
              description: 'Enter the background color on which the text will be displayed — this can be a section, block, or full page background.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: '3. Read the result',
              description: 'The tool will calculate the contrast ratio and show whether the colors meet WCAG requirements for normal text, large text, and icons.',
            },
            {
              icon: <RiEqualizerLine className="h-6 w-6" />,
              title: '4. Adjust colors',
              description: 'If contrast is too low, the Match feature automatically suggests a color variant that meets the selected threshold.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="How to interpret the readability test results"
          demo={
            <div className="space-y-3">
              <div className="space-y-1">
                <p className="text-dark text-sm! font-medium uppercase">Contrast ratio</p>
                <p className="text-dark text-xl font-semibold">8.59:1</p>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Normal text</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (min. 4.5:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (min. 7:1)
                    </Badge>
                  </div>
                </div>
                <div className="rounded-lg border border-neutral-200 px-3 py-2" style={{ color: 'var(--black3)', backgroundColor: 'var(--white)' }}>
                  <p className="text-sm!">Sample normal text</p>
                </div>
              </div>
              <div className="space-y-2 rounded-lg border border-neutral-200 bg-white p-3">
                <div className="flex items-center justify-between">
                  <p className="text-dark text-sm! font-medium uppercase">Large text</p>
                  <div className="flex gap-1">
                    <Badge variant="success" size="sm">
                      AA (min. 3:1)
                    </Badge>
                    <Badge variant="success" size="sm">
                      AAA (min. 4.5:1)
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">After entering colors, the tool displays results in three sections:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Normal text</strong> — requires 4.5:1 contrast (AA) or 7:1 (AAA). Applies to text below 18pt (24px) or below 14pt bold.
            </li>
            <li>
              <strong>Large / bold text</strong> — requires 3:1 contrast (AA) or 4.5:1 (AAA). Applies to headings, buttons, and highlights.
            </li>
            <li>
              <strong>Icons</strong> — requires 3:1 contrast (AA). Applies to icons and graphical UI elements that convey information.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Green indicator</strong> means the requirement is met. <strong>Red indicator</strong> means contrast is too low and needs improvement.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="What do the readability test results mean?">
          <p className="text-mid mb-4">
            The tool shows the contrast ratio on a scale from 1:1 (no contrast) to 21:1 (maximum contrast — black on white). The result is compared against thresholds defined in the WCAG standard:
          </p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Normal text</strong> — requires at least 4.5:1 for Level AA (minimum standard) or 7:1 for Level AAA (enhanced standard). Applies to text under 18pt (24px) or under 14pt (18.5px)
              bold.
            </li>
            <li>
              <strong>Large / bold text</strong> — requires at least 3:1 for Level AA or 4.5:1 for Level AAA. Applies to text from 18pt (24px) or from 14pt (18.5px) bold — headings, buttons,
              highlights.
            </li>
            <li>
              <strong>Icons and UI elements</strong> — require at least 3:1 for Level AA. Applies to icons, buttons, form fields, and other interface elements that convey information.
            </li>
          </ul>
          <p className="text-mid mt-3">
            <strong>Level AA</strong> is the minimum required by digital accessibility regulations in many countries, including the{' '}
            <a href="https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016L2102" target="_blank" rel="noopener noreferrer" className="underline">
              EU Web Accessibility Directive
            </a>
            . <strong>Level AAA</strong> provides better readability but is not always practical to achieve for all elements.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Automatic color matching to WCAG requirements">
          <p className="text-mid mb-4">
            If contrast is too low, you don&apos;t need to search for the right color by trial and error. The <strong>Match</strong> feature automatically finds a text color variant that meets the
            selected contrast threshold.
          </p>
          <p className="text-mid mb-4">How matching works:</p>
          <ol className="text-mid list-decimal space-y-2 pl-5">
            <li>Select the matching target from the list — e.g., AA for normal text or AAA for large text.</li>
            <li>Click the Match button.</li>
            <li>The tool will search through lightness variants of the text color and suggest the closest one that meets the requirements.</li>
            <li>The suggested color can be copied to the clipboard or immediately set as the new text color.</li>
          </ol>
          <p className="text-mid mt-3">
            The algorithm preserves the hue and saturation of the original color, changing only the lightness. The suggested color stays consistent with the visual identity while meeting the
            accessibility standard.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionFeatureComparison
          title="What do AA and AAA levels mean in the WCAG standard?"
          plans={[
            { id: 'aa', name: 'Level AA (minimum)', highlighted: true },
            { id: 'aaa', name: 'Level AAA (enhanced)' },
          ]}
          features={[
            { name: 'Normal text — min. 4.5:1', values: { aa: true, aaa: true } },
            { name: 'Normal text — min. 7:1', values: { aa: false, aaa: true } },
            { name: 'Large / bold text — min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Large / bold text — min. 4.5:1', values: { aa: false, aaa: true } },
            { name: 'Icons and UI elements — min. 3:1', values: { aa: true, aaa: true } },
            { name: 'Legally required (EU directive)', values: { aa: true, aaa: false } },
            { name: 'Recommended for key content', values: { aa: true, aaa: true } },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Where should you check color readability?"
          description="Readability matters everywhere someone needs to read text or recognize a UI element:"
          grid="three"
          items={[
            {
              icon: <RiGlobalLine className="h-6 w-6" />,
              title: 'Websites',
              description: 'Text on pages, buttons, links, forms. Especially important for business sites where visitors have varying ages and visual abilities.',
            },
            { icon: <RiShoppingCartLine className="h-6 w-6" />, title: 'Online stores', description: 'Prices, Buy Now buttons, product information. Low readability can mean lost orders.' },
            {
              icon: <RiSlideshowLine className="h-6 w-6" />,
              title: 'Presentations',
              description: 'Slides displayed via projector often have weaker contrast than on a monitor. Check colors before presenting.',
            },
            { icon: <RiPrinterLine className="h-6 w-6" />, title: 'Posters and flyers', description: 'Printed materials viewed in various lighting conditions require high contrast.' },
            { icon: <RiSmartphoneLine className="h-6 w-6" />, title: 'Mobile apps', description: 'Phones are used in bright sunlight, at night, and by people of all ages.' },
            {
              icon: <RiRestaurantLine className="h-6 w-6" />,
              title: 'Restaurant menus',
              description: 'Often printed on colored paper or with decorative fonts — easy to end up with too low contrast.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Color readability for color-blind users">
          <p className="text-mid mb-4">
            Color blindness affects about 8% of men and 0.5% of women. People with color blindness may have difficulty distinguishing certain color pairs, even if the luminance contrast is sufficient.
          </p>
          <p className="text-mid mb-4">Most common types of color blindness:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Deuteranopia</strong> — difficulty distinguishing green and red (most common form)
            </li>
            <li>
              <strong>Protanopia</strong> — difficulty seeing red
            </li>
            <li>
              <strong>Tritanopia</strong> — difficulty seeing blue and yellow (rare)
            </li>
          </ul>
          <p className="text-mid mt-3">
            This tool checks luminance contrast, which is important for all users. However, when designing, it is also worth avoiding problematic color combinations (e.g., red text on a green
            background) and not relying solely on color to convey information — use shapes, icons, and text as well.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="What makes this contrast and readability checker special?"
          grid="two"
          items={[
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: 'Objective evaluation based on a mathematical formula',
              description: 'Contrast ratio is calculated using the WCAG formula — the result does not depend on monitor settings or individual color perception.',
            },
            {
              icon: <RiShieldCheckLine className="h-6 w-6" />,
              title: 'Compliance with international WCAG standard',
              description: 'Results match WCAG 2.1 requirements, which form the basis of digital accessibility regulations in the EU and many other countries.',
            },
            {
              icon: <RiMagicLine className="h-6 w-6" />,
              title: 'Automatic color matching to threshold',
              description: 'The Match feature finds a text color variant that meets the selected contrast threshold — preserves hue, changes only lightness.',
            },
            {
              icon: <RiStackLine className="h-6 w-6" />,
              title: 'Five color formats',
              description: 'Supported formats: HEX, RGB, RGBA, HSL, and HSLA. Color code can be pasted directly from Figma, Photoshop, or a CSS stylesheet.',
            },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Three content types in one test',
              description: 'A single check shows the result for normal text, large text (headings, buttons), and icons — no need to test each type separately.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels pageUrl={toAbsoluteUrl('/en/tools/color-contrast-checker')} title="Frequently asked questions about the color contrast checker" openByDefault={1} items={faqItems} />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other free tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
