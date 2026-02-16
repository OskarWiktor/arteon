import type { Locale } from '@/types/locale';
import { LOCALE_CONFIG, SUPPORTED_LOCALES } from '@/lib/i18n/locales';
import { toAbsoluteUrl } from '@/utils/absoluteUrl';

// ---------------------------------------------------------------------------
// Non-PL "About" page – centralised locale data
// ---------------------------------------------------------------------------

export type AboutPageData = {
  slug: string;
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    description: string;
  };
  whoWeAre: {
    title: string;
    p1: string;
    p2: string;
  };
  whyFree: {
    title: string;
    items: { title: string; description: string }[];
  };
  ourTools: {
    title: string;
    items: { title: string; description: string }[];
  };
  whatsNext: {
    title: string;
    text: string;
  };
  privacy: {
    title: string;
    textBefore: string;
    linkLabel: string;
    textAfter: string;
  };
  cta: {
    title: string;
    description: string;
    btnOne: string;
    btnTwo: string;
  };
};

const ABOUT_DATA: Partial<Record<Locale, AboutPageData>> = {
  en: {
    slug: 'about',
    metadata: {
      title: 'About Arteon – 10 Free Online Tools for Web, SEO & Design',
      description:
        'Arteon is a creative agency building free browser-based tools: WebP converter, favicon generator, color contrast checker, QR code maker and more. No sign-up, no upload — everything runs locally.',
    },
    hero: {
      title: 'Free online tools built by a creative agency',
      description: '10 browser-based tools for images, SEO, colors, email signatures and QR codes — no registration, no file uploads, no limits',
    },
    whoWeAre: {
      title: 'Who we are',
      p1: 'Arteon is a Polish creative agency. Beyond our commercial work, we build and maintain a growing collection of free online tools designed for business owners, website creators, designers, marketers, and anyone who works with digital content.',
      p2: 'Every tool we create solves a specific, everyday problem: converting images, checking color contrast, generating favicons, creating QR codes, and more. Our goal is to build a comprehensive toolkit where you can find everything you need in one place — without switching between dozens of different websites.',
    },
    whyFree: {
      title: 'Why we offer free tools',
      items: [
        { title: 'No registration, no limits', description: 'Every tool works instantly in your browser. No account required, no login, no payment.' },
        { title: 'Privacy first', description: 'Your files never leave your device. All processing happens locally in your browser — we do not send your data to any server.' },
        { title: 'Built from real needs', description: 'Each tool was born from a real problem we encountered while working on client projects. If we needed it, chances are you do too.' },
        {
          title: 'Funded by ads, free for you',
          description: 'We use Google AdSense banners to cover the costs of development and hosting. Thanks to ad revenue, we can keep all tools free and continue building new ones.',
        },
      ],
    },
    ourTools: {
      title: 'Our tools',
      items: [
        { title: 'Images & favicons', description: 'WebP converter, online image editor, and favicon generator. 3 tools for everyday image work.' },
        { title: 'Meta & SEO', description: 'Meta title and description checker plus a word and character counter to evaluate text length.' },
        { title: 'Email & communication', description: 'HTML email signature generator with ready code for Gmail and Outlook.' },
        { title: 'Colors & accessibility', description: 'WCAG contrast checker, image color extractor, and color palette generator. 3 tools for working with color.' },
        { title: 'Print & materials', description: 'QR code generator for websites, vCards, menus, and flyers. Export to PNG and SVG.' },
      ],
    },
    whatsNext: {
      title: "What's next",
      text: 'We are actively working on expanding the toolkit. New tools are added regularly based on user feedback and our own experience. The goal is a single platform where business owners, designers, and developers have access to every essential tool — all in one place, all for free.',
    },
    privacy: {
      title: 'Privacy and security',
      textBefore:
        'We respect your privacy. Files you upload to our tools are processed exclusively in your browser and are never sent to any server. We use analytics (Google Analytics 4) and advertising (Google AdSense) only after you give consent via the cookie banner. Full details are available in our',
      linkLabel: 'Privacy Policy',
      textAfter: '.',
    },
    cta: {
      title: 'Try our tools',
      description: '10 free online tools — no registration, no limits, no file uploads to servers',
      btnOne: 'Go to tools',
      btnTwo: 'Contact',
    },
  },

  de: {
    slug: 'ueber-uns',
    metadata: {
      title: 'Über Arteon – 10 kostenlose Online-Tools für Web, SEO & Design',
      description:
        'Arteon ist eine Kreativagentur und entwickelt kostenlose Browser-Tools: WebP-Konverter, Favicon-Generator, Farbkontrast-Checker, QR-Code-Generator u.\u00a0v.\u00a0m. Ohne Anmeldung, ohne Upload — alles läuft lokal.',
    },
    hero: {
      title: 'Kostenlose Online-Tools von einer Kreativagentur',
      description: '10 Browser-Tools für Bilder, SEO, Farben, E-Mail-Signaturen und QR-Codes — ohne Registrierung, ohne Datei-Upload, ohne Limits',
    },
    whoWeAre: {
      title: 'Wer wir sind',
      p1: 'Arteon ist eine polnische Kreativagentur. Neben unserer kommerziellen Arbeit entwickeln und pflegen wir eine wachsende Sammlung kostenloser Online-Tools für Unternehmer, Website-Ersteller, Designer, Marketer und alle, die mit digitalen Inhalten arbeiten.',
      p2: 'Jedes Tool, das wir entwickeln, löst ein konkretes, alltägliches Problem: Bilder konvertieren, Farbkontraste prüfen, Favicons generieren, QR-Codes erstellen und mehr. Unser Ziel ist es, ein umfassendes Toolkit aufzubauen, in dem alles an einem Ort zu finden ist — ohne zwischen dutzenden verschiedenen Websites wechseln zu müssen.',
    },
    whyFree: {
      title: 'Warum wir kostenlose Tools anbieten',
      items: [
        { title: 'Ohne Registrierung, ohne Limits', description: 'Jedes Tool funktioniert sofort im Browser. Kein Konto, keine Anmeldung, keine Zahlung erforderlich.' },
        { title: 'Datenschutz an erster Stelle', description: 'Ihre Dateien verlassen nie Ihr Gerät. Die gesamte Verarbeitung erfolgt lokal im Browser — wir senden Ihre Daten nicht an Server.' },
        {
          title: 'Aus echten Bedürfnissen entstanden',
          description: 'Jedes Tool entstand aus einem realen Problem, das wir bei der Arbeit an Kundenprojekten hatten. Wenn wir es brauchten, brauchen Sie es wahrscheinlich auch.',
        },
        {
          title: 'Durch Werbung finanziert, für Sie kostenlos',
          description:
            'Wir nutzen Google-AdSense-Banner, um die Kosten für Entwicklung und Hosting zu decken. Dank der Werbeeinnahmen können wir alle Tools kostenlos halten und weiter neue entwickeln.',
        },
      ],
    },
    ourTools: {
      title: 'Unsere Tools',
      items: [
        { title: 'Bilder & Favicons', description: 'WebP-Konverter, Online-Bildeditor und Favicon-Generator. 3 Tools für die tägliche Bildarbeit.' },
        { title: 'Meta & SEO', description: 'Meta-Titel- und Beschreibungs-Checker sowie ein Wort- und Zeichenzähler zur Bewertung der Textlänge.' },
        { title: 'E-Mail & Kommunikation', description: 'HTML-E-Mail-Signatur-Generator mit fertigem Code für Gmail und Outlook.' },
        { title: 'Farben & Barrierefreiheit', description: 'WCAG-Kontrast-Checker, Bild-Farbextraktor und Farbpaletten-Generator. 3 Tools für die Farbarbeit.' },
        { title: 'Druck & Materialien', description: 'QR-Code-Generator für Websites, vCards, Speisekarten und Flyer. Export als PNG und SVG.' },
      ],
    },
    whatsNext: {
      title: 'Was kommt als Nächstes',
      text: 'Wir arbeiten aktiv daran, das Toolkit zu erweitern. Neue Tools werden regelmäßig auf Basis von Nutzerfeedback und unserer eigenen Erfahrung hinzugefügt. Das Ziel ist eine einzige Plattform, auf der Unternehmer, Designer und Entwickler Zugang zu jedem wichtigen Tool haben — alles an einem Ort, alles kostenlos.',
    },
    privacy: {
      title: 'Datenschutz und Sicherheit',
      textBefore:
        'Wir respektieren Ihre Privatsphäre. Dateien, die Sie in unsere Tools hochladen, werden ausschließlich in Ihrem Browser verarbeitet und nie an einen Server gesendet. Wir verwenden Analysen (Google Analytics 4) und Werbung (Google AdSense) nur nach Ihrer Zustimmung über das Cookie-Banner. Alle Details finden Sie in unserer',
      linkLabel: 'Datenschutzrichtlinie',
      textAfter: '.',
    },
    cta: {
      title: 'Testen Sie unsere Tools',
      description: '10 kostenlose Online-Tools — ohne Registrierung, ohne Limits, ohne Datei-Upload auf Server',
      btnOne: 'Zu den Tools',
      btnTwo: 'Kontakt',
    },
  },

  es: {
    slug: 'sobre-nosotros',
    metadata: {
      title: 'Sobre Arteon – 10 herramientas online gratuitas para web, SEO y diseño',
      description:
        'Arteon es una agencia creativa que desarrolla herramientas gratuitas en el navegador: conversor WebP, generador de favicon, comprobador de contraste, generador de códigos QR y más. Sin registro, sin subida de archivos — todo se ejecuta localmente.',
    },
    hero: {
      title: 'Herramientas online gratuitas creadas por una agencia creativa',
      description: '10 herramientas en el navegador para imágenes, SEO, colores, firmas de correo y códigos QR — sin registro, sin subir archivos, sin límites',
    },
    whoWeAre: {
      title: 'Quiénes somos',
      p1: 'Arteon es una agencia creativa polaca. Además de nuestro trabajo comercial, desarrollamos y mantenemos una colección creciente de herramientas en línea gratuitas diseñadas para propietarios de negocios, creadores de sitios web, diseñadores, especialistas en marketing y cualquier persona que trabaje con contenido digital.',
      p2: 'Cada herramienta que creamos resuelve un problema específico y cotidiano: convertir imágenes, verificar el contraste de colores, generar favicons, crear códigos QR y más. Nuestro objetivo es construir un conjunto completo de herramientas donde pueda encontrar todo lo que necesita en un solo lugar, sin tener que navegar entre docenas de sitios web diferentes.',
    },
    whyFree: {
      title: 'Por qué ofrecemos herramientas gratuitas',
      items: [
        { title: 'Sin registro, sin límites', description: 'Cada herramienta funciona instantáneamente en su navegador. Sin cuenta, sin inicio de sesión, sin pago.' },
        {
          title: 'Privacidad primero',
          description: 'Sus archivos nunca salen de su dispositivo. Todo el procesamiento se realiza localmente en su navegador — no enviamos sus datos a ningún servidor.',
        },
        {
          title: 'Creadas a partir de necesidades reales',
          description: 'Cada herramienta nació de un problema real que encontramos al trabajar en proyectos de clientes. Si nosotros lo necesitábamos, es probable que usted también.',
        },
        {
          title: 'Financiadas por publicidad, gratuitas para usted',
          description:
            'Utilizamos banners de Google AdSense para cubrir los costes de desarrollo y alojamiento. Gracias a los ingresos publicitarios, podemos mantener todas las herramientas gratuitas y seguir creando nuevas.',
        },
      ],
    },
    ourTools: {
      title: 'Nuestras herramientas',
      items: [
        { title: 'Imágenes y favicons', description: 'Convertidor WebP, editor de imágenes en línea y generador de favicon. 3 herramientas para el trabajo diario con imágenes.' },
        { title: 'Meta y SEO', description: 'Verificador de meta título y descripción más un contador de palabras y caracteres para evaluar la longitud del texto.' },
        { title: 'Correo electrónico y comunicación', description: 'Generador de firma de correo HTML con código listo para Gmail y Outlook.' },
        { title: 'Colores y accesibilidad', description: 'Comprobador de contraste WCAG, extractor de colores de imagen y generador de paletas de colores. 3 herramientas para trabajar con color.' },
        { title: 'Impresión y materiales', description: 'Generador de códigos QR para sitios web, vCards, menús y folletos. Exportación a PNG y SVG.' },
      ],
    },
    whatsNext: {
      title: 'Qué viene después',
      text: 'Estamos trabajando activamente en ampliar el conjunto de herramientas. Se añaden nuevas herramientas regularmente basándose en los comentarios de los usuarios y nuestra propia experiencia. El objetivo es una plataforma única donde propietarios de negocios, diseñadores y desarrolladores tengan acceso a cada herramienta esencial — todo en un lugar, todo gratis.',
    },
    privacy: {
      title: 'Privacidad y seguridad',
      textBefore:
        'Respetamos su privacidad. Los archivos que sube a nuestras herramientas se procesan exclusivamente en su navegador y nunca se envían a ningún servidor. Utilizamos análisis (Google Analytics 4) y publicidad (Google AdSense) solo después de que usted dé su consentimiento a través del banner de cookies. Los detalles completos están disponibles en nuestra',
      linkLabel: 'Política de privacidad',
      textAfter: '.',
    },
    cta: {
      title: 'Pruebe nuestras herramientas',
      description: '10 herramientas en línea gratuitas — sin registro, sin límites, sin subir archivos a servidores',
      btnOne: 'Ir a herramientas',
      btnTwo: 'Contacto',
    },
  },

  fr: {
    slug: 'a-propos',
    metadata: {
      title: 'À propos d\u2019Arteon – 10 outils en ligne gratuits pour le web, le SEO et le design',
      description:
        'Arteon est une agence créative qui développe des outils gratuits dans le navigateur\u00a0: convertisseur WebP, générateur de favicon, vérificateur de contraste, générateur de codes QR et plus. Sans inscription, sans envoi de fichiers — tout fonctionne localement.',
    },
    hero: {
      title: 'Outils en ligne gratuits conçus par une agence créative',
      description: '10 outils dans le navigateur pour les images, le SEO, les couleurs, les signatures e-mail et les codes QR — sans inscription, sans envoi de fichiers, sans limites',
    },
    whoWeAre: {
      title: 'Qui sommes-nous',
      p1: "Arteon est une agence créative polonaise. En plus de notre travail commercial, nous développons et maintenons une collection grandissante d'outils en ligne gratuits destinés aux propriétaires d'entreprises, créateurs de sites web, designers, spécialistes du marketing et toute personne travaillant avec du contenu numérique.",
      p2: 'Chaque outil que nous créons résout un problème concret et quotidien\u00a0: convertir des images, vérifier le contraste des couleurs, générer des favicons, créer des codes QR et bien plus. Notre objectif est de construire une boîte à outils complète où vous trouverez tout ce dont vous avez besoin en un seul endroit — sans naviguer entre des dizaines de sites différents.',
    },
    whyFree: {
      title: 'Pourquoi nous proposons des outils gratuits',
      items: [
        { title: 'Sans inscription, sans limites', description: 'Chaque outil fonctionne instantanément dans votre navigateur. Pas de compte, pas de connexion, pas de paiement.' },
        {
          title: 'Confidentialité avant tout',
          description: "Vos fichiers ne quittent jamais votre appareil. Tout le traitement se fait localement dans votre navigateur — nous n'envoyons vos données à aucun serveur.",
        },
        {
          title: 'Créés à partir de besoins réels',
          description: "Chaque outil est né d'un problème réel que nous avons rencontré en travaillant sur des projets clients. Si nous en avions besoin, vous aussi probablement.",
        },
        {
          title: 'Financés par la publicité, gratuits pour vous',
          description:
            "Nous utilisons des bannières Google AdSense pour couvrir les coûts de développement et d'hébergement. Grâce aux revenus publicitaires, nous pouvons garder tous les outils gratuits et continuer à en créer de nouveaux.",
        },
      ],
    },
    ourTools: {
      title: 'Nos outils',
      items: [
        { title: 'Images et favicons', description: "Convertisseur WebP, éditeur d'images en ligne et générateur de favicon. 3 outils pour le travail quotidien avec les images." },
        { title: 'Méta et SEO', description: 'Vérificateur de méta titre et description plus un compteur de mots et caractères pour évaluer la longueur du texte.' },
        { title: 'E-mail et communication', description: "Générateur de signature e-mail HTML avec code prêt à l'emploi pour Gmail et Outlook." },
        {
          title: 'Couleurs et accessibilité',
          description: "Vérificateur de contraste WCAG, extracteur de couleurs d'image et générateur de palettes de couleurs. 3 outils pour travailler avec la couleur.",
        },
        { title: 'Impression et supports', description: 'Générateur de codes QR pour sites web, vCards, menus et dépliants. Export en PNG et SVG.' },
      ],
    },
    whatsNext: {
      title: 'Et ensuite',
      text: "Nous travaillons activement à l'élargissement de la boîte à outils. De nouveaux outils sont ajoutés régulièrement en fonction des retours des utilisateurs et de notre propre expérience. L'objectif est une plateforme unique où propriétaires d'entreprises, designers et développeurs ont accès à chaque outil essentiel — tout en un lieu, tout gratuitement.",
    },
    privacy: {
      title: 'Confidentialité et sécurité',
      textBefore:
        'Nous respectons votre vie privée. Les fichiers que vous importez dans nos outils sont traités exclusivement dans votre navigateur et ne sont jamais envoyés à un serveur. Nous utilisons des analyses (Google Analytics 4) et de la publicité (Google AdSense) uniquement après votre consentement via la bannière de cookies. Tous les détails sont disponibles dans notre',
      linkLabel: 'Politique de confidentialité',
      textAfter: '.',
    },
    cta: {
      title: 'Essayez nos outils',
      description: '10 outils en ligne gratuits — sans inscription, sans limites, sans envoi de fichiers sur des serveurs',
      btnOne: 'Voir les outils',
      btnTwo: 'Contact',
    },
  },

  it: {
    slug: 'chi-siamo',
    metadata: {
      title: 'Chi siamo – Arteon | 10 strumenti online gratuiti per web, SEO e design',
      description:
        'Arteon \u00e8 un\u2019agenzia creativa che sviluppa strumenti gratuiti nel browser: convertitore WebP, generatore di favicon, verificatore di contrasto, generatore di codici QR e altro. Senza registrazione, senza upload \u2014 tutto funziona localmente.',
    },
    hero: {
      title: 'Strumenti online gratuiti creati da un\u2019agenzia creativa',
      description: '10 strumenti nel browser per immagini, SEO, colori, firme e-mail e codici QR \u2014 senza registrazione, senza upload, senza limiti',
    },
    whoWeAre: {
      title: 'Chi siamo',
      p1: 'Arteon \u00e8 un\u2019agenzia creativa polacca. Oltre al nostro lavoro commerciale, sviluppiamo e manteniamo una collezione crescente di strumenti online gratuiti pensati per imprenditori, creatori di siti web, designer, specialisti di marketing e chiunque lavori con contenuti digitali.',
      p2: 'Ogni strumento che creiamo risolve un problema specifico e quotidiano: convertire immagini, verificare il contrasto dei colori, generare favicon, creare codici QR e molto altro. Il nostro obiettivo \u00e8 costruire un toolkit completo dove trovare tutto ci\u00f2 di cui hai bisogno in un unico posto \u2014 senza navigare tra decine di siti diversi.',
    },
    whyFree: {
      title: 'Perch\u00e9 offriamo strumenti gratuiti',
      items: [
        { title: 'Senza registrazione, senza limiti', description: 'Ogni strumento funziona istantaneamente nel browser. Nessun account, nessun login, nessun pagamento.' },
        {
          title: 'Privacy prima di tutto',
          description: 'I tuoi file non lasciano mai il tuo dispositivo. Tutta l\u2019elaborazione avviene localmente nel browser \u2014 non inviamo i tuoi dati a nessun server.',
        },
        {
          title: 'Creati da esigenze reali',
          description: 'Ogni strumento \u00e8 nato da un problema reale che abbiamo incontrato lavorando su progetti per clienti. Se ne avevamo bisogno noi, probabilmente ne hai bisogno anche tu.',
        },
        {
          title: 'Finanziati dalla pubblicit\u00e0, gratuiti per te',
          description:
            'Utilizziamo banner Google AdSense per coprire i costi di sviluppo e hosting. Grazie ai ricavi pubblicitari, possiamo mantenere tutti gli strumenti gratuiti e continuare a crearne di nuovi.',
        },
      ],
    },
    ourTools: {
      title: 'I nostri strumenti',
      items: [
        { title: 'Immagini e favicon', description: 'Convertitore WebP, editor di immagini online e generatore di favicon. 3 strumenti per il lavoro quotidiano con le immagini.' },
        { title: 'Meta e SEO', description: 'Verificatore di meta titolo e descrizione pi\u00f9 un contatore di parole e caratteri per valutare la lunghezza del testo.' },
        { title: 'E-mail e comunicazione', description: 'Generatore di firma e-mail HTML con codice pronto per Gmail e Outlook.' },
        {
          title: 'Colori e accessibilit\u00e0',
          description: 'Verificatore di contrasto WCAG, estrattore di colori da immagine e generatore di palette di colori. 3 strumenti per lavorare con i colori.',
        },
        { title: 'Stampa e materiali', description: 'Generatore di codici QR per siti web, vCard, menu e volantini. Esportazione in PNG e SVG.' },
      ],
    },
    whatsNext: {
      title: 'Cosa ci aspetta',
      text: 'Stiamo lavorando attivamente per ampliare il toolkit. Nuovi strumenti vengono aggiunti regolarmente in base ai feedback degli utenti e alla nostra esperienza. L\u2019obiettivo \u00e8 una piattaforma unica dove imprenditori, designer e sviluppatori abbiano accesso a ogni strumento essenziale \u2014 tutto in un posto, tutto gratis.',
    },
    privacy: {
      title: 'Privacy e sicurezza',
      textBefore:
        'Rispettiamo la tua privacy. I file che carichi nei nostri strumenti vengono elaborati esclusivamente nel tuo browser e non vengono mai inviati a nessun server. Utilizziamo analisi (Google Analytics 4) e pubblicit\u00e0 (Google AdSense) solo dopo il tuo consenso tramite il banner dei cookie. Tutti i dettagli sono disponibili nella nostra',
      linkLabel: 'Informativa sulla privacy',
      textAfter: '.',
    },
    cta: {
      title: 'Prova i nostri strumenti',
      description: '10 strumenti online gratuiti \u2014 senza registrazione, senza limiti, senza upload di file su server',
      btnOne: 'Vai agli strumenti',
      btnTwo: 'Contatto',
    },
  },

  ro: {
    slug: 'despre-noi',
    metadata: {
      title: 'Despre Arteon \u2013 10 instrumente gratuite pentru web, SEO \u0219i design',
      description:
        'Arteon este o agen\u021bie creativ\u0103 care dezvolt\u0103 instrumente gratuite \u00een browser: convertor WebP, generator de favicon, verificator de contrast, generator de coduri QR \u0219i multe altele. F\u0103r\u0103 \u00eenregistrare, f\u0103r\u0103 \u00eenc\u0103rcare \u2014 totul ruleaz\u0103 local.',
    },
    hero: {
      title: 'Instrumente gratuite create de o agen\u021bie creativ\u0103',
      description:
        '10 instrumente \u00een browser pentru imagini, SEO, culori, semn\u0103turi e-mail \u0219i coduri QR \u2014 f\u0103r\u0103 \u00eenregistrare, f\u0103r\u0103 \u00eenc\u0103rcare de fi\u0219iere, f\u0103r\u0103 limite',
    },
    whoWeAre: {
      title: 'Cine suntem',
      p1: 'Arteon este o agen\u021bie creativ\u0103 polonez\u0103. Pe l\u00e2ng\u0103 munca noastr\u0103 comercial\u0103, dezvolt\u0103m \u0219i \u00eentre\u021binem o colec\u021bie cresc\u00e2nd\u0103 de instrumente gratuite concepute pentru proprietari de afaceri, creatori de site-uri web, designeri, speciali\u0219ti \u00een marketing \u0219i oricine lucreaz\u0103 cu con\u021binut digital.',
      p2: 'Fiecare instrument pe care \u00eel cre\u0103m rezolv\u0103 o problem\u0103 specific\u0103 \u0219i cotidian\u0103: conversia imaginilor, verificarea contrastului culorilor, generarea de favicon-uri, crearea de coduri QR \u0219i multe altele. Scopul nostru este s\u0103 construim un set complet de instrumente unde pute\u021bi g\u0103si tot ce ave\u021bi nevoie \u00eentr-un singur loc \u2014 f\u0103r\u0103 a naviga \u00eentre zeci de site-uri diferite.',
    },
    whyFree: {
      title: 'De ce oferim instrumente gratuite',
      items: [
        {
          title: 'F\u0103r\u0103 \u00eenregistrare, f\u0103r\u0103 limite',
          description: 'Fiecare instrument func\u021bioneaz\u0103 instant \u00een browser. F\u0103r\u0103 cont, f\u0103r\u0103 autentificare, f\u0103r\u0103 plat\u0103.',
        },
        {
          title: 'Confiden\u021bialitate \u00een primul r\u00e2nd',
          description: 'Fi\u0219ierele dvs. nu p\u0103r\u0103sesc niciodat\u0103 dispozitivul. Toat\u0103 procesarea are loc local \u00een browser \u2014 nu trimitem datele dvs. la niciun server.',
        },
        {
          title: 'Create din nevoi reale',
          description:
            'Fiecare instrument s-a n\u0103scut dintr-o problem\u0103 real\u0103 pe care am \u00eent\u00e2lnit-o lucr\u00e2nd la proiecte pentru clien\u021bi. Dac\u0103 noi aveam nevoie, probabil \u0219i dvs.',
        },
        {
          title: 'Finan\u021bate prin publicitate, gratuite pentru dvs.',
          description:
            'Folosim bannere Google AdSense pentru a acoperi costurile de dezvoltare \u0219i g\u0103zduire. Datorit\u0103 veniturilor din publicitate, putem men\u021bine toate instrumentele gratuite \u0219i continua s\u0103 cre\u0103m altele noi.',
        },
      ],
    },
    ourTools: {
      title: 'Instrumentele noastre',
      items: [
        { title: 'Imagini \u0219i favicon-uri', description: 'Convertor WebP, editor de imagini \u0219i generator de favicon. 3 instrumente pentru lucrul zilnic cu imagini.' },
        { title: 'Meta \u0219i SEO', description: 'Verificator de meta titlu \u0219i descriere plus un contor de cuvinte \u0219i caractere pentru evaluarea lungimii textului.' },
        { title: 'E-mail \u0219i comunicare', description: 'Generator de semn\u0103tur\u0103 e-mail HTML cu cod gata pentru Gmail \u0219i Outlook.' },
        {
          title: 'Culori \u0219i accesibilitate',
          description: 'Verificator de contrast WCAG, extractor de culori din imagine \u0219i generator de palete de culori. 3 instrumente pentru lucrul cu culoarea.',
        },
        { title: 'Tip\u0103rire \u0219i materiale', description: 'Generator de coduri QR pentru site-uri web, vCard-uri, meniuri \u0219i pliante. Export \u00een PNG \u0219i SVG.' },
      ],
    },
    whatsNext: {
      title: 'Ce urmeaz\u0103',
      text: 'Lucr\u0103m activ la extinderea setului de instrumente. Instrumente noi sunt ad\u0103ugate regulat pe baza feedback-ului utilizatorilor \u0219i a propriei noastre experien\u021be. Scopul este o platform\u0103 unic\u0103 unde proprietarii de afaceri, designerii \u0219i dezvoltatorii au acces la fiecare instrument esen\u021bial \u2014 totul \u00eentr-un singur loc, totul gratuit.',
    },
    privacy: {
      title: 'Confiden\u021bialitate \u0219i securitate',
      textBefore:
        'Respect\u0103m confiden\u021bialitatea dvs. Fi\u0219ierele pe care le \u00eenc\u0103rca\u021bi \u00een instrumentele noastre sunt procesate exclusiv \u00een browser \u0219i nu sunt trimise niciodat\u0103 la niciun server. Folosim analize (Google Analytics 4) \u0219i publicitate (Google AdSense) doar dup\u0103 consim\u021b\u0103m\u00e2ntul dvs. prin bannerul de cookie-uri. Detaliile complete sunt disponibile \u00een',
      linkLabel: 'Politica de confiden\u021bialitate',
      textAfter: '.',
    },
    cta: {
      title: '\u00cencerca\u021bi instrumentele noastre',
      description: '10 instrumente gratuite \u2014 f\u0103r\u0103 \u00eenregistrare, f\u0103r\u0103 limite, f\u0103r\u0103 \u00eenc\u0103rcare de fi\u0219iere pe servere',
      btnOne: 'Mergi la instrumente',
      btnTwo: 'Contact',
    },
  },

  nl: {
    slug: 'over-ons',
    metadata: {
      title: 'Over Arteon \u2013 10 gratis online tools voor web, SEO & design',
      description:
        'Arteon is een creatief bureau dat gratis browsertools bouwt: WebP-converter, favicon-generator, kleurcontrast-checker, QR-code generator en meer. Zonder registratie, zonder upload \u2014 alles draait lokaal.',
    },
    hero: {
      title: 'Gratis online tools gemaakt door een creatief bureau',
      description: '10 browsertools voor afbeeldingen, SEO, kleuren, e-mailhandtekeningen en QR-codes \u2014 zonder registratie, zonder bestandsuploads, zonder limieten',
    },
    whoWeAre: {
      title: 'Wie wij zijn',
      p1: 'Arteon is een Pools creatief bureau. Naast ons commerci\u00eble werk bouwen en onderhouden we een groeiende collectie gratis online tools voor ondernemers, websitebouwers, ontwerpers, marketeers en iedereen die met digitale content werkt.',
      p2: 'Elke tool die we maken lost een specifiek, alledaags probleem op: afbeeldingen converteren, kleurcontrast controleren, favicons genereren, QR-codes maken en meer. Ons doel is een compleet pakket tools te bouwen waar u alles vindt wat u nodig heeft op \u00e9\u00e9n plek \u2014 zonder te schakelen tussen tientallen verschillende websites.',
    },
    whyFree: {
      title: 'Waarom wij gratis tools aanbieden',
      items: [
        { title: 'Zonder registratie, zonder limieten', description: 'Elke tool werkt direct in uw browser. Geen account, geen login, geen betaling.' },
        { title: 'Privacy voorop', description: 'Uw bestanden verlaten nooit uw apparaat. Alle verwerking gebeurt lokaal in uw browser \u2014 wij sturen uw gegevens niet naar een server.' },
        {
          title: 'Gemaakt vanuit echte behoeften',
          description: 'Elke tool is ontstaan uit een echt probleem dat we tegenkwamen bij het werken aan klantprojecten. Als wij het nodig hadden, heeft u het waarschijnlijk ook nodig.',
        },
        {
          title: 'Gefinancierd door advertenties, gratis voor u',
          description:
            'We gebruiken Google AdSense-banners om de kosten van ontwikkeling en hosting te dekken. Dankzij advertentie-inkomsten kunnen we alle tools gratis houden en nieuwe blijven maken.',
        },
      ],
    },
    ourTools: {
      title: 'Onze tools',
      items: [
        { title: 'Afbeeldingen & favicons', description: 'WebP-converter, online afbeeldingeneditor en favicon-generator. 3 tools voor dagelijks beeldwerk.' },
        { title: 'Meta & SEO', description: 'Meta-titel en beschrijving checker plus een woorden- en tekenteller om de tekstlengte te beoordelen.' },
        { title: 'E-mail & communicatie', description: 'HTML e-mailhandtekening generator met kant-en-klare code voor Gmail en Outlook.' },
        { title: 'Kleuren & toegankelijkheid', description: 'WCAG-contrastchecker, kleurextractor uit afbeeldingen en kleurpalettengenerator. 3 tools voor kleurwerk.' },
        { title: 'Drukwerk & materialen', description: 'QR-code generator voor websites, vCards, menu\u2019s en flyers. Export naar PNG en SVG.' },
      ],
    },
    whatsNext: {
      title: 'Wat komt er nog',
      text: 'We werken actief aan het uitbreiden van het toolpakket. Nieuwe tools worden regelmatig toegevoegd op basis van gebruikersfeedback en onze eigen ervaring. Het doel is \u00e9\u00e9n platform waar ondernemers, ontwerpers en ontwikkelaars toegang hebben tot elke essenti\u00eble tool \u2014 alles op \u00e9\u00e9n plek, alles gratis.',
    },
    privacy: {
      title: 'Privacy en veiligheid',
      textBefore:
        'Wij respecteren uw privacy. Bestanden die u in onze tools uploadt worden uitsluitend in uw browser verwerkt en worden nooit naar een server gestuurd. Wij gebruiken analyses (Google Analytics 4) en advertenties (Google AdSense) alleen na uw toestemming via de cookiebanner. Alle details vindt u in ons',
      linkLabel: 'Privacybeleid',
      textAfter: '.',
    },
    cta: {
      title: 'Probeer onze tools',
      description: '10 gratis online tools \u2014 zonder registratie, zonder limieten, zonder bestandsuploads naar servers',
      btnOne: 'Naar de tools',
      btnTwo: 'Contact',
    },
  },

  hu: {
    slug: 'rolunk',
    metadata: {
      title: 'Az Arteonr\u00f3l \u2013 10 ingyenes online eszk\u00f6z webhez, SEO-hoz \u00e9s designhoz',
      description:
        'Az Arteon egy kreat\u00edv \u00fcgyn\u00f6ks\u00e9g, amely ingyenes b\u00f6ng\u00e9sz\u0151alap\u00fa eszk\u00f6z\u00f6ket fejleszt: WebP konverter, favicon gener\u00e1tor, sz\u00ednkontraszt ellen\u0151rz\u0151, QR-k\u00f3d gener\u00e1tor \u00e9s m\u00e9g sok m\u00e1s. Regisztr\u00e1ci\u00f3 \u00e9s felt\u00f6lt\u00e9s n\u00e9lk\u00fcl \u2014 minden helyben fut.',
    },
    hero: {
      title: 'Ingyenes online eszk\u00f6z\u00f6k egy kreat\u00edv \u00fcgyn\u00f6ks\u00e9gt\u0151l',
      description:
        '10 b\u00f6ng\u00e9sz\u0151alap\u00fa eszk\u00f6z k\u00e9pekhez, SEO-hoz, sz\u00ednekhez, e-mail al\u00e1\u00edr\u00e1sokhoz \u00e9s QR-k\u00f3dokhoz \u2014 regisztr\u00e1ci\u00f3, f\u00e1jlfelt\u00f6lt\u00e9s \u00e9s korl\u00e1toz\u00e1s n\u00e9lk\u00fcl',
    },
    whoWeAre: {
      title: 'Kik vagyunk',
      p1: 'Az Arteon egy lengyel kreat\u00edv \u00fcgyn\u00f6ks\u00e9g. Kereskedelmi munk\u00e1nk mellett egy b\u0151v\u00fcl\u0151 gy\u0171jtem\u00e9nyt fejleszt\u00fcnk \u00e9s tartunk karban ingyenes online eszk\u00f6z\u00f6kb\u0151l, amelyeket v\u00e1llalkoz\u00e1stulajdonosoknak, weboldal-k\u00e9sz\u00edt\u0151knek, designereknek, marketingeseknek \u00e9s mindenkinek tervezt\u00fcnk, aki digit\u00e1lis tartalommal dolgozik.',
      p2: 'Minden \u00e1ltalunk l\u00e9trehozott eszk\u00f6z egy konkr\u00e9t, mindennapi probl\u00e9m\u00e1t old meg: k\u00e9pek konvert\u00e1l\u00e1sa, sz\u00ednkontraszt ellen\u0151rz\u00e9se, faviconok gener\u00e1l\u00e1sa, QR-k\u00f3dok l\u00e9trehoz\u00e1sa \u00e9s sok m\u00e1s. C\u00e9lunk egy \u00e1tfog\u00f3 eszk\u00f6zt\u00e1r \u00e9p\u00edt\u00e9se, ahol mindent megtal\u00e1l egy helyen \u2014 an\u00e9lk\u00fcl, hogy tucatnyi k\u00fcl\u00f6nb\u00f6z\u0151 webhely k\u00f6z\u00f6tt kellene v\u00e1ltogatnia.',
    },
    whyFree: {
      title: 'Mi\u00e9rt k\u00edn\u00e1lunk ingyenes eszk\u00f6z\u00f6ket',
      items: [
        {
          title: 'Regisztr\u00e1ci\u00f3 \u00e9s korl\u00e1toz\u00e1s n\u00e9lk\u00fcl',
          description: 'Minden eszk\u00f6z azonnal m\u0171k\u00f6dik a b\u00f6ng\u00e9sz\u0151j\u00e9ben. Nincs fi\u00f3k, nincs bejelentkez\u00e9s, nincs fizet\u00e9s.',
        },
        {
          title: 'Adatv\u00e9delem az els\u0151 helyen',
          description:
            'F\u00e1jljai soha nem hagyj\u00e1k el az eszk\u00f6z\u00e9t. Minden feldolgoz\u00e1s helyben t\u00f6rt\u00e9nik a b\u00f6ng\u00e9sz\u0151ben \u2014 nem k\u00fcldjk az adatait semmilyen szerverre.',
        },
        {
          title: 'Val\u00f3s ig\u00e9nyekb\u0151l sz\u00fcletett',
          description:
            'Minden eszk\u00f6z egy val\u00f3s probl\u00e9m\u00e1b\u00f3l sz\u00fcletett, amellyel \u00fcgyf\u00e9lprojekteken dolgozva tal\u00e1lkoztunk. Ha nek\u00fcnk sz\u00fcks\u00e9g\u00fcnk volt r\u00e1, val\u00f3sz\u00edn\u0171leg \u00d6nnek is.',
        },
        {
          title: 'Hirdet\u00e9sekb\u0151l finansz\u00edrozott, \u00d6nnek ingyenes',
          description:
            'Google AdSense bannereket haszn\u00e1lunk a fejleszt\u00e9si \u00e9s t\u00e1rhely-k\u00f6lts\u00e9gek fedez\u00e9s\u00e9re. A hirdet\u00e9si bev\u00e9teleknek k\u00f6sz\u00f6nhet\u0151en minden eszk\u00f6zt ingyenesen tudunk tartani \u00e9s tov\u00e1bbiakat fejleszteni.',
        },
      ],
    },
    ourTools: {
      title: 'Eszk\u00f6zeink',
      items: [
        { title: 'K\u00e9pek \u00e9s faviconok', description: 'WebP konverter, k\u00e9pszerkeszt\u0151 \u00e9s favicon gener\u00e1tor. 3 eszk\u00f6z a mindennapi k\u00e9pmunk\u00e1hoz.' },
        {
          title: 'Meta \u00e9s SEO',
          description: 'Meta c\u00edm \u00e9s le\u00edr\u00e1s ellen\u0151rz\u0151 plusz sz\u00f3- \u00e9s karaktersz\u00e1ml\u00e1l\u00f3 a sz\u00f6veghossz \u00e9rt\u00e9kel\u00e9s\u00e9hez.',
        },
        { title: 'E-mail \u00e9s kommunik\u00e1ci\u00f3', description: 'HTML e-mail al\u00e1\u00edr\u00e1s gener\u00e1tor k\u00e9sz k\u00f3ddal Gmailhez \u00e9s Outlookhoz.' },
        {
          title: 'Sz\u00ednek \u00e9s akad\u00e1lymentess\u00e9g',
          description: 'WCAG kontraszt ellen\u0151rz\u0151, k\u00e9p sz\u00ednkinyer\u0151 \u00e9s sz\u00ednpaletta gener\u00e1tor. 3 eszk\u00f6z a sz\u00ednekkel val\u00f3 munk\u00e1hoz.',
        },
        {
          title: 'Nyomtat\u00e1s \u00e9s anyagok',
          description: 'QR-k\u00f3d gener\u00e1tor weboldalakhoz, vCard-okhoz, men\u00fckh\u00f6z \u00e9s sz\u00f3r\u00f3lapokhoz. Export\u00e1l\u00e1s PNG \u00e9s SVG form\u00e1tumban.',
        },
      ],
    },
    whatsNext: {
      title: 'Mi k\u00f6vetkezik',
      text: 'Akt\u00edvan dolgozunk az eszk\u00f6zt\u00e1r b\u0151v\u00edt\u00e9s\u00e9n. \u00daj eszk\u00f6z\u00f6ket rendszeresen adunk hozz\u00e1 a felhaszn\u00e1l\u00f3i visszajelz\u00e9sek \u00e9s saj\u00e1t tapasztalataink alapj\u00e1n. A c\u00e9l egyetlen platform, ahol a v\u00e1llalkoz\u00e1stulajdonosok, designerek \u00e9s fejleszt\u0151k minden l\u00e9nyeges eszk\u00f6zh\u00f6z hozz\u00e1f\u00e9rnek \u2014 minden egy helyen, minden ingyen.',
    },
    privacy: {
      title: 'Adatv\u00e9delem \u00e9s biztons\u00e1g',
      textBefore:
        'Tiszteletben tartjuk a mag\u00e1n\u00e9let\u00e9t. Az eszk\u00f6zeinkbe felt\u00f6lt\u00f6tt f\u00e1jlokat kiz\u00e1r\u00f3lag a b\u00f6ng\u00e9sz\u0151j\u00e9ben dolgozzuk fel, \u00e9s soha nem k\u00fcldjk szerverre. Analitik\u00e1t (Google Analytics 4) \u00e9s hirdet\u00e9seket (Google AdSense) csak az \u00d6n cookie-banneren adott hozz\u00e1j\u00e1rul\u00e1sa ut\u00e1n haszn\u00e1lunk. A teljes r\u00e9szletek az',
      linkLabel: 'Adatv\u00e9delmi ir\u00e1nyelvek',
      textAfter: ' oldalon tal\u00e1lhat\u00f3k.',
    },
    cta: {
      title: 'Pr\u00f3b\u00e1lja ki eszk\u00f6zeinket',
      description: '10 ingyenes online eszk\u00f6z \u2014 regisztr\u00e1ci\u00f3, korl\u00e1toz\u00e1s \u00e9s szerverre felt\u00f6lt\u00e9s n\u00e9lk\u00fcl',
      btnOne: 'Eszk\u00f6z\u00f6k megtekint\u00e9se',
      btnTwo: 'Kapcsolat',
    },
  },
  id: {
    slug: 'tentang-kami',
    metadata: {
      title: 'Tentang Arteon – 10 Alat Gratis untuk Web, SEO & Desain',
      description:
        'Arteon adalah agensi kreatif yang membangun alat gratis berbasis browser: konverter WebP, generator favicon, pemeriksa kontras warna, pembuat kode QR, dan lainnya. Tanpa pendaftaran, tanpa unggah — semua berjalan lokal.',
    },
    hero: {
      title: 'Alat gratis yang dibuat oleh agensi kreatif',
      description: '10 alat berbasis browser untuk gambar, SEO, warna, tanda tangan email, dan kode QR — tanpa pendaftaran, tanpa unggah file, tanpa batasan',
    },
    whoWeAre: {
      title: 'Siapa kami',
      p1: 'Arteon adalah agensi kreatif asal Polandia. Selain pekerjaan komersial, kami membangun dan memelihara koleksi alat gratis yang terus berkembang, dirancang untuk pemilik bisnis, pembuat situs web, desainer, pemasar, dan siapa pun yang bekerja dengan konten digital.',
      p2: 'Setiap alat yang kami buat menyelesaikan masalah spesifik sehari-hari: mengonversi gambar, memeriksa kontras warna, menghasilkan favicon, membuat kode QR, dan lainnya. Tujuan kami adalah membangun perangkat lengkap di mana Anda bisa menemukan semua yang Anda butuhkan di satu tempat — tanpa berpindah antar puluhan situs.',
    },
    whyFree: {
      title: 'Mengapa kami menawarkan alat gratis',
      items: [
        { title: 'Tanpa pendaftaran, tanpa batasan', description: 'Setiap alat langsung berfungsi di browser Anda. Tanpa akun, tanpa login, tanpa pembayaran.' },
        { title: 'Privasi utama', description: 'File Anda tidak pernah meninggalkan perangkat. Semua pemrosesan terjadi secara lokal di browser — kami tidak mengirim data Anda ke server mana pun.' },
        { title: 'Dibuat dari kebutuhan nyata', description: 'Setiap alat lahir dari masalah nyata yang kami temui saat mengerjakan proyek klien. Jika kami membutuhkannya, kemungkinan Anda juga.' },
        {
          title: 'Didanai iklan, gratis untuk Anda',
          description:
            'Kami menggunakan banner Google AdSense untuk menutupi biaya pengembangan dan hosting. Berkat pendapatan iklan, kami bisa menjaga semua alat tetap gratis dan terus membangun yang baru.',
        },
      ],
    },
    ourTools: {
      title: 'Alat kami',
      items: [
        { title: 'Gambar & favicon', description: 'Konverter WebP, editor gambar, dan generator favicon. 3 alat untuk pekerjaan gambar sehari-hari.' },
        { title: 'Meta & SEO', description: 'Pemeriksa meta title dan deskripsi plus penghitung kata dan karakter untuk mengevaluasi panjang teks.' },
        { title: 'Email & komunikasi', description: 'Generator tanda tangan email HTML dengan kode siap pakai untuk Gmail dan Outlook.' },
        { title: 'Warna & aksesibilitas', description: 'Pemeriksa kontras WCAG, ekstraktor warna gambar, dan generator palet warna. 3 alat untuk bekerja dengan warna.' },
        { title: 'Cetak & materi', description: 'Generator kode QR untuk situs web, vCard, menu, dan flyer. Ekspor ke PNG dan SVG.' },
      ],
    },
    whatsNext: {
      title: 'Apa selanjutnya',
      text: 'Kami aktif mengembangkan perangkat. Alat baru ditambahkan secara berkala berdasarkan masukan pengguna dan pengalaman kami. Tujuannya adalah platform tunggal di mana pemilik bisnis, desainer, dan pengembang memiliki akses ke setiap alat penting — semua di satu tempat, semua gratis.',
    },
    privacy: {
      title: 'Privasi dan keamanan',
      textBefore:
        'Kami menghormati privasi Anda. File yang Anda unggah ke alat kami diproses secara eksklusif di browser dan tidak pernah dikirim ke server mana pun. Kami menggunakan analitik (Google Analytics 4) dan iklan (Google AdSense) hanya setelah Anda memberikan persetujuan melalui banner cookie. Detail lengkap tersedia di',
      linkLabel: 'Kebijakan Privasi',
      textAfter: ' kami.',
    },
    cta: {
      title: 'Coba alat kami',
      description: '10 alat gratis — tanpa pendaftaran, tanpa batasan, tanpa unggah file ke server',
      btnOne: 'Ke alat',
      btnTwo: 'Kontak',
    },
  },
  vi: {
    slug: 'gioi-thieu',
    metadata: {
      title: 'Về Arteon – 10 Công Cụ Miễn Phí cho Web, SEO & Thiết Kế',
      description:
        'Arteon là một agency sáng tạo xây dựng các công cụ miễn phí trên trình duyệt: chuyển đổi WebP, tạo favicon, kiểm tra độ tương phản màu, tạo mã QR và nhiều hơn. Không đăng ký, không tải lên — mọi thứ chạy cục bộ.',
    },
    hero: {
      title: 'Công cụ miễn phí được xây dựng bởi agency sáng tạo',
      description: '10 công cụ trình duyệt cho hình ảnh, SEO, màu sắc, chữ ký email và mã QR — không đăng ký, không tải file, không giới hạn',
    },
    whoWeAre: {
      title: 'Chúng tôi là ai',
      p1: 'Arteon là agency sáng tạo đến từ Ba Lan. Ngoài công việc thương mại, chúng tôi xây dựng và duy trì bộ sưu tập công cụ miễn phí ngày càng lớn, dành cho chủ doanh nghiệp, nhà tạo web, designer, marketer và bất kỳ ai làm việc với nội dung số.',
      p2: 'Mỗi công cụ chúng tôi tạo giải quyết một vấn đề cụ thể hàng ngày: chuyển đổi hình ảnh, kiểm tra độ tương phản, tạo favicon, tạo mã QR và nhiều hơn. Mục tiêu là xây dựng bộ công cụ toàn diện nơi bạn tìm được mọi thứ cần thiết ở một nơi — không cần chuyển đổi giữa hàng chục trang web.',
    },
    whyFree: {
      title: 'Tại sao chúng tôi cung cấp công cụ miễn phí',
      items: [
        { title: 'Không đăng ký, không giới hạn', description: 'Mọi công cụ hoạt động ngay trên trình duyệt. Không cần tài khoản, đăng nhập hay thanh toán.' },
        {
          title: 'Quyền riêng tư là ưu tiên',
          description: 'File của bạn không bao giờ rời khỏi thiết bị. Mọi xử lý diễn ra cục bộ trên trình duyệt — chúng tôi không gửi dữ liệu đến bất kỳ server nào.',
        },
        { title: 'Xây dựng từ nhu cầu thực', description: 'Mỗi công cụ ra đời từ vấn đề thực tế chúng tôi gặp khi làm dự án khách hàng. Nếu chúng tôi cần, có thể bạn cũng vậy.' },
        {
          title: 'Tài trợ bởi quảng cáo, miễn phí cho bạn',
          description:
            'Chúng tôi sử dụng banner Google AdSense để trang trải chi phí phát triển và hosting. Nhờ doanh thu quảng cáo, chúng tôi giữ tất cả công cụ miễn phí và tiếp tục xây dựng cái mới.',
        },
      ],
    },
    ourTools: {
      title: 'Công cụ của chúng tôi',
      items: [
        { title: 'Hình ảnh & favicon', description: 'Chuyển đổi WebP, chỉnh sửa hình ảnh và tạo favicon. 3 công cụ cho công việc hình ảnh hàng ngày.' },
        { title: 'Meta & SEO', description: 'Kiểm tra meta title và description cùng bộ đếm từ và ký tự để đánh giá độ dài văn bản.' },
        { title: 'Email & giao tiếp', description: 'Tạo chữ ký email HTML với mã sẵn sàng cho Gmail và Outlook.' },
        { title: 'Màu sắc & trợ năng', description: 'Kiểm tra tương phản WCAG, trích xuất màu từ hình ảnh và tạo bảng màu. 3 công cụ làm việc với màu.' },
        { title: 'In ấn & tài liệu', description: 'Tạo mã QR cho trang web, vCard, thực đơn và tờ rơi. Xuất ra PNG và SVG.' },
      ],
    },
    whatsNext: {
      title: 'Tiếp theo là gì',
      text: 'Chúng tôi đang tích cực mở rộng bộ công cụ. Công cụ mới được thêm thường xuyên dựa trên góp ý của người dùng và kinh nghiệm của chúng tôi. Mục tiêu là nền tảng duy nhất nơi chủ doanh nghiệp, designer và lập trình viên có quyền truy cập mọi công cụ thiết yếu — tất cả ở một nơi, tất cả miễn phí.',
    },
    privacy: {
      title: 'Quyền riêng tư và bảo mật',
      textBefore:
        'Chúng tôi tôn trọng quyền riêng tư của bạn. File bạn tải lên công cụ được xử lý hoàn toàn trong trình duyệt và không bao giờ gửi đến server. Chúng tôi sử dụng phân tích (Google Analytics 4) và quảng cáo (Google AdSense) chỉ sau khi bạn đồng ý qua banner cookie. Chi tiết đầy đủ có trong',
      linkLabel: 'Chính Sách Bảo Mật',
      textAfter: ' của chúng tôi.',
    },
    cta: {
      title: 'Thử công cụ của chúng tôi',
      description: '10 công cụ miễn phí — không đăng ký, không giới hạn, không tải file lên server',
      btnOne: 'Đến công cụ',
      btnTwo: 'Liên hệ',
    },
  },
  tr: {
    slug: 'hakkimizda',
    metadata: {
      title: 'Arteon Hakkında – Web, SEO & Tasarım için 10 Ücretsiz Araç',
      description:
        'Arteon, tarayıcı tabanlı ücretsiz araçlar geliştiren bir yaratıcı ajanstır: WebP dönüştürücü, favicon oluşturucu, renk kontrast denetçisi, QR kod yapıcı ve daha fazlası. Kayıt yok, yükleme yok — her şey yerel olarak çalışır.',
    },
    hero: {
      title: 'Yaratıcı bir ajans tarafından geliştirilen ücretsiz araçlar',
      description: 'Görseller, SEO, renkler, e-posta imzaları ve QR kodlar için 10 tarayıcı tabanlı araç — kayıt yok, dosya yükleme yok, sınır yok',
    },
    whoWeAre: {
      title: 'Biz kimiz',
      p1: 'Arteon, Polonya merkezli bir yaratıcı ajanstır. Ticari çalışmalarımızın yanı sıra, iş sahipleri, web geliştiriciler, tasarımcılar, pazarlamacılar ve dijital içerikle çalışan herkes için tasarlanmış ücretsiz araçlardan oluşan büyüyen bir koleksiyon oluşturuyor ve sürdürüyoruz.',
      p2: 'Oluşturduğumuz her araç belirli, günlük bir sorunu çözer: görsel dönüştürme, renk kontrastı kontrolü, favicon oluşturma, QR kod üretme ve daha fazlası. Hedefimiz, ihtiyacınız olan her şeyi tek bir yerde bulabileceğiniz kapsamlı bir araç seti oluşturmak — onlarca farklı site arasında geçiş yapmadan.',
    },
    whyFree: {
      title: 'Neden ücretsiz araçlar sunuyoruz',
      items: [
        { title: 'Kayıt yok, sınır yok', description: 'Her araç tarayıcınızda anında çalışır. Hesap, giriş veya ödeme gerekmez.' },
        { title: 'Gizlilik öncelikli', description: 'Dosyalarınız cihazınızdan asla ayrılmaz. Tüm işleme tarayıcınızda yerel olarak gerçekleşir — verilerinizi hiçbir sunucuya göndermeyiz.' },
        { title: 'Gerçek ihtiyaçlardan doğdu', description: 'Her araç, müşteri projelerinde karşılaştığımız gerçek bir sorundan doğdu. Bizim ihtiyacımız varsa, muhtemelen sizin de vardır.' },
        {
          title: 'Reklamlarla finanse ediliyor, sizin için ücretsiz',
          description:
            'Geliştirme ve barındırma maliyetlerini karşılamak için Google AdSense bannerı kullanıyoruz. Reklam geliri sayesinde tüm araçları ücretsiz tutabilir ve yenilerini geliştirmeye devam edebiliriz.',
        },
      ],
    },
    ourTools: {
      title: 'Araçlarımız',
      items: [
        { title: 'Görseller & favicon', description: 'WebP dönüştürücü, görsel düzenleyici ve favicon oluşturucu. Günlük görsel çalışması için 3 araç.' },
        { title: 'Meta & SEO', description: 'Meta başlık ve açıklama denetçisi ile metin uzunluğunu değerlendirmek için kelime ve karakter sayacı.' },
        { title: 'E-posta & iletişim', description: 'Gmail ve Outlook için hazır kodlu HTML e-posta imzası oluşturucu.' },
        { title: 'Renkler & erişilebilirlik', description: 'WCAG kontrast denetçisi, görselden renk çıkarıcı ve renk paleti oluşturucu. Renkle çalışmak için 3 araç.' },
        { title: 'Baskı & materyaller', description: 'Web siteleri, vCard’lar, menüler ve el ilanları için QR kod oluşturucu. PNG ve SVG olarak dışa aktarım.' },
      ],
    },
    whatsNext: {
      title: 'Sırada ne var',
      text: 'Araç setini genişletmek için aktif olarak çalışıyoruz. Kullanıcı geri bildirimleri ve kendi deneyimimize dayanarak düzenli olarak yeni araçlar ekleniyor. Hedef, iş sahiplerinin, tasarımcıların ve geliştiricilerin her temel araca erişebildiği tek bir platform — hepsi bir yerde, hepsi ücretsiz.',
    },
    privacy: {
      title: 'Gizlilik ve güvenlik',
      textBefore:
        'Gizliliğinize saygı duyuyoruz. Araçlarımıza yüklediğiniz dosyalar yalnızca tarayıcınızda işlenir ve hiçbir sunucuya gönderilmez. Analiz (Google Analytics 4) ve reklamcılığı (Google AdSense) yalnızca çerez bannerı aracılığıyla onay verdikten sonra kullanırız. Tüm ayrıntılar',
      linkLabel: 'Gizlilik Politikamızda',
      textAfter: ' mevcuttur.',
    },
    cta: {
      title: 'Araçlarımızı deneyin',
      description: '10 ücretsiz araç — kayıt yok, sınır yok, sunucuya dosya yükleme yok',
      btnOne: 'Araçlara git',
      btnTwo: 'İletişim',
    },
  },

  tl: {
    slug: 'tungkol-sa-amin',
    metadata: {
      title: 'Tungkol sa Arteon \u2013 10 Libreng Tool para sa Web, SEO at Disenyo',
      description:
        'Ang Arteon ay isang creative agency na gumagawa ng libreng browser-based na mga tool: WebP converter, favicon generator, color contrast checker, QR code maker at marami pa. Walang registration, walang upload \u2014 lahat ay lokal na tumatakbo.',
    },
    hero: {
      title: 'Mga libreng tool mula sa isang creative agency',
      description: '10 browser-based na tool para sa mga larawan, SEO, kulay, email signature at QR code \u2014 walang registration, walang pag-upload ng file, walang limitasyon',
    },
    whoWeAre: {
      title: 'Sino kami',
      p1: 'Ang Arteon ay isang Polish creative agency. Bukod sa aming komersyal na trabaho, gumagawa at nagpapanatili kami ng lumalaking koleksyon ng mga libreng tool na dinisenyo para sa mga may-ari ng negosyo, web creator, designer, marketer, at sinumang nagtatrabaho sa digital na nilalaman.',
      p2: 'Bawat tool na ginagawa namin ay lumutas ng isang tiyak na pang-araw-araw na problema: pag-convert ng mga larawan, pag-check ng color contrast, pag-generate ng favicon, paggawa ng QR code, at marami pa. Ang layunin namin ay bumuo ng komprehensibong toolkit kung saan mahahanap mo ang lahat ng kailangan mo sa isang lugar \u2014 nang hindi lumilipat sa dosena-dosenang iba\u2019t ibang website.',
    },
    whyFree: {
      title: 'Bakit nag-aalok kami ng mga libreng tool',
      items: [
        { title: 'Walang registration, walang limitasyon', description: 'Bawat tool ay gumagana agad sa browser mo. Walang account, walang login, walang bayad.' },
        { title: 'Privacy muna', description: 'Hindi umaalis ang mga file mo sa device mo. Lahat ng pagproseso ay lokal sa browser \u2014 hindi namin ipinapadala ang datos mo sa anumang server.' },
        {
          title: 'Gawa mula sa tunay na pangangailangan',
          description: 'Bawat tool ay ipinanganak mula sa tunay na problemang naranasan namin habang nagtatrabaho sa mga proyekto ng kliyente. Kung kailangan namin ito, malamang na kailangan mo rin.',
        },
        {
          title: 'Pinopondohan ng ads, libre para sa iyo',
          description:
            'Gumagamit kami ng Google AdSense banner para masakop ang gastos sa development at hosting. Salamat sa kita mula sa ads, mananatiling libre ang lahat ng tool at patuloy kaming gagawa ng bago.',
        },
      ],
    },
    ourTools: {
      title: 'Ang aming mga tool',
      items: [
        { title: 'Mga larawan at favicon', description: 'WebP converter, image editor, at favicon generator. 3 tool para sa pang-araw-araw na pagtatrabaho sa larawan.' },
        { title: 'Meta at SEO', description: 'Meta title at description checker kasama ang word at character counter para suriin ang haba ng teksto.' },
        { title: 'Email at komunikasyon', description: 'HTML email signature generator na may handa nang code para sa Gmail at Outlook.' },
        { title: 'Kulay at accessibility', description: 'WCAG contrast checker, image color extractor, at color palette generator. 3 tool para sa pagtatrabaho sa kulay.' },
        { title: 'Print at materyales', description: 'QR code generator para sa website, vCard, menu, at flyer. I-export sa PNG at SVG.' },
      ],
    },
    whatsNext: {
      title: 'Ano ang susunod',
      text: 'Aktibo kaming nagtatrabaho sa pagpapalawak ng toolkit. Ang mga bagong tool ay regular na idinaragdag batay sa feedback ng mga gumagamit at sarili naming karanasan. Ang layunin ay isang plataporma kung saan ang mga may-ari ng negosyo, designer, at developer ay may access sa bawat mahalagang tool \u2014 lahat sa isang lugar, lahat libre.',
    },
    privacy: {
      title: 'Privacy at seguridad',
      textBefore:
        'Nirerespeto namin ang privacy mo. Ang mga file na ina-upload mo sa aming mga tool ay pinoproseso lamang sa browser mo at hindi kailanman ipinapadala sa anumang server. Gumagamit kami ng analytics (Google Analytics 4) at advertising (Google AdSense) lamang pagkatapos mong magbigay ng pahintulot sa pamamagitan ng cookie banner. Ang buong detalye ay makikita sa aming',
      linkLabel: 'Patakaran sa Privacy',
      textAfter: '.',
    },
    cta: {
      title: 'Subukan ang aming mga tool',
      description: '10 libreng tool \u2014 walang registration, walang limitasyon, walang pag-upload ng file sa server',
      btnOne: 'Pumunta sa mga tool',
      btnTwo: 'Makipag-ugnayan',
    },
  },
  sw: {
    slug: 'kuhusu-sisi',
    metadata: {
      title: 'Kuhusu Arteon \u2013 Zana 10 za Bure kwa Wavuti, SEO na Muundo',
      description:
        'Arteon ni shirika la ubunifu linaloundea zana za bure za kivinjari: kibadilishaji WebP, kitengenezaji favicon, kikagua kontrasti ya rangi, kitengenezaji msimbo QR na zaidi. Bila usajili, bila kupakia \u2014 kila kitu kinafanya kazi ndani ya kivinjari.',
    },
    hero: {
      title: 'Zana za bure zilizotengenezwa na shirika la ubunifu',
      description: 'Zana 10 za kivinjari kwa picha, SEO, rangi, saini za barua pepe na misimbo QR \u2014 bila usajili, bila kupakia faili, bila vikwazo',
    },
    whoWeAre: {
      title: 'Sisi ni nani',
      p1: 'Arteon ni shirika la ubunifu la Kipolandi. Mbali na kazi yetu ya kibiashara, tunaunda na kudumisha mkusanyiko unaokua wa zana za bure zilizoundwa kwa wamiliki wa biashara, waundaji wa tovuti, wabunifu, wataalamu wa masoko na mtu yeyote anayefanya kazi na maudhui ya kidijitali.',
      p2: 'Kila zana tunayounda inatatua tatizo mahususi la kila siku: kubadilisha picha, kukagua kontrasti ya rangi, kutengeneza favicon, kuunda misimbo QR na zaidi. Lengo letu ni kujenga seti kamili ya zana ambapo unaweza kupata kila kitu unachohitaji mahali pamoja \u2014 bila kubadilishana kati ya maeneo mengi tofauti.',
    },
    whyFree: {
      title: 'Kwa nini tunatoa zana za bure',
      items: [
        { title: 'Bila usajili, bila vikwazo', description: 'Kila zana inafanya kazi mara moja katika kivinjari chako. Hakuna akaunti, hakuna kuingia, hakuna malipo.' },
        { title: 'Faragha kwanza', description: 'Faili zako hazitoki kwenye kifaa chako kamwe. Uchakataji wote unafanyika ndani ya kivinjari \u2014 hatutumi data yako kwa seva yoyote.' },
        {
          title: 'Zilizotengenezwa kutokana na mahitaji halisi',
          description: 'Kila zana ilizaliwa kutokana na tatizo halisi tulilokutana nalo wakati wa kufanya kazi kwenye miradi ya wateja. Ikiwa tulihitaji, kuna uwezekano mkubwa wewe pia.',
        },
        {
          title: 'Zinafadhiliwa na matangazo, bure kwako',
          description: 'Tunatumia mabango ya Google AdSense kulipia gharama za maendeleo na upangishaji. Kutokana na mapato ya matangazo, tunaweza kuweka zana zote bure na kuendelea kuunda mpya.',
        },
      ],
    },
    ourTools: {
      title: 'Zana zetu',
      items: [
        { title: 'Picha na favicon', description: 'Kibadilishaji WebP, kihariri picha na kitengenezaji favicon. Zana 3 kwa kazi ya kila siku na picha.' },
        { title: 'Meta na SEO', description: 'Kikagua meta title na description pamoja na kihesabu maneno na herufi kwa kutathmini urefu wa maandishi.' },
        { title: 'Barua pepe na mawasiliano', description: 'Kitengenezaji saini ya barua pepe HTML na msimbo tayari kwa Gmail na Outlook.' },
        { title: 'Rangi na ufikivu', description: 'Kikagua kontrasti WCAG, kitoa rangi kutoka picha na kitengenezaji palette za rangi. Zana 3 za kufanya kazi na rangi.' },
        { title: 'Uchapishaji na nyenzo', description: 'Kitengenezaji msimbo QR kwa tovuti, vCard, menyu na vipeperushi. Hamisha kama PNG na SVG.' },
      ],
    },
    whatsNext: {
      title: 'Kinachofuata',
      text: 'Tunafanya kazi kikamilifu kupanua seti ya zana. Zana mpya zinaongezwa mara kwa mara kulingana na maoni ya watumiaji na uzoefu wetu wenyewe. Lengo ni jukwaa moja ambapo wamiliki wa biashara, wabunifu na wasanidi programu wana ufikiaji wa kila zana muhimu \u2014 zote mahali pamoja, zote bure.',
    },
    privacy: {
      title: 'Faragha na usalama',
      textBefore:
        'Tunaheshimu faragha yako. Faili unazopakia kwenye zana zetu zinashughulikiwa pekee katika kivinjari chako na hazitumwi kamwe kwa seva yoyote. Tunatumia uchambuzi (Google Analytics 4) na matangazo (Google AdSense) tu baada ya kupata idhini yako kupitia bango la vidakuzi. Maelezo kamili yanapatikana katika',
      linkLabel: 'Sera ya Faragha',
      textAfter: ' yetu.',
    },
    cta: {
      title: 'Jaribu zana zetu',
      description: 'Zana 10 za bure \u2014 bila usajili, bila vikwazo, bila kupakia faili kwenye seva',
      btnOne: 'Nenda kwenye zana',
      btnTwo: 'Wasiliana',
    },
  },
  ms: {
    slug: 'tentang-kami',
    metadata: {
      title: 'Tentang Arteon \u2013 10 Alat Percuma untuk Web, SEO & Reka Bentuk',
      description:
        'Arteon ialah agensi kreatif yang membina alat pelayar percuma: penukar WebP, penjana favicon, penyemak kontras warna, penjana kod QR dan banyak lagi. Tanpa pendaftaran, tanpa muat naik \u2014 semua berjalan secara tempatan.',
    },
    hero: {
      title: 'Alat percuma yang dibina oleh agensi kreatif',
      description: '10 alat pelayar untuk imej, SEO, warna, tandatangan e-mel dan kod QR \u2014 tanpa pendaftaran, tanpa muat naik fail, tanpa had',
    },
    whoWeAre: {
      title: 'Siapa kami',
      p1: 'Arteon ialah agensi kreatif dari Poland. Selain kerja komersial, kami membina dan menyelenggara koleksi alat percuma yang semakin berkembang untuk pemilik perniagaan, pembina laman web, pereka, pakar pemasaran dan sesiapa yang bekerja dengan kandungan digital.',
      p2: 'Setiap alat yang kami bina menyelesaikan masalah harian yang khusus: menukar imej, menyemak kontras warna, menjana favicon, mencipta kod QR dan banyak lagi. Matlamat kami ialah membina set alat yang lengkap di mana anda boleh menemui semua yang diperlukan di satu tempat \u2014 tanpa bertukar antara berpuluh-puluh laman web berbeza.',
    },
    whyFree: {
      title: 'Mengapa kami menawarkan alat percuma',
      items: [
        { title: 'Tanpa pendaftaran, tanpa had', description: 'Setiap alat berfungsi serta-merta dalam pelayar anda. Tanpa akaun, tanpa log masuk, tanpa bayaran.' },
        {
          title: 'Privasi diutamakan',
          description: 'Fail anda tidak pernah meninggalkan peranti anda. Semua pemprosesan berlaku secara tempatan dalam pelayar \u2014 kami tidak menghantar data anda ke mana-mana pelayan.',
        },
        {
          title: 'Dibina daripada keperluan sebenar',
          description: 'Setiap alat lahir daripada masalah sebenar yang kami hadapi semasa mengerjakan projek pelanggan. Jika kami memerlukannya, kemungkinan besar anda juga.',
        },
        {
          title: 'Dibiayai iklan, percuma untuk anda',
          description:
            'Kami menggunakan sepanduk Google AdSense untuk menampung kos pembangunan dan pengehosan. Berkat hasil iklan, kami boleh mengekalkan semua alat percuma dan terus membina yang baharu.',
        },
      ],
    },
    ourTools: {
      title: 'Alat kami',
      items: [
        { title: 'Imej & favicon', description: 'Penukar WebP, editor imej dan penjana favicon. 3 alat untuk kerja imej harian.' },
        { title: 'Meta & SEO', description: 'Penyemak meta title dan description serta pengira perkataan dan aksara untuk menilai panjang teks.' },
        { title: 'E-mel & komunikasi', description: 'Penjana tandatangan e-mel HTML dengan kod siap untuk Gmail dan Outlook.' },
        { title: 'Warna & kebolehcapaian', description: 'Penyemak kontras WCAG, pengekstrak warna imej dan penjana palet warna. 3 alat untuk bekerja dengan warna.' },
        { title: 'Cetakan & bahan', description: 'Penjana kod QR untuk laman web, vCard, menu dan risalah. Eksport ke PNG dan SVG.' },
      ],
    },
    whatsNext: {
      title: 'Apa yang seterusnya',
      text: 'Kami aktif berusaha mengembangkan set alat. Alat baharu ditambah secara berkala berdasarkan maklum balas pengguna dan pengalaman kami sendiri. Matlamatnya ialah satu platform di mana pemilik perniagaan, pereka dan pembangun mempunyai akses kepada setiap alat penting \u2014 semuanya di satu tempat, semuanya percuma.',
    },
    privacy: {
      title: 'Privasi dan keselamatan',
      textBefore:
        'Kami menghormati privasi anda. Fail yang anda muat naik ke alat kami diproses secara eksklusif dalam pelayar anda dan tidak pernah dihantar ke mana-mana pelayan. Kami menggunakan analitik (Google Analytics 4) dan pengiklanan (Google AdSense) hanya selepas anda memberi persetujuan melalui sepanduk kuki. Butiran penuh boleh didapati dalam',
      linkLabel: 'Dasar Privasi',
      textAfter: ' kami.',
    },
    cta: {
      title: 'Cuba alat kami',
      description: '10 alat percuma \u2014 tanpa pendaftaran, tanpa had, tanpa muat naik fail ke pelayan',
      btnOne: 'Pergi ke alat',
      btnTwo: 'Hubungi',
    },
  },
  cs: {
    slug: 'o-nas',
    metadata: {
      title: 'O Arteon \u2013 10 bezplatn\u00fdch n\u00e1stroj\u016f pro web, SEO a design',
      description:
        'Arteon je kreativn\u00ed agentura, kter\u00e1 vytv\u00e1\u0159\u00ed bezplatn\u00e9 n\u00e1stroje v prohl\u00ed\u017ee\u010di: konvertor WebP, gener\u00e1tor favicon, kontrola kontrastu barev, gener\u00e1tor QR k\u00f3d\u016f a dal\u0161\u00ed. Bez registrace, bez nahr\u00e1v\u00e1n\u00ed \u2014 v\u0161e b\u011b\u017e\u00ed lok\u00e1ln\u011b.',
    },
    hero: {
      title: 'Bezplatn\u00e9 n\u00e1stroje od kreativn\u00ed agentury',
      description:
        '10 n\u00e1stroj\u016f v prohl\u00ed\u017ee\u010di pro obr\u00e1zky, SEO, barvy, e-mailov\u00e9 podpisy a QR k\u00f3dy \u2014 bez registrace, bez nahr\u00e1v\u00e1n\u00ed soubor\u016f, bez omezen\u00ed',
    },
    whoWeAre: {
      title: 'Kdo jsme',
      p1: 'Arteon je polsk\u00e1 kreativn\u00ed agentura. Krom\u011b na\u0161\u00ed komer\u010dn\u00ed pr\u00e1ce vytv\u00e1\u0159\u00edme a udr\u017eujeme rostouc\u00ed sb\u00edrku bezplatn\u00fdch n\u00e1stroj\u016f ur\u010den\u00fdch pro podnikatele, tv\u016frce web\u016f, design\u00e9ry, market\u00e9ry a ka\u017ed\u00e9ho, kdo pracuje s digit\u00e1ln\u00edm obsahem.',
      p2: 'Ka\u017ed\u00fd n\u00e1stroj, kter\u00fd vytv\u00e1\u0159\u00edme, \u0159e\u0161\u00ed konkr\u00e9tn\u00ed ka\u017edodenn\u00ed probl\u00e9m: konverze obr\u00e1zk\u016f, kontrola kontrastu barev, generov\u00e1n\u00ed favicon, vytv\u00e1\u0159en\u00ed QR k\u00f3d\u016f a dal\u0161\u00ed. Na\u0161\u00edm c\u00edlem je vybudovat komplexn\u00ed sadu n\u00e1stroj\u016f, kde najdete v\u0161e pot\u0159ebn\u00e9 na jednom m\u00edst\u011b \u2014 bez p\u0159ep\u00edn\u00e1n\u00ed mezi des\u00edtkami r\u016fzn\u00fdch web\u016f.',
    },
    whyFree: {
      title: 'Pro\u010d nab\u00edz\u00edme bezplatn\u00e9 n\u00e1stroje',
      items: [
        {
          title: 'Bez registrace, bez omezen\u00ed',
          description:
            'Ka\u017ed\u00fd n\u00e1stroj funguje okam\u017eit\u011b v prohl\u00ed\u017ee\u010di. \u017d\u00e1dn\u00fd \u00fa\u010det, \u017e\u00e1dn\u00e9 p\u0159ihla\u0161ov\u00e1n\u00ed, \u017e\u00e1dn\u00e1 platba.',
        },
        {
          title: 'Soukrom\u00ed na prvn\u00edm m\u00edst\u011b',
          description:
            'Va\u0161e soubory nikdy neopust\u00ed va\u0161e za\u0159\u00edzen\u00ed. Ve\u0161ker\u00e9 zpracov\u00e1n\u00ed prob\u00edh\u00e1 lok\u00e1ln\u011b v prohl\u00ed\u017ee\u010di \u2014 va\u0161e data nepos\u00edl\u00e1me na \u017e\u00e1dn\u00fd server.',
        },
        {
          title: 'Vznikly ze skute\u010dn\u00fdch pot\u0159eb',
          description:
            'Ka\u017ed\u00fd n\u00e1stroj vznikl ze skute\u010dn\u00e9ho probl\u00e9mu, na kter\u00fd jsme narazili p\u0159i pr\u00e1ci na projektech klient\u016f. Pokud jsme to pot\u0159ebovali my, pravd\u011bpodobn\u011b to pot\u0159ebujete i vy.',
        },
        {
          title: 'Financov\u00e1no reklamou, pro v\u00e1s zdarma',
          description:
            'Pou\u017e\u00edv\u00e1me bannery Google AdSense k pokryt\u00ed n\u00e1klad\u016f na v\u00fdvoj a hosting. D\u00edky p\u0159\u00edjm\u016fm z reklamy m\u016f\u017eeme v\u0161echny n\u00e1stroje udr\u017eovat zdarma a nad\u00e1le vyv\u00edjet nov\u00e9.',
        },
      ],
    },
    ourTools: {
      title: 'Na\u0161e n\u00e1stroje',
      items: [
        { title: 'Obr\u00e1zky a favicony', description: 'Konvertor WebP, editor obr\u00e1zk\u016f a gener\u00e1tor favicon. 3 n\u00e1stroje pro ka\u017edodenn\u00ed pr\u00e1ci s obr\u00e1zky.' },
        { title: 'Meta a SEO', description: 'Kontrola meta titulku a popisu plus po\u010d\u00edtadlo slov a znak\u016f pro hodnocen\u00ed d\u00e9lky textu.' },
        { title: 'E-mail a komunikace', description: 'Gener\u00e1tor HTML e-mailov\u00e9ho podpisu s hotov\u00fdm k\u00f3dem pro Gmail a Outlook.' },
        { title: 'Barvy a p\u0159\u00edstupnost', description: 'Kontrola kontrastu WCAG, extraktor barev z obr\u00e1zku a gener\u00e1tor palet barev. 3 n\u00e1stroje pro pr\u00e1ci s barvami.' },
        { title: 'Tisk a materi\u00e1ly', description: 'Gener\u00e1tor QR k\u00f3d\u016f pro weby, vCard, j\u00eddeln\u00ed l\u00edstky a let\u00e1ky. Export do PNG a SVG.' },
      ],
    },
    whatsNext: {
      title: 'Co n\u00e1s \u010dek\u00e1',
      text: 'Aktivn\u011b pracujeme na roz\u0161i\u0159ov\u00e1n\u00ed sady n\u00e1stroj\u016f. Nov\u00e9 n\u00e1stroje p\u0159id\u00e1v\u00e1me pravideln\u011b na z\u00e1klad\u011b zp\u011btn\u00e9 vazby u\u017eivatel\u016f a vlastn\u00edch zku\u0161enost\u00ed. C\u00edlem je jedin\u00e1 platforma, kde podnikatel\u00e9, design\u00e9\u0159i a v\u00fdvoj\u00e1\u0159i maj\u00ed p\u0159\u00edstup ke ka\u017ed\u00e9mu d\u016fle\u017eit\u00e9mu n\u00e1stroji \u2014 v\u0161e na jednom m\u00edst\u011b, v\u0161e zdarma.',
    },
    privacy: {
      title: 'Soukrom\u00ed a bezpe\u010dnost',
      textBefore:
        'Respektujeme va\u0161e soukrom\u00ed. Soubory, kter\u00e9 nahr\u00e1v\u00e1te do na\u0161ich n\u00e1stroj\u016f, se zpracov\u00e1vaj\u00ed v\u00fdhradn\u011b ve va\u0161em prohl\u00ed\u017ee\u010di a nikdy se neodes\u00edlaj\u00ed na server. Analytiku (Google Analytics 4) a reklamu (Google AdSense) pou\u017e\u00edv\u00e1me a\u017e po va\u0161em souhlasu prost\u0159ednictv\u00edm cookie li\u0161ty. Ve\u0161ker\u00e9 podrobnosti najdete v na\u0161ich',
      linkLabel: 'Z\u00e1sadách ochrany osobn\u00edch \u00fadaj\u016f',
      textAfter: '.',
    },
    cta: {
      title: 'Vyzkou\u0161ejte na\u0161e n\u00e1stroje',
      description: '10 bezplatn\u00fdch n\u00e1stroj\u016f \u2014 bez registrace, bez omezen\u00ed, bez nahr\u00e1v\u00e1n\u00ed soubor\u016f na server',
      btnOne: 'P\u0159ej\u00edt na n\u00e1stroje',
      btnTwo: 'Kontakt',
    },
  },
  sv: {
    slug: 'om-oss',
    metadata: {
      title: 'Om Arteon \u2013 10 gratis verktyg f\u00f6r webb, SEO och design',
      description:
        'Arteon \u00e4r en kreativ byr\u00e5 som bygger gratis webbl\u00e4sarbaserade verktyg: WebP-konverterare, favicongenerator, f\u00e4rgkontrastgranskare, QR-kodgenerator och mer. Utan registrering, utan uppladdning \u2014 allt k\u00f6rs lokalt.',
    },
    hero: {
      title: 'Gratis verktyg fr\u00e5n en kreativ byr\u00e5',
      description: '10 webbl\u00e4sarverktyg f\u00f6r bilder, SEO, f\u00e4rger, e-postsignaturer och QR-koder \u2014 utan registrering, utan filuppladdning, utan begr\u00e4nsningar',
    },
    whoWeAre: {
      title: 'Vilka vi \u00e4r',
      p1: 'Arteon \u00e4r en polsk kreativ byr\u00e5. Ut\u00f6ver v\u00e5rt kommersiella arbete bygger och underh\u00e5ller vi en v\u00e4xande samling gratis verktyg utformade f\u00f6r f\u00f6retagare, webbskapare, designers, marknadsf\u00f6rare och alla som arbetar med digitalt inneh\u00e5ll.',
      p2: 'Varje verktyg vi skapar l\u00f6ser ett specifikt vardagsproblem: konvertera bilder, kontrollera f\u00e4rgkontrast, generera favicons, skapa QR-koder och mer. V\u00e5rt m\u00e5l \u00e4r att bygga en komplett verktygsl\u00e5da d\u00e4r du hittar allt du beh\u00f6ver p\u00e5 ett st\u00e4lle \u2014 utan att beh\u00f6va v\u00e4xla mellan dussintals olika webbplatser.',
    },
    whyFree: {
      title: 'Varf\u00f6r vi erbjuder gratisverktyg',
      items: [
        { title: 'Utan registrering, utan begr\u00e4nsningar', description: 'Varje verktyg fungerar direkt i webbl\u00e4saren. Inget konto, ingen inloggning, ingen betalning.' },
        {
          title: 'Integritet f\u00f6rst',
          description: 'Dina filer l\u00e4mnar aldrig din enhet. All bearbetning sker lokalt i webbl\u00e4saren \u2014 vi skickar inte dina data till n\u00e5gon server.',
        },
        {
          title: 'Skapade fr\u00e5n verkliga behov',
          description:
            'Varje verktyg f\u00f6ddes ur ett verkligt problem som vi st\u00f6tte p\u00e5 n\u00e4r vi arbetade med kundprojekt. Om vi beh\u00f6vde det, g\u00f6r du troligen det ocks\u00e5.',
        },
        {
          title: 'Finansierat av annonser, gratis f\u00f6r dig',
          description:
            'Vi anv\u00e4nder Google AdSense-banners f\u00f6r att t\u00e4cka utvecklings- och hostingkostnader. Tack vare annonsint\u00e4kter kan vi h\u00e5lla alla verktyg gratis och forts\u00e4tta bygga nya.',
        },
      ],
    },
    ourTools: {
      title: 'V\u00e5ra verktyg',
      items: [
        { title: 'Bilder & favicons', description: 'WebP-konverterare, bildredigerare och favicongenerator. 3 verktyg f\u00f6r dagligt bildarbete.' },
        { title: 'Meta & SEO', description: 'Kontroll av metatitel och beskrivning plus en ord- och teckenr\u00e4knare f\u00f6r att utv\u00e4rdera textl\u00e4ngd.' },
        { title: 'E-post & kommunikation', description: 'HTML-e-postsignaturgenerator med f\u00e4rdig kod f\u00f6r Gmail och Outlook.' },
        { title: 'F\u00e4rger & tillg\u00e4nglighet', description: 'WCAG-kontrastgranskare, f\u00e4rgextraktorn fr\u00e5n bilder och f\u00e4rgpalettgenerator. 3 verktyg f\u00f6r f\u00e4rgarbete.' },
        { title: 'Tryck & material', description: 'QR-kodgenerator f\u00f6r webbplatser, vCards, menyer och flygblad. Export till PNG och SVG.' },
      ],
    },
    whatsNext: {
      title: 'Vad som kommer h\u00e4rn\u00e4st',
      text: 'Vi arbetar aktivt med att ut\u00f6ka verktygsl\u00e5dan. Nya verktyg l\u00e4ggs till regelbundet baserat p\u00e5 anv\u00e4ndarfeedback och v\u00e5r egen erfarenhet. M\u00e5let \u00e4r en enda plattform d\u00e4r f\u00f6retagare, designers och utvecklare har tillg\u00e5ng till varje viktigt verktyg \u2014 allt p\u00e5 ett st\u00e4lle, allt gratis.',
    },
    privacy: {
      title: 'Integritet och s\u00e4kerhet',
      textBefore:
        'Vi respekterar din integritet. Filer du laddar upp till v\u00e5ra verktyg bearbetas uteslutande i din webbl\u00e4sare och skickas aldrig till n\u00e5gon server. Vi anv\u00e4nder analys (Google Analytics 4) och reklam (Google AdSense) f\u00f6rst efter ditt samtycke via cookiebannern. Alla detaljer finns i v\u00e5r',
      linkLabel: 'Integritetspolicy',
      textAfter: '.',
    },
    cta: {
      title: 'Testa v\u00e5ra verktyg',
      description: '10 gratis verktyg \u2014 utan registrering, utan begr\u00e4nsningar, utan filuppladdning till servrar',
      btnOne: 'Till verktygen',
      btnTwo: 'Kontakt',
    },
  },
  sq: {
    slug: 'rreth-nesh',
    metadata: {
      title: 'Rreth Arteon \u2013 10 Mjete Falas p\u00ebr Web, SEO dhe Dizajn',
      description:
        'Arteon \u00ebsht\u00eb nj\u00eb agjenci kreative q\u00eb ndërton mjete falas n\u00eb shfletues: konvertues WebP, gjenerues favicon, kontrollues kontrasti ngjyrash, gjenerues kodesh QR dhe m\u00eb shum\u00eb. Pa regjistrim, pa ngarkim \u2014 gjith\u00e7ka funksionon lokalisht.',
    },
    hero: {
      title: 'Mjete falas t\u00eb nd\u00ebrtuara nga nj\u00eb agjenci kreative',
      description: '10 mjete shfletuesi p\u00ebr imazhe, SEO, ngjyra, n\u00ebnshkrime emaili dhe kode QR \u2014 pa regjistrim, pa ngarkim skedarësh, pa kufizime',
    },
    whoWeAre: {
      title: 'Kush jemi',
      p1: 'Arteon \u00ebsht\u00eb nj\u00eb agjenci kreative polake. P\u00ebrve\u00e7 pun\u00ebs son\u00eb tregtare, ne nd\u00ebrtojm\u00eb dhe mir\u00ebmbajm\u00eb nj\u00eb koleksion n\u00eb rritje t\u00eb mjeteve falas t\u00eb dizajnuara p\u00ebr pronar\u00eb biznesi, krijues faqesh, dizajner\u00eb, specialist\u00eb marketingu dhe k\u00ebdo q\u00eb punon me p\u00ebrmbajtje dixhitale.',
      p2: '\u00c7do mjet q\u00eb krijojm\u00eb zgjidh nj\u00eb problem specifik t\u00eb p\u00ebrditsh\u00ebm: konvertimi i imazheve, kontrolli i kontrastit t\u00eb ngjyrave, gjenerimi i faviconeve, krijimi i kodeve QR dhe m\u00eb shum\u00eb. Q\u00ebllimi yn\u00eb \u00ebsht\u00eb t\u00eb nd\u00ebrtojm\u00eb nj\u00eb set gjith\u00ebp\u00ebrfshir\u00ebs mjetesh ku mund t\u00eb gjeni gjith\u00e7ka q\u00eb keni nevoj\u00eb n\u00eb nj\u00eb vend \u2014 pa kaluar nd\u00ebrmjet dhjeta faqesh t\u00eb ndryshme.',
    },
    whyFree: {
      title: 'Pse ofrojm\u00eb mjete falas',
      items: [
        { title: 'Pa regjistrim, pa kufizime', description: '\u00c7do mjet funksionon menj\u00eberë n\u00eb shfletuesin tuaj. Pa llogari, pa hyrje, pa pages\u00eb.' },
        {
          title: 'Privat\u00ebsia n\u00eb radhë t\u00eb par\u00eb',
          description:
            'Skedar\u00ebt tuaj nuk largohen kurr\u00eb nga pajisja jote. I gjith\u00eb p\u00ebrpunimi ndodh lokalisht n\u00eb shfletues \u2014 nuk i d\u00ebrgojm\u00eb t\u00eb dh\u00ebnat tuaja n\u00eb asnj\u00eb server.',
        },
        {
          title: 'T\u00eb krijuara nga nevoja reale',
          description:
            '\u00c7do mjet lindi nga nj\u00eb problem real q\u00eb has\u00ebm gjat\u00eb pun\u00ebs n\u00eb projektet e klient\u00ebve. N\u00ebse na duhej neve, ka gjasa q\u00eb ju duhet edhe juve.',
        },
        {
          title: 'T\u00eb financuara nga reklamat, falas p\u00ebr ju',
          description:
            'P\u00ebrdorim banera Google AdSense p\u00ebr t\u00eb mbuluar kostot e zhvillimit dhe strehimit. Falenderoj t\u00eb ardhurave nga reklamat, mund t\u00eb mbajm\u00eb t\u00eb gjitha mjetet falas dhe t\u00eb vazhdojm\u00eb t\u00eb krijojm\u00eb t\u00eb reja.',
        },
      ],
    },
    ourTools: {
      title: 'Mjetet tona',
      items: [
        { title: 'Imazhe dhe favicon', description: 'Konvertues WebP, redaktues imazhesh dhe gjenerues favicon. 3 mjete p\u00ebr pun\u00ebn e p\u00ebrditshme me imazhe.' },
        {
          title: 'Meta dhe SEO',
          description: 'Kontrollues meta title dhe description plus nj\u00eb num\u00ebrues fjal\u00ebsh dhe karakteresh p\u00ebr t\u00eb vler\u00ebsuar gjat\u00ebsin\u00eb e tekstit.',
        },
        { title: 'Email dhe komunikim', description: 'Gjenerues n\u00ebnshkrimi emaili HTML me kod t\u00eb gatsh\u00ebm p\u00ebr Gmail dhe Outlook.' },
        { title: 'Ngjyra dhe aksesibilitet', description: 'Kontrollues kontrasti WCAG, nxjerr\u00ebs ngjyrash nga imazhi dhe gjenerues paletash ngjyrash. 3 mjete p\u00ebr pun\u00ebn me ngjyra.' },
        { title: 'Shtypje dhe materiale', description: 'Gjenerues kodesh QR p\u00ebr faqe interneti, vCard, menu dhe fletëpalosje. Eksporto n\u00eb PNG dhe SVG.' },
      ],
    },
    whatsNext: {
      title: '\u00c7far\u00eb vjen m\u00eb pas',
      text: 'Jemi duke punuar aktivisht p\u00ebr t\u00eb zgjeruar setin e mjeteve. Mjete t\u00eb reja shtohen rregullisht bazuar n\u00eb reagimet e p\u00ebrdoruesve dhe p\u00ebrvojën ton\u00eb. Q\u00ebllimi \u00ebsht\u00eb nj\u00eb platform\u00eb e vetme ku pronarët e bizneseve, dizajner\u00ebt dhe zhvilluesit kan\u00eb akses n\u00eb \u00e7do mjet thelbësor \u2014 gjith\u00e7ka n\u00eb nj\u00eb vend, gjith\u00e7ka falas.',
    },
    privacy: {
      title: 'Privat\u00ebsia dhe siguria',
      textBefore:
        'Respektojm\u00eb privat\u00ebsin\u00eb tuaj. Skedar\u00ebt q\u00eb ngarkoni n\u00eb mjetet tona p\u00ebrpunohen ekskluzivisht n\u00eb shfletuesin tuaj dhe nuk d\u00ebrgohen kurr\u00eb n\u00eb asnj\u00eb server. P\u00ebrdorim analitik\u00eb (Google Analytics 4) dhe reklama (Google AdSense) vet\u00ebm pas p\u00eblqimit tuaj n\u00ebp\u00ebrm\u00ebt baner\u00ebs s\u00eb cookie-ve. T\u00eb gjitha detajet gjenden n\u00eb',
      linkLabel: 'Politik\u00ebn e Privat\u00ebsis\u00eb',
      textAfter: ' ton\u00eb.',
    },
    cta: {
      title: 'Provoni mjetet tona',
      description: '10 mjete falas \u2014 pa regjistrim, pa kufizime, pa ngarkim skedarësh n\u00eb server',
      btnOne: 'Shko te mjetet',
      btnTwo: 'Kontaktoni',
    },
  },
  da: {
    slug: 'om-os',
    metadata: {
      title: 'Om Arteon \u2013 10 gratis v\u00e6rkt\u00f8jer til web, SEO og design',
      description:
        'Arteon er et kreativt bureau, der bygger gratis browserbaserede v\u00e6rkt\u00f8jer: WebP-konverter, favicon-generator, farvekontrastchecker, QR-kodegenerator og mere. Uden tilmelding, uden upload \u2014 alt k\u00f8rer lokalt.',
    },
    hero: {
      title: 'Gratis v\u00e6rkt\u00f8jer fra et kreativt bureau',
      description: '10 browserv\u00e6rkt\u00f8jer til billeder, SEO, farver, e-mailsignaturer og QR-koder \u2014 uden tilmelding, uden filupload, uden begr\u00e6nsninger',
    },
    whoWeAre: {
      title: 'Hvem vi er',
      p1: 'Arteon er et polsk kreativt bureau. Ud over vores kommercielle arbejde bygger og vedligeholder vi en voksende samling gratis v\u00e6rkt\u00f8jer designet til virksomhedsejere, webskabere, designere, marketingfolk og alle, der arbejder med digitalt indhold.',
      p2: 'Hvert v\u00e6rkt\u00f8j, vi skaber, l\u00f8ser et specifikt hverdagsproblem: konvertering af billeder, kontrol af farvekontrast, generering af favicons, oprettelse af QR-koder og mere. Vores m\u00e5l er at bygge en komplet v\u00e6rkt\u00f8jskasse, hvor du finder alt, hvad du har brug for \u00e9t sted \u2014 uden at skifte mellem snesevis af forskellige websteder.',
    },
    whyFree: {
      title: 'Hvorfor vi tilbyder gratis v\u00e6rkt\u00f8jer',
      items: [
        { title: 'Uden tilmelding, uden begr\u00e6nsninger', description: 'Hvert v\u00e6rkt\u00f8j virker med det samme i din browser. Ingen konto, ingen login, ingen betaling.' },
        { title: 'Privatliv f\u00f8rst', description: 'Dine filer forlader aldrig din enhed. Al behandling sker lokalt i browseren \u2014 vi sender ikke dine data til nogen server.' },
        {
          title: 'Skabt ud fra reelle behov',
          description:
            'Hvert v\u00e6rkt\u00f8j er f\u00f8dt af et reelt problem, vi st\u00f8dte p\u00e5, da vi arbejdede med kundeprojekter. Hvis vi havde brug for det, har du sandsynligvis ogs\u00e5.',
        },
        {
          title: 'Finansieret af annoncer, gratis for dig',
          description:
            'Vi bruger Google AdSense-bannere til at d\u00e6kke udviklings- og hostingomkostninger. Takket v\u00e6re annonceindtægter kan vi holde alle v\u00e6rkt\u00f8jer gratis og forts\u00e6tte med at bygge nye.',
        },
      ],
    },
    ourTools: {
      title: 'Vores v\u00e6rkt\u00f8jer',
      items: [
        { title: 'Billeder & favicons', description: 'WebP-konverter, billedredigering og favicongenerator. 3 v\u00e6rkt\u00f8jer til dagligt billedarbejde.' },
        { title: 'Meta & SEO', description: 'Meta-titel og beskrivelseskontrol samt en ord- og tegnt\u00e6ller til vurdering af tekstl\u00e6ngde.' },
        { title: 'E-mail & kommunikation', description: 'HTML-e-mailsignaturgenerator med f\u00e6rdig kode til Gmail og Outlook.' },
        { title: 'Farver & tilg\u00e6ngelighed', description: 'WCAG-kontrastchecker, farveudtr\u00e6kker fra billeder og farvepaletgenerator. 3 v\u00e6rkt\u00f8jer til farvearbejde.' },
        { title: 'Tryk & materialer', description: 'QR-kodegenerator til websteder, vCards, menuer og foldere. Eksport til PNG og SVG.' },
      ],
    },
    whatsNext: {
      title: 'Hvad der kommer',
      text: 'Vi arbejder aktivt p\u00e5 at udvide v\u00e6rkt\u00f8jskassen. Nye v\u00e6rkt\u00f8jer tilf\u00f8jes regelm\u00e6ssigt baseret p\u00e5 brugerfeedback og vores egen erfaring. M\u00e5let er \u00e9n platform, hvor virksomhedsejere, designere og udviklere har adgang til hvert vigtigt v\u00e6rkt\u00f8j \u2014 alt \u00e9t sted, alt gratis.',
    },
    privacy: {
      title: 'Privatliv og sikkerhed',
      textBefore:
        'Vi respekterer dit privatliv. Filer, du uploader til vores v\u00e6rkt\u00f8jer, behandles udelukkende i din browser og sendes aldrig til nogen server. Vi bruger analyse (Google Analytics 4) og annoncering (Google AdSense) kun efter dit samtykke via cookiebanneret. Alle detaljer findes i vores',
      linkLabel: 'Privatlivspolitik',
      textAfter: '.',
    },
    cta: {
      title: 'Pr\u00f8v vores v\u00e6rkt\u00f8jer',
      description: '10 gratis v\u00e6rkt\u00f8jer \u2014 uden tilmelding, uden begr\u00e6nsninger, uden filupload til servere',
      btnOne: 'G\u00e5 til v\u00e6rkt\u00f8jerne',
      btnTwo: 'Kontakt',
    },
  },

  pt: {
    slug: 'sobre-nos',
    metadata: {
      title: 'Sobre a Arteon – 10 ferramentas online gratuitas para web, SEO e design',
      description:
        'A Arteon é uma agência criativa que desenvolve ferramentas gratuitas no navegador: conversor WebP, gerador de favicon, verificador de contraste, gerador de códigos QR e mais. Sem registo, sem envio de ficheiros — tudo funciona localmente.',
    },
    hero: {
      title: 'Ferramentas online gratuitas criadas por uma agência criativa',
      description: '10 ferramentas no navegador para imagens, SEO, cores, assinaturas de e-mail e códigos QR — sem registo, sem envio de ficheiros, sem limites',
    },
    whoWeAre: {
      title: 'Quem somos',
      p1: 'A Arteon é uma agência criativa polaca. Para além do nosso trabalho comercial, desenvolvemos e mantemos uma coleção crescente de ferramentas online gratuitas destinadas a proprietários de negócios, criadores de sites, designers, especialistas em marketing e qualquer pessoa que trabalhe com conteúdo digital.',
      p2: 'Cada ferramenta que criamos resolve um problema específico e quotidiano: converter imagens, verificar o contraste de cores, gerar favicons, criar códigos QR e muito mais. O nosso objetivo é construir um conjunto completo de ferramentas onde possa encontrar tudo o que precisa num só lugar — sem navegar entre dezenas de sites diferentes.',
    },
    whyFree: {
      title: 'Porque oferecemos ferramentas gratuitas',
      items: [
        { title: 'Sem registo, sem limites', description: 'Cada ferramenta funciona instantaneamente no seu navegador. Sem conta, sem login, sem pagamento.' },
        {
          title: 'Privacidade em primeiro lugar',
          description: 'Os seus ficheiros nunca saem do seu dispositivo. Todo o processamento é feito localmente no seu navegador — não enviamos os seus dados para nenhum servidor.',
        },
        {
          title: 'Criadas a partir de necessidades reais',
          description: 'Cada ferramenta nasceu de um problema real que encontrámos ao trabalhar em projetos de clientes. Se nós precisámos, é provável que você também precise.',
        },
        {
          title: 'Financiadas por publicidade, gratuitas para si',
          description:
            'Utilizamos banners do Google AdSense para cobrir os custos de desenvolvimento e alojamento. Graças às receitas publicitárias, podemos manter todas as ferramentas gratuitas e continuar a criar novas.',
        },
      ],
    },
    ourTools: {
      title: 'As nossas ferramentas',
      items: [
        { title: 'Imagens e favicons', description: 'Conversor WebP, editor de imagens online e gerador de favicon. 3 ferramentas para o trabalho diário com imagens.' },
        { title: 'Meta e SEO', description: 'Verificador de meta título e descrição mais um contador de palavras e caracteres para avaliar o comprimento do texto.' },
        { title: 'E-mail e comunicação', description: 'Gerador de assinatura de e-mail HTML com código pronto para Gmail e Outlook.' },
        { title: 'Cores e acessibilidade', description: 'Verificador de contraste WCAG, extrator de cores de imagem e gerador de paletas de cores. 3 ferramentas para trabalhar com cor.' },
        { title: 'Impressão e materiais', description: 'Gerador de códigos QR para sites, vCards, menus e folhetos. Exportação em PNG e SVG.' },
      ],
    },
    whatsNext: {
      title: 'O que vem a seguir',
      text: 'Estamos a trabalhar ativamente na expansão do conjunto de ferramentas. Novas ferramentas são adicionadas regularmente com base no feedback dos utilizadores e na nossa própria experiência. O objetivo é uma plataforma única onde proprietários de negócios, designers e programadores tenham acesso a cada ferramenta essencial — tudo num só lugar, tudo grátis.',
    },
    privacy: {
      title: 'Privacidade e segurança',
      textBefore:
        'Respeitamos a sua privacidade. Os ficheiros que carrega nas nossas ferramentas são processados exclusivamente no seu navegador e nunca são enviados para nenhum servidor. Utilizamos análises (Google Analytics 4) e publicidade (Google AdSense) apenas após o seu consentimento através do banner de cookies. Todos os detalhes estão disponíveis na nossa',
      linkLabel: 'Política de Privacidade',
      textAfter: '.',
    },
    cta: {
      title: 'Experimente as nossas ferramentas',
      description: '10 ferramentas online gratuitas — sem registo, sem limites, sem envio de ficheiros para servidores',
      btnOne: 'Ver ferramentas',
      btnTwo: 'Contacto',
    },
  },
};

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

export function getAboutPageData(locale: Locale): AboutPageData | null {
  return ABOUT_DATA[locale] ?? null;
}

export function getAboutAlternates(locale: Locale) {
  const config = LOCALE_CONFIG[locale];
  if (!config.aboutHref) return {};

  const languages: Record<string, string> = {};
  for (const loc of SUPPORTED_LOCALES) {
    const c = LOCALE_CONFIG[loc];
    if (c.aboutHref) {
      languages[c.hreflang] = toAbsoluteUrl(c.aboutHref);
    }
  }
  languages['x-default'] = toAbsoluteUrl(LOCALE_CONFIG.en.aboutHref!);

  return {
    canonical: toAbsoluteUrl(config.aboutHref),
    languages,
  };
}
