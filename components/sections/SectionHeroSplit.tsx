import Image from 'next/image';
import Wrapper from '../ui/Wrapper';
import ButtonGroup from '../ui/buttons/ButtonGroup';

interface SectionHeroSplitProps {
  subtitle?: string;
  title: string;
  description?: string;
  btnOne?: string;
  btnOneLink?: string;
  btnTwo?: string;
  btnTwoLink?: string;
  imageSrc: string;
  imageAlt: string;
}

export default function SectionHeroSplit({ subtitle, title, description, btnOne, btnOneLink, btnTwo, btnTwoLink, imageSrc, imageAlt }: SectionHeroSplitProps) {
  return (
    <section data-section="hero-split" aria-labelledby="hero-split-title">
      <Wrapper>
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
          <div className="w-full lg:w-1/2">
            {subtitle && <span className="text-light mb-4 block text-sm tracking-wider uppercase">{subtitle}</span>}
            <h1 id="hero-split-title" className="h2 mb-6">
              {title}
            </h1>
            {description && <p className="text-light mb-8">{description}</p>}
            <ButtonGroup btnOne={btnOne} btnOneLink={btnOneLink} btnTwo={btnTwo} btnTwoLink={btnTwoLink} spacing="loose" />
          </div>

          <div className="relative aspect-square w-full overflow-hidden rounded-2xl lg:w-1/2">
            <Image src={imageSrc} alt={imageAlt} fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" priority />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
