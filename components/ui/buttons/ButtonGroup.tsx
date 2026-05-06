import Button from './Button';

interface ButtonGroupProps {
  btnOne?: string;
  btnOneLink?: string;
  btnOneVariant?: 'accent' | 'normal';
  btnTwo?: string;
  btnTwoLink?: string;
  btnTwoVariant?: 'accent' | 'normal';
  className?: string;
  spacing?: 'default' | 'loose';
  align?: 'left' | 'center' | 'right';
  ariaLabel?: string;
  role?: 'group' | 'none';
}

export default function ButtonGroup({
  btnOne,
  btnOneLink,
  btnOneVariant = 'normal',
  btnTwo,
  btnTwoLink,
  btnTwoVariant = 'accent',
  className = '',
  spacing = 'default',
  align = 'left',
  ariaLabel,
  role = 'group',
}: ButtonGroupProps) {
  if (!btnOne && !btnTwo) return null;

  const spacingClasses = {
    default: 'mt-2 md:mt-4 lg:mt-6',
    loose: 'mt-4 md:mt-6 lg:mt-8',
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
