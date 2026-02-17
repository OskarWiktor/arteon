import LocaleLayout from '@/components/shared/LocaleLayout';

export default function AfLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="af">{children}</LocaleLayout>;
}
