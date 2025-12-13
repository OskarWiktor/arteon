import Text from './typography/Text';

const ui = {
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
  const t = ui.pl;
  return (
    <figure className="not-prose">
      <div className={`overflow-x-auto rounded-2xl border border-black/10 bg-white shadow-sm ${className}`} role="region" aria-label={caption || t.defaultTableLabel}>
        {caption && (
          <div className="border-b border-black/10 px-4 py-3">
            <Text variant="small" as="div" className="font-medium">
              {caption}
            </Text>
          </div>
        )}

        <table className="w-full text-left">
          <thead className="bg-[#0b0b0c] text-white">
            <tr>
              {columns.map((c, i) => (
                <th key={i} scope="col" className={`px-4 ${compact ? 'py-2' : 'py-3'} ${alignCls(c.align)}`}>
                  <Text variant="small" as="span" className="font-semibold">
                    {c.header}
                  </Text>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className={`${striped ? (i % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]') : 'bg-white'} border-t border-black/5`}>
                {r.map((cell, j) => (
                  <td key={j} className={`px-4 ${compact ? 'py-2' : 'py-3'} align-top ${alignCls(columns[j]?.align)}`}>
                    <Text variant="body" as="div">
                      {String(cell)}
                    </Text>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {note ? (
        <figcaption className="mt-2">
          <Text variant="xs" tone="muted">
            {note}
          </Text>
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
