import LocaleLayout from '@/components/shared/LocaleLayout';

export default function ElLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="el">{children}</LocaleLayout>;
}
