'use client';

import { useState, useEffect } from 'react';
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiMailLine, RiLinkM } from 'react-icons/ri';

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

export default function ShareBlock({ url, title, label = ui.pl.defaultLabel, className = '' }: ShareBlockProps) {
  const t = ui.pl;
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2500);
    return () => clearTimeout(t);
  }, [copied]);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const facebookHref = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`;
  const linkedinHref = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`;
  const twitterHref = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`;
  const mailHref = `mailto:?subject=${encodedTitle}&body=${encodedUrl}`;

  async function handleCopy() {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        setCopied(true);
      } else {
        window.prompt(t.copyPrompt, url);
      }
    } catch {
      window.prompt(t.copyPrompt, url);
    }
  }

  return (
    <section className={`w-fit rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur-sm ${className}`} aria-label={t.ariaLabel}>
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
              <span className="text-xs font-semibold">X</span>
              <span className="sr-only">{t.shareTwitter}</span>
            </ShareIconLink>

            <ShareIconLink href={mailHref} label={t.shareEmail}>
              <RiMailLine className="h-5 w-5" />
              <span className="sr-only">{t.shareEmail}</span>
            </ShareIconLink>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium text-[#333] transition hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <RiLinkM className="h-4 w-4" aria-hidden="true" />
              <span>{copied ? t.copied : t.copyLink}</span>
            </button>
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
      className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[#222] shadow-sm transition hover:-translate-y-[1px] hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      {children}
    </a>
  );
}
