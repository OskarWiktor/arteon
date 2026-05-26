import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

type InputColorProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputColor({ className, ...props }: InputColorProps) {
  return (
    <input
      type='color'
      className={cn(
        'h-10 w-12 cursor-pointer border-none bg-white p-0!',
        focusRingClasses,
        className,
      )}
      {...props}
    />
  );
}
