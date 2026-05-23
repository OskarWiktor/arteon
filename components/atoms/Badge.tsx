import { ReactNode } from 'react';

interface BadgeProps {
  children?: ReactNode;
  text?: string;
  variant?:
    | 'default'
    | 'selected'
    | 'success'
    | 'error'
    | 'neutral'
    | 'dark'
    | 'warning'
    | 'info'
    | 'tech';
  size?: 'sm' | 'md' | 'lg';
  as?: 'span' | 'button' | 'label' | 'a';
  className?: string;
  onClick?: () => void;
  htmlFor?: string;
  type?: 'button' | 'submit' | 'reset';
  'aria-label'?: string;
  href?: string;
  download?: string;
  target?: string;
  rel?: string;
  disabled?: boolean;
}

const sizeClasses = {
  sm: 'px-2 py-0.5 text-xs',
  md: 'px-3 py-1 text-xs',
  lg: 'px-4 py-1.5 text-sm',
};

const variantClasses = {
  default: 'border border-neutral-300 bg-white text-mid',
  selected: 'border border-black bg-primary text-white',
  success: 'bg-success-bg text-success-text',
  error: 'bg-error-bg text-error-text',
  neutral: 'bg-primary-light text-primary',
  dark: 'bg-neutral-900 text-white',
  warning: 'bg-warning-bg text-warning-text',
  info: 'bg-info-bg text-info-mid',
  tech: 'rounded-md! border border-primary-light bg-white',
};

export default function Badge({
  children,
  text,
  variant = 'default',
  size = 'md',
  as: Component,
  className,
  onClick,
  htmlFor,
  type,
  'aria-label': ariaLabel,
  href,
  download,
  target,
  rel,
  disabled,
}: BadgeProps) {
  const isLegacyTextBadge =
    typeof text === 'string' &&
    children === undefined &&
    variant === undefined &&
    size === undefined &&
    Component === undefined &&
    onClick === undefined &&
    href === undefined &&
    disabled === undefined &&
    className === '';

  if (isLegacyTextBadge) {
    return (
      <span className='inline-block rounded-lg bg-white px-3 py-1 text-xs tracking-wide uppercase shadow-sm'>
        {text}
      </span>
    );
  }

  const resolvedVariant = variant ?? 'default';
  const resolvedSize = size ?? 'md';
  const ResolvedComponent = Component ?? 'span';
  const content = children ?? text;

  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const hoverClasses =
    ResolvedComponent !== 'span' && !disabled ? 'cursor-pointer hover:border-light' : '';
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-40' : '';
  const classes = `${baseClasses} ${sizeClasses[resolvedSize]} ${variantClasses[resolvedVariant]} ${hoverClasses} ${disabledClasses} ${className}`;

  const commonProps = {
    className: classes,
    'aria-label': ariaLabel,
    ...(onClick && !disabled && { onClick }),
    ...(htmlFor && { htmlFor }),
    ...(href && { href }),
    ...(download && { download }),
    ...(target && { target }),
    ...(rel && { rel }),
    ...(type && { type }),
    ...(disabled !== undefined && ResolvedComponent === 'button' && { disabled }),
  };

  return <ResolvedComponent {...commonProps}>{content}</ResolvedComponent>;
}
