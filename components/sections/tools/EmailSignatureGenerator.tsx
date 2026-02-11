'use client';

import Button from '@/components/ui/buttons/Button';
import { buildSignatureHtml } from '@/components/sections/tools/EmailSignatureGenerator/buildSignatureHtml';
import { useSignatureCopy } from '@/components/sections/tools/EmailSignatureGenerator/useSignatureCopy';
import { exportSignatureAsHtml } from '@/lib/tools/email/exportSignature';
import { copyTextToClipboard } from '@/lib/tools/clipboard';
import TextStyleRow from '@/components/sections/tools/EmailSignatureGenerator/TextStyleRow';
import type {
  ActivePanel,
  BorderSides,
  CtaRadiusOption,
  FontSizeOption,
  LayoutType,
  MarginOption,
  SignatureConfig,
  SocialKey,
  SpacingConfig,
  SpacingKey,
  StyleConfig,
  TextElementKey,
  TextStyleConfig,
  ThemePreset,
} from '@/components/sections/tools/EmailSignatureGenerator/types';
import ToolButton from '@/components/ui/tools/ToolButton';
import { rgbToHex } from '@/lib/tools/color/convert';
import { useEffect, useMemo, useState } from 'react';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { RiUser3Line, RiMailLine, RiShareLine, RiPaletteLine, RiFileTextLine, RiLayout3Line, RiSpace, RiAddLine, RiSubtractLine, RiFontSize2, RiDeleteBinLine, RiDownloadLine, RiCodeLine, RiSunLine, RiMoonLine, RiGridLine, RiEyeLine, RiCloseLine, RiUploadLine, RiShareForwardLine } from 'react-icons/ri';

const STORAGE_KEY = 'arteon-email-signature-generator';

