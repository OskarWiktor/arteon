import Script from 'next/script';
import HeroBanner from '@/components/sections/HeroBanner';
import Breadcrumbs from '@/components/sections/BreadCrumbs';
import MetaTitleDescriptionTool from '@/components/sections/tools/MetaTitleDescriptionTool';
import ToolsCarousel from '@/components/sections/tools/ToolsCarousel';
import FaqPanels from '@/components/ui/FaqPanels';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import SectionDemo from '@/components/ui/sections/SectionDemo';
import Badge from '@/components/ui/Badge';
import Wrapper from '@/components/ui/Wrapper';
import ToolEditorLayout from '@/components/ui/ToolEditorLayout';
import { toAbsoluteUrl, siteUrl } from '@/utils/absoluteUrl';
import type { Metadata } from 'next';
import AdSense from '@/components/ui/AdSense';
import {
  RiPencilLine,
  RiFileTextLine,
  RiEyeLine,
  RiToolsLine,
  RiRulerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiEditLine,
  RiMegaphoneLine,
  RiCodeLine,
  RiRuler2Line,
  RiCheckboxCircleLine,
  RiInfinityLine,
  RiUserLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free meta title and description length checker online — pixel width',
  description: 'Free online meta title and description length checker. Check character count, pixel width, and preview how your page looks in Google search results. No registration.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
    languages: { pl: toAbsoluteUrl('/narzedzia/licznik-dlugosci-meta-title-i-description'), en: toAbsoluteUrl('/en/tools/meta-title-description-length-checker') },
  },
  openGraph: {
    title: 'Free meta title and description length checker online — pixel width',
    description: 'Free online meta title and description length checker. Check character count, pixel width, and preview how your page looks in Google search results. No registration.',
    url: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Free meta title and description length checker online',
  alternateName: [
    'Meta title and description checker with Google preview',
    'Google snippet preview online',
    'Check SEO title length in pixels',
    'Meta tag length checking tool',
    'Google SERP preview tool',
    'How many characters in meta description',
    'Optimal title and description length',
    'SEO meta tag checker',
  ],
  url: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
  applicationCategory: 'BusinessApplication',
  applicationSubCategory: 'SEOTool',
  operatingSystem: 'Any',
  description: 'Free meta title and description length checker. Checks character count, word count, and pixel width. Shows a preview of how the title and description appear in Google search results.',
  featureList: [
    'Character counter for meta title',
    'Character counter for meta description',
    'Pixel width measurement (Google-compatible)',
    'Word counter for title and description',
    'Google search results preview',
    'Color-coded length evaluation (too short / optimal / too long)',
    'Truncation warning for title and description',
    'Optimal length recommendations',
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
  name: 'How to check meta title and description length',
  description:
    'Check the length of your meta title and description in pixels and characters. Learn how many characters a title (50–60) and description (120–160) should have and how to avoid truncation in Google.',
  url: toAbsoluteUrl('/en/tools/meta-title-description-length-checker'),
  totalTime: 'PT3M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Enter the meta title',
      text: 'Paste or type your page title into the Meta title field. The tool will automatically calculate the character count, word count, and pixel width.',
    },
    {
      '@type': 'HowToStep',
      name: 'Enter the meta description',
      text: 'Add the page description in the Meta description field. You will see length metrics and an evaluation of whether the description falls within the recommended range.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check the Google preview',
      text: 'See how the title and description look in a simulated Google search result. The preview automatically truncates text just as the search engine would.',
    },
    { '@type': 'HowToStep', name: 'Adjust based on tips', text: 'If the status shows Too short or Too long, adjust the text and observe changes in real time.' },
  ],
  publisher: { '@type': 'Organization', name: 'Arteon Agency', url: siteUrl },
};

const faqItems = [
  {
    question: 'Why does the tool show pixel width instead of just character count?',
    answer:
      'Different letters have different widths. The letter "i" takes much less space than "m" or "W". Google truncates titles and descriptions based on pixel width, not character count. This means text with many narrow letters can be longer than text with wide letters, even at the same character count.',
    answerSchemaText: 'Google truncates based on pixel width, not character count. Different letters have different widths.',
  },
  {
    question: 'Does Google always show my meta title and description?',
    answer:
      "Not always. Google may change the displayed title or description if it considers something else a better fit for the user's query. It often pulls snippets from the page content. Well-written meta tags increase the chance that Google will use them, but there is no 100% guarantee.",
    answerSchemaText: 'Not always. Google may change the displayed title or description to better match the query.',
  },
  {
    question: 'What is the optimal length for meta title and meta description?',
    answer:
      'Meta title should be about 50–60 characters (up to ~580 pixels wide). Meta description works best at 120–160 characters (up to ~920 pixels). These are approximate values — Google does not publish strict limits and may adjust them.',
    answerSchemaText: 'Meta title: 50–60 characters (~580px). Meta description: 120–160 characters (~920px). These are approximate values.',
  },
  {
    question: 'Does meta description affect page ranking in Google?',
    answer:
      'Meta description is not a direct ranking factor — Google does not use it to determine page position. However, a good description increases the click-through rate from search results, and higher CTR can indirectly affect rankings.',
    answerSchemaText: 'Meta description is not a direct ranking factor, but a good description can increase CTR and indirectly affect rankings.',
  },
  {
    question: 'What should I do if my title is too long?',
    answer:
      'Shorten the title while keeping the most important words at the beginning. Remove filler words (e.g., "best", "professional") and focus on specific value for the user. If you include a brand name, place it at the end after a separator.',
    answerSchemaText: 'Shorten the title, keep important words at the beginning, and move the brand name to the end.',
  },
];

