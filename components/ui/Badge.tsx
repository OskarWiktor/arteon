export default function Badge({ text }: { text: string }) {
  return <span className="mr-2 mb-2 inline-block rounded-xl bg-white px-3 py-1 text-xs tracking-wide uppercase shadow-sm">{text}</span>;
}
