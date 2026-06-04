'use client';

import { useRef, useState } from 'react';
import { useDictionary } from '@/lib/LocaleContext';
import type { Locale } from '@/types/locale';
import Button from '../atoms/buttons/Button';
import ToolAlert from '../atoms/ToolAlert';
import InputWithLabel from '../molecules/form/InputWithLabel';
import TextareaWithLabel from '../molecules/form/TextareaWithLabel';
import SectionHeader from '../molecules/SectionHeader';

type ContactFormProps = {
  title: string;
  description?: React.ReactNode;
  defaultSubject?: string;
  action?: string;
  messagePlaceholder?: string;
  locale?: Locale;
};

export default function ContactForm({
  title,
  description,
  defaultSubject,
  action = 'https://formspree.io/f/xldnokbw',
  messagePlaceholder,
  locale: _locale = 'pl',
}: ContactFormProps) {
  const t = useDictionary().contactForm;
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
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

  return (
    <section id='kontakt' className='scroll-mt-26'>
      <SectionHeader title={title} description={description} />

      <form
        ref={formRef}
        className='mt-6 flex w-full flex-col gap-5'
        action={action}
        method='POST'
        onSubmit={handleSubmit}
        aria-describedby='form-status'
      >
        <InputWithLabel
          id='name'
          label={t.nameLabel}
          name='Imię i Nazwisko'
          placeholder={t.namePlaceholder}
          type='text'
          autoComplete='name'
          required
        />

        <InputWithLabel
          id='email'
          label={t.emailLabel}
          name='Email'
          placeholder={t.emailPlaceholder}
          type='email'
          autoComplete='email'
          required
        />

        <InputWithLabel
          id='subject'
          label={t.subjectLabel}
          name='Zakres współpracy'
          placeholder={t.subjectPlaceholder}
          type='text'
          required
          defaultValue={defaultSubject}
        />

        <TextareaWithLabel
          id='message'
          label={t.messageLabel}
          name='Wiadomość'
          placeholder={messagePlaceholder ?? t.messagePlaceholder}
          required
          className='h-48 resize-none'
        />

        <Button variant='accent' arrow onClick={() => formRef.current?.requestSubmit()}>
          {t.send}
        </Button>

        <span id='form-status' className='sr-only' aria-live='polite' />

        {formStatus === 'error' && (
          <ToolAlert variant='error' className='mt-2'>
            {t.error}
          </ToolAlert>
        )}
        {formStatus === 'success' && (
          <ToolAlert variant='success' className='mt-2'>
            {t.success}
          </ToolAlert>
        )}
      </form>
    </section>
  );
}
