import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

type InputCheckboxProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputCheckbox({ className, ...props }: InputCheckboxProps) {
  return (
    <input
      type='checkbox'
      className={cn('h-4 w-4! rounded border-neutral-300 p-0!', focusRingClasses, className)}
      {...props}
    />
  );
}
