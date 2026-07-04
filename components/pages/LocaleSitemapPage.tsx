import Divider from '@/components/atoms/Divider';
import InlineLink from '@/components/atoms/InlineLink';
import { JsonLd } from '@/components/atoms/JsonLd';
import Wrapper from '@/components/atoms/Wrapper';
import SectionInfo from '@/components/organisms/sections/SectionInfo';
import {
  LOCALE_CONFIG,
  NAVIGATION_UI,
  getLegalLinks,
} from '@/lib/i18n/locales';
import { LOCALE_SITEMAP_META } from '@/lib/i18n/pages/localeSitemapMeta';
import { getToolsSections } from '@/lib/i18n/toolRegistry';
import type { Locale } from '@/types/locale';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

/**
 * HTML sitemap for a non-PL locale: every tool in that locale grouped by
 * category, plus its information pages. Unlike the tools index (which lists only
 * a subset), this is a complete, flat link hub — better internal linking and a
 * clear crawl path to every localized tool page.
 */
export default function LocaleSitemapPage({ locale }: { locale: Locale }) {
  const meta = LOCALE_SITEMAP_META[locale];
  const sections = getToolsSections(locale);
  const nav = NAVIGATION_UI[locale];
  const config = LOCALE_CONFIG[locale];

  const infoLinks = [
    { label: nav.toolsLabel, href: config.toolsIndexHref },
    { label: nav.aboutLabel, href: config.aboutHref },
    { label: nav.contactLabel, href: config.contactHref },
    ...getLegalLinks(locale).map(link => ({
      label: link.label,
      href: link.href,
    })),
  ].filter((link): link is { label: string; href: string } =>
    Boolean(link.href),
  );

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': toAbsoluteUrl(meta.path),
    name: meta.title,
    url: toAbsoluteUrl(meta.path),
    description: meta.description,
  };

  return (
    <>
      <Divider size='sm' />

      <Wrapper>
        <header>
          <h1>{meta.title}</h1>
          <p className='mt-2'>{meta.intro}</p>
        </header>

        <Divider size='sm' />

        <nav aria-label={meta.title}>
          {sections.map(section => (
            <div key={section.key}>
              <SectionInfo title={section.title}>
                <ul className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
                  {section.items.map(item => (
                    <li key={item.href}>
                      <InlineLink href={item.href}>{item.title}</InlineLink>
                    </li>
                  ))}
                </ul>
              </SectionInfo>

              <Divider line size='sm' />
            </div>
          ))}

          <SectionInfo title={meta.infoHeading}>
            <ul className='grid gap-2 sm:grid-cols-2 lg:grid-cols-3'>
              {infoLinks.map(link => (
                <li key={link.href}>
                  <InlineLink href={link.href} className='font-medium'>
                    {link.label}
                  </InlineLink>
                </li>
              ))}
            </ul>
          </SectionInfo>
        </nav>

        <Divider size='sm' />

        <JsonLd schema={jsonLd} id='schema-locale-sitemap' />
      </Wrapper>
    </>
  );
}
