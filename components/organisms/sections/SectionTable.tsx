import SectionHeader from '@/components/molecules/SectionHeader';
import { useId } from 'react';

export interface SectionTableRow {
  /** First-column label (row header). Required unless this is a group separator. */
  label?: string;
  /** Cell values for each column, in same order as `cols`. */
  values?: string[];
  /** Renders the row in medium weight to emphasise a particularly important entry. */
  emphasis?: boolean;
  /** When set, the row becomes a full-width group header spanning all columns. */
  groupLabel?: string;
}

interface SectionTableProps {
  title?: string;
  /** Lead paragraph rendered above the table. */
  description?: string;
  /** Small footnote rendered below the table. */
  caption?: string;
  /** Header text for the first (label) column. Defaults to empty string. */
  labelHeader?: string;
  /** Headers for the value columns (excluding the label column). */
  cols: string[];
  /** Data rows; supports a `groupLabel` row variant for section separators. */
  rows: SectionTableRow[];
}

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
    <section data-section='table' aria-labelledby={title ? headingId : undefined}>
      {title && <SectionHeader title={title} />}

      {description && <p className='text-mid mb-4 text-base md:mb-6'>{description}</p>}

      <div className='-mx-4 overflow-x-auto sm:mx-0'>
        <table className='w-full min-w-full border-collapse text-sm tabular-nums'>
          <thead>
            <tr className='border-b border-black/10'>
              <th scope='col' className='text-light p-4 text-left text-sm font-medium'>
                {labelHeader}
              </th>
              {cols.map((col, i) => (
                <th key={i} scope='col' className='text-light p-4 text-right text-sm font-medium'>
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
                      className='text-dark px-4 py-2 text-left text-sm font-semibold'
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
                    className={`p-4 text-left text-sm ${row.emphasis ? 'text-dark font-medium' : 'font-normal'}`}
                  >
                    {row.label}
                  </th>
                  {(row.values ?? []).map((v, j) => (
                    <td
                      key={j}
                      className={`p-4 text-right text-sm ${row.emphasis ? 'font-medium' : ''}`}
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

      {caption && <p className='text-light mt-3 text-xs'>{caption}</p>}
    </section>
  );
}
