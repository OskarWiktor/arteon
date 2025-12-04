import type { ReactNode } from 'react';
import { RiCheckFill } from 'react-icons/ri';
import Button from '../Button';

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
  title = 'Przykładowe ceny',
  subtitle = 'Pakiety',
  plans = [],
  note,
  legalNote = 'Dokładne ceny ustalamy po zapoznaniu się z indywidualnymi potrzebami',
}: SectionPricesProps) {
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const describedBy = subtitleId || undefined;

  return (
    <section id={id} aria-labelledby={headingId} aria-describedby={describedBy} className="w-full">
      <div className="mb-8">
        {subtitle && (
          <span id={subtitleId} className="text-sm tracking-wider text-[#5e5e5e] uppercase">
            {subtitle}
          </span>
        )}
        {title && (
          <h3 className="reveal-animation mt-1 text-2xl font-semibold tracking-tight text-[#0a0a0a]" id={headingId}>
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
                'group relative flex h-full flex-col justify-between rounded-2xl bg-white p-6',
                'shadow-md ring-1 ring-neutral-200 transition duration-200',
                'transition hover:-translate-y-0.5 hover:shadow-lg',
                plan.lastPlan ? 'shadow-md ring-2 ring-neutral-900' : '',
              ].join(' ')}
            >
              {plan.badgeLabel && (
                <div className="absolute -top-3 left-4 rounded-full bg-neutral-900 px-3 py-1 text-xs font-semibold tracking-wider text-white shadow-sm" aria-label="Wyróżniony plan">
                  {plan.badgeLabel}
                </div>
              )}

              <div>
                <h4 id={itemHeadingId} className="reveal-animation text-xl font-semibold text-[#0a0a0a]">
                  {plan.name}
                </h4>

                {plan.platform && (
                  <span id={itemPlatformId} className="mt-1 block text-sm text-[#5e5e5e]">
                    {plan.platform}
                  </span>
                )}

                <p id={itemPriceId} className="mt-4">
                  <span className="text-2xl font-semibold tracking-tight text-[#0a0a0a]">{plan.price}</span>
                </p>

                <p id={itemDescId} className="mt-2 text-[15px] leading-relaxed text-[#3a3a3a]">
                  {plan.description}
                </p>

                <ul className="mt-6 space-y-3" role="list">
                  {(plan.features ?? []).map((f, i) => (
                    <li key={`${itemId}-f-${i}`} className="flex items-start gap-3">
                      <span
                        className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full ring-1 ring-neutral-300 group-hover:ring-neutral-400"
                        aria-hidden="true"
                        title="Zawarte w planie"
                      >
                        <RiCheckFill className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm leading-relaxed text-[#222]">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {(plan.btnOne && plan.btnOneLink) || (plan.btnTwo && plan.btnTwoLink) ? (
                <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={`Działania planu: ${plan.name}`}>
                  {plan.btnOne && plan.btnOneLink && (
                    <Button link={plan.btnOneLink} variant={plan.lastPlan ? 'dark' : 'accent'} arrow>
                      {plan.btnOne}
                    </Button>
                  )}
                  {plan.btnTwo && plan.btnTwoLink && (
                    <Button link={plan.btnTwoLink} arrow>
                      {plan.btnTwo}
                    </Button>
                  )}
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {note && (
        <div className="mt-8 rounded-2xl bg-gradient-to-br from-white to-neutral-50 p-6 shadow-sm ring-1 ring-neutral-200" role="note" aria-label="Informacja">
          <div className="text-[15px] leading-relaxed text-[#3a3a3a]">{note.text}</div>
          {note.ctaLink && note.ctaLabel && (
            <div className="mt-4">
              <Button link={note.ctaLink} variant="accent" arrow>
                {note.ctaLabel}
              </Button>
            </div>
          )}
        </div>
      )}

      {legalNote && <p className="pt-4 text-sm leading-relaxed text-[#5e5e5e]">{legalNote}</p>}
    </section>
  );
}
