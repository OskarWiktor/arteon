'use client';

import { useEffect } from 'react';
import Button from '@/components/atoms/buttons/Button';
import Wrapper from '@/components/atoms/Wrapper';
import { cn } from '@/lib/clsx';
import type { ErrorPageComponentsDictionary } from '@/lib/i18n/getDictionary';
import { flexCenterClasses } from '@/lib/uiClasses';
import ButtonLink from '../atoms/buttons/ButtonLink';

type ErrorPageComponentProps = {
  error: Error & { digest?: string };
  reset: () => void;
  t: ErrorPageComponentsDictionary['error'];
  homeHref: string;
  contactHref: string;
};

export default function ErrorPageComponent({
  error,
  reset,
  t,
  homeHref,
  contactHref,
}: ErrorPageComponentProps) {
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
      location.reload();
    }
  };

  return (
    <Wrapper>
      <div
        className={cn(
          'min-h-[60vh] flex-col px-6 text-center',
          flexCenterClasses,
        )}
      >
        <h1 className='mb-4'>{t.title}</h1>
        <p className='mb-8 max-w-md text-lg text-light'>{t.description}</p>
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
            {t.errorCode}:{' '}
            <code className='rounded bg-neutral-100 px-2 py-1'>
              {error.digest}
            </code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
