'use client';

import { useState } from 'react';
import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

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
  };

  return (
    <Wrapper>
      <form className="mt-12 flex w-full flex-col gap-6 px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0" action="https://formspree.io/f/xldnokbw" method="POST" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-semibold text-gray-800">
            Imię i nazwisko
          </label>
          <input
            id="name"
            name="Imię i Nazwisko"
            placeholder="Jan Kowalski"
            type="text"
            required
            className="w-full border-b border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 transition focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-semibold text-gray-800">
            Email
          </label>
          <input
            id="email"
            name="Email"
            placeholder="jan.kowalski@gmail.com"
            type="email"
            required
            className="w-full border-b border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 transition focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="subject" className="font-semibold text-gray-800">
            Temat
          </label>
          <input
            id="subject"
            name="Temat"
            placeholder="Interesuje mnie strona firmy..."
            type="text"
            required
            className="w-full border-b border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 transition focus:outline-none"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold text-gray-800">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="Wiadomość"
            placeholder="Chciałbym aby na tej stronie..."
            required
            className="h-48 w-full resize-none border border-gray-300 bg-transparent px-2 py-2 text-gray-700 transition focus:outline-none"
          />
        </div>

        <Button variant="accent">Wyślij</Button>

        {formStatus === 'error' && <p className="mt-2 text-red-700">Coś poszło nie tak. Spróbuj ponownie.</p>}
        {formStatus === 'success' && <p className="mt-2 text-[var(--color-accent)]">Wiadomość wysłana! Dziękuję.</p>}
      </form>
    </Wrapper>
  );
}
