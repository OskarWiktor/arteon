import LocaleLayout from '@/components/shared/LocaleLayout';

export default function PtLayout({ children }: { children: React.ReactNode }) {
  return <LocaleLayout locale="pt">{children}</LocaleLayout>;
}
