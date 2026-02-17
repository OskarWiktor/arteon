import LocaleLayout from '@/components/shared/LocaleLayout';

export default function HrLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="hr">{children}</LocaleLayout>;
}
