'use client';

import ErrorPageComponent from '@/components/organisms/ErrorPageComponent';
import dict from '@/data/de/dictionary.json';

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
      homeHref='/de/werkzeuge'
      contactHref='/de/kontakt'
    />
  );
}
