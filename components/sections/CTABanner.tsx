import type { ReactNode } from 'react';
import Wrapper from '../ui/Wrapper';
import SectionHeader from '../ui/typography/SectionHeader';
import ButtonGroup from '../ui/ButtonGroup';

const ui = {
  pl: {
    actionsLabel: 'Działania sekcji',
  },
} as const;

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
  const t = ui.pl;
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
          <SectionHeader
            subtitle={subtitle}
            title={title}
            description={description}
            headingLevel="h3"
            eyebrowVariant="dynamic"
            eyebrowClassName={`text-base tracking-wider uppercase ${overlay === 'black' ? 'text-white' : 'text-slate-900'}`}
            headingClassName="reveal-animation"
            descriptionClassName={`reveal-animation mx-auto mt-3 text-base leading-relaxed md:mt-5 md:text-lg ${toneMutedClass}`}
          />

          <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" align="center" ariaLabel={t.actionsLabel} role="group" />
        </div>
      </Wrapper>
    </section>
  );
}
