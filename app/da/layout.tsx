import LocaleLayout from '@/components/shared/LocaleLayout';

export default function DaLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="da">{children}</LocaleLayout>;
}
