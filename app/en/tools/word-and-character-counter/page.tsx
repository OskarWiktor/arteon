import Breadcrumbs from '@/components/sections/BreadCrumbs';
import HeroBanner from '@/components/sections/HeroBanner';
import WordCountTool from '@/components/sections/tools/WordCountTool';
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
import Script from 'next/script';
import AdSense from '@/components/ui/AdSense';
import {
  RiListCheck2,
  RiFileTextLine,
  RiBarChartLine,
  RiFileCopyLine,
  RiText,
  RiSpaceShipLine,
  RiParagraph,
  RiTimeLine,
  RiHashtag,
  RiEditLine,
  RiBloggerLine,
  RiShoppingBagLine,
  RiSearchLine,
  RiGraduationCapLine,
  RiTranslate2,
  RiInfinityLine,
  RiCheckboxCircleLine,
  RiUserLine,
  RiTimerLine,
} from 'react-icons/ri';

export const metadata: Metadata = {
  title: 'Free word and character counter online — check text length',
  description:
    'Free online word and character counter. Count words, characters, paragraphs, and reading time. Check optimal text length for SEO — blog post, product description, service page. No registration.',
  alternates: {
    canonical: toAbsoluteUrl('/en/tools/word-and-character-counter'),
    languages: { pl: toAbsoluteUrl('/narzedzia/licznik-slow-i-znakow'), en: toAbsoluteUrl('/en/tools/word-and-character-counter') },
  },
  openGraph: {
    title: 'Free word and character counter online — check text length',
    description:
      'Free online word and character counter. Count words, characters, paragraphs, and reading time. Check optimal text length for SEO — blog post, product description, service page. No registration.',
    url: toAbsoluteUrl('/en/tools/word-and-character-counter'),
    type: 'website',
    images: [{ url: toAbsoluteUrl('/assets/tools/narzedzia-licznik-slow-i-znakow.webp'), width: 1200, height: 630 }],
  },
};

const schema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Free word and character counter online',
  alternateName: [
    'Word counter with text length evaluation',
    'Online character counter',
    'Word counting tool for copywriters',
    'Reading time calculator',
    'Online word counter',
    'Check how many words a text has',
    'Word counter for SEO',
    'Optimal text length for a blog post',
  ],
  url: toAbsoluteUrl('/en/tools/word-and-character-counter'),
  applicationCategory: 'UtilitiesApplication',
  applicationSubCategory: 'TextApplication',
  operatingSystem: 'Any',
  description:
    'Free word and character counter. Checks word count, characters, paragraphs, and estimated reading time. Evaluates text length for different page types: product description, service page, homepage, landing page, blog post, guide.',
  inLanguage: 'en',
  isAccessibleForFree: true,
  featureList: [
    'Word count',
    'Character count with and without spaces',
    'Paragraph count',
    'Estimated reading time',
    'Text length evaluation for different page types',
    'Recommended ranges for: product description, service page, homepage, landing page, blog post, guide',
    'Copy report to clipboard',
  ],
  offers: {
    '@type': 'Offer',
    price: 0,
    priceCurrency: 'USD',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to use the word and character counter',
  description: 'Check the length of your text and evaluate whether it is appropriate for a specific page type. Learn how many words a product description, service page, blog post, or guide should have.',
  url: toAbsoluteUrl('/en/tools/word-and-character-counter'),
  totalTime: 'PT2M',
  step: [
    {
      '@type': 'HowToStep',
      name: 'Select a page type',
      text: 'Choose from the dropdown what type of page you are writing for. Each type has different recommended word count ranges.',
    },
    {
      '@type': 'HowToStep',
      name: 'Paste your text',
      text: 'Paste or type text into the text field. The tool will automatically count words, characters (with and without spaces), paragraphs, and estimate reading time.',
    },
    {
      '@type': 'HowToStep',
      name: 'Check the evaluation',
      text: 'Look at the colored progress bar and status. Green means good length, yellow means too short, red means too long.',
    },
    {
      '@type': 'HowToStep',
      name: 'Copy the report',
      text: 'The Copy Report button copies a summary with all statistics and the length evaluation to your clipboard.',
    },
  ],
  publisher: {
    '@type': 'Organization',
    name: 'Arteon Agency',
    url: siteUrl,
  },
};

