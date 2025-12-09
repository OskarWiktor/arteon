'use client';

import Wrapper from '../ui/Wrapper';

const ui = {
  pl: {
    home: 'Strona główna',
    ariaLabel: 'okruszki',
  },
} as const;

type Crumb = { href: string; label: string };

export type BreadcrumbsProps = {
  second: Crumb;
  third: Crumb;
  fourth?: Crumb;
  className?: string;
  includeJsonLd?: boolean;
  siteUrl?: string;
};

const DEFAULT_SITE = 'https://www.arteonagency.pl';

function absoluteUrl(siteUrl: string, href: string) {
  return href.startsWith('http') ? href : `${siteUrl}${href}`;
}

export default function Breadcrumbs({ second, third, fourth, className = '', includeJsonLd = false, siteUrl = DEFAULT_SITE }: BreadcrumbsProps) {
  const t = ui.pl;
  const items: Crumb[] = [{ href: '/', label: t.home }, second, third, ...(fourth ? [fourth] : [])];

  const lastIndex = items.length - 1;

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
      <nav aria-label={t.ariaLabel} className={`py-6 ${className}`}>
        <ol className="flex flex-wrap gap-1 md:gap-2">
          {items.map((it, idx) => {
            const isLast = idx === lastIndex;
            return (
              <li key={`${it.href}-${idx}`} className="flex items-center gap-1 text-sm md:gap-2">
                {isLast ? (
                  <span aria-current="page" className="text-sm opacity-70">
                    {it.label}
                  </span>
                ) : (
                  <a href={it.href} className="inline-link text-sm">
                    {it.label}
                  </a>
                )}
                {!isLast && (
                  <span className="text-sm" aria-hidden="true">
                    /
                  </span>
                )}
              </li>
            );
          })}
        </ol>

        {includeJsonLd && jsonLd && (
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger -- JSON-LD structured data requires dangerouslySetInnerHTML
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        )}
      </nav>
    </Wrapper>
  );
}
