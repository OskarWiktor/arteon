import type { BadgeVariant, BadgeSize, BadgeElement, BadgeProps } from '@/types/ui';
export type { BadgeVariant, BadgeSize, BadgeElement, BadgeProps } from '@/types/ui';

export default function Badge({ children, text, variant, size, as: Component, className = '', onClick, htmlFor, type, 'aria-label': ariaLabel, href, download, target, rel, disabled }: BadgeProps) {
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
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-xs',
    lg: 'px-4 py-1.5 text-sm',
  };

  const variantClasses: Record<BadgeVariant, string> = {
    default: 'border border-neutral-300 bg-white text-mid',
    selected: 'border border-black bg-primary text-white',
    success: 'bg-success-bg text-success-text',
    error: 'bg-error-bg text-error-text',
    neutral: 'bg-primary-light text-primary',
    dark: 'bg-neutral-900 text-white',
    warning: 'bg-warning-bg text-warning-text',
    info: 'bg-info-bg text-info-mid',
    tech: 'rounded-lg! border border-primary-light bg-white',
  };

  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const hoverClasses = ResolvedComponent !== 'span' && !disabled ? 'cursor-pointer hover:border-light' : '';
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
