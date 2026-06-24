import { rgbToHex } from '@/lib/tools/color/convert';
import {
  escapeHtml,
  formatMultiline,
  formatPhone,
  sanitizeHrefUrl,
  sanitizeSrcUrl,
} from '@/lib/tools/email/sanitize';
import {
  getSocialIcon,
  type SocialPlatform,
  type IconSize,
} from '@/lib/tools/email/socialIcons';
import type {
  BorderSides,
  FontSizeOption,
  LayoutType,
  MarginOption,
  CtaRadiusOption,
  SocialKey,
  SignatureConfig,
  SpacingConfig,
  StyleConfig,
  TextStyleConfig,
} from '@/types/tools/email';

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

function resolveElementFontSize(
  textStyle: TextStyleConfig | undefined,
  sizeOffset: number,
  baseFontSizeNum: number,
  defaultSize: string,
): string {
  return textStyle ? `${baseFontSizeNum + sizeOffset}px` : defaultSize;
}

function buildInlineContactItem(
  label: string,
  href: string,
  display: string,
  accentColor: string,
): string {
  return `<span style="margin-right:12px;white-space:nowrap;"><span style="font-weight:bold;">${label}:</span> <a href="${href}" style="color:${accentColor};text-decoration:none;">${display}</a></span>`;
}

function buildInlineContactItems(
  config: SignatureConfig,
  labels: BuildSignatureLabels,
  accentColor: string,
): string[] {
  const contactItems: string[] = [];

  if (config.phone.trim()) {
    const phone = formatPhone(config.phone);
    contactItems.push(
      buildInlineContactItem(
        labels.tel,
        `tel:${escapeHtml(phone)}`,
        escapeHtml(phone),
        accentColor,
      ),
    );
  }
  if (config.email.trim()) {
    const email = config.email.trim();
    contactItems.push(
      buildInlineContactItem(
        labels.email,
        `mailto:${escapeHtml(email)}`,
        escapeHtml(email),
        accentColor,
      ),
    );
  }
  if (config.website.trim()) {
    const normalized = sanitizeHrefUrl(config.website);
    if (normalized) {
      contactItems.push(
        buildInlineContactItem(
          labels.website,
          escapeHtml(normalized),
          escapeHtml(normalized),
          accentColor,
        ),
      );
    }
  }

  return contactItems;
}

function buildCtaButtonHtml(
  label: string,
  url: string,
  opts: {
    paddingTop: number | string;
    ctaBorderRadius: string;
    background: string;
    border?: string;
    color: string;
    baseFontSize: string;
  },
): string {
  const sanitizedUrl = sanitizeHrefUrl(url);
  if (!sanitizedUrl) return '';
  const borderPart = opts.border ? `border:${opts.border};` : '';
  return `<tr><td style="padding-top:${opts.paddingTop}px;"><a href="${escapeHtml(
    sanitizedUrl,
  )}" style="display:inline-block;padding:6px 14px;border-radius:${opts.ctaBorderRadius};background-color:${opts.background};${borderPart}color:${opts.color};text-decoration:none;font-size:${opts.baseFontSize};">${escapeHtml(
    label,
  )}</a></td></tr>`;
}

function buildNameRowHtml(
  config: SignatureConfig,
  spacing: SpacingConfig,
  nameFontSize: string,
  nameColor: string,
  hasNameTag: boolean,
  textColor: string,
): string {
  const nameTagHtml = hasNameTag
    ? `<span style="margin-left:8px;padding:2px 6px;border-radius:999px;border:1px solid ${SIGNATURE_COLOR_DIVIDER};font-size:10px;color:${textColor};">${escapeHtml(config.nameTag.trim())}</span>`
    : '';
  return `<tr><td style="padding:0 0 ${spacing.afterName}px 0;"><span style="font-size:${nameFontSize};font-weight:bold;color:${nameColor};">${escapeHtml(config.fullName || '')}</span>${nameTagHtml}</td></tr>`;
}

function buildTitleCompanySpans(
  config: SignatureConfig,
  hasJobTitle: boolean,
  hasCompany: boolean,
  jobTitleColor: string,
  companyColor: string,
  companyFontSize: string,
  jobTitleFontSize?: string,
  separatorText = ' · ',
): string {
  const jobTitleStyle = jobTitleFontSize
    ? `color:${jobTitleColor};font-size:${jobTitleFontSize};`
    : `color:${jobTitleColor};`;
  const jobTitleSpan = hasJobTitle
    ? `<span style="${jobTitleStyle}">${escapeHtml(config.jobTitle.trim())}</span>`
    : '';
  const separator = hasJobTitle && hasCompany ? separatorText : '';
  const companySpan = hasCompany
    ? `<span style="color:${companyColor};font-size:${companyFontSize};">${escapeHtml(config.company.trim())}</span>`
    : '';
  return `${jobTitleSpan}${separator}${companySpan}`;
}

