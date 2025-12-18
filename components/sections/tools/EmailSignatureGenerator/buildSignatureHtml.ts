import { escapeHtml, formatMultiline, formatPhone, sanitizeHrefUrl, sanitizeSrcUrl } from '@/components/sections/tools/EmailSignatureGenerator/sanitize';
import type { FontSizeOption, LayoutType, MarginOption, CtaRadiusOption, SocialKey, SignatureConfig, StyleConfig } from '@/components/sections/tools/EmailSignatureGenerator/types';
import { rgbToHex } from '@/lib/tools/color/convert';

type BuildSignatureLabels = {
  tel: string;
  email: string;
  website: string;
};

const SIGNATURE_COLOR_DARK = rgbToHex({ r: 17, g: 24, b: 39 });
const SIGNATURE_COLOR_WHITE = rgbToHex({ r: 255, g: 255, b: 255 });
const SIGNATURE_COLOR_DIVIDER = rgbToHex({ r: 229, g: 231, b: 235 });

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

export function buildSignatureHtml(config: SignatureConfig, style: StyleConfig, layout: LayoutType, labels: BuildSignatureLabels): string {
  const fontFamily = style.fontFamily || 'Arial, sans-serif';
  const baseFontSize = FONT_SIZE_MAP[style.fontSize] || FONT_SIZE_MAP.normal;
  const accentColor = style.accentColor || SIGNATURE_COLOR_DARK;
  const textColor = style.textColor || SIGNATURE_COLOR_DARK;
  const backgroundColor = style.backgroundColor || SIGNATURE_COLOR_WHITE;

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

  const telLabel = labels.tel;
  const mailLabel = labels.email;
  const webLabel = labels.website;

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
          )}" style="display:inline-block;padding:6px 14px;border-radius:${ctaBorderRadius};background-color:${accentColor};color:${SIGNATURE_COLOR_WHITE};text-decoration:none;font-size:${baseFontSize};">${escapeHtml(
            config.ctaLabel.trim(),
          )}</a></td></tr>`;
        })()
      : '';

  const legalHtml = config.legalNote.trim() ? `<tr><td style="padding-top:12px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.legalNote.trim())}</td></tr>` : '';

  const dividerHtml = style.showDivider ? `<tr><td style="padding-top:10px;padding-bottom:10px;"><div style="border-top:1px solid ${SIGNATURE_COLOR_DIVIDER};width:100%;"></div></td></tr>` : '';

  const formalHtml = hasFormalLine ? `<tr><td style="padding-top:6px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.formalLine.trim())}</td></tr>` : '';

  const topLineHtml = hasTopLine
    ? `<tr><td style="padding:0 0 4px 0;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${textColor};">${escapeHtml(config.topLine.trim())}</td></tr>`
    : '';

  const nameRowHtml = `<tr><td style="padding:0 0 4px 0;"><span style="font-size:15px;font-weight:bold;color:${accentColor};">${escapeHtml(config.fullName || '')}</span>${
    hasNameTag
      ? `<span style="margin-left:8px;padding:2px 6px;border-radius:999px;border:1px solid ${SIGNATURE_COLOR_DIVIDER};font-size:10px;color:${textColor};">${escapeHtml(config.nameTag.trim())}</span>`
      : ''
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
        ? `<div style="margin-top:2px;opacity:0.9;">${hasJobTitle ? escapeHtml(config.jobTitle.trim()) : ''}${hasJobTitle && hasCompany ? ' · ' : ''}${
            hasCompany ? escapeHtml(config.company.trim()) : ''
          }</div>`
        : '';
    const bannerAvatar = hasAvatar
      ? `<td style="text-align:right;vertical-align:middle;"><img src="${escapeHtml(
          sanitizedAvatarUrl,
        )}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:999px;border:2px solid ${SIGNATURE_COLOR_WHITE};display:inline-block;" /></td>`
      : '';

    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="background-color:${accentColor};color:${SIGNATURE_COLOR_WHITE};padding:12px 16px;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;color:${SIGNATURE_COLOR_WHITE};font-family:${fontFamily};">
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
        <tr>
          <td style="padding:${paddingAll};">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
              ${contentBlock}
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

    layoutWrapper = `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
        <tr>
          <td style="padding:${paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
              <tr>
                ${avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};">
                    ${topLineHtml}
                    ${nameRowHtml}
                    ${titleCompanyHtml}
                    ${extraLineHtml}
                    ${addressHtml}
                    ${labelRows ? `<tr><td style="padding-top:6px;"><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};">${labelRows}</table></td></tr>` : ''}
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
          <td style="padding:${paddingAll};text-align:center;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};margin:0 auto;">
              ${avatarRowCentered}
              ${topLineHtml ? topLineHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${nameRowHtml.replace('<td', '<td style="text-align:center;')}
              ${titleCompanyHtml ? titleCompanyHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${extraLineHtml ? extraLineHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${addressHtml ? addressHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${contactHtml ? contactHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${socialsHtml ? socialsHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${ctaHtml ? ctaHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${dividerHtml}
              ${formalHtml ? formalHtml.replace('<td', '<td style="text-align:center;') : ''}
              ${legalHtml ? legalHtml.replace('<td', '<td style="text-align:center;') : ''}
            </table>
          </td>
        </tr>
      </table>
    `;
  }

  return layoutWrapper.replace(/\s{2,}/g, ' ').trim();
}
