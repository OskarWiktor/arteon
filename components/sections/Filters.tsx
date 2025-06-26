'use client';

import StaggerChildren from '../animations/StaggerChildrenFlex';
import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

type Props = {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

const categories = ['strona', 'sklep', 'aplikacja', 'blog'];
const categoriesName = ['Strony', 'Sklepy', 'Aplikacje', 'Blogi'];

export default function Filters({ selectedCategory, onSelectCategory }: Props) {
  return (
    <section className="w-full mt-12 md:mt-16 lg:mt-24">
      <Wrapper className="flex flex-col">
        <h2 className="mb-4">Filtry:</h2>
        <StaggerChildren>
          <div className="flex flex-wrap gap-2">
            <Button variant={!selectedCategory ? 'accent' : 'normal'} onClick={() => onSelectCategory(null)}>
              Wszystkie
            </Button>
            {categories.map((category, index) => (
              <Button key={category} variant={selectedCategory === category ? 'accent' : 'normal'} onClick={() => onSelectCategory(category)}>
                {categoriesName[index]}
              </Button>
            ))}
          </div>
        </StaggerChildren>
      </Wrapper>
    </section>
  );
}
