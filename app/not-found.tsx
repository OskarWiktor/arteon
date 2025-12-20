import Button from '@/components/ui/buttons/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4">Nie znaleziono strony</h1>
      <p className="text-light mb-2 text-6xl font-bold">404</p>
      <p className="mb-8 max-w-md text-lg leading-relaxed">Wygląda na to, że ten adres jest błędny albo strona została przeniesiona. Kliknij przycisk poniżej, aby wrócić na stronę główną.</p>
      <Button link="/" variant="dark">
        Wróć na stronę główną
      </Button>
    </div>
  );
}
