'use client';

import ErrorPageComponent from '@/components/organisms/ErrorPageComponent';
import dict from '@/data/nl/dictionary.json';

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
      homeHref='/nl/tools'
      contactHref='/nl/contact'
    />
  );
}
