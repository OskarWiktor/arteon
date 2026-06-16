import { cn } from '@/lib/clsx';
import { focusRingClasses, smallIconSizeClasses } from '@/lib/uiClasses';

type InputCheckboxProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputCheckbox({
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <input
      type='checkbox'
      className={cn(
        'rounded-sm border-neutral-300',
        smallIconSizeClasses,
        focusRingClasses,
        className,
      )}
      {...props}
    />
  );
}
