import Wrapper from '../ui/Wrapper';
import AppLink from '../ui/Link';
import { RiHomeLine } from 'react-icons/ri';
import { BREADCRUMBS_UI } from '@/lib/i18n/locales';
import { JsonLd } from '@/components/seo/JsonLd';

import type { Crumb, BreadcrumbsProps } from '@/types/ui';
export type { Crumb, BreadcrumbsProps } from '@/types/ui';

const DEFAULT_SITE = 'https://www.arteonagency.pl';

function absoluteUrl(siteUrl: string, href: string) {
  return href.startsWith('http') ? href : `${siteUrl}${href}`;
}

export default function Breadcrumbs({ second, third, fourth, className = '', includeJsonLd = false, siteUrl = DEFAULT_SITE, size = 'default', locale = 'pl' }: BreadcrumbsProps) {
  const t = BREADCRUMBS_UI[locale];
  const items: Crumb[] = [{ href: '/', label: t.home }, second, third, ...(fourth ? [fourth] : [])];

  const jsonLd = includeJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((it, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: it.label,
          item: absoluteUrl(siteUrl, it.href),
        })),
      }
    : null;

  return (
    <Wrapper>
      <nav aria-label={t.ariaLabel} className={`${size === 'compact' ? 'flex items-center justify-center py-3' : 'py-6'} ${className}`}>
        <ol className="flex flex-wrap items-center gap-2 text-sm!">
          <li>
            <AppLink href="/" variant="default" display="inline" aria-label={t.home} className="shrink-0">
              <RiHomeLine className="text-medium text-primary-mid mt-2 h-4 w-4" />
            </AppLink>
          </li>
          {items.slice(1).map((it, idx) => {
            const isLast = idx === items.slice(1).length - 1;
            return (
              <li key={`${it.href}-${idx}`} className="!text-medium text-primary-mid flex items-center gap-2 text-sm!">
                <span aria-hidden="true">/</span>
                {isLast ? (
                  <span className="text-medium text-primary text-sm!" aria-current="page">
                    {it.label}
                  </span>
                ) : (
                  <AppLink href={it.href} variant="default" display="inline" className="!text-primary-mid text-sm!">
                    {it.label}
                  </AppLink>
                )}
              </li>
            );
          })}
        </ol>

        {includeJsonLd && jsonLd && <JsonLd schema={jsonLd} />}
      </nav>
    </Wrapper>
  );
}
