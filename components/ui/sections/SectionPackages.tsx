import type { ReactNode } from 'react';
import { RiCheckLine, RiCloseLine } from 'react-icons/ri';
import Wrapper from '../Wrapper';
import SectionHeader from '../typography/SectionHeader';
import ButtonGroup from '../buttons/ButtonGroup';

const ui = {
  pl: {
    sectionActions: 'Działania sekcji',
    feature: 'Funkcja',
  },
} as const;

interface PackageFeature {
  name: string;
  values: boolean[];
}

interface Package {
  name: string;
}

interface SectionPackagesProps {
  title?: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  packages: Package[];
  features: PackageFeature[];
  highlightedIndex?: number;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
}

export default function SectionPackages({ title, subtitle, description, packages, features, highlightedIndex = 1, btnOne, btnOneLink, btnTwo, btnTwoLink }: SectionPackagesProps) {
  const t = ui.pl;
  const displayPackages = packages.slice(0, 3);

  return (
    <section data-section="packages" aria-labelledby={title ? 'packages-title' : undefined}>
      <Wrapper>
        <SectionHeader
          subtitle={subtitle}
          title={title}
          description={description}
          headingLevel="h2"
          titleId="packages-title"
          headingClassName="reveal-animation"
          descriptionClassName="reveal-animation mt-3"
        />

        <div className="mt-8 overflow-x-auto md:mt-12">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-black/10">
                <th className="text-light p-4 text-left text-sm font-medium">{t.feature}</th>
                {displayPackages.map((pkg, idx) => (
                  <th key={idx} className={`p-4 text-center text-sm font-medium ${idx === highlightedIndex ? 'rounded-t-2xl bg-slate-100' : ''}`}>
                    {pkg.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, fIdx) => (
                <tr key={fIdx} className="border-b border-black/5">
                  <td className="p-4 text-sm">{feature.name}</td>
                  {displayPackages.map((_, pIdx) => {
                    const hasFeature = feature.values[pIdx] ?? false;
                    return (
                      <td key={pIdx} className={`p-4 text-center ${pIdx === highlightedIndex ? 'bg-slate-50' : ''}`}>
                        {hasFeature ? <RiCheckLine className="mx-auto h-5 w-5 text-emerald-600" aria-label="Tak" /> : <RiCloseLine className="mx-auto h-5 w-5 text-slate-300" aria-label="Nie" />}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 block md:hidden">
          <div className="space-y-4">
            {displayPackages.map((pkg, pIdx) => (
              <div key={pIdx} className={`rounded-2xl border p-4 ${pIdx === highlightedIndex ? 'border-slate-400 bg-slate-50' : 'border-black/10 bg-white'}`}>
                <h3 className="h5 mb-3">{pkg.name}</h3>
                <ul className="space-y-2">
                  {features
                    .filter((f) => f.values[pIdx])
                    .map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2 text-sm">
                        <RiCheckLine className="h-4 w-4 text-emerald-600" />
                        {feature.name}
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" ariaLabel={t.sectionActions} role="group" />
      </Wrapper>
    </section>
  );
}
