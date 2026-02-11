import type { ReactNode } from 'react';

import Gap from '@/components/ui/Gap';
import Wrapper from '@/components/ui/Wrapper';

export default function DesktopOnlyToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden lg:block">{children}</div>

      <div className="block lg:hidden">
        <Wrapper>
          <Gap size="xl" />
          <section className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white/90 p-6 text-sm shadow-sm">
            <h2 className="mb-3 text-lg font-semibold">This tool works on a larger screen</h2>
            <p className="text-mid mb-3">To use this tool comfortably, open it on a laptop, desktop computer, or tablet in landscape mode.</p>
            <div className="text-light rounded-xl bg-neutral-50 px-4 py-3 text-xs">
              <p className="mb-1 font-medium">Tip</p>
              <p>If you are using a tablet, switch it to landscape mode — when the window width is large enough, the tool will load automatically.</p>
            </div>
          </section>
          <Gap size="xl" />
        </Wrapper>
      </div>
    </>
  );
}
