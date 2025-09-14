import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiPencilRuler2Line, RiArticleLine, RiBrushLine, RiShieldCheckLine, RiDeviceLine, RiDatabase2Line, RiMoneyDollarCircleLine, RiShoppingCartLine, RiGlobalLine } from 'react-icons/ri';

import { IoAccessibility } from 'react-icons/io5';
import { GoLaw } from 'react-icons/go';

const items: FeatureItem[] = [
  {
    title: 'Indywidualny projekt graficzny sklepu',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Redakcja treści pod sprzedaż i SEO',
    icon: <RiArticleLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Deklaracja Dostępności (WCAG 2.1 AA)',
    icon: <IoAccessibility className="h-5 w-5 text-slate-500" />,
  },
  {
    title: 'Wsparcie prawne: polityki i regulaminy',
    icon: <GoLaw className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Profesjonalna obróbka zdjęć produktów',
    icon: <RiBrushLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Bezpieczeństwo płatności i certyfikaty SSL',
    icon: <RiShieldCheckLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Pełna responsywność na urządzeniach mobilnych',
    icon: <RiDeviceLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Łatwe zarządzanie produktami i treściami (CMS)',
    icon: <RiDatabase2Line className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Integracje płatności i systemów dostaw',
    icon: <RiMoneyDollarCircleLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Koszyk i proces zakupowy zoptymalizowany pod konwersję',
    icon: <RiShoppingCartLine className="h-6 w-6 text-slate-500" />,
  },
  {
    title: 'Sklep zgodny z przepisami na rynkach międzynarodowych',
    icon: <RiGlobalLine className="h-6 w-6 text-slate-500" />,
  },
];

export default function ShopFeatures() {
  return <FeatureGrid title="Twój sklep gotowy do sprzedaży" subtitle="Co zyskujesz" items={items} />;
}
