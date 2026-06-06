import { useId } from 'react';
import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/utils';

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

/**
 * Render a responsive table inside a <section> with optional title, description, grouped rows, and caption.
 *
 * Renders a header row using `labelHeader` and `cols`, then iterates `rows` to produce either full-width group header
 * rows (when `row.groupLabel` is present) or data rows with a row header and right-aligned value cells. Row emphasis
 * adjusts typography for the row label and its value cells.
 *
 * @param title - Optional section title; when provided, the section is labeled for accessibility
 * @param description - Optional descriptive paragraph displayed above the table
 * @param caption - Optional small caption displayed below the table
 * @param labelHeader - Header text for the first (label) column; defaults to an empty string
 * @param cols - Array of column header strings for the table's value columns
 * @param rows - Array of `SectionTableRow` objects describing grouped or data rows and their values
 * @returns The section element containing the rendered table and any optional title/description/caption
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

  return (
    <section
      data-section='table'
      aria-labelledby={title ? headingId : undefined}
    >
      {title && <SectionHeader title={title} />}

      {description && <p className='mb-4 text-base md:mb-6'>{description}</p>}

      <div className='-mx-4 overflow-x-auto sm:mx-0'>
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
      </div>

      {caption && <p className='mt-3 text-xs text-light'>{caption}</p>}
    </section>
  );
}
