'use client';

import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Heading from '@/components/ui/typography/Heading';
import Eyebrow from '@/components/ui/typography/Eyebrow';
import Text from '@/components/ui/typography/Text';
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
    name: ui.pl.themes.dark,
    accentColor: '#111827',
    textColor: '#111827',
  },
  {
    id: 'modern-blue',
    name: ui.pl.themes.blue,
    accentColor: '#2563eb',
    textColor: '#111827',
  },
  {
    id: 'creative-purple',
    name: ui.pl.themes.purple,
    accentColor: '#7c3aed',
    textColor: '#111827',
  },
  {
    id: 'eco-green',
    name: ui.pl.themes.green,
    accentColor: '#16a34a',
    textColor: '#111827',
  },
  {
    id: 'minimal',
    name: ui.pl.themes.gray,
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

function sanitizeHrefUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';

  const lowered = trimmed.toLowerCase();
  const forbiddenProtocols = ['javascript:', 'data:', 'vbscript:', 'file:'];

  if (forbiddenProtocols.some((proto) => lowered.startsWith(proto))) {
    return '';
  }

  if (/^https?:\/\//i.test(trimmed)) return trimmed;

  return `https://${trimmed}`;
}

function sanitizeSrcUrl(url: string): string {
  const trimmed = url.trim();
  if (!trimmed) return '';

  const lowered = trimmed.toLowerCase();
  const forbiddenProtocols = ['javascript:', 'vbscript:', 'file:'];

  if (forbiddenProtocols.some((proto) => lowered.startsWith(proto))) {
    return '';
  }

  return trimmed;
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
  const sanitizedAvatarUrl = sanitizeSrcUrl(config.avatarUrl);
  const hasAvatar = sanitizedAvatarUrl.length > 0;

  const avatarSize = 56;
  const avatarImg = hasAvatar ? `<img src="${escapeHtml(sanitizedAvatarUrl)}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;display:block;" />` : '';
  const avatarCellInline = hasAvatar ? `<td style="padding-right:12px;vertical-align:top;">${avatarImg}</td>` : '';

  const t = ui.pl;
  const telLabel = t.labels.tel;
  const mailLabel = t.labels.email;
  const webLabel = t.labels.website;

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
    const normalized = sanitizeHrefUrl(config.website);
    if (normalized) {
      contactItems.push(
        `<span style="white-space:nowrap;"><span style="font-weight:bold;">${webLabel}:</span> <a href="${escapeHtml(
          normalized,
        )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(normalized)}</a></span>`,
      );
    }
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
      const url = sanitizeHrefUrl(config.socials[s.key]);
      if (!url) return '';
      return `<a href="${escapeHtml(url)}" style="display:inline-block;margin-right:10px;margin-bottom:2px;color:${accentColor};text-decoration:none;font-size:${baseFontSize};">${s.label}</a>`;
    })
    .filter(Boolean);

  const ctaHtml =
    config.ctaLabel.trim() && config.ctaUrl.trim()
      ? (() => {
          const ctaUrl = sanitizeHrefUrl(config.ctaUrl);
          if (!ctaUrl) return '';
          return `<tr><td style="padding-top:10px;"><a href="${escapeHtml(
            ctaUrl,
          )}" style="display:inline-block;padding:6px 14px;border-radius:${ctaBorderRadius};background-color:${accentColor};color:#ffffff;text-decoration:none;font-size:${baseFontSize};">${escapeHtml(
            config.ctaLabel.trim(),
          )}</a></td></tr>`;
        })()
      : '';

  const legalHtml = config.legalNote.trim() ? `<tr><td style="padding-top:12px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.legalNote.trim())}</td></tr>` : '';

  const dividerHtml = style.showDivider ? `<tr><td style="padding-top:10px;padding-bottom:10px;"><div style="border-top:1px solid #e5e7eb;width:100%;"></div></td></tr>` : '';

  const formalHtml = hasFormalLine ? `<tr><td style="padding-top:6px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.formalLine.trim())}</td></tr>` : '';

  const topLineHtml = hasTopLine
    ? `<tr><td style="padding:0 0 4px 0;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${textColor};">${escapeHtml(config.topLine.trim())}</td></tr>`
    : '';

  const nameRowHtml = `<tr><td style="padding:0 0 4px 0;"><span style="font-size:15px;font-weight:bold;color:${accentColor};">${escapeHtml(config.fullName || '')}</span>${
    hasNameTag ? `<span style="margin-left:8px;padding:2px 6px;border-radius:999px;border:1px solid #e5e7eb;font-size:10px;color:${textColor};">${escapeHtml(config.nameTag.trim())}</span>` : ''
  }</td></tr>`;

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
  } else if (layout === 'accent-bar') {
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
  } else if (layout === 'top-banner') {
    const bannerTopLine = hasTopLine ? `<div style="font-size:10px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.9;">${escapeHtml(config.topLine.trim())}</div>` : '';
    const bannerName = `<div style="font-size:15px;font-weight:bold;margin-top:2px;">${escapeHtml(config.fullName || '')}</div>`;
    const bannerTitleCompany =
      hasJobTitle || hasCompany
        ? `<div style="font-size:${baseFontSize};opacity:0.95;margin-top:2px;">${
            hasJobTitle ? escapeHtml(config.jobTitle.trim()) : ''
          }${hasJobTitle && hasCompany ? ' · ' : ''}${hasCompany ? escapeHtml(config.company.trim()) : ''}</div>`
        : '';
    const bannerAvatar = hasAvatar
      ? `<td style="text-align:right;vertical-align:middle;"><img src="${escapeHtml(
          sanitizedAvatarUrl,
        )}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;border:2px solid #ffffff;display:inline-block;" /></td>`
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
  } else if (layout === 'label-column') {
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
      const normalized = sanitizeHrefUrl(config.website);
      if (normalized) {
        labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">${webLabel}:</td><td style="padding:2px 0 2px 0;"><a href="${escapeHtml(
          normalized,
        )}" style="color:${accentColor};text-decoration:none;">${escapeHtml(normalized)}</a></td></tr>`;
      }
    }
    if (hasAddress) {
      labelRows += `<tr><td style="padding:2px 8px 2px 0;font-weight:bold;color:${textColor};white-space:nowrap;">${ui.pl.labels.address}:</td><td style="padding:2px 0 2px 0;color:${textColor};font-size:${baseFontSize};">${formatMultiline(
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
  } else if (layout === 'centered') {
    const avatarRowCentered = hasAvatar
      ? `<tr><td style="padding:0 0 8px 0;text-align:center;"><img src="${escapeHtml(
          sanitizedAvatarUrl,
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
  const t = ui.pl;
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
            <Eyebrow variant="dynamic" className="text-xs! font-semibold">
              {t.layoutLabel}
            </Eyebrow>
            <div className="flex flex-wrap gap-1">
              {(['standard', 'accent-bar', 'top-banner', 'label-column', 'centered'] as LayoutType[]).map((lt) => (
                <Badge
                  key={lt}
                  as="button"
                  type="button"
                  onClick={() => setLayout(lt)}
                  variant={layout === lt ? 'selected' : 'default'}
                  size="sm"
                >
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
        <Text variant="xs" tone="muted" as="p" className="text-xs!">
          {t.moreLayoutsSoon}
        </Text>
      </section>

      <div className="grid items-stretch gap-4 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.9fr)]">
        <section className="flex min-h-[620px] flex-col space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div className="mb-2 flex items-center justify-between gap-2">
            <Heading as="h2" className="h6">
              {t.editorTitle}
            </Heading>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.topLine}
                    </Text>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.avatar}
                    </Text>
                  </label>
                  <input
                    type="url"
                    value={config.avatarUrl}
                    onChange={(e) => handleTextChange('avatarUrl', e.target.value)}
                    className="w-full! rounded-xl border border-neutral-300 bg-white px-3! py-2! text-sm! focus:border-neutral-800 focus:outline-none"
                    placeholder={t.identity.avatarPlaceholder}
                  />
                  <Text variant="xs" tone="muted" as="p" className="mt-1 text-xs!">
                    {t.identity.avatarHelper}
                  </Text>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
                  <div>
                    <label className="mb-1 block">
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        {t.identity.fullName}
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        {t.identity.nameTag}
                      </Text>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.extraLine}
                    </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        {t.identity.email}
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        {t.identity.phone}
                      </Text>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.website}
                    </Text>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.address}
                    </Text>
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
                    <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                      {t.identity.formalLine}
                    </Text>
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
                  <Eyebrow variant="dynamic" className="text-xs! font-semibold mb-2">
                    {t.cta.title}
                  </Eyebrow>
                  <div className="grid grid-cols-1 gap-3">
                    <div>
                      <label className="mb-1 block">
                        <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                          {t.cta.label}
                        </Text>
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
                        <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                          {t.cta.url}
                        </Text>
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
                  <Text variant="xs" tone="muted" as="p" className="mt-1 text-xs!">
                    {t.cta.helper}
                  </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        LinkedIn
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        Instagram
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        Facebook
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        TikTok
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        YouTube
                      </Text>
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
                      <Text variant="xs" tone="muted" as="span" className="text-xs! font-semibold uppercase">
                        X (Twitter)
                      </Text>
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
                <Text variant="xs" tone="muted" as="p" className="text-xs!">
                  {t.social.helper}
                </Text>
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
                  <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.padding}</p>
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
                  <p className="mb-1 text-xs! font-semibold text-light uppercase">{t.appearance.ctaRadius}</p>
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
                  <label htmlFor="divider-toggle" className="text-sm! text-neutral-800">
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

        <section className="flex min-h-[620px] flex-col space-y-4 rounded-2xl border border-black/10 bg-white/80 p-7 shadow-sm">
          <div className="flex items-center justify-between gap-2">
            <div>
              <Heading as="h2" className="h6">
                {t.preview.title}
              </Heading>
              <Text variant="xs" tone="muted" as="p" className="text-xs!">
                {t.preview.helper}
              </Text>
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

          {!hasRequired && (
            <Text variant="xs" tone="muted" as="p" className="text-xs!">
              {t.preview.requiredFields}
            </Text>
          )}
        </section>
      </div>
    </div>
  );
}
