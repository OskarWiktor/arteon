import type { ReactNode } from 'react';
import Wrapper from '../Wrapper';
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
  plans,
  note,
  legalNote = 'Dokładne ceny ustalamy po zapoznaniu sie z indywidualnymi potrzebami',
}: SectionPricesProps) {
  const headingId = `${id}-heading`;
  const subtitleId = subtitle ? `${id}-subtitle` : undefined;
  const describedBy = subtitleId || undefined;

  return (
    <section id={id} aria-labelledby={headingId} aria-describedby={describedBy} className="w-full">
      <Wrapper>
        <div className="mb-8">
          {subtitle && (
            <span id={subtitleId} className="text-xl tracking-widest text-[#5e5e5e] uppercase">
              {subtitle}
            </span>
          )}
          {title && <h3 id={headingId}>{title}</h3>}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {(plans ?? []).map((plan, idx) => {
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
                className={`flex flex-col justify-between rounded-md bg-white p-6 ${plan.lastPlan ? 'ring-2 ring-neutral-900' : 'ring-1 ring-neutral-200'}`}
              >
                <div>
                  {plan.badgeLabel && (
                    <div className="mb-2 inline-flex items-center gap-2">
                      <span aria-hidden="true" className="h-2 w-2 border-r-[8px] border-b-[8px] border-l-[8px] border-r-transparent border-b-neutral-900 border-l-transparent" />
                      <span className="text-xs font-semibold tracking-wider text-[#080808]">{plan.badgeLabel}</span>
                    </div>
                  )}

                  <h4 id={itemHeadingId}>{plan.name}</h4>

                  {plan.platform && (
                    <span id={itemPlatformId} className="pt-1 text-base text-[#5e5e5e]">
                      {plan.platform}
                    </span>
                  )}

                  <p id={itemPriceId} className="pt-4 pb-2">
                    <span className="text-xl">{plan.price} </span>
                    <span className="font-normal text-[#5e5e5e]">brutto</span>
                  </p>

                  <span id={itemDescId} className="text-base text-[#5e5e5e]">
                    {plan.description}
                  </span>

                  <ul className="mt-6 list-disc space-y-2 pl-5 text-sm marker:text-[#0A0A0A]" role="list">
                    {(plan.features ?? []).map((f, i) => (
                      <li key={`${itemId}-f-${i}`} className="leading-relaxed">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                {(plan.btnOne && plan.btnOneLink) || (plan.btnTwo && plan.btnTwoLink) ? (
                  <div className="mt-6 flex flex-wrap gap-2" role="group" aria-label={`Działania planu: ${plan.name}`}>
                    {plan.btnOne && plan.btnOneLink && (
                      <Button link={plan.btnOneLink} variant="dark" arrow>
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
          <aside className="mt-8 mb-4 rounded-md bg-white p-6 ring-1 ring-neutral-200" role="note" aria-label="Informacja">
            {note.text}
            {note.ctaLink && note.ctaLabel && (
              <div className="mt-4">
                <Button link={note.ctaLink} variant="accent" arrow>
                  {note.ctaLabel}
                </Button>
              </div>
            )}
          </aside>
        )}

        {legalNote && <p className="text-[#5e5e5e]">{legalNote}</p>}
      </Wrapper>
    </section>
  );
}
