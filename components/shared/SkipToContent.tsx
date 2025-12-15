const ui = {
  pl: {
    skipToContent: 'Skip to content',
  },
} as const;

export default function SkipToContent() {
  const t = ui.pl;

  return (
    <div id="skip-link">
      <a
        href="#main-content"
        className="fixed top-3 left-3 z-[80] translate-x-[-110%] rounded-xl bg-white px-3 py-2 text-sm font-medium text-dark shadow ring-1 ring-black/10 transition-transform duration-200 outline-none focus:translate-x-0 focus-visible:translate-x-0 focus-visible:ring-2 focus-visible:ring-black/40"
      >
        {t.skipToContent}
      </a>
    </div>
  );
}
