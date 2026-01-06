import type { ReactNode } from 'react';
import Image from 'next/image';
import Wrapper from '../Wrapper';
import Button from '../buttons/Button';

interface BentoItem {
  title: string;
  description: string;
  icon: ReactNode;
  size: 'small' | 'medium' | 'large';
  backgroundImage?: string;
  btnLabel?: string;
  btnLink?: string;
}

interface SectionBentoProps {
  title?: string;
  items: BentoItem[];
}

export default function SectionBento({ title, items }: SectionBentoProps) {
  return (
    <section data-section="bento" aria-labelledby={title ? 'bento-title' : undefined}>
      <Wrapper>
        {title && (
          <h2 id="bento-title" className="h4 mb-6 reveal-animation">
            {title}
          </h2>
        )}

        <div className="grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item, index) => {
            const sizeClass =
              item.size === 'large'
                ? 'col-span-2 row-span-2'
                : item.size === 'medium'
                  ? 'col-span-2'
                  : '';

            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl p-6 ${sizeClass} ${
                  item.backgroundImage ? 'text-white' : 'surface-card-soft'
                }`}
              >
                {item.backgroundImage && (
                  <>
                    <Image
                      src={item.backgroundImage}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="(min-width:1024px) 50vw, 100vw"
                      aria-hidden="true"
                    />
                    <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
                  </>
                )}

                <div className="relative z-10">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${
                      item.backgroundImage ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    {item.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className={item.size === 'large' ? 'h4 mb-2' : 'h6 mb-1'}>{item.title}</h3>
                  <p className={`text-sm ${item.backgroundImage ? 'text-white/80' : 'text-light'}`}>
                    {item.description}
                  </p>
                  {item.btnLabel && item.btnLink && (
                    <Button
                      link={item.btnLink}
                      variant="accent"
                      size="small"
                      className="mt-3"
                    >
                      {item.btnLabel}
                    </Button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
}
