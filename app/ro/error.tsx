'use client';

import dict from '@/data/ro/dictionary.json';
import ErrorPage from '@/components/pages/ErrorPage';

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
      homeHref='/ro/instrumente'
      contactHref='/ro/contact'
    />
  );
}
