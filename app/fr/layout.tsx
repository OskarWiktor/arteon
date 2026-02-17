import LocaleLayout from '@/components/shared/LocaleLayout';

export default function FrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="fr">{children}</LocaleLayout>;
}
