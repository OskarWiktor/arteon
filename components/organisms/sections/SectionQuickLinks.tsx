import type { ReactNode } from 'react';
import InlineLink from '../../atoms/InlineLink';
import Wrapper from '../../atoms/Wrapper';

interface QuickLink {
  icon: ReactNode;
  label: string;
  href: string;
}

interface SectionQuickLinksProps {
  title?: string;
  links: QuickLink[];
}

export default function SectionQuickLinks({ title, links }: SectionQuickLinksProps) {
  return (
    <section data-section='quick-links' aria-labelledby={title ? 'quick-links-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id='quick-links-title' className='h5 mb-4 text-center md:mb-6 lg:mb-8'>
            {title}
          </h2>
        )}

        <div className='flex flex-wrap items-center justify-center gap-4 rounded-lg bg-neutral-50 px-6 py-4'>
          {links.map((link, index) => (
            <InlineLink
              key={index}
              href={link.href}
              prefetch={false}
              className='text-primary flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition hover:bg-white hover:shadow-sm'
            >
              {link.icon}
              {link.label}
            </InlineLink>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
