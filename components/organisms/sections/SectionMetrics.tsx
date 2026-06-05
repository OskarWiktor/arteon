import SectionHeader from '@/components/molecules/SectionHeader';
import { cn } from '@/lib/utils';
import Wrapper from '../../atoms/Wrapper';
import Card from '../Card';

interface Metric {
  label: string;
  value: number;
  unit: string;
  max: number;
  color: string;
  inverse?: boolean;
}

interface SectionMetricsProps {
  title?: string;
  metrics: Metric[];
}

/**
 * Render a responsive metrics section with metric cards and accessible progress bars.
 *
 * Each metric is displayed as a card showing its label, value and unit, and a colored progress bar
 * whose width is computed from the metric value and max. If a metric's `inverse` flag is true,
 * the progress is calculated from `max - value`.
 *
 * @param title - Optional section title; when provided it is rendered as the section header and used for `aria-labelledby`.
 * @param metrics - Array of metric objects. Each metric should include:
 *   - `label`: display label for the metric
 *   - `value`: current numeric value
 *   - `unit`: unit string shown next to the value
 *   - `max`: numeric maximum used to compute progress percentage
 *   - `color`: CSS class(es) applied to the inner progress bar
 *   - `inverse` (optional): when true, progress is computed as `(max - value) / max`
 *
 * @returns A React element containing the metrics section.
 */
export default function SectionMetrics({
  title,
  metrics,
}: SectionMetricsProps) {
  return (
    <section
      data-section='metrics'
      aria-labelledby={title ? 'metrics-title' : undefined}
    >
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {metrics.map((metric, index) => {
            const percentage = metric.inverse
              ? ((metric.max - metric.value) / metric.max) * 100
              : (metric.value / metric.max) * 100;

            return (
              <Card key={index} padding='md'>
                <p className='mb-2 text-sm text-light'>{metric.label}</p>
                <div className='mb-3 flex items-baseline gap-1'>
                  <span className='h3'>{metric.value}</span>
                  <span className='text-sm text-light'>{metric.unit}</span>
                </div>
                <div className='h-2 overflow-hidden rounded-lg bg-primary-light'>
                  <div
                    className={cn('h-full rounded-lg', metric.color)}
                    style={{ width: `${percentage}%` }}
                    role='progressbar'
                    aria-valuenow={metric.value}
                    aria-valuemin={0}
                    aria-valuemax={metric.max}
                    aria-label={`${metric.label}: ${metric.value}${metric.unit}`}
                  />
                </div>
              </Card>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
