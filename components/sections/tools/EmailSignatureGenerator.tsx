'use client';

import Button from '@/components/ui/buttons/Button';
import PillButton from '@/components/ui/tools/PillButton';
import { downloadBlob } from '@/utils/download';
import { buildSignatureHtml } from '@/lib/tools/email/buildSignatureHtml';
import { exportSignatureAsHtml } from '@/lib/tools/email/exportSignature';
import { useCopyToClipboard } from '@/hooks/useCopyToClipboard';
import TextStyleRow from '@/components/sections/tools/EmailSignatureGenerator/TextStyleRow';
import IdentityPanel from '@/components/sections/tools/EmailSignatureGenerator/panels/IdentityPanel';
import ButtonsPanel from '@/components/sections/tools/EmailSignatureGenerator/panels/ButtonsPanel';
import SocialPanel from '@/components/sections/tools/EmailSignatureGenerator/panels/SocialPanel';
import AppearancePanel from '@/components/sections/tools/EmailSignatureGenerator/panels/AppearancePanel';
import SpacingPanel from '@/components/sections/tools/EmailSignatureGenerator/panels/SpacingPanel';
import LegalPanel from '@/components/sections/tools/EmailSignatureGenerator/panels/LegalPanel';
import type { ActivePanel, LayoutType, SignatureConfig, SocialKey, SpacingConfig, SpacingKey, StyleConfig, TextElementKey, TextStyleConfig } from '@/types/tools/email';
import { ui } from '@/lib/i18n/tools/email-signature';
import {
  STORAGE_KEY_BASE,
  DEFAULT_STYLE,
  DEFAULT_SPACING,
  DEFAULT_TEXT_STYLE,
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
  const { status: copyStatus, copyHtml: copyToGmail } = useCopyToClipboard(3000);
  const { status: copyRawStatus, copy: copyRaw } = useCopyToClipboard(3000);
  const [previewBg, setPreviewBg] = useState<'light' | 'dark' | 'checker'>('light');
  const [activePanel, setActivePanel] = useState<ActivePanel>('identity');
  const [layout, setLayout] = useState<LayoutType>('standard');
  const [themeId, setThemeId] = useState<string>('classic-dark');
  const [showResetModal, setShowResetModal] = useState(false);
  const [showSourceModal, setShowSourceModal] = useState(false);
  const { status: sourceModalCopyStatus, copy: copySource } = useCopyToClipboard(3000);
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
    copyRaw(signatureHtml);
  }

  function handleDownloadHtml() {
    exportSignatureAsHtml(signatureHtml);
  }

  function handleExportConfig() {
    const data = JSON.stringify({ config, styleConfig, spacingConfig, textStyleConfig, layout }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    downloadBlob(blob, 'email-signature-config.json');
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
              <PillButton value="standard" current={layout} label={t.layouts.standard} onChange={setLayout} />
              <PillButton value="top-banner" current={layout} label={t.layouts.topBanner} onChange={setLayout} />
              <PillButton value="label-column" current={layout} label={t.layouts.labelColumn} onChange={setLayout} />
              <PillButton value="centered" current={layout} label={t.layouts.centered} onChange={setLayout} />
              <PillButton value="compact" current={layout} label={t.layouts.compact} onChange={setLayout} />
              <PillButton value="two-column" current={layout} label={t.layouts.twoColumn} onChange={setLayout} />
              <PillButton value="minimal" current={layout} label={t.layouts.minimal} onChange={setLayout} />
              <PillButton value="bottom-bar" current={layout} label={t.layouts.bottomBar} onChange={setLayout} />
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
            {activePanel === 'identity' && <IdentityPanel config={config} styleConfig={styleConfig} onTextChange={handleTextChange} onStyleChange={handleStyleChange} t={t} />}

            {activePanel === 'buttons' && <ButtonsPanel config={config} styleConfig={styleConfig} onTextChange={handleTextChange} onStyleChange={handleStyleChange} t={t} />}

            {activePanel === 'social' && <SocialPanel config={config} styleConfig={styleConfig} onSocialChange={handleSocialChange} onStyleChange={handleStyleChange} t={t} />}

            {activePanel === 'appearance' && (
              <AppearancePanel styleConfig={styleConfig} themeId={themeId} themePresets={themePresets} onStyleChange={handleStyleChange} onApplyTheme={applyTheme} t={t} />
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
              <SpacingPanel config={config} styleConfig={styleConfig} spacingConfig={spacingConfig} layout={layout} onStyleChange={handleStyleChange} onSpacingChange={handleSpacingChange} t={t} />
            )}

            {activePanel === 'legal' && <LegalPanel config={config} styleConfig={styleConfig} onTextChange={handleTextChange} onStyleChange={handleStyleChange} t={t} />}
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
              className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4"
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
                      copySource(signatureHtml);
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
