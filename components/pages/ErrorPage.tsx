'use client';

import { useEffect } from 'react';
import Button from '@/components/atoms/buttons/Button';
import Wrapper from '@/components/atoms/Wrapper';
import type { ErrorPagesDictionary } from '@/lib/i18n/get-dictionary';
import ButtonLink from '../atoms/buttons/ButtonLink';

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
  t: ErrorPagesDictionary['error'];
  homeHref: string;
  contactHref: string;
};

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
      <div className='flex min-h-[60vh] flex-col items-center justify-center px-6 text-center'>
        <h1 className='mb-4'>{t.title}</h1>
        <p className='text-light mb-8 max-w-md text-lg leading-relaxed'>{t.description}</p>
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
          <p className='text-light mt-8 text-xs'>
            {t.errorCode}: <code className='rounded bg-neutral-100 px-2 py-1'>{error.digest}</code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
