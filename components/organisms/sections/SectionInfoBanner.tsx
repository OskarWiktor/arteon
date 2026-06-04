import type { ReactNode } from 'react';
import Wrapper from '../../atoms/Wrapper';
import InlineLink from '../../atoms/InlineLink';

interface InfoBannerItem {
  icon?: ReactNode;
  text: string;
  linkText?: string;
  linkHref?: string;
}

interface SectionInfoBannerProps {
  items: InfoBannerItem[];
}

/**
 * Render an information banner containing a list of items, each optionally with an icon and an inline link.
 *
 * @param items - Array of banner items to display; each item may include an `icon`, `text`, and optional `linkText`/`linkHref`.
 * @returns A React element representing the info banner, or `null` when `items` is empty.
 */
export default function SectionInfoBanner({ items }: SectionInfoBannerProps) {
  if (!items.length) return null;

  const renderItem = (item: InfoBannerItem, index: number) => (
    <span
      key={index}
      className='mr-6 flex items-center gap-2 !text-xs font-medium text-white'
    >
      {item.icon && <span className='text-accent'>{item.icon}</span>}
      <span>
        {item.text}
        {item.linkText && item.linkHref && (
          <>
            {' '}
            <InlineLink
              href={item.linkHref}
              className='underline underline-offset-2 transition-colors hover:text-accent'
            >
              {item.linkText}
            </InlineLink>
          </>
        )}
      </span>
    </span>
  );

  return (
    <div data-section='info-banner' className='bg-primary py-1.5'>
      <Wrapper>
        <div className='flex flex-wrap items-center gap-x-8 gap-y-1'>
          {items.map((item, index) => renderItem(item, index))}
        </div>
      </Wrapper>
    </div>
  );
}
