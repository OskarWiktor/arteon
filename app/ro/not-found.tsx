import ButtonLink from '@/components/atoms/buttons/ButtonLink';
import { getDictionary } from '@/lib/i18n/get-dictionary';
import { flexCenterClasses } from '@/lib/ui-classes';
import { cn } from '@/lib/utils';

export default async function NotFound() {
  const dict = await getDictionary('ro');
  const t = dict.errorPages.notFound;

  return (
    <div className={cn('min-h-screen flex-col px-6 text-center', flexCenterClasses)}>
      <h1 className='mb-4'>{t.title}</h1>
      <p className='text-light mb-2 text-6xl font-bold'>{t.code}</p>
      <p className='mb-8 max-w-md text-lg leading-relaxed'>{t.description}</p>
      <ButtonLink href='/ro/instrumente' variant='accent'>
        {t.backHome}
      </ButtonLink>
    </div>
  );
}
