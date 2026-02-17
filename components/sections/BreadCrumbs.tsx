import Wrapper from '../ui/Wrapper';
import AppLink from '../ui/Link';
import { RiHomeLine } from 'react-icons/ri';

const ui = {
  pl: {
    home: 'Strona główna',
    ariaLabel: 'okruszki',
  },
  en: {
    home: 'Home',
    ariaLabel: 'breadcrumbs',
  },
  de: {
    home: 'Startseite',
    ariaLabel: 'Brotkrümel',
  },
  es: {
    home: 'Inicio',
    ariaLabel: 'migas de pan',
  },
  fr: {
    home: 'Accueil',
    ariaLabel: "fil d'Ariane",
  },
  pt: {
    home: 'Início',
    ariaLabel: 'migalhas de pão',
  },
  it: {
    home: 'Home',
    ariaLabel: 'briciole di pane',
  },
  ro: {
    home: 'Acasă',
    ariaLabel: 'navigare',
  },
  nl: {
    home: 'Home',
    ariaLabel: 'kruimelpad',
  },
  hu: {
    home: 'Főoldal',
    ariaLabel: 'útmutató',
  },
  id: {
    home: 'Beranda',
    ariaLabel: 'navigasi',
  },
  vi: {
    home: 'Trang chủ',
    ariaLabel: 'điều hướng',
  },
  tr: {
    home: 'Ana sayfa',
    ariaLabel: 'navigasyon',
  },
  tl: {
    home: 'Home',
    ariaLabel: 'nabigasyon',
  },
  sw: {
    home: 'Nyumbani',
    ariaLabel: 'urambazaji',
  },
  ms: {
    home: 'Laman utama',
    ariaLabel: 'navigasi',
  },
  cs: {
    home: '\u00davodn\u00ed str\u00e1nka',
    ariaLabel: 'navigace',
  },
  sv: {
    home: 'Startsida',
    ariaLabel: 'navigering',
  },
  sq: {
    home: 'Faqja kryesore',
    ariaLabel: 'navigimi',
  },
  da: {
    home: 'Forside',
    ariaLabel: 'navigation',
  },
  no: {
    home: 'Forside',
    ariaLabel: 'navigasjon',
  },
  fi: {
    home: 'Etusivu',
    ariaLabel: 'navigaatio',
  },
  sk: {
    home: '\u00davodn\u00e1 str\u00e1nka',
    ariaLabel: 'navig\u00e1cia',
  },
  hr: {
    home: 'Po\u010detna',
    ariaLabel: 'navigacija',
  },
  lt: {
    home: 'Pradinis puslapis',
    ariaLabel: 'navigacija',
  },
  sl: {
    home: 'Za\u010detna stran',
    ariaLabel: 'navigacija',
  },
} as const;

import type { Crumb, BreadcrumbsProps } from '@/types/ui';
export type { Crumb, BreadcrumbsProps } from '@/types/ui';

const DEFAULT_SITE = 'https://www.arteonagency.pl';

function absoluteUrl(siteUrl: string, href: string) {
  return href.startsWith('http') ? href : `${siteUrl}${href}`;
}

export default function Breadcrumbs({ second, third, fourth, className = '', includeJsonLd = false, siteUrl = DEFAULT_SITE, size = 'default', locale = 'pl' }: BreadcrumbsProps) {
  const t = ui[locale];
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
        <nav className="flex flex-wrap items-center gap-2 text-sm">
          <AppLink href="/" variant="default" display="inline" aria-label={t.home} className="shrink-0">
            <RiHomeLine className="text-medium text-primary-mid h-4 w-4" />
          </AppLink>
          {items.slice(1).map((it, idx) => {
            const isLast = idx === items.slice(1).length - 1;
            return (
              <span key={`${it.href}-${idx}`} className="!text-medium text-primary-mid flex items-center gap-2">
                /
                {isLast ? (
                  <span className="text-medium text-primary" aria-current="page">
                    {it.label}
                  </span>
                ) : (
                  <AppLink href={it.href} variant="default" display="inline" className="!text-primary-mid !text-[14px]">
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
