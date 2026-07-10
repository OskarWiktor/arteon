import { cn } from '@/lib/clsx';
import { focusRingClasses } from '@/lib/uiClasses';

const inputClasses =
  'w-full text-dark rounded-sm shadow-[1px_1px_3px_#C6B7A2] bg-white px-3 py-2 text-sm transition h-11';

export default function Input({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(inputClasses, focusRingClasses, className)}
      {...props}
    />
  );
}
