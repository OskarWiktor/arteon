import NextLink from 'next/link';
import { ReactNode } from 'react';

interface AppLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'navigation';
  display?: 'inline' | 'inline-block' | 'block';
  'aria-current'?: 'page' | 'step' | 'location' | 'date' | 'time' | boolean;
  'aria-label'?: string;
  target?: string;
  rel?: string;
}

export default function AppLink({
  href,
  children,
  className = '',
  variant = 'default',
  display = 'block',
  'aria-current': ariaCurrent,
  'aria-label': ariaLabel,
  target,
  rel,
}: AppLinkProps) {
  const baseClasses = 'hover-underline rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const variantClasses = {
    default: 'text-base text-[#080808]',
    navigation: 'text-base font-medium text-[#2B2B2B]',
  };

  const displayClasses = {
    inline: 'inline',
    'inline-block': 'inline-block',
    block: '',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${displayClasses[display]} ${className}`;

  return (
    <NextLink href={href} className={classes} aria-current={ariaCurrent} aria-label={ariaLabel} target={target} rel={rel}>
      {children}
    </NextLink>
  );
}