export default function MetaTitleDescriptionPage() {
  return (
    <>
      <Script id="ld-json-meta-length-tool-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-meta-length-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Check your page title and description length in Google"
        description="Enter a title and description, and the tool will calculate character count, word count, pixel width, and show whether the length meets SEO best practices"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-dlugosci-meta-title-i-description.webp"
      />

      <Breadcrumbs
        second={{ href: '/en/tools', label: 'Tools' }}
        third={{ href: '/en/tools/meta-title-description-length-checker', label: 'Meta title & description checker' }}
        includeJsonLd
        locale="en"
      />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />
        <MetaTitleDescriptionTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="What are meta title and meta description?">
          <p className="text-mid">
            Meta title and meta description are two short texts that describe the content of a web page. They are not visible directly on the page but appear in Google search results as the title
            (blue link) and description (gray text below the title).
          </p>
          <p className="text-mid mt-3">
            Well-written meta tags work like an ad for your page in search results — they attract attention and increase the chance of a click. Poorly written or truncated tags can discourage clicks,
            even if the page itself is valuable.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to use the meta title and description checker"
          description="Checking meta tag length takes about a minute:"
          grid="four"
          items={[
            {
              icon: <RiPencilLine className="h-6 w-6" />,
              title: '1. Enter the page title',
              description:
                'Paste or type the meta title in the first text field. The tool will immediately show three metrics: character count, word count, and pixel width. A colored status will appear next to them.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Enter the page description',
              description:
                'Add the meta description in the second field. You will see the same metrics. The field is larger because descriptions are longer than titles — you can fit 2–3 short sentences.',
            },
            {
              icon: <RiEyeLine className="h-6 w-6" />,
              title: '3. Check the preview',
              description:
                'On the right side (desktop) or below (mobile) you will see a preview showing how the title and description look in Google search results. Text is automatically truncated as the search engine would.',
            },
            {
              icon: <RiToolsLine className="h-6 w-6" />,
              title: '4. Adjust based on tips',
              description: 'If the status shows Too short or Too long, adjust the text. Changes are visible instantly — you can experiment until you get optimal length and content.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="How many characters should meta title and description have?">
          <p className="text-mid mb-4">Google truncates titles and descriptions that are too long. Below are recommended ranges that reduce the risk of text being cut off in search results.</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Element</th>
                  <th className="py-2 pr-4 font-semibold">Characters</th>
                  <th className="py-2 pr-4 font-semibold">Pixels</th>
                  <th className="py-2 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4 font-medium">Meta title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 characters</td>
                  <td className="py-2 pr-4 whitespace-nowrap">up to ~580 px</td>
                  <td className="text-primary-light0 py-2 text-sm">Put the most important words at the beginning. Brand name at the end.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 font-medium">Meta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">120–160 characters</td>
                  <td className="py-2 pr-4 whitespace-nowrap">up to ~920 px</td>
                  <td className="text-primary-light0 py-2 text-sm">You can fit 2–3 short sentences. End with a call to action.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-mid mt-4 text-sm">These are approximate values — Google does not publish strict limits and may adjust them depending on device and query context.</p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionDemo
          title="How to interpret the results"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta title</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Characters: <strong>52</strong>
                  </span>
                  <span className="text-mid">
                    Words: <strong>7</strong>
                  </span>
                  <span className="text-mid">
                    Pixels: <strong>456px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Good length
                </Badge>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark mb-2 text-sm! font-medium">Meta description</p>
                <div className="flex flex-wrap gap-2 text-sm!">
                  <span className="text-mid">
                    Characters: <strong>142</strong>
                  </span>
                  <span className="text-mid">
                    Words: <strong>21</strong>
                  </span>
                  <span className="text-mid">
                    Pixels: <strong>812px</strong>
                  </span>
                </div>
                <Badge variant="success" size="sm" className="mt-2">
                  Good length
                </Badge>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">The tool shows three metrics for each field along with a color-coded length evaluation:</p>

          <h3 className="h5 mt-6 mb-2">Metrics</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>Characters</strong> — total character count (including spaces). Easy to understand but less precise than pixels.
            </li>
            <li>
              <strong>Words</strong> — word count. Useful for a quick assessment of length.
            </li>
            <li>
              <strong>Width (px)</strong> — text width in pixels. This is the value Google actually uses when truncating.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Evaluation statuses</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Good length</strong> (green) — text is within the recommended range. Google should display it in full.
            </li>
            <li>
              <strong className="text-warning-text">Too short</strong> (yellow) — text is very short. You have room for more information that could encourage clicks.
            </li>
            <li>
              <strong className="text-error-text">Too long</strong> (red) — text exceeds the recommended range. Google will likely truncate it. Consider shortening.
            </li>
            <li>
              <strong className="text-light">No data</strong> (gray) — the field is empty. Enter text to see the analysis.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">Recommended ranges</h3>
          <p className="text-mid">
            <strong>Meta title:</strong> 35–65 characters or 350–580 pixels wide. Put the most important words at the beginning.
          </p>
          <p className="text-mid mt-2">
            <strong>Meta description:</strong> 100–165 characters or 430–920 pixels wide. You can fit 2–3 short sentences.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionDemo
          title="Why pixel width matters more than character count"
          demo={
            <div className="space-y-3">
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">iiiiiiiiiiiiiiii (16 characters)</p>
                <div className="bg-success-icon mt-1 h-3 w-1/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~64px wide</p>
              </div>
              <div className="rounded-lg border border-neutral-200 bg-white p-3">
                <p className="text-dark text-sm! font-medium">WWWWWWWWWWWWWWWW (16 characters)</p>
                <div className="bg-error-icon mt-1 h-3 w-3/4 rounded-full" />
                <p className="text-light mt-1 text-xs!">~256px wide</p>
              </div>
            </div>
          }
        >
          <p className="text-mid">
            Different letters have different widths. Compare &quot;iiii&quot; and &quot;WWWW&quot; — both have 4 characters, but the visual width is completely different. Google measures text width in
            pixels, not characters.
          </p>
          <p className="text-mid mt-3">
            This means a title with many narrow letters (i, l, t, f) can be longer than a title with wide letters (W, M, O), despite the same character count. The tool shows both values: character
            count (easier to grasp) and pixel width (more accurate for Google).
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="Snippet preview — what does it show?">
          <p className="text-mid">
            The snippet preview simulates how the title and description of your page look in Google search results. It is an approximate visualization — the actual appearance may vary slightly
            depending on device and browser.
          </p>

          <h3 className="h5 mt-6 mb-2">Preview elements</h3>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong>URL</strong> — the page address displayed above the title. You can enter it in the optional field to make the preview more realistic.
            </li>
            <li>
              <strong>Title</strong> — the blue heading. If it is too long, the tool automatically truncates it and adds an ellipsis.
            </li>
            <li>
              <strong>Description</strong> — the gray text below the title. Also truncated if it exceeds the limit.
            </li>
          </ul>

          <h3 className="h5 mt-6 mb-2">What the preview does not show</h3>
          <p className="text-mid">
            The preview does not include all elements that Google may add to a result: dates, star ratings, sitelinks, or rich snippets. It is a simplified version focused on text length.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Common problems and solutions"
          grid="two"
          items={[
            {
              icon: <RiRulerLine className="h-6 w-6" />,
              title: 'Title is too long',
              description:
                'Shorten the title while keeping the most important words at the beginning. Remove adjectives like "best" or "professional" — they rarely add value. Place the brand name at the end after a separator.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: 'Description is too short',
              description: 'Add more information: what the user will find on the page, what benefit they will get, what sets the offer apart. End with a call to action.',
            },
            {
              icon: <RiRuler2Line className="h-6 w-6" />,
              title: 'Pixel width is different than expected',
              description: 'The tool measures width using a standard font similar to what Google uses. The result may vary slightly depending on the browser.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Who is the meta tag checker for?"
          description="The meta tag checker is useful for anyone creating web content:"
          grid="two"
          items={[
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'Website and store owners',
              description: 'Check whether titles and descriptions are truncated in Google results before publishing a new page or product.',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'SEO specialists',
              description: 'Test different title and description variants, check the search results preview, and verify compliance with guidelines.',
            },
            { icon: <RiEditLine className="h-6 w-6" />, title: 'Copywriters', description: 'Write titles and descriptions that fit within limits and encourage clicks.' },
            { icon: <RiMegaphoneLine className="h-6 w-6" />, title: 'Marketers', description: 'Create meta tags for campaigns and landing pages, optimizing click-through rate in organic results.' },
            { icon: <RiCodeLine className="h-6 w-6" />, title: 'Developers', description: 'Verify meta tags before deploying a page to production.' },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What makes this meta title and description checker special?"
          grid="two"
          items={[
            { icon: <RiRuler2Line className="h-6 w-6" />, title: 'Pixel measurement', description: "We don't just count characters — we measure actual text width the way Google does." },
            { icon: <RiEyeLine className="h-6 w-6" />, title: 'Google preview', description: 'See how the title and description look in search results before publishing your page.' },
            { icon: <RiCheckboxCircleLine className="h-6 w-6" />, title: 'Color-coded evaluation', description: 'Instantly know whether the text is too short, optimal, or too long.' },
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Pixel and character count together',
              description: 'The tool shows both values at once — you can compare whether the title fits within both the character and pixel limits.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Title and description in one view',
              description: 'Check both meta title and description simultaneously, without switching between tabs.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels
          pageUrl={toAbsoluteUrl('/en/tools/meta-title-description-length-checker')}
          title="Frequently asked questions about the meta title and description checker"
          openByDefault={1}
          items={faqItems}
        />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
