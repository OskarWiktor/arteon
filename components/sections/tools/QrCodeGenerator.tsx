'use client';

import { useCallback, useMemo, useState } from 'react';
import Button from '@/components/ui/buttons/Button';
import ToolSection from '@/components/ui/tools/ToolSection';
import ToolInfo from '@/components/ui/tools/ToolInfo';
import ToolHelper from '@/components/ui/tools/ToolHelper';
import ToolAlert from '@/components/ui/tools/ToolAlert';
import { useDebouncedEffect } from '@/hooks/useDebouncedEffect';
import {
  generateQrPng,
  generateQrSvg,
  buildVCardString,
  buildEmailString,
  buildPhoneString,
  isContrastSufficient,
  calculateContrast,
  type QrDataType,
  type VCardData,
  type EmailData,
} from '@/lib/tools/qr/generateQr';
import { downloadFromUrl } from '@/lib/tools/download';
import { useLocale, type Locale } from '@/lib/LocaleContext';

const ui = {
  pl: {
    dataType: 'Typ danych',
    types: {
      url: 'Adres URL',
      text: 'Tekst',
      vcard: 'Wizytówka (vCard)',
      email: 'E-mail',
      phone: 'Telefon',
    },
    urlPlaceholder: 'https://www.twoja-strona.pl',
    textPlaceholder: 'Wpisz dowolny tekst...',
    phonePlaceholder: '+48 123 456 789',
    size: 'Rozmiar (px)',
    margin: 'Margines (quiet zone)',
    qrColor: 'Kolor kodu QR',
    bgColor: 'Kolor tła',
    errorCorrection: 'Poziom korekcji błędów',
    errorCorrectionLevels: {
      L: 'L - Niski (7%)',
      M: 'M - Średni (15%)',
      Q: 'Q - Wysoki (25%)',
      H: 'H - Maksymalny (30%)',
    },
    preview: 'Podgląd kodu QR',
    downloadPng: 'Pobierz PNG',
    downloadSvg: 'Pobierz SVG',
    contrastWarning: 'Kontrast między kolorami jest zbyt niski. Kod QR może być trudny do zeskanowania.',
    contrastRatio: 'Współczynnik kontrastu',
    recommended: 'Zalecane minimum: 3:1',
    enterData: 'Wpisz dane, aby wygenerować kod QR.',
    vcard: {
      firstName: 'Imię',
      lastName: 'Nazwisko',
      organization: 'Firma (opcjonalnie)',
      title: 'Stanowisko (opcjonalnie)',
      phone: 'Telefon (opcjonalnie)',
      email: 'E-mail (opcjonalnie)',
      website: 'Strona WWW (opcjonalnie)',
      address: 'Adres (opcjonalnie)',
    },
    email: {
      to: 'Adres e-mail',
      subject: 'Temat (opcjonalnie)',
      body: 'Treść (opcjonalnie)',
    },
    printTip: 'Dla materiałów drukowanych zalecamy rozmiar min. 300px i poziom korekcji H.',
  },
  en: {
    dataType: 'Data type',
    types: {
      url: 'URL address',
      text: 'Text',
      vcard: 'Business card (vCard)',
      email: 'Email',
      phone: 'Phone',
    },
    urlPlaceholder: 'https://www.your-website.com',
    textPlaceholder: 'Enter any text...',
    phonePlaceholder: '+1 234 567 890',
    size: 'Size (px)',
    margin: 'Margin (quiet zone)',
    qrColor: 'QR code color',
    bgColor: 'Background color',
    errorCorrection: 'Error correction level',
    errorCorrectionLevels: {
      L: 'L - Low (7%)',
      M: 'M - Medium (15%)',
      Q: 'Q - High (25%)',
      H: 'H - Maximum (30%)',
    },
    preview: 'QR code preview',
    downloadPng: 'Download PNG',
    downloadSvg: 'Download SVG',
    contrastWarning: 'Contrast between colors is too low. The QR code may be difficult to scan.',
    contrastRatio: 'Contrast ratio',
    recommended: 'Recommended minimum: 3:1',
    enterData: 'Enter data to generate a QR code.',
    vcard: {
      firstName: 'First name',
      lastName: 'Last name',
      organization: 'Company (optional)',
      title: 'Job title (optional)',
      phone: 'Phone (optional)',
      email: 'Email (optional)',
      website: 'Website (optional)',
      address: 'Address (optional)',
    },
    email: {
      to: 'Email address',
      subject: 'Subject (optional)',
      body: 'Body (optional)',
    },
    printTip: 'For printed materials, we recommend a minimum size of 300px and error correction level H.',
  },
} as const satisfies Record<Locale, unknown>;

const DEFAULT_SIZE = 300;
const DEFAULT_MARGIN = 2;
const DEFAULT_DARK = '#000000';
const DEFAULT_LIGHT = '#ffffff';

type ErrorCorrectionLevel = 'L' | 'M' | 'Q' | 'H';

