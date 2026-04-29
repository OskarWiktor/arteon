import type { ReactNode } from 'react';
import SectionHeader from './typography/SectionHeader';

interface FaqPanelsItem {
  question: string;
  answer: string | ReactNode;
  answerSchemaText?: string;
  icon?: ReactNode;
}

interface FaqPanelsProps {
  items: FaqPanelsItem[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  openByDefault?: number;
  variant?: 'default' | 'halfWidth';
  showIcons?: boolean;
}

export default function FaqPanels({ items, title = 'Najczęstsze pytania', subtitle, generateSchema = true, pageUrl, openByDefault = 0, variant = 'default', showIcons = false }: FaqPanelsProps) {
  const headingId = 'faq-heading';
  const groupName = 'faq-group';

  const faqJsonLd =
    generateSchema && items?.length
      ? {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          ...(pageUrl ? { mainEntityOfPage: pageUrl } : {}),
          mainEntity: items.map((it) => ({
            '@type': 'Question',
            name: it.question,
            acceptedAnswer: { '@type': 'Answer', text: typeof it.answer === 'string' ? it.answer : (it.answerSchemaText ?? '') },
          })),
        }
      : null;

  const containerClass = variant === 'halfWidth' ? 'mx-auto max-w-2xl' : '';

  return (
    <section aria-labelledby={headingId}>
      <SectionHeader subtitle={subtitle} title={title} headingLevel="h2" headingClassName=" h4" titleId={headingId} />

      <div className={containerClass}>
        {items.map((item, index) => (
          <details
            key={index}
            name={groupName}
            open={openByDefault > 0 && index === 0 ? true : undefined}
            className="faq-details group hover:border-primary-light open:border-primary-light my-2 overflow-hidden rounded-lg border border-neutral-200 bg-white transition-shadow open:shadow-sm hover:shadow-md"
          >
            <summary
              className={[
                'flex w-full cursor-pointer list-none items-center justify-between p-3 text-left transition-colors',
                'focus:outline-none focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-neutral-900',
                'md:p-4',
                '[&::-webkit-details-marker]:hidden',
                showIcons && item.icon ? 'gap-4' : '',
              ].join(' ')}
            >
              {showIcons && item.icon && (
                <div className="bg-primary-light flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg text-neutral-900 transition group-open:bg-neutral-900 group-open:text-white">
                  {item.icon}
                </div>
              )}
              <h3 className="h6 flex-1">{item.question}</h3>
              <span className="ml-2 transition-transform duration-200 group-open:rotate-45" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" width="1em" height="1em">
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </summary>

            <div className="border-primary-light border-t p-4">
              <div className="text-light leading-relaxed">{typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}</div>
            </div>
          </details>
        ))}
      </div>

      {faqJsonLd && <script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}
    </section>
  );
}