const ui = {
  pl: {
    layoutLabel: 'Układ stopki',
    moreLayoutsSoon: 'Wkrótce kolejne gotowe układy.',
    layouts: {
      standard: 'Standard',
      topBanner: 'Pasek u góry',
      labelColumn: 'Etykiety z lewej',
      centered: 'Wyśrodkowany',
      compact: 'Kompaktowy',
      twoColumn: 'Dwie kolumny',
      minimal: 'Minimalistyczny',
      bottomBar: 'Pasek na dole',
    },
    border: {
      label: 'Ramka stopki',
      none: 'Brak',
      full: 'Pełna',
      left: 'Lewa',
      right: 'Prawa',
      top: 'Góra',
      bottom: 'Dół',
    },
    editorTitle: 'Edytor stopki HTML',
    panels: {
      identity: 'Dane',
      buttons: 'Przyciski',
      social: 'Media społecznościowe',
      appearance: 'Wygląd',
      textStyle: 'Styl tekstu',
      spacing: 'Odstępy',
      legal: 'Klauzula / RODO',
    },
    identity: {
      title: 'Dane w stopce',
      topLine: 'Linia nad imieniem',
      topLinePlaceholder: 'Np. nazwa firmy lub claim',
      avatar: 'Avatar / logo (URL obrazu)',
      avatarPlaceholder: 'https://adrestwojejdomeny.pl/avatar.webp',
      avatarHelper: 'Najlepiej kwadratowy obraz min. 120x120 px, z publicznym adresem URL.',
      avatarShape: 'Kształt avatara',
      avatarShapeCircle: 'Okrągły',
      avatarShapeRounded: 'Zaokrąglony',
      avatarShapeSquare: 'Kwadrat',
      avatarSize: 'Rozmiar avatara',
      avatarSizeSmall: 'Mały (40 px)',
      avatarSizeMedium: 'Średni (56 px)',
      avatarSizeLarge: 'Duży (72 px)',
      fullName: 'Imię i nazwisko *',
      fullNamePlaceholder: 'Jan Kowalski',
      nameTag: 'Tag przy imieniu',
      nameTagPlaceholder: 'Np. On/On • Art Director',
      jobTitle: 'Stanowisko',
      jobTitlePlaceholder: 'Web Developer',
      company: 'Nazwa firmy',
      companyPlaceholder: 'Twoja firma / marka',
      extraLine: 'Dodatkowa linia (krótki opis)',
      extraLinePlaceholder: 'Np. projektuję szybkie i funkcjonalne strony WWW.',
      email: 'E-mail *',
      emailPlaceholder: 'jan.kowalski@example.com',
      phone: 'Telefon',
      phonePlaceholder: '+48 600 000 000',
      website: 'Strona internetowa',
      websitePlaceholder: 'https://www.twojastrona.pl',
      address: 'Adres (opcjonalny)',
      addressPlaceholder: 'ul. Dobra 3, 30-000 Kraków',
      formalLine: 'Dane formalne (np. NIP, numer licencji)',
      formalLinePlaceholder: 'Np. NIP: 0000000000 • REGON: 000000000',
    },
    buttons: {
      title: 'Przyciski CTA',
      label: 'Tekst przycisku',
      labelPlaceholder: 'Umów bezpłatną konsultację',
      url: 'Link CTA',
      urlPlaceholder: 'https://kalendarz.pl/twoje-spotkania',
      helper: 'Jeśli pole tekstu lub linku pozostanie puste, przycisk nie pojawi się w stopce.',
      cta1Title: 'Przycisk główny',
      cta2Title: 'Przycisk dodatkowy',
      cta2Label: 'Tekst drugiego przycisku',
      cta2LabelPlaceholder: 'Pobierz katalog',
      cta2Url: 'Link drugiego przycisku',
      cta2UrlPlaceholder: 'https://twojadomena.pl/katalog.pdf',
      ctaRadius: 'Zaokrąglenie przycisków',
      ctaRadiusNone: 'Brak',
      ctaRadiusSmall: 'Lekkie',
      ctaRadiusFull: 'Pełne',
    },
    social: {
      title: 'Media społecznościowe',
      helper: 'Linki są opcjonalne - w stopce pojawią się tylko te serwisy, które mają uzupełniony adres URL.',
      showIcons: 'Pokaż ikony obok nazw serwisów',
      iconSize: 'Rozmiar ikon',
      iconSizeSmall: 'Małe',
      iconSizeMedium: 'Średnie',
      iconSizeLarge: 'Duże',
      iconColor: 'Kolor ikon',
      iconColorPlatform: 'Kolory platform',
      iconColorAccent: 'Kolor akcentu',
      iconColorText: 'Kolor tekstu',
    },
    appearance: {
      themeTitle: 'Motyw kolorystyczny',
      accentColor: 'Kolor akcentu',
      textColor: 'Kolor tekstu',
      backgroundColor: 'Kolor tła',
      fontFamily: 'Czcionka',
      fontSize: 'Rozmiar tekstu',
      fontSizeSmall: 'Mały',
      fontSizeNormal: 'Standard',
      fontSizeLarge: 'Większy',
      padding: 'Margines wewnętrzny stopki',
    },
    legal: {
      title: 'Klauzula prawna / RODO',
      placeholder: 'Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość.',
      showDivider: 'Pokaż linię oddzielającą dane od klauzuli',
      dividerStyle: 'Styl linii',
      dividerStyleSolid: 'Ciągła',
      dividerStyleDashed: 'Kreskowana',
      dividerStyleDotted: 'Kropkowana',
      dividerWidth: 'Grubość linii',
      dividerColor: 'Kolor linii',
      dividerColorDefault: 'Domyślny',
    },
    spacing: {
      title: 'Odstępy między elementami',
      helper: 'Dostosuj odstępy między poszczególnymi elementami stopki. Widoczne są tylko opcje dla elementów aktualnie obecnych w stopce.',
      padding: 'Margines wewnętrzny stopki',
      afterName: 'Przed stanowiskiem',
      afterTitle: 'Przed dodatkową linią',
      afterExtra: 'Przed danymi kontaktowymi',
      afterContact: 'Przed mediami społ.',
      afterSocials: 'Przed przyciskiem CTA',
      afterCta: 'Przed linią oddzielającą',
      beforeLegal: 'Przed klauzulą',
    },
    textStyle: {
      title: 'Styl tekstu',
      helper: 'Dostosuj kolor i rozmiar każdego elementu tekstowego. Widoczne są tylko opcje dla elementów obecnych w stopce.',
      customColors: 'Własne kolory',
      addColor: 'Nowy kolor',
      saveColor: 'Zapisz',
      name: 'Imię i nazwisko',
      jobTitle: 'Stanowisko',
      company: 'Firma',
      contact: 'Dane kontaktowe',
      socials: 'Media społecznościowe',
      legal: 'Klauzula prawna',
      color: 'Kolor',
      size: 'Rozmiar',
    },
    preview: {
      title: 'Podgląd stopki mailowej',
      helper: 'Podgląd techniczny - zgodny z Gmail, Outlook i większością klientów pocztowych.',
      copySuccess: 'Skopiowano - wklej w Gmailu',
      copyError: 'Błąd kopiowania',
      copyButton: 'Kopiuj stopkę (Gmail / Outlook)',
      copyRawButton: 'Kopiuj kod HTML',
      copyRawSuccess: 'Kod HTML skopiowany',
      downloadButton: 'Pobierz jako HTML',
      requiredFields: 'Aby skopiować stopkę, uzupełnij przynajmniej imię i nazwisko oraz e-mail.',
      resetButton: 'Resetuj wygląd',
      resetModalTitle: 'Zresetować ustawienia?',
      resetModalDescription: 'Wszystkie dane i ustawienia stopki zostaną przywrócone do wartości domyślnych. Tej operacji nie można cofnąć.',
      bgLight: 'Jasne',
      bgDark: 'Ciemne',
      bgChecker: 'Szachownica',
      viewSourceButton: 'Pokaż kod HTML',
      viewSourceTitle: 'Kod źródłowy HTML stopki',
      viewSourceCopy: 'Kopiuj kod',
      viewSourceCopied: 'Skopiowano',
      viewSourceClose: 'Zamknij',
      exportConfig: 'Eksportuj ustawienia',
      importConfig: 'Importuj ustawienia',
    },
    labels: {
      tel: 'Tel.',
      email: 'E-mail',
      website: 'Strona',
      address: 'Adres',
    },
    themes: {
      dark: 'Ciemny',
      blue: 'Niebieski',
      purple: 'Fioletowy',
      green: 'Zielony',
      gray: 'Szary',
    },
  },
} as const;


const SIGNATURE_LABELS = {
  tel: ui.pl.labels.tel,
  email: ui.pl.labels.email,
  website: ui.pl.labels.website,
} as const;

const DEFAULT_SIGNATURE: SignatureConfig = {
  fullName: 'Jan Kowalski',
  jobTitle: 'Web Developer',
  company: 'Arteon Agency',
  topLine: '',
  nameTag: '',
  email: 'jan.kowalski@example.com',
  phone: '+48 000 000 000',
  website: 'https://www.twojadomena.pl',
  address: 'ul. Dobra 3, 30-000 Kraków',
  extraLine: 'Projektuję szybkie i funkcjonalne strony WWW.',
  ctaLabel: 'Umów bezpłatną konsultację',
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
  legalNote: 'Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość.',
  formalLine: '',
  avatarUrl: '',
};

const SIGNATURE_COLOR_DARK = rgbToHex({ r: 17, g: 24, b: 39 });
const SIGNATURE_COLOR_WHITE = rgbToHex({ r: 255, g: 255, b: 255 });
const SIGNATURE_COLOR_BLUE = rgbToHex({ r: 37, g: 99, b: 235 });
const SIGNATURE_COLOR_PURPLE = rgbToHex({ r: 124, g: 58, b: 237 });
const SIGNATURE_COLOR_GREEN = rgbToHex({ r: 22, g: 163, b: 74 });
const SIGNATURE_COLOR_GRAY = rgbToHex({ r: 75, g: 85, b: 99 });

