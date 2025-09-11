export default function SkipToContent() {
  return (
    <a
      href="#main-content"
      id="skip-link"
      className="fixed top-3 left-3 z-[80] translate-x-[-110%] rounded-lg bg-white px-3 py-2 text-sm font-medium text-black shadow ring-1 ring-black/10 transition-transform duration-200 outline-none focus:translate-x-0 focus-visible:translate-x-0 focus-visible:ring-2 focus-visible:ring-black/40"
    >
      Skip to content
    </a>
  );
}
