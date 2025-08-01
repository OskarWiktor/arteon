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
          <select id="topic" name="Zakres współpracy" required defaultValue="" className="w-full border-b border-gray-300 bg-transparent px-2 py-1.5 text-gray-700 transition focus:outline-none">
            <option value="" disabled>
              Wybierz temat
            </option>
            <option value="WWW">Strona, sklep, blog</option>
            <option value="Content">Treść, artykuły</option>
            <option value="Design">Identyfikacja wizualna, grafika</option>
            <option value="Marketing">Marketing, reklamy, social media</option>
            <option value="Inne">Inny temat</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="font-semibold text-gray-800">
            Wiadomość
          </label>
          <textarea
            id="message"
            name="Wiadomość"
            placeholder="Chciałbym stworzyć stronę..."
            required
            className="h-48 w-full resize-none border border-gray-300 bg-transparent px-2 py-2 text-gray-700 transition focus:outline-none"
          />
        </div>

        <Button variant="accent">Wyślij</Button>

        {formStatus === 'error' && <span className="text-red-700">Coś poszło nie tak. Sprawdź poprawność danych i próbuj ponownie</span>}
        {formStatus === 'success' && <span className="text-amber-500">Wiadomość wysłana! Już szykujemy odpowiedź</span>}
      </form>
    </Wrapper>
  );
}
