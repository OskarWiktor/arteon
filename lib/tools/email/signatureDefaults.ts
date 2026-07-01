import { ui } from '@/lib/i18n/tools/emailSignature';
import type { Locale } from '@/lib/LocaleContext';
import { rgbToHex } from '@/lib/tools/color/convert';
import type {
  LayoutType,
  SignatureConfig,
  SpacingConfig,
  SpacingKey,
  StyleConfig,
  TextStyleConfig,
  ThemePreset,
} from '@/types/tools/email';

export const STORAGE_KEY_BASE = 'arteon-email-signature-generator';

const SIGNATURE_COLOR_DARK = rgbToHex({ r: 17, g: 24, b: 39 });
const SIGNATURE_COLOR_WHITE = rgbToHex({ r: 255, g: 255, b: 255 });
const SIGNATURE_COLOR_BLUE = rgbToHex({ r: 37, g: 99, b: 235 });
const SIGNATURE_COLOR_PURPLE = rgbToHex({ r: 124, g: 58, b: 237 });
const SIGNATURE_COLOR_GREEN = rgbToHex({ r: 22, g: 163, b: 74 });
const SIGNATURE_COLOR_GRAY = rgbToHex({ r: 75, g: 85, b: 99 });

export const DEFAULT_STYLE: StyleConfig = {
  accentColor: SIGNATURE_COLOR_DARK,
  textColor: SIGNATURE_COLOR_DARK,
  backgroundColor: SIGNATURE_COLOR_WHITE,
  fontFamily: 'Arial, sans-serif',
  fontSize: 'normal',
  padding: 'medium',
  ctaRadius: 'full',
  showDivider: true,
  border: { left: false, right: false, top: false, bottom: false },
  socialIcons: { showIcons: false, iconSize: 'medium', colorMode: 'platform' },
  avatarShape: 'circle',
  avatarSize: 'medium',
  dividerStyle: 'solid',
  dividerWidth: 1,
  dividerColor: '',
};

export const DEFAULT_SPACING: SpacingConfig = {
  afterName: 4,
  afterTitle: 4,
  afterExtra: 6,
  afterContact: 4,
  afterSocials: 8,
  afterCta: 10,
  beforeLegal: 12,
};

export const DEFAULT_TEXT_STYLE: TextStyleConfig = {
  name: { color: null, sizeOffset: 0 },
  jobTitle: { color: null, sizeOffset: 0 },
  company: { color: null, sizeOffset: 0 },
  contact: { color: null, sizeOffset: 0 },
  socials: { color: null, sizeOffset: 0 },
  legal: { color: null, sizeOffset: 0 },
  customColors: [],
};

export const LAYOUT_SPACING_MAP: Record<LayoutType, SpacingKey[]> = {
  standard: [
    'afterName',
    'afterTitle',
    'afterExtra',
    'afterContact',
    'afterSocials',
    'afterCta',
    'beforeLegal',
  ],
  'top-banner': [
    'afterExtra',
    'afterContact',
    'afterSocials',
    'afterCta',
    'beforeLegal',
  ],
  'label-column': [
    'afterName',
    'afterTitle',
    'afterExtra',
    'afterSocials',
    'afterCta',
    'beforeLegal',
  ],
  centered: [
    'afterName',
    'afterTitle',
    'afterExtra',
    'afterContact',
    'afterSocials',
    'afterCta',
    'beforeLegal',
  ],
  compact: ['afterSocials', 'beforeLegal'],
  'two-column': [
    'afterName',
    'afterTitle',
    'afterExtra',
    'afterSocials',
    'afterCta',
    'beforeLegal',
  ],
  minimal: ['afterName', 'afterTitle'],
  'bottom-bar': [
    'afterName',
    'afterTitle',
    'afterExtra',
    'afterContact',
    'afterSocials',
    'beforeLegal',
  ],
};

