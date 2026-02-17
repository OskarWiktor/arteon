import LocaleLayout from '@/components/shared/LocaleLayout';

export default function IdLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="id">{children}</LocaleLayout>;
}
