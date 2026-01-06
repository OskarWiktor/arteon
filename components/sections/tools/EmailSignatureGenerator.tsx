'use client';

import Button from '@/components/ui/buttons/Button';
import Badge from '@/components/ui/Badge';
import Eyebrow from '@/components/ui/typography/Eyebrow';
import { buildSignatureHtml } from '@/components/sections/tools/EmailSignatureGenerator/buildSignatureHtml';
import { useSignatureCopy } from '@/components/sections/tools/EmailSignatureGenerator/useSignatureCopy';
import type { ActivePanel, BorderSides, CtaRadiusOption, FontSizeOption, LayoutType, MarginOption, SignatureConfig, SocialKey, SpacingConfig, SpacingKey, StyleConfig, TextElementKey, TextStyleConfig, ThemePreset } from '@/components/sections/tools/EmailSignatureGenerator/types';
import { rgbToHex } from '@/lib/tools/color/convert';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { RiUser3Line, RiMailLine, RiShareLine, RiPaletteLine, RiFileTextLine, RiLayout3Line, RiSpace, RiAddLine, RiSubtractLine, RiFontSize2, RiDeleteBinLine, RiRefreshLine } from 'react-icons/ri';

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
      requiredFields: 'Aby skopiować stopkę, uzupełnij przynajmniej imię i nazwisko oraz e-mail.',
      resetButton: 'Resetuj wygląd',
      resetModalTitle: 'Zresetować ustawienia?',
      resetModalDescription: 'Wszystkie dane i ustawienia stopki zostaną przywrócone do wartości domyślnych. Tej operacji nie można cofnąć.',
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

interface PanelButtonProps {
  id: ActivePanel;
  current: ActivePanel;
  icon: ReactNode;
  label: string;
  onClick: (id: ActivePanel) => void;
}

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

