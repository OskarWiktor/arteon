import type { ReactNode } from 'react';

export type BadgeVariant = 'default' | 'selected' | 'success' | 'error' | 'neutral' | 'dark';
export type BadgeSize = 'sm' | 'md' | 'lg';
export type BadgeElement = 'span' | 'button' | 'label' | 'a';

export interface BadgeProps {
  children?: ReactNode;
  text?: string;
  variant?: BadgeVariant;
  size?: BadgeSize;
  as?: BadgeElement;
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

export default function Badge({
  children,
  text,
  variant,
  size,
  as: Component,
  className = '',
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
    return <span className="inline-block rounded-2xl bg-white px-3 py-1 text-xs tracking-wide uppercase shadow-sm">{text}</span>;
  }

  const resolvedVariant: BadgeVariant = variant ?? 'default';
  const resolvedSize: BadgeSize = size ?? 'md';
  const ResolvedComponent: BadgeElement = Component ?? 'span';
  const content = children ?? text;

  const sizeClasses: Record<BadgeSize, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-[11px]!',
    lg: 'px-3 py-1 text-[14px]!',
  };

  const variantClasses: Record<BadgeVariant, string> = {
    default: 'border border-neutral-300 bg-white text-mid',
    selected: 'border border-black bg-slate-600 text-white',
    success: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200',
    error: 'bg-red-50 text-red-800 ring-1 ring-red-200',
    neutral: 'border border-neutral-200 bg-neutral-100 text-mid',
    dark: 'bg-neutral-900 text-white',
  };

  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const hoverClasses = ResolvedComponent !== 'span' && !disabled ? 'cursor-pointer hover:border-neutral-500' : '';
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
