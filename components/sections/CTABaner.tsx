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

export default function CTABaner({
  title,
  subtitle,
  description,
  primaryLabel,
  primaryLink,
  secondaryLabel,
  secondaryLink,
  backgroundImage,
  overlay = 'none',
}: CTABanerProps) {
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/55' : overlay === 'white' ? 'bg-white/65' : '';
  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-slate-900';
  const toneMutedClass = overlay === 'black' ? 'text-white/90' : 'text-slate-900/70';

  return (
    <section
      className={`relative overflow-hidden ${hasBg ? 'bg-cover bg-center' : ''}`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section="final-cta"
    >
      {hasBg && overlay !== 'none' && (
        <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />
      )}

      <Wrapper className="relative z-10 px-6 py-16 md:py-20">
        <div className={`mx-auto max-w-3xl text-center ${toneTextClass}`}>
          {subtitle && <span className="text-xl tracking-widest uppercase">{subtitle}</span>}

          <h3>{title}</h3>

          {description && (
            <p className={`mx-auto mt-3 text-base leading-relaxed md:text-lg ${toneMutedClass}`}>{description}</p>
          )}

          {(primaryLabel || secondaryLabel) && (
            <div className="mt-8 flex flex-wrap justify-center gap-3" role="group" aria-label="Działania sekcji">
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
