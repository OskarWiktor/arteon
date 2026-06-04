import type { SignatureConfig, StyleConfig, SocialKey } from '@/types/tools/email';
import ButtonPill from '@/components/atoms/buttons/ButtonPill';
import InputWithLabel from '@/components/molecules/form/InputWithLabel';
import InputCheckboxWithLabel from '@/components/molecules/form/InputCheckboxWithLabel';

type Props = {
  config: SignatureConfig;
  styleConfig: StyleConfig;
  onSocialChange: (key: SocialKey, value: string) => void;
  onStyleChange: <K extends keyof StyleConfig>(key: K, value: StyleConfig[K]) => void;
  t: {
    social: Record<string, string>;
  };
};

const SOCIAL_FIELDS: { key: SocialKey; label: string; placeholder: string }[] = [
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://www.linkedin.com/in/...' },
  { key: 'instagram', label: 'Instagram', placeholder: 'https://www.instagram.com/...' },
  { key: 'facebook', label: 'Facebook', placeholder: 'https://www.facebook.com/...' },
  { key: 'tiktok', label: 'TikTok', placeholder: 'https://www.tiktok.com/@...' },
  { key: 'youtube', label: 'YouTube', placeholder: 'https://www.youtube.com/@...' },
  { key: 'x', label: 'X (Twitter)', placeholder: 'https://x.com/...' },
  { key: 'github', label: 'GitHub', placeholder: 'https://github.com/...' },
  { key: 'dribbble', label: 'Dribbble', placeholder: 'https://dribbble.com/...' },
  { key: 'behance', label: 'Behance', placeholder: 'https://www.behance.net/...' },
  { key: 'whatsapp', label: 'WhatsApp', placeholder: 'https://wa.me/48...' },
  { key: 'telegram', label: 'Telegram', placeholder: 'https://t.me/...' },
  { key: 'pinterest', label: 'Pinterest', placeholder: 'https://www.pinterest.com/...' },
];

function pairs<T>(arr: T[]): [T, T][] {
  const result: [T, T][] = [];
  for (let i = 0; i < arr.length; i += 2) {
    result.push([arr[i], arr[i + 1]]);
  }
  return result;
}

export default function SocialPanel({
  config,
  styleConfig,
  onSocialChange,
  onStyleChange,
  t,
}: Props) {
  return (
    <div className='space-y-3'>
      <span className='tool-value'>{t.social.title}</span>
      {pairs(SOCIAL_FIELDS).map(([a, b]) => (
        <div key={a.key} className='grid grid-cols-1 gap-3'>
          <InputWithLabel
            variant='tool'
            label={a.label}
            value={config.socials[a.key]}
            onChange={v => onSocialChange(a.key, v)}
            type='url'
            placeholder={a.placeholder}
          />
          {b && (
            <InputWithLabel
              variant='tool'
              label={b.label}
              value={config.socials[b.key]}
              onChange={v => onSocialChange(b.key, v)}
              type='url'
              placeholder={b.placeholder}
            />
          )}
        </div>
      ))}
      <p className='text-xs! text-light'>{t.social.helper}</p>

      <div className='mt-4 space-y-3 border-t border-neutral-200 pt-4'>
        <InputCheckboxWithLabel
          id='social-icons-toggle'
          checked={styleConfig.socialIcons.showIcons}
          onChange={v => onStyleChange('socialIcons', { ...styleConfig.socialIcons, showIcons: v })}
          label={t.social.showIcons}
        />

        {styleConfig.socialIcons.showIcons && (
          <>
            <div>
              <p className='tool-label mb-1'>{t.social.iconSize}</p>
              <div className='flex flex-wrap gap-2'>
                <ButtonPill
                  value='small'
                  current={styleConfig.socialIcons.iconSize}
                  label={t.social.iconSizeSmall}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: v })
                  }
                />
                <ButtonPill
                  value='medium'
                  current={styleConfig.socialIcons.iconSize}
                  label={t.social.iconSizeMedium}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: v })
                  }
                />
                <ButtonPill
                  value='large'
                  current={styleConfig.socialIcons.iconSize}
                  label={t.social.iconSizeLarge}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, iconSize: v })
                  }
                />
              </div>
            </div>

            <div>
              <p className='tool-label mb-1'>{t.social.iconColor}</p>
              <div className='flex flex-wrap gap-2'>
                <ButtonPill
                  value='platform'
                  current={styleConfig.socialIcons.colorMode}
                  label={t.social.iconColorPlatform}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: v })
                  }
                />
                <ButtonPill
                  value='accent'
                  current={styleConfig.socialIcons.colorMode}
                  label={t.social.iconColorAccent}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: v })
                  }
                />
                <ButtonPill
                  value='text'
                  current={styleConfig.socialIcons.colorMode}
                  label={t.social.iconColorText}
                  onChange={v =>
                    onStyleChange('socialIcons', { ...styleConfig.socialIcons, colorMode: v })
                  }
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
