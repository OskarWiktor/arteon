'use client';

import { RiFacebookFill, RiLinkedinBoxFill, RiMailLine, RiTwitterXFill } from 'react-icons/ri';
import Card from './Card';
import ButtonCopy from '../atoms/buttons/ButtonCopy';
import { cn } from '@/lib/utils';
import { focusRingClasses } from '@/lib/ui-classes';

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
};

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
      variant='section'
      padding='sm'
      className='mb-12 w-fit'
      aria-label='Udostępnij ten materiał'
    >
      <div className='flex flex-wrap items-center gap-2'>
        <a
          href={facebookHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'bg-brand-facebook flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90',
            focusRingClasses,
          )}
        >
          <RiFacebookFill className='h-5 w-5' />
          Facebook
        </a>

        <a
          href={twitterHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90',
            focusRingClasses,
          )}
        >
          <RiTwitterXFill className='h-5 w-5' />X
        </a>

        <a
          href={linkedinHref}
          target='_blank'
          rel='noopener noreferrer'
          className={cn(
            'bg-brand-linkedin flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-white transition hover:opacity-90',
            focusRingClasses,
          )}
        >
          <RiLinkedinBoxFill className='h-5 w-5' />
          LinkedIn
        </a>

        <a
          href={mailHref}
          className={cn(
            'text-primary flex items-center gap-2 rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-50',
            focusRingClasses,
          )}
        >
          <RiMailLine className='h-5 w-5' />
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
