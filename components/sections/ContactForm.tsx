'use client';

import { useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import ToolAlert from '../ui/tools/ToolAlert';

type ContactFormProps = {
  title?: string;
  description?: React.ReactNode;
  defaultSubject?: string;
  action?: string;
  messagePlaceholder?: string;
  noSection?: boolean;
};

export default function ContactForm({ title, description, defaultSubject, action = 'https://formspree.io/f/xldnokbw', messagePlaceholder, noSection }: ContactFormProps) {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        setFormStatus('success');
        form.reset();
      } else {
        setFormStatus('error');
      }
    } catch {
      setFormStatus('error');
    }
  };

  const fieldClass =
    'h-11 w-full rounded-2xl border border-neutral-300 bg-transparent px-3 py-2 text-dark transition ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  const content = (
    <>
      {(title || description) && (
        <header className="mb-6">
          {title && <h2 className="h3">{title}</h2>}
          {description && <p className="text-mid pt-3 pb-2">{description}</p>}
        </header>
      )}

      <form ref={formRef} className="flex w-full flex-col gap-5" action={action} method="POST" onSubmit={handleSubmit} aria-describedby="form-status">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">Imię i nazwisko</label>
          <input id="name" name="Imię i Nazwisko" placeholder="Jan Kowalski" type="text" autoComplete="name" required className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input id="email" name="Email" placeholder="jan.kowalski@gmail.com" type="email" autoComplete="email" required className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject">Temat</label>
          <input id="subject" name="Zakres współpracy" placeholder="np. Strona | Sklep | media społecznościowe | Logo" type="text" required defaultValue={defaultSubject} className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">Wiadomość</label>
          <textarea id="message" name="Wiadomość" placeholder={messagePlaceholder ?? 'Prowadzę firmę zajmującą się... chciałbym stworzyć...'} required className={fieldClass + ' h-48 resize-none'} />
        </div>

        <input type="hidden" name="Źródło" value={typeof window !== 'undefined' ? window.location.href : ''} />

        <Button variant="accent" arrow onClick={() => formRef.current?.requestSubmit()}>
          Wyślij
        </Button>

        <span id="form-status" className="sr-only" aria-live="polite" />

        {formStatus === 'error' && (
          <ToolAlert variant="error" className="mt-2">
            Coś poszło nie tak. Sprawdź poprawność danych i spróbuj ponownie.
          </ToolAlert>
        )}
        {formStatus === 'success' && (
          <ToolAlert variant="success" className="mt-2">
            Wiadomość wysłana! Odpowiemy tak szybko, jak to tylko możliwe.
          </ToolAlert>
        )}
      </form>
    </>
  );

  if (noSection) return content;

  return (
    <section id="kontakt" className="scroll-mt-26">
      {content}
    </section>
  );
}
