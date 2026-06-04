'use client';

import ErrorPage from '@/components/pages/ErrorPage';
import dict from '@/data/de/dictionary.json';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorPage
      error={error}
      reset={reset}
      t={dict.errorPages.error}
      homeHref='/de/werkzeuge'
      contactHref='/de/kontakt'
    />
  );
}
