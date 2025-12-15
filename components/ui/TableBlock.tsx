const tableBlockUi = {
  pl: {
    defaultTableLabel: 'Tabela',
  },
} as const;

type Align = 'left' | 'center' | 'right';

type TableBlockProps = {
  caption?: string;
  note?: string;
  columns: { header: string; align?: Align }[];
  rows: (string | number)[][];
  striped?: boolean;
  compact?: boolean;
  className?: string;
};

export default function TableBlock({ caption, note, columns, rows, striped = true, compact = false, className = '' }: TableBlockProps) {
  const t = tableBlockUi.pl;
  return (
    <figure className="not-prose">
      <div className={`surface-panel-solid overflow-x-auto ${className}`} role="region" aria-label={caption || t.defaultTableLabel}>
        {caption && (
          <div className="border-b border-black/10 px-4 py-3">
            <div className="text-sm text-dark font-medium">{caption}</div>
          </div>
        )}

        <table className="w-full text-left">
          <thead className="bg-[color:var(--surface-dark)] text-white">
            <tr>
              {columns.map((c, i) => (
                <th key={i} scope="col" className={`px-4 ${compact ? 'py-2' : 'py-3'} ${alignCls(c.align)}`}>
                  <span className="text-sm font-semibold">{c.header}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`${striped ? (i % 2 === 0 ? 'bg-white' : 'bg-neutral-50') : 'bg-white'} border-t border-black/5`}>
                {r.map((cell, j) => (
                  <td key={j} className={`px-4 ${compact ? 'py-2' : 'py-3'} align-top ${alignCls(columns[j]?.align)}`}>
                    <div className="text-base text-dark">{String(cell)}</div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note ? (
        <figcaption className="mt-2">
          <p className="text-xs text-light">{note}</p>
        </figcaption>
      ) : null}
    </figure>
  );
}

function alignCls(a?: 'left' | 'center' | 'right') {
  switch (a) {
    case 'center':
      return 'text-center';
    case 'right':
      return 'text-right';
    default:
      return 'text-left';
  }
}
