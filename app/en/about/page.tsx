import HeroBanner from '@/components/sections/HeroBanner';
import CTABanner from '@/components/sections/CTABanner';
import Gap from '@/components/ui/Gap';
import SectionInfo from '@/components/ui/sections/SectionInfo';
import SectionSteps from '@/components/ui/sections/SectionSteps';
import Wrapper from '@/components/ui/Wrapper';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';
import { RiLockLine, RiInfinityFill, RiToolsFill, RiRocketLine, RiImageEditLine, RiSearchLine, RiMailLine, RiPaletteLine, RiQrCodeLine } from 'react-icons/ri';

export const metadata = {
  title: 'About us – Free online tools - Arteon',
  description: 'Arteon builds free online tools for business owners, web creators, and anyone working online. No registration, no limits, no file uploads to servers.',
  alternates: {
    canonical: toAbsoluteUrl('/en/about'),
    languages: {
      en: toAbsoluteUrl('/en/about'),
      de: toAbsoluteUrl('/de/ueber-uns'),
      es: toAbsoluteUrl('/es/sobre-nosotros'),
      fr: toAbsoluteUrl('/fr/a-propos'),
    },
  },
  openGraph: {
    title: 'About us – Free online tools - Arteon',
    description: 'Arteon builds free online tools for business owners, web creators, and anyone working online. No registration, no limits, no file uploads to servers.',
    url: toAbsoluteUrl('/en/about'),
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <>
      <HeroBanner title="About us" description="Free online tools for business owners, designers, developers, and everyone working online" backgroundImage="/assets/arteon-logo-on-mockup.webp" overlay="black" variant="center" />

      <Wrapper as="article" itemScope itemType="https://schema.org/AboutPage">
        <Gap size="sm" />

        <SectionInfo title="Who we are">
          <p>
            Arteon is a Polish creative agency. Beyond our commercial work, we build and maintain a growing collection of free online tools designed for business owners, website creators, designers,
            marketers, and anyone who works with digital content.
          </p>
          <p className="mt-2">
            Every tool we create solves a specific, everyday problem: converting images, checking color contrast, generating favicons, creating QR codes, and more. Our goal is to build a comprehensive
            toolkit where you can find everything you need in one place — without switching between dozens of different websites.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionSteps
          title="Why we offer free tools"
          grid="two"
          items={[
            {
              title: 'No registration, no limits',
              icon: <RiInfinityFill className="text-primary h-6 w-6" />,
              description: <p>Every tool works instantly in your browser. No account required, no login, no payment.</p>,
            },
            {
              title: 'Privacy first',
              icon: <RiLockLine className="text-primary h-6 w-6" />,
              description: <p>Your files never leave your device. All processing happens locally in your browser — we do not send your data to any server.</p>,
            },
            {
              title: 'Built from real needs',
              icon: <RiToolsFill className="text-primary h-6 w-6" />,
              description: <p>Each tool was born from a real problem we encountered while working on client projects. If we needed it, chances are you do too.</p>,
            },
            {
              title: 'Funded by ads, free for you',
              icon: <RiRocketLine className="text-primary h-6 w-6" />,
              description: (
                <p>
                  We use Google AdSense banners to cover the costs of development and hosting. Thanks to ad revenue, we can keep all tools free and continue building new ones.
                </p>
              ),
            },
          ]}
        />

        <Gap variant="line" />

        <SectionSteps
          title="Our tools"
          grid="three"
          items={[
            {
              title: 'Images & favicons',
              icon: <RiImageEditLine className="text-primary h-6 w-6" />,
              description: <p>WebP converter, online image editor, and favicon generator. 3 tools for everyday image work.</p>,
            },
            {
              title: 'Meta & SEO',
              icon: <RiSearchLine className="text-primary h-6 w-6" />,
              description: <p>Meta title and description checker plus a word and character counter to evaluate text length.</p>,
            },
            {
              title: 'Email & communication',
              icon: <RiMailLine className="text-primary h-6 w-6" />,
              description: <p>HTML email signature generator with ready code for Gmail and Outlook.</p>,
            },
            {
              title: 'Colors & accessibility',
              icon: <RiPaletteLine className="text-primary h-6 w-6" />,
              description: <p>WCAG contrast checker, image color extractor, and color palette generator. 3 tools for working with color.</p>,
            },
            {
              title: 'Print & materials',
              icon: <RiQrCodeLine className="text-primary h-6 w-6" />,
              description: <p>QR code generator for websites, vCards, menus, and flyers. Export to PNG and SVG.</p>,
            },
          ]}
        />

        <Gap variant="line" />

        <SectionInfo title="What's next">
          <p>
            We are actively working on expanding the toolkit. New tools are added regularly based on user feedback and our own experience. The goal is a single platform where business owners, designers,
            and developers have access to every essential tool — all in one place, all for free.
          </p>
        </SectionInfo>

        <Gap variant="line" />

        <SectionInfo title="Privacy and security">
          <p>
            We respect your privacy. Files you upload to our tools are processed exclusively in your browser and are never sent to any server. We use analytics (Google Analytics 4) and advertising
            (Google AdSense) only after you give consent via the cookie banner. Full details are available in our{' '}
            <a href="/en/privacy-policy" className="inline-link">
              Privacy Policy
            </a>
            .
          </p>
        </SectionInfo>

        <Gap size="sm" />
      </Wrapper>

      <CTABanner
        title="Try our tools"
        description="10 free online tools — no registration, no limits, no file uploads to servers"
        btnOne="Go to tools"
        btnOneLink="/en/tools"
        btnTwo="Contact"
        btnTwoLink="/en/contact"
        backgroundImage="/assets/arteon-logo-on-mockup.webp"
        overlay="black"
      />
    </>
  );
}
