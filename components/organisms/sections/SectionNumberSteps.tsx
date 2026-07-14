import type { ReactNode } from 'react';
import ArrowIcon from '@/components/atoms/ArrowIcon';
import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import InlineLink from '@/components/atoms/InlineLink';
import Reveal from '@/components/atoms/Reveal';
import Subtitle from '@/components/atoms/typography/Subtitle';
import Card from '@/components/organisms/Card';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';

interface SectionNumberStepItem {
  icon: ReactNode;
  title: string;
  description: string;
  href: string;
  /** CTA label; defaults to "Pełna oferta". */
  buttonLabel?: string;
}

type SectionNumberStepsColumns = 2 | 3 | 4;

interface SectionNumberStepsProps {
  title: ReactNode;
  /** Optional copy shown next to the title, on the same line on desktop. */
  description?: ReactNode;
  subtitle?: ReactNode;
  items: SectionNumberStepItem[];
  /** Cards per row on large screens (default: 4). */
  columns?: SectionNumberStepsColumns;
  /** Optional accent button below the grid (e.g. "see all"). */
  buttonText?: string;
  buttonHref?: string;
}

const columnClasses: Record<SectionNumberStepsColumns, string> = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
};

/**
 * A grid of numbered cards under a title + optional lead-in copy. Each card
 * carries an oversized icon, an italic index, a short description and a link.
 * The card chrome and inner spacing intentionally mirror the tool/article/
 * project carousel cards so the two read as one system. An optional accent
 * button can close the section (e.g. a link to the full listing).
 */
export default function SectionNumberSteps({
  title,
  description,
  subtitle,
  items,
  columns = 4,
  buttonText,
  buttonHref,
}: SectionNumberStepsProps) {
  const headingId = `number-steps-${String(title)
    .toLowerCase()
    .replace(/[^a-z0-9]+/gi, '-')}`;

  return (
    <section aria-labelledby={headingId}>
      <div className={cn('mb-6 grid md:mb-8 md:grid-cols-2', columnGapClasses)}>
        <Reveal>
          {subtitle && (
            <div className='mb-2 md:mb-4'>
              <Subtitle className='text-light'>{subtitle}</Subtitle>
            </div>
          )}
          <h2 id={headingId} className='h3 scroll-mt-26'>
            {title}
          </h2>
        </Reveal>
        {description && <div className='text-mid'>{description}</div>}
      </div>

      <ol
        className={cn(
          'grid auto-rows-fr grid-cols-1',
          columnClasses[columns],
          columnGapClasses,
        )}
      >
        {items.map((item, index) => {
          const { icon, title: itemTitle, description: itemDesc, href } = item;
          const buttonLabel = item.buttonLabel ?? 'Pełna oferta';

          return (
            <li key={href} className='flex'>
              <Card
                as='article'
                padding='md'
                interactive={false}
                className='group relative flex h-full w-full flex-col gap-0 bg-primary-light'
              >
                <div className='flex items-start justify-between gap-4'>
                  <span
                    className='text-[#998F80] [&>svg]:h-14 [&>svg]:w-14'
                    aria-hidden='true'
                  >
                    {icon}
                  </span>
                  <span className='h4 font-bold! text-primary! italic!'>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                <div className='flex grow flex-col pt-4 md:pt-6'>
                  <h3 className='h5 font-semibold! text-dark'>{itemTitle}</h3>
                  <p className='pt-4'>{itemDesc}</p>

                  <div className='mt-auto'>
                    <div
                      className='mt-4 mb-2 h-px w-full bg-primary/15'
                      aria-hidden='true'
                    />
                    <div className='flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-medium'>
                      <InlineLink
                        href={href}
                        aria-label={`${buttonLabel}: ${itemTitle}`}
                        className="inline-flex rounded-lg text-primary! transition before:absolute before:inset-0 before:rounded-lg before:content-['']"
                      >
                        {buttonLabel}
                        <ArrowIcon />
                      </InlineLink>
                    </div>
                  </div>
                </div>
              </Card>
            </li>
          );
        })}
      </ol>

      {buttonText && buttonHref && (
        <div className='mt-8 flex justify-center md:mt-10'>
          <ButtonLink variant='accent' href={buttonHref}>
            {buttonText}
          </ButtonLink>
        </div>
      )}
    </section>
  );
}