export const FONT_OPTIONS = [
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: 'Tahoma, sans-serif', label: 'Tahoma' },
  { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
  { value: 'Georgia, serif', label: 'Georgia' },
];

export function getSignatureLabels(locale: Locale) {
  const t = ui[locale];
  return {
    tel: t.labels.tel,
    email: t.labels.email,
    website: t.labels.website,
  };
}

export function getDefaultSignature(locale: Locale): SignatureConfig {
  if (locale === 'en') {
    return {
      fullName: 'John Smith',
      jobTitle: 'Web Developer',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'john.smith@example.com',
      phone: '+1 600 000 000',
      website: 'https://www.yoursite.com',
      address: '123 Main St, New York, NY 10001',
      extraLine: 'I build fast and functional websites.',
      ctaLabel: 'Book a free consultation',
      ctaUrl: 'https://www.yoursite.com',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/johnsmith',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'This message may contain confidential information. If you are not the intended recipient, please notify the sender and delete this message.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'de') {
    return {
      fullName: 'Max Mustermann',
      jobTitle: 'Web Developer',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'max.mustermann@example.com',
      phone: '+49 160 000 0000',
      website: 'https://www.ihreseite.de',
      address: 'Musterstraße 3, 10115 Berlin',
      extraLine: 'Ich entwickle schnelle und funktionale Websites.',
      ctaLabel: 'Kostenlose Beratung buchen',
      ctaUrl: 'https://www.ihreseite.de',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/maxmustermann',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'Diese Nachricht kann vertrauliche Informationen enthalten. Wenn Sie nicht der beabsichtigte Empfänger sind, informieren Sie bitte den Absender und löschen Sie diese Nachricht.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'fr') {
    return {
      fullName: 'Pierre Dupont',
      jobTitle: 'Développeur Web',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'pierre.dupont@example.com',
      phone: '+33 6 00 00 00 00',
      website: 'https://www.votresite.fr',
      address: '3 rue de Rivoli, 75001 Paris',
      extraLine: 'Je conçois des sites web rapides et fonctionnels.',
      ctaLabel: 'Réserver une consultation gratuite',
      ctaUrl: 'https://www.votresite.fr',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/pierredupont',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        "Ce message peut contenir des informations confidentielles. Si vous n'êtes pas le destinataire prévu, veuillez en informer l'expéditeur et supprimer ce message.",
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'it') {
    return {
      fullName: 'Mario Rossi',
      jobTitle: 'Sviluppatore Web',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'mario.rossi@example.com',
      phone: '+39 333 123 4567',
      website: 'https://www.iltuosito.it',
      address: 'Via Roma 1, 00100 Roma',
      extraLine: 'Creo siti web veloci e funzionali.',
      ctaLabel: 'Prenota consulenza gratuita',
      ctaUrl: 'https://www.iltuosito.it',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/mariorossi',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'Questo messaggio potrebbe contenere informazioni riservate. Se non sei il destinatario previsto, informa il mittente ed elimina questo messaggio.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'es') {
    return {
      fullName: 'Juan García',
      jobTitle: 'Desarrollador Web',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'juan.garcia@example.com',
      phone: '+34 600 000 000',
      website: 'https://www.susitio.com',
      address: 'C/ Mayor 3, 28001 Madrid',
      extraLine: 'Diseño sitios web rápidos y funcionales.',
      ctaLabel: 'Reservar consulta gratuita',
      ctaUrl: 'https://www.susitio.com',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/juangarcia',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'Este mensaje puede contener información confidencial. Si no es el destinatario previsto, informe al remitente y elimine este mensaje.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'pt') {
    return {
      fullName: 'João Silva',
      jobTitle: 'Programador Web',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'joao.silva@example.com',
      phone: '+351 912 345 678',
      website: 'https://www.oseusite.pt',
      address: 'Rua Augusta 100, 1100-053 Lisboa',
      extraLine: 'Crio sites rápidos e funcionais.',
      ctaLabel: 'Marcar consulta gratuita',
      ctaUrl: 'https://www.oseusite.pt',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/joaosilva',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'Esta mensagem pode conter informações confidenciais. Se não for o destinatário pretendido, por favor informe o remetente e elimine esta mensagem.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'cs') {
    return {
      fullName: 'Jan Nov\u00e1k',
      jobTitle: 'Webov\u00fd v\u00fdvoj\u00e1\u0159',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'jan.novak@priklad.cz',
      phone: '+420 601 234 567',
      website: 'https://www.vasedomena.cz',
      address: 'V\u00e1clavsk\u00e9 n\u00e1m. 1, 110 00 Praha',
      extraLine:
        'Tvo\u0159\u00edm rychl\u00e9 a funk\u010dn\u00ed webov\u00e9 str\u00e1nky.',
      ctaLabel: 'Objednejte si bezplatnou konzultaci',
      ctaUrl: 'https://www.vasedomena.cz',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/jannovak',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        'Tato zpr\u00e1va m\u016f\u017ee obsahovat d\u016fv\u011brn\u00e9 informace. Pokud nejste zam\u00fd\u0161len\u00fdm p\u0159\u00edjemcem, informujte odes\u00edlatele a tuto zpr\u00e1vu sma\u017ete.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  if (locale === 'el') {
    return {
      fullName:
        '\u0393\u03b9\u03ac\u03bd\u03bd\u03b7\u03c2 \u03a0\u03b1\u03c0\u03b1\u03b4\u03cc\u03c0\u03bf\u03c5\u03bb\u03bf\u03c2',
      jobTitle:
        '\u03a0\u03c1\u03bf\u03b3\u03c1\u03b1\u03bc\u03bc\u03b1\u03c4\u03b9\u03c3\u03c4\u03ae\u03c2 \u0399\u03c3\u03c4\u03bf\u03cd',
      company: 'Arteon Agency',
      topLine: '',
      nameTag: '',
      email: 'giannis.papadopoulos@paradeigma.gr',
      phone: '+30 210 123 4567',
      website: 'https://www.istoselida-sas.gr',
      address:
        '\u039b\u03b5\u03c9\u03c6. \u039a\u03b7\u03c6\u03b9\u03c3\u03af\u03b1\u03c2 15, \u0391\u03b8\u03ae\u03bd\u03b1, 11523',
      extraLine:
        '\u0394\u03b7\u03bc\u03b9\u03bf\u03c5\u03c1\u03b3\u03ce \u03b3\u03c1\u03ae\u03b3\u03bf\u03c1\u03b5\u03c2 \u03ba\u03b1\u03b9 \u03bb\u03b5\u03b9\u03c4\u03bf\u03c5\u03c1\u03b3\u03b9\u03ba\u03ad\u03c2 \u03b9\u03c3\u03c4\u03bf\u03c3\u03b5\u03bb\u03af\u03b4\u03b5\u03c2.',
      ctaLabel:
        '\u039a\u03bb\u03b5\u03af\u03c3\u03c4\u03b5 \u03b4\u03c9\u03c1\u03b5\u03ac\u03bd \u03c3\u03c5\u03bc\u03b2\u03bf\u03c5\u03bb\u03b5\u03c5\u03c4\u03b9\u03ba\u03ae',
      ctaUrl: 'https://www.istoselida-sas.gr',
      cta2Label: '',
      cta2Url: '',
      socials: {
        linkedin: 'https://www.linkedin.com/in/giannispapadopoulos',
        instagram: '',
        facebook: '',
        tiktok: '',
        youtube: '',
        x: '',
        github: '',
        dribbble: '',
        behance: '',
        whatsapp: '',
        telegram: '',
        pinterest: '',
      },
      legalNote:
        '\u0391\u03c5\u03c4\u03cc \u03c4\u03bf \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1 \u03bc\u03c0\u03bf\u03c1\u03b5\u03af \u03bd\u03b1 \u03c0\u03b5\u03c1\u03b9\u03ad\u03c7\u03b5\u03b9 \u03b5\u03bc\u03c0\u03b9\u03c3\u03c4\u03b5\u03c5\u03c4\u03b9\u03ba\u03ad\u03c2 \u03c0\u03bb\u03b7\u03c1\u03bf\u03c6\u03bf\u03c1\u03af\u03b5\u03c2. \u0391\u03bd \u03b4\u03b5\u03bd \u03b5\u03af\u03c3\u03c4\u03b5 \u03bf \u03c0\u03c1\u03bf\u03bf\u03c1\u03b9\u03b6\u03cc\u03bc\u03b5\u03bd\u03bf\u03c2 \u03c0\u03b1\u03c1\u03b1\u03bb\u03ae\u03c0\u03c4\u03b7\u03c2, \u03c0\u03b1\u03c1\u03b1\u03ba\u03b1\u03bb\u03bf\u03cd\u03bc\u03b5 \u03b5\u03bd\u03b7\u03bc\u03b5\u03c1\u03ce\u03c3\u03c4\u03b5 \u03c4\u03bf\u03bd \u03b1\u03c0\u03bf\u03c3\u03c4\u03bf\u03bb\u03ad\u03b1 \u03ba\u03b1\u03b9 \u03b4\u03b9\u03b1\u03b3\u03c1\u03ac\u03c8\u03c4\u03b5 \u03b1\u03c5\u03c4\u03cc \u03c4\u03bf \u03bc\u03ae\u03bd\u03c5\u03bc\u03b1.',
      formalLine: '',
      avatarUrl: '',
    };
  }
  return {
    fullName: 'Jan Kowalski',
    jobTitle: 'Web Developer',
    company: 'Arteon Agency',
    topLine: '',
    nameTag: '',
    email: 'jan.kowalski@example.com',
    phone: '+48 000 000 000',
    website: 'https://www.twojadomena.pl',
    address: 'ul. Dobra 3, 30-000 Krak\u00f3w',
    extraLine: 'Projektuj\u0119 szybkie i funkcjonalne strony WWW.',
    ctaLabel: 'Um\u00f3w bezp\u0142atn\u0105 konsultacj\u0119',
    ctaUrl: 'https://www.twojadomena.pl',
    cta2Label: '',
    cta2Url: '',
    socials: {
      linkedin: 'https://www.linkedin.com/in/jankowalski',
      instagram: '',
      facebook: '',
      tiktok: '',
      youtube: '',
      x: '',
      github: '',
      dribbble: '',
      behance: '',
      whatsapp: '',
      telegram: '',
      pinterest: '',
    },
    legalNote:
      'Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość.',
    formalLine: '',
    avatarUrl: '',
  };
}

export function getThemePresets(locale: Locale): ThemePreset[] {
  const t = ui[locale];
  return [
    {
      id: 'classic-dark',
      name: t.themes.dark,
      accentColor: SIGNATURE_COLOR_DARK,
      textColor: SIGNATURE_COLOR_DARK,
    },
    {
      id: 'modern-blue',
      name: t.themes.blue,
      accentColor: SIGNATURE_COLOR_BLUE,
      textColor: SIGNATURE_COLOR_DARK,
    },
    {
      id: 'creative-purple',
      name: t.themes.purple,
      accentColor: SIGNATURE_COLOR_PURPLE,
      textColor: SIGNATURE_COLOR_DARK,
    },
    {
      id: 'eco-green',
      name: t.themes.green,
      accentColor: SIGNATURE_COLOR_GREEN,
      textColor: SIGNATURE_COLOR_DARK,
    },
    {
      id: 'minimal',
      name: t.themes.gray,
      accentColor: SIGNATURE_COLOR_GRAY,
      textColor: SIGNATURE_COLOR_DARK,
    },
  ];
}
