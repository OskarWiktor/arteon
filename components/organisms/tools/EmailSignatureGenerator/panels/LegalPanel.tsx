import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import InputColor from '@/components/atoms/form/InputColor';
import Textarea from '@/components/atoms/form/Textarea';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';
import { cn } from '@/lib/clsx';
import { flexCenterClasses, largeIconSizeClasses } from '@/lib/uiClasses';
import type { SignatureConfig, StyleConfig } from '@/types/tools/email';

type Props = {
  config: SignatureConfig;
  styleConfig: StyleConfig;
  onTextChange: <K extends keyof SignatureConfig>(
    key: K,
    value: SignatureConfig[K],
  ) => void;
  onStyleChange: <K extends keyof StyleConfig>(
    key: K,
    value: StyleConfig[K],
  ) => void;
  t: {
    legal: Record<string, string>;
  };
};

export default function LegalPanel({
  config,
  styleConfig,
  onTextChange,
  onStyleChange,
  t,
}: Props) {
  return (
    <div className='space-y-3'>
      <span className='tool-value'>{t.legal.title}</span>
      <Textarea
        value={config.legalNote}
        onChange={e => onTextChange('legalNote', e.target.value)}
        rows={6}
        placeholder={t.legal.placeholder}
      />
      <InputCheckboxWithLabel
        id='divider-toggle'
        checked={styleConfig.showDivider}
        onChange={v => onStyleChange('showDivider', v)}
        label={t.legal.showDivider}
      />
      {styleConfig.showDivider && (
        <div className='space-y-3 border-t border-neutral-200 pt-3'>
          <div>
            <p className='tool-label mb-1'>{t.legal.dividerStyle}</p>
            <div className='flex flex-wrap gap-2'>
              <ButtonPill
                value='solid'
                current={styleConfig.dividerStyle}
                label={t.legal.dividerStyleSolid}
                onChange={v => onStyleChange('dividerStyle', v)}
              />
              <ButtonPill
                value='dashed'
                current={styleConfig.dividerStyle}
                label={t.legal.dividerStyleDashed}
                onChange={v => onStyleChange('dividerStyle', v)}
              />
              <ButtonPill
                value='dotted'
                current={styleConfig.dividerStyle}
                label={t.legal.dividerStyleDotted}
                onChange={v => onStyleChange('dividerStyle', v)}
              />
            </div>
          </div>
          <div>
            <p className='tool-label mb-1'>{t.legal.dividerWidth}</p>
            <div className='flex flex-wrap gap-2'>
              <ButtonPill
                value={1}
                current={styleConfig.dividerWidth}
                label='1 px'
                onChange={v => onStyleChange('dividerWidth', v)}
              />
              <ButtonPill
                value={2}
                current={styleConfig.dividerWidth}
                label='2 px'
                onChange={v => onStyleChange('dividerWidth', v)}
              />
              <ButtonPill
                value={3}
                current={styleConfig.dividerWidth}
                label='3 px'
                onChange={v => onStyleChange('dividerWidth', v)}
              />
            </div>
          </div>
          <div>
            <p className='tool-label mb-1'>{t.legal.dividerColor}</p>
            <div className='flex items-center gap-2'>
              <button
                type='button'
                onClick={() => onStyleChange('dividerColor', '')}
                className={cn(
                  'tool-button',
                  !styleConfig.dividerColor
                    ? 'bg-primary text-white'
                    : 'tool-button-inactive',
                )}
              >
                {t.legal.dividerColorDefault}
              </button>
              <div className='relative'>
                <InputColor
                  value={styleConfig.dividerColor || '#e5e7eb'}
                  onChange={e => onStyleChange('dividerColor', e.target.value)}
                  className='absolute inset-0 h-full! w-full! opacity-0'
                />
                <div
                  className={cn(
                    'cursor-pointer rounded border-2',
                    flexCenterClasses,
                    largeIconSizeClasses,
                    styleConfig.dividerColor
                      ? 'border-mid'
                      : 'border-neutral-300',
                  )}
                  style={{
                    backgroundColor: styleConfig.dividerColor || '#e5e7eb',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
