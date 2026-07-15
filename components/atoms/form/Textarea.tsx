import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

/**
 * Render a styled native textarea element.
 *
 * Composes a default set of utility classes with focus ring classes and any additional
 * classes provided via `className`, then forwards all other textarea props to the element.
 *
 * @param className - Additional CSS class names to merge with the component's base classes
 * @param props - All other standard textarea props which are forwarded to the underlying element
 * @returns A textarea JSX element with the composed `className` and forwarded props
 */
export default function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'w-full border border-neutral-200 bg-white px-3 py-2 text-sm! text-dark shadow-[1px_1px_3px_#C6B7A2] transition',
        focusRingClasses,
        className,
      )}
      {...props}
    />
  );
}
