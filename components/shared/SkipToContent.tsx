const ui = {
  pl: {
    skipToContent: 'Przejdź do treści',
  },
  en: {
    skipToContent: 'Skip to content',
  },
} as const;

export default function SkipToContent({ locale = 'pl' }: { locale?: 'pl' | 'en' }) {
  const t = ui[locale];

  return (
    <div id="skip-link">
      <a
        href="#main-content"
        className="text-dark fixed top-3 left-3 z-[80] translate-x-[-110%] rounded-xl bg-white px-3 py-2 text-sm font-medium shadow ring-1 ring-black/10 transition-transform duration-200 outline-none focus:translate-x-0 focus-visible:translate-x-0 focus-visible:ring-2 focus-visible:ring-black/40"
      >
        {t.skipToContent}
      </a>
    </div>
  );
}