const faqItems = [
  {
    question: 'Does text length affect Google rankings?',
    answer:
      "Text length by itself is not a ranking factor. Google evaluates whether the content answers the user's question and is valuable to them. Shorter text that comprehensively answers a question can rank well — what matters is value for the reader. The ranges in this tool are based on analyses of content that ranks well in search results.",
    answerSchemaText: 'Text length is not a direct ranking factor. Google evaluates the value of content for the user.',
  },
  {
    question: 'Why are the word ranges so broad?',
    answer:
      "The same page type may require different lengths depending on topic complexity. A simple product description (e.g., a mug) is 80–150 words — just material, capacity, and use case. A laptop description is 300–400 words because buyers ask about the processor, memory, screen, and battery. Similarly with services: a local plumber's page is 500–700 words, while a comprehensive B2B service implementation page with process steps and FAQ is 1,200–1,500 words.",
    answerSchemaText: 'The difference comes from topic complexity — a simple product needs fewer words than a complex one.',
  },
  {
    question: 'How should I interpret "too short" or "too long"?',
    answer:
      'The evaluation shows where your text falls relative to typical content of that type. If the text is marked "too short" but answers all of the reader\'s questions — the length is fine. If it is "too long" but every paragraph adds new information — the length is justified.',
    answerSchemaText: "The evaluation shows where the text falls relative to typical content. If the text answers the reader's questions, the length is appropriate.",
  },
  {
    question: 'How does the reading time calculator work?',
    answer:
      'The tool divides the word count by 200 — the average reading speed for typical text. Technical or demanding text (e.g., documentation, terms of service) will be read slower. A light lifestyle article — faster. The result is an approximate value that helps estimate how long a reader will spend with the text.',
    answerSchemaText: 'The tool assumes an average reading speed of 200 words per minute. This is an approximate value for typical text.',
  },
  {
    question: 'Where do the recommended ranges come from?',
    answer:
      'The ranges are based on analyses of content that ranks well in search engines and on content creation best practices. They are intentionally broad because the same page type may require different lengths depending on industry, topic complexity, and reader needs. The ranges serve as a starting point for evaluating whether text falls within a typical range for a specific page type.',
    answerSchemaText: 'The ranges are based on SEO analyses and content creation best practices.',
  },
  {
    question: 'Can I copy the report with statistics?',
    answer:
      'Yes. Below the statistics you will find a Copy Report button — it copies a summary with word count, character count, paragraphs, reading time, and length evaluation to your clipboard. You can paste it into a document or send it to collaborators.',
    answerSchemaText: 'Yes. Click the Copy Report button below the statistics. A summary with all metrics and evaluation will be copied to your clipboard.',
  },
];

