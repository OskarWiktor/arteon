import SectionHeader from '@/components/molecules/SectionHeader';
import Wrapper from '../../atoms/Wrapper';
import Card from '../Card';
import { cn } from '@/lib/utils';

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

export default function SectionMetrics({ title, metrics }: SectionMetricsProps) {
  return (
    <section data-section='metrics' aria-labelledby={title ? 'metrics-title' : undefined}>
      <Wrapper>
        {title && <SectionHeader title={title} />}

        <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
          {metrics.map((metric, index) => {
            const percentage = metric.inverse
              ? ((metric.max - metric.value) / metric.max) * 100
              : (metric.value / metric.max) * 100;

            return (
              <Card key={index} padding='md'>
                <p className='text-light mb-2 text-sm'>{metric.label}</p>
                <div className='mb-3 flex items-baseline gap-1'>
                  <span className='h3'>{metric.value}</span>
                  <span className='text-light text-sm'>{metric.unit}</span>
                </div>
                <div className='bg-primary-light h-2 overflow-hidden rounded-lg'>
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
