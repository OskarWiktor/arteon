import type { ReactNode } from 'react';
import { RiCheckFill } from 'react-icons/ri';
import Button from '../buttons/Button';
import ButtonGroup from '../buttons/ButtonGroup';
import Badge from '../Badge';
import IconText from '../IconText';

const ui = {
  pl: {
    defaultTitle: 'Przykładowe ceny',
    defaultSubtitle: 'Pakiety',
    defaultLegalNote: 'Dokładne ceny ustalamy po zapoznaniu się z indywidualnymi potrzebami',
    featuredPlan: 'Wyróżniony plan',
    planActions: 'Działania planu',
    noteAriaLabel: 'Informacja',
    includedInPlan: 'Zawarte w planie',
  },
} as const;

export type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  description: string;
  features: string[];
  lastPlan?: boolean;
  badgeLabel?: string;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
};

export type Note = {
  text: ReactNode;
  ctaLabel?: string;
  ctaLink?: string;
};

export type SectionPricesProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  plans?: SectionPricesPlan[];
  note?: Note | null;
  legalNote?: string;
};

export default function SectionPrices({
  id = 'pricing',
  title = ui.pl.defaultTitle,
  subtitle = ui.pl.defaultSubtitle,
  plans = [],
  note,
  legalNote = ui.pl.defaultLegalNote,
}: SectionPricesProps) {
  const t = ui.pl;
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const describedBy = subtitleId || undefined;

  return (
    <section id={id} aria-labelledby={headingId} aria-describedby={describedBy} className="w-full">
      <div className="mb-8">
        {subtitle && (
          <span id={subtitleId} className="text-sm text-light tracking-wider uppercase">
            {subtitle}
          </span>
        )}
        {title && (
          <h3 className="reveal-animation mt-1 text-2xl font-semibold tracking-tight text-dark" id={headingId}>
            {title}
          </h3>
        )}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, idx) => {
          const itemId = `${id}-plan-${idx}`;
          const itemHeadingId = `${itemId}-heading`;
          const itemPlatformId = plan.platform ? `${itemId}-platform` : undefined;
          const itemPriceId = `${itemId}-price`;
          const itemDescId = `${itemId}-desc`;
          const itemDescribedBy = [itemPlatformId, itemPriceId, itemDescId].filter(Boolean).join(' ') || undefined;

          return (
            <article
              key={itemId}
              aria-labelledby={itemHeadingId}
              aria-describedby={itemDescribedBy}
              className={[
                'group relative flex h-full flex-col justify-between surface-card-lift p-6',
                'ring-1 ring-neutral-200 duration-200',
                plan.lastPlan ? 'ring-2 ring-neutral-900' : '',
              ].join(' ')}
            >
              {plan.badgeLabel && (
                <Badge variant="dark" size="sm" className="absolute -top-3 left-4 font-semibold tracking-wider shadow-sm" aria-label={t.featuredPlan}>
                  {plan.badgeLabel}
                </Badge>
              )}

              <div>
                <h4 id={itemHeadingId} className="reveal-animation h5 text-xl font-semibold text-dark">
                  {plan.name}
                </h4>

                {plan.platform && (
                  <span id={itemPlatformId} className="mt-1 block text-sm">
                    {plan.platform}
                  </span>
                )}

                <p id={itemPriceId} className="mt-4">
                  <span className="text-xl font-semibold tracking-tight text-dark">{plan.price}</span>
                </p>

                <p id={itemDescId} className="mt-2 text-[15px] leading-relaxed">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3" role="list">
                  {(plan.features ?? []).map((f, i) => (
                    <li key={`${itemId}-f-${i}`}>
                      <IconText
                        icon={
                          <span
                            className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ring-1 ring-neutral-300 group-hover:ring-neutral-400"
                            title={t.includedInPlan}
                          >
                            <RiCheckFill className="h-3.5 w-3.5" />
                          </span>
                        }
                        gap="3"
                        align="start"
                      >
                        <span className="text-base leading-relaxed">{f}</span>
                      </IconText>
                    </li>
                  ))}
                </ul>
              </div>

              {(plan.btnOne && plan.btnOneLink) || (plan.btnTwo && plan.btnTwoLink) ? (
                <ButtonGroup
                  btnOne={plan.btnOne}
                  btnOneLink={plan.btnOneLink}
                  btnOneVariant={plan.lastPlan ? 'dark' : 'accent'}
                  btnTwo={plan.btnTwo}
                  btnTwoLink={plan.btnTwoLink}
                  spacing="default"
                  align="left"
                  ariaLabel={`${t.planActions}: ${plan.name}`}
                  className="mt-6"
                />
              ) : null}
            </article>
          );
        })}
      </div>

      {note && (
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200" role="note" aria-label={t.noteAriaLabel}>
          <div className="text-[15px] leading-relaxed text-mid">{note.text}</div>
          {note.ctaLink && note.ctaLabel && (
            <div className="mt-4">
              <Button link={note.ctaLink} variant="accent" arrow>
                {note.ctaLabel}
              </Button>
            </div>
          )}
        </div>
      )}

      {legalNote && (
        <p className="pt-4 text-sm text-light leading-relaxed">{legalNote}</p>
      )}
    </section>
  );
}
