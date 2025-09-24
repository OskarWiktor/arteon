'use client';

import Wrapper from '@/components/ui/Wrapper';

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
  const items: Crumb[] = [{ href: '/', label: 'Strona główna' }, second, third, ...(fourth ? [fourth] : [])];

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
    <nav aria-label="okruszki" className={`py-6 ${className}`}>
      <Wrapper>
        <ol className="flex flex-wrap gap-2 text-sm">
          {items.map((it, idx) => {
            const isLast = idx === lastIndex;
            return (
              <li key={`${it.href}-${idx}`} className="flex items-center gap-2">
                {isLast ? (
                  <span aria-current="page" className="opacity-70">
                    {it.label}
                  </span>
                ) : (
                  <a href={it.href} className="underline underline-offset-4 hover:no-underline">
                    {it.label}
                  </a>
                )}
                {!isLast && <span aria-hidden="true">/</span>}
              </li>
            );
          })}
        </ol>
      </Wrapper>

      {includeJsonLd && jsonLd && (
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </nav>
  );
}
