import { RiHomeLine } from 'react-icons/ri';
import { JsonLd } from '@/components/atoms/JsonLd';
import { BREADCRUMBS_UI } from '@/lib/i18n/locales';
import { flexCenterClasses, smallIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import type { Locale } from '@/types/locale';
import InlineLink from '../atoms/InlineLink';
import Wrapper from '../atoms/Wrapper';

const DEFAULT_SITE_URL = 'https://www.arteonagency.pl';

type Crumb = {
  href: string;
  label: string;
};

interface BreadcrumbsProps {
  second: Crumb;
  third: Crumb;
  fourth?: Crumb;
  includeJsonLd?: boolean;
  siteUrl?: string;
  size?: 'default' | 'compact';
  locale?: Locale;
}

export default function Breadcrumbs({
  second,
  third,
  fourth,
  includeJsonLd = false,
  siteUrl = DEFAULT_SITE_URL,
  size = 'default',
  locale = 'pl',
}: BreadcrumbsProps) {
  const t = BREADCRUMBS_UI[locale];

  const items: Crumb[] = [{ href: '/', label: t.home }, second, third, ...(fourth ? [fourth] : [])];

  const visibleItems = items.slice(1);

  const jsonLd = includeJsonLd
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.label,
          item: `${siteUrl}${item.href}`,
        })),
      }
    : null;

  return (
    <Wrapper>
      <nav
        aria-label={t.ariaLabel}
        className={cn(size === 'compact' ? cn('py-3', flexCenterClasses) : 'py-6')}
      >
        <ol className='flex flex-wrap items-center gap-2 text-sm!'>
          <li>
            <InlineLink href='/' variant='default' aria-label={t.home}>
              <RiHomeLine
                className={cn('text-medium mt-2 text-primary-mid', smallIconSizeClasses)}
              />
            </InlineLink>
          </li>

          {visibleItems.map((item, index) => {
            const isLast = index === visibleItems.length - 1;

            return (
              <li
                key={`${item.href}-${index}`}
                className='text-medium flex items-center gap-2 text-sm! text-primary-mid'
              >
                <span aria-hidden='true' className='text-sm! text-primary-mid'>
                  /
                </span>

                {isLast ? (
                  <span className='text-medium text-sm! text-primary' aria-current='page'>
                    {item.label}
                  </span>
                ) : (
                  <InlineLink href={item.href} variant='default' className='text-primary-mid'>
                    {item.label}
                  </InlineLink>
                )}
              </li>
            );
          })}
        </ol>

        {jsonLd && <JsonLd schema={jsonLd} />}
      </nav>
    </Wrapper>
  );
}
