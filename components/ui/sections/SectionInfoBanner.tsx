import type { ReactNode } from 'react';
import Wrapper from '../Wrapper';
import AppLink from '../AppLink';

interface SectionInfoBannerProps {
  icon: ReactNode;
  text: string;
  highlight?: string;
  btnLabel: string;
  btnLink: string;
}

export default function SectionInfoBanner({ icon, text, highlight, btnLabel, btnLink }: SectionInfoBannerProps) {
  return (
    <section data-section="info-banner" className="bg-slate-800 py-4 text-white">
      <Wrapper>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <span className="text-amber-400">{icon}</span>
            <p className="text-center md:text-left">
              {highlight && <strong>{highlight} </strong>}
              {text}
            </p>
          </div>
          <AppLink
            href={btnLink}
            className="flex-shrink-0 rounded-lg bg-white px-4 py-2 text-sm font-medium text-slate-800 transition hover:bg-slate-100"
          >
            {btnLabel}
          </AppLink>
        </div>
      </Wrapper>
    </section>
  );
}
