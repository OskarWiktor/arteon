import type { ReactNode } from 'react';

type EyebrowVariant = 'default' | 'hero' | 'dynamic';

interface EyebrowProps {
  children: ReactNode;
  variant?: EyebrowVariant;
  className?: string;
  id?: string;
}

export default function Eyebrow({ children, variant = 'default', className = '', id }: EyebrowProps) {
  const baseClasses = 'text-base tracking-wider uppercase';

  const variantClasses: Record<EyebrowVariant, string> = {
    default: `${baseClasses} text-light`,
    hero: 'text-base tracking-wide uppercase sm:text-lg',
    dynamic: '', // Will be handled by className prop
  };

  const classes = variant === 'dynamic' ? className : `${variantClasses[variant]} ${className}`;

  return (
    <span id={id} className={classes}>
      {children}
    </span>
  );
}
