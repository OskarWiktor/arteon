'use client';

import { useState } from 'react';
import Button from '@/components/atoms/buttons/Button';
import ToolAlert from '@/components/atoms/ToolAlert';
import ToolInfo from '@/components/atoms/ToolInfo';
import InputColorWithLabel from '@/components/molecules/form/InputColorWithLabel';
import InputWithLabel from '@/components/molecules/form/InputWithLabel';
import SelectWithLabel from '@/components/molecules/form/SelectWithLabel';
import TextareaWithLabel from '@/components/molecules/form/TextareaWithLabel';
import ToolHelper from '@/components/molecules/tools/ToolHelper';
import Card from '@/components/organisms/Card';
import { useDebouncedEffect } from '@/hooks/useDebouncedEffect';
import { ui } from '@/lib/i18n/tools/qrCode';
import { useLocale } from '@/lib/LocaleContext';
import {
  generateQrPng,
  generateQrSvg,
  buildVCardString,
  buildEmailString,
  buildPhoneString,
  isContrastSufficient,
  calculateContrast,
} from '@/lib/tools/generateQr';
import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import type { QrDataType, VCardData, EmailData } from '@/types/tools/qr';
import { downloadFromUrl } from '@/utils/download';

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

  const qrData = (() => {
    switch (dataType) {
      case 'url':
        return urlValue.trim();
      case 'text':
        return textValue.trim();
      case 'phone':
        return phoneValue.trim() ? buildPhoneString(phoneValue.trim()) : '';
      case 'vcard':
        if (!vcardData.firstName.trim() || !vcardData.lastName.trim())
          return '';
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
  })();

  const contrastOk = isContrastSufficient(darkColor, lightColor);
  const contrastValue = calculateContrast(darkColor, lightColor).toFixed(2);

  const generateQr = async () => {
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

      const [pngUrl, svgStr] = await Promise.all([
        generateQrPng(options),
        generateQrSvg(options),
      ]);

      setQrDataUrl(pngUrl);
      setQrSvg(svgStr);
    } catch {
      setQrDataUrl(null);
      setQrSvg(null);
    } finally {
      setIsGenerating(false);
    }
  };

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
    setVcardData(prev => ({ ...prev, [field]: value }));
  };

  const updateEmail = (field: keyof EmailData, value: string) => {
    setEmailData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className='grid gap-4 overflow-hidden md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]'>
      <Card interactive={false} padding='lg' variant='outlined'>
        <SelectWithLabel
          variant='tool'
          label={t.dataType}
          value={dataType}
          onChange={v => setDataType(v as QrDataType)}
        >
          <option value='url'>{t.types.url}</option>
          <option value='text'>{t.types.text}</option>
          <option value='vcard'>{t.types.vcard}</option>
          <option value='email'>{t.types.email}</option>
          <option value='phone'>{t.types.phone}</option>
        </SelectWithLabel>

        {dataType === 'url' && (
          <InputWithLabel
            variant='tool'
            label={t.types.url}
            value={urlValue}
            onChange={setUrlValue}
            type='url'
            placeholder={t.urlPlaceholder}
          />
        )}

        {dataType === 'text' && (
          <div className='mb-2'>
            <TextareaWithLabel
              label={t.types.text}
              value={textValue}
              onChange={setTextValue}
              placeholder={t.textPlaceholder}
              rows={4}
            />
          </div>
        )}

        {dataType === 'phone' && (
          <InputWithLabel
            variant='tool'
            label={t.types.phone}
            value={phoneValue}
            onChange={setPhoneValue}
            type='tel'
            placeholder={t.phonePlaceholder}
          />
        )}

        {dataType === 'vcard' && (
          <div className='space-y-3'>
            <div className='grid gap-3 sm:grid-cols-2'>
              <InputWithLabel
                variant='tool'
                label={t.vcard.firstName}
                value={vcardData.firstName}
                onChange={v => updateVcard('firstName', v)}
                required
              />
              <InputWithLabel
                variant='tool'
                label={t.vcard.lastName}
                value={vcardData.lastName}
                onChange={v => updateVcard('lastName', v)}
                required
              />
            </div>
            <InputWithLabel
              variant='tool'
              label={t.vcard.organization}
              value={vcardData.organization ?? ''}
              onChange={v => updateVcard('organization', v)}
            />
            <InputWithLabel
              variant='tool'
              label={t.vcard.title}
              value={vcardData.title ?? ''}
              onChange={v => updateVcard('title', v)}
            />
            <InputWithLabel
              variant='tool'
              label={t.vcard.phone}
              value={vcardData.phone ?? ''}
              onChange={v => updateVcard('phone', v)}
              type='tel'
            />
            <InputWithLabel
              variant='tool'
              label={t.vcard.email}
              value={vcardData.email ?? ''}
              onChange={v => updateVcard('email', v)}
              type='email'
            />
            <InputWithLabel
              variant='tool'
              label={t.vcard.website}
              value={vcardData.website ?? ''}
              onChange={v => updateVcard('website', v)}
              type='url'
            />
            <InputWithLabel
              variant='tool'
              label={t.vcard.address}
              value={vcardData.address ?? ''}
              onChange={v => updateVcard('address', v)}
            />
          </div>
        )}

        {dataType === 'email' && (
          <div className='space-y-3'>
            <InputWithLabel
              variant='tool'
              label={t.email.to}
              value={emailData.to}
              onChange={v => updateEmail('to', v)}
              type='email'
              required
            />
            <InputWithLabel
              variant='tool'
              label={t.email.subject}
              value={emailData.subject ?? ''}
              onChange={v => updateEmail('subject', v)}
            />
            <div className='mb-1'>
              <TextareaWithLabel
                label={t.email.body}
                value={emailData.body}
                onChange={value => updateEmail('body', value)}
                rows={3}
                className='w-full resize-none'
              />
            </div>
          </div>
        )}

        <div className='grid gap-3 sm:grid-cols-2'>
          <SelectWithLabel
            variant='tool'
            label={t.size}
            value={size}
            onChange={v => setSize(Number(v))}
          >
            <option value={150}>150 px</option>
            <option value={200}>200 px</option>
            <option value={300}>300 px</option>
            <option value={400}>400 px</option>
            <option value={500}>500 px</option>
            <option value={600}>600 px</option>
            <option value={800}>800 px</option>
            <option value={1000}>1000 px</option>
          </SelectWithLabel>
          <SelectWithLabel
            variant='tool'
            label={t.margin}
            value={margin}
            onChange={v => setMargin(Number(v))}
          >
            <option value={0}>{t.marginNone}</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </SelectWithLabel>
        </div>

        <div className='grid gap-3 sm:grid-cols-2'>
          <div className='mb-2'>
            <InputColorWithLabel
              label={t.qrColor}
              withTextField
              value={darkColor}
              onChange={setDarkColor}
            />
          </div>
          <div className='mb-2'>
            <InputColorWithLabel
              label={t.bgColor}
              withTextField
              value={lightColor}
              onChange={setLightColor}
            />
          </div>
        </div>

        <div>
          <SelectWithLabel
            variant='tool'
            label={t.errorCorrection}
            value={errorLevel}
            onChange={v => setErrorLevel(v as ErrorCorrectionLevel)}
          >
            <option value='L'>{t.errorCorrectionLevels.L}</option>
            <option value='M'>{t.errorCorrectionLevels.M}</option>
            <option value='Q'>{t.errorCorrectionLevels.Q}</option>
            <option value='H'>{t.errorCorrectionLevels.H}</option>
          </SelectWithLabel>
          <ToolHelper className='mt-1'>{t.printTip}</ToolHelper>
        </div>
      </Card>

      <Card interactive={false} padding='lg' variant='outlined'>
        {!contrastOk && (
          <ToolAlert variant='warning'>
            {t.contrastWarning}
            <br />
            <span className='tool-meta'>
              {t.contrastRatio}: {contrastValue}:1 ({t.recommended})
            </span>
          </ToolAlert>
        )}

        <div className='flex flex-col items-center'>
          <div
            className={cn(
              'max-w-full rounded-md border border-neutral-200 p-4',
              flexCenterClasses,
            )}
            style={{
              backgroundColor: lightColor,
              minWidth: Math.min(size, 300) + 32,
              minHeight: Math.min(size, 300) + 32,
            }}
          >
            {qrDataUrl ? (
              /* eslint-disable-next-line @next/next/no-img-element -- QR code is a generated data URL, next/image is not applicable */
              <img
                src={qrDataUrl}
                alt='QR Code'
                style={{
                  width: Math.min(size, 300),
                  height: Math.min(size, 300),
                }}
                className='block'
              />
            ) : (
              <ToolInfo className='text-center'>
                <ToolHelper>{t.enterData}</ToolHelper>
              </ToolInfo>
            )}
          </div>
        </div>

        <div className='mt-5 flex flex-wrap justify-center gap-3'>
          <Button
            onClick={handleDownloadPng}
            disabled={!qrDataUrl || isGenerating}
            variant='accent'
            size='small'
          >
            {t.downloadPng}
          </Button>
          <Button
            onClick={handleDownloadSvg}
            disabled={!qrSvg || isGenerating}
            size='small'
          >
            {t.downloadSvg}
          </Button>
        </div>
      </Card>
    </div>
  );
}
