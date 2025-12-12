import Button from './Button';

interface ButtonGroupProps {
  btnOne?: string;
  btnOneLink?: string;
  btnOneVariant?: 'accent' | 'normal' | 'dark';
  btnTwo?: string;
  btnTwoLink?: string;
  btnTwoVariant?: 'accent' | 'normal' | 'dark';
  className?: string;
  spacing?: 'default' | 'tight' | 'loose';
  align?: 'left' | 'center' | 'right';
  ariaLabel?: string;
  role?: 'group' | 'none';
}

export default function ButtonGroup({
  btnOne,
  btnOneLink,
  btnOneVariant = 'accent',
  btnTwo,
  btnTwoLink,
  btnTwoVariant = 'normal',
  className = '',
  spacing = 'default',
  align = 'left',
  ariaLabel,
  role = 'group',
}: ButtonGroupProps) {
  if (!btnOne && !btnTwo) return null;

  const spacingClasses = {
    default: 'mt-4 md:mt-6 lg:mt-8',
    tight: 'mt-4 md:mt-5',
    loose: 'mt-6 md:mt-8 lg:mt-10',
  };

  const alignClasses = {
    left: '',
    center: 'md:justify-center',
    right: 'md:justify-end',
  };

  const classes = `flex flex-wrap gap-3 ${spacingClasses[spacing]} ${alignClasses[align]} ${className}`;

  return (
    <div className={classes} role={role} aria-label={ariaLabel}>
      {btnOne && (
        <Button arrow variant={btnOneVariant} link={btnOneLink}>
          {btnOne}
        </Button>
      )}
      {btnTwo && (
        <Button arrow variant={btnTwoVariant} link={btnTwoLink}>
          {btnTwo}
        </Button>
      )}
    </div>
  );
}

