import { focusRingClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/utils';

type InputRangeProps = Omit<React.ComponentProps<'input'>, 'type'>;

export default function InputRange({ className, ...props }: InputRangeProps) {
  return (
    <input type='range' className={cn('w-full! p-0!', focusRingClasses, className)} {...props} />
  );
}