function buildTitleCompanyHtml(
  config: SignatureConfig,
  spacing: SpacingConfig,
  hasJobTitle: boolean,
  hasCompany: boolean,
  jobTitleFontSize: string,
  jobTitleColor: string,
  companyColor: string,
  companyFontSize: string,
): string {
  if (!hasJobTitle && !hasCompany) return '';
  const spans = buildTitleCompanySpans(
    config,
    hasJobTitle,
    hasCompany,
    jobTitleColor,
    companyColor,
    companyFontSize,
  );
  return `<tr><td style="padding:0 0 ${spacing.afterTitle}px 0;font-size:${jobTitleFontSize};">${spans}</td></tr>`;
}

type SignatureCtx = {
  config: SignatureConfig;
  spacing: SpacingConfig;
  fontFamily: string;
  baseFontSize: string;
  textColor: string;
  backgroundColor: string;
  borderStyle: string;
  paddingAll: string;
  accentColor: string;
  ctaBorderRadius: string;
  avatarSize: number;
  avatarRadius: string;
  sanitizedAvatarUrl: string;
  hasAvatar: boolean;
  avatarCellInline: string;
  hasTopLine: boolean;
  topLineHtml: string;
  nameRowHtml: string;
  nameFontSize: string;
  nameColor: string;
  hasNameTag: boolean;
  hasJobTitle: boolean;
  jobTitleColor: string;
  jobTitleFontSize: string;
  hasCompany: boolean;
  companyColor: string;
  companyFontSize: string;
  titleCompanyHtml: string;
  hasExtraLine: boolean;
  extraLineHtml: string;
  hasAddress: boolean;
  addressHtml: string;
  contactHtml: string;
  contactColor: string;
  contactFontSize: string;
  telLabel: string;
  mailLabel: string;
  webLabel: string;
  socialsHtml: string;
  socialLinks: string[];
  socialsColor: string;
  socialsFontSize: string;
  ctaHtml: string;
  cta2Html: string;
  dividerHtml: string;
  formalHtml: string;
  hasFormalLine: boolean;
  legalColor: string;
  legalFontSize: string;
  legalHtml: string;
  contentBlock: string;
  innerRows: string;
};

function buildFormalLegalContent(ctx: SignatureCtx): string {
  const { config, hasFormalLine } = ctx;
  const formalPart = hasFormalLine
    ? formatMultiline(config.formalLine.trim()) + '<br/>'
    : '';
  const legalPart = config.legalNote.trim()
    ? formatMultiline(config.legalNote.trim())
    : '';
  return `${formalPart}${legalPart}`;
}

function buildStandardLayout(ctx: SignatureCtx): string {
  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};">
              <tr>
                ${ctx.avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};">
                    ${ctx.innerRows}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
}

function buildTopBannerTitleCompanySpans(ctx: SignatureCtx): string {
  const jobTitleSpan = ctx.hasJobTitle
    ? `<span style="color:inherit;">${escapeHtml(ctx.config.jobTitle.trim())}</span>`
    : '';
  const separator = ctx.hasJobTitle && ctx.hasCompany ? ' · ' : '';
  const companySpan = ctx.hasCompany
    ? `<span style="color:inherit;font-size:${ctx.companyFontSize};">${escapeHtml(ctx.config.company.trim())}</span>`
    : '';
  return `${jobTitleSpan}${separator}${companySpan}`;
}

