import { cn } from '@/lib/clsx';
import ButtonLink from '../atoms/buttons/ButtonLink';

type AlignClasses = 'left' | 'center' | 'right';

interface ButtonGroupProps {
  btnOne?: string;
  btnOneHref?: string;
  btnOneVariant?: 'accent' | 'normal';
  btnTwo?: string;
  btnTwoHref?: string;
  btnTwoVariant?: 'accent' | 'normal';
  align?: AlignClasses;
  ariaLabel?: string;
}

const alignClasses: Record<AlignClasses, string> = {
  left: '',
  center: 'md:justify-center',
  right: 'md:justify-end',
};

export default function ButtonGroup({
  btnOne,
  btnOneHref,
  btnOneVariant = 'normal',
  btnTwo,
  btnTwoHref,
  btnTwoVariant = 'accent',
  align = 'left',
  ariaLabel,
}: ButtonGroupProps) {
  if (!btnOne && !btnTwo) return null;

  return (
    <div
      className={cn('mt-2 flex flex-wrap gap-3 md:mt-6', alignClasses[align])}
      role='group'
      aria-label={ariaLabel}
    >
      {btnOne && btnOneHref && (
        <ButtonLink arrow variant={btnOneVariant} href={btnOneHref}>
          {btnOne}
        </ButtonLink>
      )}
      {btnTwo && btnTwoHref && (
        <ButtonLink arrow variant={btnTwoVariant} href={btnTwoHref}>
          {btnTwo}
        </ButtonLink>
      )}
    </div>
  );
}
