'use client';

interface CookieSettingsButtonProps {
  label: string;
}

export default function CookieSettingsButton({ label }: CookieSettingsButtonProps) {
  return (
    <button onClick={() => window.ArteonConsent?.open()} className="hover-underline cursor-pointer text-base" aria-haspopup="dialog">
      {label}
    </button>
  );
}