function buildTopBannerLayout(ctx: SignatureCtx): string {
  const bannerTopLine = ctx.hasTopLine
    ? `<div style="font-size:10px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.9;">${escapeHtml(ctx.config.topLine.trim())}</div>`
    : '';
  const bannerName = `<div style="font-size:${ctx.nameFontSize};font-weight:bold;margin-top:2px;">${escapeHtml(ctx.config.fullName || '')}</div>`;
  const bannerTitleCompany =
    ctx.hasJobTitle || ctx.hasCompany
      ? `<div style="margin-top:2px;font-size:${ctx.jobTitleFontSize};">${buildTopBannerTitleCompanySpans(ctx)}</div>`
      : '';
  const bannerAvatar = ctx.hasAvatar
    ? `<td style="text-align:right;vertical-align:middle;"><img src="${escapeHtml(
        ctx.sanitizedAvatarUrl,
      )}" alt="" width="${ctx.avatarSize}" height="${ctx.avatarSize}" style="border-radius:${ctx.avatarRadius};border:2px solid ${SIGNATURE_COLOR_WHITE};display:inline-block;" /></td>`
    : '';

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="background-color:${ctx.accentColor};color:${SIGNATURE_COLOR_WHITE};padding:12px 16px;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;color:${SIGNATURE_COLOR_WHITE};font-family:${ctx.fontFamily};">
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
          <td style="padding:${ctx.paddingAll};">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};">
              ${ctx.contentBlock}
            </table>
          </td>
        </tr>
      </table>
    `;
}

function buildLabelColumnLayout(ctx: SignatureCtx): string {
  const {
    config,
    telLabel,
    mailLabel,
    webLabel,
    accentColor,
    textColor,
    fontFamily,
    baseFontSize,
  } = ctx;
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

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};vertical-align:top;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${ctx.backgroundColor};">
              <tr>
                ${ctx.avatarCellInline}
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${ctx.backgroundColor};">
                    ${ctx.topLineHtml}
                    ${ctx.nameRowHtml}
                    ${ctx.titleCompanyHtml}
                    ${ctx.extraLineHtml}
                    ${ctx.addressHtml}
                    ${labelRows ? `<tr><td style="padding-top:6px;"><table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};">${labelRows}</table></td></tr>` : ''}
                    ${ctx.socialsHtml}
                    ${ctx.ctaHtml}
                    ${ctx.dividerHtml}
                    ${ctx.formalHtml}
                    ${ctx.legalHtml}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    `;
}

function buildCenteredLayout(ctx: SignatureCtx): string {
  const addCenterAlign = (html: string) =>
    html.replace('<td style="', '<td style="text-align:center;');

  const avatarRowCentered = ctx.hasAvatar
    ? `<tr><td style="padding:0 0 8px 0;text-align:center;"><img src="${escapeHtml(
        ctx.sanitizedAvatarUrl,
      )}" alt="" width="${ctx.avatarSize}" height="${ctx.avatarSize}" style="border-radius:${ctx.avatarRadius};display:inline-block;" /></td></tr>`
    : '';

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};text-align:center;">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};margin:0 auto;">
              ${avatarRowCentered}
              ${ctx.topLineHtml ? addCenterAlign(ctx.topLineHtml) : ''}
              ${addCenterAlign(ctx.nameRowHtml)}
              ${ctx.titleCompanyHtml ? addCenterAlign(ctx.titleCompanyHtml) : ''}
              ${ctx.extraLineHtml ? addCenterAlign(ctx.extraLineHtml) : ''}
              ${ctx.addressHtml ? addCenterAlign(ctx.addressHtml) : ''}
              ${ctx.contactHtml ? addCenterAlign(ctx.contactHtml) : ''}
              ${ctx.socialsHtml ? addCenterAlign(ctx.socialsHtml) : ''}
              ${ctx.ctaHtml ? addCenterAlign(ctx.ctaHtml) : ''}
              ${ctx.dividerHtml}
              ${ctx.formalHtml ? addCenterAlign(ctx.formalHtml) : ''}
              ${ctx.legalHtml ? addCenterAlign(ctx.legalHtml) : ''}
            </table>
          </td>
        </tr>
      </table>
    `;
}

function buildCompactLayout(ctx: SignatureCtx): string {
  const {
    config,
    accentColor,
    contactFontSize,
    nameFontSize,
    nameColor,
    jobTitleColor,
    jobTitleFontSize,
    companyColor,
    companyFontSize,
    hasJobTitle,
    hasCompany,
    hasAvatar,
    sanitizedAvatarUrl,
    avatarRadius,
    socialLinks,
    socialsColor,
    socialsFontSize,
    spacing,
    legalColor,
    legalFontSize,
  } = ctx;

  const compactName = `<span style="font-weight:bold;font-size:${nameFontSize};color:${nameColor};">${escapeHtml(config.fullName || '')}</span>`;
  const compactTitle = hasJobTitle
    ? `<span style="color:${jobTitleColor};font-size:${jobTitleFontSize};"> · ${escapeHtml(config.jobTitle.trim())}</span>`
    : '';
  const compactCompany = hasCompany
    ? `<span style="color:${companyColor};font-size:${companyFontSize};"> · ${escapeHtml(config.company.trim())}</span>`
    : '';

  const compactContactItems: string[] = [];
  if (config.phone.trim()) {
    const phone = formatPhone(config.phone);
    compactContactItems.push(
      `<a href="tel:${escapeHtml(phone)}" style="color:${accentColor};text-decoration:none;font-size:${contactFontSize};">${escapeHtml(phone)}</a>`,
    );
  }
  if (config.email.trim()) {
    compactContactItems.push(
      `<a href="mailto:${escapeHtml(config.email.trim())}" style="color:${accentColor};text-decoration:none;font-size:${contactFontSize};">${escapeHtml(config.email.trim())}</a>`,
    );
  }
  if (config.website.trim()) {
    const normalized = sanitizeHrefUrl(config.website);
    if (normalized) {
      compactContactItems.push(
        `<a href="${escapeHtml(normalized)}" style="color:${accentColor};text-decoration:none;font-size:${contactFontSize};">${escapeHtml(normalized)}</a>`,
      );
    }
  }

  const compactContact = compactContactItems.length
    ? ` <span style="color:${SIGNATURE_COLOR_DIVIDER};">|</span> ${compactContactItems.join(' · ')}`
    : '';

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};">
            ${hasAvatar ? `<img src="${escapeHtml(sanitizedAvatarUrl)}" alt="" width="32" height="32" style="border-radius:${avatarRadius};vertical-align:middle;margin-right:10px;" />` : ''}${compactName}${compactTitle}${compactCompany}${compactContact}
            ${socialLinks.length ? `<div style="margin-top:${spacing.afterSocials}px;color:${socialsColor};font-size:${socialsFontSize};">${socialLinks.join('')}</div>` : ''}
            ${config.legalNote.trim() ? `<div style="margin-top:${spacing.beforeLegal}px;font-size:${legalFontSize};color:${legalColor};">${formatMultiline(config.legalNote.trim())}</div>` : ''}
          </td>
        </tr>
      </table>
    `;
}

