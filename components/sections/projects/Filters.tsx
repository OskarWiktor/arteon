'use client';

import Button from '../../ui/Button';
import Wrapper from '../../ui/Wrapper';

type Props = {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
};

const categories = ['strona', 'sklep', 'blog'];
const categoriesName = ['Strony', 'Sklepy', 'Blogi'];

export default function Filters({ selectedCategory, onSelectCategory }: Props) {
  return (
    <section className="mt-12 w-full px-4 md:mt-16 md:px-6 lg:mt-24 lg:px-0">
      <Wrapper className="flex flex-col">
        <h2 className="mb-4">Filtry:</h2>
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
      </Wrapper>
    </section>
  );
}
