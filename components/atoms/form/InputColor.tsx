import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

type InputColorProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputColor({ className, ...props }: InputColorProps) {
  return (
    <input
      type='color'
      className={cn('h-10 w-9 cursor-pointer', focusRingClasses, className)}
      {...props}
    />
  );
}
