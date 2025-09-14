import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiBarChart2Line, RiAdvertisementLine, RiSearchEyeLine, RiLineChartLine, RiRocketLine, RiLightbulbLine } from 'react-icons/ri';

import { IoAnalytics } from 'react-icons/io5';

const items: FeatureItem[] = [
  {
    title: 'Kompleksowe SEO strony, sklepu i bloga',
    icon: <RiBarChart2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Reklamy Google, Facebook i Instagram',
    icon: <RiAdvertisementLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Audyty techniczne, prawne i WCAG 2.1 AA',
    icon: <RiSearchEyeLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Analiza konkurencji',
    icon: <IoAnalytics className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Automatyzacja prowadzenia social mediów',
    icon: <RiRocketLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Branding budujący emocje i transformację klienta',
    icon: <RiLightbulbLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Oferty sprzedażowe według schematu Why → How → What',
    icon: <RiLineChartLine className="h-6 w-6 text-slate-500" />,
  },
];

export default function MarketingFeatures() {
  return <FeatureGrid title="Marketing, który zwiększa sprzedaż i zasięgi" subtitle="Co dostajesz" items={items} />;
}
