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
} from '@/components/sections/tools/EmailSignatureGenerator/types';
import { ui } from '@/components/sections/tools/EmailSignatureGenerator/ui';
import {
  STORAGE_KEY_BASE,
  DEFAULT_STYLE,
  DEFAULT_SPACING,
  DEFAULT_TEXT_STYLE,
  LAYOUT_SPACING_MAP,
  FONT_OPTIONS,
  getSignatureLabels,
  getDefaultSignature,
  getThemePresets,
} from '@/components/sections/tools/EmailSignatureGenerator/constants';
import ToolButton from '@/components/ui/tools/ToolButton';
import { useEffect, useMemo, useState } from 'react';
import ConfirmModal from '@/components/ui/ConfirmModal';
import {
  RiUser3Line,
  RiMailLine,
  RiShareLine,
  RiPaletteLine,
  RiFileTextLine,
  RiLayout3Line,
  RiSpace,
  RiAddLine,
  RiSubtractLine,
  RiFontSize2,
  RiDeleteBinLine,
  RiDownloadLine,
  RiCodeLine,
  RiSunLine,
  RiMoonLine,
  RiGridLine,
  RiEyeLine,
  RiCloseLine,
  RiUploadLine,
  RiShareForwardLine,
} from 'react-icons/ri';
import { useLocale } from '@/lib/LocaleContext';

