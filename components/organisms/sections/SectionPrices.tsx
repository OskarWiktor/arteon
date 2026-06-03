import { RiCheckFill } from 'react-icons/ri';
import ButtonLink from '../../atoms/buttons/ButtonLink';
import ButtonGroup from '../../molecules/ButtonGroup';
import Badge from '../../atoms/Badge';
import Card from '../Card';
import IconText from '../../atoms/IconText';
import { cn } from '@/lib/utils';
import { normalIconSizeClasses, smallIconSizeClasses } from '@/lib/ui-classes';
import { ReactNode } from 'react';

type Note = {
  text: ReactNode;
  ctaLabel?: string;
  ctaLink?: string;
};

type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  description: string;
  features: string[];
  lastPlan?: boolean;
  badgeLabel?: string;
  btnOne?: string;
  btnOneHref?: string;
  btnTwo?: string;
  btnTwoHref?: string;
};

type SectionPricesProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  plans?: SectionPricesPlan[];
  note?: Note | null;
  legalNote?: string;
};

export default function SectionPrices({
  id = 'pricing',
  title = 'Przykładowe ceny',
  subtitle,
  plans = [],
  note,
  legalNote = 'Dokładne ceny ustalamy po zapoznaniu się z indywidualnymi potrzebami',
}: SectionPricesProps) {
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const describedBy = subtitleId || undefined;

  return (
    <section id={id} aria-labelledby={headingId} aria-describedby={describedBy} className='w-full'>
      <div className='mb-4 lg:mb-6'>
        {subtitle && (
          <span id={subtitleId} className='text-light text-sm tracking-wider uppercase'>
            {subtitle}
          </span>
        )}
        {title && (
          <h3 className='text-dark text-2xl font-semibold tracking-tight' id={headingId}>
            {title}
          </h3>
        )}
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {plans.map((plan, idx) => {
          const itemId = `${id}-plan-${idx}`;
          const itemHeadingId = `${itemId}-heading`;
          const itemPlatformId = plan.platform ? `${itemId}-platform` : undefined;
          const itemPriceId = `${itemId}-price`;
          const itemDescId = `${itemId}-desc`;
          const itemDescribedBy =
            [itemPlatformId, itemPriceId, itemDescId].filter(Boolean).join(' ') || undefined;

          return (
            <Card
              as='article'
              key={itemId}
              padding='lg'
              aria-labelledby={itemHeadingId}
              aria-describedby={itemDescribedBy}
              className={cn(
                'group relative flex h-full flex-col justify-between ring-1 ring-neutral-200 duration-200',
                plan.lastPlan ? 'ring-2 ring-neutral-900' : '',
              )}
            >
              {plan.badgeLabel && (
                <Badge
                  variant='warning'
                  size='sm'
                  className='absolute -top-3 left-4 font-semibold tracking-wider shadow-sm'
                  aria-label='Wyróżniony plan'
                >
                  {plan.badgeLabel}
                </Badge>
              )}

              <div>
                <h4 id={itemHeadingId} className='h5 text-dark text-xl font-semibold'>
                  {plan.name}
                </h4>

                {plan.platform && (
                  <span id={itemPlatformId} className='mt-1 block text-sm'>
                    {plan.platform}
                  </span>
                )}

                <p id={itemPriceId} className='mt-4'>
                  <span className='text-dark text-xl font-semibold tracking-tight'>
                    {plan.price}
                  </span>
                </p>

                <p id={itemDescId} className='mt-2 text-[15px] leading-relaxed'>
                  {plan.description}
                </p>

                <ul className='mt-6 space-y-3' role='list'>
                  {(plan.features ?? []).map((f, i) => (
                    <li key={`${itemId}-f-${i}`}>
                      <IconText
                        icon={
                          <span
                            className={cn(
                              'group-hover:ring-primary8 mt-0.5 inline-flex flex-none items-center justify-center rounded-lg ring-1 ring-neutral-300',
                              normalIconSizeClasses,
                            )}
                            title='Zawarte w planie'
                          >
                            <RiCheckFill className={smallIconSizeClasses} />
                          </span>
                        }
                        gap='3'
                        align='start'
                      >
                        <span className='text-base leading-relaxed'>{f}</span>
                      </IconText>
                    </li>
                  ))}
                </ul>
              </div>

              {(plan.btnOne && plan.btnOneHref) || (plan.btnTwo && plan.btnTwoHref) ? (
                <ButtonGroup
                  btnOne={plan.btnOne}
                  btnOneHref={plan.btnOneHref}
                  btnOneVariant={plan.lastPlan ? 'normal' : 'accent'}
                  btnTwo={plan.btnTwo}
                  btnTwoHref={plan.btnTwoHref}
                  align='left'
                  ariaLabel={`Działania planu: ${plan.name}`}
                />
              ) : null}
            </Card>
          );
        })}
      </div>

      {note && (
        <div
          className='mt-8 rounded-lg bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200'
          role='note'
          aria-label='Informacja'
        >
          <div className='text-mid text-[15px] leading-relaxed'>{note.text}</div>
          {note.ctaLink && note.ctaLabel && (
            <div className='mt-4'>
              <ButtonLink href={note.ctaLink} variant='accent' arrow>
                {note.ctaLabel}
              </ButtonLink>
            </div>
          )}
        </div>
      )}

      {legalNote && <p className='text-light pt-4 text-sm leading-relaxed'>{legalNote}</p>}
    </section>
  );
}