export default function QrCodeGenerator() {
  const locale = useLocale();
  const t = ui[locale];

  const [dataType, setDataType] = useState<QrDataType>('url');
  const [urlValue, setUrlValue] = useState('');
  const [textValue, setTextValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const [vcardData, setVcardData] = useState<VCardData>({
    firstName: '',
    lastName: '',
    organization: '',
    title: '',
    phone: '',
    email: '',
    website: '',
    address: '',
  });

  const [emailData, setEmailData] = useState<EmailData>({
    to: '',
    subject: '',
    body: '',
  });

  const [size, setSize] = useState(DEFAULT_SIZE);
  const [margin, setMargin] = useState(DEFAULT_MARGIN);
  const [darkColor, setDarkColor] = useState(DEFAULT_DARK);
  const [lightColor, setLightColor] = useState(DEFAULT_LIGHT);
  const [errorLevel, setErrorLevel] = useState<ErrorCorrectionLevel>('M');

  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const [qrSvg, setQrSvg] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const qrData = useMemo(() => {
    switch (dataType) {
      case 'url':
        return urlValue.trim();
      case 'text':
        return textValue.trim();
      case 'phone':
        return phoneValue.trim() ? buildPhoneString(phoneValue.trim()) : '';
      case 'vcard':
        if (!vcardData.firstName.trim() || !vcardData.lastName.trim()) return '';
        return buildVCardString({
          ...vcardData,
          firstName: vcardData.firstName.trim(),
          lastName: vcardData.lastName.trim(),
        });
      case 'email':
        if (!emailData.to.trim()) return '';
        return buildEmailString(emailData);
      default:
        return '';
    }
  }, [dataType, urlValue, textValue, phoneValue, vcardData, emailData]);

  const contrastOk = useMemo(() => isContrastSufficient(darkColor, lightColor), [darkColor, lightColor]);
  const contrastValue = useMemo(() => calculateContrast(darkColor, lightColor).toFixed(2), [darkColor, lightColor]);

  const generateQr = useCallback(async () => {
    if (!qrData) {
      setQrDataUrl(null);
      setQrSvg(null);
      return;
    }

    setIsGenerating(true);
    try {
      const options = {
        data: qrData,
        size,
        margin,
        darkColor,
        lightColor,
        errorCorrectionLevel: errorLevel,
      };

      const [pngUrl, svgStr] = await Promise.all([generateQrPng(options), generateQrSvg(options)]);

      setQrDataUrl(pngUrl);
      setQrSvg(svgStr);
    } catch {
      setQrDataUrl(null);
      setQrSvg(null);
    } finally {
      setIsGenerating(false);
    }
  }, [qrData, size, margin, darkColor, lightColor, errorLevel]);

  useDebouncedEffect(
    () => {
      void generateQr();
    },
    300,
    [generateQr],
  );

  const handleDownloadPng = () => {
    if (!qrDataUrl) return;
    downloadFromUrl(qrDataUrl, `qr-code-${Date.now()}.png`);
  };

  const handleDownloadSvg = () => {
    if (!qrSvg) return;
    const blob = new Blob([qrSvg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    downloadFromUrl(url, `qr-code-${Date.now()}.svg`);
    URL.revokeObjectURL(url);
  };

  const updateVcard = (field: keyof VCardData, value: string) => {
    setVcardData((prev) => ({ ...prev, [field]: value }));
  };

  const updateEmail = (field: keyof EmailData, value: string) => {
    setEmailData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="grid gap-4 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
      <ToolSection className="space-y-4">
        <div>
          <label className="tool-label mb-2 block">{t.dataType}</label>
          <select value={dataType} onChange={(e) => setDataType(e.target.value as QrDataType)} className="tool-select w-full">
            <option value="url">{t.types.url}</option>
            <option value="text">{t.types.text}</option>
            <option value="vcard">{t.types.vcard}</option>
            <option value="email">{t.types.email}</option>
            <option value="phone">{t.types.phone}</option>
          </select>
        </div>

        {dataType === 'url' && (
          <div>
            <label className="tool-label mb-2 block">{t.types.url}</label>
            <input type="url" value={urlValue} onChange={(e) => setUrlValue(e.target.value)} placeholder={t.urlPlaceholder} className="tool-input w-full" />
          </div>
        )}

        {dataType === 'text' && (
          <div>
            <label className="tool-label mb-2 block">{t.types.text}</label>
            <textarea value={textValue} onChange={(e) => setTextValue(e.target.value)} placeholder={t.textPlaceholder} rows={4} className="tool-input w-full resize-none" />
          </div>
        )}

        {dataType === 'phone' && (
          <div>
            <label className="tool-label mb-2 block">{t.types.phone}</label>
            <input type="tel" value={phoneValue} onChange={(e) => setPhoneValue(e.target.value)} placeholder={t.phonePlaceholder} className="tool-input w-full" />
          </div>
        )}

        {dataType === 'vcard' && (
          <div className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label className="tool-label mb-1 block">{t.vcard.firstName} *</label>
                <input type="text" value={vcardData.firstName} onChange={(e) => updateVcard('firstName', e.target.value)} className="tool-input w-full" />
              </div>
              <div>
                <label className="tool-label mb-1 block">{t.vcard.lastName} *</label>
                <input type="text" value={vcardData.lastName} onChange={(e) => updateVcard('lastName', e.target.value)} className="tool-input w-full" />
              </div>
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.organization}</label>
              <input type="text" value={vcardData.organization} onChange={(e) => updateVcard('organization', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.title}</label>
              <input type="text" value={vcardData.title} onChange={(e) => updateVcard('title', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.phone}</label>
              <input type="tel" value={vcardData.phone} onChange={(e) => updateVcard('phone', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.email}</label>
              <input type="email" value={vcardData.email} onChange={(e) => updateVcard('email', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.website}</label>
              <input type="url" value={vcardData.website} onChange={(e) => updateVcard('website', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.vcard.address}</label>
              <input type="text" value={vcardData.address} onChange={(e) => updateVcard('address', e.target.value)} className="tool-input w-full" />
            </div>
          </div>
        )}

        {dataType === 'email' && (
          <div className="space-y-3">
            <div>
              <label className="tool-label mb-1 block">{t.email.to} *</label>
              <input type="email" value={emailData.to} onChange={(e) => updateEmail('to', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.email.subject}</label>
              <input type="text" value={emailData.subject} onChange={(e) => updateEmail('subject', e.target.value)} className="tool-input w-full" />
            </div>
            <div>
              <label className="tool-label mb-1 block">{t.email.body}</label>
              <textarea value={emailData.body} onChange={(e) => updateEmail('body', e.target.value)} rows={3} className="tool-input w-full resize-none" />
            </div>
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="tool-label mb-2 block">{t.size}</label>
            <select value={size} onChange={(e) => setSize(Number(e.target.value))} className="tool-select w-full">
              <option value={150}>150 px</option>
              <option value={200}>200 px</option>
              <option value={300}>300 px</option>
              <option value={400}>400 px</option>
              <option value={500}>500 px</option>
              <option value={600}>600 px</option>
              <option value={800}>800 px</option>
              <option value={1000}>1000 px</option>
            </select>
          </div>
          <div>
            <label className="tool-label mb-2 block">{t.margin}</label>
            <select value={margin} onChange={(e) => setMargin(Number(e.target.value))} className="tool-select w-full">
              <option value={0}>0 (brak)</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
            </select>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="tool-label mb-2 block">{t.qrColor}</label>
            <div className="flex items-center gap-2">
              <input type="color" value={darkColor} onChange={(e) => setDarkColor(e.target.value)} className="tool-color-picker h-10! w-12!" />
              <input type="text" value={darkColor} onChange={(e) => setDarkColor(e.target.value)} className="tool-input h-10 flex-1" />
            </div>
          </div>
          <div>
            <label className="tool-label mb-2 block">{t.bgColor}</label>
            <div className="flex items-center gap-2">
              <input type="color" value={lightColor} onChange={(e) => setLightColor(e.target.value)} className="tool-color-picker h-10! w-12!" />
              <input type="text" value={lightColor} onChange={(e) => setLightColor(e.target.value)} className="tool-input h-10 flex-1" />
            </div>
          </div>
        </div>

        <div>
          <label className="tool-label mb-2 block">{t.errorCorrection}</label>
          <select value={errorLevel} onChange={(e) => setErrorLevel(e.target.value as ErrorCorrectionLevel)} className="tool-select w-full">
            <option value="L">{t.errorCorrectionLevels.L}</option>
            <option value="M">{t.errorCorrectionLevels.M}</option>
            <option value="Q">{t.errorCorrectionLevels.Q}</option>
            <option value="H">{t.errorCorrectionLevels.H}</option>
          </select>
          <ToolHelper className="mt-1">{t.printTip}</ToolHelper>
        </div>
      </ToolSection>

      <ToolSection className="space-y-4">
        {!contrastOk && (
          <ToolAlert variant="warning">
            {t.contrastWarning}
            <br />
            <span className="tool-meta">
              {t.contrastRatio}: {contrastValue}:1 ({t.recommended})
            </span>
          </ToolAlert>
        )}

        <div className="flex flex-col items-center">
          <p className="tool-label mb-3">{t.preview}</p>
          <div
            className="flex items-center justify-center rounded-lg border border-neutral-200 p-4"
            style={{ backgroundColor: lightColor, minWidth: Math.min(size, 300) + 32, minHeight: Math.min(size, 300) + 32 }}
          >
            {qrDataUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element -- QR code is a generated data URL, next/image is not applicable */
              <img src={qrDataUrl} alt="QR Code" style={{ width: Math.min(size, 300), height: Math.min(size, 300) }} className="block" />
            ) : (
              <ToolInfo className="text-center">
                <ToolHelper>{t.enterData}</ToolHelper>
              </ToolInfo>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <Button onClick={handleDownloadPng} disabled={!qrDataUrl || isGenerating} variant="accent" size="small">
            {t.downloadPng}
          </Button>
          <Button onClick={handleDownloadSvg} disabled={!qrSvg || isGenerating} size="small">
            {t.downloadSvg}
          </Button>
        </div>
      </ToolSection>
    </div>
  );
}
