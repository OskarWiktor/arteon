import type { ReactNode } from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import Wrapper from '../ui/Wrapper';
import SectionHeader from '../ui/typography/SectionHeader';
import ButtonGroup from '../ui/buttons/ButtonGroup';
import AppLink from '../ui/AppLink';

const ui = {
  pl: {
    actionsLabel: 'Działania sekcji',
  },
} as const;

interface CTASplitColumn {
  title: ReactNode;
  description?: ReactNode;
  btnLabel?: string;
  btnLink?: string;
}

interface CTABannerProps {
  variant?: 'default' | 'split';
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  backgroundImage?: string;
  backgroundStyle?: 'image' | 'gradient' | 'solid';
  overlay?: 'none' | 'black' | 'white';
  leftColumn?: CTASplitColumn;
  rightColumn?: CTASplitColumn;
}

export default function CTABanner({
  variant = 'default',
  title,
  subtitle,
  description,
  btnOne,
  btnOneLink,
  btnTwo,
  btnTwoLink,
  backgroundImage,
  backgroundStyle = 'image',
  overlay = 'none',
  leftColumn,
  rightColumn,
}: CTABannerProps) {
  const t = ui.pl;

  if (variant === 'split') {
    return (
      <section data-section="cta-split">
        <Wrapper>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-primary flex flex-col justify-between rounded-2xl p-8 text-white">
              <div>
                <h3 className="h3 mb-3">{leftColumn?.title}</h3>
                {leftColumn?.description && <p className="mb-6 text-white/80">{leftColumn.description}</p>}
              </div>
              {leftColumn?.btnLabel && leftColumn?.btnLink && (
                <AppLink href={leftColumn.btnLink} className="text-primary hover:bg-primary-light inline-flex w-fit items-center gap-2 rounded-xl bg-white px-6 py-3 font-medium transition">
                  {leftColumn.btnLabel}
                  <RiArrowRightLine className="h-5 w-5" />
                </AppLink>
              )}
            </div>
            <div className="flex flex-col justify-between rounded-2xl border border-black/10 bg-white p-8">
              <div>
                <h3 className="h3 mb-3">{rightColumn?.title}</h3>
                {rightColumn?.description && <p className="text-light mb-6">{rightColumn.description}</p>}
              </div>
              {rightColumn?.btnLabel && rightColumn?.btnLink && (
                <AppLink href={rightColumn.btnLink} className="border-primary text-primary inline-flex w-fit items-center gap-2 rounded-xl border px-6 py-3 font-medium transition hover:bg-neutral-50">
                  {rightColumn.btnLabel}
                  <RiArrowRightLine className="h-5 w-5" />
                </AppLink>
              )}
            </div>
          </div>
        </Wrapper>
      </section>
    );
  }

  const hasBg = Boolean(backgroundImage);
  const isGradient = backgroundStyle === 'gradient';
  const isSolid = backgroundStyle === 'solid';
  const overlayClass = overlay === 'black' ? 'bg-black/70' : overlay === 'white' ? 'bg-white/80' : '';
  const baseBg = isGradient ? 'bg-gradient-to-r from-primary to-primary' : isSolid ? 'bg-primary' : overlay === 'black' ? 'bg-neutral-900' : 'bg-white';

  const toneTextClass = isGradient || isSolid || overlay === 'black' ? 'text-white' : 'text-dark';
  const toneMutedClass = isGradient || isSolid || overlay === 'black' ? 'text-white/90' : 'text-light';

  return (
    <section
      className={`relative flex h-auto min-h-[360px] overflow-hidden md:min-h-[440px] ${hasBg && !isGradient && !isSolid ? 'bg-cover bg-center md:bg-fixed' : ''} ${baseBg}`}
      style={hasBg && !isGradient && !isSolid ? { backgroundImage: `url(${backgroundImage})` } : undefined}
      data-section="final-cta"
    >
      {hasBg && !isGradient && !isSolid && overlay !== 'none' && <div aria-hidden="true" className={`pointer-events-none absolute inset-0 z-0 ${overlayClass}`} />}

      <Wrapper className="relative flex h-auto justify-center md:items-center">
        <div
          className={`mt-6 mb-6 max-w-[100vw] rounded-2xl p-2 md:m-0 md:max-w-[65%] md:p-5 md:text-center lg:p-7 ${toneTextClass} ${isGradient || isSolid ? 'bg-transparent' : overlay === 'black' ? 'bg-black/50' : 'bg-white/70'}`}
        >
          <SectionHeader
            subtitle={subtitle}
            title={title}
            description={description}
            headingLevel="h3"
            eyebrowVariant="dynamic"
            eyebrowClassName={`text-base tracking-wider uppercase ${overlay === 'black' ? 'text-white' : 'text-dark'}`}
            headingClassName=""
            descriptionClassName={` mx-auto text-base leading-relaxed md:text-lg ${toneMutedClass}`}
          />

          <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" align="center" ariaLabel={t.actionsLabel} role="group" />
        </div>
      </Wrapper>
    </section>
  );
}
