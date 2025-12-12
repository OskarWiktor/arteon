import { ReactNode } from 'react';

type TagVariant = 'default' | 'selected' | 'success' | 'error' | 'neutral' | 'dark';
type TagSize = 'sm' | 'md' | 'lg';
type TagElement = 'span' | 'button' | 'label' | 'a';

interface TagProps {
  children: ReactNode;
  variant?: TagVariant;
  size?: TagSize;
  as?: TagElement | 'a';
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

export default function Tag({
  children,
  variant = 'default',
  size = 'md',
  as: Component = 'span',
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
}: TagProps) {
  const sizeClasses: Record<TagSize, string> = {
    sm: 'px-2 py-1 text-xs',
    md: 'px-3 py-1 text-[11px]!',
    lg: 'px-3 py-1 text-[14px]!',
  };

  const variantClasses: Record<TagVariant, string> = {
    default: 'border border-neutral-300 bg-white text-neutral-800',
    selected: 'border border-black bg-slate-600 text-white',
    success: 'bg-emerald-50 text-emerald-800 ring-1 ring-emerald-200',
    error: 'bg-red-50 text-red-800 ring-1 ring-red-200',
    neutral: 'border border-neutral-200 bg-neutral-100 text-neutral-700',
    dark: 'bg-neutral-900 text-white',
  };

  const baseClasses = 'inline-flex items-center rounded-full font-medium';
  const hoverClasses = Component !== 'span' && !disabled ? 'cursor-pointer hover:border-neutral-500' : '';
  const disabledClasses = disabled ? 'cursor-not-allowed opacity-40' : '';
  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${hoverClasses} ${disabledClasses} ${className}`;

  const commonProps = {
    className: classes,
    'aria-label': ariaLabel,
    ...(onClick && !disabled && { onClick }),
    ...(htmlFor && { htmlFor }),
    ...(type && { type }),
    ...(href && { href }),
    ...(download && { download }),
    ...(target && { target }),
    ...(rel && { rel }),
    ...(disabled !== undefined && Component === 'button' && { disabled }),
  };

  return <Component {...commonProps}>{children}</Component>;
}

