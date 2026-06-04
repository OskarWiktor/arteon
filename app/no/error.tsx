'use client';

import ErrorPageComponent from '@/components/organisms/ErrorPageComponent';
import dict from '@/data/no/dictionary.json';

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorPageComponent
      error={error}
      reset={reset}
      t={dict.errorPages.error}
      homeHref='/no/verktoy'
      contactHref='/no/kontakt'
    />
  );
}
