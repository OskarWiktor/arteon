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
    <section className="w-full px-4 md:px-6">
      <Wrapper className="flex flex-col">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Filtry:</h2>
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
