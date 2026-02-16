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
      description:
        'Get in touch with the Arteon team. Report a bug, suggest a new tool, or ask a question about our free online tools for images, SEO, colors and QR codes. We respond within one business day.',
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
      description:
        'Nehmen Sie Kontakt mit dem Arteon-Team auf. Melden Sie einen Fehler, schlagen Sie ein neues Tool vor oder stellen Sie eine Frage zu unseren kostenlosen Online-Tools für Bilder, SEO, Farben und QR-Codes. Antwort innerhalb eines Werktags.',
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
      description:
        'Contacte con el equipo de Arteon. Informe de un error, sugiera una nueva herramienta o haga una pregunta sobre nuestras herramientas gratuitas para imágenes, SEO, colores y códigos QR. Respondemos en un día laborable.',
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
      description:
        'Contactez l\u2019équipe Arteon. Signalez un bug, suggérez un nouvel outil ou posez une question sur nos outils gratuits pour les images, le SEO, les couleurs et les codes QR. Réponse sous un jour ouvrable.',
    },
    hero: {
      title: 'Contactez l\u2019équipe Arteon',
      description: 'Signalez un bug, suggérez un nouvel outil ou posez une question — nous répondons sous un jour ouvrable',
    },
    intro: {
      title: 'Une question ou une suggestion\u00a0?',
      textBefore: "Nous sommes ravis de recevoir vos retours sur nos outils. Si vous avez trouvé un bug, avez une idée pour un nouvel outil ou avez besoin d'aide — écrivez-nous à",
      textAfter: '. Nous répondons sous un jour ouvrable.',
    },
    formTitle: 'Envoyez-nous un message',
    details: {
      title: 'Coordonnées',
      emailLabel: 'E-mail',
      hoursLabel: 'Horaires',
      hoursValue: 'Lundi – Vendredi\u00a0: 8h00 – 16h00 (CET)',
    },
    cta: {
      title: 'Retour aux outils',
      description: '10 outils en ligne gratuits pour travailler avec les images, le texte et les couleurs',
      btnOne: 'Outils',
    },
  },

  it: {
    slug: 'contatto',
    metadata: {
      title: 'Contatto – Arteon strumenti online gratuiti | Supporto e suggerimenti',
      description:
        'Contatta il team Arteon. Segnala un bug, suggerisci un nuovo strumento o fai una domanda sui nostri strumenti gratuiti per immagini, SEO, colori e codici QR. Rispondiamo entro un giorno lavorativo.',
    },
    hero: {
      title: 'Contatta il team Arteon',
      description: 'Segnala un bug, suggerisci un nuovo strumento o fai una domanda \u2014 rispondiamo entro un giorno lavorativo',
    },
    intro: {
      title: 'Hai una domanda o un suggerimento?',
      textBefore: 'Siamo felici di ricevere il tuo feedback sui nostri strumenti. Se hai trovato un bug, hai un\u2019idea per un nuovo strumento o hai bisogno di aiuto \u2014 scrivici a',
      textAfter: '. Rispondiamo entro un giorno lavorativo.',
    },
    formTitle: 'Inviaci un messaggio',
    details: {
      title: 'Dati di contatto',
      emailLabel: 'E-mail',
      hoursLabel: 'Orari',
      hoursValue: 'Luned\u00ec \u2013 Venerd\u00ec: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Torna agli strumenti',
      description: '10 strumenti online gratuiti per lavorare con immagini, testo e colori',
      btnOne: 'Strumenti',
    },
  },

  ro: {
    slug: 'contact',
    metadata: {
      title: 'Contact \u2013 Arteon instrumente gratuite | Suport \u0219i feedback',
      description:
        'Contacta\u021bi echipa Arteon. Raporta\u021bi un bug, sugera\u021bi un instrument nou sau pune\u021bi o \u00eentrebare despre instrumentele noastre gratuite pentru imagini, SEO, culori \u0219i coduri QR. R\u0103spundem \u00een maximum o zi lucr\u0103toare.',
    },
    hero: {
      title: 'Contacta\u021bi echipa Arteon',
      description: 'Raporta\u021bi un bug, sugera\u021bi un instrument nou sau pune\u021bi o \u00eentrebare \u2014 r\u0103spundem \u00een maximum o zi lucr\u0103toare',
    },
    intro: {
      title: 'Ave\u021bi o \u00eentrebare sau o sugestie?',
      textBefore:
        'Ne bucur\u0103m s\u0103 primim feedback-ul dvs. despre instrumentele noastre. Dac\u0103 a\u021bi g\u0103sit un bug, ave\u021bi o idee pentru un instrument nou sau ave\u021bi nevoie de ajutor \u2014 scrie\u021bi-ne la',
      textAfter: '. R\u0103spundem \u00een maximum o zi lucr\u0103toare.',
    },
    formTitle: 'Trimite\u021bi-ne un mesaj',
    details: {
      title: 'Date de contact',
      emailLabel: 'E-mail',
      hoursLabel: 'Program de lucru',
      hoursValue: 'Luni \u2013 Vineri: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: '\u00cenapoi la instrumente',
      description: '10 instrumente gratuite pentru lucrul cu imagini, text \u0219i culori',
      btnOne: 'Instrumente',
    },
  },

  nl: {
    slug: 'contact',
    metadata: {
      title: 'Contact \u2013 Arteon gratis online tools | Ondersteuning & feedback',
      description:
        'Neem contact op met het Arteon-team. Meld een bug, stel een nieuwe tool voor of stel een vraag over onze gratis online tools voor afbeeldingen, SEO, kleuren en QR-codes. Wij reageren binnen \u00e9\u00e9n werkdag.',
    },
    hero: {
      title: 'Neem contact op met het Arteon-team',
      description: 'Meld een bug, stel een nieuwe tool voor of stel een vraag \u2014 wij reageren binnen \u00e9\u00e9n werkdag',
    },
    intro: {
      title: 'Heeft u een vraag of suggestie?',
      textBefore: 'We horen graag uw feedback over onze tools. Als u een bug heeft gevonden, een idee heeft voor een nieuwe tool of hulp nodig heeft \u2014 schrijf ons op',
      textAfter: '. Wij reageren binnen \u00e9\u00e9n werkdag.',
    },
    formTitle: 'Stuur ons een bericht',
    details: {
      title: 'Contactgegevens',
      emailLabel: 'E-mail',
      hoursLabel: 'Openingstijden',
      hoursValue: 'Maandag \u2013 Vrijdag: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Terug naar de tools',
      description: '10 gratis online tools voor het werken met afbeeldingen, tekst en kleuren',
      btnOne: 'Tools',
    },
  },

  hu: {
    slug: 'kapcsolat',
    metadata: {
      title: 'Kapcsolat \u2013 Arteon ingyenes online eszk\u00f6z\u00f6k | T\u00e1mogat\u00e1s \u00e9s visszajelz\u00e9s',
      description:
        'L\u00e9pjen kapcsolatba az Arteon csapat\u00e1val. Jelentsen hib\u00e1t, javasoljon \u00faj eszk\u00f6zt vagy tegyen fel k\u00e9rd\u00e9st ingyenes online eszk\u00f6zeinkr\u0151l k\u00e9pekhez, SEO-hoz, sz\u00ednekhez \u00e9s QR-k\u00f3dokhoz. Egy munkanapon bel\u00fcl v\u00e1laszolunk.',
    },
    hero: {
      title: 'L\u00e9pjen kapcsolatba az Arteon csapat\u00e1val',
      description: 'Jelentsen hib\u00e1t, javasoljon \u00faj eszk\u00f6zt vagy tegyen fel k\u00e9rd\u00e9st \u2014 egy munkanapon bel\u00fcl v\u00e1laszolunk',
    },
    intro: {
      title: 'Van k\u00e9rd\u00e9se vagy javaslata?',
      textBefore:
        '\u00d6r\u00f6mmel fogadjuk visszajelz\u00e9s\u00e9t eszk\u00f6zeinkr\u0151l. Ha hib\u00e1t tal\u00e1lt, \u00f6tlete van \u00faj eszk\u00f6zre vagy seg\u00edts\u00e9gre van sz\u00fcks\u00e9ge \u2014 \u00edrjon nek\u00fcnk a',
      textAfter: ' c\u00edmre. Egy munkanapon bel\u00fcl v\u00e1laszolunk.',
    },
    formTitle: 'K\u00fcldj\u00f6n nek\u00fcnk \u00fczenetet',
    details: {
      title: 'El\u00e9rhet\u0151s\u00e9gek',
      emailLabel: 'E-mail',
      hoursLabel: '\u00dcgyf\u00e9lfogad\u00e1si id\u0151',
      hoursValue: 'H\u00e9tf\u0151 \u2013 P\u00e9ntek: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Vissza az eszk\u00f6z\u00f6kh\u00f6z',
      description: '10 ingyenes online eszk\u00f6z k\u00e9pekhez, sz\u00f6vegekhez \u00e9s sz\u00ednekhez',
      btnOne: 'Eszk\u00f6z\u00f6k',
    },
  },
  id: {
    slug: 'kontak',
    metadata: {
      title: 'Hubungi Arteon – Dukungan & Masukan Alat Gratis',
      description: 'Hubungi tim Arteon. Laporkan bug, sarankan alat baru, atau ajukan pertanyaan tentang alat gratis kami untuk gambar, SEO, warna, dan kode QR. Kami merespons dalam satu hari kerja.',
    },
    hero: {
      title: 'Hubungi tim Arteon',
      description: 'Laporkan bug, sarankan alat baru, atau ajukan pertanyaan — kami merespons dalam satu hari kerja',
    },
    intro: {
      title: 'Punya pertanyaan atau saran?',
      textBefore: 'Kami senang mendengar masukan Anda tentang alat kami. Jika menemukan bug, punya ide untuk alat baru, atau butuh bantuan — tulis ke',
      textAfter: '. Kami merespons dalam satu hari kerja.',
    },
    formTitle: 'Kirim pesan kepada kami',
    details: {
      title: 'Detail kontak',
      emailLabel: 'Email',
      hoursLabel: 'Jam kerja',
      hoursValue: 'Senin – Jumat: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Kembali ke alat',
      description: '10 alat gratis untuk bekerja dengan gambar, teks, dan warna',
      btnOne: 'Alat',
    },
  },
  vi: {
    slug: 'lien-he',
    metadata: {
      title: 'Liên Hệ Arteon – Hỗ Trợ & Góp Ý Công Cụ Miễn Phí',
      description: 'Liên hệ đội ngũ Arteon. Báo lỗi, đề xuất công cụ mới hoặc đặt câu hỏi về các công cụ miễn phí cho hình ảnh, SEO, màu sắc và mã QR. Chúng tôi phản hồi trong một ngày làm việc.',
    },
    hero: {
      title: 'Liên hệ đội ngũ Arteon',
      description: 'Báo lỗi, đề xuất công cụ mới hoặc đặt câu hỏi — chúng tôi phản hồi trong một ngày làm việc',
    },
    intro: {
      title: 'Bạn có câu hỏi hoặc góp ý?',
      textBefore: 'Chúng tôi rất vui nhận góp ý về các công cụ. Nếu bạn phát hiện lỗi, có ý tưởng cho công cụ mới hoặc cần hỗ trợ — hãy viết cho chúng tôi tại',
      textAfter: '. Chúng tôi phản hồi trong một ngày làm việc.',
    },
    formTitle: 'Gửi tin nhắn cho chúng tôi',
    details: {
      title: 'Thông tin liên hệ',
      emailLabel: 'Email',
      hoursLabel: 'Giờ làm việc',
      hoursValue: 'Thứ Hai – Thứ Sáu: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Quay lại công cụ',
      description: '10 công cụ miễn phí để làm việc với hình ảnh, văn bản và màu sắc',
      btnOne: 'Công cụ',
    },
  },
  tr: {
    slug: 'iletisim',
    metadata: {
      title: 'Arteon İletişim – Ücretsiz Araçlar Destek & Geri Bildirim',
      description: 'Arteon ekibiyle iletişime geçin. Bir hata bildirin, yeni bir araç önerin veya görsel, SEO, renk ve QR kod araçlarımız hakkında soru sorun. Bir iş günü içinde yanıt veriyoruz.',
    },
    hero: {
      title: 'Arteon ekibiyle iletişime geçin',
      description: 'Hata bildirin, yeni araç önerin veya soru sorun — bir iş günü içinde yanıt veriyoruz',
    },
    intro: {
      title: 'Sorunuz veya öneriniz mi var?',
      textBefore: 'Araçlarımız hakkındaki geri bildirimlerinizi duymaktan mutluluk duyarız. Bir hata bulduysanız, yeni bir araç fikriniz varsa veya yardıma ihtiyacınız varsa — bize yazın:',
      textAfter: '. Bir iş günü içinde yanıt veriyoruz.',
    },
    formTitle: 'Bize mesaj gönderin',
    details: {
      title: 'İletişim bilgileri',
      emailLabel: 'E-posta',
      hoursLabel: 'Çalışma saatleri',
      hoursValue: 'Pazartesi – Cuma: 8:00 – 16:00 (CET)',
    },
    cta: {
      title: 'Araçlara dön',
      description: 'Görsel, metin ve renklerle çalışmak için 10 ücretsiz araç',
      btnOne: 'Araçlar',
    },
  },

  tl: {
    slug: 'makipag-ugnayan',
    metadata: {
      title: 'Makipag-ugnayan sa Arteon \u2013 Suporta at Feedback sa Mga Libreng Tool',
      description:
        'Makipag-ugnayan sa team ng Arteon. Mag-report ng bug, magmungkahi ng bagong tool, o magtanong tungkol sa aming mga libreng tool para sa larawan, SEO, kulay at QR code. Sumasagot kami sa loob ng isang araw ng trabaho.',
    },
    hero: {
      title: 'Makipag-ugnayan sa team ng Arteon',
      description: 'Mag-report ng bug, magmungkahi ng bagong tool, o magtanong \u2014 sumasagot kami sa loob ng isang araw ng trabaho',
    },
    intro: {
      title: 'May tanong o mungkahi?',
      textBefore: 'Masaya kaming marinig ang feedback mo tungkol sa aming mga tool. Kung nakakita ka ng bug, may ideya para sa bagong tool, o kailangan ng tulong \u2014 sumulat sa amin sa',
      textAfter: '. Sumasagot kami sa loob ng isang araw ng trabaho.',
    },
    formTitle: 'Magpadala ng mensahe',
    details: {
      title: 'Impormasyon sa pakikipag-ugnayan',
      emailLabel: 'Email',
      hoursLabel: 'Oras ng trabaho',
      hoursValue: 'Lunes \u2013 Biyernes: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Bumalik sa mga tool',
      description: '10 libreng tool para sa pagtatrabaho sa larawan, teksto, at kulay',
      btnOne: 'Mga tool',
    },
  },
  sw: {
    slug: 'wasiliana-nasi',
    metadata: {
      title: 'Wasiliana na Arteon \u2013 Msaada na Maoni ya Zana za Bure',
      description:
        'Wasiliana na timu ya Arteon. Ripoti hitilafu, pendekeza zana mpya, au uliza swali kuhusu zana zetu za bure za picha, SEO, rangi na misimbo QR. Tunajibu ndani ya siku moja ya kazi.',
    },
    hero: {
      title: 'Wasiliana na timu ya Arteon',
      description: 'Ripoti hitilafu, pendekeza zana mpya, au uliza swali \u2014 tunajibu ndani ya siku moja ya kazi',
    },
    intro: {
      title: 'Una swali au pendekezo?',
      textBefore: 'Tunafuraha kusikia maoni yako kuhusu zana zetu. Ukipata hitilafu, ukiwa na wazo la zana mpya, au ukihitaji msaada \u2014 tuandikie kwa',
      textAfter: '. Tunajibu ndani ya siku moja ya kazi.',
    },
    formTitle: 'Tutumie ujumbe',
    details: {
      title: 'Maelezo ya mawasiliano',
      emailLabel: 'Barua pepe',
      hoursLabel: 'Saa za kazi',
      hoursValue: 'Jumatatu \u2013 Ijumaa: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Rudi kwenye zana',
      description: 'Zana 10 za bure za kufanya kazi na picha, maandishi na rangi',
      btnOne: 'Zana',
    },
  },
  ms: {
    slug: 'hubungi-kami',
    metadata: {
      title: 'Hubungi Arteon \u2013 Sokongan & Maklum Balas Alat Percuma',
      description:
        'Hubungi pasukan Arteon. Laporkan pepijat, cadangkan alat baharu, atau tanya soalan tentang alat percuma kami untuk imej, SEO, warna dan kod QR. Kami membalas dalam satu hari bekerja.',
    },
    hero: {
      title: 'Hubungi pasukan Arteon',
      description: 'Laporkan pepijat, cadangkan alat baharu, atau tanya soalan \u2014 kami membalas dalam satu hari bekerja',
    },
    intro: {
      title: 'Ada soalan atau cadangan?',
      textBefore: 'Kami gembira mendengar maklum balas anda tentang alat kami. Jika anda menemui pepijat, mempunyai idea untuk alat baharu, atau memerlukan bantuan \u2014 tulis kepada kami di',
      textAfter: '. Kami membalas dalam satu hari bekerja.',
    },
    formTitle: 'Hantar mesej kepada kami',
    details: {
      title: 'Butiran hubungan',
      emailLabel: 'E-mel',
      hoursLabel: 'Waktu bekerja',
      hoursValue: 'Isnin \u2013 Jumaat: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Kembali ke alat',
      description: '10 alat percuma untuk bekerja dengan imej, teks dan warna',
      btnOne: 'Alat',
    },
  },
  cs: {
    slug: 'kontakt',
    metadata: {
      title: 'Kontakt \u2013 Arteon bezplatn\u00e9 n\u00e1stroje | Podpora a zp\u011btn\u00e1 vazba',
      description:
        'Kontaktujte t\u00fdm Arteon. Nahl\u00e1ste chybu, navrhněte nov\u00fd n\u00e1stroj nebo polo\u017ete ot\u00e1zku o na\u0161ich bezplatn\u00fdch n\u00e1stroj\u00edch pro obr\u00e1zky, SEO, barvy a QR k\u00f3dy. Odpov\u00edd\u00e1me do jednoho pracovn\u00edho dne.',
    },
    hero: {
      title: 'Kontaktujte t\u00fdm Arteon',
      description: 'Nahl\u00e1ste chybu, navrhněte nov\u00fd n\u00e1stroj nebo polo\u017ete ot\u00e1zku \u2014 odpov\u00edd\u00e1me do jednoho pracovn\u00edho dne',
    },
    intro: {
      title: 'M\u00e1te ot\u00e1zku nebo n\u00e1vrh?',
      textBefore:
        'R\u00e1di si vyslechneme va\u0161i zp\u011btnou vazbu k na\u0161im n\u00e1stroj\u016fm. Pokud jste na\u0161li chybu, m\u00e1te n\u00e1pad na nov\u00fd n\u00e1stroj nebo pot\u0159ebujete pomoc \u2014 napi\u0161te n\u00e1m na',
      textAfter: '. Odpov\u00edd\u00e1me do jednoho pracovn\u00edho dne.',
    },
    formTitle: 'Po\u0161lete n\u00e1m zpr\u00e1vu',
    details: {
      title: 'Kontaktn\u00ed \u00fadaje',
      emailLabel: 'E-mail',
      hoursLabel: 'Pracovn\u00ed doba',
      hoursValue: 'Pond\u011bl\u00ed \u2013 P\u00e1tek: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Zp\u011bt na n\u00e1stroje',
      description: '10 bezplatn\u00fdch n\u00e1stroj\u016f pro pr\u00e1ci s obr\u00e1zky, textem a barvami',
      btnOne: 'N\u00e1stroje',
    },
  },
  sv: {
    slug: 'kontakt',
    metadata: {
      title: 'Kontakt \u2013 Arteon gratis verktyg | Support och feedback',
      description:
        'Kontakta Arteon-teamet. Rapportera ett fel, f\u00f6resl\u00e5 ett nytt verktyg eller st\u00e4ll en fr\u00e5ga om v\u00e5ra gratis verktyg f\u00f6r bilder, SEO, f\u00e4rger och QR-koder. Vi svarar inom en arbetsdag.',
    },
    hero: {
      title: 'Kontakta Arteon-teamet',
      description: 'Rapportera ett fel, f\u00f6resl\u00e5 ett nytt verktyg eller st\u00e4ll en fr\u00e5ga \u2014 vi svarar inom en arbetsdag',
    },
    intro: {
      title: 'Har du en fr\u00e5ga eller ett f\u00f6rslag?',
      textBefore:
        'Vi tar g\u00e4rna emot din feedback om v\u00e5ra verktyg. Om du har hittat ett fel, har en id\u00e9 f\u00f6r ett nytt verktyg eller beh\u00f6ver hj\u00e4lp \u2014 skriv till oss p\u00e5',
      textAfter: '. Vi svarar inom en arbetsdag.',
    },
    formTitle: 'Skicka ett meddelande',
    details: {
      title: 'Kontaktuppgifter',
      emailLabel: 'E-post',
      hoursLabel: '\u00d6ppettider',
      hoursValue: 'M\u00e5ndag \u2013 Fredag: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Tillbaka till verktygen',
      description: '10 gratis verktyg f\u00f6r att arbeta med bilder, text och f\u00e4rger',
      btnOne: 'Verktyg',
    },
  },
  sq: {
    slug: 'kontakti',
    metadata: {
      title: 'Kontaktoni Arteon \u2013 Mb\u00ebshtetje dhe Reagime p\u00ebr Mjetet Falas',
      description:
        'Kontaktoni ekipin e Arteon. Raportoni nj\u00eb gabim, sugjeroni nj\u00eb mjet t\u00eb re, ose b\u00ebni nj\u00eb pyetje rreth mjeteve tona falas p\u00ebr imazhe, SEO, ngjyra dhe kode QR. P\u00ebrgjigjemi brenda nj\u00eb dite pune.',
    },
    hero: {
      title: 'Kontaktoni ekipin e Arteon',
      description: 'Raportoni nj\u00eb gabim, sugjeroni nj\u00eb mjet t\u00eb re, ose b\u00ebni nj\u00eb pyetje \u2014 p\u00ebrgjigjemi brenda nj\u00eb dite pune',
    },
    intro: {
      title: 'Keni nj\u00eb pyetje ose sugjerim?',
      textBefore:
        'Jemi t\u00eb lumtur t\u00eb d\u00ebgjojm\u00eb reagimet tuaja p\u00ebr mjetet tona. N\u00ebse keni gjetur nj\u00eb gabim, keni nj\u00eb ide p\u00ebr nj\u00eb mjet t\u00eb re, ose keni nevoj\u00eb p\u00ebr ndihm\u00eb \u2014 na shkruani n\u00eb',
      textAfter: '. P\u00ebrgjigjemi brenda nj\u00eb dite pune.',
    },
    formTitle: 'Na d\u00ebrgoni nj\u00eb mesazh',
    details: {
      title: 'T\u00eb dh\u00ebnat e kontaktit',
      emailLabel: 'Email',
      hoursLabel: 'Or\u00ebt e pun\u00ebs',
      hoursValue: 'E h\u00ebn\u00eb \u2013 E premte: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Kthehu te mjetet',
      description: '10 mjete falas p\u00ebr pun\u00ebn me imazhe, tekst dhe ngjyra',
      btnOne: 'Mjetet',
    },
  },
  da: {
    slug: 'kontakt',
    metadata: {
      title: 'Kontakt \u2013 Arteon gratis v\u00e6rkt\u00f8jer | Support og feedback',
      description:
        'Kontakt Arteon-teamet. Rapport\u00e9r en fejl, foresl\u00e5 et nyt v\u00e6rkt\u00f8j eller stil et sp\u00f8rgsm\u00e5l om vores gratis v\u00e6rkt\u00f8jer til billeder, SEO, farver og QR-koder. Vi svarer inden for \u00e9n arbejdsdag.',
    },
    hero: {
      title: 'Kontakt Arteon-teamet',
      description: 'Rapport\u00e9r en fejl, foresl\u00e5 et nyt v\u00e6rkt\u00f8j eller stil et sp\u00f8rgsm\u00e5l \u2014 vi svarer inden for \u00e9n arbejdsdag',
    },
    intro: {
      title: 'Har du et sp\u00f8rgsm\u00e5l eller et forslag?',
      textBefore:
        'Vi h\u00f8rer gerne din feedback om vores v\u00e6rkt\u00f8jer. Hvis du har fundet en fejl, har en id\u00e9 til et nyt v\u00e6rkt\u00f8j eller har brug for hj\u00e6lp \u2014 skriv til os p\u00e5',
      textAfter: '. Vi svarer inden for \u00e9n arbejdsdag.',
    },
    formTitle: 'Send os en besked',
    details: {
      title: 'Kontaktoplysninger',
      emailLabel: 'E-mail',
      hoursLabel: '\u00c5bningstider',
      hoursValue: 'Mandag \u2013 Fredag: 8:00 \u2013 16:00 (CET)',
    },
    cta: {
      title: 'Tilbage til v\u00e6rkt\u00f8jerne',
      description: '10 gratis v\u00e6rkt\u00f8jer til at arbejde med billeder, tekst og farver',
      btnOne: 'V\u00e6rkt\u00f8jer',
    },
  },

  pt: {
    slug: 'contacto',
    metadata: {
      title: 'Contacto – Arteon ferramentas online gratuitas | Suporte e sugestões',
      description:
        'Contacte a equipa Arteon. Reporte um erro, sugira uma nova ferramenta ou faça uma pergunta sobre as nossas ferramentas gratuitas para imagens, SEO, cores e códigos QR. Resposta num dia útil.',
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
