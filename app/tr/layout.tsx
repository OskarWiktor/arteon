import LocaleLayout from '@/components/shared/LocaleLayout';

export default function TrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="tr">{children}</LocaleLayout>;
}