const DEFAULT_STYLE: StyleConfig = {
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

const DEFAULT_SPACING: SpacingConfig = {
  afterName: 4,
  afterTitle: 4,
  afterExtra: 6,
  afterContact: 4,
  afterSocials: 8,
  afterCta: 10,
  beforeLegal: 12,
};

const DEFAULT_TEXT_STYLE: TextStyleConfig = {
  name: { color: null, sizeOffset: 0 },
  jobTitle: { color: null, sizeOffset: 0 },
  company: { color: null, sizeOffset: 0 },
  contact: { color: null, sizeOffset: 0 },
  socials: { color: null, sizeOffset: 0 },
  legal: { color: null, sizeOffset: 0 },
  customColors: [],
};

const LAYOUT_SPACING_MAP: Record<LayoutType, SpacingKey[]> = {
  standard: ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  'top-banner': ['afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  'label-column': ['afterName', 'afterTitle', 'afterExtra', 'afterSocials', 'afterCta', 'beforeLegal'],
  centered: ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'afterCta', 'beforeLegal'],
  compact: ['afterSocials', 'beforeLegal'],
  'two-column': ['afterName', 'afterTitle', 'afterExtra', 'afterSocials', 'afterCta', 'beforeLegal'],
  minimal: ['afterName', 'afterTitle'],
  'bottom-bar': ['afterName', 'afterTitle', 'afterExtra', 'afterContact', 'afterSocials', 'beforeLegal'],
};

const FONT_OPTIONS = [
  { value: 'Arial, sans-serif', label: 'Arial' },
  { value: 'Verdana, sans-serif', label: 'Verdana' },
  { value: 'Tahoma, sans-serif', label: 'Tahoma' },
  { value: '"Trebuchet MS", sans-serif', label: 'Trebuchet MS' },
  { value: 'Georgia, serif', label: 'Georgia' },
];

const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'classic-dark',
    name: ui.pl.themes.dark,
    accentColor: SIGNATURE_COLOR_DARK,
    textColor: SIGNATURE_COLOR_DARK,
  },
  {
    id: 'modern-blue',
    name: ui.pl.themes.blue,
    accentColor: SIGNATURE_COLOR_BLUE,
    textColor: SIGNATURE_COLOR_DARK,
  },
  {
    id: 'creative-purple',
    name: ui.pl.themes.purple,
    accentColor: SIGNATURE_COLOR_PURPLE,
    textColor: SIGNATURE_COLOR_DARK,
  },
  {
    id: 'eco-green',
    name: ui.pl.themes.green,
    accentColor: SIGNATURE_COLOR_GREEN,
    textColor: SIGNATURE_COLOR_DARK,
  },
  {
    id: 'minimal',
    name: ui.pl.themes.gray,
    accentColor: SIGNATURE_COLOR_GRAY,
    textColor: SIGNATURE_COLOR_DARK,
  },
];


