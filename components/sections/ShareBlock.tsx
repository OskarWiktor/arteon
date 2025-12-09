'use client';

import { useState, useEffect } from 'react';
import { RiFacebookCircleFill, RiLinkedinBoxFill, RiMailLine, RiLinkM } from 'react-icons/ri';

type ShareBlockProps = {
  url: string;
  title: string;
  label?: string;
  className?: string;
};

export default function ShareBlock({ url, title, label = 'Ten materiał może komuś pomóc — udostępnij go dalej.', className = '' }: ShareBlockProps) {
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
        window.prompt('Skopiuj adres strony (Ctrl+C, Enter):', url);
      }
    } catch {
      window.prompt('Skopiuj adres strony (Ctrl+C, Enter):', url);
    }
  }

  return (
    <section className={`w-fit rounded-2xl border border-black/10 bg-white/70 p-4 shadow-sm backdrop-blur-sm ${className}`} aria-label="Udostępnij ten materiał">
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <ShareIconLink href={facebookHref} label="Udostępnij na Facebooku">
              <RiFacebookCircleFill className="h-5 w-5" />
              <span className="sr-only">Udostępnij na Facebooku</span>
            </ShareIconLink>

            <ShareIconLink href={linkedinHref} label="Udostępnij na LinkedIn">
              <RiLinkedinBoxFill className="h-5 w-5" />
              <span className="sr-only">Udostępnij na LinkedIn</span>
            </ShareIconLink>

            <ShareIconLink href={twitterHref} label="Udostępnij na X (Twitter)">
              <span className="text-xs font-semibold">X</span>
              <span className="sr-only">Udostępnij na X (Twitter)</span>
            </ShareIconLink>

            <ShareIconLink href={mailHref} label="Wyślij link e-mailem">
              <RiMailLine className="h-5 w-5" />
              <span className="sr-only">Wyślij link e-mailem</span>
            </ShareIconLink>

            <button
              type="button"
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/15 px-3 py-1.5 text-xs font-medium text-[#333] transition hover:bg-black/5 focus-visible:ring-2 focus-visible:ring-black/40 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <RiLinkM className="h-4 w-4" aria-hidden="true" />
              <span>{copied ? 'Skopiowano' : 'Kopiuj link'}</span>
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
