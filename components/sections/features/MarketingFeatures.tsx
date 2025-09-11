import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiBarChart2Line, RiAdvertisementLine, RiSearchEyeLine, RiTeamLine, RiLineChartLine, RiRocketLine, RiLightbulbLine } from 'react-icons/ri';

import { IoAnalytics } from 'react-icons/io5';

const items: FeatureItem[] = [
  {
    title: 'Kompleksowe SEO strony, sklepu i bloga',
    icon: <RiBarChart2Line className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Reklamy Google, Facebook i Instagram',
    icon: <RiAdvertisementLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Audyty techniczne, prawne i WCAG 2.1 AA',
    icon: <RiSearchEyeLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Analiza konkurencji i insighty rynkowe',
    icon: <IoAnalytics className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Automatyzacja prowadzenia social mediów',
    icon: <RiRocketLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Strategia marki oparta na archetypach',
    icon: <RiTeamLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Branding budujący emocje i transformację klienta',
    icon: <RiLightbulbLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Oferty sprzedażowe według schematu Why → How → What',
    icon: <RiLineChartLine className="h-6 w-6 text-indigo-800" />,
  },
];

export default function MarketingFeatures() {
  return <FeatureGrid title="Marketing, który zwiększa sprzedaż i zasięgi" subtitle="Co dostajesz" items={items} />;
}
