import { cn } from '@/lib/clsx';
import { getA11y } from '@/lib/i18n/a11y';
import type { Locale } from '@/types/locale';

type Align = 'left' | 'center' | 'right';

type TableBlockProps = {
  caption?: string;
  note?: string;
  columns: { header: string; align?: Align }[];
  rows: (string | number)[][];
  striped?: boolean;
  compact?: boolean;
  className?: string;
  locale: Locale;
};

/**
 * Renders a responsive HTML table inside a <figure> with optional top caption and bottom note.
 *
 * The table uses `columns` to build the header and `rows` to populate the body. Controls `striped`
 * for alternating row backgrounds and `compact` for reduced vertical padding. The surrounding
 * container applies overflow handling, border, and shadow; its accessible region label comes from
 * `caption` when provided or a default localized label.
 *
 * @param caption - Optional caption text rendered in a header bar above the table and used as the region label.
 * @param note - Optional note text rendered inside a <figcaption> below the table.
 * @param columns - Array of column descriptors `{ header, align? }` used to build the table head.
 * @param rows - Two-dimensional array of cell values (string | number) used to build the table body.
 * @param striped - When true, applies alternating row background colors; defaults to `true`.
 * @param compact - When true, reduces vertical padding for header cells and body cells; defaults to `false`.
 * @param className - Additional CSS classes merged onto the table container.
 * @returns The rendered table element wrapped in a figure with optional caption and figcaption.
 */
export default function TableBlock({
  caption,
  note,
  columns,
  rows,
  striped = true,
  compact = false,
  className,
  locale,
}: TableBlockProps) {
  const t = getA11y(locale);
  return (
    <figure className='not-prose'>
      <div
        className={cn(
          'overflow-x-auto border border-neutral-200 bg-white shadow-sm',
          className,
        )}
        role='region'
        aria-label={caption || t.tableRegion}
      >
        {caption && (
          <div className='border-b border-neutral-200 px-4 py-3'>
            <div className='text-sm font-medium text-dark'>{caption}</div>
          </div>
        )}

        <table className='w-full text-left'>
          <thead className='bg-dark text-white'>
            <tr>
              {columns.map((c, i) => (
                <th
                  key={i}
                  scope='col'
                  className={cn(
                    'px-4',
                    compact ? 'py-2' : 'py-3',
                    alignCls(c.align),
                  )}
                >
                  <span className='text-sm font-semibold'>{c.header}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => {
              const isStripedRow = striped && i % 2 !== 0;
              return (
                <tr
                  key={i}
                  className={cn(
                    'border-t border-black/5',
                    isStripedRow ? 'bg-neutral-50' : 'bg-white',
                  )}
                >
                  {r.map((cell, j) => (
                    <td
                      key={j}
                      className={cn(
                        'px-4',
                        compact ? 'py-2' : 'py-3',
                        'align-top',
                        alignCls(columns[j]?.align),
                      )}
                    >
                      <div className='text-base text-dark'>{String(cell)}</div>
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {note ? (
        <figcaption className='mt-2'>
          <p className='text-xs text-light'>{note}</p>
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
