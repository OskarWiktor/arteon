import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/utils';
import { useId } from 'react';

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
            <tr className='border-b border-neutral-200'>
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
                    className={cn(
                      'p-4 text-left text-sm',
                      row.emphasis ? 'text-dark font-medium' : 'font-normal',
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

      {caption && <p className='text-light mt-3 text-xs'>{caption}</p>}
    </section>
  );
}
