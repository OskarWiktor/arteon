'use client';

import ErrorPage from '@/components/pages/ErrorPage';
import dict from '@/data/da/dictionary.json';

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
      homeHref='/da/vaerktojer'
      contactHref='/da/kontakt'
    />
  );
}
