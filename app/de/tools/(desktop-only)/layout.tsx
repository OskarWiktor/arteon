import type { ReactNode } from 'react';

import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';
import { DESKTOP_ONLY_UI } from '@/lib/i18n/locales';

const t = DESKTOP_ONLY_UI.de;

export default function DesktopOnlyToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden lg:block">{children}</div>

      <div className="block lg:hidden">
        <Wrapper>
          <Gap size="xl" />
          <section className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white/90 p-6 text-sm shadow-sm">
            <h2 className="mb-3 text-lg font-semibold">{t.title}</h2>
            <p className="text-mid mb-3">{t.description}</p>
            <div className="text-light rounded-xl bg-neutral-50 px-4 py-3 text-xs">
              <p className="mb-1 font-medium">{t.tipTitle}</p>
              <p>{t.tipText}</p>
            </div>
          </section>
          <Gap size="xl" />
        </Wrapper>
      </div>
    </>
  );
}
