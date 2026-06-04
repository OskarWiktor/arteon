'use client';

import ErrorPage from '@/components/pages/ErrorPage';
import dict from '@/data/pl/dictionary.json';

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
      homeHref='/'
      contactHref='/kontakt'
    />
  );
}
