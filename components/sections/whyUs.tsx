import Wrapper from '../ui/wrapper';

export default function WhyUs() {
  return (
    <Wrapper>
      <section className="mt-16 flex flex-col items-center md:flex-row">
        <div className="h-[300px] w-full bg-amber-600 md:w-1/2"></div>
        <div className="flex w-full flex-col items-center justify-center md:w-1/2">
          <h3 className="text-3xl font-semibold">Dlaczego Arteon?</h3>
          <ul className="mt-4 ml-5 list-disc">
            <li>Projekty, które przyciągają spojrzenie i kliknięcie</li>
            <li className="mt-1">SEO i UX w służbie Twojego celu</li>
            <li className="mt-1">Ręcznie szyte rozwiązania – bez szablonów</li>
            <li className="mt-1">Głębia, styl, skuteczność – to nasze DNA</li>
          </ul>
        </div>
      </section>
    </Wrapper>
  );
}
