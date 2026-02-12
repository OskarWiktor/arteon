'use client';

import { RiFacebookFill, RiLinkedinBoxFill, RiMailLine, RiTwitterXFill } from 'react-icons/ri';
import CopyButton from '../ui/buttons/CopyButton';

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
  className?: string;
};

export default function ShareBlock({ url, title, className = '' }: ShareBlockProps) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  return (
    <section className={`surface-panel w-fit p-4 ${className}`} aria-label="Udostępnij ten materiał">
      <div className="flex flex-wrap items-center gap-2">
        <a
          href={facebookHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-facebook focus-visible:ring-brand-facebook flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiFacebookFill className="h-5 w-5" />
          Facebook
        </a>

        <a
          href={twitterHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiTwitterXFill className="h-5 w-5" />X
        </a>

        <a
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-linkedin focus-visible:ring-brand-linkedin flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-white transition hover:opacity-90 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiLinkedinBoxFill className="h-5 w-5" />
          LinkedIn
        </a>

        <a
          href={mailHref}
          className="text-primary flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
        >
          <RiMailLine className="h-5 w-5" />
          E-mail
        </a>

        <CopyButton
          text={url}
          label="Kopiuj link"
          copiedLabel="Skopiowano"
          onError={() => window.prompt('Skopiuj adres strony (Ctrl+C, Enter):', url)}
          className="text-primary flex items-center gap-2 rounded-xl border border-black/10 bg-white px-4 py-2 text-sm font-medium transition hover:bg-neutral-50 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
        />
      </div>
    </section>
  );
}
