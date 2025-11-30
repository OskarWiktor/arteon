'use client';

import Button from '@/components/ui/Button';
import { useMemo, useState, type ReactNode } from 'react';
import { RiUser3Line, RiMailLine, RiShareLine, RiPaletteLine, RiFileTextLine, RiLayout3Line } from 'react-icons/ri';

type CopyStatus = 'idle' | 'success' | 'error';
type FontSizeOption = 'small' | 'normal' | 'large';
type MarginOption = 'small' | 'medium' | 'large';
type CtaRadiusOption = 'none' | 'small' | 'full';
type SocialKey = 'linkedin' | 'instagram' | 'facebook' | 'tiktok' | 'youtube' | 'x';
type ActivePanel = 'identity' | 'cta' | 'social' | 'appearance' | 'legal';
type LayoutType = 'standard' | 'accent-bar' | 'top-banner' | 'label-column' | 'centered';

interface SignatureConfig {
  fullName: string;
  jobTitle: string;
  company: string;
  topLine: string;
  nameTag: string;
  email: string;
  phone: string;
  website: string;
  address: string;
  extraLine: string;
  ctaLabel: string;
  ctaUrl: string;
  socials: Record<SocialKey, string>;
  legalNote: string;
  formalLine: string;
  avatarUrl: string;
}

interface StyleConfig {
  accentColor: string;
  textColor: string;
  backgroundColor: string;
  fontFamily: string;
  fontSize: FontSizeOption;
  padding: MarginOption;
  ctaRadius: CtaRadiusOption;
  showDivider: boolean;
}

interface PanelButtonProps {
  id: ActivePanel;
  current: ActivePanel;
  icon: ReactNode;
  label: string;
  onClick: (id: ActivePanel) => void;
}

interface ThemePreset {
  id: string;
  name: string;
  accentColor: string;
  textColor: string;
}

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

const DEFAULT_STYLE: StyleConfig = {
  accentColor: '#111827',
  textColor: '#111827',
  backgroundColor: '#ffffff',
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

const FONT_SIZE_MAP: Record<FontSizeOption, string> = {
  small: '12px',
  normal: '13px',
  large: '14px',
};

const PADDING_NUM_MAP: Record<MarginOption, number> = {
  small: 8,
  medium: 16,
  large: 24,
};

const PADDING_MAP: Record<MarginOption, string> = {
  small: '8px',
  medium: '16px',
  large: '24px',
};

const CTA_RADIUS_MAP: Record<CtaRadiusOption, string> = {
  none: '0px',
  small: '6px',
  full: '999px',
};

const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'classic-dark',
    name: 'Ciemny',
    accentColor: '#111827',
    textColor: '#111827',
  },
  {
    id: 'modern-blue',
    name: 'Niebieski',
    accentColor: '#2563eb',
    textColor: '#111827',
  },
  {
    id: 'creative-purple',
    name: 'Fioletowy',
    accentColor: '#7c3aed',
    textColor: '#111827',
  },
  {
    id: 'eco-green',
    name: 'Zielony',
    accentColor: '#16a34a',
    textColor: '#111827',
  },
  {
    id: 'minimal',
    name: 'Szary',
    accentColor: '#4b5563',
    textColor: '#111827',
  },
];

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

function formatMultiline(value: string): string {
  return escapeHtml(value).replace(/\n/g, '<br />');
}

function normalizeUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

function formatPhone(phone: string): string {
  return phone.trim();
}

