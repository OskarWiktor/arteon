import LocaleLayout from '@/components/shared/LocaleLayout';

export default function MsLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="ms">{children}</LocaleLayout>;
}
