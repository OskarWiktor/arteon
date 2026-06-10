'use client';

import { useState } from 'react';
import Button from '@/components/atoms/buttons/Button';
import ToolAlert from '@/components/atoms/ToolAlert';
import FileDropzone from '@/components/molecules/FileDropzone';
import TextareaWithLabel from '@/components/molecules/form/TextareaWithLabel';
import FormatSelector from '@/components/organisms/tools/FormatPicker/FormatSelector';
import { useDictionary } from '@/lib/LocaleContext';
import { flexCenterClasses } from '@/lib/uiClasses';
import { cn } from '@/lib/clsx';
import { downloadBlob } from '@/utils/download';
import Card from '@/components/organisms/Card';

type Base64Mode = 'encode' | 'decode';

interface Base64ConverterProps {
  mode: Base64Mode;
}

export default function Base64Converter({ mode }: Base64ConverterProps) {
  const { imageConverter: t } = useDictionary();
  const [base64, setBase64] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // ENCODE: image file → Base64 string
  const handleAddFiles = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    setError(null);
    const file = fileList[0];

    if (!file.type.startsWith('image/')) {
      setError(t.onlyImageFiles);
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setBase64(dataUrl);
      setPreviewUrl(dataUrl);
    };
    reader.onerror = () => setError(t.fileReadError);
    reader.readAsDataURL(file);
  };

  const handleDecode = () => {
    if (!base64.trim()) {
      setError(t.base64PasteEmpty);
      return;
    }
    setError(null);

    let dataUrl = base64.trim();
    if (!dataUrl.startsWith('data:')) {
      let mime = 'image/png';
      try {
        const header = atob(dataUrl.slice(0, 24));
        if (header.startsWith('\xFF\xD8')) mime = 'image/jpeg';
        else if (header.startsWith('\x89PNG')) mime = 'image/png';
        else if (header.startsWith('GIF')) mime = 'image/gif';
        else if (header.startsWith('RIFF') && header.includes('WEBP'))
          mime = 'image/webp';
        else if (header.startsWith('<svg') || header.startsWith('<?xml'))
          mime = 'image/svg+xml';
        else if (header.includes('ftypavif')) mime = 'image/avif';
        else if (header.startsWith('II') || header.startsWith('MM'))
          mime = 'image/tiff';
      } catch {
        setError(t.base64Invalid);
        setPreviewUrl(null);
        return;
      }
      dataUrl = `data:${mime};base64,${dataUrl}`;
    }

    // Validate it's actually a valid image
    const img = new Image();
    img.onload = () => {
      setPreviewUrl(dataUrl);
      setFileName(null);
    };
    img.onerror = () => {
      setError(t.base64Invalid);
      setPreviewUrl(null);
    };
    img.src = dataUrl;
  };

  const handleCopy = async () => {
    if (!base64) return;
    try {
      await navigator.clipboard.writeText(base64);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = base64;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    // Extract mime from data URL
    const match = previewUrl.match(/^data:([^;]+);/);
    const mime = match?.[1] ?? 'image/png';
    const extMap: Record<string, string> = {
      'image/jpeg': '.jpg',
      'image/png': '.png',
      'image/webp': '.webp',
      'image/gif': '.gif',
      'image/svg+xml': '.svg',
      'image/bmp': '.bmp',
      'image/avif': '.avif',
      'image/tiff': '.tiff',
    };
    const ext = extMap[mime] ?? '.png';

    const byteString = atob(previewUrl.split(',')[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++)
      ia[i] = byteString.charCodeAt(i);
    const blob = new Blob([ab], { type: mime });
    downloadBlob(blob, `${t.decodedImageFilename}${ext}`);
  };

  const handleClear = () => {
    setBase64('');
    setPreviewUrl(null);
    setFileName(null);
    setError(null);
    setCopied(false);
  };

  if (mode === 'encode') {
    return (
      <div className='overflow-hidden'>
        <FormatSelector
          currentSource='jpg'
          currentTarget='base64'
          hasFiles={!!base64}
        />
        <div className='grid gap-4 md:grid-cols-2'>
          <Card interactive={false} padding='lg' variant='outlined'>
            <h2 className='h6'>{t.imageHeading}</h2>
            <FileDropzone
              accept='image/*'
              onFiles={handleAddFiles}
              dragLabel={t.dragImageHere}
              clickLabel={t.clickToSelect}
              formatsLabel='JPG, PNG, WebP, SVG, GIF, BMP'
            />
            {fileName && (
              <p className='tool-meta'>
                {t.fileLabel} <strong>{fileName}</strong>
              </p>
            )}
            {error && <ToolAlert variant='error'>{error}</ToolAlert>}
            <Button
              onClick={handleClear}
              disabled={!base64}
              className='disabled:opacity-40'
              size='small'
            >
              {t.clearAll}
            </Button>
          </Card>

          <Card interactive={false} padding='lg' variant='outlined'>
            <TextareaWithLabel
              label='Base64'
              className='min-h-75 resize-y'
              value={base64}
              readOnly
              placeholder={t.base64Placeholder}
            />
            <div className='flex flex-wrap gap-3'>
              <Button
                onClick={handleCopy}
                disabled={!base64}
                className='disabled:opacity-40'
                size='small'
              >
                {copied ? t.copied : t.copy}
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className='overflow-hidden'>
      <FormatSelector
        currentSource='base64'
        currentTarget='jpg'
        hasFiles={!!base64}
      />
      <div className='grid gap-4 md:grid-cols-2'>
        <Card interactive={false} padding='lg' variant='outlined'>
          <TextareaWithLabel
            label='Base64'
            className='min-h-75 w-full resize-y'
            value={base64}
            onChange={setBase64}
            placeholder={t.base64PastePlaceholder}
          />
          {error && <ToolAlert variant='error'>{error}</ToolAlert>}
          <div className='flex flex-wrap gap-3'>
            <Button
              variant='accent'
              onClick={handleDecode}
              disabled={!base64.trim()}
              className='disabled:opacity-60'
              size='small'
            >
              {t.decodeBtn}
            </Button>
            <Button
              onClick={handleClear}
              disabled={!base64}
              className='disabled:opacity-40'
              size='small'
            >
              {t.clearAll}
            </Button>
          </div>
        </Card>

        <Card interactive={false} padding='lg' variant='outlined'>
          <h2 className='h6'>{t.imagePreview}</h2>
          {previewUrl ? (
            <div className='space-y-3'>
              <div
                className={cn(
                  'rounded-lg border border-neutral-200 bg-neutral-50 p-4',
                  flexCenterClasses,
                )}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={previewUrl}
                  alt={t.decodedImageAlt}
                  className='max-h-100 max-w-full object-contain'
                />
              </div>
              <Button onClick={handleDownload} size='small'>
                {t.download}
              </Button>
            </div>
          ) : (
            <div
              className={cn(
                'min-h-75 rounded-lg border border-neutral-200 bg-neutral-50 p-4',
                flexCenterClasses,
              )}
            >
              <p className='tool-meta'>{t.base64DecodeHint}</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
