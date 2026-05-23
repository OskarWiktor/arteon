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
  animated?: boolean;
  speed?: number;
}

export default function SectionInfoBanner({
  items,
  animated = false,
  speed = 40,
}: SectionInfoBannerProps) {
  if (!items.length) return null;

  const duplicatedItems = animated ? [...items, ...items] : items;

  const renderItem = (item: InfoBannerItem, index: number) => (
    <span key={index} className='mr-6 flex items-center gap-2 !text-xs font-medium text-white'>
      {item.icon && <span className='text-accent'>{item.icon}</span>}
      <span>
        {item.text}
        {item.linkText && item.linkHref && (
          <>
            {' '}
            <InlineLink
              href={item.linkHref}
              prefetch={false}
              className='hover:text-accent underline underline-offset-2 transition-colors'
            >
              {item.linkText}
            </InlineLink>
          </>
        )}
      </span>
    </span>
  );

  if (animated) {
    return (
      <div data-section='info-banner' className='bg-primary overflow-hidden py-1.5'>
        <div
          className='flex whitespace-nowrap'
          style={{
            animation: `infoBannerMarquee ${speed}s linear infinite`,
          }}
        >
          {duplicatedItems.map((item, index) => renderItem(item, index))}
        </div>

        <style jsx>{`
          @keyframes infoBannerMarquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    );
  }

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
