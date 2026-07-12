import type { ComponentProps } from 'react';
import { cn } from '@/lib/clsx';

type LabelProps = ComponentProps<'label'> & {
  variant?: 'default' | 'tool';
  required?: boolean;
};

/**
 * Render a styled label element with a required-field indicator.
 *
 * The component always renders a <label> with base layout classes. When `required` is `true`, a visually
 * red asterisk is appended and marked `aria-hidden`. The `variant` prop is kept for API compatibility but
 * renders the same as the default label, so tool-page field labels match the standard form labels.
 *
 * @param variant - Kept for compatibility; no longer changes the label styling
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
        'block font-medium!',
        variant === 'tool' && 'text-dark!',
        className,
      )}
      {...props}
    >
      {children}

      {required && (
        <span aria-hidden='true' className='ml-0.5 text-[#1C1F32]'>
          *
        </span>
      )}
    </label>
  );
}