export default function EmailSignatureGenerator() {
  const t = ui.pl;
  const [config, setConfig] = useState<SignatureConfig>(DEFAULT_SIGNATURE);
  const [styleConfig, setStyleConfig] = useState<StyleConfig>(DEFAULT_STYLE);
  const [spacingConfig, setSpacingConfig] = useState<SpacingConfig>(DEFAULT_SPACING);
  const [textStyleConfig, setTextStyleConfig] = useState<TextStyleConfig>(DEFAULT_TEXT_STYLE);
  const [pendingCustomColor, setPendingCustomColor] = useState<string>('#000000');
  const { copyStatus, copyToGmail } = useSignatureCopy();
  const [copyRawStatus, setCopyRawStatus] = useState<'idle' | 'success'>('idle');
  const [previewBg, setPreviewBg] = useState<'light' | 'dark' | 'checker'>('light');
  const [activePanel, setActivePanel] = useState<ActivePanel>('identity');
  const [layout, setLayout] = useState<LayoutType>('standard');
  const [themeId, setThemeId] = useState<string>('classic-dark');
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const [sourceModalCopyStatus, setSourceModalCopyStatus] = useState<'idle' | 'success'>('idle');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const data = JSON.parse(saved);
        if (data.config) setConfig(data.config);
        if (data.styleConfig) setStyleConfig(data.styleConfig);
        if (data.spacingConfig) setSpacingConfig(data.spacingConfig);
        if (data.textStyleConfig) setTextStyleConfig(data.textStyleConfig);
        if (data.layout) setLayout(data.layout);
        if (data.themeId) setThemeId(data.themeId);
      }
    } catch {
      // Ignore localStorage errors
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      const data = { config, styleConfig, spacingConfig, textStyleConfig, layout, themeId };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      // Ignore localStorage errors
    }
  }, [config, styleConfig, spacingConfig, textStyleConfig, layout, themeId, isHydrated]);

  const hasRequired = config.fullName.trim().length > 0 && config.email.trim().length > 0;

  const signatureHtml = useMemo(() => buildSignatureHtml(config, styleConfig, spacingConfig, layout, SIGNATURE_LABELS, textStyleConfig), [config, styleConfig, spacingConfig, layout, textStyleConfig]);

  function handleTextChange<K extends keyof SignatureConfig>(key: K, value: SignatureConfig[K]) {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSocialChange(key: SocialKey, value: string) {
    setConfig((prev) => ({
      ...prev,
      socials: {
        ...prev.socials,
        [key]: value,
      },
    }));
  }

  function handleStyleChange<K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) {
    setStyleConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  function handleSpacingChange(key: SpacingKey, delta: number) {
    setSpacingConfig((prev) => ({
      ...prev,
      [key]: Math.max(0, Math.min(32, prev[key] + delta)),
    }));
  }

  function handleTextStyleColorChange(key: TextElementKey, color: string | null) {
    setTextStyleConfig((prev) => ({
      ...prev,
      [key]: { ...prev[key], color },
    }));
  }

  function handleTextStyleSizeChange(key: TextElementKey, delta: number) {
    setTextStyleConfig((prev) => ({
      ...prev,
      [key]: { ...prev[key], sizeOffset: Math.max(-4, Math.min(4, prev[key].sizeOffset + delta)) },
    }));
  }

  function addCustomColor(color: string) {
    setTextStyleConfig((prev) => ({
      ...prev,
      customColors: prev.customColors.includes(color) ? prev.customColors : [...prev.customColors, color].slice(-8),
    }));
  }

  function removeCustomColor(color: string) {
    setTextStyleConfig((prev) => ({
      ...prev,
      customColors: prev.customColors.filter((c) => c !== color),
    }));
  }

  function applyTheme(presetId: string) {
    const preset = THEME_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setThemeId(presetId);
    setStyleConfig((prev) => ({
      ...prev,
      accentColor: preset.accentColor,
      textColor: preset.textColor,
    }));
  }

  function handleCopyToGmail() {
    copyToGmail(signatureHtml);
  }

  function handleCopyRawHtml() {
    copyTextToClipboard(signatureHtml).then(() => {
      setCopyRawStatus('success');
      setTimeout(() => setCopyRawStatus('idle'), 3000);
    });
  }

  function handleDownloadHtml() {
    exportSignatureAsHtml(signatureHtml);
  }

  function handleExportConfig() {
    const data = JSON.stringify({ config, styleConfig, spacingConfig, textStyleConfig, layout }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'email-signature-config.json';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  }

  function handleImportConfig() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (ev) => {
        try {
          const data = JSON.parse(ev.target?.result as string);
          if (data.config) setConfig(data.config);
          if (data.styleConfig) setStyleConfig(data.styleConfig);
          if (data.spacingConfig) setSpacingConfig(data.spacingConfig);
          if (data.textStyleConfig) setTextStyleConfig(data.textStyleConfig);
          if (data.layout) setLayout(data.layout);
        } catch { /* ignore invalid JSON */ }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function handleReset() {
    setConfig(DEFAULT_SIGNATURE);
    setStyleConfig(DEFAULT_STYLE);
    setSpacingConfig(DEFAULT_SPACING);
    setTextStyleConfig(DEFAULT_TEXT_STYLE);
    setLayout('standard');
    setThemeId('classic-dark');
    setPendingCustomColor('#000000');
  }

  return (
    <div className="space-y-4">
      <section className="tool-section flex flex-wrap items-center justify-between gap-3 p-4!">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <RiLayout3Line className="text-base text-primary" />
            <span className="text-[14px]! font-medium">
              {t.layoutLabel}
            </span>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'top-banner', 'label-column', 'centered', 'compact', 'two-column', 'minimal', 'bottom-bar'] as LayoutType[]).map((lt) => (
                <button
                  key={lt}
                  type="button"
                  onClick={() => setLayout(lt)}
                  className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${layout === lt ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                >
                  {lt === 'standard' && t.layouts.standard}
                  {lt === 'top-banner' && t.layouts.topBanner}
                  {lt === 'label-column' && t.layouts.labelColumn}
                  {lt === 'centered' && t.layouts.centered}
                  {lt === 'compact' && t.layouts.compact}
                  {lt === 'two-column' && t.layouts.twoColumn}
                  {lt === 'minimal' && t.layouts.minimal}
                  {lt === 'bottom-bar' && t.layouts.bottomBar}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="text-light text-xs!">{t.moreLayoutsSoon}</p>
      </section>

      <section className="tool-section flex flex-wrap items-center gap-3 p-4!">
        <div className="flex items-center gap-2">
          <span className="text-[14px]! font-medium">
            {t.editorTitle}
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          <ToolButton id="identity" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiUser3Line className="text-base" />} label={t.panels.identity} />
          <ToolButton id="buttons" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiShareLine className="text-base" />} label={t.panels.buttons} />
          <ToolButton id="social" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiMailLine className="text-base" />} label={t.panels.social} />
          <ToolButton id="appearance" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiPaletteLine className="text-base" />} label={t.panels.appearance} />
          <ToolButton id="textStyle" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiFontSize2 className="text-base" />} label={t.panels.textStyle} />
          <ToolButton id="spacing" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiSpace className="text-base" />} label={t.panels.spacing} />
          <ToolButton id="legal" active={activePanel} onClick={(id) => setActivePanel(id as ActivePanel)} icon={<RiFileTextLine className="text-base" />} label={t.panels.legal} />
        </div>
      </section>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <section className="tool-section flex min-h-[620px] flex-col space-y-4">
          <div className="space-y-4 text-sm!">
            {activePanel === 'identity' && (
              <div className="space-y-3">
                <span className="text-[14px]! font-medium">
                  {t.identity.title}
                </span>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.topLine}</span>
                  </label>
                  <input
                    type="text"
                    value={config.topLine}
                    onChange={(e) => handleTextChange('topLine', e.target.value)}
                    className="tool-input"
                    placeholder={t.identity.topLinePlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.avatar}</span>
                  </label>
                  <input
                    type="url"
                    value={config.avatarUrl}
                    onChange={(e) => handleTextChange('avatarUrl', e.target.value)}
                    className="tool-input"
                    placeholder={t.identity.avatarPlaceholder}
                  />
                  <p className="text-light mt-1 text-xs!">{t.identity.avatarHelper}</p>
                  {config.avatarUrl.trim() && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="text-light mb-1 text-xs! font-medium uppercase">{t.identity.avatarShape}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['circle', 'rounded', 'square'] as const).map((shape) => (
                            <button
                              key={shape}
                              type="button"
                              onClick={() => handleStyleChange('avatarShape', shape)}
                              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.avatarShape === shape ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                            >
                              {shape === 'circle' && t.identity.avatarShapeCircle}
                              {shape === 'rounded' && t.identity.avatarShapeRounded}
                              {shape === 'square' && t.identity.avatarShapeSquare}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-light mb-1 text-xs! font-medium uppercase">{t.identity.avatarSize}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleStyleChange('avatarSize', size)}
                              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.avatarSize === size ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                            >
                              {size === 'small' && t.identity.avatarSizeSmall}
                              {size === 'medium' && t.identity.avatarSizeMedium}
                              {size === 'large' && t.identity.avatarSizeLarge}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">{t.identity.fullName}</span>
                    </label>
                    <input
                      type="text"
                      value={config.fullName}
                      onChange={(e) => handleTextChange('fullName', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.fullNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">{t.identity.nameTag}</span>
                    </label>
                    <input
                      type="text"
                      value={config.nameTag}
                      onChange={(e) => handleTextChange('nameTag', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.nameTagPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="text-light mb-1 block text-xs! font-medium uppercase">{t.identity.jobTitle}</label>
                    <input
                      type="text"
                      value={config.jobTitle}
                      onChange={(e) => handleTextChange('jobTitle', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.jobTitlePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-light mb-1 block text-xs! font-medium uppercase">{t.identity.company}</label>
                    <input
                      type="text"
                      value={config.company}
                      onChange={(e) => handleTextChange('company', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.companyPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.extraLine}</span>
                  </label>
                  <input
                    type="text"
                    value={config.extraLine}
                    onChange={(e) => handleTextChange('extraLine', e.target.value)}
                    className="tool-input"
                    placeholder={t.identity.extraLinePlaceholder}
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">{t.identity.email}</span>
                    </label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) => handleTextChange('email', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">{t.identity.phone}</span>
                    </label>
                    <input
                      type="tel"
                      value={config.phone}
                      onChange={(e) => handleTextChange('phone', e.target.value)}
                      className="tool-input"
                      placeholder={t.identity.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.website}</span>
                  </label>
                  <input
                    type="url"
                    value={config.website}
                    onChange={(e) => handleTextChange('website', e.target.value)}
                    className="tool-input"
                    placeholder={t.identity.websitePlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.address}</span>
                  </label>
                  <textarea
                    value={config.address}
                    onChange={(e) => handleTextChange('address', e.target.value)}
                    className="tool-input"
                    rows={2}
                    placeholder={t.identity.addressPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-medium uppercase">{t.identity.formalLine}</span>
                  </label>
                  <textarea
                    value={config.formalLine}
                    onChange={(e) => handleTextChange('formalLine', e.target.value)}
                    className="tool-input"
                    rows={2}
                    placeholder={t.identity.formalLinePlaceholder}
                  />
                </div>
              </div>
            )}

            {activePanel === 'buttons' && (
              <div className="space-y-4">
                <span className="text-[14px]! font-medium">
                  {t.buttons.title}
                </span>

                <div>
                  <p className="text-light mb-2 text-xs! font-medium uppercase">{t.buttons.cta1Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-medium uppercase">{t.buttons.label}</span>
                      </label>
                      <input
                        type="text"
                        value={config.ctaLabel}
                        onChange={(e) => handleTextChange('ctaLabel', e.target.value)}
                        className="tool-input"
                        placeholder={t.buttons.labelPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-medium uppercase">{t.buttons.url}</span>
                      </label>
                      <input
                        type="url"
                        value={config.ctaUrl}
                        onChange={(e) => handleTextChange('ctaUrl', e.target.value)}
                        className="tool-input"
                        placeholder={t.buttons.urlPlaceholder}
                      />
                    </div>
                  </div>
                  <p className="text-light mt-1 text-xs!">{t.buttons.helper}</p>
                </div>

                <div>
                  <p className="text-light mb-2 text-xs! font-medium uppercase">{t.buttons.cta2Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-medium uppercase">{t.buttons.cta2Label}</span>
                      </label>
                      <input
                        type="text"
                        value={config.cta2Label}
                        onChange={(e) => handleTextChange('cta2Label', e.target.value)}
                        className="tool-input"
                        placeholder={t.buttons.cta2LabelPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-medium uppercase">{t.buttons.cta2Url}</span>
                      </label>
                      <input
                        type="url"
                        value={config.cta2Url}
                        onChange={(e) => handleTextChange('cta2Url', e.target.value)}
                        className="tool-input"
                        placeholder={t.buttons.cta2UrlPlaceholder}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-light mb-1 text-xs! font-medium uppercase">{t.buttons.ctaRadius}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['none', 'small', 'full'] as CtaRadiusOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('ctaRadius', option)}
                        className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.ctaRadius === option ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                      >
                        {option === 'none' && t.buttons.ctaRadiusNone}
                        {option === 'small' && t.buttons.ctaRadiusSmall}
                        {option === 'full' && t.buttons.ctaRadiusFull}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activePanel === 'social' && (
              <div className="space-y-3">
                <span className="text-[14px]! font-medium">
                  {t.social.title}
                </span>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">LinkedIn</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.linkedin}
                      onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Instagram</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.instagram}
                      onChange={(e) => handleSocialChange('instagram', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.instagram.com/..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Facebook</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.facebook}
                      onChange={(e) => handleSocialChange('facebook', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.facebook.com/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">TikTok</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.tiktok}
                      onChange={(e) => handleSocialChange('tiktok', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.tiktok.com/@..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">YouTube</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.youtube}
                      onChange={(e) => handleSocialChange('youtube', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.youtube.com/@..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">X (Twitter)</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.x}
                      onChange={(e) => handleSocialChange('x', e.target.value)}
                      className="tool-input"
                      placeholder="https://x.com/..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">GitHub</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.github}
                      onChange={(e) => handleSocialChange('github', e.target.value)}
                      className="tool-input"
                      placeholder="https://github.com/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Dribbble</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.dribbble}
                      onChange={(e) => handleSocialChange('dribbble', e.target.value)}
                      className="tool-input"
                      placeholder="https://dribbble.com/..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Behance</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.behance}
                      onChange={(e) => handleSocialChange('behance', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.behance.net/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">WhatsApp</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.whatsapp}
                      onChange={(e) => handleSocialChange('whatsapp', e.target.value)}
                      className="tool-input"
                      placeholder="https://wa.me/48..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Telegram</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.telegram}
                      onChange={(e) => handleSocialChange('telegram', e.target.value)}
                      className="tool-input"
                      placeholder="https://t.me/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-medium uppercase">Pinterest</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.pinterest}
                      onChange={(e) => handleSocialChange('pinterest', e.target.value)}
                      className="tool-input"
                      placeholder="https://www.pinterest.com/..."
                    />
                  </div>
                </div>
                <p className="text-light text-xs!">{t.social.helper}</p>

                <div className="mt-4 space-y-3 border-t border-neutral-200 pt-4">
                  <div className="flex items-center gap-2">
                    <input
                      id="social-icons-toggle"
                      type="checkbox"
                      checked={styleConfig.socialIcons.showIcons}
                      onChange={(e) => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, showIcons: e.target.checked })}
                      className="tool-checkbox"
                    />
                    <label htmlFor="social-icons-toggle" className="text-[14px]! font-medium">
                      {t.social.showIcons}
                    </label>
                  </div>

                  {styleConfig.socialIcons.showIcons && (
                    <>
                      <div>
                        <p className="text-light mb-1 text-xs! font-medium uppercase">{t.social.iconSize}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: size })}
                              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.socialIcons.iconSize === size ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                            >
                              {size === 'small' && t.social.iconSizeSmall}
                              {size === 'medium' && t.social.iconSizeMedium}
                              {size === 'large' && t.social.iconSizeLarge}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-light mb-1 text-xs! font-medium uppercase">{t.social.iconColor}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['platform', 'accent', 'text'] as const).map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: mode })}
                              className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.socialIcons.colorMode === mode ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                            >
                              {mode === 'platform' && t.social.iconColorPlatform}
                              {mode === 'accent' && t.social.iconColorAccent}
                              {mode === 'text' && t.social.iconColorText}
                            </button>
                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {activePanel === 'appearance' && (
              <div className="space-y-4">
                <div>
                  <span className="mb-2 text-[14px]! font-medium">
                    {t.appearance.themeTitle}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {THEME_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => applyTheme(preset.id)}
                        className={`inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! font-medium ${themeId === preset.id ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-neutral-300">
                          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: preset.accentColor }} />
                        </span>
                        {preset.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="text-light mb-1 text-xs! font-medium uppercase">{t.appearance.accentColor}</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={styleConfig.accentColor}
                        onChange={(e) => handleStyleChange('accentColor', e.target.value)}
                        className="tool-color-picker h-9! w-9!"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-light mb-1 text-xs! font-medium uppercase">{t.appearance.textColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.textColor} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="tool-color-picker h-9! w-9!" />
                    </div>
                  </div>
                  <div>
                    <p className="text-light mb-1 text-xs! font-medium uppercase">{t.appearance.backgroundColor}</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={styleConfig.backgroundColor}
                        onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                        className="tool-color-picker h-9! w-9!"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="text-light mb-1 text-xs! font-medium uppercase">{t.appearance.fontFamily}</p>
                    <select
                      value={styleConfig.fontFamily}
                      onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
                      className="tool-select"
                    >
                      {FONT_OPTIONS.map((font) => (
                        <option key={font.value} value={font.value}>
                          {font.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="text-light mb-1 text-xs! font-medium uppercase">{t.appearance.fontSize}</p>
                    <div className="flex flex-wrap gap-2">
                      {(['small', 'normal', 'large'] as FontSizeOption[]).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleStyleChange('fontSize', size)}
                          className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.fontSize === size ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                        >
                          {size === 'small' && t.appearance.fontSizeSmall}
                          {size === 'normal' && t.appearance.fontSizeNormal}
                          {size === 'large' && t.appearance.fontSizeLarge}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-light mb-1 text-xs! font-medium uppercase">{t.border.label}</p>
                  <div className="flex flex-wrap gap-3">
                    {(['left', 'right', 'top', 'bottom'] as (keyof BorderSides)[]).map((side) => (
                      <label key={side} className="flex cursor-pointer items-center gap-1.5">
                        <input
                          type="checkbox"
                          checked={styleConfig.border[side]}
                          onChange={(e) => {
                            const newBorder = { ...styleConfig.border, [side]: e.target.checked };
                            const allSelected = newBorder.left && newBorder.right && newBorder.top && newBorder.bottom;
                            if (allSelected) {
                              handleStyleChange('border', { left: true, right: true, top: true, bottom: true });
                            } else {
                              handleStyleChange('border', newBorder);
                            }
                          }}
                          className="tool-checkbox"
                        />
                        <span className="text-[14px]! font-medium">
                          {side === 'left' && t.border.left}
                          {side === 'right' && t.border.right}
                          {side === 'top' && t.border.top}
                          {side === 'bottom' && t.border.bottom}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <button
                      type="button"
                      onClick={() => handleStyleChange('border', { left: true, right: true, top: true, bottom: true })}
                      className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.border.left && styleConfig.border.right && styleConfig.border.top && styleConfig.border.bottom ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                    >
                      {t.border.full}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStyleChange('border', { left: false, right: false, top: false, bottom: false })}
                      className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${!styleConfig.border.left && !styleConfig.border.right && !styleConfig.border.top && !styleConfig.border.bottom ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                    >
                      {t.border.none}
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activePanel === 'textStyle' && (
              <div className="space-y-4">
                <div>
                  <span className="mb-2 text-[14px]! font-medium">
                    {t.textStyle.title}
                  </span>
                  <p className="text-light mb-3 text-xs!">{t.textStyle.helper}</p>
                </div>

                <div>
                  <p className="text-light mb-2 text-xs! font-medium uppercase">{t.textStyle.addColor}</p>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input type="color" value={pendingCustomColor} onChange={(e) => setPendingCustomColor(e.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                      <div className="h-8 w-8 cursor-pointer rounded border border-neutral-300" style={{ backgroundColor: pendingCustomColor }} />
                    </div>
                    <button type="button" onClick={() => addCustomColor(pendingCustomColor)} className="inline-flex items-center rounded-md border border-black/10 bg-white px-3 py-1.5 text-[14px]! font-medium hover:bg-neutral-100">
                      {t.textStyle.saveColor}
                    </button>
                  </div>
                </div>

                {textStyleConfig.customColors.length > 0 && (
                  <div>
                    <p className="text-light mb-2 text-xs! font-medium uppercase">{t.textStyle.customColors}</p>
                    <div className="flex flex-wrap gap-2">
                      {textStyleConfig.customColors.map((color) => (
                        <div key={color} className="group relative">
                          <div className="h-8 w-8 rounded border border-neutral-300" style={{ backgroundColor: color }} title={color} />
                          <button
                            type="button"
                            onClick={() => removeCustomColor(color)}
                            className="absolute -top-1.5 -right-1.5 hidden h-5 w-5 items-center justify-center rounded-full bg-error-icon text-white group-hover:flex"
                            aria-label="Usuń kolor"
                          >
                            <RiDeleteBinLine className="h-3 w-3" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {config.fullName.trim() && (
                  <TextStyleRow elementKey="name" label={t.textStyle.name} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.name.color} defaultColor={styleConfig.accentColor} sizeOffset={textStyleConfig.name.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}

                {config.jobTitle.trim() && (
                  <TextStyleRow elementKey="jobTitle" label={t.textStyle.jobTitle} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.jobTitle.color} defaultColor={styleConfig.textColor} sizeOffset={textStyleConfig.jobTitle.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}

                {config.company.trim() && (
                  <TextStyleRow elementKey="company" label={t.textStyle.company} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.company.color} defaultColor={styleConfig.textColor} sizeOffset={textStyleConfig.company.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && (
                  <TextStyleRow elementKey="contact" label={t.textStyle.contact} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.contact.color} defaultColor={styleConfig.textColor} sizeOffset={textStyleConfig.contact.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}

                {Object.values(config.socials).some((url) => url.trim()) && (
                  <TextStyleRow elementKey="socials" label={t.textStyle.socials} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.socials.color} defaultColor={styleConfig.accentColor} sizeOffset={textStyleConfig.socials.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}

                {config.legalNote.trim() && (
                  <TextStyleRow elementKey="legal" label={t.textStyle.legal} colorLabel={t.textStyle.color} sizeLabel={t.textStyle.size} currentColor={textStyleConfig.legal.color} defaultColor={styleConfig.textColor} sizeOffset={textStyleConfig.legal.sizeOffset} customColors={textStyleConfig.customColors} onColorChange={handleTextStyleColorChange} onSizeChange={handleTextStyleSizeChange} />
                )}
              </div>
            )}

            {activePanel === 'spacing' && (
              <div className="space-y-4">
                <div>
                  <span className="mb-2 text-[14px]! font-medium">
                    {t.spacing.title}
                  </span>
                  <p className="text-light mb-3 text-xs!">{t.spacing.helper}</p>
                </div>

                <div>
                  <p className="text-light mb-1 text-xs! font-medium uppercase">{t.spacing.padding}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['small', 'medium', 'large'] as MarginOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('padding', option)}
                        className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.padding === option ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                      >
                        {option === 'small' && '8 px'}
                        {option === 'medium' && '16 px'}
                        {option === 'large' && '24 px'}
                      </button>
                    ))}
                  </div>
                </div>

                {config.fullName.trim() && LAYOUT_SPACING_MAP[layout].includes('afterName') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterName}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterName', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterName} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterName', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.jobTitle.trim() || config.company.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterTitle') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterTitle}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterTitle', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterTitle} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterTitle', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {config.extraLine.trim() && LAYOUT_SPACING_MAP[layout].includes('afterExtra') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterExtra}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterExtra', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterExtra} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterExtra', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterContact') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterContact}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterContact', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterContact} px</span>
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterContact', 2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zwiększ odstęp"
                      >
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {Object.values(config.socials).some((url) => url.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterSocials') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterSocials}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterSocials', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterSocials} px</span>
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterSocials', 2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zwiększ odstęp"
                      >
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {config.ctaLabel.trim() && config.ctaUrl.trim() && LAYOUT_SPACING_MAP[layout].includes('afterCta') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.afterCta}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterCta', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterCta} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterCta', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}

                {config.legalNote.trim() && LAYOUT_SPACING_MAP[layout].includes('beforeLegal') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-[14px]! font-medium">{t.spacing.beforeLegal}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('beforeLegal', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="h-4 w-4 text-primary" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.beforeLegal} px</span>
                      <button type="button" onClick={() => handleSpacingChange('beforeLegal', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-primary" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activePanel === 'legal' && (
              <div className="space-y-3">
                <span className="text-[14px]! font-medium">
                  {t.legal.title}
                </span>
                <textarea
                  value={config.legalNote}
                  onChange={(e) => handleTextChange('legalNote', e.target.value)}
                  className="tool-textarea text-xs!"
                  rows={6}
                  placeholder={t.legal.placeholder}
                />
                <div className="flex items-center gap-2 pt-2">
                  <input
                    id="divider-toggle"
                    type="checkbox"
                    checked={styleConfig.showDivider}
                    onChange={(e) => handleStyleChange('showDivider', e.target.checked)}
                    className="tool-checkbox"
                  />
                  <label htmlFor="divider-toggle" className="text-[14px]! font-medium">
                    {t.legal.showDivider}
                  </label>
                </div>
                {styleConfig.showDivider && (
                  <div className="space-y-3 border-t border-neutral-200 pt-3">
                    <div>
                      <p className="text-light mb-1 text-xs! font-medium uppercase">{t.legal.dividerStyle}</p>
                      <div className="flex flex-wrap gap-2">
                        {(['solid', 'dashed', 'dotted'] as const).map((ds) => (
                          <button
                            key={ds}
                            type="button"
                            onClick={() => handleStyleChange('dividerStyle', ds)}
                            className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.dividerStyle === ds ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                          >
                            {ds === 'solid' && t.legal.dividerStyleSolid}
                            {ds === 'dashed' && t.legal.dividerStyleDashed}
                            {ds === 'dotted' && t.legal.dividerStyleDotted}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-light mb-1 text-xs! font-medium uppercase">{t.legal.dividerWidth}</p>
                      <div className="flex flex-wrap gap-2">
                        {([1, 2, 3] as const).map((w) => (
                          <button
                            key={w}
                            type="button"
                            onClick={() => handleStyleChange('dividerWidth', w)}
                            className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${styleConfig.dividerWidth === w ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                          >
                            {w} px
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-light mb-1 text-xs! font-medium uppercase">{t.legal.dividerColor}</p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStyleChange('dividerColor', '')}
                          className={`inline-flex items-center rounded-md border px-3 py-1.5 text-[14px]! font-medium ${!styleConfig.dividerColor ? 'border-black bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                        >
                          {t.legal.dividerColorDefault}
                        </button>
                        <div className="relative">
                          <input
                            type="color"
                            value={styleConfig.dividerColor || '#e5e7eb'}
                            onChange={(e) => handleStyleChange('dividerColor', e.target.value)}
                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                          />
                          <div
                            className={`flex h-8 w-8 cursor-pointer items-center justify-center rounded border-2 ${styleConfig.dividerColor ? 'border-mid' : 'border-neutral-300'}`}
                            style={{ backgroundColor: styleConfig.dividerColor || '#e5e7eb' }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="tool-section flex min-h-[620px] flex-col space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="h6">{t.preview.title}</h2>
              <p className="text-light text-xs!">{t.preview.helper}</p>
            </div>
            <div className="flex gap-1">
              <button type="button" onClick={() => setPreviewBg('light')} className={`rounded-md border p-1.5 ${previewBg === 'light' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`} title={t.preview.bgLight}>
                <RiSunLine className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setPreviewBg('dark')} className={`rounded-md border p-1.5 ${previewBg === 'dark' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`} title={t.preview.bgDark}>
                <RiMoonLine className="h-4 w-4" />
              </button>
              <button type="button" onClick={() => setPreviewBg('checker')} className={`rounded-md border p-1.5 ${previewBg === 'checker' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`} title={t.preview.bgChecker}>
                <RiGridLine className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className={`rounded-2xl border border-neutral-200 p-4 ${previewBg === 'dark' ? 'bg-neutral-800' : previewBg === 'checker' ? 'bg-[length:20px_20px] bg-[image:linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%),linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%)] bg-[position:0_0,10px_10px] bg-white' : 'bg-neutral-50'}`}>
            <div className="mx-auto max-w-full overflow-x-auto">
              <div className="inline-block rounded-xl border border-neutral-200 bg-white px-4 py-4 text-sm!">
                <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="accent" size="small" disabled={!hasRequired} onClick={handleCopyToGmail} className="disabled:opacity-60">
              {copyStatus === 'success' ? t.preview.copySuccess : copyStatus === 'error' ? t.preview.copyError : t.preview.copyButton}
            </Button>
            <Button type="button" variant="normal" size="small" disabled={!hasRequired} onClick={handleCopyRawHtml} className="disabled:opacity-60">
              <RiCodeLine className="mr-1.5 inline-block text-base" />
              {copyRawStatus === 'success' ? t.preview.copyRawSuccess : t.preview.copyRawButton}
            </Button>
            <Button type="button" variant="normal" size="small" disabled={!hasRequired} onClick={handleDownloadHtml} className="disabled:opacity-60">
              <RiDownloadLine className="mr-1.5 inline-block text-base" />
              {t.preview.downloadButton}
            </Button>
            <Button type="button" variant="normal" size="small" disabled={!hasRequired} onClick={() => setShowSourceModal(true)} className="disabled:opacity-60">
              <RiEyeLine className="mr-1.5 inline-block text-base" />
              {t.preview.viewSourceButton}
            </Button>
            <Button type="button" variant="normal" size="small" onClick={handleExportConfig}>
              <RiShareForwardLine className="mr-1.5 inline-block text-base" />
              {t.preview.exportConfig}
            </Button>
            <Button type="button" variant="normal" size="small" onClick={handleImportConfig}>
              <RiUploadLine className="mr-1.5 inline-block text-base" />
              {t.preview.importConfig}
            </Button>
            <Button type="button" variant="normal" size="small" onClick={() => setShowResetModal(true)}>
              {t.preview.resetButton}
            </Button>
          </div>

          {showSourceModal && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-[1px]" onClick={(e) => { if (e.target === e.currentTarget) setShowSourceModal(false); }} role="dialog" aria-modal="true">
              <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="h6">{t.preview.viewSourceTitle}</h3>
                  <button type="button" onClick={() => setShowSourceModal(false)} className="rounded-md p-1.5 hover:bg-neutral-100">
                    <RiCloseLine className="h-5 w-5" />
                  </button>
                </div>
                <pre className="max-h-[60vh] overflow-auto rounded-lg bg-neutral-50 p-4 text-xs! leading-relaxed break-all whitespace-pre-wrap">{signatureHtml}</pre>
                <div className="mt-4 flex gap-2">
                  <Button type="button" variant="accent" size="small" onClick={() => { copyTextToClipboard(signatureHtml).then(() => { setSourceModalCopyStatus('success'); setTimeout(() => setSourceModalCopyStatus('idle'), 3000); }); }}>
                    {sourceModalCopyStatus === 'success' ? t.preview.viewSourceCopied : t.preview.viewSourceCopy}
                  </Button>
                  <Button type="button" variant="normal" size="small" onClick={() => setShowSourceModal(false)}>
                    {t.preview.viewSourceClose}
                  </Button>
                </div>
              </div>
            </div>
          )}

          <ConfirmModal isOpen={showResetModal} onClose={() => setShowResetModal(false)} onConfirm={handleReset} title={t.preview.resetModalTitle} description={t.preview.resetModalDescription} />

          {!hasRequired && <p className="text-light text-xs!">{t.preview.requiredFields}</p>}
        </section>
      </div>
    </div>
  );
}
