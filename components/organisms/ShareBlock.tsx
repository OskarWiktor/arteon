'use client';

import { RiFacebookFill, RiLinkedinBoxFill, RiMailLine, RiTwitterXFill } from 'react-icons/ri';
import { focusRingClasses, normalIconSizeClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';
import Card from './Card';
import ButtonCopy from '../atoms/buttons/ButtonCopy';

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
};

const shareBlockLinkClasses =
  'flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90';

export default function ShareBlock({ url, title }: ShareBlockProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  return (
    <Card as='aside' className='mb-12 w-fit' aria-label='Udostępnij ten materiał'>
      <div className='flex flex-wrap items-center gap-2'>
        <a
          href={facebookHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn('bg-brand-facebook', shareBlockLinkClasses, focusRingClasses)}
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
          className={cn('bg-brand-linkedin', shareBlockLinkClasses, focusRingClasses)}
        >
          <RiLinkedinBoxFill className={normalIconSizeClasses} />
          LinkedIn
        </a>

        <a
          href={mailHref}
          className={cn(
            'flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-primary transition hover:bg-neutral-50',
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
          onError={() => window.prompt('Skopiuj adres strony (Ctrl+C, Enter):', url)}
        />
      </div>
    </Card>
  );
}
