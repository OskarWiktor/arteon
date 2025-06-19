import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

export default function Filters() {
  return (
    <section className="mt-4 w-full px-4 md:px-8">
      <Wrapper className="flex flex-col">
        <h2 className="mb-2 text-2xl">Filtry:</h2>
        <div className="flex gap-3 md:gap-4">
          <Button>Strony</Button>
          <Button>Sklepy</Button>
          <Button>Aplikacje</Button>
          <Button>Blogi</Button>
        </div>
      </Wrapper>
    </section>
  );
}
