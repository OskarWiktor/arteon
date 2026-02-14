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
      description: 'Arteon is a creative agency building free browser-based tools: WebP converter, favicon generator, color contrast checker, QR code maker and more. No sign-up, no upload — everything runs locally.',
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
        { title: 'Funded by ads, free for you', description: 'We use Google AdSense banners to cover the costs of development and hosting. Thanks to ad revenue, we can keep all tools free and continue building new ones.' },
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
      textBefore: 'We respect your privacy. Files you upload to our tools are processed exclusively in your browser and are never sent to any server. We use analytics (Google Analytics 4) and advertising (Google AdSense) only after you give consent via the cookie banner. Full details are available in our',
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
      description: 'Arteon ist eine Kreativagentur und entwickelt kostenlose Browser-Tools: WebP-Konverter, Favicon-Generator, Farbkontrast-Checker, QR-Code-Generator u.\u00a0v.\u00a0m. Ohne Anmeldung, ohne Upload — alles läuft lokal.',
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
        { title: 'Aus echten Bedürfnissen entstanden', description: 'Jedes Tool entstand aus einem realen Problem, das wir bei der Arbeit an Kundenprojekten hatten. Wenn wir es brauchten, brauchen Sie es wahrscheinlich auch.' },
        { title: 'Durch Werbung finanziert, für Sie kostenlos', description: 'Wir nutzen Google-AdSense-Banner, um die Kosten für Entwicklung und Hosting zu decken. Dank der Werbeeinnahmen können wir alle Tools kostenlos halten und weiter neue entwickeln.' },
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
      textBefore: 'Wir respektieren Ihre Privatsphäre. Dateien, die Sie in unsere Tools hochladen, werden ausschließlich in Ihrem Browser verarbeitet und nie an einen Server gesendet. Wir verwenden Analysen (Google Analytics 4) und Werbung (Google AdSense) nur nach Ihrer Zustimmung über das Cookie-Banner. Alle Details finden Sie in unserer',
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
      description: 'Arteon es una agencia creativa que desarrolla herramientas gratuitas en el navegador: conversor WebP, generador de favicon, comprobador de contraste, generador de códigos QR y más. Sin registro, sin subida de archivos — todo se ejecuta localmente.',
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
        { title: 'Privacidad primero', description: 'Sus archivos nunca salen de su dispositivo. Todo el procesamiento se realiza localmente en su navegador — no enviamos sus datos a ningún servidor.' },
        { title: 'Creadas a partir de necesidades reales', description: 'Cada herramienta nació de un problema real que encontramos al trabajar en proyectos de clientes. Si nosotros lo necesitábamos, es probable que usted también.' },
        { title: 'Financiadas por publicidad, gratuitas para usted', description: 'Utilizamos banners de Google AdSense para cubrir los costes de desarrollo y alojamiento. Gracias a los ingresos publicitarios, podemos mantener todas las herramientas gratuitas y seguir creando nuevas.' },
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
      textBefore: 'Respetamos su privacidad. Los archivos que sube a nuestras herramientas se procesan exclusivamente en su navegador y nunca se envían a ningún servidor. Utilizamos análisis (Google Analytics 4) y publicidad (Google AdSense) solo después de que usted dé su consentimiento a través del banner de cookies. Los detalles completos están disponibles en nuestra',
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
      description: 'Arteon est une agence créative qui développe des outils gratuits dans le navigateur\u00a0: convertisseur WebP, générateur de favicon, vérificateur de contraste, générateur de codes QR et plus. Sans inscription, sans envoi de fichiers — tout fonctionne localement.',
    },
    hero: {
      title: 'Outils en ligne gratuits conçus par une agence créative',
      description: '10 outils dans le navigateur pour les images, le SEO, les couleurs, les signatures e-mail et les codes QR — sans inscription, sans envoi de fichiers, sans limites',
    },
    whoWeAre: {
      title: 'Qui sommes-nous',
      p1: "Arteon est une agence créative polonaise. En plus de notre travail commercial, nous développons et maintenons une collection grandissante d'outils en ligne gratuits destinés aux propriétaires d'entreprises, créateurs de sites web, designers, spécialistes du marketing et toute personne travaillant avec du contenu numérique.",
      p2: "Chaque outil que nous créons résout un problème concret et quotidien\u00a0: convertir des images, vérifier le contraste des couleurs, générer des favicons, créer des codes QR et bien plus. Notre objectif est de construire une boîte à outils complète où vous trouverez tout ce dont vous avez besoin en un seul endroit — sans naviguer entre des dizaines de sites différents.",
    },
    whyFree: {
      title: 'Pourquoi nous proposons des outils gratuits',
      items: [
        { title: 'Sans inscription, sans limites', description: 'Chaque outil fonctionne instantanément dans votre navigateur. Pas de compte, pas de connexion, pas de paiement.' },
        { title: 'Confidentialité avant tout', description: "Vos fichiers ne quittent jamais votre appareil. Tout le traitement se fait localement dans votre navigateur — nous n'envoyons vos données à aucun serveur." },
        { title: 'Créés à partir de besoins réels', description: "Chaque outil est né d'un problème réel que nous avons rencontré en travaillant sur des projets clients. Si nous en avions besoin, vous aussi probablement." },
        { title: 'Financés par la publicité, gratuits pour vous', description: "Nous utilisons des bannières Google AdSense pour couvrir les coûts de développement et d'hébergement. Grâce aux revenus publicitaires, nous pouvons garder tous les outils gratuits et continuer à en créer de nouveaux." },
      ],
    },
    ourTools: {
      title: 'Nos outils',
      items: [
        { title: 'Images et favicons', description: "Convertisseur WebP, éditeur d'images en ligne et générateur de favicon. 3 outils pour le travail quotidien avec les images." },
        { title: 'Méta et SEO', description: 'Vérificateur de méta titre et description plus un compteur de mots et caractères pour évaluer la longueur du texte.' },
        { title: 'E-mail et communication', description: "Générateur de signature e-mail HTML avec code prêt à l'emploi pour Gmail et Outlook." },
        { title: 'Couleurs et accessibilité', description: "Vérificateur de contraste WCAG, extracteur de couleurs d'image et générateur de palettes de couleurs. 3 outils pour travailler avec la couleur." },
        { title: 'Impression et supports', description: 'Générateur de codes QR pour sites web, vCards, menus et dépliants. Export en PNG et SVG.' },
      ],
    },
    whatsNext: {
      title: 'Et ensuite',
      text: "Nous travaillons activement à l'élargissement de la boîte à outils. De nouveaux outils sont ajoutés régulièrement en fonction des retours des utilisateurs et de notre propre expérience. L'objectif est une plateforme unique où propriétaires d'entreprises, designers et développeurs ont accès à chaque outil essentiel — tout en un lieu, tout gratuitement.",
    },
    privacy: {
      title: 'Confidentialité et sécurité',
      textBefore: "Nous respectons votre vie privée. Les fichiers que vous importez dans nos outils sont traités exclusivement dans votre navigateur et ne sont jamais envoyés à un serveur. Nous utilisons des analyses (Google Analytics 4) et de la publicité (Google AdSense) uniquement après votre consentement via la bannière de cookies. Tous les détails sont disponibles dans notre",
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

  pt: {
    slug: 'sobre-nos',
    metadata: {
      title: 'Sobre a Arteon – 10 ferramentas online gratuitas para web, SEO e design',
      description: 'A Arteon é uma agência criativa que desenvolve ferramentas gratuitas no navegador: conversor WebP, gerador de favicon, verificador de contraste, gerador de códigos QR e mais. Sem registo, sem envio de ficheiros — tudo funciona localmente.',
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
        { title: 'Privacidade em primeiro lugar', description: 'Os seus ficheiros nunca saem do seu dispositivo. Todo o processamento é feito localmente no seu navegador — não enviamos os seus dados para nenhum servidor.' },
        { title: 'Criadas a partir de necessidades reais', description: 'Cada ferramenta nasceu de um problema real que encontrámos ao trabalhar em projetos de clientes. Se nós precisámos, é provável que você também precise.' },
        { title: 'Financiadas por publicidade, gratuitas para si', description: 'Utilizamos banners do Google AdSense para cobrir os custos de desenvolvimento e alojamento. Graças às receitas publicitárias, podemos manter todas as ferramentas gratuitas e continuar a criar novas.' },
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
      textBefore: 'Respeitamos a sua privacidade. Os ficheiros que carrega nas nossas ferramentas são processados exclusivamente no seu navegador e nunca são enviados para nenhum servidor. Utilizamos análises (Google Analytics 4) e publicidade (Google AdSense) apenas após o seu consentimento através do banner de cookies. Todos os detalhes estão disponíveis na nossa',
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
