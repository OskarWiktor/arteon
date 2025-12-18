'use client';

import Button from '@/components/ui/buttons/Button';
import Badge from '@/components/ui/Badge';
import Eyebrow from '@/components/ui/typography/Eyebrow';
import { buildSignatureHtml } from '@/components/sections/tools/EmailSignatureGenerator/buildSignatureHtml';
import { useSignatureCopy } from '@/components/sections/tools/EmailSignatureGenerator/useSignatureCopy';
import type {
  ActivePanel,
  CtaRadiusOption,
  FontSizeOption,
  LayoutType,
  MarginOption,
  SignatureConfig,
  SocialKey,
  StyleConfig,
  ThemePreset,
} from '@/components/sections/tools/EmailSignatureGenerator/types';
import { rgbToHex } from '@/lib/tools/color/convert';
import { useMemo, useState, type ReactNode } from 'react';
import { RiUser3Line, RiMailLine, RiShareLine, RiPaletteLine, RiFileTextLine, RiLayout3Line } from 'react-icons/ri';

const ui = {
  pl: {
    layoutLabel: 'Układ stopki',
    moreLayoutsSoon: 'Wkrótce kolejne gotowe układy.',
    layouts: {
      standard: 'Standard',
      accentBar: 'Pasek akcentu',
      topBanner: 'Pasek u góry',
      labelColumn: 'Etykiety z lewej',
      centered: 'Wyśrodkowany',
    },
    editorTitle: 'Edytor stopki HTML',
    panels: {
      identity: 'Dane',
      cta: 'Link',
      social: 'Media społecznościowe',
      appearance: 'Wygląd',
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
    cta: {
      title: 'Przycisk CTA',
      label: 'Tekst przycisku',
      labelPlaceholder: 'Umów bezpłatną konsultację',
      url: 'Link CTA',
      urlPlaceholder: 'https://kalendarz.pl/twoje-spotkania',
      helper: 'Jeśli pole tekstu lub linku pozostanie puste, przycisk nie pojawi się w stopce.',
    },
    social: {
      title: 'Media społecznościowe',
      helper: 'Linki są opcjonalne - w stopce pojawią się tylko te serwisy, które mają uzupełniony adres URL (bez ikon, sama nazwa serwisu).',
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
      ctaRadius: 'Zaokrąglenie przycisku CTA',
      ctaRadiusNone: 'Brak',
      ctaRadiusSmall: 'Lekkie',
      ctaRadiusFull: 'Pełne',
      showDivider: 'Pokaż linię oddzielającą dane od klauzuli',
    },
    legal: {
      title: 'Klauzula prawna / RODO',
      placeholder: 'Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość.',
    },
    preview: {
      title: 'Podgląd stopki mailowej',
      helper: 'Podgląd techniczny - zgodny z Gmail, Outlook i większością klientów pocztowych.',
      copySuccess: 'Skopiowano - wklej w Gmailu',
      copyError: 'Błąd kopiowania',
      copyButton: 'Kopiuj stopkę (Gmail / Outlook)',
      requiredFields: 'Aby skopiować stopkę, uzupełnij przynajmniej imię i nazwisko oraz e-mail.',
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
      className={`flex items-center gap-2 rounded-md border px-3 py-1.5 text-[14px]! ${isActive ? 'bg-slate-600 text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
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
  const { copyStatus, copyToGmail } = useSignatureCopy();
  const [activePanel, setActivePanel] = useState<ActivePanel>('identity');
  const [layout, setLayout] = useState<LayoutType>('standard');
  const [themeId, setThemeId] = useState<string>('classic-dark');

  const hasRequired = config.fullName.trim().length > 0 && config.email.trim().length > 0;

  const signatureHtml = useMemo(() => buildSignatureHtml(config, styleConfig, layout, SIGNATURE_LABELS), [config, styleConfig, layout]);

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

  return (
    <div className="space-y-4">
      <section className="tool-section flex flex-wrap items-center justify-between gap-3 p-4!">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <RiLayout3Line className="text-base text-slate-700" />
            <Eyebrow variant="dynamic" className="text-xs! font-semibold">
              {t.layoutLabel}
            </Eyebrow>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'accent-bar', 'top-banner', 'label-column', 'centered'] as LayoutType[]).map((lt) => (
                <Badge key={lt} as="button" type="button" onClick={() => setLayout(lt)} variant={layout === lt ? 'selected' : 'default'} size="sm">
                  {lt === 'standard' && t.layouts.standard}
                  {lt === 'accent-bar' && t.layouts.accentBar}
                  {lt === 'top-banner' && t.layouts.topBanner}
                  {lt === 'label-column' && t.layouts.labelColumn}
                  {lt === 'centered' && t.layouts.centered}
                </Badge>
              ))}
            </div>
          </div>
        </div>
        <p className="text-light text-xs!">{t.moreLayoutsSoon}</p>
      </section>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <section className="tool-section flex min-h-[620px] flex-col space-y-4">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="h6">{t.editorTitle}</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <PanelButton id="identity" current={activePanel} onClick={setActivePanel} icon={<RiUser3Line className="text-base" />} label={t.panels.identity} />
            <PanelButton id="cta" current={activePanel} onClick={setActivePanel} icon={<RiShareLine className="text-base" />} label={t.panels.cta} />
            <PanelButton id="social" current={activePanel} onClick={setActivePanel} icon={<RiMailLine className="text-base" />} label={t.panels.social} />
            <PanelButton id="appearance" current={activePanel} onClick={setActivePanel} icon={<RiPaletteLine className="text-base" />} label={t.panels.appearance} />
            <PanelButton id="legal" current={activePanel} onClick={setActivePanel} icon={<RiFileTextLine className="text-base" />} label={t.panels.legal} />
          </div>

          <div className="mt-3 space-y-4 text-sm!">
            {activePanel === 'identity' && (
              <div className="space-y-3">
                <Eyebrow variant="dynamic" className="text-xs! font-semibold">
                  {t.identity.title}
                </Eyebrow>

                <div>
                  <label className="mb-1 block">
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.topLine}</span>
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
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.avatar}</span>
                  </label>
                  <input
                    type="url"
                    value={config.avatarUrl}
                    onChange={(e) => handleTextChange('avatarUrl', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.avatarPlaceholder}
                  />
                  <p className="text-light mt-1 text-xs!">{t.identity.avatarHelper}</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="text-light text-xs! font-semibold uppercase">{t.identity.fullName}</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">{t.identity.nameTag}</span>
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
                    <label className="text-light mb-1 block text-xs! font-semibold uppercase">{t.identity.jobTitle}</label>
                    <input
                      type="text"
                      value={config.jobTitle}
                      onChange={(e) => handleTextChange('jobTitle', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder={t.identity.jobTitlePlaceholder}
                    />
                  </div>
                  <div>
                    <label className="text-light mb-1 block text-xs! font-semibold uppercase">{t.identity.company}</label>
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
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.extraLine}</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">{t.identity.email}</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">{t.identity.phone}</span>
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
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.website}</span>
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
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.address}</span>
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
                    <span className="text-light text-xs! font-semibold uppercase">{t.identity.formalLine}</span>
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

            {activePanel === 'cta' && (
              <div className="space-y-4">
                <div>
                  <Eyebrow variant="dynamic" className="mb-2 text-xs! font-semibold">
                    {t.cta.title}
                  </Eyebrow>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-semibold uppercase">{t.cta.label}</span>
                      </label>
                      <input
                        type="text"
                        value={config.ctaLabel}
                        onChange={(e) => handleTextChange('ctaLabel', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.cta.labelPlaceholder}
                      />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="text-light text-xs! font-semibold uppercase">{t.cta.url}</span>
                      </label>
                      <input
                        type="url"
                        value={config.ctaUrl}
                        onChange={(e) => handleTextChange('ctaUrl', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder={t.cta.urlPlaceholder}
                      />
                    </div>
                  </div>
                  <p className="text-light mt-1 text-xs!">{t.cta.helper}</p>
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
                      <span className="text-light text-xs! font-semibold uppercase">LinkedIn</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">Instagram</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">Facebook</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">TikTok</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">YouTube</span>
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
                      <span className="text-light text-xs! font-semibold uppercase">X (Twitter)</span>
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
                <p className="text-light text-xs!">{t.social.helper}</p>
              </div>
            )}

            {activePanel === 'appearance' && (
              <div className="space-y-4">
                <div>
                  <Eyebrow variant="dynamic" className="mb-2 text-xs! font-semibold">
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
                    <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.accentColor}</p>
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
                    <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.textColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.textColor} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="h-9 w-9 cursor-pointer border-none bg-white p-0!" />
                    </div>
                  </div>
                  <div>
                    <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.backgroundColor}</p>
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
                    <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.fontFamily}</p>
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
                    <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.fontSize}</p>
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
                  <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.padding}</p>
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

                <div>
                  <p className="text-light mb-1 text-xs! font-semibold uppercase">{t.appearance.ctaRadius}</p>
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
                        {option === 'none' && t.appearance.ctaRadiusNone}
                        {option === 'small' && t.appearance.ctaRadiusSmall}
                        {option === 'full' && t.appearance.ctaRadiusFull}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    id="divider-toggle"
                    type="checkbox"
                    checked={styleConfig.showDivider}
                    onChange={(e) => handleStyleChange('showDivider', e.target.checked)}
                    className="h-4! w-4! rounded border-neutral-300"
                  />
                  <label htmlFor="divider-toggle" className="text-mid text-sm!">
                    {t.appearance.showDivider}
                  </label>
                </div>
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
              </div>
            )}
          </div>
        </section>

        <section className="tool-section flex min-h-[620px] flex-col space-y-4">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="h6">{t.preview.title}</h2>
              <p className="text-light text-xs!">{t.preview.helper}</p>
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
          </div>

          {!hasRequired && <p className="text-light text-xs!">{t.preview.requiredFields}</p>}
        </section>
      </div>
    </div>
  );
}
