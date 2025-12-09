'use client';

import { useRef, useState } from 'react';
import Button from '../ui/Button';

const ui = {
  pl: {
    nameLabel: 'Imię i nazwisko',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'Email',
    emailPlaceholder: 'jan.kowalski@gmail.com',
    subjectLabel: 'Temat',
    subjectPlaceholder: 'np. Strona | Sklep | Social Media | Logo',
    messageLabel: 'Wiadomość',
    messagePlaceholder: 'Prowadzę firmę zajmującą się... chciałbym stworzyć...',
    submit: 'Wyślij',
    error: 'Coś poszło nie tak. Sprawdź poprawność danych i spróbuj ponownie.',
    success: 'Wiadomość wysłana! Odpowiemy tak szybko, jak to tylko możliwe.',
  },
} as const;

type ContactFormProps = {
  title?: string;
  description?: React.ReactNode;
  defaultSubject?: string;
  action?: string;
};

export default function ContactForm({ title, description, defaultSubject, action = 'https://formspree.io/f/xldnokbw' }: ContactFormProps) {
  const t = ui.pl;
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
    'h-11 w-full rounded-2xl border border-gray-300 bg-transparent px-3 py-2 text-gray-900 transition ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white';

  return (
    <section id="kontakt" className="scroll-mt-26">
      {(title || description) && (
        <header className="mb-6">
          {title && <h2 className="h3 reveal-animation">{title}</h2>}
          {description && <p className="pt-3 pb-2 text-[#2B2B2B]">{description}</p>}
        </header>
      )}

      <form ref={formRef} className="flex w-full flex-col gap-5" action={action} method="POST" onSubmit={handleSubmit} aria-describedby="form-status">
        <div className="flex flex-col gap-1">
          <label htmlFor="name">{t.nameLabel}</label>
          <input id="name" name="Imię i Nazwisko" placeholder={t.namePlaceholder} type="text" autoComplete="name" required className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email">{t.emailLabel}</label>
          <input id="email" name="Email" placeholder={t.emailPlaceholder} type="email" autoComplete="email" required className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="subject">{t.subjectLabel}</label>
          <input id="subject" name="Zakres współpracy" placeholder={t.subjectPlaceholder} type="text" required defaultValue={defaultSubject} className={fieldClass} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message">{t.messageLabel}</label>
          <textarea id="message" name="Wiadomość" placeholder={t.messagePlaceholder} required className={fieldClass + ' h-48 resize-none'} />
        </div>

        <input type="hidden" name="Źródło" value={typeof window !== 'undefined' ? window.location.href : ''} />

        <Button variant="accent" arrow onClick={() => formRef.current?.requestSubmit()}>
          {t.submit}
        </Button>

        <span id="form-status" className="sr-only" aria-live="polite" />

        {formStatus === 'error' && (
          <p role="alert" className="text-red-700">
            {t.error}
          </p>
        )}
        {formStatus === 'success' && (
          <p role="status" className="text-slate-500">
            {t.success}
          </p>
        )}
      </form>
    </section>
  );
}
