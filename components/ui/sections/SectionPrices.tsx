import type { ReactNode } from "react";
import Wrapper from "../Wrapper";
import Button from "../Button";

export type SectionPricesPlan = {
  name: string;
  platform?: string;
  price: string;
  description: string;
  features: string[];
  featured?: boolean;
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
  id = "pricing",
  title = "Przykładowe ceny",
  subtitle = "Pakiety",
  plans,
  note,
  legalNote = 'Ceny orientacyjne. Dokładne ceny ustalamy po zapoznaniu sie z indywidualnymi potrzebami'
}: SectionPricesProps) {
  return (
    <Wrapper>
      <div className="mb-8">
        {subtitle && <span className="text-xl tracking-widest text-[#868686] uppercase">{subtitle}</span>}
        {title && <h3>{title}</h3>}
      </div>

      <div id={id} className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {(plans ?? []).map((plan, idx) => (
          <article
            key={`${plan.name}-${idx}`}
            className={`flex justify-between flex-col rounded-md bg-white p-6 ${
              plan.featured ? "ring-2 ring-neutral-900" : "ring-1 ring-neutral-200"
            }`}
          >
            <div>
            {plan.badgeLabel && (
              <div className="mb-2 inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className="h-2 w-2 border-r-[8px] border-b-[8px] border-l-[8px] border-r-transparent border-b-neutral-900 border-l-transparent"
                />
                <span className="text-xs font-semibold tracking-wider text-[#080808]">
                  {plan.badgeLabel}
                </span>
              </div>
            )}

            <h4>{plan.name}</h4>

            {plan.platform && (
              <span className="mt-1 text-base text-[#868686]">{plan.platform}</span>
            )}

            <p className="mt-4">
              {plan.price} <span className="text-sm font-normal text-[#868686]">brutto</span>
            </p>

            <span className="mt-2 text-base text-[#868686]">{plan.description}</span>

            <ul className="mt-6 space-y-2 text-sm">
              {(plan.features ?? []).map((f, i) => (
                <li key={`${plan.name}-f-${i}`} className="flex items-start gap-2">
                  <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-900" />
                  <span >{f}</span>
                </li>
              ))}
            </ul>
            </div>


            {(plan.btnOne && plan.btnOneLink) || (plan.btnTwo && plan.btnTwoLink) ? (
              <div className="mt-6 flex flex-wrap gap-2">
                {plan.btnOne && plan.btnOneLink && (
                  <Button link={plan.btnOneLink} variant="accent" arrow aria-label={plan.btnOne}>
                    {plan.btnOne}
                  </Button>
                )}
                {plan.btnTwo && plan.btnTwoLink && (
                  <Button link={plan.btnTwoLink} variant="normal" arrow aria-label={plan.btnTwo}>
                    {plan.btnTwo}
                  </Button>
                )}
              </div>
            ) : null}
          </article>
        ))}
      </div>

      {note && (
        <div className="mb-4 mt-8 rounded-md bg-white p-6 ring-1 ring-neutral-200">
          {note.text}
          {note.ctaLink && note.ctaLabel && (
            <div className="mt-4">
              <Button link={note.ctaLink} variant="accent" arrow aria-label={note.ctaLabel}>
                {note.ctaLabel}
              </Button>
            </div>
          )}
        </div>
      )}

      {legalNote && <span className="text-[#868686]">{legalNote}</span>}
    </Wrapper>
  );
}
