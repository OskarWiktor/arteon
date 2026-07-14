import type { ReactNode } from 'react';
import { RiCheckLine, RiGiftLine, RiStarFill } from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import { columnGapClasses } from '@/lib/uiClasses';
import ButtonLink from '../../atoms/buttons/ButtonLink';
import SectionHeader from '../../molecules/SectionHeader';
import Card from '../Card';

type Note = {
  text: ReactNode;
  /** Optional heading shown above the text (e.g. "Wsparcie po publikacji"). */
  title?: string;
  /** Optional pill next to the title (e.g. "Bonus o wartości 500 zł"). */
  badgeLabel?: string;
  ctaLabel?: string;
  ctaLink?: string;
};

type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  technology?: string;
  description: string;
  features: string[];
  /** Marks the recommended plan: navy accent card + "Popularne" badge. */
  lastPlan?: boolean;
  highlighted?: boolean;
  /** Short tier label shown as a pill at the top of the card. */
  badgeLabel?: string;
  popularLabel?: string;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
};

type SectionPricesProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  description?: ReactNode;
  plans?: SectionPricesPlan[];
  note?: Note | null;
  legalNote?: string;
};

/**
 * Pricing section. Each plan is a compact card (tier pill, name, price and a
 * short description with a full-width CTA); the feature list sits below the
 * card, outside its chrome, with bold checkmarks. The recommended plan (either
 * `highlighted`/`lastPlan`, or the middle of three) gets a navy accent card and
 * a "Popularne" badge. An optional bonus box closes the section.
 */
