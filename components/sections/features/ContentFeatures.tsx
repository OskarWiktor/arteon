import FeatureGrid, { FeatureItem } from '../FeatureGrid';
import { RiArticleLine, RiFileSearchLine, RiShareForwardLine, RiBookOpenLine, RiChatQuoteLine, RiPencilRuler2Line, RiTeamLine } from 'react-icons/ri';

import { IoSparkles } from 'react-icons/io5';

const items: FeatureItem[] = [
  {
    title: 'Treści pod SEO - widoczność w Google',
    icon: <RiFileSearchLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Redakcja treści sprzedażowych i marketingowych',
    icon: <RiArticleLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Język marki - spójny ton komunikacji',
    icon: <RiChatQuoteLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Content budujący emocje i transformację klienta',
    icon: <IoSparkles className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Artykuły i wpisy eksperckie na bloga',
    icon: <RiBookOpenLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Scenariusze do rolek i social mediów',
    icon: <RiShareForwardLine className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Opisy produktów przyjazne SEO i użytkownikowi',
    icon: <RiPencilRuler2Line className="h-6 w-6 text-indigo-800" />,
  },
  {
    title: 'Treści dopasowane do archetypu i wartości marki',
    icon: <RiTeamLine className="h-6 w-6 text-indigo-800" />,
  },
];

export default function ContentFeatures() {
  return <FeatureGrid title="Treści, które sprzedają i budują Twoją markę" subtitle="Co dostajesz" items={items} />;
}
