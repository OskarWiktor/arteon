import type { ReactNode } from 'react';
import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

interface CTABannerProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  backgroundImage?: string;
  overlay?: 'none' | 'black' | 'white';
}

export default function CTABanner({ title, subtitle, description, btnOne, btnOneLink, btnTwo, btnTwoLink, backgroundImage, overlay = 'none' }: CTABannerProps) {
  const hasBg = Boolean(backgroundImage);
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/80' : '';
  const baseBg = overlay === 'black' ? 'bg-neutral-900' : 'bg-white';

  const toneTextClass = overlay === 'black' ? 'text-white' : 'text-slate-900';
  const toneMutedClass = overlay === 'black' ? 'text-white/90' : 'text-slate-900/70';

  return (
    <section
      className={`relative flex h-auto min-h-[360px] overflow-hidden md:min-h-[440px] ${hasBg ? 'bg-cover bg-center md:bg-fixed' : ''} ${baseBg}`}
      style={hasBg ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section="final-cta"
    >
      {hasBg && overlay !== 'none' && <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Wrapper className="relative flex h-auto justify-center md:items-center">
        <div className={`mt-6 mb-6 max-w-[100vw] rounded-2xl p-2 md:m-0 md:max-w-[65%] md:p-5 md:text-center lg:p-7 ${toneTextClass} ${overlay === 'black' ? 'bg-black/50' : 'bg-white/70'}`}>
          {subtitle && <span className="text-base tracking-wider uppercase">{subtitle}</span>}

          <h3 className="reveal-animation">{title}</h3>

          {description && <p className={`reveal-animation mx-auto mt-3 text-base leading-relaxed md:mt-5 md:text-lg ${toneMutedClass}`}>{description}</p>}

          {(btnOne || btnTwo) && (
            <div className="mt-6 flex flex-wrap gap-3 md:mt-8 md:justify-center" role="group" aria-label="Działania sekcji">
              {btnOne && (
                <Button link={btnOneLink} arrow variant="accent">
                  {btnOne}
                </Button>
              )}
              {btnTwo && (
                <Button link={btnTwoLink} arrow>
                  {btnTwo}
                </Button>
              )}
            </div>
          )}
        </div>
      </Wrapper>
    </section>
  );
}
