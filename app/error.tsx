'use client';

import { useEffect } from 'react';
import Button from '@/components/ui/Button';
import Wrapper from '@/components/ui/Wrapper';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Error:', error);
    }
  }, [error]);

  return (
    <Wrapper>
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
        <h1 className="mb-4">Coś poszło nie tak</h1>
        <p className="mb-8 max-w-md text-lg leading-relaxed text-[#5e5e5e]">Wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami, jeśli problem się powtarza.</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={reset} variant="accent" arrow>
            Spróbuj ponownie
          </Button>
          <Button link="/" variant="dark">
            Wróć na stronę główną
          </Button>
          <Button link="/kontakt" arrow>
            Skontaktuj się
          </Button>
        </div>
        {error.digest && (
          <p className="mt-8 text-xs text-[#5e5e5e]">
            Kod błędu: <code className="rounded bg-gray-100 px-2 py-1">{error.digest}</code>
          </p>
        )}
      </div>
    </Wrapper>
  );
}
