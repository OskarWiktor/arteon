import type { ReactNode } from 'react';
import { useId } from 'react';
import { JsonLd } from '@/components/atoms/JsonLd';
import FaqPanel from '@/components/molecules/FaqPanel';
import { cn } from '@/lib/utils';
import SectionHeader from '../../molecules/SectionHeader';

interface FaqPanelProps {
  question: string;
  answer: ReactNode;
  answerSchemaText?: string;
  icon?: ReactNode;
}

interface FaqPanelsProps {
  items: FaqPanelProps[];
  title?: string;
  subtitle?: string;
  generateSchema?: boolean;
  pageUrl?: string;
  defaultOpenIndex?: number;
  halfWidth?: boolean;
  showIcons?: boolean;
}

export default function SectionFaqPanels({
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
              text:
                typeof item.answer === 'string'
                  ? item.answer
                  : (item.answerSchemaText ?? ''),
            },
          })),
        }
      : null;

  return (
    <section aria-labelledby={headingId}>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        titleClassName='h4'
        titleId={headingId}
      />

      <div className={cn(halfWidth && 'mx-auto max-w-2xl')}>
        {items.map((item, index) => (
          <FaqPanel
            key={item.question}
            question={item.question}
            answer={item.answer}
            icon={showIcons ? item.icon : undefined}
            name={groupName}
            defaultOpen={index === defaultOpenIndex}
          />
        ))}
      </div>

      {faqJsonLd && <JsonLd schema={faqJsonLd} id='faq-jsonld' />}
    </section>
  );
}
