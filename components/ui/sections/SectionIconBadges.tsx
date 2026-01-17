import type { ReactNode } from 'react';
import Wrapper from '../Wrapper';

interface Badge {
  icon: ReactNode;
  label: string;
}

interface SectionIconBadgesProps {
  title?: string;
  badges: Badge[];
}

export default function SectionIconBadges({ title, badges }: SectionIconBadgesProps) {
  return (
    <section data-section="icon-badges" aria-labelledby={title ? 'badges-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="badges-title" className="h4 reveal-animation mb-6 text-center">
            {title}
          </h2>
        )}

        <div className="flex flex-wrap items-center justify-center gap-4">
          {badges.map((badge, index) => (
            <div key={index} className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 shadow-sm">
              <span className="text-slate-800">{badge.icon}</span>
              <span className="text-sm font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