export default function EmailSignatureGenerator() {
  const locale = useLocale();
  const t = ui[locale];
  const defaultSignature = useMemo(() => getDefaultSignature(locale), [locale]);
  const [config, setConfig] = useState<SignatureConfig>(defaultSignature);
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
      const storageKey = `${STORAGE_KEY_BASE}-${locale}`;
      const saved = localStorage.getItem(storageKey);
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
  }, [locale]);

  useEffect(() => {
    if (!isHydrated) return;
    try {
      const data = { config, styleConfig, spacingConfig, textStyleConfig, layout, themeId };
      const storageKey = `${STORAGE_KEY_BASE}-${locale}`;
      localStorage.setItem(storageKey, JSON.stringify(data));
    } catch {
      // Ignore localStorage errors
    }
  }, [config, styleConfig, spacingConfig, textStyleConfig, layout, themeId, isHydrated, locale]);

  const hasRequired = config.fullName.trim().length > 0 && config.email.trim().length > 0;

  const signatureLabels = useMemo(() => getSignatureLabels(locale), [locale]);
  const themePresets = useMemo(() => getThemePresets(locale), [locale]);

  const signatureHtml = useMemo(
    () => buildSignatureHtml(config, styleConfig, spacingConfig, layout, signatureLabels, textStyleConfig),
    [config, styleConfig, spacingConfig, layout, signatureLabels, textStyleConfig],
  );

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
    const preset = themePresets.find((p) => p.id === presetId);
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
        } catch {
          /* ignore invalid JSON */
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }

  function handleReset() {
    setConfig(defaultSignature);
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
            <RiLayout3Line className="text-primary text-base" />
            <span className="tool-value">{t.layoutLabel}</span>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'top-banner', 'label-column', 'centered', 'compact', 'two-column', 'minimal', 'bottom-bar'] as LayoutType[]).map((lt) => (
                <button key={lt} type="button" onClick={() => setLayout(lt)} className={`tool-button ${layout === lt ? 'tool-button-active' : 'tool-button-inactive'}`}>
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
        <p className="tool-meta">{t.moreLayoutsSoon}</p>
      </section>

      <section className="tool-section flex flex-wrap items-center gap-3 p-4!">
        <div className="flex items-center gap-2">
          <span className="tool-value">{t.editorTitle}</span>
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
                <span className="tool-value">{t.identity.title}</span>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.topLine}</span>
                  </label>
                  <input type="text" value={config.topLine} onChange={(e) => handleTextChange('topLine', e.target.value)} className="tool-input" placeholder={t.identity.topLinePlaceholder} />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.avatar}</span>
                  </label>
                  <input type="url" value={config.avatarUrl} onChange={(e) => handleTextChange('avatarUrl', e.target.value)} className="tool-input" placeholder={t.identity.avatarPlaceholder} />
                  <p className="tool-meta mt-1">{t.identity.avatarHelper}</p>
                  {config.avatarUrl.trim() && (
                    <div className="mt-3 space-y-3">
                      <div>
                        <p className="tool-label mb-1">{t.identity.avatarShape}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['circle', 'rounded', 'square'] as const).map((shape) => (
                            <button
                              key={shape}
                              type="button"
                              onClick={() => handleStyleChange('avatarShape', shape)}
                              className={`tool-button ${styleConfig.avatarShape === shape ? 'tool-button-active' : 'tool-button-inactive'}`}
                            >
                              {shape === 'circle' && t.identity.avatarShapeCircle}
                              {shape === 'rounded' && t.identity.avatarShapeRounded}
                              {shape === 'square' && t.identity.avatarShapeSquare}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="tool-label mb-1">{t.identity.avatarSize}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleStyleChange('avatarSize', size)}
                              className={`tool-button ${styleConfig.avatarSize === size ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                      <span className="tool-label">{t.identity.fullName}</span>
                    </label>
                    <input type="text" value={config.fullName} onChange={(e) => handleTextChange('fullName', e.target.value)} className="tool-input" placeholder={t.identity.fullNamePlaceholder} />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">{t.identity.nameTag}</span>
                    </label>
                    <input type="text" value={config.nameTag} onChange={(e) => handleTextChange('nameTag', e.target.value)} className="tool-input" placeholder={t.identity.nameTagPlaceholder} />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="tool-label mb-1 block">{t.identity.jobTitle}</label>
                    <input type="text" value={config.jobTitle} onChange={(e) => handleTextChange('jobTitle', e.target.value)} className="tool-input" placeholder={t.identity.jobTitlePlaceholder} />
                  </div>
                  <div>
                    <label className="tool-label mb-1 block">{t.identity.company}</label>
                    <input type="text" value={config.company} onChange={(e) => handleTextChange('company', e.target.value)} className="tool-input" placeholder={t.identity.companyPlaceholder} />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.extraLine}</span>
                  </label>
                  <input type="text" value={config.extraLine} onChange={(e) => handleTextChange('extraLine', e.target.value)} className="tool-input" placeholder={t.identity.extraLinePlaceholder} />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">{t.identity.email}</span>
                    </label>
                    <input type="email" value={config.email} onChange={(e) => handleTextChange('email', e.target.value)} className="tool-input" placeholder={t.identity.emailPlaceholder} />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">{t.identity.phone}</span>
                    </label>
                    <input type="tel" value={config.phone} onChange={(e) => handleTextChange('phone', e.target.value)} className="tool-input" placeholder={t.identity.phonePlaceholder} />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.website}</span>
                  </label>
                  <input type="url" value={config.website} onChange={(e) => handleTextChange('website', e.target.value)} className="tool-input" placeholder={t.identity.websitePlaceholder} />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.address}</span>
                  </label>
                  <textarea value={config.address} onChange={(e) => handleTextChange('address', e.target.value)} className="tool-input" rows={2} placeholder={t.identity.addressPlaceholder} />
                </div>

                <div>
                  <label className="mb-1 block">
                    <span className="tool-label">{t.identity.formalLine}</span>
                  </label>
                  <textarea value={config.formalLine} onChange={(e) => handleTextChange('formalLine', e.target.value)} className="tool-input" rows={2} placeholder={t.identity.formalLinePlaceholder} />
                </div>
              </div>
            )}

            {activePanel === 'buttons' && (
              <div className="space-y-4">
                <span className="tool-value">{t.buttons.title}</span>

                <div>
                  <p className="tool-label mb-2">{t.buttons.cta1Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="tool-label">{t.buttons.label}</span>
                      </label>
                      <input type="text" value={config.ctaLabel} onChange={(e) => handleTextChange('ctaLabel', e.target.value)} className="tool-input" placeholder={t.buttons.labelPlaceholder} />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="tool-label">{t.buttons.url}</span>
                      </label>
                      <input type="url" value={config.ctaUrl} onChange={(e) => handleTextChange('ctaUrl', e.target.value)} className="tool-input" placeholder={t.buttons.urlPlaceholder} />
                    </div>
                  </div>
                  <p className="tool-meta mt-1">{t.buttons.helper}</p>
                </div>

                <div>
                  <p className="tool-label mb-2">{t.buttons.cta2Title}</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <span className="tool-label">{t.buttons.cta2Label}</span>
                      </label>
                      <input type="text" value={config.cta2Label} onChange={(e) => handleTextChange('cta2Label', e.target.value)} className="tool-input" placeholder={t.buttons.cta2LabelPlaceholder} />
                    </div>
                    <div>
                      <label className="mb-1 block">
                        <span className="tool-label">{t.buttons.cta2Url}</span>
                      </label>
                      <input type="url" value={config.cta2Url} onChange={(e) => handleTextChange('cta2Url', e.target.value)} className="tool-input" placeholder={t.buttons.cta2UrlPlaceholder} />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="tool-label mb-1">{t.buttons.ctaRadius}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['none', 'small', 'full'] as CtaRadiusOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('ctaRadius', option)}
                        className={`tool-button ${styleConfig.ctaRadius === option ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                <span className="tool-value">{t.social.title}</span>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">LinkedIn</span>
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
                      <span className="tool-label">Instagram</span>
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
                      <span className="tool-label">Facebook</span>
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
                      <span className="tool-label">TikTok</span>
                    </label>
                    <input type="url" value={config.socials.tiktok} onChange={(e) => handleSocialChange('tiktok', e.target.value)} className="tool-input" placeholder="https://www.tiktok.com/@..." />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">YouTube</span>
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
                      <span className="tool-label">X (Twitter)</span>
                    </label>
                    <input type="url" value={config.socials.x} onChange={(e) => handleSocialChange('x', e.target.value)} className="tool-input" placeholder="https://x.com/..." />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">GitHub</span>
                    </label>
                    <input type="url" value={config.socials.github} onChange={(e) => handleSocialChange('github', e.target.value)} className="tool-input" placeholder="https://github.com/..." />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">Dribbble</span>
                    </label>
                    <input type="url" value={config.socials.dribbble} onChange={(e) => handleSocialChange('dribbble', e.target.value)} className="tool-input" placeholder="https://dribbble.com/..." />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">Behance</span>
                    </label>
                    <input type="url" value={config.socials.behance} onChange={(e) => handleSocialChange('behance', e.target.value)} className="tool-input" placeholder="https://www.behance.net/..." />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">WhatsApp</span>
                    </label>
                    <input type="url" value={config.socials.whatsapp} onChange={(e) => handleSocialChange('whatsapp', e.target.value)} className="tool-input" placeholder="https://wa.me/48..." />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">Telegram</span>
                    </label>
                    <input type="url" value={config.socials.telegram} onChange={(e) => handleSocialChange('telegram', e.target.value)} className="tool-input" placeholder="https://t.me/..." />
                  </div>
                  <div>
                    <label className="mb-1 block">
                      <span className="tool-label">Pinterest</span>
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
                    <label htmlFor="social-icons-toggle" className="tool-value">
                      {t.social.showIcons}
                    </label>
                  </div>

                  {styleConfig.socialIcons.showIcons && (
                    <>
                      <div>
                        <p className="tool-label mb-1">{t.social.iconSize}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['small', 'medium', 'large'] as const).map((size) => (
                            <button
                              key={size}
                              type="button"
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: size })}
                              className={`tool-button ${styleConfig.socialIcons.iconSize === size ? 'tool-button-active' : 'tool-button-inactive'}`}
                            >
                              {size === 'small' && t.social.iconSizeSmall}
                              {size === 'medium' && t.social.iconSizeMedium}
                              {size === 'large' && t.social.iconSizeLarge}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="tool-label mb-1">{t.social.iconColor}</p>
                        <div className="flex flex-wrap gap-2">
                          {(['platform', 'accent', 'text'] as const).map((mode) => (
                            <button
                              key={mode}
                              type="button"
                              onClick={() => handleStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: mode })}
                              className={`tool-button ${styleConfig.socialIcons.colorMode === mode ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                  <span className="tool-value mb-2">{t.appearance.themeTitle}</span>
                  <div className="flex flex-wrap gap-2">
                    {themePresets.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => applyTheme(preset.id)}
                        className={`tool-button gap-2 ${themeId === preset.id ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                    <p className="tool-label mb-1">{t.appearance.accentColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.accentColor} onChange={(e) => handleStyleChange('accentColor', e.target.value)} className="tool-color-picker h-9! w-9!" />
                    </div>
                  </div>
                  <div>
                    <p className="tool-label mb-1">{t.appearance.textColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.textColor} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="tool-color-picker h-9! w-9!" />
                    </div>
                  </div>
                  <div>
                    <p className="tool-label mb-1">{t.appearance.backgroundColor}</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.backgroundColor} onChange={(e) => handleStyleChange('backgroundColor', e.target.value)} className="tool-color-picker h-9! w-9!" />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <p className="tool-label mb-1">{t.appearance.fontFamily}</p>
                    <select value={styleConfig.fontFamily} onChange={(e) => handleStyleChange('fontFamily', e.target.value)} className="tool-select">
                      {FONT_OPTIONS.map((font) => (
                        <option key={font.value} value={font.value}>
                          {font.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="tool-label mb-1">{t.appearance.fontSize}</p>
                    <div className="flex flex-wrap gap-2">
                      {(['small', 'normal', 'large'] as FontSizeOption[]).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleStyleChange('fontSize', size)}
                          className={`tool-button ${styleConfig.fontSize === size ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                  <p className="tool-label mb-1">{t.border.label}</p>
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
                        <span className="tool-value">
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
                      className={`tool-button ${styleConfig.border.left && styleConfig.border.right && styleConfig.border.top && styleConfig.border.bottom ? 'tool-button-active' : 'tool-button-inactive'}`}
                    >
                      {t.border.full}
                    </button>
                    <button
                      type="button"
                      onClick={() => handleStyleChange('border', { left: false, right: false, top: false, bottom: false })}
                      className={`tool-button ${!styleConfig.border.left && !styleConfig.border.right && !styleConfig.border.top && !styleConfig.border.bottom ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                  <span className="tool-value mb-2">{t.textStyle.title}</span>
                  <p className="tool-meta mb-3">{t.textStyle.helper}</p>
                </div>

                <div>
                  <p className="tool-label mb-2">{t.textStyle.addColor}</p>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <input type="color" value={pendingCustomColor} onChange={(e) => setPendingCustomColor(e.target.value)} className="absolute inset-0 h-full w-full cursor-pointer opacity-0" />
                      <div className="h-8 w-8 cursor-pointer rounded border border-neutral-300" style={{ backgroundColor: pendingCustomColor }} />
                    </div>
                    <button type="button" onClick={() => addCustomColor(pendingCustomColor)} className="tool-button tool-button-inactive">
                      {t.textStyle.saveColor}
                    </button>
                  </div>
                </div>

                {textStyleConfig.customColors.length > 0 && (
                  <div>
                    <p className="tool-label mb-2">{t.textStyle.customColors}</p>
                    <div className="flex flex-wrap gap-2">
                      {textStyleConfig.customColors.map((color) => (
                        <div key={color} className="group relative">
                          <div className="h-8 w-8 rounded border border-neutral-300" style={{ backgroundColor: color }} title={color} />
                          <button
                            type="button"
                            onClick={() => removeCustomColor(color)}
                            className="bg-error-icon absolute -top-1.5 -right-1.5 hidden h-5 w-5 items-center justify-center rounded-full text-white group-hover:flex"
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
                  <TextStyleRow
                    elementKey="name"
                    label={t.textStyle.name}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.name.color}
                    defaultColor={styleConfig.accentColor}
                    sizeOffset={textStyleConfig.name.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}

                {config.jobTitle.trim() && (
                  <TextStyleRow
                    elementKey="jobTitle"
                    label={t.textStyle.jobTitle}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.jobTitle.color}
                    defaultColor={styleConfig.textColor}
                    sizeOffset={textStyleConfig.jobTitle.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}

                {config.company.trim() && (
                  <TextStyleRow
                    elementKey="company"
                    label={t.textStyle.company}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.company.color}
                    defaultColor={styleConfig.textColor}
                    sizeOffset={textStyleConfig.company.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && (
                  <TextStyleRow
                    elementKey="contact"
                    label={t.textStyle.contact}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.contact.color}
                    defaultColor={styleConfig.textColor}
                    sizeOffset={textStyleConfig.contact.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}

                {Object.values(config.socials).some((url) => url.trim()) && (
                  <TextStyleRow
                    elementKey="socials"
                    label={t.textStyle.socials}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.socials.color}
                    defaultColor={styleConfig.accentColor}
                    sizeOffset={textStyleConfig.socials.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}

                {config.legalNote.trim() && (
                  <TextStyleRow
                    elementKey="legal"
                    label={t.textStyle.legal}
                    colorLabel={t.textStyle.color}
                    sizeLabel={t.textStyle.size}
                    currentColor={textStyleConfig.legal.color}
                    defaultColor={styleConfig.textColor}
                    sizeOffset={textStyleConfig.legal.sizeOffset}
                    customColors={textStyleConfig.customColors}
                    onColorChange={handleTextStyleColorChange}
                    onSizeChange={handleTextStyleSizeChange}
                  />
                )}
              </div>
            )}

            {activePanel === 'spacing' && (
              <div className="space-y-4">
                <div>
                  <span className="tool-value mb-2">{t.spacing.title}</span>
                  <p className="tool-meta mb-3">{t.spacing.helper}</p>
                </div>

                <div>
                  <p className="tool-label mb-1">{t.spacing.padding}</p>
                  <div className="flex flex-wrap gap-2">
                    {(['small', 'medium', 'large'] as MarginOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('padding', option)}
                        className={`tool-button ${styleConfig.padding === option ? 'tool-button-active' : 'tool-button-inactive'}`}
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
                    <span className="tool-value">{t.spacing.afterName}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterName', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterName} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterName', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.jobTitle.trim() || config.company.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterTitle') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.afterTitle}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterTitle', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterTitle} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterTitle', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {config.extraLine.trim() && LAYOUT_SPACING_MAP[layout].includes('afterExtra') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.afterExtra}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterExtra', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterExtra} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterExtra', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {(config.email.trim() || config.phone.trim() || config.website.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterContact') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.afterContact}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterContact', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterContact} px</span>
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterContact', 2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zwiększ odstęp"
                      >
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {Object.values(config.socials).some((url) => url.trim()) && LAYOUT_SPACING_MAP[layout].includes('afterSocials') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.afterSocials}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterSocials', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterSocials} px</span>
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('afterSocials', 2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zwiększ odstęp"
                      >
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {config.ctaLabel.trim() && config.ctaUrl.trim() && LAYOUT_SPACING_MAP[layout].includes('afterCta') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.afterCta}</span>
                    <div className="flex items-center gap-1">
                      <button type="button" onClick={() => handleSpacingChange('afterCta', -2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zmniejsz odstęp">
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.afterCta} px</span>
                      <button type="button" onClick={() => handleSpacingChange('afterCta', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}

                {config.legalNote.trim() && LAYOUT_SPACING_MAP[layout].includes('beforeLegal') && (
                  <div className="flex items-center justify-between gap-2 py-1">
                    <span className="tool-value">{t.spacing.beforeLegal}</span>
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={() => handleSpacingChange('beforeLegal', -2)}
                        className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100"
                        aria-label="Zmniejsz odstęp"
                      >
                        <RiSubtractLine className="text-primary h-4 w-4" />
                      </button>
                      <span className="w-10 text-center text-xs! font-medium">{spacingConfig.beforeLegal} px</span>
                      <button type="button" onClick={() => handleSpacingChange('beforeLegal', 2)} className="rounded-md border border-neutral-300 p-1 hover:bg-neutral-100" aria-label="Zwiększ odstęp">
                        <RiAddLine className="text-primary h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activePanel === 'legal' && (
              <div className="space-y-3">
                <span className="tool-value">{t.legal.title}</span>
                <textarea value={config.legalNote} onChange={(e) => handleTextChange('legalNote', e.target.value)} className="tool-textarea text-xs!" rows={6} placeholder={t.legal.placeholder} />
                <div className="flex items-center gap-2 pt-2">
                  <input id="divider-toggle" type="checkbox" checked={styleConfig.showDivider} onChange={(e) => handleStyleChange('showDivider', e.target.checked)} className="tool-checkbox" />
                  <label htmlFor="divider-toggle" className="tool-value">
                    {t.legal.showDivider}
                  </label>
                </div>
                {styleConfig.showDivider && (
                  <div className="space-y-3 border-t border-neutral-200 pt-3">
                    <div>
                      <p className="tool-label mb-1">{t.legal.dividerStyle}</p>
                      <div className="flex flex-wrap gap-2">
                        {(['solid', 'dashed', 'dotted'] as const).map((ds) => (
                          <button
                            key={ds}
                            type="button"
                            onClick={() => handleStyleChange('dividerStyle', ds)}
                            className={`tool-button ${styleConfig.dividerStyle === ds ? 'tool-button-active' : 'tool-button-inactive'}`}
                          >
                            {ds === 'solid' && t.legal.dividerStyleSolid}
                            {ds === 'dashed' && t.legal.dividerStyleDashed}
                            {ds === 'dotted' && t.legal.dividerStyleDotted}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="tool-label mb-1">{t.legal.dividerWidth}</p>
                      <div className="flex flex-wrap gap-2">
                        {([1, 2, 3] as const).map((w) => (
                          <button
                            key={w}
                            type="button"
                            onClick={() => handleStyleChange('dividerWidth', w)}
                            className={`tool-button ${styleConfig.dividerWidth === w ? 'tool-button-active' : 'tool-button-inactive'}`}
                          >
                            {w} px
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="tool-label mb-1">{t.legal.dividerColor}</p>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => handleStyleChange('dividerColor', '')}
                          className={`tool-button ${!styleConfig.dividerColor ? 'tool-button-active' : 'tool-button-inactive'}`}
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
              <button
                type="button"
                onClick={() => setPreviewBg('light')}
                className={`rounded-md border p-1.5 ${previewBg === 'light' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                title={t.preview.bgLight}
              >
                <RiSunLine className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPreviewBg('dark')}
                className={`rounded-md border p-1.5 ${previewBg === 'dark' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                title={t.preview.bgDark}
              >
                <RiMoonLine className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setPreviewBg('checker')}
                className={`rounded-md border p-1.5 ${previewBg === 'checker' ? 'border-primary bg-primary text-white' : 'border-black/10 bg-white hover:bg-neutral-100'}`}
                title={t.preview.bgChecker}
              >
                <RiGridLine className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div
            className={`rounded-2xl border border-neutral-200 p-4 ${previewBg === 'dark' ? 'bg-neutral-800' : previewBg === 'checker' ? 'bg-white bg-[image:linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%),linear-gradient(45deg,#e5e7eb_25%,transparent_25%,transparent_75%,#e5e7eb_75%)] bg-[length:20px_20px] bg-[position:0_0,10px_10px]' : 'bg-neutral-50'}`}
          >
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
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/30 px-4 backdrop-blur-[1px]"
              onClick={(e) => {
                if (e.target === e.currentTarget) setShowSourceModal(false);
              }}
              role="dialog"
              aria-modal="true"
            >
              <div className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 shadow-xl ring-1 ring-black/5">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="h6">{t.preview.viewSourceTitle}</h3>
                  <button type="button" onClick={() => setShowSourceModal(false)} className="rounded-md p-1.5 hover:bg-neutral-100">
                    <RiCloseLine className="h-5 w-5" />
                  </button>
                </div>
                <pre className="max-h-[60vh] overflow-auto rounded-lg bg-neutral-50 p-4 text-xs! leading-relaxed break-all whitespace-pre-wrap">{signatureHtml}</pre>
                <div className="mt-4 flex gap-2">
                  <Button
                    type="button"
                    variant="accent"
                    size="small"
                    onClick={() => {
                      copyTextToClipboard(signatureHtml).then(() => {
                        setSourceModalCopyStatus('success');
                        setTimeout(() => setSourceModalCopyStatus('idle'), 3000);
                      });
                    }}
                  >
                    {sourceModalCopyStatus === 'success' ? t.preview.viewSourceCopied : t.preview.viewSourceCopy}
                  </Button>
                  <Button type="button" variant="normal" size="small" onClick={() => setShowSourceModal(false)}>
                    {t.preview.viewSourceClose}
                  </Button>
                </div>
              </div>
            </div>
          )}

          <ConfirmModal
            isOpen={showResetModal}
            onClose={() => setShowResetModal(false)}
            onConfirm={handleReset}
            title={t.preview.resetModalTitle}
            description={t.preview.resetModalDescription}
            confirmLabel={t.preview.resetConfirm}
            cancelLabel={t.preview.resetCancel}
          />

          {!hasRequired && <p className="text-light text-xs!">{t.preview.requiredFields}</p>}
        </section>
      </div>
    </div>
  );
}
