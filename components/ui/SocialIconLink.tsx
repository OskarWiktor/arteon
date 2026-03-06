import type { ReactNode } from 'react';

type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
  iconClassName?: string;
  target?: string;
  rel?: string;
};

export default function SocialIconLink({ href, label, icon, className = '', iconClassName = '', target = '_blank', rel = 'noopener noreferrer' }: SocialIconLinkProps) {
  return (
    <a href={href} target={target} rel={rel} aria-label={label} className={className}>
      <span className={iconClassName} aria-hidden="true">
        {icon}
      </span>
    </a>
  );
}
