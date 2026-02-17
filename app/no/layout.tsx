import LocaleLayout from '@/components/shared/LocaleLayout';

export default function NoLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="no">{children}</LocaleLayout>;
}
