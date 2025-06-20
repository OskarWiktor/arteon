import { IconType } from 'react-icons';
import { SiNextdotjs, SiTailwindcss, SiWordpress, SiSass, SiReact, SiWebflow, SiVercel } from 'react-icons/si';
import Wrapper from '../ui/Wrapper';

interface TechStackItem {
  label: string;
  icon: IconType;
}

const techStackItems: TechStackItem[] = [
  { label: 'Next', icon: SiNextdotjs },
  { label: 'React', icon: SiReact },
  { label: 'Tailwind', icon: SiTailwindcss },
  { label: 'Sass', icon: SiSass },
  { label: 'Vercel', icon: SiVercel },
  { label: 'Webflow', icon: SiWebflow },
  { label: 'Wordpress', icon: SiWordpress },
];

export default function TechStack() {
  return (
    <Wrapper>
      <section className="mt-16 flex gap-10 overflow-hidden">
        {techStackItems.map(({ label, icon: Icon }) => (
          <div className="flex items-center" key={label}>
            <p className="pr-2 text-2xl">{label}</p>
            <Icon className="h-auto w-6" />
          </div>
        ))}
      </section>
    </Wrapper>
  );
}
