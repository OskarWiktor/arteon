'use client';

import { RiMoonLine, RiSunLine } from 'react-icons/ri';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/clsx';
import { useLocale } from '@/lib/LocaleContext';
import { focusRingClasses, normalIconSizeClasses } from '@/lib/uiClasses';

// ToDo locale
function getLabel(locale: string): string {
  return locale === 'pl'
    ? 'Przełącz tryb jasny lub ciemny'
    : 'Toggle light or dark mode';
}

export default function ThemeToggle() {
  const { toggle } = useTheme();
  const locale = useLocale();

  return (
    <button
      type='button'
      onClick={toggle}
      aria-label={getLabel(locale)}
      className={cn(
        'flex h-8 w-8 cursor-pointer items-center justify-center rounded-md text-primary transition-colors hover:bg-primary-light',
        focusRingClasses,
      )}
    >
      <RiMoonLine
        className={cn('dark:hidden', normalIconSizeClasses)}
        aria-hidden='true'
      />
      <RiSunLine
        className={cn('hidden dark:block', normalIconSizeClasses)}
        aria-hidden='true'
      />
    </button>
  );
}
