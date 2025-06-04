import Image from 'next/image';
import { IconType } from 'react-icons';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiWordpress,
  SiSass,
  SiReact,
  SiWebflow,
  SiVercel,
} from 'react-icons/si';

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
    <section className="mt-12 flex gap-10 overflow-hidden">
      {techStackItems.map(({ label, icon: Icon }) => (
        <div className='flex items-center' key={label}>
          <p className='text-2xl pr-2'>{label}</p>
          <Icon className='w-6 h-auto'/>
        </div>
      ))}
    </section>
  );
}
