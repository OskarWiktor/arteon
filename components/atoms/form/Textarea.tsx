import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

export default function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-neutral-300 bg-white px-3 py-2 text-sm! text-dark transition',
        focusRingClasses,
        className,
      )}
      {...props}
    />
  );
}
