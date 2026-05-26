import type { StyleConfig, FontSizeOption, BorderSides } from '@/types/tools/email';
import { FONT_OPTIONS } from '@/lib/tools/email/signatureDefaults';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import InputColor from '@/components/atoms/form/InputColor';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';

type ThemePreset = {
  id: string;
  name: string;
  accentColor: string;
  textColor: string;
};

type Props = {
  styleConfig: StyleConfig;
  themeId: string;
  themePresets: ThemePreset[];
  onStyleChange: <K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) => void;
  onApplyTheme: (presetId: string) => void;
  t: {
    appearance: Record<string, string>;
    border: Record<string, string>;
  };
};

export default function AppearancePanel({
  styleConfig,
  themeId,
  themePresets,
  onStyleChange,
  onApplyTheme,
  t,
}: Props) {
  return (
    <div className='space-y-4'>
      <div>
        <span className='tool-value mb-2'>{t.appearance.themeTitle}</span>
        <div className='flex flex-wrap gap-2'>
          {themePresets.map(preset => (
            <ButtonPill
              key={preset.id}
              value={preset.id}
              current={themeId}
              onChange={onApplyTheme}
              className='gap-2'
              label={
                <>
                  <span className='flex h-4 w-4 items-center justify-center rounded-lg border border-neutral-300'>
                    <span
                      className='h-3 w-3 rounded-lg'
                      style={{ backgroundColor: preset.accentColor }}
                    />
                  </span>
                  {preset.name}
                </>
              }
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-3 gap-3'>
        <div>
          <p className='tool-label mb-1'>{t.appearance.accentColor}</p>
          <div className='flex items-center gap-2'>
            <InputColor
              value={styleConfig.accentColor}
              onChange={e => onStyleChange('accentColor', e.target.value)}
              className='h-9! w-9!'
            />
          </div>
        </div>
        <div>
          <p className='tool-label mb-1'>{t.appearance.textColor}</p>
          <div className='flex items-center gap-2'>
            <InputColor
              value={styleConfig.textColor}
              onChange={e => onStyleChange('textColor', e.target.value)}
              className='h-9! w-9!'
            />
          </div>
        </div>
        <div>
          <p className='tool-label mb-1'>{t.appearance.backgroundColor}</p>
          <div className='flex items-center gap-2'>
            <InputColor
              value={styleConfig.backgroundColor}
              onChange={e => onStyleChange('backgroundColor', e.target.value)}
              className='h-9! w-9!'
            />
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-3'>
        <div>
          <p className='tool-label mb-1'>{t.appearance.fontFamily}</p>
          <select
            value={styleConfig.fontFamily}
            onChange={e => onStyleChange('fontFamily', e.target.value)}
            className='tool-input'
          >
            {FONT_OPTIONS.map(font => (
              <option key={font.value} value={font.value}>
                {font.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <p className='tool-label mb-1'>{t.appearance.fontSize}</p>
          <div className='flex flex-wrap gap-2'>
            <ButtonPill
              value='small'
              current={styleConfig.fontSize}
              label={t.appearance.fontSizeSmall}
              onChange={v => onStyleChange('fontSize', v as FontSizeOption)}
            />
            <ButtonPill
              value='normal'
              current={styleConfig.fontSize}
              label={t.appearance.fontSizeNormal}
              onChange={v => onStyleChange('fontSize', v as FontSizeOption)}
            />
            <ButtonPill
              value='large'
              current={styleConfig.fontSize}
              label={t.appearance.fontSizeLarge}
              onChange={v => onStyleChange('fontSize', v as FontSizeOption)}
            />
          </div>
        </div>
      </div>

      <div>
        <p className='tool-label mb-1'>{t.border.label}</p>
        <div className='flex flex-wrap gap-3'>
          {(['left', 'right', 'top', 'bottom'] as (keyof BorderSides)[]).map(side => (
            <label key={side} className='flex cursor-pointer items-center gap-1.5'>
              <InputCheckboxWithLabel
                checked={styleConfig.border[side]}
                onChange={checked => {
                  const newBorder = { ...styleConfig.border, [side]: checked };
                  const allSelected =
                    newBorder.left && newBorder.right && newBorder.top && newBorder.bottom;
                  if (allSelected) {
                    onStyleChange('border', { left: true, right: true, top: true, bottom: true });
                  } else {
                    onStyleChange('border', newBorder);
                  }
                }}
                id={''}
                label={''}
              />
              <span className='tool-value'>
                {side === 'left' && t.border.left}
                {side === 'right' && t.border.right}
                {side === 'top' && t.border.top}
                {side === 'bottom' && t.border.bottom}
              </span>
            </label>
          ))}
        </div>
        <div className='mt-2 flex gap-2'>
          <button
            type='button'
            onClick={() =>
              onStyleChange('border', { left: true, right: true, top: true, bottom: true })
            }
            className={`tool-button ${styleConfig.border.left && styleConfig.border.right && styleConfig.border.top && styleConfig.border.bottom ? 'tool-button-active' : 'tool-button-inactive'}`}
          >
            {t.border.full}
          </button>
          <button
            type='button'
            onClick={() =>
              onStyleChange('border', { left: false, right: false, top: false, bottom: false })
            }
            className={`tool-button ${!styleConfig.border.left && !styleConfig.border.right && !styleConfig.border.top && !styleConfig.border.bottom ? 'tool-button-active' : 'tool-button-inactive'}`}
          >
            {t.border.none}
          </button>
        </div>
      </div>
    </div>
  );
}
