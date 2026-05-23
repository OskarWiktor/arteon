import type { ReactNode } from 'react';
import { useId } from 'react';

import { JsonLd } from '@/components/atoms/JsonLd';
import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

import SectionHeader from './SectionHeader';

interface FaqPanelsItem {
  question: string;
  answer: ReactNode;
  answerSchemaText?: string;
  icon?: ReactNode;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  defaultOpenIndex?: number;
  halfWidth?: boolean;
  showIcons?: boolean;
}

export default function FaqPanels({
  items,
  title = 'Najczęstsze pytania',
  subtitle,
  generateSchema = true,
  pageUrl,
  defaultOpenIndex = 0,
  halfWidth = false,
  showIcons = false,
}: FaqPanelsProps) {
  const id = useId().replace(/:/g, '');
  const headingId = `faq-heading-${id}`;
  const groupName = `faq-group-${id}`;

  const faqJsonLd =
    generateSchema && items.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
          mainEntity: items.map(item => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: typeof item.answer === 'string' ? item.answer : (item.answerSchemaText ?? ''),
            },
          })),
        }
      : null;

  return (
    <section aria-labelledby={headingId}>
      <SectionHeader subtitle={subtitle} title={title} titleClassName='h4' titleId={headingId} />

      <div className={cn(halfWidth && 'mx-auto max-w-2xl')}>
        {items.map((item, index) => (
          <details
            key={item.question}
            name={groupName}
            open={defaultOpenIndex === index ? true : undefined}
            className='faq-details group hover:border-primary-light open:border-primary-light my-2 overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow open:shadow-sm hover:shadow-md'
          >
            <summary
              className={cn(
                'flex w-full cursor-pointer list-none items-center justify-between p-3 text-left transition-colors md:p-4 [&::-webkit-details-marker]:hidden',
                focusRingClasses,
                showIcons && item.icon && 'gap-4',
              )}
            >
              {showIcons && item.icon && (
                <div className='bg-primary-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-neutral-900 transition group-open:bg-neutral-900 group-open:text-white'>
                  {item.icon}
                </div>
              )}

              <h3 className='h6 flex-1'>{item.question}</h3>

              <span
                className='ml-2 transition-transform duration-200 group-open:rotate-45'
                aria-hidden='true'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth={2}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  width='1em'
                  height='1em'
                >
                  <line x1='12' y1='5' x2='12' y2='19' />
                  <line x1='5' y1='12' x2='19' y2='12' />
                </svg>
              </span>
            </summary>

            <div className='border-primary-light border-t p-4'>
              <div className='text-light leading-relaxed'>
                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
              </div>
            </div>
          </details>
        ))}
      </div>

      {faqJsonLd && <JsonLd schema={faqJsonLd} id='faq-jsonld' />}
    </section>
  );
}
