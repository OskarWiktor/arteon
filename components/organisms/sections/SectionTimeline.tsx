import { useId, type ReactNode } from 'react';
import Reveal from '@/components/atoms/Reveal';
import { cn } from '@/lib/clsx';
import { flexCenterClasses } from '@/lib/uiClasses';
import ButtonGroup from '../../molecules/ButtonGroup';
import SectionHeader from '../../molecules/SectionHeader';
import Card from '../Card';

interface TimelineItem {
  icon: ReactNode;
  title: string;
  description: ReactNode;
}

interface SectionTimelineProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  items: TimelineItem[];
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
}

/**
 * Render a timeline-style section with an optional heading, description, a list of timeline items, and up to two action buttons.
 *
 * The component generates a unique heading id and sets `aria-labelledby` on the section when `title` is provided.
 *
 * @param items - Ordered list of timeline entries. Each entry should include `icon`, `title`, and `description`.
 * @param btnOne - Label for the primary action button.
 * @param btnOneHref - Href for the primary action button.
 * @param btnTwo - Label for the secondary action button.
 * @param btnTwoHref - Href for the secondary action button.
 * @returns The rendered timeline section element.
 */
export default function SectionTimeline({
  title,
  subtitle,
  description,
  items,
  btnOne,
  btnOneHref,
  btnTwo,
  btnTwoHref,
}: SectionTimelineProps) {
  const autoId = useId();
  const headingId = `timeline-title-${autoId}`;

  return (
    <section
      data-section='timeline'
      aria-labelledby={title ? headingId : undefined}
    >
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        titleId={headingId}
      />

      <div className='relative'>
        <div
          className='absolute top-0 left-6 hidden h-full w-0.5 bg-primary-light md:left-1/2 md:block md:-translate-x-1/2'
          aria-hidden='true'
        />
        <div
          className='absolute top-0 left-6 block h-full w-0.5 bg-primary-light md:hidden'
          aria-hidden='true'
        />

        <ol className='space-y-4'>
          {items.map((step, index) => (
            <li
              key={index}
              className={cn('relative flex flex-col md:flex-row', {
                'md:flex-row': index % 2 === 0,
                'md:flex-row-reverse': index % 2 !== 0,
              })}
            >
              <div className='hidden md:absolute md:left-1/2 md:flex md:h-12 md:w-12 md:-translate-x-1/2 md:items-center md:justify-center md:rounded-lg md:bg-primary md:text-white md:shadow-lg'>
                {step.icon}
              </div>

              <div
                className={cn('flex-1', {
                  'md:pr-16 md:text-right': index % 2 === 0,
                  'md:pl-16': index % 2 !== 0,
                })}
              >
                <Reveal delayMs={Math.min(index, 6) * 80}>
                  <Card padding='lg' className='ml-16 md:ml-0'>
                    <div
                      className={cn(
                        'absolute top-6 left-0 h-12 w-12 rounded-lg bg-primary text-white shadow-lg md:hidden',
                        flexCenterClasses,
                      )}
                    >
                      {step.icon}
                    </div>
                    <h3 className='h5 mb-2'>{step.title}</h3>
                    <p className='text-light'>{step.description}</p>
                  </Card>
                </Reveal>
              </div>

              <div className='hidden flex-1 md:block' />
            </li>
          ))}
        </ol>
      </div>

      <ButtonGroup
        btnOne={btnOne}
        btnOneHref={btnOneHref}
        btnTwo={btnTwo}
        btnTwoHref={btnTwoHref}
        ariaLabel='Działania sekcji'
      />
    </section>
  );
}
