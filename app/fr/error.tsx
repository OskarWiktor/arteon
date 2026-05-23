'use client';

import dict from '@/data/fr/dictionary.json';
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
      homeHref='/fr/outils'
      contactHref='/fr/contact'
    />
  );
}
