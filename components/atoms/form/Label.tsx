import type { ComponentProps } from 'react';
import { cn } from '@/lib/clsx';

type LabelProps = ComponentProps<'label'> & {
  variant?: 'default' | 'tool';
  required?: boolean;
};

/**
 * Render a styled label element with optional "tool" variant styling and a required-field indicator.
 *
 * The component always renders a <label> with base layout classes. When `variant` is `"tool"`, compact
 * uppercase styling is applied. When `required` is `true`, a visually red asterisk is appended and marked
 * `aria-hidden`.
 *
 * @param variant - Controls visual variant; `'tool'` applies compact/uppercase styling, `'default'` uses base styling
 * @param required - If `true`, appends a trailing red `*` to indicate the field is required
 * @param className - Additional CSS class names to append to the label
 * @param children - Label contents
 * @returns The rendered `<label>` element
 */
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
        <span aria-hidden='true' className='ml-0.5 text-error-icon'>
          *
        </span>
      )}
    </label>
  );
}
