'use client';

import {
  RiFacebookFill,
  RiLinkedinBoxFill,
  RiMailLine,
  RiTwitterXFill,
} from 'react-icons/ri';
import { cn } from '@/lib/clsx';
import { focusRingClasses, normalIconSizeClasses } from '@/lib/uiClasses';
import Card from './Card';
import ButtonCopy from '../atoms/buttons/ButtonCopy';

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
};

// These buttons sit on fixed brand/black backgrounds, so the label must stay
// light in both themes - `on-dark` (not `white`, which darkens as a surface token).
const shareBlockLinkClasses =
  'flex items-center gap-2 px-4 py-2 text-sm font-medium text-on-dark transition hover:opacity-90';

/**
 * Render a share panel with buttons for Facebook, X (Twitter), LinkedIn, e-mail, and a copy-link action.
 *
 * @param url - The target URL to share and to copy to the clipboard
 * @param title - The text used for social share text and as the e-mail subject
 * @returns The rendered share panel JSX element
 */
export default function ShareBlock({ url, title }: ShareBlockProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  return (
    <Card
      as='aside'
      className='mb-12 w-fit'
      aria-label='Udostępnij ten materiał'
    >
      <div className='flex flex-wrap items-center gap-2'>
        <a
          href={facebookHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'bg-brand-facebook',
            shareBlockLinkClasses,
            focusRingClasses,
          )}
        >
          <RiFacebookFill className={normalIconSizeClasses} />
          Facebook
        </a>

        <a
          href={twitterHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn('bg-black', shareBlockLinkClasses, focusRingClasses)}
        >
          <RiTwitterXFill className={normalIconSizeClasses} />X
        </a>

        <a
          href={linkedinHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'bg-brand-linkedin',
            shareBlockLinkClasses,
            focusRingClasses,
          )}
        >
          <RiLinkedinBoxFill className={normalIconSizeClasses} />
          LinkedIn
        </a>

        <a
          href={mailHref}
          className={cn(
            'flex items-center gap-2 border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-primary transition hover:bg-neutral-50',
            focusRingClasses,
          )}
        >
          <RiMailLine className={normalIconSizeClasses} />
          E-mail
        </a>

        <ButtonCopy
          text={url}
          label='Kopiuj link'
          copiedLabel='Skopiowano'
          onError={() => prompt('Skopiuj adres strony (Ctrl+C, Enter):', url)}
        />
      </div>
    </Card>
  );
}
