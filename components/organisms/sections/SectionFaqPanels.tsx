import type { ReactNode } from 'react';
import { useId } from 'react';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import { JsonLd } from '@/components/atoms/JsonLd';
import Reveal from '@/components/atoms/Reveal';
import FaqPanel from '@/components/molecules/FaqPanel';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';

interface FaqPanelItem {
  question: string;
  answer: ReactNode;
  answerSchemaText?: string;
  icon?: ReactNode;
}

interface FaqPanelsProps {
  items: FaqPanelItem[];
  title?: string;
  subtitle?: string;
  description?: ReactNode;
  variant?: 'default' | 'offer';
  generateSchema?: boolean;
  pageUrl?: string;
  defaultOpenIndex?: number;
  showIcons?: boolean;
  halfWidth?: boolean;
  contactHref?: string;
  contactBoxTitle?: string;
  contactBoxText?: string;
  contactBoxButtonLabel?: string;
}

export default function SectionFaqPanels({
  items,
  title = 'Najczęściej zadawane pytania',
  subtitle,
  description,
  variant = 'default',
  generateSchema = true,
  pageUrl,
  defaultOpenIndex = 0,
  showIcons = false,
  contactHref = '#kontakt',
  contactBoxTitle = 'Masz inne pytanie?',
  contactBoxText = 'Skontaktuj się z nami poprzez formularz, email lub telefonicznie, z chęcią odpowiemy',
  contactBoxButtonLabel = 'Skontaktuj się',
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

  const renderPanel = (item: FaqPanelItem, index: number) => (
    <Reveal key={item.question} delayMs={Math.min(index, 6) * 60}>
      <FaqPanel
        question={item.question}
        answer={item.answer}
        icon={showIcons ? item.icon : undefined}
        name={groupName}
        defaultOpen={index === defaultOpenIndex}
      />
    </Reveal>
  );

  const heading = (
    <div>
      {subtitle && (
        <p className='mb-2 text-sm font-medium text-mid'>{subtitle}</p>
      )}
      <h2 id={headingId} className='h3'>
        {title}
      </h2>
    </div>
  );

  return (
    <section aria-labelledby={headingId} className='mb-4'>
      {variant === 'offer' ? (
        <div
          className={cn(
            'grid lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]',
            columnGapClasses,
          )}
        >
          <div className='flex flex-col'>
            {heading}
            {description && <div className='mt-4 text-mid'>{description}</div>}

            <div className='mt-8 lg:mt-auto lg:mb-4 lg:pt-8'>
              <Card tone='beige' padding='lg' interactive={false}>
                <h3 className='h5 text-primary'>{contactBoxTitle}</h3>
                <p className='text-[#645D52]'>{contactBoxText}</p>
                <div>
                  <ButtonLink variant='accent' href={contactHref}>
                    {contactBoxButtonLabel}
                  </ButtonLink>
                </div>
              </Card>
            </div>
          </div>

          <div>{items.map(renderPanel)}</div>
        </div>
      ) : (
        <>
          <div
            className={cn('mb-6 grid md:mb-8 md:grid-cols-2', columnGapClasses)}
          >
            {heading}
            {description && (
              <div className='text-mid md:self-center'>{description}</div>
            )}
          </div>

          <div className={cn('grid md:grid-cols-2', columnGapClasses)}>
            <div>
              {items
                .slice(0, Math.ceil(items.length / 2))
                .map((item, i) => renderPanel(item, i))}
            </div>
            <div>
              {items
                .slice(Math.ceil(items.length / 2))
                .map((item, i) =>
                  renderPanel(item, i + Math.ceil(items.length / 2)),
                )}
            </div>
          </div>
        </>
      )}

      {faqJsonLd && <JsonLd schema={faqJsonLd} id='faq-jsonld' />}
    </section>
  );
}