function buildTwoColumnLeft(ctx: SignatureCtx): string {
  const {
    config,
    hasAvatar,
    sanitizedAvatarUrl,
    avatarSize,
    avatarRadius,
    hasTopLine,
    textColor,
    nameFontSize,
    nameColor,
    hasNameTag,
    spacing,
    hasJobTitle,
    jobTitleColor,
    jobTitleFontSize,
    hasCompany,
    companyColor,
    companyFontSize,
    hasExtraLine,
  } = ctx;

  const avatarPart = hasAvatar
    ? `<div style="margin-bottom:8px;"><img src="${escapeHtml(sanitizedAvatarUrl)}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:${avatarRadius};display:block;" /></div>`
    : '';
  const topLinePart = hasTopLine
    ? `<div style="font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${textColor};margin-bottom:4px;">${escapeHtml(config.topLine.trim())}</div>`
    : '';
  const nameTagPart = hasNameTag
    ? `<span style="margin-left:8px;padding:2px 6px;border-radius:999px;border:1px solid ${SIGNATURE_COLOR_DIVIDER};font-size:10px;color:${textColor};">${escapeHtml(config.nameTag.trim())}</span>`
    : '';
  const titleCompanyPart =
    hasJobTitle || hasCompany
      ? `<div style="margin-bottom:${spacing.afterTitle}px;">${buildTitleCompanySpans(config, hasJobTitle, hasCompany, jobTitleColor, companyColor, companyFontSize, jobTitleFontSize)}</div>`
      : '';
  const extraLinePart = hasExtraLine
    ? `<div style="color:${textColor};margin-bottom:${spacing.afterExtra}px;">${escapeHtml(config.extraLine.trim())}</div>`
    : '';

  return `
      <td style="vertical-align:top;padding-right:20px;">
        ${avatarPart}
        ${topLinePart}
        <div style="font-size:${nameFontSize};font-weight:bold;color:${nameColor};margin-bottom:${spacing.afterName}px;">${escapeHtml(config.fullName || '')}${nameTagPart}</div>
        ${titleCompanyPart}
        ${extraLinePart}
      </td>
    `;
}

function buildTwoColumnContactItems(ctx: SignatureCtx): string[] {
  const {
    config,
    contactColor,
    contactFontSize,
    telLabel,
    mailLabel,
    webLabel,
    accentColor,
    hasAddress,
  } = ctx;
  const items: string[] = [];

  if (config.phone.trim()) {
    const phone = formatPhone(config.phone);
    items.push(
      `<div style="margin-bottom:4px;color:${contactColor};font-size:${contactFontSize};"><span style="font-weight:bold;">${telLabel}:</span> <a href="tel:${escapeHtml(phone)}" style="color:${accentColor};text-decoration:none;">${escapeHtml(phone)}</a></div>`,
    );
  }
  if (config.email.trim()) {
    items.push(
      `<div style="margin-bottom:4px;color:${contactColor};font-size:${contactFontSize};"><span style="font-weight:bold;">${mailLabel}:</span> <a href="mailto:${escapeHtml(config.email.trim())}" style="color:${accentColor};text-decoration:none;">${escapeHtml(config.email.trim())}</a></div>`,
    );
  }
  if (config.website.trim()) {
    const normalized = sanitizeHrefUrl(config.website);
    if (normalized) {
      items.push(
        `<div style="margin-bottom:4px;color:${contactColor};font-size:${contactFontSize};"><span style="font-weight:bold;">${webLabel}:</span> <a href="${escapeHtml(normalized)}" style="color:${accentColor};text-decoration:none;">${escapeHtml(normalized)}</a></div>`,
      );
    }
  }
  if (hasAddress) {
    items.push(
      `<div style="margin-bottom:4px;">${formatMultiline(config.address.trim())}</div>`,
    );
  }

  return items;
}

