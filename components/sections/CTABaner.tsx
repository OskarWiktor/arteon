import type { ReactNode } from 'react';
import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

interface CTABanerProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  primaryLabel?: string;
  primaryLink?: string;
  secondaryLabel?: string;
  secondaryLink?: string;
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
}

export default function CTABaner({ title, subtitle, description, primaryLabel, primaryLink, secondaryLabel, secondaryLink, backgroundImage, overlay = 'none' }: CTABanerProps) {
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/80' : '';
  const baseBg = overlay === 'black' ? 'bg-neutral-900' : 'bg-white';

  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-slate-900';
  const toneMutedClass = overlay === 'black' ? 'text-white/90' : 'text-slate-900/70';

  return (
    <section
      className={`relative flex h-auto min-h-[360px] overflow-hidden ${hasBg ? 'bg-cover bg-center' : ''} ${baseBg}`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section="final-cta"
    >
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Wrapper className="relative flex h-auto justify-center md:items-center">
        <div className={`max-w-[100vw] rounded-2xl p-2 md:max-w-[65%] md:p-5 md:text-center lg:p-7 ${toneTextClass} ${overlay === 'black' ? 'bg-black/50' : 'bg-white/70'} rounded-2xl p-6`}>
          {subtitle && <span className="text-base tracking-wider uppercase">{subtitle}</span>}

          <h3>{title}</h3>

          {description && <p className={`mx-auto mt-3 text-base leading-relaxed md:mt-5 md:text-lg ${toneMutedClass}`}>{description}</p>}

          {(primaryLabel || secondaryLabel) && (
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:justify-center" role="group" aria-label="Działania sekcji">
              {primaryLabel && (
                <Button link={primaryLink} arrow variant="accent">
                  {primaryLabel}
                </Button>
              )}
              {secondaryLabel && (
                <Button link={secondaryLink} arrow>
                  {secondaryLabel}
                </Button>
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
