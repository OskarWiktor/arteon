import { cn } from '@/lib/utils';
import ButtonLink from '../atoms/buttons/ButtonLink';

type SpacingClasses = 'default' | 'loose';
type AlignClasses = 'left' | 'center' | 'right';

interface ButtonGroupProps {
  btnOne?: string;
  btnOneHref: string;
  btnOneVariant?: 'accent' | 'normal';
  btnTwo?: string;
  btnTwoHref: string;
  btnTwoVariant?: 'accent' | 'normal';
  className?: string;
  spacing?: SpacingClasses;
  align?: AlignClasses;
  ariaLabel?: string;
  role?: 'group' | 'none';
}

const spacingClasses: Record<SpacingClasses, string> = {
  default: 'mt-2 md:mt-4 lg:mt-6',
  loose: 'mt-4 md:mt-6 lg:mt-8',
};

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
  className,
  spacing = 'default',
  align = 'left',
  ariaLabel,
  role = 'group',
}: ButtonGroupProps) {
  if (!btnOne && !btnTwo) return null;

  return (
    <div
      className={cn(
        'flex flex-wrap gap-3',
        spacingClasses[spacing],
        alignClasses[align],
        className,
      )}
      role={role}
      aria-label={ariaLabel}
    >
      {btnOne && (
        <ButtonLink arrow variant={btnOneVariant} href={btnOneHref}>
          {btnOne}
        </ButtonLink>
      )}
      {btnTwo && (
        <ButtonLink arrow variant={btnTwoVariant} href={btnTwoHref}>
          {btnTwo}
        </ButtonLink>
      )}
    </div>
  );
}