function buildTwoColumnCta(ctx: SignatureCtx): string {
  const { config, spacing, ctaBorderRadius, accentColor, baseFontSize } = ctx;
  if (!config.ctaLabel.trim() || !config.ctaUrl.trim()) return '';
  const ctaUrl = sanitizeHrefUrl(config.ctaUrl);
  if (!ctaUrl) return '';
  return `<div style="margin-top:${spacing.afterCta}px;"><a href="${escapeHtml(ctaUrl)}" style="display:inline-block;padding:6px 14px;border-radius:${ctaBorderRadius};background-color:${accentColor};color:${SIGNATURE_COLOR_WHITE};text-decoration:none;font-size:${baseFontSize};">${escapeHtml(config.ctaLabel.trim())}</a></div>`;
}

function buildTwoColumnRight(ctx: SignatureCtx): string {
  const { socialLinks, spacing, socialsColor, socialsFontSize } = ctx;
  const rightColumnItems = buildTwoColumnContactItems(ctx);
  const socialsPart = socialLinks.length
    ? `<div style="margin-top:${spacing.afterSocials}px;color:${socialsColor};font-size:${socialsFontSize};">${socialLinks.join('')}</div>`
    : '';

  return `
      <td style="vertical-align:top;border-left:1px solid ${SIGNATURE_COLOR_DIVIDER};padding-left:20px;">
        ${rightColumnItems.join('')}
        ${socialsPart}
        ${buildTwoColumnCta(ctx)}
      </td>
    `;
}

function buildTwoColumnLayout(ctx: SignatureCtx): string {
  const {
    textColor,
    spacing,
    hasFormalLine,
    legalColor,
    legalFontSize,
    baseFontSize,
    config,
  } = ctx;

  const footerPart =
    hasFormalLine || config.legalNote.trim()
      ? `<div style="margin-top:${spacing.beforeLegal}px;padding-top:10px;border-top:1px solid ${SIGNATURE_COLOR_DIVIDER};font-size:${legalFontSize};color:${legalColor};">${buildFormalLegalContent(ctx)}</div>`
      : '';

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};">
            <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${baseFontSize};color:${textColor};">
              <tr>
                ${buildTwoColumnLeft(ctx)}
                ${buildTwoColumnRight(ctx)}
              </tr>
            </table>
            ${footerPart}
          </td>
        </tr>
      </table>
    `;
}

function buildMinimalLayout(ctx: SignatureCtx): string {
  const {
    config,
    nameFontSize,
    nameColor,
    spacing,
    hasJobTitle,
    jobTitleColor,
    jobTitleFontSize,
    hasCompany,
    companyColor,
    companyFontSize,
    contactFontSize,
    accentColor,
    contactColor,
  } = ctx;

  const minimalName = `<div style="font-size:${nameFontSize};font-weight:bold;color:${nameColor};margin-bottom:${spacing.afterName}px;">${escapeHtml(config.fullName || '')}</div>`;
  const minimalTitle =
    hasJobTitle || hasCompany
      ? `<div style="margin-bottom:${spacing.afterTitle}px;">${buildTitleCompanySpans(config, hasJobTitle, hasCompany, jobTitleColor, companyColor, companyFontSize, jobTitleFontSize, ', ')}</div>`
      : '';

  const minimalContactItems: string[] = [];
  if (config.email.trim()) {
    minimalContactItems.push(
      `<a href="mailto:${escapeHtml(config.email.trim())}" style="color:${accentColor};text-decoration:none;font-size:${contactFontSize};">${escapeHtml(config.email.trim())}</a>`,
    );
  }
  if (config.phone.trim()) {
    const phone = formatPhone(config.phone);
    minimalContactItems.push(
      `<a href="tel:${escapeHtml(phone)}" style="color:${accentColor};text-decoration:none;font-size:${contactFontSize};">${escapeHtml(phone)}</a>`,
    );
  }

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${ctx.fontFamily};font-size:${ctx.baseFontSize};color:${ctx.textColor};background-color:${ctx.backgroundColor};${ctx.borderStyle}">
        <tr>
          <td style="padding:${ctx.paddingAll};">
            ${minimalName}
            ${minimalTitle}
            ${minimalContactItems.length ? `<div style="color:${contactColor};">${minimalContactItems.join(' · ')}</div>` : ''}
          </td>
        </tr>
      </table>
    `;
}

