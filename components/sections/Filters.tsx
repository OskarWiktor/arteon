import StaggerChildren from '../animations/StaggerChildrenFlex';
import Button from '../ui/Button';
import Wrapper from '../ui/Wrapper';

export default function Filters() {
  return (
    <section className="mt-4 w-full px-4 md:px-8">
      <Wrapper className="flex flex-col">
        <h2 className="mb-4 text-2xl font-semibold md:text-3xl">Filtry:</h2>
        <StaggerChildren>
          <Button>Strony</Button>
          <Button>Sklepy</Button>
          <Button>Aplikacje</Button>
          <Button>Blogi</Button>
        </StaggerChildren>
      </Wrapper>
    </section>
  );
}
