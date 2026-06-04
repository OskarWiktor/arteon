import { focusRingClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

export default function SkipToContent({ label }: { label: string }) {
  return (
    <div id='skip-link'>
      <a
        href='#main-content'
        className={cn(
          'fixed top-3 left-3 z-80 translate-x-[-110%] rounded-lg bg-white px-3 py-2 text-sm font-medium text-dark shadow ring-1 ring-black/10 transition-transform duration-200 outline-none focus:translate-x-0',
          focusRingClasses,
        )}
      >
        {label}
      </a>
    </div>
  );
}