function buildBottomBarLayout(ctx: SignatureCtx): string {
  const {
    fontFamily,
    baseFontSize,
    textColor,
    backgroundColor,
    avatarCellInline,
    topLineHtml,
    nameRowHtml,
    titleCompanyHtml,
    extraLineHtml,
    addressHtml,
    contactHtml,
    socialsHtml,
    config,
    ctaBorderRadius,
    accentColor,
    companyFontSize,
    hasCompany,
    spacing,
    hasFormalLine,
    legalColor,
    legalFontSize,
    borderStyle,
    paddingAll,
  } = ctx;

  const topSection = `
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
              ${contactHtml}
              ${socialsHtml}
            </table>
          </td>
        </tr>
      </table>
    `;

  const bottomBarContent: string[] = [];
  if (config.ctaLabel.trim() && config.ctaUrl.trim()) {
    const ctaUrl = sanitizeHrefUrl(config.ctaUrl);
    if (ctaUrl) {
      bottomBarContent.push(
        `<a href="${escapeHtml(ctaUrl)}" style="display:inline-block;padding:6px 14px;border-radius:${ctaBorderRadius};background-color:${SIGNATURE_COLOR_WHITE};color:${accentColor};text-decoration:none;font-size:${baseFontSize};font-weight:bold;">${escapeHtml(config.ctaLabel.trim())}</a>`,
      );
    }
  }
  if (hasCompany) {
    bottomBarContent.push(
      `<span style="opacity:0.9;font-size:${companyFontSize};">${escapeHtml(config.company.trim())}</span>`,
    );
  }

  const bottomBar = `
      <div style="background-color:${accentColor};color:${SIGNATURE_COLOR_WHITE};padding:10px 16px;margin-top:12px;border-radius:0 0 6px 6px;">
        ${bottomBarContent.length ? bottomBarContent.join(' <span style="opacity:0.5;margin:0 8px;">|</span> ') : ''}
      </div>
    `;

  return `
      <table cellpadding="0" cellspacing="0" style="border-collapse:collapse;font-family:${fontFamily};font-size:${baseFontSize};color:${textColor};background-color:${backgroundColor};${borderStyle}">
        <tr>
          <td style="padding:${paddingAll};padding-bottom:0;">
            ${topSection}
          </td>
        </tr>
        <tr>
          <td style="padding:0 ${paddingAll};">
            ${bottomBar}
            ${hasFormalLine || config.legalNote.trim() ? `<div style="margin-top:${spacing.beforeLegal}px;font-size:${legalFontSize};color:${legalColor};">${buildFormalLegalContent(ctx)}</div>` : ''}
          </td>
        </tr>
      </table>
    `;
}

const LAYOUT_BUILDERS: Record<LayoutType, (ctx: SignatureCtx) => string> = {
  standard: buildStandardLayout,
  'top-banner': buildTopBannerLayout,
  'label-column': buildLabelColumnLayout,
  centered: buildCenteredLayout,
  compact: buildCompactLayout,
  'two-column': buildTwoColumnLayout,
  minimal: buildMinimalLayout,
  'bottom-bar': buildBottomBarLayout,
};

