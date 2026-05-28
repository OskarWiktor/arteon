import { focusRingClasses, smallIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

type InputCheckboxProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputCheckbox({ className, ...props }: InputCheckboxProps) {
  return (
    <input
      type='checkbox'
      className={cn(
        'rounded border-neutral-300 p-0!',
        smallIconSizeClasses,
        focusRingClasses,
        className,
      )}
      {...props}
    />
  );
}
