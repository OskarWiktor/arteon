'use client';

import Link from 'next/link';
import { useRef, useState } from 'react';
import { useDictionary } from '@/lib/LocaleContext';
import type { Locale } from '@/types/locale';
import Button from '../atoms/buttons/Button';
import InputCheckbox from '../atoms/form/InputCheckbox';
import ToolAlert from '../atoms/ToolAlert';
import InputWithLabel from '../molecules/form/InputWithLabel';
import TextareaWithLabel from '../molecules/form/TextareaWithLabel';
import SectionHeader from '../molecules/SectionHeader';

type ContactFormProps = {
  title?: string;
  description?: React.ReactNode;
  defaultSubject?: string;
  action?: string;
  messagePlaceholder?: string;
  locale?: Locale;
  noTopic?: boolean;
};

export default function ContactForm({
  title,
  description,
  defaultSubject,
  action = 'https://formspree.io/f/xldnokbw',
  messagePlaceholder,
  locale: _locale = 'pl',
  noTopic = false,
}: ContactFormProps) {
  const dict = useDictionary();
  const t = dict.contactForm;
  const privacyPolicyHref =
    dict.legal.find(link => link.key === 'privacy')?.href ??
    '/polityka-prywatnosci';
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>(
    'idle',
  );
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
      <SectionHeader
        title={title}
        description={description}
        titleClassName='h4!'
        descriptionClassName='pt-1! md:pt-2! text-[16px]!'
        containerClassName='pb-0 md:pb-1'
      />

      <form
        ref={formRef}
        className='mt-6 flex w-full flex-col gap-4'
        action={action}
        method='POST'
        onSubmit={handleSubmit}
        aria-describedby='form-status'
      >
        <InputWithLabel
          id='name'
          label={t.nameLabel}
          name='Imię i nazwisko'
          placeholder={t.namePlaceholder}
          type='text'
          autoComplete='name'
          required
        />

        <InputWithLabel
          id='e-mail'
          label={t.emailLabel}
          name='E-mail'
          placeholder={t.emailPlaceholder}
          type='email'
          autoComplete='email'
          required
        />

        {!noTopic && (
          <InputWithLabel
            id='subject'
            label={t.subjectLabel}
            name='Zakres współpracy'
            placeholder={t.subjectPlaceholder}
            type='text'
            required
            defaultValue={defaultSubject}
          />
        )}

        <TextareaWithLabel
          id='message'
          label={t.messageLabel}
          name='Wiadomość'
          placeholder={messagePlaceholder ?? t.messagePlaceholder}
          required
          className='h-48 resize-none'
        />

        <div className='flex items-start gap-2 md:gap-3'>
          <InputCheckbox
            id='privacyConsent'
            name='Zgoda na przetwarzanie danych'
            value='Tak'
            required
            className='h-6! w-6! items-center border-0! border-none! text-dark shadow-[1px_1px_3px_#C6B7A2]'
            onInvalid={e =>
              e.currentTarget.setCustomValidity(t.consentRequiredError)
            }
            onChange={e => e.currentTarget.setCustomValidity('')}
          />
          <label
            htmlFor='privacyConsent'
            className='tool-value cursor-pointer text-mid!'
          >
            {t.consentPrefix}{' '}
            <Link
              href={privacyPolicyHref}
              target='_blank'
              rel='noopener noreferrer'
              className='text-mid! underline underline-offset-2'
            >
              {t.consentLinkText}
            </Link>
            {t.consentSuffix}
          </label>
        </div>

        <Button
          variant='accent'
          onClick={() => formRef.current?.requestSubmit()}
        >
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
