import { useId } from 'react';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri';

interface Plan {
  id: string;
  name: string;
  highlighted?: boolean;
}

interface FeatureRow {
  name: string;
  values: Record<string, boolean | string>;
}

interface SectionFeatureComparisonProps {
  title?: string;
  featureLabel?: string;
  plans: Plan[];
  features: FeatureRow[];
}

function CellValue({ value }: { value: boolean | string }) {
  if (typeof value === 'string') {
    return <span className="text-sm">{value}</span>;
  }
  return value ? <RiCheckLine className="text-success-icon mx-auto h-5 w-5" /> : <RiCloseLine className="text-primary-light mx-auto h-5 w-5" />;
}

export default function SectionFeatureComparison({ title, featureLabel = 'Feature', plans, features }: SectionFeatureComparisonProps) {
  const autoId = useId();
  const headingId = `comparison-title-${autoId}`;

  return (
    <section data-section="feature-comparison" aria-labelledby={title ? headingId : undefined}>
      {title && (
        <h2 id={headingId} className="h3 mb-4 text-center md:mb-6 lg:mb-8">
          {title}
        </h2>
      )}

      <div className="hidden md:block">
        <table className="w-full border-collapse">
          {title && <caption className="sr-only">{title}</caption>}
          <thead>
            <tr className="border-b border-black/10">
              <th scope="col" className="text-light w-1/4 p-4 text-left text-sm font-medium">
                {featureLabel}
              </th>
              {plans.map((plan) => (
                <th scope="col" key={plan.id} className={`w-1/4 p-4 text-center text-sm font-medium ${plan.highlighted ? 'bg-primary-light rounded-t-2xl' : ''}`}>
                  {plan.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {features.map((feature, index) => (
              <tr key={index} className="border-b border-black/5">
                <th scope="row" className="p-4 text-left text-sm font-normal">
                  {feature.name}
                </th>
                {plans.map((plan) => (
                  <td key={plan.id} className={`p-4 text-center ${plan.highlighted ? 'bg-neutral-50' : ''}`}>
                    <CellValue value={feature.values[plan.id]} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-6 md:hidden">
        {plans.map((plan) => (
          <div key={plan.id} className={`rounded-2xl border p-6 ${plan.highlighted ? 'border-primary bg-neutral-50' : 'border-black/10 bg-white'}`}>
            <h3 className="h5 mb-4 text-center">{plan.name}</h3>
            <ul className="space-y-3">
              {features.map((feature, i) => {
                const val = feature.values[plan.id];
                if (typeof val === 'string') {
                  return (
                    <li key={i} className="text-sm">
                      <span className="font-medium">{feature.name}</span>
                      <br />
                      <span className="text-light">{val}</span>
                    </li>
                  );
                }
                return (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {val ? <RiCheckLine className="text-success-icon h-5 w-5 shrink-0" /> : <RiCloseLine className="text-primary-light h-5 w-5 shrink-0" />}
                    <span className={val ? '' : 'text-primary-mid'}>{feature.name}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
