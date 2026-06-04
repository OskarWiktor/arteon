'use client';

import { useEffect } from 'react';
import Button from '@/components/atoms/buttons/Button';
import Wrapper from '@/components/atoms/Wrapper';
import type { ErrorPagesDictionary } from '@/lib/i18n/get-dictionary';
import ButtonLink from '../atoms/buttons/ButtonLink';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  t: ErrorPagesDictionary['error'];
  homeHref: string;
  contactHref: string;
};

/**
 * Render an error UI showing localized title/description, optional error digest, and actions to retry or navigate.
 *
 * Displays the provided localized strings and buttons to retry (calls `reset` and then hard-reloads), go home, or contact support. If `error.digest` is present, it is shown as an error code.
 *
 * @param error - The thrown `Error` object; may include an optional `digest` property to show an error code
 * @param reset - Callback invoked to attempt recovery before triggering a full page reload
 * @param t - Localized text for the error page (e.g., `title`, `description`, `tryAgain`, `backHome`, `contact`, `errorCode`)
 * @param homeHref - URL used for the "back home" navigation button
 * @param contactHref - URL used for the "contact" navigation button
 * @returns The rendered React element for the error page
 */
export default function ErrorPage({ error, reset, t, homeHref, contactHref }: ErrorPageProps) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
  }, [error]);

  const handleRetry = () => {
    try {
      reset();
    } catch {
      /* fall through to hard reload */
    }
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  };

  return (
    <Wrapper>
      <div className={cn('min-h-[60vh] flex-col px-6 text-center', flexCenterClasses)}>
        <h1 className='mb-4'>{t.title}</h1>
        <p className='mb-8 max-w-md text-lg leading-relaxed text-light'>{t.description}</p>
        <div className='flex flex-wrap gap-3'>
          <Button onClick={handleRetry} variant='accent' arrow>
            {t.tryAgain}
          </Button>
          <ButtonLink href={homeHref} variant='accent'>
            {t.backHome}
          </ButtonLink>
          <ButtonLink href={contactHref} arrow>
            {t.contact}
          </ButtonLink>
        </div>
        {error.digest && (
          <p className='mt-8 text-xs text-light'>
            {t.errorCode}: <code className='rounded bg-neutral-100 px-2 py-1'>{error.digest}</code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
