export default function Badge({ text }: { text: string }) {
  return <span className="inline-block rounded-2xl bg-white px-3 py-1 text-xs tracking-wide uppercase shadow-sm">{text}</span>;
}
