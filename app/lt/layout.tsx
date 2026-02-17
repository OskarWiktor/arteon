import LocaleLayout from '@/components/shared/LocaleLayout';

export default function LtLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="lt">{children}</LocaleLayout>;
}
