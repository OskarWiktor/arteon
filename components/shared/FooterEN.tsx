import Wrapper from '../ui/Wrapper';
import AppLink from '../ui/Link';
import Image from 'next/image';
import { LEGAL_LINKS_EN } from '@/components/shared/navigation-data/en';

const ui = {
  copyright: 'All rights reserved.',
  description: 'Free online tools for web developers, designers, and marketers.',
  companyDataLabel: 'Company info',
  toolsLabel: 'Tools',
  legalLabel: 'Legal documents',
} as const;

const toolsLinks = [
  { href: '/en/tools/meta-title-description-length-checker', label: 'Meta title & description checker' },
  { href: '/en/tools/color-contrast-checker', label: 'Color contrast checker' },
  { href: '/en/tools/image-color-extractor', label: 'Image color extractor' },
  { href: '/en/tools/color-palette-generator', label: 'Color palette generator' },
  { href: '/en/tools/jpg-png-to-webp-unlimited', label: 'JPG/PNG to WebP converter' },
  { href: '/en/tools/online-image-editor', label: 'Online image editor' },
  { href: '/en/tools/free-favicon-generator', label: 'Favicon generator' },
  { href: '/en/tools/free-email-signature-generator', label: 'Email signature generator' },
  { href: '/en/tools/free-qr-code-generator', label: 'QR code generator' },
  { href: '/en/tools/word-and-character-counter', label: 'Word & character counter' },
];

export default function FooterEN() {
  const t = ui;
  const midTools = Math.ceil(toolsLinks.length / 2);
  const toolsLeft = toolsLinks.slice(0, midTools);
  const toolsRight = toolsLinks.slice(midTools);

  return (
    <footer className="border-t border-neutral-200 bg-white py-4 md:py-7 lg:py-10" aria-label="Site footer">
      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:auto-rows-min lg:grid-cols-5">
          {/* 1.1 Company data + Logo */}
          <section aria-label={t.companyDataLabel} className="lg:col-start-1 lg:row-start-1">
            <div className="mb-4">
              <AppLink href="/en/tools">
                <Image src="/assets/arteon-logo.webp" width={140} height={50} alt="Arteon logo" />
              </AppLink>
            </div>
            <p className="text-dark text-base">{t.description}</p>
          </section>

          {/* 1.2 Tools (column 1) */}
          <nav aria-label={`${t.toolsLabel} (1)`} className="lg:col-start-2 lg:row-start-1">
            <h3 className="h6 mb-3">{t.toolsLabel}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {toolsLeft.map(({ href, label }) => (
                <li key={href}>
                  <AppLink href={href} className="text-left">
                    {label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 1.3 Tools (column 2) */}
          <nav aria-label={`${t.toolsLabel} (2)`} className="lg:col-start-3 lg:row-start-1">
            <h3 className="sr-only">{t.toolsLabel}</h3>
            <ul className="flex flex-col gap-2 text-sm lg:mt-9">
              {toolsRight.map(({ href, label }) => (
                <li key={href}>
                  <AppLink href={href} className="text-left">
                    {label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 1.4 Empty column (categories removed — not clickable) */}
          <div className="hidden lg:col-start-4 lg:row-start-1 lg:block" />

          {/* 1.5 Legal */}
          <nav aria-label={t.legalLabel} className="lg:col-start-5 lg:row-start-1">
            <h3 className="h6 mb-3">{t.legalLabel}</h3>
            <ul className="flex flex-col gap-2 text-sm">
              {LEGAL_LINKS_EN.map((link) => (
                <li key={link.key}>
                  <AppLink href={link.href} display="inline-block">
                    {link.label}
                  </AppLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="text-light mt-8 border-t border-neutral-200 pt-4">
          <div className="flex flex-col items-center justify-between gap-2 md:flex-row md:items-start">
            <span className="text-center text-sm md:text-left">
              &copy; <time dateTime={String(new Date().getFullYear())}>{new Date().getFullYear()}</time> Arteon. {t.copyright}
            </span>
            <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="mr-3 cursor-pointer text-sm font-normal">
              #MadeWithNext.js
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
}