export default function SectionPrices({
  id = 'pricing',
  title = 'Przykładowe ceny',
  subtitle,
  description,
  plans = [],
  note,
  legalNote = 'Dokładne ceny ustalamy po zapoznaniu się z indywidualnymi potrzebami',
}: SectionPricesProps) {
  const headingId = `${id}-heading`;

  const explicitHighlight = plans.findIndex(p => p.highlighted || p.lastPlan);
  // Fall back to the middle plan when three are shown and none is flagged.
  let highlightIndex = explicitHighlight;
  if (highlightIndex < 0 && plans.length === 3) highlightIndex = 1;

  const columnClasses = (count: number) => {
    if (count >= 3) return 'sm:grid-cols-2 lg:grid-cols-3';
    if (count === 2) return 'sm:grid-cols-2';
    return '';
  };
  const gridColsClass = columnClasses(plans.length);

  return (
    <section id={id} aria-labelledby={headingId} className='w-full'>
      <SectionHeader
        subtitle={subtitle}
        title={title}
        description={description}
        titleId={headingId}
      />

      <ol className={cn('grid grid-cols-1', gridColsClass, columnGapClasses)}>
        {plans.map((plan, idx) => {
          const isHighlighted = idx === highlightIndex;
          const itemId = `${id}-plan-${idx}`;
          const itemHeadingId = `${itemId}-heading`;

          return (
            <li key={itemId} className='flex flex-col'>
              <Card
                as='article'
                padding='lg'
                interactive={false}
                tone={isHighlighted ? 'blue' : 'white'}
                aria-labelledby={itemHeadingId}
                className={cn(
                  'flex flex-col gap-0',
                  !isHighlighted && 'ring-1 ring-neutral-200',
                )}
              >
                {(plan.badgeLabel || isHighlighted) && (
                  <div className='mb-4 flex flex-wrap items-center gap-2'>
                    {plan.badgeLabel && (
                      <span
                        className={cn(
                          'rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase',
                          isHighlighted
                            ? 'bg-white/15 text-on-dark'
                            : 'bg-primary-light text-primary',
                        )}
                      >
                        {plan.badgeLabel}
                      </span>
                    )}
                    {isHighlighted && (
                      <span className='inline-flex items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary'>
                        <RiStarFill className='h-3 w-3' aria-hidden='true' />
                        {plan.popularLabel ?? 'Popularne'}
                      </span>
                    )}
                  </div>
                )}

                <h3
                  id={itemHeadingId}
                  className={cn(
                    'h5 font-semibold!',
                    isHighlighted ? 'text-on-dark!' : 'text-dark',
                  )}
                >
                  {plan.name}
                </h3>

                {plan.platform && (
                  <span
                    className={cn(
                      'mt-1 block text-sm',
                      isHighlighted && 'text-on-dark!',
                    )}
                  >
                    {plan.platform}
                  </span>
                )}

                <p
                  className={cn(
                    'mt-4 text-2xl font-bold tracking-tight md:text-3xl',
                    isHighlighted ? 'text-on-dark!' : 'text-dark',
                  )}
                >
                  {plan.price}
                </p>

                {plan.technology && (
                  <p
                    className={cn(
                      'mt-2 text-sm',
                      isHighlighted ? 'text-[#B3B0AC]!' : 'text-light',
                    )}
                  >
                    Technologia:{' '}
                    <span
                      className={cn(
                        'font-medium',
                        isHighlighted ? 'text-on-dark!' : 'text-dark',
                      )}
                    >
                      {plan.technology}
                    </span>
                  </p>
                )}

                <p
                  className={cn(
                    'mt-3 text-sm leading-relaxed',
                    isHighlighted ? 'text-[#B3B0AC]!' : 'text-mid',
                  )}
                >
                  {plan.description}
                </p>

                {(plan.btnOne && plan.btnOneHref) ||
                (plan.btnTwo && plan.btnTwoHref) ? (
                  <div className='mt-6 flex flex-col gap-3'>
                    {plan.btnOne && plan.btnOneHref && (
                      <ButtonLink
                        href={plan.btnOneHref}
                        variant={isHighlighted ? 'normal' : 'accent'}
                        arrow
                        className='w-full justify-center'
                      >
                        {plan.btnOne}
                      </ButtonLink>
                    )}
                    {plan.btnTwo && plan.btnTwoHref && (
                      <ButtonLink
                        href={plan.btnTwoHref}
                        variant='normal'
                        arrow
                        className='w-full justify-center'
                      >
                        {plan.btnTwo}
                      </ButtonLink>
                    )}
                  </div>
                ) : null}
              </Card>

              {plan.features?.length > 0 && (
                <ul className='mt-6 space-y-3'>
                  {plan.features.map((feature, i) => (
                    <li
                      key={`${itemId}-f-${i}`}
                      className='flex items-start gap-2.5'
                    >
                      <RiCheckLine
                        className='mt-0.5 h-5 w-5 shrink-0 text-primary'
                        aria-hidden='true'
                      />
                      <span className='text-sm font-medium text-dark'>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ol>

      {note && (
        <div
          className='mt-10 flex flex-col gap-4 rounded-lg bg-primary-light p-6 md:flex-row md:items-center md:gap-6 md:p-8'
          role='note'
          aria-label='Bonus'
        >
          {note.badgeLabel && (
            <div className='flex h-14 w-14 shrink-0 items-center justify-center rounded-lg bg-primary text-on-dark'>
              <RiGiftLine className='h-7 w-7' aria-hidden='true' />
            </div>
          )}
          <div>
            {(note.title || note.badgeLabel) && (
              <div className='flex flex-wrap items-center gap-3'>
                {note.title && (
                  <h3 className='h5 font-semibold! text-primary'>
                    {note.title}
                  </h3>
                )}
                {note.badgeLabel && (
                  <span className='rounded-full bg-primary px-3 py-1 text-xs font-semibold text-on-dark'>
                    {note.badgeLabel}
                  </span>
                )}
              </div>
            )}
            <div
              className={cn(
                'leading-relaxed text-[#645D52]',
                (note.title || note.badgeLabel) && 'mt-2',
              )}
            >
              {note.text}
            </div>
            {note.ctaLink && note.ctaLabel && (
              <div className='mt-4'>
                <ButtonLink href={note.ctaLink} variant='accent' arrow>
                  {note.ctaLabel}
                </ButtonLink>
              </div>
            )}
          </div>
        </div>
      )}

      {legalNote && <p className='pt-4 text-sm text-light'>{legalNote}</p>}
    </section>
  );
}
