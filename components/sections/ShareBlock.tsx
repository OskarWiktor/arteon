'use client';

import { RiFacebookCircleFill, RiLinkedinBoxFill, RiMailLine } from 'react-icons/ri';
import CopyButton from '../ui/buttons/CopyButton';

const ui = {
  pl: {
    defaultLabel: 'Ten materiał może komuś pomóc - udostępnij go dalej.',
    ariaLabel: 'Udostępnij ten materiał',
    shareFacebook: 'Udostępnij na Facebooku',
    shareLinkedIn: 'Udostępnij na LinkedIn',
    shareTwitter: 'Udostępnij na X (Twitter)',
    shareEmail: 'Wyślij link e-mailem',
    copyLink: 'Kopiuj link',
    copied: 'Skopiowano',
    copyPrompt: 'Skopiuj adres strony (Ctrl+C, Enter):',
  },
} as const;

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
  className?: string;
};

export default function ShareBlock({ url, title, className = '' }: ShareBlockProps) {
  const t = ui.pl;

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  return (
    <section className={`surface-panel w-fit p-4 ${className}`} aria-label={t.ariaLabel}>
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <ShareIconLink href={facebookHref} label={t.shareFacebook}>
              <RiFacebookCircleFill className="h-5 w-5" />
              <span className="sr-only">{t.shareFacebook}</span>
            </ShareIconLink>

            <ShareIconLink href={linkedinHref} label={t.shareLinkedIn}>
              <RiLinkedinBoxFill className="h-5 w-5" />
              <span className="sr-only">{t.shareLinkedIn}</span>
            </ShareIconLink>

            <ShareIconLink href={twitterHref} label={t.shareTwitter}>
              <span className="text-xs font-semibold text-slate-700">X</span>
              <span className="sr-only">{t.shareTwitter}</span>
            </ShareIconLink>

            <ShareIconLink href={mailHref} label={t.shareEmail}>
              <RiMailLine className="h-5 w-5" />
              <span className="sr-only">{t.shareEmail}</span>
            </ShareIconLink>

            <CopyButton
              text={url}
              label={t.copyLink}
              copiedLabel={t.copied}
              onError={() => window.prompt(t.copyPrompt, url)}
              className="text-mid gap-1.5 px-3 py-1.5 text-xs transition hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

type ShareIconLinkProps = {
  href: string;
  label: string;
  children: React.ReactNode;
};

function ShareIconLink({ href, children }: ShareIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-slate-700 shadow-sm transition hover:-translate-y-[1px] hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {children}
    </a>
  );
}
