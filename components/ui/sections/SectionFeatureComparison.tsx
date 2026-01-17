import { RiCheckLine, RiCloseLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';

interface Plan {
  id: string;
  name: string;
  highlighted?: boolean;
}

interface FeatureRow {
  name: string;
  values: Record<string, boolean>;
}

interface SectionFeatureComparisonProps {
  title?: string;
  plans: Plan[];
  features: FeatureRow[];
}

export default function SectionFeatureComparison({ title, plans, features }: SectionFeatureComparisonProps) {
  return (
    <section data-section="feature-comparison" aria-labelledby={title ? 'comparison-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="comparison-title" className="h4 reveal-animation mb-6 text-center">
            {title}
          </h2>
        )}

        <div className="hidden md:block">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="text-light w-1/4 p-4 text-left text-sm font-medium">Funkcja</th>
                {plans.map((plan) => (
                  <th key={plan.id} className={`w-1/4 p-4 text-center text-sm font-medium ${plan.highlighted ? 'rounded-t-2xl bg-slate-100' : ''}`}>
                    {plan.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index} className="border-b border-black/5">
                  <td className="p-4 text-sm">{feature.name}</td>
                  {plans.map((plan) => (
                    <td key={plan.id} className={`p-4 text-center ${plan.highlighted ? 'bg-slate-50' : ''}`}>
                      {feature.values[plan.id] ? <RiCheckLine className="mx-auto h-5 w-5 text-emerald-600" /> : <RiCloseLine className="mx-auto h-5 w-5 text-slate-300" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="space-y-6 md:hidden">
          {plans.map((plan) => (
            <div key={plan.id} className={`rounded-2xl border p-6 ${plan.highlighted ? 'border-slate-800 bg-slate-50' : 'border-black/10 bg-white'}`}>
              <h3 className="h5 mb-4 text-center">{plan.name}</h3>
              <ul className="space-y-3">
                {features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    {feature.values[plan.id] ? <RiCheckLine className="h-5 w-5 shrink-0 text-emerald-600" /> : <RiCloseLine className="h-5 w-5 shrink-0 text-slate-300" />}
                    <span className={feature.values[plan.id] ? '' : 'text-slate-400'}>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
