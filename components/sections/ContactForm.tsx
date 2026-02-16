'use client';

import { useRef, useState } from 'react';
import Button from '../ui/buttons/Button';
import ToolAlert from '../ui/tools/ToolAlert';

type ContactFormLocale = 'pl' | 'en' | 'de' | 'es' | 'fr' | 'pt' | 'it' | 'ro' | 'nl' | 'hu' | 'id' | 'vi' | 'tr' | 'tl' | 'sw' | 'ms' | 'cs' | 'sv' | 'sq' | 'da';

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
  ro: {
    nameLabel: 'Nume complet',
    namePlaceholder: 'Ion Popescu',
    emailLabel: 'E-mail',
    emailPlaceholder: 'ion.popescu@gmail.com',
    subjectLabel: 'Subiect',
    subjectPlaceholder: 'ex. Raport eroare | Sugestie instrument | Intrebare',
    messageLabel: 'Mesaj',
    messagePlaceholder: 'Descrieti intrebarea sau sugestia dvs...',
    send: 'Trimite',
    error: 'Ceva nu a functionat. Verificati datele si incercati din nou.',
    success: 'Mesaj trimis! Vom raspunde cat mai curand posibil.',
  },
  nl: {
    nameLabel: 'Volledige naam',
    namePlaceholder: 'Jan de Vries',
    emailLabel: 'E-mail',
    emailPlaceholder: 'jan.devries@gmail.com',
    subjectLabel: 'Onderwerp',
    subjectPlaceholder: 'bijv. Bugrapport | Tool-suggestie | Vraag',
    messageLabel: 'Bericht',
    messagePlaceholder: 'Beschrijf uw vraag of suggestie...',
    send: 'Verzenden',
    error: 'Er is iets misgegaan. Controleer uw gegevens en probeer het opnieuw.',
    success: 'Bericht verzonden! We reageren zo snel mogelijk.',
  },
  hu: {
    nameLabel: 'Teljes nev',
    namePlaceholder: 'Kovacs Janos',
    emailLabel: 'E-mail',
    emailPlaceholder: 'kovacs.janos@gmail.com',
    subjectLabel: 'Targy',
    subjectPlaceholder: 'pl. Hibajelentes | Eszkoz javaslat | Kerdes',
    messageLabel: 'Uzenet',
    messagePlaceholder: 'Irja le kerdeset vagy javaslatat...',
    send: 'Kuldes',
    error: 'Valami hiba tortent. Ellenorizze az adatokat es probalkozzon ujra.',
    success: 'Uzenet elkuldve! A leheto leghamarabb valaszolunk.',
  },
  id: {
    nameLabel: 'Nama lengkap',
    namePlaceholder: 'Budi Santoso',
    emailLabel: 'Email',
    emailPlaceholder: 'budi.santoso@gmail.com',
    subjectLabel: 'Subjek',
    subjectPlaceholder: 'mis. Laporan bug | Saran alat | Pertanyaan',
    messageLabel: 'Pesan',
    messagePlaceholder: 'Jelaskan pertanyaan atau saran Anda...',
    send: 'Kirim',
    error: 'Terjadi kesalahan. Periksa data Anda dan coba lagi.',
    success: 'Pesan terkirim! Kami akan merespons secepat mungkin.',
  },
  vi: {
    nameLabel: 'Họ và tên',
    namePlaceholder: 'Nguyễn Văn A',
    emailLabel: 'Email',
    emailPlaceholder: 'nguyenvana@gmail.com',
    subjectLabel: 'Chủ đề',
    subjectPlaceholder: 'vd. Báo lỗi | Gợi ý công cụ | Câu hỏi',
    messageLabel: 'Tin nhắn',
    messagePlaceholder: 'Mô tả câu hỏi hoặc gợi ý của bạn...',
    send: 'Gửi',
    error: 'Đã xảy ra lỗi. Vui lòng kiểm tra dữ liệu và thử lại.',
    success: 'Tin nhắn đã gửi! Chúng tôi sẽ phản hồi sớm nhất có thể.',
  },
  tr: {
    nameLabel: 'Ad soyad',
    namePlaceholder: 'Ahmet Yılmaz',
    emailLabel: 'E-posta',
    emailPlaceholder: 'ahmet.yilmaz@gmail.com',
    subjectLabel: 'Konu',
    subjectPlaceholder: 'örn. Hata raporu | Araç önerisi | Soru',
    messageLabel: 'Mesaj',
    messagePlaceholder: 'Sorunuzu veya önerinizi açıklayın...',
    send: 'Gönder',
    error: 'Bir hata oluştu. Verilerinizi kontrol edin ve tekrar deneyin.',
    success: 'Mesaj gönderildi! En kısa sürede yanıt vereceğiz.',
  },
  tl: {
    nameLabel: 'Buong pangalan',
    namePlaceholder: 'Juan dela Cruz',
    emailLabel: 'Email',
    emailPlaceholder: 'juan.delacruz@gmail.com',
    subjectLabel: 'Paksa',
    subjectPlaceholder: 'hal. Ulat ng bug | Mungkahi ng tool | Tanong',
    messageLabel: 'Mensahe',
    messagePlaceholder: 'Ilarawan ang iyong tanong o mungkahi...',
    send: 'Ipadala',
    error: 'May nangyaring mali. Suriin ang iyong data at subukan ulit.',
    success: 'Naipadala na ang mensahe! Sasagutin ka namin sa lalong madaling panahon.',
  },
  sw: {
    nameLabel: 'Jina kamili',
    namePlaceholder: 'Juma Hassan',
    emailLabel: 'Barua pepe',
    emailPlaceholder: 'juma.hassan@gmail.com',
    subjectLabel: 'Mada',
    subjectPlaceholder: 'k.m. Ripoti ya hitilafu | Pendekezo la zana | Swali',
    messageLabel: 'Ujumbe',
    messagePlaceholder: 'Eleza swali au pendekezo lako...',
    send: 'Tuma',
    error: 'Kuna kitu kimekwenda vibaya. Angalia data yako na ujaribu tena.',
    success: 'Ujumbe umetumwa! Tutajibu haraka iwezekanavyo.',
  },
  ms: {
    nameLabel: 'Nama penuh',
    namePlaceholder: 'Ahmad bin Ismail',
    emailLabel: 'E-mel',
    emailPlaceholder: 'ahmad.ismail@gmail.com',
    subjectLabel: 'Subjek',
    subjectPlaceholder: 'cth. Laporan pepijat | Cadangan alat | Soalan',
    messageLabel: 'Mesej',
    messagePlaceholder: 'Terangkan soalan atau cadangan anda...',
    send: 'Hantar',
    error: 'Sesuatu telah berlaku. Semak data anda dan cuba lagi.',
    success: 'Mesej dihantar! Kami akan membalas secepat mungkin.',
  },
  cs: {
    nameLabel: 'Cel\u00e9 jm\u00e9no',
    namePlaceholder: 'Jan Nov\u00e1k',
    emailLabel: 'E-mail',
    emailPlaceholder: 'jan.novak@gmail.com',
    subjectLabel: 'P\u0159edm\u011bt',
    subjectPlaceholder: 'nap\u0159. Hl\u00e1\u0161en\u00ed chyby | N\u00e1vrh n\u00e1stroje | Dotaz',
    messageLabel: 'Zpr\u00e1va',
    messagePlaceholder: 'Popi\u0161te sv\u016fj dotaz nebo n\u00e1vrh...',
    send: 'Odeslat',
    error: 'N\u011bco se pokazilo. Zkontrolujte sv\u00e1 data a zkuste to znovu.',
    success: 'Zpr\u00e1va odesl\u00e1na! Odpov\u00edme co nejd\u0159\u00edve.',
  },
  sv: {
    nameLabel: 'Fullst\u00e4ndigt namn',
    namePlaceholder: 'Erik Johansson',
    emailLabel: 'E-post',
    emailPlaceholder: 'erik.johansson@gmail.com',
    subjectLabel: '\u00c4mne',
    subjectPlaceholder: 't.ex. Felrapport | Verktygsf\u00f6rslag | Fr\u00e5ga',
    messageLabel: 'Meddelande',
    messagePlaceholder: 'Beskriv din fr\u00e5ga eller ditt f\u00f6rslag...',
    send: 'Skicka',
    error: 'N\u00e5got gick fel. Kontrollera dina uppgifter och f\u00f6rs\u00f6k igen.',
    success: 'Meddelande skickat! Vi svarar s\u00e5 snart som m\u00f6jligt.',
  },
  sq: {
    nameLabel: 'Emri i plot\u00eb',
    namePlaceholder: 'Arben Hoxha',
    emailLabel: 'Email',
    emailPlaceholder: 'arben.hoxha@gmail.com',
    subjectLabel: 'Subjekti',
    subjectPlaceholder: 'p.sh. Raportim gabimi | Sugjerim mjeti | Pyetje',
    messageLabel: 'Mesazhi',
    messagePlaceholder: 'P\u00ebrshkruani pyetjen ose sugjerimin tuaj...',
    send: 'D\u00ebrgo',
    error: 'Di\u00e7ka shkoi keq. Kontrolloni t\u00eb dh\u00ebnat tuaja dhe provoni p\u00ebrs\u00ebri.',
    success: 'Mesazhi u d\u00ebrgua! Do t\u2019ju p\u00ebrgjigj emi sa m\u00eb shpejt q\u00eb \u00ebsht\u00eb e mundur.',
  },
  da: {
    nameLabel: 'Fulde navn',
    namePlaceholder: 'Lars Nielsen',
    emailLabel: 'E-mail',
    emailPlaceholder: 'lars.nielsen@gmail.com',
    subjectLabel: 'Emne',
    subjectPlaceholder: 'f.eks. Fejlrapport | V\u00e6rkt\u00f8jsforslag | Sp\u00f8rgsm\u00e5l',
    messageLabel: 'Besked',
    messagePlaceholder: 'Beskriv dit sp\u00f8rgsm\u00e5l eller forslag...',
    send: 'Send',
    error: 'Noget gik galt. Tjek dine data og pr\u00f8v igen.',
    success: 'Besked sendt! Vi svarer hurtigst muligt.',
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
