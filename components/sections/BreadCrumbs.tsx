import Wrapper from '../ui/Wrapper';
import AppLink from '../ui/Link';
import { RiHomeLine } from 'react-icons/ri';

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
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <AppLink href="/" variant="default" display="inline" aria-label={t.home} className="shrink-0">
            <RiHomeLine className="text-medium h-4 w-4 text-slate-400" />
          </AppLink>
          {items.slice(1).map((it, idx) => {
            const isLast = idx === items.slice(1).length - 1;
            return (
              <span key={`${it.href}-${idx}`} className="!text-medium flex items-center gap-2 text-slate-400">
                /
                {isLast ? (
                  <span className="text-medium text-slate-800" aria-current="page">
                    {it.label}
                  </span>
                ) : (
                  <AppLink href={it.href} variant="default" display="inline" className="!text-[14px] !text-slate-400">
                    {it.label}
                  </AppLink>
                )}
              </span>
            );
          })}
        </nav>

        {includeJsonLd && jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
      </nav>
    </Wrapper>
  );
}
