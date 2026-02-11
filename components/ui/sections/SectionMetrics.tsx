import Wrapper from '../Wrapper';

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
    <section data-section="metrics" aria-labelledby={title ? 'metrics-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="metrics-title" className="h6 mb-4 md:mb-6 lg:mb-8">
            {title}
          </h2>
        )}

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric, index) => {
            const percentage = metric.inverse ? ((metric.max - metric.value) / metric.max) * 100 : (metric.value / metric.max) * 100;

            return (
              <div key={index} className="surface-card-soft p-5">
                <p className="text-light mb-2 text-sm">{metric.label}</p>
                <div className="mb-3 flex items-baseline gap-1">
                  <span className="h3">{metric.value}</span>
                  <span className="text-light text-sm">{metric.unit}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-primary-light">
                  <div
                    className={`h-full rounded-full ${metric.color}`}
                    style={{ width: `${percentage}%` }}
                    role="progressbar"
                    aria-valuenow={metric.value}
                    aria-valuemin={0}
                    aria-valuemax={metric.max}
                    aria-label={`${metric.label}: ${metric.value}${metric.unit}`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