function PanelButton({ id, current, icon, label, onClick }: PanelButtonProps) {
  const isActive = id === current;
  return (
    <button
      type="button"
      onClick={() => onClick(id)}
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! ${isActive ? 'bg-slate-800 text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}

export default function EmailSignatureGenerator() {
  const t = ui.pl;
  const [config, setConfig] = useState<SignatureConfig>(DEFAULT_SIGNATURE);
  const [styleConfig, setStyleConfig] = useState<StyleConfig>(DEFAULT_STYLE);
  const [spacingConfig, setSpacingConfig] = useState<SpacingConfig>(DEFAULT_SPACING);
  const [textStyleConfig, setTextStyleConfig] = useState<TextStyleConfig>(DEFAULT_TEXT_STYLE);
  const [pendingCustomColor, setPendingCustomColor] = useState<string>('#000000');
  const { copyStatus, copyToGmail } = useSignatureCopy();
  const [activePanel, setActivePanel] = useState<ActivePanel>('identity');
  const [layout, setLayout] = useState<LayoutType>('standard');
  const [themeId, setThemeId] = useState<string>('classic-dark');
  const [showResetModal, setShowResetModal] = useState(false);
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
            <RiLayout3Line className="text-base text-slate-800" />
            <Eyebrow variant="dynamic" className="text-xs! font-semibold">
              {t.layoutLabel}
            </Eyebrow>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'top-banner', 'label-column', 'centered', 'compact', 'two-column', 'minimal', 'bottom-bar'] as LayoutType[]).map((lt) => (
                <Badge
                  key={lt}
                  as="button"
                  type="button"
                  onClick={() => setLayout(lt)}
                  variant={layout === lt ? 'selected' : 'default'}
                  size="sm"
                >
                  {lt === 'standard' && t.layouts.standard}
                  {lt === 'top-banner' && t.layouts.topBanner}
                  {lt === 'label-column' && t.layouts.labelColumn}
                  {lt === 'centered' && t.layouts.centered}
                  {lt === 'compact' && t.layouts.compact}
                  {lt === 'two-column' && t.layouts.twoColumn}
                  {lt === 'minimal' && t.layouts.minimal}
                  {lt === 'bottom-bar' && t.layouts.bottomBar}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs! text-light">{t.moreLayoutsSoon}</p>
      </section>

      <section className="tool-section flex flex-wrap items-center gap-3 p-4!">
        <div className="flex items-center gap-2">
          <Eyebrow variant="dynamic" className="text-xs! font-semibold">
            {t.editorTitle}
          </Eyebrow>
        </div>
        <div className="flex flex-wrap gap-2">
          <PanelButton id="identity" current={activePanel} onClick={setActivePanel} icon={<RiUser3Line className="text-base" />} label={t.panels.identity} />
          <PanelButton id="buttons" current={activePanel} onClick={setActivePanel} icon={<RiShareLine className="text-base" />} label={t.panels.buttons} />
          <PanelButton id="social" current={activePanel} onClick={setActivePanel} icon={<RiMailLine className="text-base" />} label={t.panels.social} />
          <PanelButton id="appearance" current={activePanel} onClick={setActivePanel} icon={<RiPaletteLine className="text-base" />} label={t.panels.appearance} />
          <PanelButton id="textStyle" current={activePanel} onClick={setActivePanel} icon={<RiFontSize2 className="text-base" />} label={t.panels.textStyle} />
          <PanelButton id="spacing" current={activePanel} onClick={setActivePanel} icon={<RiSpace className="text-base" />} label={t.panels.spacing} />
          <PanelButton id="legal" current={activePanel} onClick={setActivePanel} icon={<RiFileTextLine className="text-base" />} label={t.panels.legal} />
        </div>
      </section>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <section className="tool-section flex min-h-[620px] flex-col space-y-4">
          <div className="space-y-4 text-sm!">
            {activePanel === 'identity' && (
              <div className="space-y-3">
                <Eyebrow variant="dynamic" className="text-xs! font-semibold">
                  {t.identity.title}
                </Eyebrow>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.topLine}</span>
                  </label>
                  <input
                    type="text"
                    value={config.topLine}
                    onChange={(e) => handleTextChange('topLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.topLinePlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.avatar}</span>
                  </label>
                  <input
                    type="url"
                    value={config.avatarUrl}
                    onChange={(e) => handleTextChange('avatarUrl', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.avatarPlaceholder}
                  />
                  <p className="mt-1 text-xs! text-light">{t.identity.avatarHelper}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">{t.identity.fullName}</span>
                    </label>
                    <input
                      type="text"
                      value={config.fullName}
                      onChange={(e) => handleTextChange('fullName', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.fullNamePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">{t.identity.nameTag}</span>
                    </label>
                    <input
                      type="text"
                      value={config.nameTag}
                      onChange={(e) => handleTextChange('nameTag', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.nameTagPlaceholder}
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-light uppercase">{t.identity.jobTitle}</label>
                    <input
                      type="text"
                      value={config.jobTitle}
                      onChange={(e) => handleTextChange('jobTitle', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.jobTitlePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-light uppercase">{t.identity.company}</label>
                    <input
                      type="text"
                      value={config.company}
                      onChange={(e) => handleTextChange('company', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.companyPlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.extraLine}</span>
                  </label>
                  <input
                    type="text"
                    value={config.extraLine}
                    onChange={(e) => handleTextChange('extraLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.extraLinePlaceholder}
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">{t.identity.email}</span>
                    </label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) => handleTextChange('email', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.emailPlaceholder}
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">{t.identity.phone}</span>
                    </label>
                    <input
                      type="tel"
                      value={config.phone}
                      onChange={(e) => handleTextChange('phone', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.phonePlaceholder}
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.website}</span>
                  </label>
                  <input
                    type="url"
                    value={config.website}
                    onChange={(e) => handleTextChange('website', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.websitePlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.address}</span>
                  </label>
                  <textarea
                    value={config.address}
                    onChange={(e) => handleTextChange('address', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    rows={2}
                    placeholder={t.identity.addressPlaceholder}
                  />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="text-xs! font-semibold uppercase text-light">{t.identity.formalLine}</span>
                  </label>
                  <textarea
                    value={config.formalLine}
                    onChange={(e) => handleTextChange('formalLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-xs! focus:border-neutral-800 focus:outline-none"
                    rows={2}
                    placeholder={t.identity.formalLinePlaceholder}
                  />
                </div>
              </div>
            )}

            {activePanel === 'buttons' && (
              <div className="space-y-4">
                <Eyebrow variant="dynamic" className="text-xs! font-semibold">
                  {t.buttons.title}
                </Eyebrow>

                <div>
                  <p className="mb-2 text-xs! font-semibold text-light uppercase">{t.buttons.cta1Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="text-xs! font-semibold uppercase text-light">{t.buttons.label}</span>
                      </label>
                      <input
                        type="text"
                        value={config.ctaLabel}
                        onChange={(e) => handleTextChange('ctaLabel', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.buttons.labelPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="text-xs! font-semibold uppercase text-light">{t.buttons.url}</span>
                      </label>
                      <input
                        type="url"
                        value={config.ctaUrl}
                        onChange={(e) => handleTextChange('ctaUrl', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.buttons.urlPlaceholder}
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-xs! text-light">{t.buttons.helper}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs! font-semibold text-light uppercase">{t.buttons.cta2Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="text-xs! font-semibold uppercase text-light">{t.buttons.cta2Label}</span>
                      </label>
                      <input
                        type="text"
                        value={config.cta2Label}
                        onChange={(e) => handleTextChange('cta2Label', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.buttons.cta2LabelPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="text-xs! font-semibold uppercase text-light">{t.buttons.cta2Url}</span>
                      </label>
                      <input
                        type="url"
                        value={config.cta2Url}
                        onChange={(e) => handleTextChange('cta2Url', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.buttons.cta2UrlPlaceholder}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.buttons.ctaRadius}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['none', 'small', 'full'] as CtaRadiusOption[]).map((option) => (
                      <Badge
                        key={option}
                        onClick={() => handleStyleChange('ctaRadius', option)}
                        as="button"
                        type="button"
                        size="sm"
                        variant={styleConfig.ctaRadius === option ? 'selected' : 'default'}
                        className={`px-3 py-1 text-xs! font-medium ${styleConfig.ctaRadius === option ? '' : 'hover:border-neutral-500'}`}
                      >
                        {option === 'none' && t.buttons.ctaRadiusNone}
                        {option === 'small' && t.buttons.ctaRadiusSmall}
                        {option === 'full' && t.buttons.ctaRadiusFull}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activePanel === 'social' && (
              <div className="space-y-3">
                <Eyebrow variant="dynamic" className="text-xs! font-semibold">
                  {t.social.title}
                </Eyebrow>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">LinkedIn</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.linkedin}
                      onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">Instagram</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.instagram}
                      onChange={(e) => handleSocialChange('instagram', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.instagram.com/..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">Facebook</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.facebook}
                      onChange={(e) => handleSocialChange('facebook', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.facebook.com/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">TikTok</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.tiktok}
                      onChange={(e) => handleSocialChange('tiktok', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.tiktok.com/@..."
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">YouTube</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.youtube}
                      onChange={(e) => handleSocialChange('youtube', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.youtube.com/@..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="text-xs! font-semibold uppercase text-light">X (Twitter)</span>
                    </label>
                    <input
                      type="url"
                      value={config.socials.x}
                      onChange={(e) => handleSocialChange('x', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://x.com/..."
                    />
                  </div>
                </div>
                <p className="text-xs! text-light">{t.social.helper}</p>

                <div className="border-t border-neutral-200 pt-4 mt-4 space-y-3">
                  <div className="flex items-center gap-2">
                    <input
                      id="social-icons-toggle"
                      type="checkbox"
                      checked={styleConfig.socialIcons.showIcons}
                      onChange={(e) => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, showIcons: e.target.checked })}
                      className="h-4! w-4! rounded border-neutral-300"
                    />
                    <label htmlFor="social-icons-toggle" className="text-sm! text-mid">
                      {t.social.showIcons}
                    </label>
                  </div>

                  {styleConfig.socialIcons.showIcons && (
                    <>
                      <div>
                        <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.social.iconSize}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <Badge
                              key={size}
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: size })}
                              as="button"
                              type="button"
                              size="sm"
                              variant={styleConfig.socialIcons.iconSize === size ? 'selected' : 'default'}
                              className="px-3 py-1 text-xs! font-medium"
                            >
                              {size === 'small' && t.social.iconSizeSmall}
                              {size === 'medium' && t.social.iconSizeMedium}
                              {size === 'large' && t.social.iconSizeLarge}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.social.iconColor}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['platform', 'accent', 'text'] as const).map((mode) => (
                            <Badge
                              key={mode}
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: mode })}
                              as="button"
                              type="button"
                              size="sm"
                              variant={styleConfig.socialIcons.colorMode === mode ? 'selected' : 'default'}
                              className="px-3 py-1 text-xs! font-medium"
                            >
                              {mode === 'platform' && t.social.iconColorPlatform}
                              {mode === 'accent' && t.social.iconColorAccent}
                              {mode === 'text' && t.social.iconColorText}
                            </Badge>
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
                  <Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">
                    {t.appearance.themeTitle}
                  </Eyebrow>
                  <div className="flex flex-wrap gap-2">
                    {THEME_PRESETS.map((preset) => (
                      <Badge
                        key={preset.id}
                        onClick={() => applyTheme(preset.id)}
                        as="button"
                        type="button"
                        size="sm"
                        variant={themeId === preset.id ? 'selected' : 'default'}
                        className={`flex items-center gap-2 px-3 py-1 text-xs! ${themeId === preset.id ? '' : 'hover:border-neutral-500'}`}
                      >
                        <span className="flex h-4 w-4 items-center justify-center rounded-full border border-neutral-300">
                          <span className="h-3 w-3 rounded-full" style={{ backgroundColor: preset.accentColor }} />
                        </span>
                        {preset.name}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.accentColor}</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={styleConfig.accentColor}
                        onChange={(e) => handleStyleChange('accentColor', e.target.value)}
                        className="h-9 w-9 cursor-pointer border-none bg-white p-0!"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.textColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.textColor} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="h-9 w-9 cursor-pointer border-none bg-white p-0!" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.backgroundColor}</p>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={styleConfig.backgroundColor}
                        onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
                        className="h-9 w-9 cursor-pointer border-none bg-white p-0!"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.fontFamily}</p>
                    <select
                      value={styleConfig.fontFamily}
                      onChange={(e) => handleStyleChange('fontFamily', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    >
                      {FONT_OPTIONS.map((font) => (
                        <option key={font.value} value={font.value}>
                          {font.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.fontSize}</p>
                    <div className="flex flex-wrap gap-2">
                      {(['small', 'normal', 'large'] as FontSizeOption[]).map((size) => (
                        <Badge
                          key={size}
                          onClick={() => handleStyleChange('fontSize', size)}
                          as="button"
                          type="button"
                          size="sm"
                          variant={styleConfig.fontSize === size ? 'selected' : 'default'}
                          className={`px-3 py-1 text-xs! font-medium ${styleConfig.fontSize === size ? '' : 'hover:border-neutral-500'}`}
                        >
                          {size === 'small' && t.appearance.fontSizeSmall}
                          {size === 'normal' && t.appearance.fontSizeNormal}
                          {size === 'large' && t.appearance.fontSizeLarge}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.border.label}</p>
                  <div className="flex flex-wrap gap-3">
                    {(['left', 'right', 'top', 'bottom'] as (keyof BorderSides)[]).map((side) => (
                      <label key={side} className="flex items-center gap-1.5 cursor-pointer">
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
                          className="h-4! w-4! rounded border-neutral-300"
                        />
                        <span className="text-sm! text-mid">
                          {side === 'left' && t.border.left}
                          {side === 'right' && t.border.right}
                          {side === 'top' && t.border.top}
                          {side === 'bottom' && t.border.bottom}
                        </span>
                      </label>
                    ))}
                  </div>
                  <div className="mt-2 flex gap-2">
                    <Badge
                      onClick={() => handleStyleChange('border', { left: true, right: true, top: true, bottom: true })}
                      as="button"
                      type="button"
                      size="sm"
                      variant={styleConfig.border.left && styleConfig.border.right && styleConfig.border.top && styleConfig.border.bottom ? 'selected' : 'default'}
                      className="px-3 py-1 text-xs! font-medium"
                    >
                      {t.border.full}
                    </Badge>
                    <Badge
                      onClick={() => handleStyleChange('border', { left: false, right: false, top: false, bottom: false })}
                      as="button"
                      type="button"
                      size="sm"
                      variant={!styleConfig.border.left && !styleConfig.border.right && !styleConfig.border.top && !styleConfig.border.bottom ? 'selected' : 'default'}
                      className="px-3 py-1 text-xs! font-medium"
                    >
                      {t.border.none}
                    </Badge>
                  </div>
                </div>
              </div>
            )}

            {activePanel === 'textStyle' && (
              <div className="space-y-4">
                <div>
                  <Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">
                    {t.textStyle.title}
                  </Eyebrow>
                  <p className="text-xs! text-light mb-3">{t.textStyle.helper}</p>
                </div>

                <div>
                  <p className="mb-2 text-xs! font-semibold text-light uppercase">{t.textStyle.addColor}</p>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input
                        type="color"
                        value={pendingCustomColor}
                        onChange={(e) => setPendingCustomColor(e.target.value)}
                        className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                      />
                      <div
                        className="h-8 w-8 rounded border border-neutral-300 cursor-pointer"
                        style={{ backgroundColor: pendingCustomColor }}
                      />
                    </div>
                    <Badge
                      onClick={() => addCustomColor(pendingCustomColor)}
                      as="button"
                      type="button"
                      size="sm"
                      variant="default"
                      className="px-3 py-1 text-xs! font-medium hover:border-neutral-500"
                    >
                      {t.textStyle.saveColor}
                    </Badge>
                  </div>
                </div>

                {textStyleConfig.customColors.length > 0 && (
                  <div>
                    <p className="mb-2 text-xs! font-semibold text-light uppercase">{t.textStyle.customColors}</p>
                    <div className="flex flex-wrap gap-2">
                      {textStyleConfig.customColors.map((color) => (
                        <div key={color} className="relative group">
                          <div
                            className="h-8 w-8 rounded border border-neutral-300"
                            style={{ backgroundColor: color }}
                            title={color}
                          />
                          <button
                            type="button"
                            onClick={() => removeCustomColor(color)}
                            className="absolute -top-1.5 -right-1.5 hidden group-hover:flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white"
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
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.name}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('name', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.name.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.name.color || styleConfig.accentColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('name', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.name.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.name.color || styleConfig.accentColor}
                          onChange={(e) => handleTextStyleColorChange('name', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('name', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.name.sizeOffset > 0 ? '+' : ''}{textStyleConfig.name.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('name', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.jobTitle.trim() && (
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.jobTitle}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('jobTitle', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.jobTitle.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.jobTitle.color || styleConfig.textColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('jobTitle', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.jobTitle.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.jobTitle.color || styleConfig.textColor}
                          onChange={(e) => handleTextStyleColorChange('jobTitle', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('jobTitle', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.jobTitle.sizeOffset > 0 ? '+' : ''}{textStyleConfig.jobTitle.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('jobTitle', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.company.trim() && (
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.company}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('company', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.company.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.company.color || styleConfig.textColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('company', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.company.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.company.color || styleConfig.textColor}
                          onChange={(e) => handleTextStyleColorChange('company', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('company', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.company.sizeOffset > 0 ? '+' : ''}{textStyleConfig.company.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('company', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && (
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.contact}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('contact', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.contact.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.contact.color || styleConfig.textColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('contact', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.contact.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.contact.color || styleConfig.textColor}
                          onChange={(e) => handleTextStyleColorChange('contact', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('contact', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.contact.sizeOffset > 0 ? '+' : ''}{textStyleConfig.contact.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('contact', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {Object.values(config.socials).some((url) => url.trim()) && (
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.socials}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('socials', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.socials.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.socials.color || styleConfig.accentColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('socials', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.socials.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.socials.color || styleConfig.accentColor}
                          onChange={(e) => handleTextStyleColorChange('socials', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('socials', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.socials.sizeOffset > 0 ? '+' : ''}{textStyleConfig.socials.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('socials', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.legalNote.trim() && (
                  <div className="border-t border-neutral-200 pt-3 space-y-2">
                    <p className="text-xs! font-semibold text-light uppercase">{t.textStyle.legal}</p>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.color}:</span>
                      <button
                        type="button"
                        onClick={() => handleTextStyleColorChange('legal', null)}
                        className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100"
                        title="Reset"
                      >
                        <RiRefreshLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <div
                        className={`h-7 w-7 rounded border-2 ${textStyleConfig.legal.color === null ? 'border-neutral-800' : 'border-neutral-300'}`}
                        style={{ backgroundColor: textStyleConfig.legal.color || styleConfig.textColor }}
                      />
                      {textStyleConfig.customColors.map((color) => (
                        <button
                          key={color}
                          type="button"
                          onClick={() => handleTextStyleColorChange('legal', color)}
                          className={`h-7 w-7 rounded border-2 ${textStyleConfig.legal.color === color ? 'border-neutral-800' : 'border-neutral-300'}`}
                          style={{ backgroundColor: color }}
                        />
                      ))}
                      <div className="relative">
                        <input
                          type="color"
                          value={textStyleConfig.legal.color || styleConfig.textColor}
                          onChange={(e) => handleTextStyleColorChange('legal', e.target.value)}
                          className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                        />
                        <div className="h-7 w-7 rounded border border-dashed border-neutral-400 flex items-center justify-center cursor-pointer hover:border-neutral-600">
                          <RiAddLine className="h-3.5 w-3.5 text-neutral-500" />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs! text-light w-12">{t.textStyle.size}:</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('legal', -2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zmniejsz rozmiar">
                        <RiSubtractLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{textStyleConfig.legal.sizeOffset > 0 ? '+' : ''}{textStyleConfig.legal.sizeOffset}</span>
                      <button type="button" onClick={() => handleTextStyleSizeChange('legal', 2)} className="rounded-md border border-neutral-300 p-1.5 hover:bg-neutral-100" aria-label="Zwiększ rozmiar">
                        <RiAddLine className="h-3.5 w-3.5 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activePanel === 'spacing' && (
              <div className="space-y-4">
                <div>
                  <Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">
                    {t.spacing.title}
                  </Eyebrow>
                  <p className="text-xs! text-light mb-3">{t.spacing.helper}</p>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.spacing.padding}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['small', 'medium', 'large'] as MarginOption[]).map((option) => (
                      <Badge
                        key={option}
                        onClick={() => handleStyleChange('padding', option)}
                        as="button"
                        type="button"
                        size="sm"
                        variant={styleConfig.padding === option ? 'selected' : 'default'}
                        className={`px-3 py-1 text-xs! font-medium ${styleConfig.padding === option ? '' : 'hover:border-neutral-500'}`}
                      >
                        {option === 'small' && '8 px'}
                        {option === 'medium' && '16 px'}
                        {option === 'large' && '24 px'}
                      </Badge>
                    ))}
                  </div>
                </div>

                {config.fullName.trim() && LAYOUT_SPACING_MAP[layout].includes('afterName') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterName}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterName', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterName} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterName', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.jobTitle.trim() || config.company.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterTitle') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterTitle}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterTitle', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterTitle} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterTitle', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.extraLine.trim() && LAYOUT_SPACING_MAP[layout].includes('afterExtra') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterExtra}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterExtra', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterExtra} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterExtra', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterContact') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterContact}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterContact', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterContact} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterContact', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {Object.values(config.socials).some((url) => url.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterSocials') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterSocials}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterSocials', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterSocials} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterSocials', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.ctaLabel.trim() && config.ctaUrl.trim() && LAYOUT_SPACING_MAP[layout].includes('afterCta') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.afterCta}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterCta', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterCta} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterCta', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}

                {config.legalNote.trim() && LAYOUT_SPACING_MAP[layout].includes('beforeLegal') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="text-sm! text-mid">{t.spacing.beforeLegal}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('beforeLegal', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="h-4 w-4 text-slate-800" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.beforeLegal} px</span>
                      <button type="button" onClick={() => handleSpacingChange('beforeLegal', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="h-4 w-4 text-slate-800" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activePanel === 'legal' && (
              <div className="space-y-3">
                <Eyebrow variant="dynamic" className="text-xs! font-semibold">
                  {t.legal.title}
                </Eyebrow>
                <textarea
                  value={config.legalNote}
                  onChange={(e) => handleTextChange('legalNote', e.target.value)}
                  className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-xs! focus:border-neutral-800 focus:outline-none"
                  rows={6}
                  placeholder={t.legal.placeholder}
                />
                <div className="flex items-center gap-2 pt-2">
                  <input
                    id="divider-toggle"
                    type="checkbox"
                    checked={styleConfig.showDivider}
                    onChange={(e) => handleStyleChange('showDivider', e.target.checked)}
                    className="h-4! w-4! rounded border-neutral-300"
                  />
                  <label htmlFor="divider-toggle" className="text-sm! text-mid">
                    {t.legal.showDivider}
                  </label>
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="tool-section flex min-h-[620px] flex-col space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="h6">{t.preview.title}</h2>
              <p className="text-xs! text-light">{t.preview.helper}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-4">
            <div className="mx-auto max-w-full overflow-x-auto">
              <div className="inline-block rounded-xl border border-neutral-200 bg-white px-4 py-4 text-sm!">
                <div dangerouslySetInnerHTML={{ __html: signatureHtml }} />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="accent" size="small" disabled={!hasRequired} onClick={handleCopyToGmail} className="disabled:opacity-60">
              {copyStatus === 'success' ? t.preview.copySuccess : copyStatus === 'error' ? t.preview.copyError : t.preview.copyButton}
            </Button>
            <Button type="button" variant="normal" size="small" onClick={() => setShowResetModal(true)}>
              {t.preview.resetButton}
            </Button>
          </div>

          <ConfirmModal
            isOpen={showResetModal}
            onClose={() => setShowResetModal(false)}
            onConfirm={handleReset}
            title={t.preview.resetModalTitle}
            description={t.preview.resetModalDescription}
          />

          {!hasRequired && (
            <p className="text-xs! text-light">{t.preview.requiredFields}</p>
          )}
        </section>
      </div>
    </div>
  );
}


