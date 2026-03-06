import type { ButtonHTMLAttributes, ReactNode } from 'react';

type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> & {
  label: string;
  children: ReactNode;
  size?: 'sm' | 'md';
};

export default function IconButton({ label, children, size = 'md', className = '', type = 'button', ...props }: IconButtonProps) {
  const sizeClasses = size === 'sm' ? 'h-7 w-7' : 'h-9 w-9';

  const baseClasses =
    'inline-flex items-center justify-center rounded transition focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  return (
    <button type={type} aria-label={label} className={`${baseClasses} ${sizeClasses} ${className}`} {...props}>
      {children}
    </button>
  );
}
