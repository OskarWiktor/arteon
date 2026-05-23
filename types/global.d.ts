// Module declaration for turndown-plugin-gfm (no built-in types)
declare module 'turndown-plugin-gfm' {
  import type TurndownService from 'turndown';
  type TurndownPlugin = (service: TurndownService) => void;
  export const gfm: TurndownPlugin;
  export const tables: TurndownPlugin;
  export const strikethrough: TurndownPlugin;
  export const taskListItems: TurndownPlugin;
}

// Module declaration for gifenc (no built-in types)
declare module 'gifenc' {
  interface GIFEncoderInstance {
    writeFrame(
      index: Uint8Array,
      width: number,
      height: number,
      opts?: { palette?: number[][]; delay?: number },
    ): void;
    finish(): void;
    bytes(): Uint8Array;
    bytesView(): Uint8Array;
  }
  export function GIFEncoder(): GIFEncoderInstance;
  export function quantize(
    rgba: Uint8Array | Uint8ClampedArray,
    maxColors: number,
    options?: { format?: string },
  ): number[][];
  export function applyPalette(
    rgba: Uint8Array | Uint8ClampedArray,
    palette: number[][],
    format?: string,
  ): Uint8Array;
}

// Global type declarations for window extensions

type ConsentValue = 'granted' | 'denied';

interface Window {
  __GA_ID?: string;
  ArteonConsent?: { open: () => void };
  gtag?: (...args: unknown[]) => void;
  dataLayer?: unknown[];
  googlefc?: {
    callbackQueue?: Array<Record<string, () => void>>;
    showRevocationMessage?: () => void;
    getConsentedProviderIds?: () => number[];
    getGoogleConsentModeValues?: () => {
      adStoragePurposeConsentStatus?: number;
      adUserDataPurposeConsentStatus?: number;
      adPersonalizationPurposeConsentStatus?: number;
      analyticsStoragePurposeConsentStatus?: number;
    };
    ConsentModePurposeStatusEnum?: {
      CONSENT_MODE_PURPOSE_STATUS_UNKNOWN: number;
      CONSENT_MODE_PURPOSE_STATUS_GRANTED: number;
      CONSENT_MODE_PURPOSE_STATUS_DENIED: number;
      CONSENT_MODE_PURPOSE_STATUS_NOT_APPLICABLE: number;
      CONSENT_MODE_PURPOSE_STATUS_NOT_CONFIGURED: number;
    };
  };
}
