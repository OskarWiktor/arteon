import NextLink from 'next/link';
import type { ReactNode } from 'react';

interface AppLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'navigation';
  display?: 'inline' | 'inline-block';
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean;
  'aria-label'?: string;
  target?: string;
  rel?: string;
}

export default function AppLink({ href, children, className = '', variant = 'default', display, 'aria-current': ariaCurrent, 'aria-label': ariaLabel, target, rel }: AppLinkProps) {
  const baseClasses = 'hover-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const variantClasses = {
    default: 'text-base text-dark',
    navigation: 'text-base font-medium text-mid',
  };

  const displayClasses = {
    inline: 'inline',
    'inline-block': 'inline-block',
  };

  const displayClass = display ? displayClasses[display] : '';
  const classes = `${baseClasses} ${variantClasses[variant]} ${displayClass} ${className}`;

  return (
    <NextLink href={href} prefetch={false} className={classes} aria-current={ariaCurrent} aria-label={ariaLabel} target={target} rel={rel}>
      {children}
    </NextLink>
  );
}