export default function WordCounterPage() {
  return (
    <>
      <Script id="ld-json-word-count-tool-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Script id="ld-json-word-count-howto-en" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />

      <HeroBanner
        title="Word and character counter with length evaluation"
        description="Paste your text, select a page type, and the tool will show word count, character count, paragraphs, and evaluate whether the length is appropriate for that type of content"
        overlay="black"
        backgroundImage="/assets/tools/narzedzia-licznik-slow-i-znakow.webp"
      />

      <Breadcrumbs second={{ href: '/en/tools', label: 'Tools' }} third={{ href: '/en/tools/word-and-character-counter', label: 'Word and character counter' }} includeJsonLd locale="en" />

      <ToolEditorLayout>
        <AdSense variant="tool-banner" className="my-3" />

        <WordCountTool />
      </ToolEditorLayout>

      <Wrapper>
        <Gap variant="line" />

        <SectionInfo title="Free word counter online — count and evaluate text length">
          <p className="text-mid">
            This word counting tool lets you quickly check the length of any text. Paste your content and the counter will tally words, characters, and paragraphs. You will also see how many minutes
            it takes to read and whether the length fits the page type you select.
          </p>
          <p className="text-mid mt-3">
            Every page type has a different purpose — a product description answers buyer questions, a blog post covers a topic in depth, and a service page explains what the client will receive. The
            counter shows ranges for each of these types based on analyses of content that ranks well.
          </p>
        </SectionInfo>

        <Gap size="sm" />

        <SectionSteps
          title="How to use the word and character counter"
          description="Checking text length takes less than a minute:"
          grid="four"
          items={[
            {
              icon: <RiListCheck2 className="h-6 w-6" />,
              title: '1. Select page type',
              description: 'Choose from the dropdown what type of page you are writing for. Each type has different recommended minimum and maximum word counts.',
            },
            {
              icon: <RiFileTextLine className="h-6 w-6" />,
              title: '2. Paste your text',
              description: 'Paste or type text into the large field on the right. The tool will immediately count words, characters (with and without spaces), paragraphs, and estimate reading time.',
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: '3. Check the evaluation',
              description: 'Look at the colored progress bar and status. Green means good length, yellow means too short, red means too long. Below you will find a helpful tip.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: '4. Copy the report',
              description: 'The Copy Report button copies a summary with word count, character count, paragraphs, reading time, and length evaluation to your clipboard.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="What the counter measures — words, characters, reading time"
          description="The counter tracks five key metrics:"
          grid="two"
          items={[
            {
              icon: <RiText className="h-6 w-6" />,
              title: 'Words',
              description: 'Total word count. This is the primary indicator of text length.',
            },
            {
              icon: <RiSpaceShipLine className="h-6 w-6" />,
              title: 'Characters (with spaces)',
              description: 'All characters including spaces. Useful when a CMS has a character limit (e.g., marketplace listings).',
            },
            {
              icon: <RiHashtag className="h-6 w-6" />,
              title: 'Characters (without spaces)',
              description: 'Only letters, digits, and punctuation. Sometimes required by print shops or for translation billing.',
            },
            {
              icon: <RiParagraph className="h-6 w-6" />,
              title: 'Paragraphs',
              description: 'How many text blocks separated by blank lines you have. Helps assess whether the text is well structured.',
            },
            {
              icon: <RiTimeLine className="h-6 w-6" />,
              title: 'Reading time',
              description: 'The reading time calculator shows how many minutes it takes to read the text at an average speed of 200 words per minute.',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionDemo
          title="How to interpret the results"
          subtitle="Evaluation statuses"
          demo={
            <div className="space-y-3">
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="success" size="sm">
                  Good length
                </Badge>
                <span className="text-mid text-sm!">Text is within range</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="warning" size="sm">
                  Below range
                </Badge>
                <span className="text-mid text-sm!">Text is shorter than typical</span>
              </div>
              <div className="flex items-center gap-3 rounded-lg border border-neutral-200 bg-white p-3">
                <Badge variant="error" size="sm">
                  Above range
                </Badge>
                <span className="text-mid text-sm!">Text is longer than typical</span>
              </div>
              <div className="mt-2 rounded-lg bg-neutral-100 p-3">
                <div className="mb-1 flex items-center justify-between text-sm!">
                  <span className="text-dark font-medium">Progress</span>
                  <span className="text-mid">1200 / 1200-3000</span>
                </div>
                <div className="h-2 w-full rounded-full bg-neutral-200">
                  <div className="bg-success-icon h-2 w-2/5 rounded-full" />
                </div>
              </div>
            </div>
          }
        >
          <p className="text-mid mb-4">The colored progress bar and status help you quickly assess text length:</p>
          <ul className="text-mid list-disc space-y-2 pl-5">
            <li>
              <strong className="text-success-text">Good length</strong> (green) — the text falls within the approximate range for the selected page type.
            </li>
            <li>
              <strong className="text-warning-text">Below range</strong> (yellow) — the text is shorter than typical for this page type. If it answers all of the reader&apos;s questions, the length
              may be fine.
            </li>
            <li>
              <strong className="text-error-text">Above range</strong> (red) — the text is longer than typical. If every paragraph adds new information, the length is justified.
            </li>
          </ul>
          <p className="text-mid mt-4">
            The ranges are based on analyses of content that ranks well in search engines. If the text answers the reader&apos;s questions, the length is appropriate regardless of the counter result.
          </p>
        </SectionDemo>

        <Gap variant="line" />

        <SectionInfo title="How many words should a text have — optimal length for SEO">
          <p className="text-mid mb-4">
            The ranges below are based on analyses of content that ranks well in search engines. Text length itself does not affect Google rankings — what matters is whether the content answers the
            reader&apos;s questions.
          </p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Page type</th>
                  <th className="py-2 pr-4 font-semibold">Range</th>
                  <th className="py-2 font-semibold">When shorter, when longer?</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Product description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">80–400 words</td>
                  <td className="text-primary-light0 py-2 text-sm">
                    Simple product (e.g., a mug) — 80–150 words. Complex equipment (e.g., a laptop) — 300–400 words, because buyers have more questions.
                  </td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Service page</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500–1500 words</td>
                  <td className="text-primary-light0 py-2 text-sm">Local service (e.g., plumber) — 500–700 words. B2B service with process and FAQ — 1,200–1,500 words.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Homepage</td>
                  <td className="py-2 pr-4 whitespace-nowrap">400–1000 words</td>
                  <td className="text-primary-light0 py-2 text-sm">The homepage conveys the main value and guides visitors further — the text supports navigation, not to replace subpages.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Landing page</td>
                  <td className="py-2 pr-4 whitespace-nowrap">600–2500 words</td>
                  <td className="text-primary-light0 py-2 text-sm">Simple offer — 600–1,000 words. Offer requiring explanation of process, variants, and objection handling — 1,500–2,500 words.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Blog post</td>
                  <td className="py-2 pr-4 whitespace-nowrap">1200–3000 words</td>
                  <td className="text-primary-light0 py-2 text-sm">Answer to a simple question — 1,200–1,800 words. Complex topic with many aspects — 2,000–3,000 words.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">Guide</td>
                  <td className="py-2 pr-4 whitespace-nowrap">2500–6000 words</td>
                  <td className="text-primary-light0 py-2 text-sm">Narrow topic — 2,500–3,500 words. Broad topic with many steps and examples — 4,000–6,000 words.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Who is the online word counter for?"
          description="A word counting tool for copywriters and beyond — here is who uses the counter most:"
          grid="three"
          items={[
            {
              icon: <RiEditLine className="h-6 w-6" />,
              title: 'Copywriters and content creators',
              description: 'Check whether the text falls within the recommended range for a specific page type. The SEO word counter helps evaluate whether an article is developed enough.',
            },
            {
              icon: <RiBloggerLine className="h-6 w-6" />,
              title: 'Bloggers',
              description: 'Monitor post length to keep publications consistent. Check reading time before publishing.',
            },
            {
              icon: <RiShoppingBagLine className="h-6 w-6" />,
              title: 'E-commerce store owners',
              description: 'Verify product descriptions against character limits on selling platforms (Amazon, eBay, Etsy).',
            },
            {
              icon: <RiSearchLine className="h-6 w-6" />,
              title: 'SEO specialists',
              description: 'Evaluate whether page content has an optimal length compared to competitors. Analyze the word-to-topic ratio.',
            },
            {
              icon: <RiGraduationCapLine className="h-6 w-6" />,
              title: 'Students and academics',
              description: 'Check whether a paper meets the required word or character limit.',
            },
            {
              icon: <RiTranslate2 className="h-6 w-6" />,
              title: 'Translators',
              description: 'Count characters without spaces for translation quotes (a standard billing unit).',
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="Character limits on popular platforms">
          <p className="text-mid mb-4">The character counter is useful when creating content for platforms with length restrictions:</p>
          <div className="overflow-x-auto">
            <table className="text-mid w-full text-left">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="py-2 pr-4 font-semibold">Platform / Element</th>
                  <th className="py-2 pr-4 font-semibold">Character limit</th>
                  <th className="py-2 font-semibold">Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google — meta title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">50–60 characters</td>
                  <td className="text-primary-light0 py-2 text-sm">Longer titles are truncated in search results.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Google — meta description</td>
                  <td className="py-2 pr-4 whitespace-nowrap">150–160 characters</td>
                  <td className="text-primary-light0 py-2 text-sm">The description visible below the link in search results.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon — product title</td>
                  <td className="py-2 pr-4 whitespace-nowrap">200 characters</td>
                  <td className="text-primary-light0 py-2 text-sm">Short, specific title with the most important keywords.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">Amazon — bullet points</td>
                  <td className="py-2 pr-4 whitespace-nowrap">500 characters each</td>
                  <td className="text-primary-light0 py-2 text-sm">Up to 5 bullet points describing key product features.</td>
                </tr>
                <tr className="border-b border-neutral-100">
                  <td className="py-2 pr-4">X (Twitter) — post</td>
                  <td className="py-2 pr-4 whitespace-nowrap">280 characters</td>
                  <td className="text-primary-light0 py-2 text-sm">Standard limit for regular users.</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4">LinkedIn — post</td>
                  <td className="py-2 pr-4 whitespace-nowrap">3,000 characters</td>
                  <td className="text-primary-light0 py-2 text-sm">After ~210 characters a "see more" link appears.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="What makes this word and character counter special?"
          grid="two"
          items={[
            {
              icon: <RiInfinityLine className="h-6 w-6" />,
              title: 'Six page types with recommended ranges',
              description: 'Product description, service page, homepage, landing page, blog post, and guide — each type has its own ranges based on analyses.',
            },
            {
              icon: <RiUserLine className="h-6 w-6" />,
              title: 'Local processing in the browser',
              description: 'Your text is never sent to any server — all analysis happens locally on your device.',
            },
            {
              icon: <RiCheckboxCircleLine className="h-6 w-6" />,
              title: 'Text length evaluation',
              description: "You don't just count words — you get information on whether the length is appropriate for the selected page type.",
            },
            {
              icon: <RiBarChartLine className="h-6 w-6" />,
              title: 'SEO-based ranges',
              description: 'Recommended lengths are based on analyses of content that ranks well in search engines.',
            },
            {
              icon: <RiTimerLine className="h-6 w-6" />,
              title: 'Reading time',
              description: 'You immediately know how many minutes it will take readers to go through the text.',
            },
            {
              icon: <RiFileCopyLine className="h-6 w-6" />,
              title: 'Copy report',
              description: 'The Copy Report button copies a summary with all statistics and the length evaluation to your clipboard.',
            },
          ]}
        />

        <Gap variant="line" />

        <FaqPanels title="Frequently asked questions about the word and character counter" openByDefault={1} items={faqItems} pageUrl={toAbsoluteUrl('/en/tools/word-and-character-counter')} />

        <Gap variant="line" />

        <ToolsCarousel title="Explore other tools" />

        <Gap size="sm" />
      </Wrapper>
    </>
  );
}