function buildSignatureHtml(config: SignatureConfig, style: StyleConfig, layout: LayoutType): string {
  const fontFamily = style.fontFamily || 'Arial, sans-serif';
  const baseFontSize = FONT_SIZE_MAP[style.fontSize] || FONT_SIZE_MAP.normal;
  const accentColor = style.accentColor || '#111827';
  const textColor = style.textColor || '#111827';
  const backgroundColor = style.backgroundColor || '#ffffff';

  const paddingPx = PADDING_NUM_MAP[style.padding] ?? 16;
  const paddingAll = PADDING_MAP[style.padding] ?? '16px';
  const paddingLeftAccent = `${paddingPx + 8}px`;
  const ctaBorderRadius = CTA_RADIUS_MAP[style.ctaRadius] ?? '999px';

  const hasTopLine = config.topLine.trim().length > 0;
  const hasAddress = config.address.trim().length > 0;
  const hasExtraLine = config.extraLine.trim().length > 0;
  const hasCompany = config.company.trim().length > 0;
  const hasJobTitle = config.jobTitle.trim().length > 0;
  const hasNameTag = config.nameTag.trim().length > 0;
  const hasFormalLine = config.formalLine.trim().length > 0;
  const hasAvatar = config.avatarUrl.trim().length > 0;

  const avatarSize = 56;
  const avatarImg = hasAvatar ? `<img src="${escapeHtml(config.avatarUrl.trim())}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;display:block;" />` : '';
  const avatarCellInline = hasAvatar ? `<td style="padding-right:12px;vertical-align:top;">${avatarImg}</td>` : '';

  const telLabel = 'Tel.';
  const mailLabel = 'E-mail';
  const webLabel = 'Strona';

  const contactItems: string[] = [];

  if (config.phone.trim()) {
    const phone = formatPhone(config.phone);
    contactItems.push(
      `<span style="margin-right:12px;white-space:nowrap;"><span style="font-weight:bold;">${telLabel}:</span> <a href="tel:${escapeHtml(
        phone,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(phone)}</a></span>`,
    );
  }
  if (config.email.trim()) {
    const email = config.email.trim();
    contactItems.push(
      `<span style="margin-right:12px;white-space:nowrap;"><span style="font-weight:bold;">${mailLabel}:</span> <a href="mailto:${escapeHtml(
        email,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(email)}</a></span>`,
    );
  }
  if (config.website.trim()) {
    const normalized = normalizeUrl(config.website);
    contactItems.push(
      `<span style="white-space:nowrap;"><span style="font-weight:bold;">${webLabel}:</span> <a href="${escapeHtml(
        normalized,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(normalized)}</a></span>`,
    );
  }

  const socials: { key: SocialKey; label: string }[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'x', label: 'X' },
  ];

  const socialLinks = socials
    .filter((s) => config.socials[s.key] && config.socials[s.key]?.trim().length)
    .map((s) => {
      const url = normalizeUrl(config.socials[s.key]);
      return `<a href="${escapeHtml(url)}" style="display:inline-block;margin-right:10px;margin-bottom:2px;color:${accentColor};text-decoration:none;font-size:${baseFontSize};">${s.label}</a>`;
    });

  const ctaHtml =
    config.ctaLabel.trim() && config.ctaUrl.trim()
      ? `<tr><td style="padding-top:10px;"><a href="${escapeHtml(
          normalizeUrl(config.ctaUrl),
        )}" style="display:inline-block;padding:6px 14px;border-radius:${ctaBorderRadius};background-color:${accentColor};color:#ffffff;text-decoration:none;font-size:${baseFontSize};">${escapeHtml(
          config.ctaLabel.trim(),
        )}</a></td></tr>`
      : '';

  const legalHtml = config.legalNote.trim() ? `<tr><td style="padding-top:12px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.legalNote.trim())}</td></tr>` : '';

  const dividerHtml = style.showDivider ? `<tr><td style="padding-top:10px;padding-bottom:10px;"><div style="border-top:1px solid #e5e7eb;width:100%;"></div></td></tr>` : '';

  const formalHtml = hasFormalLine ? `<tr><td style="padding-top:6px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.formalLine.trim())}</td></tr>` : '';

  const topLineHtml = hasTopLine
    ? `<tr><td style="padding:0 0 4px 0;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${textColor};">${escapeHtml(config.topLine.trim())}</td></tr>`
    : '';

  const nameRowHtml = `<tr><td style="padding:0 0 4px 0;"><span style="font-size:15px;font-weight:bold;color:${accentColor};">${escapeHtml(
    config.fullName || '',
  )}</span>${hasNameTag ? `<span style="margin-left:8px;padding:2px 6px;border-radius:999px;border:1px solid #e5e7eb;font-size:10px;color:${textColor};">${escapeHtml(config.nameTag.trim())}</span>` : ''}</td></tr>`;

  const titleCompanyHtml =
    hasJobTitle || hasCompany
      ? `<tr><td style="padding:0 0 4px 0;"><span style="color:${textColor};">${hasJobTitle ? escapeHtml(config.jobTitle.trim()) : ''}${
          hasJobTitle && hasCompany ? ' · ' : ''
        }${hasCompany ? escapeHtml(config.company.trim()) : ''}</span></td></tr>`
      : '';

  const extraLineHtml = hasExtraLine ? `<tr><td style="padding:0 0 6px 0;color:${textColor};">${escapeHtml(config.extraLine.trim())}</td></tr>` : '';

  const addressHtml = hasAddress ? `<tr><td style="padding:0 0 6px 0;color:${textColor};font-size:${baseFontSize};">${formatMultiline(config.address.trim())}</td></tr>` : '';

  const contactHtml = contactItems.length ? `<tr><td style="padding:4px 0 0 0;color:${textColor};">${contactItems.join('<span style="margin-right:4px;">&nbsp;</span>')}</td></tr>` : '';

  const socialsHtml = socialLinks.length ? `<tr><td style="padding-top:8px;color:${textColor};">${socialLinks.join('')}</td></tr>` : '';

  const headerBlock = `${topLineHtml}${nameRowHtml}${titleCompanyHtml}`;

  const contentBlock = `${extraLineHtml}${addressHtml}${contactHtml}${socialsHtml}${ctaHtml}${dividerHtml}${formalHtml}${legalHtml}`;

  const innerRows = `${headerBlock}${contentBlock}`;

  let layoutWrapper = '';

  // STANDARD
  if (layout === 'standard') {
    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
              <tr>
                ${avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
                    ${innerRows}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  }
  // ACCENT-BAR
  else if (layout === 'accent-bar') {
    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};border-left:4px solid ${accentColor};padding-left:${paddingLeftAccent};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
              <tr>
                ${avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
                    ${innerRows}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  }
  // TOP-BANNER
  else if (layout === 'top-banner') {
    const bannerTopLine = hasTopLine ? `<div style="font-size:10px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.9;">${escapeHtml(config.topLine.trim())}</div>` : '';
    const bannerName = `<div style="font-size:15px;font-weight:bold;margin-top:2px;">${escapeHtml(config.fullName || '')}</div>`;
    const bannerTitleCompany =
      hasJobTitle || hasCompany
        ? `<div style="font-size:${baseFontSize};opacity:0.95;margin-top:2px;">${hasJobTitle ? escapeHtml(config.jobTitle.trim()) : ''}${
            hasJobTitle && hasCompany ? ' · ' : ''
          }${hasCompany ? escapeHtml(config.company.trim()) : ''}</div>`
        : '';
    const bannerAvatar = hasAvatar
      ? `<td style="text-align:right;vertical-align:middle;"><img src="${escapeHtml(config.avatarUrl.trim())}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;border:2px solid #ffffff;display:inline-block;" /></td>`
      : '';

    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};width:100%;">
              <tr>
                <td style="padding:0 0 8px 0;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
                    <tr>
                      <td style="background-color:${accentColor};color:#ffffff;padding:8px 12px;">
                        <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;">
                          <tr>
                            <td style="vertical-align:middle;">
                              ${bannerTopLine}
                              ${bannerName}
                              ${bannerTitleCompany}
                            </td>
                            ${bannerAvatar}
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <td style="padding-top:4px;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
                    ${contentBlock}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  }
  // LABEL-COLUMN
  else if (layout === 'label-column') {
    let labelRows = '';

    if (config.phone.trim()) {
      const phone = formatPhone(config.phone);
      labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">${telLabel}:</td><td style="padding:2px 0 2px 0;"><a href="tel:${escapeHtml(
        phone,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(phone)}</a></td></tr>`;
    }
    if (config.email.trim()) {
      const email = config.email.trim();
      labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">${mailLabel}:</td><td style="padding:2px 0 2px 0;"><a href="mailto:${escapeHtml(
        email,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(email)}</a></td></tr>`;
    }
    if (config.website.trim()) {
      const normalized = normalizeUrl(config.website);
      labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">${webLabel}:</td><td style="padding:2px 0 2px 0;"><a href="${escapeHtml(
        normalized,
      )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(normalized)}</a></td></tr>`;
    }
    if (hasAddress) {
      labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">Adres:</td><td style="padding:2px 0 2px 0;color:${textColor};font-size:${baseFontSize};">${formatMultiline(
        config.address.trim(),
      )}</td></tr>`;
    }

    const labelTableHtml = labelRows
      ? `<tr><td style="padding:4px 0 4px 0;"><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};">${labelRows}</table></td></tr>`
      : '';

    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
              <tr>
                ${avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
                    ${headerBlock}
                    ${extraLineHtml}
                    ${labelTableHtml}
                    ${socialsHtml}
                    ${ctaHtml}
                    ${dividerHtml}
                    ${formalHtml}
                    ${legalHtml}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
  }
  // CENTERED
  else if (layout === 'centered') {
    const avatarRowCentered = hasAvatar
      ? `<tr><td style="padding:0 0 8px 0;text-align:center;"><img src="${escapeHtml(
          config.avatarUrl.trim(),
        )}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;display:inline-block;" /></td></tr>`
      : '';

    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};text-align:center;">
              ${avatarRowCentered}
              ${innerRows}
            </table>
          </td>
        </tr>
      </table>
    `;
  }

  // lekkie "minifikowanie" HTML, żeby był krótszy dla Gmaila
  return layoutWrapper.replace(/\s{2,}/g, ' ').trim();
}

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
  const [config, setConfig] = useState<SignatureConfig>(DEFAULT_SIGNATURE);
  const [styleConfig, setStyleConfig] = useState<StyleConfig>(DEFAULT_STYLE);
  const [copyStatus, setCopyStatus] = useState<CopyStatus>('idle');
  const [activePanel, setActivePanel] = useState<ActivePanel>('identity');
  const [layout, setLayout] = useState<LayoutType>('standard');
  const [themeId, setThemeId] = useState<string>('classic-dark');

  const hasRequired = config.fullName.trim().length > 0 && config.email.trim().length > 0;

  const signatureHtml = useMemo(() => buildSignatureHtml(config, styleConfig, layout), [config, styleConfig, layout]);

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
    if (!signatureHtml) return;

    try {
      const temp = document.createElement('div');
      temp.style.position = 'fixed';
      temp.style.pointerEvents = 'none';
      temp.style.opacity = '0';
      temp.innerHTML = signatureHtml;
      document.body.appendChild(temp);

      const range = document.createRange();
      range.selectNodeContents(temp);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);

      const successful = document.execCommand('copy');

      selection?.removeAllRanges();
      document.body.removeChild(temp);

      if (!successful) {
        throw new Error('execCommand failed');
      }

      setCopyStatus('success');
      setTimeout(() => setCopyStatus('idle'), 3000);
    } catch {
      if (navigator.clipboard?.writeText) {
        navigator.clipboard
          .writeText(signatureHtml)
          .then(() => {
            setCopyStatus('success');
            setTimeout(() => setCopyStatus('idle'), 3000);
          })
          .catch(() => {
            setCopyStatus('error');
            setTimeout(() => setCopyStatus('idle'), 3000);
          });
      } else {
        setCopyStatus('error');
        setTimeout(() => setCopyStatus('idle'), 3000);
      }
    }
  }

  return (
    <div className="space-y-4">
      <section className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-black/10 bg-white/80 p-4 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <RiLayout3Line className="text-base text-neutral-600" />
            <span className="text-xs! font-semibold text-[#5e5e5e] uppercase">Układ stopki</span>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'accent-bar', 'top-banner', 'label-column', 'centered'] as LayoutType[]).map((lt) => (
                <button
                  key={lt}
                  type="button"
                  onClick={() => setLayout(lt)}
                  className={`rounded-full border px-3 py-1 text-xs! ${
                    layout === lt ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                  }`}
                >
                  {lt === 'standard' && 'Standard'}
                  {lt === 'accent-bar' && 'Pasek akcentu'}
                  {lt === 'top-banner' && 'Pasek u góry'}
                  {lt === 'label-column' && 'Etykiety z lewej'}
                  {lt === 'centered' && 'Wyśrodkowany'}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="text-xs! text-[#5e5e5e]">Wkrótce kolejne gotowe układy.</p>
      </section>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        {/* LEWA STRONA - EDYTOR */}
        <section className="flex min-h-[620px] flex-col space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div className="mb-2 flex items-center justify-between gap-2">
            <h2 className="h6">Edytor stopki HTML</h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <PanelButton id="identity" current={activePanel} onClick={setActivePanel} icon={<RiUser3Line className="text-base" />} label="Dane" />
            <PanelButton id="cta" current={activePanel} onClick={setActivePanel} icon={<RiShareLine className="text-base" />} label="Link" />
            <PanelButton id="social" current={activePanel} onClick={setActivePanel} icon={<RiMailLine className="text-base" />} label="Media społecznościowe" />
            <PanelButton id="appearance" current={activePanel} onClick={setActivePanel} icon={<RiPaletteLine className="text-base" />} label="Wygląd" />
            <PanelButton id="legal" current={activePanel} onClick={setActivePanel} icon={<RiFileTextLine className="text-base" />} label="Klauzula / RODO" />
          </div>

          <div className="mt-3 space-y-4 text-sm!">
            {activePanel === 'identity' && (
              <div className="space-y-3">
                <p className="text-xs! font-semibold text-[#5e5e5e] uppercase">Dane w stopce</p>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Linia nad imieniem</label>
                  <input
                    type="text"
                    value={config.topLine}
                    onChange={(e) => handleTextChange('topLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder="Np. nazwa firmy lub claim"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Avatar / logo (URL obrazu)</label>
                  <input
                    type="url"
                    value={config.avatarUrl}
                    onChange={(e) => handleTextChange('avatarUrl', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder="https://adrestwojejdomeny.pl/avatar.png"
                  />
                  <p className="mt-1 text-xs! text-[#5e5e5e]">Najlepiej kwadratowy obraz min. 120x120 px, z publicznym adresem URL.</p>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Imię i nazwisko *</label>
                    <input
                      type="text"
                      value={config.fullName}
                      onChange={(e) => handleTextChange('fullName', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Tag przy imieniu</label>
                    <input
                      type="text"
                      value={config.nameTag}
                      onChange={(e) => handleTextChange('nameTag', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="Np. On/On • Art Director"
                    />
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Stanowisko</label>
                    <input
                      type="text"
                      value={config.jobTitle}
                      onChange={(e) => handleTextChange('jobTitle', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="Web Developer"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Nazwa firmy</label>
                    <input
                      type="text"
                      value={config.company}
                      onChange={(e) => handleTextChange('company', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="Twoja firma / marka"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Dodatkowa linia (krótki opis)</label>
                  <input
                    type="text"
                    value={config.extraLine}
                    onChange={(e) => handleTextChange('extraLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder="Np. projektuję szybkie i funkcjonalne strony WWW."
                  />
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">E-mail *</label>
                    <input
                      type="email"
                      value={config.email}
                      onChange={(e) => handleTextChange('email', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="jan.kowalski@example.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Telefon</label>
                    <input
                      type="tel"
                      value={config.phone}
                      onChange={(e) => handleTextChange('phone', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="+48 600 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Strona internetowa</label>
                  <input
                    type="url"
                    value={config.website}
                    onChange={(e) => handleTextChange('website', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder="https://www.twojastrona.pl"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Adres (opcjonalny)</label>
                  <textarea
                    value={config.address}
                    onChange={(e) => handleTextChange('address', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    rows={2}
                    placeholder="ul. Dobra 3, 30-000 Kraków"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Dane formalne (np. NIP, numer licencji)</label>
                  <textarea
                    value={config.formalLine}
                    onChange={(e) => handleTextChange('formalLine', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-xs! focus:border-neutral-800 focus:outline-none"
                    rows={2}
                    placeholder="Np. NIP: 0000000000 • REGON: 000000000"
                  />
                </div>
              </div>
            )}

            {activePanel === 'cta' && (
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs! font-semibold text-[#5e5e5e] uppercase">Przycisk CTA</p>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Tekst przycisku</label>
                      <input
                        type="text"
                        value={config.ctaLabel}
                        onChange={(e) => handleTextChange('ctaLabel', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder="Umów bezpłatną konsultację"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Link CTA</label>
                      <input
                        type="url"
                        value={config.ctaUrl}
                        onChange={(e) => handleTextChange('ctaUrl', e.target.value)}
                        className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                        placeholder="https://kalendarz.pl/twoje-spotkania"
                      />
                    </div>
                  </div>
                  <p className="mt-1 text-xs! text-[#5e5e5e]">Jeśli pole tekstu lub linku pozostanie puste, przycisk nie pojawi się w stopce.</p>
                </div>
              </div>
            )}

            {activePanel === 'social' && (
              <div className="space-y-3">
                <p className="text-xs! font-semibold text-[#5e5e5e] uppercase">Media społecznościowe</p>
                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">LinkedIn</label>
                    <input
                      type="url"
                      value={config.socials.linkedin}
                      onChange={(e) => handleSocialChange('linkedin', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.linkedin.com/in/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Instagram</label>
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
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">Facebook</label>
                    <input
                      type="url"
                      value={config.socials.facebook}
                      onChange={(e) => handleSocialChange('facebook', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.facebook.com/..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">TikTok</label>
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
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">YouTube</label>
                    <input
                      type="url"
                      value={config.socials.youtube}
                      onChange={(e) => handleSocialChange('youtube', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://www.youtube.com/@..."
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-xs! font-semibold text-[#5e5e5e] uppercase">X (Twitter)</label>
                    <input
                      type="url"
                      value={config.socials.x}
                      onChange={(e) => handleSocialChange('x', e.target.value)}
                      className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                      placeholder="https://x.com/..."
                    />
                  </div>
                </div>
                <p className="text-xs! text-[#5e5e5e]">Linki są opcjonalne - w stopce pojawią się tylko te serwisy, które mają uzupełniony adres URL (bez ikon, sama nazwa serwisu).</p>
              </div>
            )}

            {activePanel === 'appearance' && (
              <div className="space-y-4">
                <div>
                  <p className="mb-2 text-xs! font-semibold text-[#5e5e5e] uppercase">Motyw kolorystyczny</p>
                  <div className="flex flex-wrap gap-2">
                    {THEME_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => applyTheme(preset.id)}
                        className={`flex items-center gap-2 rounded-full border px-3 py-1 text-xs! ${
                          themeId === preset.id ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                        }`}
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
                    <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Kolor akcentu</p>
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
                    <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Kolor tekstu</p>
                    <div className="flex items-center gap-2">
                      <input type="color" value={styleConfig.textColor} onChange={(e) => handleStyleChange('textColor', e.target.value)} className="h-9 w-9 cursor-pointer border-none bg-white p-0!" />
                    </div>
                  </div>
                  <div>
                    <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Kolor tła</p>
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
                    <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Czcionka</p>
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
                    <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Rozmiar tekstu</p>
                    <div className="flex flex-wrap gap-2">
                      {(['small', 'normal', 'large'] as FontSizeOption[]).map((size) => (
                        <button
                          key={size}
                          type="button"
                          onClick={() => handleStyleChange('fontSize', size)}
                          className={`rounded-full border px-3 py-1 text-xs! font-medium ${
                            styleConfig.fontSize === size ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                          }`}
                        >
                          {size === 'small' && 'Mały'}
                          {size === 'normal' && 'Standard'}
                          {size === 'large' && 'Większy'}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Margines wewnętrzny stopki</p>
                  <div className="flex flex-wrap gap-2">
                    {(['small', 'medium', 'large'] as MarginOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('padding', option)}
                        className={`rounded-full border px-3 py-1 text-xs! font-medium ${
                          styleConfig.padding === option ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                        }`}
                      >
                        {option === 'small' && '8 px'}
                        {option === 'medium' && '16 px'}
                        {option === 'large' && '24 px'}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-xs! font-semibold text-[#5e5e5e] uppercase">Zaokrąglenie przycisku CTA</p>
                  <div className="flex flex-wrap gap-2">
                    {(['none', 'small', 'full'] as CtaRadiusOption[]).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => handleStyleChange('ctaRadius', option)}
                        className={`rounded-full border px-3 py-1 text-xs! font-medium ${
                          styleConfig.ctaRadius === option ? 'border-black bg-slate-600 text-white' : 'border-neutral-300 bg-white text-neutral-800 hover:border-neutral-500'
                        }`}
                      >
                        {option === 'none' && 'Brak'}
                        {option === 'small' && 'Lekkie'}
                        {option === 'full' && 'Pełne'}
                      </button>
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
                  <label htmlFor="divider-toggle" className="text-sm! text-neutral-800">
                    Pokaż linię oddzielającą dane od klauzuli
                  </label>
                </div>
              </div>
            )}

            {activePanel === 'legal' && (
              <div className="space-y-3">
                <p className="text-xs! font-semibold text-[#5e5e5e] uppercase">Klauzula prawna / RODO</p>
                <textarea
                  value={config.legalNote}
                  onChange={(e) => handleTextChange('legalNote', e.target.value)}
                  className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-xs! focus:border-neutral-800 focus:outline-none"
                  rows={6}
                  placeholder="Ta wiadomość może zawierać informacje poufne. Jeżeli nie jesteś jej adresatem, poinformuj nadawcę i usuń wiadomość."
                />
              </div>
            )}
          </div>
        </section>

        {/* PRAWA STRONA - PODGLĄD + KOPIOWANIE */}
        <section className="flex min-h-[620px] flex-col space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h2 className="h6">Podgląd stopki mailowej</h2>
              <p className="text-xs! text-[#5e5e5e]">Podgląd techniczny - zgodny z Gmail, Outlook i większością klientów pocztowych.</p>
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
              {copyStatus === 'success' ? 'Skopiowano - wklej w Gmailu' : copyStatus === 'error' ? 'Błąd kopiowania' : 'Kopiuj stopkę (Gmail / Outlook)'}
            </Button>
          </div>

          {!hasRequired && <p className="text-xs! text-[#5e5e5e]">Aby skopiować stopkę, uzupełnij przynajmniej imię i nazwisko oraz e-mail.</p>}
        </section>
      </div>
    </div>
  );
}
