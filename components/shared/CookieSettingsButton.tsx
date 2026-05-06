'use client';

interface CookieSettingsButtonProps {
  label: string;
}

export default function CookieSettingsButton({ label }: CookieSettingsButtonProps) {
  return (
    <button
      onClick={() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fc = (window as any).googlefc;
        if (fc?.showRevocationMessage) {
          fc.showRevocationMessage();
        }
      }}
      className="hover-underline cursor-pointer text-sm"
      aria-haspopup="dialog"
    >
      {label}
    </button>
  );
}
