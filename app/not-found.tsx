import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-6">404</h1>
      <h2 className="mb-4">Nie znaleziono strony</h2>
      <p className="max-w-md mb-8 text-lg leading-relaxed">
        Wygląda na to, że nie mamy strony o tym adresie.  
        Kliknij przycisk aby wrócić na stronę główną.
      </p>
      <Button
        link="/"
        variant="dark"
      >
        Wróć na stronę główną
      </Button>
    </div>
  );
}
