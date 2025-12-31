import Button from '@/components/ui/buttons/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4">Nie znaleziono strony</h1>
      <p className="mb-2 text-6xl font-bold text-light">404</p>
      <p className="mb-8 max-w-md text-lg leading-relaxed">Wygląda na to, że nie mamy strony o tym adresie. Kliknij przycisk aby wrócić na stronę główną.</p>
      <Button link="/" variant="dark">
        Wróć na stronę główną
      </Button>
    </div>
  );
}