export function buildSignatureHtml(
  config: SignatureConfig,
  style: StyleConfig,
  spacing: SpacingConfig,
  layout: LayoutType,
  labels: BuildSignatureLabels,
  textStyle?: TextStyleConfig,
): string {
  const fontFamily = style.fontFamily || 'Arial, sans-serif';
  const baseFontSizeNum = parseInt(
    FONT_SIZE_MAP[style.fontSize] || FONT_SIZE_MAP.normal,
  );
  const baseFontSize = `${baseFontSizeNum}px`;

  const accentColor = style.accentColor || SIGNATURE_COLOR_DARK;
  const textColor = style.textColor || SIGNATURE_COLOR_DARK;

  // Per-element styles
  const nameColor = textStyle?.name.color || accentColor;
  const nameFontSize = resolveElementFontSize(
    textStyle,
    (textStyle?.name.sizeOffset ?? 0) + 2,
    baseFontSizeNum,
    '15px', // +2 for name default
  );
  const jobTitleColor = textStyle?.jobTitle.color || textColor;
  const jobTitleFontSize = resolveElementFontSize(
    textStyle,
    textStyle?.jobTitle.sizeOffset ?? 0,
    baseFontSizeNum,
    baseFontSize,
  );
  const companyColor = textStyle?.company.color || textColor;
  const companyFontSize = resolveElementFontSize(
    textStyle,
    textStyle?.company.sizeOffset ?? 0,
    baseFontSizeNum,
    baseFontSize,
  );
  const contactColor = textStyle?.contact.color || textColor;
  const contactFontSize = resolveElementFontSize(
    textStyle,
    textStyle?.contact.sizeOffset ?? 0,
    baseFontSizeNum,
    baseFontSize,
  );
  const socialsColor = textStyle?.socials.color || accentColor;
  const socialsFontSize = resolveElementFontSize(
    textStyle,
    textStyle?.socials.sizeOffset ?? 0,
    baseFontSizeNum,
    baseFontSize,
  );
  const legalColor = textStyle?.legal.color || textColor;
  const legalFontSize = resolveElementFontSize(
    textStyle,
    (textStyle?.legal.sizeOffset ?? 0) - 2,
    baseFontSizeNum,
    '11px',
  );
  const backgroundColor = style.backgroundColor || SIGNATURE_COLOR_WHITE;

  const paddingAll = PADDING_MAP[style.padding] ?? '16px';
  const ctaBorderRadius = CTA_RADIUS_MAP[style.ctaRadius] ?? '999px';

  const getBorderStyle = (border: BorderSides): string => {
    const borderColor = accentColor;
    const styles: string[] = [];
    const allSelected =
      border.left && border.right && border.top && border.bottom;

    if (allSelected) {
      return `border:2px solid ${borderColor};`;
    }

    if (border.left) styles.push(`border-left:4px solid ${borderColor}`);
    if (border.right) styles.push(`border-right:4px solid ${borderColor}`);
    if (border.top) styles.push(`border-top:4px solid ${borderColor}`);
    if (border.bottom) styles.push(`border-bottom:4px solid ${borderColor}`);

    return styles.length > 0 ? styles.join(';') + ';' : '';
  };
  const borderStyle = getBorderStyle(style.border);

  const hasTopLine = config.topLine.trim().length > 0;
  const hasAddress = config.address.trim().length > 0;
  const hasExtraLine = config.extraLine.trim().length > 0;
  const hasCompany = config.company.trim().length > 0;
  const hasJobTitle = config.jobTitle.trim().length > 0;
  const hasNameTag = config.nameTag.trim().length > 0;
  const hasFormalLine = config.formalLine.trim().length > 0;
  const sanitizedAvatarUrl = sanitizeSrcUrl(config.avatarUrl);
  const hasAvatar = sanitizedAvatarUrl.length > 0;

  const AVATAR_SIZE_MAP = { small: 40, medium: 56, large: 72 } as const;
  const AVATAR_RADIUS_MAP = {
    circle: '999px',
    rounded: '8px',
    square: '0',
  } as const;
  const avatarSize = AVATAR_SIZE_MAP[style.avatarSize] || 56;
  const avatarRadius = AVATAR_RADIUS_MAP[style.avatarShape] || '999px';
  const avatarImg = hasAvatar
    ? `<img src="${escapeHtml(sanitizedAvatarUrl)}" alt="" width="${avatarSize}" height="${avatarSize}" style="border-radius:${avatarRadius};display:block;" />`
    : '';
  const avatarCellInline = hasAvatar
    ? `<td style="padding-right:12px;vertical-align:top;">${avatarImg}</td>`
    : '';

  const telLabel = labels.tel;
  const mailLabel = labels.email;
  const webLabel = labels.website;

  const contactItems = buildInlineContactItems(config, labels, accentColor);

  const socials: { key: SocialKey; label: string }[] = [
    { key: 'linkedin', label: 'LinkedIn' },
    { key: 'instagram', label: 'Instagram' },
    { key: 'facebook', label: 'Facebook' },
    { key: 'tiktok', label: 'TikTok' },
    { key: 'youtube', label: 'YouTube' },
    { key: 'x', label: 'X' },
    { key: 'github', label: 'GitHub' },
    { key: 'dribbble', label: 'Dribbble' },
    { key: 'behance', label: 'Behance' },
    { key: 'whatsapp', label: 'WhatsApp' },
    { key: 'telegram', label: 'Telegram' },
    { key: 'pinterest', label: 'Pinterest' },
  ];

  const socialKeyToPlatform: Record<SocialKey, SocialPlatform> = {
    linkedin: 'linkedin',
    instagram: 'instagram',
    facebook: 'facebook',
    tiktok: 'tiktok',
    youtube: 'youtube',
    x: 'twitter',
    github: 'github',
    dribbble: 'dribbble',
    behance: 'behance',
    whatsapp: 'whatsapp',
    telegram: 'telegram',
    pinterest: 'pinterest',
  };

  const getIconColor = (): string | undefined => {
    if (style.socialIcons.colorMode === 'accent') return accentColor;
    if (style.socialIcons.colorMode === 'text') return textColor;
    return undefined; // platform colors
  };

  const socialLinks = socials
    .filter(s => config.socials[s.key] && config.socials[s.key]?.trim().length)
    .map(s => {
      const url = sanitizeHrefUrl(config.socials[s.key]);
      if (!url) return '';

      if (style.socialIcons.showIcons) {
        const platform = socialKeyToPlatform[s.key];
        const iconSize = style.socialIcons.iconSize as IconSize;
        const iconColor = getIconColor();
        const icon = getSocialIcon(platform, iconSize, iconColor);
        return `<a href="${escapeHtml(url)}" style="display:inline-block;margin-right:10px;margin-bottom:2px;text-decoration:none;vertical-align:middle;" title="${s.label}">${icon}</a>`;
      }

      return `<a href="${escapeHtml(url)}" style="display:inline-block;margin-right:10px;margin-bottom:2px;color:${accentColor};text-decoration:none;font-size:${baseFontSize};">${s.label}</a>`;
    })
    .filter(Boolean);

  const ctaHtml =
    config.ctaLabel.trim() && config.ctaUrl.trim()
      ? buildCtaButtonHtml(config.ctaLabel.trim(), config.ctaUrl, {
          paddingTop: spacing.afterCta,
          ctaBorderRadius,
          background: accentColor,
          color: SIGNATURE_COLOR_WHITE,
          baseFontSize,
        })
      : '';

  const cta2Html =
    config.cta2Label.trim() && config.cta2Url.trim()
      ? buildCtaButtonHtml(config.cta2Label.trim(), config.cta2Url, {
          paddingTop: 6,
          ctaBorderRadius,
          background: 'transparent',
          border: `1px solid ${accentColor}`,
          color: accentColor,
          baseFontSize,
        })
      : '';

  const legalHtml = config.legalNote.trim()
    ? `<tr><td style="padding-top:${spacing.beforeLegal}px;font-size:${legalFontSize};line-height:1.4;color:${legalColor};">${formatMultiline(config.legalNote.trim())}</td></tr>`
    : '';

  const dividerColor = style.dividerColor || SIGNATURE_COLOR_DIVIDER;
  const dividerWidth = style.dividerWidth || 1;
  const dividerStyle = style.dividerStyle || 'solid';
  const dividerHtml = style.showDivider
    ? `<tr><td style="padding-top:10px;padding-bottom:10px;"><div style="border-top:${dividerWidth}px ${dividerStyle} ${dividerColor};width:100%;"></div></td></tr>`
    : '';

  const formalHtml = hasFormalLine
    ? `<tr><td style="padding-top:6px;font-size:11px;line-height:1.4;color:${textColor};">${formatMultiline(config.formalLine.trim())}</td></tr>`
    : '';

  const topLineHtml = hasTopLine
    ? `<tr><td style="padding:0 0 4px 0;font-size:11px;letter-spacing:0.06em;text-transform:uppercase;color:${textColor};">${escapeHtml(config.topLine.trim())}</td></tr>`
    : '';

  const nameRowHtml = buildNameRowHtml(
    config,
    spacing,
    nameFontSize,
    nameColor,
    hasNameTag,
    textColor,
  );

  const titleCompanyHtml = buildTitleCompanyHtml(
    config,
    spacing,
    hasJobTitle,
    hasCompany,
    jobTitleFontSize,
    jobTitleColor,
    companyColor,
    companyFontSize,
  );

  const extraLineHtml = hasExtraLine
    ? `<tr><td style="padding:0 0 ${spacing.afterExtra}px 0;color:${textColor};">${escapeHtml(config.extraLine.trim())}</td></tr>`
    : '';

  const addressHtml = hasAddress
    ? `<tr><td style="padding:0 0 6px 0;color:${textColor};font-size:${baseFontSize};">${formatMultiline(config.address.trim())}</td></tr>`
    : '';

  const contactHtml = contactItems.length
    ? `<tr><td style="padding:${spacing.afterContact}px 0 0 0;color:${contactColor};font-size:${contactFontSize};">${contactItems.join('<span style="margin-right:4px;">&nbsp;</span>')}</td></tr>`
    : '';

  const socialsHtml = socialLinks.length
    ? `<tr><td style="padding-top:${spacing.afterSocials}px;color:${socialsColor};font-size:${socialsFontSize};">${socialLinks.join('')}</td></tr>`
    : '';

  const headerBlock = `${topLineHtml}${nameRowHtml}${titleCompanyHtml}`;
  const contentBlock = `${extraLineHtml}${addressHtml}${contactHtml}${socialsHtml}${ctaHtml}${cta2Html}${dividerHtml}${formalHtml}${legalHtml}`;
  const innerRows = `${headerBlock}${contentBlock}`;

  const ctx: SignatureCtx = {
    config,
    spacing,
    fontFamily,
    baseFontSize,
    textColor,
    backgroundColor,
    borderStyle,
    paddingAll,
    accentColor,
    ctaBorderRadius,
    avatarSize,
    avatarRadius,
    sanitizedAvatarUrl,
    hasAvatar,
    avatarCellInline,
    hasTopLine,
    topLineHtml,
    nameRowHtml,
    nameFontSize,
    nameColor,
    hasNameTag,
    hasJobTitle,
    jobTitleColor,
    jobTitleFontSize,
    hasCompany,
    companyColor,
    companyFontSize,
    titleCompanyHtml,
    hasExtraLine,
    extraLineHtml,
    hasAddress,
    addressHtml,
    contactHtml,
    contactColor,
    contactFontSize,
    telLabel,
    mailLabel,
    webLabel,
    socialsHtml,
    socialLinks,
    socialsColor,
    socialsFontSize,
    ctaHtml,
    cta2Html,
    dividerHtml,
    formalHtml,
    hasFormalLine,
    legalColor,
    legalFontSize,
    legalHtml,
    contentBlock,
    innerRows,
  };

  const layoutWrapper = (LAYOUT_BUILDERS[layout] ?? buildStandardLayout)(ctx);

  return layoutWrapper.replace(/\s{2,}/g, ' ').trim();
}
