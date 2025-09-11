import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiPencilRuler2Line, RiBrushLine, RiPaletteLine, RiStackLine, RiImageLine, RiVideoLine, RiShoppingBag3Line } from 'react-icons/ri';

import { IoColorPalette } from 'react-icons/io5';

const items: FeatureItem[] = [
  {
    title: 'Projekt logo dopasowany do archetypu marki',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Pełny branding: palety kolorów, typografie, style',
    icon: <IoColorPalette className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Spójne szablony do social mediów',
    icon: <RiStackLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Profesjonalna obróbka zdjęć i grafik pod www',
    icon: <RiImageLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Materiały video i rolki promocyjne',
    icon: <RiVideoLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Design materiałów drukowanych (wizytówki, ulotki, banery)',
    icon: <RiBrushLine className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Grafiki na ubrania i gadżety firmowe',
    icon: <RiShoppingBag3Line className="h-6 w-6 text-amber-500" />,
  },
  {
    title: 'Nowoczesne makiety UX/UI w Figmie',
    icon: <RiPaletteLine className="h-6 w-6 text-amber-500" />,
  },
];

export default function DesignFeatures() {
  return <FeatureGrid title="Co dostajesz" subtitle="Spójna identyfikacja wizualna dla Twojej marki" items={items} />;
}
