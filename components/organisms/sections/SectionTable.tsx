import { useId } from 'react';
import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/clsx';

export interface SectionTableRow {
  label?: string;
  values?: string[];
  emphasis?: boolean;
  groupLabel?: string;
}

interface SectionTableProps {
  title?: string;
  description?: string;
  caption?: string;
  labelHeader?: string;
  cols: string[];
  rows: SectionTableRow[];
}

/** Longest single cell allowed for a table to still count as "short content". */
const SHORT_CELL_MAX_LENGTH = 20;

/**
 * How many side-by-side copies of a narrow table fit into a 6-column layout:
 * 2-column tables → 3 pairs, 3-column tables → 2 pairs, 4+ columns unchanged.
 */
function sideBySidePairs(totalCols: number): number {
  if (totalCols === 2) return 3;
  if (totalCols === 3) return 2;
  return 1;
}

/** One rendered table (header + body). Shared by the single and split layouts. */
function ConversionTable({
  labelHeader,
  cols,
  rows,
}: {
  labelHeader: string;
  cols: string[];
  rows: SectionTableRow[];
}) {
  const totalCols = cols.length + 1;
  return (
    <table className='w-full min-w-full border-collapse text-sm tabular-nums'>
      <thead>
        <tr className='border-b border-neutral-200'>
          <th
            scope='col'
            className='p-4 text-left text-sm font-medium text-light'
          >
            {labelHeader}
          </th>
          {cols.map((col, i) => (
            <th
              key={i}
              scope='col'
              className='p-4 text-right text-sm font-medium text-light'
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => {
          if (row.groupLabel) {
            return (
              <tr key={i} className='bg-neutral-50/70'>
                <th
                  scope='colgroup'
                  colSpan={totalCols}
                  className='px-4 py-2 text-left text-sm font-semibold text-dark'
                >
                  {row.groupLabel}
                </th>
              </tr>
            );
          }
          return (
            <tr key={i} className='border-b border-black/5'>
              <th
                scope='row'
                className={cn(
                  'p-4 text-left text-sm',
                  row.emphasis ? 'font-medium text-dark' : 'font-normal',
                )}
              >
                {row.label}
              </th>
              {(row.values ?? []).map((v, j) => (
                <td
                  key={j}
                  className={cn('p-4 text-right text-sm', {
                    'font-medium': row.emphasis === true,
                  })}
                >
                  {v}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

/**
 * Render a responsive comparison table with optional title, description,
 * grouped rows, and caption.
 *
 * Narrow conversion tables (2 or 3 columns) with many short rows waste most of
 * the horizontal space on desktop. When that happens the rows are split into
 * side-by-side groups so a 2-column table shows as 3 pairs (6 columns) and a
 * 3-column table as 2 pairs (6 columns). Tables with 4+ columns, few rows,
 * long cell content, or grouped rows are left as a single table.
 *
 * @param cols - Value-column header strings (the label column is implicit)
 * @param rows - Grouped or data rows
 * @returns The section element containing the rendered table(s)
 */
export default function SectionTable({
  title,
  description,
  caption,
  labelHeader = '',
  cols,
  rows,
}: SectionTableProps) {
  const autoId = useId();
  const headingId = `table-title-${autoId}`;
  const totalCols = cols.length + 1;

  const pairs = sideBySidePairs(totalCols);
  const hasGroupRows = rows.some(row => row.groupLabel);
  const longestCell = rows.reduce((max, row) => {
    const cells = [row.label ?? '', ...(row.values ?? [])];
    return Math.max(max, ...cells.map(cell => cell.length));
  }, 0);
  // Only split when it actually helps: enough rows to fill the pairs and the
  // content is short (numbers/short labels), not prose comparison tables.
  const shouldSplit =
    pairs > 1 &&
    !hasGroupRows &&
    rows.length >= pairs * 3 &&
    longestCell <= SHORT_CELL_MAX_LENGTH;

  const chunkSize = Math.ceil(rows.length / pairs);
  const rowChunks = Array.from({ length: pairs }, (_, i) =>
    rows.slice(i * chunkSize, (i + 1) * chunkSize),
  ).filter(chunk => chunk.length > 0);

  return (
    <section
      data-section='table'
      aria-labelledby={title ? headingId : undefined}
    >
      {title && <SectionHeader title={title} />}

      {description && <p className='mb-4 text-base md:mb-6'>{description}</p>}

      {shouldSplit ? (
        <div className='-mx-4 flex flex-col gap-x-8 gap-y-2 sm:mx-0 md:flex-row md:items-start'>
          {rowChunks.map((chunk, i) => (
            <div key={i} className='min-w-0 flex-1 overflow-x-auto'>
              <ConversionTable
                labelHeader={labelHeader}
                cols={cols}
                rows={chunk}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className='-mx-4 overflow-x-auto sm:mx-0'>
          <ConversionTable labelHeader={labelHeader} cols={cols} rows={rows} />
        </div>
      )}

      {caption && <p className='mt-3 text-xs text-light'>{caption}</p>}
    </section>
  );
}
