import type { ReactNode } from 'react';
import Wrapper from '@/components/ui/Wrapper';
import Gap from '@/components/ui/Gap';

export default function ToolsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="hidden lg:block">{children}</div>

      <div className="block lg:hidden">
        <Wrapper>
          <Gap size="xl" />
          <section className="mx-auto max-w-xl rounded-2xl border border-black/10 bg-white/90 p-6 text-sm shadow-sm">
            <h1 className="mb-3 text-lg font-semibold">To narzędzie działa na większym ekranie</h1>
            <p className="mb-3 text-slate-700">Żeby wygodnie skorzystać z&nbsp;tego narzędzia, otwórz je na laptopie, komputerze stacjonarnym lub tablecie w&nbsp;poziomie.</p>
            <div className="rounded-xl bg-slate-50 px-4 py-3 text-xs text-slate-600">
              <p className="mb-1 font-medium">Podpowiedź</p>
              <p>Jeśli korzystasz z tabletu, przełącz go w&nbsp;tryb poziomy - gdy szerokość okna będzie większa, narzędzie załaduje się automatycznie.</p>
            </div>
          </section>
          <Gap size="xl" />
        </Wrapper>
      </div>
    </>
  );
}
