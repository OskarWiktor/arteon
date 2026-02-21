import LocaleLayout from '@/components/shared/LocaleLayout';

export default function BnLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="bn">{children}</LocaleLayout>;
}
