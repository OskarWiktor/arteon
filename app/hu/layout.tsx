import LocaleLayout from '@/components/shared/LocaleLayout';

export default function HuLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="hu">{children}</LocaleLayout>;
}
