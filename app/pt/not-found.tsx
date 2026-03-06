import Button from '@/components/ui/buttons/Button';
import { getDictionary } from '@/lib/i18n/get-dictionary';

export default async function NotFound() {
  const dict = await getDictionary('pt');
  const t = dict.errorPages.notFound;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <h1 className="mb-4">{t.title}</h1>
      <p className="text-light mb-2 text-6xl font-bold">{t.code}</p>
      <p className="mb-8 max-w-md text-lg leading-relaxed">{t.description}</p>
      <Button link="/pt/ferramentas" variant="accent">
        {t.backHome}
      </Button>
    </div>
  );
}
