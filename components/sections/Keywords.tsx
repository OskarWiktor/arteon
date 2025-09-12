interface KeywordsProps {
    keys: string;
}

export default function Keywords({ keys }: KeywordsProps) {
    return (
    <section aria-label="Słowa kluczowe" className="border-t border-neutral-200 m-auto w-[90%] max-w-[1280px]">
        <div className="mx-auto max-w-7xl py-10 text-xs text-[#5e5e5e]">
          {keys}
        </div>
      </section>
    )
}