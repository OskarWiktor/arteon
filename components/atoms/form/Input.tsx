import { focusRingClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';

const inputClasses =
  'w-full text-dark rounded-sm border border-neutral-300 bg-white px-3 py-2 text-sm transition h-11';

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
