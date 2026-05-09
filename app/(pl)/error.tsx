'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/buttons/Button';
import Wrapper from '@/components/ui/Wrapper';

type ErrorTranslations = {
  title: string;
  description: string;
  tryAgain: string;
  backHome: string;
  contact: string;
  contactHref: string;
  errorCode: string;
  homeHref: string;
};

const ERROR_TRANSLATIONS: Record<string, ErrorTranslations> = {
  pl: {
    title: 'Coś poszło nie tak',
    description: 'Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub Skontaktuj się, jeśli problem się powtarza.',
    tryAgain: 'Spróbuj ponownie',
    backHome: 'Wróć na stronę główną',
    contact: 'Skontaktuj się',
    contactHref: '/kontakt',
    errorCode: 'Kod błędu',
    homeHref: '/',
  },
};

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  const t = ERROR_TRANSLATIONS.pl;

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <Wrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4">{t.title}</h1>
        <p className="text-light mb-8 max-w-md text-lg leading-relaxed">{t.description}</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={reset} variant="accent" arrow>
            {t.tryAgain}
          </Button>
          <Button link={t.homeHref} variant="accent">
            {t.backHome}
          </Button>
          <Button link={t.contactHref} arrow>
            {t.contact}
          </Button>
        </div>
        {error.digest && (
          <p className="text-light mt-8 text-xs">
            {t.errorCode}: <code className="rounded bg-neutral-100 px-2 py-1">{error.digest}</code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
