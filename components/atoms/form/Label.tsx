import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type LabelProps = ComponentProps<'label'> & {
  variant?: 'default' | 'tool';
  required?: boolean;
};

export default function Label({
  variant = 'default',
  required = false,
  className,
  children,
  ...props
}: LabelProps) {
  return (
    <label
      className={cn(
        'mb-1 block',
        variant === 'tool' && 'text-xs! font-medium! text-mid! uppercase!',
        className,
      )}
      {...props}
    >
      {children}

      {required && (
        <span aria-hidden='true' className='ml-0.5 text-red-500'>
          *
        </span>
      )}
    </label>
  );
}
