import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "Contact" page – centralised locale data
// ---------------------------------------------------------------------------

export type ContactPageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  intro: {
    title: string;
    textBefore: string;
    textAfter: string;
  };
  formTitle: string;
  details: {
    title: string;
    emailLabel: string;
    hoursLabel: string;
    hoursValue: string;
  };
  cta: {
    title: string;
    description: string;
    btnOne: string;
  };
};

const CONTACT_DATA: Partial<Record<Locale, ContactPageData>> = {
  en: {
    slug: 'contact',
    metadata: {
      title: 'Contact Arteon – Free Online Tools Support & Feedback',
      description: 'Get in touch with the Arteon team. Report a bug, suggest a new tool, or ask a question about our free online tools for images, SEO, colors and QR codes. We respond within one business day.',
    },
    hero: {
      title: 'Get in touch with the Arteon team',
      description: 'Report a bug, suggest a new tool, or ask a question — we respond within one business day',
    },
    intro: {
      title: 'Have a question or suggestion?',
      textBefore: 'We are happy to hear your feedback about our tools. If you found a bug, have an idea for a new tool, or need help — write to us at',
      textAfter: '. We respond within one business day.',
    },
    formTitle: 'Send us a message',
    details: {
      title: 'Contact details',
      emailLabel: 'Email',
      hoursLabel: 'Business hours',
      hoursValue: 'Monday – Friday: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Back to tools',
      description: '10 free online tools for working with images, text, and colors',
      btnOne: 'Tools',
    },
  },

  de: {
    slug: 'kontakt',
    metadata: {
      title: 'Kontakt – Arteon kostenlose Online-Tools | Support & Feedback',
      description: 'Nehmen Sie Kontakt mit dem Arteon-Team auf. Melden Sie einen Fehler, schlagen Sie ein neues Tool vor oder stellen Sie eine Frage zu unseren kostenlosen Online-Tools für Bilder, SEO, Farben und QR-Codes. Antwort innerhalb eines Werktags.',
    },
    hero: {
      title: 'Kontakt zum Arteon-Team aufnehmen',
      description: 'Fehler melden, neues Tool vorschlagen oder eine Frage stellen — wir antworten innerhalb eines Werktags',
    },
    intro: {
      title: 'Frage oder Vorschlag?',
      textBefore: 'Wir freuen uns über Ihr Feedback zu unseren Tools. Wenn Sie einen Fehler gefunden haben, eine Idee für ein neues Tool haben oder Hilfe benötigen — schreiben Sie uns an',
      textAfter: '. Wir antworten innerhalb eines Werktags.',
    },
    formTitle: 'Nachricht senden',
    details: {
      title: 'Kontaktdaten',
      emailLabel: 'E-Mail',
      hoursLabel: 'Geschäftszeiten',
      hoursValue: 'Montag – Freitag: 8:00 – 16:00 (MEZ)',
    },
    cta: {
      title: 'Zurück zu den Tools',
      description: '10 kostenlose Online-Tools für die Arbeit mit Bildern, Text und Farben',
      btnOne: 'Werkzeuge',
    },
  },

  es: {
    slug: 'contacto',
    metadata: {
      title: 'Contacto – Arteon herramientas online gratuitas | Soporte y sugerencias',
      description: 'Contacte con el equipo de Arteon. Informe de un error, sugiera una nueva herramienta o haga una pregunta sobre nuestras herramientas gratuitas para imágenes, SEO, colores y códigos QR. Respondemos en un día laborable.',
    },
    hero: {
      title: 'Contacte con el equipo de Arteon',
      description: 'Informe de un error, sugiera una nueva herramienta o haga una pregunta — respondemos en un día laborable',
    },
    intro: {
      title: '¿Tiene una pregunta o sugerencia?',
      textBefore: 'Nos encanta recibir sus comentarios sobre nuestras herramientas. Si encontró un error, tiene una idea para una nueva herramienta o necesita ayuda — escríbanos a',
      textAfter: '. Respondemos en un día laborable.',
    },
    formTitle: 'Envíenos un mensaje',
    details: {
      title: 'Datos de contacto',
      emailLabel: 'Correo electrónico',
      hoursLabel: 'Horario',
      hoursValue: 'Lunes – Viernes: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Volver a las herramientas',
      description: '10 herramientas en línea gratuitas para trabajar con imágenes, texto y colores',
      btnOne: 'Herramientas',
    },
  },

  fr: {
    slug: 'contact',
    metadata: {
      title: 'Contact – Arteon outils en ligne gratuits | Support et suggestions',
      description: 'Contactez l\u2019équipe Arteon. Signalez un bug, suggérez un nouvel outil ou posez une question sur nos outils gratuits pour les images, le SEO, les couleurs et les codes QR. Réponse sous un jour ouvrable.',
    },
    hero: {
      title: 'Contactez l\u2019équipe Arteon',
      description: 'Signalez un bug, suggérez un nouvel outil ou posez une question — nous répondons sous un jour ouvrable',
    },
    intro: {
      title: "Une question ou une suggestion\u00a0?",
      textBefore: "Nous sommes ravis de recevoir vos retours sur nos outils. Si vous avez trouvé un bug, avez une idée pour un nouvel outil ou avez besoin d'aide — écrivez-nous à",
      textAfter: '. Nous répondons sous un jour ouvrable.',
    },
    formTitle: 'Envoyez-nous un message',
    details: {
      title: 'Coordonnées',
      emailLabel: 'E-mail',
      hoursLabel: 'Horaires',
      hoursValue: "Lundi – Vendredi\u00a0: 8h00 – 16h00 (CET)",
    },
    cta: {
      title: 'Retour aux outils',
      description: '10 outils en ligne gratuits pour travailler avec les images, le texte et les couleurs',
      btnOne: 'Outils',
    },
  },

  pt: {
    slug: 'contacto',
    metadata: {
      title: 'Contacto – Arteon ferramentas online gratuitas | Suporte e sugestões',
      description: 'Contacte a equipa Arteon. Reporte um erro, sugira uma nova ferramenta ou faça uma pergunta sobre as nossas ferramentas gratuitas para imagens, SEO, cores e códigos QR. Resposta num dia útil.',
    },
    hero: {
      title: 'Contacte a equipa Arteon',
      description: 'Reporte um erro, sugira uma nova ferramenta ou faça uma pergunta — respondemos num dia útil',
    },
    intro: {
      title: 'Tem uma pergunta ou sugestão?',
      textBefore: 'Temos todo o gosto em receber o seu feedback sobre as nossas ferramentas. Se encontrou um erro, tem uma ideia para uma nova ferramenta ou precisa de ajuda — escreva-nos para',
      textAfter: '. Respondemos num dia útil.',
    },
    formTitle: 'Envie-nos uma mensagem',
    details: {
      title: 'Dados de contacto',
      emailLabel: 'E-mail',
      hoursLabel: 'Horário',
      hoursValue: 'Segunda – Sexta: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Voltar às ferramentas',
      description: '10 ferramentas online gratuitas para trabalhar com imagens, texto e cores',
      btnOne: 'Ferramentas',
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getContactPageData(locale: Locale): ContactPageData | null {
  return CONTACT_DATA[locale] ?? null;
}

export function getContactAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.contactHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.contactHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.contactHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.contactHref!);

  return {
    canonical: toAbsoluteUrl(config.contactHref),
    languages,
  };
}
