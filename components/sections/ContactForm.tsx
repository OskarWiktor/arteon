'use client';

import { useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import ToolAlert from '../ui/tools/ToolAlert';

type ContactFormLocale = 'pl' | 'en' | 'de' | 'es' | 'fr' | 'pt' | 'it';

const formUi = {
  pl: {
    nameLabel: 'Imię i nazwisko',
    namePlaceholder: 'Jan Kowalski',
    emailLabel: 'Email',
    emailPlaceholder: 'jan.kowalski@gmail.com',
    subjectLabel: 'Temat',
    subjectPlaceholder: 'np. Strona | Sklep | media społecznościowe | Logo',
    messageLabel: 'Wiadomość',
    messagePlaceholder: 'Prowadzę firmę zajmującą się... chciałbym stworzyć...',
    send: 'Wyślij',
    error: 'Coś poszło nie tak. Sprawdź poprawność danych i spróbuj ponownie.',
    success: 'Wiadomość wysłana! Odpowiemy tak szybko, jak to tylko możliwe.',
  },
  en: {
    nameLabel: 'Full name',
    namePlaceholder: 'John Smith',
    emailLabel: 'Email',
    emailPlaceholder: 'john.smith@gmail.com',
    subjectLabel: 'Subject',
    subjectPlaceholder: 'e.g. Bug report | Tool suggestion | Question',
    messageLabel: 'Message',
    messagePlaceholder: 'Describe your question or suggestion...',
    send: 'Send',
    error: 'Something went wrong. Please check your data and try again.',
    success: 'Message sent! We will respond as soon as possible.',
  },
  de: {
    nameLabel: 'Vollständiger Name',
    namePlaceholder: 'Max Mustermann',
    emailLabel: 'E-Mail',
    emailPlaceholder: 'max.mustermann@gmail.com',
    subjectLabel: 'Betreff',
    subjectPlaceholder: 'z.B. Fehlerbericht | Tool-Vorschlag | Frage',
    messageLabel: 'Nachricht',
    messagePlaceholder: 'Beschreiben Sie Ihre Frage oder Ihren Vorschlag...',
    send: 'Senden',
    error: 'Etwas ist schiefgelaufen. Bitte überprüfen Sie Ihre Daten und versuchen Sie es erneut.',
    success: 'Nachricht gesendet! Wir antworten so schnell wie möglich.',
  },
  es: {
    nameLabel: 'Nombre completo',
    namePlaceholder: 'Juan García',
    emailLabel: 'Correo electrónico',
    emailPlaceholder: 'juan.garcia@gmail.com',
    subjectLabel: 'Asunto',
    subjectPlaceholder: 'p. ej. Informe de error | Sugerencia de herramienta | Pregunta',
    messageLabel: 'Mensaje',
    messagePlaceholder: 'Describa su pregunta o sugerencia...',
    send: 'Enviar',
    error: 'Algo salió mal. Verifique sus datos e inténtelo de nuevo.',
    success: '¡Mensaje enviado! Responderemos lo antes posible.',
  },
  fr: {
    nameLabel: 'Nom complet',
    namePlaceholder: 'Jean Dupont',
    emailLabel: 'E-mail',
    emailPlaceholder: 'jean.dupont@gmail.com',
    subjectLabel: 'Sujet',
    subjectPlaceholder: 'ex. Rapport de bug | Suggestion d\u2019outil | Question',
    messageLabel: 'Message',
    messagePlaceholder: 'Décrivez votre question ou suggestion...',
    send: 'Envoyer',
    error: 'Une erreur s\u2019est produite. Vérifiez vos données et réessayez.',
    success: 'Message envoyé\u00a0! Nous répondrons dès que possible.',
  },
  pt: {
    nameLabel: 'Nome completo',
    namePlaceholder: 'João Silva',
    emailLabel: 'E-mail',
    emailPlaceholder: 'joao.silva@gmail.com',
    subjectLabel: 'Assunto',
    subjectPlaceholder: 'ex. Relatório de erro | Sugestão de ferramenta | Pergunta',
    messageLabel: 'Mensagem',
    messagePlaceholder: 'Descreva a sua pergunta ou sugestão...',
    send: 'Enviar',
    error: 'Algo correu mal. Verifique os seus dados e tente novamente.',
    success: 'Mensagem enviada! Responderemos o mais brevemente possível.',
  },
  it: {
    nameLabel: 'Nome completo',
    namePlaceholder: 'Mario Rossi',
    emailLabel: 'E-mail',
    emailPlaceholder: 'mario.rossi@gmail.com',
    subjectLabel: 'Oggetto',
    subjectPlaceholder: 'es. Segnalazione bug | Suggerimento strumento | Domanda',
    messageLabel: 'Messaggio',
    messagePlaceholder: 'Descrivi la tua domanda o il tuo suggerimento...',
    send: 'Invia',
    error: 'Qualcosa è andato storto. Controlla i tuoi dati e riprova.',
    success: 'Messaggio inviato! Risponderemo il prima possibile.',
  },
} as const;

type ContactFormProps = {
  title?: string;
  description?: React.ReactNode;
  defaultSubject?: string;
  action?: string;
  messagePlaceholder?: string;
  noSection?: boolean;
  locale?: ContactFormLocale;
};

export default function ContactForm({ title, description, defaultSubject, action = 'https://formspree.io/f/xldnokbw', messagePlaceholder, noSection, locale = 'pl' }: ContactFormProps) {
  const t = formUi[locale];
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
          <textarea id="message" name="Wiadomość" placeholder={messagePlaceholder ?? t.messagePlaceholder} required className={fieldClass + ' h-48 resize-none'} />
        </div>

        <input type="hidden" name="Źródło" value={typeof window !== 'undefined' ? window.location.href : ''} />

        <Button variant="accent" arrow onClick={() => formRef.current?.requestSubmit()}>
          {t.send}
        </Button>

        <span id="form-status" className="sr-only" aria-live="polite" />

        {formStatus === 'error' && (
          <ToolAlert variant="error" className="mt-2">
            {t.error}
          </ToolAlert>
        )}
        {formStatus === 'success' && (
          <ToolAlert variant="success" className="mt-2">
            {t.success}
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
